from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime

class DeploymentRequest(BaseModel):
    """Request model for deployment operations"""
    branch: str = Field(default="main", description="Git branch to deploy")
    force: bool = Field(default=False, description="Force deployment even if no changes")
    user_triggered: bool = Field(default=True, description="Whether deployment was manually triggered")

class DeploymentResponse(BaseModel):
    """Response model for deployment operations"""
    deployment_id: str = Field(..., description="Unique ID for this deployment")
    status: str = Field(..., description="Current status of the deployment")
    message: str = Field(..., description="Descriptive message about the deployment")

class DeploymentStatus(BaseModel):
    """Status model for deployment tracking"""
    deployment_id: str = Field(..., description="Unique ID for this deployment")
    status: str = Field(..., description="Current status (started, running, completed, failed)")
    branch: str = Field(..., description="Git branch being deployed")
    start_time: str = Field(..., description="ISO timestamp when deployment started")
    completion_time: Optional[str] = Field(None, description="ISO timestamp when deployment completed")
    logs: List[str] = Field(default_factory=list, description="Log entries from the deployment process")
