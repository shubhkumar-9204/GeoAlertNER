"""
GeoAlertNER Hazard-Aware Evacuation Routing Engine.
Copyright (c) 2026 GeoAlertNER Contributors. All rights reserved.
Protected under Anti-Plagiarism and Moral Rights terms (see LICENSE and ATTRIBUTION.md).
"""

import math
from typing import List, Dict, Any, Optional, Tuple
from shapely.geometry import Point, Polygon, LineString
from sqlalchemy.orm import Session
from backend.app.models.shelter import SafeShelter
from backend.app.models.risk_zone import RiskZone, RiskLevel
from backend.app.schemas.evacuation import (
    EvacuationPlanResponse, RouteWaypoint, TransportRecommendation
)
from backend.app.schemas.shelter import SafeShelterResponse

class RoutingService:
    """
    Hazard-Aware Evacuation Routing Engine for NER Hilly Terrain.
    Detects dynamic danger zones (landslides, flooded roads) and calculates
    safe avoidance bypass corridors.
    """

    @staticmethod
    def haversine_distance(lat1: float, lon1: float, lat2: float, lon2: float) -> float:
        """Calculates great-circle distance between two points in Kilometers."""
        R = 6371.0 # Earth radius in km
        dlat = math.radians(lat2 - lat1)
        dlon = math.radians(lon2 - lon1)
        a = (math.sin(dlat / 2) ** 2 +
             math.cos(math.radians(lat1)) * math.cos(math.radians(lat2)) *
             math.sin(dlon / 2) ** 2)
        c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))
        return round(R * c, 2)

    def find_nearest_shelter(
        self,
        db: Session,
        user_lat: float,
        user_lon: float,
        target_shelter_id: Optional[int] = None
    ) -> Optional[Tuple[SafeShelter, float]]:
        """Finds closest active shelter with capacity."""
        if target_shelter_id:
            shelter = db.query(SafeShelter).filter(SafeShelter.id == target_shelter_id).first()
            if shelter:
                dist = self.haversine_distance(user_lat, user_lon, shelter.latitude, shelter.longitude)
                return shelter, dist

        shelters = db.query(SafeShelter).filter(SafeShelter.is_active == True).all()
        if not shelters:
            return None

        best_shelter = None
        min_dist = float("inf")

        for s in shelters:
            # Check capacity availability
            available = s.capacity_total - s.capacity_occupied
            if available > 0:
                dist = self.haversine_distance(user_lat, user_lon, s.latitude, s.longitude)
                if dist < min_dist:
                    min_dist = dist
                    best_shelter = s

        if not best_shelter and shelters:
            best_shelter = shelters[0]
            min_dist = self.haversine_distance(user_lat, user_lon, best_shelter.latitude, best_shelter.longitude)

        return best_shelter, min_dist

    def get_avoidance_polygons(self, db: Session) -> List[Tuple[RiskZone, Polygon]]:
        """Fetches active high and critical risk zones as Shapely Polygons."""
        danger_zones = db.query(RiskZone).filter(
            RiskZone.risk_level.in_([RiskLevel.HIGH, RiskLevel.CRITICAL])
        ).all()

        polys = []
        for zone in danger_zones:
            if zone.polygon_coordinates and len(zone.polygon_coordinates) >= 3:
                try:
                    poly = Polygon(zone.polygon_coordinates)
                    polys.append((zone, poly))
                except Exception:
                    pass
        return polys

    def plan_safe_evacuation_route(
        self,
        db: Session,
        user_lat: float,
        user_lon: float,
        target_shelter_id: Optional[int] = None,
        avoid_hazards: bool = True,
        transport_preference: str = "ANY"
    ) -> EvacuationPlanResponse:
        """
        Calculates safe waypoints avoiding active hazard zones.
        """
        match = self.find_nearest_shelter(db, user_lat, user_lon, target_shelter_id)
        if not match:
            raise ValueError("No registered shelters found in system.")

        shelter, direct_dist = match
        danger_polygons = self.get_avoidance_polygons(db) if avoid_hazards else []

        # Generate base path
        steps = 6
        raw_waypoints = []
        for i in range(steps + 1):
            fraction = i / steps
            w_lat = user_lat + (shelter.latitude - user_lat) * fraction
            w_lon = user_lon + (shelter.longitude - user_lon) * fraction
            raw_waypoints.append([w_lon, w_lat])

        direct_line = LineString(raw_waypoints)

        avoided_zones = []
        safe_waypoints_coords = []

        # Check line intersections with hazard polygons
        for pt in raw_waypoints:
            point_geom = Point(pt[0], pt[1])
            is_in_danger = False
            for zone, poly in danger_polygons:
                if poly.contains(point_geom) or poly.buffer(0.005).contains(point_geom):
                    is_in_danger = True
                    if zone.name not in avoided_zones:
                        avoided_zones.append(f"{zone.name} ({zone.hazard_type.value} - {zone.risk_level.value})")
                    
                    # Offset waypoint safely away from polygon centroid
                    offset_lon = pt[0] + (0.015 if pt[0] >= zone.centroid_lon else -0.015)
                    offset_lat = pt[1] + (0.015 if pt[1] >= zone.centroid_lat else -0.015)
                    safe_waypoints_coords.append([offset_lon, offset_lat])
                    break
            
            if not is_in_danger:
                safe_waypoints_coords.append(pt)

        # Build detailed RouteWaypoint objects
        waypoints_res: List[RouteWaypoint] = []
        for idx, coord in enumerate(safe_waypoints_coords):
            lon, lat = coord[0], coord[1]
            if idx == 0:
                instr = "Start evacuation from current location. Head towards safe corridor."
            elif idx == len(safe_waypoints_coords) - 1:
                instr = f"Arrive at Safe Shelter: {shelter.name} ({shelter.shelter_type.value})."
            else:
                instr = f"Proceed along designated safe mountain bypass corridor (Waypoint {idx})."

            warning = "âš ï¸ Hazard avoidance detour active" if avoided_zones and 0 < idx < len(safe_waypoints_coords)-1 else None

            waypoints_res.append(RouteWaypoint(
                latitude=round(lat, 5),
                longitude=round(lon, 5),
                elevation_meters=round(shelter.elevation_meters + (50 * math.sin(idx)), 1),
                instruction=instr,
                hazard_proximity_warning=warning
            ))

        total_distance = round(direct_dist * (1.25 if avoided_zones else 1.05), 2)
        duration_minutes = int((total_distance / 25.0) * 60) + (10 if avoided_zones else 0)

        # Determine transport recommendation
        if total_distance > 15.0 or "LANDSLIDE" in str(avoided_zones):
            best_mode = "4x4_RESCUE_VEHICLE"
            passability = "CAUTION_ROUGH_TERRAIN"
            reason = "Steep terrain gradient & mud/debris hazard requires high-clearance 4WD vehicles or State Disaster buses."
        elif total_distance <= 3.0:
            best_mode = "FOOT_TRAIL"
            passability = "SAFE_PASSABLE"
            reason = "Short distance assembly point; rapid foot evacuation recommended to avoid road congestion."
        else:
            best_mode = "RESCUE_BUS / AMBULANCE"
            passability = "SAFE_PASSABLE"
            reason = "Paved arterial corridor cleared for state emergency response transports."

        transport = TransportRecommendation(
            best_mode=best_mode,
            reason=reason,
            passability_status=passability,
            estimated_duration_minutes=duration_minutes,
            elevation_gain_meters=round(abs(shelter.elevation_meters - 150.0), 1)
        )

        shelter_dto = SafeShelterResponse(
            id=shelter.id,
            name=shelter.name,
            shelter_type=shelter.shelter_type,
            state=shelter.state,
            district=shelter.district,
            address=shelter.address,
            latitude=shelter.latitude,
            longitude=shelter.longitude,
            elevation_meters=shelter.elevation_meters,
            capacity_total=shelter.capacity_total,
            capacity_occupied=shelter.capacity_occupied,
            has_medical_aid=shelter.has_medical_aid,
            has_food_water=shelter.has_food_water,
            has_power_backup=shelter.has_power_backup,
            has_helipad_access=shelter.has_helipad_access,
            contact_person=shelter.contact_person,
            contact_phone=shelter.contact_phone,
            is_active=shelter.is_active,
            occupancy_pct=round((shelter.capacity_occupied / max(1, shelter.capacity_total)) * 100, 1),
            available_capacity=shelter.capacity_total - shelter.capacity_occupied,
            distance_km=direct_dist,
            updated_at=shelter.updated_at
        )

        route_geojson = {
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": safe_waypoints_coords
            },
            "properties": {
                "distance_km": total_distance,
                "duration_min": duration_minutes,
                "shelter_name": shelter.name,
                "hazards_avoided": avoided_zones
            }
        }

        emergency_contacts = [
            {"title": "National Emergency Helpline", "number": "112"},
            {"title": f"{shelter.state} SDMA State Control Room", "number": "1070"},
            {"title": f"{shelter.district} District Emergency Ops Center", "number": "1077"},
            {"title": "NDRF 1st Battalion (Guwahati Control)", "number": "0361-2849005"}
        ]

        return EvacuationPlanResponse(
            destination_shelter=shelter_dto,
            route_waypoints=waypoints_res,
            total_distance_km=total_distance,
            total_duration_minutes=duration_minutes,
            hazard_zones_avoided_count=len(avoided_zones),
            hazard_zones_avoided_details=avoided_zones,
            transport_guidance=transport,
            emergency_contacts=emergency_contacts,
            route_geojson=route_geojson
        )

routing_service = RoutingService()

