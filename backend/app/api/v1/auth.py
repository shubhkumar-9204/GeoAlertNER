"""
Authentication & Authorization API Endpoints.
Copyright (c) 2026 GeoAlertNER Contributors. All rights reserved.
"""

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from backend.app.core.database import get_db
from backend.app.core.security import (
    get_password_hash,
    verify_password,
    create_access_token,
    get_current_user,
    require_roles
)
from backend.app.models.user import User, UserRole
from backend.app.schemas.user import (
    UserRegister,
    AdminUserCreate,
    UserLogin,
    UserResponse,
    TokenResponse
)

router = APIRouter(prefix="/auth", tags=["Authentication & Access Control"])


@router.post("/register", response_model=TokenResponse, status_code=status.HTTP_201_CREATED)
def register_user(payload: UserRegister, db: Session = Depends(get_db)):
    """
    Public registration endpoint for citizens.
    Security Notice: Elevated roles (ADMIN, FIELD_OFFICER) cannot be self-assigned
    via public registration and are strictly forced to CITIZEN to prevent privilege escalation.
    """
    email_clean = payload.email.strip().lower()
    existing = db.query(User).filter(User.email == email_clean).first()
    if existing:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="An account with this email address already exists."
        )

    hashed_pw = get_password_hash(payload.password)
    # Strictly enforce CITIZEN role on public self-registration
    new_user = User(
        full_name=payload.full_name.strip(),
        email=email_clean,
        hashed_password=hashed_pw,
        role=UserRole.CITIZEN,
        state=payload.state,
        is_active=True
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    token = create_access_token(data={"sub": new_user.email, "role": new_user.role.value})
    return TokenResponse(
        access_token=token,
        token_type="bearer",
        user=UserResponse.model_validate(new_user)
    )


@router.post("/login", response_model=TokenResponse)
def login_user(payload: UserLogin, db: Session = Depends(get_db)):
    """
    Authenticate user credentials and issue a signed JWT bearer token.
    Protected by IP-based rate limiting against brute-force attacks.
    """
    email_clean = payload.email.strip().lower()
    user = db.query(User).filter(User.email == email_clean).first()
    if not user or not verify_password(payload.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password.",
            headers={"WWW-Authenticate": "Bearer"}
        )

    if not user.is_active:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="This user account is inactive. Please contact system administration."
        )

    token = create_access_token(data={"sub": user.email, "role": user.role.value})
    return TokenResponse(
        access_token=token,
        token_type="bearer",
        user=UserResponse.model_validate(user)
    )


@router.get("/me", response_model=UserResponse)
def get_current_user_profile(current_user: User = Depends(get_current_user)):
    """
    Get profile information of the currently authenticated user.
    """
    return UserResponse.model_validate(current_user)


@router.post("/admin/create-user", response_model=UserResponse, status_code=status.HTTP_201_CREATED)
def admin_create_user(
    payload: AdminUserCreate,
    current_admin: User = Depends(require_roles(UserRole.ADMIN)),
    db: Session = Depends(get_db)
):
    """
    Privileged endpoint for administrators to provision Field Officers and Administrators.
    """
    email_clean = payload.email.strip().lower()
    existing = db.query(User).filter(User.email == email_clean).first()
    if existing:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="An account with this email address already exists."
        )

    hashed_pw = get_password_hash(payload.password)
    new_user = User(
        full_name=payload.full_name.strip(),
        email=email_clean,
        hashed_password=hashed_pw,
        role=payload.role,
        state=payload.state,
        is_active=True
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return UserResponse.model_validate(new_user)
