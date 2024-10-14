---
title: Set the team sprint capacity in Azure Boards
titleSuffix: Azure Boards 
description: In this tutorial, determine team capacity, adjust work to fit team capacity, and set capacity for a sprint in Azure Boards.
ms.service: azure-devops-boards
ms.custom: boards-sprints
ms.assetid: 
ms.author: chcomley
author: chcomley
ms.topic: tutorial
monikerRange: '<= azure-devops'
ms.date: 10/14/2024
#customer intent: As a team member, I want to understand how to set capacity for a sprint and how to use capacity to track progress durning a sprint.
---

# 3. Determine and set sprint capacity in Azure Boards

<a id="set-capacity">  </a>

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)] 

<a id="set-capacity">  </a>

While velocity correlates to how your team estimates requirements, *capacity* correlates to actual task time. Time is calculated in either hours or days. Capacity takes into consideration the variation in work hours by team members. It also considers holidays, vacation days, and nonworking days.

Because days off and time available for each team member might vary from sprint to sprint, set capacity for each sprint. The capacity tool helps you make sure your team isn't overcommitted or undercommitted for the sprint. As you work day-to-day, you see if your team is on track.

In this article, learn how to do the following tasks.

> [!div class="checklist"]
> - Set team capacity for a sprint
> - Copy capacity from the previous sprint to the current sprint  
> - Track capacity when performing multiple activities  
> - Add or remove user accounts from capacity planning for a sprint  
> - Track capacity when working on more than one team  

To set up sprints yet for your team, see [Manage sprint timelines](define-sprints.md).

## Prerequisites

- Connect to a project. If you don't have a project yet, [create one](../../organizations/projects/create-project.md).
- You must be a member of the **Contributors** or **Project Administrators** security group in your project. To get added, see [Add users to a project or team](../../organizations/security/add-users-team-project.md).  
- To view or set capacity, you must have **Basic** access or higher. Users with **Stakeholder** access can't view or set capacity. For more information, see [Stakeholder access quick reference](../../organizations/security/stakeholder-access.md).
- To set capacity, you must be a member of the team. For more information, see [Add users to a project or team](../../organizations/security/add-users-team-project.md#add-users-to-a-team).

<a id="customize-activity-list">  </a> 

## About the Activity or Discipline pick-list items

::: moniker range="azure-devops"

The values displayed for **Activity** (Agile, Basic, or Scrum) or **Discipline** (Capability Maturity Model Integration (CMMI)) reflect a union of all values defined for the [Activity or Discipline](../queries/query-numeric.md#fields-used-to-estimate-and-track-work) fields in all projects within the organization.

To change the **Activity** or **Discipline** menu selections, see [Add and manage fields](../../organizations/settings/work/customize-process-field.md).

::: moniker-end

::: moniker range="< azure-devops"

The values displayed for **Activity** (Agile, Basic, or Scrum) or **Discipline** (Capability Maturity Model Integration (CMMI)) reflect a union of all values defined for the [Activity or Discipline](../queries/query-numeric.md#fields-used-to-estimate-and-track-work) fields in all projects within the project collection. Or, if your project is customized, with the field assigned to [`type="Activity" within the ProcessConfiguration file`](../../reference/xml/process-configuration-xml-element.md#assign-agile-tool-fields).

To change the **Activity** or **Discipline** menu selections, see [Add or modify a field, customize a picklist](../../reference/add-modify-field.md).

::: moniker-end

## Capacity per day entries

Most teams specify capacity in hours. You can also specify it in days or any other units your team chooses. For example, 0.5 days would correspond to 4 hours for a typical 8 hour day. Choose the same unit your team uses to estimate and track their time. For example, the entries they make to the **Original Estimate** or **Remaining Work** fields. For more information, see [Fields used to estimate and track work](../queries/query-numeric.md#fields-used-to-estimate-and-track-work).

## Open a sprint backlog for a team

::: moniker range=">= azure-devops-2019"

1. From your web browser, open your product backlog. Check that you selected the right project. Select **Boards** > **Sprints**, select the correct team from the team selector menu, and choose **Capacity**.

   :::image type="content" source="media/capacity/open-capacity-agile.png" alt-text="Screenshot showing Open Sprints for a team.":::

   To choose another team, open the selector and select a different team or choose the **Browse all sprints** option. You can enter a keyword in the search box to filter the list of team backlogs for the project.

   :::image type="content" source="media/add-tasks/team-selector-sprints-agile.png" alt-text="Screenshot of Choose another team.":::

1. To choose a different sprint than the one shown, open the sprint selector and choose the sprint you want.

   :::image type="content" source="media/add-tasks/select-specific-sprint-agile.png" alt-text="Screenshot of Choose another sprint.":::

   The system lists only those sprints that are selected for the current team focus. If you don't see the sprints you want listed, then choose **New Sprint** from the menu, and then choose **Select existing iteration**. For more information, see [Define iteration (sprint) paths](../../organizations/settings/set-iteration-paths-sprints.md).

::: moniker-end

<a id="set-team-capacity">  </a> 

## Set capacity for the team and team members

From the **Capacity** page, you can add team members, enter the team time off, and set capacity and days off for each team member.  

::: moniker range=">= azure-devops-2019"

1. If you don't see your team members listed, add them. Choose the :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: action icon and select **Add all team members**. For this feature to work, [team members must be added to the team](../../organizations/settings/add-teams.md#add-team-members).  

   :::image type="content" source="media/capacity/add-team-members.png" alt-text="Screenshot of Capacity page, Add team members.":::

   The **Add all team members** action retrieves a maximum of 100 team members. If you have more team members to add, you can add them one-by-one by choosing **Add user**.

1. If you need to add other contributors to your project, choose the :::image type="icon" source="../../media/icons/blue-add-icon.png" border="false"::: **Add user**.  

1. Set team member time off. For the entire team days off, choose the **0 days** link as shown.  

   :::image type="content" source="media/capacity/team-members-added-set-team-days-off.png" alt-text="Screenshot of setting time off.":::

   In the **Days off for** dialog box, select the start and end days during the sprint for the team member or team days off.

   > [!TIP]
   > Your sprint planning and tracking tools automatically consider days off when calculating capacity and sprint burndown. You only have to indicate planned days off for the team. For more information, see [Set capacity for the team and team members](../../boards/sprints/set-capacity.md#set-capacity-for-the-team-and-team-members).

1. Set the **Activity/Discipline** and **Capacity** per day for each team member. If you track capacity simply by team member, you can leave the Activity or Discipline selection unassigned.

   For example, Christie Church's capacity is 6 hours/day for design work.

   :::image type="content" source="media/capacity/set-team-capacity-agile.png" alt-text="Screenshot of Set team capacity.":::

::: moniker-end

<a id="copy-capacity">  </a>

## Copy capacity planning from the previous sprint 

By copying the capacity from the previous sprint, you save time. With the basics defined, all you have to do is adjust the capacity based on individual and team days off and capacity allocation per activity.

Only the capacity-per-day value and activity value are copied over. Individual and team days off remain unset. The copy operation always copies the latest updates made to the previous sprint. So you can repeat the copy operation if you made changes to the previous sprint that you want to copy to the latest sprint.

::: moniker range=">= azure-devops-2019"

:::image type="content" source="media/capacity/copy-capacity-from-previous-sprint-vert.png" alt-text="Screenshot of Copy capacity.":::

::: moniker-end

<a id="add-remove-users">  </a>

## Remove a user from capacity

To remove a user, choose the option from the users :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: action menu. This action doesn't remove the user from the team.

::: moniker range=">= azure-devops-2019"

:::image type="content" source="media/capacity/remove-user-agile.png" alt-text="Screenshot of Copy capacity Remove user from capacity list.":::

::: moniker-end

## Review capacity charts

As you define tasks and estimate the work, capacity charts start to fill in for each team member. Capacity bars track the remaining work against the capacity for each team member and the entire team.  

You also see a roll-up of the remaining work required to complete each requirement or bug.  

::: moniker range=">= azure-devops-2019"

:::image type="content" source="media/capacity/work-details.png" alt-text="Screenshot of work details.":::

::: moniker-end

From this view, you can see which individuals are at or near capacity. Teams can determine if work needs to be moved out of the sprint or to reassign tasks.  

::: moniker range=">= azure-devops-2019"

> [!TIP]  
> Define tasks that take a day or less to complete. This helps mitigate the risks that come from poor estimates.
>
> Also, don't divide tasks into subtasks. If you do divide a task into subtasks, specify **Remaining Work** only for the subtasks, as the system rolls up summary values to the parent task.

::: moniker-end

<a id="track-multiple-activities">  </a>

## Track capacity when completing multiple activities

Because individual team members have different sets of skills and duties, you can track their activity and capacity for each activity and for each sprint.

Here, Jamal divides time between Deployment and Development.

:::image type="content" source="media/capacity/add-activity-to-capacity-planning.png" alt-text="Screenshot of Add activity to capacity tracking for an individual.":::

<a id="track-capacity-per-team">  </a>

## Track capacity when working on more than one team

If you work on more than one team, specify your sprint capacity for each team. For example, both Christie and Raisa split their time between the Web and Phone teams. As such, give 3 hours a day to the Web team, and 3 hours a day to the Phone team.  

:::image type="content" source="media/capacity/set-capacity-web-team.png" alt-text="Screenshot of Allocate capacity for team Web.":::

:::image type="content" source="media/capacity/set-capacity-phone-team.png" alt-text="Screenshot of Allocate capacity for team Phone.":::

If your name isn't listed in the capacity view, you need to be added as a team member.

## Next step

> [!div class="nextstepaction"]
> [4. Adjust work](adjust-work.md)

## Related articles

- [Configure and monitor sprint burndown](../../report/dashboards/configure-sprint-burndown.md)
- [View and configure team velocity](../../report/dashboards/team-velocity.md)
- [Forecast your product backlog](../sprints/forecast.md)
- [Manage and configure team tools](../../organizations/settings/manage-teams.md)
