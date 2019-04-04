---
title: Add features & epics to a Kanban board
titleSuffix: Azure Boards
description: Quickly define and view the status of child features, user stories, or backlog items using Kanban features or epic boards in Azure Boards, Azure DevOps, & Team Foundation Server
ms.custom: boards-kanban 
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 489C612D-983E-47D3-BD1A-F13C5DCD74E2  
ms.topic: tutorial
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
monikerRange: '>= tfs-2013'
ms.date: 02/14/2019
---



# Kanban board features and epics  

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

If you use Kanban to track progress on your backlog, you can also use Kanban boards to track epics and features.  

And, just as with [child task checklists for backlog items](add-task-checklists.md), you can quickly define and track the progress of child items for your features or epics. Here we see several stories defined for features, both in progress and those completed.    

In this article, you'll learn: 
>[!div class="checklist"]    
> * How to add epics and features using your portfolio backlogs    
> * Keyboard shortcuts for working with the Kanban board  

For information on managing features and epics as a list and examples for features and epics, see [Define features and epics](../backlogs/define-features-epics.md). 

::: moniker range="tfs-2013"
> [!NOTE]   
> Epic portfolio backlogs are supported in TFS 2015 and later versions. You can add them manually as described in [Add a portfolio backlog level](../../reference/add-portfolio-backlogs.md).
::: moniker-end

> [!div class="mx-imgBorder"]
> ![Web portal, Features Kanban board with several user stories defined](_img/features-epics/features-with-stories-intro.png)

::: moniker range=">= tfs-2013 <= tfs-2015"
> [!NOTE]    
>Child checklists for feature and epic Kanban boards are supported from TFS 2017 and later versions.
::: moniker-end

[!INCLUDE [temp](../_shared/prerequisites-kanban.md)]


## Open your Kanban board from the web portal

Your Kanban board is one of two types of boards available to you. For an overview of the features supported on each backlog and board, see [Backlogs, boards, and plans](/azure/devops/boards/backlogs/backlogs-boards-plans). To switch to the [product backlog](/azure/devops/boards/backlogs/create-your-backlog), choose **Stories backlog**. And, to switch to the [taskboard](/azure/devops/boards/sprints/task-board), choose **Sprints** and then choose **Taskboard**.  

::: moniker range=">= azure-devops-2019"

0. (1) Check that you have selected the right project, (2) choose **Boards>Boards**, and then (3) select the correct team from the team selector menu. 

	![Open your Kanban board](/azure/devops/boards/boards/_img/quickstart/open-kanban-board-agile.png)  

	To choose another team's board, open the selector and select a different team or choose the ![home-icon](/azure/devops/_img/icons/home-icon.png) **Browse all team boards** option. Or, you can enter a keyword in the search box to filter the list of team backlogs for the project.

	> [!div class="mx-imgBorder"]  
	> ![Choose another team's board](/azure/devops/boards/boards/_img/quickstart/select-kanban-team-board.png) 

	> [!TIP]    
	> Choose the ![ ](/azure/devops/_img/icons/icon-favorite-star.png) star icon to favorite a team board. Favorited artifacts (![ ](/azure/devops/_img/icons/icon-favorited.png) favorited icon) appear at the top of the team selector list.

0. Select **Features** or **Epics** from the backlog selector menu . 

	> [!div class="mx-imgBorder"]  
	> ![Choose portfolio backlog level, Features or Epics](_img/features-epics/select-portfolio-level.png) 

::: moniker-end


::: moniker range=">=tfs-2017 <= tfs-2018"

1. To view a portfolio backlog, open your (1) project from a web browser and choose (2) **Work**, (3) **Backlogs**, (4) **Features** or **Epics**, and then (5) **Board**.  

	![Open Features Kanban board](_img/features-epics/open-features-board-standard.png)

	If you don't see **Work**, your screen size may be reduced. Click the three dots (![ ](/azure/devops/_shared/_img/ellipses-reduced-screen-size.png)), then choose **Work**, **Backlogs**, and then **Board**.   

	![Open Work when screen size is reduced](/azure/devops/boards/boards/_img/kanban-quickstart-reduced-screensize.png)   

2.	To choose another team, open the project/team selector and select a different team or choose the **Browse** option.  

	> [!div class="mx-imgBorder"]  
	> ![Choose another team](/azure/devops/boards/sprints/_img/assign-items-sprint/team-selector-backlogs-standard.png)  

3. Your Kanban board for the selected portfolio backlog displays.  

	![Kanban board, Agile template](_img/features-epics/features-board-standard.png)   

::: moniker-end


::: moniker range="<= tfs-2015"

1. To view a portfolio backlog, open your (1) project from a web browser and choose (2) **Work**, (3) **Backlogs**, (4) **Features** or **Epics**, and then (5) **Board**.  

	![Open Features Kanban board](_img/features-epics/open-features-board-standard.png)

	If you don't see **Work**, your screen size may be reduced. Click the three dots (![ ](/azure/devops/_shared/_img/ellipses-reduced-screen-size.png)), then choose **Work**, **Backlogs**, and then **Board**.   

	![Open Work when screen size is reduced](/azure/devops/boards/boards/_img/kanban-quickstart-reduced-screensize.png)   

0.	To choose another team, open the project/team selector and select a different team or choose the **Browse** option.  

	![Choose another team from the project menu](/azure/devops/boards/sprints/_img/capacity/vso-team-selector.png)  

0. Your Kanban board for the selected portfolio backlog displays.  

	![Kanban board, Agile template](_img/features-epics/features-board-standard.png)   

::: moniker-end

## Add epics or features    

Add new items to a feature or epic through the item's ![actions icon](../_img/icons/actions-icon.png) Action menu. For descriptions of fields used to support features and epics, see [Define features and epics](../backlogs/define-features-epics.md). 

![Web portal, Feature Kanban board, Open the context menu of a feature to add a story](_img/features-epics/add-user-story.png)

If you have a number of items to add, simply keep typing your task titles and click Enter. If you have details you want to add about to a work item, hover over the item and press Enter.  
 

## Related articles

If you're new to working with the Kanban board, see [Kanban basics](kanban-basics.md)

For additional guidance on working with a checklist on a Kanban board, see [Add task checklists](add-task-checklists.md). You can perform the same operations for the features and epics Kanban boards as you do with the Kanban board for the product backlog. This includes:    

- Mark an item as done  
- Reorder and reparent work items  

To customize the columns, swimlanes, or cards for each Kanban board, make sure you first select the board and then choose the ![ ](../../_img/icons/blue-gear.png) or ![ ](../../_img/icons/gear_icon.png) gear icon to open the Settings dialog. See these topics for details: 

* [Add columns](add-columns.md)  
* [Customize cards](../../boards/boards/customize-cards.md)  

### REST API resources
To programmatically interact with Kanban board and other team settings, see the [REST API, Boards reference](/rest/api/azure/devops/work/boards).

