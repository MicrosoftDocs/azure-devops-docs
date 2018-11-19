<<<<<<< HEAD
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

=======
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

>>>>>>> 99540a0c31375ded24287163a17e5a534c14a8bd
Write-Host "Done."