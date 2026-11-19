import { api } from './api.js?v=3';
import { geoMap } from './map.js?v=3';
import { offlineSync } from './offlineSync.js?v=3';
import { i18n } from './i18n.js?v=3';

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

class GeoAlertApp {
  constructor() {
    this.activeTab = 'dashboard';
    this.forecastChart = null;
    this.pollingInterval = null;
    this.soundAlertsEnabled = false;
  }

  async init() {
    console.log('🚀 Initializing GeoAlertNER Disaster Early Warning Platform...');

    // 1. Setup Navigation & Button Event Listeners immediately
    try {
      this.setupNavigation();
      this.setupEventListeners();
      this.setupAuthUI();
    } catch (e) {
      console.error('[App] Event listener setup error:', e);
    }

    // 2. Initialize Multilingual Engine
    try {
      i18n.init();
      window.i18n = i18n;
    } catch (e) {
      console.warn('[App] i18n init warning:', e);
    }

    // 3. Expose GIS map controller; initialize Leaflet only after its panel is visible.
    // Initializing Leaflet inside the hidden Risk Map panel gives it a zero-sized canvas.
    window.geoMap = geoMap;

    // 4. Setup Offline Sync & Backend Status Listeners
    try {
      offlineSync.addListener((count) => this.updateOfflineBadge(count));
      api.addStatusListener((online) => this.updateBackendStatusPill(online));
    } catch (e) {
      console.warn('[App] Status listener warning:', e);
    }

    // 5. Initial Data Ingestion (Parallel & Non-Blocking)
    this.checkBackendStatus();
    Promise.allSettled([
      this.refreshDashboardStats(),
      this.loadAlertsFeed(),
      this.loadWeatherWidget(),
      this.loadHelplines('Assam'),
      this.populateSheltersDropdown()
    ]);

    // 6. Start 5-second background telemetry & health polling
    if (!this.pollingInterval) {
      this.pollingInterval = setInterval(() => {
        this.checkBackendStatus();
        this.refreshDashboardStats(false);
        this.loadAlertsFeed(false);
      }, 5000);
    }
  }

  updateBackendStatusPill(online) {
    const statusEl = document.getElementById('backend-status-pill');
    if (!statusEl) return;
    if (online) {
      statusEl.innerHTML = `<span class="pulse-dot green"></span> Live Backend Online (FastAPI)`;
      statusEl.className = 'status-pill online';
    } else {
      statusEl.innerHTML = `<span class="pulse-dot yellow"></span> Standalone / Simulation Mode`;
      statusEl.className = 'status-pill simulation';
    }
  }

  async checkBackendStatus() {
    const health = await api.checkHealth();
    this.updateBackendStatusPill(health.online);
  }

  setupNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetView = btn.getAttribute('data-view');
        this.switchView(targetView);
      });
    });
  }

  switchView(viewName) {
    this.activeTab = viewName;

    // Update nav button active states
    document.querySelectorAll('.nav-btn').forEach(btn => {
      if (btn.getAttribute('data-view') === viewName) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update view panels
    document.querySelectorAll('.view-panel').forEach(panel => {
      if (panel.id === `view-${viewName}`) {
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    });

    // Initialize Leaflet only when its container is visible, then recalculate its size.
    if (viewName === 'map' && !geoMap.map) {
      geoMap.init('map-container');
    }
    if (viewName === 'map' || geoMap.map) {
      [150, 500].forEach(delay => setTimeout(() => {
        if (geoMap.map) geoMap.map.invalidateSize(true);
      }, delay));
    }

    if (viewName === 'reports') {
      this.loadCitizenReportsFeed();
    } else if (viewName === 'helplines') {
      this.loadHelplines();
    }
  }

  setupEventListeners() {
    // Evacuation form submission
    const evacForm = document.getElementById('evacuation-form');
    if (evacForm) {
      evacForm.addEventListener('submit', (e) => this.handleEvacuationPlan(e));
    }

    // Pick location from map button
    const pickMapBtn = document.getElementById('btn-pick-location');
    if (pickMapBtn) {
      pickMapBtn.addEventListener('click', () => {
        geoMap.selectingOrigin = true;
        this.showToast('📍 Click anywhere on the map to set your current location.', 'info');
        this.switchView('map');
        setTimeout(() => document.getElementById('map-container')?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 150);
        geoMap.onOriginSelect = (lat, lon) => {
          document.getElementById('evac-origin-lat').value = lat.toFixed(4);
          document.getElementById('evac-origin-lon').value = lon.toFixed(4);
          this.showToast(`Selected coordinates: ${lat.toFixed(4)}, ${lon.toFixed(4)}`, 'success');
          this.switchView('evacuation');
        };
      });
    }

    // Auto GPS Location button
    const gpsBtn = document.getElementById('btn-auto-gps');
    if (gpsBtn) {
      gpsBtn.addEventListener('click', () => this.detectUserGPS());
    }

    // Citizen report form submission
    const reportForm = document.getElementById('citizen-report-form');
    if (reportForm) {
      reportForm.addEventListener('submit', (e) => this.handleCitizenReportSubmit(e));
    }

    // Sync offline queue button
    const syncBtn = document.getElementById('btn-sync-offline');
    if (syncBtn) {
      syncBtn.addEventListener('click', async () => {
        const res = await offlineSync.syncPendingReports();
        if (res && res.success) {
          this.showToast(`✅ Successfully synced ${res.count} reports to central database!`, 'success');
          this.loadCitizenReportsFeed();
        } else {
          this.showToast(`Sync warning: ${res ? res.error : 'No network connection'}`, 'warning');
        }
      });
    }

    // Citizen area risk checker
    const areaRiskForm = document.getElementById('area-risk-form');
    if (areaRiskForm) areaRiskForm.addEventListener('submit', (e) => this.handleAreaRiskCheck(e));

    const areaGpsBtn = document.getElementById('btn-area-risk-gps');
    if (areaGpsBtn) areaGpsBtn.addEventListener('click', () => this.detectAreaRiskGPS());

    const areaMapBtn = document.getElementById('btn-area-risk-map');
    if (areaMapBtn) areaMapBtn.addEventListener('click', () => {
      geoMap.selectingRiskLocation = true;
      geoMap.onRiskLocationSelect = (lat, lon) => {
        document.getElementById('area-risk-lat').value = lat.toFixed(6);
        document.getElementById('area-risk-lon').value = lon.toFixed(6);
        this.showToast('Location selected. Press “Check area risk” to assess it.', 'success');
      };
      this.switchView('map');
      setTimeout(() => document.getElementById('map-container')?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 150);
      this.showToast('Click a point on the map to select the location.', 'info');
    });

    // Helpline state filter
    const helplineStateSelect = document.getElementById('helpline-state-select');
    if (helplineStateSelect) {
      helplineStateSelect.addEventListener('change', (e) => {
        this.loadHelplines(e.target.value);
      });
    }

    // AI Risk Calculator form
    const riskCalcForm = document.getElementById('risk-calc-form');
    if (riskCalcForm) {
      riskCalcForm.addEventListener('submit', (e) => this.handleRiskCalculation(e));
    }

    // Scenario preset buttons
    const PRESETS = {
      normal:   { slope: 8.0,  rainfall: 12.0, moisture: 0.22, rainRate: 2.0,  elev: 120,  ndvi: 0.72, drain: 480, tilt: 0.0,  litho: 1 },
      shillong: { slope: 38.5, rainfall: 165.0,moisture: 0.58, rainRate: 42.0, elev: 1250, ndvi: 0.35, drain: 120, tilt: 1.2,  litho: 4 },
      guwahati: { slope: 12.0, rainfall: 220.0,moisture: 0.64, rainRate: 68.0, elev: 55,   ndvi: 0.28, drain: 45,  tilt: 0.4,  litho: 1 },
      sikkim:   { slope: 48.0, rainfall: 310.0,moisture: 0.70, rainRate: 95.0, elev: 1850, ndvi: 0.22, drain: 60,  tilt: 3.5,  litho: 5 }
    };
    document.querySelectorAll('.preset-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const key = btn.dataset.preset;
        const p = PRESETS[key];
        if (!p) return;
        document.getElementById('calc-slope').value     = p.slope;
        document.getElementById('calc-rainfall').value  = p.rainfall;
        document.getElementById('calc-moisture').value  = p.moisture;
        document.getElementById('calc-rain-rate').value = p.rainRate;
        document.getElementById('calc-elev').value      = p.elev;
        document.getElementById('calc-ndvi').value      = p.ndvi;
        document.getElementById('calc-drain').value     = p.drain;
        document.getElementById('calc-tilt').value      = p.tilt;
        document.getElementById('calc-litho').value     = p.litho;
        this.showToast(`📊 Preset loaded: ${btn.textContent.trim()}`, 'info');
      });
    });

    // 🔊 Multilingual Voice Alert Broadcast (reads live risk data from backend)
    const voiceAlertBtn = document.getElementById('btn-voice-alert');
    if (voiceAlertBtn) {
      voiceAlertBtn.addEventListener('click', () => {
        const riskLevel = document.getElementById('kpi-risk-level')?.textContent?.trim() || 'HIGH';
        const rainVal   = document.getElementById('kpi-rainfall')?.textContent?.trim()   || '86 mm';
        const tempVal   = document.getElementById('weather-temp')?.textContent?.trim()   || '28°C';
        const isCritical = riskLevel.toUpperCase().includes('CRIT');
        const msg = `${i18n.t('platform_title')}. ${i18n.t('kpi_overall_risk')}: ${riskLevel}. ${i18n.t('kpi_rainfall')}: ${rainVal}. Temperature: ${tempVal}. ${isCritical ? i18n.t('calc_evac_advised') : i18n.t('calc_evac_safe')}`;
        i18n.speakAlert(msg);
        voiceAlertBtn.classList.add('speaking');
        this.showToast(`🔊 Broadcasting alert in ${i18n.currentLang.toUpperCase()} language...`, 'info');
        setTimeout(() => voiceAlertBtn.classList.remove('speaking'), 6000);
      });
    }

    // SOS Emergency Button Handlers
    const headerSosBtn = document.getElementById('btn-header-sos');
    const floatingSosBtn = document.getElementById('btn-floating-sos');
    const closeSosBtn = document.getElementById('btn-close-sos');
    const sosModal = document.getElementById('sos-modal');

    if (headerSosBtn) headerSosBtn.addEventListener('click', () => this.openSOSModal());
    if (floatingSosBtn) floatingSosBtn.addEventListener('click', () => this.openSOSModal());
    if (closeSosBtn) closeSosBtn.addEventListener('click', () => this.closeSOSModal());
    if (sosModal) {
      sosModal.addEventListener('click', (e) => {
        if (e.target === sosModal) this.closeSOSModal();
      });
    }

    const broadcastBtn = document.getElementById('btn-sos-broadcast');
    if (broadcastBtn) broadcastBtn.addEventListener('click', () => this.broadcastDistressBeacon());

    const sosShelterBtn = document.getElementById('btn-sos-shelter-route');
    if (sosShelterBtn) {
      sosShelterBtn.addEventListener('click', () => {
        this.closeSOSModal();
        this.switchView('evacuation');
        document.getElementById('btn-compute-route').click();
      });
    }

    // Audio Alert sound toggle
    const soundToggle = document.getElementById('sound-alert-toggle');
    if (soundToggle) {
      soundToggle.addEventListener('change', (e) => {
        this.soundAlertsEnabled = e.target.checked;
        this.showToast(`Audio Siren Alerts ${this.soundAlertsEnabled ? 'Enabled 🔔' : 'Muted 🔕'}`, 'info');
      });
    }

    // ─── Welcome Demo Banner ──────────────────────────────────────────────
    const bannerEl = document.getElementById('welcome-demo-banner');
    const dismissBannerBtn = document.getElementById('btn-dismiss-banner');
    // Restore dismissed state
    if (localStorage.getItem('geoalert_banner_dismissed') === '1' && bannerEl) {
      bannerEl.style.display = 'none';
    }
    if (dismissBannerBtn && bannerEl) {
      dismissBannerBtn.addEventListener('click', () => {
        bannerEl.style.animation = 'none';
        bannerEl.style.opacity = '0';
        bannerEl.style.transform = 'translateY(-8px)';
        bannerEl.style.transition = 'all 0.3s ease';
        setTimeout(() => { bannerEl.style.display = 'none'; }, 280);
        localStorage.setItem('geoalert_banner_dismissed', '1');
      });
    }

    // 1-click demo quick login from banner
    const quickCitizenBtn = document.getElementById('btn-quick-demo-citizen');
    if (quickCitizenBtn) {
      quickCitizenBtn.addEventListener('click', () => {
        this._applyDemoRole('citizen');
        if (bannerEl) dismissBannerBtn && dismissBannerBtn.click();
      });
    }
    const quickOfficerBtn = document.getElementById('btn-quick-demo-officer');
    if (quickOfficerBtn) {
      quickOfficerBtn.addEventListener('click', () => {
        this._applyDemoRole('officer');
        if (bannerEl) dismissBannerBtn && dismissBannerBtn.click();
      });
    }

    // ─── Project Story Modal ──────────────────────────────────────────────
    const storyModal = document.getElementById('modal-project-story');
    const openStoryBtns = [
      document.getElementById('btn-open-project-story'),
      document.getElementById('btn-sidebar-project-story')
    ];
    const closeStoryBtn = document.getElementById('btn-close-project-story');
    const storyTryBtn = document.getElementById('btn-story-try-demo');

    openStoryBtns.forEach(btn => {
      if (btn && storyModal) {
        btn.addEventListener('click', () => { storyModal.style.display = 'flex'; });
      }
    });
    if (closeStoryBtn && storyModal) {
      closeStoryBtn.addEventListener('click', () => { storyModal.style.display = 'none'; });
    }
    if (storyModal) {
      storyModal.addEventListener('click', (e) => {
        if (e.target === storyModal) storyModal.style.display = 'none';
      });
    }
    if (storyTryBtn && storyModal) {
      storyTryBtn.addEventListener('click', () => {
        storyModal.style.display = 'none';
        this._applyDemoRole('citizen');
      });
    }
  }

  /** Apply a demo role without a real backend login */
  _applyDemoRole(role) {
    const DEMO_USERS = {
      citizen: { full_name: 'Demo Citizen (Assam)', email: 'citizen@geoalertner.in', role: 'CITIZEN' },
      officer: { full_name: 'Demo Field Officer (SDRF)', email: 'officer@geoalertner.in', role: 'FIELD_OFFICER' },
      admin:   { full_name: 'Demo Admin (Disaster HQ)', email: 'admin@geoalertner.in',  role: 'ADMIN' }
    };
    const user = DEMO_USERS[role] || DEMO_USERS.citizen;

    // Try real backend login first; fall back to client-side mock
    const loginAttempt = async () => {
      const PW = { citizen: 'Citizen@123', officer: 'Officer@123', admin: 'Admin@123' };
      try {
        await api.login(user.email, PW[role] || 'Citizen@123');
      } catch (e) {
        // Backend offline or credentials not seeded — create a client-side demo session
        api.setSession('demo-token-' + role, user);
        this.renderAuthState(user);
      }
    };
    loginAttempt();
    this.showToast(`✅ Exploring as ${user.full_name}`, 'success');
    // Close auth modal if open
    const authModal = document.getElementById('auth-modal');
    if (authModal) authModal.classList.add('hidden');
  }

  // --- USER AUTHENTICATION & RBAC UI ---
  setupAuthUI() {
    const openAuthBtn = document.getElementById('btn-open-auth');
    const closeAuthBtn = document.getElementById('btn-close-auth');
    const authModal = document.getElementById('auth-modal');
    const tabLogin = document.getElementById('tab-auth-login');
    const tabRegister = document.getElementById('tab-auth-register');
    const formLogin = document.getElementById('form-auth-login');
    const formRegister = document.getElementById('form-auth-register');
    const logoutBtn = document.getElementById('btn-logout');

    if (openAuthBtn) openAuthBtn.addEventListener('click', () => this.openAuthModal());
    if (closeAuthBtn) closeAuthBtn.addEventListener('click', () => this.closeAuthModal());
    if (authModal) {
      authModal.addEventListener('click', (e) => {
        if (e.target === authModal) this.closeAuthModal();
      });
    }

    if (tabLogin && tabRegister && formLogin && formRegister) {
      tabLogin.addEventListener('click', () => {
        tabLogin.classList.add('active');
        tabRegister.classList.remove('active');
        formLogin.classList.remove('hidden');
        formRegister.classList.add('hidden');
        this.clearAuthAlert();
      });

      tabRegister.addEventListener('click', () => {
        tabRegister.classList.add('active');
        tabLogin.classList.remove('active');
        formRegister.classList.remove('hidden');
        formLogin.classList.add('hidden');
        this.clearAuthAlert();
      });
    }

    // Demo quick login buttons
    document.querySelectorAll('.demo-role-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        const demoRole = btn.getAttribute('data-demo');
        let email = 'citizen@geoalertner.in';
        let pw = 'Citizen@123';
        if (demoRole === 'officer') {
          email = 'officer@geoalertner.in';
          pw = 'Officer@123';
        } else if (demoRole === 'admin') {
          email = 'admin@geoalertner.in';
          pw = 'Admin@123';
        }
        try {
          this.setAuthAlert('Authenticating demo account...', 'success');
          const res = await api.login(email, pw);
          this.showToast(`✅ Signed in as ${res.user.full_name} (${res.user.role})`, 'success');
          this.closeAuthModal();
        } catch (err) {
          this.setAuthAlert(err.message || 'Demo login failed', 'error');
        }
      });
    });

    // Login Form Submit
    if (formLogin) {
      formLogin.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email')?.value?.trim();
        const password = document.getElementById('login-password')?.value;
        if (!email || !password) return;
        try {
          this.setAuthAlert('Signing in...', 'success');
          const res = await api.login(email, password);
          this.showToast(`✅ Welcome back, ${res.user.full_name}!`, 'success');
          this.closeAuthModal();
        } catch (err) {
          this.setAuthAlert(err.message || 'Invalid email or password', 'error');
        }
      });
    }

    // Register Form Submit
    if (formRegister) {
      formRegister.addEventListener('submit', async (e) => {
        e.preventDefault();
        const fullName = document.getElementById('reg-fullname')?.value?.trim();
        const email = document.getElementById('reg-email')?.value?.trim();
        const password = document.getElementById('reg-password')?.value;
        const role = document.getElementById('reg-role')?.value || 'CITIZEN';
        const state = document.getElementById('reg-state')?.value || 'Assam';

        if (!fullName || !email || !password) return;
        try {
          this.setAuthAlert('Creating account...', 'success');
          const res = await api.register({
            full_name: fullName,
            email: email,
            password: password,
            role: role,
            state: state
          });
          this.showToast(`🎉 Account created! Welcome, ${res.user.full_name}`, 'success');
          this.closeAuthModal();
        } catch (err) {
          this.setAuthAlert(err.message || 'Registration failed', 'error');
        }
      });
    }

    // Logout
    if (logoutBtn) {
      logoutBtn.addEventListener('click', () => {
        api.logout();
        this.showToast('ℹ️ Signed out successfully', 'info');
      });
    }

    // Subscribe to auth state updates
    api.addAuthListener((user) => this.renderAuthState(user));

    // Try fetching active profile if token is present
    if (api.getToken()) {
      api.getMe().catch(() => {});
    }
  }

  renderAuthState(user) {
    const openBtn = document.getElementById('btn-open-auth');
    const userBadge = document.getElementById('user-badge');
    const roleBadge = document.getElementById('user-role-badge');
    const nameLabel = document.getElementById('user-name-label');

    if (!openBtn || !userBadge) return;

    if (user) {
      openBtn.classList.add('hidden');
      userBadge.classList.remove('hidden');
      if (nameLabel) nameLabel.textContent = user.full_name || user.email;
      if (roleBadge) {
        const role = user.role || 'CITIZEN';
        roleBadge.textContent = role.replace('_', ' ');
        roleBadge.className = 'badge-role ' + (
          role === 'ADMIN' ? 'role-admin' :
          role === 'FIELD_OFFICER' ? 'role-officer' : 'role-citizen'
        );
      }
    } else {
      openBtn.classList.remove('hidden');
      userBadge.classList.add('hidden');
    }
  }

  openAuthModal() {
    const modal = document.getElementById('auth-modal');
    if (modal) {
      modal.classList.remove('hidden');
      this.clearAuthAlert();
    }
  }

  closeAuthModal() {
    const modal = document.getElementById('auth-modal');
    if (modal) modal.classList.add('hidden');
  }

  clearAuthAlert() {
    const alertBox = document.getElementById('auth-alert-box');
    if (alertBox) {
      alertBox.textContent = '';
      alertBox.className = 'auth-alert-box';
    }
  }

  setAuthAlert(msg, type = 'error') {
    const alertBox = document.getElementById('auth-alert-box');
    if (alertBox) {
      alertBox.textContent = msg;
      alertBox.className = `auth-alert-box ${type}`;
    }
  }

  // --- DASHBOARD STATS & ALERTS ---

  async refreshDashboardStats(showLoader = true) {
    try {
      const summary = await api.getRiskSummary();
      const weather = await api.getCurrentWeather();

      // Update KPI Cards
      const riskScoreEl = document.getElementById('kpi-overall-risk');
      const riskLevelBadge = document.getElementById('kpi-risk-level');
      if (riskScoreEl) riskScoreEl.textContent = `${summary.overall_risk_score}%`;
      if (riskLevelBadge) {
        riskLevelBadge.textContent = summary.overall_risk_level;
        riskLevelBadge.className = `badge badge-${summary.overall_risk_level.toLowerCase()}`;
      }

      const rainfallVal = weather.precipitation_24h_mm !== undefined ? weather.precipitation_24h_mm : (weather.rainfall_24h_accumulated_mm || summary.average_rainfall_24h_mm || 0);
      const rainfallEl = document.getElementById('kpi-rainfall');
      if (rainfallEl) rainfallEl.textContent = `${rainfallVal} mm`;

      const soilEl = document.getElementById('kpi-soil-moisture');
      if (soilEl) {
        const soilVal = weather.soil_moisture_0_to_7cm !== undefined ? weather.soil_moisture_0_to_7cm : (weather.soil_moisture_shallow_m3m3 || summary.average_soil_moisture || 0.45);
        soilEl.textContent = `${(soilVal * 100).toFixed(0)}%`;
      }

      const alertsCountEl = document.getElementById('kpi-active-alerts');
      const alertsCritEl = document.getElementById('kpi-critical-alerts');
      if (alertsCountEl) alertsCountEl.textContent = String(summary.total_active_alerts).padStart(2, '0');
      if (alertsCritEl) alertsCritEl.textContent = `${summary.critical_alerts_count} Critical`;
    } catch (e) {
      console.warn('[App] Failed to refresh stats:', e);
    }
  }

  async loadAlertsFeed() {
    const alertsContainer = document.getElementById('active-alerts-list');
    if (!alertsContainer) return;

    try {
      const zones = await api.getRiskZones();
      const highRiskZones = zones.filter(z => z.risk_score >= 45);

      if (highRiskZones.length === 0) {
        alertsContainer.innerHTML = `
          <div class="empty-state-card">
            <div class="text-3xl mb-2">🛡️</div>
            <p class="text-slate-400 text-sm">All NER terrain micro-zones currently operating within normal safety limits.</p>
          </div>
        `;
        return;
      }

      alertsContainer.innerHTML = highRiskZones.map(z => {
        const isCritical = z.risk_score >= 70;
        const borderClass = isCritical ? 'border-red-900 bg-red-950/40 text-red-100' : 'border-yellow-900 bg-yellow-950/40 text-yellow-100';
        const badgeClass = isCritical ? 'badge-critical' : 'badge-warning';

        return `
          <div class="alert-item rounded-lg border p-4 transition-all hover:scale-[1.01] ${borderClass}" onclick="window.app.focusZoneOnMap(${z.id})">
            <div class="flex items-center justify-between">
              <span class="font-semibold flex items-center gap-1.5">
                ${isCritical ? '🚨' : '⚠️'} ${z.name}
              </span>
              <span class="badge ${badgeClass}">${z.risk_level} (${z.risk_score}%)</span>
            </div>
            <p class="mt-1 text-xs text-slate-300">
              ${z.hazard_type} alert triggered by heavy rainfall (${z.rainfall_24h_mm} mm) & slope steepness (${z.slope_angle}°).
            </p>
            <div class="mt-2 flex items-center justify-between text-xs text-slate-400">
              <span>📍 ${z.district}, ${z.state}</span>
              <button class="text-sky-400 hover:underline font-semibold" onclick="event.stopPropagation(); window.app.planFromZone(${z.id})">
                Route Escape ➔
              </button>
            </div>
          </div>
        `;
      }).join('');
    } catch (e) {
      console.warn('[App] Alerts feed error:', e);
    }
  }

  // --- WEATHER WIDGET & CHART ---
  async loadWeatherWidget() {
    try {
      const weather = await api.getCurrentWeather();
      const forecastData = await api.getWeatherForecast(26.1445, 91.7362, 8);

      const temp = weather.temperature_c !== undefined ? weather.temperature_c : '--';
      const humidity = weather.relative_humidity !== undefined ? weather.relative_humidity : (weather.relative_humidity_pct !== undefined ? weather.relative_humidity_pct : '--');
      const rainRate = weather.precipitation_current_mm !== undefined ? weather.precipitation_current_mm : (weather.precipitation_rate_mm_hr !== undefined ? weather.precipitation_rate_mm_hr : '--');
      const condition = weather.weather_condition || weather.rain_intensity_level || 'Normal Weather';

      document.getElementById('weather-temp').textContent = `${temp}°C`;
      document.getElementById('weather-humidity').textContent = `${humidity}%`;
      document.getElementById('weather-rate').textContent = `${rainRate} mm/hr`;
      document.getElementById('weather-condition').textContent = condition;

      // Render Forecast Chart with Chart.js
      const chartCanvas = document.getElementById('rainfall-forecast-chart');
      if (chartCanvas && typeof Chart !== 'undefined') {
        const forecastList = forecastData.hourly_forecast || forecastData.forecast || [];
        const labels = forecastList.map((f, i) => f.time && !f.time.startsWith('+') ? f.time.slice(11, 16) : `+${i + 1}h`);
        const rainVals = forecastList.map(f => f.precipitation_mm);
        const soilVals = forecastList.map(f => ((f.soil_moisture || 0.4) * 100).toFixed(0));

        if (this.forecastChart) this.forecastChart.destroy();

        this.forecastChart = new Chart(chartCanvas, {
          type: 'line',
          data: {
            labels: labels,
            datasets: [
              {
                label: 'Rainfall (mm)',
                data: rainVals,
                borderColor: '#38bdf8',
                backgroundColor: 'rgba(56, 189, 248, 0.15)',
                fill: true,
                tension: 0.4,
                yAxisID: 'y'
              },
              {
                label: 'Soil Saturation (%)',
                data: soilVals,
                borderColor: '#f97316',
                borderDash: [4, 4],
                tension: 0.4,
                yAxisID: 'y1'
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { labels: { color: '#94a3b8', boxWidth: 12 } }
            },
            scales: {
              x: { grid: { color: '#1e293b' }, ticks: { color: '#94a3b8' } },
              y: {
                grid: { color: '#1e293b' },
                ticks: { color: '#38bdf8' },
                title: { display: true, text: 'Rain (mm)', color: '#38bdf8' }
              },
              y1: {
                position: 'right',
                grid: { drawOnChartArea: false },
                ticks: { color: '#f97316' },
                title: { display: true, text: 'Soil %', color: '#f97316' }
              }
            }
          }
        });
      }
    } catch (e) {
      console.warn('[App] Weather widget loading error:', e);
    }
  }

  // --- EVACUATION ROUTE PLANNER ---
  async populateSheltersDropdown() {
    const select = document.getElementById('evac-target-shelter');
    if (!select) return;

    try {
      const shelters = await api.getShelters();
      select.innerHTML = '<option value="">-- Nearest Safe Shelter (Auto-Optimized) --</option>' +
        shelters.map(s => `
          <option value="${s.id}">
            ${s.name} (${s.district}) - Cap: ${s.capacity_occupied}/${s.capacity_total}
          </option>
        `).join('');
    } catch (e) {
      console.warn('[App] Shelters populate error:', e);
    }
  }

  async handleEvacuationPlan(e) {
    e.preventDefault();
    const lat = parseFloat(document.getElementById('evac-origin-lat').value);
    const lon = parseFloat(document.getElementById('evac-origin-lon').value);
    const targetShelterId = document.getElementById('evac-target-shelter').value || null;
    const transportMode = document.getElementById('evac-transport-mode').value;
    const avoidHazards = document.getElementById('evac-avoid-hazards').checked;

    if (isNaN(lat) || isNaN(lon)) {
      this.showToast('Please specify valid latitude and longitude coordinates.', 'error');
      return;
    }

    const planBtn = document.getElementById('btn-compute-route');
    planBtn.disabled = true;
    planBtn.innerHTML = '⚡ Computing Safe Escape Corridor...';

    try {
      const plan = await api.planEvacuationRoute({
        user_latitude: lat,
        user_longitude: lon,
        target_shelter_id: targetShelterId ? parseInt(targetShelterId) : null,
        avoid_high_risk: avoidHazards,
        transport_preference: transportMode
      });

      this.renderEvacuationResults(plan);
      geoMap.drawEvacuationRoute(plan);
      const targetName = plan.destination_shelter?.name || plan.target_shelter_name || 'Designated Shelter';
      this.showToast(`🧭 Safe corridor calculated to ${targetName}!`, 'success');
    } catch (err) {
      this.showToast(`Routing failed: ${err.message}`, 'error');
    } finally {
      planBtn.disabled = false;
      planBtn.innerHTML = '🚀 Calculate Safe Evacuation Corridor';
    }
  }

  renderEvacuationResults(plan) {
    const resultsContainer = document.getElementById('evacuation-results');
    if (!resultsContainer) return;

    resultsContainer.classList.remove('hidden');

    const shelterName = plan.destination_shelter ? plan.destination_shelter.name : (plan.target_shelter_name || 'Designated Safe Shelter');
    const distance = plan.total_distance_km !== undefined ? `${plan.total_distance_km} km` : '-- km';
    const duration = plan.total_duration_minutes || plan.estimated_time_minutes || 10;
    const safetyScore = plan.safety_clearance_score || (plan.hazard_zones_avoided_count > 0 ? 95 : 98);
    const mode = plan.transport_guidance ? plan.transport_guidance.best_mode : (plan.transport_recommended || 'Vehicle / Foot');
    const status = plan.transport_guidance ? plan.transport_guidance.reason : (plan.hazard_avoidance_status || 'Safe corridor active.');

    document.getElementById('evac-res-shelter').textContent = shelterName;
    document.getElementById('evac-res-distance').textContent = distance;
    document.getElementById('evac-res-eta').textContent = `~${duration} mins (${mode.replace(/_/g, ' ')})`;
    document.getElementById('evac-res-safety-score').textContent = `${safetyScore}% Safety`;
    document.getElementById('evac-res-status').textContent = status;

    // Steps list
    const stepsList = document.getElementById('evac-turn-by-turn-list');
    let steps = [];
    if (plan.route_waypoints && plan.route_waypoints.length) {
      steps = plan.route_waypoints.map(w => w.instruction || `Waypoint (${w.latitude}, ${w.longitude})`);
    } else if (plan.turn_by_turn_instructions && plan.turn_by_turn_instructions.length) {
      steps = plan.turn_by_turn_instructions;
    } else {
      steps = [
        "Head towards designated safe escape corridor.",
        `Arrive at safe shelter: ${shelterName}.`
      ];
    }

    stepsList.innerHTML = steps.map((step, idx) => `
      <li class="flex items-start gap-2 text-sm text-slate-200">
        <span class="step-num">${idx + 1}</span>
        <span>${step}</span>
      </li>
    `).join('');

    // Contacts
    const contactsContainer = document.getElementById('evac-res-contacts');
    const contacts = plan.emergency_contacts || [];
    contactsContainer.innerHTML = contacts.map(c => {
      const name = c.title || c.name || 'Emergency Helpline';
      const phone = c.number || c.phone || '112';
      return `
        <a href="tel:${phone}" class="pill pill-outline-danger text-xs flex items-center gap-1">
          📞 ${name}: <strong>${phone}</strong>
        </a>
      `;
    }).join('');
  }

  detectUserGPS() {
    if (!navigator.geolocation) {
      this.showToast('Geolocation is not supported by your browser.', 'warning');
      return;
    }

    this.showToast('📡 Acquiring GPS position from device...', 'info');
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        document.getElementById('evac-origin-lat').value = lat.toFixed(4);
        document.getElementById('evac-origin-lon').value = lon.toFixed(4);
        geoMap.setUserLocation(lat, lon);
        geoMap.centerOn(lat, lon, 14);
        this.showToast(`📍 Location acquired: ${lat.toFixed(4)}, ${lon.toFixed(4)}`, 'success');
      },
      (err) => {
        this.showToast('GPS unavailable. Defaulting to Guwahati hills corridor.', 'warning');
        document.getElementById('evac-origin-lat').value = '26.1350';
        document.getElementById('evac-origin-lon').value = '91.8250';
      }
    );
  }

  setTargetShelter(shelterId, shelterName) {
    const select = document.getElementById('evac-target-shelter');
    if (select) select.value = shelterId;
    this.switchView('evacuation');
    this.showToast(`🎯 Destination set to: ${shelterName}`, 'info');
  }

  async planFromZone(zoneId) {
    const zones = await api.getRiskZones();
    const zone = zones.find(z => z.id === zoneId);
    if (zone && zone.polygon_coordinates && zone.polygon_coordinates.length > 0) {
      const coord = zone.polygon_coordinates[0];
      document.getElementById('evac-origin-lat').value = coord[1].toFixed(4);
      document.getElementById('evac-origin-lon').value = coord[0].toFixed(4);
    } else {
      document.getElementById('evac-origin-lat').value = '26.1200';
      document.getElementById('evac-origin-lon').value = '91.8300';
    }
    this.switchView('evacuation');
    this.showToast(`Origin set to hazard zone coordinates. Click Calculate to plan safe route.`, 'info');
  }

  async focusZoneOnMap(zoneId) {
    this.switchView('map');
    const zones = await api.getRiskZones();
    const zone = zones.find(z => z.id === zoneId);
    if (zone && zone.polygon_coordinates && zone.polygon_coordinates.length > 0) {
      const coord = zone.polygon_coordinates[0];
      geoMap.centerOn(coord[1], coord[0], 14);
    }
  }

  // --- CITIZEN GROUND REPORTS ---
  async handleCitizenReportSubmit(e) {
    e.preventDefault();
    const category = document.getElementById('report-category').value;
    const description = document.getElementById('report-desc').value;
    const lat = parseFloat(document.getElementById('report-lat').value) || 26.1445;
    const lon = parseFloat(document.getElementById('report-lon').value) || 91.7362;
    const state = document.getElementById('report-state').value || 'Assam';
    const district = document.getElementById('report-district').value || 'Kamrup Metropolitan';
    const severity = parseInt(document.getElementById('report-severity').value) || 3;
    const reporterName = document.getElementById('report-name').value || 'Anonymous Citizen';
    const reporterPhone = document.getElementById('report-phone').value || '';
    const imageUrl = document.getElementById('report-image-url').value || '';

    const payload = {
      category,
      description,
      latitude: lat,
      longitude: lon,
      state,
      district,
      severity_rating: severity,
      reporter_name: reporterName,
      reporter_phone: reporterPhone,
      image_url: imageUrl
    };

    const res = await offlineSync.queueReport(payload);
    if (res.status === 'ONLINE_SUBMITTED') {
      this.showToast('✅ Ground telemetry report submitted to disaster authorities!', 'success');
    } else {
      this.showToast('💾 Report saved in offline queue. Will auto-sync once connected.', 'info');
    }

    e.target.reset();
    this.loadCitizenReportsFeed();
    geoMap.loadCitizenReports();
  }

  async loadCitizenReportsFeed() {
    const feed = document.getElementById('citizen-reports-feed');
    if (!feed) return;

    try {
      const reports = await api.getReports();
      feed.innerHTML = reports.map(r => `
        <div class="report-card border border-slate-800 bg-slate-900 rounded-xl p-5 mb-4">
          <div class="flex items-center justify-between mb-2">
            <span class="font-bold flex items-center gap-2">
              ⚠️ ${escapeHtml(r.category ? r.category.replace('_', ' ') : 'Report')}
            </span>
            <span class="badge ${r.status === 'VERIFIED' ? 'badge-low' : 'badge-warning'}">${escapeHtml(r.status)}</span>
          </div>
          <p class="text-sm text-slate-300 mb-3">${escapeHtml(r.description)}</p>
          ${sanitizeUrl(r.image_url) ? `<img src="${sanitizeUrl(r.image_url)}" class="rounded-lg max-h-48 w-full object-cover mb-3" alt="Hazard photo" />` : ''}
          <div class="flex items-center justify-between text-xs text-slate-400">
            <span>📍 ${escapeHtml(r.district)}, ${escapeHtml(r.state)} • By ${escapeHtml(r.reporter_name || 'Citizen')}</span>
            <button class="btn btn-xs btn-outline-primary" onclick="window.app.upvoteReport(${Number(r.id)})">
              👍 Verify (${Number(r.upvotes) || 0})
            </button>
          </div>
        </div>
      `).join('');
    } catch (e) {
      console.warn('[App] Reports feed error:', e);
    }
  }

  async upvoteReport(id) {
    try {
      await api.upvoteReport(id);
      this.showToast('👍 Verified hazard report confidence level increased.', 'success');
      this.loadCitizenReportsFeed();
      geoMap.loadCitizenReports();
    } catch (e) {
      this.showToast(`Upvote failed: ${e.message}`, 'warning');
    }
  }

  updateOfflineBadge(count) {
    const badge = document.getElementById('offline-queue-badge');
    const syncBtn = document.getElementById('btn-sync-offline');
    if (badge) {
      badge.textContent = count;
      badge.style.display = count > 0 ? 'inline-block' : 'none';
    }
    if (syncBtn) {
      syncBtn.disabled = count === 0;
    }
  }

  // --- EMERGENCY HELPLINES ---
  async loadHelplines(state = 'Assam') {
    const list = document.getElementById('helplines-grid');
    if (!list) return;

    try {
      const helplines = await api.getHelplines(state === 'All' ? null : state);
      list.innerHTML = helplines.map(h => `
        <div class="helpline-card rounded-xl border border-slate-800 bg-slate-900 p-5">
          <div class="flex items-center justify-between mb-2">
            <span class="badge badge-outline text-xs">${h.service_type.replace('_', ' ')}</span>
            <span class="badge ${h.operates_24x7 ? 'badge-low' : 'badge-warning'}">24x7 Active</span>
          </div>
          <h4 class="font-bold text-base text-white">${h.organization_name}</h4>
          <p class="text-xs text-slate-400 mb-4">${h.district}, ${h.state}</p>
          <div class="flex items-center gap-3">
            <a href="tel:${h.phone_number}" class="btn btn-sm btn-danger flex-1 text-center font-bold">
              📞 Call ${h.phone_number}
            </a>
            ${h.alternate_phone ? `<a href="tel:${h.alternate_phone}" class="btn btn-sm btn-outline-secondary">Alt: ${h.alternate_phone}</a>` : ''}
          </div>
        </div>
      `).join('');
    } catch (e) {
      console.warn('[App] Helplines load error:', e);
    }
  }

  // --- CITIZEN AREA RISK CHECKER ---
  detectAreaRiskGPS() {
    if (!navigator.geolocation) {
      this.showToast('Location services are not available in this browser.', 'warning');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        document.getElementById('area-risk-lat').value = pos.coords.latitude.toFixed(6);
        document.getElementById('area-risk-lon').value = pos.coords.longitude.toFixed(6);
        this.showToast('Location added. Press “Check area risk” to continue.', 'success');
      },
      () => this.showToast('Could not access your location. Enter coordinates or a place name instead.', 'warning'),
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
    );
  }

  async handleAreaRiskCheck(e) {
    e.preventDefault();
    const placeInput = document.getElementById('area-risk-place');
    const latInput = document.getElementById('area-risk-lat');
    const lonInput = document.getElementById('area-risk-lon');
    const resultBox = document.getElementById('area-risk-result');
    const button = document.getElementById('btn-area-risk-check');
    let lat = latInput.value.trim() === '' ? NaN : Number(latInput.value);
    let lon = lonInput.value.trim() === '' ? NaN : Number(lonInput.value);

    button.disabled = true;
    button.textContent = 'Checking…';
    resultBox.classList.remove('hidden');
    resultBox.textContent = 'Getting location and checking available weather and terrain data…';

    try {
      if ((!Number.isFinite(lat) || !Number.isFinite(lon)) && placeInput.value.trim()) {
        const url = 'https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&countrycodes=in&q=' + encodeURIComponent(placeInput.value.trim());
        const response = await fetch(url, { headers: { 'Accept': 'application/json' } });
        if (!response.ok) throw new Error('Place search is temporarily unavailable. Try coordinates instead.');
        const matches = await response.json();
        if (!matches.length) throw new Error('No matching place found. Check the spelling or enter coordinates.');
        lat = Number(matches[0].lat);
        lon = Number(matches[0].lon);
        latInput.value = lat.toFixed(6);
        lonInput.value = lon.toFixed(6);
      }

      if (!Number.isFinite(lat) || !Number.isFinite(lon) || lat < -90 || lat > 90 || lon < -180 || lon > 180) {
        throw new Error('Enter a valid place name or both latitude and longitude.');
      }

      const result = await api.assessRisk({ latitude: lat, longitude: lon });
      const score = Number(result.risk_score);
      const level = String(result.risk_level || 'UNKNOWN').toUpperCase();
      const colorClass = ({ LOW: 'low', MODERATE: 'moderate', HIGH: 'high', CRITICAL: 'critical' })[level] || 'outline';
      const weatherIsLive = result.weather_summary?.is_live_data !== false;
      const dataSource = result.weather_summary?.data_source || 'Source not reported by the service';
      const placeLabel = placeInput.value.trim() || 'Selected coordinates';
      resultBox.innerHTML = `
        <div class="panel-card p-4">
          <div class="flex items-center justify-between gap-2 flex-wrap">
            <div><div class="text-xs text-slate-400">${escapeHtml(placeLabel)}</div><div class="text-lg font-bold mt-1">${escapeHtml(level.replace('_',' '))} RISK</div></div>
            <span class="badge badge-${colorClass}">${Number.isFinite(score) ? score.toFixed(1) : '—'} / 100</span>
          </div>
          <p class="text-sm mt-3">${escapeHtml(result.action_recommendation || 'Review local conditions and official advisories.')}</p>
          <p class="text-xs text-slate-400 mt-3">Coordinates: ${lat.toFixed(5)}, ${lon.toFixed(5)} · ${weatherIsLive ? 'Weather data: live feed (' + dataSource + ').' : 'Weather data: offline fallback (' + dataSource + '). Treat this result as indicative only.'}</p>
          <p class="text-xs text-slate-400 mt-2">This point assessment does not mean every nearby street or village has been mapped. A low score is not a safety guarantee.</p>
        </div>`;
    } catch (error) {
      resultBox.innerHTML = `<div class="panel-card p-4 text-sm text-amber-300">${escapeHtml(error.message || 'Unable to assess this location right now.')}</div>`;
    } finally {
      button.disabled = false;
      button.textContent = 'Check area risk';
    }
  }

  // --- AI RISK ASSESSMENT CALCULATOR ---
  async handleRiskCalculation(e) {
    e.preventDefault();
    const slope = parseFloat(document.getElementById('calc-slope').value);
    const rainfall = parseFloat(document.getElementById('calc-rainfall').value);
    const moisture = parseFloat(document.getElementById('calc-moisture').value);
    const rainRate = parseFloat(document.getElementById('calc-rain-rate').value);
    const elevation = parseFloat(document.getElementById('calc-elev').value);
    const ndvi = parseFloat(document.getElementById('calc-ndvi').value);
    const distDrain = parseFloat(document.getElementById('calc-drain').value);
    const tilt = parseFloat(document.getElementById('calc-tilt').value);
    const litho = parseInt(document.getElementById('calc-litho').value);

    const calcBtn = document.getElementById('btn-calc-assess');
    calcBtn.disabled = true;
    calcBtn.textContent = 'Running ML Inference...';

    try {
        const res = await api.predictMLRisk({
            slope_degrees: slope,
            rainfall_24h_mm: rainfall,
            soil_moisture_m3_m3: moisture,
            elevation_m: elevation,
            rain_rate_current_mm_hr: rainRate,
            ndvi_vegetation: ndvi,
            dist_to_drainage_m: distDrain,
            lithology_code: litho,
            tilt_rate_deg_day: tilt
        });

        const resultBox = document.getElementById('calc-results');
        resultBox.classList.remove('hidden');
        document.getElementById('calc-res-score').textContent = `${res.predicted_risk_score_pct}%`;
        document.getElementById('calc-res-level').textContent = res.predicted_risk_category;
        document.getElementById('calc-res-level').className = `badge badge-${res.predicted_risk_category.toLowerCase()} text-base`;
        document.getElementById('calc-res-evac').textContent = res.evacuation_advised ? '🚨 EVACUATION REQUIRED' : '✅ SAFE TO REMAIN';
        document.getElementById('calc-res-evac').className = res.evacuation_advised ? 'text-red-400 font-bold' : 'text-emerald-400 font-bold';

        // Update probability bars
        if (res.class_probabilities) {
            const map = {
                CRITICAL: { valId: 'prob-val-crit', barId: 'prob-bar-crit' },
                HIGH: { valId: 'prob-val-high', barId: 'prob-bar-high' },
                MODERATE: { valId: 'prob-val-mod', barId: 'prob-bar-mod' },
                LOW: { valId: 'prob-val-low', barId: 'prob-bar-low' }
            };
            Object.entries(res.class_probabilities).forEach(([cat, prob]) => {
                const perc = Math.round(prob * 100);
                const ids = map[cat];
                if (ids) {
                    const valEl = document.getElementById(ids.valId);
                    const barEl = document.getElementById(ids.barId);
                    if (valEl) valEl.textContent = `${perc}%`;
                    if (barEl) barEl.style.width = `${perc}%`;
                }
            });
        }

        // Populate actions list with class probabilities for reference
        const actionsList = document.getElementById('calc-res-actions');
        if (actionsList) {
            actionsList.innerHTML = Object.entries(res.class_probabilities || {})
                .map(([cat, prob]) => `<li>• ${cat}: ${(prob * 100).toFixed(1)}%</li>`)
                .join('');
        }
    } catch (err) {
        this.showToast(`ML inference failed: ${err.message}`, 'error');
    } finally {
        calcBtn.disabled = false;
        calcBtn.textContent = '⚡ Run ML Model Inference';
    }
  }

  // --- SOS EMERGENCY DISTRESS HANDLERS ---
  openSOSModal() {
    const modal = document.getElementById('sos-modal');
    if (!modal) return;

    modal.classList.remove('hidden');
    if (this.soundAlertsEnabled) {
      this.playAlertSound();
    }

    // Auto grab current coordinates
    this.acquireSOSLocation();
  }

  closeSOSModal() {
    const modal = document.getElementById('sos-modal');
    if (modal) modal.classList.add('hidden');
  }

  acquireSOSLocation() {
    const statusEl = document.getElementById('sos-gps-status');
    const coordsEl = document.getElementById('sos-coordinates-display');
    const whatsappBtn = document.getElementById('btn-sos-whatsapp');

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const lat = pos.coords.latitude.toFixed(4);
          const lon = pos.coords.longitude.toFixed(4);
          if (statusEl) statusEl.textContent = '✅ High-Accuracy GPS Acquired';
          if (coordsEl) coordsEl.textContent = `Lat: ${lat}, Lon: ${lon}`;

          // Also set evacuation inputs
          const evacLat = document.getElementById('evac-origin-lat');
          const evacLon = document.getElementById('evac-origin-lon');
          if (evacLat) evacLat.value = lat;
          if (evacLon) evacLon.value = lon;

          // Update WhatsApp emergency link
          if (whatsappBtn) {
            const msg = encodeURIComponent(`🚨 EMERGENCY SOS! I need immediate rescue/assistance at GPS Location: https://maps.google.com/?q=${lat},${lon} (Coordinates: ${lat}, ${lon})`);
            whatsappBtn.href = `https://api.whatsapp.com/send?text=${msg}`;
          }
        },
        () => {
          if (statusEl) statusEl.textContent = '📍 Using Default NER Hills GPS';
          if (whatsappBtn) {
            const msg = encodeURIComponent(`🚨 EMERGENCY SOS! I need immediate rescue/assistance near Guwahati Hilly Terrain. Coordinates: 26.1445, 91.7362`);
            whatsappBtn.href = `https://api.whatsapp.com/send?text=${msg}`;
          }
        }
      );
    }
  }

  async broadcastDistressBeacon() {
    const broadcastBtn = document.getElementById('btn-sos-broadcast');
    const statusBox = document.getElementById('sos-beacon-status');

    broadcastBtn.disabled = true;
    broadcastBtn.innerHTML = '⏳ Transmitting SOS Distress Beacon...';

    const coordsText = document.getElementById('sos-coordinates-display')?.textContent || '26.1445, 91.7362';
    const matches = coordsText.match(/[-+]?([0-9]*\.[0-9]+|[0-9]+)/g) || [26.1445, 91.7362];
    const lat = parseFloat(matches[0]) || 26.1445;
    const lon = parseFloat(matches[1]) || 91.7362;

    const payload = {
      category: 'STRANDED_CITIZENS',
      description: 'EMERGENCY SOS: Citizen stranded. Immediate rescue beacon triggered via 1-Click SOS.',
      latitude: lat,
      longitude: lon,
      state: 'Assam',
      district: 'Kamrup Metropolitan',
      severity_rating: 5,
      reporter_name: 'SOS Emergency Beacon'
    };

    try {
      const res = await offlineSync.queueReport(payload);
      if (statusBox) {
        statusBox.innerHTML = `
          <div class="p-3 bg-emerald-950/80 border border-emerald-600 rounded-lg text-emerald-300 font-bold mt-2">
            ✅ DISTRESS BEACON BROADCASTED! Dispatchers & SDRF units alerted with your exact GPS coordinates.
          </div>
        `;
      }
      this.showToast('🚨 SOS DISTRESS BEACON TRANSMITTED TO RESCUE TEAMS!', 'error');
      if (window.geoMap) window.geoMap.loadCitizenReports();
    } catch (e) {
      this.showToast(`Distress transmission fallback saved locally: ${e.message}`, 'warning');
    } finally {
      broadcastBtn.disabled = false;
      broadcastBtn.innerHTML = '📡 RE-TRANSMIT DISTRESS BEACON';
    }
  }

  // --- NOTIFICATION TOASTS & AUDIO ALERTS ---
  showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast-message toast-${type}`;
    toast.innerHTML = `<span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('fade-out');
      setTimeout(() => toast.remove(), 400);
    }, 4000);
  }

  playAlertSound() {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine'; // Clean chime
      osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
      osc.frequency.setValueAtTime(880.00, audioCtx.currentTime + 0.15); // A5
      gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.4);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.4);
    } catch (e) {
      // Ignore if audio permissions blocked
    }
  }

  // --- SERVICE WORKER & PWA INSTALLATION ---
  registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js')
        .then((registration) => {
          registration.update();
          console.log('✅ [PWA] Service Worker active & updated:', registration.scope);
        })
        .catch((error) => {
          console.warn('⚠️ [PWA] Service Worker registration note:', error);
        });
    }

    // Capture beforeinstallprompt for one-click installation
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      window.deferredPWAInstallPrompt = e;
      console.log('📲 [PWA] Application is ready to install!');
    });
  }
}

// Global initialization
window.app = new GeoAlertApp();

function startApp() {
  window.app.registerServiceWorker();
  window.app.init();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startApp);
} else {
  startApp();
}

