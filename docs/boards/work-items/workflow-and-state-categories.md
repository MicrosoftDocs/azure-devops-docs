---
title: How workflow category states are used in Azure Boards backlogs and boards
titleSuffix: Azure Boards
description: Learn how workflow states map to workflow category states and how to use them in Azure Boards backlogs, boards, and Analytics to manage work items effectively.
ms.service: azure-devops-boards
ai-usage: ai-assisted
ms.author: chcomley
author: chcomley
ms.topic: overview
monikerRange: '<= azure-devops'
ms.date: 07/01/2026
---

# About workflow states in backlogs and boards

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Workflows are central to how Azure Boards tracks work items. Each work item type has its own workflow that defines states, transitions, and reasons. Transitions move work items forward and backward between states. When you add a custom state, Azure DevOps adds default transitions based on process rules.

Azure Boards uses state categories to apply workflow behavior consistently across backlogs, boards, and widgets. This article explains how states map to categories and how that mapping affects item visibility, board columns, and reporting behavior.

## Workflow states

Workflow states define how a work item moves from creation to closure. In the Agile process, a user story typically moves through New, Active, Resolved, and Closed. To remove a work item from the backlog, use the Removed state. For more information, see [Move, change, or delete work items](../backlogs/remove-delete-work-items.md#remove).

The following diagram shows the typical progression and regression paths for common work item types: user story (Agile), issue (Basic), product backlog item (Scrum), and requirement (CMMI).

[!INCLUDE [temp](../includes/four-process-workflow.md)] 

## Category states

State categories standardize how Agile planning tools and dashboard widgets interpret workflow states. Teams map workflow states to these category states: *Proposed*, *In Progress*, *Resolved*, and *Completed*.

The following table shows how default inherited states map to category states across the four system processes, including Test Plan work item types. Test Case, Test Design, and Test Suite workflows use the same mappings across all four processes.

#### [Agile process](#tab/agile-process) 

:::row:::
   :::column span="2":::
   **Categories**
   :::column-end:::
   :::column span="1":::
   **Work tracking**
   :::column-end:::
   :::column span="1":::
   **Test tracking**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
   **Proposed:** Use this category for newly added work item states. Items appear on the backlog, and the first column on boards and Taskboards maps to Proposed.
   :::column-end:::
   :::column span="1":::
   New
   :::column-end::: 
   :::column span="1":::
   Design (Test Case)  
   :::column-end::: 
:::row-end:::
:::row:::
   :::column span="2":::
   **In Progress:** Use this category for active work states. Items appear on the backlog (unless hidden) and map to middle board columns.
   :::column-end::: 
   :::column span="1":::
   Active (Bug, Epic, Feature, User Story)
   :::column-end::: 
   :::column span="1":::
   Active (Test Plan); In Planning (Test Suite); In Progress (Test Suite); Ready (Test Case)
   :::column-end::: 
:::row-end:::
:::row:::
   :::column span="2":::
   **Resolved:** Use this category for states where a solution is implemented but not yet verified (commonly for bugs). Resolved items appear on the backlog by default, can be included in burndown charts, and behave like In Progress in many tools.
   :::column-end::: 
   :::column span="1":::
   Resolved (Bug)
   :::column-end::: 
   :::column span="1":::
   n/a 
   :::column-end::: 
:::row-end:::
:::row:::
   :::column span="2":::
   **Completed:** Use this category for finished-work states. Items don't appear on the backlog and map to the final board column. Each work item type can have only one state mapped to this category.
   :::column-end::: 
   :::column span="1":::
   Closed (Bug, Epic, Feature, User Story)  
   :::column-end::: 
   :::column span="1":::
   Closed (Test Case); Completed (Test Suite); Inactive (Test Plan)
   :::column-end::: 
:::row-end:::
:::row:::
   :::column span="2":::
   **Removed:** Use this category with the Removed state to hide items from backlog and board experiences.
   :::column-end::: 
   :::column span="1":::
   Removed (Epic, Feature, User Story)
   :::column-end::: 
   :::column span="1":::
   n/a
   :::column-end::: 
:::row-end:::
  

#### [Basic process](#tab/basic-process) 

:::row:::
   :::column span="2":::
   **Categories**
   :::column-end:::
   :::column span="1":::
   **Work tracking**
   :::column-end:::
   :::column span="1":::
   **Test tracking** 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
   **Proposed:** Use this category for newly added work item states. Items appear on the backlog, and the first column on boards and Taskboards maps to Proposed.
   :::column-end:::
   :::column span="1":::
   To Do
   :::column-end::: 
   :::column span="1":::
   Design (Test Case)  
   :::column-end::: 
:::row-end:::
:::row:::
   :::column span="2":::
   **In Progress:** Use this category for active work states. Items appear on the backlog (unless hidden) and map to middle board columns.
   :::column-end::: 
   :::column span="1":::
   Doing
   :::column-end::: 
   :::column span="1":::
   Active (Test Plan); In Planning (Test Suite); In Progress (Test Suite); Ready (Test Case)
   :::column-end::: 
:::row-end:::
:::row:::
   :::column span="2":::
   **Resolved:** Use this category for states where a solution is implemented but not yet verified (commonly for bugs). Resolved items appear on the backlog by default, can be included in burndown charts, and behave like In Progress in many tools.
   :::column-end::: 
   :::column span="1":::
   n/a
   :::column-end::: 
   :::column span="1":::
   n/a 
   :::column-end::: 
:::row-end:::
:::row:::
   :::column span="2":::
   **Completed:** Use this category for finished-work states. Items don't appear on the backlog and map to the final board column. Each work item type can have only one state mapped to this category.
   :::column-end::: 
   :::column span="1":::
   Done  
   :::column-end::: 
   :::column span="1":::
   Closed (Test Case); Completed (Test Suite); Inactive (Test Plan)
   :::column-end::: 
:::row-end:::
:::row:::
   :::column span="2":::
   **Removed:** Use this category with the Removed state to hide items from backlog and board experiences.
   :::column-end::: 
   :::column span="1":::
   n/a
   :::column-end::: 
   :::column span="1":::
   n/a
   :::column-end::: 
:::row-end:::
  

#### [Scrum process](#tab/scrum-process) 

:::row:::
   :::column span="2":::
   **Categories**
   :::column-end:::
   :::column span="1":::
   **Work tracking**
   :::column-end:::
   :::column span="1":::
   **Test tracking**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
   **Proposed:** Use this category for newly added work item states. Items appear on the backlog, and the first column on boards and Taskboards maps to Proposed.
   :::column-end::: 
   :::column span="1":::
   New (Bug, Epic, Feature, Product backlog item); Approved; To Do (Task) 
   :::column-end::: 
   :::column span="1":::
   Design (Test Case)  
   :::column-end::: 
:::row-end:::
:::row:::
   :::column span="2":::
   **In Progress:** Use this category for active work states. Items appear on the backlog (unless hidden) and map to middle board columns.
   :::column-end::: 
   :::column span="1":::
   Committed (Bug, Epic, Feature, Product backlog item); Open (Impediment)
   :::column-end::: 
   :::column span="1":::
   Active (Test Plan); In Planning (Test Suite); In Progress (Test Suite); Ready (Test Case)
   :::column-end::: 
:::row-end:::
:::row:::
   :::column span="2":::
   **Resolved:** Use this category for states where a solution is implemented but not yet verified (commonly for bugs). Resolved items appear on the backlog by default, can be included in burndown charts, and behave like In Progress in many tools.
   :::column-end::: 
   :::column span="1":::
   n/a
   :::column-end:::  
   :::column span="1":::
   n/a 
   :::column-end::: 
:::row-end:::
:::row:::
   :::column span="2":::
   **Completed:** Use this category for finished-work states. Items don't appear on the backlog and map to the final board column. Each work item type can have only one state mapped to this category.
   :::column-end::: 
   :::column span="1":::
   Done  
   :::column-end::: 
   :::column span="1":::
   Closed (Test Case); Completed (Test Suite); Inactive (Test Plan)
   :::column-end::: 
:::row-end:::
:::row:::
   :::column span="2":::
   **Removed:** Use this category with the Removed state to hide items from backlog and board experiences.
   :::column-end::: 
   :::column span="1":::
   Removed
   :::column-end::: 
   :::column span="1":::
   n/a
   :::column-end::: 
:::row-end:::
 

#### [CMMI process](#tab/cmmi-process) 

:::row:::
   :::column span="2":::
   **Categories**
   :::column-end:::
   :::column span="1":::
   **Work tracking**
   :::column-end:::
   :::column span="1":::
   **Test tracking** 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
   **Proposed:** Use this category for newly added work item states. Items appear on the backlog, and the first column on boards and Taskboards maps to Proposed.
   :::column-end:::
   :::column span="1":::
   Proposed  
   :::column-end::: 
   :::column span="1":::
   Design (Test Case)  
   :::column-end::: 
:::row-end:::
:::row:::
   :::column span="2":::
   **In Progress:** Use this category for active work states. Items appear on the backlog (unless hidden) and map to middle board columns.
   :::column-end::: 
   :::column span="1":::
   Active; Resolved (Epic, Feature, Requirement, Task)
   :::column-end::: 
   :::column span="1":::
   Active (Test Plan); In Planning (Test Suite); In Progress (Test Suite); Ready (Test Case)
   :::column-end::: 
:::row-end:::
:::row:::
   :::column span="2":::
   **Resolved:** Use this category for states where a solution is implemented but not yet verified (commonly for bugs). Resolved items appear on the backlog by default, can be included in burndown charts, and behave like In Progress in many tools.
   :::column-end::: 
   :::column span="1":::
   Resolved (Bug, Issue, Review, Risk)
   :::column-end:::   
   :::column span="1":::
   n/a 
   :::column-end::: 
:::row-end:::
:::row:::
   :::column span="2":::
   **Completed:** Use this category for finished-work states. Items don't appear on the backlog and map to the final board column. Each work item type can have only one state mapped to this category.
   :::column-end::: 
   :::column span="1":::
   Closed  
   :::column-end::: 
   :::column span="1":::
   Closed (Test Case); Completed (Test Suite); Inactive (Test Plan)
   :::column-end::: 
:::row-end:::
:::row:::
   :::column span="2":::
   **Removed:** In CMMI, Removed isn't a default work tracking state. If you add a custom Removed state, use this category to hide items from backlog and board experiences.
   :::column-end::: 
   :::column span="1":::
   n/a (default); custom if added
   :::column-end::: 
   :::column span="1":::
   n/a
   :::column-end::: 
:::row-end::: 

* * *

### Where work item types appear

Use the following table as a quick reference for where each work item type category appears.

| Work item type category | Appears on |
|-------------------------|------------|
| Requirement | Product board only |
| Feature | Feature portfolio board only |
| Epic | Epic portfolio board only |
| Custom | Custom portfolio board only |

> [!TIP]   
> Map each workflow state to a board column. If a state isn't mapped, it doesn't appear on the board.

[!INCLUDE [temp](../includes/note-closed-items.md)]

[!INCLUDE [activated-resolved-by-fields](../includes/activated-resolved-by-fields.md)]

## When to add a State versus a column

Use states and columns together to track work status, but use each one for a different scope:

- **State**: Project-level workflow logic shared across teams.
- **Column**: Team-level board visualization.

Users with process-edit permissions (typically Project Collection Administrators or delegated process editors) can add custom states. Team Administrators and Project Administrators can add board columns.

Add custom states when teams need a shared workflow definition for queries, reporting, and cross-team consistency. Custom states propagate to work item types that reference the process.

Add or adjust columns when a team needs a board-specific view of work without changing the shared workflow.

To avoid confusion, keep work item ownership aligned to team area paths, or standardize shared workflows with custom states when multiple teams follow the same process.

## Automatically complete work items with pull requests

When you link a work item to a pull request (PR), Azure DevOps can automatically complete the linked work item when the PR completes. For more information, see [Auto complete work items with pull requests](auto-complete-work-items-pull-requests.md).

## Automate work item state transitions

Azure DevOps can automatically update a parent work item's state based on the state of its child tasks. For details, see [Automate work item state transitions](automate-work-item-state-transitions.md).

## Related content

**Inheritance process model**
- [Customize your workflow](../../organizations/settings/work/customize-process-workflow.md)
- [Apply rules to workflow states](../../organizations/settings/work/apply-rules-to-workflow-states.md)
- [Evaluate rules](../../organizations/settings/work/rule-reference.md)
- [Explore custom rule scenarios](../../organizations/settings/work/rule-samples.md)

::: moniker range="< azure-devops"
**On-premises XML process model**
- [Change the workflow for a work item type](../../reference/xml/change-workflow-wit.md)
- [Reference the ProcessConfiguration XML element](../../reference/xml/process-configuration-xml-element.md)
- [Customize your work tracking experience](../../reference/on-premises-xml-process-model.md)
::: moniker-end

**Dashboard widgets**
- [Explore Lead Time and Cycle Time control charts (widgets)](../../report/dashboards/cycle-time-and-lead-time.md)
