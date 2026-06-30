---
title: Quickstart - Use your Kanban board
titleSuffix: Azure Boards
description: Plan and track work on your Kanban board in Azure Boards by adding work items, customizing columns, setting WIP limits, and monitoring flow.
ms.custom: boards-kanban
ms.topic: quickstart
ms.service: azure-devops-boards
ai-usage: ai-assisted
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.update: 90-days
ms.date: 06/08/2026
---

# Quickstart: Use your board

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Boards give your team a visual way to manage projects, track work items, and collaborate. Every project has a board for every team, so you can start using one as soon as you create your project. This quickstart walks through the most common board tasks: adding work items, customizing columns, setting work-in-progress (WIP) limits, filtering, and reviewing flow metrics.

> [!NOTE]
> Each team in a project gets one board automatically. To add another board, add another team to the project. For more information, see [About teams and Agile tools](../../organizations/settings/about-teams-and-settings.md).

## Prerequisites

[!INCLUDE [temp](../includes/prerequisites-kanban.md)]

[!INCLUDE [enable-mcp-server](../includes/enable-mcp-server.md)]

[!INCLUDE [temp](../includes/open-kanban-board.md)]

## Map the flow of how your team works

When you first open your board, there's one column for each workflow state. Your actual columns vary based on the [process](../work-items/guidance/choose-process.md) used to create your project.

1. Identify your team's workflow stages - they often don't match the default states. Configure the board so it reflects the true handoffs your team uses.

   For example, for user stories, the **New**, **Active**, **Resolved**, and **Closed** states track progress from idea to completion.

    :::row:::
       :::column span="1":::
       :::image type="content" source="media/alm-kb-workflow.png" alt-text="Diagram of the user story workflow states: New, Active, Resolved, and Closed.":::
       :::column-end:::
       :::column span="2":::
       :::image type="content" source="media/alm-kb-empty.png" alt-text="Screenshot of an empty board using the Agile process template, with default columns matching the user story workflow states.":::
       :::column-end:::
    :::row-end:::

1. [Manage your columns](add-columns.md) so they match your workflow stages. Keep the number of columns small while still representing the key handoffs for your team.

    :::image type="content" source="media/ALM_KB_Board2.png" alt-text="Screenshot of a board with columns customized to match a team's workflow stages.":::

## Set WIP limits

Set work-in-progress (WIP) limits for each workflow stage. When items exceed the limit, the column count appears in red. Teams can use that visual signal to address bottlenecks immediately. For more information, see [Set WIP limits](wip-limits.md).

:::image type="content" source="media/alm-kb-wip-limits.png" alt-text="Screenshot of a board column with the item count shown in red because it exceeds the WIP limit.":::

## Track work in progress

The estimated size of work for each item appears at the bottom right of each card. Add items to your backlog in the first column. When priorities change, move items up or down within a column. As work completes in one stage, update the status by moving the card to a downstream stage.

Update your board frequently to keep the team in sync and to make the value stream visible.

[!INCLUDE [temp](../includes/note-kanban-boards-teams.md)]

## Add work items

To add a work item, select the add icon ( **+** ), type a title, and press **Enter**. The system saves the work item automatically.

:::image type="content" source="media/quickstart/add-new-item-agile-s155.png" alt-text="Screenshot of a board with the add icon highlighted in the first column and a new item title being entered.":::

You can add as many work items as you want with this method. To add or edit details for any work item, select the title. You can also modify any field that appears on the card directly (for example, change **Assigned To**). For a description of each field, see [Create your backlog, Add details, and estimates](../backlogs/create-your-backlog.md#estimates). You can also [add tasks or child items as checklists on your cards](add-task-checklists.md).

[!INCLUDE [temp](../includes/note-user-assigned.md)]

<a id="update-status"></a>

## Update work item status

As work progresses, update the status of an item by dragging it to a downstream column.

[!INCLUDE [note-closed-items](../includes/note-closed-items.md)]

:::image type="content" source="media/alm-cc-move-card.png" alt-text="Screenshot of a card being dragged from one column to the next to update its status.":::

## Update card fields

Update a field or reassign ownership directly from the board. If the field you want to update isn't on the card, customize the card to display it. You can also show other work item types, such as change requests, incidents, issues, or custom types. For more information, see [Customize cards](../../boards/boards/customize-cards.md) and [About configuring and customizing Azure Boards](../configure-customize.md).

:::image type="content" source="media/alm-cc-update-card-field.png" alt-text="Screenshot of a card with an inline field being updated directly on the board.":::

## Filter your board with keywords, field values, or tags

Apply interactive filters to focus on a subset of work. For example, filter the board to show work assigned to a specific team member during a sprint. To start filtering, select **Filter** :::image type="icon" source="../../media/icons/filter-icon.png" border="false":::. For more information, see [Filter your backlogs, boards, and plans](../backlogs/filter-backlogs-boards-plans.md).

The following example image shows the board filtered to items assigned to Jamal and Raisa.

:::image type="content" source="../backlogs/media/filter-boards/filter-kb-filters-chosen-services.png" alt-text="Screenshot of a board filtered by the Assigned To field to show only items assigned to two team members.":::

## Invite others to work on your board

All members of a project can view and contribute to your board. To invite users to contribute, copy the URL of your board and share it with them.

:::image type="content" source="media/quickstart/kanban-board-url-s155.png" alt-text="Screenshot of a board with the browser URL highlighted, ready to copy and share with teammates.":::

To add users to your project, see [Add users to a project](../../organizations/security/add-users-team-project.md).

## Monitor metrics

After your team uses the board for several weeks, review key metrics like the Cumulative Flow Diagram (CFD) to optimize your process.

Select the **Analytics** tab, and then select **View full report** for the CFD.

:::image type="content" source="media/quickstart/open-analytics.png" alt-text="Screenshot of the Analytics tab on a board with the CFD card and the View full report link highlighted.":::

Use the interactive controls to select the time frame, swimlanes, and workflow states or board columns. Hover over a point on the CFD to see how many items were in a particular state at that time.

In the following example, hovering over a single day shows that 101 items were in the *Researching* state on that date.

:::image type="content" source="../../report/dashboards/media/cfd/analytics-cfd-azure-devops.png" alt-text="Screenshot of a Cumulative Flow Diagram with a tooltip showing the item count for a single day in the Researching state.":::

> [!TIP]
> Your selections persist across sessions until you change them.

By monitoring these metrics, you can find opportunities to reduce lead time. For more information, see [Configure a cumulative flow chart](../../report/dashboards/cumulative-flow.md).

You can also add Analytics widgets to your dashboard. The Analytics Service provides access to several widgets. For more information, see:

- [Widgets based on the Analytics Service](../../report/dashboards/analytics-widgets.md)
- [Add a widget to a dashboard](../../report/dashboards/add-widget-to-dashboard.md)
- [What is the Analytics Service?](../../report/powerbi/what-is-analytics.md)

## View a board from a query

The [Query Based Boards](https://marketplace.visualstudio.com/items?itemName=realdolmen.EdTro-AzureDevOps-Extensions-QueryBasedBoards-Public) Marketplace extension supports viewing a flat-list query of work items as a board. The query can contain different work item types and work items defined in different projects.

## Next step

> [!div class="nextstepaction"]
> [Expedite work using swimlanes](expedite-work.md)

## Related content

- [Filter backlogs, boards, queries, and plans](../backlogs/filter-backlogs-boards-plans.md)
- [Cumulative flow diagram](../../report/dashboards/cumulative-flow.md)
- [Cumulative flow, lead time, and cycle time guidance](../../report/dashboards/cumulative-flow-cycle-lead-time-guidance.md)
