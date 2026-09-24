"""
Safe Shelters & Relief Points Router.
Copyright (c) 2026 GeoAlertNER Contributors. All rights reserved.
"""

from typing import List, Optional
from fastapi import APIRouter, Depends, Query, HTTPException, status
from sqlalchemy.orm import Session
from backend.app.core.database import get_db
from backend.app.core.security import require_roles
from backend.app.models.user import User, UserRole
from backend.app.models.shelter import SafeShelter, ShelterType
from backend.app.schemas.shelter import SafeShelterResponse, SafeShelterCreate
from backend.app.services.routing_service import routing_service

router = APIRouter(prefix="/shelters", tags=["Safe Shelters & Relief Points"])


@router.get("", response_model=List[SafeShelterResponse])
def get_shelters(
    state: Optional[str] = Query(None, description="State name (e.g. Assam, Meghalaya, Sikkim)"),
    shelter_type: Optional[ShelterType] = Query(None),
    has_medical: Optional[bool] = Query(None),
    has_helipad: Optional[bool] = Query(None),
    db: Session = Depends(get_db)
):
    """Lists all safe points, relief camps, and emergency assembly shelters."""
    query = db.query(SafeShelter).filter(SafeShelter.is_active == True)
    if state:
        query = query.filter(SafeShelter.state.ilike(f"%{state}%"))
    if shelter_type:
        query = query.filter(SafeShelter.shelter_type == shelter_type)
    if has_medical is not None:
        query = query.filter(SafeShelter.has_medical_aid == has_medical)
    if has_helipad is not None:
        query = query.filter(SafeShelter.has_helipad_access == has_helipad)

    shelters = query.all()
    results = []
    for s in shelters:
        results.append(SafeShelterResponse(
            id=s.id,
            name=s.name,
            shelter_type=s.shelter_type,
            state=s.state,
            district=s.district,
            address=s.address,
            latitude=s.latitude,
            longitude=s.longitude,
            elevation_meters=s.elevation_meters,
            capacity_total=s.capacity_total,
            capacity_occupied=s.capacity_occupied,
            has_medical_aid=s.has_medical_aid,
            has_food_water=s.has_food_water,
            has_power_backup=s.has_power_backup,
            has_helipad_access=s.has_helipad_access,
            contact_person=s.contact_person,
            contact_phone=s.contact_phone,
            is_active=s.is_active,
            occupancy_pct=round((s.capacity_occupied / max(1, s.capacity_total)) * 100, 1),
            available_capacity=s.capacity_total - s.capacity_occupied,
            updated_at=s.updated_at
        ))
    return results


@router.get("/nearest", response_model=SafeShelterResponse)
def get_nearest_shelter(
    lat: float = Query(..., examples=[26.1445]),
    lon: float = Query(..., examples=[91.7362]),
    db: Session = Depends(get_db)
):
    """Finds the nearest safe point/shelter relative to the provided GPS location."""
    match = routing_service.find_nearest_shelter(db, lat, lon)
    if not match:
        raise HTTPException(status_code=404, detail="No safe shelters found.")
    s, dist = match
    return SafeShelterResponse(
        id=s.id,
        name=s.name,
        shelter_type=s.shelter_type,
        state=s.state,
        district=s.district,
        address=s.address,
        latitude=s.latitude,
        longitude=s.longitude,
        elevation_meters=s.elevation_meters,
        capacity_total=s.capacity_total,
        capacity_occupied=s.capacity_occupied,
        has_medical_aid=s.has_medical_aid,
        has_food_water=s.has_food_water,
        has_power_backup=s.has_power_backup,
        has_helipad_access=s.has_helipad_access,
        contact_person=s.contact_person,
        contact_phone=s.contact_phone,
        is_active=s.is_active,
        occupancy_pct=round((s.capacity_occupied / max(1, s.capacity_total)) * 100, 1),
        available_capacity=s.capacity_total - s.capacity_occupied,
        distance_km=dist,
        updated_at=s.updated_at
    )


@router.post("", response_model=SafeShelterResponse, status_code=status.HTTP_201_CREATED)
def create_shelter(
    shelter_in: SafeShelterCreate,
    current_user: User = Depends(require_roles(UserRole.ADMIN, UserRole.FIELD_OFFICER)),
    db: Session = Depends(get_db)
):
    """
    Registers a new safe shelter or assembly area.
    Authorized for Field Officers and Administrators only.
    """
    data = shelter_in.model_dump()
    shelter = SafeShelter(**data)
    db.add(shelter)
    db.commit()
    db.refresh(shelter)
    return SafeShelterResponse(
        id=shelter.id,
        **data,
        occupancy_pct=round((shelter.capacity_occupied / max(1, shelter.capacity_total)) * 100, 1),
        available_capacity=shelter.capacity_total - shelter.capacity_occupied,
        updated_at=shelter.updated_at
    )
