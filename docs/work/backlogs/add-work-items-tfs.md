---
title: Add work items | TFS  
description: Add work items to plan and manage a software project when connected to a team project in Team Foundation Server  
ms.technology: vs-devops-agile-wit
ms.prod: vs-devops-alm
ms.topic: get-started-article  
ms.assetid: 982891A4-A875-478D-AD37-5A0915D11E00  
ms.manager: douge
ms.author: kaelli
ms.date: 03/16/2017
---

#Add work items to plan and track your project 

**TFS 2015 | TFS 2013**  

>[!IMPORTANT]   
><b>Feature availability: </b>The new web form provides many additional features. If you connect to Visual Studio Team Services or the web portal for TFS 2017 or later versions, see [Add work items to plan and track your project](add-work-items.md). 

You add work items to plan and manage your project. You use different types of  work items to track different types of work - such as tasks, features or user stories, test cases and bugs, risks or issues, and more. You can describe the work to be done, assign work, track status, and coordinate efforts within your team.  

Different types of work items are used to track features, user experiences, code defects, tasks, and issues. You can link work items to one another, as well as to changesets and source code files. As the following image shows, each work item form comes with a number of controls, fields, and tabs.

![Work item form to track features or user stories](_img/work-item-form-to-track-user-stories.png)

>[!NOTE]  
>Depending on the process you chose when creating your team project--[Scrum](../guidance/scrum-process.md), 
[Agile](../guidance/agile-process.md), or [CMMI](../guidance/cmmi-process.md)--the types of work items you can create will differ. For example, backlog items may be called product backlog items (PBIs), user stories, or requirements. All three are similar: they describe the customer value to deliver and the work to be performed.<br/>  
For an overview of all three processes, see [Choose a process](../guidance/choose-process.md). 
 


##Add work items to define new work
You can start adding work items once you connect to a team project. If you don't have a team project yet, create one in [Team Services](../../setup-admin/team-services/set-up-vs.md) or set one up in an [on-premises TFS](../../setup-admin/create-team-project.md).

Here we show how to add work items from the web portal. For additional clients that you can use, see [Clients that support tracking work items](#clients).

1. From a web browser, connect to the team project that you want to work in. For example, the Fabrikam, Inc. team navigates to ```http://fabrikamprime:8080/tfs/DefaultCollection/Fabrikam%20Fiber%20Website/```.  
	If you haven't been added as a team member, [get added now](../scale/multiple-teams.md#add-team-members).

2. From a team home page, you can choose the type of work item you want to create.  

	![Home page -  create work items](_img/work-items-tfs-team-home-page.png)  

	Work items you add are automatically scoped to your [team's area and iteration paths](../scale/multiple-teams.md). To change the team context, see [Switch team project or team focus](../how-to/switch-team-context-work.md)

3. Enter a title and then save the work item. Before you change the default State, you must save it.  

	![Product backlog item work item form](_img/work-items-pbi-form.png)  

	You can [add tags to any work item to filter backlogs and queries](../track/add-tags-to-work-items.md).

##Update work items as work progresses
As work progresses, team members can update the state and reassign it as needed. While the workflow states differ for different work item types, they usually follow a progression from New or Active to Completed or Done. The following image shows the work flow states for a product backlog item. If you want to discard a work item, change the state to Removed.  

<table>
<tbody valign="top">
<tr>
<td>
<p><b>Typical workflow progression:</b> </p> 
<ul>
<li>Create a product backlog item in the default state, New.</li>
<li>Change the state from New to Approved.</li>
<li>Change the state from Approved to Committed.</li>
<li>Change the state from Committed to Done.</li>
</ul>
<p><b>Atypical transitions:</b> </p> 
<ul>
<li>Change the state from New to Removed.</li>
<li>Change the state from Removed to New.</li>
<li>Change the state from Approved to Removed.</li>
<li>Change the state from Committed to Approved.</li>
<li>Change the state from Done to Committed.</li>
</ul>
</td>
<td>
![User story workflow, Agile process](_img/work-items-pbi-workflow.png)  
</td>
</tr>
</tbody>
</table>


Removed work items remain in the data store and can be reactivated by changing the State.  

With each update, changes are recorded in the History field which you can view through the **History** tab.  

![View change history](_img/work-items-view-change-history.png)  

To find work items based on their history, see [History & auditing](../track/history-and-auditing.md).  


<a id="link-wi">  </a>
##Link items to manage dependencies 
By linking work items using Related or Dependent link types, you can track work that is dependent on other work. Each work item contains one or more tabs with link controls. These controls support linking the work item to one or more objects.

**Link control tab from the web portal**  

![Link controls provided in a work item form](_img/work-items-link-controls.png)  

Some work item types have two or more link control tabs. Each tab is designed to support specific types of links and restricts the types of link relationships made. To learn more, see [Manage dependencies, link work items to support traceability](../track/link-work-items-support-traceability.md).  
  

##Related notes

Once you've added several work items, you can use additional features to get notified of changes, create queries, define status and trend charts, plus more. To customize a work item type, see [Customize your work tracking experience](../customize/customize-work.md). 


<div style="float:left;width:200px;margin:3px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Process guidance</p> 
- [Choose your process](../guidance/choose-process.md)  
- [Agile](../guidance/agile-process.md)   
- [Scrum](../guidance/scrum-process.md)  
- [CMMI](../guidance/cmmi-process.md)   
- [Work item field index](../guidance/work-item-field.md)    
</div>

<div style="float:left;width:240px;margin:3px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Manage</p> 
- [Create your backlog](create-your-backlog.md)  
- [Copy or clone a work item](copy-clone-work-items.md#copy-clone)   
- [Change, move, or delete a work item](remove-delete-work-items.md)   
- [Pre-populate fields using a template](../productivity/work-item-template.md)   
- [Integrate with Git](../backlogs/connect-work-items-to-git-dev-ops.md)   
- [Productivity tips](../productivity/productivity-tips.md)   
     
</div>

<div style="float:left;width:180px;margin:3px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Track</p>
- [Queries (work items)](../track/using-queries.md)    
- [Charts](../../Report/charts.md)   
- [Dashboards](../../Report/dashboards.md)   
- [Share work plans](../track/share-plans.md)   
- [Follow a work item](../../collaborate/follow-work-items.md)   
- [Alerts](../track/alerts-and-notifications.md)     
- [Tag work items](../track/add-tags-to-work-items.md)   
- [History & audit](../track/history-and-auditing.md)      
</div>


<div style="clear:left;font-size:100%">
</div>

<a id="clients"></a>  
###Clients that support tracking work items  
You can add work items from various clients, such as: 
- From the web portal backlog pages, you can add user stories, backlog items, features, and epics from the [quick add panel](create-your-backlog.md). 
- From the [Team Explorer add-in to Visual Studio](../../connect/work-team-explorer.md), you can add most types of work items from the Work page.  
- If you work in [Eclipse](https://eclipse.org/home/newcomers.php), you can create work items using [Team Explorer Everywhere](https://www.visualstudio.com/products/team-explorer-everywhere-vs). 
- From Test Manager or the web portal, you can can [create test cases that automatically link to a user story or product backlog item](../../test/manual-exploratory-testing/getting-started/create-test-cases.md).
- You can create bugs from the web portal, Visual Studio, or when [testing with Test Manager](https://msdn.microsoft.com/library/dd286731.aspx).  

For an overview of all clients that connect to your team project, see [Tools and clients that connect to Team Services and TFS](../../tools.md). 

###Plan your project
The quickest way to plan your project is to [create your backlog](../backlogs/create-your-backlog.md). If you have a number of product backlog items, user stories, requirements, or tasks that you want to bulk add, you can use [Excel](../office/bulk-add-modify-work-items-excel.md) or [Project](../office/create-your-backlog-tasks-using-project.md).

If you are planning a product suite and managing a portfolio of projects across several teams, you'll want to read (New) Manage work across the enterprise.

<!---
###Find or list work items based on select criteria
Type an ID in the Search work items box and then choose the search icon.  

![Seach work items text box](_img/add-work-items-search-box-id.png)

Use the ![context menu icon](../_img/icons/context_menu.png) context menu to add a filter based on [assignment, status, a keyword, or a work item type](../track/example-queries.md).  

Or, using the ![context menu icon](../_img/icons/context_menu.png) context menu, add filters to find items based on assignment, status, a keyword, or a work item type. For example, enter **A=@Me T=Task** to list all tasks assigned to you. Use the **=**, **:**, and **–** operators to specify the operations: Equals, Contains, and Not, respectively.  

Once you have a results list, you can [modify the filter criteria to refine your search results](../track/using-queries.md).
--> 

###Get the URL for a work item
From the web portal, simply copy the URL from the web browser address or open the context menu for the work item ID hyperlink and choose the Copy shortcut.  

In Visual Studio, right-click the work item tab to copy the URL. The URL opens the work item in the web portal.  

![Email a hyperlink for a work item](_img/add-work-items-copy-url-for-a-work-item.png)
