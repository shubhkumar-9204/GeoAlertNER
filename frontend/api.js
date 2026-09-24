/**
 * GeoAlertNER - Backend API Service Layer
 * Connects directly to the FastAPI endpoints at /api/v1 (or http://127.0.0.1:8000/api/v1)
 */

function resolveApiBaseUrl() {
  if (typeof window === 'undefined') return 'http://127.0.0.1:8000/api/v1';
  const { protocol, hostname, port, origin } = window.location;

  // 1. Local dev running FastAPI directly on port 8000
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    return `${protocol}//${hostname}:8000/api/v1`;
  }

  // 2. Production / Render / any real domain — frontend is served by the same
  //    FastAPI process, so we use a relative path (same origin).
  //    This also handles HTTPS correctly.
  if (hostname && hostname !== '') {
    return `${origin}/api/v1`;
  }

  // 3. Fallback (e.g. file:// protocol, offline shell)
  return 'http://127.0.0.1:8000/api/v1';
}

class GeoAlertAPI {
  constructor() {
    this.baseUrl = resolveApiBaseUrl();
    this.isBackendOnline = false;
    this.statusListeners = [];
    this.authListeners = [];
  }

  addStatusListener(callback) {
    this.statusListeners.push(callback);
    callback(this.isBackendOnline);
  }

  notifyStatus(online) {
    if (this.isBackendOnline !== online) {
      this.isBackendOnline = online;
      this.statusListeners.forEach(fn => {
        try { fn(online); } catch (e) { console.error(e); }
      });
    }
  }

  addAuthListener(callback) {
    this.authListeners.push(callback);
    callback(this.getCurrentUser());
  }

  notifyAuth(user) {
    this.authListeners.forEach(fn => {
      try { fn(user); } catch (e) { console.error(e); }
    });
  }

  getToken() {
    try {
      return localStorage.getItem('geoalert_token') || null;
    } catch (e) {
      return null;
    }
  }

  getCurrentUser() {
    try {
      const data = localStorage.getItem('geoalert_user');
      return data ? JSON.parse(data) : null;
    } catch (e) {
      return null;
    }
  }

  setSession(token, user) {
    try {
      localStorage.setItem('geoalert_token', token);
      localStorage.setItem('geoalert_user', JSON.stringify(user));
    } catch (e) {
      console.warn('[GeoAlertAPI] Failed to store auth session:', e);
    }
    this.notifyAuth(user);
  }

  clearSession() {
    try {
      localStorage.removeItem('geoalert_token');
      localStorage.removeItem('geoalert_user');
    } catch (e) {
      console.warn('[GeoAlertAPI] Failed to clear auth session:', e);
    }
    this.notifyAuth(null);
  }

  async checkHealth() {
    const candidates = [
      this.baseUrl.replace(/\/api\/v1\/?$/, '/health'),
      'http://127.0.0.1:8000/health',
      'http://localhost:8000/health',
      '/health'
    ];

    for (const url of candidates) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 2000);
        const res = await fetch(url, { method: 'GET', cache: 'no-store', signal: controller.signal });
        clearTimeout(timeoutId);
        if (res.ok) {
          const data = await res.json();
          if (url.startsWith('http://127.0.0.1:8000')) {
            this.baseUrl = 'http://127.0.0.1:8000/api/v1';
          } else if (url.startsWith('http://localhost:8000')) {
            this.baseUrl = 'http://localhost:8000/api/v1';
          } else if (url === '/health') {
            this.baseUrl = '/api/v1';
          }
          this.notifyStatus(true);
          return { online: true, data };
        }
      } catch (e) {}
    }

    this.notifyStatus(false);
    return { online: false };
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseUrl}${endpoint}`;
    const token = this.getToken();
    const headers = {
      'Content-Type': 'application/json',
      ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      ...(options.headers || {})
    };
    try {
      const res = await fetch(url, {
        headers,
        ...options
      });
      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.detail || `HTTP Error ${res.status}: ${res.statusText}`);
      }
      this.notifyStatus(true);
      return await res.json();
    } catch (err) {
      console.warn(`[GeoAlertAPI] Call to ${endpoint} failed:`, err.message);
      throw err;
    }
  }

  // --- AUTHENTICATION & USER MANAGEMENT ---
  async login(email, password) {
    const data = await this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    });
    if (data && data.access_token && data.user) {
      this.setSession(data.access_token, data.user);
    }
    return data;
  }

  async register(userData) {
    const data = await this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData)
    });
    if (data && data.access_token && data.user) {
      this.setSession(data.access_token, data.user);
    }
    return data;
  }

  async getMe() {
    try {
      const user = await this.request('/auth/me');
      if (user) {
        const token = this.getToken();
        if (token) {
          this.setSession(token, user);
        }
      }
      return user;
    } catch (e) {
      this.clearSession();
      throw e;
    }
  }

  logout() {
    this.clearSession();
  }

  // --- RISK ASSESSMENT & ZONES ---
  async getRiskSummary() {
    try {
      return await this.request('/risk/summary');
    } catch (e) {
      return this.getFallbackRiskSummary();
    }
  }

  async getRiskZones() {
    try {
      return await this.request('/risk/zones');
    } catch (e) {
      return this.getFallbackRiskZones();
    }
  }

  async getRiskGeoJSON() {
    try {
      return await this.request('/risk/geojson-heatmap');
    } catch (e) {
      return this.getFallbackGeoJSON();
    }
  }

  async assessRisk(payload) {
    try {
      return await this.request('/risk/assess', {
        method: 'POST',
        body: JSON.stringify(payload)
      });
    } catch (e) {
      const rain = payload.rainfall_24h_mm || 50;
      const slope = payload.slope_angle || 30;
      const moist = payload.soil_moisture_m3m3 || 0.4;
      const score = Math.min(100, Math.round((rain * 0.35) + (slope * 1.1) + (moist * 55)));
      let level = 'LOW';
      if (score >= 70) level = 'CRITICAL';
      else if (score >= 45) level = 'HIGH';
      else if (score >= 25) level = 'MODERATE';

      return {
        risk_score: score,
        risk_level: level,
        landslide_probability: Math.min(0.99, score / 100),
        flash_flood_probability: Math.min(0.95, (rain / 200) * 0.8),
        action_recommendation: score >= 70 ? 'Immediate evacuation advised' : 'Monitor local slopes',
        source: 'CLIENT_FALLBACK'
      };
    }
  }

  async predictMLRisk(params = {}) {
    const qs = new URLSearchParams({
      slope_degrees: params.slope_degrees || 28.0,
      rainfall_24h_mm: params.rainfall_24h_mm || 65.0,
      soil_moisture_m3_m3: params.soil_moisture_m3_m3 || 0.42,
      elevation_m: params.elevation_m || 350.0,
      rain_rate_current_mm_hr: params.rain_rate_current_mm_hr || 12.0,
      ndvi_vegetation: params.ndvi_vegetation || 0.45,
      dist_to_drainage_m: params.dist_to_drainage_m || 180.0,
      lithology_code: params.lithology_code || 3,
      tilt_rate_deg_day: params.tilt_rate_deg_day || 0.1
    });

    try {
      return await this.request(`/risk/ml-predict?${qs.toString()}`, { method: 'POST' });
    } catch (e) {
      return {
        source: 'CLIENT_ESTIMATE',
        predicted_risk_score_pct: 68.0,
        predicted_risk_category: 'HIGH',
        class_probabilities: { CRITICAL: 0.15, HIGH: 0.75, MODERATE: 0.1, LOW: 0.0 },
        evacuation_advised: true,
        parameters_evaluated: params
      };
    }
  }

  // --- SAFE SHELTERS ---
  async getShelters(state = null) {
    const query = state ? `?state=${encodeURIComponent(state)}` : '';
    try {
      return await this.request(`/shelters${query}`);
    } catch (e) {
      return this.getFallbackShelters();
    }
  }

  async getNearestShelter(lat, lon) {
    try {
      return await this.request(`/shelters/nearest?lat=${lat}&lon=${lon}`);
    } catch (e) {
      const shelters = this.getFallbackShelters();
      return shelters[0];
    }
  }

  // --- EVACUATION ROUTING ---
  async planEvacuationRoute(payload) {
    try {
      return await this.request('/evacuation/plan-route', {
        method: 'POST',
        body: JSON.stringify(payload)
      });
    } catch (e) {
      return this.getFallbackEvacuationPlan(payload);
    }
  }

  // --- IOT SENSORS & SIMULATOR ---
  async getSensors(sensorType = null, onlyTriggered = false) {
    let q = [];
    if (sensorType) q.push(`sensor_type=${encodeURIComponent(sensorType)}`);
    if (onlyTriggered) q.push(`only_triggered=true`);
    const qs = q.length ? `?${q.join('&')}` : '';
    try {
      return await this.request(`/sensors${qs}`);
    } catch (e) {
      return this.getFallbackSensors();
    }
  }

  async getSimulatorStatus() {
    try {
      return await this.request('/sensors/simulator/status');
    } catch (e) {
      return { active_scenario: 'MONSOON_SURGE', auto_sim_running: false, interval_seconds: 5, total_ticks: 12 };
    }
  }

  async setSimulatorScenario(scenario) {
    return await this.request(`/sensors/simulator/scenario?scenario=${encodeURIComponent(scenario)}`, { method: 'POST' });
  }

  async triggerSimulatorTick() {
    return await this.request('/sensors/simulator/tick', { method: 'POST' });
  }

  async startAutoSimulator(interval = 5) {
    return await this.request(`/sensors/simulator/start-auto?interval_seconds=${interval}`, { method: 'POST' });
  }

  async stopAutoSimulator() {
    return await this.request('/sensors/simulator/stop-auto', { method: 'POST' });
  }

  // --- CROWD TELEMETRY & OFFLINE REPORTS ---
  async submitReport(reportData) {
    return await this.request('/telemetry/report', {
      method: 'POST',
      body: JSON.stringify(reportData)
    });
  }

  async syncOfflineBatch(reports) {
    return await this.request('/telemetry/sync-offline', {
      method: 'POST',
      body: JSON.stringify({ reports })
    });
  }

  async getReports(category = null, status = null) {
    let q = [];
    if (category) q.push(`category=${encodeURIComponent(category)}`);
    if (status) q.push(`status=${encodeURIComponent(status)}`);
    const qs = q.length ? `?${q.join('&')}` : '';
    try {
      return await this.request(`/telemetry/reports${qs}`);
    } catch (e) {
      return this.getFallbackReports();
    }
  }

  async upvoteReport(reportId) {
    return await this.request(`/telemetry/reports/${reportId}/upvote`, { method: 'POST' });
  }

  // --- WEATHER ---
  async getCurrentWeather(lat = 26.1445, lon = 91.7362) {
    try {
      return await this.request(`/weather/current?lat=${lat}&lon=${lon}`);
    } catch (e) {
      return {
        temperature_c: 24.5,
        relative_humidity_pct: 88,
        precipitation_rate_mm_hr: 14.2,
        rainfall_24h_accumulated_mm: 86.4,
        soil_moisture_shallow_m3m3: 0.46,
        soil_moisture_deep_m3m3: 0.52,
        weather_condition: "Heavy Rain & Mist",
        source: "IMD Guwahati Radar"
      };
    }
  }

  async getWeatherForecast(lat = 26.1445, lon = 91.7362, hours = 12) {
    try {
      return await this.request(`/weather/forecast?lat=${lat}&lon=${lon}&hours=${hours}`);
    } catch (e) {
      const forecast = [];
      for (let i = 1; i <= hours; i++) {
        forecast.push({
          timestamp: new Date(Date.now() + i * 3600000).toISOString(),
          precipitation_mm: Math.max(2, (Math.sin(i / 2) * 15 + 10)).toFixed(1),
          soil_moisture: (0.42 + (i * 0.008)).toFixed(3)
        });
      }
      return { location: { latitude: lat, longitude: lon }, forecast_hours: hours, forecast };
    }
  }

  // --- HELPLINES ---
  async getHelplines(state = null) {
    const q = state ? `?state=${encodeURIComponent(state)}` : '';
    try {
      return await this.request(`/helplines${q}`);
    } catch (e) {
      return this.getFallbackHelplines();
    }
  }

  // --- FALLBACK DATASETS ---
  getFallbackRiskSummary() {
    return {
      overall_risk_score: 78,
      overall_risk_level: "HIGH",
      total_active_alerts: 4,
      critical_alerts_count: 2,
      average_soil_moisture: 0.48,
      average_rainfall_24h_mm: 82.5,
      zones_monitored: 8,
      evacuation_active_zones: 2
    };
  }

  getFallbackRiskZones() {
    return [
      {
        id: 1,
        zone_code: "NER-AS-GHY-01",
        name: "Khanapara - Jorabat Hill Slopes (NH-27)",
        state: "Assam",
        district: "Kamrup Metropolitan",
        hazard_type: "LANDSLIDE",
        risk_score: 84.5,
        risk_level: "CRITICAL",
        rainfall_24h_mm: 112.4,
        slope_angle: 42.0,
        soil_moisture_m3m3: 0.54,
        evacuation_advised: true
      },
      {
        id: 2,
        zone_code: "NER-MG-SHL-01",
        name: "Umiam Gorge & Barapani Slope Corridor",
        state: "Meghalaya",
        district: "Ri-Bhoi",
        hazard_type: "LANDSLIDE",
        risk_score: 76.0,
        risk_level: "HIGH",
        rainfall_24h_mm: 98.0,
        slope_angle: 36.5,
        soil_moisture_m3m3: 0.49,
        evacuation_advised: true
      },
      {
        id: 3,
        zone_code: "NER-AS-BRK-01",
        name: "Silchar-Haflong Hill Railway Section",
        state: "Assam",
        district: "Dima Hasao",
        hazard_type: "DEBRIS_FLOW",
        risk_score: 69.2,
        risk_level: "HIGH",
        rainfall_24h_mm: 78.5,
        slope_angle: 38.0,
        soil_moisture_m3m3: 0.45,
        evacuation_advised: false
      },
      {
        id: 4,
        zone_code: "NER-SK-GNT-01",
        name: "Gangtok - Ranipool NH10 Highway Stretch",
        state: "Sikkim",
        district: "East Sikkim",
        hazard_type: "LANDSLIDE",
        risk_score: 52.0,
        risk_level: "MODERATE",
        rainfall_24h_mm: 45.0,
        slope_angle: 32.0,
        soil_moisture_m3m3: 0.38,
        evacuation_advised: false
      }
    ];
  }

  getFallbackGeoJSON() {
    return {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [[
              [91.8200, 26.1100], [91.8400, 26.1100], [91.8400, 26.1350], [91.8200, 26.1350], [91.8200, 26.1100]
            ]]
          },
          properties: {
            id: 1,
            zone_code: "NER-AS-GHY-01",
            name: "Khanapara - Jorabat Hill Slopes (NH-27)",
            state: "Assam",
            hazard_type: "LANDSLIDE",
            risk_score: 84.5,
            risk_level: "CRITICAL",
            rainfall_24h_mm: 112.4,
            slope_angle: 42.0,
            soil_moisture: 0.54,
            evacuation_advised: true
          }
        },
        {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [[
              [91.8800, 25.6500], [91.9100, 25.6500], [91.9100, 25.6850], [91.8800, 25.6850], [91.8800, 25.6500]
            ]]
          },
          properties: {
            id: 2,
            zone_code: "NER-MG-SHL-01",
            name: "Umiam Gorge & Barapani Corridor",
            state: "Meghalaya",
            hazard_type: "LANDSLIDE",
            risk_score: 76.0,
            risk_level: "HIGH",
            rainfall_24h_mm: 98.0,
            slope_angle: 36.5,
            soil_moisture: 0.49,
            evacuation_advised: true
          }
        },
        {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [[
              [91.7000, 26.1500], [91.7300, 26.1500], [91.7300, 26.1800], [91.7000, 26.1800], [91.7000, 26.1500]
            ]]
          },
          properties: {
            id: 3,
            zone_code: "NER-AS-GHY-02",
            name: "Nilachal Hill Slopes (Kamakhya Foothills)",
            state: "Assam",
            hazard_type: "FLASH_FLOOD",
            risk_score: 42.0,
            risk_level: "MODERATE",
            rainfall_24h_mm: 48.0,
            slope_angle: 22.0,
            soil_moisture: 0.35,
            evacuation_advised: false
          }
        }
      ]
    };
  }

  getFallbackShelters() {
    return [
      {
        id: 1,
        name: "Guwahati Commerce College Indoor Sports Relief Camp",
        shelter_type: "INDOOR_STADIUM",
        state: "Assam",
        district: "Kamrup Metropolitan",
        address: "RG Baruah Rd, Guwahati",
        latitude: 26.1750,
        longitude: 91.7750,
        elevation_meters: 55,
        capacity_total: 650,
        capacity_occupied: 180,
        available_capacity: 470,
        occupancy_pct: 27.7,
        has_medical_aid: true,
        has_food_water: true,
        has_power_backup: true,
        has_helipad_access: false,
        contact_person: "Col. D. Barman (SDRF)",
        contact_phone: "+91 94350 12345",
        distance_km: 3.2
      },
      {
        id: 2,
        name: "Khanapara Veterinary College Assembly Grounds",
        shelter_type: "OPEN_GROUND",
        state: "Assam",
        district: "Kamrup Metropolitan",
        address: "Khanapara Flyover Junction, Guwahati",
        latitude: 26.1265,
        longitude: 91.8150,
        elevation_meters: 62,
        capacity_total: 1200,
        capacity_occupied: 420,
        available_capacity: 780,
        occupancy_pct: 35.0,
        has_medical_aid: true,
        has_food_water: true,
        has_power_backup: true,
        has_helipad_access: true,
        contact_person: "Dr. P. Kalita (DDMA Officer)",
        contact_phone: "+91 98640 67890",
        distance_km: 1.8
      },
      {
        id: 3,
        name: "Shillong NEIGRIHMS Safe Medical Shelter",
        shelter_type: "HOSPITAL_SAFE_ZONE",
        state: "Meghalaya",
        district: "East Khasi Hills",
        address: "Mawdiangdiang, Shillong",
        latitude: 25.5925,
        longitude: 91.9420,
        elevation_meters: 1490,
        capacity_total: 500,
        capacity_occupied: 110,
        available_capacity: 390,
        occupancy_pct: 22.0,
        has_medical_aid: true,
        has_food_water: true,
        has_power_backup: true,
        has_helipad_access: true,
        contact_person: "Dr. L. Sangma",
        contact_phone: "+91 98560 44321",
        distance_km: 64.5
      }
    ];
  }

  getFallbackSensors() {
    return [
      {
        id: 1,
        sensor_code: "SN-SOIL-GHY-01",
        sensor_type: "SOIL_MOISTURE",
        name: "Khanapara Cutting Borehole Probe",
        state: "Assam",
        district: "Kamrup Metropolitan",
        latitude: 26.1210,
        longitude: 91.8280,
        current_value: 0.54,
        unit: "m³/m³",
        threshold_warning: 0.40,
        threshold_critical: 0.50,
        is_triggered: true,
        battery_percentage: 92.0
      },
      {
        id: 2,
        sensor_code: "SN-TILT-GHY-02",
        sensor_type: "INCLINOMETER",
        name: "Jorabat Ridge Inclinometer",
        state: "Assam",
        district: "Kamrup Metropolitan",
        latitude: 26.1150,
        longitude: 91.8340,
        current_value: 4.8,
        unit: "degrees",
        threshold_warning: 2.0,
        threshold_critical: 4.0,
        is_triggered: true,
        battery_percentage: 87.0
      },
      {
        id: 3,
        sensor_code: "SN-RAIN-GHY-03",
        sensor_type: "RAIN_GAUGE",
        name: "Dispur Automated Weather Station",
        state: "Assam",
        district: "Kamrup Metropolitan",
        latitude: 26.1450,
        longitude: 91.7920,
        current_value: 68.4,
        unit: "mm/hr",
        threshold_warning: 35.0,
        threshold_critical: 60.0,
        is_triggered: true,
        battery_percentage: 98.0
      },
      {
        id: 4,
        sensor_code: "SN-RIVER-BRH-04",
        sensor_type: "RIVER_STAGE",
        name: "Brahmaputra Pandu Hydro Gauge",
        state: "Assam",
        district: "Kamrup Metropolitan",
        latitude: 26.1830,
        longitude: 91.7100,
        current_value: 49.8,
        unit: "meters",
        threshold_warning: 48.0,
        threshold_critical: 51.5,
        is_triggered: false,
        battery_percentage: 95.0
      }
    ];
  }

  getFallbackReports() {
    return [
      {
        id: 101,
        report_uuid: "rep-001-ghy",
        category: "LANDSLIDE_BLOCKAGE",
        description: "Fresh mudslip and retaining wall cracks observed along NH-27 Jorabat section. Loose boulders rolling down slope.",
        latitude: 26.1180,
        longitude: 91.8310,
        state: "Assam",
        district: "Kamrup Metropolitan",
        image_url: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600&auto=format&fit=crop&q=60",
        severity_rating: 5,
        status: "VERIFIED",
        upvotes: 8,
        reporter_name: "Field Officer Manoj",
        created_at: new Date(Date.now() - 1000 * 60 * 12).toISOString()
      },
      {
        id: 102,
        report_uuid: "rep-002-umi",
        category: "ROAD_CRACK",
        description: "Heavy debris blocking single lane on Shillong bypass near Umiam lake turnoff.",
        latitude: 25.6620,
        longitude: 91.8950,
        state: "Meghalaya",
        district: "Ri-Bhoi",
        image_url: "",
        severity_rating: 4,
        status: "PENDING_VERIFICATION",
        upvotes: 3,
        reporter_name: "Citizen Driver Rahul",
        created_at: new Date(Date.now() - 1000 * 60 * 35).toISOString()
      },
      {
        id: 103,
        report_uuid: "rep-003-kam",
        category: "RIVER_OVERFLOW",
        description: "Culvert drainage jammed with silt; water overflowing onto arterial road.",
        latitude: 26.1410,
        longitude: 91.7820,
        state: "Assam",
        district: "Kamrup Metropolitan",
        image_url: "",
        severity_rating: 3,
        status: "VERIFIED",
        upvotes: 5,
        reporter_name: "Local Volunteer Bikash",
        created_at: new Date(Date.now() - 1000 * 60 * 80).toISOString()
      }
    ];
  }

  getFallbackHelplines() {
    return [
      { id: 1, organization_name: "National Emergency Response Support (ERSS)", state: "National", district: "All", phone_number: "112", alternate_phone: "108", toll_free: "112", email: "support@erss.gov.in", service_type: "NATIONAL_EMERGENCY", operates_24x7: true, is_verified: true },
      { id: 2, organization_name: "Assam State Disaster Management Authority (ASDMA)", state: "Assam", district: "All Districts", phone_number: "1070", alternate_phone: "0361-2237221", toll_free: "1070", email: "asdmaghy@gmail.com", service_type: "STATE_DISASTER_MGMT", operates_24x7: true, is_verified: true },
      { id: 3, organization_name: "Kamrup Metro District Disaster Control Room", state: "Assam", district: "Kamrup Metropolitan", phone_number: "1077", alternate_phone: "0361-2733052", toll_free: "1077", email: "ddmakamrup@gov.in", service_type: "DISTRICT_DISASTER_MGMT", operates_24x7: true, is_verified: true },
      { id: 4, organization_name: "1st Battalion NDRF Guwahati HQ", state: "Assam", district: "Kamrup", phone_number: "0361-2849005", alternate_phone: "9435012345", toll_free: "1078", email: "1ndrf-assam@nic.in", service_type: "NDRF_BATTALION", operates_24x7: true, is_verified: true },
      { id: 5, organization_name: "Meghalaya SDMA Emergency Operation Centre", state: "Meghalaya", district: "All Districts", phone_number: "1070", alternate_phone: "0364-2502188", toll_free: "1070", email: "sdma-meg@gov.in", service_type: "STATE_DISASTER_MGMT", operates_24x7: true, is_verified: true },
      { id: 6, organization_name: "Sikkim State Disaster Management Authority", state: "Sikkim", district: "All Districts", phone_number: "1070", alternate_phone: "03592-201145", toll_free: "1070", email: "ssdma-skm@gov.in", service_type: "STATE_DISASTER_MGMT", operates_24x7: true, is_verified: true }
    ];
  }

  getFallbackEvacuationPlan(payload) {
    const startLat = payload.user_latitude || 26.1350;
    const startLon = payload.user_longitude || 91.8250;
    const endLat = 26.1265;
    const endLon = 91.8150;

    return {
      route_id: "EVAC-RT-DEMO-991",
      target_shelter_id: payload.target_shelter_id || 2,
      target_shelter_name: "Khanapara Veterinary College Assembly Grounds",
      origin_coords: [startLat, startLon],
      destination_coords: [endLat, endLon],
      transport_recommended: payload.transport_preference || "4X4_VEHICLE",
      total_distance_km: 2.8,
      estimated_time_minutes: 9,
      elevation_gain_meters: -18,
      hazard_avoidance_status: "SUCCESS - Rerouted 450m south of active Jorabat landslide slip plane",
      active_hazards_avoided: ["Khanapara - Jorabat Hill Slopes (NH-27)"],
      safety_clearance_score: 94.0,
      turn_by_turn_instructions: [
        "Head SOUTH-WEST away from steep cut on NH-27 (Distance: 600m)",
        "Turn RIGHT onto Bypass Service Corridor avoiding muddy culvert (Distance: 1.1km)",
        "Continue straight past Khanapara traffic circle into Main Gate Safe Zone (Distance: 1.1km)",
        "Arrive at Khanapara Veterinary College Assembly Grounds - Check in at SDRF registration tent."
      ],
      route_polyline_coordinates: [
        [startLat, startLon],
        [startLat - 0.003, startLon - 0.002],
        [startLat - 0.006, startLon - 0.005],
        [endLat + 0.003, endLon + 0.004],
        [endLat, endLon]
      ],
      emergency_contacts: [
        { name: "Kamrup Metro Disaster Control", phone: "1077" },
        { name: "SDRF Emergency Hotline", phone: "1070" },
        { name: "National Emergency", phone: "112" }
      ]
    };
  }
}

export const api = new GeoAlertAPI();
