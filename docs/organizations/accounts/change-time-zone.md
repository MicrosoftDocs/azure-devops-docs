---
title: Change time zone
titleSuffix: Azure DevOps Services
ms.custom: 
description: Learn how to change the time zone for your organization or for user profile.
ms.subservice: azure-devops-organizations
ms.assetid: 
ms.topic: conceptual
ms.author: chcomley
author: chcomley
ms.date: 06/23/2023
monikerRange: 'azure-devops'
---

# Change time zone

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

You can change the time zone for your organization or user profile in Azure DevOps.

The following time zones are available in Azure DevOps:

* **Azure DevOps organization time zone** - the main time zone setting. This setting is where all your iteration dates, builds, and release schedules depend upon, and so on. Changing your organization time zone affects its dependencies.
* **Azure DevOps user profile time zone** - only used for the user interface (UI). The user profile time zone setting is used for a more personalized experience. It also displays timestamps for when users browse Azure DevOps using the time zone configured for that specific user.

If your organization time zone is EST, and user profile is PST, all date and time fields display in PST time zone. For more information, see [Time zone settings and usage](../settings/timezone-settings-usage.md).

[!INCLUDE [pca-prerequisite](includes/pca-prerequisite.md)]

## Change your organization time zone

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select :::image type="icon" source="../../media/icons/gear-icon.png" border="false"::: **Organization settings**.

   :::image type="content" source="../../media/settings/open-admin-settings-vert.png" alt-text="Screenshot showing a gear icon and Organization settings surrounded by red box.":::

3. Select **Overview**, and then select the time zone from the dropdown menu.

   :::image type="content" source="media/change-time-zone/organization-time-zone-settings.png" alt-text="Screenshot showing Overview tab and Time zone dropdown menu surrounded by red box.":::

4. Select **Save**.

Your organization's time zone is updated.

## Change user profile time zone

1. From your home page, select :::image type="icon" source="../../media/icons/user-settings-gear.png" border="false"::: **User settings** > **Time and Locale**.

   :::image type="content" source="media/change-time-zone/user-settings-time-locale.png" alt-text="Screenshot showing User settings icon and Time and Locale surrounded by a red box.":::

2. Update your preferred language, date pattern, time pattern, and time zone. When you're done, select **Save**.

   :::image type="content" source="media/change-time-zone/edit-time-locale.png" alt-text="Screenshot showing time and locale entry.":::

Your user profile time zone is updated.

## Related articles

- [Time zone settings and usage](../settings/timezone-settings-usage.md)
- [Set user preferences](../settings/set-your-preferences.md)
