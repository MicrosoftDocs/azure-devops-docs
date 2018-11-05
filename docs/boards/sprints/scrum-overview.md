---
title: Implement Scrum, track work in sprints
titleSuffix: Azure Boards and TFS 
description: Implement Scrum, track work, monitor progress and trends in Azure Boards & Team Foundation Server  
ms.custom: boards-sprints
ms.technology: devops-agile
ms.prod: devops
ms.assetid:  
ms.manager: douge
ms.author: kaelli
author: KathrynEE
ms.topic: overview
monikerRange: '>= tfs-2013'
ms.date: 10/12/2018
---

# About Sprints, Scrum and project management 

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)] 

The Scrum method uses sprints to plan work to perform by a team within a specific time period and cadence. To get started, several sprints are predefined for your team.  If you're new to Scrum, get an overview from [What is Scrum?](/azure/devops/learn/agile/what-is-scrum). 


## Sprint backlogs and taskboards

Sprint backlogs and taskboards provide a filtered view of work items a team has assigned to a specific iteration path, or sprint. Sprints are defined for a project and then selected by teams. From your backlog, you can map work to an iteration path using drag-and-drop, and then view that work in a separate **sprint backlog**. 

[!INCLUDE [temp](../../_shared/new-navigation.md)] 

# [New navigation](#tab/new-nav)
::: moniker range="vsts"
![New Navigation, Boards>Sprints>Backlog](../work-items/_img/view-add/view-sprint-backlogs.png)    
::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2018"
[!INCLUDE [temp](../../_shared/new-navigation-not-supported.md)] 
::: moniker-end 

# [Previous navigation](#tab/previous-nav)

::: moniker range=">= tfs-2017"
!["Web portal, choose Boards>Backlogs, Sprint](../work-items/_img/view-add/view-sprint-backlog.png)
::: moniker-end
::: moniker range=">= tfs-2013 <= tfs-2015"
![Boards>backlogs, TFS 2015, 2013 web portal](_img/IC795962.png)
::: moniker-end

---

## Implement Scrum 

[![Schedule sprints](../backlogs/_img/overview/gs-planning-define-sprints.png)](define-sprints.md)[![Plan a sprint](../backlogs/_img/overview/gs-planning-plan-sprint.png)](assign-work-sprint.md)[![Monitor sprint progress](../backlogs/_img/overview/gs-planning-monitor-sprint.png)](task-board.md)[![Forecast](../backlogs/_img/overview/gs-planning-forecast.png)](forecast.md)

You can quickly assign work items to a sprint by dragging and dropping them from the product backlog to the sprint. 


## How selected sprints show up on the backlog 
Each sprint that you select for your team provides access to a sprint backlog, taskboard, and other Agile tools for planning and tracking work. 

<a id="ts-sprints" /> 

# [New navigation](#tab/new-nav)
::: moniker range="vsts"

0. You can gain an overview of your sprint planning by turning the **Planning** view option on. From the product backlog or any sprint backlog, choose the ![ ](../../_img/icons/view-options-icon.png) view options icon and select **Planning**.

	> [!div class="mx-imgBorder"]
	> ![New Navigation, Boards>Backlogs>Planning pane](_img/overview/sprints-new-nav.png)

	The set of sprints selected for your team appears. If you don't see any sprints listed, you can add sprints or select existing sprints for your team's use. To learn how, see [Define sprints](define-sprints.md). 

0. To select a sprint backlog, you can choose one of the sprint links from the **Planning** pane, or from a Sprint backlog, choose a sprint from the sprint selector.  

	> [!div class="mx-imgBorder"]
	> ![New Navigation, Boards>Sprints>Sprint selector](_img/overview/select-a-sprint-new-nav.png)

::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2018"
[!INCLUDE [temp](../../_shared/new-navigation-not-supported.md)] 
::: moniker-end 

# [Previous navigation](#tab/previous-nav)

::: moniker range=">= tfs-2017"  

For example, by selecting Sprints 1 thru 6, the Fabrikam Fiber team gets access to six sprint backlogs. They also get access to capacity planning tools and a taskboard for each sprint.  

<img src="_img/define-sprints/selected-team-iterations-vsts.png" alt="Azure Boards and TFS 2017, Selected iterations generate sprint backlogs" style="border: 2px solid #C3C3C3;" />

::: moniker-end  

::: moniker range=">= tfs-2013 <= tfs-2015"  

<a id="tfs2015-sprints" />

For example, by selecting Sprints 1 thru 4, the Fabrikam Fiber team gets access to four sprint backlogs. They also get access to capacity planning tools and a taskboard for each sprint.  

<img src="_img/selected-iterations-generate-sprint-backlogs.png" alt="TFS 2015 and TFS 2013, Selected iterations generate sprint backlogs" style="border: 2px solid #C3C3C3;" />

::: moniker-end  

## Try this next
> [!div class="nextstepaction"]
> [Schedule sprints](define-sprints.md) 


## Related articles 
- [Sprints and Scrum key concepts](scrum-key-concepts.md) 
- [Web portal navigation](../../project/navigation/index.md) 
- [Backlogs, portfolios, and Agile project management](../backlogs/backlogs-overview.md) 
- [About work items](../work-items/about-work-items.md)  

 


