---
title: Calendar view with drill down of epics and features 
titleSuffix: Azure DevOps
description: Learn how to track dependencies your team has on other teams with the dependency tracker  
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

# View progress using the Epic Roadmap 

[!INCLUDE [temp](../includes/version-vsts-tfs-2017-on.md)]


Similar to the Feature Timeline, the Epic Roadmap supports portfolio management by providing a calendar view of a single epic and it's child features.  

> [!NOTE]   
> The Feature Timeline and Epic Roadmap extension is not a supported feature of Azure Boards and therefore not supported by the product team. For questions, suggestions, or issues you have when using the extension, visit the extension page.  

> [!div class="mx-imgBorder"]  
> ![Epic Roadmap initial view](media/epic-roadmap/intro.png)


Use the Epic Roadmap to support the following tasks: 

- Support roadmap planning  
- Produce reports at each business level to show high and low-level progress views  
- Adjust sprint assignments to child work items  

> [!NOTE]   
> The Feature Timeline and Epic Roadmap  extension is available on TFS 2017 Update 2 and later versions. You can download it from the [Marketplace for Azure DevOps, Feature Timeline and Epic Roadmap](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.workitem-feature-timeline-extension).




The Feature Timeline and Epic Roadmap extension provides you with calendar views of feature progress with the ability to drill down to see details at the requirements level.  

> [!NOTE]   
> The Feature Timeline and Epic Roadmap  extension is available on TFS 2017 Update 2 and later versions. You can download it from the [Marketplace for Azure DevOps, Feature Timeline and Epic Roadmap ](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.workitem-feature-timeline-extension)



## Prerequisites

- Install the [Feature Timeline and Epic Roadmap](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.workitem-feature-timeline-extension) extension for the organization(s) or collection(s) for which you want to track progress at the epic and feature level. In order to install an extension, you must be a member of the Project Collection Administrator Group. To learn more, see [Install extensions](../../marketplace/install-extension.md). 
- To view the Epic Roadmap, you must be a member of the project and have view permissions to work items under the area path they are assigned to.
- To modify work items, you must have permissions to edit work items under the area path they are assigned to.   


## Define your epics, features, and stories 

The Epic Roadmap displays individual epics, and the features and requirements mapped to them. Features are grouped under the Area Path their assigned to, which generally corresponds to a feature team. Only those features that are children of an epic appear in the Epic Roadmap view. 

To use the Epic Roadmap, make the following definitions:

- Define teams and area paths to support the rollup of the team's work into features and epics. 
- Define sprints with dates for the project. Select sprints for the team.  
	> [!NOTE]   
	> Make sure you assign work items to a flat set of sprints. Assigning features to a hierarchy of sprints and child items to another set of sprints won't display correctly in the Epic Roadmap view.  
or work to be performed in some future iteration, you can leave the dates unset for the iteration and it will appear as the last sprint in the roadmap. 
- Make sure the team is subscribed to the sprints of interest. 
- Define epics and their child features. If no child work items are defined, then assign the feature to a sprint. 
- When child work items are defined, assign the child items to sprints. 
- To view progress by Effort, Story Points, or Size, assign values to those fields to the child requirements. 
- Once all child requirements are completed, set the State of the parent feature or epic to Done or Completed. Closed epics no longer appear in the drop-down list of the Epic Roadmap. 


> [!TIP]   
> To support roadmap planning, make sure your team has subscribed to several future iterations.  

To learn more, review the following articles:  
- [Define area paths & assign to a team](../../organizations/settings/set-area-paths.md)  
- [Define iteration paths (sprints) & assign team iterations ](../../organizations/settings/set-iteration-paths-sprints.md)  


## Open Boards or Backlogs 

You can access the Feature Timeline from either your team's Kanban board or backlog. 

Here we open Boards. 

::: moniker range="azure-devops"

1. Check that you selected the right project, and select **Boards** > **Boards**. Then select the correct team from the team selector menu. 

	> [!div class="mx-imgBorder"]  
	> ![Open your Kanban board](../boards/media/quickstart/open-kanban-board-agile-s155.png)  

	To select another team's board, open the selector. Then select a different team, or select the ![home icon](../../media/icons/home-icon.png) **Browse all team boards** option. Or, you can enter a keyword in the search box to filter the list of team backlogs for the project.

	> [!div class="mx-imgBorder"]  
	> ![Select another team's board](../boards/media/quickstart/select-kanban-team-board.png) 

::: moniker-end

::: moniker range="azure-devops-2019"

1. Check that you selected the right project, and select **Boards** > **Boards**. Then select the correct team from the team selector menu. 

	> [!div class="mx-imgBorder"]  
	> ![Open your Kanban board](../boards/media/quickstart/open-kanban-board-agile.png)  

	To select another team's board, open the selector. Then select a different team, or select the ![home icon](../../media/icons/home-icon.png) **Browse all team boards** option. Or, you can enter a keyword in the search box to filter the list of team backlogs for the project.

	> [!div class="mx-imgBorder"]  
	> ![Select another team's board](../boards/media/quickstart/select-kanban-team-board.png) 

::: moniker-end


::: moniker range=">= tfs-2017 <= tfs-2018"

1. To view your Kanban board, open your project from a web browser. Select **Work** > **Backlogs** > **Stories**, and then select **Board**. 

	> [!div class="mx-imgBorder"]  
	> ![Open Portfolio Kanban board, features](../boards/media/quickstart/open-kanban-board.png)

	If you don't see **Work**, your screen size might be reduced. Select the three dots (![ ](../../media/ellipses-reduced-screen-size.png)) icon. Then select **Work** > **Backlogs** > **Board**.   

	> [!div class="mx-imgBorder"]  
	> ![Open Work when screen size is reduced](../boards/media/kanban-quickstart-reduced-screensize.png)   

1. To select another team, open the project and team selector. Select a different team, or select the **Browse** option.  

   > [!div class="mx-imgBorder"]  
   > ![Select another team](../sprints/media/assign-items-sprint/team-selector-backlogs-standard.png)  

   Your Kanban board appears. 
	  
	> [!div class="mx-imgBorder"]  
	> ![Kanban board, Agile template](../boards/media/kanban-basics-intro.png)   

::: moniker-end   

## Open Epic Roadmap 


1. Choose **Epic Roadmap**. 

	> [!div class="mx-imgBorder"]  
	> ![Choose Epic Roadmap from Azure Boards](media/epic-roadmap/open-epic-roadmap.png)

	If you don't see the **Feature Timeline** link, then the [Feature Timeline and Epic Roadmap](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.workitem-feature-timeline-extension) extension isn't installed or enabled. Check with your Project Collection Administrator to request that it be installed. To learn more, [Request and approve extensions](../../marketplace/request-extensions.md). 

2. Choose the Epic you want to view from the drop-down menu. 

	> [!div class="mx-imgBorder"]  
	> ![Choose Epic from drop-down menu](media/epic-roadmap/intro.png)
	
4. Customize your view. 
 
	- **View Sprints**: Enter the number of iterations to show. The maximum number is 11. 
		> [!NOTE]  
		Sprint labels may not display for iterations above six, however, the calendar view represents those iterations.
	- **Show Details**: Displays progress bars of Feature child items
	- **Track Progress Using**: Progress bars indicate completion based on child requirements or overall total effort. 


## Drill-down to view details 

1. To view the requirements linked to a feature, choose the ![info icon](../media/icons/info.png) info icon for that feature. 

	> [!div class="mx-imgBorder"]  
	> ![Feature, Info icon](media/feature-timeline/drill-down-1.png)

	A dialog opens showing the child items of the feature. 

	> [!div class="mx-imgBorder"]  
	> ![Feature Timeline controls](media/feature-timeline/drill-down-2.png)

	The Start and End iterations are derived from the iteration paths assigned to the child work items. You can change those values by selecting new Start and End iterations from the drop down path. 



## Q & A


[!INCLUDE [temp](../includes/faq-critical-path.md)]

<!--- Enter some notes about critical path and MVP  --> 

## Related articles


- [Review team delivery plans](../plans/review-team-plans.md)
- [View portfolio progress with the Feature Timeline](feature-timeline.md) 
- [Plan and track dependencies using the Dependency Tracker](dependency-tracker.md)  
- 


## Related Marketplace extensions

- [Work Item Visualization](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.WorkItemVisualization) 
 