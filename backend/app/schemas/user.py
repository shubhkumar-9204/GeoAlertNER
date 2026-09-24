"""
User Schemas & Validation Rules.
Copyright (c) 2026 GeoAlertNER Contributors. All rights reserved.
"""

import re
from typing import Optional
from pydantic import BaseModel, Field, field_validator, ConfigDict
from backend.app.models.user import UserRole

EMAIL_REGEX = re.compile(r"^[^@\s]+@[^@\s]+\.[^@\s]+$")


class UserRegister(BaseModel):
    full_name: str = Field(..., max_length=100)
    email: str = Field(..., max_length=120)
    password: str = Field(..., min_length=8, max_length=72)
    role: UserRole = UserRole.CITIZEN
    state: Optional[str] = Field(None, max_length=60)

    @field_validator("email")
    @classmethod
    def validate_email(cls, v: str) -> str:
        clean = v.strip().lower()
        if not EMAIL_REGEX.match(clean):
            raise ValueError("Invalid email format.")
        return clean

    @field_validator("password")
    @classmethod
    def validate_password_strength(cls, v: str) -> str:
        if len(v) < 8:
            raise ValueError("Password must be at least 8 characters long.")
        if len(v) > 72:
            raise ValueError("Password cannot exceed 72 characters.")
        if not re.search(r"\d", v):
            raise ValueError("Password must contain at least one numerical digit.")
        if not re.search(r"[a-zA-Z]", v):
            raise ValueError("Password must contain at least one letter.")
        return v

    @field_validator("full_name")
    @classmethod
    def validate_full_name(cls, v: str) -> str:
        clean = v.strip()
        if not clean or len(clean) < 2:
            raise ValueError("Full name must be at least 2 characters long.")
        return clean


class AdminUserCreate(UserRegister):
    """Schema for administrator-provisioned users with custom roles."""
    role: UserRole


class UserLogin(BaseModel):
    email: str = Field(..., max_length=120)
    password: str = Field(..., max_length=72)

    @field_validator("email")
    @classmethod
    def clean_email(cls, v: str) -> str:
        return v.strip().lower()


class UserResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    full_name: str
    email: str
    role: UserRole
    state: Optional[str] = None
    is_active: bool


class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    user: UserResponse
