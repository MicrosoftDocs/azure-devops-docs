---
title: Manage product and portfolio backlogs
titleSuffix: Azure Boards
description: Learn how to work with a hierarchical team structure to manage product and portfolio backlogs and track progress across teams.
ms.service: azure-devops-boards
ms.assetid: F6FF6E6B-C9AA-4681-9205-D48C8F29D94B  
ms.author: chcomley
author: chcomley
ms.topic: conceptual
ai-usage: ai-assisted
monikerRange: '<= azure-devops'
ms.date: 10/16/2025
---

# Manage product and portfolio backlogs 

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Portfolio or product owners create their vision, roadmap, and goals for each release, and define high-level goals as Epics or Features. Feature teams break down the Epics or Features into User stories for prioritization and development. This structure provides each feature team with its own backlog to plan, prioritize, and track its work.

![Diagram showing each team has its own view of the work.](media/pm-team-structure.png)

Portfolio backlogs let product owners track the work of multiple agile feature teams, monitor progress across projects, and manage risks and dependencies. You can [set up a hierarchical team and backlog structure](configure-hierarchical-teams.md) to:

- Let autonomous feature teams organize and manage their own backlogs.
- Use portfolio management views to plan epics and features and monitor the progress of feature teams.
- Assign backlog items to feature teams from a common backlog.

[!INCLUDE [note-configure-customize](../includes/note-configure-customize.md)]

## Prerequisites

[!INCLUDE [prerequisites-team-settings](../includes/prerequisites-team-settings.md)]

[!INCLUDE [image differences](../includes/image-differences.md)]

## Management portfolio view

The following example shows the **Epics** portfolio backlog for the **Management** team. The backlog shows all items and features for the **Customer Service**, **Phone**, and **Web** feature teams.

![Screenshot show Backlog parents and multiteam ownership.](../backlogs/media/multi-ownership/management-team-backlog-epics.png)

> [!IMPORTANT]
> You can establish child links with work items from different projects, but if the processes differ between projects, the hierarchy isn't visible on the backlog for child items in separate projects. You can still view all associated child items on each work item form.

<a id="feature-team-backlog"> </a>
## Team backlog ownership and progress

Each feature team has its own home page or dashboards, product and portfolio backlogs, boards, and Taskboards. These pages show work relevant only to that team, based on assignments made to the work item area and iteration paths. For more information, see [About teams and Agile tools](../../organizations/settings/about-teams-and-settings.md).

To visualize ownership and progress involving other feature teams:

- [Configure your backlog to show parent epics or features owned by other teams](../backlogs/backlogs-overview.md).
- [Create queries to include work items from other teams](../work-items/move-work-items.md). Add these queries to your team's dashboard for better visibility.
- [Use the Plans feature](review-team-plans.md) in Azure Boards to get cross-team visibility into work items across multiple teams. You can see all backlog items and features, even if they belong to different teams.

> [!TIP]
> Add **Node Name** to the **Column options** to show the team name assigned to each work item.

For example, the Fabrikam Fiber Team's backlog view includes work items assigned to their area path, **Fabrikam Fiber**, and the parent Epic, which is assigned to the **Fabrikam** team. Items owned by other teams appear with an information icon. Hover over the information icons to see more details.

![Screenshot of Backlog that shows parents and multi-team ownership.](../backlogs/media/multi-ownership/backlog-parents-on.png)   

## Assign work from a common backlog

The hierarchical team and backlog structure lets autonomous teams take ownership of their backlogs and allows assigning work to teams from a common backlog. During sprint or product planning meetings, product owners and development leads can review the backlog and assign specific items to various teams by setting the feature team **Area** path.

In the following view of the Account Management backlog, all items are assigned to **Account Management**.

![Screenshot showing Management team common backlog.](media/portfolio/account-management-backlog.png) 

During the planning meeting, open each item, make notes, and assign the item to the appropriate team for action. You can select multiple work items and [bulk modify the area path](../backlogs/bulk-modify-work-items.md).

In the following example, all backlog User stories are assigned to feature teams, while all Features and Epics remain assigned to **Account Management**.

![Screenshot shows All backlog items assigned to feature teams.](media/portfolio/account-management-backlog-assigned.png) 

## Add portfolio backlogs 

If you need more than three backlog levels, add them. For more information, see [Customize backlogs and boards (Inheritance process)](../../organizations/settings/work/customize-process-backlogs-boards.md).

## Track dependencies across teams 

The simplest way to track dependencies across teams is to link work items using the **Related** link type. For time-based dependencies, use the **Predecessor** or **Successor** link types. You can then create queries to find work items with these relationships. For more information, see [Link work items to objects](../backlogs/add-link.md).
 
::: moniker range="azure-devops"
You can use Delivery Plans to track dependencies across projects within an organization. For more information, see [Track dependencies using Delivery Plans](../plans/track-dependencies.md). 
::: moniker-end

## View portfolio feature progress

::: moniker range=">= azure-devops-2022"

To view feature progress based on linked requirements, add a rollup column or view a delivery plan. For more information, see [Display rollup progress or totals](../backlogs/display-rollup.md) and [Review team delivery plans](review-team-plans.md).

::: moniker-end

::: moniker range="< azure-devops-2022"

To view feature progress based on linked requirements, use the Feature Timeline. For more information, see [View portfolio progress with the Feature Timeline](/previous-versions/azure/devops/all/extensions/feature-timeline).

::: moniker-end

## Next steps

> [!div class="nextstepaction"]
> [Configure a hierarchy of teams](configure-hierarchical-teams.md)

## Related content
 
- [Create and manage your backlog](../backlogs/create-your-backlog.md)
- [Use your board](../boards/kanban-quickstart.md)
- [Assign backlog items to a sprin](../sprints/assign-work-sprint.md)
- [Tutorial: Organize your backlog and map child work items to parents(../backlogs/organize-backlog.md)
- [What is a Kanban board?](../boards/kanban-overview.md)
 