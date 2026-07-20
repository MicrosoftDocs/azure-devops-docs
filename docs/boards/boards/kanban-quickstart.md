---
title: Quickstart - Use your Kanban board
titleSuffix: Azure Boards
description: Plan and track work on your Kanban board in Azure Boards by adding work items, customizing columns, setting WIP limits, and monitoring flow.
ms.custom: boards-kanban, copilot-scenario-highlight
ms.topic: quickstart
ms.service: azure-boards
ai-usage: ai-assisted
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 07/16/2026
---

# Quickstart: Use your board

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Boards give your team a visual way to manage projects, track work items, and collaborate. Each team in a project gets one board automatically, so you can start using a board as soon as you create your project. To add another board, add another team to the project. For more information, see [About teams and Agile tools](../../organizations/settings/about-teams-and-settings.md).

This quickstart walks through the most common board tasks: adding work items, customizing columns, setting work-in-progress (WIP) limits, filtering, and reviewing flow metrics.

[!INCLUDE [ai-assistance-mcp-server-tip](../../includes/ai-assistance-mcp-server-tip.md)]

## Prerequisites

[!INCLUDE [temp](../includes/prerequisites-kanban.md)]

[!INCLUDE [temp](../includes/open-kanban-board.md)]

## Map the flow of how your team works

When you first open your board, Azure Boards creates one column for each workflow state. Your team can customize these columns based on the [process](../work-items/guidance/choose-process.md) your project uses.

1. Identify your team's actual workflow stages. These stages often differ from the default states. Configure the board to reflect the real handoffs your team uses.

    For example, user stories usually move through **New**, **Active**, **Resolved**, and **Closed** from idea to completion.

    :::row:::
       :::column span="1":::
       :::image type="content" source="media/alm-kb-workflow.png" alt-text="Diagram of the user story workflow states: New, Active, Resolved, and Closed.":::
       :::column-end:::
       :::column span="2":::
       :::image type="content" source="media/alm-kb-empty.png" alt-text="Screenshot of an empty board using the Agile process template, with default columns matching the user story workflow states.":::
       :::column-end:::
    :::row-end:::

1. [Manage your columns](add-columns.md) so they match your workflow stages. Keep the number of columns small, but include every key handoff.

    :::image type="content" source="media/ALM_KB_Board2.png" alt-text="Screenshot of a board with columns customized to match a team's workflow stages.":::

## Set WIP limits

Set a work-in-progress (WIP) limit for each workflow stage. When a stage exceeds its limit, Azure Boards shows the column count in red. Use that signal to identify bottlenecks and rebalance work quickly. For more information, see [Set WIP limits](wip-limits.md).

:::image type="content" source="media/alm-kb-wip-limits.png" alt-text="Screenshot of a board column with the item count shown in red because it exceeds the WIP limit.":::

## Track work in progress

Use the board to keep work moving and priorities clear:

1. Add new items in the first column.
1. Reorder items within a column as priorities change.
1. Move cards to downstream columns as work progresses.

Each card shows the estimated work size at the lower-right corner.

Update the board frequently to keep the team in sync and make your value stream visible.

[!INCLUDE [temp](../includes/note-kanban-boards-teams.md)]

## Add work items

Add work items directly from the first column:

1. Select the add icon (**+**).
1. Enter a title.
1. Press **Enter** to save.

:::image type="content" source="media/quickstart/add-new-item-agile-s155.png" alt-text="Screenshot of a board with the add icon highlighted in the first column and a new item title being entered.":::

Repeat these steps to add as many work items as needed.

To edit details, select a work item title. You can also update fields shown on the card directly (for example, **Assigned To**). For field descriptions, see [Create your backlog, Add details, and estimates](../backlogs/create-your-backlog.md#estimates). You can also [add tasks or child items as checklists on your cards](add-task-checklists.md).

[!INCLUDE [temp](../includes/note-user-assigned.md)]

<a id="update-status"></a>

## Update work item status

Update status directly on the board as work progresses:

1. Select a card.
1. Drag it to the next downstream column.
1. Drop the card to save the new status.

[!INCLUDE [note-closed-items](../includes/note-closed-items.md)]

:::image type="content" source="media/alm-cc-move-card.png" alt-text="Screenshot of a card being dragged from one column to the next to update its status.":::

## Update card fields

Update fields and ownership directly from the board:

1. Select the field on a card (for example, **Assigned To**).
1. Enter a new value or select a different assignee.
1. Confirm the update on the card.

If a field isn't visible, customize the card to show it. You can also show other work item types, such as change requests, incidents, issues, and custom types. For more information, see [Customize cards](../../boards/boards/customize-cards.md) and [About configuring and customizing Azure Boards](../configure-customize.md).

:::image type="content" source="media/alm-cc-update-card-field.png" alt-text="Screenshot of a card with an inline field being updated directly on the board.":::

## Filter your board with keywords, field values, or tags

Filter the board to focus on the work you need to review:

1. Select **Filter** :::image type="icon" source="../../media/icons/filter-icon.png" border="false":::.
1. Choose one or more filter values, such as keyword, assignee, or tag.
1. Review the filtered board results.

For example, during a sprint, filter by **Assigned To** to review one team member's work. For more information, see [Filter your backlogs, boards, and plans](../backlogs/filter-backlogs-boards-plans.md).

The following example image shows the board filtered to items assigned to Jamal and Raisa.

:::image type="content" source="../backlogs/media/filter-boards/filter-kb-filters-chosen-services.png" alt-text="Screenshot of a board filtered by the Assigned To field to show only items assigned to two team members.":::

## Invite others to work on your board

Invite teammates by sharing a direct link to your board:

1. Open your board in Azure Boards.
1. Copy the URL from your browser address bar.
1. Share the URL with your teammates in chat or email.

Project members can open the link and contribute immediately based on their permissions.

:::image type="content" source="media/quickstart/kanban-board-url-s155.png" alt-text="Screenshot of a board with the browser URL highlighted, ready to copy and share with teammates.":::

If someone doesn't have access, add them to the project first. For details, see [Add users to a project](../../organizations/security/add-users-team-project.md).

## Monitor metrics

Use board metrics to spot bottlenecks and improve flow.

Review the Cumulative Flow Diagram (CFD) after your team uses the board for a few weeks:

1. Select the **Analytics** tab.
1. Select **View full report** on the CFD tile.
1. Set the time range, swimlanes, and workflow states or board columns.
1. Hover over a point on the chart to see how many items were in each state on that date.

:::image type="content" source="media/quickstart/open-analytics.png" alt-text="Screenshot of the Analytics tab on a board with the CFD card and the View full report link highlighted.":::

In the following example, hovering over a single day shows that 101 items were in the *Researching* state on that date.

:::image type="content" source="../../report/dashboards/media/cfd/analytics-cfd-azure-devops.png" alt-text="Screenshot of a Cumulative Flow Diagram with a tooltip showing the item count for a single day in the Researching state.":::

> [!TIP]
> Your selections persist across sessions until you change them.

Use these insights to decide where work is piling up, then adjust WIP limits, staffing, or handoffs to reduce lead time. For more information, see [Configure a cumulative flow chart](../../report/dashboards/cumulative-flow.md).

You can also add Analytics widgets to your dashboard:

- [Widgets based on the Analytics Service](../../report/dashboards/analytics-widgets.md)
- [Add a widget to a dashboard](../../report/dashboards/add-widget-to-dashboard.md)
- [What is the Analytics Service?](../../report/powerbi/what-is-analytics.md)

## View a board from a query

Use the [Query Based Boards](https://marketplace.visualstudio.com/items?itemName=realdolmen.EdTro-AzureDevOps-Extensions-QueryBasedBoards-Public) Marketplace extension to view a flat-list query as a board.

Use this option when you need one board view that spans:

- Multiple work item types
- Multiple projects

To get started, install the extension, open your flat-list query, and switch to the board view provided by the extension.

<a id="use-ai-assistance"></a>

## Use AI to manage your Kanban board

If you configure the [Azure DevOps MCP Server](../../mcp-server/mcp-server-overview.md), you can describe common Kanban board tasks in natural language instead of dragging cards through columns manually.

Use these prompts as scenario examples. Supported operations vary by connected tools, extension version, and your permissions.

| Task | Example prompt |
|------|----------------|
| Add a work item to the board | `Add a new user story "Enable dark mode" to the board for team <Web> in project <Contoso>` |
| Move a card across columns | `Move user story 4321 to the "Doing" column on the board for team <Web> in project <Contoso>` |
| Assign a card | `Assign user story 4321 to <Raisa> on the board for team <Web> in project <Contoso>` |
| Bulk move cards | `Move all "Approved" user stories on the board for team <Web> to "Committed" in project <Contoso>` |
| Filter the board | `Show all cards on the board for team <Web> in project <Contoso> tagged "customer-request"` |
| Add child tasks | `Add 3 tasks under user story 4321 in project <Contoso> with the titles I provide` |
| Update card details | `Set Story Points to 5 on user story 4321 in project <Contoso>` |
| Identify blocked cards | `List all cards on the board for team <Web> in project <Contoso> that are blocked or at risk` |
| Summarize board status | `Summarize the board for team <Web> in project <Contoso> - count of items in each column and any blockers` |
| Reassign in bulk | `Reassign all "In Progress" cards from <Jamal> to <Raisa> on the board for team <Web> in project <Contoso>` |

> [!NOTE]
> If you're using Visual Studio Code, [agent mode](/visualstudio/ide/copilot-chat-context#agent-mode) is especially helpful for complex Kanban board operations.

## Next step

> [!div class="nextstepaction"]
> [Expedite work using swimlanes](expedite-work.md)

## Related content

- [Filter backlogs, boards, queries, and plans](../backlogs/filter-backlogs-boards-plans.md)
- [Cumulative flow diagram](../../report/dashboards/cumulative-flow.md)
- [Cumulative flow, lead time, and cycle time guidance](../../report/dashboards/cumulative-flow-cycle-lead-time-guidance.md)
