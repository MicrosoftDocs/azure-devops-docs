---
title: Manage sprint timelines while working in Scrum
titleSuffix: Azure Boards  
description: Learn how to add and set dates for sprints, releases, or iterations to implement Scrum in Azure Boards. 
ms.custom: boards-sprints
ms.service: azure-devops-boards
ms.assetid: 1DB81E71-36D7-43A5-9C9A-38AA1777715A
ms.author: chcomley
author: chcomley
ms.topic: quickstart
monikerRange: '<= azure-devops'
ms.date: 09/20/2021
---


# Manage sprint timelines 

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)] 

With Scrum, teams plan and track work at regular time intervals, referred to as a sprint cadence. You define Iteration Paths, also referred to as *sprints*, to support the assignment of work items to time-box intervals. Iteration paths are a shared resource used by all teams that select them. Many teams choose a two or three week cadence. You can, however, specify shorter or longer sprint cycles. Or, you can create a release schedule that encompasses several sprints.  

> [!TIP]
> If all you need is to change the iteration dates, you can do that by following the guidance provided in this article.  However, if you need to define the iteration paths and tree structure, or assign team sprints, then follow the guidance provided in [Define iteration paths (sprints) and configure team iterations](../../organizations/settings/set-iteration-paths-sprints.md). 
 

## Prerequisites

| Category | Requirements |
|--------------|-------------|
| **Permissions** | To change sprint dates: Member of the [**Project Administrators** group](../../organizations/security/change-project-level-permissions.md), or **Edit this node** permission for the iteration child node you want to change. By default, the user who created the project has these permissions set. For more information, see [Change project-level permissions](../../organizations/security/change-project-level-permissions.md) or [Set permissions and access for work tracking](../../organizations/security/set-permissions-access-work-tracking.md). | 

<a id="quick-start-schedule">   </a>

## Start scheduling sprints

To quickly get started, you can use the default sprints. Default sprints are also referred to as iterations and were added when your project was created. Note, be a member of the [**Project Administrators** group](../../organizations/security/change-project-level-permissions.md) to add sprints and schedule sprint dates. If you created the project, you're a member. 

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



That's it! You can now start [planning your first sprint](assign-work-sprint.md). 

If you have several teams, more complex release and sprint cadences to schedule, or want to create child iterations, then read further. You define these items through the settings context for the project. See [Define iteration (sprint) paths and configure team iterations](../../organizations/settings/set-iteration-paths-sprints.md). 

> [!NOTE]
> **Terminology note:** Your set of Agile tools uses the Iteration Path field to track sprints and releases. When you define sprints, you define the picklist of values available for the [Iteration Path](../../organizations/settings/set-area-paths.md) field. You use iterations to group work into sprints, milestones, or releases in which they'll be worked on or shipped. 


<a id="schedule">   </a>

## Schedule new sprints for different teams and release cadences 
 
> [!NOTE]    
> Your sprint backlog and taskboard are designed to support your Scrum processes. In addition, you have access to product and portfolio backlogs and boards. For an overview of the features supported on each backlog and board, see [Backlogs, boards, and plans](../backlogs/backlogs-boards-plans.md).  

Your project comes with several sprints predefined. However, they aren't associated with any dates. For Scrum and sprint planning, assign start and end dates for your team's sprints.

Defining other sprints is a two-step process. You first define the sprints for your project and then you select the sprints for each team to use&mdash;[Define iteration (sprint) paths and configure team iterations](../../organizations/settings/set-iteration-paths-sprints.md). In this way, the system supports teams that work on different sprint cadences.  

[![Define project sprints](media/define-sprints-project-level.png)](../../organizations/settings/set-area-paths.md)[![Select team sprints](media/define-sprints-team-level.png)](../../organizations/settings/set-iteration-paths-sprints.md)

Each sprint that you select for your team provides access to a [sprint backlog, taskboard, and other sprint planning tools](scrum-overview.md) for planning and tracking work. 

For example, by selecting Sprints 1 through 6, the Fabrikam Fiber team gets access to six sprint backlogs. They also get access to capacity planning tools and a taskboard for each sprint. 


::: moniker range=">= azure-devops-2019"

![Selected sprints for a team](media/define-sprints/selected-team-iterations-agile.png)



::: moniker-end





## Next step

> [!div class="nextstepaction"]
> [Assign work to a sprint](assign-work-sprint.md) or [Define iteration (sprint) paths and configure team iterations](../../organizations/settings/set-iteration-paths-sprints.md)

## Related articles 

If you work with several teams, and each team wants their own backlog view, you can [create more teams](../../organizations/settings/add-teams.md). Each team then gets access to their own set of Agile tools. Each Agile tool filters work items. These items only include those assigned values under the team's default area path and iteration path.