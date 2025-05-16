---
ms.topic: include
ms.date: 04/02/2025
---

[Ubuntu 20.04 LTS Standard Support is coming to an end May 31, 2025](https://ubuntu.com/blog/ubuntu-20-04-lts-end-of-life-standard-support-is-coming-to-an-end-heres-how-to-prepare), and Managed DevOps Pools is removing the Ubuntu 20.04 images from [Selected marketplace images](../configure-images.md#selected-marketplace-images) and [Azure Pipelines images](../configure-images.md#azure-pipelines-images).

  * Creation of new pools using Ubuntu 20.04 Selected marketplace images or Azure Pipelines images will be disabled starting June 1, 2025, but existing pools on these images will continue to run until July 1, 2025.
  * On July 1, 2025, Pools using Ubuntu 20.04 Selected marketplace images or Azure Pipelines images will be disabled. Agents using these images won't provision and pipelines won't run.

To keep your Managed DevOps Pools that currently use Ubuntu 20.04 running, update your Ubuntu 20.04 images to Ubuntu 22.04 or 24.04 (recommended). For more information, see [Choose your pool's image](../configure-images.md#choose-your-pools-image). If you have [multiple images](../configure-images.md#use-multiple-images-per-pool-with-aliases) in your pool, [update your aliases](../configure-images.md#configure-image-aliases) for your Ubuntu images so that your pipelines that require Ubuntu will run using the desired image.

