---
title: Plan and track SAFe® projects
titleSuffix: Azure Boards
description: How to plan and track epics, release trains, and multiple backlogs in Azure Boards to support SAFe® practices
ms.technology: devops-agile
ms.prod: devops
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
monikerRange: '>= tfs-2013'
ms.date: 05/01/2020
---


# Plan and track epics, release trains, and multiple backlogs to support SAFe&reg; practices 

[!INCLUDE [temp](../includes/version-vsts-tfs-all-versions.md)]

Once you've configured your Agile tools to support SAFe, trace relationships can be created from stories all the way up to epics. Additionally, you can view progress from the portfolio, program, and feature team levels.  

## Map features to epics and stories to features

The program team can map features to epics using the mapping pane. Feature teams can use the same experience to map their stories to features.
 

![Map features to epics](media/safe-map-features-to-epics.png)  

## Portfolio team's view of progress

To track the progress of epics that span Releases, the Portfolio team's backlog shows epics. Each epic can be expanded to show the features and user stories that support it.


![Hierarchy of epics, features, and stories](media/safe-portfolio-progress-view-epics-to-stories-any-team.png)  

The Portfolio team can also view the progress of epics on their Kanban board.

![Epic Kanban board](media/safe-epics-kanan-board.png)  

 
> [!TIP]  
> You can also [customize the card color based on various criteria](../../boards/boards/customize-cards.md#style-rule), such as the Value Area=Architectural, by applying styling rules.  


### View Progress Rollup

<!--- To be provided --> 

### View Feature Timeline

<!--- To be provided --> 

### View Delivery Plans  

<!--- To be provided --> 

## Program teams' progress view 

Program teams, primarily concerned with Release Trains, can see the features in their backlog, along with the PIs with which they're associated.

![Program team backlog of features and stories](media/safe-fiber-suite-features-to-stories.png)  

Just like the Portfolio team, they can also toggle their view to see which epics their features support, or the user stories that support their features, or both.  

Another view available to program teams shows query-based graphs of release train progress, backlog items, or active tasks during a shipping sprint. A customizable home page view is available to each team.

![Team dashboard](media/safe-team-dashboard.png)  

Since so much of a program team's work revolves around PIs and Release Trains, a custom report showing the scheduled shipping dates and what is projected to be on any given train might be useful. In addition, you can take advantage of the [rich reporting options and built-in reports](../../report/dashboards/overview.md).

### View Feature Timeline

<!--- To be provided --> 

### View Delivery Plans  

<!--- To be provided --> 

## Feature teams' view of progress

For individual feature teams, their backlog view shows the Stories that they're working on.

![Migrate feature team backlog of stories](media/safe-migrate-feature-team-stories.png)  

Because feature teams don't own epics or features, epics and features don't appear in their team-level backlog views. However, if the team wants to know which epics and features their stories support, they can turn on those views from their backlog.

![Migrate team backlog of stories to epics](media/safe-migrate-team-stories-to-epics.png)  

They can also break down their work into tasks and use the taskboard to keep themselves on track during specific sprints.

![Migrate team Sprint 3 taskboard](media/safe-migrate-sprint3-task-board.png)

The chart view of queries becomes very useful in the Innovation and Planning (IP) sprint, when feature teams work together to stabilize the features scheduled for a Release.  

![Bug charts](media/safe-feature-team-active-bug-charts.png)  

For everything else, it is very much business as usual for individual feature teams. They can sprint in their usual cadences, use their Kanban board and taskboard to track progress and break down work into manageable chunks.  

However, now their progress on individual stories is visible to their program and portfolio management teams. The management view reflects what they do.
  
## Try this next

> [!div class="nextstepaction"]
> [How to configure Azure Boards to support SAFe® practices](safe-configure-boards.md) 

## Related articles

<!--- To be provided --> 
