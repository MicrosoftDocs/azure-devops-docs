---
title: Assign backlog items to a sprint
titleSuffix: Azure Boards
description: Learn how to assign work to a sprint or iteration using Agile processes and tools in Azure Boards.
ms.custom: boards-sprints
ms.service: azure-devops-boards
ms.assetid: 
ms.author: chcomley
author: chcomley
ms.topic: tutorial
monikerRange: '<= azure-devops'
ms.date: 04/01/2022
---


# 1. Assign backlog items to a sprint in Azure Boards
 
[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)] 

The first step in planning your sprint is to assign work from your backlog to a sprint. Your team builds the sprint backlog during the sprint planning meeting, typically held on the first day of the sprint. Each sprint corresponds to a time-boxed interval that supports your team's ability to work using Agile processes and tools. During the planning meeting, your product owner works with your team to identify those stories or backlog items to complete in the sprint.  

> [!NOTE]   
> Your project comes with several predefined sprints. You can quickly add more sprints 
> from your backlog as needed. Or, change the dates of the predefined sprints. To learn more about sprints, also referred to as iterations, 
> see [About areas and iterations](../../organizations/settings/about-areas-iterations.md). 

Here's an example of a sprint plan that consists of backlog items and the tasks required to complete each item. By setting team capacity and estimating tasks, the team can see when the team or a team member is at, under, or over capacity.

::: moniker range=">= azure-devops-2019"

> [!div class="mx-imgBorder"]  
> ![Screenshot of Sprint planning.](media/assign-items-sprint/assign-intro.png)
::: moniker-end


::: moniker range="tfs-2018"

![Screenshot of Sprint planning, TFS 2018.](media/sp-intro.png) 

::: moniker-end
	
In this article you'll learn how to:  

> [!div class="checklist"]   
> * Open your product backlog 
> * Assign backlog items to a sprint
> * Use multi-select to bulk update work items

Planning meetings typically consist of two parts. In the first part, the team and product owner identify the 
backlog items that the team feels it can commit to completing in the sprint, based on experience with previous sprints. 
These items get added to the sprint backlog. In the second part, your team determines how it develops and tests each item. 
They then define and estimate the tasks required to complete each item. Finally, your team commits to implementing 
some or all of the items based on these estimates. 


> [!NOTE]    
> Sprint planning doesn't need to be challenging. It can be fun and a time for the entire Scrum team to build camaraderie by working together to answer the question of "What can we commit to?" For examples and strategies to keep your sprint planning focused and effective, check out the [What is Scrum?](/devops/plan/what-is-scrum).
>  
> When you've completed your sprint plan, your sprint backlog should contain all the information your team needs to successfully complete work within the time allotted without having to rush at the end. 

[!INCLUDE [temp](../includes/prerequisites.md)]


## Open your team's product backlog

> [!NOTE]  
> Your sprint backlogs are one of three classes of backlogs available to you. For an overview of the features supported on each backlog and the two types of boards, see [Backlogs, boards, and plans](../backlogs/backlogs-boards-plans.md?toc=/azure/devops/boards/sprints/toc.json). 
>
> For a beginner's guide to planning and tracking work, see [Get started with Agile tools](../get-started/what-is-azure-boards.md?toc=/azure/devops/boards/sprints/toc.json).  

::: moniker range=">= azure-devops-2020"  

From your web browser, open your product backlog. 

1. (1) Check that you've selected the right project, (2) choose **Boards>Backlogs**, and then (3) select the correct team from the team selector menu. 

	> [!div class="mx-imgBorder"]  
	> ![Screenshot for Open Work, Backlogs, for a team.](../sprints/media/assign-items-sprint/open-backlogs-backlog-s155-co.png)

    To select another backlog, open the selector and then choose a different team or select the **View Backlog directory** option. Or, enter a keyword in the search box to filter the list of team backlogs for the project.

	> [!div class="mx-imgBorder"]  
	> ![Screenshot , Choose another team navigation.](../sprints/media/assign-items-sprint/backlog-team-selector-s155.png) 

	> [!TIP]    
	> Choose the :::image type="icon" source="../../media/icons/icon-favorite-star.png" border="false"::: star icon to favorite a team backlog. Favorited artifacts (:::image type="icon" source="../../media/icons/icon-favorited.png" border="false"::: favorited icon) appear at the top of the team selector list. 

1. Check that you have selected **Stories** (for Agile), **Issues** (for Basic), **Backlog items** (for Scrum), or **Requirements** (for CMMI) as the backlog level. 

	> [!div class="mx-imgBorder"]  
	> ![Screenshot for choose product backlog level, Backlog items, Stories, or Requirements.](../sprints/media/assign-items-sprint//select-product-backlog-agile-s155.png) 

2. (Optional) To choose which columns should display and in what order, choose the  :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: actions icon and select **Column options**. For more information, see [Change column options](../backlogs/set-column-options.md). 

	> [!div class="mx-imgBorder"]  
	> ![Screenshot, Open Column Options.](../sprints/media/assign-items-sprint/open-column-options-s155.png) 

::: moniker-end  

::: moniker range="azure-devops-2019"  

1. From your web browser, open your product backlog. (1) Check that you've selected the right project, (2) choose **Boards>Backlogs**, and then (3) select the correct team from the team selector menu. 

	![Open Work, Backlogs, for a team](media/assign-items-sprint/open-work-backlogs-agile.png)

	To choose another team, open the selector and select a different team or choose the :::image type="icon" source="../../media/icons/home-icon.png" border="false"::: **Browse all team backlogs** option. Or, you can enter a keyword in the search box to filter the list of team backlogs for the project.

	> [!div class="mx-imgBorder"]  
	> ![Screenshot for Choose another team, Azure DevOps 2019.](media/assign-items-sprint/team-selector-backlogs-agile.png) 

	> [!TIP]    
	> Choose the :::image type="icon" source="../../media/icons/icon-favorite-star.png" border="false"::: star icon to favorite a team backlog. Favorited artifacts (:::image type="icon" source="../../media/icons/icon-favorited.png" border="false"::: favorited icon) appear at the top of the team selector list. 

1. Check that you have selected **Backlog items** (for Scrum), **Stories** (for Agile), or **Requirements** (for CMMI) as the backlog level. 

	> [!div class="mx-imgBorder"]  
	> ![Screenshot, Choose product backlog level, Backlog items, Stories, or Requirements, Azure DevOps 2019.](media/assign-items-sprint/select-product-backlog-agile.png) 

2. (Optional) To choose which columns should display and in what order, choose the  :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: actions icon and select **Column options**. You may want to add the Iteration Path to the set of columns that appear on your backlog. For more information, see [Change column options](../backlogs/set-column-options.md). 

	> [!div class="mx-imgBorder"]  
	> ![Screenshot for Open Column Options, Azure DevOps 2019.](media/assign-items-sprint/open-work-backlogs-column-options-agile.png) 

::: moniker-end  

::: moniker range="tfs-2018"  

1. From your web browser, open your team's product backlog. (1) Select the team from the project/team selector, choose (2) **Work**, (3) **Backlogs**, and then (4) the product backlog, which is **Backlog items** (for Scrum), **Stories** (for Agile), or **Requirements** (for CMMI).  

	> [!div class="mx-imgBorder"]  
	> ![Screenshot, Open the Boards>Backlogs page, TFS 2018.](media/assign-items-sprint/open-work-backlogs-standard.png)  

	To choose another team, open the project/team selector and select a different team or choose the **Browse** option.  

   > [!div class="mx-imgBorder"]  
   > ![Choose another team](media/assign-items-sprint/team-selector-backlogs-standard.png)  

	The set of sprints selected for your team appears in the left pane. If you don't see any sprints listed, you can add sprints or select existing sprints for your team's use. To learn how, see [Define sprints](define-sprints.md). 

1. (Optional) To choose which columns should display and in what order, choose **Column options**. You may want to add the Iteration Path to the set of columns that appear on your backlog. For more information, see [Change column options](../backlogs/set-column-options.md).

::: moniker-end  


<a id="drag-drop" />

## Assign work from your backlog to a sprint 
   
Before you start planning your sprint, you'll want to have [created, organized, and estimated your backlog](../backlogs/create-your-backlog.md). 

Also, you'll want to have [set the start and end dates for your sprint](define-sprints.md#quick-start-schedule). 

You can quickly assign work items to a sprint through drag-and-drop from the product backlog to the sprint. 

::: moniker range=">=azure-devops-2019"

1. The next step is to open the Planning pane. Choose the :::image type="icon" source="../../media/icons/view-options-icon.png" border="false"::: view options icon and select **Planning**. While you're at it, make sure **Parents** and **Forecasting** are Off. You can choose to set **In Progress items** to On or Off. 

	> [!div class="mx-imgBorder"]
	> ![Boards>Backlogs>Open view options and choose Planning](media/define-sprints/view-options-planning-menu.png)

	The set of sprints selected for your team appears. If you don't see any sprints listed, you can add sprints or select existing sprints for your team's use. To learn how, see [Define sprints](define-sprints.md).   

1. You can drag and drop items from the **Backlog** onto a sprint.  

	> [!NOTE]   
	> The **Planning** pane only shows the current sprint and the next 10 future sprints in the list, even if more have been selected for the team. Only a team administrator or member of the **Project Administrators** group can [select iterations for a team](../../organizations/settings/set-iteration-paths-sprints.md). 

	> [!div class="mx-imgBorder"]
	> ![Boards>Backlogs>Drag-drop items onto sprint](media/define-sprints/drag-drop-backlog-items-to-sprint.png)

2. Select one or more items from the backlog and drag them to the sprint you're planning. This action updates the Iteration Path of the backlog items and any of its child tasks to the sprint you selected. 

3. Check the level of effort displayed in the sprint window.  As you assign backlog items to a sprint, the sprint window updates with a running tally of the number of backlog items and tasks and the **Planned Effort**. 

	> [!div class="mx-imgBorder"]
	> ![Product backlog page, drag work items to sprint or assign to sprint through the context menu](media/assign-items-sprint/sprint-window-effort.png)   

	*Planned Effort* provides a sum of all *Story Points* or *Effort* defined for backlog items assigned to the sprint. This sum represents your initial guess at the amount of work your team completes in the sprint. Next, you'll define tasks, estimate that work, and use your team's capacity to make sure it fits in the sprint. 

::: moniker-end


::: moniker range="tfs-2018"

Select one or more items and drag them to one of the listed sprints.  

> [!NOTE]   
> The **Iteration Paths** listed only show the current sprint and the next 10 future sprints in the list, even if more have been selected for the team. Only a team administrator or member of the **Project Administrators** group can [select iterations for a team](../../organizations/settings/set-iteration-paths-sprints.md). 
	
> [!div class="mx-imgBorder"]
> ![Product backlog page, drag work items to sprint or assign to sprint through the context menu](media/sp-assign-to-sprints.png)    

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


To select several items in a sequence, hold down the shift key. To select several non-sequential items, use the Ctrl key. Then, you can either drag the selected items to a new position within the backlog, to a different sprint, or select an option from the context (![context icon](../media/icons/context_menu.png)) or action (  :::image type="icon" source="../media/icons/actions-icon.png" border="false"::: ) menu of one of the items. 

For more information, see [Bulk modify work items](../backlogs/bulk-modify-work-items.md). 

## Next step

Now that you've defined your sprint plan, your team's ready to begin work on the sprint tasks.

> [!div class="nextstepaction"]
> [2. Add tasks](add-tasks.md)

## Related articles

To add or rename the sprints your team uses, see [Define iteration (sprint) paths and configure team iterations](../../organizations/settings/set-iteration-paths-sprints.md).  

If your backlog doesn't show the work items you expect, see [Setup your Backlogs & Boards](../backlogs/set-up-your-backlog.md). 
