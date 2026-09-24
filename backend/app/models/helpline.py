from sqlalchemy import Column, Integer, String
from backend.app.core.database import Base

class EmergencyHelpline(Base):
    __tablename__ = "emergency_helplines"

    id = Column(Integer, primary_key=True, index=True)
    state = Column(String(50), nullable=False, index=True) # Assam, Meghalaya, Sikkim, etc.
    district = Column(String(50), nullable=True, index=True)
    authority_name = Column(String(120), nullable=False) # e.g. "Assam SDMA State Emergency Operations Center"
    toll_free_number = Column(String(30), nullable=False) # e.g. "1070" or "1077"
    direct_phone = Column(String(50), nullable=True) # Landline / Mobile
    email = Column(String(100), nullable=True)
    description = Column(String(200), nullable=True)

