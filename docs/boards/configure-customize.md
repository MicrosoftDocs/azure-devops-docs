---
title: Configure and Customize Azure Boards
titleSuffix: Azure Boards
description: Explore options for customizing and configuring Azure Boards and the effect on tools available.
ms.service: azure-devops-boards
ms.topic: concept-article
ms.assetid: 
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 09/29/2025
#customer intent: As an Azure DevOps developer, I want to explore options for customizing and configuring Azure Boards, so I can best support my specific portfolio, dependencies, and monitoring needs.
---

# Configure and customize Azure Boards

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

Customize Azure Boards to match your team's processes and portfolio needs. This article describes recommended tasks and considerations for administrators who configure area/iteration structure, work item types (WITs), workflows, and board behavior.

If you already know the configuration tasks you want, start with these articles:

- [Customize cards](boards/customize-cards.md)
- [Manage columns](backlogs/set-column-options.md)
- [Expedite work with swimlanes](boards/expedite-work.md)
- [Configure your backlog view](backlogs/configure-your-backlog-view.md)

> [!NOTE]  
> Most guidance here applies to both cloud and on-premises deployments. Some features (for example, Rollup, Analytics, and portfolio planning tools) are cloud-only.

## Key considerations

Before you change settings, decide how teams will work and what management needs to see. Consider:

- Project vs. team structure: How many teams, area path hierarchy, and rollup views do you need?
- Iterations: Sprint cadence, release grouping, and forecast horizon.
- Work item scheme: Which WITs will teams use (Features, Stories/Issues/PBIs, Tasks, Epics)?
- Reporting needs: Which fields, rollups, and analytics views must be available?
- Customizations: Custom fields, workflows, and WITs affect boards, backlogs, and reports.
- Permissions and governance: Who can change processes, area/iteration trees, and team settings?

Document your choices so teams apply them consistently.

## Work item types and portfolio backlogs

Choose a process (Agile, Basic, Scrum, or CMMI) when you create a project. Each process defines a default set of WITs and portfolio/backlog levels. You can add custom WITs and portfolio backlogs to support your organization.

[!INCLUDE [work-item-types](includes/work-item-types.md)]

Use custom WITs and portfolio backlogs when you need additional planning layers (for example, Objectives and Key Results).

:::image type="content" source="media/config-custom/portfolio-backlogs-objectives-results.png" alt-text="Screenshot showing a project that adds Objectives and Key Results as custom portfolio backlogs.":::

## Recommended tracking options

Pick one of these high-level tracking approaches based on team practices:

- Tasks only — Not recommended. Offers limited prioritization and no portfolio planning.
- Requirements with child tasks — Good for Scrum teams that estimate and track time.
- Requirements only — Good for Kanban or Scrumban teams that don't track time.
- Requirements grouped under portfolio WITs — Use when multiple teams need rollups and cross-team calendars.

Explain the chosen approach to teams and update process documentation.

## Areas, iterations, and team setup

Use area paths to partition work by product, feature, or business area. Use iteration paths for sprints, releases, or milestones.

Recommendations
- Create area path hierarchies that reflect how managers want rollups reported.
- Give each team a default area and iteration subscription so work items inherit correct context.
- Use consistent iteration cadences across teams that deliver together.

:::image type="content" source="media/config-custom/area-path-team-assignments.png" alt-text="Screenshot showing area paths and team assignments.":::

See:
- [About area and iteration paths](../organizations/settings/about-areas-iterations.md)
- [Configure a hierarchy of teams](plans/configure-hierarchical-teams.md)

## Rollup and portfolio views

Add rollup columns to backlogs to show progress bars, counts, or sums for child items. Use Delivery Plans and feature timelines to view cross-team schedules and dependencies.

:::image type="content" source="media/config-custom/progress-by-work-items.png" alt-text="Screenshot showing progress rollup bars on a backlog.":::

For cross-team planning, use Delivery Plans and the Feature timeline extensions where appropriate.

## Boards, columns, and workflows

Work item workflow states determine default board columns. You can:

- Add custom workflow states to WITs (affects all teams).
- Add columns to team boards (affects only that team).
- Map state-to-column mappings carefully to preserve reporting consistency (for example, cumulative flow diagrams).

See:
- [Add or manage columns](backlogs/set-column-options.md)
- [Customize workflow states](../organizations/settings/work/customize-process-backlogs-boards.md)

## Custom fields and reporting

Custom fields let you capture project-specific data. They can power rollups and reports but apply across the process.

Recommendations
- Limit custom fields to those that support reporting or automation.
- Use numeric custom fields for rollup sums; use picklists for consistent reporting.
- Remember: process-level fields are shared across projects in the collection/organization.

> [!NOTE]  
> You can define up to 1,024 fields per process.

## Custom WITs and process changes

Adding or modifying WITs and workflows affects many tools:

- New requirement-level WITs appear on product backlogs and may appear on sprint backlogs.
- New task-level WITs appear on taskboards.
- Teams must update boards and mappings to display custom WITs.

Process-level changes affect all teams. Limit disruptive changes and communicate them in advance.

## Permissions and who can change what

Control who changes processes, area/iteration trees, and team configuration:

- Process-level changes: Project Collection Administrators or users with appropriate process permissions.
- Project-level changes (areas/iterations): Project Administrators or users with node permissions.
- Team-level changes: Team administrators or Project Administrators.

See:
- [Create and manage processes](../organizations/settings/work/manage-process.md)
- [Set permissions for process customization](../organizations/security/set-permissions-access-work-tracking.md)

## Time tracking and sprint planning

Use Remaining Work, Original Estimate, and Completed Work fields for sprint planning and capacity. If you track time for billing or other purposes, evaluate Marketplace extensions for richer time-tracking support.

See:
- [Sprint capacity](sprints/set-capacity.md)
- [Configure sprint burndown](../report/dashboards/configure-sprint-burndown.md)

## Practical checklist for admins

- Decide process and WIT strategy (inherit or customize).
- Design area and iteration hierarchies.
- Configure teams and set default area/iteration subscriptions.
- Create necessary shared query folders and permissions.
- Add rollup columns and dashboard widgets that execs need.
- Pilot changes with one team before applying wide-scope updates.
- Communicate changes and update your project wiki.

## Related content

- [What is Azure Boards?](get-started/what-is-azure-boards.md)
- [Manage and configure team tools](../organizations/settings/manage-teams.md)
- [Customize cards](boards/customize-cards.md)
- [Add fields and customize WITs](../organizations/settings/work/customize-process-field.md)
- [Explore portfolio management](plans/portfolio-management.md)
