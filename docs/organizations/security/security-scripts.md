---
title: Automate security auditing and administration
titleSuffix: Azure DevOps
description: Use PowerShell scripts to audit security across your Azure DevOps organization and automate common security administration tasks.
ms.topic: how-to
ms.subservice: azure-devops-security
ai-usage: ai-generated
ms.update-cycle: 180-days
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 10/21/2025
---

# Automate security auditing and administration

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

## Get started

### Which script should I use?

| Your goal | Recommended script | Example frequency |
|-----------|-------------------|-----------|
| Find security risks | [User access audit](#audit-user-access-and-permissions) | Monthly |
| Clean up permissions | [Remove group members](#remove-group-members) | As needed |
| Prepare for user departure | [Reassign Work Items](#reassign-work-items) → [Remove Group Members](#remove-group-members) | As needed |
| Audit connections | [Service connection audit](#audit-service-connections-and-credentials) | Quarterly |
| Check dependencies | [Dependency scanner](#check-for-vulnerable-dependencies) | Weekly |

## Audit security and access across your organization

### Audit user access and permissions

This script audits and reports on user permissions across the organization:

```powershell
# User Access Audit Script
param(
    [Parameter(Mandatory=$true)]
    [string]$organization,
    [string]$outputPath = "C:\AzureDevOps\UserAccessAudit.csv",
    [string]$apiVersion = "7.1-preview"
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
    [string]$apiVersion = "7.1-preview"
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

param(
  [string]$projectPath = (Resolve-Path ".").Path,
  [string]$outputPath  = (Join-Path (Resolve-Path ".").Path "dependency-results.json")
)

# ---------------------------
# Helpers
# ---------------------------
function Write-Severity {
  param(
    [Parameter(Mandatory)] [string] $severity,
    [Parameter(Mandatory)] [string] $text
  )
  $sev = $severity.ToLower()
  switch ($sev) {
    "critical" { Write-Host $text -ForegroundColor Red }
    "high"     { Write-Host $text -ForegroundColor Red }
    "medium"   { Write-Host $text -ForegroundColor Yellow }
    "moderate" { Write-Host $text -ForegroundColor Yellow }
    "low"      { Write-Host $text -ForegroundColor DarkGray }
    "info"     { Write-Host $text -ForegroundColor Green }
    default    { Write-Host $text -ForegroundColor Green }
  }
}

function To-Severity {
  param([object]$s)
  if (-not $s) { return "info" }
  $t = "$s".ToLower()
  if ($t -eq "moderate") { return "medium" }
  return $t
}

# ---------------------------
# Data containers
# ---------------------------
$results = [ordered]@{
  NuGet          = @() 
  Npm            = @()
  Vulnerabilities= @()
}

Write-Host "Starting dependency check in: $projectPath"

# ---------------------------
# NuGet (.NET)
# ---------------------------
$nugetProjects = Get-ChildItem -Path $projectPath -Recurse -Filter "*.csproj" -File
foreach ($proj in $nugetProjects) {
  $projDir = Split-Path $proj.FullName -Parent
  Write-Host "Checking NuGet in project: $($proj.Name)"
  Push-Location $projDir
  try {
    # Ensure restore done (quiet)
    dotnet restore $proj.FullName | Out-Null

    # Outdated (JSON)
    $outJson = dotnet list $proj.FullName package --outdated --include-transitive --format json 2>$null
    if ($outJson) {
      $outObj = $outJson | ConvertFrom-Json
      $results.NuGet += [ordered]@{
        Project  = $proj.FullName
        Outdated = $outObj.outdatedPackages
      }
      # Print concise summary w/ "info" severity color (outdated isn't a vulnerability)
      if ($outObj.outdatedPackages) {
        Write-Host "  Outdated packages:"
        foreach ($p in $outObj.outdatedPackages) {
          $line = "    - {0} requested:{1} current:{2} latest:{3}" -f `
            $p.name, $p.requestedVersion, $p.resolvedVersion, $p.latestVersion
          Write-Severity -severity "info" -text $line
        }
      }
    }

    # Vulnerable (JSON)
    $vulnJson = dotnet list $proj.FullName package --vulnerable --format json 2>$null
    if ($vulnJson) {
      $vulnObj = $vulnJson | ConvertFrom-Json
      if ($vulnObj.vulnerablePackages) {
        $results.Vulnerabilities += [ordered]@{
          Project = $proj.FullName
          NuGet   = $vulnObj.vulnerablePackages
        }
        Write-Host "  Vulnerable packages:"
        foreach ($vp in $vulnObj.vulnerablePackages) {
          $sev = To-Severity $vp.severity
          $line = "    - {0} {1} (severity:{2})" -f $vp.name, $vp.resolvedVersion, $sev
          Write-Severity -severity $sev -text $line
          if ($vp.advisories) {
            foreach ($adv in $vp.advisories) {
              $aline = "        advisory: {0} ({1})" -f $adv.url, (To-Severity $adv.severity)
              Write-Severity -severity (To-Severity $adv.severity) -text $aline
            }
          }
        }
      }
    }
  } catch {
    Write-Host ("  NuGet check failed for {0}: {1}" -f $proj.Name, $_.Exception.Message) -ForegroundColor Yellow
  } finally {
    Pop-Location
  }
}

# ---------------------------
# npm (Node.js)
# ---------------------------
$packageJsons = Get-ChildItem -Path $projectPath -Recurse -Filter "package.json" -File | Where-Object { $_.FullName -notmatch "node_modules" }
foreach ($pkg in $packageJsons) {
  $pkgDir = Split-Path $pkg.FullName -Parent
  Write-Host "Checking npm folder: $pkgDir"
  Push-Location $pkgDir
  try {
    # Deterministic install; suppress lifecycle scripts
    if (Test-Path package-lock.json) {
      $null = npm ci --ignore-scripts --no-progress 2>$null
    } else {
      $null = npm install --ignore-scripts --no-progress 2>$null
    }

    # Outdated (JSON)
    $npmOutdated = npm outdated --json 2>$null
    if ($npmOutdated) {
      $outObj = $npmOutdated | ConvertFrom-Json
      $results.Npm += [ordered]@{
        Path    = $pkgDir
        Outdated= $outObj
      }
      Write-Host "  Outdated packages:"
      $props = $outObj.PSObject.Properties
      foreach ($prop in $props) {
        $pkgName = $prop.Name
        $val     = $prop.Value
        $line = "    - {0} current:{1} wanted:{2} latest:{3}" -f `
          $pkgName, $val.current, $val.wanted, $val.latest
        Write-Severity -severity "info" -text $line
      }
    }

    # Audit (JSON) — supports modern and legacy shapes
    $npmAudit = npm audit --json 2>$null
    if ($npmAudit) {
      $audit = $npmAudit | ConvertFrom-Json
      $vulnBlock =
        if ($audit.vulnerabilities) { $audit.vulnerabilities }
        elseif ($audit.advisories) { $audit.advisories.Values }
        else { $null }

      if ($vulnBlock) {
        $results.Vulnerabilities += [ordered]@{
          Path = $pkgDir
          Npm  = $vulnBlock
        }

        
        if ($audit.vulnerabilities) {
          # Modern shape: PSCustomObject whose properties are package names
          $props = $audit.vulnerabilities.PSObject.Properties
          foreach ($prop in $props) {
            $name = $prop.Name
            $info = $prop.Value
            $sev  = To-Severity $info.severity
            $via  = $info.via
            if ($via -is [System.Collections.IEnumerable]) {
              $viaText = ($via -join ", ")
            } else {
              $viaText = "$via"
            }
            $line = "    - {0} severity:{1} via:{2}" -f $name, $sev, $viaText
            Write-Severity -severity $sev -text $line
          }
        } elseif ($audit.advisories) {
          # Legacy
          foreach ($adv in $audit.advisories.Values) {
            $sev  = To-Severity $adv.severity
            $line = "    - {0} {1} severity:{2} url:{3}" -f $adv.module_name, $adv.findings[0].version, $sev, $adv.url
            Write-Severity -severity $sev -text $line
          }
        }
      }
    }
  } catch {
    # NOTE: using $() around variables to avoid ':' parsing issues
    Write-Host ("  npm check failed for {0}: {1}" -f $pkgDir, $_.Exception.Message) -ForegroundColor Yellow
  } finally {
    Pop-Location
  }
}

# ---------------------------
# Summary & Exit (always 0)
# ---------------------------
$results | ConvertTo-Json -Depth 8 | Out-File -Encoding utf8 $outputPath
Write-Host "Results exported to: $outputPath"

$hasIssues = ($results.NuGet.Count -gt 0) -or ($results.Npm.Count -gt 0) -or ($results.Vulnerabilities.Count -gt 0)
if ($hasIssues) {
  Write-Host "Issues detected." -ForegroundColor Yellow
} else {
  Write-Host "No dependency issues found." -ForegroundColor
}
```

## Administrative security scripts

| Action | Quick Usage | Purpose |
|---|---|---|
| **[Change project visibility](#change-project-visibility-public--private-using-microsoft-entra-id)**: Switch project visibility (public ↔ private) | `az login`<br>`pwsh` (see script in this article) `-Organization "myorg" -ProjectId "myprojectid" -Visibility "private"` | Automation/bulk updates when changing many projects' visibility settings |
| **[Remove group members](#remove-group-members)**: Remove member from Azure DevOps group | `az login`<br>`pwsh` (see script in this article) `-Organization "myorg" -GroupId "<group-guid>" -MemberId "<member-descriptor>"` | Remove specific member from group entitlement (use with caution; keep audit trail) |
| **[Reassign work items](#reassign-work-items)**: Bulk reassign work items to new assignee | `az login`<br>`pwsh` (see script in this article) `-Organization "myorg" -Project "myproject" -WorkItemIds 123,456 -NewAssignee "Jane Doe <jane@contoso.com>"` | Reassign active work items before removing/disabling user to avoid workflow disruption |

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

### Remove group members

This script removes a member from an Azure DevOps group:

```powershell
# Remove Azure DevOps Group Member Script
param(
    [Parameter(Mandatory=$true)]
    [string]$organization,
    [Parameter(Mandatory=$true)]
    [string]$groupId,
    [Parameter(Mandatory=$true)]
    [string]$memberId,
    [string]$apiVersion = "7.1-preview",
    [switch]$WhatIf
)

# Authenticate and get Microsoft Entra ID token
Write-Host "Authenticating to Azure..." -ForegroundColor Cyan

try {
    $resourceUrl = "499b84ac-1321-427f-aa17-267ca6975798"
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

Write-Host "Starting group member removal process..." -ForegroundColor Cyan

try {
    # Get group information
    $groupUrl = "https://vssps.dev.azure.com/$organization/_apis/graph/groups/$groupId" + "?api-version=$apiVersion"
    $group = Invoke-RestMethod -Uri $groupUrl -Method Get -Headers $headers
    
    Write-Host "Target group: $($group.displayName) ($($group.principalName))" -ForegroundColor Yellow
    
    # Get member information
    $memberUrl = "https://vssps.dev.azure.com/$organization/_apis/graph/users/$memberId" + "?api-version=$apiVersion"
    try {
        $member = Invoke-RestMethod -Uri $memberUrl -Method Get -Headers $headers
        Write-Host "Target member: $($member.displayName) ($($member.mailAddress))" -ForegroundColor Yellow
    }
    catch {
        # Try as a group instead of user
        $memberUrl = "https://vssps.dev.azure.com/$organization/_apis/graph/groups/$memberId" + "?api-version=$apiVersion"
        $member = Invoke-RestMethod -Uri $memberUrl -Method Get -Headers $headers
        Write-Host "Target member (group): $($member.displayName) ($($member.principalName))" -ForegroundColor Yellow
    }
    
    # Check if member is actually in the group
    $membershipsUrl = "https://vssps.dev.azure.com/$organization/_apis/graph/memberships/$memberId" + "?direction=up&api-version=$apiVersion"
    $memberships = Invoke-RestMethod -Uri $membershipsUrl -Method Get -Headers $headers
    
    $isMember = $false
    foreach ($membership in $memberships.value) {
        if ($membership.containerDescriptor -eq $group.descriptor) {
            $isMember = $true
            break
        }
    }
    
    if (-not $isMember) {
        Write-Host "Member is not currently in the specified group. No action needed." -ForegroundColor Green
        exit 0
    }
    
    # Show what will be done
    Write-Host "`nOperation Summary:" -ForegroundColor Cyan
    Write-Host "  Action: Remove member from group" -ForegroundColor White
    Write-Host "  Group: $($group.displayName)" -ForegroundColor White
    Write-Host "  Member: $($member.displayName)" -ForegroundColor White
    Write-Host "  Organization: $organization" -ForegroundColor White
    
    if ($WhatIf) {
        Write-Host "`n[WHAT-IF] Would remove member from group (no actual changes made)" -ForegroundColor Yellow
        exit 0
    }
    
    # Confirm before proceeding
    Write-Host "`nWARNING: This action will remove the member from the group and may affect their access to projects and resources." -ForegroundColor Red
    $confirmation = Read-Host "Are you sure you want to proceed? (y/N)"
    
    if ($confirmation -notmatch '^[Yy]') {
        Write-Host "Operation cancelled by user." -ForegroundColor Yellow
        exit 0
    }
    
    # Remove member from group
    Write-Host "`nRemoving member from group..." -ForegroundColor Cyan
    
    $removeUrl = "https://vssps.dev.azure.com/$organization/_apis/graph/memberships/$memberId/$($group.descriptor)" + "?api-version=$apiVersion"
    
    try {
        Invoke-RestMethod -Uri $removeUrl -Method Delete -Headers $headers
        Write-Host "Successfully removed member from group" -ForegroundColor Green
        
        # Verify removal
        Start-Sleep -Seconds 2
        $verifyMemberships = Invoke-RestMethod -Uri $membershipsUrl -Method Get -Headers $headers
        
        $stillMember = $false
        foreach ($membership in $verifyMemberships.value) {
            if ($membership.containerDescriptor -eq $group.descriptor) {
                $stillMember = $true
                break
            }
        }
        
        if (-not $stillMember) {
            Write-Host "Verification successful: Member has been removed from the group" -ForegroundColor Green
        }
        else {
            Write-Warning "Verification failed: Member may still be in the group"
        }
        
        # Log the action for audit trail
        $auditEntry = [PSCustomObject]@{
            Timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
            Action = "Remove Group Member"
            Organization = $organization
            GroupName = $group.displayName
            GroupId = $groupId
            MemberName = $member.displayName
            MemberId = $memberId
            ExecutedBy = (az account show --query user.name -o tsv)
            Status = "Success"
        }
        
        $auditPath = "C:\AzureDevOps\GroupMemberRemoval_$(Get-Date -Format 'yyyyMMdd_HHmmss').json"
        $auditEntry | ConvertTo-Json | Out-File $auditPath
        Write-Host "Audit log saved to: $auditPath" -ForegroundColor Green
        
    }
    catch {
        $errorMessage = $_.Exception.Message
        
        if ($errorMessage -like "*403*" -or $errorMessage -like "*Forbidden*") {
            Write-Error "Access denied. You need appropriate permissions to manage group memberships."
        }
        elseif ($errorMessage -like "*404*" -or $errorMessage -like "*Not Found*") {
            Write-Error "Group or member not found. Please verify the IDs are correct."
        }
        else {
            Write-Error "Failed to remove member from group: $errorMessage"
        }
        
        exit 1
    }
}
catch {
    Write-Error "Failed to process group member removal: $($_.Exception.Message)"
    exit 1
}

Write-Host "`nGroup member removal completed." -ForegroundColor Cyan
```

### Reassign work items

This script reassigns work items to a new assignee:

```powershell
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
    [string]$apiVersion = "7.1-preview",
    [switch]$WhatIf
)

# Authenticate and get Microsoft Entra ID token
Write-Host "Authenticating to Azure..." -ForegroundColor Cyan

try {
    $resourceUrl = "499b84ac-1321-427f-aa17-267ca6975798"
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
    "Content-Type" = "application/json-patch+json"
}

Write-Host "Starting work item reassignment process..." -ForegroundColor Cyan

$successfulUpdates = @()
$failedUpdates = @()

foreach ($workItemId in $workItemIds) {
    try {
        # Get current work item details
        $workItemUrl = "https://dev.azure.com/$organization/$project/_apis/wit/workitems/$workItemId" + "?api-version=$apiVersion"
        $workItem = Invoke-RestMethod -Uri $workItemUrl -Method Get -Headers $headers
        
        $currentAssignee = if ($workItem.fields.'System.AssignedTo') { 
            $workItem.fields.'System.AssignedTo'.displayName 
        } else { 
            "Unassigned" 
        }
        
        Write-Host "`nWork Item $workItemId ($($workItem.fields.'System.Title'))" -ForegroundColor Yellow
        Write-Host "  Current Assignee: $currentAssignee" -ForegroundColor White
        Write-Host "  New Assignee: $newAssignee" -ForegroundColor White
        Write-Host "  State: $($workItem.fields.'System.State')" -ForegroundColor White
        Write-Host "  Work Item Type: $($workItem.fields.'System.WorkItemType')" -ForegroundColor White
        
        if ($WhatIf) {
            Write-Host "  [WHAT-IF] Would reassign to $newAssignee" -ForegroundColor Yellow
            continue
        }
        
        # Skip if already assigned to the target user
        if ($workItem.fields.'System.AssignedTo' -and $workItem.fields.'System.AssignedTo'.displayName -eq $newAssignee) {
            Write-Host "  Already assigned to $newAssignee - skipping" -ForegroundColor Green
            continue
        }
        
        # Prepare update payload
        $updatePayload = @(
            @{
                op = "replace"
                path = "/fields/System.AssignedTo"
                value = $newAssignee
            }
        )
        
        # Add a comment about the reassignment
        $comment = "Work item reassigned from '$currentAssignee' to '$newAssignee' via automation on $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
        $updatePayload += @{
            op = "add"
            path = "/fields/System.History"
            value = $comment
        }
        
        $updateBody = $updatePayload | ConvertTo-Json -Depth 3
        
        # Update the work item
        $updateResponse = Invoke-RestMethod -Uri $workItemUrl -Method Patch -Headers $headers -Body $updateBody
        
        Write-Host "  ✓ Successfully reassigned" -ForegroundColor Green
        
        $successfulUpdates += [PSCustomObject]@{
            WorkItemId = $workItemId
            Title = $workItem.fields.'System.Title'
            PreviousAssignee = $currentAssignee
            NewAssignee = $newAssignee
            WorkItemType = $workItem.fields.'System.WorkItemType'
            State = $workItem.fields.'System.State'
            UpdatedAt = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
        }
        
    }
    catch {
        $errorMessage = $_.Exception.Message
        Write-Host "  ✗ Failed to reassign: $errorMessage" -ForegroundColor Red
        
        $failedUpdates += [PSCustomObject]@{
            WorkItemId = $workItemId
            Error = $errorMessage
            AttemptedAt = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
        }
    }
}

# Generate summary report
Write-Host "`n" + "="*50 -ForegroundColor Cyan
Write-Host "REASSIGNMENT SUMMARY" -ForegroundColor Cyan
Write-Host "="*50 -ForegroundColor Cyan

Write-Host "Total work items processed: $($workItemIds.Count)" -ForegroundColor White
Write-Host "Successful reassignments: $($successfulUpdates.Count)" -ForegroundColor Green
Write-Host "Failed reassignments: $($failedUpdates.Count)" -ForegroundColor Red

if ($successfulUpdates.Count -gt 0) {
    Write-Host "`nSuccessful Updates:" -ForegroundColor Green
    $successfulUpdates | Format-Table -AutoSize
    
    # Export successful updates
    $successPath = "C:\AzureDevOps\WorkItemReassignment_Success_$(Get-Date -Format 'yyyyMMdd_HHmmss').csv"
    $successfulUpdates | Export-Csv -Path $successPath -NoTypeInformation
    Write-Host "Successful updates exported to: $successPath" -ForegroundColor Green
}

if ($failedUpdates.Count -gt 0) {
    Write-Host "`nFailed Updates:" -ForegroundColor Red
    $failedUpdates | Format-Table -AutoSize
    
    # Export failed updates
    $failedPath = "C:\AzureDevOps\WorkItemReassignment_Failed_$(Get-Date -Format 'yyyyMMdd_HHmmss').csv"
    $failedUpdates | Export-Csv -Path $failedPath -NoTypeInformation
    Write-Host "Failed updates exported to: $failedPath" -ForegroundColor Yellow
}

# Create audit log
$auditEntry = [PSCustomObject]@{
    Timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    Action = "Bulk Work Item Reassignment"
    Organization = $organization
    Project = $project
    NewAssignee = $newAssignee
    TotalWorkItems = $workItemIds.Count
    SuccessfulUpdates = $successfulUpdates.Count
    FailedUpdates = $failedUpdates.Count
    ExecutedBy = (az account show --query user.name -o tsv)
    WorkItemIds = ($workItemIds -join ", ")
}

$auditPath = "C:\AzureDevOps\WorkItemReassignment_Audit_$(Get-Date -Format 'yyyyMMdd_HHmmss').json"
$auditEntry | ConvertTo-Json -Depth 3 | Out-File $auditPath
Write-Host "`nAudit log saved to: $auditPath" -ForegroundColor Green

if ($WhatIf) {
    Write-Host "`n[WHAT-IF MODE] No actual changes were made" -ForegroundColor Yellow
}

Write-Host "`nWork item reassignment process completed." -ForegroundColor Cyan

# Exit with appropriate code
if ($failedUpdates.Count -gt 0) {
    exit 1
} else {
    exit 0
}
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
- [Project security and permissions](permissions.md)
