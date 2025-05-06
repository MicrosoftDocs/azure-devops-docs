---
title: End-of-sprint activities when working in Scrum and Azure Boards
titleSuffix: Azure Boards  
description: Learn about tasks to perform to close a sprint when using Scrum in Azure Boards. 
ms.custom: boards-sprints, engagement-fy23 
ms.service: azure-devops-boards 
ai-usage: ai-assisted
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 05/06/2025
---


# End-of-sprint activities

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

At the end of a sprint, teams should complete several tasks to maintain backlog hygiene and ensure accurate metrics. Incomplete work shouldn't remain assigned to a past sprint, and teams must decide how to handle unfinished items. While there's no automatic way to move incomplete work items to another sprint or reset **Remaining Work** to zero, teams can take specific actions to address these issues.

Key actions to take include:  
- Decide how to handle partially completed user stories and tasks at the end of the sprint.  
- Manage incomplete work to ensure sprint metrics and velocity remain accurate.  
- Review items in a prioritized order to maintain focus and efficiency.  

Perform end-of-sprint activities before or after a [sprint review meeting](best-practices-scrum.md#sprint-review-meetings) and before a [sprint retrospective](best-practices-scrum.md#sprint-retrospective-meetings). These activities help maintain accurate views and metrics to support sprint reviews, retrospectives, and future sprint planning.

## Goals for end-of-sprint activities  

Each sprint represents a time-boxed period of development to which work is assigned. Review the following checklist for the goals to keep in mind when you perform end-of-sprint activities.  

- Maintain backlog hygiene where no incompleted work is assigned to a sprint whose end date is in the past 
- Manage work item states and sprint assignments to support monitoring of team progress and velocity 
- Support team's continuous improvement activities 
- Support team's focus on shipping software and meeting sprint goals 
- Minimize work tracking efforts that have no value 

> [!TIP]  
> Team velocity measures planning accuracy, not productivity. Only completed work counts toward velocity. Incomplete work should be reconsidered for a future sprint. By focusing on completed work, you achieve more realistic metrics and better historical data for future planning.

## Decide team preferences 

The following suggestions walk through the main end-of-sprint activities teams should consider performing. Typically, these activities should be done on the last day of the sprint or after the [sprint review meeting](best-practices-scrum.md#sprint-review-meetings). 

- **Review the sprint backlog for incomplete user stories, backlog items, and tasks**. You can perform the review by [reviewing the sprint backlog](#review-sprint-backlog) or sprint taskboard. 
 
- **Reassign user stories, backlog items, and tasks not started to the product backlog or next sprint.** Using the [Planning pane](#reassign), you can reassign to the team backlog or a future sprint. Reassigned work items can be re-estimated and prioritized.   

- **Determine how to handle incomplete user stories, backlog items, or tasks.** Keep in mind the goal is to ship working software. The two choices here are: 
	- Split the story into two to represent the work completed in the current sprint and work yet to do. For more information, see [Copy or clone stories, issues and other work items](../backlogs/copy-clone-work-items.md).
	- Reassign the story to the next sprint where work can be completed. All unfinished stories in the current sprint account for zero to the sprint's velocity.

- **Determine how to handle Remaining Work for completed tasks.** If tasks are complete, then having a nonzero value for **Remaining Work** doesn't make much sense. Teams should decide how they want to handle these cases and consider setting the value of **Remaining Work** to zero for completed tasks.  

<a id="review-sprint-backlog"></a> 

### Review sprint backlog for incomplete work

To determine incomplete work, review the Sprint backlog for work that is still in a *Committed*, *Active*, or *In progress* state. 
:::image type="content" source="media/end-sprint/review-sprint-backlog.png" alt-text="Screenshot of Sprint Backlog at end of sprint.":::

> [!TIP]
> In Azure DevOps, closing a sprint doesn't automatically restrict updates to the sprint. Once a sprint gets closed, it's essential to manually move any unfinished work items to the current sprint or backlog.

<a id="reassign"></a> 

### Reassign incomplete user stories and tasks to future sprint 

From the Sprint backlog, choose :::image type="icon" source="../../media/icons/view-options-icon.png" border="false"::: **View options** and select **Planning**. Drag and drop the work items that are incomplete to either the next sprint or back to the team backlog. 

As shown in the following image, the **Fabrikam Team backlog** corresponds to the default **Iteration Path** set for the team. If the default is set to the **@CurrentIteration** macro, then that selection wouldn't change the **Iteration Path** until the start of the next sprint. 

:::image type="content" source="media/end-sprint/reassign-planning-pane.png" alt-text="Screenshot of Sprint Backlog with Planning Pane enabled.":::

 
## Archive past sprints

Over time, the number of sprints defined for a project or assigned to a team can grow. To minimize the drop-down menu for Iteration paths, Project Administrators can choose to move past sprints to an archive area. When you maintain the sprint assignment, but move it under a different sprint node, all work item data gets retained. All sprint charts and widgets continue to work. 

As shown in the following image, sprints from 2012 and 2013 were moved under the **Previous Sprints** node. 

:::image type="content" source="media/end-sprint/archived-sprints.png" alt-text="Screenshot of Iteration Paths archived under Previous Sprints node.":::


> [!TIP]   
> Azure DevOps maintains all data stored in work items until work items get permanently deleted. 


## Sprint hygiene tips

The Sprint backlog automatically points to the current sprint as the active sprint based on the start and end dates. If the current date falls within the sprint period, then the corresponding sprint is the current sprint. No further action is required to make the next sprint the active current sprint.  

As a project or team administrator, make sure to meet the following guidance for managing sprints.

- Start and end dates defined for your project's sprints shouldn't overlap. 
- All sprints of interest to a team should be selected for that team's configuration.  
- Several future sprints should be defined for your project and selected for your teams.  
 
For more information, see [Define iteration paths (sprints) and configure team iterations](../../organizations/settings/set-iteration-paths-sprints.md).

## Related articles

- [Implement Scrum practices for your team in Azure Boards](scrum-overview.md)
- [Assign backlog items to a sprint](assign-work-sprint.md)  
- [Filter backlogs, boards, queries, and plans](../backlogs/filter-backlogs-boards-plans.md)
- [Use Scrum best practices](best-practices-scrum.md)
- [Plan your sprint](assign-work-sprint.md) 
- [View or configure team velocity](../../report/dashboards/team-velocity.md)   
