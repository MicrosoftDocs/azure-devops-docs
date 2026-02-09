---
title: What is Azure Boards
titleSuffix: Azure Boards
description: Learn about the Agile tools that Azure Boards provides to manage software development projects.
ms.custom: boards-get-started
ms.subservice: azure-devops-new-user
ms.author: chcomley
author: chcomley
ms.topic: overview
monikerRange: '<= azure-devops'
ms.date: 09/26/2025
#customer intent: As a developer, I want to explore the Agile tools that Azure Boards provides, so I can manage software development projects.
---

# What is Azure Boards?

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

[!INCLUDE [ai-assistance-callout](../../includes/ai-assistance-callout.md)]

Azure Boards is a web-based service that teams use to plan, track, and discuss work throughout the development lifecycle. It supports agile methodologies and provides a customizable platform for managing work items, collaborating across teams, and streamlining workflows. To get started, [sign up and invite teammates](sign-up-invite-teammates.md), [customize your boards](../configure-customize.md), and explore the following benefits.

## Azure Boards hubs

Track and manage work from the following hubs.

| Azure Boards hub | Functions |
|------------------|-----------|
| [**Work items**](../work-items/about-work-items.md) | View lists of work items filtered by criteria such as items assigned to you, items you follow, or items you recently viewed or updated. |
| [**Boards**](../boards/kanban-overview.md) | View work items as cards and update their status by dragging and dropping them across columns. Use Boards to implement Kanban practices and visualize team workflow. |
| [**Backlogs**](../backlogs/backlogs-overview.md) | Plan, order, and organize work items. Use product backlogs for the project plan and portfolio backlogs to group work under features and epics. |
| [**Sprints**](../sprints/assign-work-sprint.md) | View and manage work items for a specific sprint or iteration path. Assign work to a sprint by dragging items from the backlog and use the Taskboard for sprint planning. |
| [**Queries**](../queries/view-run-query.md) | Build filtered lists of work items with the query editor. Use queries to triage, make bulk updates, or create trend charts for dashboards. |
| [**Delivery Plans**](../plans/review-team-plans.md) | Track deliverables and dependencies across teams in a calendar view. Add backlog items, view rollup progress for features and epics, and track cross-team work. |
| [**Analytics views**](../../report/powerbi/what-are-analytics-views.md) | Create Power BI reports from Azure Boards data. Use default or custom Analytics views to build dashboards and reports. |

### Azure Boards hubs UI

:::image type="content" source="media/about-boards/boards-hubs.png" alt-text="Screenshot showing hubs in the Azure Boards menu, including Work items, Boards, Backlogs, Sprints, Queries, Delivery Plans, and Analytics views.":::

## Benefits of using Azure Boards

The following table summarizes key benefits.

| Benefit | Details |
|--------|--------|
| Start simply, scale as you grow | Use predefined work item types for features, user stories, bugs, and tasks to get started quickly. Support different agile methods and add teams as your organization grows so each team can manage its own backlog and boards. |
| Use visual, interactive tools | Visualize work with [Boards](../boards/kanban-quickstart.md), [Backlogs](../backlogs/create-your-backlog.md), Scrum planning tools, and [Delivery Plans](../plans/review-team-plans.md). |
| Customize easily | Configure boards, taskboards, and delivery plans through the UI. Add custom fields, work item types, and portfolio backlogs via the process settings. |
| Built-in collaboration | Use work item forms to capture discussions and decisions. Bring teammates into conversations with @mentions and maintain a history of changes. |
| Capture information and attachments | Store detailed work descriptions, inline images, and attachments (up to 60 MB per file; up to 100 attachments per work item). Link work items to other items to build hierarchies and traceability. |
| Find what you need and get notified | Follow work items, use pivot views for items assigned to you, run queries to filter by fields, and subscribe to notifications for changes. |
| Monitor status and trends | Add widgets to configurable dashboards and use the Analytics service to create Power BI reports for deeper analysis. |
| Integrate with familiar tools | Import and export work items with Excel or CSV. Extend functionality with Marketplace extensions and the Azure DevOps REST API. |
| Mobile access | Use a mobile browser to view and respond to changes on the go. |
| Free starter plan | Start for free with up to five free users and unlimited stakeholders. |

For a hands-on introduction, see the [What is Azure Boards? training module](/training/modules/choose-an-agile-approach/3-what-is-azure-boards).

## Connect Azure Boards to GitHub

Connect Azure Boards with GitHub repositories to link commits, pull requests, branches, and issues to work items. This linking lets you quickly open related GitHub artifacts from a work item or board. See [GitHub & Azure Boards](../github/index.md) for details.

## Configure dashboards and Power BI reports

Create team dashboards to share status updates and track progress. Use the Analytics service and Analytics views to power Power BI reports for deeper analysis.

:::image type="content" source="media/about-boards/dashboard.png" alt-text="Screenshot showing an Azure Boards dashboard with team status and sprint burndown widgets." lightbox="media/about-boards/dashboard.png":::

See [About dashboards, charts, reports, & widgets](../../report/dashboards/overview.md) and [What is the Analytics service?](../../report/powerbi/what-is-analytics.md).

## End-to-end traceability

Azure Boards provides traceability across the development lifecycle. You can:

- Create a branch from a work item requirement.
- Open and validate pull requests tied to work items.
- Link builds and releases to work items and track deployment status.
- Trace changes from requirement to production and monitor the lineage of work.

See [End-to-end traceability](../../cross-service/end-to-end-traceability.md) and [Cross-service integration and collaboration overview](../../cross-service/cross-service-overview.md).

## Support independent, autonomous teams

Define teams by name, members, and area paths. Teams let you scope Boards, Backlogs, Sprints, and Delivery Plans to the area of work they own. For more, see [About teams and Agile tools](../../organizations/settings/about-teams-and-settings.md).

:::image type="content" source="../../organizations/settings/media/agile-tools/agile-tools-team-assets.png" border="false" alt-text="Conceptual diagram showing team tools for planning, tracking, collaboration, monitoring, and learning.":::

Azure Boards integrates with chat tools such as [Microsoft Teams](../integrations/boards-teams.md) and [Slack](../integrations/boards-slack.md) and supports Marketplace extensions to add capabilities via the [Azure DevOps Marketplace](https://marketplace.visualstudio.com/azuredevops).

## New Azure Boards

We updated the Azure Boards UI to improve performance, accessibility, and consistency with the rest of Azure DevOps. You find refreshed spacing, better keyboard navigation, and clearer scroll behavior.

### What to expect

The core features remain the same: Boards, Backlogs, Sprints, Queries, and Delivery Plans. The UI changes focus on accessibility and layout—expect a cleaner, more consistent interface. Try the [new features](https://devblogs.microsoft.com/devops/new-boards-hub-rollout-update-2) and test workflows that matter to your team.

### Provide feedback

If you encounter functional issues or want to request features, [share feedback](../../user-guide/provide-feedback.md) with the product team.

## Related content

- [Configure and customize Azure Boards](../configure-customize.md)
- [Promote an Agile culture](../plans/agile-culture.md)
- [Learn about teams and Agile tools](../../organizations/settings/about-teams-and-settings.md)
