---
title: Scale Agile practices with Azure Boards
titleSuffix: Azure Boards
description: Learn how to scale Agile practices with Azure Boards by using portfolio management, delivery plans, and multi-team dashboards.
ms.service: azure-devops-boards
ms.author: chcomley
author: chcomley
ms.topic: overview
monikerRange: '<= azure-devops'
ms.date: 06/29/2026
---

# Scale Agile practices across teams

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

As your organization grows, Azure Boards helps you scale Agile practices across teams and projects. Its team-based model supports team autonomy while giving program and leadership stakeholders the visibility they need to coordinate delivery.

[!INCLUDE [ai-assistance-callout](../../includes/ai-assistance-callout.md)]

## Core scaling approach

Azure Boards scales through a flexible team model where teams work independently while aligning to shared organizational goals. This model provides:

- **Team autonomy** with dedicated backlogs, boards, and sprint planning
- **Organizational visibility** through portfolio rollups and cross-team reporting
- **Flexible hierarchies** that adapt to your organizational structure
- **Coordinated delivery** across multiple teams and projects

Each team gets its own configurable Agile tools while staying connected to the broader organizational context. For guidance on team setup, see [About teams and Agile tools](../../organizations/settings/about-teams-and-settings.md).

## Video: Agile at Scale 

This video explains how Azure Boards supports cross-team planning and visibility as organizations scale.

> [!VIDEO https://learn-video.azurefd.net/vod/player?id=40ca5566-4875-4611-ba66-3ec22fa0c343]

## Scaling capabilities

Azure Boards includes complementary scaling capabilities for planning, coordination, and reporting across teams.

### Portfolio management

Portfolio management in Azure Boards helps program managers and leaders gain cross-team visibility into delivery progress across projects. Use portfolio management in these scenarios:

- **Connect work hierarchies** from epics down to team-level items.
- **Track cross-team progress** with rollup reporting.
- **Manage dependencies** between teams and projects.
- **Support leadership reporting** with high-level metrics.

Portfolio views help you identify bottlenecks and review progress against larger objectives.

For more information, see [Manage portfolios](portfolio-management.md).

### Delivery plans

Delivery Plans provide timeline-based coordination for multiteam environments. In Azure DevOps Services and Azure DevOps Server 2022, Delivery Plans are built in. For Azure DevOps Server 2020 and earlier, use the Delivery Plans extension.

Use Delivery Plans in these scenarios:

- **Cross-team feature delivery** across multiple sprints.
- **Timeline visualization** of planned work and milestones.
- **Dependency relationships** between teams and work items.
- **Release coordination** for complex, multiteam deliveries.

Use sprint tools for detailed team capacity planning. For more information, see [Set and track team capacity](../sprints/set-capacity.md).

For more information, see [Review delivery plans](review-team-plans.md).

### Multi-team dashboards

Azure Boards provides flexible dashboard capabilities for both operational and strategic reporting:

- **Team or project dashboards** for sprint tracking and daily operations.
- **Cross-team dashboard views** that aggregate metrics across teams.
- **Leadership-focused views** with strategic indicators.
- **Custom widgets** for organization-specific metrics.
- **Near real-time data** reflecting current project status.

You can tailor dashboards to different audiences, from developers tracking sprint progress to leaders monitoring overall portfolio health.

For more information, see [Add and manage dashboards](../../report/dashboards/dashboards.md?toc=/azure/devops/boards/plans/toc.json).

## When to use scaling features

Use this table to quickly choose the right capability for your scenario.

| Capability | Primary audience | Best for | Primary output | Not sufficient when |
|---|---|---|
| Portfolio management | Program managers, leadership | Tracking hierarchy and delivery progress across teams | Rollup and dependency visibility | You need detailed timeline coordination |
| Delivery plans | Program managers, release managers | Coordinating multi-team timelines and milestones | Timeline and dependency view | You need detailed team capacity planning |
| Multi-team dashboards | Team leads, stakeholders, leadership | Monitoring project health and trends | Shared visual metrics and status | You need hierarchical planning and dependency mapping |

Use the sections that follow to confirm fit for each capability.

### Portfolio management
Choose portfolio management when you need the following features:
- Visibility across multiple teams or projects.
- Leadership reporting on delivery progress.
- Cross-team dependency tracking.
- Resource allocation planning at scale.

### Delivery plans
Choose delivery plans when you need the following features:
- Coordinated releases across multiple teams.
- Timeline visibility for feature delivery.
- Dependency management between teams.
- Cross-team milestone tracking.

### Multi-team dashboards
Choose multi-team dashboards when you need the following features:
- Stakeholder reporting across organizational levels.
- Near real-time visibility into project health.
- Custom metrics specific to your organization.
- Automated reporting to reduce manual overhead.

## Scaling considerations

When you scale Azure Boards, assess organizational, technical, and cultural factors that influence adoption and delivery outcomes.

### Organizational factors
- **Team topology**: How teams are organized and how they interact.
- **Communication paths**: How information flows across teams and stakeholders.
- **Decision ownership**: Who makes delivery, scope, and priority decisions.
- **Reporting expectations**: What visibility each stakeholder group needs.

For comprehensive guidance on scaling organizational practices, see [Practices that scale](practices-that-scale.md).

### Technical factors
- **Work hierarchy design**: How work is decomposed and linked across levels.
- **Area path model**: How ownership is divided by feature, product, or team.
- **Iteration cadence**: Whether teams share sprint dates or operate independently.
- **Integration requirements**: How Azure Boards connects with your other engineering tools.

To understand cross-team coordination approaches, see [Visibility across teams](visibility-across-teams.md).

### Cultural factors
- **Agile maturity**: How consistently teams apply Agile practices.
- **Collaboration norms**: How teams coordinate, share context, and resolve issues.
- **Change readiness**: How effectively the organization adopts new tools and processes.
- **Continuous improvement habits**: How teams inspect outcomes and adapt.

Learn more about fostering the right mindset in [Agile culture and scale](agile-culture.md). For broader organizational change, see [Agile culture](/devops/plan/adopting-agile).

## Benefits of scaling with Azure Boards

Scaling with Azure Boards provides distinct benefits for delivery teams, program managers, and leadership.

### For development teams
- Maintain team autonomy while aligning work to shared goals.
- Focus on team priorities while keeping cross-team context visible.
- Coordinate dependencies with other teams more effectively.
- Use flexible planning and tracking tools that fit team workflows.

### For program managers
- Gain cross-team visibility without introducing micromanagement.
- Coordinate complex, multi-team releases with clearer timelines.
- Identify and resolve dependencies earlier.
- Plan and track progress against program-level objectives.

### For leadership
- Monitor delivery progress and overall organizational health.
- Make better-informed decisions on priorities and resource allocation.
- Track execution against strategic objectives.
- Maintain high-level visibility without day-to-day operational overhead.

## Getting started with scaling features

Azure Boards scaling capabilities build on foundational team practices. As your organization grows, scale in phases:

1. **Start with individual teams** by using team backlogs and boards.
1. **Add cross-team visibility** when teams need to coordinate dependencies.
1. **Introduce portfolio management** to support leadership planning and reporting.
1. **Expand delivery planning** for complex, multiteam releases.

Azure Boards scales with your organization, from small team workflows to complex cross-team delivery.

To deepen your approach, use these resources:

- **Expand team structures**: Learn strategies to [scale Agile to large teams](/devops/plan/scaling-agile).
- **Improve team dynamics**: Discover approaches for [creating productive teams](/devops/plan/building-productive-teams).

Together, these resources complement Azure Boards by addressing the people and process aspects of scaling Agile practices.
