---
title: Configure networking
description: Learn how to configure networking for Azure Managed DevOps Pools.
ms.date: 10/27/2025
ms.custom: sfi-image-nochange
---

# Configure Managed DevOps Pools networking

You can configure Azure Managed DevOps Pools agents to run in an isolated virtual network, or in an existing virtual network. This article describes how to configure your pool to run agents in your virtual network.

## Add agents to your own virtual network

You might want to add agents from Managed DevOps Pools to your own virtual network for scenarios such as:

- Your continuous integration and continuous delivery (CI/CD) agents need to access resources that are only available in your company network through a service like ExpressRoute.
- Your CI/CD agents need to access resources that are isolated to private endpoints.
- You want to network isolate your CI/CD infrastructure by bringing your own virtual network with company-specific firewall rules.
- Any other unique use cases that can't be achieved by out-of-the-box Managed DevOps Pools networking features.

You can add your pool's agents to your virtual network by using the following steps:

1. [Create or bring your virtual network and subnet](#create-or-bring-your-virtual-network-and-subnet).
1. [Delegate the subnet to `Microsoft.DevOpsInfrastructure/pools`](#delegate-the-subnet-to-microsoftdevopsinfrastructurepools).
1. [Associate the subnet with your pool](#associate-the-subnet-with-your-pool).

The previous steps delegate the subnet for exclusive access by the pool. Other pools or resources can't use the subnet.

A pool can use multiple subnets to connect multiple pools to the same virtual network. Each subnet is delegated and associated with its own pool.

## Create or bring your virtual network and subnet

The subnet must have enough address space to accommodate the max pool size of the pool you want to associate (including the five IP addresses Azure reserves in the subnet).

If you're using ExpressRoute, you need to allow writes by temporarily dropping or changing the management lock on the resource group.

> [!IMPORTANT]
> The pool and virtual network must be in the same region. Otherwise, you get an error similar to the following when you try to create the pool or update the network configuration: "Virtual network MDPVN is in region eastus, but pool mdpnonprodsub is in region australiaeast. These must be in the same region."

### <a name = "grant-reader-and-network-contributor-access-to-devopsinfrastructure-service-principal"></a> Grant Reader and Network Contributor access to the DevOpsInfrastructure service principal

Ensure the `DevOpsInfrastructure` principal has `Reader` and `Network Contributor` access on the virtual network.

You can also add the following permission to a custom role:

- `Microsoft.Network/virtualNetworks/*/read`
- `Microsoft.Network/virtualNetworks/subnets/join/action`
- `Microsoft.Network/virtualNetworks/subnets/serviceAssociationLinks/validate/action`
- `Microsoft.Network/virtualNetworks/subnets/serviceAssociationLinks/write`
- `Microsoft.Network/virtualNetworks/subnets/serviceAssociationLinks/delete`

Make a custom role for the **Service Association Link** access. You can create an example role at the resource group or subscription level in the **Access Control** tab. See the following example:

:::image type="content" source="./media/configure-networking/customrole.png" alt-text="Screenshot that shows custom role permissions.":::

### Check the principal access for DevOpsInfrastructure

1. Select **Access control (IAM)** for the virtual network, and then select **Check access**.

   :::image type="content" source="./media/configure-networking/permissions-check-access.png" alt-text="Screenshot that shows virtual network permissions for subnet delegation.":::

1. Search for and select **DevOpsInfrastructure**.

   :::image type="content" source="./media/configure-networking/devops-infrastructure-access.png" alt-text="Screenshot that shows how to select the AzureDevOpsInfrastructure principal.":::

1. Verify that you have **Reader** level access. Verify that `Microsoft.Network/virtualNetworks/subnets/join/action`, `Microsoft.Network/virtualNetworks/subnets/serviceAssociationLinks/validate/action`, and `Microsoft.Network/virtualNetworks/subnets/serviceAssociationLinks/write` access is assigned. Your custom role should appear here.

   :::image type="content" source="./media/configure-networking/verify-permissions.png" alt-text="Screenshot that shows virtual network permissions.":::

1. If the **DevOpsInfrastructure** principal doesn't have those permissions, add them. Select **Access control (IAM)** for the virtual network, and then select **Grant access to this resource**.

## Delegate the subnet to Microsoft.DevOpsInfrastructure/pools

In the portal, open **Subnet properties** and select `Microsoft.DevOpsInfrastructure/pools` under the **Subnet Delegation** section. Select **Save**.

:::image type="content" source="./media/configure-networking/MDP-BYO-Networking-MDPSubNet-Delegation.png" alt-text="Screenshot that shows how to configure the subnet delegation.":::

This process delegates the subnet for exclusive access for the pool. Other pools or resources can't use the subnet. To connect multiple pools to the same virtual network, multiple subnets must be used. Each subnet must be delegated and associated with their own pool. More information on subnet delegation can be found in [this overview of subnet delegation](/azure/virtual-network/subnet-delegation-overview).

After you delegate the subnet to `Microsoft.DevOpsInfrastructure/pools`, you can update the pool to use the subnet.

## Associate the subnet with your pool

#### [Azure portal](#tab/azure-portal/)

1. To create a new pool, go to the **Networking** tab. To update an existing pool, go to **Settings** > **Networking**, and then select **Agents injected into existing virtual network** > **Configure**.

   :::image type="content" source="./media/configure-networking/inject-agents-configure-option.png" alt-text="Screenshot that shows the configure option.":::

1. Select the **Subscription**, **Virtual Network**, and **Subnet** you delegated to `Microsoft.DevOpsInfrastructure/pools`, and then select **Ok**.

   :::image type="content" source="./media/configure-networking/subnet-resource.png" alt-text="Screenshot that shows how to associate the subnet to the pool.":::

   After the network update finishes, the newly created resource in the pool will use the delegated subnet.

#### [ARM template](#tab/arm/)

If you're using Azure Resource Manager templates (ARM templates), add a `networkProfile` property in the `fabricProfile` section. Add a `subnetId` property under `networkProfile` with the resource ID of your subnet.

```json
{
    "name": "MyManagedDevOpsPool",
    "type": "Microsoft.DevOpsInfrastructure/pools",
    "apiVersion": "2025-01-21",
    "location": "eastus",
    "properties": {
        ...
        "fabricProfile": {
            "networkProfile": {
              "subnetId":"/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/myVirtualNetwork/subnets/mySubnet",
            }
        }
    }
}
```

#### [Azure CLI](#tab/azure-cli/)

You can configure networking by using the `networkProfile` property in the `fabricProfile` section when you [create](/cli/azure/mdp/pool#az-mdp-pool-create) or [update](/cli/azure/mdp/pool#az-mdp-pool-update) a pool. For an isolated network, omit the `networkProfile` property when you create a pool.

```azurecli
az mdp pool create \
   --fabric-profile fabric-profile.json
   # other parameters omitted for space
```

The following example shows the `networkProfile` section of the **fabric-profile.json** file.

```json
{
  "vmss": {
    "sku": {...},
    "images": [...],
    "osProfile": {...},
    "storageProfile": {...},
    "networkProfile": {
        "subnetId": "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/myVirtualNetwork/subnets/mySubnet"
    }
  }
}
```

#### [Bicep](#tab/bicep/)

To use Bicep, add a `networkProfile` property in the `fabricProfile` section. Add a `subnetId` property under `networkProfile` with the resource ID of your subnet.

```bicep
resource managedDevOpsPools 'Microsoft.DevOpsInfrastructure/pools@2025-01-21' = {
  name: 'MyManagedDevOpsPool'
  location: 'eastus'
  properties: {
    ...
    fabricProfile: {
      networkProfile: {
        subnetId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/myVirtualNetwork/subnets/mySubnet'
      }
  }
}
```

* * *

> [!IMPORTANT]
> Don't put a **Delete** lock on the virtual network when you update your pools. During a pool update operation, Managed DevOps Pools creates a [service association link](/rest/api/virtualnetwork/service-association-links/list) on the subnet. If an update fails, Managed DevOps Pools attempts to clean the service association link, but if there's a **Delete** lock, you get an `InUseSubnetCannotBeDeleted` error. Managed DevOps Pools isn't able to delete the service association link, which leaves the subnet in a locked state (unable to be deleted). To resolve the issue, remove the **Delete** lock, and retry the update operation.
>
> For more information, see [Things to consider before you apply locks to your Azure resources](/azure/azure-resource-manager/management/lock-resources#considerations-before-applying-your-locks).

## <a name = "restricting-outbound-connectivity"></a> Restrict outbound connectivity

If you have systems in place on your network (network security group, firewalls, etc.) that restrict outbound connectivity, you need to allowlist certain endpoints to fully support Managed DevOps Pools. These endpoints are divided into globally required endpoints (necessary on any machine using Managed DevOps Pools) and endpoints you need for certain scenarios. All endpoints are HTTPS, unless otherwise stated.

### Endpoints you need to start up Managed DevOps Pools

If you don't allowlist these endpoints, machines fail to come online as part of the Managed DevOps Pools service, and you can't run pipelines on the pool:

- `*.prod.manageddevops.microsoft.com`: Managed DevOps Pools endpoint used to communicate with the Managed DevOps Pools service.
- `rmprodbuilds.azureedge.net`: Used to download the Managed DevOps Pools worker binaries and startup scripts. (The agent portion of the worker binaries is downloaded from `rm-agent.prod.manageddevops.microsoft.com` (formerly downloaded from `agent.prod.manageddevops.microsoft.com`) which is covered by the previous required `*.prod.manageddevops.microsoft.com` entry.)
- `*.queue.core.windows.net`: Worker queue for communicating with the Managed DevOps Pools service.

### Endpoints you need to connect to Azure DevOps

If you don't allowlist these endpoints, machines might come online and might even go to an *allocated* state, but fail to communicate with Azure DevOps, because the Azure DevOps Services task agent either can't connect or can't start.

- `download.agent.dev.azure.com`: The Azure DevOps agent's content delivery network (CDN) location, used to download the Azure DevOps agent (formerly `vstsagentpackage.azureedge.net` - for more information, see [Edgio CDN for Azure DevOps is being retired](https://devblogs.microsoft.com/devops/important-switching-cdn-providers/)).
- `dev.azure.com`: Required to handle communication with Azure DevOps.

## Validate endpoint connectivity

Confirm that you can use a subnet with Managed DevOps Pools by running the following script on a resource on that subnet. This step will help you validate that the network flow is configured to reach all of these available endpoints and the Managed DevOps control plane.

> [!IMPORTANT]
> You must run this script on a resource in your subnet (like a VM or container) to validate that the network path is open from that subnet to the required endpoints.

To run the script with PowerShell Core, or PowerShell 5 or greater, save the following script as `ValidateMDPEndpoints.ps1`. Run the following PowerShell command: `.\ValidateMDPEndpoints.ps1 -organization "<your-organization>"`.

```powershell
# ValidateMDPEndpoints.ps1
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
```

### Required endpoints for Linux machines

These endpoints are required to spin up Ubuntu machines, but aren't necessary if a pool is only using Windows. When you set up the Azure DevOps task agent, required packages are added and an `apt-get` command is run. This process fails if the following endpoints aren't allowlisted.

- `azure.archive.ubuntu.com`: Provisioning Linux machines. This endpoint is HTTP (port 80), not HTTPS (port 443).
- `www.microsoft.com`: Provisioning Linux machines.
- `security.ubuntu.com`: Provisioning Linux machines.
- `packages.microsoft.com`: Provisioning Linux machines.
- `ppa.launchpad.net`: Provisioning some specific Linux distributions.
- `dl.fedoraproject.org`: Provisioning certain Linux distributions.

### Required endpoints for some Azure DevOps features

These optional endpoints are required for specific Azure DevOps features to work on your pipelines. In the following set, the wildcard can be replaced with the specific Azure DevOps organization that hosts your pipeline. For example, if your organization is named `contoso`, you can use `contoso.services.visualstudio.com` instead of `*.services.visualstudio.com`.

- `*.services.visualstudio.com`
- `*.vsblob.visualstudio.com`: Used for both uploading and consuming artifacts.
- `*.vssps.visualstudio.com`: Used for authentication with Azure DevOps for certain features.
- `*.visualstudio.com`

> [!NOTE]
> The previous entries are the minimum domains required. If you have any issues, see the full list of required domains at [Azure DevOps allowed IP addresses and domain URLs](../organizations/security/allow-list-ip-url.md).

### Azure-related endpoints

Azure virtual machines (VMs) might route traffic to certain Azure features through your subnet. For these requests, you can route requests directly through Azure, or enable access through your network.

1. [Configure Azure traffic to run through service endpoints](/azure/virtual-network/virtual-network-service-endpoints-overview):

   You can route traffic directly through Azure to avoid adding throughput to your network security groups or firewalls. You don't need to allowlist the domains listed in the following option.

   For example, you can use the [data disk](./configure-storage.md) feature to involve network calls to Azure Storage. When you enable **Microsoft.Storage** service endpoint on your network, traffic routes directly through Azure, which avoids your network rules and reduces load.

1. To avoid routing traffic through service endpoints, allowlist this domain for a specific purpose:

   - `md-*.blob.storage.azure.net`: Required to [configure a data disk](./configure-storage.md).

### Akamai CDN delivery IPs

On May 1, 2025, Azure DevOps CDN assets transitioned to a solution served by Akamai and Azure Front Door. Ensure your network has outbound access to Akamai IP ranges. For more information, see:

- [CDN domain URL change for agents in pipelines](https://devblogs.microsoft.com/devops/cdn-domain-url-change-for-agents-in-pipelines/)
- [Azure CDN from Edgio retirement FAQ](/previous-versions/azure/cdn/edgio-retirement-faq)
- [Akamai TechDocs: Origin IP access control list](https://techdocs.akamai.com/origin-ip-acl/docs/update-your-origin-server)

If you configure your Azure DevOps Pipeline to run inside of a container, you need to also allowlist the source of the container image, in Docker or Azure Container Registry.

## Configure the Azure DevOps agent to run behind a proxy

If you configured a proxy service on your image and want the workloads that run on your pool to run behind this proxy, you must add the following environment variables on your image.

- `VSTS_AGENT_INPUT_PROXYURL`: The URL of the configured proxy to run behind.
- `VSTS_AGENT_INPUT_PROXYUSERNAME`: The username needed to use the proxy.
- `VSTS_AGENT_INPUT_PROXYPASSWORD`: The password to use the proxy.

For Windows, these environment variables should be system environment variables. For Linux, these variables should be in the `/etc/environment` file. If you set these system variables incorrectly or without a configured proxy service on the image, provisioning of new agents fails with network connectivity issues.

If you're migrating from Azure Virtual Machine Scale Set agents and are already using the proxy environment variables on your image, you shouldn't need to make any changes. This process is described in [Azure Virtual Machine Scale Set agents: Customize pipeline agent configuration](/azure/devops/pipelines/agents/scale-set-agents#customizing-pipeline-agent-configuration).

## See also

- [Configure pool settings](./configure-pool-settings.md)
- [Azure DevOps allowed IP addresses and domain URLs](../organizations/security/allow-list-ip-url.md)
