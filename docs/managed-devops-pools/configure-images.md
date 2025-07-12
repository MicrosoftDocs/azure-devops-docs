---
title: Configure images
description: Learn how to configure agent images for Managed DevOps Pools.
ms.date: 07/07/2025
---

# Configure Managed DevOps Pools images

Managed DevOps Pools provides you with several options for virtual machine images for running pipelines in your pool. You can create your pool using selected Azure Marketplace VM images, use your own custom Azure Compute Gallery images, or use the same images as Azure Pipelines Microsoft-hosted agents.

> [!IMPORTANT]
> [!INCLUDE [image-deprecation](./includes/image-deprecation.md)] 

Managed DevOps Pools can be configured with a single image or multiple images. When your pool has multiple images, your pipelines should specify the image they want to run on using [aliases](#use-multiple-images-per-pool-with-aliases).

## Choose your pool's image

#### [Azure portal](#tab/azure-portal/)

A default image is selected when you create a Managed DevOps Pool. You can keep the default choice, or change it during pool creation. To configure the image after pool creation, go to **Settings** > **Pool**, choose **Add from Image Library**, and select one or more images for your pool.

:::image type="content" source="./media/configure-images/configure-pool-image.png" alt-text="Screenshot of configure image.":::

#### [ARM template](#tab/arm/)

Images are configured in the `fabricProfile` section of the Managed DevOps Pools resource properties.

The following example specifies three images. For more information on the schema for images, see the following sections in this article.

```json
{
    "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
    "contentVersion": "1.0.0.0",
    "resources": [
        {
            "name": "fabrikam-managed-pool",
            "type": "microsoft.devopsinfrastructure/pools",
            "apiVersion": "2024-10-19",
            "location": "eastus",
            "properties": {
                ...
                "fabricProfile": {
                    ...
                    "images": [
                        {
                            "resourceId": "/subscriptions/subscription_id_placeholder/Providers/Microsoft.Compute/Locations/eastus/publishers/canonical/artifacttypes/vmimage/offers/ubuntu-24_04-lts/skus/server/versions/latest",
                            "aliases": [
                                "ubuntu-24.04-gen2"
                            ]
                        },
                        {
                            "wellKnownImageName": "windows-2022"
                        },
                        {
                            "wellKnownImageName": "ubuntu-22.04"
                        }
                    ]
                }
            }
        }
    ]
}
```

Each image can have the following properties.

| Property | Description |
|----------|-------------|
| `aliases` | An optional list of aliases. You can then refer to the image using the aliases instead of the full resource ID of the image. |
| `resourceID` | The resource ID of the image to use. Required when using [Azure Compute Gallery images](#azure-compute-gallery-images) or [selected marketplace images](#selected-marketplace-images). |
| `wellKnownImageName` | The alias of the Azure Pipelines image. Required when using [Azure Pipelines images](#azure-pipelines-images). |
| `buffer` | When [standby agents](./configure-scaling.md#standby-agent-mode) are enabled, `buffer` designates which percentage of standby agents to be allocated to this image. The total of all image `buffer` values must equal 100. |

The following example defines three images. Standby agents are enabled, with 100% of the standby agents allocated to the `windows-2022` image.

```json
"images": [
    {
        "resourceId": "/subscriptions/subscription_id_placeholder/Providers/Microsoft.Compute/Locations/eastus/publishers/canonical/artifacttypes/vmimage/offers/ubuntu-24_04-lts/skus/server/versions/latest",
        "aliases": [
            "ubuntu-24.04-gen2"
        ],
        "buffer": "0"
    },
    {
        "buffer": "100",
        "wellKnownImageName": "windows-2022"
    },
    {
        "buffer": "0",
        "wellKnownImageName": "ubuntu-22.04"
    }
]
```

#### [Azure CLI](#tab/azure-cli/)

Images are configured in the `fabric-profile` section of the Managed DevOps Pools resource properties.

```azurecli
az mdp pool create \
   --fabric-profile fabric-profile.json
   # other parameters omitted for space
```

The following example shows the `images` section of the **fabric-profile.json** file and specifies three images. For more information on the schema for images, see the following sections in this article.

```json
{
  "vmss": {
    "sku": {...},
    "images": [
        {
            "resourceId": "/subscriptions/subscription_id_placeholder/Providers/Microsoft.Compute/Locations/eastus/publishers/canonical/artifacttypes/vmimage/offers/ubuntu-24_04-lts/skus/server/versions/latest",
            "aliases": [
                "ubuntu-24.04-gen2"
            ],
            "buffer": "0"
        },
        {
            "buffer": "100",
            "wellKnownImageName": "windows-2022"
        },
        {
            "buffer": "0",
            "wellKnownImageName": "ubuntu-22.04"
        }
    ],
    "osProfile": {...},
    "storageProfile": {...}
  }
}
```

Each image can have the following properties.

| Property | Description |
|----------|-------------|
| `aliases` | An optional list of aliases. You can then refer to the image using the aliases instead of the full resource ID of the image. |
| `resourceID` | The resource ID of the image to use. Required when using [Azure Compute Gallery images](#azure-compute-gallery-images) or [selected marketplace images](#selected-marketplace-images). |
| `wellKnownImageName` | The alias of the Azure Pipelines image. Required when using [Azure Pipelines images](#azure-pipelines-images). |
| `buffer` | When [standby agents](./configure-scaling.md#standby-agent-mode) are enabled, `buffer` designates which percentage of standby agents to be allocated to this image. The total of all image `buffer` values must equal 100. |

The following example defines three images. Standby agents are enabled, with 100% of the standby agents allocated to the `windows-2022` image.

```json
{
  "vmss": {
    "sku": {...},
    "images": [
        {
            "resourceId": "/subscriptions/subscription_id_placeholder/Providers/Microsoft.Compute/Locations/eastus/publishers/canonical/artifacttypes/vmimage/offers/ubuntu-24_04-lts/skus/server/versions/latest",
            "aliases": [
                "ubuntu-24.04-gen2"
            ],
            "buffer": "0"
        },
        {
            "buffer": "100",
            "wellKnownImageName": "windows-2022"
        },
        {
            "buffer": "0",
            "wellKnownImageName": "ubuntu-22.04"
        }
    ],
    "osProfile": {...},
    "storageProfile": {...}
  }
}
```

* * *

If you choose a single image, all pipelines run in your pool using that image. If you choose multiple images, you can specify the image to use on a per-pipeline basis. For more information, see [Use multiple images per pool](#use-multiple-images-per-pool-with-aliases).

> [!IMPORTANT]
> If you have multiple images in your pool, and don't use demands in your pipelines to designate an image, the pipelines run using the first listed image in your pool. You can change the order of the images in your pool by changing the order of the images in the `images` list in the `fabricProfile` section (if using [templates](./configure-images.md?tabs=arm#choose-your-pools-image)), or by ordering the [images in the images list](./configure-pool-settings.md#images) in the Azure portal using drag and drop.

You can choose from the following types of images.

* [Azure Pipelines images](#azure-pipelines-images) - Choose from the same images that Microsoft-hosted agents use.
* [Selected marketplace images](#selected-marketplace-images) - Choose from a set of curated Microsoft published Azure Marketplace VM images.
* [Azure Compute Gallery images](#azure-compute-gallery-images) - Choose from your own Azure Compute Galleries images. You must assign the Reader role to the DevOpsInfrastructure Service Principal for the Azure Compute Gallery images you want to use. For more information, see [Grant Reader role access to the DevOpsInfrastructure Service Principal](#grant-reader-role-access-to-the-devopsinfrastructure-service-principal).

## Azure Pipelines images

Managed DevOps Pools provides several preconfigured images that have the same software as selected Microsoft-hosted agents for Azure Pipelines.

The lifecycle of Azure Pipelines images offered in Managed DevOps Pools follows the lifecycle of the [Microsoft-hosted agent images](../pipelines/agents/hosted.md#software). If an image in Microsoft-hosted agents is deprecated, the corresponding Managed DevOps Pools is also deprecated on a similar timeframe. The version of images available in Microsoft-hosted agents might be slightly different from the version of images available in Managed DevOps Pools for the same image type.

For more information on Managed DevOps Pools images lifecycle, see [Image lifecycle](#image-lifecycle).

#### [Azure portal](#tab/azure-portal/)

When you specify an Azure Pipelines image using the Azure portal, the latest version of the image is always used.

:::image type="content" source="./media/configure-images/image-library-azure-pipelines-images.png" alt-text="Screenshot of Azure Pipelines images.":::

#### [ARM template](#tab/arm/)

To specify an Azure Pipelines image, provide the alias of the image using the `wellKnownImageName` property. See a [list of Azure Pipelines image predefined aliases.](#azure-pipelines-image-predefined-aliases)

```json
"images": [
    {
        "wellKnownImageName": "windows-2022"
    }
]
```

You can optionally specify a version in your `wellKnownImageName` setting, for example `"wellKnownImageName": "windows-2022/latest"` or `"wellKnownImageName": "windows-2022/20250427.1.0"`. If you don't specify a version, `latest` is used.

#### [Azure CLI](#tab/azure-cli/)

To specify an Azure Pipelines image, provide the predefined alias of the image using the `wellKnownImageName` property. See a [list of Azure Pipelines image predefined aliases.](#azure-pipelines-image-predefined-aliases)

```json
"images": [
    {
        "wellKnownImageName": "windows-2022"
    }
]
```

You can optionally specify a version in your `wellKnownImageName` setting, for example `"wellKnownImageName": "windows-2022/latest"` or `"wellKnownImageName": "windows-2022/20250427.1.0"`. If you don't specify a version, `latest` is used.

* * *

Each image includes the following installed software.

| Image | Included software |
|-------|-------------------|
| Azure Pipelines - Windows Server 2025 | [Included software](https://github.com/actions/runner-images/blob/main/images/windows/Windows2025-Readme.md) |
| Azure Pipelines - Windows Server 2022 | [Included software](https://github.com/actions/runner-images/blob/main/images/windows/Windows2022-Readme.md) |
| Azure Pipelines - Windows Server 2019 | [Included software](https://github.com/actions/runner-images/blob/main/images/windows/Windows2019-Readme.md) |
| Azure Pipelines - Ubuntu 24.04 | [Included software](https://github.com/actions/runner-images/blob/main/images/ubuntu/Ubuntu2404-Readme.md) |
| Azure Pipelines - Ubuntu 22.04 | [Included software](https://github.com/actions/runner-images/blob/main/images/ubuntu/Ubuntu2204-Readme.md) |

> [!IMPORTANT]
> [!INCLUDE [image-deprecation](./includes/image-deprecation.md)] 

## Selected marketplace images

Managed DevOps Pools provides a set of curated Microsoft published Azure Marketplace VM images for use in your pools.

:::image type="content" source="./media/configure-images/image-library-marketplace-images.png" alt-text="Screenshot of selected marketplace images.":::

#### [Azure portal](#tab/azure-portal/)

Choose **Selected marketplace images**, choose the desired image, and choose the desired version. Choose **latest** to always use the latest version of the image.

#### [ARM template](#tab/arm/)

To specify a selected marketplace image, provide the resource ID of the image using the `resourceId` property.

```json
"images": [
    {
        "resourceId": "/subscriptions/subscription_id_placeholder/Providers/Microsoft.Compute/Locations/eastus/Publishers/canonical/ArtifactTypes/VMImage/Offers/ubuntu-24_04-lts/Skus/server/versions/latest"
    }
]
```

#### [Azure CLI](#tab/azure-cli/)

To specify selected marketplace image, provide the resource ID of the image using the `resourceId` property.

```json
"images": [
    {
        "resourceId": "/subscriptions/subscription_id_placeholder/Providers/Microsoft.Compute/Locations/eastus/Publishers/canonical/ArtifactTypes/VMImage/Offers/ubuntu-24_04-lts/Skus/server/versions/latest"
    }
]
```

* * *

## Azure Compute Gallery images

Choose **Azure Compute Gallery images** to specify an image from any Azure Compute Galleries that are available in your subscriptions. [Generalized](/azure/virtual-machines/generalize) images with the following operating systems are supported.

* Windows Server 2019
* Windows Server 2022
* Windows Server 2025
* Windows 11
* Ubuntu 22.04
* Ubuntu 24.04
* Debian 9
* RHEL 8
* RHEL 9
* SUSE 12
* SUSE 15

> [!IMPORTANT]
> Managed DevOps Pools supports only [generalized](/azure/virtual-machines/generalize) Azure Compute Gallery images.

#### [Azure portal](#tab/azure-portal/)

:::image type="content" source="./media/configure-images/image-library-compute-gallery-images.png" alt-text="Screenshot of Azure Compute Gallery images.":::

#### [ARM template](#tab/arm/)

To specify an Azure Compute Gallery image, provide the resource ID of the image using the `resourceId` property.

```json
"images": [
    {
        "resourceId": "/subscriptions/subscription_id_placeholder/resourceGroups/resource_group_placeholder/providers/Microsoft.Compute/galleries/my_images/images/Ubuntu2404"
    }
]
```

#### [Azure CLI](#tab/azure-cli/)

To specify an Azure Compute Gallery image, provide the resource ID of the image using the `resourceId` property.

```json
"images": [
    {
        "resourceId": "/subscriptions/subscription_id_placeholder/resourceGroups/resource_group_placeholder/providers/Microsoft.Compute/galleries/my_images/images/Ubuntu2404"
    }
]
```

* * *

### Grant Reader role access to the DevOpsInfrastructure Service Principal

> [!IMPORTANT]
> Assign the Reader role to the DevOpsInfrastructure Service Principal for the Azure Compute Gallery images you want to use. If you select an Azure Compute Gallery image that doesn't have this access configured, pool creation fails. You can assign the Reader role individually at the image level, or at the image gallery level for all images in the gallery.

1. Go to the desired resource in the Azure portal. To be able to use all images in a gallery, go to Azure Compute Gallery in the Azure portal. To use a specific image only, go to that image.
1. Select **Access control (IAM)**.
1. Select **Add** > **Add role assignment** to open the **Add role assignment** page.
1. Assign the following role. For detailed steps, see [Assign Azure roles using the Azure portal](/azure/role-based-access-control/role-assignments-portal).

    | Setting | Value |
    | --- | --- |
    | Role | Reader |
    | Assign access to | Service Principal |
    | Members | DevOpsInfrastructure |

   :::image type="content" source="./media/configure-images/add-role-assignment-button.png" alt-text="Screenshot of Add role assignment."

## Use multiple images per pool with aliases

If you have multiple images in your pool, you can configure your Azure DevOps pipeline to use a specific image by referencing an alias for that image.

If you have multiple images in your pool, and don't use demands in your pipelines to designate an image, the pipelines run using the first listed image in your pool. You can change the order of the images in your pool by changing the order of the images in the `images` list in the `fabricProfile` section (if using [templates](./configure-images.md?tabs=arm#choose-your-pools-image)), or by ordering the [images in the images list](./configure-pool-settings.md#images) in the Azure portal using drag and drop.

> [!TIP]
> If your pipelines experience problems after adding a new image to your pool for the first time, check the ordering of the images in the list, and consider using demands and aliases to explicitly designate which image to use for each pipeline.

### Configure image aliases

#### [Azure portal](#tab/azure-portal/)

To add and manage image aliases, go to the **Images** section of pool settings and choose **...**, **Add alias**.

:::image type="content" source="./media/configure-images/add-alias-menu.png" alt-text="Screenshot of add alias menu option."

Add any desired aliases to the **Alias** list, and choose **Save**.

:::image type="content" source="./media/configure-images/add-alias-pane.png" alt-text="Screenshot of the alias pane."

The following example shows a pool with two Azure Pipelines images and one selected marketplace image. The Azure Pipeline images have their default aliases displayed, and the selected marketplace image has a single configured alias named **ubuntu-24.04-gen2**.

:::image type="content" source="./media/configure-images/multiple-images-with-aliases.png" alt-text="Screenshot of a pool with multiple images with aliases."

#### [ARM template](#tab/arm/)

To configure aliases, specify them in the `aliases` list. The following example defines one image with a single alias named `ubuntu-24.04-gen2`.

```json
"images": [
    {
        "resourceId": "/subscriptions/subscription_id_placeholder/Providers/Microsoft.Compute/Locations/eastus/publishers/canonical/artifacttypes/vmimage/offers/ubuntu-24_04-lts/skus/server/versions/latest",
        "aliases": [
            "ubuntu-24.04-gen2"
        ]
    }
]
```

#### [Azure CLI](#tab/azure-cli/)

To configure aliases, specify them in the `aliases` list. The following example defines one image with a single alias named `ubuntu-24.04-gen2`.

```json
"images": [
    {
        "resourceId": "/subscriptions/subscription_id_placeholder/Providers/Microsoft.Compute/Locations/eastus/publishers/canonical/artifacttypes/vmimage/offers/ubuntu-24_04-lts/skus/server/versions/latest",
        "aliases": [
            "ubuntu-24.04-gen2"
        ]
    }
]
```

* * *

#### Azure Pipelines image predefined aliases

In addition to any aliases that you configure, Azure Pipelines images have the following predefined aliases.

| Azure Pipelines image | Predefined alias |
|-----------------------|------------------|
| Azure Pipelines - Windows Server 2025 | `windows-2025` |
| Azure Pipelines - Windows Server 2022 | `windows-2022` |
| Azure Pipelines - Windows Server 2019 | `windows-2019` |
| Azure Pipelines - Ubuntu 24.04 | `ubuntu-24.04` |
| Azure Pipelines - Ubuntu 22.04 | `ubuntu-22.04` |

### Use demands to specify an image

If you have multiple images in your pool, you can configure a pipeline to run on a specific image by using a [demand](/azure/devops/pipelines/yaml-schema/pool-demands) named `ImageOverride`. When you specify the `ImageOverride` demand in your pipeline, Managed DevOps Pools sends the job only to agents using that image.

To run a pipeline on the Ubuntu 24.04 image from the previous example that had an `ubuntu-24.04-gen2` alias, specify the following demand in the `pool` section of your pipeline.

```yml
pool: 
  name: fabrikam-dev-pool # Name of Managed DevOps Pool
  demands:
  - ImageOverride -equals ubuntu-24.04-gen2
```

> [!IMPORTANT]
> Don't put quotes around the alias name in the `ImageOverride` demand, even if it has spaces in the name.

To run a pipeline using an Azure Pipelines image in your pool, use the alias in the previous table. To run a pipeline on the Azure Pipelines Windows Server 2022 image from the previous example, specify the following demand in the `pool` section of your pipeline.

```yml
pool: 
  name: fabrikam-dev-pool # Name of Managed DevOps Pool
  demands:
  - ImageOverride -equals windows-2022
```

## Image lifecycle

Managed DevOps Pools agent images are retired when the image's operating system reaches the end of its support lifecycle, and images based on older versions of operating systems can be retired when images based on new versions of the operating systems are released.

* [Azure Pipelines images](#azure-pipelines-images) offers the same images and follows a similar deprecation schedule as [Microsoft-hosted agents](../pipelines/agents/hosted.md#software).
* [Selected marketplace images](#selected-marketplace-images) are typically retired when the image's operating system reaches the end of its support lifecycle.

### Image deprecation schedule

* [Azure Pipelines - Windows Server 2019 image deprecation schedule](#azure-pipelines---windows-server-2019-image-deprecation-schedule)
* [Ubuntu 20.04 image deprecation schedule](#ubuntu-2004-image-deprecation-schedule)

#### Azure Pipelines - Windows Server 2019 image deprecation schedule

Managed DevOps Pools is removing the **Azure Pipelines – Windows Server 2019** image.

* Creation of new pools using **Azure Pipelines – Windows Server 2019** will be disabled starting November 1, 2025, but existing pools on these images will continue to run until December 31, 2025. 
* On December 31, 2025, use of **Azure Pipelines – Windows Server 2019** image will be disabled. Agents using this image won't provision and pipelines won't run.  

To keep your Managed DevOps Pools running if you use the **Azure Pipelines – Windows Server 2019** image, update to the **Azure Pipelines - Windows Server 2022** image. Alternatively, you can use the Windows Server 2019 image from [Selected marketplace images](./configure-images.md#selected-marketplace-images) or your own [Azure Compute Gallery](./configure-images.md#azure-compute-gallery-images) Windows 2019 image. Note that the marketplace image does not include the pre-installed software found in the Azure Pipelines image.

#### Ubuntu 20.04 image deprecation schedule

[Ubuntu 20.04 LTS Standard Support is coming to an end May 31, 2025](https://ubuntu.com/blog/ubuntu-20-04-lts-end-of-life-standard-support-is-coming-to-an-end-heres-how-to-prepare), and Managed DevOps Pools is removing the Ubuntu 20.04 images from [Selected marketplace images](./configure-images.md#selected-marketplace-images) and [Azure Pipelines images](./configure-images.md#azure-pipelines-images).

  * Creation of new pools using Ubuntu 20.04 Selected marketplace images or Azure Pipelines images will be disabled starting June 1, 2025, but existing pools on these images will continue to run until July 1, 2025.
  * On July 1, 2025, Pools using Ubuntu 20.04 Selected marketplace images or Azure Pipelines images will be disabled. Agents using these images won't provision and pipelines won't run.

To keep your Managed DevOps Pools that currently use Ubuntu 20.04 running, update your Ubuntu 20.04 images to Ubuntu 22.04 or 24.04 (recommended). For more information, see [Choose your pool's image](./configure-images.md#choose-your-pools-image). If you have [multiple images](./configure-images.md#use-multiple-images-per-pool-with-aliases) in your pool, [update your aliases](./configure-images.md#configure-image-aliases) for your Ubuntu images so that your pipelines that require Ubuntu will run using the desired image.

## See also

* [Configure pool settings](./configure-pool-settings.md)
