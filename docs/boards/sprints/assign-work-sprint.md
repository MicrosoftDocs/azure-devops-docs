---
title: "Tutorial: Assign Backlog Items to a Sprint"
titleSuffix: Azure Boards
description: Learn how to assign work to a sprint or iteration by using Agile processes and tools in Azure Boards.
ms.custom: boards-sprints
ms.service: azure-devops-boards
ms.assetid: 
ms.author: chcomley
author: chcomley
ms.topic: tutorial
monikerRange: '<= azure-devops'
ms.date: 07/31/2025
#customer intent: As a team member, I want to learn how to create a sprint from backlog items in Azure Boards.
---

# 1. Assign backlog items to a sprint in Azure Boards
 
[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)] 

In this tutorial, you plan a sprint by assigning work items from your backlog to that sprint. Each sprint corresponds to a time-boxed interval that supports your team's ability to work using Agile processes and tools. Your product owner works with your team to identify those stories or backlog items to complete in the sprint.
	
In this article, you learn how to:

> [!div class="checklist"]
> - Open your product backlog
> - Assign backlog items to a sprint
> - Use multi-select to bulk update work items

## Prerequisites

[!INCLUDE [temp](../includes/prerequisites.md)]

## Plan a sprint

The first step in planning your sprint is to assign work from your backlog to a sprint. Your team builds the sprint backlog during the sprint planning meeting, typically held on the first day of the sprint. 

Your project comes with several predefined sprints. You can add more sprints from your backlog as needed. Or, change the dates of the predefined sprints. Sprints are referred to as *iterations*. See [About areas and iterations](../../organizations/settings/about-areas-iterations.md). 

Here's an example of a sprint plan that consists of backlog items and the tasks required to complete each item. By setting team capacity and estimating tasks, the team can see when the team or a team member is at, under, or over capacity.

::: moniker range="<=azure-devops"

:::image type="content" source="media/assign-items-sprint/assign-intro.png" alt-text="Screenshot shows Sprint planning in a Backlog with work details." lightbox="media/assign-items-sprint/assign-intro.png":::
::: moniker-end

Planning meetings typically consist of two parts. In the first part, the team and product owner identify the 
backlog items that the team feels it can commit to completing in the sprint, based on experience with previous sprints. These items get added to the sprint backlog. 

In the second part, your team determines how it develops and tests each item. They then define and estimate the tasks required to complete each item. Finally, your team commits to implementing some or all of the items based on these estimates. 

Sprint planning doesn't need to be challenging. It can be fun and a time for the entire Scrum team to build camaraderie by working together to answer the question of *What can we commit to?* For examples and strategies to keep your sprint planning focused and effective, check out the [What is Scrum?](/devops/plan/what-is-scrum).

When you complete your sprint plan, your sprint backlog should contain all the information your team needs to successfully complete work within the time allotted without having to rush at the end.

## Open your team's product backlog

Your sprint backlogs are one of three classes of backlogs available to you. For an overview of the features supported on each backlog and the two types of boards, see [About teams and Agile tools](../backlogs/backlogs-overview.md). 

For a beginner's guide to planning and tracking work, see [Get started with Agile tools](../../organizations/settings/about-teams-and-settings.md).  

::: moniker range="<=azure-devops"

From your web browser, open your product backlog. 

1. Select your project, choose **Boards** > **Backlogs**, and then select the team.

	:::image type="content" source="../sprints/media/assign-items-sprint/open-work-backlogs-agile.png" alt-text="Screenshot shows the Backlogs option selected for a selected team.":::

    To select another backlog, open the selector and then choose a different team or select the **View Backlog directory** option. Or, enter a keyword to filter the list of team backlogs for the project.

	:::image type="content" source="../sprints/media/assign-items-sprint/backlog-team-selector-s155.png" alt-text="Screenshot shows the menu to select a different team."::: 

	> [!TIP]    
	> Choose the :::image type="icon" source="../../media/icons/icon-favorite-star.png"::: star icon to favorite a team backlog. Favorited artifacts (:::image type="icon" source="../../media/icons/icon-favorited.png"::: favorited icon) appear at the top of the team selector list.

1. Select **Stories** (for Agile), **Issues** (for Basic), **Backlog items** (for Scrum), or **Requirements** (for CMMI) as the backlog level.

	:::image type="content" source="../sprints/media/assign-items-sprint/select-product-backlog-agile.png" alt-text="Screenshot shows the Stories option with its suboptions, including Features and Stories." lightbox="../sprints/media/assign-items-sprint/select-product-backlog-agile.png"::: 

1. (Optional) To choose which columns should display and in what order, choose the  :::image type="icon" source="../../media/icons/actions-icon.png"::: actions icon and select **Column options**. For more information, see [Change column options](../backlogs/set-column-options.md).

	:::image type="content" source="../sprints/media/assign-items-sprint/open-column-options.png" alt-text="Screenshot shows the Column Options button." lightbox="../sprints/media/assign-items-sprint/open-column-options.png":::

::: moniker-end  

<a id="drag-drop"></a>

## Assign work from your backlog to a sprint 
   
Before you start planning your sprint, [Create and manage your backlog](../backlogs/create-your-backlog.md). 

Also, you need to [set the start and end dates for your sprint](define-sprints.md#quick-start-schedule). 

You can assign work items to a sprint through drag-and-drop from the product backlog to the sprint. 

::: moniker range="<=azure-devops"

1. The next step is to open the Planning pane. Choose the :::image type="icon" source="../../media/icons/view-options-icon.png" border="false"::: view options icon and select **Planning**. While you're at it, make sure **Parents** and **Forecasting** are off. You can set **In Progress items** to on or off.

	:::image type="content" source="media/define-sprints/view-options-planning-menu.png" alt-text="Screenshot shows the View options menu where you can select Planning.":::

	The set of sprints selected for your team appears. If you don't see any sprints listed, you can add sprints or select existing sprints for your team's use. To learn how, see [Manage sprint timelines](define-sprints.md).

1. You can drag and drop items from the **Backlog** onto a sprint.

	> [!NOTE]   
	> The **Planning** pane only shows the current sprint and the next 10 future sprints in the list, even if more exist for the team. Only a team administrator or member of the **Project Administrators** group can [select iterations for a team](../../organizations/settings/set-iteration-paths-sprints.md).

	:::image type="content" source="media/define-sprints/drag-drop-backlog-items-to-sprint.png" alt-text="Screenshot show how to drag a work item from the backlog to a spring." lightbox="media/define-sprints/drag-drop-backlog-items-to-sprint.png":::

1. Select one or more items from the backlog and drag them to the sprint you're planning. This action updates the Iteration Path of the backlog items and any of its child tasks to the sprint you selected.

1. Check the level of effort displayed in the sprint window. As you assign backlog items to a sprint, the sprint window updates with a running tally of the number of backlog items and tasks and the **Planned Effort**. 

	:::image type="content" source="media/assign-items-sprint/sprint-window-effort.png" alt-text="Screenshot show the content of a sprint, with the Planning Effort and the backlog items":::   

	*Planned Effort* provides a sum of all *Story Points* or *Effort* defined for backlog items assigned to the sprint. This sum represents your initial guess at the amount of work your team completes in the sprint. Next, define tasks, estimate that work, and use your team's capacity to make sure it fits in the sprint.

::: moniker-end

<a id="bulk-modify">  </a>

## Use the multi-select feature to modify items in bulk

Multi-select of work items on the product and sprint backlogs works in the same way as multi-select works within query results.

With multi-select, you can complete several actions on several work items at once, such as: 

- Move to a sprint
- Change the backlog priority  
- Assign to a team member 
- Change one or more field values
- Add links
- [Map items or change the parent an item is linked to](../backlogs/organize-backlog.md#mapping)

To select several items in a sequence, hold down the shift key. To select several nonsequential items, use the Ctrl key. Then, you can either drag the selected items to a new position within the backlog, to a different sprint, or select an option from the context (:::image type="icon" source="../media/icons/context_menu.png":::) or action (:::image type="icon" source="../media/icons/actions-icon.png":::) menu of one of the items. 

For more information, see [Bulk modify work items](../backlogs/bulk-modify-work-items.md). 

## Next step

After you define your sprint plan, your team's ready to begin work on the sprint tasks.

> [!div class="nextstepaction"]
> [2. Add tasks](add-tasks.md)

## Related content

To add or rename the sprints your team uses, see [Define iteration paths (sprints) and configure team iterations](../../organizations/settings/set-iteration-paths-sprints.md).  

If your backlog doesn't show the work items you expect, see [Create and manage your backlog](../backlogs/create-your-backlog.md). 
