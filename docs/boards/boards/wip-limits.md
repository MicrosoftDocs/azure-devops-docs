---
title: Configure WIP limits
titleSuffix: Azure Boards
description: Learn how to set Work In Progress Limits on the Kanban board in Azure Boards.
ms.custom: boards-kanban 
ms.service: azure-devops-boards
ms.assetid: d18351c1-e9e1-4c16-869d-e15ca478c748
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 06/07/2023
---


# Set Work in Progress limits

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

An essential Kanban practice&mdash;Work in Progress limits, referred to as "WIP limits"&mdash;constrains the amount of work your team undertakes at each work stage. It's designed to focus your team on completing items before starting new work. While counter-intuitive at first, many teams find WIP limits helps them increase their productivity and improve their software quality.  

You define WIP limits for each work stage, corresponding to each intermediate column. The limit sets a soft constraint on the number of items allowed within the column. Nothing prevents you from moving more items into the column and exceeding the limit. Your Kanban board shows the count of items at each stage next to each limit.

[Setting WIP limits](#Set) is simple, but adhering to the limits takes a team commitment. Successful adoption of WIP limits involves a culture change. It moves teams from a focus on individual productivity to one of team productivity. 

For more information, see [Kanban overview](kanban-overview.md).

[!INCLUDE [temp](../includes/prerequisites-team-settings.md)]

<a id="Initial WIP" />

## Determine initial WIP limits

Have your team determine the initial WIP limits to set and how to use and monitor them. Few rules apply to what numbers to set as they can vary based on several factors. Take the following actions to help you determine what limits to set:

* Set limits based on current works in progress. Count the items present in your existing Kanban columns.
* Set limits that don't exceed two or three items per team member that works within a stage. For example, if you have three team members and each team member can work on no more than two tasks at a time, the resulting WIP limit is 6 (= 3 developers X 2 tasks/developer).
* Start with low limits to help your team discover bottlenecks more quickly and identify process issues to address.

<a id="Keep within WIP" />

## Keep within WIP limits

After you've set your WIP limits, you'll want to track how well your team keeps within the limits. 

Respecting WIP limits means teams don't pull items into a column if doing so causes the number of items in the column to exceed the column limit. When they do, your Kanban board provides immediate feedback. This feedback should act as a signal to the team to focus immediately on activities to reduce the number of items in the column.

:::image type="content" source="media/WIP_2.png" alt-text="Example image of a Kanban board showing a column over the WIP limit.":::

Although simple in theory, keeping within WIP limits can force individuals, teams, and organizations out of their comfort zone. Team members who like to multitask might feel constrained. Others might find themselves without work as they wait for work to complete at an upstream stage. 

To gain the advantages of constraining work-in-progress, have your team meet frequently to discuss the process changes taking place. Consider hosting discussions around some of the [challenges and solutions to support successful implementation of WIP limits](best-practices-kanban.md#practices), in the following sections.

<a id="Keep within WIP" />

## Identify bottlenecks

To optimize the flow of value, you naturally want to identify and eliminate bottlenecks. Bottlenecks indicate waste exists in the overall workflow process. 

By monitoring your Kanban board over time, you can learn where bottlenecks occur. When several items sit in a column unworked for several days, a bottleneck has occurred. Bottlenecks typically occur when WIP limits are too high. However, no bottlenecks could indicate that WIP limits are too low.

Taking periodic snapshots of your Kanban board can visually catalog where work flows smoothly and where bottlenecks appear.

:::image type="content" source="media/WIP_3.png" alt-text="Screenshot of example snapshots.":::

Such snapshots can show your team the following information:

* How many items on average exist within a workflow stage/column  
* How many items are being worked versus team members who work within a workflow stage/column  
* How many and which items remained in a workflow stage/column for long periods of time  
* How many items did the team complete at the end of a one, two, or three week period 

<a id="Eliminate waste" />

## Eliminate waste

Because bottlenecks signal waste in your workflow process, you need to identify the source of the waste. Kanban defines waste as anything not strictly needed to produce desired outcomes.

Common wastes in software development include:

* Unused code or features
* Defects leading to rework
* Delays or time spent waiting for something
* Handoffs from one person, team, or business process to another
* Insufficient requirements
* Slow or poor communication

Eliminating waste calls for team discussions to identify causes and solutions acceptable to the team. Along with addressing the [challenges and solutions posed by WIP limits](best-practices-kanban.md#practices), the team may decide to adjust their workflow process or WIP limits. 

<a id="Set" />

## Set WIP limits

With an understanding of how you want to use WIP limits, do the following steps to set them. If you haven't [mapped your team's work flow to Kanban columns](add-columns.md), do that first. 

::: moniker range=">= azure-devops-2019"

1. [Open your Kanban board](kanban-quickstart.md).

2. Select the :::image type="icon" source="../../media/icons/blue-gear.png" border="false":::  gear icon to configure the board and set general team settings.  

   :::image type="content" source="../../organizations/settings/media/configure-team/open-board-settings.png" alt-text="Screenshot showing Open board settings for a team, vertical navigation.":::

3. Choose **Columns** and then a column tab to set the WIP limit for that column. 

	:::image type="content" source="media/wip-columns-settings.png" alt-text="Screenshot showing Kanban board, Customize columns, default columns, Agile process, set WIP limits."::: 

	> [!NOTE]   
	> Different column titles and choices are available based on the [process](../work-items/guidance/choose-process.md) that was used to create your project and whether your team has chosen to [treat bugs like requirements or like tasks](../../organizations/settings/show-bugs-on-backlog.md).  

4. When you're done, select **Save**.  

::: moniker-end 

::: moniker range="tfs-2018"
1. [Open your Kanban board](kanban-quickstart.md).

2. Choose ![settings icon](../../media/icons/team-settings-gear-icon.png) to open the common configuration settings dialog for the Kanban board. 

   :::image type="content" source="media/add-columns-open-settings-ts.png" alt-text="Screenshot showing Kanban board, open common configuration settings.":::

3. Choose **Columns** and then a column tab to set the WIP limit for that column. 

   :::image type="content" source="media/wip-columns-settings.png" alt-text="Screenshot of the Kanban board, Customize columns, default columns, Agile process, set WIP limits.":::

	> [!NOTE]   
	> Different column titles and choices are available based on the [process](../work-items/guidance/choose-process.md) that was used to create your project and whether your team has chosen to [treat bugs like requirements or like tasks](../../organizations/settings/show-bugs-on-backlog.md).  

4. When you're done, select **Save**.  
::: moniker-end

## Related articles

- [Split columns](split-columns.md)  
- [Speed up work](expedite-work.md)  
- [Definition of Done](definition-of-done.md)  
- [Customize cards](../../boards/boards/customize-cards.md)  
- [Show bugs on backlogs and boards](../../organizations/settings/show-bugs-on-backlog.md)  
