---
title: Add columns to your Kanban board in Azure Boards or Azure DevOps
titleSuffix: Azure Boards
description: Map and add columns to your team's Kanban board to manage your workflow in Azure Boards or Azure DevOps. 
ms.custom: "boards-kanban, contperf-fy21q3" 
ms.service: azure-devops-boards
ms.assetid: 8afd3481-6fab-401d-90ff-0dd443da0f0e
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 03/08/2023
---

# Add columns to your Kanban board to manage your workflow

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)] 

Visualizing the flow of work is the primary practice of Kanban. Therefore, your top priority should be to create a visualization of your team's workflow. To do so, you need to recognize the various types of work and handoffs that take place regularly as your team progresses items from the backlog to a deliverable state.

For example, the main workflow stages for the following dev team are captured as *Analyze*, *Develop*, and *Test*. Each column corresponds to work that the team does before that stage is considered done.

:::image type="content" source="media/ALM_AC_KanbanIntro.png" alt-text="Screenshot of a Kanban boards with customized columns.":::

## Why configure your Kanban board columns?  

The main reason to configure your team's Kanban board columns is to support your team's workflow and Kanban processes. These processes can involve activities such as evaluating work before committing to it, overseeing handoffs between team members (for example, from development to testing), regulating work in progress (WIP), and other related tasks.

You can also use your Kanban board to do the following tasks: 

- Visualize work that's in progress, nearing completion, and completed.  
- Filter your board to focus on select work based on assignment to a team member or sprint, tags, or parent feature. For details, see [Interactively filter backlogs, boards, queries, and plans](../backlogs/filter-backlogs-boards-plans.md).
- Update workflow status through drag-and-drop operations, as shown in [Update status](#update-status) later in this article.  
- Reorder cards to change priority of work items, as described in [Change priorities](#change-priorities) later in this article. 
- View and quickly assign values to key fields, as described in [Customize cards](customize-cards.md). 
- Create queries and charts based on board columns, as illustrated in [Track board column status](#track-column-status) later in this article. 
- Review a cumulative flow diagram based on column assignments, as described in [View and configure a cumulative flow diagram](../../report/dashboards/cumulative-flow.md). 

[!INCLUDE [temp](../includes/prerequisites-team-settings.md)]
- Complete the following tasks as much as possible. Otherwise, you might need to revisit your configuration. Revisiting a single team's configuration is one thing, but if you support many teams, you're adding extra work by skipping these steps. 

  **Process administrator**: 
  1. Add custom work item types that you want to appear on your backlog or board. For details, see [Add and manage work item types](../../organizations/settings/work/customize-process-work-item-type.md).
  2. Customize your product and portfolio backlogs. Customization ensures that the chosen work item types appear on the backlogs and boards. For more information, see [Customize backlogs and boards](../../organizations/settings/work/customize-process-backlogs-boards.md). 
  3. Customize workflow states. Each workflow state appears as a column on the Kanban board. For details, see [Customize a workflow](../../organizations/settings/work/customize-process-workflow.md).

  **Team administrator**:
  - Set the backlogs that you want to be active for your team. You only need to configure the Kanban boards of backlogs that your team plans to use. For details, see [Select backlog navigation levels for your team](../../organizations/settings/select-backlog-navigation-levels.md).
  - Determine how to track bugs. Bugs might have different workflow states from other types of work items in the **Requirement** category. As a result, bugs must be mapped separately from other work item types. For details, see [Show bugs on backlogs and boards](../../organizations/settings/show-bugs-on-backlog.md).
  - Identify the columns that your team can use to support its workflow and Kanban processes. For more information, see [Map the flow of work](#map-the-flow-of-work) later in this article. 
  - Add, remove, or rename columns and map workflow states to columns. For more information, see [Manage columns on your Kanban board](#add-or-rename-columns) later in this article.  

We recommend that you review the following articles: 

- [Kanban basics](kanban-basics.md)
- [Configure and customize Azure Boards](../configure-customize.md)
- [Set up your backlogs and boards](../backlogs/set-up-your-backlog.md)  
- [Workflow states and state categories](../work-items/workflow-and-state-categories.md)  

<a id="state-mappings" >   </a>
<a id="when-to-update-the-kanban-column-to-state-mappings"></a>

## What is workflow state mapping?  

To ensure proper column placement on your Kanban board, it is crucial to understand how workflow states correspond to column states. The Kanban board and other Azure Boards tools use the following Work item type categories and State categories to group WITs that they want to treat the same:  

|**Work item type category**  |Appears on the...  |
|---------|---------|
|Requirement    | Product board        |  
|Feature   | Feature portfolio board        |     
|Epic    | Epic portfolio board        |         
|Custom    | Custom portfolio board        |         

Workflow states defined for a work item type belong to one of the four state categories and must be specified (except for *Removed* work item states).

|**State category**  |Mapping  |
|---------|---------|
|Proposed  | - Maps to the first column, by default. - You can map to a middle column and specify [WIP limits](wip-limits.md), [split columns](split-columns.md), and [definition of done](definition-of-done.md). |    
|In Progress    | - You can map to a middle column and specify [WIP limits](wip-limits.md), [split columns](split-columns.md), and [definition of done](definition-of-done.md).   |         
|Completed     | Only maps to the last Kanban board column.        |         
|Removed     |      |         

> [!TIP]   
> If a workflow state isn't mapped to a Kanban column, that state doesn't appear on the Kanban board. It's allowed, but we recommend that you map each state to a column.

### Correct your Kanban board configuration

If you see the following error when you open your Kanban board, correct the configuration. The main reason for this error is that the workflow states of work item types in the **Requirement** category aren't mapped to the column. 

> [!div class="mx-imgBorder"]
> ![Screenshot that shows a configuration error message on a Kanban board.](../backlogs/media/setup-backlog/column-config-error.png)

Select **Correct this now** to open the **Settings** dialog.  

In the following example, we added two new states: **Triaged** for *bug*, and **Investigate** for *user story*. Once we map each state to an existing or new column, the Kanban board displays the work items assigned to these states.  

:::image type="content" source="media/add-columns-custom-states-mapping.png" alt-text="Screenshot showing Kanban board settings for columns and states mapping."::

<a id="map-the-flow-of-work">  </a>

## Map your workflow stages

It's best if you involve the entire team to identify an initial set of workflow stages. Each team member can provide useful perspectives to capture and further deepen team understanding of the end-to-end processes.

To get started, ask your team the following questions: 

- *What types of activities do we regularly complete?* 
- *What natural handoffs occur within our team or from our team to other teams?* 
- *What activities can help reinforce our team policies, such as analysis, code review, or design acceptance?*
- *What work needs to occur at each stage?*  
- *What limits do we want to set for each workflow state?*  
- *Is a split column useful for one or more columns?*  

Our example development team came up with these stages as essential to their process: 

![Diagram that shows an example of workflow stages.](media/ALM_AC_Workflow.png)

The following table describes the actions you take at each stage.

|Stage |Actions |
|---------|---------|
|Backlog    |Make a prioritized list of work items that the team isn't yet ready to work on.       |
|Analyze    |Identify well-understood and shared acceptance criteria, along with overall work required to develop and test the item.         |
|Develop    |Code and run unit tests for the item.        |
|Test    |Run exploratory, automated, integration, and other tests.         |
|Done     |Hand off to production because the item is ready.         |

You can always revisit these initial stages later and adjust. 

Another idea is to capture the list of items that your team identifies as critical-to-complete for each stage. You can use that information later to fill out the [definition of done](./definition-of-done.md) for each column. 

<a id="add-or-rename-columns"> </a>

## Manage columns on your Kanban board

Now that you know the essentials of how to work with your Kanban board, here's how you get it to look the way you want.

Column titles and choices depend on the [process](../work-items/guidance/choose-process.md) that you used to create your project and whether your team has chosen to [treat bugs like requirements or like tasks](../../organizations/settings/show-bugs-on-backlog.md).  

::: moniker range=">= azure-devops-2019"

1. [Open your Kanban board](kanban-quickstart.md). If you're not a team admin, [get added as one](../../organizations/settings/add-team-administrator.md). Only team and project admins can customize the Kanban board.

2. Select **Configure team settings** :::image type="icon" source="../../media/icons/blue-gear.png" border="false"::: to configure the board and set general team settings.  

   :::image type="content" source="../../organizations/settings/media/configure-team/open-board-settings.png" alt-text="Screenshot that shows open board settings for a team in a vertical navigation.":::

3. Select **Columns** and then a column tab to see all the settings that you can modify. Your initial column settings look similar to the settings shown in the following image. 

   :::image type="content" source="media/columns/kanban-settings-columns-active-column.png" alt-text="Screenshot that shows the Settings dialog and selection of an Active column.":::

4. Change your column titles to map to your workflow stages. You can add, rename, and move columns to support more stages. 

	Rename the first three columns to **Backlog**, **Analyze**, and **Develop**. Then, add a column and label it **Test**. 

	You can rename a column directly from the Kanban board. 

	:::image type="content" source="media/rename-kanban-columns-direct-ts.png" alt-text="Screenshot showing renaming a column directly on a board.":::

	Or, you can open the dialog and change one or more settings for a Kanban column. 

	> [!div class="mx-imgBorder"]
	> ![Screenshot that shows the Settings dialog and selections for adding a Test column.](media/add-columns-settings-dialog-add-test-ts.png)  

5. To change the column order, drag the column tab to the position that you want.  

6. To delete a column, first make sure that the column doesn't contain any work items. If it does, move the items to another column. Then:

   1. Open **Settings**, select **Columns**, and select **Actions** :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: from the column tab.
   2. Select **Remove** from the menu.  

	> [!div class="mx-imgBorder"]
	> ![Screenshot that shows the selections for deleting a column in the Settings dialog.](media/columns/remove-column.png)    

7. [Change state mappings as needed](#state-mappings) for added columns, added workflow states, or added WITs. 

   Usually, you need to update state mappings when you change the [Working with bugs](../../organizations/settings/show-bugs-on-backlog.md) setting, add [WITs to the Requirement category](../../reference/add-wits-to-backlogs-and-boards.md), or [customize the workflow](../../organizations/settings/work/customize-process-workflow.md).  

8. When you're done with your changes, select **Save**.

::: moniker-end 

::: moniker range="tfs-2018"  

1. [Open your Kanban board](kanban-quickstart.md). If you're not a team admin, [get added as one](../../organizations/settings/add-team-administrator.md). Only team and project admins can customize the Kanban board.

1. Select **Settings** :::image type="icon" source="../../media/icons/team-settings-gear-icon.png" border="false"::: to open the common configuration settings dialog for the Kanban board. 

	![Screenshot that shows the Settings icon on the Kanban board.](media/add-columns-open-settings-ts.png)  

2. Select **Columns** and then a column tab to see all the settings that you can modify. Your initial column settings look similar to the following example. 

	> [!div class="mx-imgBorder"]
	> ![Screenshot that shows column settings in the Settings dialog.](media/add-columns-settings-dialog-ts.png)

3. Change your column titles to map to your workflow stages. You can add, rename, and move columns to support more stages. 

	Rename the first, second, and third columns to **Backlog**, **Analyze**, and **Develop**. Then, add a column and label it **Test**. 

	You can rename a column directly from the Kanban board. 

	<img src="media/rename-kanban-columns-direct-ts.png" alt="Screenshot that shows renaming a column directly on a Kanban board." />

	Or, you can open the dialog and change one or more settings for a Kanban column. 

	<img src="media/add-columns-settings-dialog-add-test-ts.png" alt="Screenshot that shows the Settings dialog and selections for adding a Test column." /> 

4. To change the column order, drag the column tab to the position that you want.  

5. To delete a column, first make sure that the column doesn't contain any work items. If it does, move the items to another column. Then, select **Actions** :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: on the column tab and select **Remove** from the menu. 

	> [!div class="mx-imgBorder"]
	> ![Screenshot that shows the selections for deleting a column in the Settings dialog.](media/columns/remove-column.png)  

6. [Change state mappings as needed](#state-mappings) for added columns, added workflow states, or added WITs.  

   Usually, you need to update state mappings when you change the [Working with bugs](../../organizations/settings/show-bugs-on-backlog.md) setting, add [WITs to the Requirement category](../../reference/add-wits-to-backlogs-and-boards.md), or [customize the workflow](../../organizations/settings/work/customize-process-workflow.md).  

7. When you're done with your changes, select **Save**.  

::: moniker-end  

> [!NOTE]
> If you add bugs or other work item types to appear on a Kanban board, you potentially introduce >other workflow states. New workflow states request you to adjust the Kanban column-to-state mappings >when one of the following customizations is made:
>
>* Your team admin chooses to [show bugs on backlogs and boards](../../organizations/settings/show-bugs-on-backlog.md).  
>* Your project admin [adds work item types (WITs) to backlogs and boards](../../reference/add-wits-to-backlogs-and-boards.md).
>* Your project collection or project admin customizes the workflow for a WIT in the **Requirement** category: [inherited process](../../organizations/settings/work/customize-process-workflow.md) or [on-premises XML process](../../reference/xml/change-workflow-wit.md).  


## Use your Kanban board  

After you have a well-configured Kanban board, you can start using it. To learn how, see [Start using your Kanban board](kanban-quickstart.md).  

[!INCLUDE [temp](../includes/note-kanban-boards-teams.md)]

<a id="update-status"> </a>

### Update status and handoff items

Using your Kanban board couldn't be simpler. You update the status or change priorities by using drag-and-drop operations. 

For example, to signal when work can start in a downstream stage, drag items to the next column. 

![Screenshot that shows dragging an item from the Analyze column to the Develop column.](media/ALM_AC_DragItem.png)

You can move an item from one column to any other column on the board. If you discover that more work is needed at an earlier stage, you can move the item backward; for example, from **Test** to **Analyze** or **Develop**. 

To hand off work to another team member, reassign it directly from the board.

![Screenshot that shows assigning an item from a Kanban board.](media/ALM_AC_Reassign.png)

Team members who receive the handoff can [set alerts](../../organizations/notifications/manage-your-personal-notifications.md) to get immediate email notifications of their newly assigned work. 

<a id="change-priorities"> </a>

### Change your team's priorities

To keep teams working on the highest-priority items, you'll want to react quickly when a change in priority occurs, even after work starts. With your Kanban board, it's a snap. Drag an item up or down within a column.
:::image type="content" source="media/ALM_AC_ChangePriorities.png" alt-text="Screenshot that shows moving an item within a column.":::

<a id="track-column-status"> </a>

### Track Kanban column status  

Your Kanban board is one of several tools that you have for tracking work. The [query tool](../queries/using-queries.md) allows you to list a subset of work items for review, triage, update, or chart generation. For example, you can create a query to list all active user stories (specify two clauses: `Work Item Type=User Story` and `State=Active`). 

But what if you want to list items based on their Kanban column assignment? Can you do that? Yes, you can track column moves on a Kanban board by using the [Board Column and Board Column Done fields](../queries/query-by-workflow-changes.md#kanban_query_fields).

## FAQs 

- [Is there a way to widen columns on a Kanban board?](../faqs.yml#is-there-a-way-to-widen-columns-on-a-kanban-board)  
- [Can I query based on Kanban board columns?](../faqs.yml#can-i-query-based-on-kanban-board-columns)  
- [Can I view a query as a Kanban board?](../faqs.yml#can-i-view-a-query-as-a-kanban-board)  
- [Is there a way to copy a Kanban configuration to another team?](../faqs.yml#is-there-a-way-to-copy-a-kanban-configuration-to-another-team)  

## Supported Visual Studio Marketplace extensions

- [Query Based Boards](https://marketplace.visualstudio.com/items?itemName=realdolmen.EdTro-AzureDevOps-Extensions-QueryBasedBoards-Public)
- [Azure Boards Kanban Tools](https://marketplace.visualstudio.com/items?itemName=alm-devops-rangers.KanbanBoardTools) 
- [Roll-up Board](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.RollUpBoard)
- [FlowViz](https://marketplace.visualstudio.com/items?itemName=agile-extensions.flowviz)

## Next steps

> [!div class="nextstepaction"]
> [Customize cards](customize-cards.md)

## Related articles

- [Add or modify a work item type](../../reference/add-modify-wit.md)
- [Accelerate work with swimlanes](expedite-work.md)
- [Show bugs on backlogs and boards](../../organizations/settings/show-bugs-on-backlog.md)  
- [Enable live updates](live-updates.md)

### REST API resources
To interact programmatically with Kanban board and other team settings, see the [Boards reference in the REST API](/rest/api/azure/devops/work/boards).
