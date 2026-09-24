/**
 * IoT Hardware Simulator & Sensor Telemetry Controller
 * Connects directly to /sensors/simulator/* endpoints to demonstrate real-time disaster conditions.
 */

import { api } from './api.js?v=3';

class SimulatorController {
  constructor() {
    this.status = null;
    this.telemetryChart = null;
    this.pollingTimer = null;
  }

  async init() {
    await this.refreshStatus();
    await this.loadSensorsTable();
  }

  async refreshStatus() {
    try {
      this.status = await api.getSimulatorStatus();
      this.updateUIStatus(this.status);
    } catch (e) {
      console.warn('[Simulator] Status fetch error:', e);
    }
  }

  updateUIStatus(status) {
    if (!status) return;

    const scenarioEl = document.getElementById('sim-current-scenario');
    if (scenarioEl) {
      scenarioEl.textContent = status.active_scenario || 'NORMAL';
      scenarioEl.className = `badge font-mono badge-${this.getScenarioBadgeClass(status.active_scenario)}`;
    }

    const autoBtn = document.getElementById('btn-sim-auto-toggle');
    if (autoBtn) {
      if (status.auto_sim_running) {
        autoBtn.innerHTML = '⏸️ Stop Auto Sim';
        autoBtn.classList.remove('btn-outline-primary');
        autoBtn.classList.add('btn-warning');
      } else {
        autoBtn.innerHTML = '▶️ Start Live Auto Sim (5s)';
        autoBtn.classList.remove('btn-warning');
        autoBtn.classList.add('btn-outline-primary');
      }
    }
  }

  getScenarioBadgeClass(scenario) {
    switch (scenario) {
      case 'LANDSLIDE_IMMINENT': return 'critical';
      case 'CLOUDBURST_FLOOD': return 'danger';
      case 'MONSOON_SURGE': return 'warning';
      default: return 'low';
    }
  }

  async setScenario(scenarioName) {
    try {
      const res = await api.setSimulatorScenario(scenarioName);
      window.app.showToast(`🚨 Scenario switched to: ${scenarioName}`, 'info');
      await this.refreshStatus();
      await this.triggerTick(false);
      return res;
    } catch (e) {
      window.app.showToast(`Failed to set scenario: ${e.message}`, 'error');
    }
  }

  async triggerTick(notify = true) {
    try {
      const res = await api.triggerSimulatorTick();
      if (notify) {
        window.app.showToast(`⚡ Ingested new telemetry cycle across ${res.nodes_updated || 4} sensor nodes`, 'success');
      }
      await this.loadSensorsTable();
      if (window.geoMap) {
        window.geoMap.loadSensors();
        window.geoMap.loadRiskZones();
      }
      if (window.app) {
        window.app.refreshDashboardStats();
      }
      return res;
    } catch (e) {
      window.app.showToast(`Simulation tick failed: ${e.message}`, 'error');
    }
  }

  async toggleAutoSimulation() {
    try {
      if (this.status && this.status.auto_sim_running) {
        await api.stopAutoSimulator();
        window.app.showToast('⏹️ Background sensor stream paused.', 'info');
      } else {
        await api.startAutoSimulator(5);
        window.app.showToast('🚀 Live sensor streaming started (5s intervals).', 'success');
      }
      await this.refreshStatus();
    } catch (e) {
      window.app.showToast(`Auto simulation toggle failed: ${e.message}`, 'error');
    }
  }

  async loadSensorsTable() {
    const tableBody = document.getElementById('sensors-table-body');
    if (!tableBody) return;

    try {
      const sensors = await api.getSensors();
      tableBody.innerHTML = sensors.map(s => {
        const isTriggered = s.is_triggered;
        const statusBadge = isTriggered
          ? `<span class="badge badge-critical">🚨 CRITICAL</span>`
          : `<span class="badge badge-low">✅ NORMAL</span>`;

        return `
          <tr>
            <td class="font-mono text-xs">${s.sensor_code}</td>
            <td>
              <div class="font-medium">${s.name}</div>
              <div class="text-xs text-slate-400">${s.district}, ${s.state}</div>
            </td>
            <td><span class="badge badge-outline">${s.sensor_type}</span></td>
            <td>
              <strong class="${isTriggered ? 'text-red-400 font-bold' : 'text-emerald-400'}">
                ${s.current_value} ${s.unit}
              </strong>
            </td>
            <td class="text-xs text-slate-400">
              Warn: ${s.threshold_warning} | Crit: ${s.threshold_critical}
            </td>
            <td>🔋 ${s.battery_percentage}%</td>
            <td>${statusBadge}</td>
          </tr>
        `;
      }).join('');
    } catch (e) {
      console.warn('[Simulator] Table loading failed:', e);
    }
  }
}

export const simulator = new SimulatorController();
