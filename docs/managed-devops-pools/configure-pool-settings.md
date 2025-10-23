---
title: Configure pool settings
description: Learn how to configure settings in Azure Managed DevOps Pools.
ms.date: 08/27/2025
ms.custom: sfi-image-nochange
---

# Configure pool settings

This article describes how to configure the basic settings of your Azure Managed DevOps Pools instance.

## Overview

To view an overview of pool settings, go to **Overview**.

:::image type="content" source="media/pool-settings/essentials.png" alt-text="Screenshot that shows pool overview essentials." lightbox="media/pool-settings/essentials-expanded.png":::

From the **Overview** page, you can:

* View your resource group and subscription details, and [move Azure resources to a new resource group or subscription](/azure/azure-resource-manager/management/move-resource-group-and-subscription).
* View the location of your pool. To view the supported locations, follow the procedure in [Register the Managed DevOps Pools resource provider in your Azure Subscription](./prerequisites.md#register-the-managed-devops-pools-resource-provider-in-your-azure-subscription).
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

Select the **Dev Center project** for your pool. (If you don't have one, you can create a **Dev Center** and **Dev Center project** when you create your pool.)

:::image type="content" source="media/pool-settings/dev-center.png" alt-text="Screenshot that shows Dev Center settings.":::

#### [ARM template](#tab/arm/)

The `devCenterProjectResourceId` property specifies the **Dev Center project**.

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

You can retrieve the `devCenterProjectResourceId` value for your **Dev Center project** in the Azure portal by using the **JSON View** from the overview page of your Dev Center project. You can also retrieve it by using the Azure CLI to query the project for its `id` property. 

In the following example, the `devCenterProjectResourceId` value is retrieved from a **Dev Center project** named `fabrikam-dev-center-project` in the `fabrikam-managed-devops-pools` resource group.

```azurecli
 az devcenter admin project show --name fabrikam-dev-center-project --resource-group fabrikam-managed-devops-pools --query "id"
```

#### [Azure CLI](#tab/azure-cli/)

The `devcenter-project-id` parameter specifies the **Dev Center project** when you [create](/cli/azure/mdp/pool#az-mdp-pool-create) or [update](/cli/azure/mdp/pool#az-mdp-pool-update) a pool.

```azurecli
az mdp pool create \
   --devcenter-project-id /subscriptions/aaaa0a0a-bb1b-cc2c-dd3d-eeeeee4e4e4e/resourceGroups/resourceGroupName/providers/Microsoft.DevCenter/projects/devCenterProjectName
   # other parameters omitted for space
```

You can retrieve the `devcenter-project-id` for your **Dev Center project** in the Azure portal by using the **JSON View** from the **Overview** page of your **Dev Center project**. You can also retrieve it by using the Azure CLI to query the project for its `id` property. 

In the following example, the `devcenter-project-id` is retrieved from a **Dev Center project** named `fabrikam-dev-center-project` in the `fabrikam-managed-devops-pools` resource group.

```azurecli
 az devcenter admin project show --name fabrikam-dev-center-project --resource-group fabrikam-managed-devops-pools --query "id"
```

#### [Bicep](#tab/bicep/)

The `devCenterProjectResourceId` property specifies the **Dev Center project**.

```bicep
resource managedDevOpsPools 'Microsoft.DevOpsInfrastructure/pools@2025-01-21' = {
  name: 'fabrikam-managed-pool'
  location: 'eastus'
  properties: {
    ...
    devCenterProjectResourceId: '/subscriptions/subscription_id_placeholder/resourceGroups/fabrikam-managed-devops-pools/providers/Microsoft.DevCenter/projects/fabrikam-dev-center-project'
  }
}
```

You can retrieve the `devCenterProjectResourceId` for your **Dev Center project** in the Azure portal by using the **JSON View** from the **Overview** page of your **Dev Center project**. You can also retrieve it by using the Azure CLI to query the project for its `id` property.

In the following example, the `devCenterProjectResourceId` is retrieved from a Dev Center project named `fabrikam-dev-center-project` in the `fabrikam-managed-devops-pools` resource group.

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
            "apiVersion": "2025-01-21",
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
resource managedDevOpsPools 'Microsoft.DevOpsInfrastructure/pools@2025-01-21' = {
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

You can view the current status and count of the provisioned agents in your pool by using the [Agents](./view-agents.md) pane. All of the agents in the **Agents** view (except agents with a **Returned** status) run on a virtual machine resource, and count towards the **Maximum agents** count.

#### [Azure portal](#tab/azure-portal/)

You can configure **Maximum agents** in **Pool** settings for an existing pool, and on the **Basics** tab when you create a pool.

:::image type="content" source="./media/pool-settings/maximum-agents.png" alt-text="Screenshot that shows the Maximum agents setting.":::

#### [ARM template](#tab/arm/)

You can configure **Maximum agents** by using the `maximumConcurrency` property.

In the following example, the **Maximum agents** value is `4`.

```json
{
    "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
    "contentVersion": "1.0.0.0",
    "resources": [
        {
            "name": "fabrikam-managed-pool",
            "type": "microsoft.devopsinfrastructure/pools",
            "apiVersion": "2025-01-21",
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

You can configure **Maximum agents** by using the `maximum-concurrency` parameter when you [create](/cli/azure/mdp/pool#az-mdp-pool-create) or [update](/cli/azure/mdp/pool#az-mdp-pool-update) a pool.

In the following example, the **Maximum agents** value is `4`.

```azurecli
az mdp pool create \
   --maximum-concurrency 4
   # other parameters omitted for space
```

#### [Bicep](#tab/bicep/)

You can configure **Maximum agents** by using the `maximumConcurrency` property.

In the following example, the **Maximum agents** value is `4`.

```bicep
resource managedDevOpsPools 'Microsoft.DevOpsInfrastructure/pools@2025-01-21' = {
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

The **Agent size** setting specifies the [Azure virtual machine size](/azure/virtual-machines/sizes) to use to host your Managed DevOps Pools agents.

#### [Azure portal](#tab/azure-portal/)

:::image type="content" source="./media/pool-settings/agent-size.png" alt-text="Screenshot that shows the Agent size setting.":::

To view and select an Azure virtual machine size that's available in your Azure region, select **Change size**. Agent sizes (SKUs) with available Managed DevOps Pools quotas are marked as **Available**. You can request more quota for SKUs that are marked **Not Available**. After a quota request for a **Not Available** SKU is approved, it's listed as **Available**. Learn more about [Managed DevOps Pools quotas](./prerequisites.md#view-your-quotas).

#### [ARM template](#tab/arm/)

You can configure agent size by using the `sku` property in the `fabricProfile` section. In the following example, a `Standard_D2ads_v5` VM size is specified.

```json
{
    "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
    "contentVersion": "1.0.0.0",
    "resources": [
        {
            "name": "fabrikam-managed-pool",
            "type": "microsoft.devopsinfrastructure/pools",
            "apiVersion": "2025-01-21",
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

#### [Bicep](#tab/bicep/)

You can configure the agent size by using the `sku` property in the `fabricProfile` section. In the following example, a `Standard_D2ads_v5` VM size is specified.

```bicep
resource managedDevOpsPools 'Microsoft.DevOpsInfrastructure/pools@2025-01-21' = {
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

* * *

If your subscription doesn't have the capacity to configure your pool with the Azure VM SKU and maximum agents count that you specify, you receive an error message like this:

"Cores needed to complete this request is 8, which exceeds the current limit of 0 for SKU family standardDDSv4Family in region eastus. Choose a different region if possible, or request more quota at https://portal.azure.com/#view/Microsoft_Azure_Support/NewSupportRequestV3Blade/issueType/quota/subscriptionId/subscription_id_placeholder/topicId/3eadc5d3-b59a-3658-d8c6-9c729ba35b97."

To resolve the issue, see [Review Managed DevOps Pools quotas](./prerequisites.md#review-managed-devops-pools-quotas).

Not all SKUs are supported for all Azure regions. If you receive an error like `SKU family <sku-family> is not available in location <region>`, ensure your SKU size is supported for your region. For more information, see [Sizes for virtual machines in Azure](/azure/virtual-machines/sizes) and [Products available by region](https://azure.microsoft.com/explore/global-infrastructure/products-by-region/).

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

You can configure the **OS disk type** by using the `osDiskStorageAccountType` property in the `storageProfile` section. Select **Standard**, **StandardSSD**, or **Premium**.

In the following example, a **Standard** OS disk type is specified:

```json
{
    "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
    "contentVersion": "1.0.0.0",
    "resources": [
        {
            "name": "fabrikam-managed-pool",
            "type": "microsoft.devopsinfrastructure/pools",
            "apiVersion": "2025-01-21",
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

You can configure the **OS disk type** by using the `osDiskStorageAccountType` property in the `storageProfile` section.

Select **Standard**, **StandardSSD**, or **Premium**. In the following example, a **Standard** OS disk type is specified.

```bicep
resource managedDevOpsPools 'Microsoft.DevOpsInfrastructure/pools@2025-01-21' = {
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

## Images

Managed DevOps Pools provides you with several VM image options to use to run pipelines in your pool. You can create your pool by using selected Azure Marketplace VM images, your own custom images in an Azure Compute Gallery instance, or the same Windows and Linux images that are used by Azure Pipelines Microsoft-hosted agents.

> [!IMPORTANT]
> [!INCLUDE [image-deprecation](./includes/image-deprecation.md)]

:::image type="content" source="./media/configure-images/configure-pool-image.png" alt-text="Screenshot that shows how to configure an image.":::

You can configure your pool to use a single image or multiple images. You can also use aliases to configure your pipelines to use a specific image. For more information, see [Configure Managed DevOps Pools images](./configure-images.md).

> [!IMPORTANT]
> If you have multiple images in your pool, and don't use [demands in your pipelines to designate an image](./configure-images.md#use-multiple-images-per-pool-with-aliases), the pipelines run by using the first listed image in your pool. You can change the order of the images in your pool in the following ways:
>
>* Using [templates](./configure-images.md?tabs=arm#choose-your-pools-image): Change the order of the images in the `images` list in the `fabricProfile` section.
>* Using drag and drop: Order the images in the images list in the Azure portal.

## See also

* [Configure images](./configure-images.md)
