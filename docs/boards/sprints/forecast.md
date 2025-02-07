---
title: Forecast your product backlog in Azure Boards
titleSuffix: Azure Boards   
description: Learn how to determine how much work your team can deliver across several sprints by forecasting in Azure Boards. 
ms.custom: boards-sprints    
ms.service: azure-devops-boards
ms.assetid: C46ED4AA-4B8F-4D5D-BC51-52F6D67BF8C6
ms.author: chcomley
author: chcomley
ms.topic: tutorial
monikerRange: '<= azure-devops'
ms.date: 04/01/2022
---

# Forecast your product backlog

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)] 

Teams use the forecast tool to help in their sprint planning efforts. By plugging in a value for the [team velocity](../../report/dashboards/team-velocity.md), the forecast tool shows which items in the backlog can be completed within future sprints. Both tools are team-specific tools that rely on the team's ability to estimate backlog items. Once your team has completed a sprint or two, they can use the team velocity  to forecast how much of the backlog they can finish within the upcoming sprints. 

Use this article to learn: 

> [!div class="checklist"]    
> * How to forecast upcoming sprints     
> * Required and recommended team activities to support forecasting  

[!INCLUDE [temp](../includes/setup-backlogs-boards.md)]

## Prerequisites

::: moniker range="azure-devops"

| Category | Requirements |
|--------------|-------------|
| **Project membership** | [Project member](../../organizations/projects/create-project.md). |
| **Permissions** | Member of the **Contributors** security group. |
| **Access levels** | At least [**Basic** access](../../organizations/security/access-levels.md). |

> [!NOTE]  
> Users with **Stakeholder** access for a public project have full access to backlog and board features just like users with **Basic** access. For more information, see [Stakeholder access quick reference](../../organizations/security/stakeholder-access.md).


::: moniker-end

::: moniker range="< azure-devops"

* **Project membership**: Member of a [project](../../organizations/projects/create-project.md). 
* **Permissions**: Member of the **Contributors** security group. 
* **Access levels**: At least [**Basic** access](../../organizations/security/access-levels.md).

::: moniker-end 
 

## Required and recommended activities   

Here's what you need to have in place before you attempt to forecast your team's backlog.   

**Required:** 
*	[Define iteration paths (sprints) and configure team iterations](../../organizations/settings/set-iteration-paths-sprints.md) 
	- Sprints should be of the same duration. 
	- Select enough future sprints to forecast your entire product backlog.
*	[Define and estimate backlog items](../backlogs/create-your-backlog.md#estimates). If you work from your team's backlog, the items you create automatically get assigned to the current sprint (Iteration) and to your team's default Area Path.  
*	Update the status of backlog items once work starts and when completed. Only backlog items whose State maps to a state category of *Proposed* or *In Progress* show up on the velocity chart. (For more information, see [Workflow states and state categories](../work-items/workflow-and-state-categories.md)).

**Recommended:**  
*	Define and size backlog items to [minimize variability](../../report/dashboards/team-velocity.md).  
*	Determine how your team wants to [treat bugs](../../organizations/settings/show-bugs-on-backlog.md). If your team chooses to treat bugs like requirements, bugs appear on the backlog and be counted within the Velocity chart and forecasting. 
*	[Set your team's area path](../../organizations/settings/set-area-paths.md). The forecast tool forecasts those items based on your team's default settings. These settings can specify to include items in area paths under the team's default or exclude them.     
*	Don't  create a hierarchy of backlog items and bugs. The display of the leaf node, the last node in a same-category hierarchy, may only appear on boards, sprint backlogs, and Taskboards. For more information, see [Fix reordering and nesting issues, How backlogs and boards display hierarchical (nested) items](../backlogs/resolve-backlog-reorder-issues.md).<br/>Instead of nesting requirements, bugs, and tasks, maintain a flat list&mdash;only creating parent-child links one level deep between different-category items. Use [Features to group requirements or user stories](../backlogs/organize-backlog.md). You can quickly map stories to features. The map creates parent-child links in the background.  
*	At the end of the sprint, update the status of those backlog items that the team has fully completed. Incomplete items should be moved back to the product backlog and considered in a future sprint planning meeting.


> [!NOTE]
> If you work with several teams, and each team wants to work with their own backlog, velocity chart, and forecast tool, you can [create additional teams](../../organizations/settings/add-teams.md). Each team then gets access to their own set of Agile tools. Each Agile tool filters work items to only include those whose assigned area paths and iteration paths meet those set for the team. 

<a id="forecasting">   </a> 

## Forecast upcoming sprints

Use the forecast tool to get an idea of how many items you can complete within a sprint. By plugging in a velocity, you can see which items are within scope for the set of sprints the team has activated. 

To forecast your product backlog, complete the following actions.


::: moniker range=">= azure-devops-2020"


1. (1) Check that you've selected the right project, (2) choose **Boards>Backlogs**, and then (3) select the correct team from the team selector menu. 

	> [!div class="mx-imgBorder"]  
	> ![Open Work, Backlogs, for a team](../sprints/media/assign-items-sprint/open-backlogs-backlog-s155-co.png)

    To select another backlog, open the selector and then choose a different team or select the **View Backlog directory** option. Or, enter a keyword in the search box to filter the list of team backlogs for the project.

	> [!div class="mx-imgBorder"]  
	> ![Choose another team](../sprints/media/assign-items-sprint/backlog-team-selector-s155.png) 

1. Check that you have selected **Stories** (for Agile), **Issues** (for Basic), **Backlog items** (for Scrum), or **Requirements** (for CMMI) as the backlog level. 

	> [!div class="mx-imgBorder"]  
	> ![Choose product backlog level, Backlog items, Stories, or Requirements](../sprints/media/assign-items-sprint//select-product-backlog-agile-s155.png) 

2. (Optional) To choose which columns should display and in what order, choose the  :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: actions icon and select **Column options**. For more information, see [Change column options](../backlogs/set-column-options.md). 

	> [!div class="mx-imgBorder"]  
	> ![Open Column Options](../sprints/media/assign-items-sprint/open-column-options-s155.png) 

3. Choose the :::image type="icon" source="../../media/icons/view-options-icon.png" border="false"::: view options icon and slide **Forecasting** to **On**. To keep things simple, turn the **Mapping** and **Planning** panes **Off**.  

	> [!div class="mx-imgBorder"]  
	> ![Boards>Backlog, view options menu, Forecast on](media/forecast/turn-forecasting-on-agile.png)

	Set **In Progress Items** to **Off** to hide those items that won't be counted in the forecast. The forecast tool ignores Scrum items set to *Committed* or *Done* and Agile and CMMI items set to *Active*, *Resolved*, or *Completed*. 

4. Enter your team's predicted velocity. 

	> [!div class="mx-imgBorder"]  
	> ![Boards>Backlog, Set Forecast velocity](media/forecast/set-forecast-velocity.png)

	> [!TIP]    
	> If your team has been working for several sprints, you can gain an idea of your team's velocity from the [Velocity widget](../../report/dashboards/team-velocity.md).

	The tool draws lines for each future sprint selected by the team. The Forecast lines show how much work your team can complete in future sprints. Typically, items above the first line are already in progress for the current sprint. Items that fall between the first and second forecast lines indicate what can be completed in the named sprint.

::: moniker-end


::: moniker range="azure-devops-2019"

1. From your web browser, open your product backlog. (1) Check that you've selected the right project, (2) choose **Boards>Backlogs**, and then (3) select the correct team from the team selector menu. 

	![Open Work, Backlogs, for a team](media/assign-items-sprint/open-work-backlogs-agile.png)

	To choose another team, open the selector and select a different team or choose the :::image type="icon" source="../../media/icons/home-icon.png" border="false"::: **Browse all team backlogs** option. Or, you can enter a keyword in the search box to filter the list of team backlogs for the project.

	> [!div class="mx-imgBorder"]  
	> ![Choose another team](media/assign-items-sprint/team-selector-backlogs-agile.png) 

1. Check that you have selected **Backlog items** (for Scrum), **Stories** (for Agile), or **Requirements** (for CMMI) as the backlog level. You can only forecast a product backlog. You can't forecast a portfolio backlog such as Features or Epics.    

	> [!div class="mx-imgBorder"]  
	> ![Choose product backlog level, Backlog items, Stories, or Requirements](media/assign-items-sprint/select-product-backlog-agile.png) 

2. (Optional) To choose which columns should display and in what order, choose the  :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: actions icon and select **Column options**. You may want to add the Iteration Path to the set of columns that appear on your backlog. For more information, see [Change column options](../backlogs/set-column-options.md). 

	> [!div class="mx-imgBorder"]  
	> ![Open Column Options](media/assign-items-sprint/open-work-backlogs-column-options-agile.png) 

3. Choose the :::image type="icon" source="../../media/icons/view-options-icon.png" border="false"::: view options icon and slide **Forecasting** to **On**. To keep things simple, turn the **Mapping** and **Planning** panes **Off**.  

	> [!div class="mx-imgBorder"]  
	> ![Boards>Backlog, view options menu, Forecast on](media/forecast/turn-forecasting-on-agile.png)

	Set **In Progress Items** to **Off** to hide those items that won't be counted in the forecast. The forecast tool ignores Scrum items set to *Committed* or *Done* and Agile and CMMI items set to *Active*, *Resolved*, or *Completed*. 

4. Enter your team's predicted velocity. If the **Forecasting** bar doesn't appear.

	> [!div class="mx-imgBorder"]  
	> ![Boards>Backlog, Set Forecast velocity](media/forecast/set-forecast-velocity.png)

	> [!TIP]    
	> If your team has been working for several sprints, you can gain an idea of your team's velocity from the [Velocity widget](../../report/dashboards/team-velocity.md).

	The tool draws lines for each future sprint selected by the team. The Forecast lines show how much work your team can complete in future sprints. Typically, items above the first line are already in progress for the current sprint. Items that fall between the first and second forecast lines indicate what can be completed in the named sprint.

::: moniker-end




## Review the forecast results 

*	Check the results manually to understand discrepancies in what you expect and what the forecast tool displays.  
*	Check the amount of effort (Effort, Story Points, or Size) forecasted per sprint. 
*	Question forecast results where the effort of an item is near to, or greater than, team velocity.  

In this example, a Velocity of 20 is used. The forecast tool limits the number of items that are shown between the forecast lines to those items that can be completed within the sprint or using unused velocity points from the previous sprint. 

The forecast tool shows between two and four items can be worked on during Iterations 2 through 6 based on the number of Story Points you assigned to each user story or bug. The forecast logic carries over velocity points from one sprint to the next. 

- **Iteration 2**: 13 Story Points, items 1 and 2 can be completed; 7 velocity points are carried over to the next sprint
- **Iteration 3**: 24 Story Points, items 3 through 5 can be completed; 3 (=20+7-24) velocity points are carried over to the next sprint   
- **Iteration 4**: 21 Story points, items 6 through 8 can be completed; 2 (=20+3-21) velocity points are carried over to the next sprint   
- **Iteration 5**: 16 Story points, items 9 through  12 can be completed; 6 (=20+2-16) velocity points are carried over to the next sprint   
- **Iteration 6**: 23 Story points, items 13 through 16 can be completed; 3 (=20+6-23) velocity points are carried over to the next sprint   

	> [!div class="mx-imgBorder"]  
	> ![Boards>Backlog, Forecast results for 6 sprints](media/forecast-s125.png)
	

## Determine the velocity needed to complete all items in the backlog

Another way to use the forecast tool is to enter different velocity values until all the backlog items are completed within a given set of sprints. This forecast provides an estimate of what velocity is required to complete your backlog of items. 

You can then assess the delta between the current team's velocity and the required velocity. The delta helps determine what other resources are required to meet production demands within a required time. 

## Next steps

> [!div class="nextstepaction"]
> [Assign work to a sprint](assign-work-sprint.md)

## Related articles

*	[Team velocity](../../report/dashboards/team-velocity.md)  
*	[Define iteration paths (sprints) and configure team iterations](../../organizations/settings/set-iteration-paths-sprints.md) 
*	Use the [taskboard](task-board.md) to track work during your sprint
*	Monitor the [sprint burndown chart](task-board.md) to determine if your team is on track to complete the sprint plan




