---
title: About work items | Team Services & TFS
description: Use the web portal to plan and track work  
ms.technology: vs-devops-agile-wit
ms.prod: vs-devops-alm
ms.assetid:  
ms.manager: douge
ms.author: kaelli
ms.topic: get-started-article 
ms.date: 08/03/2017
---

# About work items 

**Team Services | TFS 2017 | TFS 2015 | TFS 2013**  

You can use work items to track anything you need to track. 

Each work item represents an object stored in the work item data store. Each work item is assigned a unique identifier, an ID, which is unique within an account or project collection.  

## Work item types

To track different types of work, different work item types (WITs) are defined. The WITs available to you differ depending on the process or process template used to create your team project.  

For example, the following WITs are available to you when you choose the Agile team project. 

<img src="../guidance/_img/agile-process-plan-wits.png" alt="Agile process, WITs used to plan and track" style="border: 2px solid #C3C3C3;" />

To learn more about processes and process templates, see [Choose a process](../guidance/choose-process.md).

 
## Work item form 

Each work item supports tracking data contained in work item fields. Also, it captures changes as updates are made within the History field. 

Each form contains a number of controls as shown below and described in [Work item form controls](../concepts/work-item-form-controls.md). 

![Work item form to track features or user stories](../backlogs/_img/add-work-item-vsts-user-story-form.png)


<a id="assign-work-items"></a>
## Assign work items  to a team member

You can only assign a work item to one person at a time. The Assigned To field is person-name field designed to hold an account identity recognizable by VSTS or TFS. 

By default, the system synchronizes system-defined person-name fields with  Azure Active Directory (VSTS) or Active Directory (TFS). These fields include: Activated By, Assigned To, Closed By, Created By, and Resolved By. 

You can grant access to a team project by adding security groups that you created in AD or AAD or by adding accounts to existing or custom groups defined from the collection setting Security hub. See these topics for more information: 

- [Access with Azure Active Directory (Azure AD)](../../accounts/add-ts-users-to-aad.md) 
- [Set up groups for use in TFS deployments](../../tfs-server/admin/setup-ad-groups.md).

Anyone who has read-write access to a team project can assign work items to a team member. This includes team members and [stakeholders](../../quickstart/get-started-stakeholder.md).  

Within the work item form, such as the web form shown, click the Assigned To field to select a team member to assign the work item to. Or, you can begin typing the name of a team member to quickly focus your search to a select few. 

![Web work item form, Assign to field](../_shared/_img/assign-work-items.png)  

Note the following: 
- You can assign a work item only to team members recognized by the system, ones that you have added as team members 
- The default list of names available in the drop-down menu for the Assigned To field contains all user accounts added to the [Team Services account](../../accounts/add-team-members-vs.md) or [TFS team project](../../accounts/add-users.md). These accounts are all members of the Project Collection Valid Users group.  Also, these names are automatically synchronized with Azure Active Direct or Active Directory when AAD or AD is configured as part of the account (Team Services) or deployment (TFS).    
- Some drop-down menus that support assignment from the backlog or board pages in the web portal are automatically limited to team members 
- Over time, the drop-down menu of person-name fields will display most recently selected names  
- The system shows the display name and adds the account name when required to disambiguate identical display names  
- You can assign a work item to one and only one team member at a time. If work is split across two or more team members, then you should consider creating additional work items that you'll assign to each member responsible for the work to be completed  
- You can assign several work items at once from the backlog or query results, see [Bulk modify work items](../backlogs/bulk-modify-work-items.md) for details.  


>[!NOTE]  
>**On-premises TFS only**: To minimize the list of names that appear in the drop-down menus of person-name fields, you can scope the field to only those groups that you want to appear in the menu. You do this by adding one or more of the following child elements to the **FIELD** definition in the work item type definition: **ALLOWEDVALUES**, **PROHIBITEDVALUES**, and **VALIDUSER**. For details, see [Apply a field rule](../reference/apply-rule-work-item-field.md).


<a id="assign-to-sprint"></a>
## Assign work items to a sprint 

To schedule work items to be worked on during at specific time period, you assign the Iteration field. to learn more, see [Schedule sprints](../scrum/define-sprints.md). 

## Find or list work items 

You can use the search box to perform an adhoc search to find specific work items based on select field criteria. 

Or, you can create a query to perform a managed search which will list work items based on your query criteria. With manage searches you can perform a number of other tasks, such as to triage work items, create a trend or status chart and add to the dashboard, and more. 

To learn more, see these topics: 
- [Queries overview](../track/example-queries.md)  
- [Adhoc vs managed queries](../track/adhoc-vs-managed-queries.md)  
- [Managed queries](../track/using-queries.md)  
- [Charts](../../report/charts.md)  
- [Dashboards](../../report/dashboards.md)  

## Customize a WIT 

You can add or modify the fields contained within a WIT or add a custom WIT. The process you use depends on the process model in affect for your team project. 

To learn more, see [Customize your work tracking experience](../customize/customize-work.md#process-models). 


## Fill in work item fields quickly using work item templates 

With work item templates you can quickly create work items which have pre-populated values for your team's commonly used fields. For example, you can create a task template that will set the area path, iteration path, and discipline or activity whenever you use it to create a task.  

Based on the platform or version you use, you can perform the following tasks. 

<table width="85%">
<tr>
<th width="30%">Task </th>
<th width="15%" align="center" valign="bottom">Team Services</th>
<th width="15%" align="center" valign="bottom">TFS 2013, TFS 2015<br/>(web portal)</th>
<th width="15%" align="center" valign="bottom">TFS 2017<br/>(web portal)</th>
<th width="20%" align="center" valign="bottom">VS 2013, VS 2015 <br/>(with power tools <sup>1</sup>) </th>
</tr>

<tbody align="center" valign="top" style="font-size: 95%">

<tr>
<td align="left">[Capture a work item as a template](../productivity/work-item-template.md#capture)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
</tr>


<tr>
<td align="left">[Add a work item using a template](../productivity/work-item-template.md#add-wi)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
</tr>

<tr>
<td align="left">[Apply templates to work items](../productivity/work-item-template.md#apply)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td> </td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
</tr>

<tr>
<td align="left">[Manage work item templates](../productivity/work-item-template.md#manage)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td> </td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
</tr>
</tbody>
</table>


1. If you want to manage work item templates in Visual Studio 2013 or Visual Studio 2015, you can by downloading [Microsoft Visual Studio Team Foundation Server 2015 Power Tools](https://marketplace.visualstudio.com/items?itemName=TFSPowerToolsTeam.MicrosoftVisualStudioTeamFoundationServer2015Power) for free. With the Work Item Templates power tool add-in, you can:
	- Create and edit work item templates  
	- Create and update work items using a template  
	- Create a template from an existing work item  
	- Bulk-edit work items by applying a template  
	- Use templates created in Visual Studio to create work items through the Visual Studio client.  
	
>[!NOTE]  
><b>Feature availability: </b>Visual Studio 2015 is the last version in which you can install TFS power tools. You can use the Work Item Templates tool whenever you connect to Team Services or an on-premises TFS that is at TFS 2015 version or earlier. Templates you define through the power tool are separate from those defined through Team Services.    
 
 

## Try this next 

> [!div class="nextstepaction"]
> [Add a work item](/vsts/work/backlogs/add-work-items?toc=/vsts/work/work-items/toc.json&bc=/vsts/work/work-items/breadcrumb/toc.json)


### Required permissions

As a member added to the Contributors group of a team project, you can use most features provided under the **Work** hub. 

If you've been added with stakeholder access, you are limited to certain features. For details, see [Work as a Stakeholder](../../quickstart/get-started-stakeholder.md). 

To learn more about permissions and access, see [Permissions and access for work tracking](../permissions-access-work-tracking.md). 


<a id="clients"></a>  
### Clients that support tracking work items  
You can add work items from various clients, such as: 
- From the web portal backlog pages, you can add user stories, backlog items, features, and epics from the [quick add panel](../backlogs/create-your-backlog.md). 
- From the [Team Explorer add-in to Visual Studio](../../connect/work-team-explorer.md), you can add most types of work items from the Work page.  
- If you work in [Eclipse](https://eclipse.org/home/newcomers.php), you can create work items using [Team Explorer Everywhere](https://www.visualstudio.com/products/team-explorer-everywhere-vs). 
- From Test Manager or the web portal, you can can [create test cases that automatically link to a user story or product backlog item](../../manual-test/getting-started/create-test-cases.md).
- You can create bugs from the web portal, Visual Studio, or when [testing with Test Manager](https://msdn.microsoft.com/library/dd286731.aspx).  

For an overview of all clients that connect to your team project, see [Tools and clients that connect to Team Services and TFS](../../tools.md). 



 

 