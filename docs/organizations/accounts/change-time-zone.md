---
title: Change the time zone in Azure DevOps
titleSuffix: Azure DevOps Services
ms.custom: 
description: Learn how to change the time zone for your organization or for your user profile
ms.prod: devops
ms.technology: devops-accounts
ms.assetid: 
ms.topic: conceptual
ms.manager: mijacobs
ms.author: chcomley
author: chcomley
ms.date: 12/20/2019
monikerRange: 'azure-devops'
---

# Change the time zone in Azure DevOps

[!INCLUDE [version-vsts-only](../../_shared/version-vsts-only.md)]

In this article, learn how to change the time zone for your organization or your user profile.

The following time zones are available in Azure DevOps:

* **Azure DevOps organization time zone** - the main time zone setting. This setting is where all your iteration dates, builds, and release schedules depend upon, and so on. Changing your organization time zone affects its dependencies.
* **Azure DevOps user profile time zone** - only used for the user interface (UI). This setting is used for the UI to make your experience more personal and to display timestamps for when users browse Azure DevOps using the time zone configured for that specific user.

If your Azure DevOps organization time zone is set to EST, but your user profile time zone setting is set to PST, all date and time fields are displayed in PST time zone.

## Change your organization time zone

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select ![gear icon](../../_img/icons/gear-icon.png) **Organization settings**.

    ![Open Organization settings](../../_shared/_img/settings/open-admin-settings-vert.png)

3. Go to **Overview**, and then select the time zone from the dropdown menu.

    ![Select time zone in Overview tab or Organization settings](_img/change-time-zone/organization-time-zone-settings.png)

4. Select **Save**.

## Change your user profile time zone

::: moniker range="azure-devops"

> [!NOTE]   
> To enable the new user interface for the New account manager, see [Enable preview features](../../project/navigation/preview-features.md).

#### [Preview page](#tab/preview-page) 

1. From your home page, select the user settings icon ![user-settings-gear.png](../../_img/icons/user-settings-gear.png), and then select **Time and Locale**.

   ![Select Sser settings icon and then Time and Locale](_img/change-time-zone/user-settings-time-locale.png)

2. You can update your preferred language, date pattern, time pattern, and time zone. When you're done, select **Save**.

   ![Select Time and Locale](_img/change-time-zone/edit-time-locale.png)

#### [Current page](#tab/current-page) 

1. From your home page, select your user profile icon, and then select **My profile**.

    ![Open your user profile settings](../settings/_img/open-profile-user-settings.png)

2. Select **Edit profile**.

    ![Select Edit profile](_img/change-time-zone/select-edit-profile.png)

3. Select **Preferences**, set your user profile time zone, and then select **Save changes**.

    ![Select Edit profile to change user preference time zone](_img/change-time-zone/change-user-preferences-time-zone.png)

::: moniker-end

***
