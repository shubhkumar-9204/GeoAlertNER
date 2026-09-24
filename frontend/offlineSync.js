/**
 * Offline Sync Service for GeoAlertNER Citizen Reports
 * Handles resilient local caching and auto-sync when network connectivity returns.
 */

import { api } from './api.js?v=3';

const STORAGE_KEY = 'geoalertner_offline_reports_v1';

class OfflineSyncManager {
  constructor() {
    this.queue = this.loadQueue();
    this.isSyncing = false;
    this.listeners = [];

    // Listen for browser online event
    window.addEventListener('online', () => {
      console.log('[OfflineSync] Browser is back online. Initiating sync...');
      this.syncPendingReports();
    });
  }

  loadQueue() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error('[OfflineSync] Failed to read from localStorage:', e);
      return [];
    }
  }

  saveQueue() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.queue));
      this.notifyListeners();
    } catch (e) {
      console.error('[OfflineSync] Failed to write to localStorage:', e);
    }
  }

  addListener(callback) {
    this.listeners.push(callback);
    callback(this.getPendingCount());
  }

  notifyListeners() {
    const count = this.getPendingCount();
    this.listeners.forEach(fn => fn(count));
  }

  getPendingCount() {
    return this.queue.length;
  }

  getPendingReports() {
    return [...this.queue];
  }

  async queueReport(reportData) {
    const offlineReport = {
      ...reportData,
      report_uuid: reportData.report_uuid || `offline-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
      queued_at: new Date().toISOString(),
      is_offline_submitted: true
    };

    // Attempt direct send if navigator is online
    if (navigator.onLine) {
      try {
        const result = await api.submitReport(offlineReport);
        console.log('[OfflineSync] Report submitted directly online:', result);
        return { status: 'ONLINE_SUBMITTED', report: result };
      } catch (err) {
        console.warn('[OfflineSync] Direct submit failed, queueing locally:', err.message);
      }
    }

    // Otherwise store in offline queue
    this.queue.push(offlineReport);
    this.saveQueue();
    return { status: 'OFFLINE_QUEUED', report: offlineReport };
  }

  async syncPendingReports() {
    if (this.isSyncing || this.queue.length === 0 || !navigator.onLine) {
      return;
    }

    this.isSyncing = true;
    console.log(`[OfflineSync] Syncing ${this.queue.length} pending report(s)...`);

    try {
      const batchPayload = this.queue.map(item => ({
        report_uuid: item.report_uuid,
        category: item.category,
        description: item.description,
        latitude: Number(item.latitude),
        longitude: Number(item.longitude),
        state: item.state || 'Assam',
        district: item.district || 'Kamrup Metropolitan',
        image_url: item.image_url || null,
        severity_rating: Number(item.severity_rating) || 3,
        reporter_name: item.reporter_name || 'Anonymous Citizen',
        reporter_phone: item.reporter_phone || null
      }));

      const res = await api.syncOfflineBatch(batchPayload);
      console.log('[OfflineSync] Batch sync success:', res);

      // Clear queue on successful sync
      this.queue = [];
      this.saveQueue();
      return { success: true, count: res.synced_count };
    } catch (err) {
      console.error('[OfflineSync] Batch sync failed:', err.message);
      return { success: false, error: err.message };
    } finally {
      this.isSyncing = false;
    }
  }

  clearQueue() {
    this.queue = [];
    this.saveQueue();
  }
}

export const offlineSync = new OfflineSyncManager();
