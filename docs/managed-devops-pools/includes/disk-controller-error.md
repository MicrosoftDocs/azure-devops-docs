---
ms.topic: include
ms.date: 06/01/2026
---

> [!IMPORTANT]
> Azure Pipelines images aren't currently supported with **v6** and **v7** Azure VM agent sizes. For example, if you choose `Standard D2as v6` with an Azure Pipelines image, you get an error like `SkuNotCompatibleWithImageDiskControllerType: Incompatible DiskControllerType between Image(s) MMSWindows2025-g2 and Pool SKU Standard_D2as_v6. Select a different image or sku for pool mdp-11-21-2025.`.
>
> To resolve this issue, choose a different agent size that isn't **v6** or **v7**.