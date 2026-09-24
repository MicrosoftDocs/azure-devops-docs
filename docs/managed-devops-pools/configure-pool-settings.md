---
title: Configure pool settings
description: Learn how to configure settings in Managed DevOps Pools.
ms.date: 09/24/2026
ms.custom: sfi-image-nochange
ms.topic: how-to
---

# Configure pool settings

This article describes how to configure the basic settings of your Managed DevOps Pools instance.

## Overview

To view an overview of pool settings, go to **Overview**.

:::image type="content" source="media/pool-settings/essentials.png" alt-text="Screenshot that shows pool overview essentials." lightbox="media/pool-settings/essentials-expanded.png":::

From **Overview**, you can:

* View your resource group and subscription details, and [move Azure resources to a new resource group or subscription](/azure/azure-resource-manager/management/move-resource-group-and-subscription).
* View the location of your pool. To view the supported locations, follow the procedure in [Register the Managed DevOps Pools resource provider in your Azure subscription](./prerequisites.md#register-the-managed-devops-pools-resource-provider-in-your-azure-subscription).
* Configure [tags](/azure/azure-resource-manager/management/tag-resources). Managed DevOps Pools passes up to 20 tags to the virtual machine (VM), and the rest are ignored.
* View configuration information for your pool, like **Name**, **Azure DevOps organization**, **Agent state**, and **Maximum agents**.
* View [predefined metrics charts](./monitor-pool.md#view-metrics-on-the-managed-devops-pool-overview).

## Pool settings

To configure your pool, go to **Settings** > **Pool**.

:::image type="content" source="media/pool-settings/pool-settings-menu.png" alt-text="Screenshot that shows the Pool settings menu.":::

To configure your pool, use the following settings:

* [Dev Center project](#dev-center-project)
* [Azure DevOps organization](#azure-devops-organization)
* [Images](#images)
* [Maximum agents](#maximum-agents)
* [Agent size](#agent-size)
* [OS disk type](#os-disk-type)

## Dev Center project

#### [Azure portal](#tab/azure-portal/)

Select the **Dev Center project** instance for your pool. (If you don't have one, you can create a **Dev Center** instance and **Dev Center project** instance when you create your pool.)

:::image type="content" source="media/pool-settings/dev-center.png" alt-text="Screenshot that shows Dev Center settings.":::

#### [ARM template](#tab/arm/)

The `devCenterProjectResourceId` property specifies the **Dev Center project** instance.

```json
{
    "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
    "contentVersion": "1.0.0.0",
    "resources": [
        {
            "name": "fabrikam-managed-pool",
            "type": "microsoft.devopsinfrastructure/pools",
            "location": "eastus",
            "tags": {},
            "properties": {
                ...
                "devCenterProjectResourceId": "/subscriptions/subscription_id_placeholder/resourceGroups/fabrikam-managed-devops-pools/providers/Microsoft.DevCenter/projects/fabrikam-dev-center-project"
            }
        }
    ]
}
```

You can retrieve the `devCenterProjectResourceId` value for a **Dev Center project** instance in the Azure portal by using **JSON View** from the overview page of your **Dev Center project** instance. You can also retrieve it by using the Azure CLI to query the project for its `id` property. 

In the following example, the `devCenterProjectResourceId` value is retrieved from a **Dev Center project** instance named `fabrikam-dev-center-project` in the `fabrikam-managed-devops-pools` resource group.

```azurecli
 az devcenter admin project show --name fabrikam-dev-center-project --resource-group fabrikam-managed-devops-pools --query "id"
```

#### [Azure CLI](#tab/azure-cli/)

The `devcenter-project-id` parameter specifies the **Dev Center project** instance when you [create](/cli/azure/mdp/pool#az-mdp-pool-create) or [update](/cli/azure/mdp/pool#az-mdp-pool-update) a pool.

```azurecli
az mdp pool create \
   --devcenter-project-id /subscriptions/aaaa0a0a-bb1b-cc2c-dd3d-eeeeee4e4e4e/resourceGroups/resourceGroupName/providers/Microsoft.DevCenter/projects/devCenterProjectName
   # other parameters omitted for space
```

You can retrieve the `devcenter-project-id` for your **Dev Center project** instance in the Azure portal by using **JSON View** from the **Overview** page of your **Dev Center project** instance. You can also retrieve it by using the Azure CLI to query the project for its `id` property. 

In the following example, the `devcenter-project-id` is retrieved from a **Dev Center project** instance named `fabrikam-dev-center-project` in the `fabrikam-managed-devops-pools` resource group.

```azurecli
 az devcenter admin project show --name fabrikam-dev-center-project --resource-group fabrikam-managed-devops-pools --query "id"
```

#### [Bicep](#tab/bicep/)

The `devCenterProjectResourceId` property specifies the **Dev Center project** instance.

```bicep
resource managedDevOpsPools 'Microsoft.DevOpsInfrastructure/pools@2025-09-20' = {
  name: 'fabrikam-managed-pool'
  location: 'eastus'
  properties: {
    ...
    devCenterProjectResourceId: '/subscriptions/subscription_id_placeholder/resourceGroups/fabrikam-managed-devops-pools/providers/Microsoft.DevCenter/projects/fabrikam-dev-center-project'
  }
}
```

You can retrieve the `devCenterProjectResourceId` for your **Dev Center project** instance in the Azure portal by using **JSON View** from the **Overview** page of your **Dev Center project** instance. You can also retrieve it by using the Azure CLI to query the project for its `id` property.

In the following example, the `devCenterProjectResourceId` is retrieved from a **Dev Center project** instance named `fabrikam-dev-center-project` in the `fabrikam-managed-devops-pools` resource group.

```azurecli
 az devcenter admin project show --name fabrikam-dev-center-project --resource-group fabrikam-managed-devops-pools --query "id"
```

* * *

## Azure DevOps organization

#### [Azure portal](#tab/azure-portal/)

If you configured your pool for a single Azure DevOps organization, you can specify the organization in pool settings.

:::image type="content" source="media/pool-settings/single-organization.png" alt-text="Screenshot that shows how to configure a single organization.":::

If you configured your pool for multiple organizations, the **Azure DevOps organization** setting isn't present in pool settings. To configure your pool for use in multiple organizations, go to **Settings** > **Security**, and configure [Use pool in multiple organizations](./configure-security.md#use-pool-in-multiple-organizations).

#### [ARM template](#tab/arm/)

You can configure the **Azure DevOps organization** value by using the `organizations` list in the `organizationProfile` section.

In the following example, a pool is configured for all projects in a single organization, with a parallelism of 4. For an example that shows how to configure multiple organizations, see [Use pool in multiple organizations](./configure-security.md#use-pool-in-multiple-organizations).

```json
{
    "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
    "contentVersion": "1.0.0.0",
    "resources": [
        {
            "name": "fabrikam-managed-pool",
            "type": "microsoft.devopsinfrastructure/pools",
            "apiVersion": "2025-09-20",
            "location": "eastus",
            "properties": {
                ...
                "organizationProfile": {
                    "organizations": [
                        {
                            "url": "https://dev.azure.com/fabrikam-tailspin",
                            "projects": [],
                            "parallelism": 4
                        }
                    ]
                }
            }
        }
    ]
}
```

#### [Azure CLI](#tab/azure-cli/)

You can configure the **Azure DevOps organization** value by using the `organizations` list in the `organization-profile` parameter.

In the following example, a pool is configured for all projects in a single organization, with a parallelism of 4. For an example that shows how to configure multiple organizations, see [Use pool in multiple organizations](./configure-security.md#use-pool-in-multiple-organizations).

```azurecli
az mdp pool create \
   --organization-profile organization-profile.json
   # other parameters omitted for space
```

The following example shows the `organizations` list in the **organization-profile.json** file.

```json
{
  "AzureDevOps": {
    "organizations": [
      {
        "url": "https://dev.azure.com/fabrikam-tailspin",
        "projects": [],
        "parallelism": 4
      }
    ],
    "permissionProfile": {...}
  }
}
```

#### [Bicep](#tab/bicep/)

You can configure the **Azure DevOps organization** value by using the `organizations` list in the `organizationProfile` section.

In the following example, a pool is configured for all projects in a single organization, with a parallelism of 4. 

For an example that shows how to configure multiple organizations, see [Use pool in multiple organizations](./configure-security.md#use-pool-in-multiple-organizations).

```bicep
resource managedDevOpsPools 'Microsoft.DevOpsInfrastructure/pools@2025-09-20' = {
  name: 'fabrikam-managed-pool'
  location: 'eastus'
  properties: {
    ...
    organizationProfile: {
      organizations: [
        {
          url: 'https://dev.azure.com/fabrikam-tailspin'
          projects: []
          parallelism: 4
        }
      ]
    }
  }
}
```

* * *

By default, your pool is available to all projects in your specified organizations. To limit your pool to specific projects, see [Security settings: Configure organization access](configure-security.md#configure-organization-access).

## Maximum agents

Specify the maximum number of agents that can be provisioned at the same time in your pool. For example, if you specify a **Maximum agents** value of **2**, you can run a maximum of two agents at the same time. If more than two jobs are queued, only two agents run jobs, while the other jobs wait.

You can view the current status and count of the provisioned agents in your pool by using the [Agents](./view-agents.md) pane. All of the agents in the **Agents** view (except agents with a **Returned** status) run on a virtual machine resource, and count toward the **Maximum agents** count.

#### [Azure portal](#tab/azure-portal/)

You can configure the **Maximum agents** value in **Pool** settings for an existing pool, and on the **Basics** tab when you create a pool.

:::image type="content" source="./media/pool-settings/maximum-agents.png" alt-text="Screenshot that shows the Maximum agents setting.":::

#### [ARM template](#tab/arm/)

You can configure the **Maximum agents** value by using the `maximumConcurrency` property.

In the following example, the **Maximum agents** value is `4`.

```json
{
    "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
    "contentVersion": "1.0.0.0",
    "resources": [
        {
            "name": "fabrikam-managed-pool",
            "type": "microsoft.devopsinfrastructure/pools",
            "apiVersion": "2025-09-20",
            "location": "eastus",
            "properties": {
                ...
                "maximumConcurrency": 4
            }
        }
    ]
}
```

#### [Azure CLI](#tab/azure-cli/)

You can configure the **Maximum agents** value by using the `maximum-concurrency` parameter when you [create](/cli/azure/mdp/pool#az-mdp-pool-create) or [update](/cli/azure/mdp/pool#az-mdp-pool-update) a pool.

In the following example, the **Maximum agents** value is `4`.

```azurecli
az mdp pool create \
   --maximum-concurrency 4
   # other parameters omitted for space
```

#### [Bicep](#tab/bicep/)

You can configure the **Maximum agents** value by using the `maximumConcurrency` property.

In the following example, the **Maximum agents** value is `4`.

```bicep
resource managedDevOpsPools 'Microsoft.DevOpsInfrastructure/pools@2025-09-20' = {
  name: 'fabrikam-managed-pool'
  location: 'eastus'
  properties: {
    ...
    maximumConcurrency: 4
  }
}

```

* * *

> [!NOTE]
> The **Maximum agents** value configures the maximum number of agents that can be provisioned at the same time, but your organization's self-hosted parallel jobs count specifies the number of jobs that can run concurrently. Ensure that you have enough self-hosted parallel jobs available in your organization to enable your agents to run jobs. For more information, see [Azure DevOps Services parallel job pricing](./pricing.md#azure-devops-services-parallel-job-pricing).

## Agent size

The **Agent size** setting specifies the [Azure virtual machine size](/azure/virtual-machines/sizes) to use to host your Managed DevOps Pools agents. Managed DevOps Pools supports up to five agent sizes per pool by using [Instance mix](#instance-mix).

#### [Azure portal](#tab/azure-portal/)

:::image type="content" source="./media/pool-settings/agent-size.png" alt-text="Screenshot that shows the Agent size setting.":::

To view and select an Azure virtual machine size that's available in your Azure region, select **Select up to 5 SKU sizes**. Agent sizes (SKUs) with available Managed DevOps Pools quotas are marked **Available**. You can request more quota for SKUs that are marked **Not Available**. After a quota request for a **Not Available** SKU is approved, it's marked **Available**. Learn more about [Managed DevOps Pools quotas](./prerequisites.md#view-your-quotas).

To reorder the agent sizes, drag and drop them using the handle in the desired order. The order determines the priority for provisioning agents, with the topmost size having the highest priority.

:::image type="content" source="./media/pool-settings/multiple-agent-sizes.png" alt-text="Screenshot that shows multiple agents in the Agent size setting.":::

#### [ARM template](#tab/arm/)

You can configure a single agent size by using the `sku` property in the `fabricProfile` section. In the following example, a `Standard_D2ads_v5` VM size is specified.

```json
{
    "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
    "contentVersion": "1.0.0.0",
    "resources": [
        {
            "name": "fabrikam-managed-pool",
            "type": "microsoft.devopsinfrastructure/pools",
            "apiVersion": "2025-09-20",
            "location": "eastus",
            "properties": {
                ...
                "fabricProfile": {
                    "sku": {
                        "name": "Standard_D2ads_v5"
                    }
                }
            }
        }
    ]
}
```

To use [Instance mix](#instance-mix), specify `Mix` as the `sku.name` value, and provide a list of VM sizes in `vmSizes`. The order of the VM sizes in the list determines the priority for provisioning agents.

```json
{
  "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
  "contentVersion": "1.0.0.0",
  "resources": [
    {
      "name": "fabrikam-managed-pool",
      "type": "microsoft.devopsinfrastructure/pools",
      "apiVersion": "2025-09-20",
      "location": "eastus",
      "properties": {
        ...
        "fabricProfile": {
          "sku": {
            "name": "Mix",
            "vmSizes": [
              {
                "name": "Standard_D2ads_v5"
              },
              {
                "name": "Standard_D2ds_v5"
              }
            ]
          }
        }
      }
    }
  ]
}
```

> [!NOTE]
> Instance mix is available in API version `2026-06-02` or later.

#### [Azure CLI](#tab/azure-cli/)

You can configure agent size by using the `sku` property in the `fabricProfile` section when you [create](/cli/azure/mdp/pool#az-mdp-pool-create) or [update](/cli/azure/mdp/pool#az-mdp-pool-update) a pool. In the following example, a `Standard_D2ads_v5` VM size is specified.

```azurecli
az mdp pool create \
   --fabric-profile fabric-profile.json
   # other parameters omitted for space
```

The following example shows the `sku` section of the `fabric-profile.json` file.

```json
{
  "vmss": {
    "sku": {
      "name": "Standard_D2ads_v5"
    },
    "images": [...],
    "osProfile": {...},
    "storageProfile": {...}
  }
}
```

To configure instance mix for an existing pool, call [az resource update](/cli/azure/resource#az-resource-update), specify API version `2026-06-02` or later, set `sku.name` to `Mix`, and provide the VM sizes in `sku.vmSizes`. The order of the VM sizes determines the priority for provisioning agents.

```azurecli
az resource update \
  --ids "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevOpsInfrastructure/pools/{poolName}" \
  --api-version "2026-06-02" \
  --set properties.fabricProfile.sku='{"name":"Mix","vmSizes":[{"name":"Standard_D2ads_v5"},{"name":"Standard_D2ds_v5"}]}'
```

> [!NOTE]
> Instance mix is available in API version `2026-06-02` or later.

#### [Bicep](#tab/bicep/)

You can configure a single agent size by using the `sku` property in the `fabricProfile` section. In the following example, a `Standard_D2ads_v5` VM size is specified.

```bicep
resource managedDevOpsPools 'Microsoft.DevOpsInfrastructure/pools@2025-09-20' = {
  name: 'fabrikam-managed-pool'
  location: 'eastus'
  properties: {
    fabricProfile: {
      ...
      sku: {
        name: 'Standard_D2ads_v5'
      }
    }
  }
}
```

To use [Instance mix](#instance-mix), specify `Mix` as the `sku.name` value, and provide a list of VM sizes in `vmSizes`. The order of the VM sizes in the list determines the priority for provisioning agents.

```bicep
resource managedDevOpsPools 'Microsoft.DevOpsInfrastructure/pools@2025-09-20' = {
  name: 'fabrikam-managed-pool'
  location: 'eastus'
  properties: {
    fabricProfile: {
      ...
      sku: {
        name: 'Mix'
        vmSizes: [
          {
            name: 'Standard_D2ads_v5'
          }
          {
            name: 'Standard_D2ds_v5'
          }
        ]
      }
    }
  }
}
```

> [!NOTE]
> Instance mix is available in API version `2026-06-02` or later.

* * *

### Instance mix

Managed DevOps Pools supports up to five agent sizes per pool. This feature uses [Virtual Machine Scale Set instance mix](/azure/virtual-machine-scale-sets/instance-mix-overview) capabilities.

To use Managed DevOps Pools instance mix, configure more than one agent size for your pool. When you specify more than one agent size, Managed DevOps Pools first attempts to provision an agent with the first size in the pool configuration. If that size is unavailable, it tries the next size in the list. This allocation strategy maps to the [Prioritized](/azure/virtual-machine-scale-sets/instance-mix-overview#allocation-strategies) instance mix allocation strategy to determine which VM size to provision first, with the agent sizes in your pool ranked in the order in which they are displayed in **Pool settings**, which is the same as the order they are listed in the pool's configuration.

When you configure multiple agent sizes for your pool, keep the following recommendations and requirements in mind.

- **Recommendations**
  - To ensure balanced load distribution, use VM sizes with similar vCPU and memory.
  - For consistent performance, use VM sizes of similar type (for example, both D-series).
- **Requirements**
  - You must have sufficient quota for each VM size in the target subscription and region.
  - Up to five VM sizes can be specified.
  - Supported VM families: [A](/azure/virtual-machines/sizes/general-purpose/a-family), [B](/azure/virtual-machines/sizes/general-purpose/b-family), [D](/azure/virtual-machines/sizes/general-purpose/d-family), [E](/azure/virtual-machines/sizes/memory-optimized/e-family), and [F](/azure/virtual-machines/sizes/compute-optimized/f-family) families only.
  - Each selected VM size must be from a different VM series. For example, you can't use both `Standard_D8ads_v5` and `Standard_D16ads_v5` because they're both from the `Dadsv5` series. But you could use both `Standard_D8ads_v5` and `Standard_D8ds_v5` because they belong to different series (`Dadsv5` and `Ddsv5`) and have consistent architecture, storage, and local-disk characteristics. For more information about VM series and sizes, see [Sizes for virtual machines in Azure: Name structure breakdown](/azure/virtual-machines/sizes/overview#name-structure-breakdown).
  - You can't mix VM architectures (for example, Arm64 and x64) in the same instance mix.
  - VMs with different storage interfaces (SCSI vs NVMe) can't be mixed.
  - You can't mix VM SKUs that use premium storage and non-premium storage in the same instance mix.
  - All VMs must share the same Security Profile and local disk configuration.

> [!NOTE]
> These requirements are a subset of the [Virtual Machine Scale Set instance mix: Limitations and unsupported scenarios](/azure/virtual-machine-scale-sets/instance-mix-overview#limitations-and-unsupported-scenarios), with the exception of the **Each selected VM size must be from a different VM series** requirement, which is specific to Managed DevOps Pools.

Use the [VM size name structure](/azure/virtual-machines/sizes/overview#name-structure-breakdown) to identify potentially compatible sizes. Start with sizes from supported families that belong to different VM series, and prefer sizes with the same vCPU count and feature letters as your primary size. In particular, check the processor indicator (`a`, `p`, or no indicator), local temporary disk indicator (`d`), and Premium Storage indicator (`s`).

The VM size name doesn't identify every compatibility characteristic. Before you add a size, review its VM-series documentation and verify that its architecture, storage interface, Premium Storage capability, security-profile support, and local-disk configuration are compatible with the other sizes in the pool. You can also use Copilot to help generate and evaluate a list of potentially compatible sizes.

#### Use Copilot to identify eligible VM sizes

The following example prompt for Copilot Chat helps you identify VM sizes that might be eligible to pair with your preferred size. Copy and paste the prompt into Copilot Chat, and replace the placeholders with your configuration details.

```copilot-prompt
I want to configure a Managed DevOps Pools instance mix with the following settings:

- Primary VM size: [PRIMARY VM SIZE]
- Azure region: [AZURE REGION]

Identify up to four additional VM sizes that are eligible to pair with my primary VM size. Use only current official Microsoft Learn documentation, starting with these sources and following their links to the relevant VM family and series documentation:

- https://learn.microsoft.com/azure/virtual-machines/sizes/overview
- https://learn.microsoft.com/azure/virtual-machine-scale-sets/instance-mix-overview

Apply all of these requirements:

1. Use only VM sizes from the A, B, D, E, or F families.
2. Select each VM size from a different VM series, including a series different from the primary VM size and from every other suggested size.
3. Use the same architecture, storage interface, premium-storage capability, security-profile support, and local-disk configuration as the primary VM size.
4. Recommend no more than four additional sizes because a Managed DevOps Pools instance mix supports up to five sizes total.

Also apply the instance mix recommendations by preferring VM sizes with similar vCPU and memory specifications and of a similar type to the primary VM size.

Return a comparison table that shows the VM size, family, series, vCPUs, memory, architecture, storage interface, premium-storage capability, local-disk configuration, and security-profile support. Explain why each suggested size is eligible and rank the suggestions from best to worst match. Cite an official Microsoft Learn source for every technical claim. Don't assume that a size is available or that I have sufficient quota in my region. Clearly identify the regional availability and quota checks that I must perform separately. If you can't verify a requirement for a VM size, exclude that size.
```

*Copilot is powered by AI, so surprises and mistakes are possible. Verify each suggested VM size in **Pool settings** and confirm that you have sufficient quota before you update the pool. For more information, see [Copilot general use FAQs](https://aka.ms/copilot-general-use-faqs).*

### Common quota and capacity issues

If your subscription doesn't have the capacity to configure your pool with the Azure VM SKU and maximum agents count that you specify, you receive an error message like this:

`Cores needed to complete this request is 8, which exceeds the current limit of 0 for SKU family standardDDSv4Family in region eastus. Please choose a different region if possible, or request additional quota at https://portal.azure.com/#view/Microsoft_Azure_Support/NewSupportRequestV3Blade/issueType/quota/subscriptionId/subscription_id_placeholder/topicId/3eadc5d3-b59a-3658-d8c6-9c729ba35b97`

To resolve the issue, see [Review Managed DevOps Pools quotas](./prerequisites.md#review-managed-devops-pools-quotas).

Not all SKUs are supported for all Azure regions. If you receive an error like `SKU family <sku-family> is not available in location <region>`, ensure that your SKU size is supported for your region. For more information, see [Sizes for virtual machines in Azure](/azure/virtual-machines/sizes) and [Products available by region](https://azure.microsoft.com/explore/global-infrastructure/products-by-region/).

> [!IMPORTANT]
> [!INCLUDE [disk-controller-error](./includes/disk-controller-error.md)]

## OS disk type

Managed DevOps Pools provides the following disk types for the OS disk:

* Standard
* Standard SSD
* Premium SSD

The default OS disk type is **Standard**. If your workload's throughput exceeds the level of the standard tier, you can potentially gain a performance improvement in your workload by upgrading to a more performant disk type. For more information on disk types and performance, see [Azure managed disk types](/azure/virtual-machines/disks-types).

#### [Azure portal](#tab/azure-portal/)

You can configure **OS disk type** in **Pool** settings for an existing pool. You can configure **OS disk type** on the **Basics** tab when you create a pool.

:::image type="content" source="./media/pool-settings/os-disk-type.png" alt-text="Screenshot that shows the OS disk type setting.":::

#### [ARM template](#tab/arm/)

You can configure **OS disk type** by using the `osDiskStorageAccountType` property in the `storageProfile` section. Select **Standard**, **StandardSSD**, or **Premium**.

In the following example, a **Standard** OS disk type is specified:

```json
{
    "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
    "contentVersion": "1.0.0.0",
    "resources": [
        {
            "name": "fabrikam-managed-pool",
            "type": "microsoft.devopsinfrastructure/pools",
            "apiVersion": "2025-09-20",
            "location": "eastus",
            "properties": {
                ...
                "storageProfile": {
                    "osDiskStorageAccountType": "Standard"
                }
            }
        }
    ]
}
```

#### [Azure CLI](#tab/azure-cli/)

You can configure **OS disk type** by using the `osDiskStorageAccountType` property in the `storageProfile` section in the `fabric-profile` parameter.

Select **Standard**, **StandardSSD**, or **Premium**. In the following example, a **Standard** OS disk type is specified.

```azurecli
az mdp pool create \
   --fabric-profile fabric-profile.json
   # other parameters omitted for space
```

The following example shows the `storageProfile` section of the `fabric-profile.json` file.

```json
{
  "vmss": {
    "sku": {...},
    "images": [...],
    "osProfile": {...},
    "storageProfile": {
      "osDiskStorageAccountType": "Standard",
      "dataDisks": []
    }
  }
}
```

#### [Bicep](#tab/bicep/)

You can configure **OS disk type** by using the `osDiskStorageAccountType` property in the `storageProfile` section.

Select **Standard**, **StandardSSD**, or **Premium**. In the following example, a **Standard** OS disk type is specified.

```bicep
resource managedDevOpsPools 'Microsoft.DevOpsInfrastructure/pools@2025-09-20' = {
  name: 'fabrikam-managed-pool'
  location: 'eastus'
  properties: {
    fabricProfile: {
      ...
      storageProfile: {
        osDiskStorageAccountType: 'Standard'
      }
    }
  }
}
```

* * *

### NVMe temp disk path

Managed DevOps Pools automatically enables the [NVM Express (NVMe)](/azure/virtual-machines/nvme-overview) protocol when communicating with your pool image's temp disk if the following conditions are met:

- Your VM image is a [Generation 2](/azure/virtual-machines/generation-2) image.
- Your VM size has a temp disk and supports NVMe. For more information on supported VM sizes, see [General FAQ for NVMe: Which VM generations support NVMe disks?](/azure/virtual-machines/enable-nvme-faqs#which-vm-generations-support-nvme-disks-)
- Your operating system supports NVMe. Ephemeral OS disks also consume local NVMe storage. On VM sizes with limited NVMe capacity, the available NVMe disk may already be allocated to the ephemeral OS disk. For a list of supported operating systems, see [Supported OS images for remote NVMe](/azure/virtual-machines/enable-nvme-interface).

Managed DevOps Pools uses the following paths for NVMe temp disks:

- Windows images: `N:`
- Linux images: `/mnt/azure_nvme_temp`

> [!NOTE]
> Managed DevOps Pools is adding support for specifying a different NVMe temp disk path in a future update.

## Images

Managed DevOps Pools provides you with several VM image options to use to run pipelines in your pool. You can create your pool by using selected marketplace VM images, your own custom images in an Azure Compute Gallery instance, or the same Windows and Linux images that are used by Azure Pipelines Microsoft-hosted agents.

[!INCLUDE [image-deprecation](./includes/image-deprecation.md)]

:::image type="content" source="./media/configure-images/configure-pool-image.png" alt-text="Screenshot that shows how to configure an image.":::

You can configure your pool to use a single image or multiple images. You can also use aliases to configure your pipelines to use a specific image. For more information, see [Configure Managed DevOps Pools images](./configure-images.md).

> [!IMPORTANT]
> If you have multiple images in your pool, and you don't use [demands in your pipelines to designate an image](./configure-images.md#use-multiple-images-per-pool-with-aliases), the pipelines run by using the first listed image in your pool. You can change the order of the images in your pool in the following ways:
>
>* Use [templates](./configure-images.md?tabs=arm#choose-your-pools-image): Change the order of the images in the `images` list in the `fabricProfile` section.
>* Use dragging: Order the images in the images list in the Azure portal.

## Related content

* [Configure images](./configure-images.md)
