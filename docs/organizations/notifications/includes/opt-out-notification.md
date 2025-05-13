---
ms.subservice: azure-devops-notifications
ms.manager: mijacobs
ms.author: chcomley
author: chcomley
ms.topic: include
ms.date: 05/13/2025
---

## Unsubscribe (opt out) from team or OOB notification subscription

You can unsubscribe or opt out of receiving notifications for specific team notification subscriptions, including out-of-the-box (OOB) subscriptions:

1. Sign in to your organization (`https://dev.azure.com/<organization>`).

1. Select **User settings** :::image type="icon" source="../../../media/icons/user-settings-gear.png":::, and then select **Notifications**.

   :::image type="content" source="../media/personal-notifications-preview.png" alt-text="Screenshot that shows how to select the User settings, Notifications option in Azure DevOps.":::

1. In your list of **Notification** subscriptions, locate the notification you want to disable.

1. To unsubscribe from the notification, move the **State** toggle to the _Off_ position, which changes the toggle color from blue to gray. 

The following example shows the user unsubscribed from the "Build completes" notification subscription:

:::image type="content" source="../media/unsubscribe-from-build-completes.png" alt-text="Screenshot that shows how to unsubscribe from the Build completes notification subscription by moving the State toggle to the Off position.":::

> [!NOTE]  
> Whether you're an administrator or a regular team member, when you change the **State** value for a shared team notification subscription in your personal settings, the change affects only your personal notifications. The change doesn't affect the setting value of the same shared notification for other team members.

## Disable work item notifications for project

To override organization settings and disable all work item notifications for a project in Azure DevOps, complete the following steps:

1. Sign in to your project (`https://dev.azure.com/<organization>/<project>`).

1. Select **Project settings** > **Notifications**.

1. In the **Notification** list, select the work notification you want to disable, which highlights the row.

1. Select **User settings** :::image type="icon" source="../../../media/icons/gear_icon.png"::: and then select **Delivery settings**.

1. Select **Do not deliver**, and then select **Save**.