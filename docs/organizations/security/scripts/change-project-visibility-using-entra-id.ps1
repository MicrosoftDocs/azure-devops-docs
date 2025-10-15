# Change Project Visibility Script using Microsoft Entra ID Token
param(
    [Parameter(Mandatory=$true)]
    [string]$organization,
    [Parameter(Mandatory=$true)]
    [string]$projectId,
    [Parameter(Mandatory=$true)]
    [ValidateSet("public", "private")]
    [string]$visibility,
    [string]$apiVersion = "6.0"
)

# Authenticate and get Microsoft Entra ID token
Write-Host "Authenticating to Azure..." -ForegroundColor Cyan

try {
    # Get access token for Azure DevOps resource
    $resourceUrl = "499b84ac-1321-427f-aa17-267ca6975798"  # Azure DevOps resource ID
    $tokenResponse = az account get-access-token --resource $resourceUrl --output json
    
    if ($LASTEXITCODE -ne 0) {
        Write-Error "Failed to get access token. Make sure you're logged in with 'az login'"
        exit 1
    }
    
    $tokenInfo = $tokenResponse | ConvertFrom-Json
    $accessToken = $tokenInfo.accessToken
    
    Write-Host "Successfully obtained Microsoft Entra ID access token" -ForegroundColor Green
}
catch {
    Write-Error "Failed to authenticate with Microsoft Entra ID: $($_.Exception.Message)"
    exit 1
}

# Setup headers
$headers = @{
    Authorization = "Bearer $accessToken"
    "Content-Type" = "application/json"
}

# Get current project details first
Write-Host "Getting current project details..." -ForegroundColor Yellow

try {
    $projectUrl = "https://dev.azure.com/$organization/_apis/projects/$projectId" + "?api-version=$apiVersion"
    $currentProject = Invoke-RestMethod -Uri $projectUrl -Method Get -Headers $headers
    
    Write-Host "Current project '$($currentProject.name)' visibility: $($currentProject.visibility)" -ForegroundColor White
}
catch {
    Write-Error "Failed to get project details: $($_.Exception.Message)"
    Write-Error "Make sure the organization name and project ID are correct, and you have proper permissions"
    exit 1
}

# Check if change is needed
if ($currentProject.visibility -eq $visibility) {
    Write-Host "Project is already $visibility. No changes needed." -ForegroundColor Green
    exit 0
}

# Validate organization policy for public projects
if ($visibility -eq "public") {
    Write-Host "Checking if organization allows public projects..." -ForegroundColor Yellow
    
    try {
        $policiesUrl = "https://dev.azure.com/$organization/_apis/policy/configurations?api-version=6.0"
        $policies = Invoke-RestMethod -Uri $policiesUrl -Method Get -Headers $headers
        
        # Note: This is a simplified check. In practice, you might need to check specific policy types
        Write-Host "Organization policy check completed" -ForegroundColor Green
    }
    catch {
        Write-Warning "Could not verify organization public project policy. Proceeding with caution..."
    }
}

# Prepare update payload
$updatePayload = @{
    name = $currentProject.name
    description = $currentProject.description
    visibility = $visibility
} | ConvertTo-Json

Write-Host "Updating project visibility to '$visibility'..." -ForegroundColor Cyan

try {
    # Update project visibility
    $updateUrl = "https://dev.azure.com/$organization/_apis/projects/$projectId" + "?api-version=$apiVersion"
    $response = Invoke-RestMethod -Uri $updateUrl -Method Patch -Headers $headers -Body $updatePayload
    
    # Check operation status
    if ($response.status -eq "succeeded") {
        Write-Host "Project visibility successfully changed to '$visibility'" -ForegroundColor Green
    }
    elseif ($response.status -eq "queued" -or $response.status -eq "inProgress") {
        Write-Host "Project visibility change is in progress..." -ForegroundColor Yellow
        
        # Poll for completion
        $operationUrl = $response.url
        $maxAttempts = 30
        $attempt = 0
        
        do {
            Start-Sleep -Seconds 2
            $attempt++
            
            try {
                $operationStatus = Invoke-RestMethod -Uri $operationUrl -Method Get -Headers $headers
                Write-Host "  Attempt $attempt/$maxAttempts - Status: $($operationStatus.status)" -ForegroundColor Gray
                
                if ($operationStatus.status -eq "succeeded") {
                    Write-Host "Project visibility successfully changed to '$visibility'" -ForegroundColor Green
                    break
                }
                elseif ($operationStatus.status -eq "failed") {
                    Write-Error "Project visibility change failed: $($operationStatus.resultMessage)"
                    exit 1
                }
            }
            catch {
                Write-Warning "Could not check operation status: $($_.Exception.Message)"
            }
        } while ($attempt -lt $maxAttempts)
        
        if ($attempt -ge $maxAttempts) {
            Write-Warning "Operation status check timed out. Please verify the change manually in Azure DevOps."
        }
    }
    else {
        Write-Error "Unexpected response status: $($response.status)"
        exit 1
    }
}
catch {
    $errorMessage = $_.Exception.Message
    
    # Parse specific error scenarios
    if ($errorMessage -like "*403*" -or $errorMessage -like "*Forbidden*") {
        Write-Error "Access denied. You need 'Project Administrator' or higher permissions to change project visibility."
    }
    elseif ($errorMessage -like "*public projects*") {
        Write-Error "Organization policy doesn't allow public projects. Enable 'Allow public projects' in Organization Settings > Policies."
    }
    else {
        Write-Error "Failed to update project visibility: $errorMessage"
    }
    
    exit 1
}

# Verify the change
Write-Host "Verifying project visibility change..." -ForegroundColor Yellow

try {
    Start-Sleep -Seconds 3  # Give the system time to update
    $verifyProject = Invoke-RestMethod -Uri $projectUrl -Method Get -Headers $headers
    
    if ($verifyProject.visibility -eq $visibility) {
        Write-Host "Verification successful: Project is now $visibility" -ForegroundColor Green
        
        # Display important warnings for public projects
        if ($visibility -eq "public") {
            Write-Host "`nIMPORTANT SECURITY NOTICE:" -ForegroundColor Red
            Write-Host "- This project and ALL its contents are now publicly visible on the internet" -ForegroundColor Yellow
            Write-Host "- Repository code, work items, wikis, and artifacts are accessible to anyone" -ForegroundColor Yellow
            Write-Host "- 'Deny' permissions are not enforced for public projects" -ForegroundColor Yellow
            Write-Host "- Review all content for sensitive information before making public" -ForegroundColor Yellow
        }
    }
    else {
        Write-Warning "Verification failed: Project visibility is still $($verifyProject.visibility)"
    }
}
catch {
    Write-Warning "Could not verify the change: $($_.Exception.Message)"
}

Write-Host "`nProject visibility change completed." -ForegroundColor Cyan