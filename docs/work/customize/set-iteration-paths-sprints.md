---
title: Customize iteration paths, sprint schedules | VSTS & TFS
description: Assign work items to sprints, iterations, releases, or other time period by defining iteration paths (Visual Studio Team Services and Team Foundation Server)
ms.technology: vs-devops-agile-wit
ms.prod: vs-devops-alm
ms.assetid: 27631A15-9EB1-4E79-814E-8145BB7707C8
ms.manager: douge
ms.author: kaelli
ms.topic: get-started-article  
ms.date: 06/01/2016
---



# Define iteration paths (aka sprints) 

<b>Team Services | TFS 2017 | TFS 2015 | TFS 2013</b> 

Iteration paths allow you to group work into sprints, milestones, or other event-specific or time-related period. Whereas, [area paths](set-area-paths.md) allow you to group work items by team, product, or feature area.  
 
You define iteration paths for a team project. Teams can then choose which iteration paths are used to support their sprint backlog and other Agile tools. To understand how Agile tools use interation paths, see [Agile tools that rely on areas and iterations](../about-teams-and-settings.md).

Newly created team projects contain a single, root area that corresponds to the team project name. Team projects typically specify a predefined set of iterations to help you get started tracking your work. All you need to do is specify the dates.  

The iterations you see depend on the process you used to create your team project. Here we show the defaults defined for the Scrum process. No dates are set. You set dates to correspond to your sprint or release schedules.

 
[!INCLUDE [temp](../_shared/image-differences.md)] 

<img src="_img/areas-iterations-iterations-intro-ts-2016.png" alt="Default iterations, Scrum process" style="border: 1px solid #CCCCCC;" /> 
  
<a id="open-admin-context">  </a>
## Open the administration context for the team project  

From the web portal, open the admin page for the team project.

You define both areas and iterations from the Work hub of the team project admin context. From the user context,you open the admin context by clicking the ![gear icon](../../connect/_img/work-tfs-web-portal/IC623347.png) gear Settings icon. The tabs and pages available differ depending on which admin context you access.  

[!INCLUDE [temp](../_shared/learn-about-new-nav-experience.md)] 

To manage areas and iterations you need to be a project administrator or have the **Create child nodes** permission for an area path. If you aren't a project administrator, [get added as one](../scale/add-team-administrator.md) or have someone provide you with explicit permissions to <b>Edit project-level information</b>. 

If you want to add area paths to support teams, you can do that when you [add teams to your team project](../scale/multiple-teams.md).  

Certain [restrictions](#name-restrictions) apply on names of areas.  

<div style="background-color: #f2f0ee;padding-top:10px;padding-bottom:10px;">

<ul class="nav nav-pills" style="padding-right:15px;padding-left:15px;padding-bottom:5px;vertical-align:top;font-size:18px;">

<li style="float:left;" data-toggle="collapse" data-target="#admin-intro">Open the admin context, project-level</li>

<li style="float: right;"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#AEAEAE;margin: 0px 0px 0px 8px;min-width:50px;color: #fff;border: solid 2px #AEAEAE;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:12px;font-weight:400" data-toggle="pill" href="#admin-intro-tfs-2015">TFS 2015, TFS 2013</a></li>

<li style="float: right;"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#AEAEAE;margin: 0px 0px 0px 8px;min-width:50px;color: #fff;border: solid 2px #AEAEAE;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:12px;font-weight:400" data-toggle="pill" href="#admin-intro-tfs-2017">TFS 2017</a></li>

<li style="float: right;"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#AEAEAE;margin: 0px 0px 0px 8px;min-width:90px;color: #fff;border: solid 2px #AEAEAE;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:12px;font-weight:400" data-toggle="pill" href="#admin-intro-tfs-2017-1">TFS 2017.1</a></li>

<li class="active" style="float: right"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#007acc;margin: 0px 0px 0px 0px;min-width:90px;color: #fff;border: solid 2px #007acc;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:12px;font-weight:400" data-toggle="pill" href="#admin-intro-team-services">Team Services</a></li>

</ul>

<div id="admin-intro" class="tab-content collapse in fade" style="background-color: #ffffff;margin-left:5px;margin-right:5px;padding: 5px 5px 5px 5px;">

<div id="admin-intro-team-services" class="tab-pane fade in active"> 
<ol>
<li>
<p>From the web portal for the team project context, click the ![gear icon](../_img/icons/gear_icon.png) gear Settings.  </p>

<img src="_img/modify-areas-its-open-admin-context-ts.png" alt="Web portal, Team Services, Open Admin context, team project level" style="border: 1px solid #CCCCCC;" />  

<p>If you're currently working from a team context, then hover over the ![gear icon](../_img/icons/gear_icon.png) and choose Project settings. </p>

<img src="_img/modify-areas-its-choose-project-settings-admin-context-ts.png" alt="Default Collection Overview, Projects reference processes" style="border: 1px solid #CCCCCC;" /> 
</li>
<li>
<p>Open the **Work** hub.  </p>
</li>
</ol>
</div>

<div id="admin-intro-tfs-2017-1" class="tab-pane fade"> 
<ol>
<li>
<p>From the web portal for the team project context, click the ![gear icon](../_img/icons/gear_icon.png) gear Settings.  </p>

<img src="_img/modify-areas-its-open-admin-context-tfs-2017-1.png" alt="Web portal, TFS 2017.1, Open Admin context, team project level" style="border: 1px solid #CCCCCC;" />  

<p>If you're currently working from a team context, then hover over the ![gear icon](../_img/icons/gear_icon.png) and choose Project settings. </p>

<img src="_img/modify-areas-its-choose-project-settings-admin-context-tfs-2017-1.png" alt="Web portal, TFS 2017.1, Choose the gear icon to Open Project settings" style="border: 1px solid #CCCCCC;" /> 
</li>
<li>
<p>Open the **Work** hub.  </p>
</li>
</ol>

</div>

<div id="admin-intro-tfs-2017" class="tab-pane fade"> 
<ol>
<li>
<p>From the web portal for the team project context, click the ![gear icon](../_img/icons/gear_icon.png) gear Settings.  </p>

<img src="_img/modify-areas-its-choose-project-settings-admin-context-tfs-2017.png" alt="Web portal, TFS 2017, Open Admin context, team project level" style="border: 1px solid #CCCCCC;" />  

<p>If you're currently working from a team context, then hover over the ![gear icon](../_img/icons/gear_icon.png) and choose Project settings. </p>

<img src="_img/modify-areas-its-choose-project-settings-admin-context-tfs-2017_v0.png" alt="Web portal, TFS 2017, Choose the gear icon to Open Project settings" style="border: 1px solid #CCCCCC;" /> 
</li>
<li>
<p>Open the **Work** hub.  </p>
</li>
</ol>

  
</div>


<div id="admin-intro-tfs-2015" class="tab-pane fade">
 
<ol>
<li>
<p>From the web portal user context, click the ![gear icon](../_img/icons/gear_icon.png) gear Settings.  </p>

<img src="../_img/icons/ALM_OpenAdminContext.png" alt="Open the project administration page" style="border: 1px solid #CCCCCC;" /> 
</li>
<li>
<p>Open the **Work** hub.  </p>
</li>
</ol>

</div>


</div>
</div>
 

<a id="iterations"></a>  
##Add iterations and set iteration dates
From the **Iterations** page, you can add and select the iterations that will be active for your team. You add iterations in the same way you add areas. For more information about working within a sprint cadence, see [Schedule sprints](../scrum/define-sprints.md).  


<div style="background-color: #f2f0ee;padding-top:10px;padding-bottom:10px;"> 

<ul class="nav nav-pills" style="padding-right:15px;padding-left:15px;padding-bottom:5px;vertical-align:top;font-size:18px;">

<li style="float:left;" data-toggle="collapse" data-target="#iteration-paths">Iterations </li>

<li style="float: right;"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#AEAEAE;margin: 0px 0px 0px 8px;min-width:90px;color: #fff;border: solid 2px #AEAEAE;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:14px;font-weight:400" data-toggle="pill" href="#tfs-2015-iteration-paths">TFS 2015, TFS 2013</a></li>

<li class="active" style="float: right"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#007acc;margin: 0px 0px 0px 0px;min-width:90px;color: #fff;border: solid 2px #007acc;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:14px;font-weight:400" data-toggle="pill" href="#team-services-iteration-paths">Team Services, TFS 2017</a></li>
</ul>
 
<div id="iteration-paths" class="tab-content collapse in fade" style="background-color: #ffffff;margin-left:5px;margin-right:5px;padding: 5px 5px 5px 5px;">

<div id="team-services-iteration-paths" class="tab-pane fade in active">


<a id="define-sprints-team-services">   </a>
<h3>Schedule sprints (Team Services)</h3>
<ol>
<li>
<p>Open the Work, Iterations page for the team project context.</p>
<p>For Scrum-based team projects, you'll see these set of sprints.</p>
<img src="_img/modify-areas-its-iterations-ts.png" alt="Work, Iterations page, Team Services platform" style="border: 1px solid #CCCCCC;" />
<p>If you need to select another team project, go to the Overview page for the collection (click the DefaultCollection link).</p>
</li>
<li><p>Schedule the start and end dates for each sprint your teams will use. Click Set dates or choose to edit the iteration from the ![Actions icon](../_img/icons/actions-icon.png) actions menu for the sprint.</p>  
<img src="../scrum/_img/dsprints-edit-sprint-1-set-start-date.png" alt="Edit iteration, schedule start date, Team Services platform" style="border: 1px solid #CCCCCC;" />  
</li>
<li>
<p>When you're finished, you'll have a set of sprints scheduled - like this:</p>
<img src="_img/modify-areas-its-iterations-scheduled-ts.png" alt="Work, Iterations page, scheduled set of sprints, Team Services platform" style="border: 1px solid #CCCCCC;" />
 <p>Your next step is to [choose the sprints each team will use](../scale/set-team-defaults.md#activate-team-services).</p>
</li>
</ol>
</div>

<div class="tab-pane fade" id="tfs-2015-iteration-paths" >
<h3>Schedule sprints (TFS 2015)</h3>
<ol>
<li>
<p>Open the Iterations tab for the team project context.</p>
<p>For Scrum-based team projects, you'll see these set of sprints.</p>
<img src="../scrum/_img/activate-team-sprints.png" alt="Example Iterations for a Team" style="border: 1px solid #CCCCCC;" />  
<p>You can change the name, location within the tree hierarchy, or set dates for any sprint. Simply open it (double-click or press Enter key) and specify the info you want.</p>
</li>
<li>
<p>Schedule the start and end dates for those sprints you plan to use.</p>
<img src="../scrum/_img/set-sprint-start-end-dates.png" alt="Define start and end dates for a sprint" style="border: 1px solid #CCCCCC;" />  
<p>After you set the start and end dates for one iteration, the calendar tool automatically attempts to set the next set of dates, based on the same iteration length you specified for the first. For example, if you set a three week sprint for Sprint 1, then when you select the start date for Sprint 2, the calendar tool automatically determines the start and end dates based on the next three weeks. You can accept or change these dates.</p>
</li>
<li>
<p>To add another sprint, select <b>New child</b> and name it what you want. Here, we call it Sprint 7.</p>
<img src="../scrum/_img/create-new-child-under-sprint.png" alt="Iterations, defaults defined for Agile" style="border: 1px solid #CCCCCC;" />
<p>Your next step is to [activate the sprints each team will use](../scale/set-team-defaults.md#activate-sprints-tfs).</p>
</li>
</ol>

</div>
</div>
</div>


<!---
0. Teams can choose which iterations they work in by checking the check box next to each iteration.  

	<img src="_img/ALM_CW_OpenIterations.png" alt="Open the iterations page" style="border: 1px solid #CCCCCC;" />   

0. Each iteration can have a start and end date.  After you set the start and end dates for one iteration, the calendar tool automatically defaults the next set of dates, based on the same iteration length you specified for the first.

	**Example:** if you set a 3 week sprint for Sprint 1, then when you select the start date for Sprint 2, the calendar tool automatically determines the start and end dates based on the next three weeks.  

	<img src="_img/ALM_CW_SetIterationDate.png" alt="Define start and end dates for a sprint" style="border: 1px solid #CCCCCC;" />  

	![Define start and end dates for a sprint](_img/ALM_CW_SetIterationDate.png)  

-->
 
## Chart progress by area or iteration

You can quickly generate [queries](../track/using-queries.md) to view the progress for those areas and iterations. As an example, you can [visualize progress of work items assigned to sprints](../../report/charts.md) as shown in the following stacked bar chart.  

<img src="_img/ALM_CW_StackedBarChart.png" alt="Stacked bar chart by area" style="border: 1px solid #CCCCCC;" /> 


 

<a name="rename-delete"></a>
## Rename or delete an area or iteration node 

When you rename an area or an iteration, or move the node within the tree hierarchy, the system will automatically update the work items and queries that reference the existing path or paths. 

When you delete an area or an iteration node, the system automatically updates the existing work items with the node that you enter at the deletion prompt. 

## Related notes 
As you can see, areas and iterations play a major role in supporting Agile tools and managing work items. You can learn more about working with these fields from these topics: 

*	[Add another team](../scale/multiple-teams.md)  
*	[Set team defaults](../scale/set-team-defaults.md)  
*	[Agile tools and sprint definitions ](../scrum/define-sprints.md)  
*	[Agile tools that rely on areas or iterations](../about-teams-and-settings.md)
*	[Configure team settings and add team administrators](../scale/manage-team-assets.md)  
*	[Query by date or current iteration](../track/query-by-date-or-current-iteration.md)  
*	[Permissions and access](../../setup-admin/permissions-access.md)  

<a name="permissions"></a>
### Required permissions 

To create or modify areas or iterations, you must either be a member of the **Project Administrators** group, or your **Create and order child nodes**, **Delete this node**, and **Edit this node** permissions must be set to **Allow** for the area or iteration node that you want to modify.


### What kind and how many iterations should a team define?

You define as many child iterations as you need to reflect your project lifecycle. These paths represent a series of events, such as sprints, pre-beta and beta deliverables, and other release milestones. Teams typically leave work items assigned to the team's default iteration if they are not yet scheduled for work or for a release.  

Add iterations to support these requirements:  
* Define sprints your Scrum teams use to [plan and execute their sprints](../scrum/sprint-planning.md)
* Set up more complex multi-release and sprint cycles
* Filter queries based on sprints, milestones, or cycle time for your project 
* Support future work that you're not ready to assign to a target release cycle.  

In the following example, Backlog, Beta 1, Beta 2, Release 1.0, and Release 2.0 are defined for the MyApplication team project.  

<img src="_img/ALM_CW_IterationHierarchy-Before.png" alt="Flat iteration hierarchy" style="border: 1px solid #CCCCCC;" />  

As you create the backlog of product features and tasks, you can start to assign them to the milestones by which you expect the team to finish the features and tasks.
As your needs change, you can add events under each major milestone that reflect how your team schedules and manages its work.  

As the following example shows, the Beta 1 iteration now contains three child nodes, one for each sprint in the Beta 1 time period.  

<img src="_img/ALM_CW_IterationHierarchy-After.png" alt="Hierarchical Iteration Hierarchy" style="border: 1px solid #CCCCCC;" />  

Iterations do not enforce any rules. For example, you can assign a task to an iteration but not close or complete it during that iteration. At the end of an iteration, you should find all work items that remain active or have not been closed for that iteration and take appropriate action. You can, for example, move them to a different iteration or return them to the backlog.

<a name="name-restrictions"></a>
###Naming restrictions 

The **Area Path** and **Iteration Path** fields, [data type=TreePath](../reference/define-modify-work-item-fields.md), consist of multiple node items which are separated by the backslash (&#92;) character. We recommend that you minimize the names of nodes, and make sure that you conform to the following restrictions when adding child nodes:

| Restriction type                 | Restriction                                 | 
| -------------------------------- | ------------------------------------------- | 
| Node length | Must not contain more than 255 characters | 
| Special characters for nodes | Must not contain Unicode control characters<br/>Must not contain any of the following characters: \ / $ ? * : " & > < # % + ,<br/>Must not contain characters that the [local file system prohibits](https://msdn.microsoft.com/library/aa365247.aspx). | 
| Reserved names | Must contain more than a period (.) or two periods (..)<br/>Must not be a [system-reserved name](https://msdn.microsoft.com/library/aa365247.aspx) such as PRN, COM1, COM2, COM3, COM4, COM5, COM6, COM7, COM8, COM9, COM10, LPT1, LPT2, LPT3, LPT4, LPT5, LPT6, LPT7, LPT8, LPT9, NUL, CON, or AUX<br/>| 
| Path length | Must contain fewer than 4,000 Unicode characters | 
| Path hierarchy depth | Must be fewer than 14 levels deep | 



<a name="export"></a>
###Export tree structures  

You can't export the structure of tree paths for one team project to use with another team project.  
 