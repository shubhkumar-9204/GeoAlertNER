# Intellectual Property, Attributions & Citations

## 📌 Original Works & Proprietary Algorithms

The following software architectures, mathematical formulations, and engineering modules are original works developed as part of **GeoAlertNER** and are protected under copyright:

1. **Multi-Factor AI Hazard Risk Assessment Engine (`ml_risk_engine.py`)**:
   - Continuous composite scoring algorithm:
     $$Risk(x, y) = w_r R_{24h} + w_s S_{slope} + w_m M_{soil} + w_e E_{elev} + w_h H_{hist}$$
   - Machine Learning Random Forest classifier combining slope inclination, 24h precipitation, volumetric soil moisture, and friable lithology indices.
2. **Hazard-Aware Evacuation Routing Engine (`routing_service.py`)**:
   - Dynamic waypoint generator and escape corridor planner that detects intersections with active critical risk polygons and recalculates safety bypass routes.
3. **IoT Mountain Telemetry & Sensor Simulator (`sensor_simulator.py`)**:
   - Multi-scenario synthetic sensor generator modeling geotechnical sensors (soil saturation probes, tilt inclinometers, rain gauges, river piezometers).
4. **Offline-First PWA Synchronization Engine (`offlineSync.js`)**:
   - IndexedDB caching and batch sync layer designed specifically for zero-connectivity Himalayan hilly terrains.

## ⚖️ Academic Citation Notice

If referencing or utilizing this project for scientific publication, academic research, or technical competitions, please cite:

```bibtex
@software{GeoAlertNER2026,
  author = {GeoAlertNER Project Authors},
  title = {GeoAlertNER: AI-Driven Disaster Early Warning & Hazard-Aware Evacuation System for Hilly Terrains},
  year = {2026},
  url = {https://github.com/Srishti/GeoAlertNER}
}
```

## 🌐 Third-Party Data Sources & Libraries

GeoAlertNER respectfully acknowledges and utilizes data and tools provided by:
- **Open-Meteo API**: Real-time precipitation, weather forecasts, and elevation data.
- **OpenStreetMap & CARTO**: Base cartography and tile rendering.
- **FastAPI & Starlette**: Modern, high-performance web frameworks.
- **Leaflet.js**: Mobile-friendly interactive GIS map visualizer.
- **Scikit-Learn**: Machine learning classification pipelines.
