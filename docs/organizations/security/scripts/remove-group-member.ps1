param(
    [Parameter(Mandatory=$true)][string]$Organization,
    [Parameter(Mandatory=$true)][string]$GroupId,
    [Parameter(Mandatory=$true)][string]$MemberId,
    [string]$ApiVersion = "7.1"
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

$headers = @{ Authorization = "Bearer $token" }
$uri = "https://vsaex.dev.azure.com/$Organization/_apis/GroupEntitlements/$GroupId/members/$MemberId?api-version=$ApiVersion"

try {
    Write-Host "Removing member $MemberId from group $GroupId..."
    Invoke-RestMethod -Method Delete -Uri $uri -Headers $headers
    Write-Host "Removed."
} catch {
    Write-Error "Failed to remove group member: $($_.Exception.Message)"
    exit 1
}