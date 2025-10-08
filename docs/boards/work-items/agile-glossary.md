---
title: Learn key concepts & terms to support Agile tools
titleSuffix: Azure Boards
description: Learn about the key terms and concepts to understand the objects and items used to track work in Azure Boards.
ms.service: azure-devops-boards
ms.topic: conceptual
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 10/08/2025
ai-usage: ai-assisted
---

# Terms and concepts used when tracking work items in Azure Boards

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This Microsoft Agile glossary lists common terms you use when tracking work with Azure Boards. See these related glossaries for more terms and context:

- [Kanban key concepts](../boards/kanban-key-concepts.md)  
- [Sprints and Scrum key concepts](../sprints/scrum-key-concepts.md)  
- [Work item field index](guidance/work-item-field.md)  
- [Project management and navigation glossary](../../project/navigation/glossary.md)  

[!INCLUDE [temp](../../includes/glossary-terms/agile-tools.md)] 

[!INCLUDE [temp](../../includes/glossary-terms/area-paths.md)] 

[!INCLUDE [temp](../../includes/glossary-terms/bugs.md)] 

## Categories

Categories group one or more work item types to support reporting, queries, and the web portal backlog and taskboard pages. For example, add custom work item types to the Requirements category to manage them using the product backlog and boards. For details, see [Use categories to group work item types](/previous-versions/azure/devops/reference/xml/use-categories-to-group-work-item-types). 

[!INCLUDE [temp](../../includes/glossary-terms/collections.md)] 

[!INCLUDE [temp](../../includes/glossary-terms/dashboards.md)] 

[!INCLUDE [temp](../../includes/glossary-terms/discussion.md)] 

[!INCLUDE [temp](../../includes/glossary-terms/favorites.md)] 

## Fields

Fields capture specific pieces of information about work. You store field values in the work tracking data store and use them in queries and charts to report status and trends. Projects include many fields; to update a field, edit it within a work item. Each work item is associated with a work item type (WIT), and the available fields reflect that WIT. For definitions of predefined fields, see [Work item field index](guidance/work-item-field.md).

[!INCLUDE [temp](../../includes/glossary-terms/follow.md)] 

## Global lists

Global lists define shared menu or picklist values across work item types (WITs) and projects in a collection. Use global lists to reduce maintenance when multiple WITs use the same values. Define global lists in a process template for Hosted XML or On-premises XML process models. See [Manage global lists for work item types](/previous-versions/azure/devops/reference/witadmin/manage-global-lists-for-work-item-types).

## Global workflow

Global workflow defines fields and global lists that multiple projects and WITs can share. Administrators use it to standardize workflow across projects (On-premises XML process model only). See [Manage global workflow](/previous-versions/azure/devops/reference/witadmin/witadmin-import-export-global-workflow).

<a id="hidden-types"> </a>

## Hidden types categories

Hidden types list work item types that you don't want people to create manually. By default this set includes:

- [Code Review Request and Code Review Response](../../repos/tfvc/day-life-alm-developer-suspend-work-fix-bug-conduct-code-review.md)    
- [Feedback Request and Feedback Response](/previous-versions/azure/devops/project/feedback/get-feedback)    
- [Shared Steps and Shared Parameter](../../test/create-test-cases.md)    
- [Test Plan and Test Suite](../../test/create-a-test-plan.md)  

You can use the open-source Team Project Manager on GitHub to determine which WITs belong to the Hidden Types category.

## Process models and templates

- Hosted XML process model—supports customizing work tracking objects by modifying and importing a process template (available for select Azure Boards cloud accounts). See [Hosted process model](../../organizations/settings/work/hosted-xml-process-model.md).
- Inheritance process model—supports UI-based customization for Azure Boards cloud accounts; projects inherit process customizations. See [Inheritance process model](../../organizations/settings/work/inheritance-process-model.md).
- On-premises XML process model—supports XML-based customization for on-premises Azure DevOps. See [On-premises process model](../../reference/on-premises-xml-process-model.md).

## Issue

- Agile process: An Issue tracks items that might affect completing other work; it doesn't appear on backlogs or boards by default. See [Manage issues and impediments](../backlogs/manage-issues-impediments.md).
- Basic process: An Issue tracks work or defects and appears on the product backlog and Issues board. [!INCLUDE [temp](../includes/basic-process-note.md)]

[!INCLUDE [temp](../../includes/glossary-terms/iterations.md)] 

[!INCLUDE [temp](../../includes/glossary-terms/kanban-board.md)] 

[!INCLUDE [temp](../../includes/glossary-terms/links-and-link-types.md)] 

## Pick lists

A picklist (drop-down menu) presents an enumerated set of values for a field. How you customize a picklist depends on the field and the process model. For details, see [Customize work](../../reference/customize-work.md).

[!INCLUDE [temp](../../includes/glossary-terms/plans.md)] 

[!INCLUDE [temp](../../includes/glossary-terms/portfolio-backlog.md)] 

[!INCLUDE [temp](../../includes/glossary-terms/process.md)]  

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

A workflow defines the allowed progression and regression of a work item as defined by its WIT. For example, the Agile workflow tracks status from *New* or *Active* to *Closed* or *Completed*. The Basic process uses **To Do**, **Doing**, and **Done** states. Workflow also controls which State and Reason values appear in drop-down menus. See [Workflow states and state categories](../work-items/workflow-and-state-categories.md).

## Related content

- [Scrum best practices](../sprints/best-practices-scrum.md)
