---
title: Agile glossary | Team Services & TFS
description: Key definitions for objects and items used to track work - Visual Studio Team Services (VSTS) and Team Foundation 
ms.technology: vs-devops-agile-wit
ms.prod: vs-devops-alm
ms.assetid: 0AB288EB-EB98-4AB4-98C0-50E7ACE64153
ms.manager: douge
ms.author: kaelli
ms.topic: get-started-article  
ms.date: 06/22/2017
---


<a id="object-definitions"></a>
### Definitions of key work tracking objects 

Your work tracking experience is managed and customized primarily through the objects defined in the following table. 

| Object | Definition | 
|--------|------------|
|Category| Defines groups that associate a type of work item with a category. Categories support the process configuration used by the web portal backlog and task board pages. For example, you can add custom work item types to the Requirements category and manage them using the product backlog and Kanban boards. To learn more, see [Use categories to group work item types](../reference/use-categories-to-group-work-item-types.md). | 
|Field |Supports tracking a piece of information about the work to perform. Values you assign to a field are stored in the work tracking data store which you can query and generate charts to view status and trends. Your team project contains 100 or more data fields. You update data by [modifying the data field within a work item](../backlogs/add-work-items.md). Each work item is associated with a work item type (WIT), and the data you can track corresponds to the fields assigned to the WIT. For a definition of each predefined field, see [Work item field index](../guidance/work-item-field.md).  | 
|Global list | Defines a list of menu items or pick list items that are shared across WITs and team projects within a team project collection. Global lists help to minimize the work that is required to update lists. You can define global lists within WITs that you upload with your process template. To learn more, see [Manage global lists for work item types](../reference/witadmin/manage-global-lists-for-work-item-types.md). (Only supported for Hosted XML and On-premises XML process models)| 
|Global workflow |  Specifies both work item fields and global lists that multiple team projects and types of work items can share. To learn more, see [Manage global workflow](../reference/witadmin/witadmin-import-export-global-workflow.md) (Only supported for On-premises XML process model). | 
|Link type |  Specifies an object used to form link relationships between different WITs. To learn more about link relationships and link types, see [Link work items to support traceability and manage dependencies  ](../track/link-work-items-support-traceability.md) and [LinkTypes elements reference](../reference/link-type-element-reference.md). |
|Pick list |  Specify an enumerated set of values that appear within a drop-down menu in a work item form and the **Value** column within the query editor. The method you use to customize a pick list varies depending on the field and the process model.  |
|Process | Defines the building blocks of the work tracking system. To customize a process, you first create an inherited process from one of the default system processes&mdash;[Agile](../guidance/agile-process.md), [Scrum](../guidance/scrum-process.md), or [CMMI](../guidance/cmmi-process.md). Changes you make to a process are seen by all team projects that use it. (Only supported for Inheritance process model) |
|Process configuration | Specifies the default configuration and functional capabilities that your teams can access using the Agile tools. These web portal tools include the product backlog, sprint backlogs, Kanban board, and task board. (Only supported for Hosted XML and On-premises XML process models) |  
|Process template | Specifies an inter-related set of files that contain the XML definitions for tracking work and defining the initial configuration of other functional areas. The system provides three default process templates&mdash;[Agile](../guidance/agile-process.md), [Scrum](../guidance/scrum-process.md), or [CMMI](../guidance/cmmi-process.md). You can create a team project and then customize it, or customize a process template that you then use to create a team project. (Only supported for Hosted XML and On-premises XML process models) |
|Work item type (WIT) | Specifies the fields, workflow, and form used to track an item of work. Each WIT is associated with 30+ system fields and several more type-specific fields. You use work items to plan and track the work required to develop your project. For an overview of predefined WITs provided with the default processes, see [Choose a process](../guidance/choose-process.md).  | 


<!--- SEE ALSO https://msdn.microsoft.com/en-us/library/ms243130(v=vs.100).aspx --> 


### Replace team area path with a team field (On-premises TFS)  
The default configuration for team projects associates each team with an area path. If your organization has several teams that work from a common backlog and across many product areas, this configuration might not fit how you want to organize your work. By adding a custom field to represent teams in your organization, you can reconfigure the agile planning tools and pages to support your teams and decouple assignment to teams and area paths.

[Use team fields instead of area paths to support teams](../customize/use-team-fields-instead-area-paths.md) describes how to change the default configuration.

<!--- Add definitions for these 
release 
team 

--> 