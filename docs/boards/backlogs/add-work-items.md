---
title: Add work items
titleSuffix: Azure Boards and TFS 
ms.global_help.title: View & add work items
ms.global_help.keywords: ms.vss-work-web.work-items-hub, 2 
description: Add work items to plan and manage a software project using Agile tools, Scrum, or Kanban when connected to a project in Azure Boards or Team Foundation Server  
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 9474A25E-A9D8-433D-8370-C94624B4ACD6  
ms.manager: douge
ms.author: kaelli
author: KathrynEE
ms.topic: quickstart
ms.date: 09/19/2018
---

::: moniker range=">= tfs-2017"
# Add, update, and follow a work item 
::: moniker-end
::: moniker range=">= tfs-2013 <= tfs-2015"
# Add and update a work item
::: moniker-end 

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

You add work items to plan and manage your project. You use different types of work items to track different types of work&mdash;such as user stories or product backlog items, tasks, bugs, or issues. You can describe the work to be done, assign work, track status, and coordinate efforts within your team.   

[!INCLUDE [temp](../_shared/prerequisites.md)]

::: moniker range=">= tfs-2017"

<a id="define-new-work">  </a>
## Add a work item 
You can start adding work items once you connect to a project. 

Here we show how to add work items from the web portal. 

1.  From **Work**, choose the work item type from the New Work Item list of options. Here, we choose to create a User Story. 

	<img src="_img/add-work-items-choose-user-story.png" alt="Add a work item" style="border: 1px solid #C3C3C3;" /> 

	> [!NOTE]  
	>Depending on the process chosen when the project was created&mdash;[Agile](../work-items/guidance/agile-process.md), [Scrum](../work-items/guidance/scrum-process.md), 
	or [CMMI](../work-items/guidance/cmmi-process.md)&mdash;the types of work items you can create will differ. For example, backlog items may be called user stories (Agile), product backlog items (Scrum), or requirements (CMMI). All three are similar: they describe the customer value to deliver and the work to be performed.
	>
	> For an overview of all three processes, see [Choose a process](../work-items/guidance/choose-process.md). 
	
	Click the ![pin icon](../_img/icons/pin-icon.png) pin icon to have it show up within **Work** drop down menu. 

3. Enter a title and then save the work item. Before you can change the State from its initial default, you must save it.  

	<img src="_img/add-new-work-item-vsts-user-story.png" alt="Agile process, User story work item form" style="border: 1px solid #C3C3C3;" />  

	You can [add tags to any work item to filter backlogs and queries](../queries/add-tags-to-work-items.md).

	Work items you add are automatically scoped to your [team's area and iteration paths](../../organizations/settings/set-team-defaults.md). To change the team context, see [Switch project or team focus](../../project/navigation/go-to-project-repo.md?toc=/azure/devops/boards/work-items/toc.json&bc=/azure/devops/boards/work-items/breadcrumb/toc.json).

That's it! 

Create as many work items as you need of the type you need to track the work you want to manage.  
::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2015"
## Add work items
You can start adding work items once you connect to a project. Here we show how to add work items from the web portal. For additional clients that you can use, see [Clients that support tracking work items](../work-items/about-work-items.md#clients).

1. From a web browser, connect to the project that you want to work in. For example, the Fabrikam, Inc. team navigates to ```http://fabrikamprime:8080/tfs/DefaultCollection/Fabrikam%20Fiber%20Website/```.  

2. From a team home page, you can choose the type of work item you want to create.  

	![Home page -  create work items](_img/work-items-tfs-team-home-page.png)  

	Work items you add are automatically scoped to your [team's area and iteration paths](../../organizations/settings/add-teams.md). To change the team context, see [Switch project or team focus](../../project/navigation/go-to-project-repo.md?toc=/azure/devops/boards/plans/toc.json&bc=/azure/devops/boards/plans/breadcrumb/toc.json)

3. Enter a title and then save the work item. Before you change the default State, you must save it.  

	![Product backlog item work item form](_img/add-work/work-items-pbi-form-caption.png)  

	You can [add tags to any work item to filter backlogs and queries](../queries/add-tags-to-work-items.md).

::: moniker-end


## Update work items as work progresses
As work progresses, team members can update the state and reassign it as needed. While the workflow states differ for different work item types, they usually follow a progression from New or Active to Completed or Done. 

::: moniker range=">= tfs-2017"
> [!div class="mx-imgBorder"]  
> ![Update the State of a User Story](_img/add-work/update-state.png)   
::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2015"
Note that the location of the State field may differ depending on the work item type you are updating. 
> [!div class="mx-imgBorder"]  
> ![Update the State of an Issue](_img/add-work/update-state-old-form.png)   
::: moniker-end

::: moniker range="vsts"
The following image shows the work flow states for a product backlog item. If you want to discard a work item, change the state to Removed, or you can delete it. For details, see [Move, change, or remove a work item](remove-delete-work-items.md).       
::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2018"
The following image shows the work flow states for a product backlog item. If you want to discard a work item, change the state to Removed, or you can delete it. For details, see [Remove or delete a work item](remove-delete-work-items.md).       
::: moniker-end


<table>
<tbody valign="top">
<tr>
<td>
<p><b>Typical workflow progression:</b></p>
<ul>
<li>Create a product backlog item in the default state, New.</li>
<li>Change the state from New to Approved.</li>
<li>Change the state from Approved to Committed.</li>
<li>Change the state from Committed to Done.</li>
</ul>
<p><b>Atypical transitions:</b></p>
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

::: moniker range=">= tfs-2017"
![View change history](_img/add-work-item-history.png)  
::: moniker-end
::: moniker range=">= tfs-2013 <= tfs-2015"
![View change history](_img/work-items-view-change-history.png)  
::: moniker-end

To find work items based on their history, see [History & auditing](../queries/history-and-auditing.md).  

[!INCLUDE [temp](../_shared/discussion-tip.md)] 

::: moniker range=">= tfs-2017"
## Follow a work item

When you want to track the progress of a single work item, click the ![Follow icon](../_img/icons/follow-icon.png) icon. This signals the system to notify you when changes are made to the work item.   

<img src="_img/follow-work-item.png" alt="Work item form, Follow icon control" style="border: 1px solid #CCCCCC;" />  

You'll only receive notifications when other members of your team modifies the work item, such as adding to the discussion, changing a field value, or adding an attachment. 

Notifications are sent to your preferred email address, which [you can change from your user profile](../../notifications/change-email-address.md).  

To stop following changes, click the ![Following icon](../_img/icons/following-icon.png)  icon.
 
::: moniker-end

::: moniker range=">= tfs-2017 <= tfs-2018"

> [!IMPORTANT]
>To support the Follow feature, [you must configure an SMTP sever](/tfs/server/admin/setup-customize-alerts) in order for team members to receive notifications.  

::: moniker-end

## Try this next  

From **Work** you can add the most common types of work items. To quickly add backlog items, such as user stories or requirements, see these topics:  
> [!div class="nextstepaction"]
> [Create your backlog](create-your-backlog.md)
> [Kanban quickstart](../boards/kanban-quickstart.md) 


For descriptions of each field and work item form control, see [Work item field index](../work-items/guidance/work-item-field.md?toc=/azure/devops/boards/work-items/toc.json&bc=/azure/devops/boards/work-items/breadcrumb/toc.json ) and [Work item form controls](../work-items/work-item-form-controls.md?toc=/azure/devops/boards/work-items/toc.json&bc=/azure/devops/boards/work-items/breadcrumb/toc.json ).  


Once you've added several work items, you can use additional features to get [notified of changes](../../notifications/howto-manage-personal-notifications.md), [create queries](../queries/using-queries.md), [define status and trend charts](../../report/dashboards/charts.md), plus more.  

For additional clients that you can use to add work items, see [Clients that support tracking work items](../../user-guide/tools.md?toc=/azure/devops/boards/work-items/toc.json&bc=/azure/devops/boards/work-items/breadcrumb/toc.json).

