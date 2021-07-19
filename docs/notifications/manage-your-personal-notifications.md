---
title: Manage personal notification settings
titleSuffix: Azure DevOps
description: Get personally notified, when changes occur to source code, git, work items, and builds in Azure DevOps.
ms.technology: devops-collab
ms.assetid: 644687b3-e30e-46b0-8d3e-3d4a4e34d13a
ms.custom: contperf-fy22q1
ms.topic: how-to
ms.author: chcomley
author: chcomley
ms.date: 07/19/2021
monikerRange: '<= azure-devops'
---

# Manage your personal notifications

[!INCLUDE [version-all](../includes/version-all.md)]

You can manage your personal notifications in the following ways:

- View your notifications
- Set notifications just for yourself
- View and edit all notification subscriptions
- Add a custom notification subscription
- Unsubscribe or opt out of a team or project notification subscription

Personal notifications get sent to you in the form of an email as changes occur to builds, code, pipelines, work, artifacts, extensions, releases, and more.

For information about team and project-level notifications, see [Team and project-level notifications](about-notifications.md#team-and-project-level-notifications) and [Manage team or group notifications](manage-team-group-global-organization-notifications.md).

[!INCLUDE [note-earlier-tfs-version](includes/note-earlier-tfs-version.md)]

[!INCLUDE [note-smtp-server](includes/note-smtp-server.md)]

::: moniker range="azure-devops"

## Prerequisites

- Every user can manage their personal notifications
- See [about notifications](about-notifications.md)

## View your personal notifications

The following table shows notification event examples. For more information, see a full representation in [About notifications](about-notifications.md#team-and-project-level-notifications).

| Item                | Notification event examples |
|---------------------|---------------------------------------------------------|
| Work item           | assigned, unassigned, comments                          |
| Code reviews        | updated, completed                                      |
| Pull request        | added or removed reviewer, completion failure, comments |
| Source control file | created, updated                                        |
| Build               | completion success, completion failure                  |

To access the Preview features options, open your profile menu. The profile menu appears, as shown, based on whether the **New Account Manager** feature is enabled.
#### [New Account Manager enabled](#tab/new-account-enabled)

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

1. Select :::image type="icon" source="../media/icons/user-settings-gear.png" border="false":::  **User settings**, and then select **Notifications** from the resulting list.

   :::image type="content" source="media/personal-notifications-preview.png" alt-text="Preview page of personal notifications.":::

#### [New Account Manager not enabled](#tab/new-account-not-enabled)

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

1. Open your **User settings**, and then select **Notification settings** from the resulting list.

   ![Go to personal notifications, current page](media/nav-personal-notifications-hub-newnav.png)  

***

::: moniker-end  

::: moniker range=">= tfs-2017 < azure-devops"

> [!div class="mx-imgBorder"]
>![Go to the personal notifications page.](media/nav-personal-notifications-hub.png)
::: moniker-end

::: moniker range="< tfs-2017"  

## Set personal alerts

In this context, an *alert* is effectively the same as a *notification*.

1. Open **My alerts** from your profile menu. If you don't see this option, then  [configure an SMTP server to support TFS](/azure/devops/server/admin/setup-customize-alerts).

   ![Manage individual alerts from the web portal](media/set-alerts-from-profile-menu.png)

1. Enter one or more email addresses. Separate addresses with a semi-colon.

   ![Set email address for alerts](media/personal/ALM_AN_Email.png)  

1. Select the check box for each alert of interest. **My work items** and **My build** refer to work items and builds that you created.

   ![Manage TFS alerts](media/personal/ALM_AN_ManageAlerts.png)

   Alert templates reference a customizable query.

   The following alert types appear when your project is provisioned with Git for version control:  
   - A commit is pushed to this project
   - A pull request I've participated in is created or updated
   - A build quality changes

   > [!TIP]
   > When you clear an alert, you also clear all email addresses defined for the alert.  

   Open custom alerts for more options. Also, you can open a basic alert and modify its settings, such as change the email format from HTML to plain text or SOAP.

   ![Open custom alerts](media/personal/ALM_AN_CustomAlerts.png)

1. Define alert filters in the same way you define query filters.

   ![Fill out the custom alerts form](media/personal/ALM_AN_DefiningAlerts.png)

   For a list of available fields, see [Index of work item fields](../boards/work-items/guidance/work-item-field.md).

1. For even more options, select **Others...**, and then choose **Select New Alert Template**.

   ![Open all alert options](media/personal/ALM_AN_Options.png)

1. Choose an alert type from the several alert types listed, and then select **OK**.

   ![Choose an alert type from all options listed](media/personal/ALM_AN_Templates.png)

::: moniker-end  

::: moniker range=">= tfs-2017"

## View and edit all notification subscriptions

This view shows all notification subscriptions that you've created or that were created by an administrator. Notification subscriptions let you control what you get notified about. Subscribed notifications are indicated with the State as **On**.

::: moniker-end  

::: moniker range="azure-devops"

To access the Preview features options, open your profile menu. The profile menu appears, as shown, based on whether the **New Account Manager** feature is enabled.

#### [New Account Manager enabled](#tab/new-account-enabled) 

> [!div class="mx-imgBorder"]  
> ![Personal notification subscriptions, preview page.](media/unsubscribe-personal-notifications-preview.png)

#### [New Account Manager not enabled](#tab/new-account-not-enabled)

> [!div class="mx-imgBorder"]  
> ![Personal notification subscriptions, current page.](media/unsubscribe-personal-notifications-newnav.png)

***

::: moniker-end  

::: moniker range=">= tfs-2017 < azure-devops"

:::image type="content" source="media/unsubscribe-personal-notifications.png" alt-text="Screenshot of unsubscribe from notification subscriptions.":::

::: moniker-end

::: moniker range=">= tfs-2017"

A notification subscription can be just for you. Or, if you're a team administrator you can ensure that it's shared by everyone on the team.

::: moniker-end  

::: moniker range=">= tfs-2017"

## Add a custom notification subscription

With custom personal notification subscriptions, you can define precise criteria for the events that you want to receive notifications. A custom notification subscription can notify you about any event. Default notification subscriptions differ, as they only notify users or groups directly associated with an event.

::: moniker-end  

::: moniker range="azure-devops"

To access the Preview features options, open your profile menu. The profile menu appears, as shown, based on whether the **New Account Manager** feature is enabled.

#### [New Account Manager enabled](#tab/new-account-enabled)

1. From your **Notifications** page, select **New subscription**.

   ![Screenshot of New notification subscription selected.](media/manage-personal-notifications-new-subscription-preview.png)

1. Choose the category and template that you want to use, and then select **Next**. For a list of supported templates, see [Default and supported notifications](oob-built-in-notifications.md).

   Here we choose to get notified when a pull request is created within a specific project, Fabrikam Fiber.

   :::image type="content" source="media/manage-personal-notifications-new-subscription-dialog-preview.png" alt-text="Screenshot of new notification subscription-selected category and template.":::

1. Modify the description to help you identify the notification subscription later. Also, choose an email address for the notifications to be delivered to. By default, your preferred email address is used. Optionally, include one or more fields to further specify the event criteria. Select **Finish** when you're done.

   :::image type="content" source="media/manage-personal-notifications-complete-pull-request-subscription-preview.png" alt-text="Screenshot of updated notification subscription dialog with field criteria.":::

   > [!NOTE]
   > The fields available for filtering event criteria differ depending on the category and template that you select. For more information about event types, see [Supported event types](oob-supported-event-types.md).

   The new notification subscription appears in the list under the category that you selected.

   :::image type="content" source="media/manage-personal-notifications-subscription-added-preview.png" alt-text="Screenshot of confirmation of new subscription added.":::

#### [New Account Manager not enabled](#tab/new-account-not-enabled)

1. From your **Notifications** page, select **New subscription**.

   :::image type="content" source="media/manage-personal-notifications-new-subscription-newnav.png" alt-text="Screenshot of the personal new notification subscription dialog, current page.":::

1. Choose the category and template you want to use. For a list of supported templates, see [Default and supported notifications](oob-built-in-notifications.md).

   Here we choose to get notified when a pull request is created within a specific project, Fabrikam Fiber.

    :::image type="content" source="media/manage-personal-notifications-new-subscription-dialog.png" alt-text="Screenshot of personal notifications new notification subscription dialog.":::

1. Modify the description to help you identify the notification subscription later. Also, choose an email address for the notifications to be delivered to. By default, your preferred email address is used. Optionally, include one or more fields to further specify the event criteria.

   :::image type="content" source="media/manage-personal-notifications-complete-pull-request-subscription.png" alt-text="Screenshot of new notification subscription event criteria.":::

   > [!NOTE]
   > The fields available for filtering event criteria differ depending on the category and template that you select. For more information about event types, see [Supported event types](oob-supported-event-types.md).  

1. Select **Finish** when you're done. The notification subscription appears on the list under the category that you selected.

   :::image type="content" source="media/manage-personal-notifications-subscription-added.png" alt-text="Screenshot showing the notification subscription on the list under its category.":::

::: moniker-end  

***

::: moniker range=">= tfs-2017 <= tfs-2018"

   :::image type="content" source="media/manage-personal-notifications-new-subscription.png" alt-text="Screenshot of the new notification subscription.":::

1. Choose the category and template that you want to use. For a list of supported templates, see [Default and supported notifications](oob-built-in-notifications.md).

   Here we choose to get notified when a pull request is created within a specific project, Fabrikam Fiber.

   :::image type="content" source="media/manage-personal-notifications-new-subscription-dialog.png" alt-text="New notification subscription dialog.":::

1. Modify the description to help you identify the notification subscription later. Also, choose an email address for notifications to be delivered to. By default, your preferred email address is used. Optionally, include one or more fields to further specify the event criteria.

   :::image type="content" source="media/manage-personal-notifications-complete-pull-request-subscription.png" alt-text="Updated notification subscription dialog with field criteria.":::

   > [!NOTE]
   > The fields available for filtering event criteria differ depending on the category and template that you select.

1. Select **Finish** when you're done. The notification subscription appears in the list under the category that you selected.

   :::image type="content" source="media/manage-personal-notifications-subscription-added.png" alt-text="New subscription added.":::

::: moniker-end

[!INCLUDE [opt-out-notification](includes/opt-out-notification.md)]

## Next steps

> [!div class="nextstepaction"]
> [Use @ mentions in work items and pull requests](at-mentions.md)

## Related articles

- [Manage your personal notifications](manage-your-personal-notifications.md)
- [Set your preferences](../organizations/settings/set-your-preferences.md)
- [Default and supported notifications](oob-built-in-notifications.md)
- [Follow a specific work item](../boards/work-items/follow-work-items.md)  
- [Change your preferred email address](change-email-address.md)

### Limitations

The user interface no longer supports creating plain text email notification subscriptions.

<!--- TFS 2017 Update 1 settings 

To manage your notification settings, select the Notifications option under the profile menu:
	
![Access personal notifications settings via the profile menu](../project/wiki/media/personal-profile-menu.png)

Learn more about [team subscriptions](./manage-team-group-global-organization-notifications.md).

![Personal notification settings](../project/wiki/media/personal-notifications.png)

From this view, you can create, edit, disable, or delete custom subscriptions that you have created for yourself. You can also see shared team subscriptions.

## Create a subscription

1. From your Notifications, choose **New**.
	
3. Select the type of activity you want to be notified about.
	
	![Select event category and template](../project/wiki/media/new-sub-page1.png)

4. Provide a description to help you identify the subscription later. Also choose an email address for notifications to be delivered to. By default, your preferred email address is used.

	![Select event category and template](../project/wiki/media/new-sub-description-and-delivery.png)

5. Choose whether you want to receive notifications about activity in all projects or only a specific project.

	![Select scope](../project/wiki/media/new-sub-scope.png)

6. Optionally configure additional filter criteria.

	![Select scope](../project/wiki/media/new-sub-filter-conditions.png)

7. Select **Finish** to save the new subscription.

## Opt out of a team subscription

You can choose to not receive notifications for certain team subscriptions by opt'ing out of the subscription.

1. Open your notifications settings from the profile menu.
	
	![Access personal notifications settings via the profile menu](../project/wiki/media/personal-profile-menu.png)

2. Find the team subscription in the shared subscriptions section.

	![Shared subscriptions list](../project/wiki/media/shared-sub.png)

3. Move the toggle to opt out of receiving notifications for this subscription.

    ![Opt'ed out of a shared sub](../project/wiki/media/shared-sub-opt-out.png)

-->
