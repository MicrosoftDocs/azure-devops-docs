---
title: Share your Artifacts with package badges
description: How to share your packages with package badges
ms.assetid: 60a3f33a-d8bc-436a-a676-c1bd4b3066e7
ms.technology: devops-artifacts
ms.topic: conceptual
ms.date: 02/14/2022
monikerRange: '<= azure-devops'
---

# Share your Artifacts with package badges

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

With Azure Artifacts, you can share your packages anywhere you can share an image by using package badges. You can embed package badges directly into your project's home page or in any Markdown file for your customers to easily find and download your packages.

## Enable package sharing  

> [!NOTE]
> You must be a feed administrator to enable package sharing.

1. Select **Artifacts**, and then select your feed from the dropdown menu. Select the gear icon ![gear icon](../media/icons/gear-icon.png) to access the **Feed settings**.

   ::: moniker range=">= azure-devops-2019"

   :::image type="content" source="media/feed-settings.png" alt-text="A screenshot showing how to navigate to the feed settings":::

   ::: moniker-end

   ::: moniker range="tfs-2018"

   :::image type="content" source="media/edit-feed-full.png" alt-text="A screenshot showing how to navigate to the feed settings in TFS":::

   ::: moniker-end

1. Find the **Package sharing** section and select the checkbox to **Enable package badges**.

   :::image type="content" source="media\enable-package-badges.png" alt-text="A screenshot showing how to enable package badges":::

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