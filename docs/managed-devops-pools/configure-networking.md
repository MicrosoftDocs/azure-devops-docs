---
title: Configure networking
description: Learn how to configure networking for Managed DevOps Pools.
ms.date: 06/18/2025
---

# Configure Managed DevOps Pools networking

Managed DevOps Pools agents can be configured to run in an isolated virtual network, or into an existing virtual network. This article describes how to configure your Managed DevOps Pool to run agents in your virtual network.

## Adding agents to your own virtual network

You may want to add agents from Managed DevOps Pools to your own virtual network for scenarios such as:

* Your CI/CD Agents need to access resources that are only available in your company network through a service like Express Route
* Your CI/CD Agents need to access resources that are isolated to private endpoints
* You want to network isolate your CI/CD infrastructure by bringing your own VNet with company specific firewall rules
* Any other unique use cases that can't be achieved by out-of-box Managed DevOps Pools networking related features

You can add your pool's agents to your virtual network using the following steps.

1. [Create or bring your virtual network and subnet](#create-or-bring-your-virtual-network-and-subnet)
2. [Delegate the subnet to Microsoft.DevOpsInfrastructure/pools](#delegate-the-subnet-to-microsoftdevopsinfrastructurepools)
3. [Associate the subnet with your Managed DevOps Pool](#associate-the-subnet-with-your-managed-devops-pool)

The previous steps delegate the subnet for exclusive access by the pool and the subnet can't be used by other pools or resources.
In order to connect multiple pools to the same virtual network, multiple subnets can be used, each delegated and associated with their own pool.

## Create or bring your virtual network and subnet

The subnet must have enough address space to accommodate the max pool size of the pool you want to associate (include the 5 IP address Azure reserves in the subnet).
If you're using Express Route, you need to temporary drop or change the management lock on the resource group to allow writes.

> [!IMPORTANT]
> The Managed DevOps Pool and virtual network must be in the same region, or you'll get an error similar to the following when you try to create the pool or update the network configuration. `Virtual network MDPVN is in region eastus, but pool mdpnonprodsub is in region australiaeast. These must be in the same region.`

### Grant Reader and Network Contributor access to DevOpsInfrastructure service principal

Ensure the DevOpsInfrastructure principal has the following access on the virtual network:
- `Reader` and `Network Contributor`
- Or add the following permission to a custom role:
  - `Microsoft.Network/virtualNetworks/*/read`
  - `Microsoft.Network/virtualNetworks/subnets/join/action`
  - `Microsoft.Network/virtualNetworks/subnets/serviceAssociationLinks/validate/action`
  - `Microsoft.Network/virtualNetworks/subnets/serviceAssociationLinks/write`
  - `Microsoft.Network/virtualNetworks/subnets/serviceAssociationLinks/delete`

Make a custom role for the **Service Association Link** access. An example role can be created at the resource group or subscription level in the Access Control tab, as shown in the following example.

:::image type="content" source="./media/configure-networking/customrole.png" alt-text="Screenshot of custom role permissions.":::

### To check the DevOpsInfrastructure principal access

1. Choose **Access control (IAM)** for the virtual network, and choose **Check access**.

   :::image type="content" source="./media/configure-networking/permissions-check-access.png" alt-text="Screenshot of VNet Permissions for SubNet Delegation.":::

2. Search for **DevOpsInfrastructure** and select it.

   :::image type="content" source="./media/configure-networking/devops-infrastructure-access.png" alt-text="Screenshot of selecting AzureDevOpsInfrastructure principal.":::

3. Verify **Reader** access. Verify that `Microsoft.Network/virtualNetworks/subnets/join/action`, `Microsoft.Network/virtualNetworks/subnets/serviceAssociationLinks/validate/action` and `Microsoft.Network/virtualNetworks/subnets/serviceAssociationLinks/write` access is assigned. Your custom role should appear here.

   :::image type="content" source="./media/configure-networking/verify-permissions.png" alt-text="Screenshot of VNet Permissions.":::

4. If **DevOpsInfrastructure** doesn't have those permissions, add them by choosing **Access control (IAM)** for the virtual network, and choose **Grant access to this resource** and add them.

## Delegate the subnet to Microsoft.DevOpsInfrastructure/pools

The subnet needs to be delegated to the `Microsoft.DevOpsInfrastructure/pools` to be used.
Open the subnet properties in the Portal and select `Microsoft.DevOpsInfrastructure/pools` under the Subnet Delegation section and choose **Save**.

:::image type="content" source="./media/configure-networking/MDP-BYO-Networking-MDPSubNet-Delegation.png" alt-text="Screenshot of configuring the subnet delegation.":::

This delegates the subnet for exclusive access for the pool and the subnet can't be used by other pools or resources. In order to connect multiple pools to the same virtual network, multiple subnets must be used, each delegated and associated with their own pool. More information on subnet delegation can be found [here](/azure/virtual-network/subnet-delegation-overview).

Once the subnet is delegated to `Microsoft.DevOpsInfrastructure/pools`, the pool can be updated to use the subnet.

## Associate the subnet with your Managed DevOps Pool

#### [Azure portal](#tab/azure-portal/)

1. If you're creating a new pool, go to the **Networking** tab. To update an existing pool, go to **Settings** > **Networking**, and choose **Agents injected into existing virtual network**, **Configure**.

   :::image type="content" source="./media/configure-networking/inject-agents-configure-option.png" alt-text="Screenshot of configure option.":::

1. Choose the **Subscription**, **Virtual Network**, and **Subnet** you delegated to `Microsoft.DevOpsInfrastructure/pools`, and choose **Ok**.

   :::image type="content" source="./media/configure-networking/subnet-resource.png" alt-text="Screenshot of associating the subnet to the pool.":::

Once the network update completes, newly created resource in the pool will use the delegated subnet.

#### [ARM template](#tab/arm/)

If you're using ARM templates, add a `networkProfile` property in the `fabricProfile` section, then add a `subnetId` property under `networkProfile` with the resource ID of your subnet. 

```json
{
    "name": "MyManagedDevOpsPool",
    "type": "Microsoft.DevOpsInfrastructure/pools",
    "apiVersion": "2024-10-19",
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

Networking is configured using the `networkProfile` property in the `fabricProfile` section when [creating](/cli/azure/mdp/pool#az-mdp-pool-create) or [updating](/cli/azure/mdp/pool#az-mdp-pool-update) a pool. For an isolated network, omit the `networkProfile` property when creating a pool.

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

* * *

## Restricting outbound connectivity

If you have systems in place on your network (NSG, Firewall, etc.) that restrict outbound connectivity, certain endpoints need to be allowlisted in order to fully support Managed DevOps pools. These endpoints are divided into globally required endpoints (necessary on any Managed DevOps pools machine) and endpoints required for certain scenarios. All endpoints are HTTPS, unless otherwise stated.

* Required Endpoints for Managed DevOps Pool startup - Without allowlisting these endpoints, machines will fail to come online as part of our service, and you will not be able to run pipelines on the Managed DevOps Pool
   * `*.prod.manageddevops.microsoft.com` - Managed DevOps Pools endpoint, used to communicate with the Managed DevOps Pools service.
   * `rmprodbuilds.azureedge.net` - Used to download the Managed DevOps Pools worker binaries and startup scripts. (The agent portion of the worker binaries is downloaded from `rm-agent.prod.manageddevops.microsoft.com` (formerly downloaded from `agent.prod.manageddevops.microsoft.com`) which is covered by the previous required `*.prod.manageddevops.microsoft.com` entry.)
   * `*.queue.core.windows.net` - Worker queue for communicating with Managed DevOps Pools service.
* Required Endpoints for connecting to Azure DevOps - without allowlisting these endpoints, machines may come online and even go to an "allocated" state, but will fail to communicate with ADO as either the VSTS task agent can't connect, or it can't start.
   * `download.agent.dev.azure.com` - Azure DevOps agent CDN location, used to download Azure DevOps agent (formerly `vstsagentpackage.azureedge.net` - for more information, see [Edgio CDN for Azure DevOps is being retired](https://devblogs.microsoft.com/devops/important-switching-cdn-providers/)).
   * `dev.azure.com` - Required to handle communication with Azure DevOps
   *  Preparing Linux machines - these endpoints are required to spin up Ubuntu machines, but are not necessary if a pool is only using Windows. As part of setting up the Azure DevOps Task agent, a few required packages are added and an apt-get is run, which will fail without these being allowlisted.
      * `azure.archive.ubuntu.com` - Provisioning Linux machines - this is HTTP (port 80), not HTTPS (port 443)
      * `www.microsoft.com` - Provisioning Linux machines
      * `security.ubuntu.com` - Provisioning Linux machines
      * `packages.microsoft.com` - Provisioning Linux machines
      * `ppa.launchpad.net` - Provisioning some specific Linux distros
      * `dl.fedoraproject.org` - Provisioning certain Linux distros
* Optional, but required for specific Azure DevOps features to work on your pipelines. In the following set, the wildcard can be replaced with the specific Azure DevOps organization hosting your pipeline. For example, if your organization is named `contoso`, you can use `contoso.services.visualstudio.com` instead of `*.services.visualstudio.com`. These entries are the minimum domains required. If you have any issues, see [Azure DevOps allowlist](/azure/devops/organizations/security/allow-list-ip-url) for the full list of domains required.
   * `*.services.visualstudio.com`
   * `*.vsblob.visualstudio.com` - Used for Artifacts, both uploading and consuming
   * `*.vssps.visualstudio.com` - Used for authentication with Azure DevOps for certain features
   * `*.visualstudio.com`
* Azure related endpoints:
    Azure VMs may route traffic to certain Azure features through your subnet. For these requests, you have the option of routing requests through Azure directly, or enabling access through your network.
    1. [Configuring Azure traffic to run through Service Endpoints](/azure/virtual-network/virtual-network-service-endpoints-overview)

       Routing traffic through Azure directly avoids adding throughput to your NSGs or Firewalls, and does not require that you allowlist the domains listed in the following option.

       For example, using the [data disk](./configure-storage.md) feature will involve network calls to Azure Storage. Enabling **Microsoft.Storage** service endpoint on your network will route traffic directly through Azure, avoiding your network rules and reducing load.
    2. If you want to avoid routing traffic through Service Endpoints, these are the domains to allowlist for specific features.

       * `md-*.blob.storage.azure.net` - Required to [configure a data disk](./configure-storage.md)
* Akamai CDN Delivery IPs: Starting May 1st 2025, Azure DevOps CDN assets are transitioning to a solution served by Akamai and Azure Front Door. Ensure your network has outbound access to Akamai IP ranges. For more information, see:
   * [CDN Domain URL change for Agents in Pipelines](https://devblogs.microsoft.com/devops/cdn-domain-url-change-for-agents-in-pipelines/)
   * [Azure CDN from Edgio retirement FAQ](/previous-versions/azure/cdn/edgio-retirement-faq)
   * [Akamai TechDocs - Origin IP Access Control List](https://techdocs.akamai.com/origin-ip-acl/docs/update-your-origin-server)

If you configure your Azure DevOps Pipeline to run inside of a container, you need to also allowlist the source of the container image (Docker or ACR).

## Configure the Azure DevOps Agent to run behind a Proxy

If you configured a proxy service on your image and want your workloads running on your Managed DevOps pool to run behind this proxy, you must add the following environment variables on your image.

* `VSTS_AGENT_INPUT_PROXYURL` - The URL of the configured proxy to run behind
* `VSTS_AGENT_INPUT_PROXYUSERNAME` - The username needed to use the proxy
* `VSTS_AGENT_INPUT_PROXYPASSWORD` - The password to use the proxy.

For Windows, these environment variables should be system environment variables, and for Linux these variables should be in the **/etc/environment** file. Setting these system variables incorrectly or without a configured proxy service on the image causes provisioning of new agents to fail with network connectivity issues.

If you're migrating from Azure Virtual Machine Scale Set agents and are already using the proxy environment variables on your image, as described in [Azure Virtual Machine Scale Set agents- Customizing Pipeline Agent Configuration](/azure/devops/pipelines/agents/scale-set-agents#customizing-pipeline-agent-configuration), no changes should be required.

## See also

* [Configure pool settings](./configure-pool-settings.md)
