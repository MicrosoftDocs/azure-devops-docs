---
title: Use a script to update security settings
description: Learn how to use PowerShell scripts to automate Azure DevOps pipeline security settings. Configure project-level settings with secure-by-default recommendations.
ms.date: 06/11/2025
monikerRange: "<=azure-devops"
ai-usage: ai-assisted
---

# Use a script to update security settings

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

You can use a script to update pipelines settings at the project-level. For organization-level settings, you'll need to make configuration changes within the Azure  DevOps UI.

It's possible to automate these security settings using the Azure DevOps REST API. 

## Prerequisites

| **Product** | **Requirements**   |
|---|---|
| **Azure DevOps** | - An Azure DevOps organization and project. [Create one for free](../get-started/pipelines-sign-up.md). <br>   - **Permissions:**<br>      &nbsp;&nbsp;&nbsp;&nbsp;- To run this script and update Azure DevOps pipeline security settings: You must be a member of the [Project Administrators group](../../organizations/security/change-project-level-permissions.md).|
| **Azure** | - Azure account with access to authenticate via `Connect-AzAccount`.|


## Recommended secure-by-default settings

| Setting                                             | Recommended Value | Rationale                                                                                   |
|-----------------------------------------------------|-------------------|---------------------------------------------------------------------------------------------|
| `enforceReferencedRepoScopedToken`                    | True              | Ensures only scoped tokens are used for referenced repos, limiting access scope.           |
| `disableClassicPipelineCreation`                      | True              | Prevents creation of legacy pipelines; encourages use of secure, version-controlled YAML.  |
| `disableClassicBuildPipelineCreation`                 | True              | Disables classic build pipelines which lack modern security and auditing features.         |
| `disableClassicReleasePipelineCreation`               | True              | Disables classic release pipelines in favor of YAML-based alternatives.                    |
| `forkProtectionEnabled`                               | True              | Enables protections for builds triggered from forks to prevent secret leakage.             |
| `buildsEnabledForForks`                               | False             | Disallows builds from forks to avoid executing untrusted code.                             |
| `enforceJobAuthScopeForForks`                         | True              | Restricts job authorization to the current project for forked builds.                      |
| `enforceNoAccessToSecretsFromForks`                   | True              | Prevents secrets from being exposed to forked builds.                                      |
| `isCommentRequiredForPullRequest`                     | True              | Adds a manual gate before running builds on PRs.                                           |
| `requireCommentsForNonTeamMembersOnly`                | True              | Ensures only trusted contributors can trigger builds automatically.                        |
| `requireCommentsForNonTeamMemberAndNonContributors`   | True              | Adds another layer of protection for external PRs.                                         |
| `enableShellTasksArgsSanitizing`                      | True              | Prevents command injection in shell tasks.                                                 |
| `enableShellTasksArgsSanitizingAudit`                 | Optional          | Logs violations without blocking builds; useful for gradual rollout.                       |
| `disableImpliedYAMLCiTrigger`                         | True              | Prevents unintended CI triggers from YAML changes.                                         |
| `statusBadgesArePrivate`                              | True              | Keeps pipeline status private to avoid leaking project info.                               |
| `enforceSettableVar`                                  | True              | Ensures only explicitly allowed variables can be set at runtime.                           |
| `enforceJobAuthScope`                                 | True              | Restricts job access to only the current project.                                          |
| `enforceJobAuthScopeForReleases`                      | True              | Same as above, for release pipelines.                                                      |
| `publishPipelineMetadata`                             | False             | Avoids exposing metadata that could be used for reconnaissance.                            |


## Script to automate settings

Save the PowerShell script as a `.ps1` file (example: `Update-AzureDevOpsSecuritySettings.ps1`). You can run the script with our without parameters. 

**Update all projects in an organization**

```powershell
.\Update-AzureDevOpsSecuritySettings.ps1 -organization "YourOrgName"
```
 
**Update a specific project**

```powershell
.\Update-AzureDevOpsSecuritySettings.ps1 -organization "YourOrgName" -specificProjectName "YourProjectName"
```

If you get a 403 Forbidden error, verify you have Project Administrator or Collection Administrator permissions. 


```powershell
# Define the organization and API version
param(
    [string]$organization = "your-organization",
    [string]$apiVersion = "7.1",
    [string]$specificProjectName = $null # Optional parameter to specify a single project

)

# Check if already authenticated, if not, authenticate
if (-not (Get-AzContext -ErrorAction SilentlyContinue)) {
    Connect-AzAccount
}

# Get the access token for Azure DevOps
$resourceUrl = "499b84ac-1321-427f-aa17-267ca6975798"
$token = (Get-AzAccessToken -ResourceUrl $resourceUrl).Token

# Define the API URL to get projects
$projectsUrl = "https://dev.azure.com/$organization/_apis/projects?api-version=$apiVersion"

# Set up headers for the request
$headers = @{
    Authorization = "Bearer $token"
    "Content-Type"  = "application/json"
}

# Get the list of projects
$response = Invoke-RestMethod -Uri $projectsUrl -Method Get -Headers $headers

# Define the request body for updating settings
$body = @{
    enforceReferencedRepoScopedTokens = $true
    enableShellTasksArgsSanitizing = $true
    disableClassicBuildPipelineCreation = $true
    disableClassicReleasePipelineCreation = $true
    forkProtectionEnabled = $true
    buildsEnabledForForks = $true
    enforceJobAuthScopeForForks = $true
    enforceNoAccessToSecretsFromForks = $true
    isCommentRequiredForPullRequest = $true
    requireCommentsForNonTeamMembersOnly = $true
    requireCommentsForNonTeamMemberAndNonContributors = $true
    disableImpliedYAMLCiTrigger = $true
    statusBadgesArePrivate = $true
    enforceSettableVar = $true
    enforceJobAuthScope = $true 
    enforceJobAuthScopeForReleases = $true
    publishPipelineMetadata = $false
} | ConvertTo-Json -Depth 10

# Check if a specific project name is provided
if ($specificProjectName) {
    # Update the specified project
    Write-Output "Updating project: $specificProjectName"
    $updateUrl = "https://dev.azure.com/$organization/$specificProjectName/_apis/build/generalsettings?api-version=$apiVersion"

    try {
        Invoke-RestMethod -Uri $updateUrl -Method Patch -Headers $headers -Body $body
        Write-Output "Successfully updated settings for project: $specificProjectName"
    }
    catch {
        Write-Output "Failed to update project: $specificProjectName. Error: $($_.Exception.Message)"
    }
} else {
    # Loop through all projects and update each one
    $response.value | ForEach-Object {
        $projectName = $_.name
        Write-Output "Updating project: $projectName"
        $updateUrl = "https://dev.azure.com/$organization/$projectName/_apis/build/generalsettings?api-version=$apiVersion"

        try {
            Invoke-RestMethod -Uri $updateUrl -Method Patch -Headers $headers -Body $body
            Write-Output "Successfully updated settings for project: $projectName"
        }
        catch {
            Write-Output "Failed to update project: $projectName. Error: $($_.Exception.Message)"
        }
    }
}
```

Your output for each project will look like this. 

```powershell
Updating project: my-project

enforceReferencedRepoScopedToken                  : True
disableClassicPipelineCreation                    : False
disableClassicBuildPipelineCreation               : True
disableClassicReleasePipelineCreation             : True
forkProtectionEnabled                             : True
buildsEnabledForForks                             : False
enforceJobAuthScopeForForks                       : False
enforceNoAccessToSecretsFromForks                 : False
isCommentRequiredForPullRequest                   : False
requireCommentsForNonTeamMembersOnly              : False
requireCommentsForNonTeamMemberAndNonContributors : False
enableShellTasksArgsSanitizing                    : False
enableShellTasksArgsSanitizingAudit               : False
disableImpliedYAMLCiTrigger                       : True
statusBadgesArePrivate                            : True
enforceSettableVar                                : True
enforceJobAuthScope                               : True
enforceJobAuthScopeForReleases                    : True
publishPipelineMetadata                           : False
```
