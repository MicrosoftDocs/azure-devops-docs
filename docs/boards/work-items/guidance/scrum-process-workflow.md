---
title: Manage Scrum process work items types & workflow
titleSuffix: Azure Boards
description: Learn how to use the Scrum process work item types and workflow to track work in Azure Boards and Azure DevOps.
ms.custom: work-items, engagement-fy23
ms.service: azure-devops-boards
ms.assetid: 34c866ea-a130-4371-bfc4-a3d9f87dccca
ms.topic: overview
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 10/08/2025
ai-usage: ai-assisted
---

# Manage Scrum process work item types & workflow  

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

To plan a software project and track defects using Scrum, teams use the Product Backlog Item (PBI) and Bug work item types (WITs). Product owners and program managers map PBIs and bugs to features to view portfolio-level progress. When teams work in sprints, they create tasks that automatically link to PBIs and bugs.

:::image type="content" source="media/scrum-process-plan-wits.png" alt-text="Conceptual image that shows Scrum process work item types used to plan and track.":::

> [!NOTE]  
> If you're new to the Scrum process, review [About Sprints, Scrum and project management](../../sprints/scrum-overview.md). 

Testers create and run test cases using the web portal or Microsoft Test Manager and file bugs to record code defects. Use Impediments to track blocking issues.

## Define PBIs and bugs  

When you define a product backlog item, focus on the customer value and avoid describing implementation details. The product owner prioritizes the backlog by business value, effort, and dependencies. As requirements evolve, the backlog evolves; teams usually provide full details only for the highest-priority items or for items assigned to the current and next sprint.

Create PBIs and bugs from the [quick add panel on the product backlog page](../../backlogs/create-your-backlog.md). Then open each item to add details and estimate effort. The backlog page captures item prioritization (Backlog Priority), which product owners use to indicate relative priority.

:::image type="content" source="../media/about-work-items/work-item-form-product-backlog-item.png" alt-text="Screenshot that shows the Product backlog item work item form.":::

When you set **Effort** for PBIs and bugs, use forecast and velocity charts to estimate future sprints. Product owners set **Business Value** to express priority separate from backlog stack rank.

Use the following fields and [fields used in common across work item types](#definitions-in-common) when you complete the work item form. For details on bugs, see [Manage bugs](../../backlogs/manage-bugs.md). 

:::row:::
   :::column span="1":::
   **Field/tab**
   :::column-end:::
   :::column span="3":::
   **Usage**
   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   [Effort](../../queries/query-numeric.md)

   :::column-end:::
   :::column span="3":::
   Estimate the work required to complete a PBI using any numeric unit your team prefers, such as story points or time. A numeric value is required.

   Agile [velocity charts](../../../report/dashboards/team-velocity.md) and [forecast](../../sprints/forecast.md) tools reference this field.
   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   [Business Value](../../queries/query-numeric.md)

   :::column-end:::
   :::column span="3":::
   Enter a number that captures the relative value of a PBI compared to other PBIs. Higher numbers indicate greater business value.
   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   [Description](../../queries/titles-ids-descriptions.md)  

   :::column-end:::
   :::column span="3":::
   Provide enough detail for your team to estimate effort. Focus on who the feature serves, what users want to accomplish, and why. Avoid implementation instructions. Include enough context so your team can create tasks and test cases.
   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   [Acceptance Criteria](../../queries/titles-ids-descriptions.md) 

   :::column-end:::
   :::column span="3":::
   Describe the conditions that define "Done" for the PBI or bug fix. Clarifying acceptance criteria before work starts helps the team and customers share a common understanding and supports acceptance testing.
   :::column-end:::
:::row-end:::

[!INCLUDE [temp](../../includes/discussion-tip-azure-devops.md)] 

## Track progress

As work progresses, update the State field to reflect current status and optionally provide a reason. The state and reason appear in the work item form header.

:::image type="content" source="media/scrum-bug-workflow-header-form.png" alt-text="Screenshot that shows the Bug work item form header area.":::

### Scrum workflow states 

When you update State, the team understands which items are new, in progress, or completed. Most WITs support forward and backward state transitions. The following diagrams show the main progression and regression states for the PBI, Bug, and Task WITs.

> [!div class="mx-tdBreakAll"]  
> |Product Backlog Item |Bug |Task |  
> |-------------|----------|---------| 
> |:::image type="content" source="media/alm-pt-scrum-wf-pbi.png" alt-text="Conceptual image that shows Product Backlog Item workflow states, Scrum process."::: |:::image type="content" source="media/alm-pt-scrum-wf-bug.png" alt-text="Conceptual image that shows Bug workflow states, Scrum process."::: |:::image type="content" source="media/alm-pt-scrum-wf-task.png" alt-text="Conceptual image that shows Task workflow states, Scrum process."::: |

PBIs and bugs often follow this progression:

- The product owner or tester creates a PBI or bug in the **New** state with the default reason, **New backlog item**.  
- The product owner moves the item to **Approved** once described enough for the team to estimate effort. Items near the top of the backlog typically appear in Approved; items further down often remain New.  
- The team sets the status to **Committed** when they agree to include the item in the sprint.  
- The team moves the item to **Done** when all associated tasks are complete and the product owner confirms it meets the acceptance criteria.

### Update status with board or Taskboards

Use the [board](../../boards/kanban-overview.md) to update PBI status and the [sprint Taskboard](../../sprints/task-board.md) to update task status. Dragging an item to a new column updates both State and Reason.

:::image type="content" source="../../boards/media/alm-cc-move-card.png" alt-text="Screenshot that shows tracking progress on the board in the web portal.":::

Customize the board to add [swim lanes](../../boards/expedite-work.md) or [columns](../../boards/add-columns.md). For other customization options, see [Customize your work tracking experience](#customize-work-tracking).

## Map PBIs to features

When you manage multiple products or experiences, define features and map PBIs to those features to view scope and progress across the portfolio.

Use portfolio backlogs to [drill down between backlog levels](../../plans/portfolio-management.md) and to roll up work across teams. You can also view rollups after you [set up a hierarchy of teams](../../../organizations/settings/add-teams.md).

## Define tasks  

When your team delivers work in sprints, break items into tasks from the sprint backlog page.

:::image type="content" source="media/IC795962.png" alt-text="Screenshot that shows the Sprint backlog Add a task experience.":::

Name the task and estimate the effort.

:::image type="content" source="media/scrum-task-form.png" alt-text="Screenshot that shows the Scrum Task work item form.":::

Teams forecast work and define tasks at the start of each sprint. Each team member completes a subset of tasks, which can include development, testing, and other activities. For example, a developer creates tasks to implement PBIs and a tester creates tasks to author and run test cases.

When teams estimate work using hours or days, use the **Remaining Work** and optional **Activity** fields.

:::row:::
   :::column span="1":::
   **Field/tab**
   :::column-end:::
   :::column span="3":::
   **Usage**
   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   [Remaining Work](../../queries/query-numeric.md) 

   :::column-end:::
   :::column span="3":::
   Enter how many hours or days remain to complete a task and update this field as work progresses. This value feeds capacity charts, the sprint burndown chart, and related reports. If you break a task into subtasks, track Remaining Work on the subtasks only.
   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   [Activity](../../queries/query-numeric.md) 

   :::column-end:::
   :::column span="3":::
   Select the activity type that best represents this task when you estimate sprint capacity by activity.
   :::column-end:::
:::row-end:::

## Track test progress

### Test PBIs  

From the web portal or Test Manager, create test cases that automatically link to a PBI or bug, or add a link from the :::image type="icon" source="../../backlogs/media/icon-links-tab-wi.png" border="false"::: (links tab).

:::image type="content" source="media/test-plan-new-item.png" alt-text="Screenshot that shows selecting the test suite and adding a test case.":::

The test case contains many fields that integrate with the build and test process; see [Query based on build and test integration fields](../../queries/build-test-integration.md).

:::image type="content" source="media/scrum-test-case-form.png" alt-text="Screenshot that shows the Scrum Test case work item form.":::

The :::image type="icon" source="../../backlogs/media/icon-links-tab-wi.png" border="false"::: (links tab) lists the PBIs and bugs linked to a test case. Linking helps teams track test progress.

### Track code defects

Create bugs from the web portal, Visual Studio, or Test Manager (see [Manage bugs](../../backlogs/manage-bugs.md)). 

[!INCLUDE [temp](../../includes/common-work-item-fields.md)]   

## Customize work item types

[!INCLUDE [temp](../../includes/customize-work-tracking.md)] 

## Track impediments

Use the Impediment work item type to track events that block progress. Use the Bug work item type exclusively for code defects.

You can add an impediment from the [New work item widget](../../../report/dashboards/widget-catalog.md#new-work-item-widget) on a [team dashboard](../../../report/dashboards/dashboards.md) or from the **New** menu on the Queries page.

:::image type="content" source="media/scrum-new-work-item-widget.png" alt-text="Screenshot that shows adding a work item from a New work item widget.":::

Work items you add from the widget automatically scope to your team's default area and iteration paths. To change team context, see [Switch team context](../../../project/navigation/go-to-project-repo.md?toc=/azure/devops/boards/plans/toc.json).  

## Backlog list order

Use the [Backlog Priority](../../queries/planning-ranking-priorities.md) field to track the relative ranking of PBIs, bugs, features, or epics. The backlog page orders items based on where you add or move them on the page (see [Create your backlog](../../backlogs/create-your-backlog.md#move-items-priority-order)). As you drag items, a background process updates the Backlog Priority field.

## Related content

[!INCLUDE [temp](../../includes/create-team-project-links.md)]
