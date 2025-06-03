---
title: Share packages using package badges in Azure Artifacts
description: Learn how to share your packages using package badges in Azure Artifacts.
ms.assetid: 60a3f33a-d8bc-436a-a676-c1bd4b3066e7
ms.service: azure-devops-artifacts
ms.topic: how-to
ms.date: 06/03/2025
monikerRange: '>= azure-devops-2020'
---

# Share packages using package badges in Azure Artifacts

[!INCLUDE [version-gt-eq-2020](../includes/version-gt-eq-2020.md)]

Azure Artifacts enables developers to host various types of packages in a single feed and share them based on visibility settings, within a team, across an organization, or with external users.

One way to make your packages more discoverable is by using package badges; small embedded images that display key details like package type and version. You can add these badges to your project’s homepage or any Markdown file, making it easy for others to find and download your packages.

## Prerequisites

|    **Product**     |   **Requirements**   |
|--------------------|----------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../organizations/accounts/create-organization.md).<br>- An Azure DevOps [project](../organizations/projects/create-project.md).<br> - An [Azure Artifacts feed](start-using-azure-artifacts.md#create-a-new-feed). |

## Enable package badges  

> [!NOTE]
> You must be a **Feed Administrator** to enable package badges. See [Manage permissions](feeds/feed-permissions.md) for more details.

Before you can start using package badges, you must first enable them in your feed settings:

::: moniker range="<=azure-devops"

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, select your feed from the dropdown menu, and then select the gear icon ![gear icon](../media/icons/gear-icon.png) to access **Feed settings**.

   :::image type="content" source="media/feed-settings.png" alt-text="A screenshot displaying how to navigate to feed settings":::

1. Under **Feed Details**, find the **Package sharing** section and check the **Enable package badges** checkbox.

   :::image type="content" source="media\enable-package-badges.png" alt-text="A screenshot displaying how to enable package badges in Azure Artifacts.":::

1. Select **Save** when you're done.

::: moniker-end

## Create a package badge

With package sharing enabled, you can now create a badge for any package in your feed. However, keep in mind that you can only create a badge for the latest version of each package.

::: moniker range="<=azure-devops"

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, select your feed from the dropdown menu, then select the package you want to create a badge for.

1. Under **Overview**, select the ellipsis button, and then select **Create badge**.

    :::image type="content" source="media/create-badge-new-ui.png" alt-text="A screenshot showing how to create a new package badge.":::

1. Select a **Feed view** for your package badge. If you're using release views, select the view that contains the packages you want to share.

    :::image type="content" source="media/package-badge-setup.png" alt-text="A screenshot showing the create a package badge panel.":::

1. You can now share your package by copying the Markdown snippet or the direct image link, and pasting it into your project home page or any markdowm file.

::: moniker-end

## Related content

- [Follow a package for publish alerts](how-to/follow-package-notifications.md)

- [Limits on package sizes and counts](reference/limits.md)

- [Delete and recover packages](how-to/delete-and-recover-packages.md)
