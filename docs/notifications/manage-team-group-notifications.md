---
title: Manage notifications for a team or group
titleSuffix: Azure DevOps
description: Get notified when changes occur to source code, git, work items, and builds in Azure DevOps Services & Team Foundation Server  
ms.technology: devops-collab
ms.assetid: 6edc44d0-2729-46f5-8108-c8a5160a6a7a
ms.reviewer: wismythe
ms.author: chcomley
author: chcomley
ms.topic: conceptual
ms.date: 01/23/2020
monikerRange: '>= tfs-2013'
---

# Manage notifications for a team or group

[!INCLUDE [version-all](../includes/version-all.md)]

As changes occur to work items, code reviews, pull requests, source control files, and builds, your team or group can be notified via email. For example, when a high priority work item is assigned to your team's area path, an email can be sent to the team.

[!INCLUDE [note-earlier-tfs-version](includes/note-earlier-tfs-version.md)]

[!INCLUDE [note-smtp-server](includes/note-smtp-server.md)]

::: moniker range=">= tfs-2017"

## Create a custom email subscription

A subscription lets you control what your team should be notified about and how the team receives those notifications.
::: moniker-end



::: moniker range="azure-devops"

1. Open the Notifications page under team settings: `https://dev.azure.com/{organization}/{project}/_admin/_notifications?view=contents`

   ![Navigate to team notifications page](media/nav-team-notifications-hub-newnav.png)  

2. Select **New subscription**. If you're not a team administrator, [get added as one](../organizations/settings/add-team-administrator.md). You need to be a team, project, or project collection administrator to create team alerts.

    ![New subscription](media/new-subscription-newnav.png) 

3. Select the type of activity you want your team to be notified of.

	![Select event category and template](media/new-sub-page-preview.png)

4. Provide a description to help you identify the subscription later.

    ![Provide a description.](media/new-sub-description.png)

5. Choose which team members should receive a notification:

    ![Select role](media/new-sub-team-delivery-by-role.png)

   You can choose one of the following delivery options:
   * **Team members by role**: only certain team members associated with the event are notified. For example, for work item changes, you might only want the current assignee of the work item to receive a notification.
   * **Team preference**: use the team's default delivery preference. Learn how to [manage delivery settings below.](#manage)
   * **Custom email address**: send an email to a specified email address.
   * **All team members**: send an individual email to each member of the team.

   For certain activities and when **Team members by role** is selected, you can choose to have the user that initiated the activity receive a notification. This is controlled by the **Skip initiator** checkbox. By default, this box is checked meaning the user that initiates the change is not notified about it.

6. Choose whether you want to receive notifications about activity in all projects or only a specific project.

    ![Select scope](media/new-sub-scope.png)

7. Optionally configure additional filter criteria.

    ![Configure additional filter criteria.](media/new-sub-filter-conditions.png)

8. Select **Finish** to save the new subscription.

::: moniker-end  


::: moniker range=">= azure-devops-2019 < azure-devops"

1. Open the Notifications page under team settings: `https://dev.azure.com/{organization}/{project}/_admin/_notifications?view=contents`

   ![Navigate to team notifications page](media/nav-team-notifications-hub-newnav.png)  

2. Select **New subscription**. If you're not a team administrator, [get added as one](../organizations/settings/add-team-administrator.md). You need to be a team, project, or project collection administrator to create team alerts.

    ![New subscription](media/new-subscription-newnav.png) 

3. Select the type of activity you want your team to be notified of.

	![Select event category and template](media/new-sub-page1.png)

4. Provide a description to help you identify the subscription later.

    ![Provide a description.](media/new-sub-description.png)

5. Choose which team members should receive a notification:

    ![Select role](media/new-sub-team-delivery-by-role.png)

   You can choose one of the following delivery options:
   * **Team members by role**: only certain team members associated with the event are notified. For example, for work item changes, you might only want the current assignee of the work item to receive a notification.
   * **Team preference**: use the team's default delivery preference. Learn how to [manage delivery settings below.](#manage)
   * **Custom email address**: send an email to a specified email address.
   * **All team members**: send an individual email to each member of the team.

   For certain activities and when **Team members by role** is selected, you can choose to have the user that initiated the activity receive a notification. This is controlled by the **Skip initiator** checkbox. By default, this box is checked meaning the user that initiates the change is not notified about it.

6. Choose whether you want to receive notifications about activity in all projects or only a specific project.

    ![Select scope](media/new-sub-scope.png)

7. Optionally configure additional filter criteria.

    ![Configure additional filter criteria.](media/new-sub-filter-conditions.png)

8. Select **Finish** to save the new subscription.

::: moniker-end  

::: moniker range=">= tfs-2017 <= tfs-2018" 

1. Open the Notifications page under team settings: `https://dev.azure.com/{organization}/{project}/_admin/_notifications?view=contents`

    > [!div class="mx-imgBorder"] 
    >![Navigate to team notifications page](media/nav-team-notifications-hub.png) 

2. Select **New subscription**. If you're not a team administrator, [get added as one](../organizations/settings/add-team-administrator.md). You need to be a team, project, or project collection administrator to create team alerts.

   ![New subscription](media/new-subscription.png)

3. Select the type of activity you want your team to be notified of.

    ![Select event category and template](media/new-sub-page1.png)

4. Provide a description to help you identify the subscription later.

    ![Provide a description.](media/new-sub-description.png)

5. Choose which team members should receive a notification:

    ![Select role](media/new-sub-team-delivery-by-role.png)

   You can choose one of the following delivery options:
   * **Team members by role**: only certain team members associated with the event are notified. For example, for work item changes, you might only want the current assignee of the work item to receive a notification.
   * **Team preference**: use the team's default delivery preference. Learn how to [manage delivery settings below.](#manage)
   * **Custom email address**: send an email to a specified email address.
   * **All team members**: send an individual email to each member of the team.

   For certain activities and when **Team members by role** is selected, you can choose to have the user that initiated the activity receive a notification. This is controlled by the **Skip initiator** checkbox. By default, this box is checked meaning the user that initiates the change is not notified about it.

6. Choose whether you want to receive notifications about activity in all projects or only a specific project.

    ![Select scope](media/new-sub-scope.png)

7. Optionally configure additional filter criteria.

    ![Configure additional filter criteria.](media/new-sub-filter-conditions.png)

8. Select **Finish** to save the new subscription.

::: moniker-end  


<a name="manage" />

::: moniker range=">= tfs-2017"  

## Manage team delivery settings

Choose the default method for your team to receive notifications by updating the **team delivery settings**.

1. Open the Notifications page under team settings: `https://dev.azure.com/{organization}/{project}/_admin/_notifications?view=contents`

   ![Navigate to team notifications page](media/nav-team-notifications-hub-newnav.png)

2. Choose **Delivery settings**:

   ![Delivery settings](media/delivery-settings-newnav.png)

3. Choose which option best fits your team's needs:  

    ![Delivery settings options](media/delivery-settings-options.png)

Your team delivery settings are updated for notifications.

::: moniker-end

::: moniker range=">= tfs-2017"  

## Manage group delivery settings

Manage your group notifications by updating the group's **Delivery settings**.

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).
2. Select ![gear icon](../media/icons/gear-icon.png) **Organization settings**.
 
  ![Open Organization settings](../media/settings/open-admin-settings-vert.png)

3. Select **Global notifications** > **Subscribers**, enter and find your group, and then select **Delivery settings**.

   ![Group notification settings](media/group-notification-settings.png) 

4. Choose which option best fits your group's needs, and then select **Save**.  

   ![Delivery settings options](media/group-delivery-settings.png)

Your group delivery settings are updated for notifications.

::: moniker-end


<a id="team-alerts"></a>


::: moniker range="<= tfs-2015"

## Set alerts for your team

1. If you're not a team administrator, [get added as one](../organizations/settings/add-team-administrator.md). You need to be a team, project, or project collection administrator to create team alerts. 

2. Open team alerts from Manage TFS Alerts.

   ![Open team alerts](media/team/ALM_AN_ManageTeamAlerts.png)

3. Expand the team and open Select New Alert Template. 

	![Work Item Alerts link on the Alerts admin page](media/team/ALM_AN_TeamNewAlerts.png)

4. Choose an alert type. 

	![Choose an alert type for the team](media/team/ALM_AN_TeamAlertTypes.png)

5. Notice how the subscriber is set to the team context. Alerts are sent to each team member based on their preferred email address, which they set through their profile.
	
	![Subscriber set to team context](media/team/ALM_AN_TeamSelector.png)

   > [!TIP]
   > For the team context, the alert query interprets the <strong>@Me</strong>  variable as anyone who is a member of the team.

You can set filters for as many as 20 different alert types, specify the email addresses for yourself and other team members, and select the delivery format. Also, you can set team alerts to keep all team members notified of important changes. 

## Administer alerts for a project

To administer alerts for a project, you must be a member of the Project Collection Administrator or Team Foundation Administrator groups. To get added, see [Add an administrator](../organizations/security/set-project-collection-level-permissions.md). If you're not a member of these groups, you won't see the options available for administering alerts.

As an administrator, you can view, create, edit, and delete alerts for team members and teams. 

### View alerts set for a project 

* From the web admin page for a project, open the Alerts tab and expand All alerts. 

	![Expand All Alerts](media/administer/ALM_AN_Administer.png)

### Find alerts set for a team member or team

* Choose the name of the team member from the drop down list, or type the name in the search box. 

	![Choose the team member whose alerts you want to edit](media/administer/ALM_AN_TeamMember.png)

	![Alerts listed for selected team member](media/administer/ALM_AN_Result.png)

### Create, edit, or delete an alert

1. To create an alert for a team member, first find the alerts defined for that subscriber as described in the previous step. Then, create an alert in the same way that a team member creates alerts. 

	![Create an alert for a team member](media/administer/ALM_AN_AlertsForMember.png)

	To create an alert for a team, first find the alerts assigned to that team, and then create an alert in the same way. The team should appear in the Subscriber field. 

2. To edit or delete an alert, open it from the short cut menu.

	![Open or delete an alert for a team member](media/administer/ALM_AN_Shortcut.png)

::: moniker-end

## Related articles

* [Manage personal notification settings](manage-your-personal-notifications.md)