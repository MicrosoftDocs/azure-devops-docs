---
title: Configure advanced settings
description: Learn how to configure advanced settings in Managed DevOps Pools.
ms.date: 12/14/2025
ms.custom: sfi-image-nochange
ms.topic: how-to
---

# Configure advanced settings

This article describes how to configure the advanced settings of your Managed DevOps Pools instance.

## Overview

To view and configure advanced settings for your pool, go to your pool in the Azure portal, and go to **Settings** > **Advanced**.

:::image type="content" source="media/advanced-settings/advanced-settings-menu.png" alt-text="Screenshot that shows the Advanced settings menu.":::

## Work folder

The default work folder for Managed DevOps Pools agents is typically `C:\a\_work` for Windows agents or `/mnt/vss/_work` for Linux agents, and your pipeline can reference the working folder by using the `Agent.WorkFolder` [predefined variable](/azure/devops/pipelines/build/variables). Configure the **Work folder** setting to override the default work folder for every agent image in your pool.

A common scenario for specifying a custom **Work folder** setting is when you have an [attached data disk](configure-storage.md) and want your agent work folder to be on that disk. For example, if you have a Windows agent image with an attached data disk assigned to the letter `F`, you can set the **Work folder** to `F:\custom-work-folder` so that all agents using that image use the specified folder on the data disk as their work folder. For Linux agents, the data disk is mounted as `/mnt/storage/sdc`, so to use a folder named `aget-work` on the attached data disk, use `/mnt/storage/sdc/custom-work-folder`.

> [!IMPORTANT]
> The **Work folder** setting applies to every agent in your pool. If you have multiple images configured in your pool and you want to configure different work folders for each image, configure a [WorkFolder demand](demands.md#workfolder) in your pipelines for the images where you don't want to use the pool-level **Work folder** setting. The pipeline-level `WorkFolder` demand takes precedence over the **Work folder** pool setting.
>
> Don't specify a Windows style work folder for a Linux agent. If you specify a Windows style work folder for a Linux agent, like `F:\custom-work-folder`, the Linux agent attempts to use an agent working folder similar to `mnt/vss/_workF:\custom-work-folder` which fails.
>
> If you specify a Linux style work folder for a Windows agent, like `/mnt/storage/sdc/custom-work-folder`, the Windows agent uses this folder on the default drive, like `C:\mnt\storage\sdc\custom-work-folder`.

#### [Azure portal](#tab/azure-portal/)

You can configure the **Work folder** setting on the Advanced tab when creating a new pool, and by going to **Settings** > **Advanced** for an existing pool.

Specify a folder to use for your agent work folder in the **Work folder** setting and choose **Apply** to save your changes. Leave the setting blank to use the default work folder.

:::image type="content" source="media/advanced-settings/work-folder.png" alt-text="Screenshot that shows the Work folder advanced pool setting.":::

#### [ARM template](#tab/arm/)

The `workfolder` property in the `runtimeConfiguration` section specifies the **Work folder** setting.

> [!NOTE]
> The `runtimeConfiguration` section and `workFolder` property are available starting with API version `2025-09-20`.

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
                "organizationProfile": {...},
                "agentProfile": {...},
                "fabricProfile": {...},
                "runtimeConfiguration": {
                    "workFolder": "<your custom work folder>"
                }
            }
        }
    ]
}
```

#### [Bicep](#tab/bicep/)

To configure the **Work folder** setting using Bicep, add a `workFolder` property in the [runtimeConfiguration](/azure/templates/microsoft.devopsinfrastructure/pools?pivots=deployment-language-bicep#runtimeconfiguration) section. In the following example, agents in the pool are configured to use `D:\MyWorkFolder`.

To use the default agent work folder, omit the `runtimeConfiguration` section or specify an empty value for `workFolder` when you create or update a pool.

> [!NOTE]
> The `runtimeConfiguration` section and `workFolder` property are available starting with API version `2025-09-20`.

```bicep
resource managedDevOpsPools 'Microsoft.DevOpsInfrastructure/pools@2025-09-20' = {
  name: 'MyManagedDevOpsPool'
  ...
  properties: {
    ...
    "organizationProfile": {...},
    "agentProfile": {...},
    "fabricProfile": {...},
    "runtimeConfiguration": {
        "workFolder": "<your custom work folder>"
    }
  }
}
```

* * *

