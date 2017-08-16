---
title: Team administrator permissions | Team Services & TFS 
description: Understand what permissions are granted to team administrators  
ms.technology: vs-devops-agile-wit
ms.prod: vs-devops-alm
ms.assetid:  
ms.manager: douge
ms.author: kaelli
ms.date: 08/15/2017
---



# Permissions granted to the team administrator role

For each team that you add, you can assign one or more team members as administrators. The team admin role isn't a group with a set of defined permissions. Instead, the team admin role is tasked with managing the following team assets.  

>[!NOTE]   
>Project Administrators can manage all team admin areas for all teams. 

- **Create and manage team alerts**  
	Can add and modify alerts so that the team can receive email notifications as changes occur to work items, code reviews, source control files, and builds. For details, see [Manage team alerts](../../collaborate/manage-team-notifications.md).
	>[!NOTE] 
	There is no UI associated with managing alert permissions. Instead, you can use **TFSSecurity** to manage alerts in TFS. 
- <a id="team-rooms" />**Create and manage team rooms**  
	Can add users and events to team rooms, and add team rooms. Team rooms are chat rooms limited to team members. For details, see [Collaborate in a team room](../../collaborate/collaborate-in-a-team-room.md). 
- <a id="team-rooms" />**Select team area paths**   
	Can select the default area path(s) associated with the team. These settings affect a number of Agile tools available to the team. For details, see [Set team defaults](set-team-defaults.md). 	
- **Select team sprints** 
	Can select the default area path(s) associated with the team. These settings affect a number of Agile tools available to the team. For details, see [Set team defaults](set-team-defaults.md). 
- **Configure team backlogs**   
	Can choose which backlog levels are active for a team. For example, a feature team may choose to show only the product backlog and a management team may choose to show only the feature and epic backlogs. For details, see [Select backlog levels for your team](../customize/select-backlog-navigation-levels.md).  
- **Customize the Kanban board**   
	Can fully customize the team's Kanban boards associate with the product and portfolio backlogs. This includes the following elements:
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
	* [Charts: Cumulative flow](../../report/guidance/cumulative-flow.md#configure) 
- **Manage team dashboards**  
	Can add, configure, and manage permissions (Team Services and TFS 2017) for team dashboards. For details, see [Add and manage dashboards](../../report/dashboard-permissions.md#set-permissions).  
- **Set working days off**    	
	Sprint planning and tracking tools automatically consider days off when calculating capacity and sprint burndown. Team admins can choose which days are non-working days through the team's Settings dialog. For details, see [Set working days](../customize/set-working-days.md).
- **Show bugs on backlogs and boards**   
	Team admins can choose whether bugs are treated similar to user stories and requirements or as tasks. For details, see [Set your team's preferences for tracking bugs](../customize/show-bugs-on-backlog.md).
