---
title: Set Work in Progress Limits in Azure Boards
titleSuffix: Azure Boards
description: Set Work In Progress limits in Azure Boards to streamline your Kanban process, reduce bottlenecks, and enhance team collaboration. Get started now.
ms.custom: boards-kanban, copilot-scenario-highlight
ms.service: azure-devops-boards
ms.author: chcomley
ms.reviewer: chcomley
author: chcomley
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 03/24/2026
ai-usage: ai-assisted
---


# Set Work in Progress limits

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Work-in-Progress (WIP) limits are a core [Kanban](kanban-overview.md) practice that restricts how many items your team works on at each stage. By focusing on finishing work before starting new work, teams improve throughput and software quality.

WIP limits set soft constraints on the number of items allowed in each board column. You can exceed these limits, but the board highlights the column count so your team can take action. This article explains how to determine, set, and manage WIP limits.

[!INCLUDE [ai-assistance-mcp-server-tip](../../includes/ai-assistance-mcp-server-tip.md)]

## Prerequisites

[!INCLUDE [temp](../includes/prerequisites-team-settings.md)]

<a id="Initial WIP"></a>

## Determine initial WIP limits

Use the following guidelines to set your starting WIP limits:

* **Count current work** — Review items in each column to establish a baseline.
* **Scale by team size** — Allow two to three items per team member in a stage. For example, three developers × two items each = a WIP limit of six.
* **Start low** — Lower limits surface bottlenecks faster, so you can address process issues early.

<a id="Keep within WIP"></a>

## Keep within WIP limits

After you set WIP limits, track how well your team stays within them.

Respecting WIP limits means not pulling items into a column when doing so would exceed the limit. When a column goes over its limit, the board highlights it immediately — signaling the team to finish existing work before pulling new items.

:::image type="content" source="media/WIP_2.png" alt-text="Example image of a board showing a column over the WIP limit.":::

Staying within WIP limits can be uncomfortable at first. Team members who prefer to multitask might feel constrained, while others might wait for upstream work to finish. Meet frequently as a team to discuss these adjustments and reinforce the practice.

<a id="Keep within WIP"></a>

## Identify bottlenecks

Bottlenecks — columns where items sit unworked for days — indicate waste in your workflow. Monitor your board over time to spot them. Frequent bottlenecks usually mean WIP limits are too high; no bottlenecks at all can mean limits are too low.

Take periodic snapshots of your board to see where work flows smoothly and where it stalls.

:::image type="content" source="media/WIP_3.png" alt-text="Screenshot of example snapshots.":::

Snapshots help your team track:

* Average item count per column
* Ratio of active items to team members per column
* Items that stayed in a column for extended periods
* Completed items and average throughput over time

<a id="Eliminate waste"></a>

## Eliminate waste

Waste is anything that doesn't contribute to delivering value. To address bottlenecks, identify and remove the sources of waste in your workflow. Common forms of waste in software development include:

* Unused code or features
* Defects that require rework
* Waiting time and delays
* Unnecessary handoffs between teams
* Incomplete or unclear requirements
* Inefficient communication

Discuss these sources as a team and collaboratively find solutions.

<a id="Set"></a>

## Set WIP limits

Before you set WIP limits, make sure you [mapped your team's workflow to columns](add-columns.md).

1. [Open your board](kanban-quickstart.md).

1. Select :::image type="icon" source="../../media/icons/blue-gear.png" border="false"::: to open board settings.

   :::image type="content" source="../../organizations/settings/media/configure-team/open-board-settings.png" alt-text="Screenshot showing Open board settings for a team, vertical navigation.":::

1. Select **Columns**, then select a column tab and enter the WIP limit.

	:::image type="content" source="media/wip-columns-settings.png" alt-text="Screenshot showing board, Customize columns, default columns, Agile process, set WIP limits."::: 

	> [!NOTE]   
	> Available column titles vary based on the [process](../work-items/guidance/choose-process.md) your project uses and whether your team [treats bugs like requirements or tasks](../../organizations/settings/show-bugs-on-backlog.md).  

1. Select **Save**.

## Challenges and solutions

Exceeding WIP limits by one or two items is normal. If your team consistently exceeds limits by three or more, review your processes or adjust the limits.

After several weeks of using WIP limits, discuss what's working and what isn't. The following lists cover common challenges and proven solutions.

### Common challenges

* **Social dynamics** — Some team members resist rules, take on extra work, or believe multitasking is more productive.
* **Variability of work** — Uneven item sizes (user stories vs. bugs) and mixed estimates (hours, days, story points) make a single WIP limit hard to apply evenly.
* **Ignoring systemic problems** — Teams push through bottlenecks instead of addressing the underlying workflow issues.
* **Culture change** — Adopting WIP limits requires adjustments to systems, team habits, and organizational culture.

### Proven solutions

* **Prioritize team productivity** — Shift focus from individual output to overall flow. Encourage collaboration over multitasking.
* **Right-size work items** — Discuss item size before starting. Break large items into smaller, consistently sized tasks.
* **Help upstream work move forward** — When idle, assist with upstream items or help unblock teammates instead of pulling new work.
* **Staff stages adequately** — Ensure enough specialists in each workflow stage to prevent bottlenecks.
* **Build shared understanding** — Hold regular retrospectives, document team policies, and reinforce [Kanban](kanban-overview.md) principles.
* **Use metrics to adjust** — Track WIP counts and lead times, and adjust limits based on the data.
* **Support culture change** — Apply change management principles and give the team ownership of WIP limit decisions.

<a id="use-ai-assistance"></a>

## Use AI to analyze work in progress

If you connect the [Azure Boards MCP Server](../../mcp-server/mcp-server-overview.md) to your AI agent in agent mode, you can use natural language prompts to analyze work in progress across your board columns.

| Task | Example prompt |
|------|----------------|
| Count items per column | `How many work items are in each workflow state for my team's backlog?` |
| Find overloaded columns | `Show me all active work items in the 'In Progress' state for the <Contoso> project` |
| Identify stale items | `Find work items in the 'Active' state that haven't been updated in the last 14 days` |
| Check team capacity | `List all work items assigned to <Jamal> that are currently in progress` |
| Analyze per-person WIP | `Show the count of active work items per team member in area path <Contoso\\Frontend> and flag anyone with more than 5` |
| Detect WIP spikes | `Compare the count of in-progress work items this week vs last week for my team in <Contoso>` |
| Find multitasking risks | `List team members in <Contoso> who have active work items across more than 2 different features` |
| Review column throughput | `Show how many work items moved from Active to Resolved per week over the last 4 weeks in <Contoso>` |
| Identify flow blockers | `List work items in <Contoso> that have been in the same state for longer than the average time items spend in that state` |
| Suggest WIP rebalancing | `Show team members in <Contoso> with no active work items alongside those with more than 3` |

> [!NOTE]
> Agent mode and the MCP Server use natural language, so you can adjust these prompts or ask follow-up questions to refine the results.

## Related content

- [Split columns](split-columns.md)  
- [Speed up work](expedite-work.md)  
- [Add the Definition of Done to a column](add-columns.md#definition-of-done)  
- [Customize cards](../../boards/boards/customize-cards.md)  
- [Show bugs on backlogs and boards](../../organizations/settings/show-bugs-on-backlog.md)  
