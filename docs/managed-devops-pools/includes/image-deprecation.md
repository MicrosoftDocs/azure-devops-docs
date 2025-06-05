---
ms.topic: include
ms.date: 06/05/2025
---

The following images are being deprecated in Managed DevOps Pools.

* Windows Server 2019
* Ubuntu 20.04

[Azure Pipelines Windows 2019 hosted agents are scheduled to be deprecated by June 30, 2025](../../pipelines/agents/hosted.md?tabs=windows#windows-server-2019-hosted-image-deprecation-schedule), and Managed DevOps Pools is **removing the Azure Pipelines – Windows Server 2019** image from [Azure Pipelines images](../configure-images.md#azure-pipelines-images).

* Creation of new pools using **Azure Pipelines – Windows Server 2019** will be disabled starting July 2025, but existing pools on these images will continue to run until August 30, 2025. 
* On September 1, 2025, use of **Azure Pipelines – Windows Server 2019 image** will be disabled. Agents using this image won't provision and pipelines won't run.  

To keep your Managed DevOps Pools that currently use the **Azure Pipelines – Windows Server 2019** image running, update your image to the **Azure Pipelines - Windows Server 2022** image. You can also switch to the Windows 2019 image from [Selected marketplace images](../configure-images.md#selected-marketplace-images) or bring your own [Azure Compute Gallery](../configure-images.md#azure-compute-gallery-images) Windows 2019 image. Note that the Windows 2019 image from [Selected marketplace images](../configure-images.md#selected-marketplace-images) is a plain vanilla image and does not have pre-installed software like the **Azure Pipelines – Windows Server 2019** image.

[Ubuntu 20.04 LTS Standard Support is coming to an end May 31, 2025](https://ubuntu.com/blog/ubuntu-20-04-lts-end-of-life-standard-support-is-coming-to-an-end-heres-how-to-prepare), and Managed DevOps Pools is removing the Ubuntu 20.04 images from [Selected marketplace images](../configure-images.md#selected-marketplace-images) and [Azure Pipelines images](../configure-images.md#azure-pipelines-images).

  * Creation of new pools using Ubuntu 20.04 Selected marketplace images or Azure Pipelines images will be disabled starting June 1, 2025, but existing pools on these images will continue to run until July 1, 2025.
  * On July 1, 2025, Pools using Ubuntu 20.04 Selected marketplace images or Azure Pipelines images will be disabled. Agents using these images won't provision and pipelines won't run.

To keep your Managed DevOps Pools that currently use Ubuntu 20.04 running, update your Ubuntu 20.04 images to Ubuntu 22.04 or 24.04 (recommended). For more information, see [Choose your pool's image](../configure-images.md#choose-your-pools-image). If you have [multiple images](../configure-images.md#use-multiple-images-per-pool-with-aliases) in your pool, [update your aliases](../configure-images.md#configure-image-aliases) for your Ubuntu images so that your pipelines that require Ubuntu will run using the desired image.

