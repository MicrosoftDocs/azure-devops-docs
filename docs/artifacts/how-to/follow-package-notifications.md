---
title: Receive package notifications
description: How to follow a package and get notified every time a new version is published
ms.technology: devops-artifacts
ms.topic: conceptual
ms.date: 02/14/2022
monikerRange: '>= tfs-2017'
---

# Package notification

[!INCLUDE [version-gt-eq-2017](../../includes/version-gt-eq-2017.md)]

Notifications are a great tool to stay informed about specific changes within your project. In Azure Artifacts, when you follow a package you’ll be notified every time a new version of that package is published. A notification will be sent to your preferred email address with details about the new published version. The preferred email address is usually the email address you signed into Azure DevOps with, but you can change it from your profile page.

## Follow a package

1. Select **Artifacts**, and then select your feed.

1. Select the package you want to follow.

1. Select **Follow** to start getting notified whenever a new version is published.

    :::image type="content" source="../media/follow-package-notifications.png" alt-text="A screenshot showing how to follow a package.":::

## Views notifications

Aside from getting notifications when a new package version is published, you can also set up alerts to be notified when a package is promoted to a view. This can be helpful to filter alerts and only receive specific notifications especially in a busy development cycle when numerous packages are being published.

1. Select **Artifacts**, and then select your feed.

1. Filter to a specific view (for example, @Prerelease, @Release)

    :::image type="content" source="../media/notifications-filter-view.png" alt-text="A screenshot showing how to filter packages by a specific view.":::

1. Select the package you want to follow.

1. Select **Follow**.

    :::image type="content" source="../media/follow-package-notifications.png" alt-text="A screenshot showing how to follow a package from a specific view.":::

## Follow a package with personal notifications

 In addition to following a package from the _Feeds_ page, you can also [manage your personal notifications](../../notifications/manage-your-personal-notifications.md) and set up alerts to be notified about a specific package or set of packages from the _Notification Settings_ page.

## Related articles

- [Share your Artifacts with package badges](../package-badges.md)
- [Limits on package sizes and counts](../reference/limits.md)
- [Delete and recover packages](../how-to/delete-and-recover-packages.md)