---
title: Learn key concepts & terms to support Agile tools
titleSuffix: Azure Boards
description: Learn about the key terms and concepts to understand the objects and items used to track work in Azure Boards.
ms.service: azure-devops-boards
ms.custom: seodec18
ms.assetid:  
ms.topic: conceptual
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 02/03/2023
---

# Terms and concepts used when tracking work items in Azure Boards

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

The Microsoft Agile glossary is a short dictionary of terms used in tracking work using Azure Boards. More terms are defined in the following articles: 
- [Kanban key concepts](../boards/kanban-key-concepts.md)  
- [Sprints and Scrum key concepts](../sprints/scrum-key-concepts.md)  
- [Work item field index](guidance/work-item-field.md)  
- [Project management and navigation glossary](../../project/navigation/glossary.md)  

<!--- 
<a id="object-definitions"></a>
## Definitions of key work tracking objects 

Your work tracking experience is managed and customized primarily through the objects defined in the following table. 
-->

## Agile methods

A family of engineering best processes with a goal of enabling rapid delivery of high-quality software and a business approach that aligns development with customer needs and company goals. In this paradigm, frequent inspection and adaptation are necessary, with team work, self-organization, and accountability all critical to project success.

[!INCLUDE [temp](../../includes/glossary-terms/agile-tools.md)] 

[!INCLUDE [temp](../../includes/glossary-terms/area-paths.md)] 

[!INCLUDE [temp](../../includes/glossary-terms/bugs.md)] 

## Categories

Groups one or more work item types to support flexible reporting, queries, and other functions made available through Agile tools. Categories support the process configuration used by the web portal backlog and taskboard pages. For example, you can add custom work item types to the Requirements category and manage them using the product backlog and Kanban boards. For more information, see [Use categories to group work item types](/previous-versions/azure/devops/reference/xml/use-categories-to-group-work-item-types). 

[!INCLUDE [temp](../../includes/glossary-terms/collections.md)] 

[!INCLUDE [temp](../../includes/glossary-terms/dashboards.md)] 

[!INCLUDE [temp](../../includes/glossary-terms/discussion.md)] 

[!INCLUDE [temp](../../includes/glossary-terms/favorites.md)] 

## Fields 

Fields support tracking a piece of information about the work to perform. Values you assign to a field are stored in the work tracking data store that you can query and generate charts to view status and trends. Your project contains 100 or more data fields. You update data by [modifying the data field within a work item](../backlogs/add-work-items.md). Each work item is associated with a work item type (WIT), and the data you can track corresponds to the fields assigned to the WIT. For a definition of each predefined field, see [Work item field index](guidance/work-item-field.md).   

[!INCLUDE [temp](../../includes/glossary-terms/follow.md)] 

## Global lists 

Defines a list of menu items or picklist items that are shared across WITs and projects within a project collection. Global lists help to minimize the work that is required to update lists. You can define global lists within WITs that you upload with your process template. Learn more: [Manage global lists for work item types](/previous-versions/azure/devops/reference/witadmin/manage-global-lists-for-work-item-types). (Only supported for Hosted XML and On-premises XML process models) 

## Global workflow 

Specifies both work item fields and global lists that multiple projects and types of work items can share. Learn more: [Manage global workflow](/previous-versions/azure/devops/reference/witadmin/witadmin-import-export-global-workflow) (Only supported for On-premises XML process model).   

<a id="hidden-types"> </a> 

## Hidden types categories  

Specifies the set of work item types that you don't want users to create manually. By default this set includes:   
-   [Code Review Request and Code Review Response](../../repos/tfvc/day-life-alm-developer-suspend-work-fix-bug-conduct-code-review.md )    
-   [Feedback Request and Feedback Response](/previous-versions/azure/devops/project/feedback/get-feedback)    
-   [Shared Steps and Shared Parameter](../../test/create-test-cases.md)    
-   [Test Plan and Test Suite](../../test/create-a-test-plan.md)  
  
You can use [TFS Team Project Manager](https://github.com/jelledruyts/TfsTeamProjectManager), an open-source client available from GitHub to quickly determine which WITs belong to the Hidden Types Category. 

## Hosted XML process model  

The Hosted XML process model provides support for customizing work tracking objects and Agile tools for a project by modifying and importing a process template. This process model is only available for select accounts hosted on the Azure Boards cloud platform.  For more information, see [Hosted process model](../../organizations/settings/work/hosted-xml-process-model.md).

[!INCLUDE [temp](../../includes/glossary-terms/issues.md)] 

## Inheritance process model 

The Inheritance process model provides support for customizing work tracking objects and Agile tools for a project through the user interface. This process model is only available for accounts hosted on the Azure Boards cloud platform. Projects inherit the customizations made to a process. For more information, see [Inheritance process model](../../organizations/settings/work/inheritance-process-model.md).


## Issue 

**Agile process**: An issue is a type of work item that defines an item that you want to track as it may impact the completion of other work. It's defined for the Agile process and doesn't appear on any backlog or board. See [Manage issues and impediments](../backlogs/manage-issues-impediments.md). 

**Basic process**: An issue is a type of work item that defines some work or code defect that needs to be tracked. It's defined for the Basic process and appears on the product backlog and [Issues Kanban board](../get-started/plan-track-work.md). 

[!INCLUDE [temp](../includes/basic-process-note.md)] 
[!INCLUDE [temp](../../includes/glossary-terms/iterations.md)] 

[!INCLUDE [temp](../../includes/glossary-terms/kanban-board.md)] 

[!INCLUDE [temp](../../includes/glossary-terms/links-and-link-types.md)] 

## On-premises XML process model 

The On-premises XML process model provides support for customizing work tracking objects and Agile tools for a project. With this model, you can update the XML definition of work item types, the process configuration, categories, and more. You can also update the attributes of fields. This process model is only available for on-premises Azure DevOps. For more information, see [On-premises process model](../../reference/on-premises-xml-process-model.md).

## Pick lists

A picklist specifies an enumerated set of values that appear within a drop-down menu in a work item form. Values also appear in the **Value** column within the query editor. The method you use to customize a picklist varies. It depends on the field and the process model. For more information, see [Customize work](../../reference/customize-work.md). 

[!INCLUDE [temp](../../includes/glossary-terms/plans.md)] 

[!INCLUDE [temp](../../includes/glossary-terms/portfolio-backlog.md)] 

[!INCLUDE [temp](../../includes/glossary-terms/process.md)]  

## Process configuration

Specifies the default configuration and functional capabilities that your teams can access using the Agile tools. These web portal tools include the product backlog, sprint backlogs, Kanban board, and taskboard. (Only supported for Hosted XML and On-premises XML process models)  

## Process model  

The work tracking customization method supported by your organization or collection. One of three process models are supported, Inheritance and Hosted XML for Azure Boards and On-premises XML for on-premises Azure DevOps. Learn more: [Customize your work tracking experience](../../reference/customize-work.md) 

## Process template

Specifies an inter-related set of files that contain the XML definitions for tracking work and defining the initial configuration of other functional areas. The system provides three default process templates&mdash;[Agile](guidance/agile-process.md), [Scrum](guidance/scrum-process.md), or [CMMI](guidance/cmmi-process.md). You can create a project and then customize it, or customize a process template that you then use to create a project. (Only supported for Hosted XML and On-premises XML process models) 

[!INCLUDE [temp](../../includes/glossary-terms/product-backlog.md)] 

[!INCLUDE [temp](../../includes/glossary-terms/product-backlog-item.md)] 

[!INCLUDE [temp](../../includes/glossary-terms/projects.md)] 

[!INCLUDE [temp](../../includes/glossary-terms/queries.md)] 

[!INCLUDE [temp](../../includes/glossary-terms/remote-linking.md)] 

[!INCLUDE [temp](../../includes/glossary-terms/rollup.md)] 

[!INCLUDE [temp](../../includes/glossary-terms/sprints.md)] 

[!INCLUDE [temp](../../includes/glossary-terms/sprint-backlogs.md)]  

[!INCLUDE [temp](../../includes/glossary-terms/taskboard.md)] 

[!INCLUDE [temp](../../includes/glossary-terms/teams.md)] 

[!INCLUDE [temp](../../includes/glossary-terms/user-story.md)] 

[!INCLUDE [temp](../../includes/glossary-terms/widgets.md)] 

[!INCLUDE [temp](../../includes/glossary-terms/work-item-types.md)] 

## Workflow 


A workflow is an integral aspect of a work item. It's defined by its corresponding work item type. The workflow determines the logical progression and regression of work items. For the Agile process, it tracks the status of work as the work progresses from a New or Active state to a Closed or Completed state. For the Basic process, all work item types use the **To Do**, **Doing**, and **Done** states to track workflow status. 

 The workflow also specifies the values that appear in the State and Reason drop-down menus. For more information, see [Workflow states and state categories](../work-items/workflow-and-state-categories.md).  

## Related articles 

- [Scrum best practices](../sprints/best-practices-scrum.md)
