---
title: Manage Personal Notification Settings
titleSuffix: Azure DevOps
description: Set up and manage personal notifications in Azure DevOps and receive messages when changes occur to source code, git, work items, and builds.
ms.subservice: azure-devops-notifications
ms.assetid: 644687b3-e30e-46b0-8d3e-3d4a4e34d13a
ms.custom: cross-project
ms.topic: how-to
ms.author: chcomley
author: chcomley
ms.date: 05/13/2025
monikerRange: '<= azure-devops'
#customer intent: As a developer, I want to manage my personal notifications in Azure DevOps, so I can receive messages when changes occur to source code, git, work items, and builds.
---

# Manage your personal notifications

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

There are many ways you can manage your personal notifications in Azure DevOps:

- View your notifications
- Set notifications only for yourself
- View and edit all notification subscriptions
- Add a custom notification subscription
- Unsubscribe or opt out of a team or project notification subscription

You receive personal notifications as email messages when changes occur to builds, code, pipelines, work, artifacts, extensions, releases, and more. 

For information about team and project-level notifications, see [Team and project-level notifications](about-notifications.md#team-and-project-level-notifications) and [Manage team or group notifications](manage-team-group-global-organization-notifications.md).

[!INCLUDE [note-smtp-server](includes/note-smtp-server.md)]

## Prerequisites

[!INCLUDE [prerequisites-project-member-only](../../includes/prerequisites-project-member-only.md)]

## View your personal notifications

The following table lists examples of events for which you might receive personal notification email. For more information, see a full representation in [About notifications](about-notifications.md#team-and-project-level-notifications).

| Category | Notification triggers |
|----------|-----------------------|
| **Work item** | - You're assigned a work item <br> - You're unassigned from a work item <br> - Comments are added/changed on a work item to which you're assigned |
| **Code reviews** | - A code review to which you're assigned changes <br> - A code review to which you're assigned completes |
| **Pull request** | - You're added or removed as a reviewer on a pull request <br> - A pull request to which you're assigned fails to build <br> - Comments are added/changed on a pull request to which you're assigned |
| **Code under source control** | - A code file is added to a project under version or source control <br> - A commit is pushed to a code file under version or source control |
| **Build** | - A build succeeds <br> - A build fails |

Follow these steps to view your personal notifications:

::: moniker range="azure-devops"

1. Sign in to your organization (`https://dev.azure.com/<organization>`).

1. Select **User settings** :::image type="icon" source="../../media/icons/user-settings-gear.png":::, and then select **Notifications**:

   :::image type="content" source="media/personal-notifications-preview.png" alt-text="Screenshot that shows how to select the User settings, Notifications option in Azure DevOps.":::

   Your personal **Notifications** page opens:

   :::image type="content" source="media/unsubscribe-personal-notifications-preview.png" alt-text="Screenshot showing personal notification subscriptions in Azure DevOps." lightbox="media/unsubscribe-personal-notifications-preview.png":::

::: moniker-end
::: moniker range="< azure-devops"

1. Sign in to your organization (`https://dev.azure.com/<organization>`).

1. Open **User settings**, and then select **Notification settings**:

   :::image type="content" source="media/nav-personal-notifications-hub-newnav.png" alt-text="Screenshot that shows how to select the User settings, Notifications option in earlier versions of Azure DevOps.":::

   Your personal **Notifications** page opens:

   :::image type="content" source="media/unsubscribe-personal-notifications.png" alt-text="Screenshot showing personal notification subscriptions in earlier versions of Azure DevOps." lightbox="media/unsubscribe-personal-notifications.png":::

::: moniker-end

### Team administrators and recipients

As a team administrator, you can set up a notification subscription that's only for yourself. However, you can ensure that other team members receive specific notifications in the subscription. For each notification setting, you can identify the team recipients to receive the email.

## Add custom notification subscription

Custom personal notification subscriptions let you identify precise criteria about events for which you want to receive notifications. You can use custom notification subscriptions to receive messages about any event that occurs in Azure DevOps.

Keep in mind that custom notification subscriptions aren't the same as default notification subscriptions. A default notification sends email only to users or groups directly associated with an event. Custom notifications enable you to define the set of message recipients.

1. From your **Notifications** page, select **New subscription**:

   ::: moniker range=" azure-devops"

   :::image type="content" source="media/manage-personal-notifications-new-subscription-preview.png" alt-text="Screenshot that shows how to select the New subscription option selected in Azure DevOps.":::

   ::: moniker-end  
   ::: moniker range="<azure-devops"

   :::image type="content" source="media/manage-personal-notifications-new-subscription-newnav.png" border="false" alt-text="Screenshot that shows how to select the New subscription option in earlier versions of Azure DevOps."

   ::: moniker-end  

1. Select the **Category** and the **Template** type to use in the new subscription, and then select **Next**. For a list of supported templates, see [Default and supported notifications](oob-built-in-notifications.md).

   The following example shows a subscription to receive notifications when a pull request is created within a specific project:

   ::: moniker range=" azure-devops"

   :::image type="content" source="media/manage-personal-notifications-new-subscription-dialog-preview.png" alt-text="Screenshot that shows how to select the category and template type for a new notification subscription in Azure DevOps.":::

   ::: moniker-end  
   ::: moniker range="<azure-devops"

   :::image type="content" source="media/manage-personal-notifications-new-subscription-dialog.png" alt-text="Screenshot that shows how to select the category and template type for a new notification subscription in earlier versions of Azure DevOps.":::

   ::: moniker-end  

1. Configure your specific details for the new notification subscription:

   - Modify the description to help you identify the notification subscription later.
   - Provide the email address for delivery of the notifications. By default, your preferred contact email address is used.
   - Include zero or more fields to further specify the event criteria.

   ::: moniker range=" azure-devops"

   :::image type="content" source="media/manage-personal-notifications-complete-pull-request-subscription-preview.png" alt-text="Screenshot that shows how to configure the details for a new notification subscription, including the contact email address and other field criteria.":::

   ::: moniker-end  
   ::: moniker range="<azure-devops"

   :::image type="content" source="media/manage-personal-notifications-complete-pull-request-subscription.png" alt-text="Screenshot that shows how to configure the details for a new notification subscription, including the email address and other field criteria.":::

   ::: moniker-end  

   > [!NOTE]
   > The fields available for filtering event criteria differ depending on the category and template you select. For more information about event types, see [Supported event types](oob-supported-event-types.md).

1. Select **Finish**. The new notification subscription appears in the list under the category you selected:

   ::: moniker range=" azure-devops"

   :::image type="content" source="media/manage-personal-notifications-subscription-added-preview.png" alt-text="Screenshot that shows the new subscription in the list of personal notification subscriptions in Azure DevOps.":::

   ::: moniker-end  
   ::: moniker range="<azure-devops"

   :::image type="content" source="media/manage-personal-notifications-subscription-added.png" alt-text="Screenshot that shows the new subscription in the list of personal notification subscriptions in earlier versions of Azure DevOps.":::

   ::: moniker-end  

[!INCLUDE [opt-out-notification](includes/opt-out-notification.md)]

## Related content

- [Set your preferences](../../organizations/settings/set-your-preferences.md)
- [Follow a specific work item](../../boards/work-items/follow-work-items.md)  
- [Change your preferred email address](change-email-address.md)