---
title: Team administrator permissions
titleSuffix: VSTS & TFS
description: Understand  permissions team administrator permissions in Visual Studio Team Services & Team Foundation Server  
ms.technology: devops-agile
ms.prod: devops
ms.assetid:  
ms.manager: douge
ms.author: kaelliauthor: KathrynEE
ms.topic: conceptual
ms.date: 08/15/2017
---

# Team administrator role and permissions

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

While most permissions are governed by belonging to a security group or defined at the object level, team settings are managed by the team administrator role.

For each team that you add, you can assign one or more team members as administrators. The team admin role isn't a group with a set of defined permissions. Instead, the team admin role is tasked with managing and configuring [team assets](../../settings/about-teams-and-settings.md).  

In addition to team administrators, all members of the Project Administrators and Project Collection Administrators groups can manage settings for all teams as well as add team administors. 

## Set team defaults 

Team administrators can select the area paths and iteration paths associated with their team. These settings affect a number of Agile tools available to the team. 

These include the following associations made for each team:  

- The default area path 
- The area path(s) 	
- The default iteration path 
- The selected iteration paths 

For details, see [Set team defaults](set-team-defaults.md). 

## Enable team backlogs and configure how bugs are managed on backlogs and boards    

Team administrators can choose which backlog levels are active for a team. For example, a feature team may choose to show only the product backlog and a management team may choose to show only the feature and epic backlogs. 

Also, they can choose whether bugs are treated similar to user stories and requirements or as tasks. 

For details, see these topics: 
- [Select backlog levels for your team](../customize/select-backlog-navigation-levels.md)
- [Set your team's preferences for tracking bugs](../customize/show-bugs-on-backlog.md).

## Customize  Kanban boards 
	
Team administrators can fully customize the team's Kanban boards associate with the product and portfolio backlogs. This includes the following elements:
	* [Cards: Fields](../customize/customize-cards.md#kanban-board)  
	* [Cards: Styles](../customize/customize-cards.md#style-rule)  
	* [Cards: Tag colors](../customize/customize-cards.md#color-tags)  
	* [Cards: Annotations](../customize/customize-cards.md#annotations)  
	* [Cards: Tests](../customize/customize-cards.md#tests)  
	* [Board: Columns](..//kanban/add-columns.md)  
	* [Board: WIP limits](../kanban/wip-limits.md)    
	* [Board: Split columns](../kanban/split-columns.md)   
	* [Board: Swimlanes](../kanban/expedite-work.md)  
	* [Board: Card reordering](../customize/reorder-cards.md)  
	* [Board: Definition of Done](../kanban/definition-of-done.md)  
	* [Charts: Cumulative flow](../../report/dashboards/cumulative-flow.md#configure) 

## Add and manage team dashboards   

Team administrators can add, configure, and manage permissions (VSTS and TFS 2017) for team dashboards. For details, see [Add and manage dashboards](../../report/dashboards/dashboard-permissions.md#set-permissions). 

 
## Set working days off    	
	
Sprint planning and tracking tools automatically consider days off when calculating capacity and sprint burndown. Team admins can choose which days are non-working days through the team's Settings dialog. For details, see [Set working days](../customize/set-working-days.md).


## Manage team alerts 

Team administrators can add and modify alerts so that the team can receive email notifications as changes occur to work items, code reviews, source control files, and builds. For details, see [Manage team alerts](../../collaborate/manage-team-notifications.md).

> [!NOTE]  
> There is no UI associated with managing alert permissions. Instead, you can use **TFSSecurity** to manage alerts in TFS. 


<a id="team-rooms" />

::: moniker range=">= tfs-2013 <= tfs-2017"
## Create and manage team rooms 

Team administrators can add users and events to team rooms, and add team rooms. Team rooms are chat rooms limited to team members. For details, see [Collaborate in a team room](../../collaborate/collaborate-in-a-team-room.md).  

> [!NOTE]  
> Team Rooms are deprecated for TFS 2018 and later versions as described in this blog post, [Deprecation of the Team Rooms in VSTS and TFS](https://blogs.msdn.microsoft.com/devops/2017/01/04/deprecation-of-the-team-rooms-in-team-services-and-tfs/). Several good solutions are available that integrate well with TFS that support notifications and chat, such as [Microsoft Teams](../../service-hooks/services/teams.md) and [Slack](../../service-hooks/services/slack.md).   

::: moniker-end

## Related articles

- [Permissions and access for work tracking](../../security/permissions-access-work-tracking.md) 
- [Add teams and team members](multiple-teams.md) 
- [Add a team administrator](add-team-administrator.md) 