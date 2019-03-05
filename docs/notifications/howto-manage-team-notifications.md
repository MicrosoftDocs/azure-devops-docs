---
title: Manage notifications for a team
titleSuffix: Azure DevOps
description: Get notified when changes occur to source code, git, work items, and builds in Azure DevOps Services & Team Foundation Server  
ms.technology: devops-collab
ms.prod: devops
ms.assetid: 6edc44d0-2729-46f5-8108-c8a5160a6a7a
ms.manager: jillfra
ms.reviewer: wismythe
ms.author: chcomley
author: chcomley
ms.topic: conceptual
ms.date: 02/19/2019  
monikerRange: '>= tfs-2017'
---

# Manage notifications for a team

[!INCLUDE [version-vsts-tfs-2017-on](../boards/_shared/version-vsts-tfs-2017-on.md)]

> [!NOTE]  
> This topic applies to Azure DevOps Services, TFS 2017 Update 1, and later versions. If you work from an on-premises TFS 2017 or earlier versions, see [Set alerts, get notified when changes occur](../boards/queries/alerts-and-notifications.md). For on-premises TFS, [you must configure an SMTP server](/azure/devops/server/admin/setup-customize-alerts) in order for team members to see the Notifications option from their organization menu and to receive notifications.

As changes occur to work items, code reviews, pull requests, source control files, and builds, your team can be notified via email. For example, when a high priority work item is assigned to your team's area path, an email can be sent to the team.

## Create a custom email subscription

A subscription lets you control what your team should be notified about and how the team receives those notifications.

1. Open the Notifications page under team settings: `https://dev.azure.com/{organization}/{project}/_admin/_notifications?view=contents`

    ::: moniker range=">= azure-devops-2019"  
   ![Navigate to team notifications page](_img/nav-team-notifications-hub-newnav.png)  
    ::: moniker-end

    ::: moniker range=">= tfs-2017 <= tfs-2018 || azure-devops"  
   ![Navigate to team notifications page](_img/nav-team-notifications-hub.png)  
	::: moniker-end

2. Select **New subscription**. If you're not a team administrator, [get added as one](../organizations/settings/add-team-administrator.md). You need to be a team, project, or project collection administrator to create team alerts.

    ::: moniker range=">= azure-devops-2019"  
    ![New subscription](_img/new-subscription-newnav.png)  
	::: moniker-end

    ::: moniker range=">= tfs-2017 <= tfs-2018 || azure-devops"  
   ![New subscription](_img/new-subscription.png)
	::: moniker-end

3. Select the type of activity you want your team to be notified of.

    ![Select event category and template](_img/new-sub-page1.png)

4. Provide a description to help you identify the subscription later.

    ![Select event category and template](_img/new-sub-description.png)

5. Choose which team members should receive a notification:

    ![Select role](_img/new-sub-team-delivery-by-role.png)

   You can choose one of the following delivery options:
   * **Team members by role**: only certain team members associated with the event are notified. For example, for work item changes, you might only want the current assignee of the work item to receive a notification.
   * **Team preference**: use the team's default delivery preference. Learn how to [manage delivery settings below.](#manage)
   * **Custom email address**: send an email to a specified email address.
   * **All team members**: send an individual email to each member of the team.

   For certain activities and when **Team members by role** is selected, you can choose to have the user that initiated the activity receive a notification. This is controlled by the **Skip initiator** checkbox. By default, this box is checked meaning the user that initiates the change is not notified about it.

6. Choose whether you want to receive notifications about activity in all projects or only a specific project.

    ![Select scope](_img/new-sub-scope.png)

7. Optionally configure additional filter criteria.

    ![Select scope](_img/new-sub-filter-conditions.png)

8. Select **Finish** to save the new subscription.

<a name="manage" />

## Manage team delivery settings

Choose the default method for your team to receive notifications by updating the **team delivery settings**.

1. Open the Notifications page under team settings: `https://dev.azure.com/{organization}/{project}/_admin/_notifications?view=contents`

   ![Navigate to team notifications page](_img/nav-team-notifications-hub-newnav.png)

2. Choose **Delivery settings**:

   ![Delivery settings](_img/delivery-settings-newnav.png)

3. Choose which option best fits your team's needs:  

    ![Delivery settings options](_img/delivery-settings-options.png)

## Related articles

* [Manage personal notification settings](howto-manage-personal-notifications.md)  