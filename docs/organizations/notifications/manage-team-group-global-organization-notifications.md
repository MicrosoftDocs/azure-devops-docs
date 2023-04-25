---
title: Manage notifications for a team, project, organization or collection
titleSuffix: Azure DevOps 
description: Learn how to configure team, project, and organization/collection notifications for when changes occur to source code, git, work items, and builds in Azure DevOps.  
ms.subservice: azure-devops-notifications
ms.assetid: 6edc44d0-2729-46f5-8108-c8a5160a6a7a
ms.custom: contperf-fy21q2, cross-project
ms.author: chcomley
author: chcomley
ms.topic: how-to
ms.date: 04/24/2023
monikerRange: '<= azure-devops'
---

# Manage notifications for a team, project, or organization

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

You can manage email notifications at team, project, and organization levels when changes occur to work items, code reviews, pull requests, source control files, and builds.

For example, when a high priority work item is assigned to your team's area path, a notification email gets sent to the team. For more information, see [Notification types](about-notifications.md#notification-types).

## Prerequisites

To manage notifications, you must be an administrator for the level you want to manage:
- Team: You must be a **Team Administrator** to modify subscriptions for a team.
- Project: You must be a member of the **Project Administrators** group to create or modify subscriptions for a project.  
- Organization: You must be a member of the **Project Collection Administrators** group to create or modify subscriptions for an organization or collection.

If you're not an administrator, get added as one. For more information, see the following articles:
- [Add a team administrator](../../organizations/settings/add-team-administrator.md)
- [Change permissions at the project-level](../../organizations/security/change-project-level-permissions.md)
- [Change permissions at the organization or collection-level](../../organizations/security/change-organization-collection-level-permissions.md). 

[!INCLUDE [note-smtp-server](includes/note-smtp-server.md)]

## Create an email subscription

A subscription lets you control what your team is notified of and how the team receives those notifications. For more information, see [notification types](about-notifications.md#notification-types).

::: moniker range="azure-devops"

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).
2. Select **Project settings** > **Notifications**.

    :::image type="content" source="media/nav-team-notifications-hub-newnav.png" alt-text="Screenshot of Project settings and Notifications highlighted":::

3. Select **New subscription**. 

    ![Screenshot of New subscription highlighted.](media/new-subscription-newnav.png) 

4. Select the type of activity you want your team to be notified of.

	![Screenshot of select event category and template page.](media/new-sub-page-preview.png)

1. Provide a description to help you identify the subscription later.

    ![Screenshot of a description provided.](media/new-sub-description.png)

1. Choose which team members should receive a notification:

    ![Screenshot of Deliver to and Roles dropdown menus.](media/new-sub-team-delivery-by-role.png)

   Choose from one of the following delivery options:

     | **Delivery option**    | **Description**   | 
     | --------------------|-------------------|  
     | **Team members by role** | Only certain team members associated with the event are notified. For example, for work item changes, you might only want the current assignee of the work item to receive a notification. |  
     | **Team preference**      | Use the team's default delivery preference. For more information, see [Manage delivery settings](#manage).   |  
     | **Custom email address** | Send an email to a specified email address.    |  
     | **All team members**     | Send an individual email to each member of the team.        | 
     | **SOAP**  | Send email notifications to subscribers of SOAP service.     |

   For certain activities, when you select **Team members by role**, you can choose to have the user that initiated the activity receive a notification. This notification is controlled by the **Skip initiator** checkbox. By default, this box is checked, meaning the user that starts the change isn't notified about it.

   > [!TIP]
   > For **Team members by role**, each role is fairly self-explanatory. However, the following two roles may need some further explanation. 
   > 
   > **Changed reviewers** applies to any reviewer that's added or deleted, as a result of policies defined for the set of files. For example, a push to a pull request (PR) could introduce a change to File1.cs. If there’s a policy which says that Person A needs to review changes to File1.cs, they’d be in the Changed reviewers role for that iteration of the PR. 
   > 
   > The **Reset reviewers** role is related to the “reset votes” policy. For example, the repo has configured the policy, “Reset votes on new pushes”. Person B, who was required on the PR, has already approved this PR. Because of the reset votes policy, their vote has been reset. Thus, she’s in the Reset reviewers role for that iteration.

2. Choose whether you want to receive notifications about activity in all projects or only a specific project.

    ![Screenshot of selected scope.](media/new-sub-scope.png)

3. Optionally, configure more filter criteria.

    ![Screenshot of configuring additional filter criteria.](media/new-sub-filter-conditions.png)

4. Select **Finish** to save the new subscription.

::: moniker-end  

::: moniker range=">= azure-devops-2019 < azure-devops"

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).
1. Select **Project settings** > **Notifications**.

    :::image type="content" source="media/nav-team-notifications-hub-newnav.png" alt-text="Screenshot of Project settings and Notifications highlighted":::

2. Select **New subscription**.

    ![New subscription is highlighted.](media/new-subscription-newnav.png) 

3. Select the type of activity you want your team to be notified of.

	![Select event category and template.](media/new-sub-page1.png)

1. Provide a description to help you identify the subscription later.

    ![Provide a description.](media/new-sub-description.png)

1. Choose which team members should receive a notification:

    ![Select role.](media/new-sub-team-delivery-by-role.png)

   Choose from one of the following delivery options:

   | Delivery option          | Description                                                                                                                                                                                |
   |--------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
   | **Team members by role** | Only certain team members associated with the event are notified. For example, for work item changes, you might only want the current assignee of the work item to receive a notification. |
   | **Team preference**      | use the team's default delivery preference. For more information, see [Manage delivery settings](#manage).                                                                                 |
   | **Custom email address** | Send an email to a specified email address.                                                                                                                                                |
   | **All team members**     | Send an individual email to each member of the team.                                                                                                                                       |

    For certain activities, when you select **Team members by role**, you can choose to have the user that initiated the activity receive a notification. This notification is controlled by the **Skip initiator** checkbox. By default, this box is checked, meaning the user that starts the change isn't notified about it.

   > [!TIP]
   > For **Team members by role**, each role is fairly self-explanatory. However, the following two roles may need some further explanation. 
   > **Changed reviewers** applies to any reviewer that's added or deleted, as a result of policies defined for the set of files. For example, a push to a pull request (PR) could introduce a change to File1.cs. If there’s a policy which says that Person A needs to review changes to File1.cs, they’d be in the Changed reviewers role for that iteration of the PR. 
   > The **Reset reviewers** role is related to the “reset votes” policy. For example, the repo has configured the policy, “Reset votes on new pushes”. Person B, who was required on the PR, has already approved this PR. Because of the reset votes policy, their vote has been reset. Thus, she’s in the Reset reviewers role for that iteration.

1. Choose whether you want to receive notifications about activity in all projects or only a specific project.

    ![Select scope](media/new-sub-scope.png)

1. Optionally, configure more filter criteria.

    ![Configure additional filter criteria.](media/new-sub-filter-conditions.png)

1. Select **Finish** to save the new subscription.

::: moniker-end  

::: moniker range="tfs-2018" 

1. Open the **Notifications** page in **Team settings**: `https://dev.azure.com/{organization}/{project}/_admin/_notifications?view=contents`

    > [!div class="mx-imgBorder"] 
    >![Go to team notifications page](media/nav-team-notifications-hub.png) 

2. Select **New subscription**. 

   ![New subscription](media/new-subscription.png)

3. Select the type of activity you want your team to be notified of.

    ![Select event category and template](media/new-sub-page1.png)

4. Provide a description to help you identify the subscription later.

    ![Provide a description.](media/new-sub-description.png)

5. Choose which team members should receive a notification:

    ![Select role](media/new-sub-team-delivery-by-role.png)

   Choose from one of the following delivery options:

   |Deliver to  |Description  |
   |---------|---------|
   |**Members of Azure DevOps by role**    |  Only certain team members associated with the event are notified. For example, for work item changes, you might only want the current assignee of the work item to receive a notification.       |
   |**Team preference**   | use the team's default delivery preference. For more information, see [Manage delivery settings](#manage).        |
   |**Custom email address**    |  Send an email to a specified email address.       |
   |**Members of Azure DevOps**   |  Send an individual email to each member of the team.       |
   |**SOAP**    | Send to an email address.      |


    For certain activities, when you select **Team members by role**, you can choose to have the user that initiated the activity receive a notification. This notification is controlled by the **Skip initiator** checkbox. By default, this box is checked, meaning the user that starts the change isn't notified about it.

6. Choose whether you want to receive notifications about activity in all projects or only a specific project.

    ![Select scope](media/new-sub-scope.png)

7. Optionally, configure more filter criteria.

    ![Configure additional filter criteria.](media/new-sub-filter-conditions.png)

8. Select **Finish** to save the new subscription.

::: moniker-end  

<a name="manage" />

> [!TIP]
> If you don't want to receive a notification for an event that you initiated, you can turn on the option, *Skip initiator*. For more information, see [Exclude yourself from notification emails for events that you initiate](exclude-self-from-email.md).

## Manage global delivery settings

Global notifications apply to all **projects** defined for an organization or collection. 
Choose to allow or block delivery of emails for all subscriptions owned by a team or a group. It's a default setting, which applies only if the team or group hasn't explicitly set the option. For more information, see [Global notifications](about-notifications.md#global-notifications).

::: moniker range="azure-devops"

> [!TIP]
> We don't support organization-wide notifications. As an alternative, you can provide an email distribution list that goes to your entire organization. Also, you can generate a banner with the [**az devops banner command**](../../organizations/settings/manage-banners.md) that all users see when they sign in.

::: moniker-end

::: moniker range="azure-devops-2020"

> [!TIP]
> You can send an email to all collections in an application tier. See [Configure an SMTP server and customize email for alerts and feedback requests](/azure/devops/server/admin/setup-customize-alerts). Also, you can generate a banner with the [**az devops banner command**](../../organizations/settings/manage-banners.md) that all users see when they sign in.

::: moniker-end

::: moniker range="< azure-devops-2020"
> [!TIP]
> You can send an email to all collections in an application tier. See [Configure an SMTP server and customize email for alerts and feedback requests](/azure/devops/server/admin/setup-customize-alerts). 

::: moniker-end

::: moniker range="tfs-2018"

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).
2. Select ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.
 
   ![Open Organization settings](../../media/settings/open-admin-settings-vert.png)

3. Select **Global notifications** > **Subscribers**, enter and find your group, and then select **Delivery settings**.

   ![Group notification settings](media/group-notification-settings.png) 

4. Choose which option best fits your group's needs, and then select **Save**.  

   ![Delivery settings options for group.](media/group-delivery-settings.png)

Your group delivery settings are updated for notifications.

## Manage team and project delivery settings

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).
1. Select **Project settings** > **Notifications**.

    :::image type="content" source="media/nav-team-notifications-hub-newnav.png" alt-text="Screenshot of Project settings and Notifications highlighted.":::

2. Choose **Delivery settings**:

   ![Delivery settings](media/delivery-settings-newnav.png)

3. Choose which option best fits your team's needs:  

    ![Delivery settings options for team and project.](media/delivery-settings-options.png)

Your team delivery settings are updated for notifications.

::: moniker-end

[!INCLUDE [opt-out-notification](includes/opt-out-notification.md)]

## Related articles

- [Manage personal notification settings](manage-your-personal-notifications.md)
- [Set your preferences](../../organizations/settings/set-your-preferences.md)
- [Default and supported notifications](oob-built-in-notifications.md)
- [Follow a specific work item](../../boards/work-items/follow-work-items.md)  
- [Change your preferred email address](change-email-address.md)
