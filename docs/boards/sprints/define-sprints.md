---
title: Manage sprint timelines while working in Scrum
titleSuffix: Azure Boards  
description: Learn how to add and set dates for sprints, releases, or iterations to implement Scrum in Azure Boards. 
ms.custom: boards-sprints
ms.technology: devops-agile
ms.assetid: 1DB81E71-36D7-43A5-9C9A-38AA1777715A
ms.author: kaelli
author: KathrynEE
ms.topic: quickstart
monikerRange: '>= tfs-2013'
ms.date: 09/20/2021
---


# Manage sprint timelines 

[!INCLUDE [temp](../includes/version-all.md)] 

With Scrum, teams plan and track work at regular time intervals, referred to as a sprint cadence. You define Iteration Paths, also referred to as *sprints*, to support the assignment of work items to time-box intervals. Iteration paths are a shared resource used by all teams that select them. Many teams choose a two or three week cadence. You can, however, specify shorter or longer sprint cycles. Or, you can create a release schedule that encompasses several sprints.  

> [!TIP]
> If all you need is to change the iteration dates, you can do that by following the guidance provided in this article.  However, if you need to define the iteration paths and tree structure, or assign team sprints, then follow the guidance provided in [Define iteration paths (sprints) and configure team iterations](../../organizations/settings/set-iteration-paths-sprints.md). 
 

## Prerequisites

* To change sprint dates, you must be a member of the **Project Administrators** security group, or have the **Edit this node** permission for the iteration child node you want to change. By default, the user who created the project has these permissions set. To learn more, see [Set permissions at the project- or collection-level](../../organizations/security/set-project-collection-level-permissions.md) or [Set permissions and access for work tracking](../../organizations/security/set-permissions-access-work-tracking.md).  

<a id="quick-start-schedule">   </a>

## Start scheduling sprints

To quickly get started, you can use the default sprints. Default sprints are also referred to as iterations and were added when your project was created. Note, you must be a [member of the Project Administrators group](../../organizations/security/set-project-collection-level-permissions.md) to add sprints and schedule sprint dates. (If you created the project, you're a member.) 

::: moniker range=">= azure-devops-2020"

1. From your web browser, open your team's sprint backlog. (1) Check that you've selected the right project, (2) choose **Boards>Sprints**, (3) select the correct team from the team selector menu, and lastly (4), choose **Backlog**. 

    > [!div class="mx-imgBorder"]  
    > ![Open Work, Sprints, for a team](media/add-tasks/open-sprint-backlog-s155-co.png)

1. To choose another team, open the selector and select a different team or choose the :::image type="icon" source="../../media/icons/home-icon.png" border="false"::: **Browse all sprints** option. Or, you can enter a keyword in the search box to filter the list of team backlogs for the project.

	> [!div class="mx-imgBorder"]  
	> ![Choose another team](media/add-tasks/team-selector-sprints-agile.png) 

2. Choose **Set sprint dates**.  

	> [!div class="mx-imgBorder"]
	> ![Boards>Sprints>set dates](media/define-sprints/set-sprint-dates-scrum-agile.png)

3. Choose the calendar icon to select the start date, and then the end date of the sprint. 

	> [!div class="mx-imgBorder"]
	> ![Edit iteration dialog, Set dates](media/define-sprints/edit-iteration-set-sprint-dates.png) 

4. Choose **Save and close**. You'll see the date listed. 

	> [!div class="mx-imgBorder"]
	> ![Boards>Sprints>Sprint dates set ](media/define-sprints/sprint-dates-set-scrum-agile.png)

::: moniker-end

::: moniker range="azure-devops-2019"

1. From your web browser, open your team's sprint backlog. (1) Check that you've selected the right project, (2) choose **Boards>Sprints**, (3) select the correct team from the team selector menu, and lastly (4), choose **Backlog**. 

	![Open Work, Sprints, for a team](media/add-tasks/open-sprints-backlog-agile.png)

1. To choose another team, open the selector and select a different team or choose the :::image type="icon" source="../../media/icons/home-icon.png" border="false"::: **Browse all sprints** option. Or, you can enter a keyword in the search box to filter the list of team backlogs for the project.

	> [!div class="mx-imgBorder"]  
	> ![Choose another team](media/add-tasks/team-selector-sprints-agile.png) 

2. Choose **Set sprint dates**.  

	> [!div class="mx-imgBorder"]
	> ![Boards>Sprints>set dates](media/define-sprints/set-sprint-dates-scrum-agile.png)

3. Choose the calendar icon to select the start date, and then the end date of the sprint. 

	> [!div class="mx-imgBorder"]
	> ![Edit iteration dialog, Set dates](media/define-sprints/edit-iteration-set-sprint-dates.png) 

4. Choose **Save and close**. You'll see the date listed. 

	> [!div class="mx-imgBorder"]
	> ![Boards>Sprints>Sprint dates set ](media/define-sprints/sprint-dates-set-scrum-agile.png)

::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2018"

1. From your web browser, open your team's sprint backlog. (1) Select the team from the project/team selector, choose (2) **Work**, (3) **Backlogs**, and then (4) the product backlog, which is **Backlog items** (for Scrum), **Stories** (for Agile), or **Requirements** (for CMMI). 

	> [!div class="mx-imgBorder"]
	> ![Open the Boards>Backlogs page](media/assign-items-sprint/open-work-backlogs-standard.png) 

	To choose another team, open the project/team selector and select a different team or choose the **Browse** option. 

	> [!div class="mx-imgBorder"]  
	> ![Choose another team](media/assign-items-sprint/team-selector-backlogs-standard.png) 

	The set of sprints selected for your team appears in the left pane. If you don't see any sprints listed, you can add sprints or select existing sprints for your team's use. To learn how, see [Define sprints](define-sprints.md). 

1. Choose the sprint you want to plan. 

	> [!div class="mx-imgBorder"]  
	> ![Choose another sprint](media/add-tasks/choose-sprint-standard.png)

	The system lists only those sprints that have been selected for the current team focus. If you don't see the sprints you want listed, then see [Define iteration (sprint) paths](../../organizations/settings/set-iteration-paths-sprints.md).  

2. Choose the sprint listed under **Current** and then choose **Set dates**.  

	<img src="media/define-sprints/set-sprint-dates.png" alt="Sprint 1 backlog, Set dates" />  

	> [!NOTE]
	> If you don't see any sprints listed or the **Set dates** link, then no sprints have been selected for the team context you've selected. To select sprints for the team context, see [Define iteration (sprint) paths and configure team iterations](../../organizations/settings/set-iteration-paths-sprints.md). To switch team context, see [Switch project or team focus](../../project/navigation/go-to-project-repo.md). 

3. Choose the calendar icon to select the start date, and then the end date of the sprint. 

	> [!div class="mx-imgBorder"]
	> ![Edit iteration dialog, Set dates](media/define-sprints/edit-iteration-set-sprint-dates.png) 


::: moniker-end

That's it! You can now start [planning your first sprint](assign-work-sprint.md). 

If you have several teams, more complex release and sprint cadences to schedule, or want to create child iterations, then read further. You define these items through the settings context for the project. See [Define iteration (sprint) paths and configure team iterations](../../organizations/settings/set-iteration-paths-sprints.md). 

> [!NOTE]
> **Terminology note:** Your set of Agile tools uses the Iteration Path field to track sprints and releases. When you define sprints, you define the picklist of values available for the [Iteration Path](../../organizations/settings/set-area-paths.md) field. You use iterations to group work into sprints, milestones, or releases in which they'll be worked on or shipped. 


<a id="schedule">   </a>

## Schedule new sprints for different teams and release cadences 
 
> [!NOTE]    
> Your sprint backlog and taskboard are designed to support your Scrum processes. In addition, you have access to product and portfolio backlogs and Kanban boards. For an overview of the features supported on each backlog and board, see [Backlogs, boards, and plans](../backlogs/backlogs-boards-plans.md).  

Your project comes with several sprints predefined. However, they aren't associated with any dates. For Scrum and sprint planning, you'll want to assign start and end dates for the sprints your team will use.   

Defining other sprints is a two-step process. You first define the sprints for your project and then you select the sprints that each team will use&mdash;[Define iteration (sprint) paths and configure team iterations](../../organizations/settings/set-iteration-paths-sprints.md). In this way, the system supports teams that work on different sprint cadences.  

[![Define project sprints](media/define-sprints-project-level.png)](../../organizations/settings/set-area-paths.md)[![Select team sprints](media/define-sprints-team-level.png)](../../organizations/settings/set-iteration-paths-sprints.md)

Each sprint that you select for your team provides access to a [sprint backlog, taskboard, and other sprint planning tools](scrum-overview.md) for planning and tracking work. 

For example, by selecting Sprints 1 through 6, the Fabrikam Fiber team gets access to six sprint backlogs. They also get access to capacity planning tools and a taskboard for each sprint. 


::: moniker range=">= azure-devops-2019"

![Selected sprints for a team](media/define-sprints/selected-team-iterations-agile.png)



::: moniker-end


::: moniker range="<= tfs-2018"

![Selected sprints for a team](media/define-sprints/selected-team-iterations-vsts.png)


::: moniker-end


## Next step

> [!div class="nextstepaction"]
> [Assign work to a sprint](assign-work-sprint.md) or [Define iteration (sprint) paths and configure team iterations](../../organizations/settings/set-iteration-paths-sprints.md)

## Related articles 

If you work with several teams, and each team wants their own backlog view, you can [create more teams](../../organizations/settings/add-teams.md). Each team then gets access to their own set of Agile tools. Each Agile tool filters work items. These items only include those assigned values under the team's default area path and iteration path.