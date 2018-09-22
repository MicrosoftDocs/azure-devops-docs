---
title: Key concepts and terminology when using Azure Boards
titleSuffix: Azure Boards & TFS 
description: Key definitions for objects and items used to plan and track work using Azure Boards
ms.technology: devops-new-user 
ms.prod: devops
ms.assetid: 
ms.manager: douge
ms.author: kaelli
author: KathrynEE
ms.topic: reference
monikerRange: '>= tfs-2013'
ms.date: 09/05/2018  
---

# Key concepts 

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

Here you'll find definitions of key concepts and artifacts used in Azure Boards. See also: 
- [Work item field index](../work-items/guidance/work-item-field.md)
- [Project management and navigation glossary](../../project/navigation/glossary.md)  

## Agile methods
A family of engineering best processes with a goal of enabling rapid delivery of high-quality software and a business approach that aligns development with customer needs and company goals. In this paradigm, frequent inspection and adaptation is necessary, with teamwork, self-organization, and accountability all critical to project success.  

## Agile tools
A suite of web-based tools used to track work and support Agile methodologies. Agile tools support the core Agile methods&mdash;Scrum and Kanban&mdash;used by software development teams today. Learn more: [What is Azure Boards?](what-is-azure-boards.md).

[!INCLUDE [temp](../../_shared/glossary-terms/area-paths.md)] 

## Bug
A type of work item that records a potential source of dissatisfaction with the product. The common name of a work item type for tracking code defects.  

[!INCLUDE [temp](../../_shared/glossary-terms/dashboards.md)] 

[!INCLUDE [temp](../../_shared/glossary-terms/favorites.md)] 

## Fields 
Supports tracking a piece of information about the work to perform. Values you assign to a field are stored in the work tracking data store which you can query and generate charts to view status and trends. Your project contains 100 or more data fields. You update data by [modifying the data field within a work item](plan-track-work.md). Each work item is associated with a work item type (WIT), and the data you can track corresponds to the fields assigned to the WIT. For a definition of each predefined field, see [Work item field index](../work-items/guidance/work-item-field.md).   

[!INCLUDE [temp](../../_shared/glossary-terms/follow.md)] 

## Inheritance process model 
The Inheritance process model provides support for customizing work tracking objects and Agile tools for a project through the user interface. This process model is only available for accounts hosted on the Azure DevOps Services cloud platform. Projects inherit the customizations made to a process. To learn more, see [Inheritance process model](../../organizations/settings/work/inheritance-process-model.md).


## Iteration paths (aka sprints)
A time period, usually two to three weeks, used to group work items to be completed during that time period. Sprints are used in Scrum methods to support sprint planning, sprint burndown, and other Scrum processes. Iteration paths allow you to group work into sprints, milestones, or other event-specific or time-related period. Learn more: [About area and iteration paths](../../organizations/settings/about-areas-iterations.md).

## Kanban board 
An interactive, electronic sign board that supports visualization of the flow of work from concept to completion and lean methods. Learn more: [Kanban basics](../boards/kanban-quickstart.md).

 
## Link type
Specifies an object used to form link relationships between different WITs. Learn more: [Link work items to support traceability and manage dependencies](../queries/link-work-items-support-traceability.md) and [LinkTypes elements reference](../../reference/xml/link-type-element-reference.md).  

## Pick lists

Specifies an enumerated set of values that appear within a drop-down menu in a work item form and the **Value** column within the query editor. The method you use to customize a pick list varies depending on the field and the process model. Learn more: [Customize work](../../reference/customize-work.md). 

[!INCLUDE [temp](../../_shared/glossary-terms/plans.md)] 

## Portfolio backlog 
An interactive list of work items, similar to the product backlog, that supports organizing or grouping work under features, epics, or scenarios. Portfolio backlogs work similarly to product backlogs in that you can prioritize work and view the tree hierarchy of work. Learn more: [Define features and epics](../backlogs/define-features-epics.md).    

[!INCLUDE [temp](../../_shared/glossary-terms/process.md)]  

## Product backlog 
An interactive list of work items that corresponds to a team's project plan or roadmap for what the team plans to deliver. The product backlog supports prioritizing work, forecasting work by sprints, and quickly linking work to portfolio backlog items. You can define your backlog items and then manage their status using the Kanban board. 

Each product backlog can be customized by a team. Learn more: [Create your backlog](../backlogs/create-your-backlog.md).   

## Product backlog item
A type of work item that defines the applications, requirements, and elements that teams plan to create. Product owners typically define and stack rank product backlog items which are defined with the Scrum process.  Learn more: [Scrum process work item types and workflow](../work-items/guidance/scrum-process-workflow.md).   

[!INCLUDE [temp](../../_shared/glossary-terms/projects.md)] 

[!INCLUDE [temp](../../_shared/glossary-terms/queries.md)] 

[!INCLUDE [temp](../../_shared/glossary-terms/sprints.md)] 

## Sprint backlog 
An interactive list of work items that have been assigned to the same sprint or iteration path for a team. The sprint backlog supports teams that use Scrum methodologies. Learn more: [Sprint planning](../sprints/assign-work-sprint.md).  

[!INCLUDE [temp](../../_shared/glossary-terms/taskboard.md)] 

[!INCLUDE [temp](../../_shared/glossary-terms/teams.md)] 

## User story
A type of work item that defines the applications, requirements, and elements that teams plan to create. Product owners typically define and stack rank user stories. User story is defined with the Agile process.  Learn more: [Agile process work item types and workflow](../work-items/guidance/agile-process-workflow.md).   

[!INCLUDE [temp](../../_shared/glossary-terms/widgets.md)] 

[!INCLUDE [temp](../../_shared/glossary-terms/work-item-types.md)] 

## Workflow 

Workflow is an integral aspect of a work item and is defined by it's corresponding work item type. The workflow determines the logical progression and regression of work items, tracking the status of work as it progresses from a New or Active state to Closed or Completed state. It also specifies the values that appear in the drop-down menus for the State and Reason fields. Learn more: [Workflow states and state categories](../work-items/workflow-and-state-categories.md).

