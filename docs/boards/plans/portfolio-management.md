---
title: Manage product and portfolio backlogs
titleSuffix: Azure Boards
description: Learn how to work with a hierarchical team structure to manage product and portfolio backlogs and track progress across teams.
ms.service: azure-devops-boards
ms.assetid: F6FF6E6B-C9AA-4681-9205-D48C8F29D94B  
ms.author: chcomley
author: chcomley
ms.topic: how-to
ai-usage: ai-assisted
monikerRange: '<= azure-devops'
ms.date: 10/20/2025
#customer intent: As a portfolio manager, I want to understand how to manage backlogs in Azure Boards so I can assign and track work and let teams manage their own backlogs.
---

# Manage product and portfolio backlogs 

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Portfolio backlogs let product owners track the work of multiple agile feature teams, monitor progress across projects, and manage risks and dependencies. Product owners create their vision and roadmap for each release and define high-level goals as Epics or Features. Feature teams break down the Epics or Features into Stories for prioritization and development. This structure gives each feature team its own backlog for planning, prioritizing, and tracking its work.

:::image type="content" source="media/pm-team-structure.png" alt-text="Diagram showing each team has its own view of the work." border="false":::

A [hierarchical team and backlog structure](configure-hierarchical-teams.md):

- Lets autonomous feature teams organize and manage their own backlogs.
- Uses portfolio management views to plan Epics and Features and monitor the progress of feature teams.
- Allows assigning backlog items to feature teams from a common backlog.

[!INCLUDE [note-configure-customize](../includes/note-configure-customize.md)]

## Prerequisites

[!INCLUDE [prerequisites-team-settings](../includes/prerequisites-team-settings.md)]

[!INCLUDE [image differences](../includes/image-differences.md)]

## View management portfolio

The following example shows the **Stories** portfolio backlog for a **Management** team. The backlog shows all items for the **Web**, **Test**, and **Production Planning** feature teams.

:::image type="content" source="media/portfolio/management-team-backlog.png" alt-text="Screenshot shows backlog parents and multiteam ownership.":::

> [!NOTE]
> You can establish child links with work items from different projects, but if the processes differ between projects, the child item's backlog doesn't show the hierarchy. You can still view all associated child items on each work item's form.

<a id="feature-team-backlog"> </a>
## View team backlog ownership and progress

The hierarchical team and backlog structure lets autonomous teams take ownership of their backlogs. Each feature team has its own home page or dashboards, product and portfolio backlogs, and boards. These pages show work relevant only to that team, based on assignments made to the work item area and iteration paths. For more information, see [About teams and Agile tools](../../organizations/settings/about-teams-and-settings.md).

To visualize ownership and progress involving other feature teams:

- [Configure your backlog to show parent epics or features owned by other teams](../backlogs/backlogs-overview.md#view-backlog-items-and-parent-items-owned-by-other-teams).
- [Create queries to include work items from other teams](../backlogs/filter-backlogs-boards-plans.md#filter-based-on-a-field). Add these queries to your team's dashboard for better visibility.
- [Use the Delivery Plans feature](review-team-plans.md) in Azure Boards to get cross-team visibility into work items across multiple teams. You can see all backlog items and features, even if they belong to different teams.

> [!TIP]
> **Node Name** in the **Column options** shows the team name assigned to each work item.

For example, the **Fabrikam Fiber Team** backlog view includes work items assigned to their area path, **Fabrikam Fiber**, and the parent Epic, which is assigned to the **Fabrikam** team. Items assigned to other teams appear with an information icon you can hover over to see more details.

:::image type="content" source="../backlogs/media/multi-ownership/backlog-parents-on.png" alt-text="Screenshot of backlog that shows parents and multiteam ownership.":::

## Assign work from a common backlog

The hierarchical team and backlog structure allows assigning work to teams from a common backlog. During sprint or product planning meetings, product owners and development leads can review the backlog and assign specific items to various teams by setting the feature team **Area path**.

In the following view of the **Production Planning** backlog, all items are assigned to the **Production Planning** team.

:::image type="content" source="media/portfolio/account-management-backlog.png" alt-text="Screenshot showing Production Planning team common backlog.":::

During the planning meeting, participants open each item, make notes, and assign the item to the appropriate team for action. They can select multiple work items and [bulk modify the area path](../backlogs/bulk-modify-work-items.md).

In the following example, all backlog Stories, Tasks, and Bugs are now assigned to feature teams, while the Features remain assigned to **Production Planning**.

:::image type="content" source="media/portfolio/account-management-backlog-assigned.png" alt-text="Screenshot shows all backlog items assigned to feature teams.":::

## Add portfolio backlog levels

If you need more than three backlog levels, add them. For more information, see [Customize backlogs and boards (Inheritance process)](../../organizations/settings/work/customize-process-backlogs-boards.md).

## Track dependencies across teams 

The simplest way to track dependencies across teams is to link work items using the **Related** link type. For time-based dependencies, use the **Predecessor** or **Successor** link types. You can then create queries to find work items with these relationships. For more information, see [Link work items to objects](../backlogs/add-link.md).
 
::: moniker range="azure-devops"
You can use Delivery Plans to track dependencies across projects within an organization. For more information, see [Track dependencies in Delivery Plans](../plans/track-dependencies.md). 
::: moniker-end

## View portfolio feature progress

::: moniker range=">= azure-devops-2022"

To view feature progress based on linked requirements, add a rollup column or view a delivery plan. For more information, see [Display rollup progress or totals](../backlogs/display-rollup.md) and [Review team delivery plans](review-team-plans.md).

::: moniker-end

::: moniker range="< azure-devops-2022"

To view feature progress based on linked requirements, use the Feature Timeline. For more information, see [View portfolio progress with the Feature Timeline](/previous-versions/azure/devops/all/extensions/feature-timeline).

::: moniker-end

## Next step

> [!div class="nextstepaction"]
> [Configure a hierarchy of teams](configure-hierarchical-teams.md)

## Related content
 
- [Create and manage your backlog](../backlogs/create-your-backlog.md)
- [Use your board](../boards/kanban-quickstart.md)
- [Assign backlog items to a sprint](../sprints/assign-work-sprint.md)
- [Tutorial: Organize your backlog and map child work items to parents](../backlogs/organize-backlog.md)
- [What is a Kanban board?](../boards/kanban-overview.md)
 