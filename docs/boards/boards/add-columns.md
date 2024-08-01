---
title: Manage columns on your board
titleSuffix: Azure Boards
description: Map, add, and edit columns on your team's board to manage your workflow in Azure Boards or Azure DevOps.
ms.custom: boards-kanban, engagement-fy23
ms.service: azure-devops-boards
ms.assetid: 8afd3481-6fab-401d-90ff-0dd443da0f0e
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 07/31/2024
---

# Manage columns on your board

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)] 

Managing columns on your board is essential for visualizing your team's workflow. Each column corresponds to a stage of work, such as "To do," "In progress," and "Done." You can customize these columns to match your specific process, while each card on the board represents a work item, such as a user story, bug, or task.

::: moniker range=">= azure-devops-2020"

> [!NOTE]    
> - To manage columns on a sprint Taskboard, see [Customize a Taskboard](../sprints/customize-taskboard.md). 
> - To manage columns on a backlog or in query results, see [Change column options](../backlogs/set-column-options.md).   
::: moniker-end

::: moniker range="=azure-devops-2019"

> [!NOTE]    
> - To add columns to a Taskboard, you need to customize the workflow. For more information, see [Add or modify a work item type](../../reference/add-modify-wit.md). 
> - To add columns to a backlog or query results, see [Change column options](../backlogs/set-column-options.md).   
> - For an overview of the features supported on each backlog and board, see [Backlog, board, and plan views](../backlogs/backlogs-boards-plans.md).

::: moniker-end

[!INCLUDE [temp](../includes/prerequisites-team-settings.md)]

To avoid revisiting your configuration, do the following tasks per role.

#### [Process Administrator](#tab/process-administrator)

- [Add custom work item types](../../organizations/settings/work/customize-process-work-item-type.md)
- [Customize your product and portfolio backlogs](../../organizations/settings/work/customize-process-backlogs-boards.md)
- [Customize workflow states](../../organizations/settings/work/customize-process-workflow.md)

#### [Team Administrator](#tab/team-administrator)

- [Select backlog navigation levels for your team](../../organizations/settings/select-backlog-navigation-levels.md).
- Determine how to track bugs. Bugs might have different workflow states from other types of work items in the **Requirement** category. As a result, bugs must be mapped separately from other work item types. For more information, see [Show bugs on backlogs and boards](../../organizations/settings/show-bugs-on-backlog.md).
- Identify the columns that your team can use to support its workflow and processes. For more information, see [Map the flow of work](#map-the-flow-of-work) later in this article. 
- Add, remove, or rename columns and map workflow states to columns. For more information, see [Manage columns on your board](#add-or-rename-columns) later in this article.  

---
You should also review the following articles: 

- [Kanban board overview](kanban-overview.md)
- [Configure and customize Azure Boards](../configure-customize.md)
- [Set up your backlogs and boards](../backlogs/set-up-your-backlog.md)  
- [Workflow states and state categories](../work-items/workflow-and-state-categories.md)  

<a id="state-mappings" >   </a>
<a id="when-to-update-the-kanban-column-to-state-mappings"></a>

## Map workflow states 

Your board uses the **Work item type** and **State** categories to group work items that you want handled in the same manner.

<a id="map-the-flow-of-work">  </a>

### 1. Identify your team's workflows

The following table lists example workflows and their descriptions, so you can identify your team's workflows.

   |Workflow  |Description  |
   |---------|---------|
   |Backlog    | Make a prioritized list of work items that the team isn't yet ready to work on.       |
   |Analyze    | Identify well-understood and shared acceptance criteria, along with overall work required to develop and test the item.         |
   |Develop   |Code and run unit tests for the item.         |
   |Test    | Run exploratory, automated, integration, and other tests.        |
   |Done    | Hand off to production because the item is ready.        |

### 2. Familiarize yourself with work item types and boards

Familiarize yourself with the different work item types and their corresponding boards. Understanding where each type appears helps you manage your work effectively.

   |Work item type category |Work items appear here |
   |---------|---------|
   |Requirement    |  Only on the product board.       | 
   |Feature   | Only on the Feature portfolio board.        |         
   |Epic     | Only on the Epic portfolio board.        | 
   |Custom|    Only on a custom portfolio board. |        

   > [!TIP]   
   > We recommend that you map each workflow state to a column. If it’s not mapped, it doesn’t appear on the board.

### 3. Specify the workflow State

Specify the workflow State for each work item type (WIT) and column, using one of the following four categories:

   |State category  |Description  |
   |---------|---------|
   |Proposed   | The first board column is automatically mapped to the default state for each work item. |
   |In Progress | Work flow state must be specified for each work item type and column.       |
   |Completed  | Can only map to the last board column.      |
   |Removed     | Workflow state doesn't need to be specified.     |

> [!NOTE]
> When you add bugs or other work items to a board, it might create new workflow states that require adjustments to column-to-state mappings in the following situations:
>
>- When a team admin [shows bugs on backlogs and boards](../../organizations/settings/show-bugs-on-backlog.md).
>- When a project admin [adds work item types to backlogs and boards](../../reference/add-wits-to-backlogs-and-boards.md).
>- When a project collection or project admin customizes the workflow for a work item type in the Requirement category using [inherited process](../../organizations/settings/work/customize-process-workflow.md) or [on-premises XML process](../../reference/xml/change-workflow-wit.md).

<a id="add-or-rename-columns"> </a>

## Add and edit columns

Column titles and choices depend on the [process](../work-items/guidance/choose-process.md) that you used to create your project and whether your team chose to [treat bugs like requirements or like tasks](../../organizations/settings/show-bugs-on-backlog.md).

Do the following steps to add and edit your columns:

1. [Open your board](kanban-quickstart.md).

2. Select **Configure team settings** :::image type="icon" source="../../media/icons/blue-gear.png" border="false"::: to configure the board and set general team settings.  

   :::image type="content" source="../../organizations/settings/media/configure-team/open-board-settings.png" alt-text="Screenshot that shows open board settings for a team.":::

3. Select **Columns** and then a column tab to see all the settings that you can modify. Your initial column settings look similar to the settings shown in the following image. 

   :::image type="content" source="media/columns/kanban-settings-columns-active-column.png" alt-text="Screenshot that shows the Settings dialog and selection of an Active column.":::

4. Select from the following actions, as appropriate:
   - **Rename your column titles** to map to your workflow stages. You can add, rename, and move columns to support more stages. In the following examples, we rename the first three columns to **Backlog**, **Analyze**, and **Develop** and add a column labeled **Test**. 

	  Rename a column directly from the board. 

	  :::image type="content" source="media/rename-kanban-columns-direct-ts.png" alt-text="Screenshot showing renaming a column directly on a board.":::

	  Or, you can open the dialog and change one or more settings for a column. 

     :::image type="content" source="media/add-columns-settings-dialog-add-test-ts.png" alt-text="Screenshot that shows the Settings dialog and selections for adding a Test column.":::

   - **Change the column order** by dragging the column tab to the position that you want.  

   - **Delete a column** by first making sure that the column doesn't contain any work items and if it does, move the items to another column. Then, do the following steps:

     1. Open **Settings** and select **Columns** > **Column options menu** :::image type="icon" source="../../media/icons/actions-icon.png" border="false":::.
     2. Select **Remove** from the menu.  

      :::image type="content" source="media/columns/remove-column.png" alt-text="Screenshot that shows the selections for deleting a column in the Settings dialog.":::

5. [Change state mappings as needed](#state-mappings) for added columns, added workflow states, or added WITs. 

   Update state mappings when you add columns, workflow states, or WITs, which is typically necessary when you change the [Working with bugs setting](../../organizations/settings/show-bugs-on-backlog.md), add [WITs to the Requirement category](../../reference/add-wits-to-backlogs-and-boards.md), or [customize the workflow](../../organizations/settings/work/customize-process-workflow.md).

6. Select **Save**.

<a id="update-status"> </a>

### Update status and handoff items

To update the status, drag-and-drop your work items. For example, to signal when work can start in a downstream stage, drag items to the next column. 

:::image type="content" source="media/ALM_AC_DragItem.png" alt-text="Screenshot that shows dragging an item from the Analyze column to the Develop column.":::

You can move an item from one column to any other column on the board, forward and back. To hand off work to another team member, reassign it directly from the board.

:::image type="content" source="media/ALM_AC_Reassign.png" alt-text="Screenshot that shows assigning an item from a board.":::

Team members who receive the handoff can [set alerts](../../organizations/notifications/manage-your-personal-notifications.md) to get immediate email notifications of their newly assigned work. 

<a id="change-priorities"> </a>

### Change your team's priorities

Drag an item up or down within a column.
:::image type="content" source="media/ALM_AC_ChangePriorities.png" alt-text="Screenshot that shows moving an item within a column.":::

<a id="track-column-status"> </a>

### Track column status  

Use the [query tool](../queries/using-queries.md) to list a subset of work items for review, triage, update, or chart generation. For example, you can create a query to list all active user stories (specify two clauses: `Work Item Type=User Story` and `State=Active`). 

Specify [WIP limits](wip-limits.md), [split columns](#split-columns), and [definition of done](#definition-of-done)

## Split columns

Each column represents a work stage, showing the number of items in progress. However, there’s often a lag between moving work into a column and starting it. To address this lag, enable split columns, which divide each column into "Doing" and "Done."

:::image type="content" source="media/kanban-board-split-columns-example-chart.png" alt-text="Screenshot showing with split columns.":::

Split columns help your team implement a pull mechanism, providing visibility into idle items and improving workflow transparency.

### Move items into the *Doing* and *Done* columns 

With split columns enabled, update item statuses as usual. However, now when you complete work on an item, you move it into *Done*, instead of a downstream column. When you complete an item, move it to *Done* instead of a downstream column. The next team member pulls it into *Doing* and reassigns it to themselves when ready.

For example, after finishing a coding task, move it to *Done* under Develop. The tester then pulls it into *Doing* under Test when ready to start testing.

:::image type="content" source="media/columns/split-columns-move-item.png" alt-text="Screenshot showing board with split column.":::

### Identify bottlenecks

Split columns provide you even greater insight into how many items sit idle in a *Done* column. Your team can readily see when items pile up, which signal a potential bottleneck.   

:::image type="content" source="media/kanban-board-identify-bottlenecks.png" alt-text="Screenshot of board, split columns showing stacked items.":::

By reviewing the frequency of pile ups and where they occur, your team can adjust their processes to eliminate the bottlenecks. Workflow processes that incur no or few bottlenecks correspond to perfect flows. No item sits in a queue for any 

### Choose which columns you want to split  

Before you split columns, ensure you [mapped each stage of your team's process to a column](#map-workflow-states). Only split columns where clear hand-offs exist and you want teams to pull the item into the next stage. 

::: moniker range=">= azure-devops-2019"

1. [Open your board](kanban-quickstart.md) and choose the  :::image type="icon" source="../../media/icons/blue-gear.png" border="false":::  gear icon to configure the board and set general team settings.  

   :::image type="content" source="../../organizations/settings/media/configure-team/open-board-settings.png" alt-text="Screenshot of Open board settings for a team, vertical navigation.":::

2. Choose **Columns** and then choose the column tab that you want to split. Add a check mark in the checkbox to cause the column to split.  

	> [!NOTE]   
	> There are different column titles and choices based on the [process](../work-items/guidance/choose-process.md) used to create your project and whether your team chose to [treat bugs like requirements or like tasks](../../organizations/settings/show-bugs-on-backlog.md).  
	
   :::image type="content" source="media/columns/split-columns.png" alt-text="Screenshot of board settings page, Split columns.":::

3. Select **Save**.

	> [!TIP]    
	> You can filter queries and create charts using the [Board Column Done field](../queries/query-by-workflow-changes.md#kanban_query_fields). 

::: moniker-end 

### List work items in a *Doing* or *Done* column 

You can query for work items in a split column using the **Board Column Done** field. This field takes of a value of False when in the *Doing* column and True when in the *Done* column. 

For examples on querying Board columns, see [Query by assignment or workflow changes](../queries/query-by-workflow-changes.md#kanban_query_fields).

<a id="definition-of-done"> </a>

## Add the Definition of Done to a column 

When your team advances from one stage to the next in their work, it's crucial that they have a shared understanding of what constitutes as "Done." You can define the criteria for the Definition of Done in each column. By doing so, the team can identify the necessary tasks that need to be completed before advancing an item to the next stage. This task also implements one of the core tenets, *make processes and policies explicit*.

Team members can quickly double-check the criteria by choosing the Information tooltip :::image type="icon" source="media/ALM_DD_InfoIcon.png" border="false"::: info icon.  

:::image type="content" source="media/columns/definition-of-done-information-tooltip.png" alt-text="Screenshot showing information tooltip of Definition of Done.":::

1. Open your board.

2. Choose the  :::image type="icon" source="../../media/icons/blue-gear.png" border="false":::  gear icon to configure the board and set general team settings.  

   :::image type="content" source="../../organizations/settings/media/configure-team/open-board-settings.png" alt-text="Screenshot of the settings gear highlighted for selection.":::

3. Choose **Columns** and then a column tab to configure the Definition of Done for that column. 

   :::image type="content" source="media/columns/definition-of-done-defined.png" alt-text="Screenshot showing the columns management screen, entering plain text for Definition of Done.":::

4. Select **Save**.

## Do more tasks

In the following table, we list tasks and their associated articles, so you can do more with your board. 

|Article |Task |
|---------|---------|
|[Interactively filter backlogs, boards, queries, and plans](../backlogs/filter-backlogs-boards-plans.md)    |Filter your board to focus on select work based on assignment to a team member or sprint, tags, or parent feature.         |
|[Update status](#update-status)    | Update workflow status through drag-and-drop operations.        |
|[Change priorities](#change-priorities)  | Reorder cards to change priority of work items.        |
|[Customize cards](customize-cards.md)    | View and quickly assign values to key field.        |
|[Track board column status](#track-column-status)   | Create queries and charts based on board columns.        |
|[View and configure a cumulative flow diagram](../../report/dashboards/cumulative-flow.md)   |Review a cumulative flow diagram based on column assignments.         |

## Related articles

- [Accelerate work with swimlanes](expedite-work.md)
- [Show bugs on backlogs and boards](../../organizations/settings/show-bugs-on-backlog.md)  
- [Azure Boards FAQs](../faqs.yml)
- [REST API Boards reference](/rest/api/azure/devops/work/boards)
