---
title: Enable live updates for a Kanban board
titleSuffix: Azure Boards
description: Turn live updates on or off for a  Kanban board in Azure Boards or Team Foundation Server
ms.custom: boards-kanban 
ms.topic: how-to
ms.technology: devops-agile
ms.author: kaelli
author: KathrynEE
monikerRange: '>= tfs-2017'
ms.date: 02/14/2019
---




# Enable live updates 

[!INCLUDE [temp](../includes/version-vsts-tfs-2017-on.md)]

<a id="live-updates"></a>

Enable live updates to automatically refresh your Kanban board when changes occur. As other team members move or reorder cards, your board will automatically update with the changes. With live updates enabled, you no longer have to press F5 to see the latest changes.  

[!INCLUDE [temp](../includes/prerequisites-kanban.md)]

::: moniker range=">= azure-devops-2019"

Choose the :::image type="icon" source="../media/icons/view-options-icon.png" border="false"::: view options icon and move the slider for **Live updates** to On.  

> [!div class="mx-imgBorder"]  
> ![Kanban board](media/turn-live-updates-on-agile.png) 

::: moniker-end


::: moniker range=">= tfs-2017 <= tfs-2018" 

From the Kanban board, choose the :::image type="icon" source="../media/icons/live-updates-icon.png" border="false"::: **Live updates** icon.  

![Kanban board, live updates icon](../media/kanban-live-updates.png)  

::: moniker-end


As one team member updates the status of a work item, other team members will see those updates in real time as they occur.  

![Live update](media/kanban-live-updates.gif)  



[!INCLUDE [temp](../includes/note-kanban-boards-teams.md)]

## Related articles

- [Filter your Kanban board](../backlogs/filter-backlogs-boards-plans.md)
- [Customize cards](customize-cards.md)     
