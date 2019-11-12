Set-Variable -Name GitRoot -Value (git rev-parse --show-toplevel)
Set-Variable -Name GitCommitMessageHookPath -Value (Join-Path $GitRoot "/.git/hooks/commit-msg")

Set-Variable -Name NewCommitMessageHookFile -Value "/hooks/commit-msg"
Set-Variable -Name NewCommitMessageHookPath -Value (Join-Path $PSScriptRoot $NewCommitMessageHookFile)

if(!(Test-Path -Path $NewCommitMessageHookPath -PathType Leaf))
{
    Write-Error "Something's gone wrong, I can't find $NewCommitMessageHookPath"
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

Copy-Item -Path $NewCommitMessageHookPath -Destination $GitCommitMessageHookPath
Write-Host "Done."