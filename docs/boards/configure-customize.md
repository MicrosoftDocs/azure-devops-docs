---
title: Configure and customize Azure Boards
titleSuffix: Azure Boards
description: Learn how to configure area paths, iterations, work item types, workflows, and team settings in Azure Boards to match your organization's processes and reporting needs.
ms.service: azure-devops-boards
ms.topic: concept-article
ai-usage: ai-assisted
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 06/29/2026
#customer intent: As an Azure DevOps developer, I want to explore options for customizing and configuring Azure Boards, so I can best support my specific portfolio, dependencies, and monitoring needs.
---

# Configure and customize Azure Boards

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

Customize Azure Boards to match your team's processes and portfolio needs. This article describes recommended tasks and considerations for administrators who configure area and iteration structure, work item types (WITs), workflows, and board behavior.

Use this article to decide how your project should be organized before you customize boards, backlogs, and team settings.

If you already know the configuration tasks you want, start with these articles:

- [Customize cards](boards/customize-cards.md)
- [Manage columns](backlogs/set-column-options.md)
- [Expedite work with swimlanes](boards/expedite-work.md)
- [Configure your backlog view](backlogs/configure-your-backlog-view.md)

> [!NOTE]  
> Most guidance here applies to both Azure DevOps Services and Azure DevOps Server. Some capabilities, such as Analytics and delivery planning experiences, vary by version or installation. Delivery Plans are built in to Azure DevOps Server 2022 and later and were previously available as a Marketplace extension.

[!INCLUDE [ai-assistance](../includes/ai-assistance-callout.md)]

## Key considerations

Use these questions to shape the configuration you choose.

| Area | Questions to answer |
|------|---------------------|
| Project vs. team structure | How many teams, area path hierarchy, and rollup views do you need? |
| Iterations | What sprint cadence, release grouping, and forecast horizon work best? |
| Work item scheme | Which WITs should teams use (Features, Stories/Issues/PBIs, Tasks, Epics)? |
| Reporting needs | Which fields, rollups, and analytics views must be available? |
| Customizations | How do custom fields, workflows, and WITs affect boards, backlogs, and reports? |
| Permissions and governance | Who can change processes, area/iteration trees, and team settings? |

Document your choices so teams apply them consistently across the project.

## Choose work item types and portfolio backlogs

Choose a process (Agile, Basic, Scrum, or CMMI) when you create a project. Each process defines a default set of WITs and portfolio/backlog levels. You can add custom WITs and portfolio backlogs to support your organization.

[!INCLUDE [work-item-types](includes/work-item-types.md)]

Use custom WITs and portfolio backlogs when you need extra planning layers, such as Objectives and Key Results, or when teams need a rollup level above features.

:::image type="content" source="media/config-custom/portfolio-backlogs-objectives-results.png" alt-text="Screenshot showing a project that adds Objectives and Key Results as custom portfolio backlogs.":::

## Compare tracking approaches

Choose the tracking model that best matches how your teams plan and report work.

| Approach | Use when | Tradeoff |
|----------|----------|----------|
| Tasks only | You need simple task tracking with little hierarchy | Limited prioritization and no portfolio planning |
| Requirements with child tasks | Scrum teams estimate work and track it in sprints | More hierarchy to manage |
| Requirements only | Kanban or Scrumban teams don't track time | Less task-level detail |
| Requirements grouped under portfolio WITs | Multiple teams need rollups and cross-team calendar views | Requires more upfront process design |

Explain the model you choose to teams and update process documentation so everyone uses the same pattern.

## Set up areas, iterations, and teams

<a id="area-path"></a>

Use area paths to partition work by product, feature, or business area. Use iteration paths for sprints, releases, or milestones.

| Recommendation | Reason |
|----------------|-----|
| Create area path hierarchies that reflect how managers want rollups reported | Enables accurate rollup reporting across organizational levels |
| Give each team a default area and iteration subscription | Work items automatically inherit the correct context |
| Use consistent iteration cadences across teams that deliver together | Simplifies cross-team planning and dependency tracking |

:::image type="content" source="media/config-custom/area-path-team-assignments.png" alt-text="Screenshot showing area paths and team assignments.":::

Related content:
- [About area and iteration paths](../organizations/settings/about-areas-iterations.md)
- [Configure a hierarchy of teams](plans/configure-hierarchical-teams.md)

## Show bugs on boards and backlogs

<a id="show-bugs"></a>

Each team decides whether bugs appear on the product backlog as requirements or are tracked as tasks tied to requirements. Teams that use Scrum often show bugs on the backlog. Teams that use Agile or CMMI can choose whether bugs appear on backlogs. The Basic process doesn't use the Bug work item type; it uses Issue instead. To change how bugs display for a team, update the team settings:

- [Show bugs on backlogs and boards](../organizations/settings/show-bugs-on-backlog.md)
- [Troubleshooting](backlogs/resolve-backlog-reorder-issues.md#display-nested-items-on-backlogs-and-boards)

Keep a consistent team policy so queries, boards, and rollups behave predictably.

## Rollup and portfolio views

<a id="rollup"></a>

Add rollup columns to backlogs to show progress bars, counts, or sums for child items. Use Delivery Plans to review cross-team schedules and dependencies. If you use a roadmap-style view such as the Feature Timeline extension, call it out separately in project guidance.

:::image type="content" source="media/config-custom/progress-by-work-items.png" alt-text="Screenshot showing progress rollup bars on a backlog.":::

For cross-team planning, use Delivery Plans and any roadmap-style extension your organization has standardized on.

## Boards, columns, and workflows

Work item workflow states determine default board columns.

| Action | Scope | Consideration |
|--------|-------|---------------|
| Add custom workflow states to WITs | Affects all teams | Changes appear on all team boards using that WIT |
| Add columns to team boards | Affects only that team | Useful for team-specific workflow steps |
| Map state-to-column mappings | Affects reporting | Map carefully to preserve cumulative flow diagram accuracy |

Related content:
- [Add or manage columns](backlogs/set-column-options.md)
- [Customize workflow states](../organizations/settings/work/customize-process-backlogs-boards.md)

## Custom fields and reporting

Custom fields let you capture project-specific data. They can power rollups and reports but apply across the process.

| Recommendation | Reason |
|----------------|--------|
| Limit custom fields to ones that support reporting or automation | Reduces clutter and maintenance overhead |
| Use numeric custom fields for rollup sums | Enables progress tracking and capacity planning |
| Use picklists for consistent reporting | Prevents data inconsistencies from free-text entries |
| Remember that process-level fields are shared | Changes affect all projects in the collection or organization |

> [!NOTE]  
> You can define up to 1,024 fields per process.

## Custom WITs and process changes

Adding or modifying work item types (WITs) and workflows affects many tools.

| Change | Where it appears | Action required |
|--------|------------------|-----------------|
| New requirement-level WITs | Product backlogs, possibly sprint backlogs | Configure backlog levels |
| New task-level WITs | Taskboards | Update taskboard settings |
| Custom WITs | Team boards | Update boards and column mappings |

> [!IMPORTANT]
> Process-level changes affect all teams. Limit disruptive changes and communicate them in advance.

## Permissions and who can change what

Control who can change processes, area and iteration trees, and team configuration.

| Change type | Who can make changes |
|-------------|---------------------|
| Process-level | Project Collection Administrators or users with process permissions |
| **Project-level** (areas and iterations) | Project Administrators or users with node permissions |
| Team-level | Team Administrators or Project Administrators |

Related content:
- [Create and manage processes](../organizations/settings/work/manage-process.md)
- [Set permissions for process customization](../organizations/security/set-permissions-access-work-tracking.md)

## Time tracking and sprint planning

Use the work tracking fields that match your process and team planning model:

| Field | Common use |
|------|-------------|
| **Remaining Work** | Track the effort left to finish a task or sprint item. |
| **Original Estimate** | Capture the initial estimate when your team wants a baseline. |
| **Completed Work** | Record the effort already spent on a task. |

If you track time for billing or reporting, evaluate Marketplace extensions for richer time-tracking support.

Related content:
- [Sprint capacity](sprints/set-capacity.md)
- [Configure sprint burndown](../report/dashboards/configure-sprint-burndown.md)

## Practical checklist for admins

Use the following checklist when you set up or review your Azure Boards configuration.

| Phase | Task |
|-------|------|
| Plan | Decide process and work item type strategy (inherit or customize) |
| Plan | Design area and iteration hierarchies |
| Configure | Configure teams and set default area and iteration subscriptions |
| Configure | Create necessary shared query folders and permissions |
| Configure | Add rollup columns and dashboard widgets that executives need |
| Validate | Pilot changes with one team before applying wide-scope updates |
| Communicate | Document changes and update your project wiki |

## Related content

- [What is Azure Boards?](get-started/what-is-azure-boards.md)
- [Manage and configure team tools](../organizations/settings/manage-teams.md)
- [Customize cards](boards/customize-cards.md)
- [Add fields and customize WITs](../organizations/settings/work/customize-process-field.md)
- [Explore portfolio management](plans/portfolio-management.md)
