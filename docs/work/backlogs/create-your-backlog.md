---
title: Create your backlog | Team Services & TFS
description: Add items, plan your project, order/prioritize, and estimate your backlog of deliverables - Visual Studio Team Services (VSTS) and Team Foundation Server 
ms.technology: vs-devops-agile-wit
ms.prod: vs-devops-alm
ms.assetid: 04df6b31-ef6c-4285-81a6-96768f03ecf4
ms.manager: douge
ms.author: kaelli
ms.topic: get-started-article  
ms.date: 06/22/2017
---

# Create your backlog

**Team Services | TFS 2017 | TFS 2015 | TFS 2013**  

Your product backlog corresponds to your project plan, the roadmap for what your team plans to deliver. 
Once defined, you have a prioritized list of features and requirements to build. Your backlog also provides a 
repository of all the information you need to track and share with your team.


>[!NOTE]  
>Your product backlog is one of three classes of backlogs available to you. For an overview of the features supported on each backlog and the two types of boards, see [Backlogs, boards, and plans](../backlogs-boards-plans.md).   

Your backlog consists of a list of [work items](add-work-items.md). 
You use work items to share information, assign work to team members, track dependencies, organize work, 
and more. Because the most important work appears at the top of the list, your team always knows what to work on next.

## Convert ideas into backlog items or stories
Building your backlog starts by quickly capturing the requirements you want for your product. If you don't have a team project yet, create one in [Visual Studio Team Services](../../setup-admin/team-services/set-up-vs.md) or set one up in an [on-premises TFS](../../setup-admin/create-team-project.md).   



### Open your backlog from the web portal

You access your product backlog from the Work hub, Backlogs page. To define or manage the product backlog, you should be a member of the team and belong to the Contributors group. If you don't have access to the team project, [get invited to the team](../scale/multiple-teams.md#add-team-members).  

<div style="background-color: #f2f0ee;padding-top:10px;padding-bottom:10px;">

<ul class="nav nav-pills" style="padding-right:15px;padding-left:15px;padding-bottom:5px;vertical-align:top;font-size:18px;">

<li style="float:left;" data-toggle="collapse" data-target="#open-backlog">Open product backlog</li> 

<li style="float: right;"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#AEAEAE;margin: 0px 0px 0px 8px;min-width:50px;color: #fff;border: solid 2px #AEAEAE;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:12px;font-weight:400" data-toggle="pill" href="#open-backlog-tfs-2015-13">TFS 2015, TFS 2013</a></li>

<li class="active" style="float: right"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#007acc;margin: 0px 0px 0px 0px;min-width:90px;color: #fff;border: solid 2px #007acc;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:12px;font-weight:400" data-toggle="pill" href="#open-backlog-team-services">Team Services, TFS 2017</a></li>

</ul>
 
<div id="open-backlog" class="tab-content collapse in fade" style="background-color: #ffffff;margin-left:5px;margin-right:5px;padding: 5px 5px 5px 5px;">


<div id="open-backlog-team-services" class="tab-pane fade in active"> 

<img src="_img/cyb-open-backlog-tfs-2017.png" alt="Web portal, choose Work hub, Backlogs" style="border: 1px solid #CCCCCC;" /> 

<p>The URL follows this pattern:</p>
<ul>
<li>Visual Studio Team Services: ```https://{account}.visualstudio.com/{project name}/_backlogs```</li>
<li>Team Foundation Server (on-premises): ```http://{server}:8080/tfs/DefaultCollection/{project name}/_backlogs```</li>
</ul>

<p>If you don't see the team or team project you want, click the ![Team Services icon](../_img/icons/project-icon.png) Team Services icon to [browse all team projects and teams](/docs/connect/account-home-pages). </p> 
 

</div>

<div id="open-backlog-tfs-2015-13" class="tab-pane fade"> 


<img src="_img/cyb-open-backlog-tfs-2015.png" alt="Open the backlog" style="border: 1px solid #CCCCCC;" />  

<p>The URL follows this pattern:</p>
<p>```http://{server}:8080/tfs/DefaultCollection/{project name}/_backlogs```</p>

<p>If you don't see the team or team project you want, open the team project/team drop-down menu and select the team project/team that you've recently visited. If you don't see the team or team project you want, choose **Browse all** to browse all team projects and teams. </p>

<img src="../_shared/_img/switch-team-project-2.png" alt="Choose another team from the team project menu" style="border: 1px solid #CCCCCC;" /> 

<p>If you don't have a team project yet, create one in [Visual Studio Team Services](../../setup-admin/team-services/set-up-vs.md) or set one up in an [on-premises TFS](../../setup-admin/create-team-project.md). </p>  

</div>



</div>
</div> 

 

### Build your backlog
Begin building your backlog by entering a title and click Add. Repeat this step until you've captured all your main ideas. 

> [!TIP]  
> Your backlog shows work that you are planning to do or have started working on. As soon as the State of a work item is set to Done or Completed, the work item no longer shows up on your backlog. You can use the [backlog controls](#backlog-controls) to filter or change your view.     
  

<img src="_img/create-backlog-add-new-items-ts.png" alt="Add work items to the backlog" style="border: 1px solid #CCCCCC;" />  

>[!NOTE]  
>Depending on the process chosen to create your team project&mdash;[Agile](../guidance/agile-process.md), [Scrum](../guidance/scrum-process.md), or [CMMI](../guidance/cmmi-process.md)&mdash;
the items in your backlog may be called product backlog items (PBIs), user stories, or requirements. All three are similar: they describe the customer value to be delivered and the work to be performed.   
>
>By default, PBIs and bugs appear on Scrum backlogs, user stories on Agile backlogs, and requirements on CMMI backlogs. Each team can [choose how they want to treat bugs: either as requirements or tasks](../customize/show-bugs-on-backlog.md). 

If you've already defined a long list of items, you don't have to reenter them one at a time. Instead, use [Microsoft Excel](../office/bulk-add-modify-work-items-excel.md) to quickly import them to your backlog.

<a id="move-items-priority-order">  </a>
##Move items into priority order
After you've got some items on your backlog, you can order them and create a prioritized list of work. Frequently reviewing and prioritizing your backlog can help your team know what's most important to deliver next.

Reorder your backlog by simply dragging work items. Or, if you prefer the keyboard, hold the Alt key  and use the up and down arrows.

<img src="_img/cyb-order-backlog.png" alt="Reorder work items" style="border: 1px solid #CCCCCC;" />  


>[!NOTE]  
>You can't sort your backlog on a column. If you want to view a sorted listed, click **Create query**, save and open the query, and then sort the query results. To learn more about queries, see [Use the query editor to list and manage queries](../track/using-queries.md).


<a id="estimates">  </a>
## Add details and estimates
Getting your backlog built and prioritized provides the high level roadmap. 
However, before your team can actually start work on any item, they'll need 
more details. You capture these details within the work item form.


>[!TIP]  
>To plan a sprint, at a minimum you should estimate the effort involved to implement each backlog item. You capture effort in the following fields within the work item form: Effort (Scrum), Story Points (Agile), or Size (CMMI) fields. 

Open each item (double-click, or press Enter to open the selected item) and add all the info you want to track. Enter as much detail as the team needs to understand the scope, estimate the work required, develop tests, and ensure that the end product meets acceptance criteria.  

>[!NOTE]  
><b>Feature availability: </b>From the web portal for Team Services and TFS 2017, you'll have access to the [new form with the new work tracking experience](../backlogs/add-work-items.md). For TFS 2015 and earlier versions, the old form is supported.   
	
<div style="background-color: #f2f0ee;padding-top:10px;padding-bottom:10px;">
	<ul class="nav nav-pills" style="padding-right:15px;padding-left:15px;padding-bottom:5px;vertical-align:top;font-size:18px;">
	<li style="float:left;" data-toggle="collapse" data-target="#pbi-form">Product backlog item form</li> 
	<li style="float: right;"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#AEAEAE;margin: 0px 0px 0px 8px;min-width:50px;color: #fff;border: solid 2px #AEAEAE;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:12px;font-weight:400" data-toggle="pill" href="#pbi-form-tfs-2015-13">Old form</a></li>
	<li class="active" style="float: right"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#007acc;margin: 0px 0px 0px 0px;min-width:90px;color: #fff;border: solid 2px #007acc;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:12px;font-weight:400" data-toggle="pill" href="#pbi-form-team-services">New form</a></li>
	</ul> 
<div id="pbi-form" class="tab-content collapse in fade" style="background-color: #ffffff;margin-left:5px;margin-right:5px;padding: 5px 5px 5px 5px;">
<div id="pbi-form-team-services" class="tab-pane fade in active"> 
<p>For details on adding work items using the new form, see [add work items](add-work-items.md).</p>  

<img src="_img/cyb-product-backlog-form-ts.png" alt="Product backlog item - Team Services - Add details to a work item" style="border: 1px solid #CCCCCC;" />  
 
</div>
	
<div id="pbi-form-tfs-2015-13" class="tab-pane fade"> 
<p>For details on adding work items using the old form, see [add work items (TFS)](add-work-items.md).</p>  

<img src="_img/ALM_CB_CreateWorkItem.png" alt="Product backlog item - TFS - Add details to a work item" style="border: 1px solid #CCCCCC;" />   
	</div>
	</div>
	</div> 

 

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
<p>The estimates you set for Effort, Size, or Story Points are used in [calculating team velocity and in forecasting sprints](../scrum/velocity-and-forecasting.md).</p>
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
<p>Before work begins on a PBI or bug, describe the [criteria for customer acceptance](#acceptance) as clearly as possible. Conversations between the team and customers to determine the acceptance criteria help ensure a common understanding within the team to meet customers' expectations. Also, this info provides the basis for acceptance testing.</p></td> 
</tr>

</tbody>
</table>
 

## Try this next
Now that you've got a working backlog in place, your team can begin work on the top priority items. From here, it's time to make the decision on how you want to work as a team: Scrum or Kanban? You can use these methods independently or together.

Teams that want the least overhead in terms of tracking and estimating may prefer Kanban. Teams that like to work at a steady cadence and plot the details of their sprint plan may prefer Scrum and sprint planning.

With [Kanban](../kanban/kanban-basics.md), teams focus on the flow of work from start to finish - limiting work in progress in order to optimize flow and deliver the highest priority items as quickly as possible.

With [Sprint planning](../scrum/sprint-planning.md), teams define a sprint schedule: a time-boxed set of periods for planning and developing. Using the sprint backlog, they plan their sprints by assigning items to the sprint and defining the tasks required to develop each item. Task boards, capacity charts, and sprint burndown charts all help to keep the team aware of progress throughout the sprint cycle.

## Related notes
As you can see, your backlog is the best place to start to plan and manage your project. A few things to keep in mind&hellip;  
- Every team owns their own backlog, to create a new backlog you [create a new team](../scale/multiple-teams.md) 
- Every backlog has a corresponding [Kanban board](../kanban/kanban-basics.md) you can use to track progress and update status  
- The [team's default area and iteration path](../scale/set-team-defaults.md) determines which work items appear on the backlog and Kanban board - you can easily decide to include or exclude work items under a specific area path   
-  Each team can control how [bugs show up on their backlogs and boards](../customize/show-bugs-on-backlog.md)   
- For an overview of all team assets and how to configure them, see [Configure team settings](../scale/manage-team-assets.md)   
- To have work performed by several teams roll up in to a portfolio backlog, you'll want to [setup the team hierarchy](../scale/portfolio-management.md) 

To add fields or work item types, see [Customize your work tracking experience](../customize/customize-work.md).



<a id="backlog-controls">  </a>
### Backlog controls  

Once you've defined your backlog, you can use the following controls to change or filter the view. 

> [!IMPORTANT]  
> If you set the **In progress** control to **Hide**, then items that are no longer in the New, Approved, or Proposed states won't appear in the backlog. 
>
> Also, even if you have show parents turned on, the **Create query** and mail ![mail icon](../_img/icons/mail_icon.png) controls will only list items at the currently selected level.      

| Control                  | Function                      |
|--------------------------|-------------------------------|
| Backlog               | Switch to backlog view           |
| Board    | [Switch to Kanban board view](../kanban/kanban-basics.md)  |
| Forecast | [Turn forecasting Off/On](../scrum/velocity-and-forecasting.md) |
| Mapping | [Turn mapping Off/On](organize-backlog.md)   |
| Parents | [Show/Hide parents](organize-backlog.md) |
| In progress items | [Show/Hide in progress items](../scrum/velocity-and-forecasting.md)   |
| ![Settings icon](../_img/icons/team-settings-gear-icon.png)    | [Configure team settings](../scale/manage-team-assets.md#team-settings)  |
| ![full screen icon](../_img/icons/fullscreen_icon.png) / ![exit full screen icon](../_img/icons/exitfullscreen_icon.png)     | Enter or exit full screen mode      |
| ![expand icon](../_img/icons/expand_icon.png) / ![collapse icon](../_img/icons/collapse_icon.png)   | Expand or collapse one level of the tree hierarchy    |
| ![mail icon](../_img/icons/mail_icon.png)  | Email a copy of your backlog      |
| ![Filter](../_img/icons/tag_filter_icon.png)  | [Turn tag filtering On/Off ](../track/add-tags-to-work-items.md)  |  


### Treat bugs like requirements or tasks
You have a choice as to how you want to manage bugs. Some teams like to track bugs along with requirements on the backlog. Other teams like to track bugs as tasks performed in support of a requirement, and have them appear on their [task board](../scrum/task-board.md).

If you're using the Scrum process, your default setup is to track bugs along with PBIs. However, if you're working in a team project based on the [Agile or CMMI processes](../guidance/choose-process.md), bugs don't automatically appear on your backlog.

Talk with your team to determine how they want to manage bugs and then [change your team settings](../customize/show-bugs-on-backlog.md) accordingly.

