from typing import List, Optional
from sqlalchemy.orm import Session
from backend.app.models.helpline import EmergencyHelpline

class HelplineService:
    @staticmethod
    def get_helplines_by_state(db: Session, state: Optional[str] = None) -> List[EmergencyHelpline]:
        query = db.query(EmergencyHelpline)
        if state:
            query = query.filter(EmergencyHelpline.state.ilike(f"%{state}%"))
        return query.all()

    @staticmethod
    def get_nearest_helpline(db: Session, state: str, district: Optional[str] = None) -> List[EmergencyHelpline]:
        if district:
            district_helpline = db.query(EmergencyHelpline).filter(
                EmergencyHelpline.state.ilike(f"%{state}%"),
                EmergencyHelpline.district.ilike(f"%{district}%")
            ).all()
            if district_helpline:
                return district_helpline
        
        return db.query(EmergencyHelpline).filter(
            EmergencyHelpline.state.ilike(f"%{state}%")
        ).all()

helpline_service = HelplineService()

