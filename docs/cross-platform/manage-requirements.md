---
title: Manage requirements, Agile methods
titleSuffix: Azure DevOps
description: Learn about the tools and features available to manage requirements 
ms.technology: devops-agile 
ms.topic: overview
ms.assetid: 
ms.author: kaelli
author: KathrynEE
monikerRange: '<= azure-devops'
ms.date: 08/18/2020
---



# Manage requirements 

[!INCLUDE [temp](../includes/version-vsts-only.md)]

> *Requirements management is the process of documenting, analyzing, tracing, prioritizing and agreeing on requirements and then controlling change and communicating to relevant stakeholders. It is a continuous process throughout a project. A requirement is a capability to which a project outcome (product or service) should conform.*

This article provides an overview of the tools and features Azure DevOps provides to manage requirements. It maps the standard Agile requirements management tasks by project managers to the tools Azure DevOps supports.  It introduces the essential concepts to become familiar with, and then links to the how-to topics to learn more. 


Requirements management encompasses the following scenarios.   

> [!div class="checklist"]  
> - Define and track status of requirements
> - Analyze requirements
> - Assign requirements to timeboxes
> - Manage dependencies 
> - Perform milestone planning 
> - Monitor and report on progress  

Agile requirements management is conducted within an Agile culture where one or more of the following principles are in play:  

> [!div class="checklist"]  
> - Alignment within the organization
> - Support autonomous teams 
> - Support Kanban
> - Support Scrum methods 


## Capture requirements  

Capture requirements using work items and work item types 
Customize work item types to add fields, control extensions,  

### Work items and work item types 


### Add work items to product backlog or board 



### Import and update requirements using Excel 



### Functional and non-functional requirements 


### Excel integration 


### Maintain requirement specifications 

Link requirements to specifications 
Specs - add as attachment, use project Wiki, or place formal docs under version control using an Azure Repos repository. 


## Analyze, prioritize, and refine requirements

Once you have a working backlog, you'll want to get it in priority order. You'll want to review and refine your requirements and make sure the acceptance criteria is well defined. These tasks are supported through the following Azure Board tools: 

- Product backlog 
- Stack rank, Priority, Severity 
- Triage mode 
- Discussion within work item 


## Group and organize requirements

The product backlog starts out as a flat list. However, oftentimes you want to group requirements that support specific features or business objectives. Azure Boards supports this by providing portfolio work item types, portfolio backlogs and boards, and a Mapping pane to quickly link requirements to a portfolio work item. 

An additional way to group requirements and work items in general, is adding tags to work items. 


### Epics, features, and portfolio backlogs
Mapping 
Epics
Features
Tags

### Use tags to support queries and filtering 
 
With work item tags, team members can assign ad-hoc tags to work items. You can use these tags to filter backlogs and boards as well as query on work items.  For example, the following image illustrates a Kanban board filtered on the *web* keyword which displays cards with the *Web* tag. 

> [!div class="mx-imgBorder"]  
> ![Screenshot of Kanban board, Filter using keyword search.](../boards/media/filter/filter-kb-text-web-services.png)

## Implement Kanban or Scrum Agile methods

### Implement Kanban  

Kanban board 

### Implement Scrum  

Sprint backlogs, Taskboards, Sprint burndown chart 


## Manage dependencies

Link work items, link types
Minimum Viable Product versus Critical Path Management
Delivery plans (?) 


## Perform milestone planning

Size estimate
Forecast

If you want to integrate your requirements planning with Microsoft Project tools, you may do so via a Marketplace extension.  


## Assign requirements to timeboxes 

Sprints - iteration paths 
Planning mode 
Forecast 
Capacity (Scrum)  

## Monitor and report on progress 

- Kanban board 
- Rollup 
- Delivery plans and multiple team deliverables

## Get notified of additions and changes 
 Set alerts - personal, team, project 


## Required Azure DevOps configuration 

- Teams, defined and configures
- Area Paths
- Iteration Paths 
- Customize Kanban boards 



Tools/Features

- Work items, Product and Portfolio Backlogs
- Change Notification
- Kanban boards 
- Stack rank, Priority, Severity 
- Link work items, Link types, Attachments, tags 
- Area Paths, Iteration Paths, Forecast, Planning tool 
- Discussion within work item 
- Wiki 
- Customization – Add fields, Customize workflow 
- Rollup  

## Extensions 
- Delivery Plans
 


## Related articles

---
:::row:::
   :::column span="":::
      **Key concepts**
   :::column-end:::
   :::column span="":::
      **Get started and tutorial guides**
   :::column-end:::
   :::column span="":::
      **How-to articles**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      - [About work items](../boards/work-items/about-work-items.md) 
      - [About Area and Iteration Paths (sprints)](../organizations/settings/about-areas-iterations.md) 
      - [About teams and Agile tools](../organizations/settings/about-teams-and-settings.md) 
   :::column-end:::
   :::column span="":::
      **Get started and tutorial guides**
   :::column-end:::
   :::column span="":::
      **How-to articles**
   :::column-end:::
:::row-end:::



- [Best practices for "light-weight" Agile project management](../boards/best-practices-agile-project-management.md)
- [Configure and customize Azure Boards](../boards/configure-customize.md)