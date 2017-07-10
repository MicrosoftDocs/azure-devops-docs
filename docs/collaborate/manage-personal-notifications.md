---
title: Manage your personal notification settings | Team Services & TFS
description: Get notified when changes occur to source code, git, work items, and builds when using Visual Studio Team Services (VSTS) and Team Foundation Server (TFS)
ms.technology: collaborate
ms.prod: vs-devops-alm
ms.assetid: 644687b3-e30e-46b0-8d3e-3d4a4e34d13a
ms.manager: douge
ms.author: wismythe
ms.topic: get-started-article  
ms.date: 02/14/2017 
---

# Manage your notifications

<b>Team Services | TFS 2017.1 | [Previous versions](../work/track/alerts-and-notifications.md)</b> 

>[!NOTE]  
>**Feature availability**: This topic applies to Team Services and to TFS 2017.1 and later versions. If you work from an on-premises TFS 2017 or ealier versions, see [Set alerts, get notified when changes occur](../work/track/alerts-and-notifications.md). For on-premises TFS, [you must configure an SMTP sever](../setup-admin/tfs/admin/setup-customize-alerts.md) in order for team members to see the Notifications option from their account menu and to  receive notifications. 
 
Notifications help you and your team stay informed about activity in your Team Services projects. With notifications, you are notified when changes occur to work items, code reviews, pull requests, source control files, and builds, you can be notified via email. For example, you can get notified whenever a bug that you opened is resolved or a work item is assigned to you. 

To manage your notification settings, select the Notifications option under the profile menu:
	
![Access personal notifications settings via the profile menu](_img/personal-profile-menu.png)

This view shows all subscriptions that you have created or that have been created by an administrator. Subscriptions let you control what you are notified about. A subscription can be just for you, or if you are a team admin, can be shared by everyone in the team. Learn more about [team subscriptions](./manage-team-notifications.md).

![Personal notification settings](_img/personal-notifications.png)

From this view, you can create, edit, disable, or delete custom subscriptions that you have created for yourself. You can also see shared team subscriptions.

## Create a subscription

1. From your Notifications, click **New**.
	
3. Select the type of activity you want to be notified about.
	
	![Select event category and template](_img/new-sub-page1.png)

4. Provide a description to help you identify the subscription later. Also choose an email address for notifications to be delivered to. By default, your preferred email address is used.

	![Select event category and template](_img/new-sub-description-and-delivery.png)

5. Choose whether you want to receive notifications about activity in all projects or only a specific project.

	![Select scope](_img/new-sub-scope.png)

6. Optionally configure additional filter criteria.

	![Select scope](_img/new-sub-filter-conditions.png)

7. Click **Finish** to save the new subscription.

## Opt out of a team subscription

You can choose to not receive notifications for certain team subscriptions by opt'ing out of the subscription.

1. Open your notifications settings from the profile menu.
	
	![Access personal notifications settings via the profile menu](_img/personal-profile-menu.png)

2. Find the team subscription in the shared subscriptions section.

	![Shared subscriptions list](_img/shared-sub.png)

3. Click the toggle to opt out of receiving notifications for this subscription.

    ![Opt'ed out of a shared sub](_img/shared-sub-opt-out.png)

>[!NOTE]  
>Whether you are an administrator or not, toggling a shared team subscription from your notification settings only impacts you and not other team members.

## Limitations

* Support for creating new SOAP and plain text email subscriptions is no longer provided in the UI.

## Related topics

- [Follow a specific work item](../collaborate/follow-work-items.md)  
- [Manage notifications for a team](./manage-team-notifications.md)  
- [Account preferences, include setting a preferred email address](../setup-admin/account-preferences.md)  
