# Remove Azure DevOps Group Member Script
param(
    [Parameter(Mandatory=$true)]
    [string]$organization,
    [Parameter(Mandatory=$true)]
    [string]$groupId,
    [Parameter(Mandatory=$true)]
    [string]$memberId,
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
    "Content-Type" = "application/json"
}

# Get group details
Write-Host "Getting group details..." -ForegroundColor Yellow

try {
    $groupUrl = "https://vssps.dev.azure.com/$organization/_apis/graph/groups/$groupId" + "?api-version=$apiVersion"
    $group = Invoke-RestMethod -Uri $groupUrl -Method Get -Headers $headers
    
    Write-Host "Group: $($group.displayName)" -ForegroundColor White
}
catch {
    Write-Error "Failed to get group details: $($_.Exception.Message)"
    Write-Error "Make sure the organization name and group ID are correct"
    exit 1
}

# Get member details
Write-Host "Getting member details..." -ForegroundColor Yellow

try {
    # Try to get user first
    $memberUrl = "https://vssps.dev.azure.com/$organization/_apis/graph/users/$memberId" + "?api-version=$apiVersion"
    try {
        $member = Invoke-RestMethod -Uri $memberUrl -Method Get -Headers $headers
        $memberType = "User"
    }
    catch {
        # If not a user, try as a group
        $memberUrl = "https://vssps.dev.azure.com/$organization/_apis/graph/groups/$memberId" + "?api-version=$apiVersion"
        $member = Invoke-RestMethod -Uri $memberUrl -Method Get -Headers $headers
        $memberType = "Group"
    }
    
    Write-Host "$memberType to remove: $($member.displayName)" -ForegroundColor White
}
catch {
    Write-Error "Failed to get member details: $($_.Exception.Message)"
    Write-Error "Make sure the member ID is correct"
    exit 1
}

# Check if member is actually in the group
Write-Host "Verifying membership..." -ForegroundColor Yellow

try {
    $membershipUrl = "https://vssps.dev.azure.com/$organization/_apis/graph/memberships/$($member.descriptor)" + "?direction=up&api-version=$apiVersion"
    $memberships = Invoke-RestMethod -Uri $membershipUrl -Method Get -Headers $headers
    
    $isMember = $false
    foreach ($membership in $memberships.value) {
        if ($membership.containerDescriptor -eq $group.descriptor) {
            $isMember = $true
            break
        }
    }
    
    if (-not $isMember) {
        Write-Warning "$($member.displayName) is not a member of group '$($group.displayName)'"
        exit 0
    }
    
    Write-Host "Confirmed: $($member.displayName) is a member of '$($group.displayName)'" -ForegroundColor Green
}
catch {
    Write-Warning "Could not verify membership, proceeding with removal attempt..."
}

# Show what will be done
Write-Host "`nAction Summary:" -ForegroundColor Cyan
Write-Host "  Organization: $organization" -ForegroundColor White
Write-Host "  Group: $($group.displayName)" -ForegroundColor White
Write-Host "  Member: $($member.displayName) ($memberType)" -ForegroundColor White
Write-Host "  Action: Remove member from group" -ForegroundColor White

if ($whatIf) {
    Write-Host "`n[WHAT-IF] Would remove $($member.displayName) from group '$($group.displayName)'" -ForegroundColor Yellow
    exit 0
}

# Confirm action
$confirmation = Read-Host "`nAre you sure you want to remove this member from the group? (y/N)"
if ($confirmation -ne 'y' -and $confirmation -ne 'Y') {
    Write-Host "Operation cancelled by user" -ForegroundColor Yellow
    exit 0
}

# Remove member from group
Write-Host "Removing member from group..." -ForegroundColor Cyan

try {
    $removeUrl = "https://vssps.dev.azure.com/$organization/_apis/graph/memberships/$($member.descriptor)/$($group.descriptor)" + "?api-version=$apiVersion"
    
    Invoke-RestMethod -Uri $removeUrl -Method Delete -Headers $headers
    
    Write-Host "Successfully removed $($member.displayName) from group '$($group.displayName)'" -ForegroundColor Green
}
catch {
    $errorMessage = $_.Exception.Message
    
    # Parse specific error scenarios
    if ($errorMessage -like "*403*" -or $errorMessage -like "*Forbidden*") {
        Write-Error "Access denied. You need appropriate permissions to modify group memberships."
    }
    elseif ($errorMessage -like "*404*" -or $errorMessage -like "*NotFound*") {
        Write-Error "Membership not found. The member may not be in the group or IDs may be incorrect."
    }
    else {
        Write-Error "Failed to remove member from group: $errorMessage"
    }
    
    exit 1
}

# Verify removal
Write-Host "Verifying removal..." -ForegroundColor Yellow

try {
    Start-Sleep -Seconds 2  # Give the system time to update
    
    $membershipUrl = "https://vssps.dev.azure.com/$organization/_apis/graph/memberships/$($member.descriptor)" + "?direction=up&api-version=$apiVersion"
    $memberships = Invoke-RestMethod -Uri $membershipUrl -Method Get -Headers $headers
    
    $stillMember = $false
    foreach ($membership in $memberships.value) {
        if ($membership.containerDescriptor -eq $group.descriptor) {
            $stillMember = $true
            break
        }
    }
    
    if ($stillMember) {
        Write-Warning "Verification failed: Member may still be in the group"
    } else {
        Write-Host "Verification successful: Member has been removed from the group" -ForegroundColor Green
    }
}
catch {
    Write-Warning "Could not verify removal: $($_.Exception.Message)"
}

Write-Host "`nGroup member removal completed." -ForegroundColor Cyan