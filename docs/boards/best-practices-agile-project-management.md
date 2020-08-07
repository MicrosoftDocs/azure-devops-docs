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

Light-weight 

Project Planning 


## Team sizing, team settings  

Azure Boards provides teams the tools to plan and track work. Each project defines a default team, which you can start using immediately. However, if you have a number of development or feature teams, you should consider defining a team in Azure DevOps for each feature team. Consider the following guidance:  

- Define teams 

1. General guidance: 6 to 9 team members - devs, test, PM 

2. Each team gets their own set of tools  - can focus on their set of work with less noise 

3. Program team can view Dev/Feature teams work and manage the Features and Epics 
4. How big is your backlog? 
 


## Understand which work item types you'll use  

Determine which work item types your team will use to capture customer requirements and development work. Based on your project and the process used to create it, you have a choice from those shown in the following images. 

[!INCLUDE [temp](includes/work-item-types.md)]

 
[!INCLUDE [temp](includes/note-requirements-terms.md)]

#### Best practice tips: 

- Use Features to capture customer features you want to ship 
- Quickly add features or requirements from the backlog and fill in details later
- Use Requirements&mdash;User Stories, Product Backlog Items, Issues, or Requirements&mdash;to break-down Features into work the development team will own 
- Map Requirements to Features to track progress 
- Let Developers use Tasks to break-down their work as needed. 

As project managers, you manage your features and the development team manages the requirements. By mapping them using parent-child links, you gain visibility into the progress of your features. 

If you have larger initiatives or scenarios that require shipping several Features, you can group these under Epics, again using parent-child links. 

#### To learn how: 

- [Define features and epics](backlogs/define-features-epics.md)  
- [Create your backlog](backlogs/create-your-backlog.md)  
- [Organize your backlog (map or reparent)](backlogs/organize-backlog.md)  


## Review, prioritize, and update your product plan  

The main tool for planning your product is your team's Product Backlog or Feature Backlog. Use your backlog to perform the following tasks: 

- Define the user stories or requirements that specify the work to be performed. Define user stories sized to be completed within a single sprint. Each user story you add to the backlog is automatically assigned the default area path and iteration path set for your team. 
- Resequence or reorder the user stories so that they are listed in priority order.
- Add details to each user story to capture the work to be delivered. 

## Organize your product backlog with Features & Epics  

You can start from a bottom-up or top-down approach, choose one for your initial planning. 

1. Use to capture larger initiatives - Features to Ship,  Epics or larger Scenarios to deliver to customers 

2. Size Features to be delivered within a few sprints, Size Epics to be delivered Quarterly or to some Milestone objective 
	


	
## Your sprint plan and your Sprint Backlog   

Each sprint, perform the following tasks: 

1. Use your Product Backlog to capture the work to do and deliver - sized to be completed within a single sprint  
2. Each sprint: Review your backlog priority, put work in priority order  
3. Each sprint: Map unmapped work to the Larger Features and Epics  
4. Use Story Points to estimate the size of work and to gage Team Velocity   
5. Dependency Management: Link work items to work  items using Predecessor/Successor link types  


## During Sprint: 

Kanban Board: Use to talk to status, blocks/issues/risks/changes, update status; Filter to Current sprint, Assigned To 

Taskboard: 
	
## Milestone planning  

1. Product Backlog: Use Forecast to determine what can be completed within the next 3 sprints (Requires Story Points)  

## Review of deliverables and dependencies

1. Use Delivery Plans to review a Calendar view of what's being delivered across teams 
	
## Monitor progress, process improvement  

Team Velocity:  Use to improve planning/estimating and forecasting 

## Guidance on tag usage  

Work item tags are a useful tool to support queries and filtering of backlogs, boards, and queries. For tags to be useful to the team, provide some general guidance on how your team should use tags. Consider documenting this guidance in a central place, such as the project wiki. 
 
- Have a policy in place about how your teams want to use tags
- Consider how tags will be used for queries, filtering, reporting 
- Cross-team dependency
- Cross-project dependency


## Cross-org dependency