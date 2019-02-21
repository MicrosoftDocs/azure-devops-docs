---
title: Kanban quickstart 
titleSuffix: Azure Boards
description: Use the Kanban board to plan and track work in Azure Boards and Team Foundation Server 
ms.custom: boards-kanban 
ms.topic: quickstart
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 4942A638-9888-461E-969D-0BB9B1FE1736
ms.topic: quickstart
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
monikerRange: '>= tfs-2013'
ms.date: 02/14/2019
---

# Start using your Kanban board

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

Your Kanban board turns your backlog into an interactive signboard, which provides a visual flow of work. As work progresses from idea to completion, you update the items on the board. Each column represents a work stage. Each card represents a backlog item, user story, or bug at that stage of work. 

> [!div class="mx-imgBorder"]  
> ![Kanban board](_img/quickstart/intro-view.png) 

User stories and bugs correspond to types of work items. You use [work items](../backlogs/add-work-items.md) to share information, assign work to team members, update status, track dependencies, and more.

[!INCLUDE [temp](../_shared/prerequisites-kanban.md)]

## Add a Kanban board

Each Kanban board is associated with a team and a work item type. For the Agile process, the three boards are Stories, Features, and Epics.

When you add a team, you add a number of team assets. A team admin can configure the assets to support the way the team works. To add a set of Kanban boards to support a new team, [add a team](../../organizations/settings/add-teams.md). 

::: moniker range="azure-devops" 
To add a board to support an additional portfolio backlog, see [Customize your backlogs or boards](../../organizations/settings/work/customize-process-backlogs-boards.md).
::: moniker-end 

::: moniker range="<= azure-devops-2019"   
To add a board to support an additional portfolio backlog level, see [Add a portfolio backlog level](../../reference/add-portfolio-backlogs.md).
::: moniker-end   

[!INCLUDE [temp](../_shared/open-kanban-board.md)] 


<a id="add-work-items"> </a>
## Add work items 

0. To add a work item, select the ![ ](../_img/icons/add_icon.png) plus sign, enter a title, and then press Enter. 

::: moniker range=">= azure-devops-2019"

To add a work item, select the ![ ](../_img/icons/add_icon.png) plus sign, enter a title, and then press Enter. 

> [!div class="mx-imgBorder"]  
> ![Add a new item on Kanban board, new nav](_img/quickstart/add-new-item-agile.png) 

The system automatically saves the work item with the title you entered. You can add as many work items you want by using this method. 

::: moniker-end


::: moniker range="<= tfs-2018"

To add a work item, select the ![ ](../_img/icons/add_icon.png) plus sign, enter a title, and then press Enter. 

> [!div class="mx-imgBorder"]  
> ![Add a new item on Kanban board, prev nav](_img/quickstart/add-new-item-standard.png)

The system automatically saves the work item with the title you entered. You can add as many work items you want by using this method. 


::: moniker-end


To add details to any work item, select the title. Or, you can directly modify any field that displays. For example, you can reassign a work item by selecting **Assigned To**. For a description of each field, see [Create your backlog, Add details and estimates](../backlogs/create-your-backlog.md#estimates). 

To customize the set of fields displayed on the card, see [Customize cards](../../boards/boards/customize-cards.md).

<a id="update-status">  </a>
## Update status by dragging

As work completes in one stage, update the status of an item by dragging it to a downstream stage. 

![Kanban board, Agile template, update status of work item](_img/ALM_CC_MoveCard.png)  

::: moniker range=">= tfs-2015"
## Update fields from the card 

You can quickly update a field or reassign ownership directly from the board. If the field you want to update isn't showing, then [customize the card to show it](../../boards/boards/customize-cards.md). 

![Kanban, assign items](_img/ALM_CC_UpdateFieldOnCard.png)


::: moniker-end

::: moniker range=">= azure-devops-2019"
## Invite others to work on your Kanban board 

All members of a project can view and contribute to your Kanban board. To invite users to contribute, copy the URL of your Kanban board and email it to people you want to invite to your project. 

<img src="_img/kanban-basics-url.png" alt="Browser URL for the Kanban board" style="border: 1px solid #C3C3C3;" /> 

To add users to your project, see [Add users to a project](../../organizations/security/add-users-team-project.md).   
::: moniker-end

## Try this next 

To get the full power of the Kanban board, configure it to map the flow of work and set WIP limits for your team. To configure the Kanban board, you must be [added as a team administrator](../../organizations/settings/add-team-administrator.md) or be a member of the Project Administrators group. If you're the organization owner or creator of the project, then you have these permissions. 

> [!div class="nextstepaction"]
> [Kanban basics](kanban-basics.md)  




 
 

