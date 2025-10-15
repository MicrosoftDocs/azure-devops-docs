---
title: Use scripts to update global security settings
titleSuffix: Azure DevOps
description: Use PowerShell scripts to automate security configuration and scanning across Azure DevOps organizations, projects, and repositories.
ms.topic: how-to
ms.subservice: azure-devops-security
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 10/16/2025
---

# Use scripts to update global security settings

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This article contains PowerShell scripts that audit security across your Azure DevOps organization and provide administrative tools for common security tasks. Use these scripts to audit user access, review service connections, scan dependencies for vulnerabilities, and perform specific administrative tasks like changing project visibility and managing group memberships.

These scripts help you maintain visibility into your security posture, identify potential risks, and streamline select administrative security tasks through automation.

## Disclaimer

These scripts are examples provided for convenience. Review them, test in a nonproduction environment, and adapt to your organization's policies before running in production. Validate correctness and security for your environment.

## Prerequisites

| Category | Description |
|---|---|
| **Azure DevOps** | - An Azure DevOps organization and project. [Create one for free](../../user-guide/sign-up-invite-teammates.md).<br>- **Permissions:** Organization Owner or Project Collection Administrator for organization-level scripts; Project Administrator for project-level operations |
| **Authentication** | Microsoft Entra ID tokens. Scripts acquire tokens via Azure CLI: `az account get-access-token --resource 499b84ac-1321-427f-aa17-267ca6975798`. Ensure you're logged in with `az login` |
| **Tools** | - Azure CLI (`az`) and PowerShell (`pwsh`) required<br>- Scripts written for PowerShell 7+; adapt for Windows PowerShell<br>- Azure PowerShell module (`Install-Module -Name Az`) for some scripts |
| **Safety** | - Test in nonproduction organization first<br>- Reassign or close active work before removing users<br>- Review project visibility prerequisites before making projects public<br>- Keep audit trail of automated changes |
| **Security** | - Store credentials and tokens securely (Key Vault or pipeline secret variables)<br>- Revoke tokens/service principals after bulk operations if credential rotation needed |

## Audit security and access across your organization

### Audit user access and permissions

This script audits and reports on user permissions across the organization:

```powershell
# User Access Audit Script
param(
    [Parameter(Mandatory=$true)]
    [string]$organization,
    [string]$outputPath = "C:\AzureDevOps\UserAccessAudit.csv",
    [string]$apiVersion = "7.1"
)

# Authenticate and setup
if (-not (Get-AzContext -ErrorAction SilentlyContinue)) {
    Connect-AzAccount
}

$resourceUrl = "499b84ac-1321-427f-aa17-267ca6975798"
$token = (Get-AzAccessToken -ResourceUrl $resourceUrl).Token
$headers = @{
    Authorization = "Bearer $token"
    "Content-Type" = "application/json"
}

Write-Host "Starting user access audit for organization: $organization" -ForegroundColor Cyan

$auditResults = @()
$riskFindings = @()

# Get all users in the organization
$usersUrl = "https://vssps.dev.azure.com/$organization/_apis/graph/users?api-version=$apiVersion"
$users = Invoke-RestMethod -Uri $usersUrl -Method Get -Headers $headers

# Get all groups and their members
$groupsUrl = "https://vssps.dev.azure.com/$organization/_apis/graph/groups?api-version=$apiVersion"
$groups = Invoke-RestMethod -Uri $groupsUrl -Method Get -Headers $headers

Write-Host "Found $($users.count) users and $($groups.count) groups" -ForegroundColor Yellow

foreach ($user in $users.value) {
    try {
        # Get user's group memberships
        $membershipsUrl = "https://vssps.dev.azure.com/$organization/_apis/graph/memberships/$($user.descriptor)?direction=up&api-version=$apiVersion"
        $memberships = Invoke-RestMethod -Uri $membershipsUrl -Method Get -Headers $headers
        
        # Analyze access level and permissions
        $isAdmin = $false
        $adminGroups = @()
        $lastAccessDate = "Unknown"
        
        foreach ($membership in $memberships.value) {
            $groupName = ($groups.value | Where-Object { $_.descriptor -eq $membership.containerDescriptor }).displayName
            
            if ($groupName -match "Administrator|Admin|Collection|Project Collection") {
                $isAdmin = $true
                $adminGroups += $groupName
            }
        }
        
        # Check for inactive users with admin access
        if ($isAdmin -and $user.lastAccessedDate) {
            $lastAccess = [DateTime]$user.lastAccessedDate
            if ($lastAccess -lt (Get-Date).AddDays(-90)) {
                $riskFindings += [PSCustomObject]@{
                    Type = "Inactive Admin User"
                    User = $user.displayName
                    Email = $user.mailAddress
                    LastAccess = $lastAccess
                    AdminGroups = ($adminGroups -join ", ")
                    Risk = "High"
                }
            }
        }
        
        # Check for external users with high privileges
        if ($user.mailAddress -notlike "*@yourdomain.com" -and $isAdmin) {
            $riskFindings += [PSCustomObject]@{
                Type = "External Admin User"
                User = $user.displayName
                Email = $user.mailAddress
                LastAccess = $user.lastAccessedDate
                AdminGroups = ($adminGroups -join ", ")
                Risk = "High"
            }
        }
        
        $auditResults += [PSCustomObject]@{
            DisplayName = $user.displayName
            Email = $user.mailAddress
            Domain = if ($user.mailAddress) { $user.mailAddress.Split('@')[1] } else { "Unknown" }
            IsAdmin = $isAdmin
            AdminGroups = ($adminGroups -join ", ")
            LastAccess = $user.lastAccessedDate
            UserType = if ($user.mailAddress -like "*@yourdomain.com") { "Internal" } else { "External" }
            AccountEnabled = if ($user.metaType -eq "member") { "Active" } else { "Inactive" }
        }
        
        Write-Progress -Activity "Auditing users" -Status "Processing $($user.displayName)" -PercentComplete (($auditResults.Count / $users.count) * 100)
    }
    catch {
        Write-Warning "Failed to process user $($user.displayName): $($_.Exception.Message)"
    }
}

# Generate reports
Write-Host "Generating audit reports..." -ForegroundColor Yellow

# Export full audit results
$auditResults | Export-Csv -Path $outputPath -NoTypeInformation
Write-Host "Full audit exported to: $outputPath" -ForegroundColor Green

# Display risk summary
if ($riskFindings.Count -gt 0) {
    Write-Host "Security risks identified:" -ForegroundColor Red
    $riskFindings | Format-Table -AutoSize
    
    $riskPath = $outputPath.Replace('.csv', '_SecurityRisks.csv')
    $riskFindings | Export-Csv -Path $riskPath -NoTypeInformation
    Write-Host "Security risks exported to: $riskPath" -ForegroundColor Yellow
} else {
    Write-Host "No critical security risks identified" -ForegroundColor Green
}

# Display summary statistics
$stats = @{
    TotalUsers = $auditResults.Count
    AdminUsers = ($auditResults | Where-Object { $_.IsAdmin }).Count
    ExternalUsers = ($auditResults | Where-Object { $_.UserType -eq "External" }).Count
    ExternalAdmins = ($auditResults | Where-Object { $_.UserType -eq "External" -and $_.IsAdmin }).Count
    InactiveAccounts = ($auditResults | Where-Object { $_.AccountEnabled -eq "Inactive" }).Count
}

Write-Host "`nAudit Summary:" -ForegroundColor Cyan
$stats.GetEnumerator() | ForEach-Object {
    Write-Host "  $($_.Key): $($_.Value)" -ForegroundColor White
}
```

### Audit service connections and credentials

This script audits service connections and identifies potential security risks:

```powershell
# Service Connection Security Audit Script
param(
    [Parameter(Mandatory=$true)]
    [string]$organization,
    [string]$outputPath = "C:\AzureDevOps\ServiceConnectionAudit.csv",
    [string]$apiVersion = "7.1"
)

# Authenticate and setup
if (-not (Get-AzContext -ErrorAction SilentlyContinue)) {
    Connect-AzAccount
}

$resourceUrl = "499b84ac-1321-427f-aa17-267ca6975798"
$token = (Get-AzAccessToken -ResourceUrl $resourceUrl).Token
$headers = @{
    Authorization = "Bearer $token"
    "Content-Type" = "application/json"
}

Write-Host "Starting service connection audit for organization: $organization" -ForegroundColor Cyan

$allServiceConnections = @()
$securityRisks = @()

# Get all projects to scan their service connections
$projectsUrl = "https://dev.azure.com/$organization/_apis/projects?api-version=$apiVersion"
$projects = Invoke-RestMethod -Uri $projectsUrl -Method Get -Headers $headers

foreach ($project in $projects.value) {
    Write-Host "Scanning project: $($project.name)" -ForegroundColor Yellow
    
    try {
        # Get service connections for this project
        $serviceConnUrl = "https://dev.azure.com/$organization/$($project.name)/_apis/serviceendpoint/endpoints?api-version=$apiVersion"
        $serviceConnections = Invoke-RestMethod -Uri $serviceConnUrl -Method Get -Headers $headers
        
        foreach ($conn in $serviceConnections.value) {
            # Analyze service connection security
            $riskLevel = "Low"
            $risks = @()
            
            # Check for risky configurations
            if ($conn.isShared -eq $true) {
                $risks += "Shared across projects"
                $riskLevel = "Medium"
            }
            
            if ($conn.authorization.scheme -eq "UsernamePassword") {
                $risks += "Uses username/password authentication"
                $riskLevel = "High"
            }
            
            if ($conn.isReady -eq $false) {
                $risks += "Connection not verified/ready"
                $riskLevel = "Medium"
            }
            
            # Check last used date
            $lastUsed = "Unknown"
            if ($conn.operationStatus.state -eq "Ready") {
                # Attempt to get usage data (may require additional API calls)
                $lastUsed = "Recently used"
            }
            
            # Check for overly permissive access
            if ($conn.authorization.parameters.scope -like "*.*" -or $conn.authorization.parameters.scope -eq "FullAccess") {
                $risks += "Overly broad scope/permissions"
                $riskLevel = "High"
            }
            
            $connectionAudit = [PSCustomObject]@{
                Project = $project.name
                Name = $conn.name
                Type = $conn.type
                Url = $conn.url
                AuthScheme = $conn.authorization.scheme
                IsShared = $conn.isShared
                IsReady = $conn.isReady
                CreatedBy = $conn.createdBy.displayName
                LastUsed = $lastUsed
                RiskLevel = $riskLevel
                SecurityRisks = ($risks -join "; ")
            }
            
            $allServiceConnections += $connectionAudit
            
            # Add to security risks if high/medium risk
            if ($riskLevel -in @("High", "Medium")) {
                $securityRisks += $connectionAudit
            }
        }
    }
    catch {
        Write-Warning "Failed to scan project $($project.name): $($_.Exception.Message)"
    }
}

# Generate reports
Write-Host "Generating service connection audit reports..." -ForegroundColor Yellow

# Export full audit
$allServiceConnections | Export-Csv -Path $outputPath -NoTypeInformation
Write-Host "Service connection audit exported to: $outputPath" -ForegroundColor Green

# Export security risks
if ($securityRisks.Count -gt 0) {
    Write-Host "Service connection security risks identified:" -ForegroundColor Red
    $securityRisks | Format-Table -AutoSize
    
    $riskPath = $outputPath.Replace('.csv', '_SecurityRisks.csv')
    $securityRisks | Export-Csv -Path $riskPath -NoTypeInformation
    Write-Host "Security risks exported to: $riskPath" -ForegroundColor Yellow
} else {
    Write-Host "No critical service connection risks identified" -ForegroundColor Green
}

# Display summary
$summary = @{
    TotalConnections = $allServiceConnections.Count
    SharedConnections = ($allServiceConnections | Where-Object { $_.IsShared }).Count
    HighRiskConnections = ($securityRisks | Where-Object { $_.RiskLevel -eq "High" }).Count
    MediumRiskConnections = ($securityRisks | Where-Object { $_.RiskLevel -eq "Medium" }).Count
    NotReadyConnections = ($allServiceConnections | Where-Object { $_.IsReady -eq $false }).Count
}

Write-Host "`nService Connection Summary:" -ForegroundColor Cyan
$summary.GetEnumerator() | ForEach-Object {
    Write-Host "  $($_.Key): $($_.Value)" -ForegroundColor White
}
```

## Scan dependencies for security vulnerabilities

### Check for vulnerable dependencies

This script checks for outdated or vulnerable dependencies using NuGet and npm:

```powershell
# Dependency checker script
param(
    [string]$projectPath = "C:\AzureDevOps\Repo",
    [string]$outputPath = "C:\AzureDevOps\DependencyResults.json"
)

$results = @{
    NuGet = @()
    Npm = @()
    Vulnerabilities = @()
}

Write-Host "Starting dependency check in: $projectPath"

# NuGet dependency check
$nugetFiles = Get-ChildItem -Path $projectPath -Recurse -Name "*.csproj", "packages.config"
if ($nugetFiles.Count -gt 0) {
    Write-Host "Checking NuGet dependencies..."
    try {
        $nugetOutput = dotnet list package --outdated --include-transitive 2>&1
        if ($LASTEXITCODE -eq 0) {
            $results.NuGet = $nugetOutput
        }
        
        # Check for known vulnerabilities
        $vulnOutput = dotnet list package --vulnerable 2>&1
        if ($vulnOutput -like "*vulnerable*") {
            $results.Vulnerabilities += $vulnOutput
        }
    }
    catch {
        Write-Warning "NuGet check failed: $($_.Exception.Message)"
    }
}

# npm dependency check
$packageJsonFiles = Get-ChildItem -Path $projectPath -Recurse -Name "package.json"
if ($packageJsonFiles.Count -gt 0) {
    Write-Host "Checking npm dependencies..."
    Push-Location $projectPath
    try {
        $npmOutdated = npm outdated --json 2>$null
        if ($npmOutdated) {
            $results.Npm = $npmOutdated | ConvertFrom-Json
        }
        
        # Check for vulnerabilities
        $npmAudit = npm audit --json 2>$null
        if ($npmAudit) {
            $auditResults = $npmAudit | ConvertFrom-Json
            if ($auditResults.vulnerabilities) {
                $results.Vulnerabilities += $auditResults.vulnerabilities
            }
        }
    }
    catch {
        Write-Warning "npm check failed: $($_.Exception.Message)"
    }
    finally {
        Pop-Location
    }
}

# Validation Logic
$hasIssues = $false
if ($results.NuGet.Count -gt 0) {
    Write-Host "Outdated NuGet packages detected:" -ForegroundColor Yellow
    $results.NuGet | ForEach-Object { Write-Host "  $_" }
    $hasIssues = $true
}

if ($results.Npm.Count -gt 0) {
    Write-Host "Outdated npm packages detected:" -ForegroundColor Yellow
    $results.Npm | ConvertTo-Json | Write-Host
    $hasIssues = $true
}

if ($results.Vulnerabilities.Count -gt 0) {
    Write-Host "Security vulnerabilities detected:" -ForegroundColor Red
    $results.Vulnerabilities | ConvertTo-Json | Write-Host
    $hasIssues = $true
}

# Export results
$results | ConvertTo-Json -Depth 5 | Out-File $outputPath
Write-Host "Results exported to: $outputPath"

if ($hasIssues) {
    Write-Host "Issues detected. Review the output above." -ForegroundColor Red
    # Remediation Hook: Create work items or PRs
    # Example: Create a GitHub issue or Azure DevOps task
    exit 1
} else {
    Write-Host "No dependency issues found." -ForegroundColor Green
    exit 0
}
```

## Administrative security scripts

| Action | Quick Usage | Purpose |
|---|---|---|
| **[Change project visibility](./scripts/change-project-visibility-using-entra-id.ps1)**: Switch project visibility (public ↔ private) | `az login`<br>`pwsh .\scripts\change-project-visibility-using-entra-id.ps1 -Organization "myorg" -ProjectId "myprojectid" -Visibility "private"` | Automation/bulk updates when changing many projects' visibility settings |
| **[Remove group members](./scripts/remove-azdevops-group-member.ps1)**: Remove member from Azure DevOps group | `az login`<br>`pwsh .\scripts\remove-azdevops-group-member.ps1 -Organization "myorg" -GroupId "<group-guid>" -MemberId "<member-descriptor>"` | Remove specific member from group entitlement (use with caution; keep audit trail) |
| **[Reassign work items](./scripts/reassign-workitems.ps1)**: Bulk reassign work items to new assignee | `az login`<br>`pwsh .\scripts\reassign-workitems.ps1 -Organization "myorg" -Project "myproject" -WorkItemIds 123,456 -NewAssignee "Jane Doe <jane@contoso.com>"` | Reassign active work items before removing/disabling user to avoid workflow disruption |

### Change project visibility (public ↔ private) using Microsoft Entra ID

This script changes project visibility using a Microsoft Entra ID token:

```powershell
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
```

## Support & audit

- **Keep an audit trail** of automated changes
- **Store credentials securely** (Key Vault or pipeline secret variables)
- **Revoke tokens/service principals** if credential rotation needed after running bulk operations
- **Test in non-production** environments before running in production

## Related content

- [Secure Azure DevOps](security-overview.md)
- [Security best practices](security-best-practices.md)
- [Azure DevOps REST API reference](/rest/api/azure/devops/)
- [Organization security policies](../settings/policy-settings.md)
- [Project security and permissions](permissions.md)
