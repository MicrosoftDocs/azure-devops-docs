---
title: About teams & Agile tools  | Team Services & TFS
description: Guide to adding and configuring teams in Visual Studio Team Services (VSTS) and Team Foundation Server (TFS) 
ms.technology: vs-devops-agile-wit
ms.prod: vs-devops-alm
ms.assetid: 24C97BED-88F4-4D91-98D1-4AC0B39AB7D7
ms.manager: douge
ms.author: kaelli
ms.date: 06/23/2017
---

# About teams and Agile tools

<b>Team Services | TFS 2017 | TFS 2015 | TFS 2013 </b> 

<a id="teams"></a>

What work items appear on team backlogs and boards? When you add work items to a backlog or board, how are team defaults used to assign field values? 

Depending on the size of your organization and your tracking needs, you can set up a team structure similar to the one shown. You do this by defining teams and their associated area path(s). 

Adding a team is the #1 way in which Agile tools supports a growing organization. Once your team grows beyond its optimum size&mdash;typically anywhere from 6 to 9 members&mdash;you might consider moving from a one team structure to a two team structure. For enterprises adopting Agile tools, setting up a hierarchical team structure provides several advantages to portfolio and program managers to track progress across several teams.  

![Each team has its own view of the work](scale/_img/pm-team-structure.png) 


For example, each feature team can be associated with a single feature area path&mdash;such as *Customer Profile*, *Shopping Cart*, *Email*&mdash;or several area paths. Each management team, which focuses on a set of features, can choose several area paths to monitor. This allows each feature team to have their distinct backlog to plan, prioritize, and track their work. And, portfolio or product owners can create their vision, road map, and goals for each release, monitor progress across their portfolio of projects, and manage risks and dependencies. To learn more, see [Portfolio management](scale/portfolio-management.md). 


Each team you create gets access to a suite of Agile tools and team assets. These tools provide teams the ability to work autonomously and collaborate with other teams across the enterprise. Each team can configure and customize each tool to meet the way they want to work.

![Agile tools, team assets](scale/_img/agile-tools-team-assets.png)

These tools reference the team's default area path, iteration path, and selected sprints to automatically filter the set of work items they display. Here's a quick summary of these tools: 

>[!NOTE]  
>Some features are available only from Team Services or TFS 2017 and later versions.  

<div style="float:left;width:130px;margin:3px">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;font-size:90%">Backlogs</p>
- [Product backlog](backlogs/create-your-backlog.md)     
- [Features backlog](backlogs/define-features-epics.md)    
- [Epics backlog](backlogs/define-features-epics.md)  
- [Forecast](scrum/velocity-and-forecasting.md)    

</div>
<div style="float:left;width:130px;margin:3px">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;font-size:90%">Scrum</p>
- [Sprint backlogs](scrum/sprint-planning.md)    
- [Sprint capacity](scale/capacity-planning.md)    
- [Task boards](scrum/task-board.md)    
- [Sprint burndown](scrum/sprint-burndown.md)    


</div>
<div style="float:left;width:130px;margin:6px">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;font-size:90%">Kanban</p>
- [Kanban board](kanban/kanban-basics.md)    
- [Features board](kanban/kanban-epics-features-stories.md)   
- [Epics board](kanban/kanban-epics-features-stories.md)    
- [Cumulative flow](../report/guidance/cumulative-flow.md)    


</div>
<div style="float:left;width:130px;margin:6px">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;font-size:90%">Widgets</p>
- [New work item](../report/widget-catalog.md#new-work-item-widget)    
- [Sprint burndown](../report/widget-catalog.md#sprint-burndown-widget)    
- [Sprint capacity](../report/widget-catalog.md#sprint-capacity-widget)    
- [Sprint overview](../report/widget-catalog.md#sprint-overview-widget)    
- [Team members](../report/widget-catalog.md#team-members-widget)    

</div>

<div style="float:left;width:100px;margin:3px">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;font-size:90%">Other</p>
- [Delivery plans](scale/review-team-plans.md)   
- [Queries](track/using-queries.md)    
- [Velocity](scrum/velocity-and-forecasting.md)    
- [Dashboards](../report/dashboards.md)    
- [Alerts](../collaborate/manage-team-notifications.md)    

</div>

<div style="clear:left;font-size:100%">
</div>


Many of these tools are built from system queries that reference the team area path. For example, a team's default area path filters the work items that appear on a team's backlog. Also, work items that you create using an Agile tool auto-assign the areas and iterations based on team defaults.  

You can view these queries by choosing the **Create query** link that appears on these tools' pages. (Note that you can't change the underlying query.)  Lastly, you can set  security permissions to control who has access to create, modify, or manage test plans and test suites under an area.


  


## Team defaults referenced by backlogs and boards

When you define a team, you define the team's: 
- Selected area path(s) 
- Default area path
- Selected iteration path(s)
- Backlog iteration path 
- Default iteration path 

All Agile tools reference the area path(s) defined for a team. For example, one team might handle all work assigned to *Customer Profile* and *Shopping Cart*, while another team only manages work assigned to the *Email* area path.  Also, the set of work items that appear on a backlog or board depend on the current State of a work item or it's parent-child status.   

In addition, several tools reference the team's default iteration and selected iteration paths or sprints. For example, when you add new work items from a backlog or board view, or from a team dashboard, the system assigns the team's default area path and default iteration path to these work items. 

<div style="font-size:90%">

<table valign="top" width="100%" > 
<tr valign="bottom" > 
<th width="20%">Agile tool</th>
<th width="18%">Area path<br/>(see note 1)</th>
<th width="32%">Iteration path</th>
<th width="30%">State</th>
</tr>
<tr valign="top" > 
<td>Portfolio or product backlogs</td>
<td>Selected area path(s)</td>
<td>Equal to or under team's [backlog iteration path](scale/set-team-defaults.md#set-backlog-iteration)</td>
<td>Active (corresponds to a Proposed or InProgress state category, see notes 2, 3)</td>
</tr>


<tr valign="top" > 
<td>Kanban boards (see note 4)</td>
<td>Selected area path(s)</td>
<td>Equal to or under team's [backlog iteration path](scale/set-team-defaults.md#set-backlog-iteration)</td>
<td>Any state (see notes 3, 5)</td>
</tr>

<tr valign="top" > 
<td>Sprint backlogs (see note 4)</td>
<td>Selected area path(s)</td>
<td>Team's selected iteration paths</td>
<td>Any state (see notes 3, 5)</td>
</tr>


<tr valign="top" > 
<td>Task boards (see note 4)</td>
<td>Selected area path(s)</td>
<td>Team's selected iteration paths</td>
<td>Any state (see notes 3, 5)</td>
</tr>

<tr valign="top" > 
<td>New work item widget</td>
<td>Default area path</td>
<td>Default iteration path</td>
<td>n/a</td>
</tr>

</table>

<p><b>Notes:</b><p>
<ol>
<li>Agile tools filter items based on the team's selected area path(s). Teams can choose [whether to include or exclude items assigned to subarea paths](scale/set-team-defaults.md#team-area-paths).</li>
<li>Work items whose State equals Closed, Done, or Removed (corresponding to a Completed category state) don't appear on portfolio and product backlogs.</li>
<li>You can add custom workflow states and assign them to one of three state categories. The [state categories](concepts/workflow-and-state-categories.md) determine which work items appear on backlog and board views. </li>
<li>Kanban boards, sprint backlogs, and task boards only show the last node in a hierarchy, called the leaf node. For example, if you link items within a hierarchy that is four levels deep, only the items at the fourth level appear on the Kanban board, sprint backlog, and task board. To learn more, see [parent-child links between items](./troubleshoot/resolve-backlog-reorder-issues.md#leaf-nodes).</li>
<li>Work items whose State equals Removed don't appear on boards.</li> 
</ol>
</div>

<div style="clear:left;font-size:100%">
</div>


## Structure hierarchical teams or scale agility within an enterprise 

Although there is no concept of sub-teams, you can create teams whose area paths are under another team, which effectively creates a hierarchy of teams. To learn more, see [Add another team](scale/multiple-teams.md).

Also, these topics can walk you through the steps for configuring teams, area paths, and iterations to support portfolio management or enterprise organizations: 
- [Portfolio management](scale/portfolio-management.md)
- [Implement Scaled Agile Framework to support epics, release trains, and multiple backlogs](scale/scaled-agile-framework.md)

<!--
Teams are associated with one or more area paths and a backlog iteration path which determine what items will appear on their backlogs and boards. For details on adding and configuring teams, see the following topics.  
 
<div style="float:left;width:180px;margin:6px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Teams </p>
* [Add teams](scale/multiple-teams.md)  
* [Team admins](scale/add-team-administrator.md)  
* [Team members](scale/multiple-teams.md#add-team-members)  
<br/>
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Basic team settings </p>
* [Area paths](scale/set-team-defaults.md)   
* [Iteration paths](scale/set-team-defaults.md)  
* [Backlog levels](customize/select-backlog-navigation-levels.md)  
* [Working with bugs](customize/show-bugs-on-backlog.md)  
* [Working days](customize/set-working-days.md)  
</div>

<div style="float:left;width:180px;margin:6px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Kanban boards</p>
* [Add columns](kanban/add-columns.md)  
* [WIP limits](kanban/wip-limits.md)   
* [Split columns](kanban/split-columns.md)   
* [Expedite work](kanban/expedite-work.md)  
* [Definition of done](kanban/definition-of-done.md)  
* [Customize cards](customize/customize-cards.md)  
* [Card reordering](customize/reorder-cards.md)   
* [Annotations](customize/customize-cards.md#annotations)  
* [Cumulative flow chart](../report/guidance/cumulative-flow.md)
</div>

<div style="float:left;width:200px;margin:6px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Scrum tools</p>
* [Add/remove sprint backlogs](scale/set-team-defaults.md)   
* [Set sprint dates](customize/set-area-paths.md)    
* [Customize cards on task board](customize/customize-cards.md#task-board)   
* [Capacity planning](scale/capacity-planning.md)  
* [Velocity and forecasting](scrum/velocity-and-forecasting.md)  
</div>



<div style="clear:left;font-size:100%">
</div>
-->

## Related notes 

*	[Add another team](scale/multiple-teams.md)  
*	[Set team defaults](scale/set-team-defaults.md)  
*	[Configure team settings ](scale/manage-team-assets.md)      


<a id="team-group"> </a>
### Team groups 

You can use this group to filter queries. The name of team groups follows the pattern [Team Project Name]\Team Name. For example, the following query finds work assigned to members of the [Fabrikam Fiber]\Email team group.

<img src="scale/_img/query-in-group-email-team-work-in-progress.png" alt="Web portal, Queries page, Query that uses In Group operator and team group name" style="border: 1px solid #CCCCCC;" /> 

### Work on more than one team

Can a user account belong to more than one team?  

Yes. When you add user accounts to a team project, you can add them as members of the team project, or you can add them to one or more teams added to the team project. If you work on two or more Scrum teams, you'll want to make sure you, [specify your sprint capacity for each team you work on](scale/capacity-planning.md). 


