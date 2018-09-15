---
title: About Kanban and Agile project management
titleSuffix: Azure Boards and TFS
description: Use the web portal to support Kanban, plan and track work, and monitor progress in Azure Boards & Team Foundation Server   
ms.technology: devops-agile
ms.prod: devops
ms.assetid:  
ms.manager: douge
ms.author: kaelli
author: KathrynEE
ms.topic: overview
monikerRange: '>= tfs-2013'
ms.date: 09/13/2018
--- 

# About Kanban and Agile project management 

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]
 
Your Kanban board provides you with a visual interactive space for you and your team to plan and show progress. With it, your team can track the critical information they need by seeing which work items are in progress, where the bottlenecks are, who work is assigned to, and more.

Boards present work items as cards and support quick status updates through drag-and-drop, similar to sticky notes on a physical whiteboard. 

## Product and portfolio boards 

Each [product and portfolio backlog](../backlogs/backlogs-overview.md) has a corresponding Kanban board. both backlogs and boards are associated with a team, and display work items based on the area and iteration paths selected by the team as described in [Set team defaults](../../organizations/settings/set-team-defaults.md). 

Each board supports many Kanban practices such as defining columns and swimlanes, setting Work-in-Progress (WIP) limits, defining the Definition of Done, and more. To get started, see [Kanban quickstart](../boards/kanban-quickstart.md). 

# [New navigation](#tab/new-nav)
::: moniker range="vsts"
![New Navigation, Kanban board, Agile template](../work-items/_img/about-agile/view-boards-agile.png)   

::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2018"
[!INCLUDE [temp](../_shared/new-agile-hubs-feature-not-supported.md)] 
::: moniker-end 

# [Previous navigation](#tab/previous-nav)

::: moniker range=">= tfs-2017"   
![Kanban board, Agile template](_img/kanban-basics-intro.png)     
::: moniker-end   
::: moniker range=">= tfs-2013 <= tfs-2015"    
> [!div class="mx-imgBorder"]  
> ![TFS 2015, Kanban board, Agile template](_img/overview/kanban-basics-intro-tfs.png)       
::: moniker-end   

---


## Customize your Kanban board

Your Kanban board is highly customizable to support your team's workflow. 

The main steps you'll typically want to follow are outlined below. 


[![Configure Kanban board](../backlogs/_img/overview/gs-planning-configure-kanban.png)](kanban-basics.md)[![Update the Kanban board](../backlogs/_img/overview/gs-planning-track-kanban.png)](kanban-basics.md)[![Monitor progress](../backlogs/_img/overview/gs-planning-monitor-kanban.png)](../../report/dashboards/cumulative-flow.md)


## Update work item status
::: moniker range=">= tfs-2015"
Once you've configured your Kanban board, you can add work items directly to the board. You can then update the status of work by dragging a card to another column on the Kanban board. You can even change the order of items as you move a card to a new column.   

![Reorder cards while changing columns](https://i3-vso.sec.s-msft.com/dynimg/IC822185.gif)

::: moniker-end

::: moniker range="tfs-2013"
Once you've configured your Kanban board, you can add work items directly to the board. You can then update the status of work by dragging a card to another column on the Kanban board. 
::: moniker-end

<a id="limits-multi-team" />
## Limitations of multi-team Kanban board views 

While the management teams you configure can use the Kanban board to monitor feature progress by turning on the Features backlog, there are limitations inherent within these views. Even if the management team and the feature teams configure their Feature [Kanban board columns](add-columns.md) with identical workflow mapping, updating the Features on one team's Kanban board won't be reflected on another team's Kanban board. 
Only when the work item state changes does the card column reflect the same on all boards.

> [!IMPORTANT]   
>Work items that appear on more than one team's Kanban board can yield query results that don't meet your expectations. Because each team can customize the Kanban board columns and swimlanes, the values assigned to work items which appear on different boards may not be the same. The primary work around for this issue is to maintain single ownership of work items by [team area path](../../organizations/settings/../../organizations/settings/set-team-defaults.md). Another option is to add custom workflow states which all teams can use. For details, see [Customize your work tracking experience](../../reference/customize-work.md). 



## Try this next  

Take these tools for a test run by [signing up for free](../get-started/index.md). From there, you're ready to add items to your Kanban board and customize it. 

> [!div class="nextstepaction"]
> [Kanban quickstart](kanban-quickstart.md)  
  

## Related articles 
- [Web portal navigation](../../project/navigation/index.md) 
- [Backlogs, portfolios, and Agile project management](../backlogs/backlogs-overview.md) 
- [About work items](../work-items/about-work-items.md)  

 




 