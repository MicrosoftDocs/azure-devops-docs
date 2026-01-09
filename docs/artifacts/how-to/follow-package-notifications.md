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

Notifications are a great way to stay informed about changes in your project. In Azure Artifacts, when you follow a package, you are notified every time a new version of that package is published. A notification is sent to your preferred email address with details about the newly published version. Your preferred email is usually the one you use to sign into Azure DevOps, but you can change it from your profile page.

## Prerequisites

| **Product**        | **Requirements**   |
|--------------------|--------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../../organizations/accounts/create-organization.md) and a [project](../../organizations/projects/create-project.md).<br> - An Azure Artifacts [feed](../../artifacts/start-using-azure-artifacts.md#create-a-new-feed). |

## Follow a package

Follow these steps to follow a package and get notified whenever a new version is published:

1. Sign in to your Azure DevOps, then navigate to your project.

1. Select **Artifacts**, then select your feed from the dropdown menu.

1. Select the package you want to follow, then select **Follow** to start getting notifications when a new version is published.

    :::image type="content" source="../media/follow-package-notifications.png" alt-text="A screenshot displaying how to follow a package in an Azure Artifacts feed.":::

## Follow promoted packages

In addition to getting notifications when a new package version is published, you can also set up alerts to be notified when a package is promoted to a view.
This can be helpful for filtering alerts so you only receive the notifications you care about, especially during busy development cycles when many packages are being published.

1. Sign in to your Azure DevOps, then navigate to your project.

1. Select **Artifacts**, then select your feed from the dropdown menu.

1. Select the **View** dropdown from the left, then select a view to filter (for example, @Prerelease, @Release).

    :::image type="content" source="../media/notifications-filter-view.png" alt-text="A screenshot displaying how to filter packages by a specific view.":::

1. Select the package you want to follow, then select **Follow**.

    :::image type="content" source="../media/promoted-package-notifications.png" alt-text="A screenshot displaying how to follow promoted packages in Azure Artifacts.":::

## Follow packages with personal notifications

> [!Note]
> You must be a member of the *Project Administrators group* or the *Project Collection Administrators group* to create project notifications.

In addition to following a package directly from the *Feeds* page, you can also [manage your personal notifications](../../organizations/notifications/manage-your-personal-notifications.md) and create alerts for a specific package or group of packages from the *Notification Settings* page.

1. Sign in to your Azure DevOps organization.

1. Select the :::image type="icon" source="../../media/icons/user-settings-gear.png" border="false":::  **User settings** icon in the top right corner next to your profile picture, then select **Notifications**.

1. Select **New subscription**, then select **Artifacts**. Select the **A package is changed** template, then select **Next**.

    :::image type="content" source="../media/personal-notifications-artifacts.png" alt-text="A screenshot displaying how to create a new notification subscription.":::

1. Add a **Description**, then select an email address for the notifications. By default, your preferred email address is used. You can also add filters to only receive notifications when specific criteria are met. In the example below, two clauses have been added: a notification is triggered when the the feed is *Fabrikam_Feed*, **and** the type of change is *Delete*.

    :::image type="content" source="../media/filter-notifications.png" alt-text="A screenshot displaying how to configure a notification subscription and add filters.":::

1. Select **Finish** when you're done.

## Related content

- [Share packages with package badges](../package-badges.md)

- [Package sizes and count limits](../reference/limits.md)

- [Manage team, group, and global notifications](../../organizations/notifications/manage-team-group-global-organization-notifications.md)
