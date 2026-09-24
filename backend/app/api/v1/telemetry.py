import uuid
from typing import List, Optional
from fastapi import APIRouter, Depends, Query, HTTPException
from sqlalchemy.orm import Session
from backend.app.core.database import get_db
from backend.app.models.telemetry import CrowdTelemetryReport, ReportCategory, ReportStatus
from backend.app.schemas.telemetry import (
    TelemetryReportCreate, TelemetryReportResponse,
    TelemetryBatchSyncRequest, TelemetryBatchSyncResponse
)

router = APIRouter(prefix="/telemetry", tags=["Crowdsourced Ground Telemetry & Offline Sync"])

@router.post("/report", response_model=TelemetryReportResponse, status_code=201)
def submit_ground_report(
    report_in: TelemetryReportCreate,
    db: Session = Depends(get_db)
):
    """
    Submits a single citizen or field responder hazard report (photos, road blocks, cracks).
    """
    report_uuid = report_in.report_uuid or f"rep-{uuid.uuid4().hex[:12]}"
    
    # Check if duplicate UUID already submitted during offline sync
    existing = db.query(CrowdTelemetryReport).filter(CrowdTelemetryReport.report_uuid == report_uuid).first()
    if existing:
        return existing

    report = CrowdTelemetryReport(
        report_uuid=report_uuid,
        category=report_in.category,
        description=report_in.description,
        latitude=report_in.latitude,
        longitude=report_in.longitude,
        state=report_in.state,
        district=report_in.district,
        image_url=report_in.image_url,
        severity_rating=report_in.severity_rating,
        reporter_name=report_in.reporter_name or "Anonymous Citizen",
        reporter_phone=report_in.reporter_phone,
        is_offline_submitted=report_in.is_offline_submitted,
        status=ReportStatus.VERIFIED if report_in.severity_rating >= 4 else ReportStatus.PENDING_VERIFICATION
    )
    db.add(report)
    db.commit()
    db.refresh(report)
    return report

@router.post("/sync-offline", response_model=TelemetryBatchSyncResponse)
def sync_offline_reports(
    batch: TelemetryBatchSyncRequest,
    db: Session = Depends(get_db)
):
    """
    Batch synchronizes reports stored locally in IndexedDB / SQLite by field workers
    when reconnecting to the internet from remote/no-network zones.
    """
    synced = 0
    failed = 0
    for r in batch.reports:
        try:
            r_uuid = r.report_uuid or f"rep-sync-{uuid.uuid4().hex[:10]}"
            if not db.query(CrowdTelemetryReport).filter(CrowdTelemetryReport.report_uuid == r_uuid).first():
                new_rep = CrowdTelemetryReport(
                    report_uuid=r_uuid,
                    category=r.category,
                    description=r.description,
                    latitude=r.latitude,
                    longitude=r.longitude,
                    state=r.state,
                    district=r.district,
                    image_url=r.image_url,
                    severity_rating=r.severity_rating,
                    reporter_name=r.reporter_name,
                    reporter_phone=r.reporter_phone,
                    is_offline_submitted=True
                )
                db.add(new_rep)
                synced += 1
        except Exception:
            failed += 1

    db.commit()
    return TelemetryBatchSyncResponse(
        synced_count=synced,
        failed_count=failed,
        message=f"Successfully synchronized {synced} field telemetry records to central database."
    )

@router.get("/reports", response_model=List[TelemetryReportResponse])
def get_reports(
    category: Optional[ReportCategory] = Query(None),
    status: Optional[ReportStatus] = Query(None),
    db: Session = Depends(get_db)
):
    """Fetches list of crowd reports for dashboard visualization."""
    query = db.query(CrowdTelemetryReport)
    if category:
        query = query.filter(CrowdTelemetryReport.category == category)
    if status:
        query = query.filter(CrowdTelemetryReport.status == status)
    return query.order_by(CrowdTelemetryReport.created_at.desc()).limit(100).all()

@router.post("/reports/{report_id}/upvote", response_model=TelemetryReportResponse)
def upvote_report(report_id: int, db: Session = Depends(get_db)):
    """Upvotes a report to increase verification confidence."""
    report = db.query(CrowdTelemetryReport).filter(CrowdTelemetryReport.id == report_id).first()
    if not report:
        raise HTTPException(status_code=404, detail="Report not found")
    report.upvotes += 1
    if report.upvotes >= 3 and report.status == ReportStatus.PENDING_VERIFICATION:
        report.status = ReportStatus.VERIFIED
    db.commit()
    db.refresh(report)
    return report

