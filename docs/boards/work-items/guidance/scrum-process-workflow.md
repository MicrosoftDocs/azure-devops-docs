---
title: Manage Scrum process work item types and workflow
titleSuffix: Azure Boards
description: Learn how to use the Scrum process work item types and workflow to track work in Azure Boards and Azure DevOps.
ms.custom: work-items, engagement-fy23
ms.service: azure-boards
ms.topic: overview
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 07/06/2026
ai-usage: ai-assisted
---

# Manage Scrum process work item types and workflow

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

Use Scrum in Azure Boards to plan and prioritize software delivery, and to track defects. Teams capture work as Product Backlog Items (PBIs) and bugs, map those items to features for portfolio visibility, and break sprint work into tasks that link to PBIs and bugs.

:::image type="content" source="media/scrum-process-plan-wits.png" alt-text="Conceptual image that shows Scrum process work item types used to plan and track.":::

> [!NOTE]  
> If you're new to the Scrum process, review [About Sprints, Scrum and project management](../../sprints/scrum-overview.md). 

This article helps you:

- [Define and prioritize PBIs and bugs](#define-pbis-and-bugs).
- [Track work through Scrum workflow states](#scrum-workflow-states).
- [Break backlog items into sprint tasks](#define-tasks).
- [Link test cases and bugs to track quality](#track-test-progress).
- [Track blockers](#track-impediments) and [maintain backlog order](#backlog-list-order).

## Prerequisites

| Area | Requirement | Why it matters |
|---|---|---|
| Project membership | You must be a member of the project with permission to view and edit work items in Azure Boards. | Required to create, update, and move work items through Scrum workflow states. |
| Access level | You need at least **Basic** access to create and update work items. | Required for core backlog, board, and task tracking actions. |
| Backlog and board access | You need access to team backlogs and boards. | Required to prioritize PBIs, plan sprints, and update status from boards and taskboards. |
| Team configuration permissions | To define team settings, backlog levels, or board configuration, you need **Project Administrators** membership or equivalent delegated permissions. | Required for team-level setup and customization. |
| Test management access | To create and run test cases, you need access to Azure Test Plans (or equivalent test tools for your deployment). | Required to link test cases to PBIs and track test outcomes. |

For more information, see [Set permissions and access for work tracking](../../../organizations/security/set-permissions-access-work-tracking.md).

## Define PBIs and bugs  

Define PBIs and bugs to capture customer value first, then implementation details as work nears execution.

Use this pattern:

- Create items from the [quick add panel on the product backlog page](../../backlogs/create-your-backlog.md).
- Prioritize by business value, effort, and dependencies.
- Add full detail for highest-priority items and items planned for the current or next sprint.

As priorities change, update backlog order. The backlog page tracks this order through **Backlog Priority**.

:::image type="content" source="../media/about-work-items/work-item-form-product-backlog-item.png" alt-text="Screenshot that shows the Product backlog item work item form.":::

Set **Effort** so forecast and velocity charts can project future sprint capacity. Set **Business Value** to express priority independently from stack rank.

Use the following fields to complete each item consistently before sprint planning. For details on bugs, see [Manage bugs](../../backlogs/manage-bugs.md). 

| Field | How to use it |
|---|---|
| [Effort](../../queries/query-numeric.md) | Estimate the work required to complete the PBI by using your team's numeric unit (for example, story points or time). Depending on your process customization, this field can be optional or required. [Velocity charts](../../../report/dashboards/team-velocity.md) and [forecast](../../sprints/forecast.md) use this value. |
| [Business Value](../../queries/query-numeric.md) | Enter a number that indicates relative business value compared to other PBIs. Higher numbers indicate higher value. |
| [Description](../../queries/titles-ids-descriptions.md) | Describe who the feature serves, what the user needs to accomplish, and why it matters. Include enough context for task breakdown and test design. |
| [Acceptance Criteria](../../queries/titles-ids-descriptions.md) | Define the conditions for done before implementation starts. Clear criteria align team and stakeholder expectations and support acceptance testing. |

[!INCLUDE [temp](../../includes/discussion-tip-azure-devops.md)] 

## Track progress

As work moves forward, update **State** to reflect the current status and set **Reason** when needed. Both fields appear in the work item header.

Use state updates consistently to keep backlog, board, and reporting views aligned.

Quick flow:

- Define and prioritize PBIs and bugs.
- Move items through workflow states as work progresses.
- Review board and reports to confirm status alignment.

:::image type="content" source="media/scrum-bug-workflow-header-form.png" alt-text="Screenshot that shows the Bug work item form header area.":::

### Scrum workflow states 

Update **State** to show whether an item is new, in progress, completed, or removed from scope. Most WITs support both forward and backward transitions.

The following diagrams show the main progression and regression states for PBI, Bug, and Task work item types.

> [!div class="mx-tdBreakAll"]  
> |Product Backlog Item |Bug |Task |  
> |-------------|----------|---------| 
> |:::image type="content" source="media/alm-pt-scrum-wf-pbi.png" alt-text="Conceptual image that shows Product Backlog Item workflow states, Scrum process."::: |:::image type="content" source="media/alm-pt-scrum-wf-bug.png" alt-text="Conceptual image that shows Bug workflow states, Scrum process."::: |:::image type="content" source="media/alm-pt-scrum-wf-task.png" alt-text="Conceptual image that shows Task workflow states, Scrum process."::: |

Typical PBI and bug lifecycle:

- **New**: A product owner or tester creates the item. The default reason varies by work item type and process configuration (for example, **New backlog item**).
- **Approved**: The item is defined enough for the team to estimate and prepare for sprint planning. Higher-priority items usually move to this state first.
- **Committed**: The team agrees to deliver the item in the sprint.
- **Done**: All related tasks are complete and the product owner confirms the item meets acceptance criteria.

Use **Removed** for items intentionally taken out of scope and not planned for delivery. Keeping these items out of **Done** helps preserve reporting accuracy.

### Update status from boards and taskboards

Use boards to keep status current as work moves through the sprint:

- Use the [board](../../boards/kanban-overview.md) to update PBI and bug status.
- Use the [sprint Taskboard](../../sprints/task-board.md) to update task status.
- Drag an item to a new column to update both **State** and **Reason**.

:::image type="content" source="../../boards/media/alm-cc-move-card.png" alt-text="Screenshot that shows tracking progress on the board in the web portal.":::

You can customize the board with [swim lanes](../../boards/expedite-work.md) and [columns](../../boards/add-columns.md). For more options, see [Customize your work tracking experience](../../../reference/customize-work.md).

## Map PBIs to features

Map PBIs to features to track scope and progress across products, scenarios, or teams.

Use this approach:

- Use portfolio backlogs to [drill down between backlog levels](../../plans/portfolio-management.md).
- Use team hierarchy rollups after you [set up a hierarchy of teams](../../../organizations/settings/add-teams.md).

Validation check: Confirm each feature shows linked child PBIs and that rollup values match child item progress.

## Define tasks  

When your team works in sprints, break PBIs and bugs into tasks from the sprint backlog page.

:::image type="content" source="media/IC795962.png" alt-text="Screenshot that shows the Sprint backlog Add a task experience.":::

Name each task and estimate the effort.

:::image type="content" source="media/scrum-task-form.png" alt-text="Screenshot that shows the Scrum Task work item form.":::

Teams usually define tasks at the start of each sprint. Team members complete subsets of work such as development, testing, or documentation.

Use this pattern:

- Create tasks for each delivery step needed to complete the PBI or bug.
- Assign tasks to team members based on ownership.
- Update task values daily so capacity and burndown stay accurate.

When your team estimates in hours or days, use **Remaining Work** and optional **Activity**.

| Field | How to use it |
|---|---|
| [Remaining Work](../../queries/query-numeric.md) | Enter how many hours or days are left, and update the value as work progresses. This field drives capacity charts, sprint burndown, and related reports. If you split work into subtasks, track Remaining Work on the subtasks only. |
| [Activity](../../queries/query-numeric.md) | Select the activity category that best describes the task so your team can estimate and review sprint capacity by activity type. |

## Track test progress

Use the following guidance to connect test coverage and defect tracking to your sprint backlog items.

### Create and link test cases to PBIs

Use this pattern to connect testing work to backlog items:

- Create test cases from the web portal so they link to a PBI or bug.
- If needed, open the **Links** tab and add the relationship manually.

::: moniker range="azure-devops-2022"

For Azure DevOps Server 2022, you can also use Microsoft Test Manager 2017.

::: moniker-end

:::image type="content" source="media/test-plan-new-item.png" alt-text="Screenshot that shows selecting the test suite and adding a test case.":::

Test cases include fields that integrate with build and test workflows. For details, see [Query based on build and test integration fields](../../queries/build-test-integration.md).

:::image type="content" source="media/scrum-test-case-form.png" alt-text="Screenshot that shows the Scrum Test case work item form.":::

The **Links** tab lists PBIs and bugs linked to each test case.

Validation check: Confirm each test case shows its linked PBI or bug on the **Links** tab.

### Track code defects

Create bugs from the web portal or Visual Studio. For details, see [Manage bugs](../../backlogs/manage-bugs.md).

::: moniker range="azure-devops-2022"

For Azure DevOps Server 2022, you can also create bugs through Microsoft Test Manager 2017.

::: moniker-end

[!INCLUDE [temp](../../includes/common-work-item-fields.md)]   

## Customize work item types

[!INCLUDE [temp](../../includes/customize-work-tracking.md)] 

## Track impediments

Use the **Impediment** work item type to track blockers. Use **Bug** only for code defects.

You can add an impediment from:

- The [New work item widget](../../../report/dashboards/widget-catalog.md#new-work-item-widget) on a [team dashboard](../../../report/dashboards/dashboards.md)
- The **New** menu on the Queries page

:::image type="content" source="media/scrum-new-work-item-widget.png" alt-text="Screenshot that shows adding a work item from a New work item widget.":::

Work items you add from the widget automatically scope to your team's default area and iteration paths. To use a different team context, see [Switch team context](../../../project/navigation/go-to-project-repo.md?toc=/azure/devops/boards/plans/toc.json).

## Backlog list order

Use [Backlog Priority](../../queries/planning-ranking-priorities.md) to manage relative ranking for PBIs, bugs, features, and epics.

Use this pattern:

- Reorder items directly on the backlog page (see [Create your backlog](../../backlogs/create-your-backlog.md#move-items-priority-order)).
- Drag items to reflect current business priority.
- Let Azure DevOps update **Backlog Priority** in the background.

Validation check: Confirm backlog order matches business priority after reordering.

## Troubleshoot common issues

| Issue | Cause | Resolution |
|---|---|---|
| Can't move a work item to the expected state | Workflow rules or process customization limit transitions | Review process customization and allowed transitions. See [Customize an inheritance process](../../../organizations/settings/work/inheritance-process-model.md). |
| Required field blocks saving a work item | Project-specific custom rules require extra fields | Check the validation message and complete required fields for your process. See [Set rules for work items](../../../organizations/settings/work/apply-rules-to-workflow-states.md). |
| Can't create or edit test cases | Missing test permissions or access level | Verify your access and permissions for test artifacts. See [Set permissions and access for work tracking](../../../organizations/security/set-permissions-access-work-tracking.md). |
| Linked test case doesn't appear on a backlog item | Link wasn't created as a work item link, or was added to a different item | Open the test case and backlog item, then verify links on the **Links** tab for both items. |
| You can't resolve the issue after applying these fixes | Organization-level policy or permissions still block the action | Contact your Project Administrator first. If the issue is organization-wide, contact your Project Collection Administrator or Azure DevOps administrator. |

## Related content

[!INCLUDE [temp](../../includes/create-team-project-links.md)]
