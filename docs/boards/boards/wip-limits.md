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

To gain the advantages of constraining work-in-progress, have your team meet frequently to discuss the process changes taking place.

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

Eliminating waste calls for team discussions to identify causes and solutions acceptable to the team.

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

## WIP limits, challenges, and solutions

Teams occasionally exceed WIP limits by one or two items. However, if your team frequently exceeds the limits by three or more items, they should review processes or adjust the limits.

After a team has worked with WIP limits for several weeks, discuss the challenges team members have. Then, decide which solutions they'd like to use and adjust the limits as needed. The following list, although not exhaustive, indicates some of the common challenges teams come across and proven solutions to overcome them. 

### WIP challenges

* **Social dynamics.** When it comes to following rules, team members can feel challenged. Some naturally want to rebel. Others don't see that the rule applies to them or don't see what they do as breaking the rules. Some team members may take on extra work that's outside the scope of what's been agreed to. And, still others don't want to give up multitasking as they believe it's the key to their productivity and individual achievement. 

* **Variability of work in progress.** Wide variability in the size of work items&mdash;users stories and bugs—can negatively influence the overall workflow. For example, items with estimates that vary in size from 4 hours to 14 days, or 2 to 55 story points, can't be counted the same when it comes to constraining work in progress.

* **Ignoring systemic problems.** Instead of addressing workflow problems when bottlenecks occur, teams soldier on, putting in more time to overcome the bottleneck. 

* **Culture change.** Adopting WIP limits introduces changes to the system, culture, and team. 

### Solutions for managing WIP

* **Build a culture of team productivity.** Address the natural tension that exists between individual productivity versus team productivity. Identify ways in which team members can enhance the overall productivity of the team and workflow process. 

* **Size work to minimize variability.** Before work starts on any item, the team should discuss the overall size of work required and determine if it can be broken down into smaller tasks. 

* **Focus on the flow of high priority items.** When idle, team members ask how they can help move an upstream item forward. When blocked or challenged to deliver an item on time, team members ask for help with completing an item.

* **Resource team capacity for each work stage.** Bottlenecks can occur when there aren't enough specialists who work in a particular stage. Determine ways to either increase team skills within each work stage, or add resources as needed to meet an understaffed work stage.

* **Build shared understanding.** Continuously strive to increase the team's understanding of how to work using Kanban practices. Take actions that allow team members to contribute to process changes. Consider scheduling regular retrospectives or team meetings to discuss what works well and what needs changing. Document team policies to limit ambiguity.

* **Use metrics to adjust processes.** Periodically check Kanban metrics of work in progress and lead time to determine when changes need to be made. 

* **Manage culture changes mindfully.** People want to do their best work&mdash;a core tenet underlying Kanban and its associated disciplines. Apply change management principles as you adopt new practices. Create greater ownership within the team for the success of implementing WIP limits.

## Related articles

- [Split columns](split-columns.md)  
- [Speed up work](expedite-work.md)  
- [Add the Definition of Done to a column](add-columns.md#definition-of-done)  
- [Customize cards](../../boards/boards/customize-cards.md)  
- [Show bugs on backlogs and boards](../../organizations/settings/show-bugs-on-backlog.md)  
