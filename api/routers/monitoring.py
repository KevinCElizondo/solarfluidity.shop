from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Dict, List, Optional
from datetime import datetime
import os
import json
import subprocess

router = APIRouter()

class SystemStatus(BaseModel):
    """Status of various system components"""
    api: str = "operational"
    frontend: str = "operational"
    database: str = "operational"
    last_check: str = None

class PerformanceMetrics(BaseModel):
    """Performance metrics for the website"""
    avg_load_time_ms: float
    requests_per_minute: float
    error_rate: float
    timestamp: str

# Maintain in-memory metrics (in production this would use a proper database)
system_status = SystemStatus(last_check=datetime.now().isoformat())
performance_history = []

@router.get("/status", response_model=SystemStatus)
async def get_system_status():
    """Get current status of all system components"""
    # Update last check time
    system_status.last_check = datetime.now().isoformat()
    
    # In a real implementation, these would actually check each component
    try:
        # Check frontend (This is a simplified check)
        frontend_check = subprocess.run(
            ["curl", "-s", "-o", "/dev/null", "-w", "%{http_code}", "http://localhost:3000"],
            capture_output=True,
            text=True,
            timeout=5
        )
        system_status.frontend = "operational" if frontend_check.stdout == "200" else "degraded"
    except Exception:
        system_status.frontend = "unknown"
    
    return system_status

@router.get("/performance", response_model=List[PerformanceMetrics])
async def get_performance_metrics(limit: int = 10):
    """Get recent performance metrics"""
    # In a real implementation, we would fetch actual metrics from a monitoring tool
    # For demonstration, we'll return sample data or historic data
    
    # If we have no history, generate a sample point
    if not performance_history:
        performance_history.append(
            PerformanceMetrics(
                avg_load_time_ms=250.0,
                requests_per_minute=60.0,
                error_rate=0.05,
                timestamp=datetime.now().isoformat()
            )
        )
    
    # Return most recent metrics first
    return sorted(performance_history, key=lambda x: x.timestamp, reverse=True)[:limit]

@router.post("/performance", response_model=PerformanceMetrics)
async def record_performance_metrics(metrics: PerformanceMetrics):
    """Record new performance metrics"""
    # In production, this would validate the source and save to a database
    performance_history.append(metrics)
    return metrics

@router.post("/alert", status_code=200)
async def trigger_alert(message: str, severity: str = "info"):
    """Send an alert notification (in production, this could use email, SMS, etc.)"""
    # Log the alert
    alert_log = {
        "message": message,
        "severity": severity,
        "timestamp": datetime.now().isoformat()
    }
    
    # In production, this would actually send the alert
    print(f"ALERT [{severity.upper()}]: {message}")
    
    return {"status": "alert_sent", "alert": alert_log}
