"""
Helpline Schemas.
Copyright (c) 2026 GeoAlertNER Contributors. All rights reserved.
"""

from typing import Optional
from pydantic import BaseModel, ConfigDict


class HelplineResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    state: str
    district: Optional[str] = None
    authority_name: str
    toll_free_number: str
    direct_phone: Optional[str] = None
    email: Optional[str] = None
    description: Optional[str] = None
