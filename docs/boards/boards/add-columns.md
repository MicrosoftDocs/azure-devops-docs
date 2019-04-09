---
title: Add columns to your Kanban board
titleSuffix: Azure Boards
description: Map your Kanban board, support your team's work flow in Azure Boards, Azure DevOps, & Team Foundation Server
ms.custom: boards-kanban 
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 8afd3481-6fab-401d-90ff-0dd443da0f0e
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
monikerRange: '>= tfs-2013'
ms.date: 02/14/2019
---

# Add columns to your Kanban board

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)] 

Kanban's number one practice is to visualize the flow of work. Accordingly, your number one task is to visualize your team's workflow. You do this by identifying the types of work and handoffs that occur regularly as your team moves items off the backlog and into a shippable state.

After you identify your team's workflow stages, you're ready to [configure your Kanban board to map to them](add-columns.md#add-or-rename-columns). Once configured, you use your Kanban board to update status, reassign work, and reorder items to reflect changing priorities.

For example, the main workflow stages performed by our example dev team are captured here as Analyze, Develop, and Test. Each column corresponds to a work stage the team performs on each item before it can be considered done.

![Kanban board, columns customized ](_img/ALM_AC_KanbanIntro.png)

If you're just getting started, review [Kanban basics](kanban-basics.md) to get an overview of how to access your board and implement Kanban.

::: moniker range="azure-devops"
> [!NOTE]    
>If you're looking at how to add columns to a taskboard, you need to customize the workflow. For details, see [Customize your work flow](../../reference/customize-work.md). To add columns to a backlog or query results, see [Change column options](../backlogs/set-column-options.md).   
>
>For an overview of the features supported on each backlog and board, see [Backlog, board, and plan views](../backlogs/backlogs-boards-plans.md).
::: moniker-end

::: moniker range=">= tfs-2013 <= azure-devops-2019"
> [!NOTE]    
>If you're looking at how to add columns to a taskboard, you need to customize the workflow. For details, see [Add or modify a work item type](../../reference/add-modify-wit.md). To add columns to a backlog or query results, see [Change column options](../backlogs/set-column-options.md).   
>
>For an overview of the features supported on each backlog and board, see [Backlog, board, and plan views](../backlogs/backlogs-boards-plans.md).
::: moniker-end


[!INCLUDE [temp](../_shared/prerequisites-team-settings.md)]

<a id="map-the-flow-of-work">  </a>

##Map the flow of work
It's best if you involve the entire team to identify an initial set of workflow stages. Each team member provides useful perspectives to capture and further deepen team understanding of the end-to-end processes.

To get started, ask your team these questions: 

- *What types of activities do we regularly perform?* 
- *What natural hand offs occur within our team? Or, from our team to other teams?* 
- *What activities will help reinforce our team policies, such as analysis, code review, or design acceptance?*
- *What work needs to occur at each stage?* 


Our example development team came up with these stages as essential to their process: 

![Example workflow stages ](_img/ALM_AC_Workflow.png)

* **Backlog**: Prioritized list of items which aren't yet ready to work on  
* **Analyze**: Well understood and shared acceptance criteria identified   and overall work required to develop and test item  
* **Develop**: Code and run unit tests for the item  
* **Test**: Perform exploratory, automated, integration, and other tests
* **Done**: Item ready to handoff to production.  

You can always revisit these initial stages later and adjust. 

Another idea, capture the list of items your team identifies as critical-to-complete for each stage. You can use that later to fill out the [Definition of Done](http://msdn.microsoft.com/library/dn914589.aspx) for each column. 

## Update status and handoff items

Using your Kanban board couldn't be simpler. Using drag-and-drop operations you update the status or change priorities. 

For example, to signal when work can start in a downstream stage, simply drag items into the next column. 

![Kanban board, move an item](_img/ALM_AC_DragItem.png)

You'll notice that you can move an item from one column to any other column on the board. That way, if you discover more work is needed at an earlier stage, you can simply move the item backward, for example from Test into Analyze or Develop. 

Also, to handoff work to another team member, simply reassign it directly from the board.

![Kanban board, assign item](_img/ALM_AC_Reassign.png)

And, team members receiving the handoff can [set alerts](../queries/alerts-and-notifications.md) to receive immediate email notifications of their newly assigned work. 

## Change priorities

To keep teams working on the highest priority items, you'll want to react quickly when a change in priority occurs even after work starts. With your Kanban board it's a snap. Simply drag an item up or down within a column.

![Kanban column, reorder within column ](_img/ALM_AC_ChangePriorities.png)

<a id="add-or-rename-columns"> </a>

## Add or rename columns

Now that you've got the essentials of how to work with your Kanban board, here's how you get it to look like what you need it to.

You'll see different column titles and choices based on the [Process](../work-items/guidance/choose-process.md) you used to create your project and whether your team has chosen to [treat bugs like requirements or like tasks](../../organizations/settings/show-bugs-on-backlog.md).  

::: moniker range=">= azure-devops-2019"

0.  [Open your Kanban board](kanban-quickstart.md). If you're not a team admin, [get added as one](../../organizations/settings/add-team-administrator.md). Only team and project admins can customize the Kanban board.

0. Choose the ![](../../_img/icons/blue-gear.png) gear icon to configure the board and set general team settings.  

	> [!div class="mx-imgBorder"]
	> ![Open board settings for a team, vert nav](../../organizations/settings/_img/configure-team/open-board-settings.png)  

2. Choose **Columns** and then a column tab to see all the settings you can modify. Your initial column settings will look something like this. 

	![Kanban board, Customize columns, default columns, Agile process](_img/add-columns-settings-dialog-ts.png) 

3. Change your column titles to map to your workflow stages. You can add, rename, and move columns to support more stages. 

	Here, we rename the first, second, and third columns to Backlog, Analyze, and Develop. We then add a column and label it Test. 

	You can rename a column directly form the Kanban board. 

	<img src="_img/rename-kanban-columns-direct-ts.png" alt="Kanban board, rename a column directly" style="border: 2px solid #C3C3C3;" />

	Or, you can open the dialog and change one or more settings for a Kanban column. 

	> [!div class="mx-imgBorder"]
	> ![Settings, Columns, Add and rename columns, Agile process](_img/add-columns-settings-dialog-add-test-ts.png)  

0. To change the column order, simply drag the column tab to the position you want.  

0. To delete a column, first make sure that the column doesn't contain any work items. If it does, move the items to another column. Then, open **Settings**, choose **Columns**, and choose the ![](../../_img/icons/actions-icon.png) actions icon from the column tab and select **Remove** from the menu.  

	> [!div class="mx-imgBorder"]
	> ![Settings dialog, Columns tab, open Column tab menu, remove column](_img/columns/remove-column.png)    

0.	[Change State mappings as needed](#state-mappings) for added columns, added workflow states, or added work item types (WITs). 

	Usually you need to do this when you change the [Working with bugs](../../organizations/settings/show-bugs-on-backlog.md) setting, add [WITs to the Requirement Category](../../reference/add-wits-to-backlogs-and-boards.md), or [customize the workflow](../../organizations/settings/work/customize-process-workflow.md).  

0. When done with your changes, choose **Save**.

::: moniker-end 

::: moniker range="tfs-2018"  
0.  [Open your Kanban board](kanban-quickstart.md). If you're not a team admin, [get added as one](../../organizations/settings/add-team-administrator.md). Only team and project admins can customize the Kanban board.

0. Choose ![settings icon](../../_img/icons/team-settings-gear-icon.png) to open the common configuration settings dialog for the Kanban board. 

	![Kanban board, open common configuration settings](_img/add-columns-open-settings-ts.png)  

2. Choose **Columns** and then a column tab to see all the settings you can modify. Your initial column settings will look something like this. 

	![Kanban board, Customize columns, default columns, Agile process](_img/add-columns-settings-dialog-ts.png) 

3. Change your column titles to map to your workflow stages. You can add, rename, and move columns to support more stages. 

	Here, we rename the first, second, and third columns to Backlog, Analyze, and Develop. We then add a column and label it Test. 

	You can rename a column directly form the Kanban board. 

	<img src="_img/rename-kanban-columns-direct-ts.png" alt="Kanban board, rename a column directly" style="border: 2px solid #C3C3C3;" />

	Or, you can open the dialog and change one or more settings for a Kanban column. 

	<img src="_img/add-columns-settings-dialog-add-test-ts.png" alt="Kanban board, Settings, Columns, Add and rename  columns, Agile process" style="border: 1px solid #C3C3C3;" /> 

0. To change the column order, simply drag the column tab to the position you want.  

0. To delete a column, first make sure that the column doesn't contain any work items. If it does, move the items to another column. Then, choose the column tab ![](../../_img/icons/actions-icon.png) actions icon and select **Remove** from the menu. 

	> [!div class="mx-imgBorder"]
	> ![Kanban board, delete a column](_img/columns/remove-column.png)  

0.	[Change State mappings as needed](#state-mappings) for added columns, added workflow states, or added work item types (WITs).  

	Usually you need to do this when you change the [Working with bugs](../../organizations/settings/show-bugs-on-backlog.md) setting, add [WITs to the Requirement Category](../../reference/add-wits-to-backlogs-and-boards.md), or [customize the workflow](../../organizations/settings/work/customize-process-workflow.md).  

0. When done with your changes, choose **Save**.  

::: moniker-end  

::: moniker range="tfs-2017"  
0.  [Open your Kanban board](kanban-quickstart.md). If you're not a team admin, [get added as one](../../organizations/settings/add-team-administrator.md). Only team and project admins can customize the Kanban board.

0. Choose ![settings icon](../../_img/icons/team-settings-gear-icon.png) to open the common configuration settings dialog for the Kanban board. 

	![Kanban board, open common configuration settings](_img/add-columns-open-settings-ts.png)  

2. Choose **Columns** and then a column tab to see all the settings you can modify. Your initial column settings will look something like this. 

	![Kanban board, Customize columns, default columns, Agile process](_img/add-columns-settings-dialog-ts.png) 

3. Change your column titles to map to your workflow stages. You can add, rename, and move columns to support more stages. 

	Here, we rename the first, second, and third columns to Backlog, Analyze, and Develop. We then add a column and label it Test. 

	You can rename a column directly form the Kanban board. 

	<img src="_img/rename-kanban-columns-direct-ts.png" alt="Kanban board, rename a column directly" style="border: 2px solid #C3C3C3;" />

	Or, you can open the dialog and change one or more settings for a Kanban column. 

	<img src="_img/add-columns-settings-dialog-add-test-ts.png" alt="Kanban board, Settings, Columns, Add and rename  columns, Agile process" style="border: 1px solid #C3C3C3;" /> 

0. To change the column order, simply drag the column tab to the position you want.  

0. To delete a column, first make sure that the column doesn't contain any work items. If it does, move the items to another column. Then, choose the column tab ![](../../_img/icons/actions-icon.png) actions icon and select **Delete** from the menu. 

	![Kanban board, delete a column](_img/kanban-delete-column.png)  

::: moniker-end  

::: moniker range="tfs-2015"  

0.  [Open your Kanban board](kanban-quickstart.md). If you're not a team admin, [get added as one](../../organizations/settings/add-team-administrator.md). Only team and project admins can customize the Kanban board.  

0. the ![ ](../_img/icons/team-settings-gear-icon.png) gear icon, to open the common configuration settings dialog for the Kanban board. 

	![Kanban board, open common configuration settings](../../boards/boards/_img/kanban-card-customize-open-settings.png)  

	#### TFS 2015.1  

0. Choose **Columns** and then a column tab to see all the settings you can modify. Your initial column settings will look something like this. 

	![Kanban board, Customize columns, default columns, Agile process](_img/add-columns-active-agile-update-1.png)

0. Change your column titles to map to your workflow stages. You can add, rename, and move columns to support more stages. 

	Here, we rename the first, second, and third columns to Backlog, Analyze, and Develop. We then add a column and label it Test. 

	You can rename a column directly form the Kanban board. 

	![Kanban board, rename a column directly](_img/rename-kanban-columns-direct.png)

	Or, you can open the dialog and change one or more settings for a Kanban column. 

	![Kanban board, add and rename columns](_img/vso-column-settings-add-rename-columns-no-tags.png)

0. To change the column order, simply drag the column tab to the position you want.  

0. To delete a column, first make sure that the column doesn't contain any work items. If it does, move the items to another column. Then, choose the column tab ![](../../_img/icons/actions-icon.png) actions icon and select **Delete** from the menu. 

	![Kanban board, delete a column](_img/kanban-delete-column.png)  

0. [Change State mappings as needed](#state-mappings) for added columns, added workflow states, or added work item types (WITs). 

	Usually you need to do this when you change the [Working with bugs](../../organizations/settings/show-bugs-on-backlog.md) setting or add [WITs to the Requirement Category](../../reference/add-wits-to-backlogs-and-boards.md).  
 
0. When done with your changes, choose **Save**.  

	#### TFS 2015  

0. Change your column titles to map to your workflow stages. You can add, rename, and move columns to support more stages. 

	![Kanban board, Customize columns, default columns, Agile process](_img/ALM_AC_CustomizeColumns.png)  

	Here, we rename the first, second, and third columns to Backlog, Analyze, and Develop. We then add a column and label it Test. 

	![Customize columns, add column](_img/ALM_AC_CustomizeColumnsDetailed.png)  

	Rename column titles to best reflect each stage of work. Keep the column titles as simple as possible. 

0. To change the column order, use the left ![left arrow](_img/ALM_AC_LeftIcon.png) or right ![right arrow](_img/ALM_AC_RightIcon.png) arrow icons. 

0. To delete a column, first make sure that the column doesn't contain any work items. If it does, move the items to another column. Then, click X at the top of the column.</p>

0. [Change State mappings as needed](#state-mappings) for added columns, added workflow states, or added work item types (WITs).

	Usually you need to do this when you change the [Working with bugs](../../organizations/settings/show-bugs-on-backlog.md) setting or add [WITs to the Requirement Category](../../reference/add-wits-to-backlogs-and-boards.md).

::: moniker-end  

::: moniker range="tfs-2013"  

0.  [Open your Kanban board](kanban-quickstart.md). If you're not a team admin, [get added as one](../../organizations/settings/add-team-administrator.md). Only team and project admins can customize the Kanban board.  

0. Choose the ![ ](../_img/icons/team-settings-gear-icon.png) gear icon, to open Customize Columns.  

	![Kanban board, open common configuration settings](_img/columns/open-settings-2013.png)  

	If you're not a team admin, [get added as one](../../organizations/settings/add-team-administrator.md). Only team and project admins can customize columns.   

	![Kanban board, Customize columns, default columns, Agile process](_img/ALM_AC_CustomizeColumns.png)  

0. Change your column titles to map to your workflow stages. You can add, rename, and move columns to support more stages. 

	Here, we rename the first, second, and third columns to Backlog, Analyze, and Develop. We then add a column and label it Test. 

	![Customize columns, add column](_img/ALM_AC_CustomizeColumnsDetailed.png)  

	Rename column titles to best reflect each stage of work. Keep the column titles as simple as possible.</p>

0. To change the column order, use the left ![left arrow](_img/ALM_AC_LeftIcon.png) or right ![right arrow](_img/ALM_AC_RightIcon.png) arrow icons. 

0. To delete a column, first make sure that the column doesn't contain any work items. If it does, move the items to another column. Then, choose **X** at the top of the column.</p>

0. [Change State mappings as needed](#state-mappings) for added columns, added workflow states, or added work item types (WITs).

	Usually you need to do this when you change the [Working with bugs](../../organizations/settings/show-bugs-on-backlog.md) setting or add [WITs to the Requirement Category](../../reference/add-wits-to-backlogs-and-boards.md).
 
::: moniker-end

<a id="state-mappings" >   </a>
<a id="when-to-update-the-kanban-column-to-state-mappings"></a>
## Update Kanban column-to-State mappings
 
Another "under the hood" item that impacts Kanban column-to-State mappings is categories. The Kanban board and other Agile tools uses categories to group WITs that they want to treat the same. 

What does this mean for Kanban board users? First, only work items whose WITs belong to the Requirement Category show up on the Kanban board. Second, if you add bugs or other WITs to appear on the Kanban board, you potentially introduce additional workflow states. This means that you may need to adjust the Kanban column-to-State mappings when you perform one of these additional customizations:

* Your team admin chooses to [show bugs on backlogs and boards](../../organizations/settings/show-bugs-on-backlog.md)  
* Your project admin [adds WITs to backlogs and boards](../../reference/add-wits-to-backlogs-and-boards.md)
* Your project collection or project admin customizes the workflow for a WIT in the Requirement Category: [Azure Boards](../../organizations/settings/work/customize-process-workflow.md) or [TFS](../../reference/xml/change-workflow-wit.md)  

For example, if you change the team setting and add bugs to the Requirements Category, the bug WIT will now appear in the Columns dialog. You'll want to make sure that the Kanban column-to-State mappings match what you want. For more information, see [Workflow states and state categories](../work-items/workflow-and-state-categories.md). 

::: moniker range=">= tfs-2017"

In this example two new states have been added, Triaged for bug, and Investigate for user story. Each needs to be mapped to an existing or new column in order for the Kanban board to display work items assigned to these states.  

<img src="_img/add-columns-custom-states-mapping.png" alt="Kanban board settings, Columns" style="border: 1px solid #C3C3C3;" />  
::: moniker-end

::: moniker range="tfs-2015"

**TFS 2015.1**
In this example two new states have been added, Triaged for bug, and Investigate for user story. Each needs to be mapped to an existing or new column in order for the Kanban board to display work items assigned to these states.  

<img src="_img/add-columns-custom-states-mapping.png" alt="Kanban board settings, Columns" style="border: 1px solid #C3C3C3;" />  

**TFS 2015**
In this example, bugs have been added to show on the Kanban board. You need to map the bug state for each column on the Kanban board.  
 
![Kanban column to State mappings with bugs ](_img/ALM_AC_Update.png)
::: moniker-end

::: moniker range="tfs-2013"

In this example, bugs have been added to show on the Kanban board. You need to map the bug state for each column on the Kanban board.  
 
![Kanban column to State mappings with bugs ](_img/ALM_AC_Update.png)
::: moniker-end


## Track Kanban column status  

Your Kanban board is one of several tools you have for tracking work. The [query tool](../queries/using-queries.md) allows you to list a subset of work items for the purposes of review, triage, update, or chart generation. For example, you can create a query to list all active user stories (specify two clauses: Work Item Type=User Story; State=Active). 

::: moniker range=">= tfs-2017"
But what if you want to list items based on their Kanban column assignment? Can you do that? Yes, you can track Kanban board column moves using the [Board Column and Board Column Done fields](../queries/query-by-workflow-changes.md#kanban_query_fields).
::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2015"
But what if you want to list items based on their Kanban column assignment? Can you do that? Yes, from TFS 2015 Update 1 or later version. No, if you work from TFS 2015 or earlier versions. You track Kanban board column moves using the [Board Column and Board Column Done fields](../queries/query-by-workflow-changes.md#kanban_query_fields).  

 
**For TFS 2013, TFS 2015:**
What you can do is view the history of changes made to a work item. The [History field](../queries/history-and-auditing.md) captures all updates made to an item, including column moves. You can view this by opening the card (double-click to open). 

For example, the following History shows two updates made by dragging the item into a different Kanban column. The first (revision 8) involved a column move, from Analyze to Develop; and a State change, New to Active. However, the second (revision 9) only involved a column move, from Develop to Test; the State remains at Active.
 
![History field updates with Kanban column moves ](_img/ALM_AC_History.png)

As an item's card moves from one Kanban column to the next, the item's workflow state updates based on the Kanban column-to-State mapping. You can see and set these mappings from the Customize Columns dialog. For example, here's the default mapping for the Agile user story.

![Kanban column to State mappings ](_img/ALM_AC_State.png)

Kanban columns may correspond to an actual workflow state or a pseudo state. For example, Develop, Test, and Verify columns may all map to the Active state. In this case, when you move an item from Develop to Test or from Test to Verify, the item's State doesn't change. 

::: moniker-end

## Related articles

That's about all you need to know about working with Kanban columns. Here are a few more options you have for customizing the look and feel of the board. 

* [Workflow states & state categories](../work-items/workflow-and-state-categories.md)  
* [Set up your backlogs and boards](../backlogs/set-up-your-backlog.md)
* [Show bug on backlogs and boards](../../organizations/settings/show-bugs-on-backlog.md)  
* [Work in Progress limits](wip-limits.md)  
* [Add swimlanes, expedite work](expedite-work.md)   
* [Split columns](split-columns.md)   
* [Definition of Done](definition-of-done.md)  

### REST API resources
To interact programmatically with Kanban board and other team settings, see the [REST API, Boards reference](/rest/api/azure/devops/work/boards).
