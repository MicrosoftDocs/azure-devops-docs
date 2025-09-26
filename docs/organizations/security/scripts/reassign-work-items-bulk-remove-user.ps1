param(
    [Parameter(Mandatory=$true)][string]$Organization,
    [Parameter(Mandatory=$true)][string]$Project,
    [Parameter(Mandatory=$true)][string[]]$WorkItemIds,
    [Parameter(Mandatory=$true)][string]$NewAssignee, # "Display Name <email>" or valid identity string
    [string]$ApiVersion = "6.0"
)

$azdoResource = "499b84ac-1321-427f-aa17-267ca6975798"
try {
    $token = (& az account get-access-token --resource $azdoResource --query accessToken -o tsv).Trim()
} catch {
    Write-Error "Failed to get access token from Azure CLI. Run 'az login' or configure a service principal."
    exit 1
}

if (-not $token) {
    Write-Error "No access token returned. Ensure 'az login' or service principal auth is configured."
    exit 1
}

$headers = @{
    Authorization = "Bearer $token"
    "Content-Type" = "application/json-patch+json"
}

foreach ($id in $WorkItemIds) {
    $uri = "https://dev.azure.com/$Organization/$Project/_apis/wit/workitems/$id?api-version=$ApiVersion"
    $body = @(
        @{ op = "add"; path = "/fields/System.AssignedTo"; value = $NewAssignee }
    ) | ConvertTo-Json
    try {
        Invoke-RestMethod -Method Patch -Uri $uri -Headers $headers -Body $body
        Write-Host "Reassigned work item $id to $NewAssignee"
    } catch {
        Write-Warning "Failed to reassign $id: $($_.Exception.Message)"
    }
}