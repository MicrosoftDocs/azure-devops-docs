---
title: Quickstart guide to plan and track work 
titleSuffix: Azure Boards 
description: Begin planning and tracking work in your new team project on Azure Boards
ms.technology: devops-new-user 
ms.prod: devops
ms.assetid: 
ms.manager: douge
ms.author: kaelli
author: KathrynEE
ms.topic: quickstart
monikerRange: '>= tfs-2013'
ms.date: 09/05/2018  
---


# Plan and track work 

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

You add work items to plan and manage your project. You use different types of work items to track different types of work&mdash;such as user stories or product backlog items, tasks, bugs, or issues. You can describe the work to be done, assign work, track status, and coordinate efforts within your team.   

Here we show how to add work items from the web portal and view work items you've created. 

<a id="define-new-work">  </a>

## Prerequisites

You can start adding work items once you connect to a team project. If you don't have a team project yet, create one in [Azure DevOps](sign-up-invite-teammates.md).


## Open the Work Items page
You can start viewing and adding work items once you connect to a project. 

<a id="browser" /> 

> [!NOTE]
> The **New navigation** feature, which provides a vertical navigation experience, is in preview for Azure DevOps. [Go here to enable it](../../project/navigation/preview-features.md). When you enable **New navigation**, you automatically enable several new Agile tool features described in the [New Work Hubs](https://blogs.msdn.microsoft.com/devops/2018/06/22/new-work-hubs/) blog post. >
> For on-premises TFS users, choose **Previous navigation** for guidance. 

# [New navigation](#tab/new-nav)

(1) Check that you have selected the right project, then (2) choose **Boards>Work Items**. 

> [!div class="mx-imgBorder"]  
> ![Open Boards>Work Items, new navigation](/azure/devops/boards/work-items/_img/view-add/open-work-items-agile.png)

# [Previous navigation](#tab/previous-nav)

Open a browser window, choose **Work**, and then **Work Items**. 

> [!div class="mx-imgBorder"]
![Boards>Work Items ](/azure/devops/boards/work-items/_img/view-add/work-items-hub.png)

---

> [!NOTE]    
>Depending on the process chosen when the project was created&mdash;[Agile](/azure/devops/boards/work-items/guidance/agile-process-workflow), [Scrum](/azure/devops/boards/work-items/guidance/scrum-process-workflow), or [CMMI](/azure/devops/boards/work-items/guidance/cmmi-process-workflow)&mdash;the types of work items you can create will differ. For example, backlog items may be called user stories (Agile), product backlog items (Scrum), or requirements (CMMI). All three are similar: they describe the customer value to deliver and the work to be performed.
>
> For an overview of all three processes, see [Choose a process](/azure/devops/boards/work-items/guidance/choose-process). 


## Add a work item 

0. Adding a work item is just one click away. Simply choose the work item type from the **New Work Item** drop down menu.  

	For example, here we choose User Story. 

	> [!div class="mx-imgBorder"]
	> ![Boards>Work Items, Add a work item ](../work-items/_img/view-add/work-items-hub-new.png)
<!---
	> [!TIP]    
	> Work items you add are automatically scoped to the [Currently selected team's area and iteration paths](../../organizations/settings/set-team-defaults.md). To change the team context, see [Switch project or team focus](../../project/navigation/go-to-project-repo.md?toc=/azure/devops/boards/get-started/toc.json&bc=/azure/devops/boards/get-started/breadcrumb/toc.json). -->

0. Enter a title and then save the work item. Before you can change the State from its initial default, you must save it.  

	![Agile process, User story work item form](../backlogs/_img/add-new-work-item-vsts-user-story.png)  

	You can [add tags to any work item](../queries/add-tags-to-work-items.md) to filter backlogs, queries, and work item lists.

	That's it! 

Create as many work items as you need of the type you need to track the work you want to manage.  

<a id="pivot-views" />
## View the work items you've just created  

Using the drop-down menu, you can focus on relevant items inside a project using one of the seven pivots as described next. Additionally, you can [filter](#filter) and [sort](#sort) each pivot view.  

<table>
<tbody valign="top">
<tr>
<td>
![Boards>Work Items ](../work-items/_img/view-add/view-menu.png)
</td>
<td>
<ul>
<li>**Assigned to me**: lists all work items assigned to you in the project in the order they were last updated. To open or update a work item, simply click its title.</li>
<li>**Following**: lists work items that you've elected to [follow](../work-items/follow-work-items.md). </li>
<li>**Mentioned**: lists work items in which you've been mentioned in the last 30 days. </li>
<li>**My activity**: lists work items that you have recently viewed or updated.</li>
<li>**Recently updated**: lists work items recently updated in the project. </li>
<li>**Recently completed**: lists work items completed or closed in the project.</li>
<li>**Recently created**: lists work items created within the last 30 days in the project.</li>
</ul>
</td>
</tr>
</tbody>
</table>


For example, choose **My activity** to list all work items you've recently viewed, created, or modified. 

> [!div class="mx-imgBorder"]  
> ![Work>Work Items, Add a work item](_img/plan-track-work/view-work-item-activity.png)  

To view any work item listed, choose the title. 

For more information on using **Work Items**, see [View and add work items](../work-items/view-add-work-items.md).


## Try this next  
 
> [!div class="nextstepaction"]
> [Create your backlog](../backlogs/create-your-backlog.md)
> [Kanban quickstart](../boards/kanban-quickstart.md) 

Or, [learn more about planning and tracking work](../work-items/index.md).
 
