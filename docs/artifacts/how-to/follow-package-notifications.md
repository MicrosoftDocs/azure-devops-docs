---
title: Receive package notifications
description: How to follow a package and get notified every time a new version is published
ms.technology: devops-artifacts
ms.topic: conceptual
ms.date: 07/9/2021
monikerRange: '>= tfs-2017'
---

# Package notification

Notifications is a great tool to stay informed about specific changes within your project. In Azure Artifacts, when you follow a package you’ll be notified every time a new version of that package is published. A notifications will be sent to your preferred email address with details about the new published version. The preferred email address is usually the email address you signed into Azure DevOps with, but you can change it from your profile page.

## Follow a package

1. From within your project, select **Artifacts** and then select the feed hosting your package.

1. Find and select the package you want to follow.

1. Select the **Follow** button to start getting notified whenever a new version is published.

    :::image type="content" source="../media/follow-package.png" alt-text="Follow a package":::

## View notifications

Aside from getting notifications when a new package version is published, you can also set up alerts to be notified when a package is promoted to a view. This can be helpful to filter alerts and only receive specific notifications especially in a busy development cycle when a lot of packages are being published.

1. From within your project, select **Artifacts** and then select the feed hosting your package.

1. Filter to a specific view (e.g. @Prerelease, @Release)

    :::image type="content" source="../media/filter-by-view.png" alt-text="Filter packages by a specific view":::

1. Select the package you want to follow.

1. Click the **Follow** button

1. Select the **Follow** button to start getting notified whenever a new version is published.

    :::image type="content" source="../media/follow-package.png" alt-text="Follow a package":::

## Follow a package from the notification settings page

 In addition to following a package from the _Feeds_ page, you can [manage your personal notifications](../../notifications/manage-your-personal-notifications.md) and set up a personal notification for a package or set of packages from the _Notification Settings_ page.