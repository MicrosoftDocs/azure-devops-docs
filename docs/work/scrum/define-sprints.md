---
title: Schedule sprints | Team Services & TFS  
description: Add and set dates for sprints, releases, or iterations to implement Scrum and also to gain access to several built-in charts and widgets   
ms.technology: vs-devops-agile-wit
ms.prod: vs-devops-alm
ms.assetid: 1DB81E71-36D7-43A5-9C9A-38AA1777715A
ms.manager: douge
ms.author: kaelli
ms.topic: get-started-article  
ms.date: 06/22/2017
--- 


# Schedule sprints  

<b>Team Services | TFS 2017 | TFS 2015 | TFS 2013</b> 

With Scrum, teams plan and track work at regular time intervals, referred to as a sprint cadence. 
You define sprints to correspond to the cadence your team uses. 

Many teams choose a two or three week cadence. However, you can specify shorter or longer sprint cycles. Also, you can create a release schedule which encompasses several sprints.     

<a id="quick-start-schedule">   </a>
## Quick start guide to scheduling sprints

To quickly get started, you can use the default sprints, also referred to as iterations, that were added when your team project was created.  Note, you must be a [member of the Project Administrators group](../../setup-admin/add-administrator-tfs.md) in order to add sprints and schedule sprint dates. (If you created the team project, you're a member.) 

[!INCLUDE [temp](../_shared/image-differences.md)]

1. Choose the sprint listed under Current and then click **Set dates**.  

	<img src="_img/define-sprints-set-sprint-dates.png" alt="Sprint 1 backlog, Set dates" style="border: 1px solid #CCCCCC;" />  

2. Click the calendar icon to choose the date for the start and then the end of the sprint. 

	<img src="_img/define-sprints-edit-iteration-set-sprint-dates.png" alt="Sprint 1 backlog, Set dates" style="border: 1px solid #CCCCCC;" />  

That's it! You can now start [planning your first sprint](sprint-planning.md). 

Of course, if you have several teams or more complex release and sprint cadences to accomodate, then you'll need to read further. 

>[!NOTE]  
>**Terminology note:** Your set of Agile tools uses the Iteration Path field to track sprints and releases. When you define sprints, you define the pick list of values available for the [Iteration Path](../customize/set-area-paths.md) field. You use iterations to group work into sprints, milestones, or releases in which they'll be worked on or shipped. 



<a id="schedule">   </a>
## Define and schedule sprints for several teams and release cadences 
 
>[!NOTE]  
>Your sprint backlog and task board are designed to support your Scrum processes. In addition, you have access to product and portfolio backlogs and Kanban boards. For an overview of the features supported on each backlog and board, see [Backlogs, boards, and plans](../backlogs-boards-plans.md).  

Your team project comes with several sprints predefined. However, they aren't associated with any dates. For Scrum and sprint planning, you'll want to assign start and end dates for the sprints your team will use.   

Defining additional sprints is a two-step process. You first define the sprints for your team project&mdash;[Define project iterations](../customize/set-area-paths.md)&mdash;and then you select the sprints that each team will use&mdash;[Select team sprints](../scale/set-team-defaults.md). In this way, the system supports teams that work on different sprint cadences.  

[![Define team project sprints](_img/define-sprints-project-level.png)](../customize/set-area-paths.md)[![Select team sprints](_img/define-sprints-team-level.png)](../scale/set-team-defaults.md)







## Related notes 
If you work with several teams, and each team wants their own backlog view, you can [create additional teams](../scale/multiple-teams.md). Each team then gets access to their own set of Agile tools. Each Agile tool filters work items to only include those assigned values under the team's default area path and iteration path, which you configure via the [Set team defaults](../scale/set-team-defaults.md) .  

- [What is Scrum?](https://www.visualstudio.com/learn/what-is-scrum/)
- [Define iteration paths](../customize/set-iteration-paths-sprints.md) 
- [Configure team settings](../scale/manage-team-assets.md)  
 

### How selected sprints show up on the backlog 
Each sprint that you select for your team provides access to a sprint backlog, task board, and other Agile tools for planning and tracking work. 

<div style="background-color: #f2f0ee;padding-top:10px;padding-bottom:10px;">

<ul class="nav nav-pills" style="padding-right:15px;padding-left:15px;padding-bottom:5px;vertical-align:top;font-size:18px;">
<li style="float:left;" data-toggle="collapse" data-target="#sprints">Selected sprints</li>
<li style="float: right;"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#AEAEAE;margin: 0px 0px 0px 8px;min-width:90px;color: #fff;border: solid 2px #AEAEAE;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:14px;font-weight:400" data-toggle="pill" href="#tfs2015-sprints">TFS 2015</a></li>
<li class="active" style="float: right"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#007acc;margin: 0px 0px 0px 0px;min-width:90px;color: #fff;border: solid 2px #007acc;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:14px;font-weight:400" data-toggle="pill" href="#ts-sprints">Team Services & TFS 2017</a></li>

</ul>
 
<div id="sprints" class="tab-content collapse in fade" style="background-color: #ffffff;margin-left:5px;margin-right:5px;padding: 5px 5px 5px 5px;">

<div id="ts-sprints" class="tab-pane fade in active"> 
<p>For example, by selecting Sprints 1 thru 6, the Fabrikam Fiber team gets access to six sprint backlogs. They also get access to capacity planning tools and a task board for each sprint.  </p>
![Team Services, sprints](_img/define-sprints-selected-team-iterations-vsts.png)
</div>


<div id="tfs2015-sprints" class="tab-pane fade">

<p>For example, by selecting Sprints 1 thru 4, the Fabrikam Fiber team gets access to four sprint backlogs. They also get access to capacity planning tools and a task board for each sprint.  </p>

![Selected iterations generate sprint backlogs](_img/selected-iterations-generate-sprint-backlogs.png) 
</div>
</div>
</div> 


<div style="clear:left;font-size:100%">
</div>
