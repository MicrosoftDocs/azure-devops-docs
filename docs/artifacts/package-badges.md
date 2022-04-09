---
title: Share your Azure Artifacts packages with badges
description: Share your NuGet, npm, Maven, Python, or Universal Packages with package badges
ms.assetid: 60a3f33a-d8bc-436a-a676-c1bd4b3066e7
ms.technology: devops-artifacts
ms.topic: conceptual
ms.date: 02/14/2022
monikerRange: '<= azure-devops'
---

# Share your Artifacts with package badges

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

Azure Artifacts offers a way to share your packages anywhere you can share an image by using package badges. You can embed package badges directly into your project's home page or in any Markdown file so your customers can easily discover and consume your packages.

:::image type="content" source="media/package-badge.png" alt-text="NuGet package badge":::
 
> [!NOTE]
> Package badges can only be created and shared for released versions. Pre-released packages will not be displayed in badges, instead the badge will show the latest release version.

## Enable package sharing  

To start sharing your Artifacts packages using package badges, you'll first have to enable **Package sharing** for you feed.

> [!NOTE]
> Only feed administrators can enable package sharing.

1. Select **Artifacts**, select your feed from the dropdown menu, and then select the gear icon ![gear icon](../media/icons/gear-icon.png) to access the **Feed settings**. 

   ::: moniker range=">= azure-devops-2019"

   :::image type="content" source="media/feed-settings.png" alt-text="A screenshot showing how to navigate to the feed settings":::

   ::: moniker-end

   ::: moniker range="tfs-2018"

   :::image type="content" source="media/edit-feed-full.png" alt-text="A screenshot showing how to navigate to the feed settings in TFS":::

   ::: moniker-end

1. Find the **Package sharing** section and select the checkbox to **Enable package badges**.

   :::image type="content" source="media\enable-package-badges.png" alt-text="Enable package badges":::

    ::: moniker range=">= azure-devops-2019"

    This will enable the **Create badge** button for every package in that feed.

    :::image type="content" source="media/create-badge-dropdown.png" alt-text="A screenshot showing how to create a package badge.":::

    ::: moniker-end

    ::: moniker range="tfs-2018"

    This will enable the **Create badge** button for every package in that feed.

    :::image type="content" source="media/pm-create-badge.png" alt-text="A screenshot showing how to create a package badge in TFS.":::

    ::: moniker-end

## Create badge

You can create a badge for any package in your feed with package-sharing enabled. You can only create a badge for the latest version of each package.

1. From within your feed, select your package and then select **Create badge**. 

    :::image type="content" source="media/create-badge-new-ui.png" alt-text="A screenshot showing how to create a new package badge.":::

1. Select a **Feed view** for your package badge. If you're using release views, select the view that contains the packages you want to share; otherwise, just use *No view*.

    :::image type="content" source="media/package-badge-setup.png" alt-text="package badge configuration":::

1. You can now share your package by using the Markdown snippet or the direct image link.

## Related articles

- [Limits of package sizes and counts](./reference/limits.md)
- [Package alerts](./how-to/follow-package-notifications.md)
- [Use public feeds to share your packages](./tutorials/share-packages-publicly.md)