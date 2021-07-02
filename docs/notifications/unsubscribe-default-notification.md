---
title: View subscribed notifications
titleSuffix: Azure DevOps
description: View your notifications and unsubscribe from a default or built-in notification in Azure DevOps.
ms.technology: devops-collab
ms.custom: quarterly-update
ms.topic: conceptual
ms.author: chcomley
author: chcomley
ms.date: 12/07/2020
monikerRange: '>= tfs-2017'
---

# View your subscriptions, opt-out as needed

[!INCLUDE [version-vsts-tfs-2017-on](../includes/version-tfs-2017-through-vsts.md)]

If you want to stop receiving select email notifications, you can do so by unsubscribing from them. For a description of each default subscription, see [Default notifications](oob-built-in-notifications.md).  

Start by opening your personal notification settings from your home page. Select :::image type="icon" source="../media/icons/user-settings-gear.png" border="false"::: **Settings**, and then select **Profile**. If you don't have a project yet, create one in [Azure DevOps](../organizations/accounts/set-up-vs.md).

## View subscriptions

::: moniker range=">= azure-devops-2019"

1. From your home page, select :::image type="icon" source="../media/icons/user-settings-gear.png" border="false"::: **Settings**, and then select **Profile**.

   ![Open Azure DevOps profile](../media/open-user-settings-profile-preview.png)

   The notifications you're subscribed to are indicated with the the blue toggle under State. 

   ![Notifications turned On](media/notifications-turned-on.png)

   The following image indicates a subscription is a default or out-of-the-box (OOB) subscription:

   ![OOB notification](media/oob-notification.png)

   You can't modify an OOB subscription, but you can view its definition from its context menu.

2. To unsubscribe, slide the toggle to the *Off* position.

    In the following image the "Build completes" subscription is turned off.

    ![Notification is turned off](media/notification-turned-off.png)

::: moniker-end

::: moniker range="<= tfs-2018" 

1. From the web portal, select your initials or picture, and select **Notification settings** from the drop-down menu.

    <img src="media/unsubscribe-open-notification-settings.png" alt="Open personal notification settings" style="border: 2px solid #C3C3C3;" />

    The notifications you're subscribed to are indicated with the State as **On**.  

    <img src="media/unsubscribe-personal-notifications.png" alt="Personal notification subscriptions" style="border: 2px solid #C3C3C3;" />

    The following image indicates a subscription is a default or out-of-the-box (OOB) subscription:

   ![OOB notification](media/oob-notification.png)

    You can't modify an OOB subscription, but you can view its definition from its context menu.

2. To unsubscribe, slide the state **On/Off** indicator to the *Off* position.

    In the following image the "Build completes" subscription is turned off.

    <img src="media/unsubscribe-from-build-completes.png" alt="Unsubscribe from Build completes subscription" style="border: 2px solid #C3C3C3;" />

::: moniker-end

