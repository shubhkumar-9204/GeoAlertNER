/**
 * Leaflet GIS Interactive Mapping Engine for GeoAlertNER
 * Handles Risk Heatmaps, IoT Sensor Radar, Shelters, and Evacuation Routing Corridors.
 */

import { api } from './api.js?v=3';

function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function sanitizeUrl(url) {
  if (!url) return '';
  const clean = String(url).trim();
  if (/^(https?:\/\/|data:image\/)/i.test(clean)) {
    return clean.replace(/["'<>]/g, '');
  }
  return '';
}

class GeoAlertMap {
  constructor() {
    this.map = null;
    this.zoneLayerGroup = null;
    this.sensorLayerGroup = null;
    this.shelterLayerGroup = null;
    this.reportLayerGroup = null;
    this.evacuationLayerGroup = null;
    this.userLocationMarker = null;

    this.onShelterSelect = null;
    this.onOriginSelect = null;
    this.selectingOrigin = false;
    this.selectingRiskLocation = false;
    this.onRiskLocationSelect = null;
  }

  init(containerId = 'map-container') {
    if (this.map) return;

    if (typeof L === 'undefined') {
      console.warn('[Map] Leaflet (L) not yet loaded, retrying in 300ms...');
      setTimeout(() => this.init(containerId), 300);
      return;
    }

    const container = document.getElementById(containerId);
    if (!container) {
      console.warn(`[Map] Container element #${containerId} not found.`);
      return;
    }

    try {
      // Center on Guwahati / Shillong corridor (NER India)
      this.map = L.map(containerId, {
        center: [26.1445, 91.7800],
        zoom: 10,
        zoomControl: false
      });

      // Add zoom control top right
      L.control.zoom({ position: 'topright' }).addTo(this.map);

    // Use the public OpenStreetMap raster tile service as the sole base layer.
    // This avoids third-party styles that may return API-key-required placeholder tiles.
    const osmStandard = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      subdomains: 'abc',
      maxZoom: 19
    });
    osmStandard.addTo(this.map);

    // Layer groups for toggle & refresh
    this.zoneLayerGroup = L.layerGroup().addTo(this.map);
    this.sensorLayerGroup = L.layerGroup().addTo(this.map);
    this.shelterLayerGroup = L.layerGroup().addTo(this.map);
    this.reportLayerGroup = L.layerGroup().addTo(this.map);
    this.evacuationLayerGroup = L.layerGroup().addTo(this.map);

    // Map click handler for origin selection
    this.map.on('click', (e) => {
      if (this.selectingRiskLocation && this.onRiskLocationSelect) {
        this.setUserLocation(e.latlng.lat, e.latlng.lng);
        this.onRiskLocationSelect(e.latlng.lat, e.latlng.lng);
        this.selectingRiskLocation = false;
      } else if (this.selectingOrigin && this.onOriginSelect) {
        this.setUserLocation(e.latlng.lat, e.latlng.lng);
        this.onOriginSelect(e.latlng.lat, e.latlng.lng);
        this.selectingOrigin = false;
      }
    });

      // Initial load
      this.refreshAllLayers();
    } catch (e) {
      console.error('[Map] Map initialization error:', e);
    }
  }

  async refreshAllLayers() {
    await Promise.all([
      this.loadRiskZones(),
      this.loadSensors(),
      this.loadShelters(),
      this.loadCitizenReports()
    ]);
  }

  // --- 1. RISK MICRO-ZONES GEOJSON ---
  async loadRiskZones() {
    try {
      this.zoneLayerGroup.clearLayers();
      const geojson = await api.getRiskGeoJSON();

      if (!geojson || !geojson.features) return;

      L.geoJSON(geojson, {
        style: (feature) => {
          const score = feature.properties.risk_score || 0;
          let color = '#22c55e'; // Green
          let fillColor = '#22c55e';
          let fillOpacity = 0.25;

          if (score >= 70) {
            color = '#ef4444'; // Red
            fillColor = '#dc2626';
            fillOpacity = 0.45;
          } else if (score >= 45) {
            color = '#f97316'; // Orange
            fillColor = '#ea580c';
            fillOpacity = 0.35;
          } else if (score >= 25) {
            color = '#eab308'; // Yellow
            fillColor = '#ca8a04';
            fillOpacity = 0.30;
          }

          return {
            color: color,
            weight: 2.5,
            opacity: 0.9,
            fillColor: fillColor,
            fillOpacity: fillOpacity,
            dashArray: feature.properties.evacuation_advised ? '4, 4' : null
          };
        },
        onEachFeature: (feature, layer) => {
          const p = feature.properties;
          const levelClass = (p.risk_level || 'MODERATE').toLowerCase();

          const popupContent = `
            <div class="custom-map-popup">
              <div class="popup-header badge-${levelClass}">
                <span class="hazard-icon">${p.hazard_type === 'LANDSLIDE' ? '⚠️' : '🌊'}</span>
                <strong>${p.name}</strong>
              </div>
              <div class="popup-body">
                <div class="popup-stat-row">
                  <span>Risk Score:</span>
                  <strong class="text-${levelClass}">${p.risk_score}% (${p.risk_level})</strong>
                </div>
                <div class="popup-stat-row">
                  <span>Slope Angle:</span>
                  <span>${p.slope_angle}°</span>
                </div>
                <div class="popup-stat-row">
                  <span>24h Rainfall:</span>
                  <span>${p.rainfall_24h_mm} mm</span>
                </div>
                <div class="popup-stat-row">
                  <span>Soil Moisture:</span>
                  <span>${p.soil_moisture} m³/m³</span>
                </div>
                ${p.evacuation_advised ? '<div class="alert-banner-small">🚨 Evacuation Recommended</div>' : ''}
                <div class="popup-actions mt-2">
                  <button class="btn btn-sm btn-primary w-full" onclick="window.app.planFromZone(${p.id})">
                    🧭 Route Escape From Here
                  </button>
                </div>
              </div>
            </div>
          `;
          layer.bindPopup(popupContent, { maxWidth: 300 });
        }
      }).addTo(this.zoneLayerGroup);
    } catch (e) {
      console.error('[Map] Error loading risk zones:', e);
    }
  }

  // --- 2. IOT GROUND SENSORS ---
  async loadSensors() {
    try {
      this.sensorLayerGroup.clearLayers();
      const sensors = await api.getSensors();

      sensors.forEach(s => {
        const isTriggered = s.is_triggered;
        let iconSymbol = '📡';
        if (s.sensor_type === 'SOIL_MOISTURE') iconSymbol = '💧';
        else if (s.sensor_type === 'INCLINOMETER') iconSymbol = '📐';
        else if (s.sensor_type === 'RAIN_GAUGE') iconSymbol = '🌧️';
        else if (s.sensor_type === 'RIVER_STAGE') iconSymbol = '🌊';

        const markerHtml = `
          <div class="sensor-marker ${isTriggered
            ? 'triggered pulse-alarm' : 'normal'}">
            <span class="sensor-icon">${iconSymbol}</span>
            <span class="sensor-ping"></span>
          </div>
        `;

        const customIcon = L.divIcon({
          html: markerHtml,
          className: 'custom-div-icon',
          iconSize: [32, 32],
          iconAnchor: [16, 16]
        });

        const marker = L.marker([s.latitude, s.longitude], { icon: customIcon });

        const popupContent = `
          <div class="custom-map-popup">
            <div class="popup-header ${isTriggered ? 'bg-critical' : 'bg-normal'}">
              <span>${iconSymbol} <strong>${s.sensor_code}</strong></span>
              <span class="badge ${isTriggered ? 'badge-critical' : 'badge-low'}">${isTriggered ? 'TRIGGERED' : 'NORMAL'}</span>
            </div>
            <div class="popup-body">
              <p class="text-sm font-semibold">${s.name}</p>
              <div class="popup-stat-row">
                <span>Reading:</span>
                <strong class="${isTriggered ? 'text-red-400 font-bold' : ''}">${s.current_value} ${s.unit}</strong>
              </div>
              <div class="popup-stat-row">
                <span>Threshold:</span>
                <span>Warn: ${s.threshold_warning} | Crit: ${s.threshold_critical} ${s.unit}</span>
              </div>
              <div class="popup-stat-row">
                <span>Battery:</span>
                <span>🔋 ${s.battery_percentage}%</span>
              </div>
            </div>
          </div>
        `;

        marker.bindPopup(popupContent);
        marker.addTo(this.sensorLayerGroup);
      });
    } catch (e) {
      console.error('[Map] Error loading sensors:', e);
    }
  }

  // --- 3. SAFE SHELTERS & RELIEF CAMPS ---
  async loadShelters() {
    try {
      this.shelterLayerGroup.clearLayers();
      const shelters = await api.getShelters();

      shelters.forEach(sh => {
        const pct = sh.occupancy_pct || 0;
        let meterColor = '#22c55e';
        if (pct > 80) meterColor = '#ef4444';
        else if (pct > 50) meterColor = '#eab308';

        const shelterHtml = `
          <div class="shelter-marker">
            <span class="shelter-icon">🏠</span>
            <span class="shelter-badge">${Math.round(pct)}%</span>
          </div>
        `;

        const customIcon = L.divIcon({
          html: shelterHtml,
          className: 'custom-div-icon',
          iconSize: [36, 36],
          iconAnchor: [18, 18]
        });

        const marker = L.marker([sh.latitude, sh.longitude], { icon: customIcon });

        const popupContent = `
          <div class="custom-map-popup">
            <div class="popup-header bg-shelter">
              <span>🏠 <strong>${sh.name}</strong></span>
            </div>
            <div class="popup-body">
              <p class="text-xs text-slate-300 mb-2">${sh.address || `${sh.district}, ${sh.state}`}</p>
              
              <div class="capacity-bar-wrap mb-2">
                <div class="flex justify-between text-xs mb-1">
                  <span>Occupancy (${sh.capacity_occupied}/${sh.capacity_total})</span>
                  <strong>${sh.occupancy_pct}%</strong>
                </div>
                <div class="progress-bar-bg">
                  <div class="progress-bar-fill" style="width: ${sh.occupancy_pct}%; background-color: ${meterColor};"></div>
                </div>
              </div>

              <div class="amenities-pills flex flex-wrap gap-1 mb-2">
                ${sh.has_medical_aid ? '<span class="pill pill-green">🩺 Medical Aid</span>' : ''}
                ${sh.has_food_water ? '<span class="pill pill-blue">🍲 Food & Water</span>' : ''}
                ${sh.has_power_backup ? '<span class="pill pill-yellow">⚡ Power Gen</span>' : ''}
                ${sh.has_helipad_access ? '<span class="pill pill-purple">🚁 Helipad</span>' : ''}
              </div>

              <div class="popup-stat-row text-xs">
                <span>Contact:</span>
                <strong>${sh.contact_phone || '1070 (SDMA)'}</strong>
              </div>

              <div class="mt-2">
                <button class="btn btn-sm btn-outline-primary w-full" onclick="window.app.setTargetShelter(${sh.id}, '${sh.name.replace(/'/g, "\\'")}')">
                  🎯 Set as Target Shelter
                </button>
              </div>
            </div>
          </div>
        `;

        marker.bindPopup(popupContent);
        marker.addTo(this.shelterLayerGroup);
      });
    } catch (e) {
      console.error('[Map] Error loading shelters:', e);
    }
  }

  // --- 4. CITIZEN CROWD REPORTS ---
  async loadCitizenReports() {
    try {
      this.reportLayerGroup.clearLayers();
      const reports = await api.getReports();

      reports.forEach(r => {
        const isCritical = r.severity_rating >= 4;
        const markerHtml = `
          <div class="report-marker ${isCritical ? 'critical' : 'normal'}">
            <span>⚠️</span>
          </div>
        `;

        const customIcon = L.divIcon({
          html: markerHtml,
          className: 'custom-div-icon',
          iconSize: [28, 28],
          iconAnchor: [14, 14]
        });

        const marker = L.marker([r.latitude, r.longitude], { icon: customIcon });

        const popupContent = `
          <div class="custom-map-popup">
            <div class="popup-header bg-report">
              <span>⚠️ <strong>${escapeHtml(r.category ? r.category.replace('_', ' ') : 'Report')}</strong></span>
              <span class="badge badge-warning">Sev ${Number(r.severity_rating) || 1}/5</span>
            </div>
            <div class="popup-body">
              <p class="text-xs mb-2">${escapeHtml(r.description)}</p>
              ${sanitizeUrl(r.image_url) ? `<img src="${sanitizeUrl(r.image_url)}" class="popup-img mb-2" alt="Field Photo" />` : ''}
              <div class="popup-stat-row text-xs text-slate-400">
                <span>Reporter: ${escapeHtml(r.reporter_name || 'Citizen')}</span>
                <span>👍 ${Number(r.upvotes) || 0} upvotes</span>
              </div>
              <button class="btn btn-xs btn-outline-warning w-full mt-2" onclick="window.app.upvoteReport(${Number(r.id)})">
                👍 Upvote Verification
              </button>
            </div>
          </div>
        `;

        marker.bindPopup(popupContent);
        marker.addTo(this.reportLayerGroup);
      });
    } catch (e) {
      console.error('[Map] Error loading reports:', e);
    }
  }

  // --- 5. EVACUATION ROUTE RENDERING ---
  drawEvacuationRoute(plan) {
    this.evacuationLayerGroup.clearLayers();

    if (!plan) return;

    let coords = [];
    if (plan.route_geojson && plan.route_geojson.geometry && plan.route_geojson.geometry.coordinates) {
      // GeoJSON has [lon, lat], Leaflet polyline expects [lat, lon]
      coords = plan.route_geojson.geometry.coordinates.map(c => [c[1], c[0]]);
    } else if (plan.route_waypoints && plan.route_waypoints.length) {
      coords = plan.route_waypoints.map(w => [w.latitude, w.longitude]);
    } else if (plan.route_polyline_coordinates && plan.route_polyline_coordinates.length) {
      coords = plan.route_polyline_coordinates;
    }

    if (!coords || coords.length === 0) {
      return;
    }

    // Safety glow casing
    const glowLine = L.polyline(coords, {
      color: '#38bdf8',
      weight: 8,
      opacity: 0.45,
      lineCap: 'round'
    });

    // Core animated routing line
    const mainLine = L.polyline(coords, {
      color: '#0284c7',
      weight: 4,
      dashArray: '8, 8',
      className: 'evacuation-animated-path'
    });

    glowLine.addTo(this.evacuationLayerGroup);
    mainLine.addTo(this.evacuationLayerGroup);

    // Origin Marker (User Position)
    const originCoords = coords[0];
    const originIcon = L.divIcon({
      html: '<div class="evac-node-marker origin">📍</div>',
      className: 'custom-div-icon',
      iconSize: [32, 32],
      iconAnchor: [16, 28]
    });
    L.marker(originCoords, { icon: originIcon })
      .bindPopup('<strong>🏃 Starting Point</strong>')
      .addTo(this.evacuationLayerGroup);

    // Destination Shelter Marker
    const destCoords = coords[coords.length - 1];
    const destIcon = L.divIcon({
      html: '<div class="evac-node-marker destination">🏁</div>',
      className: 'custom-div-icon',
      iconSize: [32, 32],
      iconAnchor: [16, 28]
    });
    const destShelterName = plan.destination_shelter?.name || plan.target_shelter_name || 'Safe Shelter';
    L.marker(destCoords, { icon: destIcon })
      .bindPopup(`<strong>Safe Haven: ${destShelterName}</strong>`)
      .addTo(this.evacuationLayerGroup);

    // Fit map bounds to show full route
    this.map.fitBounds(mainLine.getBounds(), { padding: [40, 40] });
  }

  clearEvacuationRoute() {
    this.evacuationLayerGroup.clearLayers();
  }

  setUserLocation(lat, lon) {
    if (this.userLocationMarker) {
      this.userLocationMarker.setLatLng([lat, lon]);
    } else {
      const userIcon = L.divIcon({
        html: '<div class="user-loc-pulse">🔵</div>',
        className: 'custom-div-icon',
        iconSize: [24, 24],
        iconAnchor: [12, 12]
      });
      this.userLocationMarker = L.marker([lat, lon], { icon: userIcon }).addTo(this.map);
    }
  }

  centerOn(lat, lon, zoom = 13) {
    if (this.map) {
      this.map.flyTo([lat, lon], zoom, { duration: 1.2 });
    }
  }
}

export const geoMap = new GeoAlertMap();
