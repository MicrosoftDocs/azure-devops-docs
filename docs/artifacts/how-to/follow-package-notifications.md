---
title: Receive package notifications
description: How to follow a package and get notified every time a new version is published
ms.service: azure-devops-artifacts
ms.topic: conceptual
ms.date: 06/14/2022
monikerRange: '<= azure-devops'
---

# Package notification

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Notifications are a great tool to stay informed about specific changes within your project. In Azure Artifacts, when you follow a package you’ll be notified every time a new version of that package is published. A notification will be sent to your preferred email address with details about the new published version. The preferred email address is usually the email address you signed into Azure DevOps with, but you can change it from your profile page.

## Follow a package

1. Select **Artifacts**, and then select your feed.

1. Select the package you want to follow, and then select **Follow** to start getting notified whenever a new version is published.

    :::image type="content" source="../media/follow-package-notifications.png" alt-text="A screenshot showing how to follow a package.":::

## Views notifications

Aside from getting notifications when a new package version is published, you can also set up alerts to be notified when a package is promoted to a view. This can be helpful to filter alerts and only receive specific notifications especially in a busy development cycle when numerous packages are being published.

1. Select **Artifacts**, and then select your feed.

1. Filter to a specific view (for example, @Prerelease, @Release)

    :::image type="content" source="../media/notifications-filter-view.png" alt-text="A screenshot showing how to filter packages by a specific view.":::

1. Select the package you want to follow, and then select **Follow**.

    :::image type="content" source="../media/follow-package-notifications.png" alt-text="A screenshot showing how to follow a package from a specific view.":::

## Follow a package with personal notifications

 In addition to following a package from the _Feeds_ page, you can also [manage your personal notifications](../../organizations/notifications/manage-your-personal-notifications.md) and set up alerts to be notified about a specific package or set of packages from the _Notification Settings_ page.

1. Navigate to your Azure DevOps organization: `https://dev.azure.com/<YOUR_ORGANIZATION>`.

1. Select :::image type="icon" source="../../media/icons/user-settings-gear.png" border="false":::  **User settings**, and then select **Notifications**.

1. Select **New subscription**, and then select **Artifacts** > **A package is changed**. Select **Next** when you are done.

    :::image type="content" source="../media/personal-notifications-artifacts.png" alt-text="A screenshot showing how to add a new notification subscription.":::

1. Add a **Description** and then select an email address for the notifications to be delivered to. By default, your preferred email address is used. You can also add filters to only receive notifications when a set of criteria are met.

    :::image type="content" source="../media/filter-notifications.png" alt-text="A screenshot showing how to set up a new notification subscription and add filters.":::

1. Select **Finish** when you are done.

> [!Note]
> You must be a member of the *Project Administrators group* or the *Project Collection Administrators group* if you want to create project notifications.

## Related articles

- [Share your Artifacts with package badges](../package-badges.md)
- [Limits on package sizes and counts](../reference/limits.md)
- [Delete and recover packages](../how-to/delete-and-recover-packages.md)
- [Get started with notifications in Azure DevOps](../../organizations/notifications/about-notifications.md)
- [Manage team, group, and global notifications](../../organizations/notifications/manage-team-group-global-organization-notifications.md)
