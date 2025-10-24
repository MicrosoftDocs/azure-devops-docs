param (
    [string]$organization
)
$azureDevOpsUris = @(
    "https://dev.azure.com",
    "https://vssps.dev.azure.com",
    "https://vsrm.dev.azure.com",
    "https://management.azure.com",
    "https://login.microsoftonline.com",
    "https://graph.microsoft.com",
    "https://aadcdn.msftauth.net",
    "https://${organization}.visualstudio.com",
    "https://${organization}.vsrm.visualstudio.com",
    "https://${organization}.vstmr.visualstudio.com",
    "https://${organization}.pkgs.visualstudio.com",
    "https://${organization}.vssps.visualstudio.com",
    "https://download.agent.dev.azure.com",
    "download.agent.dev.azure.com"
)
$managedDevOpsPoolsControlPlaneUris = @(
    # List of agent queue endpoints - maps to *.queue.core.windows.net
    "https://rmprodaedefaultcq.queue.core.windows.net",
    "https://rmprodbrsdefaultcq.queue.core.windows.net",
    "https://rmprodcncdefaultcq.queue.core.windows.net",
    "https://rmprodcusdefaultcq.queue.core.windows.net",
    "https://rmprodeus2defaultcq.queue.core.windows.net",
    "https://rmprodgwcdefaultcq.queue.core.windows.net",
    "https://rmprodincdefaultcq.queue.core.windows.net",
    "https://rmprodneudefaultcq.queue.core.windows.net",
    "https://rmprodseadefaultcq.queue.core.windows.net",
    "https://rmprodszndefaultcq.queue.core.windows.net",
    "https://rmproduksdefaultcq.queue.core.windows.net",
    "https://rmprodwcusdefaultcq.queue.core.windows.net",
    "https://rmprodwus3defaultcq.queue.core.windows.net",
    # CDN for downloading the Managed DevOps Pools agent - maps to *.prod.managedevops.microsoft.com
    "rm-agent.prod.manageddevops.microsoft.com"
    # List of control plane endpoints - maps to *.manageddevops.microsoft.com
    "default.ae.prod.manageddevops.microsoft.com",
    "default.brs.prod.manageddevops.microsoft.com",
    "default.cnc.prod.manageddevops.microsoft.com",
    "default.cus.prod.manageddevops.microsoft.com",
    "default.eus2.prod.manageddevops.microsoft.com",
    "default.gwc.prod.manageddevops.microsoft.com",
    "default.inc.prod.manageddevops.microsoft.com",
    "default.neu.prod.manageddevops.microsoft.com",
    "default.sea.prod.manageddevops.microsoft.com",
    "default.szn.prod.manageddevops.microsoft.com",
    "default.uks.prod.manageddevops.microsoft.com",
    "default.wcus.prod.manageddevops.microsoft.com",
    "default.wus3.prod.manageddevops.microsoft.com"
)
$unreachableUris = @()
foreach ($uri in $azureDevOpsUris) {
    try {
        $hostName = ($uri -replace "^https?://", "") -replace "/.*", ""
        $connection = Test-NetConnection -ComputerName $hostName -Port 443 -WarningAction SilentlyContinue
        if (-not $connection.TcpTestSucceeded) {
            $unreachableUris += $uri
        }
    } catch {
        $unreachableUris += $uri
    }
}
if ($unreachableUris.Count -eq 0) {
    Write-Output "All Azure DevOps endpoints are reachable."
} else {
    Write-Output "The following Azure DevOps endpoints could not be reached:"
    $unreachableUris | ForEach-Object { Write-Output $_ }
}
foreach ($uri in $managedDevOpsPoolsControlPlaneUris) {
    try {
        $hostName = ($uri -replace "^https?://", "") -replace "/.*", ""
        $connection = Test-NetConnection -ComputerName $hostName -Port 443 -WarningAction SilentlyContinue

        if (-not $connection.TcpTestSucceeded) {
            $unreachableUris += $uri
        }
    } catch {
        $unreachableUris += $uri
    }
}
if ($unreachableUris.Count -eq 0) {
    Write-Output "All Azure Managed DevOps Pools endpoints are reachable."
} else {
    Write-Output "The following Managed DevOps Pools endpoints could not be reached:"
    $unreachableUris | ForEach-Object { Write-Output $_ }
}