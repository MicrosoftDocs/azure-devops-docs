---
title: Change time zone
titleSuffix: Azure DevOps Services
ms.custom: 
description: Learn how to change the time zone for your organization or user profile.
ms.subservice: azure-devops-organizations
ms.assetid: 
ms.topic: conceptual
ms.author: chcomley
author: chcomley
ms.date: 10/22/2024
monikerRange: 'azure-devops'
---

# Change time zone

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

You can change the time zone for your organization or user profile in Azure DevOps to ensure that timestamps on work items, builds, and other activities reflect your local time. This setting helps maintain consistency and clarity across your team's activities, especially if team members are distributed across different time zones. Adjusting the time zone can be done through the organization settings or your user profile settings.

Azure DevOps offers two time zone settings:

* **Azure DevOps organization time zone**: This is the primary time zone setting. It affects all iteration dates, builds, release schedules, and other dependencies. Changing the organization time zone will impact all related schedules and timelines.
* **Azure DevOps user profile time zone**: This setting is used only for the user interface (UI) to provide a personalized experience. It displays timestamps based on the time zone configured for each specific user.

For example, if your organization time zone is set to EST and your user profile time zone is set to PST, all date and time fields will display in PST for you. For more information, see [Time zone settings and usage](../settings/timezone-settings-usage.md).

## Prerequisites

[!INCLUDE [prerequisites-pca-only](../../includes/prerequisites-pca-only.md)]

## Change your organization time zone

To change your organization time zone, do the following steps:

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select :::image type="icon" source="../../media/icons/gear-icon.png" border="false"::: **Organization settings**.

   :::image type="content" source="../../media/settings/open-admin-settings-vert.png" alt-text="Screenshot showing a gear icon and Organization settings emphasized.":::

3. Select **Overview**, and then select the time zone from the dropdown menu.

   :::image type="content" source="media/change-time-zone/organization-time-zone-settings.png" alt-text="Screenshot showing Overview tab and Time zone dropdown menu emphasized.":::

4. Select **Save**.

Your organization's time zone is updated.

## Change user profile time zone

To change your user profile time zone, do the following steps:

#### [Preview page](#tab/preview-page) 

1. From your home page, select :::image type="icon" source="../../media/icons/user-settings-gear.png" border="false"::: **User settings** > **Time and Locale**.

   :::image type="content" source="media/change-time-zone/user-settings-time-locale.png" alt-text="Screenshot showing User settings icon and Time and Locale emphasized.":::

2. Update your preferred language, date pattern, time pattern, and time zone. When you're done, select **Save**.

   :::image type="content" source="media/change-time-zone/edit-time-locale.png" alt-text="Screenshot showing Time and Locale dialog and Save button emphasized.":::

#### [Current page](#tab/current-page) 

1. From your home page, open **User profile** > **My profile**.

   :::image type="content" source="../settings/media/open-profile-user-settings.png" alt-text="Screenshot showing user profile settings screen.":::

2. Select **Edit profile**.

   :::image type="content" source="media/change-time-zone/select-edit-profile.png" alt-text="Screenshot showing Edit profile button emphasized.":::
---

Your user profile time zone is updated.

## Related articles

- [Learn about time zone settings and usage](../settings/timezone-settings-usage.md)
- [Set user preferences](../settings/set-your-preferences.md)
