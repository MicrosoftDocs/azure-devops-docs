---
title: Set Kanban board card reordering
titleSuffix: Azure Boards
description: Learn how to use the Kanban board, process, and tools reorder Kanban board cards in Azure Boards and Team Foundation Server.
ms.custom: boards-kanban 
ms.service: azure-devops-boards
ms.assetid: BDB9CF5A-D83C-4823-BD53-29D49F797FB4
ms.author: chcomley
author: KathrynEE
ms.topic: how-to  
monikerRange: '<= azure-devops'
ms.date: 07/26/2022
---


# Reorder cards on your Kanban board  

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]  

<a id="reorder-cards"></a>

You can drag any work item to any column or swimlane on the Kanban board. You can even change the order of items as you move a card to a new column. 

![Reorder cards while changing columns](media/8_7_02.gif)

::: moniker range=">= azure-devops-2022"

In addition to the dynamic card reordering, you can also move a card to a specific column position.  
::: moniker-end

<a id="card-reorder-note"></a>

> [!NOTE]   
> The last column, typically the **Closed** or **Done** column, is always ordered by *Closed Date* with the most recently closed items appearing towards the top of the column. In all other columns, cards are ordered by the backlog order or they're reordered based on the Card reordering setting selected.  

[!INCLUDE [temp](../includes/prerequisites-team-settings.md)]

<a id="move-to-column-position"></a>

::: moniker range=">= azure-devops-2022"

## Move a card to a specific column position

You can re-order the work items within a Kanban board column by choosing &hellip;**Work items action menu**, selecting **Move to position**, and then specifying a value in the dialog.  

> [!NOTE]   
> The **Move to column position** feature requires you to enable the **New Boards Hub** preview feature. To enable this feature, see [Manage or enable features](../../project/navigation/preview-features.md).
 
Specify a value within the range listed, which corresponds to the number of items currently in the column. 

:::image type="content" source="media/reorder/move-to-position.png" alt-text="Screenshot of Boards, Move to column position dialog.":::

::: moniker-end


<a id="card-reorder-setting"></a>

## Set the team preference for reordering cards

If you want to preserve the backlog priority when you move a card to a new column, you can change the Kanban board card reordering setting for your team. 

::: moniker range=">= azure-devops-2019"

1. [Open your Kanban board](kanban-quickstart.md). If you're not a team admin, [get added as one](../../organizations/settings/add-team-administrator.md). Only team and project admins can customize the Kanban board.

1. Choose the  :::image type="icon" source="../../media/icons/blue-gear.png" border="false":::  gear icon to configure the board and set general team settings.  

	> [!div class="mx-imgBorder"]
	> ![Open board settings for a team, vert nav](../../organizations/settings/media/configure-team/open-board-settings.png)  

2. Choose **Card reordering** and select from the two reordering  behaviors listed.  

	> [!div class="mx-imgBorder"]  
	> ![Settings dialog, Card reordering dialog](../../boards/boards/media/kanban-card-reordering-up1.png) 

	The setting you choose applies to all active Kanban boards for your team.  

3. When done with your changes, choose **Save**.

::: moniker-end 


::: moniker range="tfs-2018"

1. [Open your Kanban board](kanban-quickstart.md). If you're not a team admin, [get added as one](../../organizations/settings/add-team-administrator.md). Only team and project admins can customize the Kanban board.

1. Choose ![settings icon](../../media/icons/team-settings-gear-icon.png) to open the common configuration settings dialog for the Kanban board. 

	![Kanban board, open common configuration settings](media/add-columns-open-settings-ts.png)  

2. Choose **Card reordering** and select from the two reordering behaviors listed.  

	> [!div class="mx-imgBorder"]  
	> ![Settings dialog, Card reordering dialog](../../boards/boards/media/kanban-card-reordering-up1.png) 

	The setting you choose applies to all active Kanban boards for your team.  

3. When done with your changes, choose **Save**.

	> [!TIP]
	> You can drag-and-drop work items onto a sprint from any backlog or board. To add sprints to a team backlog, see [Define iteration (sprint) paths and configure team iterations](../../organizations/settings/set-iteration-paths-sprints.md). 

::: moniker-end


## Related articles   

* [Backlog priority or stack rank order](../backlogs/backlogs-overview.md#stack-rank)
* [Customize cards](../../boards/boards/customize-cards.md)   

