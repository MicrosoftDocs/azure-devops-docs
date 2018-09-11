---
title: Team administrator permissions
titleSuffix: Azure DevOps Services & TFS
description: Understand  permissions team administrator permissions in Azure DevOps Services & Team Foundation Server  
ms.technology: devops-agile
ms.prod: devops
ms.assetid:  
ms.manager: douge
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
monikerRange: '>= tfs-2013'
ms.date: 07/27/2018
---

# Team administrator role and permissions

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

While most permissions are governed by belonging to a security group or defined at the object level, team settings are managed by the team administrator role.

For each team that you add, you can assign one or more team members as administrators. The team admin role isn't a group with a set of defined permissions. Instead, the team admin role is tasked with managing and configuring [team Agile tools](about-teams-and-settings.md).  

In addition to team administrators, all members of the Project Administrators and Project Collection Administrators groups can manage settings for all teams as well as add team administors. 

## Set team defaults 

Team administrators can select the area paths and iteration paths associated with their team. These settings affect a number of Agile tools available to the team. 

These include the following associations made for each team:  

- **Select team area paths**   
	Can select the default area path(s) associated with the team. These settings affect a number of Agile tools available to the team.	
- **Select team iteration paths or sprints** 
	Can select the default area path(s) associated with the team. These settings affect a number of Agile tools available to the team. 
 
For details, see [Set team defaults](set-team-defaults.md). 

## Enable team backlogs and configure how bugs are managed on backlogs and boards    

Team administrators can choose which backlog levels are active for a team. For example, a feature team may choose to show only the product backlog and a management team may choose to show only the feature and epic backlogs. 

Also, they can choose whether bugs are treated similar to user stories and requirements or as tasks. 

For details, see these topics: 
- [Select backlog levels for your team](select-backlog-navigation-levels.md)
- [Set your team's preferences for tracking bugs](show-bugs-on-backlog.md).

## Customize  Kanban boards 
	
Team administrators can fully customize the team's Kanban boards associate with the product and portfolio backlogs. This includes the following elements:
	* [Cards: Fields](../../boards/boards/customize-cards.md#kanban-board)  
	* [Cards: Styles](../../boards/boards/customize-cards.md#style-rule)  
	* [Cards: Tag colors](../../boards/boards/customize-cards.md#color-tags)  
	* [Cards: Annotations](../../boards/boards/customize-cards.md#annotations)  
	* [Cards: Tests](../../boards/boards/customize-cards.md#tests)  
	* [Board: Columns](../../boards/boards/add-columns.md)  
	* [Board: WIP limits](../../boards/boards/wip-limits.md)    
	* [Board: Split columns](../../boards/boards/split-columns.md)   
	* [Board: Swimlanes](../../boards/boards/expedite-work.md)  
	* [Board: Card reordering](../../boards/boards/reorder-cards.md)  
	* [Board: Definition of Done](../../boards/boards/definition-of-done.md)  
	* [Charts: Cumulative flow](../../report/dashboards/cumulative-flow.md#configure) 


::: moniker range=">= tfs-2017" 

## Add and manage team dashboards   

Team administrators can add, configure, and manage permissions for team dashboards. For details, see [Add and manage dashboards](../../report/dashboards/dashboard-permissions.md#set-permissions). 

::: moniker-end

## Set working days off    	
	
Sprint planning and tracking tools automatically consider days off when calculating capacity and sprint burndown. Team admins can choose which days are non-working days through the team's Settings dialog. For details, see [Set working days](set-working-days.md).


## Manage team alerts 

Team administrators can add and modify alerts so that the team can receive email notifications as changes occur to work items, code reviews, source control files, and builds. For details, see [Manage team alerts](../../notifications/howto-manage-team-notifications.md).

::: moniker range="vsts" 
> [!NOTE]  
> There is no UI associated with managing alert permissions. 
::: moniker-end


::: moniker range=">= tfs-2013 <= tfs-2018" 
> [!NOTE]  
> There is no UI associated with managing alert permissions. Instead, you can use **TFSSecurity** to manage alerts in TFS. 
::: moniker-end



<a id="team-rooms" />

::: moniker range=">= tfs-2013 <= tfs-2017"
## Create and manage team rooms 

Team administrators can add users and events to team rooms, and add team rooms. Team rooms are chat rooms limited to team members. For details, see [Collaborate in a team room](../../notifications/collaborate-in-a-team-room.md).  

> [!NOTE]  
> Team Rooms are deprecated for TFS 2018 and later versions as described in [Deprecation of team rooms](https://blogs.msdn.microsoft.com/devops/2017/01/04/deprecation-of-the-team-rooms-in-team-services-and-tfs/) blog post. Several good solutions are available that integrate well with TFS that support notifications and chat, such as [Microsoft Teams](../../service-hooks/services/teams.md) and [Slack](../../service-hooks/services/slack.md).   

::: moniker-end

## Related articles

- [Permissions and access for work tracking](../security/permissions-access-work-tracking.md) 
- [Add teams](add-teams.md) 
- [Add a team administrator](add-team-administrator.md) 