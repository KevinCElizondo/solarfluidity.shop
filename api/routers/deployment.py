from fastapi import APIRouter, HTTPException, BackgroundTasks, Depends
from pydantic import BaseModel
from typing import Optional, Dict, Any
import os
import subprocess
from datetime import datetime
import json
from dotenv import load_dotenv

# Models for managing deployment
from models.deployment import DeploymentRequest, DeploymentResponse, DeploymentStatus

# Utilities for LangGraph integration
from utils.langgraph_utils import create_deployment_workflow

router = APIRouter()

# Track deployment history
deployment_history = []

@router.post("/", response_model=DeploymentResponse)
async def deploy_to_netlify(request: DeploymentRequest, background_tasks: BackgroundTasks):
    """
    Deploy the site to Netlify using the GitHub repository
    """
    # Generate a unique deployment ID
    deployment_id = f"deploy_{datetime.now().strftime('%Y%m%d%H%M%S')}"
    
    # Record deployment start
    deployment_record = {
        "id": deployment_id,
        "status": "started",
        "branch": request.branch,
        "timestamp": datetime.now().isoformat(),
        "force": request.force,
        "user_triggered": request.user_triggered,
        "completion_time": None,
        "logs": []
    }
    
    deployment_history.append(deployment_record)
    
    # Start deployment process in background
    background_tasks.add_task(
        run_deployment_process, 
        deployment_id=deployment_id,
        branch=request.branch,
        force=request.force
    )
    
    return DeploymentResponse(
        deployment_id=deployment_id,
        status="started",
        message=f"Deployment process started for branch: {request.branch}"
    )

@router.get("/{deployment_id}", response_model=DeploymentStatus)
async def get_deployment_status(deployment_id: str):
    """
    Get the status of a specific deployment
    """
    for deployment in deployment_history:
        if deployment["id"] == deployment_id:
            return DeploymentStatus(
                deployment_id=deployment["id"],
                status=deployment["status"],
                branch=deployment["branch"],
                start_time=deployment["timestamp"],
                completion_time=deployment["completion_time"],
                logs=deployment["logs"]
            )
    
    raise HTTPException(status_code=404, detail=f"Deployment with ID {deployment_id} not found")

@router.get("/", response_model=list[DeploymentStatus])
async def get_deployment_history(limit: int = 10):
    """
    Get deployment history (limited to the most recent deployments)
    """
    return [
        DeploymentStatus(
            deployment_id=deployment["id"],
            status=deployment["status"],
            branch=deployment["branch"],
            start_time=deployment["timestamp"],
            completion_time=deployment["completion_time"],
            logs=deployment["logs"]
        )
        for deployment in sorted(
            deployment_history, 
            key=lambda x: x["timestamp"], 
            reverse=True
        )[:limit]
    ]

# Function to run the actual deployment process
async def run_deployment_process(deployment_id: str, branch: str, force: bool):
    """Executes the deployment process in the background"""
    
    # Find the deployment record
    deployment_record = next(d for d in deployment_history if d["id"] == deployment_id)
    
    try:
        # Add log entry
        deployment_record["logs"].append(f"Starting deployment of branch {branch}")
        
        # Create a workflow using LangGraph
        workflow = create_deployment_workflow()
        
        # Execute the workflow with input state
        result = workflow.invoke({
            "branch": branch,
            "force": force,
            "deployment_id": deployment_id,
            "status": "running",
            "logs": []
        })
        
        # Update deployment record with result
        deployment_record["status"] = result["status"]
        deployment_record["completion_time"] = datetime.now().isoformat()
        deployment_record["logs"].extend(result["logs"])
        
    except Exception as e:
        # Log error and update status
        deployment_record["status"] = "failed"
        deployment_record["completion_time"] = datetime.now().isoformat()
        deployment_record["logs"].append(f"Error during deployment: {str(e)}")
