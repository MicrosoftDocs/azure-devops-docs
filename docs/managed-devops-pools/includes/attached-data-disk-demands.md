---
ms.topic: include
author: steved0x
ms.author: sdanie
ms.service: azure-devops
ms.subservice: azure-devops-managed-devops-pools
ms.date: 07/06/2026
---

To attach an empty data disk on a per-pipeline basis, configure the following demands. For more information about the properties that these demands configure, see [Configure storage: Attached data disk properties](../configure-storage.md#attached-data-disk-properties).

| Demand | Description |
|--------|-------------|
| `DiskSizeGiB` | Required. Set this demand to attach an empty data disk. |
| `Caching` | The caching type. Omit this demand to use the default caching type for the storage type you select. |
| `StorageAccountType` | Omit this demand to use the default `Standard_LRS` storage type. |
| `DriveLetter` | (Windows only) Omit this demand to use the default drive letter for your VM size. If you want to use a specific drive letter, set this demand to the letter you want to use. |

In the following example, a Windows pipeline specifies an attached empty data disk with a size of 128 GB and a drive letter of `L`. The caching type and storage type are omitted, so the default values are used.

```yml
pool:
  name: fabrikam-managed-pool # Name of pool
  demands:
  - DiskSizeGiB -equals 128
  - DriveLetter -equals L
```
