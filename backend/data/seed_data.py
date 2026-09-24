import logging
from sqlalchemy.orm import Session
from backend.app.models.risk_zone import RiskZone, RiskLevel, HazardType
from backend.app.models.shelter import SafeShelter, ShelterType
from backend.app.models.sensor import SensorNode, SensorType
from backend.app.models.helpline import EmergencyHelpline
from backend.app.models.telemetry import CrowdTelemetryReport, ReportCategory, ReportStatus
from backend.app.models.user import User, UserRole
from backend.app.core.security import get_password_hash

logger = logging.getLogger(__name__)

def seed_database(db: Session):
    """Populates realistic NER risk zones, safe shelters, sensors, helplines, and default users."""
    
    # Seed default user accounts if none exist
    if not db.query(User).first():
        logger.info("Seeding default demo users (Admin, Field Officer, Citizen)...")
        demo_users = [
            User(
                full_name="Disaster Operations Admin",
                email="admin@geoalertner.in",
                hashed_password=get_password_hash("Admin@123"),
                role=UserRole.ADMIN,
                state="National",
                is_active=True
            ),
            User(
                full_name="Rajesh Kalita (SDRF Field Officer)",
                email="officer@geoalertner.in",
                hashed_password=get_password_hash("Officer@123"),
                role=UserRole.FIELD_OFFICER,
                state="Assam",
                is_active=True
            ),
            User(
                full_name="Ananya Sharma (Citizen)",
                email="citizen@geoalertner.in",
                hashed_password=get_password_hash("Citizen@123"),
                role=UserRole.CITIZEN,
                state="Assam",
                is_active=True
            )
        ]
        db.add_all(demo_users)
        db.commit()
        logger.info("Default demo users seeded successfully.")

    # 1. Check if already seeded
    if db.query(SafeShelter).first():
        logger.info("Database shelter/sensor data already initialized.")
        return

    logger.info("Seeding GeoAlertNER database with North Eastern Region dataset...")

    # 2. Seed Safe Shelters
    shelters = [
        SafeShelter(
            name="Guwahati Central Sports Complex & Relief Base",
            shelter_type=ShelterType.COMMUNITY_HALL,
            state="Assam",
            district="Kamrup Metropolitan",
            address="Sarusajai Sports Complex, Nalapara, Guwahati",
            latitude=26.1158,
            longitude=91.7580,
            elevation_meters=65.0,
            capacity_total=2500,
            capacity_occupied=320,
            has_medical_aid=True,
            has_food_water=True,
            has_power_backup=True,
            has_helipad_access=True,
            contact_person="Col. R. Bordoloi (SDRF)",
            contact_phone="+91-9435012345"
        ),
        SafeShelter(
            name="Assam Engineering College Safe High Ground Shelter",
            shelter_type=ShelterType.SCHOOL_SHELTER,
            state="Assam",
            district="Kamrup Metropolitan",
            address="Jalukbari, Guwahati",
            latitude=26.1420,
            longitude=91.6620,
            elevation_meters=85.0,
            capacity_total=1200,
            capacity_occupied=150,
            has_medical_aid=True,
            has_food_water=True,
            has_power_backup=True,
            has_helipad_access=False,
            contact_person="Dr. M. Saikia",
            contact_phone="+91-9864054321"
        ),
        SafeShelter(
            name="NEHU Shillong Multi-Purpose Relief Center",
            shelter_type=ShelterType.RELIEF_CAMP,
            state="Meghalaya",
            district="East Khasi Hills",
            address="NEHU Campus, Mawlai, Shillong",
            latitude=25.6065,
            longitude=91.9020,
            elevation_meters=1496.0,
            capacity_total=1800,
            capacity_occupied=210,
            has_medical_aid=True,
            has_food_water=True,
            has_power_backup=True,
            has_helipad_access=True,
            contact_person="B. Lyngdoh (SDMA Meghalaya)",
            contact_phone="+91-9863011223"
        ),
        SafeShelter(
            name="Paljor Stadium Emergency Safe Assembly Point",
            shelter_type=ShelterType.HIGH_GROUND_ASSEMBLY,
            state="Sikkim",
            district="East Sikkim",
            address="Paljor Stadium Road, Gangtok",
            latitude=27.3325,
            longitude=88.6140,
            elevation_meters=1650.0,
            capacity_total=3000,
            capacity_occupied=450,
            has_medical_aid=True,
            has_food_water=True,
            has_power_backup=True,
            has_helipad_access=True,
            contact_person="T. Bhutia (SSDMA)",
            contact_phone="+91-9434098765"
        ),
        SafeShelter(
            name="Kohima Local Ground Assembly & Medical Aid Station",
            shelter_type=ShelterType.HOSPITAL,
            state="Nagaland",
            district="Kohima",
            address="Khuochiezie Local Ground, Kohima",
            latitude=25.6690,
            longitude=94.1080,
            elevation_meters=1444.0,
            capacity_total=1000,
            capacity_occupied=120,
            has_medical_aid=True,
            has_food_water=True,
            has_power_backup=True,
            has_helipad_access=False,
            contact_person="K. Angami",
            contact_phone="+91-9436012399"
        ),
        SafeShelter(
            name="Aizawl AR Ground Safe Shelter",
            shelter_type=ShelterType.RELIEF_CAMP,
            state="Mizoram",
            district="Aizawl",
            address="Lammual, AR Ground, Aizawl",
            latitude=23.7307,
            longitude=92.7173,
            elevation_meters=1132.0,
            capacity_total=1500,
            capacity_occupied=180,
            has_medical_aid=True,
            has_food_water=True,
            has_power_backup=True,
            has_helipad_access=True,
            contact_person="Lalrinawma",
            contact_phone="+91-9436140011"
        )
    ]
    db.add_all(shelters)
    db.commit()

    # 3. Seed Micro-Risk Zones (Polygons in GeoJSON coordinate format: [lon, lat])
    risk_zones = [
        RiskZone(
            zone_code="NER-AS-KAM-01",
            name="Khanapara-Koinadhara Hill Slope",
            state="Assam",
            district="Kamrup Metropolitan",
            hazard_type=HazardType.LANDSLIDE,
            centroid_lat=26.1265,
            centroid_lon=91.8020,
            polygon_coordinates=[
                [91.7980, 26.1240],
                [91.8060, 26.1240],
                [91.8070, 26.1290],
                [91.7990, 26.1300],
                [91.7980, 26.1240]
            ],
            slope_angle=38.5,
            elevation_meters=220.0,
            rainfall_24h_mm=135.4,
            soil_moisture_m3m3=0.54,
            risk_score=88.5,
            risk_level=RiskLevel.CRITICAL,
            evacuation_advised=1
        ),
        RiskZone(
            zone_code="NER-AS-KAM-02",
            name="Bharalu River Basin Lowland",
            state="Assam",
            district="Kamrup Metropolitan",
            hazard_type=HazardType.FLASH_FLOOD,
            centroid_lat=26.1550,
            centroid_lon=91.7450,
            polygon_coordinates=[
                [91.7400, 26.1500],
                [91.7500, 26.1500],
                [91.7520, 26.1600],
                [91.7420, 26.1610],
                [91.7400, 26.1500]
            ],
            slope_angle=4.2,
            elevation_meters=52.0,
            rainfall_24h_mm=95.0,
            soil_moisture_m3m3=0.58,
            risk_score=72.0,
            risk_level=RiskLevel.HIGH,
            evacuation_advised=1
        ),
        RiskZone(
            zone_code="NER-ML-EKH-01",
            name="Mawkdok Dympep Valley Gorge Slope",
            state="Meghalaya",
            district="East Khasi Hills",
            hazard_type=HazardType.LANDSLIDE,
            centroid_lat=25.3480,
            centroid_lon=91.6850,
            polygon_coordinates=[
                [91.6800, 25.3440],
                [91.6900, 25.3440],
                [91.6920, 25.3520],
                [91.6810, 25.3530],
                [91.6800, 25.3440]
            ],
            slope_angle=46.0,
            elevation_meters=1520.0,
            rainfall_24h_mm=162.0,
            soil_moisture_m3m3=0.56,
            risk_score=92.0,
            risk_level=RiskLevel.CRITICAL,
            evacuation_advised=1
        ),
        RiskZone(
            zone_code="NER-SK-EAS-01",
            name="Singtam - Dikchu Teesta River Bank",
            state="Sikkim",
            district="East Sikkim",
            hazard_type=HazardType.CLOUDBURST,
            centroid_lat=27.2350,
            centroid_lon=88.4980,
            polygon_coordinates=[
                [88.4900, 27.2300],
                [88.5050, 27.2300],
                [88.5060, 27.2400],
                [88.4920, 27.2410],
                [88.4900, 27.2300]
            ],
            slope_angle=32.0,
            elevation_meters=980.0,
            rainfall_24h_mm=110.0,
            soil_moisture_m3m3=0.51,
            risk_score=81.0,
            risk_level=RiskLevel.CRITICAL,
            evacuation_advised=1
        )
    ]
    db.add_all(risk_zones)
    db.commit()

    # 4. Seed Emergency Helplines (NER State Control Rooms + National)
    helplines = [
        EmergencyHelpline(
            state="National",
            district=None,
            authority_name="National Emergency Response Support System (ERSS)",
            toll_free_number="112",
            direct_phone="112",
            email="support@112.gov.in",
            description="Unified single emergency number for Police, Fire, Ambulance & Disaster."
        ),
        EmergencyHelpline(
            state="Assam",
            district=None,
            authority_name="Assam State Disaster Management Authority (ASDMA)",
            toll_free_number="1070",
            direct_phone="0361-2237221",
            email="sdma-assam@gov.in",
            description="State Emergency Operations Center (SEOC), Dispur, Guwahati."
        ),
        EmergencyHelpline(
            state="Assam",
            district="Kamrup Metropolitan",
            authority_name="District Disaster Management Authority (DDMA Kamrup Metro)",
            toll_free_number="1077",
            direct_phone="0361-2733052",
            email="ddma-kamrupmetro@assam.gov.in",
            description="24x7 Flood & Landslide Emergency Control Room."
        ),
        EmergencyHelpline(
            state="Meghalaya",
            district=None,
            authority_name="Meghalaya State Disaster Management Authority (MSDMA)",
            toll_free_number="1070",
            direct_phone="0364-2502098",
            email="msdma-shillong@gov.in",
            description="SEOC Shillong, Secretariat Building."
        ),
        EmergencyHelpline(
            state="Sikkim",
            district=None,
            authority_name="Sikkim State Disaster Management Authority (SSDMA)",
            toll_free_number="1070",
            direct_phone="03592-201145",
            email="ssdma.gangtok@gmail.com",
            description="Tashiling Secretariat, Gangtok."
        ),
        EmergencyHelpline(
            state="Arunachal Pradesh",
            district=None,
            authority_name="Department of Disaster Management, Arunachal Pradesh",
            toll_free_number="1070",
            direct_phone="0360-2212268",
            email="ddm-itanagar@nic.in",
            description="State Disaster Control Room, Civil Secretariat, Itanagar."
        ),
        EmergencyHelpline(
            state="Nagaland",
            district=None,
            authority_name="Nagaland State Disaster Management Authority (NSDMA)",
            toll_free_number="1070",
            direct_phone="0370-2291122",
            email="nsdma.kohima@gmail.com",
            description="Home Department, Civil Secretariat, Kohima."
        ),
        EmergencyHelpline(
            state="Mizoram",
            district=None,
            authority_name="Disaster Management & Rehabilitation Department, Mizoram",
            toll_free_number="1070",
            direct_phone="0389-2335842",
            email="dmr-mizoram@gov.in",
            description="State Emergency Operations Centre, Chaltlang, Aizawl."
        ),
        EmergencyHelpline(
            state="National",
            district="NER Region",
            authority_name="NDRF 1st Battalion (North East Hub)",
            toll_free_number="0361-2849005",
            direct_phone="+91-9435962222",
            email="ndrf01-asm@nic.in",
            description="National Disaster Response Force Regional HQ, Patgaon, Guwahati."
        )
    ]
    db.add_all(helplines)
    db.commit()

    # 5. Seed Ground Telemetry Sensors
    sensors = [
        SensorNode(
            sensor_code="NER-SN-SOIL-01",
            sensor_type=SensorType.SOIL_MOISTURE,
            name="Khanapara Deep Soil Moisture Probe",
            location_name="Khanapara Hill Range, Guwahati",
            latitude=26.1280,
            longitude=91.8030,
            current_value=0.52,
            unit="m3/m3",
            threshold_warning=0.45,
            threshold_critical=0.50,
            is_triggered=True,
            battery_percentage=94.0
        ),
        SensorNode(
            sensor_code="NER-SN-TILT-01",
            sensor_type=SensorType.TILT_INCLINOMETER,
            name="Mawkdok Gorge Inclinometer",
            location_name="Sohra Road, Meghalaya",
            latitude=25.3500,
            longitude=91.6880,
            current_value=4.8,
            unit="degrees_displacement",
            threshold_warning=2.0,
            threshold_critical=4.0,
            is_triggered=True,
            battery_percentage=89.0
        ),
        SensorNode(
            sensor_code="NER-SN-RAIN-01",
            sensor_type=SensorType.RAIN_GAUGE,
            name="Gangtok Automated Precipitation Gauge",
            location_name="Paljor Hill Station, Sikkim",
            latitude=27.3310,
            longitude=88.6120,
            current_value=28.4,
            unit="mm/hr",
            threshold_warning=15.0,
            threshold_critical=25.0,
            is_triggered=True,
            battery_percentage=98.0
        )
    ]
    db.add_all(sensors)
    db.commit()

    # 6. Sample Ground Report
    report = CrowdTelemetryReport(
        report_uuid="rep-ner-sample-001",
        category=ReportCategory.LANDSLIDE_BLOCKAGE,
        description="Rockfall and mud debris covering left carriageway near GS Road hill cut.",
        latitude=26.1290,
        longitude=91.8010,
        state="Assam",
        district="Kamrup Metropolitan",
        severity_rating=4,
        reporter_name="Deben Das (Local Commuter)",
        reporter_phone="+91-9864012345",
        status=ReportStatus.VERIFIED,
        upvotes=14
    )
    db.add(report)
    db.commit()

    logger.info("Database seeding completed successfully.")
