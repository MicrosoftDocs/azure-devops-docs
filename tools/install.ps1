Set-Variable -Name GitRoot -Value (git rev-parse --show-toplevel)
Set-Variable -Name GitCommitMessageHookPath -Value (Join-Path $GitRoot "/.git/hooks/commit-msg")

Set-Variable -Name NewCommitMessageFile -Value "/hooks/commit-msg"
Set-Variable -Name NewCommitMessagePath -Value (Join-Path $PSScriptRoot $NewCommitMessageFile)

if(!(Test-Path -Path $NewCommitMessagePath -PathType Leaf))
{
    Write-Error "Something's gone wrong, I can't find $NewCommitMessagePath"
    exit 1
}

Write-Host "Installing Git commit-msg hook..."

if (Test-Path -Path $GitCommitMessageHookPath)
{
    Set-Variable -Name BackedUpCommitMessageHook -Value "$GitCommitMessageHookPath.previous"

    Write-Warning "You already have a Git commit-msg hook installed."
    Write-Warning "Backing it up as $GitCommitMessageHookPath.previous"
    if (Test-Path -Path $GitCommitMessageHookPath)
    {
        Remove-Item -Path $BackedUpCommitMessageHook
    }
    Rename-Item -Path $GitCommitMessageHookPath -NewName $BackedUpCommitMessageHook
}

Copy-Item -Path $NewCommitMessagePath -Destination $GitCommitMessageHookPath
Write-Host "Done."