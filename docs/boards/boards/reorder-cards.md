---
title: Set Kanban board card reordering
titleSuffix: Azure Boards
description: Use the Kanban board, process, and tools to plan and track work in Azure Boards and Team Foundation Server 
ms.custom: boards-kanban 
ms.technology: devops-agile
ms.prod: devops
ms.assetid: BDB9CF5A-D83C-4823-BD53-29D49F797FB4
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
monikerRange: '>= tfs-2015'
ms.date: 02/14/2019
---


# Reorder cards  
[!INCLUDE [temp](../_shared/version-vsts-tfs-2015-on.md)]  
<a id="reorder-cards"></a>

You can drag any work item to any column or swimlane on the Kanban board. You can even change the order of items as you move a card to a new column. 

![Reorder cards while changing columns](https://i3-vso.sec.s-msft.com/dynimg/IC822185.gif)

<a id="card-reorder-note"></a>

The last column, typically the **Closed** or **Done** column, is always ordered by *Closed Date* with the most recently closed items appearing towards the top of the column. In all other columns, cards are ordered by the backlog order or they are reorder based on the Card reordering setting selected.  

[!INCLUDE [temp](../_shared/prerequisites-team-settings.md)]


<a id="card-reorder-setting"></a>

## Set card reordering team preference  

If you want to preserve the backlog priority when you move a card to a new column, you can change the Kanban board card reordering setting for your team. 

::: moniker range=">= azure-devops-2019"

0.  [Open your Kanban board](kanban-quickstart.md). If you're not a team admin, [get added as one](../../organizations/settings/add-team-administrator.md). Only team and project admins can customize the Kanban board.

0. Choose the ![](../../_img/icons/blue-gear.png) gear icon to configure the board and set general team settings.  

	> [!div class="mx-imgBorder"]
	> ![Open board settings for a team, vert nav](../../organizations/settings/_img/configure-team/open-board-settings.png)  

0. Choose **Card reordering** and select from the two reordering  behaviors listed.  

	> [!div class="mx-imgBorder"]  
	> ![Settings dialog, Card reordering dialog](../../boards/boards/_img/kanban-card-reordering-up1.png) 

	The setting you choose applies to all active Kanban boards for your team.  

0. When done with your changes, choose **Save**.

::: moniker-end 


::: moniker range="tfs-2015"
> [!NOTE]  
> Reordering cards is supported on TFS 2015.1 and later versions.  
::: moniker-end

::: moniker range=">= tfs-2015 <= tfs-2018"

0.  [Open your Kanban board](kanban-quickstart.md). If you're not a team admin, [get added as one](../../organizations/settings/add-team-administrator.md). Only team and project admins can customize the Kanban board.

0. Choose ![settings icon](../../_img/icons/team-settings-gear-icon.png) to open the common configuration settings dialog for the Kanban board. 

	![Kanban board, open common configuration settings](_img/add-columns-open-settings-ts.png)  

0. Choose **Card reordering** and select from the two reordering behaviors listed.  

	> [!div class="mx-imgBorder"]  
	> ![Settings dialog, Card reordering dialog](../../boards/boards/_img/kanban-card-reordering-up1.png) 

	The setting you choose applies to all active Kanban boards for your team.  

0. When done with your changes, choose **Save**.

	> [!TIP]
	> You can drag-and-drop work items onto a sprint from any backlog or board. To add sprints to a team backlog, see [Define iteration paths (aka sprints) and configure team iterations](../../organizations/settings/set-iteration-paths-sprints.md). 

::: moniker-end


## Related articles   

* [Backlog priority or stack rank order](../backlogs/backlogs-overview.md#stack-rank)
* [Customize cards](../../boards/boards/customize-cards.md)   

