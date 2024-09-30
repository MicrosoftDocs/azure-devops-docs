---
title: Configure storage
description: Learn how to add an empty data disk to your Managed DevOps Pools agents.
ms.date: 08/22/2024
---

# Configure storage

If you want more disk space for your agents, Managed DevOps Pools supports attaching an empty data disk to the agents in your Managed DevOps Pool. Attaching a data disk allows you to get more storage space without incurring the potentially greater cost of moving your VM size to a more expensive size that has more built-in storage.

## Attach an empty data disk

#### [Azure portal](#tab/azure-portal/)

Configure storage settings when creating your pool on the **Storage** tab. The default setting is no empty data disk.

:::image type="content" source="media/configure-storage/empty-data-disk-pool-creation.png" alt-text="Screenshot of configuring a data disk during pool creation.":::

If you are configuring additional storage for an existing pool, go to the pool in the Azure portal as described in the following steps.

1. Sign in to the [Azure portal](https://portal.azure.com/).
1. Search for **Managed DevOps Pools** and select it from the available options.
1. Choose your Managed DevOps Pool from the list.
1. Go to **Settings** > **Storage** to configure the empty data disk settings for your pool.

:::image type="content" source="media/configure-storage/empty-data-disk-menu.png" alt-text="Screenshot of empty data disk menu.":::

Configure the following properties for your disk, and choose **Apply** (or **Next** if you are creating a pool) to save your changes. You can add a single empty data disk configuration for your Managed DevOps Pool, and all agent instances will have an empty data disk attached matching the configuration you specify.

Choose **Delete** to delete the data disk configuration for an existing pool.

#### [ARM template](#tab/arm/)

Additional disk storage is configured in an ARM template in `dataDisks` section under `storageProfile`. In the following example, a 10 GB Standard_LRS disk is configured with  the drive letter `Q` and no caching.

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
    ]
}
```

To delete the data disk configuration for an existing pool, specify an empty list for `dataDisks`: `"dataDisks": []`.

* * *

Configure the following properties for your attached data disk.

| Property | Description |
|----------|-------------|
| Size (GiB) | Specify the size of your data disk. The maximum size depends on the storage type. For more information, see [Disk type comparison](/azure/virtual-machines/disks-types#disk-type-comparison) .|
| Caching Type | Specify the caching type for your disk. Choose from: **Default**, **None**, **ReadOnly**, **ReadWrite**. The default for data disks that support caching is **ReadOnly**. For more information, see [Virtual machine and disk performance](/azure/virtual-machines/disks-performance). |
| Storage Type | Choose from the following storage types: **Standard_LRS** (default), **Premium_LRS**, **StandardSSD_LRS**, **Premium_ZRS**, **StandardSSD_ZRS**. For more information about these types, see [SKU Types](/rest/api/storagerp/srp_sku_types) and [Azure managed disk types](/azure/virtual-machines/disks-types). |
| Drive Letter | If you have any Windows agent images in your pool, choose a drive letter for your disk. If you don't specify a drive letter, **F** is used for VM sizes with a temporary disk; otherwise **E** is used. The drive letter must be a single letter except **A**, **C**, **D**, or **E**. If you are using a VM size without a temporary disk and want **E** as your drive letter, leave **Drive Letter** empty to get the default value of **E**. |

## Use the data disk for your agent working directory

To configure your agents to use a working directory on the data disk, specify a folder from the data disk in a `WorkFolder` demand.

#### [Windows](#tab/windows/)

In the following example, the agent working directory on a Windows agent is configured to use a folder on an attached data disk that is assigned the drive letter **F**.

```yml
pool: 
  name: fabrikam-managed-pool # Name of Managed DevOps Pool
  demands:
  - WorkFolder -equals f:\custom-work-folder # Windows agent example
```

#### [Linux](#tab/linux/)

For Linux agents, the data disk is mounted as **/mnt/storage/sdc**. The following example configures the agent working directory to be a folder named **custom-work-folder** on the data disk.

```yml
pool: 
  name: fabrikam-managed-pool # Name of Managed DevOps Pool
  demands:
  - WorkFolder -equals /mnt/storage/sdc/custom-work-folder
```

* * *

For more information about configuring the agent work directory, see [Demands - WorkFolder](demands.md#workfolder).

## See also

* [Configure pool settings](./configure-pool-settings.md)

