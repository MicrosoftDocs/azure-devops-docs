---
title: Share your Artifacts with package badges
description: How to share your packages with package badges
ms.assetid: 60a3f33a-d8bc-436a-a676-c1bd4b3066e7
ms.service: azure-devops-artifacts
ms.topic: conceptual
ms.date: 06/21/2022
monikerRange: '<= azure-devops'
---

# Share your Artifacts with package badges

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

With Azure Artifacts, you can share your packages anywhere you can share an image by using package badges. You can embed package badges directly into your project's home page or in any Markdown file for your customers to easily find and download your packages.

## Enable package sharing  

> [!NOTE]
> You must be a feed administrator to enable package sharing.

::: moniker range=">= azure-devops-2019"

1. Select **Artifacts**, and then select your feed from the dropdown menu. Select the gear icon ![gear icon](../media/icons/gear-icon.png) to access the **Feed settings**.

   :::image type="content" source="media/feed-settings.png" alt-text="A screenshot showing how to navigate to the feed settings":::

1. Find the **Package sharing** section and select the checkbox to **Enable package badges**.

   :::image type="content" source="media\enable-package-badges.png" alt-text="A screenshot showing how to enable package badges":::

::: moniker-end

::: moniker range="tfs-2018"

1. Select **Build and Release**, and then select **Packages**.

1. Select the gear icon ![gear icon](../media/icons/gear-icon.png) to access the **Feed settings**.

   :::image type="content" source="media/edit-feed-full.png" alt-text="A screenshot showing how to navigate to the feed settings in TFS":::

1. Select **Enable package badges**. This will enable the **Create badge** button for every package in that feed.

    :::image type="content" source="media/pm-create-badge.png" alt-text="A screenshot showing how to create a package badge in TFS.":::

::: moniker-end

## Create a package badge

With package-sharing enabled, you can create a badge for any package in your feed. But you can only create a badge for the latest version of each package.

::: moniker range=">= azure-devops-2019"

1. From within your feed, select your package and then select **Create badge**.

    :::image type="content" source="media/create-badge-new-ui.png" alt-text="A screenshot showing how to create a new package badge.":::

1. Select a **Feed view** for your package badge. If you're using release views, select the view that contains the packages you want to share.

    :::image type="content" source="media/package-badge-setup.png" alt-text="A screenshot showing the create a package badge panel.":::

1. You can now share your package by using the Markdown snippet or the direct image link.

::: moniker-end

::: moniker range="tfs-2018"

1. From within your feed, select your package and then select **Create badge**.

    :::image type="content" source="media/pm-create-badge.png" alt-text="A screenshot showing how to create a badge in TFS 2018.":::

1. Select a **Feed view** for your package badge.

1. Share the Markdown snippet or the image link with your customers.

::: moniker-end

## Related articles

- [Limits of package sizes and counts](./reference/limits.md)
- [Package notifications](./how-to/follow-package-notifications.md)
- [Delete and recover packages](./how-to/delete-and-recover-packages.md)