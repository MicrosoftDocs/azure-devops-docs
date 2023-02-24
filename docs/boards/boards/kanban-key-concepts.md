---
title: Kanban terms and concepts
titleSuffix: Azure Boards
description: Learn about key concepts, the glossary of terms, and available tools used in tracking work using Kanban boards and methods.
ms.custom: boards-kanban 
ms.service: azure-devops-boards
ms.assetid: 
ms.author: chcomley
author: KathrynEE
ms.topic: conceptual
monikerRange: '<= azure-devops'
ms.date: 04/01/2022
---

# Key Kanban concepts and terms in Azure Boards

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This article provides a short dictionary of terms and available tools used in tracking work using Kanban boards and Kanban methods. See also: 
- [Agile glossary](../work-items/agile-glossary.md) 
- [Work item field index](../work-items/guidance/work-item-field.md)  
- [Project management and navigation glossary](../../project/navigation/glossary.md)  


## Blocker

An issue that prevents work from progressing. You can highlight work that is blocked by using tags and changing the card color. Learn more: [Customize cards, Define style rules to highlight cards](customize-cards.md#define-style-rules-to-highlight-cards).

## Bottleneck

A constraint in the system that limits the flow of work. Identifying bottlenecks makes it easier to reduce their impact and provides a mechanism for controlling work flowing through the process. Learn more: [Split columns, Identify bottlenecks](split-columns.md#id-bottlenecks).
 
## Card reordering 

Card reordering is a configurable setting for a team's Kanban board that either forces cards to maintain the backlog priority when dragged and dropped on the board, or allows the priority order to change. Learn more: [Reorder cards](reorder-cards.md). 

![Reorder cards while changing columns](media/8_7_02.gif)

## Cumulative flow diagram (CFD) 

The in-context CFD report shows the count of items in each Kanban column for the past 30 weeks or less. From this chart, you can gain an idea of the amount of work in progress and lead time. Work in progress counts unfinished requirements. Learn more: [Cumulative flow, lead time, and cycle time guidance](../../report/dashboards/cumulative-flow.md). 

## Cycle time

Cycle time is the time calculated for a work item from first entering an *In Progress* category state to entering a *Completed* [state category](#state-category). Learn more: [Cumulative flow, lead time, and cycle time guidance](../../report/dashboards/cumulative-flow-cycle-lead-time-guidance.md). 

> [!div class="mx-imgBorder"]  
> ![Lead time and cycle time](/azure/devops/report/dashboards/media/cycle-lead-time-concept-intro.png)  

::: moniker range=">= azure-devops-2019"

You can gain valuable metrics and visualize the cycle time for a team and a configurable time period by [adding the Cycle Time widget to the dashboard](../../report/dashboards/cycle-time-and-lead-time.md).

::: moniker-end  

## Definition of Done  

Criteria that a team specifies for each stage of work to share and standardize on what makes up work being done at that stage. Learn more: [Kanban best practices, working software and the Definition of Done](best-practices-kanban.md#dod). 

[!INCLUDE [temp](../../includes/glossary-terms/kanban-board.md)] 

[!INCLUDE [temp](../includes/note-kanban-boards-teams.md)]

## Kanban columns 

A Kanban column maps to a stage of work. The default columns map to the workflow states of the work item types that appear on the Kanban board. You configure the columns to map [workflow states](#workflow-states) of your team. Learn more: [Kanban basics, Map the flow of work](kanban-basics.md#map-flow).

## Lead time

Lead time is the time calculated for a work item from first entering a *Proposed* category state to entering a *Completed* [state category](#state-category). Learn more: [Cumulative flow, lead time, and cycle time guidance](../../report/dashboards/cumulative-flow-cycle-lead-time-guidance.md).  

::: moniker range=">= azure-devops-2019"

You can gain valuable metrics and visualize the lead time for a team and a configurable time period by [adding the Lead Time widget to the dashboard](../../report/dashboards/cycle-time-and-lead-time.md).

::: moniker-end   


## Live updates 

Live updates is a Kanban board view option that when enabled automatically refreshes the Kanban board as other team members move or reorder cards. Learn more: [Enable live updates](live-updates.md).   
 

[!INCLUDE [temp](../../includes/glossary-terms/product-backlog.md)] 

[!INCLUDE [temp](../../includes/glossary-terms/product-backlog-item.md)] 

[!INCLUDE [temp](../../includes/glossary-terms/portfolio-backlog.md)] 

<!---
## Scrumban 
-->



## Swimlanes

A swimlane is a configurable row on a Kanban board, used to support different service class levels of work. Learn more: [Speed up work with swimlanes](expedite-work.md). 

> [!div class="mx-imgBorder"]
> ![Kanban board, Drag items into a swimlane](media/expedite/swimlanes-move-item.png)  

## Split columns

The Split columns feature lets your team implement a pull mechanism within the workflow process. Without split columns, teams push work forward, to signal that they've completed their stage of work. However, pushing it to the next stage doesn't necessarily mean that a team member immediately starts work on that item. With split columns, your team knows exactly how many items sit idle, waiting for work to begin. Learn more: [Split columns](split-columns.md). 

![Kanban board, Split columns](media/kanban-board-split-columns-example-chart.png)

## Task checklists

A task is a type of work item used to track work required to complete a user story or product backlog item. You can add tasks from your Kanban board that appear as a checklist of work to be done. As you complete a task, you can update its status by checking the checkbox for the task.  Learn more: [Add tasks or child items as checklists](add-task-checklists.md). 

## Task switching

Task switching, also referred to as *context switching* or *multitasking*, is when a team member shifts their attention among different tasks. Limiting task switching can allow a person to work more efficiently by minimizing the amount of time required to redirect cognitive function to a new activity.

[!INCLUDE [temp](../../includes/glossary-terms/user-story.md)] 

## WIP limit

A WIP limit is a constraint that a team applies to one or more workflow stages to help prevent potential bottlenecks that hinder the continuous flow of work in the system. Learn more: [Work in Progress limits](wip-limits.md). 

<a id="wip" />

## Work in Process (WIP)

Work that has been started but isn't done or completed.  

<a id="workflow-states" />

## Workflow states

Workflow states are defined for each work item type to support tracking the status of a work item, from its creation to it's completion. These states define the workflow process: actions, steps, or stages that a piece of work goes through from inception to completion.  

The State and Reason fields differ depending on the work item type and process selected for the project. 

[!INCLUDE [temp](../includes/four-process-workflow.md)] 

::: moniker range=">= azure-devops-2019"

You can customize your workflow states, adding states or renaming states. Learn more: [Customize the workflow](../../organizations/settings/work/customize-process-workflow.md). 

::: moniker-end  

::: moniker range="< azure-devops-2019"  

You can customize your workflow states, adding states, renaming states, and changing state transitions and reasons. Learn more: [Customize the workflow](../../reference/xml/change-workflow-wit.md). 

::: moniker-end  

<a id="state-category" />

## Workflow state categories 

State categories determine how the Kanban board treats each workflow state. The state categories used by the backlogs are *Proposed*, *In Progress*,  *Resolved*, and *Completed*. To learn more, see [Workflow states and state categories](../work-items/workflow-and-state-categories.md). 

## Related articles 

- [Refine your backlog](../backlogs/best-practices-product-backlog.md)
- [Kanban best practices](best-practices-kanban.md)  
- [About boards and Kanban](kanban-overview.md)  
