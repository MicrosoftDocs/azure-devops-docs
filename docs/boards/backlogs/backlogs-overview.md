---
title: Use backlogs to manage projects
titleSuffix: Azure Boards
description: Learn about how to plan, track, and organize user stories, features, and bugs using backlogs and multiple teams in Azure Boards.
ms.custom: boards-backlogs
ms.service: azure-devops-boards
ms.author: chcomley
author: chcomley
ms.topic: overview
monikerRange: '<= azure-devops'
ms.date: 06/02/2026
#customer intent: As a project administrator, I want to understand backlogs in Azure Boards and how to use them to plan and improve my team workflow.
---

# Use backlogs to manage projects

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

A *backlog* is the prioritized list of work that drives every sprint. In Azure Boards, backlogs help your team capture user stories and requirements, rank them by value, and turn them into the work that ships.

Each team owns its own product, portfolio, and sprint backlogs, and team-level settings control which work items appear on each one.

- New to backlogs? Go to [About teams and Agile tools](../../organizations/settings/about-teams-and-settings.md#each-team-gets-their-own-set-of-tools).
- Setting up a project for the first time? Go to [Configure and customize Azure Boards](../configure-customize.md).

[!INCLUDE [ai-assistance-callout](../../includes/ai-assistance-callout.md)]

## About backlogs

Use a backlog to guide your team's effort, keep scope in check, and give everyone a shared view of what's next.

Common tasks, grouped by intent:

| To do this... | Use |
|---|---|
| **Capture work** | [Define user stories, product backlog items, or requirements](create-your-backlog.md) &bull; [Add details and estimates](create-your-backlog.md#add-details-and-estimates-to-backlog-items) |
| **Organize and prioritize** | [Reorder your backlog](create-your-backlog.md#reorder-your-backlog) &bull; [Map items in a hierarchy](organize-backlog.md) &bull; [Bulk update items](bulk-modify-work-items.md) |
| **Plan and forecast** | [Drag items to a sprint](../sprints/assign-work-sprint.md) &bull; [Forecast work](../sprints/forecast.md) &bull; [Display rollup progress, counts, or totals](display-rollup.md) |
| **Coordinate across teams** | [Review work assigned to multiple teams](#multi-team) |

[!INCLUDE [note setup backlog](../includes/setup-backlogs-boards.md)]

## Product and portfolio backlogs

Azure Boards presents work items as lists. Two backlog types serve different planning horizons:

| Backlog type | What it represents | Best for |
|---|---|---|
| **Product backlog** | Your team's project plan and roadmap of work to deliver. Acts as the shared repository for what's planned, in progress, and tracked. | Day-to-day team planning of user stories, requirements, and bugs. |
| **Portfolio backlog** | A hierarchy that groups product backlog items under features, epics, or higher-level initiatives. Learn more in [Agile methodologies](/devops/plan/what-is-agile). | Long-running initiatives that span teams or are too large for a single team backlog. |

:::image type="content" source="../work-items/media/about-agile/view-backlogs.png" alt-text="Screenshot of Boards Backlogs.":::  

## Backlog configuration

> [!NOTE]
> You don't add backlogs or boards directly. When you create a team, Azure Boards automatically provisions its own set of backlogs and boards. For more information, see [About teams and Agile tools](../../organizations/settings/about-teams-and-settings.md).

Each backlog is associated with a team, and team configuration settings determine which work items appear on it. Team administrators configure the following settings for their team:

| Setting | What it controls | Reference |
|---|---|---|
| Active area paths | Which work items appear on the team's backlog. Only items assigned to the selected area paths are shown. | [Define area paths and assign to a team](../../organizations/settings/set-area-paths.md) |
| Default area path and iteration path | The values assigned to new work items created from the team backlog. | [Define area paths and assign to a team](../../organizations/settings/set-area-paths.md) |
| Active iteration paths | Which sprints the team uses for planning and capacity. | [Define iteration (sprint) paths and configure team iterations](../../organizations/settings/set-iteration-paths-sprints.md) |
| Active backlog levels | Which portfolio, product, and sprint backlogs are visible to the team. | [Select backlog levels](../../organizations/settings/select-backlog-navigation-levels.md) |
| Bug behavior | Whether bugs are treated as requirements or as tasks. | [Show bugs on backlogs or boards](../../organizations/settings/show-bugs-on-backlog.md) |

> [!TIP]
> A few extra view tweaks make large backlogs easier to scan:
> - Each team member has their own controls (**Expand/Collapse one level**, **Column Options**, **Backlog level selector**, **View options**, and **Filter**). Options set per backlog level are distinct and persist until changed. For more information, see [Configure your backlog view](configure-your-backlog-view.md).
> - To reduce vertical scrolling on large backlogs and boards, turn on the **Condensed card display** option in your team's board settings.

### Configure a shared backlog view across teams

Each team controls its own settings and backlog configuration independently &mdash; you can't define one configuration that other teams subscribe to. **Column Options** and **View Options** are also per-user, so there's no built-in way to enforce a common view across a team.

::: moniker range="< azure-devops"
You can, however, set default column options for all team members by editing the process configuration. For more information, see [Process configuration XML element reference, Set default columns](../../reference/xml/process-configuration-xml-element.md#columns).
::: moniker-end

## Define work items and create your backlog

Build your project plan by adding work items to your backlog. Each work item type tracks a different kind of work:

| Work item type | Use it to |
|---|---|
| **User story**, **product backlog item**, or **requirement** | Capture a unit of customer-facing value to plan and deliver. Go to [Create your backlog](create-your-backlog.md). |
| **Feature** and **epic** | Group related stories into a multi-tier hierarchy for portfolio planning. Go to [Organize your backlog](organize-backlog.md). |
| **Bug** | Track defects. Choose whether bugs appear as requirements or tasks per team. Go to [Manage bugs](manage-bugs.md). |
| **Issue** or **impediment** | Track blockers and risks separate from delivery work. Go to [Manage issues](manage-issues-impediments.md). |

If your team uses GitHub for source control, you can also start work directly from a backlog item with [GitHub Copilot integration for Azure Boards](../github/work-item-integration-github-copilot.md), which creates a branch, drafts a pull request, and updates the work item with progress.

<a id="stack-rank"></a>
<a id="backlog-priority-or-stack-rank-order"></a>

## Backlog priority and stack rank order

Rank backlogs from top to bottom: the position of an item on the page *is* its priority. When you drag an item, Azure Boards updates a hidden ranking field in the background:

| Process | Field updated |
|---|---|
| Scrum | *Backlog Priority* |
| Agile, CMMI | *Stack Rank* |

These fields don't appear on the work item form by default, but you can [query and report on them](../queries/planning-ranking-priorities.md). For step-by-step reordering, go to [Reorder your backlog](create-your-backlog.md#move-items-priority-order).

For bulk reordering, use multiselect to move items to the top, bottom, or a specific position on the page. To reorder many items at once, edit them in [Excel](../backlogs/office/bulk-add-modify-work-items-excel.md): export a query, update *Backlog Priority* or *Stack Rank*, and publish.

> [!WARNING]
> Don't use bulk modify to change *Backlog Priority* or *Stack Rank*. Bulk modify assigns the same value to every selected item, which wipes out the relative ordering. Use multiselect or Excel (earlier in this article) instead.

## In Progress items and work listed on the backlog

Backlogs show work in a Proposed, In Progress, or Resolved category state. The following table maps category states to what appears on the backlog and where to find items that don't:

| Category state | Example workflow states | Shown on backlog? | Where to find it |
|---|---|---|---|
| Proposed | New, Approved | Yes | Default view |
| In Progress | Active, Committed | Yes, unless you turn off the **In Progress** toggle | Toggle [**In Progress**](create-your-backlog.md#convert-ideas) back on; useful to leave off when [forecasting](../sprints/forecast.md) |
| Resolved | Resolved | Yes | Default view |
| Completed | Done, Closed | No | The **Recently completed** pivot on the **Work Items** page, or a [custom query](../queries/using-queries.md) |

If your backlog is missing items you expected, the **In Progress** toggle is the most common culprit. For more on category-to-state mapping, see [Workflow states and state categories](../work-items/workflow-and-state-categories.md).

## Map and reparent backlog items

Group related work by parenting backlog items under features and epics. This structure creates a three-tier hierarchy that makes rollup, planning, and cross-team coordination easier:

| Level | Purpose |
|---|---|
| **Epic** | A long-running initiative that spans multiple features. |
| **Feature** | A shippable capability composed of related backlog items. |
| **Backlog item** (user story, product backlog item, or requirement) | A single unit of customer-facing value. |

The following screenshot shows the Customer Service team's backlog items grouped under two features and one epic:

:::image type="content" source="media/overview/customer-service-backlog-parents-on.png" alt-text="Screenshot of Backlog that shows parents and multi-team ownership.":::

For step-by-step mapping and reparenting, see [Organize your backlog](organize-backlog.md).

## Velocity

When you assign backlog items to sprints, Azure Boards calculates an in-context velocity report for both product and portfolio backlogs. Velocity helps your team forecast how much work it can complete in upcoming sprints based on past performance.

Configure the report to measure work by:

- Work item count
- Story Points or Effort
- Remaining Work
- Any other numeric field on your work item type

:::image type="content" source="../../report/dashboards/media/velocity/analytics-velocity-azure-devops.png" alt-text="Screenshot shows Velocity Analytics which displays a bar chart.":::

For more information, see [View and configure team velocity](../../report/dashboards/team-velocity.md).

[!INCLUDE [display rollup](../includes/display-rollup-section.md)]

<a id="multi-team"></a>

## Work with multi-team ownership of backlog items  

In a project with multiple teams, hierarchical views can include items belonging to other teams. The following rules govern what's visible and what you can change:

| What's visible | Your team's backlog items (matched by area path), plus parent epics and features from other teams when **Parents** is on. |
|---|---|
| You can reorder | Only items in your team's area paths. |
| You can reparent | Items you own, plus items other teams own. |
| You can't change | Items marked with the information icon :::image type="icon" source="../../media/icons/info.png" border="false":::. Another team owns them. |

> [!TIP]
> Add the **Node Name** field as a column to identify which area path (and team) owns each item.

### View backlog items and parent items owned by other teams

When **Parents** is on, your backlog shows the parent epic of any feature or backlog item your team owns, even if another team owns the parent.

:::image type="content" source="media/multi-ownership/customer-service-backlog-parents-on-s155.png" alt-text="Screenshot of backlog items and parent items owned by other teams.":::

For more information, see [Define area paths and assign to a team](../../organizations/settings/set-area-paths.md).

### View epics and child items owned by other teams

Drill into a portfolio backlog to view all child items, even those owned by other teams. For example, the **Management** team's **Epics** backlog expands to show features and backlog items owned by the Customer Service, Phone, and Web teams.

:::image type="content" source="media/multi-ownership/management-team-backlog-epics-s155.png" alt-text="Screenshot of view Epics and child items owned by other teams.":::

This split lets management teams focus on epics and features while development teams focus on the backlog items they deliver. A typical structure pairs two management teams with three development teams. For more information, see [Create or add a team](../../organizations/settings/add-teams.md) and [Manage your product and portfolio backlogs](../plans/portfolio-management.md).

> [!IMPORTANT]
> You can create child links to work items in other projects, but if the projects use different processes, the cross-project hierarchy isn't visible on the backlog. Open the work item form to view all associated child items.

<a id="leaf-node"></a>

## Display leaf node work items

[!INCLUDE [describe leaf node](../includes/display-leaf-nodes.md)]  

## Product backlog controls

The product backlog toolbar groups controls into pivots, view options, and command menus. For full details, see [Configure your backlog view](configure-your-backlog-view.md).

**Pivots**

| Control | Description |
|---|---|
| **Backlog** | [Show the work item list](create-your-backlog.md). |
| **Analytics** | [Show in-context Analytics reports](../../report/dashboards/overview.md#work-tracking-analytics). |
| Backlog selector :::image type="icon" source="../../media/icons/backlogs.png" border="false"::: | [Switch between portfolio, product, and sprint backlogs](create-your-backlog.md). |

**View options** :::image type="icon" source="../../media/icons/view-options-icon.png" border="false":::

| Toggle | Description |
|---|---|
| **Parents** | [Show parent epics and features](organize-backlog.md). Not available on the top-level portfolio backlog. |
| **Forecasting** | [Estimate which items fit in upcoming sprints](../sprints/forecast.md). Product backlog only. |
| **In Progress items** | [Show or hide items in Active, Committed, or Resolved states](create-your-backlog.md#show-hide-in-progress). |
| **Completed child items** | [Show or hide completed child items](create-your-backlog.md#show-hide-completed). |
| **Mapping** | [Open the mapping pane to parent items by drag](organize-backlog.md). Not available on the top-level portfolio backlog. |
| **Planning** | [Open the planning pane to drag items into sprints](../sprints/assign-work-sprint.md). |

**Toolbar actions**

| Control | Description |
|---|---|
| Filter :::image type="icon" source="../media/icons/filter-icon.png"::: | [Filter the backlog by keyword, tag, or field](filter-backlogs-boards-plans.md). |
| Settings :::image type="icon" source="../../media/icons/blue-gear.png" border="false"::: | [Manage teams and configure team tools](../../organizations/settings/manage-teams.md). |
| Expand/Collapse :::image type="icon" source="../media/icons/expand_icon.png"::: :::image type="icon" source="../media/icons/collapse_icon.png"::: | Expand or collapse one level of the hierarchy. |
| Full screen :::image type="icon" source="../../media/icons/full-screen-icon.png"::: :::image type="icon" source="../../media/icons/exit-full-screen-icon.png"::: | Enter or exit full-screen mode. |
| More commands :::image type="icon" source="../../media/icons/actions-icon.png"::: | [Set column options](set-column-options.md), [create a query](../queries/organize-queries.md), or [send email](../work-items/email-work-items.md). |

> [!IMPORTANT]
> When **Parents** is on, **Create Query** and **Send email** still only act on items at the currently selected backlog level.

## Permissions and access

What you can do on a backlog depends on your access level and group membership:

| Access level or group | What you can do |
|---|---|
| **Basic** access | Full access to all backlog and board features. |
| **Stakeholder** access | View backlogs and boards, add and edit work items, but limited control over backlog ordering and configuration. For details, see [Stakeholder access quick reference](../../organizations/security/stakeholder-access.md). |
| **Contributors** group | Use most features under **Boards** or **Work** (with Basic access). |
| **Project Administrators** group | Configure team settings, manage area and iteration paths, and customize backlog levels. |

For the full permission matrix, see [Set work tracking permissions](../../organizations/security/set-permissions-access-work-tracking.md). To grant access, see [Add users to a project or team](../../organizations/security/add-users-team-project.md).

[!INCLUDE [add portfolio backlogs and boards](../includes/add-portfolio-backlogs.md)]

## Next step

> [!div class="nextstepaction"]
> [Create your backlog](create-your-backlog.md)

## Related content

- [Configure your backlog view](configure-your-backlog-view.md)
- [Navigate the web portal](../../project/navigation/index.md)
- [Learn about Kanban boards](../boards/kanban-overview.md)
- [Discover what Agile is](/devops/plan/what-is-agile)
