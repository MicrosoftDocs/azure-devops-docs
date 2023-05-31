---
title: About Kanban boards
titleSuffix: Azure Boards
description: Learn about Kanban board basics, including key concepts and best practices in Azure Boards.   
ms.custom: boards-kanban 
ms.service: azure-devops-boards
ms.assetid:  
ms.author: chcomley
author: chcomley
ms.topic: overview
monikerRange: '<= azure-devops'
ms.date: 05/31/2023
---


# About Kanban boards

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
 
Your Kanban board provides you with a visual interactive space for you and your team to plan and show progress. Your team can track the critical information it needs by seeing which work items are in progress, where the bottlenecks are, who work is assigned to, and more.

Boards present work items as cards and support quick status updates through drag-and-drop, similar to sticky notes on a physical whiteboard.

> [!NOTE]  
> A Kanban board gets provisioned with the addition of each project and each team. You can only create or add Kanban boards to a project by adding another team. For more information, see [About teams and Agile tools](../../organizations/settings/about-teams-and-settings.md).

## Product and portfolio Kanban boards 

Each [product and portfolio backlog](../backlogs/backlogs-overview.md) has a corresponding Kanban board. Kanban boards are associated with a team and display work items that are based on the area and iteration paths that the team selected. For more information, see [Define iteration (sprint) paths and configure team iterations](../../organizations/settings/set-iteration-paths-sprints.md). 

Each board supports many Kanban practices such as defining columns and swimlanes, setting Work-in-Progress (WIP) limits, defining the Definition of Done, and more. To get started, see [Kanban quickstart](../boards/kanban-quickstart.md). 

::: moniker range=">= azure-devops-2019"

![Screenshot of Kanban board, Agile template.](../work-items/media/about-agile/view-boards-agile.png)   

::: moniker-end

::: moniker range="tfs-2018"
![Screenshot of Kanban board, Kanban board, Agile template, TFS 2018.](media/kanban-basics-intro.png)     
::: moniker-end  
 
## Configure & customize your Kanban board

Your Kanban board is highly configurable to support your team's workflow. Each team can configure each board with the following tasks:
:::row:::
   :::column span="1":::
   Configure boards
   :::column-end:::
   :::column span="1":::
   Configure card displays
   :::column-end:::
:::row-end:::
:::row:::
  :::column span="1":::
   - [Manage columns](add-columns.md)  
    - [Set WIP limits](wip-limits.md)  
    - [Set Definition of Done](definition-of-done.md)  
    - [Add swimlanes](expedite-work.md)
    - [Reorder cards](customize-cards.md#reorder-cards)
    - [Enable backlog and board levels](../../organizations/settings/select-backlog-navigation-levels.md)
    - [Work with bugs](../../organizations/settings/show-bugs-on-backlog.md)
   :::column-end:::
   :::column span="1":::
   - [Add or remove fields from cards](customize-cards.md)
    - [Define card styles](customize-cards.md#style-rule)
    - [Apply tag colors](customize-cards.md#color-tags)
    - [Enable/disable annotations](customize-cards.md#annotations)
    - [Define inline test behavior on cards](customize-cards.md#tests) 
    - [Add details and estimates](../backlogs/create-your-backlog.md#estimates) to your backlog items
    - [Define tasks or child items for backlog items](add-task-checklists.md) 
    - [Add, run, and update inline tests](add-run-update-tests.md) 
   :::column-end:::
:::row-end:::

Along with these team configurations, you can [customize your project](#customize-your-project-and-board-inheritance) by adding or modifying work item types, the workflow, and add customized portfolio backlogs and boards. 

### Common board configurations for multiple teams 

**Question**: *Can you define a board configuration that multiple teams can subscribe to?*
**Answer**: *No. Each team controls their own team settings and board configurations.*

## Update work item status

Once you've configured your Kanban board, you can add work items directly to the board. Update the status of work by dragging a card to another column on the Kanban board. You can even change the order of items as you move a card to a new column. For more information, see [Workflow states and state categories](../work-items/workflow-and-state-categories.md). 

![Git showing how to reorder cards while changing columns.](media/8_7_02.gif)

By monitoring these metrics, you can gain insight into how to optimize your processes and minimize lead time. For more information, see the following articles:  

## Display of leaf node work items  

[!INCLUDE [temp](../includes/display-leaf-nodes.md)]

## Use select features with multi-team ownership 

When you share area paths across two or more teams, you need to know how Azure Boards manages conflicts that can arise when exercising these features: 
- [Reorder or reparent work items](#reorder-and-reparent-work-items) on a backlog or board
- Updates made to Kanban Board Column, Done, and Lane fields when dragging items to a different column 

### Reorder and reparent work items 

All backlogs and boards support drag-and-drop to reorder and reparent work items. Updates made to one team's backlogs and boards are reflected in other team backlogs and boards that share the same area path. You may need to refresh the page to view the changes. 

You can only use drag-and-drop to reorder or reparent work items assigned to area paths selected for your team. When the **Parents** view option is enabled, work items may appear on your backlog that your team doesn't own. Anything that appears with the :::image type="icon" source="../../media/icons/info.png" border="false"::: information icon can't be reordered nor reparented as another team owns it.  
 
:::image type="content" source="../plans/media/config-teams/information-message-owned-by-other-team.png" alt-text="Screenshot of information message on team ownership.":::

### Update columns

Each team can customize the Kanban board columns and swimlanes, so the values that get assigned to Kanban board fields may differ from what you expect when another team updates the work item from a different board. 

Even if the management team and the feature teams configure their Feature [Kanban board columns](add-columns.md) with identical workflow mapping, one team's Kanban board items aren't reflected on another team's Kanban board. Only when the work item moves to a column that maps to a workflow state does the card column reflect the same on all boards.

By design, the team with the longest area path wins the conflict and determines the values for the Kanban **Board Column**, **Board Column Done**, and **Board Lane** fields. If the shared area paths are of equal depth, the results are nondeterministic.  
 
::: moniker range=">= azure-devops-2019"
 The primary work-around for this issue is to maintain single ownership of work items by [Defining area paths and assign to a team](../../organizations/settings/set-area-paths.md). Another option is to add custom workflow states that all teams can use. For details, see [Customize the workflow (Inheritance process)](../../organizations/settings/work/customize-process-workflow.md). 

::: moniker-end

::: moniker range="tfs-2018"
 The primary work-around for this issue is to maintain single ownership of work items by [Defining area paths and assign to a team](../../organizations/settings/set-area-paths.md). Another option is to add custom workflow states that all teams can use. For details, see [Change the workflow for a work item type](../../reference/xml/change-workflow-wit.md).
::: moniker-end
 
## Provide permissions and access

As a member added to the Contributors group of a project, you can use most features provided under **Boards** or **Work**. Users with Basic access have full access to all features. Users with Stakeholder access are limited to certain features. 

For more information about permissions and access, see [Permissions and access for work tracking](../../organizations/security/permissions-access-work-tracking.md) and [Stakeholder access quick reference](../../organizations/security/stakeholder-access.md). To add users to a project, see [Add users to a project or team](../../organizations/security/add-users-team-project.md).

## Customize your project and board inheritance

::: moniker range=">= azure-devops-2019" 
If you need more than three board levels, you can add more. For more information, see <a href="../../organizations/settings/work/customize-process-backlogs-boards.md" data-raw-source="[Customize your backlogs or boards for a process](../../organizations/settings/work/customize-process-backlogs-boards.md)">Customize your backlogs or boards for a process</a>. 

You can also add or modify the fields defined for a work item type (WIT), add a custom WIT, or modify the workflow. For more information, see [Customize an inheritance process](../../organizations/settings/work/inheritance-process-model.md). 
::: moniker-end
 
::: moniker range="< azure-devops-2019" 
If you need more than three board levels, you can add more. For more information, see [Add portfolio backlogs](../../reference/add-portfolio-backlogs.md).

You can also add or modify the fields defined for a work item type (WIT), add a custom WIT, or modify the workflow.  For more information, see [Customize the On-premises XML process model](../../reference/on-premises-xml-process-model.md). 
::: moniker-end

::: moniker range=">= azure-devops-2019"
## Can I view a Kanban board of work items defined by a query?  

The [Query Based Boards](https://marketplace.visualstudio.com/items?itemName=realdolmen.EdTro-AzureDevOps-Extensions-QueryBasedBoards-Public) Marketplace extension supports viewing a flat-list query of work items as a Kanban board. The query can contain different work item types and work items defined in different projects.  
::: moniker-end

## Kanban concepts and terms 

See the following table of terms and available tools used in tracking work using Kanban boards and Kanban methods.

|Concept/Term |Description |
|---------|---------|
|Blocker    |  An issue that prevents work from progressing. You can highlight work that is blocked by using tags and changing the card color. For more information, see [Customize cards, Define style rules to highlight cards](customize-cards.md#define-style-rules-to-highlight-cards).       |
|Bottleneck    | A constraint in the system that limits the flow of work. Identifying bottlenecks makes it easier to reduce their effect and provides a mechanism for controlling work flowing through the process. For more information, see [Split columns, Identify bottlenecks](split-columns.md#id-bottlenecks).        |
|Card reordering  |Card reordering lets you change the priority order and forces cards to maintain the backlog priority when you drag and drop them on the board. For more information, see [Reorder cards](customize-cards.md#reorder-cards).          |
|Cumulative flow diagram (CFD)   | The in-context CFD report shows the count of items in each Kanban column for the past 30 weeks or less. From this chart, you can gain an idea of the amount of work in progress and lead time. Work in progress counts unfinished requirements. For more information, see [Cumulative flow, lead time, and cycle time guidance](../../report/dashboards/cumulative-flow.md).         |
|Cycle time  |Cycle time is the time calculated for a work item from first entering an *In Progress* category state to entering a *Completed* state category. For more information, see [Cumulative flow, lead time, and cycle time guidance](../../report/dashboards/cumulative-flow-cycle-lead-time-guidance.md). You can gain valuable metrics and visualize the cycle time for a team and a configurable time period by [adding the Cycle Time widget to the dashboard](../../report/dashboards/cycle-time-and-lead-time.md). |
|Definition of done  | Criteria that a team specifies for each stage of work to share and standardize on what makes up work being done at that stage. For more information, see [Kanban best practices, working software and the Definition of Done](best-practices-kanban.md#dod).         |
|Kanban board   | An interactive, electronic sign board that supports visualization of the flow of work from concept to completion and lean methods. Azure DevOps provides a Kanban board for each product and portfolio backlog. For more information, see [Kanban basics](../../boards/boards/kanban-basics.md) and [Kanban board features and epics](../../boards/boards/kanban-epics-features-stories.md) and [Track work in swimlanes](expedite-work.md#track-work-in-swimlanes).        |
|Kanban columns    | A Kanban column maps to a stage of work. The default columns map to the workflow states of the work item types that appear on the Kanban board. You configure the columns to map workflow states of your team. For more information, see [Kanban basics, Map the flow of work](kanban-basics.md#map-flow).        |
|Row9     | Lead time is the time calculated for a work item from first entering a *Proposed* category state to entering a *Completed* state category. For more information, see  [Cumulative flow, lead time, and cycle time guidance](../../report/dashboards/cumulative-flow-cycle-lead-time-guidance.md). You can gain valuable metrics and visualize the lead time for a team and a configurable time period by [adding the Lead Time widget to the dashboard](../../report/dashboards/cycle-time-and-lead-time.md). |
|Live updates   |Live updates is a Kanban board view option that when enabled automatically refreshes the Kanban board as other team members move or reorder cards. For more information, see [Enable live updates](live-updates.md).          |
|Product backlog    | An interactive list of work items that corresponds to a team's project plan or roadmap for what the team plans to deliver. The product backlog supports prioritizing work, forecasting work by sprints, and quickly linking work to portfolio backlog items. You can define your backlog items and then manage their status using the Kanban board. Each team can customize its product backlog. For more information, see [Create your backlog](../backlogs/create-your-backlog.md).        |
|Product backlog item   | A type of work item that defines the applications, requirements, and elements that teams plan to create. Product owners typically define and stack rank product backlog items, which are defined with the Scrum process. For more information, see [Scrum process work item types and workflow.](../work-items/guidance/scrum-process-workflow.md)        |
|Portfolio backlog    | An interactive list of work items, similar to the product backlog that supports organizing or grouping work under features epics, or scenarios. Portfolio backlogs work similarly to product backlogs in that you can prioritize work and view the tree hierarchy of work. For more information, see [Define features and epics.](../backlogs/define-features-epics.md)        |
| Swimlanes    | A swimlane is a configurable row on a Kanban board, used to support different service class levels of work. For more information, see [Speed up work with swimlanes](expedite-work.md).         |
|Split columns    | The Split columns feature lets your team implement a pull mechanism within the workflow process. Without split columns, teams push work forward, to signal that they've completed their stage of work. However, pushing it to the next stage doesn't necessarily mean that a team member immediately starts work on that item. With split columns, your team knows exactly how many items sit idle, waiting for work to begin. For more information, see [Manage columns](add-columns.md#split-columns).        |
|Task checklists   |  A task is a type of work item used to track work required to complete a user story or product backlog item. You can add tasks from your Kanban board that appear as a checklist of work to be done. As you complete a task, you can update its status by checking the checkbox for the task.  For more information, see [Add tasks or child items as checklists](add-task-checklists.md).        |
|Task switching   | Task switching, also referred to as *context switching* or *multitasking*, is when a team member shifts their attention among different tasks. Limiting task switching can allow a person to work more efficiently by minimizing the amount of time required to redirect cognitive function to a new activity.        |
|User story   | A type of work item that defines the applications, requirements, and elements that teams plan to create. Product owners typically define and stack rank user stories. User story is defined with the Agile process. For more information, see [Agile process work item types and workflow.](../work-items/guidance/agile-process-workflow.md)    |
| Work in progress (WIP) | Work that has been started but isn't done or completed.      |
| WIP limit    | A WIP limit is a constraint that a team applies to one or more workflow stages to help prevent potential bottlenecks that hinder the continuous flow of work in the system. For more information, see [Work in Progress limits](wip-limits.md).       |
|Workflow states   |Workflow states are defined for each work item type to support tracking the status of a work item, from its creation to its completion. These states define the workflow process: actions, steps, or stages that a piece of work goes through from inception to completion. The State and Reason fields differ depending on the work item type and process selected for the project.    
You can customize your workflow states, adding states or renaming states. For more information, see [Customize the workflow](../../organizations/settings/work/customize-process-workflow.md). 
You can customize your workflow states, adding states, renaming states, and changing state transitions and reasons. For more information, see [Customize the workflow](../../reference/xml/change-workflow-wit.md). |
| Workflow state categories    | State categories determine how the Kanban board treats each workflow state. The state categories used by the backlogs are *Proposed*, *In Progress*,  *Resolved*, and *Completed*. For more information, see [Workflow states and state categories](../work-items/workflow-and-state-categories.md).      |

For more information, see the following articles: 
- [Agile glossary](../work-items/agile-glossary.md) 
- [Work item field index](../work-items/guidance/work-item-field.md)  
- [Project management and navigation glossary](../../project/navigation/glossary.md)

## Use Kanban board controls

You can quickly switch from the backlog view to the board view using the **Backlog** and **Board** links. Use the following icons to enable other user interface features. 

> [!div class="mx-tdCol2BreakAll"]
> |Control                  | Function                      |
> |--------------------------|-------------------------------|
> | **Backlog**               | [Switch to backlog view](../backlogs/create-your-backlog.md)           |
> | **Board**    | [Switch to Kanban board view](kanban-quickstart.md)            |  
> | ![Kanban filter icon](../media/icons/kanban-filter-icon.png) | [Filter by keywords, tags, or fields](../backlogs/filter-backlogs-boards-plans.md)     | 
> | ![Live updates icon](../media/icons/live-updates-icon.png)  | [Enable live updates](kanban-basics.md#live-updates)  |
> | ![Settings icon](../media/icons/team-settings-gear-icon.png) | Customize the board and configure team settings:<br/>[Cards](../../boards/boards/customize-cards.md)  &#124; [Card reordering](../../boards/boards/customize-cards.md#reorder-cards) &#124; [Columns](add-columns.md)  &#124; [Swimlanes](expedite-work.md)  &#124; [CFD chart](../../report/dashboards/cumulative-flow.md) &#124; [Backlogs](../../organizations/settings/select-backlog-navigation-levels.md) &#124; [Working days](../../organizations/settings/set-working-days.md) &#124; [Working with bugs](../../organizations/settings/show-bugs-on-backlog.md)   |
> | ![full screen icon](../media/icons/full-screen-icon.png) / ![exit full screen icon](../media/icons/exit-full-screen-icon.png) | Enter or exit full screen mode      |  

### Open keyboard shortcuts

Enter `?` to open the Kanban board keyboard shortcuts. The following image isn't exhaustive.  

:::image type="content" source="../media/kanban-board-keyboard-shortcuts-ts-jul.png" alt-text="Screenshot showing keyboard shortcuts."::: 

For more information, see [Keyboard shortcuts for Azure DevOps and Team Explorer](../../project/navigation/keyboard-shortcuts.md).

## Enable live updates 

Enable live updates to automatically refresh your Kanban board when changes occur. With live updates enabled, you no longer have to press **F5** to see the latest changes. To view or modify work items, **View work items in this node** and **Edit work items in this node** permissions must be set to **Allow**. By default, the Contributors group has this permission set. Users with Stakeholder access for a private project can add work items and update status through drag-and-drop, but can't update fields displayed on cards. They can add tasks and change task status.

::: moniker range=">= azure-devops-2019"
Choose the :::image type="icon" source="../../media/icons/view-options-icon.png" border="false"::: view options icon and move the slider for **Live updates** to On.  

:::image type="content" source="media/turn-live-updates-on-agile.png" alt-text="Screenshot showing moving the slider for Live updates to On.":::
::: moniker-end

::: moniker range="tfs-2018"
Choose the :::image type="icon" source="../media/icons/live-updates-icon.png" border="false"::: **Live updates** icon.  

:::image type="content" source="media/kanban-live-updates.png" alt-text="Screenshot showing Kanban board, live updates icon.":::

As one team member updates the status of a work item, other team members see those updates in real time as they occur.  

![GIF of Live update.](../boards/media/kanban-live-updates.gif)  

::: moniker-end

## Next steps

> [!div class="nextstepaction"]
> [Get started with a Kanban board](kanban-quickstart.md)  
  
## Related articles  

- [Configure a cumulative flow chart](../../report/dashboards/cumulative-flow.md) 
- [Cumulative flow, lead time, and cycle time guidance](../../report/dashboards/cumulative-flow-cycle-lead-time-guidance.md)
- [Lead time and cycle time widgets](../../report/dashboards/cycle-time-and-lead-time.md)
- [About work items](../work-items/about-work-items.md)  
- [Work across projects FAQs](../../project/work-across-projects-faqs.yml)
- [What is Agile?](/devops/plan/what-is-agile)   
