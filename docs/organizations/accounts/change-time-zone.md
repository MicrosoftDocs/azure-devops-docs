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

Learn how to change the time zone for your organization or user profile in Azure DevOps.

The following time zones are available in Azure DevOps:

* **Azure DevOps organization time zone** - the main time zone setting. This setting is where all your iteration dates, builds, and release schedules depend upon, and so on. Changing your organization time zone affects its dependencies.
* **Azure DevOps user profile time zone** - only used for the user interface (UI). The user profile time zone setting is used for a more personalized experience. It also displays timestamps for when users browse Azure DevOps using the time zone configured for that specific user.

If your organization time zone is EST, and user profile is PST, all date and time fields display in PST time zone. To learn more, see [Time zone settings and usage](../settings/timezone-settings-usage.md).

## Change your organization time zone

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

   :::image type="content" source="../../media/settings/open-admin-settings-vert.png" alt-text="Screenshot showing highlighted Organization settings button.":::

3. Go to **Overview**, and then select the time zone from the dropdown menu.

   :::image type="content" source="media/change-time-zone/organization-time-zone-settings.png" alt-text="Screenshot showing time zone in Overview tab or Organization settings.":::

4. Select **Save**.

## Change user profile time zone

1. From your home page, select :::image type="icon" source="../../media/icons/user-settings-gear.png" border="false"::: **User settings** > **Time and Locale**.

   :::image type="content" source="media/change-time-zone/user-settings-time-locale.png" alt-text="Screenshot showing select User settings icon and then Time and Locale.":::

2. You can update your preferred language, date pattern, time pattern, and time zone. When you're done, select **Save**.

   :::image type="content" source="media/change-time-zone/edit-time-locale.png" alt-text="Screenshot showing time and locale entry.":::

## Related articles

- [Time zone settings and usage](../settings/timezone-settings-usage.md)
- [Set user preferences](../settings/set-your-preferences.md)
