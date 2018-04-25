---
title: Create your backlog 
titleSuffix: VSTS & TFS
description: Add items, plan your project, order/prioritize, and estimate your backlog of deliverables in Visual Studio Team Services & Team Foundation Server   
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 04df6b31-ef6c-4285-81a6-96768f03ecf4
ms.manager: douge
ms.author: kaelli
author: KathrynEE
ms.topic: quickstart
ms.date: 03/20/2018
---

# Create your backlog

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

Your product backlog corresponds to your project plan, the roadmap for what your team plans to deliver. 
Once defined, you have a prioritized list of features and requirements to build. Your backlog also provides a 
repository of all the information you need to track and share with your team.

Your backlog consists of a list of [work items](add-work-items.md). 
You use work items to share information, assign work to team members, track dependencies, organize work, 
and more. Because the most important work appears at the top of the list, your team always knows what to work on next.

[!INCLUDE [temp](../_shared/prerequisites.md)]

## Open your backlog from the web portal

From your web browser, open your product backlog from the **Work** hub, **Backlogs** page.  
 
::: moniker range="vsts || >= tfs-2017 <= tfs-2018"
!["Web portal, choose Work hub, Backlogs](_img/cyb-open-backlog-tfs-2017.png)
::: moniker-end
::: moniker range=">= tfs-2013 <= tfs-2015"
![Work hub, backlogs, TFS 2015, 2013 web portal](_img/backlogs-boards-plans/open-backlog-tfs-2015.png)
::: moniker-end

::: moniker range="vsts || >= tfs-2017 <= tfs-2018"
> [!TIP]    
> If you don't see the team or team project you want, click the ![VSTS icon](../_img/icons/project-icon.png) icon to [browse all team projects and teams](../../user-guide/account-home-pages.md). 
::: moniker-end

<!---

The URL follows this pattern: ```https://<account name>.visualstudio.com/DefaultCollection/<project name>/_backlogs```  
 
### TFS
<img src="_img/cyb-open-backlog-tfs-2015.png" alt="Open the backlog" style="border: 1px solid #C3C3C3;" />  

The URL follows this pattern:
```http://{server}:8080/tfs/DefaultCollection/{project name}/_backlogs```

If you don't see the team or team project you want, open the team project/team drop-down menu and select the team project/team that you've recently visited, or choose **Browse all** to browse all team projects and teams. 

<img src="../_shared/_img/switch-team-project-2.png" alt="Choose another team from the team project menu" style="border: 1px solid #C3C3C3;" /> 

Building your backlog starts by quickly capturing the requirements you want for your product. If you don't have a team project yet, create one in [VSTS](../../accounts/set-up-vs.md) or set one up in an [on-premises TFS](../../accounts/create-team-project.md).    

-->

## Convert ideas into backlog items or stories
Begin building your backlog by entering a title and click **Add**. If you don't see the **Add** link, click New to open the quick add panel. Repeat this step until you've captured all your main ideas. 

> [!TIP]  
> Your backlog shows work that you are planning to do or have started working on. As soon as the State of a work item is set to Done or Completed, the work item no longer shows up on your backlog. You can use the [backlog controls](product-backlog-controls.md) to filter or change your view.     
  
<img src="_img/create-backlog-add-new-items-ts.png" alt="Add work items to the backlog" style="border: 1px solid #C3C3C3;" />  


> [!NOTE]  
>Depending on the process chosen to create your team project&mdash;[Agile](../work-items/guidance/agile-process.md), [Scrum](../work-items/guidance/scrum-process.md), or [CMMI](../work-items/guidance/cmmi-process.md)&mdash;
the items in your backlog may be called product backlog items (PBIs), user stories, or requirements. All three are similar: they describe the customer value to be delivered and the work to be performed.   
>
>By default, PBIs and bugs appear on Scrum backlogs, user stories on Agile backlogs, and requirements on CMMI backlogs. Each team can choose how [bugs show up on their backlogs and boards](../customize/show-bugs-on-backlog.md). 

<a id="move-items-priority-order">  </a>
## Move items into priority order
After you've got some items on your backlog, you can order them and create a prioritized list of work. Frequently reviewing and prioritizing your backlog can help your team know what's most important to deliver next.

Reorder your backlog by simply dragging work items. Or, if you prefer the keyboard, hold the Alt key  and use the up and down arrows.

<img src="_img/cyb-order-backlog.png" alt="Reorder work items" style="border: 1px solid #C3C3C3;" />  


> [!TIP]  
>You can't sort your backlog on a column. If you want to view a sorted listed, click **Create query**, save and open the query, and then sort the query results. To learn more about queries, see [Use the query editor to list and manage queries](../track/using-queries.md).


<a id="estimates">  </a>
## Add details and estimates
Getting your backlog built and prioritized provides the high level roadmap. 
However, before your team can actually start work on any item, they'll need 
more details. You capture these details within the work item form.

> [!TIP]  
>To plan a sprint, at a minimum you should estimate the effort involved to implement each backlog item. You capture effort in the following fields within the work item form: Effort (Scrum), Story Points (Agile), or Size (CMMI) fields. 

Open each item (double-click, or press Enter to open the selected item) and add all the info you want to track. Enter as much detail as the team needs to understand the scope, estimate the work required, develop tests, and ensure that the end product meets acceptance criteria.  

<!---

> [!NOTE]  
><b>Feature availability: </b>From the web portal for VSTS and TFS 2017, you'll have access to the [new form with the new work tracking experience](../backlogs/add-work-items.md). For TFS 2015 and earlier versions, the old form is supported.   
	

<p>For details on adding work items using the new form, see [add work items](add-work-items.md).</p>  

<img src="_img/cyb-product-backlog-form-ts.png" alt="Product backlog item- VSTS - Add details to a work item" style="border: 1px solid #C3C3C3;" />  
 
<p>For details on adding work items using the old form, see [add work items (TFS)](add-work-items.md).</p>  

<img src="_img/ALM_CB_CreateWorkItem.png" alt="Product backlog item - TFS - Add details to a work item" style="border: 1px solid #C3C3C3;" />   
-->

<table valign="top" width="100%">
<tbody valign="top" >
<tr>
<th width="16%">Field</th>
<th width="84%">Usage</th>
</tr>
<tr>
<td>[Effort](../track/query-numeric.md)<br/>
[Story Points](../track/query-numeric.md)<br/>
[Size](../track/query-numeric.md)</td> 
<td>
<a name="estimates"></a>
<p>Provide a relative estimate of the amount of work required to complete a PBI. For user stories and requirements, you capture estimates in the Story Points and Size fields.</p> 
<p>Most Agile methods recommend setting estimates for backlog items based on relative size of work. Such methods include powers of 2 (1, 2, 4, 8) and the Fibonacci sequence (1, 2, 3, 5, 8, etc.). Use any numeric unit of measurement your team prefers. </p>
<p>The estimates you set for Effort, Size, or Story Points are used in calculating [velocity](../../report/dashboards/velocity-chart-data-store.md) and [forecasting sprints](../scrum/forecast.md).</p>
</td> 
</tr>

<tr>
<td>[Business Value](../track/query-numeric.md)</td> 
<td>Specify a priority that captures the relative value of a PBI compared to other PBIs. The higher the number, the greater the business value.<br />Use this field when you want to capture a priority separate from the changeable backlog stack ranking.</td> 
</tr>

<tr>
<td>[Description](../track/titles-ids-descriptions.md)</td> 
<td>Provide enough detail to create shared understanding of scope and to support estimation efforts. Focus on the user, what they want to accomplish, and why. Don't describe how to develop the product. Do provide sufficient details so that your team can write tasks and test cases to implement the item.</td> 
</tr>

<tr>
<td>[Acceptance Criteria](../track/titles-ids-descriptions.md) </td> 
<td><p>Define what "Done" means by describing the criteria that the team should use to verify whether the PBI or the bug fix has been fully implemented.</p>
<p>Before work begins on a PBI or bug, describe the [criteria for customer acceptance](best-practices-product-backlog.md#acceptance) as clearly as possible. Conversations between the team and customers to determine the acceptance criteria help ensure a common understanding within the team to meet customers' expectations. Also, this info provides the basis for acceptance testing.</p></td> 
</tr>

</tbody>
</table>
 

## Try this next
Now that you've got a working backlog in place, your team can begin work on the top priority items. From here, it's time to make the decision on how you want to work as a team: Scrum or Kanban? You can use these methods independently or together.

> [!div class="nextstepaction"]
> [Scrum: Schedule sprints](../scrum/define-sprints.md) or [Kanban](../kanban/kanban-quickstart.md) 

Teams that want the least overhead in terms of tracking and estimating may prefer Kanban. Teams that like to work at a steady cadence and plot the details of their sprint plan may prefer Scrum and sprint planning.

<!---
With [Kanban](../kanban/kanban-basics.md), teams focus on the flow of work from start to finish - limiting work in progress in order to optimize flow and deliver the highest priority items as quickly as possible.

With [Sprint planning](../scrum/sprint-planning.md), teams define a sprint schedule: a time-boxed set of periods for planning and developing. Using the sprint backlog, they plan their sprints by assigning items to the sprint and defining the tasks required to develop each item. Task boards, capacity charts, and sprint burndown charts all help to keep the team aware of progress throughout the sprint cycle.
-->

> [!NOTE]  
>Depending on the process chosen to create your team project&mdash;[Agile](../work-items/guidance/agile-process.md), [Scrum](../work-items/guidance/scrum-process.md), or [CMMI](../work-items/guidance/cmmi-process.md)&mdash;
the items in your backlog may be called product backlog items (PBIs), user stories, or requirements. All three are similar: they describe the customer value to be delivered and the work to be performed.   
>
>By default, PBIs and bugs appear on Scrum backlogs, user stories on Agile backlogs, and requirements on CMMI backlogs. Each team can [choose how they want to treat bugs: either as requirements or tasks](../customize/show-bugs-on-backlog.md). 


## Try this next  
> [!div class="nextstepaction"]
> [Kanban quickstart](../kanban/kanban-quickstart.md) 


## Related articles

- [Groom your backlog](best-practices-product-backlog.md)  
- [Product backlog controls](product-backlog-controls.md)
- [Filter product and portfolio backlogs ](filter-backlogs.md)
- [Backlog priority or stack rank order](stack-rank-backlog-position.md)
- [Backlog keyboard shortcuts](backlogs-keyboard-shortcuts.md)

If you've already defined a long list of items, you don't have to reenter them one at a time. Instead, use [Microsoft Excel](../backlogs/office/bulk-add-modify-work-items-excel.md) to quickly import them to your backlog.


> [!NOTE]  
>Your product backlog is one of three classes of backlogs available to you. For an overview of the features supported on each backlog and the two types of boards, see [Backlogs, boards, and plans](backlogs-boards-plans.md).   

### Treat bugs like requirements or tasks
You have a choice as to how you want to manage bugs. Some teams like to track bugs along with requirements on the backlog. Other teams like to track bugs as tasks performed in support of a requirement, and have them appear on their [task board](../scrum/task-board.md).

If you're using the Scrum process, your default setup is to track bugs along with PBIs. However, if you're working in a team project based on the [Agile or CMMI processes](../work-items/guidance/choose-process.md), bugs don't automatically appear on your backlog.

Talk with your team to determine how they want to manage bugs and then [change your team settings](../customize/show-bugs-on-backlog.md) accordingly.

