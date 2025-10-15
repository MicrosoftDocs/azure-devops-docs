# Reassign Work Items Script
param(
    [Parameter(Mandatory=$true)]
    [string]$organization,
    [Parameter(Mandatory=$true)]
    [string]$project,
    [Parameter(Mandatory=$true)]
    [int[]]$workItemIds,
    [Parameter(Mandatory=$true)]
    [string]$newAssignee,
    [string]$apiVersion = "7.1",
    [switch]$whatIf
)

# Authenticate and setup
Write-Host "Authenticating to Azure..." -ForegroundColor Cyan

try {
    # Get access token for Azure DevOps resource
    $resourceUrl = "499b84ac-1321-427f-aa17-267ca6975798"
    $tokenResponse = az account get-access-token --resource $resourceUrl --output json
    
    if ($LASTEXITCODE -ne 0) {
        Write-Error "Failed to get access token. Make sure you're logged in with 'az login'"
        exit 1
    }
    
    $tokenInfo = $tokenResponse | ConvertFrom-Json
    $accessToken = $tokenInfo.accessToken
    
    Write-Host "Successfully obtained access token" -ForegroundColor Green
}
catch {
    Write-Error "Failed to authenticate: $($_.Exception.Message)"
    exit 1
}

$headers = @{
    Authorization = "Bearer $accessToken"
    "Content-Type" = "application/json-patch+json"
}

# Validate project exists
Write-Host "Validating project..." -ForegroundColor Yellow

try {
    $projectUrl = "https://dev.azure.com/$organization/_apis/projects/$project" + "?api-version=$apiVersion"
    $projectInfo = Invoke-RestMethod -Uri $projectUrl -Method Get -Headers $headers
    
    Write-Host "Project: $($projectInfo.name)" -ForegroundColor White
}
catch {
    Write-Error "Failed to find project '$project': $($_.Exception.Message)"
    exit 1
}

# Process each work item
$successCount = 0
$failureCount = 0
$results = @()

Write-Host "`nProcessing $($workItemIds.Count) work items..." -ForegroundColor Cyan

foreach ($workItemId in $workItemIds) {
    try {
        # Get current work item details
        $workItemUrl = "https://dev.azure.com/$organization/$project/_apis/wit/workitems/$workItemId" + "?api-version=$apiVersion"
        
        try {
            $workItem = Invoke-RestMethod -Uri $workItemUrl -Method Get -Headers $headers
        }
        catch {
            Write-Warning "Work item $workItemId not found or not accessible"
            $failureCount++
            $results += [PSCustomObject]@{
                WorkItemId = $workItemId
                Title = "Not Found"
                CurrentAssignee = "N/A"
                Status = "Failed - Not Found"
            }
            continue
        }
        
        $currentAssignee = if ($workItem.fields.'System.AssignedTo') { 
            $workItem.fields.'System.AssignedTo'.displayName 
        } else { 
            "Unassigned" 
        }
        
        Write-Host "  Work Item $workItemId`: $($workItem.fields.'System.Title')" -ForegroundColor White
        Write-Host "    Current Assignee: $currentAssignee" -ForegroundColor Gray
        Write-Host "    New Assignee: $newAssignee" -ForegroundColor Gray
        
        if ($whatIf) {
            Write-Host "    [WHAT-IF] Would reassign to $newAssignee" -ForegroundColor Yellow
            $results += [PSCustomObject]@{
                WorkItemId = $workItemId
                Title = $workItem.fields.'System.Title'
                CurrentAssignee = $currentAssignee
                Status = "What-If - Would Update"
            }
            continue
        }
        
        # Check if already assigned to target user
        if ($currentAssignee -eq $newAssignee) {
            Write-Host "    Already assigned to $newAssignee - skipping" -ForegroundColor Green
            $results += [PSCustomObject]@{
                WorkItemId = $workItemId
                Title = $workItem.fields.'System.Title'
                CurrentAssignee = $currentAssignee
                Status = "Skipped - Already Assigned"
            }
            continue
        }
        
        # Prepare update payload
        $updatePayload = @(
            @{
                op = "replace"
                path = "/fields/System.AssignedTo"
                value = $newAssignee
            }
        ) | ConvertTo-Json
        
        # Update work item
        $response = Invoke-RestMethod -Uri $workItemUrl -Method Patch -Headers $headers -Body $updatePayload
        
        Write-Host "    Successfully reassigned" -ForegroundColor Green
        $successCount++
        
        $results += [PSCustomObject]@{
            WorkItemId = $workItemId
            Title = $workItem.fields.'System.Title'
            CurrentAssignee = $currentAssignee
            Status = "Success"
        }
    }
    catch {
        Write-Warning "Failed to update work item $workItemId`: $($_.Exception.Message)"
        $failureCount++
        
        $results += [PSCustomObject]@{
            WorkItemId = $workItemId
            Title = if ($workItem) { $workItem.fields.'System.Title' } else { "Unknown" }
            CurrentAssignee = if ($currentAssignee) { $currentAssignee } else { "Unknown" }
            Status = "Failed - $($_.Exception.Message)"
        }
    }
}

# Display summary
Write-Host "`n" + "="*50 -ForegroundColor Cyan
Write-Host "Work Item Reassignment Summary" -ForegroundColor Cyan
Write-Host "="*50 -ForegroundColor Cyan

Write-Host "Total work items processed: $($workItemIds.Count)" -ForegroundColor White
Write-Host "Successfully updated: $successCount" -ForegroundColor Green
Write-Host "Failed: $failureCount" -ForegroundColor Red

if ($whatIf) {
    Write-Host "Mode: What-If (no changes made)" -ForegroundColor Yellow
}

# Display detailed results
Write-Host "`nDetailed Results:" -ForegroundColor Cyan
$results | Format-Table -AutoSize

# Export results to CSV
$timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
$outputPath = "WorkItemReassignment_$timestamp.csv"
$results | Export-Csv -Path $outputPath -NoTypeInformation

Write-Host "Results exported to: $outputPath" -ForegroundColor Green

if ($failureCount -gt 0) {
    Write-Host "`nSome work items failed to update. Please review the detailed results above." -ForegroundColor Yellow
    exit 1
} else {
    Write-Host "`nAll work items processed successfully!" -ForegroundColor Green
    exit 0
}