---
title: Kanban quickstart 
titleSuffix: Azure Boards
description: Use the Kanban board to plan and track work in Azure Boards and Team Foundation Server 
ms.custom: boards-kanban 
ms.topic: quickstart
ms.technology: devops-agile
ms.author: kaelli
author: KathrynEE
monikerRange: '<= azure-devops'
ms.date: 02/11/2021
---

# Start using your Kanban board

[!INCLUDE [temp](../includes/version-all.md)]

Your Kanban board turns your backlog into an interactive signboard, which provides a visual flow of work. As work progresses from idea to completion, you update the items on the board. Each column represents a work stage. Each card represents a backlog item, user story, or bug at that stage of work. 

> [!div class="mx-imgBorder"]  
> ![Kanban board](media/quickstart/intro-view.png) 

User stories and bugs correspond to types of work items. You use [work items](../backlogs/add-work-items.md) to share information, assign work to team members, update status, track dependencies, and more.

[!INCLUDE [temp](../includes/prerequisites-kanban.md)]

## Add a Kanban board

Each Kanban board is associated with a team and a work item type. For the Agile process, the three boards are Stories, Features, and Epics.

When you add a team, you add a number of team assets. A team admin can configure the assets to support the way the team works. To add a set of Kanban boards to support a new team, [add a team](../../organizations/settings/add-teams.md). 

::: moniker range=">= azure-devops-2019" 

To add a board to support an additional portfolio backlog, see [Customize your backlogs or boards](../../organizations/settings/work/customize-process-backlogs-boards.md).

::: moniker-end 

::: moniker range="< azure-devops-2019"

To add a board to support an additional portfolio backlog level, see [Add a portfolio backlog level](../../reference/add-portfolio-backlogs.md).

::: moniker-end   

[!INCLUDE [temp](../includes/open-kanban-board.md)] 


<a id="add-work-items"> </a>

## Add work items 

::: moniker range=">= azure-devops-2019"

To add a work item, select the :::image type="icon" source="../media/icons/add_icon.png" border="false"::: plus sign, enter a title, and then press Enter. 

::: moniker-end

::: moniker range=">= azure-devops-2020"

> [!div class="mx-imgBorder"]  
> ![Add a new item on Kanban board, new nav](media/quickstart/add-new-item-agile-s155.png) 

::: moniker-end

::: moniker range="azure-devops-2019"

> [!div class="mx-imgBorder"]  
> ![Add a new item on Kanban board, new nav](media/quickstart/add-new-item-agile.png) 

::: moniker-end

::: moniker range=">= azure-devops-2019"

The system automatically saves the work item with the title you entered. You can add as many work items you want by using this method. 

::: moniker-end

::: moniker range="<= tfs-2018"

To add a work item, select the :::image type="icon" source="../media/icons/add_icon.png" border="false"::: plus sign, enter a title, and then press Enter. 

> [!div class="mx-imgBorder"]  
> ![Add a new item on Kanban board, prev nav](media/quickstart/add-new-item-standard.png)

The system automatically saves the work item with the title you entered. You can add as many work items you want by using this method. 


::: moniker-end


To add details to any work item, select the title. Or, you can directly modify any field that displays. For example, you can reassign a work item by selecting **Assigned To**. For a description of each field, see [Create your backlog, Add details and estimates](../backlogs/create-your-backlog.md#estimates). 

[!INCLUDE [temp](../includes/note-user-assigned.md)]

To customize the set of fields displayed on the card, see [Customize cards](../../boards/boards/customize-cards.md).

<a id="update-status">  </a>

## Update status 

As work completes in one stage, update the status of an item by dragging it to a downstream stage. 

::: moniker range="<= azure-devops-2020"

> [!NOTE]   
> Users assigned Stakeholder access aren't about to use the drag-and-drop feature to update status. 

::: moniker-end

![Kanban board, Agile template, update status of work item](media/ALM_CC_MoveCard.png)  


::: moniker range=">= tfs-2015"

## Update fields from the card 

You can quickly update a field or reassign ownership directly from the board. If the field you want to update isn't showing, then [customize the card to show it](../../boards/boards/customize-cards.md). 

![Kanban, assign items](media/ALM_CC_UpdateFieldOnCard.png)

::: moniker-end

::: moniker range=">= tfs-2017"

### Filter your board using keywords, field values, or tags

You can apply filters interactively to focus on a subset of work. For example, you can filter the board to focus on work assigned to at team member for a specific sprint. To start filtering, choose **Filter** :::image type="icon" source="../../media/icons/filter-icon.png" border="false":::. . To learn more about applying filters, see [Interactively filter your backlogs, boards, and plans](../backlogs/filter-backlogs-boards-plans.md).

::: moniker-end

::: moniker range=">= tfs-2017 <= azure-devops-2019"

![Enable kanban field-based filtering, earlier versions](../backlogs/media/filter-boards/filter-kb-choose-filter.png)
::: moniker-end

::: moniker range=">= tfs-2017"

For example, here we filter for all items assigned to Jamal and Raisa.

::: moniker-end

::: moniker range=">= azure-devops-2020"
> [!div class="mx-imgBorder"]  
> ![Kanban board, Filter on assignment field](../backlogs/media/filter-boards/filter-kb-filters-chosen-services.png)
::: moniker-end

::: moniker range=">= tfs-2017 <= azure-devops-2019"

![Kanban board, Filter on assignment field, earlier versions](../backlogs/media/filter-boards/filter-kb-filters-chosen.png)
::: moniker-end




## Invite others to work on your Kanban board 

All members of a project can view and contribute to your Kanban board. To invite users to contribute, copy the URL of your Kanban board and email it to people you want to invite to your project.

::: moniker range="azure-devops"

> [!div class="mx-imgBorder"]  
> ![Browser URL for the Kanban board](media/quickstart/kanban-board-url-s155.png)

::: moniker-end

::: moniker range="azure-devops-2019"

> [!div class="mx-imgBorder"]  
> ![Browser URL for the Kanban board](media/quickstart/kanban-board-url.png)

::: moniker-end

::: moniker range="<= tfs-2018"

![Browser URL for the Kanban board](media/kanban-basics-url.png)

::: moniker-end

To add users to your project, see [Add users to a project](../../organizations/security/add-users-team-project.md).   



## Try this next 

To get the full power of the Kanban board, configure it to map the flow of work and set WIP limits for your team. To configure the Kanban board, you must be [added as a team administrator](../../organizations/settings/add-team-administrator.md) or be a member of the Project Administrators group. If you're the organization owner or creator of the project, then you have these permissions. 

> [!div class="nextstepaction"]
> [Kanban basics](kanban-basics.md)  

## Related articles

- [Interactively filter backlogs, boards, queries, and plans](../backlogs/filter-backlogs-boards-plans.md)
- [Kanban key concepts](kanban-key-concepts.md)
- [Kanban best practices](best-practices-kanban.md)
- [Cumulative flow diagram](../../report/dashboards/cumulative-flow.md)
- [Cumulative flow, lead time, and cycle time guidance](../../report/dashboards/cumulative-flow-cycle-lead-time-guidance.md)



 
 

