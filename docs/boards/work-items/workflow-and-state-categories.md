---
title: How workflow category states are used in Azure Boards backlogs and boards
titleSuffix: Azure Boards
description: Learn how workflow states map to workflow category states and how to use them in Azure Boards backlogs, boards, and Analytics to manage work items effectively.
ms.service: azure-devops-boards
ms.assetid: C6FEEE5A-CD13-413E-8A3F-84A7D4F3A2C9
ai-usage: ai-assisted
ms.author: chcomley
author: chcomley
ms.topic: conceptual
monikerRange: '<= azure-devops'
ms.date: 10/08/2025
---

# About workflow states in backlogs and boards

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Workflows play a central role in managing work items: they consist of states, transitions, and reasons and are defined per work item type. Transitions let you move work items forward and backward between states. When you add a custom state, the system automatically creates transitions between that state and all inherited states (except Removed).

Azure Boards uses state categories so Agile planning tools and dashboards treat workflow states consistently across backlogs and boards.

## Workflow states

Workflow states define how a work item progresses from creation to closure. For the User Story (Agile process), the primary states are New, Active, Resolved, and Closed. Use the Removed state to remove a work item from the backlog; for details, see [Move, change, or delete work items](../backlogs/remove-delete-work-items.md#remove).

The natural progressions and regressions for common work item types—user story (Agile), issue (Basic), product backlog item (Scrum), and requirement (CMMI)—appear here:

[!INCLUDE [temp](../includes/four-process-workflow.md)] 

## Category states

State categories determine how Agile planning tools and dashboard widgets treat each workflow state. Teams map workflow states to the following category states used by backlogs, boards, and widgets: *Proposed*, *In Progress*, *Resolved*, and *Complete*.

The following table shows how the default inherited states map to category states for the four system processes, including Test Plan work item types. Test Case, Test Design, and Test Suite workflows remain consistent across the four system processes.

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
   **Proposed:** Assign this category to newly added work item states so they appear on the backlog. The first column on boards and Taskboards maps to Proposed. 
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
   **In Progress:** Assign this category to states that represent active work. Work items in In Progress appear in the backlog (unless hidden) and occupy the middle columns on boards. 
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
   **Resolved:** Assign this category to states that indicate a solution implemented but not yet verified (commonly used for bugs). Resolved states appear on the backlog by default and can be included in burndown charts. Azure Boards treats Resolved the same as In Progress for many tools.
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
   **Completed:** Assign this category to states that represent finished work. Work items in Completed don't appear on the backlog and appear in the final column on the board. You can't modify or add states to this category.
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
   **Removed:** Assign this category to the Removed state to hide items from backlog and board experiences.
   :::column-end::: 
   :::column span="1":::
   Removed (Epic, Feature, User Story)
   :::column-end::: 
   :::column span="1":::
   n/a
   :::column-end::: 
:::row-end:::
  

#### [Basic process](#tab/basic-process) 

[!INCLUDE [temp](../includes/basic-process-note.md)] 

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
   **Proposed:** Assign this category to newly created states so they appear on the backlog. The first column on boards and Taskboards maps to Proposed.
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
   **In Progress:** Assign this category to states that represent active work. Items in this category appear on backlogs and in the middle columns on boards. 
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
   **Resolved:** Assign this category to states that indicate a solution implemented but not yet verified (usually for bugs). Resolved states appear on the backlog by default and behave like In Progress for many tools.
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
   **Completed:** Assign this category to states that represent finished work; these items don't appear on the backlog and appear in the final column on the board. You can't change states in this category.
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
   **Removed:** Assign this category to the Removed state to hide items from backlogs and boards.
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
   **Proposed:** Assign this category to new work item states so they appear on the backlog and map to the first board column.
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
   **In Progress:** Assign this category to states representing active work. Items in this category appear on backlogs and occupy the middle columns on boards.
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
   **Resolved:** Assign this category to states that indicate a solution implemented but not yet verified (often used for bugs). Resolved states appear on the backlog by default and can be included in burndown charts. Tools treat Resolved like In Progress in many scenarios.
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
   **Completed:** Assign this category to finished-work states. Items in Completed don't appear on the backlog and appear in the final board column. You can't add or change states in this category.
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
   **Removed:** Assign this category to the Removed state to hide items from backlogs and boards.
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
   **Proposed:** Assign this category to newly added states so they appear on the backlog. The first board column maps to Proposed.
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
   **In Progress:** Assign this category to states that represent active work. Items in this category appear on backlogs and in the middle columns on boards.
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
   **Resolved:** Assign this category to states that indicate a solution implemented but not yet verified; commonly apply to bugs. Resolved states appear on the backlog by default and can be included in burndown charts. Tools treat Resolved like In Progress in many scenarios.
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
   **Completed:** Assign this category to finished-work states. Items in Completed don't appear on backlogs and appear in the final board column. You can't add or modify states in this category.
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
   **Removed:** Assign this category to the Removed state to hide items from board and backlog experiences.
   :::column-end::: 
   :::column span="1":::
   Removed
   :::column-end::: 
   :::column span="1":::
   n/a
   :::column-end::: 
:::row-end::: 

* * *

### Work item types and their boards

Know where each work item type appears so you can manage work effectively.

|Work item type category |Work items appear here |
|---------|---------|
|Requirement    |  Only on the product board.       | 
|Feature   | Only on the Feature portfolio board.        |         
|Epic     | Only on the Epic portfolio board.        | 
|Custom|    Only on a custom portfolio board. |         |

> [!TIP]   
> Map each workflow state to a board column. If a state isn't mapped, it doesn't appear on the board.

[!INCLUDE [temp](../includes/note-closed-items.md)]

[!INCLUDE [activated-resolved-by-fields](../includes/activated-resolved-by-fields.md)]

## When to add a State versus a column

Use States and columns together to track work status. States apply at the project level; columns apply at the team level. Only project collection admins can add custom states; team admins can add columns.

Add custom states when you want to align teams to a shared organizational workflow. Custom states propagate to projects and work item types that reference the process.

Prefer shared custom states when multiple teams use the same workflow to avoid confusion from different teams basing queries on columns. Maintain single ownership of work items by team area path or standardize columns by adding custom states shared across teams.

## Auto completion of work items with pull requests 

When you link a work item to a pull request (PR), you can automatically complete those work items when you complete the PR. For details, see [Auto complete work items with pull requests](auto-complete-work-items-pull-requests.md).

## Automate work item state transitions

You can update a parent work item's state automatically based on the state of its child tasks. For details, see [Automate work item state transitions](automate-work-item-state-transitions.md).

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
- [Evaluate rules](../../organizations/settings/work/rule-reference.md)
- [Explore custom rule scenarios](../../organizations/settings/work/rule-samples.md)
::: moniker-end

**Dashboard widgets**
- [Explore Lead Time and Cycle Time control charts (widgets)](../../report/dashboards/cycle-time-and-lead-time.md)
::: moniker-end
