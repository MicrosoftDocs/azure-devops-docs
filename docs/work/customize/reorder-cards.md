---
title: Set Kanban board card reordering | VSTS & TFS
description: Use the Kanban board, process, and tools to plan and track work in Visual Studio Team Services (VSTS) and Team Foundation Server (TFS)  
ms.technology: vs-devops-wit
ms.prod: vs-devops-alm
ms.assetid: BDB9CF5A-D83C-4823-BD53-29D49F797FB4
ms.manager: douge
ms.author: kaelli
ms.date: 07/14/2017
--- 


# Reorder cards  
<b>VSTS | TFS 2018 | TFS 2017 | TFS 2015</b> 

> [!NOTE]  
> **Feature availability:** This feature is supported from VSTS or an on-premises TFS 2015.1 or later version.   

<a id="reorder-cards"></a>
You can drag any work item to any column or swimlane on the Kanban board. You can even change the order of items as you move a card to a new column.   

![Reorder cards while changing columns](https://i3-vso.sec.s-msft.com/dynimg/IC822185.gif)

> [!TIP]
> If you work from VSTS and TFS 2015.1 and later versions, you can 
> [drag-and-drop work items onto a sprint from any backlog or board](../scrum/define-sprints.md). 

<a id="card-reorder-setting"></a>
## Set card reordering team preference  

> [!NOTE]  
> **Feature availability:** This feature is currently supported only from VSTS or to an on-premises application server that's been upgraded to TFS 2015 Update 2 or later version.  

If you want to preserve the backlog priority when you move a card to a new column, you can change the Kanban board card reordering setting for your team. 

1. To open, click the ![gear icon](../_img/icons/team-settings-gear-icon.png) gear icon from your team's Kanban board.  

	<img src="_img/kanban-card-customize-open-settings.png" alt="Kanban board, open common configuration settings" style="border: 1px solid #C3C3C3;" />  

	If you're not a team admin, [get added as one](../scale/add-team-administrator.md). Only team and project admins can set team settings.  

2. From the Card reordering page you can choose between the two supported behaviors.    
	<img src="../kanban/_img/kanban-card-reordering-up1.png" alt="Kanban board, Card reording configuration dialog" style="border: 1px solid #C3C3C3;" />   

	The setting you choose applies to all active Kanban boards for your team.  

<a id="card-reorder-note"></a>
> [!NOTE]  
> The last column, typically the Closed or Done column, is always ordered by Closed Date with recently Closed showing at the top. In all other columns, cards are ordered by the backlog order or they are reorder based on the Card reordering setting selected.  




