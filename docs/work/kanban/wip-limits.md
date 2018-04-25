---
title: Configure WIP limits for Kanban board
titleSuffix: VSTS & TFS
description: Set Work In Progress Limits on the Kanban board in Visual Studio Team Services and Team Foundation Server 
ms.global_help.title: Set WIP limits
ms.global_help.keywords: ms.vss-work-web.boards-hub, 5    
ms.technology: devops-agile
ms.prod: devops
ms.assetid: d18351c1-e9e1-4c16-869d-e15ca478c748
ms.manager: douge
ms.author: kaelliauthor: KathrynEE
ms.topic: conceptual
ms.date: 03/20/2018
---


# Work in Progress limits

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

An essential Kanban practice&mdash;Work in Progress limits, aka "WIP limits"&mdash;constrains the amount of work your team undertakes at each work stage. It's designed to focus your team on completing items before starting new work. While counter-intuitive at first, many teams find WIP limits helps them increase their productivity and improve their software quality.  

You define WIP limits for each work stage, corresponding to each intermediate column. The limit sets a soft constraint on the number of items allowed within the column. Nothing actually prevents you from moving more items into the column and exceeding the limit. Your Kanban board shows the count of items at each stage next to each limit.

<img src="_img/WIP_1.png" alt="Kanban board columns with WIP limits" style="border: 1px solid #C3C3C3;" /> 

While [setting WIP limits](#Set) is simple, adhering to the limits takes a team commitment. Successful adoption of WIP limits involves a culture change. It moves teams from a focus on individual productivity to one of team productivity. 


<a id="Initial WIP" />

##Determine initial WIP limits

To get started, have your team determine the initial WIP limits to set and how they'll use and monitor them. Beyond that, few rules apply to what numbers to set as they can vary based on several factors. Here are two guidelines to help you determine what limits to set:

* Set limits based on current works in progress. Count the items present in your existing Kanban columns.

* Set limits that don't exceed 2 or 3 items per team member that works within a stage. For example, if you have three team members and each team member can work on no more than two tasks at a time, the resulting WIP limit is 6 (= 3 developers X 2 tasks/developer).

Starting low may help your team discover bottlenecks more quickly and identify process issues to address.

After you've defined an initial set of WIP limits, you'll likely want to fine tune them as your project progresses.

If you're new to Kanban, review [Kanban basics](kanban-basics.md) to get an overview of how to access your board and implement Kanban.


<a id="Keep within WIP" />

##Keep within WIP limits

After you've set your WIP limits, you'll want to track how well your team keeps within the limits. 

Respecting WIP limits means teams don't pull items into a column if doing so causes the number of items in the column to exceed the column limit. When they do, your Kanban board provides immediate feedback. This feedback should act as a signal to the team to focus immediately on activities to reduce the number of items in the column.

<img src="_img/WIP_2.png" alt="Kanban board showing a column over the WIP limit" style="border: 1px solid #C3C3C3;" /> 

Although simple in theory, keeping within WIP limits can force individuals, teams, and organizations out of their comfort zone. Team members who like to multitask might feel unnecessarily constrained. Others might find themselves without work as they wait for work to complete at an upstream stage. 

To gain the advantages of constraining work-in-progress, have your team meet frequently to discuss the process changes taking place. As a starting point, consider hosting discussions around some of the [challenges and solutions to support successful implementation of WIP limits](best-practices-kanban.md#practices) provided below.


<a id="Keep within WIP" />

##Identify bottlenecks

To optimize the flow of value, you naturally want to identify and eliminate bottlenecks. Bottlenecks indicate waste exists in the overall workflow process. 

By monitoring your Kanban board over time, you can learn where bottlenecks occur. When several items sit in a column unworked for several days, a bottleneck has occurred. Bottlenecks typically occur when WIP limits are too high. On the other hand, no bottlenecks could indicate that WIP limits are too low. 

The free eBook, [Kanban and Scrum - making the most of both](http://www.infoq.com/minibooks/kanban-scrum-minibook), provides this guidance:

*Too low WIP limit => idle people => bad productivity*
*Too high WIP limit => idle tasks => bad lead time* 

Taking periodic snapshots of your Kanban board can visually catalog where work flows smoothly and where bottlenecks appear.

![Snapshots](_img/WIP_3.png)

Such snapshots can show your team:

* How many items on average reside within a workflow stage/column  
* How many items are being worked versus team members who work within a workflow stage/column  
* How many and which items remained in a workflow stage/column for long periods of time  
* How many items did the team complete at the end of a one, two, or three week period?  

<a id="Eliminate waste" />

## Eliminate waste

Because bottlenecks signal waste in your workflow process, you'll want to identify the source of the waste. Kanban defines waste as anything not strictly needed to produce desired outcomes.

Common wastes in software development include:

* Unused code or features
* Defects that lead to re-work
* Delays or time spent waiting for something
* Handoffs from one person, team, or business process to another
* Insufficient requirements
* Slow or poor communication

Eliminating waste calls for team discussions to identify causes and solutions acceptable to the team. In addition to addressing the [challenges and solutions posed by WIP limits](best-practices-kanban.md#practices), the team may decide to adjust their workflow process or WIP limits. 


<a id="Set" />

##Set WIP limits

With an understanding of how you'll use WIT limits, here's how you set them.
  
> [!TIP]    
> If you haven't yet [mapped your team's work flow to Kanban columns](add-columns.md), do that first. For information about accessing your Kanban board, see [Kanban basics](kanban-basics.md). 

1. From your Kanban board, click ![settings icon](../_img/icons/team-settings-gear-icon.png) and as needed, click Columns. Go to [Kanban basics](kanban-basics.md) for information about accessing your Kanban board. If you're not a team admin, [get added as one](../scale/add-team-administrator.md). Only team and project admins can customize columns.    
	::: moniker range="vsts || >= tfs-2017 <= tfs-2018" 
	![Kanban board, open common configuration settings](../customize/_img/customize-cards/open-config-dialog.png)
    ::: moniker-end
    ::: moniker range="tfs-2013"          
	![Open configuration settings](../customize/_img/kanban-card-customize-open-settings.png)    
    ::: moniker-end 
	You'll see different column titles and choices based on the [process](../work-items/guidance/choose-process.md) used to create your team project  and whether your team has chosen to [treat bugs like requirements or like tasks](../customize/show-bugs-on-backlog.md).  
 
2. Click a column tab to set the WIP limit for that column. 
	::: moniker range="vsts || >= tfs-2017 <= tfs-2018"   
	<img src="_img/wip-columns-settings.png" alt="Kanban board, Customize columns, default columns, Agile process, set WIP limits" style="border: 1px solid #C3C3C3;" /> 
    ::: moniker-end   
    ::: moniker range="tfs-2015"      
	**TFS 2015.1 and later versions**   
	<img src="_img/wip-columns-settings.png" alt="Kanban board, Customize columns, default columns, Agile process, set WIP limits" style="border: 1px solid #C3C3C3;" /> 	
	**TFS 2015**     
	Set the WIP limits for each intermediate column.     
	![Customize WIP limits](_img/WIP_5.png)    
    ::: moniker-end
    ::: moniker range="tfs-2013"          
	![Customize WIP limits](_img/WIP_5.png)    
    ::: moniker-end

## Related articles

Here are some additional ways your team can implement Kanban practices and customize the board:

* [Split columns](split-columns.md)  
* [Expedite work](expedite-work.md)  
* [Definition of Done](definition-of-done.md)  
* [Customize cards](../customize/customize-cards.md)  
* [Show bugs on backlogs and boards](../customize/show-bugs-on-backlog.md)  

