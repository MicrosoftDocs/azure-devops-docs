---
title: Enable live updates for a Kanban board
titleSuffix: Azure Boards
description: Turn live updates on or off for a  Kanban board in Azure Boards or Team Foundation Server
ms.custom: boards-kanban 
ms.topic: quickstart
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
monikerRange: '>= tfs-2017'
ms.date: 02/14/2019
---


<a id="live-updates"></a>

# Enable live updates 

[!INCLUDE [temp](../_shared/version-vsts-tfs-2017-on.md)]

Enable live updates to automatically refresh your Kanban board when changes occur. As other team members move or reorder cards, your board will automatically update with the changes. With live updates enabled, you no longer have to press F5 to see the latest changes.  

[!INCLUDE [temp](../_shared/prerequisites-kanban.md)]

::: moniker range=">= azure-devops-2019"

Choose the ![ ](../_img/icons/view-options-icon.png) view options icon and move the slider for **Live updates** to On.  

> [!div class="mx-imgBorder"]  
> ![Kanban board](_img/turn-live-updates-on-agile.png) 

::: moniker-end


::: moniker range=">= tfs-2017 <= tfs-2018" 

Choose the ![ ](../_img/icons/live-updates-icon.png) **Live updates** icon.  

![Kanban board, live updates icon](/azure/devops/boards/_shared/_img/kanban-live-updates.png)  
As one team member updates the status of a work item, other team members will see those updates in real time as they occur.  

![Live update](_img/kanban-live-updates.gif)  

::: moniker-end


## Related articles

- [Filter your Kanban board](filter-kanban-board.md)
- [Customize cards](customize-cards.md)     
 