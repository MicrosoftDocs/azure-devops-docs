---
title: Manage columns on your board
titleSuffix: Azure Boards
description: Learn how to map, add, and edit columns on your team's board to effectively manage your workflow in Azure Boards or Azure DevOps.
ms.custom: boards-kanban, engagement-fy23
ms.service: azure-devops-boards
ms.assetid: 8afd3481-6fab-401d-90ff-0dd443da0f0e
ai-usage: ai-assisted
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 01/13/2026
---

# Manage columns on your board

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)] 

Managing columns on your board is essential for visualizing your team's workflow. Each column corresponds to a stage of work, such as "To do," "In progress," and "Done." You can customize these columns to match your specific process. Each card on the board represents a work item, such as a user story, bug, or task.

> [!NOTE]    
> - To manage columns on a sprint Taskboard, see [Customize a Taskboard](../sprints/customize-taskboard.md). 
> - To manage columns on a backlog or in query results, see [Change column options](../backlogs/set-column-options.md).
> - To view frequently asked questions about Azure Boards, see [FAQs](../faqs.yml).

## Prerequisites

| Category | Requirements |
|--------------|-------------|
|**Access levels** | At least [**Basic**](../../organizations/security/access-levels.md) access.|
|**Permissions** | To configure team settings: Member of the **Project Administrators** security group or [**Team Administrator** role](../../organizations/settings/add-team-administrator.md). For more information, see [Change project-level permissions](../../organizations/security/change-project-level-permissions.md).|
| **Tasks (optional)**| To avoid revisiting your configuration, complete the following tasks before you begin to manage your board columns: <br>- [Add custom work item types](../../organizations/settings/work/customize-process-work-item-type.md)<br> - [Customize your product and portfolio backlogs](../../organizations/settings/work/customize-process-backlogs-boards.md)<br> - [Customize workflow states](../../organizations/settings/work/customize-process-workflow.md)<br> - [Select backlog navigation levels for your team](../../organizations/settings/select-backlog-navigation-levels.md)<br> - [Show bugs on backlogs and boards](../../organizations/settings/show-bugs-on-backlog.md)|

<a id="state-mappings"></a>
<a id="when-to-update-the-kanban-column-to-state-mappings"></a>
<a id="add-or-rename-columns"></a>

## Add and edit columns

Column titles and options vary based on the [process](../work-items/guidance/choose-process.md) you use to create your project and your team's decision to [treat bugs as requirements or tasks](../../organizations/settings/show-bugs-on-backlog.md).

Add and edit your columns by using the following steps:

1. Sign in to your organization (```https://dev.azure.com/{Your_Organization}```).
1. Select **Boards** > **Boards** > **Configure board settings** :::image type="icon" source="../../media/icons/blue-gear.png" border="false"::: .

   :::image type="content" source="media/sequence-boards-boards-configure-board-settings.png" alt-text="Screenshot shows selection sequence buttons, Boards, Boards, and Configure board settings.":::

1. Select **Columns**.
   - To add a column, select **+ Add column**.
   
   :::image type="content" source="media/add-columns-settings-dialog-add-test-ts.png" alt-text="Screenshot shows highlighted Add column button.":::
   
   - To edit a column, select the column tab. For example, in the following image, choose to edit the Active column. 
   
   :::image type="content" source="media/columns/kanban-settings-columns-active-column.png" alt-text="Screenshot that shows the Settings dialog and selection of an Active column.":::

1. Perform any of the following tasks for your columns. These tasks link to sections further in this article:
   - [Map workflow states to columns](#map-workflow-states-to-columns)
   - [Rename a column](#rename-a-column)
   - [Split columns](#split-columns)
   - [Add Definition of Done](#add-definition-of-done-to-a-column)

1. Select **Save**.

<a id="map-the-flow-of-work">  </a>
<a id="map-workflow-states"> </a>

## Map workflow states to columns

Mapping workflow state categories to columns in boards is essential for visualizing the progress of work items. It ensures that each state of a work item is represented on the board, providing a clear and organized view of the workflow. This mapping helps teams quickly [identify the current status of work items](#update-status), [track their progress](#track-column-status), and [spot any bottlenecks](#identify-bottlenecks) or issues. By aligning workflow states with board columns, teams can maintain a shared understanding of the workflow and improve their ability to manage and complete tasks efficiently.

> [!TIP]   
> Map each workflow **state** to a **column**. Unmapped states don't appear on the board.

The following table describes default user story state categories.

|State category  |Description  |
|---------|---------|
|Proposed   | The first board column is automatically mapped to the default state for each work item. |
|In Progress | Work flow state must be specified for each work item type and column.       |
|Completed  | Can only map to the last board column.      |
|Removed     | Workflow state doesn't need to be specified.     |

For more information, see [About workflow and state categories](../work-items/workflow-and-state-categories.md).

:::image type="content" source="media/boards-columns-state-mapping.png" alt-text="Screenshot shows State mapping section of Column Edit page.":::

Perform this task whenever you add columns, workflow states, or work item types (WITs). You typically need this action when you change the [Working with bugs setting](../../organizations/settings/show-bugs-on-backlog.md), add [WITs to the Requirement category](../../reference/add-wits-to-backlogs-and-boards.md), or [customize the workflow](../../organizations/settings/work/customize-process-workflow.md).

> [!NOTE]
> Adding bugs or other work items to a board creates new workflow states that require adjustments to column-to-state mappings in these situations:
> - Team administrators [show bugs on backlogs and boards](../../organizations/settings/show-bugs-on-backlog.md)
> - Project administrators [add work item types to backlogs and boards](../../reference/add-wits-to-backlogs-and-boards.md)
> - Project collection or project administrators customize workflows for work item types in the Requirement category using [inherited process](../../organizations/settings/work/customize-process-workflow.md) or [on-premises XML process](../../reference/xml/change-workflow-wit.md)

## Rename a column

Rename your column titles to match your workflow stages. This change ensures clarity and alignment within your team. Everyone can understand the current status of work items at a glance, and the board accurately reflects your team's workflow.

Rename a column directly from the board by selecting the column name, as shown in the following image. You can also rename a column from the [column edit screen](#add-and-edit-columns).

:::image type="content" source="media/rename-kanban-columns-direct-ts.png" alt-text="Screenshot showing renaming a column directly on a board.":::

## Split columns

Each column represents a work stage and shows the number of items in progress. But, you often move work into a column before you start it. To address this lag, enable split columns, which divide each column into **Doing** and **Done**.

:::image type="content" source="media/kanban-board-split-columns-example-chart.png" alt-text="Screenshot showing with split columns.":::

Split columns help your team implement a pull mechanism. They provide visibility into idle items and improve workflow transparency.

> [!NOTE]
> - Before you split columns, ensure that each stage is mapped to a column. Only split columns where clear hand-offs exist and you want teams to pull the item into the next stage.
> - Different column titles and choices exist based on the [process](../work-items/guidance/choose-process.md) used to create your project and whether your team chose to [treat bugs like requirements or like tasks](../../organizations/settings/show-bugs-on-backlog.md). 

Choose the column tab that you want to split and add a check mark in the box to cause the column to split.  

:::image type="content" source="media/columns/split-columns.png" alt-text="Screenshot of board settings page, Split columns.":::

> [!TIP]    
> You can filter queries and create charts by using the [Board Column Done field](../queries/query-by-workflow-changes.md#kanban_query_fields).

### Move items into the *Doing* and *Done* columns 

When you enable split columns, update item statuses as usual. When you complete work on an item, move it to *Done* instead of a downstream column. The next team member pulls it into *Doing* and reassigns it to themselves when ready.

For example, after finishing a coding task, move it to *Done* under Develop. The tester then pulls it into *Doing* under Test when ready to start testing.

:::image type="content" source="media/columns/split-columns-move-item.png" alt-text="Screenshot showing board with split column.":::

### Identify bottlenecks

Split columns provide greater insight into how many items sit idle in a *Done* column. Your team can easily see when items pile up, signaling a potential bottleneck.

Review the frequency and location of pile-ups, so your team can adjust processes to eliminate bottlenecks. Workflow processes with no or few bottlenecks correspond to perfect flows.

:::image type="content" source="media/kanban-board-identify-bottlenecks.png" alt-text="Screenshot of board, split columns showing stacked items.":::

### List work items in a *Doing* or *Done* column 

You can query for work items in a split column by using the **Board Column Done** field. This field takes a value of `False` when in the *Doing* column and `True` when in the *Done* column. 

For examples on querying Board columns, see [Query by assignment or workflow changes](../queries/query-by-workflow-changes.md#kanban_query_fields).

<a id="definition-of-done"> </a>

## Add Definition of Done to a column 

When your team advances from one stage to the next, it's crucial they share a clear understanding of "Done." Define the criteria for the Definition of Done in each column. This action helps the team identify necessary tasks before advancing an item to the next stage, implementing the core tenet of making processes and policies explicit.

Select a column tab to configure the Definition of Done for that column. 

:::image type="content" source="media/columns/definition-of-done-defined.png" alt-text="Screenshot showing the columns management screen, entering plain text for Definition of Done.":::

Users can quickly double-check the criteria by choosing the Information tooltip :::image type="icon" source="../../media/icons/info.png" border="false"::: info icon.  

:::image type="content" source="media/columns/definition-of-done-information-tooltip.png" alt-text="Screenshot showing information tooltip of Definition of Done.":::

## Remove or move a column

Removing or moving a column streamlines your board and better reflects your team's workflow and priorities. By adjusting the order of columns or removing unnecessary stages, you display the most critical stages prominently and make the workflow intuitive for all team members.

### Remove a column

1. Ensure the column doesn't contain any work items. If it does, move the items to another column.
1. On the [Configure board settings](#add-and-edit-columns) page, select **Columns** > **Column options menu** :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: > **X Remove**.

   :::image type="content" source="media/columns/remove-column.png" alt-text="Screenshot that shows the selections for deleting a column in the Settings dialog.":::

### Move a column

To move a column, drag the column tab to the desired position on the board. Or, in the **Column options menu**, select **Move left** or **Move right**.

:::image type="content" source="media/columns/column-options-menu.png" alt-text="Screenshot shows the column options menu in Configure board settings.":::

## Update status

To update the status, drag and drop your work items. For example, to signal when work can start in a downstream stage, drag items to the next column. You can move an item from one column to any other column on the board, forward and back. 

:::image type="content" source="media/ALM_AC_DragItem.png" alt-text="Screenshot that shows dragging an item from the Analyze column to the Develop column.":::

## Hand off work items

To hand off work to another team member, reassign it directly from the board.

:::image type="content" source="media/ALM_AC_Reassign.png" alt-text="Screenshot that shows assigning an item from a board.":::

Users who receive the handoff can [set alerts](../../organizations/notifications/manage-your-personal-notifications.md) to get immediate email notifications of their newly assigned work. 

## Track column status

Use the [query tool](../queries/using-queries.md) to list a subset of work items for review, triage, update, or chart generation. For example, you can create a query to list all active user stories by specifying two clauses: `Work Item Type=User Story` and `State=Active`. 

Specify [work in progress (WIP) limits](wip-limits.md), split columns, and definition of done.

<a id="change-priorities"> </a>

## Change your team's priorities

Drag an item up or down within a column.

:::image type="content" source="media/ALM_AC_ChangePriorities.png" alt-text="Screenshot that shows moving an item within a column.":::

## Do more tasks

The following table lists tasks and their associated articles so you can do more with your board.

|Article |Task |
|---------|---------|
|[Interactively filter backlogs, boards, queries, and plans](../backlogs/filter-backlogs-boards-plans.md)    |Filter your board to focus on select work based on assignment to a team member or sprint, tags, or parent feature.         |
|[Update status](#update-status)    | Update workflow status through drag-and-drop operations.        |
|[Change priorities](#change-priorities)  | Reorder cards to change priority of work items.        |
|[Customize cards](customize-cards.md)    | View and quickly assign values to key field.        |
|[Track board column status](#track-column-status)   | Create queries and charts based on board columns.        |
|[View and configure a cumulative flow diagram](../../report/dashboards/cumulative-flow.md)   |Review a cumulative flow diagram based on column assignments.         |

## Related content

- [Accelerate work with swimlanes](expedite-work.md)
- [Show bugs on backlogs and boards](../../organizations/settings/show-bugs-on-backlog.md)  
- [Azure Boards FAQs](../faqs.yml)
- [REST API Boards reference](/rest/api/azure/devops/work/boards)
