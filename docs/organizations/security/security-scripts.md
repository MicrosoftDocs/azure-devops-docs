---
title: Enhance security with AI-generated PowerShell scripts
titleSuffix: Azure DevOps
description: An overview of reusable AI-generated PowerShell scripts for enhancing Azure DevOps security.
ms.topic: overview
ms.subservice: azure-devops-security
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 05/28/2025
---

# Enhance security with AI-generated PowerShell scripts

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This article provides reusable PowerShell scripts for automating security scanning in Azure DevOps. Each script includes validation logic and remediation hooks to help teams proactively identify and resolve security issues.



## Change project visibility (public ↔ private) using the REST API

### Prerequisites

| Category | Requirements |
|----------|--------------|
| Organization policy | To make a project public the organization must have **Allow public projects** enabled (Organization settings > Policies). |
| Permissions | You need a role that includes the **Update project** permission (typically Organization Owner or Project Collection Administrator). |
| Authentication | Recommended: obtain a Microsoft Entra ID access token for the Azure DevOps resource (use Azure CLI: `az account get-access-token --resource 499b84ac-1321-427f-aa17-267ca6975798`). For CI/non-interactive flows use a service principal and a secure secret store. A PAT with appropriate scopes also works but is not recommended for automation. |
| Tools | Azure CLI (for token acquisition) or an OAuth library (MSAL). PowerShell (Invoke-RestMethod) is used in examples. |
| API version | Examples use api-version `6.0` for the Projects Update endpoint; confirm the API version for your environment if you need newer features. |
| Safety / impact | Making a project public exposes its contents to the internet. **Deny** permissions are not enforced for public projects; you can't selectively keep repos/artifacts private. Reassign or close active work and review pipelines/approvals before switching visibility. |

scripts/ChangeProjectVisibility-UsingAzureAD.ps1 — change project visibility (public ↔ private) using a Microsoft Entra ID token.This script updates project visibility using a Microsoft Entra ID access token. It uses the Azure CLI to obtain a token for the Azure DevOps resource (recommended for interactive or CI scenarios that already use az). For non-interactive automation, use a service principal (client credentials) and a token-acquisition method that stores secrets securely.



Example: run the visibility script (interactive)
```powershell
# Acquire credentials first (interactive or service principal)
# Example invocation:
pwsh .\scripts\ChangeProjectVisibility-UsingAzureAD.ps1 -Organization "myorg" -ProjectId "myprojectid" -Visibility "private"
```

Example: remove a user from a group
```powershell
pwsh .\scripts\Remove-AzDevOpsGroupMember.ps1 -Organization "myorg" -GroupId "00000000-0000-0000-0000-000000000000" -MemberId "descriptor-or-memberid"
```

Example: reassign work items
```powershell
pwsh .\scripts\Reassign-WorkItems.ps1 -Organization "myorg" -Project "myproject" -WorkItemIds 12345,23456 -NewAssignee "Jane Doe <jane@contoso.com>"
```



- scripts/Remove-AzDevOpsGroupMember.ps1 — remove a member from a group entitlement.
- scripts/Reassign-WorkItems.ps1 — bulk reassign work items before removing a user.


## Secret scanning

This script scans repository files for hardcoded secrets such as API keys, tokens, and passwords.

```powershell
# Secret scanner script
$repoPath = "C:\\AzureDevOps\\Repo"
$secretPatterns = @("AKIA[0-9A-Z]{16}", "password\\s*=\\s*['\"].+['\"]", "token\\s*=\\s*['\"].+['\"]")

$findings = @()
foreach ($file in Get-ChildItem -Path $repoPath -Recurse -Include *.ps1,*.config,*.json,*.yml) {
    $content = Get-Content $file.FullName
    foreach ($pattern in $secretPatterns) {
        if ($content -match $pattern) {
            $findings += [PSCustomObject]@{
                File = $file.FullName
                Match = $matches[0]
            }
        }
    }
}
# Validation logic
if ($findings.Count -gt 0) {
    Write-Host "Secrets found in the following files:"
    $findings | Format-Table
    # Remediation Hook: Notify via email or log
    $findings | Export-Csv -Path "C:\\AzureDevOps\\SecretScanResults.csv" -NoTypeInformation
    # Optional: Trigger pipeline halt or alert
} else {
    Write-Host "No secrets found."
}
```

## Dependency checks

This script checks for outdated or vulnerable dependencies using nuget and npm.

```powershell
# Dependency checker script
$projectPath = "C:\\AzureDevOps\\Repo"
# NuGet check
nuget outdated -Source $projectPath | Tee-Object -Variable nugetResults
# npm check
cd $projectPath
npm outdated | Tee-Object -Variable npmResults
# Validation Logic
if ($nugetResults.Count -gt 0 -or $npmResults.Count -gt 0) {
    Write-Host "Outdated dependencies detected."
    # Remediation Hook: Create work items or PRs
    # Example: Create a GitHub issue or Azure DevOps task
```

## Analyze code

This script uses PSScriptAnalyzer for static code analysis and flags common security issues.

```powershell
# Code Analysis Script
$repoPath = "C:\\AzureDevOps\\Repo"
$results = Invoke-ScriptAnalyzer -Path $repoPath -Recurse
# Validation Logic
if ($results.Count -gt 0) {
    Write-Host "Code issues found:"
    $results | Format-Table

    # Remediation Hook: Export results and notify
    $results | Export-Csv -Path "C:\\AzureDevOps\\CodeAnalysisResults.csv" -NoTypeInformation
    # Optional: Trigger code review or halt pipeline
} else {
    Write-Host "No issues found in code analysis."
}
```

