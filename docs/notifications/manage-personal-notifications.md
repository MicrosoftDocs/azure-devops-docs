---
title: Manage personal notification settings
titleSuffix: VSTS & TFS
description: Get notified when changes occur to source code, git, work items, and builds when using Visual Studio Team Services (VSTS) and Team Foundation Server (TFS)
ms.technology: devops-collab
ms.prod: devops
ms.assetid: 644687b3-e30e-46b0-8d3e-3d4a4e34d13a
ms.manager: douge
ms.author: elbatk
author: elbatk
ms.topic: conceptual
ms.date: 09/01/2017
monikerRange: '>= tfs-2017'
---


# Manage your notifications

<b>VSTS | TFS 2018 | TFS 2017.1 | [Previous versions](../work/track/alerts-and-notifications.md)</b> 

>[!NOTE]  
>**Feature availability**: This topic applies to VSTS and to TFS 2017.1 and later versions. If you work from an on-premises TFS 2017 or ealier versions, see [Set alerts, get notified when changes occur](../work/track/alerts-and-notifications.md). For on-premises TFS, [you must configure an SMTP sever](../tfs-server/admin/setup-customize-alerts.md) in order for team members to see the Notifications option from their account menu and to  receive notifications. 
 
As changes occur to your code base, builds, work items, and other operations, you can receive email notifications. For example, you can set an alert to be notified whenever a bug that you opened is resolved or a work item is assigned to you. 

Use this topic to learn how to:

> [!div class="checklist"]   
> * View your notifications    
> * Add a custom subscription      
> * Unsubscribe or opt out of a team or project subscription   


## View your personal notifications 

From the web portal, click the icon with your initials or picture icon, and select **Notification settings** from the drop-down menu. 

<img src="_img/unsubscribe-open-notification-settings.png" alt="Open personal notification settings" style="border: 2px solid #C3C3C3;" />

This view shows all subscriptions that you have created or that have been created by an administrator. Subscriptions let you control what you are notified about. Those notifications you're subscribed to are indicated with the the State as **On**. 

<img src="_img/unsubscribe-personal-notifications.png" alt="Personal notification subscriptions" style="border: 2px solid #C3C3C3;" />

A subscription can be just for you, or if you are a team admin, can be shared by everyone in the team. 

## Add a custom subscription

With custom personal subscriptions, you can define precise criteria for the events you want to receive notifications for. In contrast to a default subscription which will only notify the users or groups directly associated with an event, a custom subscription can notify you about any event. 

1. From your Notifications page, click **New subscription**. 

	<img src="_img/manage-personal-notifications-new-subscription.png" alt="Open the new subscription dialog" style="border: 2px solid #C3C3C3;" />

2. Choose the category and template you want to use. For a list of supported templates, see [Default and supported notifications](oob-built-in-notifications.md).

	Here we choose to get notified when a pull request is created within a specific team project, Fabrikam Fiber.   

	<img src="_img/manage-personal-notifications-new-subscription-dialog.png" alt="New subscription dialog" style="border: 2px solid #C3C3C3;" />

3. Modify the description to help you identify the subscription later. Also choose an email address for notifications to be delivered to. By default, your preferred email address is used. optionally, include one or more fields to further specify the event criteria. 

	<img src="_img/manage-personal-notifications-complete-pull-request-subscription.png" alt="Updated subscription dialog with field criteria" style="border: 2px solid #C3C3C3;" />

	> [!NOTE]   
	> The fields available for filtering event criteria differ depending on the category and template you select.   

4. Click **Finish** when done. The subscription now appears in the list under the category you selected. 

	<img src="_img/manage-personal-notifications-subscription-added.png" alt="New subscription added" style="border: 2px solid #C3C3C3;" />


## Unsubscribe or opt out of a team or OOB subscription

You can choose to not receive notifications for certain team subscriptions by opt'ing out of the subscription.

To unsubscribe from any notification, even one that you've defined, slide the State **On/Off** indicator to the Off position. 
 
For example, here we turn off the Build completes subscription.   

<img src="_img/unsubscribe-from-build-completes.png" alt="Unsubscribe from Build completes subscription" style="border: 2px solid #C3C3C3;" />

>[!NOTE]  
>Whether you are an administrator or not, toggling a shared team subscription from your notification settings only impacts you and not other team members.



<!--- TFS 2017.1 settings 
To manage your notification settings, select the Notifications option under the profile menu:
	
![Access personal notifications settings via the profile menu](../collaborate/_img/personal-profile-menu.png)

Learn more about [team subscriptions](../collaborate/manage-team-notifications.md).

![Personal notification settings](../collaborate/_img/personal-notifications.png)

From this view, you can create, edit, disable, or delete custom subscriptions that you have created for yourself. You can also see shared team subscriptions.

## Create a subscription

1. From your Notifications, click **New**.
	
3. Select the type of activity you want to be notified about.
	
	![Select event category and template](../collaborate/_img/new-sub-page1.png)

4. Provide a description to help you identify the subscription later. Also choose an email address for notifications to be delivered to. By default, your preferred email address is used.

	![Select event category and template](../collaborate/_img/new-sub-description-and-delivery.png)

5. Choose whether you want to receive notifications about activity in all projects or only a specific project.

	![Select scope](../collaborate/_img/new-sub-scope.png)

6. Optionally configure additional filter criteria.

	![Select scope](../collaborate/_img/new-sub-filter-conditions.png)

7. Click **Finish** to save the new subscription.

## Opt out of a team subscription

You can choose to not receive notifications for certain team subscriptions by opt'ing out of the subscription.

1. Open your notifications settings from the profile menu.
	
	![Access personal notifications settings via the profile menu](../collaborate/_img/personal-profile-menu.png)

2. Find the team subscription in the shared subscriptions section.

	![Shared subscriptions list](../collaborate/_img/shared-sub.png)

3. Click the toggle to opt out of receiving notifications for this subscription.

    ![Opt'ed out of a shared sub](../collaborate/_img/shared-sub-opt-out.png)

-->

## Related notes

- [Default and supported notifications](oob-built-in-notifications.md)
- [Follow a specific work item](../collaborate/follow-work-items.md)  
- [Manage notifications for a team](../collaborate/manage-team-notifications.md)  
- [Change your preferred email address](change-email-address.md)  

### Limitations

* The user interface no longer support creating plain text email subscriptions.