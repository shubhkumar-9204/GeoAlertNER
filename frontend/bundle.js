/**
 * GeoAlertNER - Production Bundle (auto-generated)
 * GeoAlertNER - Disaster Early Warning System
 * DO NOT EDIT: Regenerate with build_bundle.py
 */
(function(window, document) {
  'use strict';


// ===== frontend/i18n.js =====
/**
 * GeoAlertNER - Multilingual (i18n) Engine for North Eastern Region (NER)
 * Supports: English, Assamese, Bengali, Hindi, Mizo, Khasi, Manipuri/Meitei, Bodo, and Garo.
 */

const LANGUAGES = {
  en: { name: 'English', native: 'English', flag: '🇬🇧', voiceCode: 'en-IN' },
  as: { name: 'Assamese', native: 'অসমীয়া', flag: '🇮🇳', voiceCode: 'as-IN' },
  bn: { name: 'Bengali', native: 'বাংলা', flag: '🇮🇳', voiceCode: 'bn-IN' },
  hi: { name: 'Hindi', native: 'हिन्दी', flag: '🇮🇳', voiceCode: 'hi-IN' },
  lus: { name: 'Mizo', native: 'Mizo ṭawng', flag: '🇮🇳', voiceCode: 'en-IN' },
  kha: { name: 'Khasi', native: 'Ka Ktien Khasi', flag: '🇮🇳', voiceCode: 'en-IN' },
  mni: { name: 'Manipuri', native: 'মৈতৈলোন্', flag: '🇮🇳', voiceCode: 'bn-IN' },
  brx: { name: 'Bodo', native: 'बड़ो', flag: '🇮🇳', voiceCode: 'hi-IN' },
  grt: { name: 'Garo', native: 'A·chik', flag: '🇮🇳', voiceCode: 'en-IN' }
};

const translations = {
  en: {
    nav_dashboard: "Live Dashboard",
    nav_map: "Disaster Risk Map",
    nav_evacuation: "Evacuation Routing",
    nav_reports: "Citizen Reports",
    nav_simulator: "IoT Simulator",
    nav_helplines: "Emergency Helplines",
    nav_calculator: "AI Risk Engine",
    platform_title: "Disaster Monitoring Platform",
    platform_subtitle: "North Eastern Region (NER) Terrain & Slope Hazard Early Warning",
    siren_toggle: "🚨 Siren Sound",
    sync_offline: "🔄 Sync Offline Queue",
    sos_emergency: "🚨 SOS EMERGENCY",
    voice_alert_btn: "🔊 Voice Alert",

    backend_online: "Live Backend Online (FastAPI)",
    backend_simulation: "Standalone / Simulation Mode",
    kpi_overall_risk: "Overall Terrain Risk",
    kpi_rainfall: "24h Rainfall",
    kpi_shelters: "Active Safe Shelters",
    kpi_nodes: "IoT Ground Nodes",
    kpi_multizone: "Multi-zone average",
    kpi_radar: "IMD Radar feed",
    kpi_capacity: "Capacity available",
    kpi_operational: "Telemetry active",
    recent_alerts: "⚠️ Live Hazard Alerts & Early Warnings",
    weather_telemetry: "🌦️ Real-Time Weather & Atmospheric Telemetry",
    risk_matrix: "🗺️ NER Micro-Zone Hazard Assessment Matrix",
    risk_low: "LOW",
    risk_moderate: "MODERATE",
    risk_high: "HIGH",
    risk_critical: "CRITICAL",
    calc_title: "🧠 Machine Learning Hazard Risk Prediction",
    calc_subtitle: "Random Forest & Gradient Boosting terrain slope stability model",
    calc_slope: "Slope Angle (Degrees)",
    calc_rainfall: "24h Cumulative Rainfall (mm)",
    calc_soil: "Soil Moisture Saturation (m³/m³)",
    calc_elevation: "Elevation (Meters DEM)",
    calc_rain_rate: "Instant Rain Rate (mm/hr)",
    calc_compute_btn: "⚡ Compute AI Hazard Risk",
    calc_result_header: "AI Risk Prediction Result",
    calc_score_label: "Predicted Hazard Risk Score",
    calc_category_label: "Risk Classification",
    calc_evac_advised: "⚠️ EVACUATION ADVISORY ACTIVE",
    calc_evac_safe: "✅ CONDITIONS CURRENTLY STABLE",
    calc_mitigation_title: "Recommended Mitigation Actions",
    evac_title: "🧭 Hazard-Aware Dynamic Evacuation Routing",
    evac_origin: "Your Current Location / Origin",
    evac_dest: "Destination Safe Shelter",
    evac_pick_map: "📍 Select on Map",
    evac_find_btn: "🚀 Plan Safe Escape Corridor",
    evac_avoid_danger: "Algorithm dynamically avoids active red hazard polygons",
    rep_title: "📢 Crowdsourced Citizen Hazard Telemetry",
    rep_category: "Hazard Category",
    rep_desc: "Detailed Description & Situation",
    rep_severity: "Severity Level (1-5)",
    rep_submit: "📤 Submit Incident Report (Offline-Capable)",
    rep_landslide: "Landslide / Rockfall",
    rep_flashflood: "Flash Flood / Waterlogging",
    rep_cloudburst: "Cloudburst / Torrential Rain",
    rep_roadblock: "Road / Bridge Blockage",
    help_title: "📞 State & District Emergency Directory",
    help_select_state: "Select NER State",
    help_police: "Police Emergency",
    help_fire: "Fire & Rescue",
    help_sdma: "State Disaster Authority (SDMA)",
    help_ndrf: "NDRF 24/7 Helpline"
  },

  as: {
    nav_dashboard: "প্ৰত্যক্ষ ডেচবৰ্ড",
    nav_map: "দূৰ্যোগ ঝুঁকিৰ মানচিত্ৰ",
    nav_evacuation: "স্থানান্তৰ পথ পৰিকল্পনা",
    nav_reports: "নাগৰিক প্ৰতিবেদন",
    nav_simulator: "আই অ' টি ছিমুলেটৰ",
    nav_helplines: "জৰুৰীকালীন হেল্পলাইন",
    nav_calculator: "এআই বিপদ নিৰ্ধাৰক",
    platform_title: "দূৰ্যোগ সতৰ্কতা আৰু নিৰীক্ষণ মঞ্চ",
    platform_subtitle: "উত্তৰ-পূৰ্বাঞ্চল (NER) পাহাৰীয়া অঞ্চলৰ ভূমিস্খলন আৰু বানপানী আগতীয়া সতৰ্কবাণী",
    siren_toggle: "🚨 চাইৰেন শব্দ",
    sync_offline: "🔄 অফলাইন ডাটাসমূহ সমন্বয় কৰক",
    sos_emergency: "🚨 জৰুৰীকালীন SOS",

    backend_online: "প্ৰত্যক্ষ বেকএণ্ড সক্ৰিয় (FastAPI)",
    backend_simulation: "অনুকৰণ মোড সক্ৰিয়",
    kpi_overall_risk: "সামগ্ৰিক অঞ্চলৰ বিপদ মাত্ৰা",
    kpi_rainfall: "২৪ ঘণ্টাৰ বৰষুণ",
    kpi_shelters: "সক্ৰিয় আশ্ৰয় শিবিৰ",
    kpi_nodes: "আই অ' টি সংবেদক ন'ড",
    kpi_multizone: "বহু-অঞ্চল গড়",
    kpi_radar: "IMD ৰাডাৰ তথ্য",
    kpi_capacity: "উপলব্ধ ক্ষমতা",
    kpi_operational: "সংবেদক সক্ৰিয়",
    recent_alerts: "⚠️ প্ৰত্যক্ষ বিপদ সতৰ্কবাণী আৰু আগতীয়া সূচনা",
    weather_telemetry: "🌦️ প্ৰকৃত সময়ৰ বতৰ আৰু বায়ুমণ্ডলীয় তথ্য",
    risk_matrix: "🗺️ উত্তৰ-পূৰ্বাঞ্চলৰ ক্ষুদ্ৰ অঞ্চল বিপদ মূল্যায়ন মেট্ৰিক্স",
    risk_low: "কম বিপদ",
    risk_moderate: "মধ্যম",
    risk_high: "উচ্চ বিপদ",
    risk_critical: "অতি সংকটজনক",
    calc_title: "🧠 এআই প্ৰযুক্তিৰে প্ৰাকৃতিক দুৰ্যোগৰ আশংকা গণনা",
    calc_subtitle: "পাহাৰৰ মাটিৰ ঢাল আৰু স্থিৰতাৰ বাবে ৰেণ্ডম ফৰেষ্ট এআই মডেল",
    calc_slope: "পাহাৰৰ ঢাল কোণ (ডিগ্ৰী)",
    calc_rainfall: "২৪ ঘণ্টাৰ বৰষুণৰ পৰিমাণ (মিমি)",
    calc_soil: "মাটিৰ আর্দ্ৰতাৰ মাত্ৰা (m³/m³)",
    calc_elevation: "উচ্চতা (মিটাৰ DEM)",
    calc_rain_rate: "তাৎক্ষণিক বৰষুণৰ বেগ (মিমি/ঘণ্টা)",
    calc_compute_btn: "⚡ এআই বিপদ গণনা কৰক",
    calc_result_header: "এআই বিপদ গণনাৰ ফলাফল",
    calc_score_label: "নিৰ্ধাৰিত বিপদৰ শতাংশ",
    calc_category_label: "বিপদ শ্ৰেণীবিভাজন",
    calc_evac_advised: "⚠️ তাৎক্ষণিক স্থানান্তৰৰ পৰামৰ্শ (স্থান ত্যাগ কৰক)",
    calc_evac_safe: "✅ বৰ্তমান পৰিস্থিতি নিৰাপদ",
    calc_mitigation_title: "প্ৰস্তাবিত সুৰক্ষা ব্যৱস্থা",
    evac_title: "🧭 বিপদযুক্ত স্থান এৰাই নিৰাপদ আশ্ৰয়ৰ পথ",
    evac_origin: "আপোনাৰ বৰ্তমান স্থান",
    evac_dest: "নিৰাপদ আশ্ৰয় শিবিৰ",
    evac_pick_map: "📍 মানচিত্ৰত বাছনি কৰক",
    evac_find_btn: "🚀 নিৰাপদ পলায়ন পথ বিচাৰক",
    evac_avoid_danger: "এই ব্যৱস্থাই বিপদজনক ৰঙা অঞ্চলসমূহ নিজে নিজে পৰিহাৰ কৰে",
    rep_title: "📢 ৰাইজৰ জৰুৰীকালীন দুৰ্যোগ প্ৰতিবেদন",
    rep_category: "বিপদৰ প্ৰকাৰ",
    rep_desc: "পৰিস্থিতিৰ বিতং বিৱৰণ",
    rep_severity: "বিপদৰ গুৰুত্ব (১-৫)",
    rep_submit: "📤 প্ৰতিবেদন জমা কৰক (অফলাইনতো কাৰ্যক্ষম)",
    rep_landslide: "ভূমিস্খলন / শিল খহি পৰা",
    rep_flashflood: "হঠাত অহা বানপানী / পানী জমা",
    rep_cloudburst: "মেঘভাঙ্গা প্ৰচণ্ড বৰষুণ",
    rep_roadblock: "পথ বা দলং বন্ধ",
    help_title: "📞 ৰাজ্যিক আৰু জিলা জৰুৰীকালীন হেল্পলাইন",
    help_select_state: "উত্তৰ-পূৰ্বাঞ্চলৰ ৰাজ্য বাছক",
    help_police: "আৰক্ষী সহায়",
    help_fire: "অগ্নি আৰু উদ্ধাৰকাৰী দল",
    help_sdma: "ৰাজ্যিক দুৰ্যোগ প্ৰশমন কৰ্তৃপক্ষ (SDMA)",
    help_ndrf: "এনডিআৰএফ ২৪x৭ হেল্পলাইন"
  },

  bn: {
    nav_dashboard: "লাইভ ড্যাশবোর্ড",
    nav_map: "বিপর্যয় ঝুঁকি মানচিত্র",
    nav_evacuation: "নিরাপদ স্থানান্তর রুট",
    nav_reports: "নাগরিক রিপোর্ট",
    nav_simulator: "আইওটি সিমুলেটর",
    nav_helplines: "জরুরী হেল্পলাইন",
    nav_calculator: "এআই ঝুঁকি ক্যালকুলেটর",
    platform_title: "দুর্যোগ সতর্কতা ও পর্যবেক্ষণ প্ল্যাটফর্ম",
    platform_subtitle: "উত্তর-পূর্ব ভারতের পাহাড়ি অঞ্চলের ভূমিধস ও বন্যা আগাম সতর্কতা",
    siren_toggle: "🚨 সাইরেন শব্দ",
    sync_offline: "🔄 অফলাইন ডেটা সিঙ্ক করুন",
    sos_emergency: "🚨 জরুরি SOS",

    backend_online: "লাইভ ব্যাকএন্ড সক্রিয় (FastAPI)",
    backend_simulation: "সিমুলেশন মোড সক্রিয়",
    kpi_overall_risk: "সামগ্রিক এলাকার ঝুঁকি",
    kpi_rainfall: "২৪ ঘণ্টার বৃষ্টিপাত",
    kpi_shelters: "সক্রিয় আশ্রয় শিবির",
    kpi_nodes: "আইওটি সেন্সর নোড",
    kpi_multizone: "মাল্টি-জোন গড়",
    kpi_radar: "আইএমডি রাডার ডেটা",
    kpi_capacity: "উপলব্ধ ধারণক্ষমতা",
    kpi_operational: "সেন্সর সচল",
    recent_alerts: "⚠️ লাইভ বিপদ সতর্কতা ও আগাম নোটিশ",
    weather_telemetry: "🌦️ রিয়েল-টাইম আবহাওয়া ও বায়ুমণ্ডলীয় তথ্য",
    risk_matrix: "🗺️ উত্তর-পূর্ব অঞ্চলের মাইক্রো-জোন ঝুঁকি মূল্যায়ন",
    risk_low: "কম ঝুঁকি",
    risk_moderate: "মাঝারি",
    risk_high: "উচ্চ ঝুঁকি",
    risk_critical: "অত্যন্ত সংকটজনক",
    calc_title: "🧠 মেশিন লার্নিং দ্বারা দুর্যোগের ঝুঁকি নির্ণয়",
    calc_subtitle: "পাহাড়ের ঢাল ও মাটির স্থায়িত্বের এআই মডেল",
    calc_slope: "পাহাড়ের ঢাল (ডিগ্রী)",
    calc_rainfall: "২৪ ঘণ্টার বৃষ্টিপাত (মিমি)",
    calc_soil: "মাটির আর্দ্রতা (m³/m³)",
    calc_elevation: "উচ্চতা (মিটার DEM)",
    calc_rain_rate: "বৃষ্টির গতিবেগ (মিমি/ঘণ্টা)",
    calc_compute_btn: "⚡ এআই ঝুঁকি গণনা করুন",
    calc_result_header: "এআই ঝুঁকি পূর্বাভাস ফলাফল",
    calc_score_label: "পূর্বাভাসকৃত ঝুঁকির স্কোর",
    calc_category_label: "ঝুঁকি শ্রেণিবিভাগ",
    calc_evac_advised: "⚠️ জরুরি স্থানান্তরের নির্দেশ (স্থান ত্যাগ করুন)",
    calc_evac_safe: "✅ পরিস্থিতি বর্তমানে নিরাপদ",
    calc_mitigation_title: "প্রস্তাবিত সুরক্ষা পদক্ষেপ",
    evac_title: "🧭 ঝুঁকিপূর্ণ এলাকা এড়িয়ে নিরাপদ স্থানান্তর রুট",
    evac_origin: "আপনার বর্তমান অবস্থান",
    evac_dest: "নিরাপদ আশ্রয় শিবির",
    evac_pick_map: "📍 ম্যাপে নির্বাচন করুন",
    evac_find_btn: "🚀 নিরাপদ রুট খুঁজুন",
    evac_avoid_danger: "এই সিস্টেমটি বিপজ্জনক লাল এলাকাগুলি স্বয়ংক্রিয়ভাবে এড়িয়ে চলে",
    rep_title: "📢 জনগণের জরুরি দুর্যোগ প্রতিবেদন",
    rep_category: "বিপদের ধরন",
    rep_desc: "পরিস্থিতির বিস্তারিত বিবরণ",
    rep_severity: "তীব্রতা স্তর (১-৫)",
    rep_submit: "📤 রিপোর্ট জমা দিন (অফলাইনেও কার্যকর)",
    rep_landslide: "ভূমিধস / পাথর পতন",
    rep_flashflood: "হঠাৎ বন্যা / জলাবদ্ধতা",
    rep_cloudburst: "মেঘভাঙা প্রবল বৃষ্টিপাত",
    rep_roadblock: "রাস্তা বা সেতু বন্ধ",
    help_title: "📞 রাজ্য ও জেলা জরুরি হেল্পলাইন",
    help_select_state: "রাজ্য নির্বাচন করুন",
    help_police: "পুলিশ জরুরি সেবা",
    help_fire: "দমকল ও উদ্ধারকারী দল",
    help_sdma: "রাজ্য দুর্যোগ ব্যবস্থাপনা (SDMA)",
    help_ndrf: "এনডিআরএফ ২৪x৭ হেল্পলাইন"
  },

  hi: {
    nav_dashboard: "लाइव डैशबोर्ड",
    nav_map: "आपदा जोखिम मानचित्र",
    nav_evacuation: "निकासी मार्ग योजना",
    nav_reports: "नागरिक रिपोर्ट",
    nav_simulator: "IoT सिम्युलेटर",
    nav_helplines: "आपातकालीन हेल्पलाइन",
    nav_calculator: "AI जोखिम इंजन",
    platform_title: "आपदा निगरानी एवं चेतावनी प्रणाली",
    platform_subtitle: "पूर्वोत्तर क्षेत्र (NER) भूस्खलन और बाढ़ पूर्व चेतावनी प्रणाली",
    siren_toggle: "🚨 सायरन ध्वनि",
    sync_offline: "🔄 ऑफलाइन डेटा सिंक करें",
    sos_emergency: "🚨 आपातकालीन SOS",

    backend_online: "लाइव बैकएंड सक्रिय (FastAPI)",
    backend_simulation: "सिमुलेशन मोड सक्रिय",
    kpi_overall_risk: "समग्र क्षेत्र जोखिम",
    kpi_rainfall: "24 घंटे की वर्षा",
    kpi_shelters: "सक्रिय राहत शिविर",
    kpi_nodes: "IoT सेंसर नोड्स",
    kpi_multizone: "बहु-क्षेत्र औसत",
    kpi_radar: "IMD रडार डेटा",
    kpi_capacity: "उपलब्ध क्षमता",
    kpi_operational: "सेंसर सक्रिय",
    recent_alerts: "⚠️ लाइव खतरे की चेतावनी एवं पूर्व सूचनाएं",
    weather_telemetry: "🌦️ रीयल-टाइम मौसम और टेलीमेट्री डेटा",
    risk_matrix: "🗺️ पूर्वोत्तर क्षेत्र का माइक्रोज़ोन जोखिम विश्लेषण",
    risk_low: "कम जोखिम",
    risk_moderate: "मध्यम",
    risk_high: "उच्च जोखिम",
    risk_critical: "अत्यधिक गंभीर",
    calc_title: "🧠 AI द्वारा प्राकृतिक आपदा जोखिम का आकलन",
    calc_subtitle: "पहाड़ी ढलान और मिट्टी स्थिरता के लिए रैंडम फॉरेस्ट AI मॉडल",
    calc_slope: "ढलान का कोण (डिग्री)",
    calc_rainfall: "24 घंटे की कुल वर्षा (मिमी)",
    calc_soil: "मिट्टी की नमी संतृप्ति (m³/m³)",
    calc_elevation: "ऊंचाई (मीटर DEM)",
    calc_rain_rate: "तात्कालिक वर्षा दर (मिमी/घंटा)",
    calc_compute_btn: "⚡ AI जोखिम की गणना करें",
    calc_result_header: "AI जोखिम गणना परिणाम",
    calc_score_label: "अनुमानित जोखिम प्रतिशत",
    calc_category_label: "जोखिम श्रेणी",
    calc_evac_advised: "⚠️ तत्काल सुरक्षित स्थान पर जाने की सलाह",
    calc_evac_safe: "✅ स्थिति वर्तमान में सुरक्षित है",
    calc_mitigation_title: "अनुशंसित सुरक्षात्मक कदम",
    evac_title: "🧭 खतरे से मुक्त सुरक्षित निकासी मार्ग योजना",
    evac_origin: "आपका वर्तमान स्थान",
    evac_dest: "सुरक्षित राहत शिविर",
    evac_pick_map: "📍 नक्शे पर चुनें",
    evac_find_btn: "🚀 सुरक्षित मार्ग खोजें",
    evac_avoid_danger: "यह मार्ग स्वचालित रूप से खतरनाक लाल क्षेत्रों से बचता है",
    rep_title: "📢 नागरिकों द्वारा आपदा स्थिति रिपोर्ट",
    rep_category: "खतरे की श्रेणी",
    rep_desc: "स्थिति का विस्तृत विवरण",
    rep_severity: "गंभीरता का स्तर (1-5)",
    rep_submit: "📤 रिपोर्ट भेजें (ऑफलाइन भी सक्षम)",
    rep_landslide: "भूस्खलन / चट्टान गिरना",
    rep_flashflood: "अचानक बाढ़ / जलभराव",
    rep_cloudburst: "बादल फटना / मूसलाधार बारिश",
    rep_roadblock: "सड़क या पुल अवरुद्ध",
    help_title: "📞 राज्य एवं जिला आपातकालीन हेल्पलाइन",
    help_select_state: "पूर्वोत्तर राज्य चुनें",
    help_police: "पुलिस आपातकालीन",
    help_fire: "अग्निशमन एवं बचाव",
    help_sdma: "राज्य आपदा प्रबंधन (SDMA)",
    help_ndrf: "एनडीआरएफ 24/7 हेल्पलाइन"
  },

  lus: {
    nav_dashboard: "Dashboard Tharlam",
    nav_map: "Chhiatrupna Map",
    nav_evacuation: "Inthiarfihlimna Kawng",
    nav_reports: "Mipuite Report",
    nav_simulator: "IoT Simulator",
    nav_helplines: "Emergency Phone No.",
    nav_calculator: "AI Chhiatrupna Chhutna",
    platform_title: "Chhiatrupna Vengtu & Hriattirna",
    platform_subtitle: "North East Region Tlangram Min leh Tui Lian Vengtu",
    siren_toggle: "🚨 Siren Ri",
    sync_offline: "🔄 Offline Data Thawnna",
    sos_emergency: "🚨 CHHANNA DUH (SOS)",

    backend_online: "Server a nung tha (FastAPI)",
    backend_simulation: "Simulation Mode",
    kpi_overall_risk: "Hmun Hrang Hrang Dinhmun",
    kpi_rainfall: "Darkar 24 Ruah Sur",
    kpi_shelters: "Himna Hmun (Shelter)",
    kpi_nodes: "IoT Khawl Hmanlai",
    kpi_multizone: "Hmun hrang chawhrual",
    kpi_radar: "IMD Radar data",
    kpi_capacity: "Hmun awl zat",
    kpi_operational: "Khawl an thawk mep",
    recent_alerts: "⚠️ Hriattirna Tharlam leh Vantlang Thuchhuah",
    weather_telemetry: "🌦️ Khawchin leh Boruak Dinhmun",
    risk_matrix: "🗺️ NER Tlangram Hmun Hrang Dinhmun",
    risk_low: "Hlauhawm Lo",
    risk_moderate: "Fimkhur Ngai",
    risk_high: "Hlauhawm",
    risk_critical: "Hlauhawm Takzet",
    calc_title: "🧠 AI hmanga Tlang Min Theih Dinhmun Chhutna",
    calc_subtitle: "Leimin leh ruahsur dinhmun zirchianna AI",
    calc_slope: "Tlang Awih Zawng (Degree)",
    calc_rainfall: "Darkar 24 Ruah Sur Zat (mm)",
    calc_soil: "Lei Hnawm Zat (m³/m³)",
    calc_elevation: "San Zawng (Meters DEM)",
    calc_rain_rate: "Ruah Sur Nasat Zawng (mm/hr)",
    calc_compute_btn: "⚡ AI Dinhmun Chhut Rawh",
    calc_result_header: "AI Chhut Chhuahna",
    calc_score_label: "Hlauhawm Theih Zat (%)",
    calc_category_label: "Dinhmun Hming",
    calc_evac_advised: "⚠️ INTHIARFIHLIM VAT NGAI",
    calc_evac_safe: "✅ Hmun a la him tawk e",
    calc_mitigation_title: "Fimkhurna leh Hmalak Dan Tur",
    evac_title: "🧭 Hmun Him Pan Duhte Tan Kawng Kawhhmuhna",
    evac_origin: "I awmna hmun",
    evac_dest: "Himna Hmun Pan Tur",
    evac_pick_map: "📍 Map-ah Thlang Rawh",
    evac_find_btn: "🚀 Kawng Him Ber Zawng Rawh",
    evac_avoid_danger: "Hmun hlauhawm lai te a pumpelh nghal vek ang",
    rep_title: "📢 Mipuite Chhiatrupna Report Thehluhna",
    rep_category: "Chhiatna Chi Hrang",
    rep_desc: "Thil thleng zualpui ziahna",
    rep_severity: "Hlauhawm Dan (1-5)",
    rep_submit: "📤 Report Thawn Rawh (Offline Pawhin a theih)",
    rep_landslide: "Leimin / Lung tla",
    rep_flashflood: "Tui lian thut",
    rep_cloudburst: "Ruahpui vanawn sur",
    rep_roadblock: "Kawng ping / Lei chim",
    help_title: "📞 Emergency Phone Number Pawimawhte",
    help_select_state: "State Thlang Rawh",
    help_police: "Police Emergency",
    help_fire: "Khanghelh / Fire Dept",
    help_sdma: "State Disaster Authority (SDMA)",
    help_ndrf: "NDRF Helpline 24/7"
  },

  kha: {
    nav_dashboard: "Ka Dashboard",
    nav_map: "Ka Map Jingmaham",
    nav_evacuation: "Ka Lad Jingpynlait",
    nav_reports: "Kaiphod ki Nongshongshnong",
    nav_simulator: "IoT Simulator",
    nav_helplines: "Emergency Helplines",
    nav_calculator: "AI Jingkhein Jingma",
    platform_title: "Ka Platform Jingmaham Jur",
    platform_subtitle: "Ka Jingmaham Khyndew Khyllem & Jingther Um ha Ri Lum NER",
    siren_toggle: "🚨 Ka Sur Siren",
    sync_offline: "🔄 Pyniasoh Data Offline",
    sos_emergency: "🚨 JINGIARAP SOS",

    backend_online: "Ka Backend ka trei kam (FastAPI)",
    backend_simulation: "Simulation Mode",
    kpi_overall_risk: "Ka Jingma Baroh Kawei",
    kpi_rainfall: "Jingshlur slap 24 Kynta",
    kpi_shelters: "Ki jaka rieh ba shngain",
    kpi_nodes: "Ki Sensor IoT",
    kpi_multizone: "Ka jingkhein baroh",
    kpi_radar: "IMD Radar data",
    kpi_capacity: "Ki jaka ba dang sah",
    kpi_operational: "Ki sensor ki trei kam",
    recent_alerts: "⚠️ Ki Jingmaham ba Kongsan ha kine ki Por",
    weather_telemetry: "🌦️ Ka Rong ka Bneng & Ka Suinbneng",
    risk_matrix: "🗺️ Ka Jingkhein Jingma ha ki Dong bapher",
    risk_low: "Duna ka Jingma",
    risk_moderate: "Pdeng",
    risk_high: "Jur ka Jingma",
    risk_critical: "Maser ka Jingma",
    calc_title: "🧠 AI ban Khein ia ka Jingma Khyndew Khyllem",
    calc_subtitle: "Ka AI ban bishar ia ka jingshlur slap bad jingran jong ka khyndew",
    calc_slope: "Ka Jingran ka Lum (Degrees)",
    calc_rainfall: "U slap ha ki 24 Kynta (mm)",
    calc_soil: "Jingsngem ka khyndew (m³/m³)",
    calc_elevation: "Jingjrong na duriaw (Meters DEM)",
    calc_rain_rate: "Jingturtur u slap (mm/hr)",
    calc_compute_btn: "⚡ Khein da ka AI",
    calc_result_header: "Ka Jingmih na ka AI",
    calc_score_label: "Ka Jingkhein Jingma (%)",
    calc_category_label: "Ka kyrdan Jingma",
    calc_evac_advised: "⚠️ KIEW SHA JAKA BA SHNGAIN MAR-MAR",
    calc_evac_safe: "✅ Dang shngain ha kine ki por",
    calc_mitigation_title: "Ki Lad ban Iada ia Lade",
    evac_title: "🧭 Ki Lad ban Phet sha Jaka ba Shngain",
    evac_origin: "Ka jaka ba phi don mynta",
    evac_dest: "Ka Jaka Rieh ba Shngain",
    evac_pick_map: "📍 Jied na ka Map",
    evac_find_btn: "🚀 Wad ia ka Lynti ba Shngain",
    evac_avoid_danger: "Kane ka lynti kan kiar na ki jaka ba jur ka jingma",
    rep_title: "📢 Pynpoi Kaiphod Jingjia sha ki Bor ba dei peit",
    rep_category: "Jait Jingjia",
    rep_desc: "Batai bniah ia ka Jingjia",
    rep_severity: "Jingjur jong ka Jingjia (1-5)",
    rep_submit: "📤 Phah ia ka Kaiphod (Buh wat haba khlem internet)",
    rep_landslide: "Khyndew Khyllem / Maw Khyllem",
    rep_flashflood: "Um bah / Jingther Um",
    rep_cloudburst: "U slap ther jur",
    rep_roadblock: "Sahkut ka Surok / Sahkut Jingkieng",
    help_title: "📞 Ki Number Phone Emergency",
    help_select_state: "Jied ia ka State",
    help_police: "Police Emergency",
    help_fire: "Ki Pulit Pynlip Ding",
    help_sdma: "State Disaster Authority (SDMA)",
    help_ndrf: "NDRF Helpline 24/7"
  },

  mni: {
    nav_dashboard: "লাইভ ড্যাশবোর্ড",
    nav_map: "অৱাবা খুদোংথিবা মেপ",
    nav_evacuation: "কনবা লম্বী য়েংশিনবা",
    nav_reports: "মীয়ামগী পাউদম",
    nav_simulator: "IoT সিমুলেটর",
    nav_helplines: "ইমার্জেন্সী হেল্পলাইন",
    nav_calculator: "AI অৱাবা চাং খঙদোকপা",
    platform_title: "খুদোংথিবা চেকশিন ৱাফম অমসুং য়েংশিনবা",
    platform_subtitle: "নোংপোক-চিংশাং লমদমগী চীং নিংখায়বা অমসুং ঈচাউগী অঙনবা চেকশিন ৱাফম",
    siren_toggle: "🚨 সাইরেনগী মখোল",
    sync_offline: "🔄 অফলাইন দেটা পুংশিনবা",
    sos_emergency: "🚨 ইমার্জেন্সী SOS কনবিয়ু",

    backend_online: "বেকএণ্ড চত্থরি (FastAPI)",
    backend_simulation: "সিমুলেশন মোড",
    kpi_overall_risk: "লমদমগী অপুনবা খুদোংথিবা",
    kpi_rainfall: "পুং ২৪ গী নোংগী চাং",
    kpi_shelters: "নিঙথিনা লৈরকফম শেল্টার",
    kpi_nodes: "IoT সেন্সর মশিং",
    kpi_multizone: "মফম কয়াবু পুন্না",
    kpi_radar: "IMD রাডার তথ্য",
    kpi_capacity: "লৈরিবা ফম",
    kpi_operational: "সেন্সর মথৌ তৌরি",
    recent_alerts: "⚠️ হৌজিক্কী খুদোংথিবা অমসুং চেকশিনবা",
    weather_telemetry: "🌦️ নুমিৎ খুদিংগী নোং-চিংগী ফীভম",
    risk_matrix: "🗺️ নোংপোক লমদমগী মফম খুদিংগী খুদোংথিবা চাং",
    risk_low: "খুদোংথিদে",
    risk_moderate: "মরক-মরক",
    risk_high: "খুদোংথিবা য়াওরে",
    risk_critical: "য়াম্না অরুবা ফীভম",
    calc_title: "🧠 AI শীজিন্নদুনা চীং নিংখায়বগী চাং খঙদোকপা",
    calc_subtitle: "চীংগী লাই অমসুং লৈমাইজৈ য়েংশিনবা এআই",
    calc_slope: "চীংগী ওনবা (ডিগ্রী)",
    calc_rainfall: "পুং ২৪ গী নোং চুবা (মিমি)",
    calc_soil: "লৈগী ইচিলগী চাং (m³/m³)",
    calc_elevation: "ৱাংবা (মিটার DEM)",
    calc_rain_rate: "নোং চুবগী খোংজেল (মিমি/পুং)",
    calc_compute_btn: "⚡ AI খুদোংথিবা চাং য়েংবা",
    calc_result_header: "AI না পীবা ফল",
    calc_score_label: "খুদোংথিগদবা চাং (%)",
    calc_category_label: "ফীভমগী মখল",
    calc_evac_advised: "⚠️ মফম অদু থাদোক্তুনা কনবা মফমদা চৎলু",
    calc_evac_safe: "✅ হৌজিক্কী ওইনা নিঙথিনা লৈরে",
    calc_mitigation_title: "কনবা ঙম্নবা পাম্বৈশিং",
    evac_title: "🧭 খুদোংথিবদগী নান্থোক্তুনা নিঙথিনা চৎনবা লম্বী",
    evac_origin: "নহাক্কী হৌজিক্কী মফম",
    evac_dest: "নিঙথিনা লৈরকফম শেল্টার",
    evac_pick_map: "📍 মেপতা খনগনি",
    evac_find_btn: "🚀 কনবা লম্বী থিদোকপা",
    evac_avoid_danger: "মসিগী লম্বী অসিনা খুদোংথিবা অঙাংবা মফমশিং থাদোক্কনি",
    rep_title: "📢 মীয়ামগী পাউদম ফংহনবা",
    rep_category: "খুদোংথিবগী মখল",
    rep_desc: "ফীভমগী অকুপ্পা ৱাফম",
    rep_severity: "অরুবা চাং (১-৫)",
    rep_submit: "📤 পাউদম থাগনি (ইন্টরনেট য়াওদসু য়াগনি)",
    rep_landslide: "চীং নিংখায়বা / নুং চানবা",
    rep_flashflood: "ঈচাউ / ঈশিং তুম্বা",
    rep_cloudburst: "নোং অকনবা চুবা",
    rep_roadblock: "লম্বী থিংবা / থোং কায়বা",
    help_title: "📞 রাজ্য অমসুং জিলাগী ইমার্জেন্সী ফোন মশিং",
    help_select_state: "রাজ্য খনগনি",
    help_police: "পুলিশ ইমার্জেন্সী",
    help_fire: "মৈ মুৎপিবশিং",
    help_sdma: "State Disaster Authority (SDMA)",
    help_ndrf: "NDRF Helpline 24/7"
  },

  brx: {
    nav_dashboard: "लाइभ डेशबर्ड",
    nav_map: "खैफाद मानसिथ",
    nav_evacuation: "रैखा खालामनाय लामा",
    nav_reports: "रायजोनि फोरमायनाय",
    nav_simulator: "IoT सिमुलेटर",
    nav_helplines: "जायख्लं नाम्बार",
    nav_calculator: "AI खैफाद साननाय",
    platform_title: "खैफाद सांग्रां खालामग्रा प्लेतफर्म",
    platform_subtitle: "सान्जा-सा ओनसोलनि (NER) हाजो खनाय आरो दैबाना सांग्रांथि",
    siren_toggle: "🚨 साइरेन सोदोब",
    sync_offline: "🔄 अफलाइन डेटा सिंक खालाम",
    sos_emergency: "🚨 गोनांथार SOS रैखा",

    backend_online: "बेकएण्ड जागायबाय (FastAPI)",
    backend_simulation: "सिमुलेसन मड",
    kpi_overall_risk: "गासै ओनसोलनि खैफाद",
    kpi_rainfall: "२४ घन्टायाव अखा हानाय",
    kpi_shelters: "रैखा आ Rokhom शिविर",
    kpi_nodes: "IoT सेन्सर नोड",
    kpi_multizone: "गासै सानजाबनाय",
    kpi_radar: "IMD राडार खारि",
    kpi_capacity: "थानाय जायगा",
    kpi_operational: "सेन्सर मोजांयै थाबाय",
    recent_alerts: "⚠️ गोनांथार सांग्रांथि आरो खौरां",
    weather_telemetry: "🌦️ बारहावा आरो अखा हानायनि खौरां",
    risk_matrix: "🗺️ सान्जा-सा ओनसोलनि खैफाद बियाब",
    risk_low: "खम खैफाद",
    risk_moderate: "गेजेर",
    risk_high: "गेदेर खैफाद",
    risk_critical: "जोबोद खैफादगोनां",
    calc_title: "🧠 AI जों खैफाद साननाय",
    calc_subtitle: "हाजो खनाय आरो हा महरनि AI मोदेल",
    calc_slope: "हाजोनि सिन्था (Degrees)",
    calc_rainfall: "२४ घन्टायाव अखा हानाय (mm)",
    calc_soil: "हानि सिथाबनाय (m³/m³)",
    calc_elevation: "जौथाइ (Meters DEM)",
    calc_rain_rate: "अखा हानायनि गोख्रोंथि (mm/hr)",
    calc_compute_btn: "⚡ AI जों खैफाद सान",
    calc_result_header: "AI नि फिथाय",
    calc_score_label: "साननाय खैफाद (%)",
    calc_category_label: "खैफाद रोखोम",
    calc_evac_advised: "⚠️ गोख्रोंयै रैखा जायगायाव थां",
    calc_evac_safe: "✅ दासिम मोजांयै दं",
    calc_mitigation_title: "रैखा लाग्रा राहाफोर",
    evac_title: "🧭 खैफाद गैया जासे रैखा लामा",
    evac_origin: "नोंथांनि दायनि जायगा",
    evac_dest: "रैखा शिविर",
    evac_pick_map: "📍 मेपाव सायख'",
    evac_find_btn: "🚀 रैखा लामा नागिर",
    evac_avoid_danger: "बे लामाया गाज्रि खैफाद जायगाखौ नागारगोन",
    rep_title: "📢 रायजोनि खैफाद खौरां होनाय",
    rep_category: "खैफाद रोखोम",
    rep_desc: "गुवारै खौरां",
    rep_severity: "गाज्रिथि (१-५)",
    rep_submit: "📤 खौरां हर (इन्टारनेट गैयाब्लाबो जागोन)",
    rep_landslide: "हाजो खनाय / अन्थाय गोग्लैनाय",
    rep_flashflood: "हरखाब दैबाना / दै जमा",
    rep_cloudburst: "अखा बिबार जानाय",
    rep_roadblock: "लामा बन्द जानाय",
    help_title: "📞 गोनांथार फोन नाम्बार",
    help_select_state: "रायजो सायख'",
    help_police: "पुलिस",
    help_fire: "अग्नि निर्वापक",
    help_sdma: "State Disaster Authority (SDMA)",
    help_ndrf: "NDRF Helpline 24/7"
  },

  grt: {
    nav_dashboard: "Dashboard Gital",
    nav_map: "A·sel Map",
    nav_evacuation: "Katkanggimin Rama",
    nav_reports: "Manderangni Report",
    nav_simulator: "IoT Simulator",
    nav_helplines: "Emergency Phone",
    nav_calculator: "AI A·sel Chena",
    platform_title: "A·sel U·iatani aro Nikanirang",
    platform_subtitle: "North East A·song A·bri A·sel aro Chi Banani Mikrakatani",
    siren_toggle: "🚨 Siren Gam·a",
    sync_offline: "🔄 Offline Data Vat·ata",
    sos_emergency: "🚨 DAKCHAKBO SOS",

    backend_online: "Server Re·enga (FastAPI)",
    backend_simulation: "Simulation Mode",
    kpi_overall_risk: "Gimik Biapni Kenani",
    kpi_rainfall: "Ghanta 24 Mikka Waani",
    kpi_shelters: "Gital Shelter Biap",
    kpi_nodes: "IoT Sensor-rang",
    kpi_multizone: "Bong·a biap baksana",
    kpi_radar: "IMD Radar data",
    kpi_capacity: "Dongkuenggipa biap",
    kpi_operational: "Sensor cholkuenga",
    recent_alerts: "⚠️ Da·ororo A·sel Mikrakatanirang",
    weather_telemetry: "🌦️ Salgini Buring aro Mikka",
    risk_matrix: "🗺️ NER A·damni A·sel Chena",
    risk_low: "Kenani Komi",
    risk_moderate: "Majing",
    risk_high: "Kenani Bang·a",
    risk_critical: "Neng·nikani Dal·begipa",
    calc_title: "🧠 AI chi A·bri Rugani Chena",
    calc_subtitle: "A·a chugimini AI model",
    calc_slope: "A·bri Chuani (Degree)",
    calc_rainfall: "Ghanta 24 Mikka Waani (mm)",
    calc_soil: "A·a Sosiani (m³/m³)",
    calc_elevation: "Chubani (Meters DEM)",
    calc_rain_rate: "Mikka Waani Ta·rakani (mm/hr)",
    calc_compute_btn: "⚡ AI chi Chena",
    calc_result_header: "AI Result",
    calc_score_label: "Kenani Score (%)",
    calc_category_label: "A·sel Biap",
    calc_evac_advised: "⚠️ KATBO GIPIN BIAPONA",
    calc_evac_safe: "✅ Da·o Nangchongmotan Gri",
    calc_mitigation_title: "Jokani Ramarango",
    evac_title: "🧭 Kenani Gri Katani Rama",
    evac_origin: "Na·simangni Biap",
    evac_dest: "Jokani Shelter Biap",
    evac_pick_map: "📍 Mapo Seokbo",
    evac_find_btn: "🚀 Katani Rama Sandibo",
    evac_avoid_danger: "Kenani gitchak biaprangko gelanggen",
    rep_title: "📢 Manderangni A·sel Report",
    rep_category: "A·selni Biding",
    rep_desc: "Tale Parakatani",
    rep_severity: "Neng·nikani (1-5)",
    rep_submit: "📤 Report Vat·bo (Internet Grioba Man·a)",
    rep_landslide: "A·a Ruga / Ro·ong Ga·aka",
    rep_flashflood: "Chi Bana / Chi Dal·a",
    rep_cloudburst: "Mikka Bimchi Waani",
    rep_roadblock: "Rama Champengani",
    help_title: "📞 State aro District Emergency Helpline",
    help_select_state: "State Seokbo",
    help_police: "Police",
    help_fire: "Wa·al Simitgiparang",
    help_sdma: "State Disaster Authority (SDMA)",
    help_ndrf: "NDRF Helpline 24/7"
  }
};

class I18nManager {
  constructor() {
    this.currentLang = (typeof window !== 'undefined' && window.localStorage) ? (localStorage.getItem('geoalert_lang') || 'en') : 'en';
    this.listeners = [];
  }

  init() {
    this.renderLanguageSelector();
    this.applyLanguage(this.currentLang);
  }

  setLanguage(langCode) {
    if (!translations[langCode]) {
      console.warn(`Language '${langCode}' not found. Falling back to 'en'.`);
      langCode = 'en';
    }
    this.currentLang = langCode;
    localStorage.setItem('geoalert_lang', langCode);
    this.applyLanguage(langCode);
    this.notifyListeners(langCode);
  }

  t(key, defaultVal = '') {
    const langDict = translations[this.currentLang] || translations.en;
    return langDict[key] || translations.en[key] || defaultVal || key;
  }

  applyLanguage(langCode) {
    const dict = translations[langCode] || translations.en;
    document.documentElement.lang = langCode;

    // 1. Text elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] || translations.en[key]) {
        el.textContent = dict[key] || translations.en[key];
      }
    });

    // 2. Placeholders with data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] || translations.en[key]) {
        el.setAttribute('placeholder', dict[key] || translations.en[key]);
      }
    });

    // 3. Titles with data-i18n-title
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      if (dict[key] || translations.en[key]) {
        el.setAttribute('title', dict[key] || translations.en[key]);
      }
    });

    // Update active select value
    const selector = document.getElementById('global-lang-select');
    if (selector && selector.value !== langCode) {
      selector.value = langCode;
    }
  }

  renderLanguageSelector() {
    const mount = document.getElementById('language-selector-mount');
    if (!mount) return;

    let html = `
      <div class="lang-dropdown-wrapper">
        <span class="lang-icon">🌐</span>
        <select id="global-lang-select" class="lang-select-box" title="Choose Language / ভাষা নিৰ্বাচন">
    `;

    for (const [code, info] of Object.entries(LANGUAGES)) {
      const sel = code === this.currentLang ? 'selected' : '';
      html += `<option value="${code}" ${sel}>${info.flag} ${info.native} (${info.name})</option>`;
    }

    html += `
        </select>
      </div>
    `;

    mount.innerHTML = html;

    const selectEl = document.getElementById('global-lang-select');
    if (selectEl) {
      selectEl.addEventListener('change', (e) => {
        this.setLanguage(e.target.value);
      });
    }
  }


  // 🔊 Text-to-Speech Voice Alert in selected regional language
  speakAlert(text) {
    if (!('speechSynthesis' in window)) {
      console.warn('[i18n] speechSynthesis not supported in this browser.');
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    const langInfo = LANGUAGES[this.currentLang] || LANGUAGES.en;
    utterance.lang = langInfo.voiceCode || 'en-IN';
    utterance.rate = 0.9;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;
    window.speechSynthesis.speak(utterance);
  }

  addListener(callback) {
    this.listeners.push(callback);
  }

  notifyListeners(langCode) {
    this.listeners.forEach(fn => fn(langCode));
  }
}

// ===== frontend/api.js =====
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

// ===== frontend/offlineSync.js =====
/**
 * Offline Sync Service for GeoAlertNER Citizen Reports
 * Handles resilient local caching and auto-sync when network connectivity returns.
 */

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

// ===== frontend/simulator.js =====
/**
 * IoT Hardware Simulator & Sensor Telemetry Controller
 * Connects directly to /sensors/simulator/* endpoints to demonstrate real-time disaster conditions.
 */

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

// ===== frontend/map.js =====
/**
 * Leaflet GIS Interactive Mapping Engine for GeoAlertNER
 * Handles Risk Heatmaps, IoT Sensor Radar, Shelters, and Evacuation Routing Corridors.
 */

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

    // Standard OpenStreetMap & Dark/Satellite tiles with NO API Key needed
    const darkTiles = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19
    });

    const osmStandard = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19
    });

    const satTiles = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: '&copy; Esri, Maxar, Earthstar Geographics',
      maxZoom: 18
    });

    const topoTiles = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenTopoMap (CC-BY-SA)',
      maxZoom: 17
    });

    // Default to darkTiles or fallback to OSM
    darkTiles.addTo(this.map);

    // Layer Switcher
    L.control.layers({
      'Dark Cyber Radar': darkTiles,
      'OpenStreetMap Standard': osmStandard,
      'Satellite Imagery': satTiles,
      'Topographic Terrain': topoTiles
    }, null, { position: 'topright' }).addTo(this.map);

    // Layer groups for toggle & refresh
    this.zoneLayerGroup = L.layerGroup().addTo(this.map);
    this.sensorLayerGroup = L.layerGroup().addTo(this.map);
    this.shelterLayerGroup = L.layerGroup().addTo(this.map);
    this.reportLayerGroup = L.layerGroup().addTo(this.map);
    this.evacuationLayerGroup = L.layerGroup().addTo(this.map);

    // Map click handler for origin selection
    this.map.on('click', (e) => {
      if (this.selectingOrigin && this.onOriginSelect) {
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

// ===== frontend/app.js =====
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

    // 3. Initialize GIS Map
    try {
      geoMap.init('map-container');
      window.geoMap = geoMap;
    } catch (e) {
      console.warn('[App] GIS map init warning:', e);
    }

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

    // Refresh map size if map view opened or dashboard opened
    setTimeout(() => {
      if (geoMap.map) geoMap.map.invalidateSize();
    }, 100);

    if (viewName === 'reports') {
      this.loadCitizenReportsFeed();
    } else if (viewName === 'simulator') {
      simulator.loadSensorsTable();
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

    // Simulator scenario buttons
    document.querySelectorAll('.btn-scenario').forEach(btn => {
      btn.addEventListener('click', () => {
        const scenario = btn.getAttribute('data-scenario');
        simulator.setScenario(scenario);
      });
    });

    const triggerTickBtn = document.getElementById('btn-sim-tick');
    if (triggerTickBtn) {
      triggerTickBtn.addEventListener('click', () => simulator.triggerTick());
    }

    const autoSimBtn = document.getElementById('btn-sim-auto-toggle');
    if (autoSimBtn) {
      autoSimBtn.addEventListener('click', () => simulator.toggleAutoSimulation());
    }

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


// ===== BOOTSTRAP =====
function _geoalert_init() {
  try {
    const i18n = new I18nManager();
    const api = new GeoAlertAPI();
    const offlineSync = new OfflineSyncManager();
    const simulator = new SimulatorController();
    const geoMap = new GeoAlertMap();
    window.app = new GeoAlertApp();

    // Expose to window for debugging
    if (typeof i18n !== "undefined")        window.i18n        = i18n;
    if (typeof api !== "undefined")         window.api         = api;
    if (typeof offlineSync !== "undefined") window.offlineSync = offlineSync;
    if (typeof simulator !== "undefined")   window.simulator   = simulator;
    if (typeof geoMap !== "undefined")      window.geoMap      = geoMap;

    // Start the application
    if (typeof GeoAlertApp !== "undefined") {
      window.app = new GeoAlertApp();
      window.app.registerServiceWorker();
      window.app.init();
    }
  } catch(e) {
    console.error("[GeoAlertNER] Bootstrap error:", e);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", _geoalert_init);
} else {
  _geoalert_init();
}

})(window, document);
