---
title: Kanban terms
titleSuffix: Azure Boards
description: Key concepts and glossary of terms for Kanban in Azure Boards and Team Foundation Server (TFS) 
ms.custom: boards-kanban 
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
monikerRange: '>= tfs-2013'
ms.date: 11/19/2018
---

# Kanban key concepts

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

This article provides a short dictionary of terms and available tools used in tracking work using Kanban boards and Kanban methods. See also: 
- [Agile glossary](../work-items/agile-glossary.md) 
- [Work item field index](../work-items/guidance/work-item-field.md)  
- [Project management and navigation glossary](../../project/navigation/glossary.md)  


[!INCLUDE [temp](../../_shared/glossary-terms/agile-tools.md)] 

## Blocker
An issue that prevents work from progressing. You can highlight work that is blocked by using tags and changing the card color. Learn more: [Customize cards, Define style rules to highlight cards](customize-cards.md#define-style-rules-to-highlight-cards).

## Bottleneck
A constraint in the system that limits the flow of work. Identifying bottlenecks makes it easier to reduce their impact and provides a mechanism for controlling work flowing through the process. Learn more: [Split columns, Identify bottlenecks](split-columns.md#id-bottlenecks).

[!INCLUDE [temp](../../_shared/glossary-terms/bugs.md)] 

::: moniker range=">= tfs-2015"  
## Card reordering 
Card reordering is a configurable setting for a team's Kanban board that either forces cards to maintain the backlog priority when dragged and dropped on the board, or allows the priority order to change. Learn more: [Reorder cards](reorder-cards.md). 

![Reorder cards while changing columns](https://i3-vso.sec.s-msft.com/dynimg/IC822185.gif)

::: moniker-end  

## Cumulative flow diagram (CFD) 

The built-in CFD chart shows the count of items in each Kanban column for the past 30 weeks or less. From this chart you can gain an idea of the amount of work in progress and lead time. Work in progress counts unfinished requirements. Learn more: [Cumulative flow, lead time, and cycle time guidance](../../report/dashboards/cumulative-flow.md). 

## Cycle time
Cycle time is the time calculated for a work item from first entering an *In Progress* category state to entering a *Completed* [state category](#state-category). Learn more: [Cumulative flow, lead time, and cycle time guidance](../../report/dashboards/cumulative-flow-cycle-lead-time-guidance.md). 

> [!div class="mx-imgBorder"]  
> ![Lead time and cycle time](/azure/devops/report/dashboards/_img/cycle-lead-time-concept-intro.png)  

::: moniker range=">= azure-devops-2019"
You can gain valuable metrics and visualize the cycle time for a team and a configurable time period by [adding the Cycle Time widget to the dashboard](../../report/dashboards/cycle-time-and-lead-time.md).
::: moniker-end  

## Definition of Done  
Criteria that a team specifies for each stage of work to share and standardize on what constitutes work being done at that stage. Learn more: [Kanban best practices, working software and the Definition of Done](best-practices-kanban.md#dod). 

[!INCLUDE [temp](../../_shared/glossary-terms/kanban-board.md)] 

## Kanban columns 
A Kanban column maps to a stage of work. The default columns map to the workflow states of the work item types which appear on the Kanban board. You configure the columns to map [workflow states](#workflow-states) of your team. Learn more: [Kanban basics, Map the flow of work](kanban-basics.md#map-flow).

## Lead time

Lead time is the time calculated for a work item from first entering a *Proposed* category state to entering a *Completed* [state category](#state-category). Learn more: [Cumulative flow, lead time, and cycle time guidance](../../report/dashboards/cumulative-flow-cycle-lead-time-guidance.md).  

::: moniker range=">= azure-devops-2019"
You can gain valuable metrics and visualize the lead time for a team and a configurable time period by [adding the Lead Time widget to the dashboard](../../report/dashboards/cycle-time-and-lead-time.md).
::: moniker-end   

::: moniker range=">= tfs-2017"  
## Live updates 

Live updates is a Kanban board view option which when enabled automatically refreshes the Kanban board as other team members move or reorder cards. Learn more: [Enable live updates](live-updates.md).   

::: moniker-end   

[!INCLUDE [temp](../../_shared/glossary-terms/issues.md)] 

[!INCLUDE [temp](../../_shared/glossary-terms/product-backlog.md)] 

[!INCLUDE [temp](../../_shared/glossary-terms/product-backlog-item.md)] 

[!INCLUDE [temp](../../_shared/glossary-terms/portfolio-backlog.md)] 

<!---
## Scrumban 
-->


::: moniker range=">= tfs-2015"  
## Swimlanes

A swimlane is a configurable row on a Kanban board, usually used to support different service class levels of work. Learn more: [Expedite work with swimlanes](expedite-work.md). 

> [!div class="mx-imgBorder"]
> ![Kanban board, Drag items into a swimlane](_img/expedite/swimlanes-move-item.png)  
::: moniker-end  

::: moniker range=">= tfs-2015"  
## Split columns

Split columns lets your team implement a pull mechanism within the workflow process. Without split columns, teams push work forward, to signal that they've completed their stage of work. However, pushing it to the next stage doesn't necessarily mean that a team member immediately starts work on that item. With split columns, your team knows exactly how many items sit idle, waiting for work to begin. Learn more: [Split columns](split-columns.md). 

![Kanban board, Split columns](_img/kanban-board-split-columns-example-chart.png)

::: moniker-end  

::: moniker range=">= tfs-2015"  
## Task checklists
A task is a type of work item used to track work required to complete a user story or product backlog item. You can add tasks from your Kanban board which appear as a checklist of work to be done. As you complete a task, you can update it's status by checking the checkbox for the task.  Learn more: [Add task checklists](add-task-checklists.md). 
::: moniker-end  

## Task switching
Task switching, also referred to as *context switching* or *multitasking*, is when a team member shifts their attention among different tasks. Limiting task switching can allow a person to work more efficiently by minimizing the amount of time required to redirect cognitive function to a new activity.

[!INCLUDE [temp](../../_shared/glossary-terms/user-story.md)] 

## WIP limit
A WIP limit is a constraint that a team applies to one or more workflow stages to help prevent potential bottlenecks that hinder the continuous flow of work in the system. Learn more: [Work in Progress limits](wip-limits.md). 

<a id="wip" />
## Work in Process (WIP)
Work that has been started but isn't done or completed.  

<a id="workflow-states" />
## Workflow states

Workflow states are defined for each work item type to support tracking the status of a work item, from its creation to it's completion. These states define the workflow process: actions, steps, or stages that a piece of work goes through from inception to completion.  

**Examples of workflow states for the three system processes**

> [!div class="mx-tdBreakAll"]  
> |User Story, Agile process  |Product backlog item, Scrum process |Requirement, CMMI process  |  
> |-------------|----------|---------| 
> |![User Story workflow states, Agile process](../work-items/guidance/_img/ALM_PT_Agile_WF_UserStory.png)|![Product backlog item workflow states, Scrum process](../work-items/guidance/_img/ALM_PT_Scrum_WF_PBI.png)|![Requirement workflow states, CMMI process](../work-items/guidance/_img/ALM_PT_CMMI_WF_Requirement.png)|

::: moniker range="azure-devops"
You can customize your workflow states, adding states or renaming states. Learn more: [Customize the workflow](../../organizations/settings/work/customize-process-workflow.md). 
::: moniker-end  

::: moniker range="<= azure-devops-2019"  
You can customize your workflow states, adding states, renaming states, and changing state transitions and reasons. Learn more: [Customize the workflow](../../reference/xml/change-workflow-wit.md). 
::: moniker-end  

<a id="state-category" />
## Workflow state categories 
State categories determine how the Kanban board treat each workflow state. The state categories used by the backlogs are *Proposed*, *In Progress*, *Resolved*, and *Completed*. Learn more: [Workflow states and state categories](../work-items/workflow-and-state-categories.md). 

## Related articles 

- [Refine your backlog](../backlogs/best-practices-product-backlog.md)
- [Kanban best practices](best-practices-kanban.md)  
- [About boards and Kanban](kanban-overview.md)  
