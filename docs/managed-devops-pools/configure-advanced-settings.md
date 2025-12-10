---
title: Configure advanced settings
description: Learn how to configure advanced settings in Managed DevOps Pools.
ms.date: 11/18/2025
ms.custom: sfi-image-nochange
ms.topic: how-to
---

# Configure advanced settings

This article describes how to configure the advanced settings of your Managed DevOps Pools instance.

## Overview

To view and configure advanced settings for your pool, go to your pool in the Azure portal, and go to **Settings** > **Advanced**.

:::image type="content" source="media/advanced-settings/advanced-settings-menu.png" alt-text="Screenshot that shows the Advanced settings menu.":::

## Work folder

The default work folder for Managed DevOps Pools agents is typically on drive `D` for Windows or in `/mnt` for Linux, and your pipeline can reference it by using the `Agent.WorkFolder` [predefined variable](/azure/devops/pipelines/build/variables). You can override this location to change both the drive and directory name used when the agent starts by configuring the **Work folder** setting.

#### [Azure portal](#tab/azure-portal/)

You can configure the **Work folder** setting on the Advanced tab when creating a new pool, and by going to **Settings** > **Advanced** for an existing pool.

Specify a folder to use for your agent work folder in the **Work folder** setting and choose **Apply** to save your changes. Leave the setting blank to use the default work folder.

:::image type="content" source="media/advanced-settings/work-folder.png" alt-text="Screenshot that shows the Work folder advanced pool setting.":::

#### [ARM template](#tab/arm/)

The `workfolder` property in the `runtimeConfiguration` section specifies the **Work folder** setting.

> [!NOTE]
> The `runtimeConfiguration` section and `workFolder` property is available starting with API version `2025-09-20`.

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

The `workfolder` property in the `runtimeConfiguration` section specifies the **Work folder** setting.

To configure `workFolder` using Bicep, add a `workFolder` proeprty in the [runtimeConfiguration](/azure/templates/microsoft.devopsinfrastructure/pools?pivots=deployment-language-bicep#runtimeconfiguration) section. In the following example, agents in the pool are configured to use `D:\MyWorkFolder`.

To use the default agent work folder, omit the `runtimeConfiguration` section or specify an empty value for `workFolder` when you create or update a pool.

> [!NOTE]
> The `runtimeConfiguration` section and `workFolder` property is available starting with API version `2025-09-20`.

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

