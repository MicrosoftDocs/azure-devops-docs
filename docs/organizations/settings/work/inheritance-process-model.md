---
title: About process customization and inherited processes 
titleSuffix: VSTS 
description: Describes work tracking customizations supported by the inherited process model for Visual Studio Team Services
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 
ms.manager: douge
ms.author: kaelliauthor: KathrynEE
ms.topic: conceptual 
monikerRange: 'vsts'
robots: NOINDEX, NOFOLLOW
ms.date: 05/30/2018
---




# About process customization and inherited processes  

[!INCLUDE [temp](../../../_shared/version-vsts-only.md)]

<a id=" inherited "> </a> 

To customize the work tracking system, you *customize* an inherited process through the administrative user interface for the account. All projects that use an inherited process, inherit the customizations made to that process. On the other hand, you *configure* your Agile tools&mdash;[Backlogs, Sprints, Kanban boards, and Taskboard](../../../settings/about-teams-and-settings.md)&mdash;for each team. 


There are a number of customizations you can make. The primary ones are adding custom work item types (WITs) or modifying an existing WIT to add custom fields, modify the layout, or change the workflow. 

<a id="what-you-can-customize">  </a>
Below you'll find an index to those tasks you can perform to customize an inherited process. Some options of inherited elements are locked and can't be customized.  

## System versus inherited processes 

You'll see two types of processes:

- ![locked icon](_img/process/locked-icon.png) System processes &mdash;[Scrum, Agile, and CMMI](../../../work/work-items/guidance/choose-process.md)&mdash;which are locked from being changed.   
- ![inherited icon](_img/process/inherited-process-icon.png) Inheritance processes, which you can customize and that inherit definitions from the system process from which they were created. System processes are owned and updated periodically by Microsoft. Any updates made to a system process will automatically update your inherited process. 

In addition, all processes are shared. That is, one or more projects can use a single process. Instead of customizing a single project, you customize a process. Changes made to the process automatically update all projects that use that process. 

Once you've created an inherited process, you can customize it, create projects based on it, make a copy of it, and change existing projects to use it. 

For example, as shown in the picture below, you see a list of  projects defined for the *fabrikam* account. The second column shows the process used by each project. To update the *Fabrikam Fiber* project, you need to update the *MyAgile* process (which inherits from the Agile system process). Any changes you make to the *MyAgile* process will also update the *Test Agile* project. You can't customize the *Scrum Project*, on the other hand, until you change it to a Scrum inherited process.

> [!div class="mx-imgBorder"]  
> ![Admin context, Account settings, Overview, Project list and the process they use](_img/process/mprocess-overview-project-list.png)


<a id="process-naming"></a>
### Process name restrictions  
Process names must be unique and 128 Unicode characters or less. Also, names can't contain the following characters: ```.,;'`:~\/\*|?"&%$!+=()[]{}<>```. 

To rename a process, open the &hellip; context menu for the process and choose **Edit**. 


## Inherited objects versus custom objects 

Each inherited process you create inherits the WITs defined in the system process&mdash;Agile, Scrum, or CMMI. For example, the Agile process provides bug, task, user story, feature, epic, issue and test-related WITs. 

![Agile work item types](../../../work/work-items/guidance/_img/ALM_PT_Agile_WIT_Artifacts.png)

You can add fields and modify the workflow and work item form for all inherited WITs that display on the **Work Item Types** page. If you don't want users to create a WIT, you can disable it. In addition, you can add custom WITs. 

<a id="field-customizations" />
## Field customizations 

Fields defined in the system process appear with an ![](_img/process/inherited-icon.png) inherited icon, indicating that you can make limited modifications to it in your inherited process. 

All fields defined for all processes are shared across all processes for the account. That means that any custom field you defined for a WIT in one process can be added to any other WIT defined for another process.   

> [!div class="mx-tdBreakAll"]  
> |![Inherited icon](_img/process/inherited-icon.png) Inherited fields |Custom fields |&nbsp;&nbsp;&nbsp;| 
> |-------------|----------|---------| 
> |- [Change the field label](../../../work/customize/process/customize-process-field.md#rename-field)<br/>- [Show/Hide field on form](../../../work/customize/process/customize-process-field.md#show-hide-field) |- [Add a custom field](../../../work/customize/process/customize-process-field.md#add-field)<br/>- [Add picklist (drop-down menu)](../../../work/customize/process/customize-process-field.md#pick-list)<br/>- [Add person-name/Identity](../../../work/customize/process/customize-process-field.md#identity)<br/>- [Add a rich-text (HTML) field](../../../work/customize/process/customize-process-field.md#html) <br/>- [Add a checkbox (Boolean) field](../../../work/customize/process/customize-process-field.md#boolean-field)<br/>- [Add a custom control](../../../work/customize/process/custom-controls-process.md) | - [Add custom rules to a field](../../../work/customize/process/custom-rules.md)<br/>- [Change the field label](../../../work/customize/process/customize-process-field.md#rename-field)<br/>- [Set Required/Default options](../../../work/customize/process/customize-process-field.md#options)<br/>- [Move the field within the layout](../../../work/customize/process/customize-process-form.md#move-field)<br/>- [Remove field from form](../../../work/customize/process/customize-process-field.md#remove-field)<br/>- [Delete field](../../../work/customize/process/customize-process-field.md#delete-field) | 

When adding custom fields, note the following limits:  
*   A maximum of 64 fields can be defined for each WIT  
*   A maximum of 512 fields can be defined per process   

In addition, you can [add an existing field](../../../work/customize/process/customize-process-field.md#add-existing-field) to another WIT within the process. For example, you can add Due Date to the user story or bug WITs.    

### What you can't customize 
- You can't change the field name or data type once you've defined it  
- With regards to picklists, you currently can't perform these operations:
	- Change the picklist of an inherited field, such as the Activity or Discipline field  
	- Change the picklist order, picklists display in alphabetic order
- Import or define a global list as supported by the Hosted XML and On-premises XML process models. To learn more, see [Define global lists](../../../work/customize/reference/define-global-lists.md).  

> [!NOTE]    
> With the inherited process, you can't modify the picklists of pre-defined fields&mdash;such as [Activity](../../../work/track/query-numeric.md), [Automation Status](../../../work/track/build-test-integration.md), [Discipline](../../../work/track/query-numeric.md), [Priority](../../../work/track/planning-ranking-priorities.md), plus others.  


### Configurable picklists 

The following picklists are configured for each project and not customizable through an inherited process.   
- [Area paths](../../../work/customize/set-area-paths.md)  
- [Iteration paths](../../../work/customize/set-iteration-paths-sprints.md)

Picklists associated with person-name fields are managed based on the users you add to a [team project or team](../../../security/add-users-team-project.md).   


<a id="rename-field">  </a>
### Can a field be renamed or its field type changed?   
Renaming a field or changing the field type aren't supported actions.  

However, you can change the label that appears for a field on the work item form from the Layout tab. When selecting the field in a query you need to select the field name and not the field label. 

[!INCLUDE [temp](../_shared/field-reference.md)] 

[!INCLUDE [temp](../_shared/fields-become-invalid-after-customization.md)] 



<a id="system-rules">  </a>
## Custom rules and system rules

Each WIT&mdash;bug, task, user story, etc.&mdash;has several system rules already defined. Some are simple, like making the Title field required or setting a default for the Value Area field. In addition, a number of system rules define actions to take when a workflow state changes. 

For example, several rules exist to copy the current user identity under the following conditions: 
- When a work item is modified, copy the user identity to the Changed By field  
- When a work item is modified, copy the user identity to the Changed By field
- When the workflow state changes to Closed or Done, copy the user identity to the Closed By field. 
 
> [!IMPORTANT]  
> Predefined system rules will take precedent over any custom rule that you define which would overwrite it.  

Custom rules provide support for a number of business use cases, allowing you to go beyond setting a default value for a field or make it required. Rules allow you to clear the value of a field, copy a value into a field, and apply values based on dependencies between different fields' values. 

With a custom rule, you can define a number of actions based on one or two conditions. For example, you can apply a rule to support these types of scenarios: 

- When a value is defined for Priority, then make Risk a required field 
- When a change is made to the value of Release, then clear the value of "Milestone"     
- When a change was made to the value of Remaining Work, then make Completed Work a required field
- When the value of Approved is True, then make Approved By a required field 
- When a user story is created, make make the following fields required: Priority, Risk, and  Effort

> [!TIP]    
> You can't define a formula using a rule. However, you may find a solution that fits your needs via the [TFS Aggregrator (Web Service) Marketplace extension](https://marketplace.visualstudio.com/items?itemName=tfsaggregatorteam.tfs-aggregator-web-service). See also [Rollup of work and other fields](../../../work/customize/reference/support-rollup-of-work-and-other-fields.md).

For details on defining custom rules, see [Add a rule to a work item type](../../../work/customize/process/custom-rules.md). 


## WIT customizations 

Here are your customization options for inherited and custom WITs. 

> [!div class="mx-tdBreakAll"]  
> |![Inherited icon](_img/process/inherited-icon.png) Inherited WITs | Custom WITs |&nbsp;&nbsp;&nbsp;| 
> |-------------|----------|---------| 
> |- [Add custom rules to a wit](../../../work/customize/process/custom-rules.md)<br/>- [Add/remove custom fields](../../../work/customize/process/customize-process-field.md)<br/>- [Add/remove custom groups](../../../work/customize/process/customize-process-form.md#groups)<br/>- [Add/remove custom pages](../../../work/customize/process/customize-process-form.md#pages)<br/>- [Add/remove a custom control](../../../work/customize/process/custom-controls-process.md) <br/>- [Enable/disable](../../../work/customize/process/customize-process-wit.md#enable-disable) |- [Add custom WIT](../../../work/customize/process/customize-process-wit.md#add-wit)<br/>- [Change color or description](../../../work/customize/process/customize-process-wit.md#overview)<br/>- [Add/remove custom fields](../../../work/customize/process/customize-process-field.md)<br/>- [Add/remove custom groups](../../../work/customize/process/customize-process-form.md#groups)<br/>- [Add/remove custom pages](../../../work/customize/process/customize-process-form.md#pages)<br/>- [Add/remove a custom control](../../../work/customize/process/custom-controls-process.md) |- [Add custom rules to a wit](../../../work/customize/process/custom-rules.md)<br/>- [Add, edit, or remove a workflow state](../../../work/customize/process/customize-process-workflow.md#states)<br/>- [Enable/disable](../../../work/customize/process/customize-process-wit.md#enable-disable)<br/>- [Delete](../../../work/customize/process/customize-process-wit.md#destroy) |  

**What you can't customize**  
- You can't add or remove an inherited WIT to or from a backlog  
- You can't change the position of an inherited field within the form layout
- You can't remove the inherited portfolio level from the product (but you can rename them)
- You can't change the name of a custom WIT. 
 

### Web form layout customizations 

The customizations you make to the web form only impact the work item forms displayed in a web browser. The work item forms displayed in Visual Studio or other [supported clients](../../../user-guide/tools.md) won't reflect any process customizations you make.   

> [!div class="mx-tdBreakAll"]  
> |![Inherited icon](_img/process/inherited-icon.png) **Inherited groups** |**Custom groups** |&nbsp;&nbsp;&nbsp;| 
> |-------------|----------|---------| 
> |- [Relabel](../../../work/customize/process/customize-process-form.md#groups)<br/>- [Add/remove custom fields](../../../work/customize/process/customize-process-field.md)<br/>- [Show/hide fields](../../../work/customize/process/customize-process-field.md#remove-field)<br/><br/>![Inherited field](_img/process/inherited-icon.png) **Inherited pages**<br/>- [Relabel](../../../work/customize/process/customize-process-form.md#pages)<br/>- [Add/remove custom fields](../../../work/customize/process/customize-process-field.md)<br/>- [Add/remove a custom group](../../../work/customize/process/customize-process-form.md#groups) |- [Add, modify, re-sequence, delete](../../../work/customize/process/customize-process-form.md#groups)<br/>- [Add/remove custom fields](../../../work/customize/process/customize-process-field.md)<br/>- [Add/Hide a group extension](../../../work/customize/process/custom-controls-process.md)<br/><br/>**Custom pages**<br/> - [Add, modify, re-sequence, delete](../../../work/customize/process/customize-process-form.md#pages)<br/>- [Add/delete custom fields](../../../work/customize/process/customize-process-field.md)<br/>- [Add/Hide a page extension](../../../work/customize/process/custom-controls-process.md) |    


<a id="resizing">  </a>  
### Layout and resizing 

The web form layout is organized into three columns as shown in the image below. 

![3 column page layout](_img/process/cpform-3-column-layout.png)

If you only add groups and fields to the first two columns, then the layout reflects a two column layout. Likewise, if you only add groups and fields to the first column, then the layout reflects a one column layout. 

The web form resizes depending on the width available and the number of columns in the layout.  At maximum width, in most web browsers, each column within a page will display within its own column. As the display width decreases, each column resizes proportionally as follows: 

- For three columns: 50%, 25%, and 25%  
- For two columns: 66% and 33%  
- For one column: 100%.  

When the display width won't accommodate all columns, columns appear stacked within the column to the left. 

## Workflow customizations

You customize the workflow for a WIT by adding a custom state. Each customizable WIT consists of three or more workflow states inherited from the system process. Inherited states differ based on the system process &mdash;[Agile](../../../work/work-items/guidance/agile-process.md), [Scrum](../../../work/work-items/guidance/scrum-process.md), or [CMMI](../../../work/work-items/guidance/cmmi-process.md)&mdash;you chose from which to create your custom process. 

> [!NOTE]    
> Before adding a workflow state, review [Workflow states and state categories](../../../work/customize/workflow-and-state-categories.md) to learn how workflow states are used to support several Agile tools. 

> [!div class="mx-tdBreakAll"]  
> |![Inherited icon](_img/process/inherited-icon.png) Inherited states |Custom states |
> |-------------|----------|
> |- [View workflow states](../../../work/customize/process/customize-process-workflow.md#hide-state)<br/>- [Hide a state](../../../work/customize/process/customize-process-workflow.md#hide-state) |- [Add a state](../../../work/customize/process/customize-process-workflow.md#add-states)<br/>- [Edit a state (change color or category)](../../../work/customize/process/customize-process-workflow.md#edit-state)<br/>- [Remove a state](../../../work/customize/process/customize-process-workflow.md#remove-state) |  

**What you can't customize**  
- You can't modify an inherited state (you can't change its name, color, or category)
- You can't hide an inherited state if it's the only one in its state category; you can replace an inherited state with a custom state    
- You can't change the name of a custom state 
- You can't add a custom state to the *Completed* category
- You can't change the order of states (states are listed in the order you add them within the States page, and they're listed  alphabetically within the drop down list of a work item form)  
- You can't specify a Reason for a state, instead, default reasons are defined such as Moved to state Triaged, Moved out of state Triaged 
- You can't specify allowed transitions, all transitions are defined from any state to another state (except to the Removed state).  


## Backlog and board customizations 

Backlogs and boards are essential Agile tools for creating and managing work for a team. The standard backlogs&mdash;product, iteration, and portfolio&mdash;inherited from the system process are fully customizable.  In addition, you can add two custom portfolio backlogs. 


> [!div class="mx-tdBreakAll"]  
> |Standard backlogs |Custom portfolio backlogs |
> |-------------|----------|
> |- [Add a custom WIT](../../../work/customize/process/customize-process-backlogs-boards.md)<br/>- [Change the default WIT](../../../work/customize/process/customize-process-backlogs-boards.md)<br/>- [Rename the requirement backlog](../../../work/customize/process/customize-process-backlogs-boards.md#edit-product-backlog)<br/>- [Rename a portfolio backlog](../../../work/customize/process/customize-process-backlogs-boards.md#edit-portfolio-backlog) |- [Add a portfolio backlog which displays custom WITs](../../../work/customize/process/customize-process-backlogs-boards.md#portfolio-backlogs)<br/>- [Edit or rename a portfolio backlog](../../../work/customize/process/customize-process-backlogs-boards.md#edit-portfolio-backlog)<br/>- [Delete the top-level custom portfolio backlog](../../../work/customize/process/customize-process-backlogs-boards.md#edit-portfolio-backlog) |


When you change the default WIT for a backlog level, it causes that WIT to appear by default in the quick add panel. For example, *Customer Ticket* appears by default in the following quick add panel for the product backlog. 

<img src="_img/process/process-backlog-boards-quick-add-panel.png" alt="Product backlog, Quick Add Panel, Displays Default WIT for a backlog level" style="border: 1px solid #C3C3C3;" /> 


**What you can't customize**  
- You can't add or remove an inherited WIT to or from a backlog, for example, you can't add the Issue WIT to the product backlog    
- You can't remove an inherited portfolio level from the product (but you can rename them)
- You can't insert a backlog level within the existing set of defined backlogs
- You can't reorder the backlog levels  
- You can't create a custom task level, although you can add custom WITs to the iteration backlog  
- You can't add the *Bug* WIT to any backlog level. Instead, the system allows each team to decide how they want to manage bugs. To learn more, see [Show bugs on backlogs and boards](../../../work/customize/show-bugs-on-backlog.md).


### Fields added to WITs associated with a backlog level 

When you add a WIT to a backlog level, the following fields are added to the WIT definition as hidden fields (that is, they don't appear on the work item form) to support select Agile tool features.  

| Backlog level | Fields added | 
|---------------|--------------|
| Portfolio backlog |- Stack rank (Agile, CMMI)<br/>- Backlog Priority (Scrum) | 
| Requirement backlog |- Stack Rank, Story Points (Agile)<br/>- Stack Rank, Size (CMMI)<br/>- Backlog Priority, Effort (Scrum) |
| Iteration backlog |- Activity, Remaining Work, Stack Rank (Agile)<br/>- Discipline, Remaining Work, Stack Rank (CMMI)<br/>- Activity, Remaining Work, Backlog Priority (Scrum) |

The Stack Rank and Backlog Priority fields capture the relative priority of work items as they are reordered on a backlog or board. For details on it's usage, see [Behind the scenes: the Backlog Priority or Stack Rank field](https://blogs.msdn.microsoft.com/devops/2014/05/14/behind-the-scenes-the-backlog-priority-or-stack-rank-field/). 

The Story Points, Size, and Effort fields capture the relative work required to complete a WIT assigned to the Requirement backlog. This value is used to compute [velocity](../../../report/dashboards/velocity-chart-data-store.md).  

And, lastly, Remaining Work is used [Sprint burndown and capacity charts](../../../work/scrum/define-sprints.md). 

## Object limits

For a list of limits placed on the number of fields, WITs, backlog levels, and other objects you can customize, see [Work tracking object limits](../../../work/customize/object-limits.md). 

 
