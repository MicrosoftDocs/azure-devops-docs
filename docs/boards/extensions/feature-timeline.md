---
title: Sprint calendar view of features and epics
titleSuffix: Azure DevOps
description: Learn how to manage portfolios with a calendar view of features and epics  
ms.custom: extensions
ms.technology: devops-agile
ms.prod: devops
ms.topic: conceptual
ms.manager: mijacobs
ms.author: kaelli
author: KathrynEE
monikerRange: '>= tfs-2017'
ms.date: 02/14/2020
---

# View progress with the Feature Timeline 

[!INCLUDE [temp](../includes/version-vsts-tfs-2017-on.md)]


The Feature Timeline supports portfolio management by providing a progress view of features grouped by their epic parents. This view provides you with calendar views of feature progress with the ability to drill down to see details at the requirements level.  

> [!NOTE]   
> The Feature Timeline and Epic Roadmap  extension is available on TFS 2017 Update 2 and later versions. You can download it from the [Marketplace for Azure DevOps, Feature Timeline and Epic Roadmap](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.workitem-feature-timeline-extension).
 
[![Feature Timeline](media/feature-timeline/intro.png)](media/feature-timeline/intro-expanded.png#lightbox)

## Prerequisites

- Install the [Feature Timeline and Epic Roadmap](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.workitem-feature-timeline-extension) extension for the organization(s) or collection(s) for which you want to track progress at the epic and feature level. In order to install an extension, you must be a member of the Project Collection Administrator Group. To learn more, see [Install extensions](../../marketplace/install-extension.md). 
- To view the Feature Timeline, you must be a member of the project and have view permissions to work items under the area path they are assigned to. 

## Define your features and requirements
 
The Feature Timeline is designed to display features and the progress made to their child requirements. The Feature Timeline displays features grouped under epics when they are linked to parent epics. Ungrouped features appear at the bottom of the view. 

To gain the most from the Feature Timeline view, make the following definitions:

- Define teams to support the rollup of their work into features and epics. 
- Define sprints with dates for the project. Select sprints for the team. To learn how, see 
- Define features and child work items. If no child work items are defined, then assign the feature to a sprint. 
- When child work items are defined, assign the child items to sprints. 
- To view progress by Effort, Story Points, or Size, assign values to those fields to the child requirements. 
- Once all child requirements are completed, close the parent feature.  

To learn more, review the following articles: 
- [Configuration and customization of Azure Boards](../configure-customize.md) 
- [Define area paths & assign to a team](../organizations/settings/set-area-paths.md)  
- [Define iteration paths (sprints) & assign team iterations ](../organizations/settings/set-iteration-paths-sprints.md)  


## Open Boards or Backlogs 

You can access the Feature Timeline from either your team's Kanban board or backlog. 
Here we open Boards. 

::: moniker range="azure-devops"

1. Check that you selected the right project, and select **Boards** > **Boards**. Then select the correct team from the team selector menu. 

	![Open your Kanban board](../boards/media/quickstart/open-kanban-board-agile-s155.png)  

	To select another team's board, open the selector. Then select a different team, or select the ![home icon](../../media/icons/home-icon.png) **Browse all team boards** option. Or, you can enter a keyword in the search box to filter the list of team backlogs for the project.

	> [!div class="mx-imgBorder"]  
	> ![Select another team's board](../boards/media/quickstart/select-kanban-team-board.png) 

::: moniker-end

::: moniker range="azure-devops-2019"

1. Check that you selected the right project, and select **Boards** > **Boards**. Then select the correct team from the team selector menu. 

	![Open your Kanban board](../boards/boards/media/quickstart/open-kanban-board-agile.png)  

	To select another team's board, open the selector. Then select a different team, or select the ![home icon](../../media/icons/home-icon.png) **Browse all team boards** option. Or, you can enter a keyword in the search box to filter the list of team backlogs for the project.

	> [!div class="mx-imgBorder"]  
	> ![Select another team's board](../boards/media/quickstart/select-kanban-team-board.png) 

::: moniker-end


::: moniker range=">= tfs-2017 <= tfs-2018"

1. To view your Kanban board, open your project from a web browser. Select **Work** > **Backlogs** > **Stories**, and then select **Board**. 

	![Open Portfolio Kanban board, features](../boards/media/quickstart/open-kanban-board.png)

	If you don't see **Work**, your screen size might be reduced. Select the three dots (![ ](../../media/ellipses-reduced-screen-size.png)) icon. Then select **Work** > **Backlogs** > **Board**.   

	![Open Work when screen size is reduced](../boards/media/kanban-quickstart-reduced-screensize.png)   

1. To select another team, open the project and team selector. Select a different team, or select the **Browse** option.  

   > [!div class="mx-imgBorder"]  
   > ![Select another team](../sprints/media/assign-items-sprint/team-selector-backlogs-standard.png)  

   Your Kanban board appears. 
	  
   ![Kanban board, Agile template](../boards/media/kanban-basics-intro.png)   

::: moniker-end   

## Open the Feature Timeline

1. Choose **Feature Timeline**. 

	> [!div class="mx-imgBorder"]  
	> ![Choose Feature Timeline from Azure Boards](media/feature-timeline/choose-feature-timeline.png)
 


<a id="customize" /> 

## Customize your view

You can customize your view of the Feature Timeline with the controls shown in the following image: 

> [!div class="mx-imgBorder"]  
> ![Feature Timeline controls](media/feature-timeline/controls.png)


- **View Sprints**: Enter the number of iterations to show  
- **Plan Features**: Opens a side panel of additional features participating in a Portfolio Plan. 
- **Show Details**: Displays progress bars of Feature child items
- **Track Progress Using**: Progress bars indicate completion based on child requirements or overall total effort. 
- **Closed Features**: Filters the Features based on those closed within the selected time frame. 

 


<a id="drill-down" /> 

## Drill-down into a feature 
 
 
 

<a id="configuration" /> 

## Configure  
 
 

## Related articles

- [Work item field index](..//work-items/guidance/work-item-field.md)
- [Review team delivery plans](../plans/review-team-plans.md)
- [Inheritance process model](../../organizations/settings/work/inheritance-process-model.md)
- [Hosted XML process model](../../organizations/settings/work/hosted-xml-process-model.md)
- [How workflow states and state categories are used in Backlogs and Boards](../work-items/workflow-and-state-categories.md)


## Related Marketplace extensions

- [Work Item Visualization](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.WorkItemVisualization) 
 