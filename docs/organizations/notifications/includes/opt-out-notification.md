---
ms.subservice: azure-devops-notifications
ms.manager: mijacobs
ms.author: chcomley
author: chcomley
ms.topic: include
ms.date: 06/22/2023
---

## Unsubscribe or opt out of a team or out-of-box (OOB) notification subscription

You can opt out of receiving notifications for specific team notification subscriptions.

::: moniker range="azure-devops"

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select :::image type="icon" source="../../../media/icons/user-settings-gear.png" border="false":::  **User settings**, and then select **Notifications** from the resulting list.

   :::image type="content" source="../media/personal-notifications-preview.png" alt-text="Screenshot of personal notifications, preview page.":::

3. To unsubscribe from any notification, slide the state **On/Off** indicator to the *Off* position.

::: moniker-end  

::: moniker range=" < azure-devops"

To unsubscribe from any notification, slide the state **On/Off** indicator to the *Off* position. For example, here we turn off the "Build completes" notification subscription.

:::image type="content" source="../media/unsubscribe-from-build-completes.png" alt-text="Screenshot of unsubscribe from Build completes notification subscription.":::

::: moniker-end

> [!NOTE]  
> Whether you're an administrator or not, toggling for a shared team notification subscription in your settings only affects your notifications, not those of other team members.

## Disable work item notifications for a project

To override organization settings and disable all work item notifications for a project in Azure DevOps, do the following steps:

1. Sign in to your project (`https://dev.azure.com/{Your_Organization/Your_Project}`).
2. Select **Project settings** > **Notifications**.
3. Highlight the Work notification and select :::image type="icon" source="../../../media/icons/gear_icon.png" border="false"::: **Delivery settings**.
4. Choose **Do not deliver** and **Save**.
