---
title: Agile tools and terms 
titleSuffix: VSTS & TFS
description: Key definitions for objects and items used to track work in Visual Studio Team Services & Team Foundation Server
ms.technology: devops-agile
ms.prod: devops
ms.assetid:  
ms.topic: conceptual
ms.manager: douge
ms.author: kaelli
ms.date: 09/06/2017
---

# Agile glossary 

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

The Microsoft Agile glossary is a short dictionary of terms used in tracking work using Agile tools on the Visual Studio Team Services (VSTS) and Team Foundation Server platforms. See also: 
- [Work item field index](guidance/work-item-field.md)   

<!--- 
<a id="object-definitions"></a>
## Definitions of key work tracking objects 

Your work tracking experience is managed and customized primarily through the objects defined in the following table. 
-->

## Agile methods
A family of engineering best processes with a goal of enabling rapid delivery of high-quality software and a business approach that aligns development with customer needs and company goals. In this paradigm, frequent inspection and adaptation is necessary, with teamwork, self-organization, and accountability all critical to project success.


## Agile tools
A suite of web-based tools used to track work and support Agile methodologies. Agile tools support the core Agile methods&mdash;Scrum and Kanban&mdash;used by software development teams today. Learn more: [About Agile tools and Agile project management](../backlogs/overview.md).

## Area path
A node on the Common Structure Services hierarchy that represents a feature area. Area paths allow you to group work items by team, product, or feature area. Whereas, iteration paths allow you to group work into sprints, milestones, or other event-specific or time-related period. The area path allows you to define a hierarchy of paths. Learn more: [About area and iteration paths](../customize/about-areas-iterations.md).

## Bug
A type of work item that records a potential source of dissatisfaction with the product. The common name of a work item type for tracking code defects.  

## Category
Groups one or more work item types to support flexible reporting, queries, and other functions made available through Agile tools. Categories support the process configuration used by the web portal backlog and task board pages. For example, you can add custom work item types to the Requirements category and manage them using the product backlog and Kanban boards. To learn more, see [Use categories to group work item types](../customize/reference/use-categories-to-group-work-item-types.md). 

## Delivery plan 
 
A configurable view that displays work from multiple teams and projects laid out within a calendar based on each team's iterations. Each row in the view represents the work from a team's product or portfolio backlog, with each card corresponding to a work item&mdash;user story, feature, or epic. Learn more: [Review team delivery plans](../scale/review-team-plans.md).

## Favorite 

A method for tagging an object to support quick navigation by yourself or other team members. You can tag work item queries and build definitions as personal and team favorites. Other objects you can favorite for youself only include code branches, delivery plans, test plans, and teams or team projects. Learn more: [Set personal or team favorites](../../project/navigation/set-favorites.md). 

## Field 
Supports tracking a piece of information about the work to perform. Values you assign to a field are stored in the work tracking data store which you can query and generate charts to view status and trends. Your team project contains 100 or more data fields. You update data by [modifying the data field within a work item](../backlogs/add-work-items.md). Each work item is associated with a work item type (WIT), and the data you can track corresponds to the fields assigned to the WIT. For a definition of each predefined field, see [Work item field index](guidance/work-item-field.md).   


## Follow 

A tool for tagging specific work items or pull requests for which you want to receive email updates when changes are made to them. Learn more: [Follow a work item or pull request](follow-work-items.md). 

## Global list 
Defines a list of menu items or pick list items that are shared across WITs and team projects within a team project collection. Global lists help to minimize the work that is required to update lists. You can define global lists within WITs that you upload with your process template. Learn more: [Manage global lists for work item types](../customize/reference/witadmin/manage-global-lists-for-work-item-types.md). (Only supported for Hosted XML and On-premises XML process models) 

## Global workflow 
Specifies both work item fields and global lists that multiple team projects and types of work items can share. Learn more: [Manage global workflow](../customize/reference/witadmin/witadmin-import-export-global-workflow.md) (Only supported for On-premises XML process model).   

<a id="hidden-types"> </a> 
## Hidden types categories  
Specifies the set of work item types that you don't want users to create manually. By default this set includes:   
-   [Code Review Request and Code Review Response](../../tfvc/day-life-alm-developer-suspend-work-fix-bug-conduct-code-review.md )    
-   [Feedback Request and Feedback Response](../../project/feedback/get-feedback.md)    
-   [Shared Steps and Shared Parameter](../../test/create-test-cases.md)    
-   [Test Plan and Test Suite](../../test/create-a-test-plan.md)  
  
You can use [TFS Team Project Manager](https://github.com/jelledruyts/TfsTeamProjectManager), an open-source client available from github to quickly determine which WITs belong to the Hidden Types Category. 

## Hosted XML process model 
The Hosted XML process model provides support for customizing work tracking objects and Agile tools for a team project by modifying and importing a process template. This process model is only available for select accounts hosted on the Visual Studio Team Services cloud platform.  To learn more, see [Hosted process model](../customize/hosted-xml-process-model.md).

## Inheritance process model 
The Inheritance process model provides support for customizing work tracking objects and Agile tools for a team project through the user interface. This process model is only available for accounts hosted on the Visual Studio Team Services cloud platform. Team projects inherit the customizations made to a process. To learn more, see [Inheritance process model](../../organizations/settings/work/inheritance-process-model.md).


## Iteration path
A node on the Common Structure Services hierarchy that represents a time period. Iteration paths allow you to group work into sprints, milestones, or other event-specific or time-related period. The iteration path allows you to define a hierarchy of paths. Learn more: [About area and iteration paths](../customize/about-areas-iterations.md).

## Kanban board 
An interactive, electronic sign board that supports visualization of the flow of work from concept to completion and lean methods. Learn more: [Kanban basics](../kanban/kanban-basics.md).

 
## Link type
Specifies an object used to form link relationships between different WITs. Learn more: [Link work items to support traceability and manage dependencies](../track/link-work-items-support-traceability.md) and [LinkTypes elements reference](../customize/reference/link-type-element-reference.md).  


## On-premises XML process model 
The On-premises XML process model provides support for customizing work tracking objects and Agile tools for a team project. With this model, you can update the XML definition of work item types, the process configuration, categories, and more. You can also update the attributes of fields. This process model is only available for on-premises TFS. To learn more, see [On-premises process model](../customize/on-premises-xml-process-model.md).


## Pick list

Specifies an enumerated set of values that appear within a drop-down menu in a work item form and the **Value** column within the query editor. The method you use to customize a pick list varies depending on the field and the process model.  


## Portfolio backlog 
An interactive list of work items, similar to the product backlog, that supports organizing or grouping work under features, epics, or scenarios. Portfolio backlogs work similarly to product backlogs in that you can prioritize work and view the tree hierarchy of work. Learn more: [Define features and epics](../backlogs/define-features-epics.md).    

## Process

Defines the building blocks of the work tracking system. To customize a process, you first create an inherited process from one of the default system processes&mdash;[Agile](guidance/agile-process.md), [Scrum](guidance/scrum-process.md), or [CMMI](guidance/cmmi-process.md). Changes you make to a process are seen by all team projects that use it. (Only supported for Inheritance process model)  

## Process configuration
Specifies the default configuration and functional capabilities that your teams can access using the Agile tools. These web portal tools include the product backlog, sprint backlogs, Kanban board, and task board. (Only supported for Hosted XML and On-premises XML process models)  

## Process model  
The work tracking customization method supported by your account or collection. One of three process models are supported, Inheritance and Hosted XML for VSTS and On-premises XML for on-premises TFS. Learn more: [Customize your work tracking experience](../customize/customize-work.md) 

## Process template
Specifies an inter-related set of files that contain the XML definitions for tracking work and defining the initial configuration of other functional areas. The system provides three default process templates&mdash;[Agile](guidance/agile-process.md), [Scrum](guidance/scrum-process.md), or [CMMI](guidance/cmmi-process.md). You can create a team project and then customize it, or customize a process template that you then use to create a team project. (Only supported for Hosted XML and On-premises XML process models) 

## Product backlog 
An interactive list of work items that corresponds to a team's project plan or roadmap for what the team plans to deliver. The product backlog supports prioritizing work, forecasting work by sprints, and quickly linking work to portfolio backlog items. You can define your backlog items and then manage their status using the Kanban board. 

Each product backlog can be customized by a team. Learn more: [Create your backlog](../backlogs/create-your-backlog.md).   

## Product backlog item
A type of work item that defines the applications, requirements, and elements that teams plan to create. Product owners typically define and stack rank product backlog items which are defined with the Scrum process.  Learn more: [Scrum process work item types and workflow](guidance/scrum-process-workflow.md).   



## Query 

A named set of criteria that supports finding and listing a list of work items. Learn more: [Define a work item query](../track/using-queries.md).    

## Sprint backlog 
An interactive list of work items that have been assigned to the same sprint or iteration path for a team. The sprint backlog supports teams that use Scrum methodologies. Learn more: [Sprint planning](../scrum/assign-work-sprint.md).  

## Task board 
An interactive board of work items that support reviewing and updating tasks defined for the sprint backlog. The task board supports teams that use Scrum methodologies. Learn more: [Task board](../scrum/task-board.md). 


## Team 
With teams, enterprises can sub-categorize work to better focus on all the work they're tracking within a team project. Each team gets access to a suite of Agile tools and team assets. These tools provide teams the ability to work autonomously and collaborate with other teams across the enterprise. Each team can configure and customize each tool to meet their work requirements. Learn more: [About teams and Agile tools](../../organizations/settings/about-teams-and-settings.md?toc=/vsts/work/scale/toc.json&bc=/vsts/work/scale/breadcrumb/toc.json). 

## Team project

A repository for source code and a place for a group of developers and teams to plan, track progress, and collaborate on building software solutions. A team project resides within a VSTS account or TFS team project collection. It provides support for focusing on those objects defined within the team project. Learn more: [Create a team project](../../organizations/accounts/create-team-project.md).   

## User story
A type of work item that defines the applications, requirements, and elements that teams plan to create. Product owners typically define and stack rank user stories. User story is defined with the Agile process.  Learn more: [Agile process work item types and workflow](guidance/agile-process-workflow.md).   

## Widget 
Widgets display information and charts on dashboards. Many of them are configurable and display information available from one or more data stores or charts created by the system. Learn more: [Widget catalog](../../report/widget-catalog.md).


## Work item type (WIT) 

Specifies the fields, workflow, and form used to track an item of work. Each WIT is associated with 30+ system fields and several more type-specific fields. You use work items to plan and track the work required to develop your project. For an overview of predefined WITs provided with the default processes, see [Choose a process](guidance/choose-process.md).  

## Workflow 

Workflow is an integral aspect of a work item and is defined by it's corresponding work item type. The workflow determines the logical progression and regression of work items, tracking the status of work as it progresses from a New or Active state to Closed or Completed state. It also specifies the values that appear in the drop-down menus for the State and Reason fields. Learn more: [Workflow states and state categories](../customize/workflow-and-state-categories.md).


<!--- SEE ALSO https://msdn.microsoft.com/en-us/library/ms243130(v=vs.100).aspx --> 


<!---
To add fields or customize a work item form, see [Customize your work tracking experience](../customize/customize-work.md). The method you use depends on the process model that supports your team project.  

-->
