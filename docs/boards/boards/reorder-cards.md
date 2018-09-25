---
title: Set Kanban board card reordering
titleSuffix: Azure Boards and TFS
description: Use the Kanban board, process, and tools to plan and track work in Azure Boards and Team Foundation Server 
ms.technology: devops-agile
ms.prod: devops
ms.assetid: BDB9CF5A-D83C-4823-BD53-29D49F797FB4
monikerRange: '>= tfs-2013'
ms.manager: douge
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
ms.date: 03/20/2018
---


# Reorder cards  
**Azure DevOps Services | TFS 2018 | TFS 2017 | TFS 2015** 

::: moniker range="tfs-2013"
> [!NOTE]   
> Reordering cards requires TFS 2015.1 or later version.  
::: moniker-end

::: moniker range=">= tfs-2015"
<a id="reorder-cards"></a>

You can drag any work item to any column or swimlane on the Kanban board. You can even change the order of items as you move a card to a new column. 

![Reorder cards while changing columns](https://i3-vso.sec.s-msft.com/dynimg/IC822185.gif)
::: moniker-end


::: moniker range="tfs-2015"
> [!NOTE]  
> Reordering cards is supported on TFS 2015.1 and later versions.  
::: moniker-end

::: moniker range=">= tfs-2015"
> [!TIP]
> You can drag-and-drop work items onto a sprint from any backlog or board. To add sprints to a team backlog, see [Set team defaults](../../organizations/settings/set-team-defaults.md). 


<a id="card-reorder-setting"></a>

## Set card reordering team preference  

If you want to preserve the backlog priority when you move a card to a new column, you can change the Kanban board card reordering setting for your team. 
1. To open, choose the ![ ](../../_img/icons/gear-icon.png) gear icon from your team's Kanban board.  

	![Kanban board, open common configuration settings](_img/customize-cards/open-config-dialog.png)  

	If you're not a team admin, [get added as one](../../organizations/settings/add-team-administrator.md). Only team and project admins can set team settings.  

2. From the Card reordering page you can choose between the two supported behaviors.    
	<img src="../../boards/boards/_img/kanban-card-reordering-up1.png" alt="Kanban board, Card reording configuration dialog" style="border: 1px solid #C3C3C3;" />   

	The setting you choose applies to all active Kanban boards for your team.  

<a id="card-reorder-note"></a>

> [!NOTE]  
> The last column, typically the Closed or Done column, is always ordered by Closed Date with recently Closed showing at the top. In all other columns, cards are ordered by the backlog order or they are reorder based on the Card reordering setting selected.  

::: moniker-end

