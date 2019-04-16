---
title: About teams & Agile tools
titleSuffix: Azure DevOps
description: Guide to adding and configuring teams in Azure DevOps
ms.technology: devops-settings
ms.prod: devops
ms.assetid: 24C97BED-88F4-4D91-98D1-4AC0B39AB7D7
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
monikerRange: '>= tfs-2013'
ms.date: 11/19/2018
---

# About teams and Agile tools

[!INCLUDE [temp](../../boards/_shared/version-vsts-tfs-all-versions.md)]

<a id="teams"></a>

Adding a team is the #1 way in which Agile tools supports a growing organization. Once your team grows beyond its optimum size&mdash;typically anywhere from 6 to 9 members&mdash;you might consider moving from a one team structure to a two team structure. For enterprises adopting Agile tools, setting up a hierarchical team structure provides several advantages to portfolio and program managers to track progress across several teams.  

Depending on the size of your organization and your tracking needs, you can set up a team structure similar to the one shown. You do this by defining teams and their associated area path(s). 

![Each team has its own view of the work](../../boards/plans/_img/pm-team-structure.png) 

For example, each feature team can be associated with a single feature area path&mdash;such as *Customer Profile*, *Shopping Cart*, *Email*&mdash;or several area paths. Each management team, which focuses on a set of features, can choose several area paths to monitor. This allows each feature team to have their distinct backlog to plan, prioritize, and track their work. And, portfolio or product owners can create their vision, road map, and goals for each release, monitor progress across their portfolio of projects, and manage risks and dependencies. To learn more, see [Portfolio management](../../boards/plans/portfolio-management.md). 

## Each team gets their own set of tools 

Each team you create gets access to a suite of Agile tools and team assets. These tools provide teams the ability to work autonomously and collaborate with other teams across the enterprise. Each team can configure and customize each tool to support how they work.  

::: moniker range=">= tfs-2018"
![Agile tools, team assets](_img/agile-tools/agile-tools-team-assets-post-2018.png)
::: moniker-end

::: moniker range=">= tfs-2015 <= tfs-2017"
![Agile tools, team assets](_img/agile-tools/agile-tools-team-assets.png)
::: moniker-end

::: moniker range="tfs-2013"
![Agile tools, team assets](_img/agile-tools/agile-tools-team-assets-2013.png)
::: moniker-end

These tools reference the team's default area path, iteration path, and selected sprints to automatically filter the set of work items they display. To learn more about each tool and the configuration settings for each tool, see the corresponding articles.

::: moniker range=">= tfs-2017"


<table width="100%">
<tbody valign="top">
<tr>
<th width="20%">Area</th>
<th width="40%">Tool</th>
<th width="40%">Team configuration tasks</th>
</tr>
<tr>
<td>Backlogs  </td>
<td>
<ul>
<li>[Product backlog](../../boards/backlogs/create-your-backlog.md)</li>
<li>[Features backlog](../../boards/backlogs/define-features-epics.md)</li>
<li>[Epics backlog](../../boards/backlogs/define-features-epics.md)</li>
<li>[Forecast](../../boards/sprints/forecast.md)</li> 
</ul>
</td>
<td>
<ul>
<li>[Configure area paths](set-area-paths.md)</li>
<li>[Select active iteration paths (sprints)](set-iteration-paths-sprints.md)</li>
<li>[Select backlog levels](select-backlog-navigation-levels.md)</li>
<li>[Show bugs on backlogs & boards](show-bugs-on-backlog.md)</li>
</ul>
</td>
</tr>
<tr>
<td>Sprints and Scrum </td>
<td>
<ul>
<li>[Sprint backlogs](../../boards/sprints/assign-work-sprint.md)</li>
<li>[Sprint capacity](../../boards/sprints/set-capacity.md)</li>
<li>[Task board](../../boards/sprints/task-board.md)</li>
<li>[Sprint burndown](../../boards/sprints/sprint-burndown.md)</li>
</ul>
</td>
<td>
<ul>
<li>[Select active iteration paths (sprints)](set-iteration-paths-sprints.md)</li>
<li>[Set working days](set-working-days.md)</li>
</ul>
</td>
</tr>
<tr>
<td>Kanban boards</td>
<td>
<ul>
<li>[Kanban board](../../boards/boards/kanban-basics.md)</li>
<li>[Features board](../../boards/boards/kanban-epics-features-stories.md)</li>
<li>[Epics board](../../boards/boards/kanban-epics-features-stories.md)</li>
<li>[Cumulative flow](../../report/dashboards/cumulative-flow.md)</li>
</ul>
</td>
<td>
<ul>
<li>[Configure area paths](set-area-paths.md)</li>
<li>[Select default iteration path](set-iteration-paths-sprints.md)</li>
<li>[Select backlog levels](select-backlog-navigation-levels.md)</li>
<li>[Show bugs on backlogs & boards](show-bugs-on-backlog.md)</li>
</ul>
</td>
</tr>
<tr>
<td>Widgets  </td>
<td>
<ul>
<li>[New work item](../../report/dashboards/widget-catalog.md#new-work-item-widget)</li>
<li>[Sprint burndown](../../report/dashboards/widget-catalog.md#sprint-burndown-widget)</li>
<li>[Sprint capacity](../../report/dashboards/widget-catalog.md#sprint-capacity-widget)</li>
<li>[Sprint overview](../../report/dashboards/widget-catalog.md#sprint-overview-widget)</li>
<li>[Team members](../../report/dashboards/widget-catalog.md#team-members-widget)</li> 
</ul>
</td>
<td>
<ul>
<li>[Configure area paths](set-area-paths.md)</li>
<li>[Select active iteration paths (sprints)](set-iteration-paths-sprints.md)</li>
<li>[Add team members](../security/add-users-team-project.md)</li>
</ul>
</td>
</tr>
<tr>
<td>Other tools </td>
<td>
<ul>
<li>[Favorites](../../project/navigation/set-favorites.md)</li>
<li>[Work item templates](../../boards/backlogs/work-item-template.md)</li>
<li>[Delivery plans](../../boards/plans/review-team-plans.md)</li>
<li>[Queries](../../boards/queries/using-queries.md)</li>
<li>[Velocity](../../report/dashboards/team-velocity.md)</li>
<li>[Dashboards](../../report/dashboards/dashboards.md)</li>
<li>[Alerts](../../notifications/howto-manage-team-notifications.md) </li> 
</ul>
</td>
<td>
Not applicable
</td>
</tr>
</tbody>
</table>

::: moniker-end
 
::: moniker range="tfs-2015"


<table width="100%">
<tbody valign="top">
<tr>
<th width="20%">Area</th>
<th width="40%">Tool</th>
<th width="40%">Team configuration tasks</th>
</tr>
<tr>
<td>Backlogs  </td>
<td>
<ul>
<li>[Product backlog](../../boards/backlogs/create-your-backlog.md)</li>
<li>[Features backlog](../../boards/backlogs/define-features-epics.md)</li>
<li>[Epics backlog](../../boards/backlogs/define-features-epics.md)</li>
<li>[Forecast](../../boards/sprints/forecast.md)</li> 
</ul>
</td>
<td>
<ul>
<li>[Configure area paths](set-area-paths.md)</li>
<li>[Select default, current, and active iteration paths (sprints)](set-iteration-paths-sprints.md)</li>
<li>[Select backlog levels](select-backlog-navigation-levels.md)</li>
<li>[Show bugs on backlogs & boards](show-bugs-on-backlog.md)</li>
</ul>
</td>
</tr>
<tr>
<td>Sprints and Scrum </td>
<td>
<ul>
<li>[Sprint backlogs](../../boards/sprints/assign-work-sprint.md)</li>
<li>[Sprint capacity](../../boards/sprints/set-capacity.md)</li>
<li>[Task board](../../boards/sprints/task-board.md)</li>
<li>[Sprint burndown](../../boards/sprints/sprint-burndown.md)</li>
</ul>
</td>
<td>
<ul>
<li>[Configure area paths](set-area-paths.md)</li>
<li>[Select default, current, and active iteration paths (sprints)](set-iteration-paths-sprints.md)</li>
<li>[Set working days](set-working-days.md)</li>
</ul>
</td>
</tr>
<tr>
<td>Kanban boards</td>
<td>
<ul>
<li>[Kanban board](../../boards/boards/kanban-basics.md)</li>
<li>[Features board](../../boards/boards/kanban-epics-features-stories.md)</li>
<li>[Epics board](../../boards/boards/kanban-epics-features-stories.md)</li>
<li>[Cumulative flow](../../report/dashboards/cumulative-flow.md)</li>
</ul>
</td>
<td>
<ul>
<li>[Configure area paths](set-area-paths.md)</li>
<li>[Select default, current, and active iteration paths (sprints)](set-iteration-paths-sprints.md)</li>
<li>[Select backlog levels](select-backlog-navigation-levels.md)</li>
<li>[Show bugs on backlogs & boards](show-bugs-on-backlog.md)</li>
</ul>
</td>
</tr>
<tr>
<td>Widgets  </td>
<td>
<ul>
<li>[New work item](../../report/dashboards/widget-catalog.md#new-work-item-widget)</li>
<li>[Sprint burndown](../../report/dashboards/widget-catalog.md#sprint-burndown-widget)</li>
<li>[Sprint capacity](../../report/dashboards/widget-catalog.md#sprint-capacity-widget)</li>
<li>[Sprint overview](../../report/dashboards/widget-catalog.md#sprint-overview-widget)</li>
<li>[Team members](../../report/dashboards/widget-catalog.md#team-members-widget)</li> 
</ul>
</td>
<td>
<ul>
<li>[Configure area paths](set-area-paths.md)</li>
<li>[Select default, current, and active iteration paths (sprints)](set-iteration-paths-sprints.md)</li>
<li>[Add team members](../security/add-users-team-project.md)</li>
</ul>
</td>
</tr>
<tr>
<td>Other tools </td>
<td>
<ul>
<li>[Favorites](../../project/navigation/set-favorites.md)</li>
<li>[Work item templates](../../boards/backlogs/work-item-template.md)</li>
<li>[Queries](../../boards/queries/using-queries.md)</li>
<li>[Velocity](../../report/dashboards/team-velocity.md)</li>
<li>[Dashboards](../../report/dashboards/dashboards.md)</li>
<li>[Team rooms](../../notifications/collaborate-in-a-team-room.md)</li>
<li>[Alerts](../../notifications/howto-manage-team-notifications.md) </li> 
</ul>
</td>
<td>
Not applicable
</td>
</tr>
</tbody>
</table>


::: moniker-end


::: moniker range="tfs-2013"



<table width="100%">
<tbody valign="top">
<tr>
<th width="20%">Area</th>
<th width="40%">Tool</th>
<th width="40%">Team configuration tasks</th>
</tr>
<tr>
<td>Backlogs  </td>
<td>
<ul>
<li>[Product backlog](../../boards/backlogs/create-your-backlog.md)</li>
<li>[Features backlog](../../boards/backlogs/define-features-epics.md)</li>
<li>[Forecast](../../boards/sprints/forecast.md)</li> 
</ul>
</td>
<td>
<ul>
<li>[Configure area paths](set-area-paths.md)</li>
<li>[Select default, current, and active iteration paths (sprints)](set-iteration-paths-sprints.md)</li>
<li>[Show bugs on backlogs & boards](show-bugs-on-backlog.md)</li>
</ul>
</td>
</tr>
<tr>
<td>Sprints and Scrum </td>
<td>
<ul>
<li>[Sprint backlogs](../../boards/sprints/assign-work-sprint.md)</li>
<li>[Sprint capacity](../../boards/sprints/set-capacity.md)</li>
<li>[Task board](../../boards/sprints/task-board.md)</li>
<li>[Sprint burndown](../../boards/sprints/sprint-burndown.md)</li>
</ul>
</td>
<td>
<ul>
<li>[Configure area paths](set-area-paths.md)</li>
<li>[Select default, current, and active iteration paths (sprints)](set-iteration-paths-sprints.md)</li>
<li>[Set working days](set-working-days.md)</li>
</ul>
</td>
</tr>
<tr>
<td>Kanban boards</td>
<td>
<ul>
<li>[Kanban board](../../boards/boards/kanban-basics.md)</li>
<li>[Features board](../../boards/boards/kanban-epics-features-stories.md)</li>
<li>[Cumulative flow](../../report/dashboards/cumulative-flow.md)</li>
</ul>
</td>
<td>
<ul>
<li>[Configure area paths](set-area-paths.md)</li>
<li>[Select default, current, and active iteration paths (sprints)](set-iteration-paths-sprints.md)</li>
<li>[Select backlog levels](select-backlog-navigation-levels.md)</li>
<li>[Show bugs on backlogs & boards](show-bugs-on-backlog.md)</li>
</ul>
</td>
</tr>
<tr>
<td>Widgets  </td>
<td>
<ul>
<li>[New work item](../../report/dashboards/widget-catalog.md#new-work-item-widget)</li>
<li>[Sprint burndown](../../report/dashboards/widget-catalog.md#sprint-burndown-widget)</li>
<li>[Sprint capacity](../../report/dashboards/widget-catalog.md#sprint-capacity-widget)</li>
<li>[Sprint overview](../../report/dashboards/widget-catalog.md#sprint-overview-widget)</li>
<li>[Team members](../../report/dashboards/widget-catalog.md#team-members-widget)</li> 
</ul>
</td>
<td>
<ul>
<li>[Configure area paths](set-area-paths.md)</li>
<li>[Select default, current, and active iteration paths (sprints)](set-iteration-paths-sprints.md)</li>
<li>[Add team members](../security/add-users-team-project.md)</li>
</ul>
</td>
</tr>
<tr>
<td>Other tools </td>
<td>
<ul>
<li>[Favorites](../../project/navigation/set-favorites.md)</li>
<li>[Work item templates](../../boards/backlogs/work-item-template.md)</li>
<li>[Queries](../../boards/queries/using-queries.md)</li>
<li>[Velocity](../../report/dashboards/team-velocity.md)</li>
<li>[Team home page](../../report/dashboards/team-dashboard.md)</li>
<li>[Team rooms](../../notifications/collaborate-in-a-team-room.md)</li>
<li>[Alerts](../../notifications/howto-manage-team-notifications.md) </li> 
</ul>
</td>
<td>
Not applicable
</td>
</tr>
</tbody>
</table>


::: moniker-end


Many of these tools are built from system queries that reference the team area path. For example, a team's default area path filters the work items that appear on a team's backlog. Also, work items that you create using an Agile tool auto-assign the areas and iterations based on team defaults.  


## Team defaults referenced by backlogs and boards

What work items appear on team backlogs and boards? When you add work items to a backlog or board, how are team defaults used to assign field values? 

Teams are associated with one or more area paths and a backlog iteration path which determine what items appear on their backlogs and boards. 

When you define a team, you define the team's: 
- Selected area path(s) 
- Default area path
- Selected iteration path(s)
- Backlog iteration path 
- Default iteration path 

All Agile tools reference the area path(s) defined for a team. The set of work items that appear on a backlog or board depend on the current State of a work item or it's parent-child status.   

In addition, several tools reference the team's default iteration and selected iteration paths or sprints. For example, when you add new work items from a backlog or board view, or from a team dashboard, the system assigns the team's default area path and default iteration path to these work items. 


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
<td>Equal to or under team's [backlog iteration path](../../organizations/settings/set-iteration-paths-sprints.md#set-backlog-iteration)</td>
<td>Active (corresponds to a Proposed or InProgress state category, see notes 2, 3)</td>
</tr>


<tr valign="top" > 
<td>Kanban boards (see note 4)</td>
<td>Selected area path(s)</td>
<td>Equal to or under team's [backlog iteration path](../../organizations/settings/set-iteration-paths-sprints.md#set-backlog-iteration)</td>
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
<li>Agile tools filter items based on the team's selected area path(s). Teams can choose [whether to include or exclude items assigned to subarea paths](../../organizations/settings/set-area-paths.md#team-area-paths).</li>
<li>Work items whose State equals Closed, Done, or Removed (corresponding to a Completed category state) don't appear on portfolio and product backlogs.</li>
<li>You can add custom workflow states and assign them to one of three state categories. The [state categories](../../boards/work-items/workflow-and-state-categories.md) determine which work items appear on backlog and board views. </li>
<li>Kanban boards, sprint backlogs, and task boards only show the last node in a hierarchy, called the leaf node. For example, if you link items within a hierarchy that is four levels deep, only the items at the fourth level appear on the Kanban board, sprint backlog, and task board. To learn more, see [parent-child links between items](../../boards/backlogs/resolve-backlog-reorder-issues.md#leaf-nodes).</li>
<li>Work items whose State equals Removed don't appear on boards.</li> 
</ol>


## Structure hierarchical teams or scale agility within an enterprise 

Although there is no concept of sub-teams, you can create teams whose area paths are under another team, which effectively creates a hierarchy of teams. To learn more, see [Add another team](../../organizations/settings/add-teams.md).

Also, these topics can walk you through the steps for configuring teams, area paths, and iterations to support portfolio management or enterprise organizations: 
- [Portfolio management](../../boards/plans/portfolio-management.md)
- [Implement Scaled Agile Framework to support epics, release trains, and multiple backlogs](../../boards/plans/scaled-agile-framework.md)

<a id="team-group"> </a>
## Team groups 

When you add a team, a security group is automatically created with the team name. You can use this group to filter queries. The name of team groups follows the pattern **[Project Name]\Team Name**. For example, the following query finds work assigned to members of the **[Fabrikam Fiber]\Email** team group.

<img src="../../boards/plans/_img/query-in-group-email-team-work-in-progress.png" alt="Web portal, Queries page, Query that uses In Group operator and team group name" style="border: 2px solid #C3C3C3;" /> 

::: moniker range=">= tfs-2017"
You can also use the **@mention** control within discussions and pull requests to notify all members of a team. Simply start typing the name of a team or a security group, click the search icon and then select from the options listed. To learn more, see [Use &#64;mentions to further discussion](../../notifications/at-mentions.md).     
::: moniker-end

## Work on more than one team

Can a user account belong to more than one team?  

Yes. When you add user accounts to a project, you can add them as members of the project, or you can add them to one or more teams added to the project. If you work on two or more Scrum teams, you'll want to make sure you, [specify your sprint capacity for each team you work on](../../boards/sprints/set-capacity.md). 

## Team member permissions 

By default, team members inherit the permissions afforded to members of the project Contributors group. Members of this group can add and modify source code, create and delete test runs, and create and modify work items. They can collaborate with other team members and  [collaborate on a Git project](../../git/gitquickstart.md) or  [check in work to the team's code base](../../tfvc/check-your-work-team-codebase.md). 

![Default permissions assigned to team contributors](_img/add-team/default-permissions-assigned-to-team-contributors.png)  

You can choose to limit access to select features by making a user a [Stakeholder](../security/get-started-stakeholder.md) or limiting their access to read-only. For an overview of default permissions and access assignments set for work tracking features and built-in groups, see [Permissions and access for work tracking](../security/permissions-access-work-tracking.md). 


## Summary 
- Every team owns their own backlog, to create a new backlog you [create a new team](../../organizations/settings/add-teams.md) 
- Every backlog has a corresponding [Kanban board](../../boards/boards/kanban-basics.md) you can use to track progress and update status  
- The team's specified area and iteration paths determine which work items appear on the backlog and Kanban board&mdash;you can easily decide to include or exclude work items under a specific area path   
-  Each team can control how [bugs show up on their backlogs and boards](show-bugs-on-backlog.md)   
- For an overview of all team assets and how to configure them, see [Manage teams and configure team tools](manage-teams.md)   
- To have work performed by several teams roll up in to a portfolio backlog, you'll want to [setup the team hierarchy](../../boards/plans/portfolio-management.md) 
- To add fields or work item types, see [Customize your work tracking experience](../../reference/customize-work.md).

## Related articles 

- [Add another team](add-teams.md)  
- [Configure team settings](manage-teams.md)      
- [Work across projects](../../project/navigation/work-across-projects.md)  



<!--- IN ADDITION: Favorites (query, build); assigned to <team> PRs, Default reviewers for PRs, @CurrentIteration, @Mention a group, team is a group  -->   

<!---
You can view these queries by choosing the **Create query** link that appears on these tools' pages. (Note that you can't change the underlying query.)  Lastly, you can set  security permissions to control who has access to create, modify, or manage test plans and test suites under an area.
-->

