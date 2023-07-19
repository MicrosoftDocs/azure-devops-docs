---
title: Add features & epics to a Kanban board
titleSuffix: Azure Boards
description: Quickly define and view the status of child features, user stories, or backlog items using Kanban features or epic boards in Azure Boards and Azure DevOps.
ms.custom: boards-kanban 
ms.service: azure-devops-boards
ms.assetid: 489C612D-983E-47D3-BD1A-F13C5DCD74E2  
ms.topic: tutorial
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 04/01/2022
---



# Add Kanban board features and epics  

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

If you track progress on your backlog with Kanban, you can also use Kanban boards to track epics and features.  

And, as with [child task checklists for backlog items](add-task-checklists.md), you can quickly define and track the progress of child items for your features or epics. Here we see several stories defined for features, both in progress and completed.    

In this article, you'll learn: 
>[!div class="checklist"]    
> * How to add epics and features using your portfolio backlogs    
> * Keyboard shortcuts for working with the Kanban board  

For information on managing features and epics as a list and examples for features and epics, see [Define features and epics](../backlogs/define-features-epics.md). 

> [!div class="mx-imgBorder"]
> ![Web portal, Features Kanban board with several user stories defined](media/features-epics/features-with-stories-intro.png)

[!INCLUDE [temp](../includes/prerequisites-kanban.md)]


## Open your Kanban board from the web portal

Your Kanban board is one of two types of boards available to you. For an overview of the features supported on each backlog and board, see [Backlogs, boards, and plans](../backlogs/backlogs-boards-plans.md). To switch to the [product backlog](../backlogs/create-your-backlog.md), choose **Stories backlog**. And, to switch to the [taskboard](../sprints/task-board.md), choose **Sprints** and then choose **Taskboard**.  

::: moniker range=">= azure-devops-2019"

1. (1) Check that you've selected the right project, (2) choose **Boards>Boards**, and then (3) select the correct team from the team selector menu. 

	![Open your Kanban board](/azure/devops/boards/boards/media/quickstart/open-kanban-board-agile.png)  

	To choose another team's board, open the selector and select a different team or choose the :::image type="icon" source="../../media/icons/home-icon.png" border="false"::: **Browse all team boards** option. Or, you can enter a keyword in the search box to filter the list of team backlogs for the project.

	> [!div class="mx-imgBorder"]  
	> ![Choose another team's board](/azure/devops/boards/boards/media/quickstart/select-kanban-team-board.png) 

	> [!TIP]    
	> Choose the :::image type="icon" source="../../media/icons/icon-favorite-star.png" border="false"::: star icon to favorite a team board. Favorited artifacts (:::image type="icon" source="../../media/icons/icon-favorited.png" border="false"::: favorited icon) appear at the top of the team selector list.

1. Select **Features** or **Epics** from the backlog selector menu. 

	> [!div class="mx-imgBorder"]  
	> ![Choose portfolio backlog level, Features or Epics](media/features-epics/select-portfolio-level.png) 

::: moniker-end


::: moniker range="tfs-2018"

1. To view a portfolio backlog, open your (1) project from a web browser and choose (2) **Work**, (3) **Backlogs**, (4) **Features** or **Epics**, and then (5) **Board**.  

	![Open Features Kanban board](media/features-epics/open-features-board-standard.png)

	If you don't see **Work**, your screen size may be reduced. Select the three dots (:::image type="icon" source="../../media/ellipses-reduced-screen-size.png" border="false":::, then choose **Work**, **Backlogs**, and then **Board**.   

	![Open Work when screen size is reduced](/azure/devops/boards/boards/media/kanban-quickstart-reduced-screensize.png)   

2.	To choose another team, open the project/team selector and select a different team or choose the **Browse** option.  

	> [!div class="mx-imgBorder"]  
	> ![Choose another team](/azure/devops/boards/sprints/media/assign-items-sprint/team-selector-backlogs-standard.png)  

3. Your Kanban board for the selected portfolio backlog displays.  

	![Kanban board, Agile template](media/features-epics/features-board-standard.png)   

::: moniker-end


## Add epics or features   

Add new items to a feature or epic through the item's   :::image type="icon" source="../media/icons/actions-icon.png" border="false":::  Action menu. For descriptions of fields used to support features and epics, see [Define features and epics](../backlogs/define-features-epics.md). 

![Web portal, Feature Kanban board, Open the context menu of a feature to add a story](media/features-epics/add-user-story.png)

When you have many items to add, keep entering your task titles and press Enter. If you have details you want to add about to a work item, hover over the item and press Enter.  
 

## Related articles

If you're new to working with the Kanban board, see [Kanban overview](kanban-overview.md)

For more information on working with a checklist on a Kanban board, see [Add tasks or child items as checklists](add-task-checklists.md). You can run the same operations for the features and epics Kanban boards as you do with the Kanban board for the product backlog. These operations include:    

- Mark an item as done  
- Reorder and reparent work items  

To customize the columns, swimlanes, or cards for each Kanban board, make sure you first select the board. Then, choose the  :::image type="icon" source="../../media/icons/blue-gear.png" border="false":::  or :::image type="icon" source="../../media/icons/gear_icon.png" border="false"::: gear icon to open the Settings dialog. See these articles for details: 

* [Add columns](add-columns.md)  
* [Customize cards](../../boards/boards/customize-cards.md)  

### REST API resources
To programmatically interact with Kanban board and other team settings, see the [REST API, Boards reference](/rest/api/azure/devops/work/boards).