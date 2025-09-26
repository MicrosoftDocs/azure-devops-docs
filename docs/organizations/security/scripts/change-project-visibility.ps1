# Change project visibility using a Microsoft Entra ID token.
param(
    [Parameter(Mandatory=$true)][string]$Organization,
    [Parameter(Mandatory=$true)][string]$ProjectId,
    [Parameter(Mandatory=$true)][ValidateSet("private","public")][string]$Visibility,
    [string]$ApiVersion = "6.0",
    [string]$AccessToken,
    [string]$AzdoResource = "499b84ac-1321-427f-aa17-267ca6975798"
)

function Get-AccessToken {
    param([string]$ProvidedToken, [string]$Resource)

    if ($ProvidedToken) { return $ProvidedToken.Trim() }
    if ($env:AZDO_ACCESS_TOKEN) { return $env:AZDO_ACCESS_TOKEN.Trim() }

    if (-not (Get-Command az -ErrorAction SilentlyContinue)) {
        Write-Verbose "'az' CLI not found; cannot acquire token automatically."
        return $null
    }

    try {
        $token = (& az account get-access-token --resource $Resource --query accessToken -o tsv) 2>$null
        if (-not $token) { throw "az returned no token." }
        return $token.Trim()
    } catch {
        Write-Verbose "Azure CLI token acquisition failed: $($_.Exception.Message)"
        return $null
    }
}

$token = Get-AccessToken -ProvidedToken $AccessToken -Resource $AzdoResource
if (-not $token) {
    Write-Error "No access token available. Provide -AccessToken, set AZDO_ACCESS_TOKEN, or run 'az login' / service principal auth."
    exit 2
}

$headers = @{ Authorization = "Bearer $token"; "Content-Type" = "application/json" }
$projectUri = "https://dev.azure.com/$Organization/_apis/projects/$ProjectId?api-version=$ApiVersion"

try {
    $current = Invoke-RestMethod -Method Get -Uri $projectUri -Headers $headers -ErrorAction Stop
} catch {
    Write-Error "Failed to read project info: $($_.Exception.Message)"
    exit 3
}

Write-Host "Current visibility: $($current.visibility)"
if ($current.visibility -eq $Visibility) {
    Write-Host "Project already '$Visibility'. Nothing to do."
    exit 0
}

$body = @{ visibility = $Visibility } | ConvertTo-Json
try {
    $resp = Invoke-RestMethod -Method Patch -Uri $projectUri -Headers $headers -Body $body -ErrorAction Stop
    Write-Host "Update requested. API reports visibility: $($resp.visibility)"
} catch {
    Write-Error "Failed to update project visibility: $($_.Exception.Message)"
    if ($_.ErrorDetails) { Write-Error $_.ErrorDetails.Message }
    exit 4
}

try {
    $verify = Invoke-RestMethod -Method Get -Uri $projectUri -Headers $headers -ErrorAction Stop
    Write-Host "Verified visibility: $($verify.visibility)"
    if ($verify.visibility -ne $Visibility) {
        Write-Warning "Verification mismatch: expected '$Visibility', got '$($verify.visibility)'."
        exit 5
    }
} catch {
    Write-Warning "Unable to verify updated visibility: $($_.Exception.Message)"
    exit 6
}

Write-Host "Project visibility successfully set to '$Visibility'."
exit 0