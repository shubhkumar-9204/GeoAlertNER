from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from backend.app.core.database import get_db
from backend.app.schemas.evacuation import EvacuationPlanRequest, EvacuationPlanResponse
from backend.app.services.routing_service import routing_service

router = APIRouter(prefix="/evacuation", tags=["Evacuation & Mobility Routing"])

@router.post("/plan-route", response_model=EvacuationPlanResponse)
def plan_evacuation_route(
    request: EvacuationPlanRequest,
    db: Session = Depends(get_db)
):
    """
    Computes a Hazard-Aware Evacuation Route from the user's location to the nearest safe shelter.
    Automatically detects active high-risk hazard zones and recalculates a safe bypass corridor.
    Provides transport recommendations (4x4 vs Foot vs Bus) and nearest emergency helplines.
    """
    try:
        plan = routing_service.plan_safe_evacuation_route(
            db=db,
            user_lat=request.user_latitude,
            user_lon=request.user_longitude,
            target_shelter_id=request.target_shelter_id,
            avoid_hazards=request.avoid_high_risk,
            transport_preference=request.transport_preference
        )
        return plan
    except ValueError as ve:
        raise HTTPException(status_code=404, detail=str(ve))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Routing calculation failure: {str(e)}")

