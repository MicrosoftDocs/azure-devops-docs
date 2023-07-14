---
title: End-of-sprint activities when working in Scrum and Azure Boards
titleSuffix: Azure Boards  
description: Learn about tasks to perform to close a sprint when using Scrum in Azure Boards. 
ms.custom: boards-sprints, engagement-fy23 
ms.service: azure-devops-boards 
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 01/23/2023
---


# End-of-sprint activities

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)] 

<!--- https://github.com/MicrosoftDocs/azure-devops-docs/issues/12672 --> 

At the end of a sprint, teams may want to attend to several tasks to maintain backlog hygiene. In general, incomplete work should never be assigned to a past sprint. Teams need to determine how they want to handle work that isn't completed in a sprint and take appropriate action. 

> [!NOTE]   
> There is no automatic way to move incomplete work items assigned to one sprint to another. Nor, an automatic method for zeroing out **Remaining Work**.
  
At the end of each sprint, each team should determine and take action to address the following questions:  
- *How should we address user stories and their tasks that are only partially completed at the end of the sprint?*  
- *What is the correct way to manage partially done work at the end so that sprint metrics and velocity are correctly accounted for?*
- *What should we review and in what order?*

In general, end-of-sprint activities should be done before or after a [sprint review meeting](best-practices-scrum.md#sprint-review-meetings) and before a [sprint retrospective](best-practices-scrum.md#sprint-retrospective-meetings). The main item to consider is to maintain views and metrics to support the team in their sprint reviews, retrospectives, and sprint planning.  

## Goals for end-of-sprint activities  

Each sprint represents a time-boxed period of development to which work is assigned. Review the following checklist for the goals to keep in mind when performing end-of-sprint activities.  

- Maintain backlog hygiene where no incompleted work is assigned to a sprint whose end date is in the past 
- Manage work item states and sprint assignments to support monitoring of team progress and velocity 
- Support team's continuous improvement activities 
- Support team's focus on shipping software and meeting sprint goals 
- Minimize work tracking efforts that have no value 

> [!TIP]   
> Team velocity is not a measure of team productivity and should only be used as a metric for planning future sprints. Work is either complete at the end of a sprint or it isn't. If it's done it counts. If it's not, then it gets reconsidered for a future sprint and not the current sprint. Velocity tends to level itself out no matter what choices you make. However, by considering only done work, you work toward a more realistic value and a much better source of historical data to make future forecasts.


## Decide team preferences 

The following suggestions walk through the main end-of-sprint activities teams should consider performing. Typically, these activities should be done on the last day of the sprint or after the [sprint review meeting](best-practices-scrum.md#sprint-review-meetings). 

- **Review the sprint backlog for incomplete user stories, backlog items, and tasks**. You can perform the review by [reviewing the sprint backlog](#review-sprint-backlog) or sprint taskboard. 
 
- **Reassign user stories, backlog items, and tasks not started to the product backlog or next sprint.** Using the [Planning pane](#reassign), you can reassign to the team backlog or a future sprint. Reassigned work items can be re-estimated and prioritized.   

- **Determine how to handle incomplete user stories, backlog items, or tasks.** Keep in mind the goal is to ship working software. The two choices here are: 
	- Split the story into two to represent the work completed in the current sprint and work yet to do. For more information, see [Copy or clone stories, issues and other work items](../backlogs/copy-clone-work-items.md).
	- Reassign the story to the next sprint where work can be completed. All unfinished stories in the current sprint account for zero to the sprint's velocity.

- **Determine how to handle Remaining Work for completed tasks.** If tasks are complete, then having a non-zero value for **Remaining Work** doesn't make a lot of sense. Teams should decide how they want to handle these cases and consider setting the value of **Remaining Work** to zero for completed tasks.  


<a id="review-sprint-backlog" /> 

### Review sprint backlog for incomplete work

To determine incomplete work, review the Sprint backlog for work that is still in a committed, active, in progress state. 
:::image type="content" source="media/end-sprint/review-sprint-backlog.png" alt-text="Screenshot of Sprint Backlog at end of sprint.":::


<a id="reassign" /> 

### Reassign incomplete user stories and tasks to future sprint 

From the Sprint backlog, choose :::image type="icon" source="../../media/icons/view-options-icon.png" border="false"::: **View options** and select **Planning**. Drag and drop the work items that are incomplete to either the next sprint or back to the team backlog. 

As shown in the following image, the **Fabrikam Team backlog** corresponds to the default **Iteration Path** set for the team. Note that if the default is set to the **@CurrentIteration** macro, then that selection wouldn't change the **Iteration Path** until the start of the next sprint. 

:::image type="content" source="media/end-sprint/reassign-planning-pane.png" alt-text="Screenshot of Sprint Backlog with Planning Pane enabled.":::

 
## Archive past sprints

Over time, the number of sprints defined for a project or assigned to a team can grow. To minimize the drop-down menu for Iteration paths, Project Administrators can choose to move past sprints to an archive area. By maintaining the sprint assignment, but moving it under a different sprint node, all work item data is retained. All sprint charts and widgets continue to work. 

As shown in the following image, sprints from 2012 and 2013 have been moved under the **Previous Sprints** node. 

:::image type="content" source="media/end-sprint/archived-sprints.png" alt-text="Screenshot of Iteration Paths archived under Previous Sprints node.":::


> [!TIP]   
> All data stored in work items is maintained by Azure DevOps until work items are permanently deleted. 


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
- [Interactively filter backlogs, boards, queries, and plans](../backlogs/filter-backlogs-boards-plans.md)
- [Scrum best practices](best-practices-scrum.md)
- [Sprint planning](assign-work-sprint.md) 
- [View or configure team velocity](../../report/dashboards/team-velocity.md)  
- [Sprint burndown](../../report/dashboards/configure-sprint-burndown.md)  
 