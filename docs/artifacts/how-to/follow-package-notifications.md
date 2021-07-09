---
title: Receive package notifications
description: How to follow a package and get notified every time a new version is published
ms.technology: devops-artifacts
ms.topic: conceptual
ms.date: 07/9/2021
monikerRange: '>= tfs-2017'
---

# Package notification

Notifications is a great tool to stay informed about specific changes within your project. In Azure Artifacts, when you follow a package you’ll be notified every time a new version of that package is published. A notifications will be sent to your preferred email address with details about the new published version. The preferred email address is usually the email address you signed into Azure DevOps with, but you can change it from your profile page. [change from your organization preferences](../../notifications/change-email-address.md).


## Follow a package

1. From within your project, select **Artifacts** and then select the feed hosting your package.
1. Find and select the package you want to follow.
1. Select the **Follow** button to start getting notified whenever a new version is published.

## Follow a package with views

If you’re using release views, you can get notifications when new version of a package is promoted to a view. This can reduce the notification spam if a lot of packages are being published, but only a few are being promoted to a view.

1. Go to the feed page
2. Filter to a view (e.g. @release)
3. Go to the package you want to follow
4. Click the **Follow** button

## Follow a package from the notification settings page

 In addition to following a package from the _Feeds_ page, you can [manage your personal notifications](../../notifications/manage-your-personal-notifications.md) and set up a personal notification for a package or set of packages from the _Notification Settings_ page.