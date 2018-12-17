Set-Variable -Name GitRoot -Value (git rev-parse --show-toplevel)
Set-Variable -Name GitCommitMessageHookPath -Value (Join-Path $GitRoot "/.git/hooks/commit-msg")
Set-Variable -Name BackedUpCommitMessageHook -Value "$GitCommitMessageHookPath.previous"

Write-Host "Uninstalling Git commit-msg hook..."

if (Test-Path -Path $GitCommitMessageHookPath)
{
    Remove-Item -Path $GitCommitMessageHookPath

    if (Test-Path -Path $BackedUpCommitMessageHook)
    {
        Write-Host "Putting back your previous commit-msg hook."
        Rename-Item -Path $BackedUpCommitMessageHook -NewName $GitCommitMessageHookPath
    }
}
else
{
    Write-Host "No commit-msg hook found, nothing to do."
}

Write-Host "Done."