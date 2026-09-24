/**
 * GeoAlertNER - Multilingual (i18n) Engine for North Eastern Region (NER)
 * Supports: English, Assamese, Bengali, Hindi, Mizo, Khasi, Manipuri/Meitei, Bodo, and Garo.
 */

export const LANGUAGES = {
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

export const translations = {
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

export const i18n = new I18nManager();
