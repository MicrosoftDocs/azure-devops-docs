---
title: Kanban quickstart 
titleSuffix: VSTS & TFS
description: Use the Kanban board to plan and track work in Visual Studio Team Services and Team Foundation Server 
ms.global_help.title: View or add a Kanban board
ms.global_help.keywords: ms.vss-work-web.boards-hub, 1  
ms.topic: get-started-article
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 4942A638-9888-461E-969D-0BB9B1FE1736
ms.topic: quickstart
ms.manager: douge
ms.author: kaelliauthor: KathrynEE
ms.date: 06/21/2018
---

# Get started using your Kanban board

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

Your Kanban board turns your backlog into an interactive signboard, providing a visual flow of work. As work progresses from idea to completion, you update the items on the board. Each column represents a work stage, and each card represents a backlog item, user story, or bug at that stage of work. 

> [!div class="mx-imgBorder"]  
> ![Kanban board](_img/quickstart/intro-view.png) 

User stories and bugs correspond to types of work items. You use [work items](../backlogs/add-work-items.md) to share information, assign work to team members, update status, track dependencies, and more.

[!INCLUDE [temp](../_shared/prerequisites.md)]

## Add a Kanban board

Each Kanban board is associated with a team and a work item type. For the Agile process, the three boards are Stories, Features, and Epics.

When you add a team, you add a number of team assets which a team admin can  configure to support the way the team works. To add a set of Kanban boards to support a new team, [add a team](../scale/multiple-teams.md). 

::: moniker range="vsts" 
To add a board to support an additional portfolio backlog, see [Customize your backlogs or boards](../../organizations/settings/work/customize-process-backlogs-boards.md).
::: moniker-end 
::: moniker range=">= tfs-2013 <= tfs-2018"   
To add a board to support an additional portfolio backlog, see [Add a portfolio backlog level](../customize/add-portfolio-backlogs.md).
::: moniker-end   

[!INCLUDE [temp](../_shared/open-kanban-board.md)] 


<a id="add-work-items"> </a>
## Add work items 

0. To add a work item, simply choose the ![](../_img/icons/add_icon.png) plus sign, enter a title, and then press Enter on your keyboard. 

# [New navigation](#tab/new-nav)

::: moniker range="vsts"

To add a work item, simply choose the ![](../_img/icons/add_icon.png) plus sign, enter a title, and then press Enter on your keyboard. 

> [!div class="mx-imgBorder"]  
> ![Add a new item on Kanban board, agile hub](_img/quickstart/add-new-item-agile.png) 

The system automatically saves the work item with the title you entered. You can add as many work items you want using this method. 

::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2018"
[!INCLUDE [temp](../_shared/new-agile-hubs-feature-not-supported.md)]
::: moniker-end

# [Previous navigation](#tab/previous-nav)

To add a work item, simply choose the ![](../_img/icons/add_icon.png) plus sign, enter a title, and then press Enter on your keyboard. 

> [!div class="mx-imgBorder"]  
> ![Add a new item on Kanban board, standard hub](_img/quickstart/add-new-item-standard.png)


The system automatically saves the work item with the title you entered. You can add as many work items you want using this method. 

---

To add details to any work item, choose the title. Or, you can directly modify any field that displays. For example, you can reassign a work item by clicking the Assigned To field. To customize the set of fields displayed on the card, see [Customize cards](../customize/customize-cards.md).

<a id="update-status">  </a>
## Update status via drag-and-drop

As work completes in one stage, update the status of an item by dragging and dropping it to a downstream stage. 

![Kanban board, Agile template, update status of work item](_img/ALM_CC_MoveCard.png)  

::: moniker range=">= tfs-2015"
## Update fields from the card 

You can quickly update a field or reassign ownership directly from the board. If the field you want to update isn't showing, then [customize the card to show it](../customize/customize-cards.md). 

![Kanban, assign items](_img/ALM_CC_UpdateFieldOnCard.png)


::: moniker-end

::: moniker range="vsts"
## Invite others to work on your Kanban board 

All members of a project will be able to view and contribute to your Kanban board. To invite users to start contributing, copy the URL of your Kanban board and email it to those you want to invite to your project. 

<img src="_img/kanban-basics-url.png" alt="Browser URL for the Kanban board" style="border: 1px solid #C3C3C3;" /> 

To add users to your project, see [Add users to a project](../../organizations/security/add-users-team-project.md)   
::: moniker-end

## Try this next 

To get the full power of the Kanban board working for you, you'll want to configure it to map the flow of work and set WIP limits for your team. To configure the Kanban board, you must be [added as a team administrator](../scale/add-team-administrator.md) or be a member of the Project Administrators group. If you're the organization owner or creator of the project, then you'll have these permissions. 

> [!div class="nextstepaction"]
> [Kanban basics](kanban-basics.md)  


<!---


If you're new to VSTS or TFS and want to understand what you can customize, see [Customize your work tracking experience](../customize/customize-work.md). 

Here are a few things you can do. See at a glance the estimated size of work for each item which displays at the bottom right of each card. Add items to your backlog in the first column. When priorities change, move items up and down within a column. And, as work completes in one stage, update the status of an item by dragging and dropping it to a downstream stage.

Each team can manage their backlog and customize their Kanban board. [Add teams](../scale/multiple-teams.md) when you assign specific feature areas to different teams for development. Each team can then manage their backlog and focus on how they will develop their deliverables. 

Here are some useful tips when working with the Kanban board:
- To quickly assign items to a team member, add the Assign To field to display on the cards (see [Customize cards](../customize/customize-cards.md))   
- Customize cards to show the fields you most care about  
- Add a swimlane to track high-priority work or track work which falls into different service level agreements (see [Swimlanes](expedite-work.md))   
- Highlight specific work items by color coding cards based on a field value or tag (see [Customize cards](../customize/customize-cards.md)) 
- If you use Scrumban, drag-and-drop cards onto a sprint to quickly assign them to a sprint.  


-->

 


 
 

