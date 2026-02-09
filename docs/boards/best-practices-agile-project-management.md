---
title: Best practices for Agile product management
titleSuffix: Azure Boards
description: Get started with this guide for product managers who are new to Azure Boards to plan and track your products.
ms.service: azure-devops-boards
ms.topic: best-practice
ms.custom: cross-project
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops' 
ms.date: 09/29/2025
#customer intent: As a product manager or lead, I want to understand the Azure Boards tools that support Agile development for my product. 
---

# Best practices for Agile product management

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

[!INCLUDE [ai-assistance-callout](../includes/ai-assistance-callout.md)]

This guide helps product managers get started with Azure Boards. It summarizes practical recommendations for configuring teams, planning work, and using Boards, Backlogs, Iterations, and Delivery Plans to deliver value predictably.

> [!NOTE]
> If your team follows Kanban or Scrum specifically, see [About Boards and Kanban](boards/kanban-overview.md) or the [Scrum tutorials](./sprints/scrum-overview.md).

Most recommendations apply to both Azure DevOps Services (cloud) and Azure DevOps Server (on-premises). Some features, including Rollup, Analytics, and some portfolio planning tools, are available only in the cloud.

## Configure teams

Define a team for each delivery group that should work autonomously. Configure teams along value streams so each team can plan, track, and deliver independently while still rolling up to product-level roadmaps.

Recommendations:
- Create a team per feature or delivery group (commonly 6–12 developers).
- Give each team its own area path and iteration cadence.
- Use team settings to assign default Area and Iteration paths so work items added by the team inherit correct context.

More information:
- [Configure a hierarchy of teams](plans/configure-hierarchical-teams.md)
- [Create or add a team](../organizations/settings/add-teams.md)

## Configure iterations

Define iteration paths (iterations) at the product level, then assign teams to appropriate iterations. Keep a consistent iteration cadence across related teams where it helps coordination.

Recommendations:
- Choose a common cadence for teams that deliver together (1–4 weeks typical).
- Create at least six iterations to support planning for the next 3–6 months.
- Use iterations consistently for forecasting and iteration planning.
- Consider continuous flow approaches for teams that can deliver incrementally without fixed time boundaries.
- For flow-based teams, focus on Work in Progress (WIP) limits rather than iteration capacity.

More information:
- [Define and assign iteration paths](../organizations/settings/about-areas-iterations.md#define-and-assign-iteration-paths)
- [Configure team iterations and sprints](../organizations/settings/set-iteration-paths-sprints.md)

## Choose work item types

Pick the work item types that match how your teams plan and deliver work. Map product-level work (Features, Epics) to team-level work (User Stories, Issues, PBIs) and optionally let teams break work into Tasks.

Recommendations:
- Use Feature to represent customer-facing value.
- Use requirements (User Story / Issue / Product Backlog Item) for team-scoped work depending on your process.
- Use Task for developer work that fits within an iteration.
- Agree how teams handle Bugs (as backlog items or as development work).

More information:
- [About work items](work-items/about-work-items.md)
- [Agile workflow in Azure Boards](work-items/guidance/agile-process-workflow.md)
- [Default and work item fields used in process templates](work-items/guidance/work-item-field.md)
- [Define features and epics](backlogs/define-features-epics.md)

## Create and maintain your product roadmap

Use the Features backlog as your product roadmap. Have product managers order and refine features; let teams decompose features into backlog items and optionally tasks.

Recommendations:
- Keep the Features backlog ordered.
- Break features into sized requirements that teams can complete within iterations.
- Review and refine backlogs regularly (backlog grooming / refinement).

### Features backlog
Product managers create and order features in the Features backlog. Each feature should represent a shippable capability.

:::image type="content" source="media/best-practices/features-backlog.png" alt-text="Screenshot showing a features backlog.":::

### Requirement backlog
Teams add requirements to the requirement backlog, size them for an iteration, and map them to parent Features.

:::image type="content" source="media/best-practices/product-backlog.png" alt-text="Screenshot showing a product backlog with user stories.":::

Recommendations:
- Size requirements so a team can finish them in a single iteration.
- Keep acceptance criteria and the definition of done clear.
- Map unparented work to the appropriate Feature.

More information:
- [Create your backlog](backlogs/create-your-backlog.md)
- [Organize your backlog](backlogs/organize-backlog.md)
- [Forecast your backlog](sprints/forecast.md)

## Forecasting and roadmapping

Use the Forecast tool and team throughput to forecast when features might ship. Forecast requires estimates (Story Points, Effort, or Size) on requirements. If you prefer simple forecasting by count, assign estimate = 1 for each requirement.

Recommendations:
- Establish a consistent estimation approach across teams that feed a common product roadmap.
- Use Forecast to model several iterations ahead and validate assumptions.

:::image type="content" source="media/best-practices/forecast-product-backlog-ordered-parent.png" alt-text="Screenshot showing a forecast of a product backlog with velocity settings." lightbox="media/best-practices/forecast-product-backlog-ordered-parent.png":::

## Manage dependencies

Track cross-team dependencies using Predecessor/Successor links and by surfacing dependencies in Delivery Plans.

Recommendations:
- Tag dependent work with a consistent tag (for example, `dependency`) for quick queries.
- Use Predecessor/Successor link types to capture formal dependencies.
- Visualize dependencies in Delivery Plans or use query-based reports to triage blocking items.

:::image type="content" source="plans/media/dependencies/dependency-lines.png" alt-text="Screenshot showing dependency lines between linked work items.":::

More information:
- [Track dependencies by using delivery plans](plans/track-dependencies.md)
- [Link work items](backlogs/add-link.md)

> [!NOTE]
> Marketplace extensions (for example, Work Item Visualization) can help visualize relationships but aren't product-supported features by the Azure Boards product team.

## Work in iterations

Use the iteration backlog and Taskboard to plan and deliver iteration work. Update statuses daily so progress charts remain accurate.

Recommendations:
- Plan each iteration with the team and define a goal.
- Ensure work items assigned to the iteration have clear value proposition and acceptance criteria.
- Update remaining work and status throughout the iteration.
- Monitor dashboards and charts to track throughput or blockers.

:::image type="content" source="media/best-practices/sprint-burndown-chart.png" alt-text="Screenshot showing an Analytics Sprint burndown chart." lightbox="media/best-practices/sprint-burndown-chart.png":::

More information:
- [Assign backlog items to a sprint](sprints/assign-work-sprint.md)
- [Configure and monitor sprint burndown](../report/dashboards/configure-sprint-burndown.md)

## Review progress and delivery

Use the Features board, rollup columns on the Features backlog, and Delivery Plans to review progress across teams.

Recommendations:
- Add rollup progress or totals to the Features backlog to monitor completion at a glance.
- Customize Features board columns to match your delivery lifecycle (for example: Research, On Deck, In Progress, Customer Rollout).
- Use Delivery Plans to coordinate cross-team dates and dependencies.

:::image type="content" source="media/best-practices/features-board-customized.png" alt-text="Screenshot showing a customized Features board with multiple columns." lightbox="media/best-practices/features-board-customized.png":::

More information:
- [Display rollup progress or totals](backlogs/display-rollup.md)
- [Review team delivery plans](plans/review-team-plans.md)

## Process improvement

Make continuous improvement part of your cadence. Use retrospectives, velocity charts, and dashboards to identify improvements and track progress.

Recommendations:
- Hold regular retrospectives and capture improvement actions.
- Use throughput and cycle time to understand and improve your flow of work.
- Track improvement work on a dedicated board or backlog.

:::image type="content" source="../report/dashboards/media/velocity/analytics-velocity-azure-devops.png" alt-text="Screenshot showing an example team Velocity chart.":::

More information:
- [View and configure team velocity](../report/dashboards/team-velocity.md)
- [Add and manage dashboards](../report/dashboards/dashboards.md)

## Optimize work flow

Control WIP to improve delivery predictability and reduce cycle time. Whether your teams use iterations or continuous flow, limiting WIP helps teams focus and deliver value faster.

Recommendations:
- Set WIP limits on board columns to prevent overcommitment.
- Monitor cycle time from start to delivery for each work item type.
- Use cumulative flow diagrams to visualize bottlenecks.
- Focus on completing work before starting new work.

More information:
- [Configure WIP limits](boards/wip-limits.md)
- [Cumulative flow diagram](../report/dashboards/cumulative-flow.md)

## Next step

> [!div class="nextstepaction"]
> [Configure and customize Azure Boards](configure-customize.md)

## Related content

- [Manage requirements](../cross-service/manage-requirements.md)
- [Work with multi-team ownership of backlog items](backlogs/backlogs-overview.md#multi-team)
- [Why use Azure Boards to plan and track your work](get-started/why-use-azure-boards.md)
