"""
Emergency Helplines & SDRF/NDRF Directory Router.
Copyright (c) 2026 GeoAlertNER Contributors. All rights reserved.
"""

from typing import List, Optional
from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session
from backend.app.core.database import get_db
from backend.app.schemas.helpline import HelplineResponse
from backend.app.services.helpline_service import helpline_service

router = APIRouter(prefix="/helplines", tags=["Emergency Helplines & SDRF/NDRF"])


@router.get("", response_model=List[HelplineResponse])
def get_helplines(
    state: Optional[str] = Query(None, description="State (e.g. Assam, Meghalaya, Sikkim, National)"),
    db: Session = Depends(get_db)
):
    """
    Returns verified disaster helpline numbers for North Eastern states and National authorities (112, 1070, 1077, NDRF).
    """
    return helpline_service.get_helplines_by_state(db, state)


@router.get("/nearest", response_model=List[HelplineResponse])
def get_nearest_helpline(
    state: str = Query("Assam", examples=["Assam"]),
    district: Optional[str] = Query(None, examples=["Kamrup Metropolitan"]),
    db: Session = Depends(get_db)
):
    """Finds immediate local district and state emergency contact numbers."""
    return helpline_service.get_nearest_helpline(db, state, district)
