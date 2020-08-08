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



# Best practices for Agile project management 

[!INCLUDE [temp](includes/version-all.md)]

As a project manager new to Azure Boards, use the guidance provided in this article to get started. 

You can start from a bottom-up or top-down approach, choose one for your initial planning.
Light-weight 
If practicing Scrum and tracking work and sprint burndown - see Scrum. 
Project Planning 

Goals to consider: 
- Autonomy
- Alignment 


#### To learn more: 

- [Agile culture](backlogs/plans/agile-culture.md)  
- [Scaling Agile - Practices that scale](plans/practices-that-scale.md)  
 

## Configure your teams   

Azure Boards provides teams the tools to plan and track work. Each project defines a default team, which you can start using immediately. However, if you have a number of development or feature teams, you should consider defining a team in Azure DevOps for each feature team. Consider the following guidance:  

- Define teams 

1. General guidance: 6 to 9 team members - devs, test, PM 

2. Each team gets their own set of tools  - can focus on their set of work with less noise 

3. Program team can view Dev/Feature teams work and manage the Features and Epics 
4. How big is your backlog? 
 

## Configure your sprints 

Sprints are defined for a project and then selected by teams. Sprint cadence can vary between one week to four weeks, or longer. Sprints are used to focus a team on delivering a set of work. 



#### Best practice tips: 

- Define a sprint cadence that all teams will use 
- Work should be sized to be completed within a sprint, or within several sprints 
- 

## Choose the work item types you'll use  

Determine which work item types your team will use to capture customer requirements and development work. Based on your project and the process used to create it, you have a choice from those shown in the following images. Also, each team can determine how they want to track bugs. 

[!INCLUDE [temp](includes/work-item-types.md)]

 
[!INCLUDE [temp](includes/note-requirements-terms.md)]

#### Best practice tips: 

- Use Features to capture customer features you want to ship 
- Quickly add features or requirements from the backlog and fill in details later
- Use Requirements&mdash;User Stories, Product Backlog Items, Issues, or Requirements&mdash;to break-down Features into work the development team will own 
- Map Requirements to Features to track progress 
- Define requirements sized to be completed within a single sprint. 
- Let Developers use Tasks to break-down their work as needed. 
- Size Features to be delivered within a few sprints and size Epics to be delivered quarterly or to some milestone objective 

As project managers, you manage your features and the development team manages the requirements. By mapping them using parent-child links, you gain visibility into the progress of your features. Each work item you add to your team backlog is automatically assigned the default area path and iteration path set for your team. 

If you have larger initiatives or scenarios that require shipping several Features, you can group these under Epics, again using parent-child links. 

#### To learn how: 

- [Define features and epics](backlogs/define-features-epics.md)  
- [Create your backlog](backlogs/create-your-backlog.md)  
- [Organize your backlog (map or reparent)](backlogs/organize-backlog.md)  


## Review, prioritize, and update your product plan   

Periodically you'll want to review and groom your product plan. The main tools you'll use are your team's Product Backlog or Feature Backlog. Use your backlog to perform the following tasks: 

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
	
## Work in sprints  

Sprints allow your team to focus on a pre-selected set of work to be accomplished. Work you assign to a sprint appears on your team's sprint backlog. Sprint backlogs only apply to requirements.  

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

## Use tags to support queries and filtering 
 
Work item tags are a useful tool to support queries and filtering of backlogs, boards, and queries. For tags to be useful to the team, provide some general guidance on how your team should use tags. Consider documenting this guidance in a central place, such as the project wiki. 
 
#### Best practice tips: 

- Have a policy in place about how your teams want to use tags
- Consider how tags will be used for queries, filtering, reporting 
- Cross-team dependency
- Cross-project dependency

## Manage dependencies  

- Dependency Management: Link work items to work  items using Predecessor/Successor link types  


## Related articles

- [Configure and customize Azure Boards](configure-customize.md) 
- [Visibility across teams](plans/visibility-across-teams.md) 
