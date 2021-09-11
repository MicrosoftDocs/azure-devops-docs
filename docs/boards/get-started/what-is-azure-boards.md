---
title: Understand what you get with Azure Boards  
titleSuffix: Azure Boards
description: Learn about the main features and functions supported by Azure Boards that are available from Azure DevOps Services. 
ms.custom: boards-get-started
ms.technology: devops-new-user
ms.assetid:  
ms.author: kaelli
author: KathrynEE
ms.topic: overview
monikerRange: '>= tfs-2013'
ms.date: 09/10/2021
---

# What is Azure Boards?

[!INCLUDE [temp](../includes/version-vsts-plus-azdevserver-2019.md)]

With the Azure Boards web service, teams can manage their software projects. It provides a rich set of capabilities including native support for Scrum and Kanban, customizable dashboards, and integrated reporting. These tools can scale as your business grows. 
  
You can quickly and easily start tracking user stories, backlog items, task, features, and bugs associated with your project. You track work by adding work items based on the process and work item types available to your project. 

### Video: Plan your work with Azure Boards

> [!VIDEO https://channel9.msdn.com/Events/Microsoft-Azure/Azure-DevOps-Launch-2018/A105/player]


> [!NOTE]  
> This article applies to Azure DevOps Services and Azure DevOps Server 2019 and later versions. Most of the guidance is valid for earlier on-premises versions. However, images show only examples for the latest versions. Also, the Basic process is only available with [Azure DevOps Server 2019 Update 1](https://go.microsoft.com/fwlink/?LinkId=2097609) and later versions. 


## Work item types 
 
Two of the most popular processes used are Basic and Agile. A process determines the work item types and workflow available in Azure Boards. If you want a project that uses the Scrum or CMMI process, you can [add another project](../../organizations/projects/create-project.md) and specify the process. See [Choose a process for a comparison of processes](../work-items/guidance/choose-process.md). 

[!INCLUDE [temp](../includes/four-process-work-item-types-workflow.md)] 

Each work item represents an object stored in the work item data store. Each work item is assigned a unique identifier (ID) within your projects.

## Track work on interactive backlogs and boards

Quickly add and update the status of work using the Kanban board. You can also assign work to team members and tag with labels to support queries and filtering. Share information through descriptions, attachments, or links to network shared content. Prioritize work through drag-and-drop.  


#### [Agile process](#tab/agile-process) 

**Update the status of user stories**

Add and update the status of work from **New**, **Active**, **Resolved**, and **Closed** using the Kanban board. Add tasks as child items to user stories. To learn more, see [Track user stories, features, and tasks](plan-track-work.md).  

> [!div class="mx-imgBorder"]  
> ![Update status on Kanban board](media/plan-track-work/update-status.png)  

**Prioritize your backlog of user stories**

Prioritize work through drag-and-drop on your team backlog. To learn more, see [Create your backlog](../backlogs/create-your-backlog.md). 

> [!div class="mx-imgBorder"]  
> ![Reorder work items](media/about-boards/reorder-agile-backlog.png)  


#### [Basic process](#tab/basic-process) 

**Update the status of issues**

Add and update the status  from **To Do**, **Doing**, and **Done**. Add tasks as child items to issues. To learn more, see [Track issues and tasks](plan-track-work.md).   

> [!div class="mx-imgBorder"]  
> ![Update status on Kanban board](media/track-issues/update-status.png)  

**Prioritize your backlog of issues**

Organize work through drag-and-drop on your team backlog. To learn more, see [Create your backlog](../backlogs/create-your-backlog.md). 

> [!div class="mx-imgBorder"]  
> ![Reorder work items](media/about-boards/reorder-backlog.png)  

#### [Scrum process](#tab/scrum-process) 

**Update the status of product backlog items**

Add and update the status of work items by drag-and-drop to a new column. Add tasks as child items to product backlog items. To learn more, see [Start using your Kanban board](../boards/kanban-quickstart.md). 

> [!div class="mx-imgBorder"]  
> ![Update status on Kanban board](media/plan-track-work/update-status.png) 

**Prioritize your backlog of product backlog items**

Prioritize work through drag-and-drop on your team backlog. To learn more, see [Create your backlog](../backlogs/create-your-backlog.md). 

> [!div class="mx-imgBorder"]  
> ![Reorder work items](media/about-boards/reorder-agile-backlog.png)  


#### [CMMI process](#tab/cmmi-process) 

**Update the status of requirements**

Add and update the status from **Proposed**, **Active**, and **Resolved**. Add tasks as child items to requirements. To learn more, see [Start using your Kanban board](../boards/kanban-quickstart.md).   

> [!div class="mx-imgBorder"]  
> ![Update status on Kanban board](media/about-boards/cmmi-update-status.png)  


**Prioritize your backlog of requirements**

Organize work through drag-and-drop on your team backlog. To learn more, see [Create your backlog](../backlogs/create-your-backlog.md). 

> [!div class="mx-imgBorder"]  
> ![Reorder work items](media/about-boards/cmmi-reprioritize.png)  


* * * 


## Collaborate with your team

Collaborate with others through the **Discussion** section of the work item form. Use <strong>@mention</strong>s and **#ID** controls to quickly include others in the conversation or link to other work items. Choose to follow specific issues to get alerted when they're updated. 

Create dashboards that track status and trends of work being accomplished.  Set notifications to get alerted when an issue is created or changed. 

#### [Agile process](#tab/agile-process) 

**Get updated when a work item is updated**

> [!div class="mx-imgBorder"]  
> ![Work item form, Follow icon control](media/about-boards/user-story-form-follow.png)  

#### [Basic process](#tab/basic-process) 

**Get updated when a work item is updated**

> [!div class="mx-imgBorder"]  
> ![Work item form, Follow icon control](media/about-boards/issue-form-follow.png)  

#### [Scrum process](#tab/scrum-process) 

**Get updated when a work item is updated**

> [!div class="mx-imgBorder"]  
> ![Work item form, Follow icon control](media/about-boards/scrum-work-item-follow.png)  


#### [CMMI process](#tab/cmmi-process) 

**Get updated when a work item is updated**

> [!div class="mx-imgBorder"]  
> ![Work item form, Follow icon control](media/about-boards/cmmi-work-item-follow.png)  


* * * 

To learn more, see one of the following articles:  
- [Discussion section](plan-track-work.md#discussion)  
- [Follow a work item](../work-items/follow-work-items.md)  
- [Add and manage dashboards](../../report/dashboards/dashboards.md)  
- [Set personal notifications](../../notifications/manage-your-personal-notifications.md).  

## Plan effectively by working in sprints

Plan sprints by assigning work to current or future sprints. Forecast work that can get completed based on effort estimates. Determine how much work can be done within a sprint. Assign tasks and issues to team members and sprints in bulk. 


 
#### [Agile process](#tab/agile-process) 

**Assign backlog items to a sprint**

::: moniker range=">= azure-devops-2020"
> [!div class="mx-imgBorder"]
> ![Boards>Backlogs>Drag-drop items onto sprint](media/about-boards/drag-drop-backlog-items-to-sprint-s155.png)  
::: moniker-end
::: moniker range="<= azure-devops-2019"
> [!div class="mx-imgBorder"]
> ![Boards>Backlogs>Drag-drop items onto sprint](media/about-boards/drag-drop-backlog-items-to-sprint.png)  
::: moniker-end



#### [Basic process](#tab/basic-process) 

**Assign backlog items to a sprint**

::: moniker range=">= azure-devops-2020"
> [!div class="mx-imgBorder"]  
> ![Boards>Backlogs>Drag-drop items onto sprint](media/about-boards/sprint-planning-issues-s155.png)  
::: moniker-end
::: moniker range="<= azure-devops-2019"
> [!div class="mx-imgBorder"]  
> ![Boards>Backlogs>Drag-drop items onto sprint](media/about-boards/sprint-planning-issues.png)  
::: moniker-end


#### [Scrum process](#tab/scrum-process) 

**Assign backlog items to a sprint**

::: moniker range=">= azure-devops-2020"
> [!div class="mx-imgBorder"]  
> ![Boards>Backlogs>Drag-drop items onto sprint](media/about-boards/scrum-assign-sprint.png)  
::: moniker-end
::: moniker range="<= azure-devops-2019"
> [!div class="mx-imgBorder"]  
> ![Boards>Backlogs>Drag-drop items onto sprint](media/about-boards/sprint-planning-issues.png)  
::: moniker-end


#### [CMMI process](#tab/cmmi-process) 

**Assign backlog items to a sprint**

::: moniker range=">= azure-devops-2020"
> [!div class="mx-imgBorder"]  
> ![Boards>Backlogs>Drag-drop items onto sprint](media/about-boards/cmmi-assign-sprint.png)  
::: moniker-end
::: moniker range="<= azure-devops-2019"
> [!div class="mx-imgBorder"]  
> ![Boards>Backlogs>Drag-drop items onto sprint](media/about-boards/cmmi-assign-sprint-on-prem.png)  
::: moniker-end


* * * 

To learn more, see one of the following articles:  
- [Assign work to sprints](../sprints/assign-work-sprint.md)  
- [Forecast work](../sprints/forecast.md)  
- [Set team capacity](../sprints/set-capacity.md)  
- [Bulk modify work items](../backlogs/bulk-modify-work-items.md).  


## Work effectively

You'll find you can work more effectively through these actions: 

- Organize work into a hierarchy by grouping issues under epics, and tasks under issues.
- Create queries and quickly triage issues and tasks. 
- Create work item templates to help contributors quickly add meaningful issues and tasks.  
- Quickly find work items that are assigned to you. Pivot or filter your work items based on other criteria, such as work items that you follow, that you're mentioned in, or that you viewed or updated.  


#### [Agile process](#tab/agile-process) 

**Group items to create a hierarchy**

::: moniker range=">= azure-devops-2020"
> [!div class="mx-imgBorder"]
> ![Backlogs, show parents](media/about-boards/agile-hierarchy-cloud.png)
::: moniker-end
::: moniker range="<= azure-devops-2019"
> [!div class="mx-imgBorder"]  
> ![Backlogs, show parents](media/about-boards/agile-hierarchy-with-header.png)  
::: moniker-end

#### [Basic process](#tab/basic-process) 

**Group items to create a hierarchy**

::: moniker range=">= azure-devops-2020"
> [!div class="mx-imgBorder"]
> ![Backlogs, show parents](media/about-boards/hierarchy-cloud.png) 
::: moniker-end
::: moniker range="<= azure-devops-2019"
> [!div class="mx-imgBorder"]
> ![Backlogs, show parents](media/about-boards/hierarchy.png) 
::: moniker-end

#### [Scrum process](#tab/scrum-process) 

**Group items to create a hierarchy**

::: moniker range=">= azure-devops-2020"
> [!div class="mx-imgBorder"]
> ![Backlogs, show parents](media/about-boards/scrum-hierarchy.png) 
::: moniker-end
::: moniker range="<= azure-devops-2019"
> [!div class="mx-imgBorder"]  
> ![Backlogs, show parents](media/about-boards/scrum-hierarchy-on-prem.png)  
::: moniker-end

#### [CMMI process](#tab/cmmi-process) 

**Group items to create a hierarchy**

::: moniker range=">= azure-devops-2020"
> [!div class="mx-imgBorder"]
> ![Backlogs, show parents](media/about-boards/cmmi-hierarchy.png) 
::: moniker-end
::: moniker range="<= azure-devops-2019"
> [!div class="mx-imgBorder"]  
> ![Backlogs, show parents](media/about-boards/cmmi-hierarchy-on-prem.png)  
::: moniker-end


* * * 

To learn more, see one of the following articles:  
- [Organize your backlog](../backlogs/organize-backlog.md)  
- [View and run queries](../queries/view-run-query.md)  
- [Triage work](../queries/triage-work-items.md)  
- [Use work item templates](../backlogs/work-item-template.md)  
- [View and add work items](../work-items/view-add-work-items.md).  



::: moniker range=">= azure-devops-2019"

## Connect Azure Boards to GitHub

If you use Azure Boards connected with GitHub, you can also do the following tasks:

- From GitHub, use #AB to link GitHub commits and pull requests to your issues and tasks.
- From Azure Boards issues and tasks, link to GitHub commits and pull requests.

To learn more, see [GitHub & Azure Boards](../github/index.md).  

::: moniker-end

## Best tool for the job

Azure Boards provides the following interactive lists and signboards. Each tool provides a filtered set of work items. All tools support viewing and defining work items. To learn more about effective use of these tools, see [Best tool to add, update, and link work items](../work-items/best-tool-add-update-link-work-items.md).   

::: moniker range=">= azure-devops-2019"

- [**Work items**](../work-items/view-add-work-items.md): Use to quickly find work items that are assigned to you. Pivot or filter work items based on other criteria. Other criteria includes work items that you follow, that you're mentioned in, or that you viewed or updated.
- [**Boards**](../boards/kanban-quickstart.md): Boards present work items as cards and support quick status updates through drag-and-drop. The feature is similar to sticky notes on a physical whiteboard. Use to implement Kanban practices and visualize the flow of work for a team.
- [**Backlogs**](../backlogs/create-your-backlog.md): Backlogs present work items as lists. A product backlog represents your project plan and a repository of all the information you need to track and share with your team. Portfolio backlogs allow you to group and organize your backlog into a hierarchy. Use to plan and organize work.  
- [**Sprints**](../sprints/assign-work-sprint.md): Sprint backlogs and taskboards provide a filtered view of work items a team assigned to a specific iteration path, or sprint. From your backlog, you can assign work to an iteration path by using drag-and-drop. You can then view that work in a separate *sprint backlog*. Use to implement Scrum practices.
- [**Queries**](../queries/view-run-query.md): Queries are filtered lists of work items based on criteria that you define by using a query editor. You use queries to support the following tasks:
	- Find groups of work items with something in common.
	- List work items for the purposes of sharing with others or doing bulk updates. Triage a set of items to organize or assign.
	- Create status and trend charts that you then can add to dashboards.  

::: moniker-end



::: moniker range="<= tfs-2018"

- [**Boards**](../boards/kanban-quickstart.md): Boards present work items as cards and support quick status updates through drag-and-drop. The feature is similar to sticky notes on a physical whiteboard. Use to implement Kanban practices and visualize the flow of work for a team.
- [**Backlogs**](../backlogs/create-your-backlog.md): Backlogs present work items as lists. A product backlog represents your project plan and a repository of all the information you need to track and share with your team. Portfolio backlogs allow you to group and organize your backlog into a hierarchy. Use to plan and organize work.  
- [**Sprints**](../sprints/assign-work-sprint.md): Sprint backlogs and taskboards provide a filtered view of work items a team assigned to a specific iteration path, or sprint. From your backlog, you can assign work to an iteration path by using drag-and-drop. You can then view that work in a separate *sprint backlog*. Use to implement Scrum practices.
- [**Queries**](../queries/view-run-query.md): Queries are filtered lists of work items based on criteria that you define by using a query editor. You use queries to support the following tasks:
	- Find groups of work items with something in common.
	- List work items for the purposes of sharing with others or doing bulk updates. Triage a set of items to organize or assign.
	- Create status and trend charts that you then can add to dashboards.  

::: moniker-end



<a id="scale" />

## Support independent, autonomous teams 

A team refers to a group of project members who work in a particular product area. Those areas are represented as *area paths*. Area paths are hierarchical paths that denote the possible areas of ownership in an organization. A team is defined by a name, its members, and its area paths.

Boards, Backlogs, Sprints rely on team configurations. For example, if you want to add a Kanban board or product backlog, you define a team. For more information on teams, see [About teams and Agile tools](../../organizations/settings/about-teams-and-settings.md).  

## Manage work across projects

Most work is tracked within a project. However, many enterprises create several projects to support their business needs as described in [Plan your organizational structure](../..//user-guide/plan-your-azure-devops-org-structure.md?toc=/azure/devops/boards/toc.json&bc=/azure/devops/boards/breadcrumb/toc.json). 


To track work across several projects, you can: 
- [Create work item queries that list work items across projects](../queries/using-queries.md#across-projects)
- [Gain visibility across teams](../plans/visibility-across-teams.md)

## Get access to more tools 

Extensions provide support for other tools. An extension is an installable software unit that adds new capabilities to your projects. Find extensions in the [Azure DevOps Marketplace](https://marketplace.visualstudio.com/azuredevops). Extensions can support planning and tracking of work items, sprints, scrums, and more and collaboration among team members.  

## Related articles

- [Agile culture](../plans/agile-culture.md)  
- [Practices that scale](../plans/practices-that-scale.md)  
- [About teams and Agile tools](../../organizations/settings/about-teams-and-settings.md)
