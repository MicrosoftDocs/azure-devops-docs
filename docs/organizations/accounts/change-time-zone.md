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
ms.date: 05/23/2022
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

    ![Screenshot showing highlighted Organization settings button.](../../media/settings/open-admin-settings-vert.png)

3. Go to **Overview**, and then select the time zone from the dropdown menu.

    ![Select time zone in Overview tab or Organization settings](media/change-time-zone/organization-time-zone-settings.png)

4. Select **Save**.

## Change user profile time zone

::: moniker range="azure-devops"

> [!NOTE]   
> To enable the new user interface for the New account manager, see [Enable preview features](../../project/navigation/preview-features.md).

#### [Preview page](#tab/preview-page) 

1. From your home page, select :::image type="icon" source="../../media/icons/user-settings-gear.png" border="false"::: **User settings**, and then select **Time and Locale**.

   ![Select User settings icon and then Time and Locale](media/change-time-zone/user-settings-time-locale.png)

2. You can update your preferred language, date pattern, time pattern, and time zone. When you're done, select **Save**.

   ![Select Time and Locale](media/change-time-zone/edit-time-locale.png)

#### [Current page](#tab/current-page) 

1. From your home page, open **User profile**, and then select **My profile**.

    ![Open user profile settings](../settings/media/open-profile-user-settings.png)

2. Select **Edit profile**.

    ![Select Edit profile](media/change-time-zone/select-edit-profile.png)

3. Select **Preferences**, set user profile time zone, and then select **Save changes**.

    ![Select Edit profile to change user preference time zone](media/change-time-zone/change-user-preferences-time-zone.png)

::: moniker-end

***

## Related articles

- [Time zone settings and usage](../settings/timezone-settings-usage.md)
- [Set user preferences](../settings/set-your-preferences.md)
