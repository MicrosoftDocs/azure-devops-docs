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

use the guidance provided in this article to get started. Light-weight 

You can start from a bottom-up or top-down approach, choose one for your initial planning.

If your team is committed to practicing Kamban or Scrum methods, see [About Boards and Kanban](boards/kanban-overview.md) or the [tutorials for implementing Scrum](/sprints/scrum-overview.md). 


Goals to consider: 
- Autonomy
- Alignment 



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

Sprints are defined for a project and then selected by teams. Sprint cadence can vary between one week to four weeks, or longer. Sprints are used to focus a team on delivering a set of work. 

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

 

## Review, prioritize, estimate, and update your product plan   

Periodically you'll want to review and groom your product plan. The main tools you'll use are your team's Product Backlog or Feature Backlog and Board. 

Use your backlog to perform the following tasks: 

- Define work to be performed
- Open work items and add details 
- Assign work to team members or to sprints
- Reorder work items using drag-and-drop so that they appear in priority order 
- Capture technical debt and non-feature work required to support a healthy ecosystem of delivery 
- (Optional) Estimate requirements to gage team velocity and support forecasting 

#### Best practice tips: 

- Periodically refine your backlog  
- Make sure features and requirements are sized appropriately
- Define the acceptance criteria and the definition of done for features and work 
- Map unmapped work to the Larger Features and Epics 
- Forecast your backlog 

#### To learn how: 

- [Refine your backlog](backlogs/best-practices-product-backlog.md) 
- [Define features and epics](backlogs/define-features-epics.md)  
- [Create your backlog](backlogs/create-your-backlog.md)  
- [Forecast your product backlog](sprints/forecast.md)  


## Use tags to support queries and filtering 
 
With work item tags team members can assign ad-hoc tags to work items. You can use these tags to filter backlogs and boards as well as query on work items.  For tags to be useful to the team, provide some general guidance on how your team should use tags. Consider documenting this guidance in a central place, such as the project wiki. 
 
#### Best practice tips: 

- Have a policy in place about how your teams want to use tags
- Consider how tags will be used for queries, filtering, reporting 
- Cross-team dependency
- Cross-project dependency
- 
- 
- 	
## Work in sprints  

Sprints allow your team to focus on a pre-selected set of work to be accomplished. Work you assign to a sprint appears on your team's sprint backlog. Sprint backlogs are defined only for product backlogs.  

Each sprint, perform the following tasks: 

- Plan each sprint with your team 
- Ensure each work item is scoped to be completed within the sprint
- Ensure the acceptance criteria for the work is well defined and understood
- Assign work items to a sprint and to a team member

#### To learn how: 

- [Assign backlog items to a sprint](sprints/assign-work-sprint.md) 
- [Define features and epics](backlogs/define-features-epics.md)  
- [Create your backlog](backlogs/create-your-backlog.md)  
- [Forecast your product backlog](sprints/forecast.md)   

## During Sprint: 

Kanban Board: Use to talk to status, blocks/issues/risks/changes, update status; Filter to Current sprint, Assigned To 

Taskboard: 
	
## Milestone planning  

1. Product Backlog: Use Forecast to determine what can be completed within the next 3 sprints (Requires Story Points)  

## Review team deliverables and dependencies

1. Use Delivery Plans to review a calendar view of what's being delivered across teams 
	
## Monitor progress, process improvement  

Team Velocity:  Use to improve planning/estimating and forecasting 


## Manage dependencies  

- Dependency Management: Link work items to work  items using Predecessor/Successor link types  


## Related articles

- [Configure and customize Azure Boards](configure-customize.md) 
- [Visibility across teams](plans/visibility-across-teams.md) 
- [Work with multi-team ownership of backlog items](backlogs/backlogs-overview.md#multi-team)
