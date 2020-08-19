---
title: Best practices for Agile project management 
titleSuffix: Azure Boards
description: Guidance for project managers new to Azure Boards to plan and track their projects  
ms.technology: devops-agile
ms.topic: conceptual
ms.author: kaelli
author: KathrynEE
monikerRange: '<= azure-devops'
ms.date: 08/07/2020
---



# Best practices for "light-weight" Agile project management 

[!INCLUDE [temp](includes/version-all.md)]

As a project manager new to Azure Boards, you have a choice of Agile planning tools. 

How choose the tools and methods that will support your team? 
How choose the most light-weight tracking methods? 
Main thing is that your development team will use a product backlog; project management will use a Kanban board to track Features. 

Best practices tips here "light-weight" 
Light-weight - minimal tracking, status updates, minimal estimation 


use the guidance provided in this article to get started. Light-weight 

You can start from a bottom-up or top-down approach, choose one for your initial planning.

If your team is committed to practicing Kamban or Scrum methods, see [About Boards and Kanban](boards/kanban-overview.md) or the [tutorials for implementing Scrum](/sprints/scrum-overview.md). 


Goals to consider: 
- Autonomy
- Alignment 

General guidance: 
Choose how you'll share specs, sprint goals, project goals, and guidance to new team members 
Basic guidance:
- [Track work with user stories, issues, bugs, features, and epics](backlogs/backlogs-boards-plans.md) 
- [Tasks supported by Backlogs, Boards, Taskboards, and Plans](backlogs/backlogs-boards-plans.md) 

- 


#### To learn more: 

- [Agile culture](plans/agile-culture.md)  
- [Scaling Agile - Practices that scale](plans/practices-that-scale.md)  
 

## Configure your teams   

Azure Boards provides teams the tools to plan and track work. Each project defines a default team, which you can start using immediately. However, if you have a number of development or feature teams, you should consider defining a team in Azure DevOps for each feature team.   

#### Best practice tips: 

- Configure teams along the value streams your organization wants to deliver
- Define a team for each development group of 6 to 12 developers 
- Configure development teams to support rollup to project management feature teams 


#### To learn how: 

- [Configure a hierarchy of teams](plans/configure-hierarchical-teams.md) 
- [Add a team, move from one default team to several teams](../organizations/settings/add-teams.md)  
 

## Configure your sprints 

Sprints&mdash;specified by Iteration Paths&mdash;are defined for a project and then selected by teams. A sprint cadence can vary between one week to four weeks or longer. You assign work to sprints that teams will deliver at the end of the sprint.  

#### Best practice tips: 

- Define a sprint cadence that all teams within your product group will use  
- Define at least six to twelve iterations that will support planning for six to twelve months 
- Determine how teams will use iterations to manage backlog items
	- Unassigned sprint work is assigned to the default backlog
	- Unassigned sprint work is assigned to a Future backlog 



#### To learn how: 

- [End-to-end sequence to define and assign Iteration Paths](../organizations/settings/about-areas-iterations.md#end-to-end-sequence-to-define-and-assign-iteration-paths)
- [How many iterations should a team define?](../organizations/settings/about-areas-iterations.md#how-many-iterations-should-a-team-define)
- [Define Iteration Paths and configure team iterations](../organizations/settings/set-iteration-paths-sprints.md) 
 
 

## Choose the work item types you'll use  

Determine which work item types your team will use to capture customer requirements and development work. Based on your project and the process used to create it, you have a choice from those shown in the following images. Also, each team can determine how they want to track bugs. 

[!INCLUDE [temp](includes/work-item-types.md)]

[!INCLUDE [temp](includes/note-requirements-terms.md)]

#### Best practice tips: 

- Use **Features** to capture customer features you want to ship 
- Quickly add features or requirements from the backlog and fill in details later
- Use **Requirements**&mdash;User Stories, Product Backlog Items, Issues, or Requirements&mdash;to break-down Features into work the development team will own 
- Map Requirements to Features to track progress at the project management level 
- Size development work to be completed within a sprint 
- Size feature deliverables to be completed within a sprint or within several sprints 
- Size Epics to be delivered quarterly or to some milestone objective
- Let Developers use Tasks to break-down their work as needed.


As project managers, you manage your features and the development team manages the requirements. By mapping them using parent-child links, you gain visibility into the progress of your features. Each work item you add to your team backlog is automatically assigned the default area path and iteration path set for your team. 

If you have larger initiatives or scenarios that require shipping several Features, you can group these under Epics, again using parent-child links. 

#### To learn how: 

- [Define features and epics](backlogs/define-features-epics.md) 
- [Create your backlog](backlogs/create-your-backlog.md)  
- [Organize your backlog (map or reparent)](backlogs/organize-backlog.md)  

 

## Review and update your product plan   

Periodically you'll want to review and groom your product plan. The main tools you'll use are your team's Product Backlog or Feature Backlog and Board. 

Use your backlog to perform the following tasks: 

- Define work to be performed
- Open work items and add details 
- Assign work to team members or to sprints
- Reorder work items using drag-and-drop so that they appear in priority order 
- Capture technical debt and non-feature work required to support a healthy ecosystem of delivery 
- (Optional) Estimate requirements to gage team velocity and support forecasting 

> [!TIP]   
> You can monitor team velocity based on estimates assigned to completed work or a simple count of work items completed during sprints. However, to use the Forecast feature, you must assign a value to the Story Points, Effort, or Size field. IF you don't want to estimate requirements, you can simply assign a value of 1 to requirement estimates and then use the Forecast tool based on a count of work items. 

#### Best practice tips: 

- Periodically refine your backlog  
- Make sure features and requirements are sized appropriately
- Define the acceptance criteria and the definition of done for features and work 
- Map unmapped work to the Features and Epics 
- Forecast your backlog 

#### To learn how: 

- [Refine your backlog](backlogs/best-practices-product-backlog.md) 
- [Define features and epics](backlogs/define-features-epics.md)  
- [Create your backlog](backlogs/create-your-backlog.md)  
- [Forecast your product backlog](sprints/forecast.md)  


## Use tags to support queries and filtering 
 
With work item tags team members can assign ad-hoc tags to work items. You can use these tags to filter backlogs and boards as well as query on work items.  For tags to be useful to the team, provide some general guidance on how your team should use tags. Consider documenting this guidance in a central place, such as the [project wiki](../project/wiki/about-readme-wiki.md). 
 
#### Best practice tips: 

- Have a policy in place about how your teams will use tags
- Indicate how you'll use tags to support queries, filtering, reporting 
- Consider using tags to identify cross-team or cross-project dependencies

#### To learn how: 

- [Add work item tags to categorize and filter lists and boards](queries/add-tags-to-work-items.md)

## Forecast and milestone planning  

To gain insight into what features can ship when, you can use the **Forecast** tool. This tool requires that you provide estimates to the Story Points, Effort, or Size field for each requirement. If you want to forecast on a simple count of work items, then simply assign the value of **1** to requirement estimates.


#### Order the features backlog in priority order 

As project managers, you'll want to always have your features backlog in priority order. This conveys to the development team which features are most important to complete first. 

Here the features backlog shows the sequence of features to ship. 

:::image type="content" source="media/best-practices/feature-backlog-priority-order.png" alt-text="Requirements backlog, ordered by feature parent":::

#### Order the requirements backlog based on parent features 

First you want to make sure you are completing the requirements needed to ship features. As shown in the following image, the requirements backlog has been ordered according to the features you want to ship. This assumes that all requirements in a feature must be complete in order to ship it. 

:::image type="content" source="media/best-practices/product-backlog-ordered-parent.png" alt-text="Requirements backlog, ordered by feature parent":::


#### Forecast the requirements backlog 

With estimates assigned to each requirement, and plugging in 12 as a velocity, the Forecast tool shows which requirements and features the team can complete within the next six sprints. Using the Planning tool, you can quickly assign requirements to the forecasted sprints.  

:::image type="content" source="media/best-practices/forecast-product-backlog-ordered-parent.png" alt-text="Forecast of Requirements backlog, ordered by feature parent":::

#### Update your Features board 

With a forecast of when a feature will ship, you can update each feature's iteration path. 

> [!TIP]    
> Quickly assign values to a feature by adding those fields to the card on the Kanban board. TO learn how, see [Customize cards](boards/customize-cards.md). 

:::image type="content" source="media/best-practices/features-board-iteration-path-updates.png" alt-text="Features board, updated iteration paths":::


#### Milestone planning

Milestone markers aren't used in Azure Boards work tracking, except for Delivery Plans. [Delivery Plans](plans/review-team-plans.md) provide a calendar view and allow you to define a milestone marker. 
However, you can use one or more of the following options to mark a work item as a milestone: 
- Simply prepend or append the word **Milestone** in the title of your work item
- [Add a work item tag](/azure/devops/boards/queries/add-tags-to-work-items) labeled **Milestone**   
- [Add a custom field](/azure/devops/organizations/settings/work/customize-process-field) labeled **Milestone** and populate it with a pick list of milestones  
- [Link work items](/azure/devops/boards/backlogs/add-link) using the Predecessor/Successor or Related link type to a milestone work item 
- [Assign the milestone work item to the sprint](/azure/devops/boards/sprints/assign-work-sprint) in which it's targeted for completion. 
 

	
## Work in sprints  

*Dev team use sprint backlog to plan and track sprint work.*
*Project management team - use Kanban board to track sprint work.*

Sprints allow your team to focus on a pre-selected set of work to be accomplished. Work you assign to a sprint appears on your team's sprint backlog. Sprint backlogs are defined only for product backlogs, not for portfolio backlogs.  

Each sprint, perform the following tasks: 

- Plan each sprint with your team 
- Ensure each work item is scoped to be completed within the sprint
- Ensure the acceptance criteria for the work is well defined and understood
- Assign requirements to a sprint and to a team member 

#### To learn how: 

- [Assign backlog items to a sprint](sprints/assign-work-sprint.md) 
- [Define features and epics](backlogs/define-features-epics.md)  
- [Create your backlog](backlogs/create-your-backlog.md)  
- [Forecast your product backlog](sprints/forecast.md)   

## Manage dependencies  

In Microsoft Project, work that depends on the completion of other work is managed using Predecessor/Su

- Dependency Management: Link work items to work items using Predecessor/Successor link types  
- no critical path 


## Review progress and feature deliverables 

To gain insight into progress is being made

Rollup 

Kanban Board: Use to talk to status, blocks/issues/risks/changes, update status; Filter to Current sprint, Assigned To 

Taskboard: 

### Review team deliverables and dependencies

1. Use Delivery Plans to review a calendar view of what's being delivered across teams 
 

## Process improvement  

TO improve your processes, you need to have a plan and goals. 
Two charts you can use to support process improvement:  

- Team Velocity: How well is the team able to plan and execute a sprint  Use to improve planning/estimating and forecasting 
- Cycle time: 

*What are useful process improvement goals for a dev team? feature team?* 
Make your team accountable. ...
Measure results. ...

https://www.belatrixsf.com/blog/agile-and-a-continuous-improvement-mindset

## Related articles

- [Configure and customize Azure Boards](configure-customize.md) 
- [Visibility across teams](plans/visibility-across-teams.md) 
- [Work with multi-team ownership of backlog items](backlogs/backlogs-overview.md#multi-team)
