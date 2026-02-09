---
title: About Kanban Boards
titleSuffix: Azure Boards
description: Learn about Kanban board basics, including key concepts and best practices in Azure Boards.   
ms.custom: boards-kanban 
ms.service: azure-devops-boards
ms.assetid:  
ms.author: chcomley
author: chcomley
ms.topic: overview
monikerRange: '<= azure-devops'
ms.date: 07/24/2025
#customer intent: As an Azure DevOps developer, I want to learn about Kanban board basics, so I can use a Kanban board in Azure Boards.   
---

# What is a Kanban board?

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

[!INCLUDE [ai-assistance-callout](../../includes/ai-assistance-callout.md)]
 
A Kanban board in Azure DevOps is a visual tool used to manage work items and track progress in a project. It provides a clear overview of tasks, their status, and their flow through different stages. Teams can use Kanban boards to visualize work, limit work in progress, and optimize their workflow. Each work item is represented as a card on the board, and columns represent different stages, such as "To Do," "In Progress," and "Done." As work progresses, cards move across columns, allowing teams to monitor and improve their efficiency. Kanban boards are commonly used in agile methodologies and are essential for effective project management.

Both Kanban boards and Taskboards support visualizing the flow of work and monitoring metrics to optimize that flow. The Kanban boards track requirements are sprint-independent, and provide a cumulative flow chart for monitoring progress. Each sprint is associated with a Taskboard that supports tracking tasks defined for the sprint. You can monitor progress through capacity charts and the sprint burndown chart. For more information, see [Update and monitor your Taskboard](../sprints/task-board.md).

> [!NOTE]
> _**Kanban**_ is a Japanese word that literally translates to "signboard." This article uses the general term "boards" to refer to Kanban boards.

## Product and portfolio boards 

Each [product and portfolio backlog](../backlogs/backlogs-overview.md) corresponds to a board. These boards are associated with teams and display work items based on the selected area and iteration paths. For more information, see [Define and configure iterations](../../organizations/settings/set-iteration-paths-sprints.md). 

To enhance consistent delivery of high-quality software, Kanban emphasizes two key practices. The first practice is to [**visualize the flow of work**](kanban-quickstart.md#map-the-flow-of-how-your-team-works) by mapping your team's workflow stages and configuring the board appropriately. The next practice is to **constrain work in progress**, by [setting work-in-progress (WIP) limits](kanban-quickstart.md#set-wip-limits). With these practices in place, you can track progress and monitor metrics to reduce lead or cycle time. You can get started by exploring how to [use your board](../boards/kanban-quickstart.md).

:::image type="content" source="../work-items/media/about-agile/view-boards-agile.png" border="false" alt-text="Screenshot of a Kanban board showing backlog items with an Agile template.":::

## Kanban concepts and terms 

The following table describes terms and tools commonly used for tracking work with Kanban boards and Kanban methods.

| Concept or term | Description | More information |
|-----------------|-------------|------------------|
| **Blocker** | An issue that prevents work from progressing. You can highlight blocked work by using tags and changing the card color. | [Customize cards and define style rules for highlighting cards](customize-cards.md#define-style-rules-to-highlight-cards) |
| **Bottleneck** | A constraint in the system that limits the flow of work. Identifying bottlenecks makes it easier to reduce their effect and provides a mechanism for controlling work flowing through the process. | [Manage columns and identify bottlenecks](add-columns.md#identify-bottlenecks) |
| **Card reordering** | Card reordering lets you change the priority order and forces cards to maintain the backlog priority when you drag and drop them on the board. | [Reorder cards](customize-cards.md#reorder-cards) |
| **Columns** | A column maps to a stage of work. The default columns map to the workflow states of the work item types that appear on the board. You configure the columns to map workflow states of your team. | [Map the flow of how your team works](kanban-quickstart.md#map-the-flow-of-how-your-team-works) |
| **Cumulative flow diagram (CFD)** | The in-context CFD report shows the count of items in each column for the past 30 weeks or less. From this chart, you can gain an idea of the amount of work in progress and lead time. Work in progress counts unfinished requirements. | [Cumulative flow, lead time, and cycle time guidance](../../report/dashboards/cumulative-flow-cycle-lead-time-guidance.md) |
| **Cycle time** | Cycle time is the time calculated for a work item from first entering an *In Progress* category state to entering a *Completed* state category. You can gain valuable metrics and visualize the cycle time for a team and a configurable time period by [adding the Cycle Time widget to the dashboard](../../report/dashboards/cycle-time-and-lead-time.md). | [Cumulative flow, lead time, and cycle time guidance](../../report/dashboards/cumulative-flow-cycle-lead-time-guidance.md) |
| **Definition of done** | Criteria that a team specifies for each stage of work to share and standardize on what makes up work being done at that stage. | [Add Definition of Done to a column](add-columns.md#add-definition-of-done-to-a-column) |
| **Kanban board** | An interactive, electronic sign board that supports visualization of the flow of work from concept to completion. Azure DevOps provides a board for each product and portfolio backlog. | [Kanban board basics](../../boards/boards/kanban-overview.md), [Kanban board features and epics](../../boards/boards/kanban-epics-features-stories.md), [Track work in swimlanes](expedite-work.md#track-work-in-swimlanes) |
| **Lead time** | Lead time is the time calculated for a work item from first entering a *Proposed* category state to entering a *Completed* state category. You can gain valuable metrics and visualize the lead time for a team and a configurable time period by [adding the Lead Time widget to the dashboard](../../report/dashboards/cycle-time-and-lead-time.md). | [Cumulative flow, lead time, and cycle time guidance](../../report/dashboards/cumulative-flow-cycle-lead-time-guidance.md) |
| **Portfolio backlog** | An interactive list of work items, similar to the product backlog that supports organizing or grouping work under features epics, or scenarios. Portfolio backlogs work similarly to product backlogs in that you can prioritize work and view the tree hierarchy of work. | [Define features and epics](../backlogs/define-features-epics.md) |
| **Product backlog** | An interactive list of work items that corresponds to a team's project plan or roadmap for what the team plans to deliver. The product backlog supports prioritizing work, forecasting work by sprints, and quickly linking work to portfolio backlog items. You can define your backlog items and then manage their status by using the board. Each team can customize its product backlog. | [Create and manage your backlog](../backlogs/create-your-backlog.md) |
| **Product backlog item** | A type of work item that defines the applications, requirements, and elements that teams plan to create. Product owners typically define and stack rank product backlog items, which are defined with the Scrum process. | [Scrum process work item types and workflow.](../work-items/guidance/scrum-process-workflow.md) |
| **Split columns** | The Split columns feature lets your team implement a pull mechanism within the workflow process. Without split columns, teams push work forward to signal they completed their stage of work. However, pushing work to the next stage doesn't necessarily mean that a team member immediately starts work on the item. With split columns, your team knows exactly how many items sit idle, waiting for work to begin. | [Manage split columns](add-columns.md#split-columns) |
| **Swimlanes** | A swimlane is a configurable row on a board used to support different service class levels of work. | [Speed up work with swimlanes](expedite-work.md) |
| **Task checklists** | A task is a type of work item used to track work required to complete a user story or product backlog item. You can add tasks from your board that appear as a checklist of work to be done. As you complete a task, you can update its status by checking the checkbox for the task. | [Add tasks or child items as checklist items](add-task-checklists.md) |
| **Task switching** | Task switching, also referred to as *context switching* or *multitasking*, is when a team member shifts their attention among different tasks. Limiting task switching can allow a person to work more efficiently by minimizing the amount of time required to redirect cognitive function to a new activity. | [Switch to backlog view](../backlogs/create-your-backlog.md), [Switch to board view](kanban-quickstart.md), [Switch to a Taskboard](../sprints/task-board.md) |
| **User story** | A type of work item that defines the applications, requirements, and elements that teams plan to create. Product owners typically define and stack rank user stories. A user story is defined with the Agile process. | [Agile process work item types and workflow](../work-items/guidance/agile-process-workflow.md) |
| **Work&nbsp;in&nbsp;progress** <br> **(WIP) limit**| _Work in progress_ is work that is started but isn't done or completed. A WIP limit is a constraint that a team applies to one or more workflow stages. The WIP limit helps prevent potential bottlenecks that hinder the continuous flow of work in the system. | [Work-in-progress limits](wip-limits.md) |
| **Workflow state categories** | State categories determine how the board treats each workflow state. The state categories used by the backlogs are *Proposed*, *In Progress*,  *Resolved*, and *Completed*. | [Workflow states and state categories](../work-items/workflow-and-state-categories.md) |
| **Workflow states** | Workflow states are defined for each work item type to support tracking the status of a work item, from its creation to its completion. These states define the workflow process: actions, steps, or stages that a piece of work goes through from inception to completion. The **State** and **Reason** fields differ depending on the work item type and process selected for the project. | [Customize the workflow](../../organizations/settings/work/customize-process-workflow.md) |

For more information, see the following articles:

- [Agile glossary](../work-items/agile-glossary.md) 
- [Work item field index](../work-items/guidance/work-item-field.md)  
- [Project management and navigation glossary](../../project/navigation/glossary.md)

## Use board controls

Quickly switch from the backlog view to the board view by using the **Backlog** and **Board** links. Access other interface features by using the toolbar icons.

The following table describes the available board controls:

| Control | Description |
|---------|-------------|
| **Backlog** link | [Switch to backlog view](../backlogs/create-your-backlog.md) |
| **Board** link | [Switch to board view](kanban-quickstart.md) |  
| **Filter by** icon :::image type="icon" source="../media/icons/kanban-filter-icon.png"::: | [Filter by keywords, tags, or fields](../backlogs/filter-backlogs-boards-plans.md) | 
| **Customize** icon :::image type="icon" source="../media/icons/team-settings-gear-icon.png"::: | Customize the board and configure team settings: <br>- [Cards](../../boards/boards/customize-cards.md) and [Card reordering](../../boards/boards/customize-cards.md#reorder-cards) <br>- [Columns](add-columns.md), [Swimlanes](expedite-work.md), and [Cumulative flow diagrams (CFDs)](../../report/dashboards/cumulative-flow.md) <br>- [Backlogs](../../organizations/settings/select-backlog-navigation-levels.md) and [Working with bugs on backlogs](../../organizations/settings/show-bugs-on-backlog.md) |
| **Enter** icon :::image type="icon" source="../media/icons/full-screen-icon.png"::: | Enter full screen mode |
| **Exit** icon :::image type="icon" source="../media/icons/exit-full-screen-icon.png"::: | Exit full screen mode |  

### Open keyboard shortcuts

To open the board keyboard shortcuts, use the question mark (**?**). The following image shows a sample of the available shortcuts:  

:::image type="content" source="../media/kanban-board-keyboard-shortcuts-ts-jul.png" border="false" alt-text="Illustration showing some of the keyboard shortcuts available for Kanban boards."::: 

For more information, see [Keyboard shortcuts for Azure DevOps and Team Explorer](../../project/navigation/keyboard-shortcuts.md).

## Configure and customize your board

Your board is highly configurable to support your team's workflow. Each team can configure each board with the following tasks:

:::row:::
   :::column span="1":::
   **Configure boards**
   :::column-end:::
   :::column span="2":::
   **Configure card displays**
   :::column-end:::
:::row-end:::
:::row:::
  :::column span="1":::
   - [Manage columns](add-columns.md)  
   - [Set WIP limits](wip-limits.md)  
   - [Set Definition of Done](add-columns.md#add-definition-of-done-to-a-column)  
   - [Add swimlanes](expedite-work.md)
   - [Reorder cards](customize-cards.md#reorder-cards)
   - [Enable backlog and board levels](../../organizations/settings/select-backlog-navigation-levels.md)
   - [Work with bugs](../../organizations/settings/show-bugs-on-backlog.md)
   :::column-end:::
   :::column span="2":::
   - [Add or remove fields from cards](customize-cards.md)
   - [Define card styles](customize-cards.md#style-rule)
   - [Apply tag colors](customize-cards.md)
   - [Enable/disable annotations](customize-cards.md)
   - [Define inline test behavior on cards](customize-cards.md) 
   - [Add details and estimates](../backlogs/create-your-backlog.md#estimates) to your backlog items
   - [Define tasks or child items for backlog items](add-task-checklists.md) 
   - [Add, run, and update inline tests](add-run-update-tests.md) 
   :::column-end:::
:::row-end:::

Along with these team configurations, you can [customize your project](#customize-your-project-and-board-inheritance) by adding or modifying work item types, the workflow, and add customized portfolio backlogs and boards. 

> [!NOTE]
> Each team controls their own team settings and board configurations. You can't define a single board configuration for use by multiple teams.

## Update work item status

After you configure your board, you can add work items directly to the board. Update the status of work by dragging a card to another column on the board. You can also change the order of items as you move a card to a new column. For more information, see [Workflow states and state categories](../work-items/workflow-and-state-categories.md). 

:::image type="content" source="media/8_7_02.gif" border="false" alt-text="Animation that shows how to reorder cards while changing columns.":::

## Display leaf node work items

[!INCLUDE [temp](../includes/display-leaf-nodes.md)]

## Reorder and reparent work items 

All backlogs and boards support drag-and-drop to reorder and reparent work items. Updates made to your team's backlogs and boards are reflected in other team backlogs and boards that share the same area path. You might need to refresh the page to see the changes. 

You can only use drag-and-drop to reorder or reparent work items assigned to area paths selected for your team. When the **Parents** view option is enabled, work items might appear on your backlog that your team doesn't own. Any item with the :::image type="icon" source="../../media/icons/info.png"::: information icon can't be reordered or reparented because another team owns the item.  
 
:::image type="content" source="../plans/media/config-teams/information-message-owned-by-other-team.png" alt-text="Screenshot of information message on team ownership.":::

## Update columns

Each team can customize the board columns and swimlanes. The values assigned to board fields might differ from what you expect when another team updates the work item from a different board. 

Even if the management team and the feature teams configure their board columns with identical workflow mapping, one team's board items aren't reflected on another team's board. Only when the work item moves to a column that maps to a workflow state does the card column display the same information on all boards.

For more information, see [Manage columns](add-columns.md).
 
## Provide permissions and access

When you're a member the Contributors group for a project, you can use most features available under the **Boards** or **Work** options. Users with Basic access have full access to all features. Users with Stakeholder access can use certain features with limited access. 

For more information, see [Set permissions and access for work tracking](../../organizations/security/set-permissions-access-work-tracking.md) and [Stakeholder access quick reference](../../organizations/security/stakeholder-access.md). To add users to a project, see [Add users to a project or team](../../organizations/security/add-users-team-project.md).

## Customize your project and board inheritance

If you require more than three board levels, you can add more levels. For more information, see [Customize your backlogs or boards (inheritance process)](../../organizations/settings/work/customize-process-backlogs-boards.md). 

You can also add or modify the fields defined for a work item type (WIT), add a custom WIT, or modify the workflow. For more information, see [About process customization and inherited processes](../../organizations/settings/work/inheritance-process-model.md). 

## Related content  

- [Use your board](kanban-quickstart.md)
- [About work items](../work-items/about-work-items.md)  
- [Work across projects FAQs](../../project/work-across-projects-faqs.yml)
