---
title: Understand what you get with Azure Boards to manage your software development projects  
titleSuffix: Azure Boards
description: Learn about the main features and functions supported by Azure Boards. 
ms.custom: boards-get-started
ms.technology: devops-new-user
ms.assetid:  
ms.author: kaelli
author: KathrynEE
ms.topic: overview
monikerRange: '<= azure-devops'
ms.date: 11/30/2021
---

# What is Azure Boards?

[!INCLUDE [temp](../includes/version-vsts-plus-azdevserver-2019.md)]

Azure Boards provides software development teams with the interactive and customizable tools they need to manage their software projects. It provides a rich set of capabilities including native support for Agile, Scrum, and Kanban processes, calendar views, configurable dashboards, and integrated reporting. These tools scale as your business grows. 
  
Quickly and easily track user stories, backlog items, task, features, and bugs associated with your project. Track work by adding work items based on the process and work item types available to your project. An example of one of the Azure Boards tools is the Kanban board as shown in the following image. 


:::image type="content" source="media/about-boards/intro-boards.png" alt-text="Screenshot of Azure Boards Hub Pages, Kanban Board":::


> [!NOTE]  
> This article applies to Azure DevOps Services and Azure DevOps Server 2019 and later versions. Most of the information is valid for earlier on-premises versions. However, images show only examples for the latest version.  




## Track user stories, bugs, features, and epics  

Track various types of work using the default work item types&mdash;such as user stories, bugs, features, and epics. Or, customize these types or create your own. Each work item form provides a standard set of system fields and controls, including **Discussion** for adding and tracking comments, **History**, **Links**, and **Attachments**. The **Deployment**, **Development**, and **Related Work** controls facilitate tracking when code is released or changed, and relationships between work items. 

:::image type="content" source="media/about-boards/work-item-form.png" alt-text="Screenshot of Azure Boards Work Item Form, User Story":::

## Interactive backlogs, boards, calendar views, and lists  

Azure Boards provides the following interactive tools. Each tool provides a filtered set of work items, filtered based on a team, logged in user, or custom filters. Most tools support adding and updating work items. 

- [**Work items**](../work-items/view-add-work-items.md): Use to quickly find work items that are assigned to you. Pivot or filter work items based on other criteria. Other criteria includes work items that you follow, that you're mentioned in, or that you viewed or updated.
	:::image type="content" source="../work-items/media/view-add/work-items-hub-new.png" alt-text="Screenshot of Azure Boards, Work Items"::: 
- [**Boards**](../boards/kanban-quickstart.md): Boards present work items as cards and support quick status updates through drag-and-drop. The feature is similar to sticky notes on a physical whiteboard. Use to implement Kanban practices and visualize the flow of work for a team.
	:::image type="content" source="media/about-boards/kanban-board.png" alt-text="Screenshot of Azure Boards, Kanban Board"::: 
- [**Backlogs**](../backlogs/create-your-backlog.md): Backlogs present work items as lists. A product backlog represents your project plan and a repository of all the information you need to track and share with your team. Portfolio backlogs allow you to group and organize your backlog into a hierarchy. Use to plan and organize work.
	:::image type="content" source="media/about-boards/product-backlog.png" alt-text="Screenshot of Azure Boards, Product Backlog":::   
- [**Sprints**](../sprints/assign-work-sprint.md): Sprint backlogs and taskboards provide a filtered view of work items a team assigned to a specific iteration path, or sprint. From your backlog, you can assign work to an iteration path by using drag-and-drop. You can then view that work in a separate *sprint backlog*. Use to implement Scrum practices.
	:::image type="content" source="media/about-boards/taskboard.png" alt-text="Screenshot of Azure Boards, Task Board":::   
- [**Queries**](../queries/view-run-query.md): Queries are filtered lists of work items based on criteria that you define by using a query editor. You use queries to support the following tasks:
	- Find groups of work items with something in common.
	- List work items for the purposes of sharing with others or doing bulk updates. 
	- Triage a set of items to organize or assign.
	- Create status and trend charts that you then can add to dashboards.
	:::image type="content" source="media/about-boards/queries.png" alt-text="Screenshot of Azure Boards, Queries":::   
 
- [**Delivery Plans**](../plans/review-team-plans.md): Use to display a calendar view of work across several teams for review and discussion of dependencies and deliverables.  
	:::image type="content" source="../plans/media/plans/intro-image.png" alt-text="Screenshot of Azure Boards, Delivery Plans":::   

To learn more about effective use of these tools, see [Best tool to add, update, and link work items](../work-items/best-tool-add-update-link-work-items.md).   

## Support for Agile, Scrum, and Kanban processes (sprints) 



## Focused, filtered, and personalized tools (work items, queries) 

## Delivery plans show calendar views and dependencies  

## Configurable dashboards and Power BI reports 
 





<a id="scale" />

## Support independent, autonomous teams 

A team refers to a group of project members who work in a particular product area. Those areas are represented as *area paths*. Area paths are hierarchical paths that denote the possible areas of ownership in an organization. A team is defined by a name, its members, and its area paths.

Boards, Backlogs, Sprints rely on team configurations. For example, if you want to add a Kanban board or product backlog, you define a team. For more information on teams, see [About teams and Agile tools](../../organizations/settings/about-teams-and-settings.md).  

## Manage work across projects

Most work is tracked within a project. However, many enterprises create several projects to support their business needs as described in [Plan your organizational structure](../..//user-guide/plan-your-azure-devops-org-structure.md?toc=/azure/devops/boards/toc.json&bc=/azure/devops/boards/breadcrumb/toc.json). 


To track work across several projects, you can: 
- [Create work item queries that list work items across projects](../queries/using-queries.md#across-projects)
- [Gain visibility across teams](../plans/visibility-across-teams.md)


## Customize your processes

## End-to-end traceability 

## Access even more tools    

Extensions provide support for other tools. An extension is an installable software unit that adds new capabilities to your projects. Find extensions in the [Azure DevOps Marketplace](https://marketplace.visualstudio.com/azuredevops). Extensions can support planning and tracking of work items, sprints, scrums, and more and collaboration among team members.  

## Related articles

- [Agile culture](../plans/agile-culture.md)  
- [Practices that scale](../plans/practices-that-scale.md)  
- [About teams and Agile tools](../../organizations/settings/about-teams-and-settings.md)



<!--- 

### Video: Plan your work with Azure Boards

> [!VIDEO https://channel9.msdn.com/Events/Microsoft-Azure/Azure-DevOps-Launch-2018/A105/player]

-->
