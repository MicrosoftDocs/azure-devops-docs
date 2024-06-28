---
title: Configure WIP limits
titleSuffix: Azure Boards
description: Learn how to set Work In Progress Limits on a board in Azure Boards.
ms.custom: boards-kanban 
ms.service: azure-devops-boards
ms.assetid: d18351c1-e9e1-4c16-869d-e15ca478c748
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 06/07/2024
---


# Set Work in Progress limits

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Work-in-Progress (WIP) limits, a crucial [Kanban](kanban-overview.md) practice, restrict the work your team takes on at each stage. By emphasizing completion before starting new work, teams often experience increased productivity and improved software quality.  

Setting WIP limits for each stage adds soft constraints on the number of items allowed in the corresponding columns. Exceeding these limits is possible, but your board displays item counts next to each limit. Use this article as a guide for setting and implementing WIP limits.

[!INCLUDE [temp](../includes/prerequisites-team-settings.md)]

<a id="Initial WIP"></a>

## Determine initial WIP limits

Do the following actions to determine initial WIP limits.

* **Assess current work:** Count the items present in your existing columns to set initial WIP limits.
* **Set team-based limits:** Set limits that don't exceed two or three items per team member working within a stage. For instance, with three team members, the WIP limit is six, three developers X two tasks/developer.
* **Start low:** Begin with low limits to identify bottlenecks and address process issues promptly.

<a id="Keep within WIP"></a>

## Keep within WIP limits

After you set your WIP limits, track how well your team keeps within the limits. 

Respecting WIP limits means teams don't pull items into a column if doing so causes the number of items in the column to exceed the column limit. When they do, your board provides immediate feedback. This feedback should act as a signal to the team to focus immediately on activities to reduce the number of items in the column.

:::image type="content" source="media/WIP_2.png" alt-text="Example image of a board showing a column over the WIP limit.":::

Although simple in theory, keeping within WIP limits can force individuals, teams, and organizations out of their comfort zone. Team members who like to multitask might feel constrained. Others might find themselves without work as they wait for work to complete at an upstream stage. 

To gain the advantages of constraining work-in-progress, have your team meet frequently to discuss the process changes taking place.

<a id="Keep within WIP"></a>

## Identify bottlenecks

To optimize the flow of value, you naturally want to identify and eliminate bottlenecks. Bottlenecks indicate waste exists in the overall workflow process. 

By monitoring your board over time, you can learn where bottlenecks occur. When several items sit in a column unworked for several days, a bottleneck occurred. Bottlenecks typically occur when WIP limits are too high. However, no bottlenecks could indicate that WIP limits are too low.

Taking periodic snapshots of your board can visually catalog where work flows smoothly and where bottlenecks appear.

:::image type="content" source="media/WIP_3.png" alt-text="Screenshot of example snapshots.":::

Such snapshots can show your team the following information:

* Average number of items within a workflow stage or column  
* The ratio of items being worked on to the number of team members within a workflow stage or column 
* Number of items that stayed in a workflow stage or column for extended durations
* Number of completed items and average throughput rate over a specific time period

<a id="Eliminate waste"></a>

## Eliminate waste

To address bottlenecks in your workflow process, it’s essential to identify the sources of waste. Waste refers to anything not strictly necessary for achieving desired outcomes. In software development, common forms of waste include:

* Unused code or features
* Defects requiring rework
* Delays or waiting time
* Handoffs between teams or processes
* Insufficient requirements
* Inefficient communication

To eliminate waste, engage in team discussions to identify causes and collaboratively find acceptable solutions.

<a id="Set"></a>

## Set WIP limits

With an understanding of how you want to use WIP limits, do the following steps to set them. Ensure you already [mapped your team's work flow to columns](add-columns.md). 

1. [Open your board](kanban-quickstart.md).

2. Select the :::image type="icon" source="../../media/icons/blue-gear.png" border="false":::  gear icon to configure the board and set general team settings.  

   :::image type="content" source="../../organizations/settings/media/configure-team/open-board-settings.png" alt-text="Screenshot showing Open board settings for a team, vertical navigation.":::

3. Choose **Columns** and then a column tab to set the WIP limit for that column. 

	:::image type="content" source="media/wip-columns-settings.png" alt-text="Screenshot showing board, Customize columns, default columns, Agile process, set WIP limits."::: 

	> [!NOTE]   
	> Different column titles and choices are available based on the [process](../work-items/guidance/choose-process.md) that was used to create your project and whether your team has chosen to [treat bugs like requirements or like tasks](../../organizations/settings/show-bugs-on-backlog.md).  

4. When you're done, select **Save**.

## WIP limits, challenges, and solutions

Teams occasionally exceed WIP limits by one or two items. If you frequently exceed limits by three or more items, review processes or adjust the limits.

Your team should engage in discussions after several weeks of using WIP limits. Identify challenges, collaboratively decide on solutions, and adjust limits as needed. The following list isn't exhaustive, but covers common challenges teams and proven solutions. 

### WIP challenges

* **Social dynamics:** Team members might struggle with following rules. Some rebel, others misunderstand applicability, and some take on extra work beyond agreed limits. Multitasking beliefs can also hinder adherence.

* **Variability of work:** Uneven item sizes, for example, user stories and bugs, impact workflow. Varying estimates, like hours, days, and story points, require tailored WIP constraints.

* **Ignoring systemic issues:** Teams often persist through bottlenecks instead of tackling underlying workflow issues. 

* **Culture change:** Implementing WIP limits involves system, cultural, and team adjustments. 

### Solutions for managing WIP

* **Build a culture of team productivity:** Address the tension between individual and team productivity. Encourage practices that enhance overall workflow efficiency. 

* **Size work appropriately:** Discuss work size before starting tasks. Break down large items into smaller tasks.

* **Prioritize high-value items:** When idle, focus on moving upstream items forward. Seek help when blocked or facing delivery challenges.

* **Resource team allocation:** Ensure adequate specialists in each work stage to prevent bottlenecks.

* **Build shared understanding:** Foster team understanding of [Kanban](kanban-overview.md) practices. Hold regular retrospectives and document policies.

* **Make metrics-driven adjustments:** Monitor WIP and lead time metrics for process adjustments.

* **Manage culture change:** Apply change management principles and promote team ownership during WIP limit implementation.

## Related articles

- [Split columns](split-columns.md)  
- [Speed up work](expedite-work.md)  
- [Add the Definition of Done to a column](add-columns.md#definition-of-done)  
- [Customize cards](../../boards/boards/customize-cards.md)  
- [Show bugs on backlogs and boards](../../organizations/settings/show-bugs-on-backlog.md)  
