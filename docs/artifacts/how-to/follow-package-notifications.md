---
title: Package notifications
description: Learn how to follow a package and get notified every time a new version is published with Azure Artifacts.
ms.service: azure-devops-artifacts
ms.topic: how-to
ms.date: 01/08/2025
monikerRange: "<=azure-devops"
---

# Package notifications

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Notifications are a great way to stay informed about changes in your project. In Azure Artifacts, when you follow a package, you’ll be notified every time a new version of that package is published. A notification will be sent to your preferred email address with details about the newly published version. Your preferred email is usually the one you use to sign into Azure DevOps, but you can change it from your profile page.

## Prerequisites

| **Product**        | **Requirements**   |
|--------------------|--------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../../organizations/accounts/create-organization.md) and a [project](../../organizations/projects/create-project.md).<br> - An Azure Artifacts [feed](../../artifacts/start-using-azure-artifacts.md#create-a-new-feed). |

## Follow a package

Follow these steps to follow a package and get notified whenever a new version is published:

1. Sign in to your Azure DevOps, then navigate to your project.

1. Select **Artifacts**, then select your feed from the dropdown menu.

1. Select the package you want to follow, then select **Follow** to start getting notifications when a new version is published.

## Follow promoted packages

In addition to getting notifications when a new package version is published, you can also set up alerts to be notified when a package is promoted to a view.
This can be helpful for filtering alerts so you only receive the notifications you care about, especially during busy development cycles when many packages are being published.

1. Sign in to your Azure DevOps, then navigate to your project.

1. Select **Artifacts**, then select your feed from the dropdown menu.

1. Select the **View** dropdown from the left, then select a view to filter (for example, @Prerelease, @Release).

1. Select the package you want to follow, then select **Follow**.

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
