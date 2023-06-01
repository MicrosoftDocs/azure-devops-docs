---
title: Use your Kanban board 
titleSuffix: Azure Boards
description: Learn how to use the Kanban board to plan and track work in Azure Boards. 
ms.custom: boards-kanban 
ms.topic: quickstart
ms.service: azure-devops-boards
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 06/01/2023
---

# Use your Kanban board

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Kanban boards provide an intuitive and visual way to manage your projects, track work items, and collaborate with your team effectively. If you have a project, you already have a Kanban board.  Let's get started!

In this article, learn how to: 
> [!div class="checklist"]    
> * Open your Kanban board
> * Map the flow of how your team works
> * Set work in progress limits   
> * Track work in progress
> * Add work items
> * Update work item status
> * Update card fields
> * Filter your board
> * Invite others to work on your board
> * Enable live updates
> * Monitor metrics

> [!NOTE]  
>  You can only create or add Kanban boards to a project by adding another team. Kanban boards only  get created when a project or team gets created. For more information, see [About teams and Agile tools](../../organizations/settings/about-teams-and-settings.md).

[!INCLUDE [temp](../includes/prerequisites-kanban.md)]

[!INCLUDE [temp](../includes/open-kanban-board.md)] 

## Map the flow of how your team works

When you first open your Kanban board, you have one column for each [workflow state](../work-items/guidance/choose-process.md#workflow-states). Your actual columns vary based on the [process](../work-items/guidance/choose-process.md) used to create your project.

1. Identify your team's workflow stages, which most likely don't map to the default states. For your team to have a functional board, configure the board to match your workflow stages.
   
   For example, for user stories, the **New**, **Active**, **Resolved**, and **Closed** states track progress from idea to completion.
    :::row:::
       :::column span="1":::
       ![Screenshot showing user story workflow states.](media/alm-kb-workflow.png)
       :::column-end:::
       :::column span="2":::
       ![Screenshot showing default Kanban board, Agile template.](media/alm-kb-empty.png)
       :::column-end:::
    :::row-end:::
    
2. [Manage your Kanban columns](add-columns.md), so they match your workflow stages. Keep the number of columns to a minimum while still representing the key handoffs that occur for your team.

    :::image type="content" source="media/ALM_KB_Board2.png" alt-text="Screenshot showing Kanban board, Columns customized.":::

## Set WIP limits

Set WIP limits for each workflow stage, so that when work items exceed the limit, the column count displays as red. Teams can use this color as a signal to focus immediately on activities to bring the number of items in the column down. For more information, see [Set WIP limits](wip-limits.md).

:::image type="content" source="media/alm_kb_wip-limits.png" alt-text="Screenshot showing WIP limit reached with red numbering.":::

## Track work in progress

See the estimated size of work for each item that displays at the bottom right of each card. Add items to your backlog in the first column. When priorities change, move items up and down within a column. And, as work completes in one stage, update the status of an item by moving it to a downstream stage.

:::image type="content" source="media/alm-cc-move-card.png" alt-text="Screenshot showing moving a card on Kanban board to update status.":::

Update your Kanban board as work progresses to help keep your team in sync. Also, you can see and share the value stream your team is delivering to customers.

[!INCLUDE [temp](../includes/note-kanban-boards-teams.md)]

## Add work items 

::: moniker range=">= azure-devops-2019"
To add a work item, select the :::image type="icon" source="../media/icons/add_icon.png" border="false"::: plus sign, enter a title, and then select **Enter**. 
::: moniker-end

::: moniker range=">= azure-devops-2020"
:::image type="content" source="media/quickstart/add-new-item-agile-s155.png" alt-text="Screenshot showing adding a new item on Kanban board, new nav.":::
::: moniker-end

::: moniker range="azure-devops-2019"
:::image type="content" source="media/quickstart/add-new-item-agile.png" alt-text="Screenshot showing adding a new item on Kanban board, new nav.":::
::: moniker-end

::: moniker range=">= azure-devops-2019"
The system automatically saves the work item with the title you entered. You can add as many work items you want by using this method. 
::: moniker-end

::: moniker range="tfs-2018"
To add a work item, select the :::image type="icon" source="../media/icons/add_icon.png" border="false"::: plus sign, enter a title, and then select **Enter**. 

:::image type="content" source="media/quickstart/add-new-item-standard.png" alt-text="Screenshot showing adding a new item on Kanban board, prev nav..":::

The system automatically saves the work item with the title you entered. You can add as many work items you want by using this method. 
::: moniker-end

To add details to any work item, select the title. Or, you can directly modify any field that displays. For example, you can reassign a work item by selecting **Assigned To**. For a description of each field, see [Create your backlog, Add details and estimates](../backlogs/create-your-backlog.md#estimates). You can also [add tasks or child items as checklists on your cards](add-task-checklists.md).

[!INCLUDE [temp](../includes/note-user-assigned.md)]

<a id="update-status">  </a>

## Update work item status

As work completes in one stage, update the status of an item by dragging it to a downstream stage.

[!INCLUDE [note-closed-items](../includes/note-closed-items.md)]

::: moniker range="< azure-devops-2022"
> [!NOTE]   
> Users assigned Stakeholder access can't use the drag-and-drop feature to update status. 
::: moniker-end

:::image type="content" source="media/alm-cc-move-card.png" alt-text="Screenshot showing update status of work item with arrow showing movement of card."::: 

## Update card fields

You can quickly update a field or reassign ownership directly from the board. If the field you want to update isn't showing, then customize the card, so it displays. For more information, see [Customize cards](../../boards/boards/customize-cards.md). 

:::image type="content" source="media/alm-cc-update-card-field.png" alt-text="Screenshot showing update of card field.":::

### Filter your board with keywords, field values, or tags

You can apply filters interactively to focus on a subset of work. For example, you can filter the board to focus on work assigned to at team member for a specific sprint. To start filtering, choose **Filter** :::image type="icon" source="../../media/icons/filter-icon.png" border="false":::. For more information, see [Filter your backlogs, boards, and plans](../backlogs/filter-backlogs-boards-plans.md).

::: moniker range="<= azure-devops-2019"
:::image type="content" source="../backlogs/media/filter-boards/filter-kb-choose-filter.png" alt-text="Screenshot showing enabled field-based filtering, earlier versions..":::
::: moniker-end

In the following example image, we filtered all items assigned to Jamal and Raisa.
::: moniker range=">= azure-devops-2020"
:::image type="content" source="../backlogs/media/filter-boards/filter-kb-filters-chosen-services.png" alt-text="Screenshot showing filtering on assignment field.":::
::: moniker-end
::: moniker range="< azure-devops-2020"
:::image type="content" source="../backlogs/media/filter-boards/filter-kb-filters-chosen.png" alt-text="Screenshot showing filtering on assignment field, earlier versions.":::
::: moniker-end

## Invite others to work on your Kanban board 

All members of a project can view and contribute to your Kanban board. To invite users to contribute, copy the URL of your Kanban board and send it to those users.

::: moniker range=">= azure-devops-2020"
:::image type="content" source="media/quickstart/kanban-board-url-s155.png" alt-text="Screenshot showing red square surrounding the URL for the Kanban board.":::
::: moniker-end

::: moniker range="azure-devops-2019"
:::image type="content" source="media/quickstart/kanban-board-url.png" alt-text="Screenshot showing red square surrounding the Kanban board URL.":::
::: moniker-end

::: moniker range="tfs-2018"
:::image type="content" source="media/kanban-basics-url.png" alt-text="Screenshot showing highlighted URL for the Kanban board.":::
::: moniker-end

To add users to your project, see [Add users to a project](../../organizations/security/add-users-team-project.md).   

## Enable live updates 

Enable live updates to automatically refresh your Kanban board when changes occur. With live updates enabled, you no longer have to select **F5** to see the latest changes. To view or modify work items, **View work items in this node** and **Edit work items in this node** permissions must be set to **Allow**. By default, the Contributors group has this permission set. Users with Stakeholder access for a private project can add work items and update status through drag-and-drop, but can't update fields displayed on cards. They can add tasks and change task status.

::: moniker range=">= azure-devops-2019"
Choose the :::image type="icon" source="../../media/icons/view-options-icon.png" border="false"::: view options icon and move the slider for **Live updates** to On.  

:::image type="content" source="media/turn-live-updates-on-agile.png" alt-text="Screenshot showing moving the slider for Live updates to On.":::
::: moniker-end

::: moniker range="tfs-2018"
Choose the :::image type="icon" source="../media/icons/live-updates-icon.png" border="false"::: **Live updates** icon.  

:::image type="content" source="media/turn-live-updates-on-agile.png" alt-text="Screenshot showing Kanban board, live updates icon.":::

As one team member updates the status of a work item, other team members see those updates in real time as they occur.  

![GIF showing live update flow.](../boards/media/kanban-live-updates.gif)  

::: moniker-end

## Monitor metrics

As with most Agile practices, Kanban encourages monitoring key metrics to fine tune your processes. After your team has used the Kanban board for several weeks, check out your Cumulative Flow Diagram (CFD).

::: moniker range=">= azure-devops-2020"
Choose the **Analytics** tab, and then choose **View full report** for the CFD as shown in the following image. 

:::image type="content" source="media/quickstart/open-analytics.png" alt-text="Screenshot showing highlighted Analytics tab.":::

Use the interactive controls to choose the time frame, swimlanes, and workflow states or Kanban board columns. 

Hover over a point in time to show how many work items are in a particular state.

The following example image shows that on July 3, 101 items were in a *Researching* state.

:::image type="content" source="../../report/dashboards/media/cfd/analytics-cfd-azure-devops.png" alt-text="Screenshot showing opened CFD Analytics.":::

> [!TIP]
> The selections you make only get set for you, and persist across sessions until you change them. 
::: moniker-end

::: moniker range="<= azure-devops-2019"
Choose the chart as shown in the following image. 

:::image type="content" source="media/kanban-basics-open-cfd.png" alt-text="Screenshot showing the cumulative flow diagram square, surrounded by red box.":::

The CFD shows the count of items in each Kanban column for the past 30 weeks or less. From this chart, you can gain an idea of the amount of work in progress and lead time. Work in progress counts unfinished requirements. Lead time indicates the amount of time it takes to complete a requirement from the time it was first proposed.  

:::image type="content" source="media/ALM_KB_CumulativeFlow.png" alt-text="Screenshot showing Kanban board, cumulative flow diagram.":::
::: moniker-end

By monitoring these metrics, you can gain insight into how to optimize your processes and minimize lead time. For more information, see [Configure a cumulative flow chart](../../report/dashboards/cumulative-flow.md). 

::: moniker range=">= azure-devops-2019"
You can also add Analytics widgets to your dashboard. The Analytics Service is in preview and provides access to several widgets. For more information, see the following articles: 
- [Widgets based on the Analytics Service](../../report/dashboards/analytics-widgets.md)
- [Add a widget to a dashboard](../../report/dashboards/add-widget-to-dashboard.md)
- [What is the Analytics Service?](../../report/powerbi/what-is-analytics.md)
::: moniker-end

::: moniker range=">= azure-devops-2019"
## Can I view a Kanban board of work items defined by a query?  
The [Query Based Boards](https://marketplace.visualstudio.com/items?itemName=realdolmen.EdTro-AzureDevOps-Extensions-QueryBasedBoards-Public) Marketplace extension supports viewing a flat-list query of work items as a Kanban board. The query can contain different work item types and work items defined in different projects.  
::: moniker-end

## Next steps 

> [!div class="nextstepaction"]
> [Expedite work using swimlanes](expedite-work.md)  

## Related articles

- [Filter backlogs, boards, queries, and plans](../backlogs/filter-backlogs-boards-plans.md)
- [Kanban key concepts](kanban-key-concepts.md)
- [Kanban best practices](best-practices-kanban.md)
- [Cumulative flow diagram](../../report/dashboards/cumulative-flow.md)
- [Cumulative flow, lead time, and cycle time guidance](../../report/dashboards/cumulative-flow-cycle-lead-time-guidance.md)
