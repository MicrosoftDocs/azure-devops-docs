---
title: How workflow category states are used in Azure Boards backlogs and boards
titleSuffix: Azure Boards
description: Understand how workflow states map to workflow category states and are used in Azure Boards backlogs, boards, and Analytics in Azure Boards.
ms.service: azure-devops-boards
ms.assetid: C6FEEE5A-CD13-413E-8A3F-84A7D4F3A2C9
ms.author: chcomley
author: chcomley
ms.topic: conceptual
monikerRange: '<= azure-devops'
ms.date: 08/12/2024
---

# About workflow states in backlogs and boards

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

All workflows consist of states, transitions, and reasons. Workflows are defined for a work item type. A transition supports forward and backward movement among two states. When you add a custom state, the system automatically adds transitions from the custom state to all other inherited states (except for Removed).  

Each state belongs to a state category, which supports the Agile tool backlog and board views.

## Workflow states

Workflow states define how a work item progresses from its creation to closure. The four main states that are defined for the User Story (Agile process) describe a user story's progression. The workflow states are New, Active, Resolved, and Closed. The Removed state supports removing a work item from appearing on the backlog; for more information, see [Move, change, or delete work items](../backlogs/remove-delete-work-items.md#remove).

The natural progressions and regressions for the work item types - user story (Agile), issue (Basic) product backlog item (Scrum), and requirement (CMMI) - are as shown.  
 
[!INCLUDE [temp](../includes/four-process-workflow.md)] 

## Category states

Category states determine how Agile planning tools and specific dashboard widgets treat each workflow state. Work item types use state categories to track the progress of work. The states apply across all projects that use the same process and affect how work items appear on backlogs and boards. The state categories used by the backlogs, boards, and widgets are *Proposed*, *In Progress*, *Resolved*, and *Complete*.

The following table shows how the default, inherited states map to the category states for the four system processes, including Test Plan work item types. The workflow states for Test Case, Test Design, and Test Suite are the same across all four system processes. 


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
   **Proposed:** Assigned to states associated with newly added work items so that they appear on the backlog. The first column on the boards and Taskboards map to a Proposed state category. 
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
   **In Progress:** Assigned to states that represent active work. Work items assigned to states mapped to this category appear in the backlog (unless you choose to hide them) and make up the middle columns on boards. 
   :::column-end::: 
   :::column span="1":::
   Active (Bug, Epic, Feature, User Story)
   :::column-end::: 
   :::column span="1":::
   Active (Test Plan)  In Planning (Test Suite)  In Progress (Test Suite)  Ready (Test Case)
   :::column-end::: 
:::row-end:::
:::row:::
   :::column span="2":::
   **Resolved:** Assigned to states that represent a solution was implemented, but not yet verified. Generally these states apply to bugs. Work items in a *Resolved* category state appear on the backlog by default. You can also include *Resolved* states in burndown charts, providing a more accurate tracking of progress. The Agile tools treat the *Resolved* category state  exactly the same as the *In Progress* category state. 
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
   **Completed:** Assigned to states that represent work that's complete. Work items whose state is in this category don't appear on the backlog and do appear in the last column of the board. You can't modify states in this category nor can you add states to this category.
   :::column-end::: 
   :::column span="1":::
   Closed (Bug, Epic, Feature, User Story)  
   :::column-end::: 
   :::column span="1":::
   Closed (Test Case)  Completed (Test Suite)  Inactive (Test Plan)
   :::column-end::: 
:::row-end:::
:::row:::
   :::column span="2":::
   **Removed:** Assigned to the Removed state. Work items in a state mapped to the Removed category are hidden from the backlog and board experiences.
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
   **Proposed:** Assigned to states associated with newly added work items so that they appear on the backlog. The first column on the boards and Taskboards map to a Proposed state category. 
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
   **In Progress:** Assigned to states that represent active work. Work items assigned to states mapped to this category appear in the backlog (unless you choose to hide them) and make up the middle columns on boards. 
   :::column-end::: 
   :::column span="1":::
   Doing
   :::column-end::: 
   :::column span="1":::
   Active (Test Plan)  In Planning (Test Suite)  In Progress (Test Suite)  Ready (Test Case)
   :::column-end::: 
:::row-end:::
:::row:::
   :::column span="2":::
   **Resolved:** Assigned to states that represent a solution was implemented, but not yet verified. Generally these states apply to bug work item types. Work items in a *Resolved* state appear on the backlog by default. You can also include *Resolved* states in burndown charts, providing a more accurate tracking of progress. The Agile tools treat the *Resolved* state category exactly the same as the In Progress state category. 
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
   **Completed:** Assigned to states that represent completed work. Work items whose state is in this category don't appear on the backlog and do appear in the last column of the board. You can't modify states in this category nor can you add states to this category.
   :::column-end::: 
   :::column span="1":::
   Done  
   :::column-end::: 
   :::column span="1":::
   Closed (Test Case)  Completed (Test Suite)  Inactive (Test Plan)
   :::column-end::: 
:::row-end:::
:::row:::
   :::column span="2":::
   **Removed:** Assigned to the Removed state. Work items in a state mapped to the Removed category are hidden from the backlog and board experiences.
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
   **Proposed:** Assigned to states associated with newly added work items so that they appear on the backlog. The first column on the boards and Taskboards map to a Proposed state category. 
   :::column-end:::
   :::column span="1":::
   New (Bug, Epic, Feature, Product backlog item)  Approved  To Do (Task) 
   :::column-end::: 
   :::column span="1":::
   Design (Test Case)  
   :::column-end::: 
:::row-end:::
:::row:::
   :::column span="2":::
   **In Progress:** Assigned to states that represent active work. Work items assigned to states mapped to this category appear in the backlog (unless you choose to hide them) and make up the middle columns on boards. 
   :::column-end::: 
   :::column span="1":::
   Committed (Bug, Epic, Feature, Product backlog item)  Open (Impediment)
   :::column-end::: 
   :::column span="1":::
   Active (Test Plan)  In Planning (Test Suite)  In Progress (Test Suite)  Ready (Test Case)
   :::column-end::: 
:::row-end:::
:::row:::
   :::column span="2":::
   **Resolved:** Assigned to states that represent a solution was implemented, but not yet verified. Generally these states apply to bugs. Work items in a *Resolved* category state appear on the backlog by default. You can also include *Resolved* states in burndown charts, providing a more accurate tracking of progress. The Agile tools treat the *Resolved* category state exactly the same as the *In Progress* state category. 
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
   **Completed:** Assigned to states that represent completed work. Work items whose state is in this category don't appear on the backlog and do appear in the last column of the board. You can't modify states in this category nor can you add states to this category.
   :::column-end::: 
   :::column span="1":::
   Done  
   :::column-end::: 
   :::column span="1":::
   Closed (Test Case)  Completed (Test Suite)  Inactive (Test Plan)
   :::column-end::: 
:::row-end:::
:::row:::
   :::column span="2":::
   **Removed:** Assigned to the Removed state. Work items in a state mapped to the *Removed* category are hidden from the backlog and board experiences.
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
   **Proposed:** Assigned to states associated with newly added work items so that they appear on the backlog. The first column on the boards and Taskboards map to a Proposed state category. 
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
   **In Progress:** Assigned to states that represent active work. Work items assigned to states mapped to this category appear in the backlog (unless you choose to hide them) and make up the middle columns on boards. 
   :::column-end::: 
   :::column span="1":::
   Active  Resolved (Epic, Feature, Requirement, Task)
   :::column-end::: 
   :::column span="1":::
   Active (Test Plan)  In Planning (Test Suite)  In Progress (Test Suite)  Ready (Test Case)
   :::column-end::: 
:::row-end:::
:::row:::
   :::column span="2":::
   **Resolved:** Assigned to states that represent a solution was implemented, but not yet verified. Generally these states apply to bugs. Work items in a *Resolved* category state appear on the backlog by default. You can also include *Resolved* states in burndown charts, providing a more accurate tracking of progress. The Agile tools treat the *Resolved* category state exactly the same as the *In Progress* state category. 
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
   **Completed:** Assigned to states that represent completed work. Work items whose state is in this category don't appear on the backlog and do appear in the last column of the board. You can't modify states in this category nor can you add states to this category.
   :::column-end::: 
   :::column span="1":::
   Closed  
   :::column-end::: 
   :::column span="1":::
   Closed (Test Case)  Completed (Test Suite)  Inactive (Test Plan)
   :::column-end::: 
:::row-end:::
:::row:::
   :::column span="2":::
   **Removed:** Assigned to the Removed state. Work items in a state mapped to the Removed category are hidden from the backlog and board experiences.
   :::column-end::: 
   :::column span="1":::
   Removed
   :::column-end::: 
   :::column span="1":::
   n/a
   :::column-end::: 
:::row-end:::

* * *

[!INCLUDE [temp](../includes/note-closed-items.md)]

[!INCLUDE [activated-resolved-by-fields](../includes/activated-resolved-by-fields.md)]

## When to add a State versus a column

Use both States and columns to track the status of work. Workflow states are shared across a project while columns are shared within a team. Only project collection admins can add custom states, while team admins can add columns.  

Add custom states when you want all teams to track the status according to the business workflow adopted by the organization. By customizing the process, you automatically customize the projects and work item types that reference that process. 

Adding custom states to support workflow states that multiple teams want to track, helps avoid the resulting confusion of different teams creating queries based on a column. Because each team can customize the board columns and swimlanes, the values assigned to work items that appear on different boards might not be the same. The primary workaround for this issue is to maintain single ownership of work items by team area path. Another workaround is to formalize the columns by adding custom states that can be shared across teams. 

## Auto completion of work items with pull requests 

When you link a work item to a pull request (PR), you can automatically complete those work items when you complete the PR. For more information, see [Auto complete work items with pull requests](auto-complete-work-items-pull-requests.md).

## Automate work item state transitions

You can automatically update the state of a work item according to the state of its child tasks. For more information, see [Automate work item state transitions](automate-work-item-state-transitions.md).

## Related articles

::: moniker range=">= azure-devops-2019"
**Inheritance process model**
- [Customize a workflow for a process](../../organizations/settings/work/customize-process-workflow.md)
- [Apply rules to workflow states (Inheritance process)](../../organizations/settings/work/apply-rules-to-workflow-states.md)
- [Rules and rule evaluation](../../organizations/settings/work/rule-reference.md) 
- [Sample custom rule scenarios](../../organizations/settings/work/rule-samples.md)  
::: moniker-end

::: moniker range="< azure-devops"
**On-premises XML process model**

- [Change the workflow for a work item type](../../reference/xml/change-workflow-wit.md)
- [ProcessConfiguration XML element reference](../../reference/xml/process-configuration-xml-element.md)
- [Customize your work tracking experience](../../reference/on-premises-xml-process-model.md) 
- [Rules and rule evaluation](../../organizations/settings/work/rule-reference.md) 
- [Sample custom rule scenarios](../../organizations/settings/work/rule-samples.md)  
::: moniker-end

::: moniker range=">= azure-devops-2019"
**Dashboard widgets**
- [Lead Time and Cycle Time control charts (widgets)](../../report/dashboards/cycle-time-and-lead-time.md)
::: moniker-end
 
