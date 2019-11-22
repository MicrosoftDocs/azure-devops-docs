﻿---
title: Backlogs/boards workflow states & state categories
titleSuffix: Azure Boards   
description: Understand how workflow states map to state categories and are used in boards and backlogs in Azure Boards & TFS
ms.custom: seodec18   
ms.prod: devops
ms.technology: devops-agile
ms.assetid: C6FEEE5A-CD13-413E-8A3F-84A7D4F3A2C9
ms.author: kaelli
ms.manager: mijacobs
ms.manager: mijacobs
ms.topic: conceptual
monikerRange: '>= tfs-2013'
ms.date: 07/22/2019
---

# How workflow states and state categories are used in Backlogs and Boards

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

All workflows consist of states, transitions, and reasons. Workflows are defined for a work item type (WIT). A transition supports forward and backward movement among two states. When you add a custom state, the system automatically adds transitions from the custom state to all other inherited states (except for Removed).  

Each state belongs to a state category (previously referred to as a metastate). State categories support the Agile tool backlog and board views. 

<a id="workflow-states">  </a> 

## Workflow states

Workflow states define how a work item progresses upon its creation to closure. For example, the four main states defined for the User Story (Agile process) define a progression of four states, from New, Active, Resolved, to Closed. (The Removed state supports removing a work item from appearing on the backlog; to learn more, see [Move, change, or delete work items](../backlogs/remove-delete-work-items.md#remove).)

The natural progressions and regressions of the user story, product backlog item, and requirement WITs are as shown. 
 
[!INCLUDE [temp](../_shared/four-process-workflow.md)] 


<a id="state-categories">  </a>  

## State categories

State categories, on the other hand, determine how Agile planning tools and select dashboard widgets treat each workflow state. The state categories used by the backlogs, boards and widgets are Proposed, In Progress, and Complete.

Here's how the default, inherited states map to the state categories for all three system processes plus test case management WITs. The workflow states for Test Case, Test Design, and Test Suite are the same across all four system processes. 


#### [Basic process](#tab/basic-process) 

[!INCLUDE [temp](../_shared/basic-process-note.md)] 

<table valign="top" width="100%">
<tr>
<th width="30%">Categories</th>
<th width="14%">Work tracking WITs</th>
<th width="16%">Test tracking WITs </th>
</tr>
<tr valign="top" >
<td><strong>Proposed:</strong> Assigned to states associated with newly added work items so that they appear on the backlog. The first column on the Kanban boards and Taskboards map to a Proposed state category. </td>
<td>To Do</td> 
<td>Design (Test Case)<br/></td> 
</tr>
<tr valign="top" >
<td><strong>In Progress:</strong> Assigned to states that represent active work. Work items assigned to states mapped to this category appear in the backlog (unless you choose to hide them) and make up the middle columns on Kanban boards. </td> 
<td>Doing</td> 
<td>Active (Test Plan)<br/>In Planning (Test Suite)<br/>In Progress (Test Suite)<br/>Ready (Test Case)</td> 
</tr>
<tr valign="top" >
<td><strong>Resolved:</strong> Assigned to states that represent a solution has been implemented, but are not yet verified. Generally these states apply to bug WITs. Work items in a Resolved state appear on the backlog by default. The Agile tools treat the Resolved state category exactly the same as the In Progress state category. </td> 
<td>n/a</td> 
<td>n/a </td> 
</tr>
<tr valign="top" >
<td><strong>Completed:</strong> Assigned to states that represent work that has finished. Work items whose state is in this category don't appear on the backlog and do appear in the last column of the Kanban board. Note that you can't modify states in this category nor can you add states to this category.</td> 
<td>Done<br/></td> 
<td>Closed (Test Case)<br/>Completed (Test Suite)<br/>Inactive (Test Plan)</td> 
</tr>
<tr valign="top" >
<td><strong>Removed:</strong> Assigned to the Removed state. Work items in a state mapped to the Removed category are hidden from the backlog and board experiences.
</td> 
<td>n/a</td> 
<td>n/a</td> 
</tr>
</table>  

#### [Agile process](#tab/agile-process) 


<table valign="top" width="100%">
<tr>
<th width="30%">Categories</th>
<th width="14%">Work tracking WITs</th>
<th width="16%">Test tracking WITs </th>
</tr>
<tr valign="top" >
<td><strong>Proposed:</strong> Assigned to states associated with newly added work items so that they appear on the backlog. The first column on the Kanban boards and Taskboards map to a Proposed state category. </td>
<td>New</td> 
<td>Design (Test Case)<br/></td> 
</tr>
<tr valign="top" >
<td><strong>In Progress:</strong> Assigned to states that represent active work. Work items assigned to states mapped to this category appear in the backlog (unless you choose to hide them) and make up the middle columns on Kanban boards. </td> 
<td>Active (Bug, Epic, Feature, User Story)</td> 
<td>Active (Test Plan)<br/>In Planning (Test Suite)<br/>In Progress (Test Suite)<br/>Ready (Test Case)</td> 
</tr>
<tr valign="top" >
<td><strong>Resolved:</strong> Assigned to states that represent a solution has been implemented, but are not yet verified. Generally these states apply to bug WITs. Work items in a Resolved state appear on the backlog by default. The Agile tools treat the Resolved state category exactly the same as the In Progress state category. </td> 
<td>Resolved (Bug, Epic, Feature)</td> 
<td>n/a </td> 
</tr>
<tr valign="top" >
<td><strong>Completed:</strong> Assigned to states that represent work that has finished. Work items whose state is in this category don't appear on the backlog and do appear in the last column of the Kanban board. Note that you can't modify states in this category nor can you add states to this category.</td> 
<td>Closed (Bug, Epic, Feature, User Story)<br/></td> 
<td>Closed (Test Case)<br/>Completed (Test Suite)<br/>Inactive (Test Plan)</td> 
</tr>
<tr valign="top" >
<td><strong>Removed:</strong> Assigned to the Removed state. Work items in a state mapped to the Removed category are hidden from the backlog and board experiences.
</td> 
<td>Removed (Epic, Feature, User Story)</td> 
<td>n/a</td> 
</tr>
</table>  

#### [Scrum process](#tab/scrum-process) 


<table valign="top" width="100%">
<tr>
<th width="30%">Categories</th>
<th width="14%">Work tracking WITs</th>
<th width="16%">Test tracking WITs </th>
</tr>
<tr valign="top" >
<td><strong>Proposed:</strong> Assigned to states associated with newly added work items so that they appear on the backlog. The first column on the Kanban boards and Taskboards map to a Proposed state category. </td>
<td>New (Bug, Epic, Feature, Product backlog item)<br/>Approved<br/>To Do (Task) </td> 
<td>Design (Test Case)<br/></td> 
</tr>
<tr valign="top" >
<td><strong>In Progress:</strong> Assigned to states that represent active work. Work items assigned to states mapped to this category appear in the backlog (unless you choose to hide them) and make up the middle columns on Kanban boards. </td> 
<td>Committed (Bug, Epic, Feature, Product backlog item)<br/>Open (Impediment)</td> 
<td>Active (Test Plan)<br/>In Planning (Test Suite)<br/>In Progress (Test Suite)<br/>Ready (Test Case)</td> 
</tr>
<tr valign="top" >
<td><strong>Resolved:</strong> Assigned to states that represent a solution has been implemented, but are not yet verified. Generally these states apply to bug WITs. Work items in a Resolved state appear on the backlog by default. The Agile tools treat the Resolved state category exactly the same as the In Progress state category. </td> 
<td>n/a</td>  
<td>n/a </td> 
</tr>
<tr valign="top" >
<td><strong>Completed:</strong> Assigned to states that represent work that has finished. Work items whose state is in this category don't appear on the backlog and do appear in the last column of the Kanban board. Note that you can't modify states in this category nor can you add states to this category.</td> 
<td>Done<br/></td> 
<td>Closed (Test Case)<br/>Completed (Test Suite)<br/>Inactive (Test Plan)</td> 
</tr>
<tr valign="top" >
<td><strong>Removed:</strong> Assigned to the Removed state. Work items in a state mapped to the Removed category are hidden from the backlog and board experiences.
</td> 
<td>Removed</td> 
<td>n/a</td> 
</tr>
</table> 

#### [CMMI process](#tab/cmmi-process) 


<table valign="top" width="100%">
<tr>
<th width="30%">Categories</th>
<th width="14%">Work tracking WITs</th>
<th width="16%">Test tracking WITs </th>
</tr>
<tr valign="top" >
<td><strong>Proposed:</strong> Assigned to states associated with newly added work items so that they appear on the backlog. The first column on the Kanban boards and Taskboards map to a Proposed state category. </td>
<td>Proposed<br/></td> 
<td>Design (Test Case)<br/></td> 
</tr>
<tr valign="top" >
<td><strong>In Progress:</strong> Assigned to states that represent active work. Work items assigned to states mapped to this category appear in the backlog (unless you choose to hide them) and make up the middle columns on Kanban boards. </td> 
<td>Active<br/>Resolved (Epic, Feature, Requirement, Task)</td> 
<td>Active (Test Plan)<br/>In Planning (Test Suite)<br/>In Progress (Test Suite)<br/>Ready (Test Case)</td> 
</tr>
<tr valign="top" >
<td><strong>Resolved:</strong> Assigned to states that represent a solution  has been implemented but not yet verified. Generally these states apply to bug WITs. Work items in a Resolved state appear on the backlog by default. The Agile tools treat the Resolved state category exactly the same as the In Progress state category. </td> 
<td>Resolved (Bug, Issue, Review, Risk)</td>   
<td>n/a </td> 
</tr>
<tr valign="top" >
<td><strong>Completed:</strong> Assigned to states that represent work that has finished. Work items whose state is in this category don't appear on the backlog and do appear in the last column of the Kanban board. Note that you can't modify states in this category nor can you add states to this category.</td> 
<td>Closed<br/></td> 
<td>Closed (Test Case)<br/>Completed (Test Suite)<br/>Inactive (Test Plan)</td> 
</tr>
<tr valign="top" >
<td><strong>Removed:</strong> Assigned to the Removed state. Work items in a state mapped to the Removed category are hidden from the backlog and board experiences.
</td> 
<td>Removed</td> 
<td>n/a</td> 
</tr>
</table> 

* * *

<a id="add-state-vs-kanban-column" />

## When to add a State versus a Kanban column

Both States and Kanban columns are used to track the status of work. Workflow states are shared across a project while Kanban columns are shared within a team. Only project collection admins can add custom states, while team admins can add Kanban columns.  

Add custom states when you want all teams to track the status according to the business workflow adopted by the organization. By customizing the process, you automatically customize the projects and WITs that reference that process. 

Also, by adding custom states to support those workflow states that several teams want to track, you avoid the confusion that can arise when team's create a query based on a Kanban column. Because each team can customize the Kanban board columns and swimlanes, the values assigned to work items which appear on different boards may not be the same. The primary work around for this issue is to maintain single ownership of work items by team area path. Another work around is to formalize the columns by adding custom states which can be shared across teams. 


<a id="auto-complete-work-items-with-pr" />

::: moniker range=">= tfs-2018"

## Auto completion of work items with pull requests 

When you link a work item to a pull request (PR), you have the option to automatically complete those work items when you successfully complete the PR.  As shown in the following image, all you have to do is check the box to **Complete linked work items after merging**. The system defaults to your selection for future PRs. 

![Complete pull request dialog, Autocomplete work items with completion of PR option](_img/workflow-states-complete-pr.png)

In the following circumstances the system won't automatically update the work item state to Done, Closed, or the state that belongs to the Closed category for the WIT: 
- The work item, whose WIT is managed with the Inheritance process model, is already in a State that belongs to the Resolved category. In this instance the system won't update the State. For example, if a bug derived from the Agile process is in a Resolved state, the system won't transition it to Closed.   
- The work item is already in a State that belongs to the Completed category. No further transition is required. 
- The WIT associated with the work item contains one or more workflow field rules that prevent the work item being saved to a next state. For example, a rule requires that another field must be defined as part of closing the work item.  
- For on-premises deployments and Azure Boards Hosted process model, you must modify the workflow to specify actions (**ACTION** element) to take place when transitioning the workflow. See [Change the workflow for a work item type, Specify Actions](../../reference/xml/change-workflow-wit.md#Actions).

To learn more about process models, see [Customize your work tracking experience](../../reference/customize-work.md).  

::: moniker-end

## Related articles

::: moniker range="azure-devops"
- [Lead Time and Cycle Time control charts (widgets)](../../report/dashboards/cycle-time-and-lead-time.md)
- [Customize a workflow for a process](../../organizations/settings/work/customize-process-workflow.md)
::: moniker-end

::: moniker range="azure-devops-2019"
- [Lead Time and Cycle Time control charts (widgets)](../../report/dashboards/cycle-time-and-lead-time.md)
- [Change the workflow for a work item type](../../reference/xml/change-workflow-wit.md)
- [ProcessConfiguration XML element reference](../../reference/xml/process-configuration-xml-element.md)
- [Customize your work tracking experience](../../reference/on-premises-xml-process-model.md) 
::: moniker-end


::: moniker range=">= tfs-2013 <= tfs-2018"
- [Change the workflow for a work item type](../../reference/xml/change-workflow-wit.md)
- [ProcessConfiguration XML element reference](../../reference/xml/process-configuration-xml-element.md)
- [Customize your work tracking experience](../../reference/on-premises-xml-process-model.md) 
::: moniker-end
