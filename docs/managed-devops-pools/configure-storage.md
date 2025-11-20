---
title: Configure storage
description: Learn how to add an empty data disk to your agents in Managed DevOps Pools.
ms.date: 11/18/2025
ms.topic: how-to
---

# Configure storage

Do you want more disk space for your agents? Managed DevOps Pools supports attaching an empty data disk to the agents in your pool. When you attach a data disk, you can get more storage space without incurring the potentially greater cost of moving your virtual machine (VM) size to a more expensive size that has more built-in storage.

## Attach an empty data disk

#### [Azure portal](#tab/azure-portal/)

Configure the storage settings when you create your pool on the **Storage** tab. The default setting is *no empty data disk*.

:::image type="content" source="media/configure-storage/empty-data-disk-pool-creation.png" alt-text="Screenshot that shows how to configure a data disk when you create a pool.":::

To configure more storage for an existing pool, go to the pool in the Azure portal as described in the following steps:

1. Sign in to the [Azure portal](https://portal.azure.com/).
1. Search for **Managed DevOps Pools** and select it from the available options.
1. Select your pool from the list.
1. Go to **Settings** > **Storage** to configure the **Empty data disk** settings for your pool.

:::image type="content" source="media/configure-storage/empty-data-disk-menu.png" alt-text="Screenshot that shows an empty data disk menu.":::

Configure the properties in the following table for your disk, and select **Apply** (or **Next** if you're creating a pool) to save your changes. You can add a single empty data disk configuration for your pool. All agent instances have an empty data disk attached that matches the configuration you specify.

To delete the data disk configuration for an existing pool, select **Delete**.

#### [ARM template](#tab/arm/)

You can configure additional disk storage in an Azure Resource Manager template (ARM template) in the property `dataDisks` section under `storageProfile`. In the following example, a 10-GB `Standard_LRS` disk is configured with the drive letter `Q` and no caching.

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
                  ...
                  "storageProfile": {
                      "osDiskStorageAccountType": "Standard",
                      "dataDisks": [
                          {
                              "diskSizeGiB": 10,
                              "caching": "None",
                              "storageType": "Standard_LRS",
                              "driveLetter": "Q"
                          }
                      ]
                  }
                }
            }
        }
    ]
}
```

To delete the data disk configuration for an existing pool, specify an empty list for `dataDisks`: `"dataDisks": []`.

#### [Azure CLI](#tab/azure-cli/)

You can configure more disk storage by using the `dataDisks` property in the `storageProfile` section in the `fabric-profile` parameter.

```azurecli
az mdp pool create \
   --fabric-profile fabric-profile.json
   # other parameters omitted for space
```

In the following example, a 10-GB `Standard_LRS` disk is configured with  the drive letter `Q` and no caching. The example shows the `storageProfile` section of the **fabric-profile.json** file.

```json
{
  "vmss": {
    "sku": {...},
    "images": [...],
    "osProfile": {...},
    "storageProfile": {
      "osDiskStorageAccountType": "Standard",
      "dataDisks": [
        {
          "diskSizeGiB": 10,
          "caching": "None",
          "storageType": "Standard_LRS",
          "driveLetter": "Q"
        }
      ]
    }
  }
}
```

To delete the data disk configuration for an existing pool, specify an empty list for `dataDisks`: `"dataDisks": []`.

#### [Bicep](#tab/bicep/)

You can configure additional disk storage in a Bicep template in the property `dataDisks` section under `storageProfile`. In the following example, a 10-GB `Standard_LRS` disk is configured with the drive letter `Q` and no caching.

```bicep
resource managedDevOpsPools 'Microsoft.DevOpsInfrastructure/pools@2025-09-20' = {
  name: 'fabrikam-managed-pool'
  location: 'eastus'
  properties: {
    ...
    fabricProfile: {
      ...
      storageProfile: {
        osDiskStorageAccountType: 'Standard'
        dataDisks: [
          {
            diskSizeGiB: 10
            caching: 'None'
            storageAccountType:'Standard_LRS'
            driveLetter: 'Q'
          }
        ]
      }
    }
  }
}
```

To delete the data disk configuration for an existing pool, specify an empty list for `dataDisks`: `dataDisks: []`.

* * *

Configure the following properties for your attached data disk.

| Property | Description |
|----------|-------------|
| Size (GiB) or `diskSizeGiB` | Specify the size of your data disk. The maximum size depends on the storage type. For more information, see [Disk type comparison](/azure/virtual-machines/disks-types#disk-type-comparison).|
| Caching type | Specify the caching type for your disk. Select from **Default**, **None**, **ReadOnly**, or **ReadWrite**. The default for data disks that support caching is **ReadOnly**. For more information, see [Virtual machine and disk performance](/azure/virtual-machines/disks-performance). |
| Storage type | Select from the following storage types: **Standard_LRS** (default), **Premium_LRS**, **StandardSSD_LRS**, **Premium_ZRS**, or **StandardSSD_ZRS**. For more information about these types, see [SKU types](/rest/api/storagerp/srp_sku_types) and [Azure managed disk types](/azure/virtual-machines/disks-types). |
| Drive letter | If you have any Windows agent images in your pool, choose a drive letter for your disk. If you don't specify a drive letter, `F` is used for VM sizes with a temporary disk. Otherwise, `E` is used. The drive letter must be a single letter except `A`, `C`, `D`, or `E`. If you're using a VM size without a temporary disk and want `E` as your drive letter, leave the **Drive Letter** field empty to get the default value of `E`. If you're configuring your storage by using an ARM template or an Azure CLI script, omit the drive letter parameter if you don't want a drive letter. |

## Use the data disk for your agent working directory

To configure your agents to use a working directory on the data disk, specify a folder from the data disk in a `WorkFolder` demand.

#### [Windows](#tab/windows/)

In the following example, the agent working directory on a Windows agent is configured to use a folder on an attached data disk with the drive letter `F`.

```yml
pool:
  name: fabrikam-managed-pool # Name of pool
  demands:
  - WorkFolder -equals f:\custom-work-folder # Windows agent example
```

#### [Linux](#tab/linux/)

For Linux agents, the data disk is mounted as `/mnt/storage/sdc`. The following example configures the agent working directory to be a folder named `custom-work-folder` on the data disk.

```yml
pool:
  name: fabrikam-managed-pool # Name of pool
  demands:
  - WorkFolder -equals /mnt/storage/sdc/custom-work-folder
```

* * *

For more information about how to configure the agent work directory, see [Demands: WorkFolder](demands.md#workfolder).

## Related content

* [Configure pool settings](./configure-pool-settings.md)
* [Allowlist Azure Storage](./configure-networking.md)
