---
title: Configure pool settings
description: Learn how to configure Managed DevOps Pools settings.
ms.date: 10/18/2024
---

# Configure pool settings

> [!IMPORTANT]
> Managed DevOps Pools is currently in PREVIEW.
> See the [Supplemental Terms of Use for Microsoft Azure Previews](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) for legal terms that apply to Azure features that are in beta, preview, or otherwise not yet released into general availability.

This article describes how to configure the basic settings of your Managed DevOps Pool.

Go to **Overview** to view an overview of pool settings, [move Azure resources to a new resource group or subscription](/azure/azure-resource-manager/management/move-resource-group-and-subscription), or configure [tags](/azure/azure-resource-manager/management/tag-resources). Managed DevOps Pools passes up to 20 tags to the VM, and the rest are ignored.

:::image type="content" source="media/pool-settings/essentials.png" alt-text="Screenshot of pool overview essentials." lightbox="media/pool-settings/essentials-expanded.png":::

To configure your pool, go to **Settings** > **Pool**.

:::image type="content" source="media/pool-settings/pool-settings-menu.png" alt-text="Screenshot of Pool settings menu.":::

Use the following settings to configure your Managed DevOps Pool.

* [Dev Center project](#dev-center-project)
* [Azure DevOps organization](#azure-devops-organization)
* [Images](#images)
* [Maximum agents](#maximum-agents)
* [Agent size](#agent-size)
* [OS disk type](#os-disk-type)

## Dev Center project

#### [Azure portal](#tab/azure-portal/)

Choose the Dev Center project for your Managed DevOps Pool. During pool creation, you can create a Dev Center and Dev Center project if you don't have one.

:::image type="content" source="media/pool-settings/dev-center.png" alt-text="Screenshot of Dev Center settings.":::

#### [ARM template](#tab/arm/)

The dev center project is specified by the `devCenterProjectResourceId` property.

```json
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

You can retrieve the `devCenterProjectResourceId` for your Dev Center project in the Azure portal by using the JSON View from the overview page of your Dev Center project, or you can retrieve it using the Azure CLI to query the project for its `id` property. In the following example, the `devCenterProjectResourceId` is retrieved from a Dev Center project named `fabrikam-dev-center-project` in the `fabrikam-managed-devops-pools` resource group.

```azurecli
 az devcenter admin project show --name fabrikam-dev-center-project --resource-group fabrikam-managed-devops-pools --query "id"
```

#### [Azure CLI](#tab/azure-cli/)

The dev center project is specified by the `devcenter-project-id` parameter when [creating](/cli/azure/mdp/pool#az-mdp-pool-create) or [updating](/cli/azure/mdp/pool#az-mdp-pool-update) a pool.

```azurecli
az mdp pool create \
   --devcenter-project-id /subscriptions/aaaa0a0a-bb1b-cc2c-dd3d-eeeeee4e4e4e/resourceGroups/resourceGroupName/providers/Microsoft.DevCenter/projects/devCenterProjectName
   # other parameters omitted for space
```

You can retrieve the `devcenter-project-id` for your dev center project in the Azure portal by using the JSON View from the overview page of your dev center project, or you can retrieve it using the Azure CLI to query the project for its `id` property. In the following example, the `devcenter-project-id` is retrieved from a dev center project named `fabrikam-dev-center-project` in the `fabrikam-managed-devops-pools` resource group.

```azurecli
 az devcenter admin project show --name fabrikam-dev-center-project --resource-group fabrikam-managed-devops-pools --query "id"
```

* * *

## Azure DevOps organization

#### [Azure portal](#tab/azure-portal/)

If your Managed DevOps Pool is configured for a single Azure DevOps organization, you can specify the organization in pool settings.

:::image type="content" source="media/pool-settings/single-organization.png" alt-text="Screenshot of configuring a single organization.":::

If your pool is configured for multiple organizations, the **Azure DevOps organization** setting is not present in pool settings. To configure your pool for use in multiple organizations, go to **Settings** > **Security**, and configure [Use pool in multiple organizations](./configure-security.md#use-pool-in-multiple-organizations).

#### [ARM template](#tab/arm/)

**Azure DevOps organization** is configured using the `organizations` list in the `organizationProfile` section. In the following example, a Managed DevOps Pool is configured for all projects in a single organization, with a parallelism of 4. For an example of configuring multiple organizations, see [Use pool in multiple organizations](./configure-security.md#use-pool-in-multiple-organizations).

```json
{
    "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
    "contentVersion": "1.0.0.0",
    "resources": [
        {
            "name": "fabrikam-managed-pool",
            "type": "microsoft.devopsinfrastructure/pools",
            "apiVersion": "2024-04-04-preview",
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

**Azure DevOps organization** is configured using the `organizations` list in the `organization-profile` parameter. In the following example, a Managed DevOps Pool is configured for all projects in a single organization, with a parallelism of 4. For an example of configuring multiple organizations, see [Use pool in multiple organizations](./configure-security.md#use-pool-in-multiple-organizations).

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

* * *

By default, your Managed DevOps Pool is available to all projects in your specified organizations. To limit your pool to specific projects, see [Security settings - configure organization access](configure-security.md#configure-organization-access).

## Maximum agents

Specify the maximum count of agents that are available for use in your pool. For example, if you specify a **Maximum agents** value of **2**, you can run a maximum of two agents at the same time. If more than two jobs are queued, only two agents at a time will run jobs while the other jobs wait.

#### [Azure portal](#tab/azure-portal/)

**Maximum agents** is configured in **Pool** settings for an existing pool, and on the **Basics** tab when creating a pool.

:::image type="content" source="./media/pool-settings/maximum-agents.png" alt-text="Screenshot of Maximum agents setting.":::

#### [ARM template](#tab/arm/)

**Maximum agents** is configured using the `maximumConcurrency` property. In the following example, **Maximum agents** is set to `4`.

```json
{
    "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
    "contentVersion": "1.0.0.0",
    "resources": [
        {
            "name": "fabrikam-managed-pool",
            "type": "microsoft.devopsinfrastructure/pools",
            "apiVersion": "2024-04-04-preview",
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

**Maximum agents** is configured using the `maximum-concurrency` parameter when [creating](/cli/azure/mdp/pool#az-mdp-pool-create) or [updating](/cli/azure/mdp/pool#az-mdp-pool-update) a pool. In the following example, **Maximum agents** is set to `4`.

```azurecli
az mdp pool create \
   --maximum-concurrency 4
   # other parameters omitted for space
```

* * *

> [!NOTE]
> **Maximum agents** configures the maximum number of agents that can be provisioned at the same time, but your organization's self-hosted parallel jobs count specifies the number of jobs that can run concurrently. Ensure that you have enough self-hosted parallel jobs available in your organization to enable your agents to run jobs. For more information, see [Azure DevOps Services parallel job pricing](./pricing.md#azure-devops-services-parallel-job-pricing).

## Agent size

**Agent size** specifies the [Azure virtual machine size](/azure/virtual-machines/sizes) to use for hosting your Managed DevOps Pools agents.

#### [Azure portal](#tab/azure-portal/)

:::image type="content" source="./media/pool-settings/agent-size.png" alt-text="Screenshot of Agent size setting.":::

Choose **Change size** to view and select an Azure virtual machine size that is available in your Azure region. Agent sizes (SKUs) with available Managed DevOps Pools quotas are marked as **Available**. You can request more quota for **Not Available** SKUs. Once a quota request for a **Not Available** SKU is approved, it will then be listed as **Available**. [Learn more about Managed DevOps Pools quotas](./prerequisites.md#view-your-quotas).

#### [ARM template](#tab/arm/)

Agent size is configured using the `sku` property in the `fabricProfile` section. In the following example, a **Standard_D2ads_v5** VM size is specified.

```json
{
    "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
    "contentVersion": "1.0.0.0",
    "resources": [
        {
            "name": "fabrikam-managed-pool",
            "type": "microsoft.devopsinfrastructure/pools",
            "apiVersion": "2024-04-04-preview",
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

#### [Azure CLI](#tab/azure-cli/)

Agent size is configured using the `sku` property in the `fabricProfile` section when [creating](/cli/azure/mdp/pool#az-mdp-pool-create) or [updating](/cli/azure/mdp/pool#az-mdp-pool-update) a pool. In the following example, a **Standard_D2ads_v5** VM size is specified.

```azurecli
az mdp pool create \
   --fabric-profile fabric-profile.json
   # other parameters omitted for space
```

The following example shows the `sku` section of the **fabric-profile.json** file.

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

* * *

If your subscription doesn't have the capacity to configure your pool with desired Azure VM SKU and maximum agents count, you'll receive an error similar to the following message. `Cores needed to complete this request is 8, which exceeds the current limit of 0 for SKU family standardDDSv4Family in region eastus. Please choose a different region if possible, or request additional quota at https://portal.azure.com/#view/Microsoft_Azure_Support/NewSupportRequestV3Blade/issueType/quota/subscriptionId/subscription_id_placeholder/topicId/3eadc5d3-b59a-3658-d8c6-9c729ba35b97`. To resolve the issue, see [Review Managed DevOps Pools quotas](./prerequisites.md#review-managed-devops-pools-quotas).

Not all SKUs are supported for all Azure regions. If you receive an error like `SKU family <sku-family> is not available in location <region>`, ensure your SKU size is supported for your region. For more information, see [Sizes for virtual machines in Azure](/azure/virtual-machines/sizes) and [Products available by region](https://azure.microsoft.com/explore/global-infrastructure/products-by-region/).

## OS disk type

Managed DevOps Pools provides the following disk types for the OS disk.

* Standard
* Standard SSD
* Premium SSD

The default OS disk type is **Standard**. If your workload's throughput exceeds the level of the standard tier, you can potentially gain a performance improvement in your workload by upgrading to a more performant disk type. For more information on disk types and performance, see [Azure Managed disk types](/azure/virtual-machines/disks-types).

#### [Azure portal](#tab/azure-portal/)

**OS disk type** is configured in **Pool** settings for an existing pool, and on the **Basics** tab when creating a pool.

:::image type="content" source="./media/pool-settings/os-disk-type.png" alt-text="Screenshot of OS disk type setting.":::

#### [ARM template](#tab/arm/)

OS disk type is configured using the `osDiskStorageAccountType` property in the `storageProfile` section. In the following example, a **Standard** OS disk type is specified. Choose **Standard**, **StandardSSD**, or **Premium**.

```json
{
    "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
    "contentVersion": "1.0.0.0",
    "resources": [
        {
            "name": "fabrikam-managed-pool",
            "type": "microsoft.devopsinfrastructure/pools",
            "apiVersion": "2024-04-04-preview",
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

 In the following example, a **Standard** OS disk type is specified. Choose **Standard**, **StandardSSD**, or **Premium**.

OS disk type is configured using the `osDiskStorageAccountType` property in the `storageProfile` section in the `fabric-profile` parameter. In the following example, a **Standard** OS disk type is specified. Choose **Standard**, **StandardSSD**, or **Premium**.

```azurecli
az mdp pool create \
   --fabric-profile fabric-profile.json
   # other parameters omitted for space
```

The following example shows the `storageProfile` section of the **fabric-profile.json** file.

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

* * *

## Images

Managed DevOps Pools provides you with several options for virtual machine images for running pipelines in your pool. You can create your pool using selected Azure Marketplace VM images, use your own custom images in an Azure Compute Gallery, or use the same Windows and Linux images used by Azure Pipelines Microsoft-hosted agents.

:::image type="content" source="./media/configure-images/configure-pool-image.png" alt-text="Screenshot of configure image.":::

You can configure your pool to use a single image or multiple images, and use aliases to configure your pipelines to use a specific image. For more information, see [Configure Managed DevOps Pools images](./configure-images.md).

## See also

* [Configure images](./configure-images.md)
