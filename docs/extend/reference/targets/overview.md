---
title: Extensibility Points
titleSuffix: Azure DevOps
description: Reference of extensibility points that show where your extension can extend Azure DevOps, with contribution IDs for hubs, menus, toolbars, and more.
ms.subservice: azure-devops-ecosystem
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.topic: reference
ms.date: 04/03/2026
ai-usage: ai-assisted
ms.custom: engagement-fy23, sfi-image-nochange, UpdateFrequency3
---

# Extensibility points

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

Extensions add capabilities to the Azure DevOps UI and REST surface. This article lists the most common extensibility points you can target and shows the IDs you use in your extension manifest. For the full manifest schema, see the [Extension manifest reference](../../develop/manifest.md). For an overview of the extension model and contribution patterns, see the [Contribution model](../../develop/contributions-overview.md).

[!INCLUDE [extension-samples-tip](../../includes/extension-samples-tip.md)]

## Hubs and hub groups

Hubs and hub groups provide primary navigation in Azure DevOps (for example, **Files**, **Releases**, **Backlogs**, **Queries**). A hub belongs to a hub group; for example, the **Files** hub belongs to the project-level **Azure Repos** hub group. Hub groups can exist at the organization/collection level or at the project level. Most extensions contribute at the project level.

The following table lists common hub groups and their contribution IDs.

::: moniker range="<=azure-devops"

| Name                | ID                                         | Level                    | Preview image                |
| --------------------|--------------------------------------------|--------------------------|----------------------------- |
| Azure Boards        | `ms.vss-work-web.work-hub-group`           | Project/team             | :::image type="content" source="media/work/azure-boards.png" alt-text="Screenshot of a custom hub added to Azure Boards."::: |
| Azure Repos         | `ms.vss-code-web.code-hub-group`           | Project/team             | :::image type="content" source="media/code/azure-repos.png" alt-text="Screenshot of a custom hub added to Azure Repos.":::  |
| Azure Pipelines     | `ms.vss-build-web.build-release-hub-group` | Project/team             | :::image type="content" source="media/build/azure-pipelines.png" alt-text="Screenshot of a custom hub added to Azure Pipelines."::: |
| Azure Test Plans    | `ms.vss-test-web.test-hub-group`           | Project/team             | :::image type="content" source="media/test/azure-test-plans.png" alt-text="Screenshot of a custom hub added to Azure Test Plans."::: |
| Project settings    | `ms.vss-web.project-admin-hub-group`       | Project                  | :::image type="content" source="media/test/project-settings.png" alt-text="Screenshot of a custom hub in project settings."::: |
| Organization settings | `ms.vss-web.collection-admin-hub-group`  | Organization/collection  | :::image type="content" source="media/test/organization-settings.png" alt-text="Screenshot of a custom hub in organization settings."::: |
::: moniker-end

### Contribute a hub

This example shows a hub contribution that targets the Code hub group:

```json
{
  "contributions": [
    {
      "id": "my-custom-hub",
      "type": "ms.vss-web.hub",
      "targets": [
        "ms.vss-code-web.code-hub-group"
      ],
      "properties": {
        "name": "Code Hub",
        "order": 30,
        "uri": "/views/code/custom.html"
      }
    }
  ]
}
```

- `ms.vss-web.hub` — the contribution type. The `vss-web` extension published by `ms` defines this type and its required and optional properties, such as `name` and `order`.
- `ms.vss-code-web.code-hub-group` — the full ID of the hub group this hub targets.
- `my-custom-hub` — the short ID of this contribution. The full ID is `{publisherId}.{extensionId}.my-custom-hub`.

The following table lists the properties available for `ms.vss-web.hub` contributions:

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `name` | string | Yes | Display name shown in the hub navigation |
| `order` | number | No | Position relative to other hubs (lower values appear first) |
| `uri` | string | Yes | Relative path to the hub's HTML content page |
| `icon` | string | No | Custom icon using an `asset://` path |
| `iconName` | string | No | Fluent UI icon name |
| `supportsMobile` | boolean | No | Whether the hub appears on mobile devices |

> [!TIP]
> If your contribution doesn't appear, verify the target ID matches exactly — IDs are case-sensitive. Reload the extension in your browser and check the developer tools console for extension loading errors.

## Add an icon to a menu or toolbar

Use the `icon` or `iconName` property in your contribution to display an icon. Provide your own icon when possible.

Custom icon:

```json
"properties": {
    "name": "Sample hub",
    "uri": "dist/Hub/Hub.html",
    "icon": "asset://static/sample-icon.png",
    "supportsMobile": true
}
```

[Fluent UI icon](https://developer.microsoft.com/fluentui#/styles/web/icons):

```json
"properties": {
    "iconName": "Code",
    "name": "Code Hub",
    "order": 30,
    "uri": "/views/code/custom.html"
}
```

> [!NOTE]
> The `icon` and `iconName` properties work for hubs, menus, and toolbars only. They don't work for tab contributions.

## Settings for menus and toolbars

These targets apply to organization and project administration pages, not to service-specific hubs like Azure Boards or Azure Repos.

| Name                              | Target ID                                           |  
| ----------------------------------|-----------------------------------------------------|
| Organization/collection overview toolbar | `ms.vss-admin-web.collection-overview-toolbar-menu` |
| Collection overview projects grid | `ms.vss-admin-web.projects-grid-menu`               |
| Project overview toolbar          | `ms.vss-admin-web.project-overview-toolbar-menu`    |
| Project overview teams grid       | `ms.vss-admin-web.teams-grid-menu`                  |

::: moniker range="<=azure-devops"

## Azure Boards menu and toolbar

| Name                                 | Target ID                                              | Preview image                              |
| ------------------------------------ | ------------------------------------------------------ | ------------------------------------------ |
| Work item query menu                 | `ms.vss-work-web.work-item-query-menu`                 | :::image type="content" source="media/work/query-actions.png" alt-text="Screenshot of a custom action in the query menu.":::         |
| Work item query results toolbar menu | `ms.vss-work-web.work-item-query-results-toolbar-menu` | :::image type="content" source="media/work/query-results-toolbar-menu.png" alt-text="Screenshot of a custom action in the query results toolbar menu.":::  |
| Work item query results menu item    | `ms.vss-work-web.query-result-work-item-menu`          | :::image type="content" source="media/work/query-results-item-menu.png" alt-text="Screenshot of a custom action in the query results item menu."::: |
| Work item query results tab          | `ms.vss-work-web.query-tabs`                           | :::image type="content" source="media/work/query-results-pivot-tab.png" alt-text="Screenshot of a custom tab in query results.":::        |
| Work item for context menu           | `ms.vss-work-web.work-item-toolbar-menu`               | :::image type="content" source="media/work/work-item-toolbar-actions.png" alt-text="Screenshot of custom actions in the work item toolbar.":::    |
| Backlog item menu                    | `ms.vss-work-web.backlog-item-menu`                    | :::image type="content" source="media/work/backlog-item-actions.png" alt-text="Screenshot of custom actions in the backlog item menu."::: |
| Sprint board pivot filter menu       | `ms.vss-work-web.sprint-board-pivot-filter-menu`       | :::image type="content" source="media/work/sprint-board-pivot-filter-actions.png" alt-text="Screenshot of the sprint board pivot filter menu.":::      |
| Board pivot filter menu              | `ms.vss-work-web.backlog-board-pivot-filter-menu`      | :::image type="content" source="media/work/backlog-board-pivot-filter-actions.png" alt-text="Screenshot of the backlog board pivot filter menu."::: |
| Card menu                            | `ms.vss-work-web.backlog-board-card-item-menu`         |                                             |
| Product backlog tab                  | `ms.vss-work-web.product-backlog-tabs`                 | :::image type="content" source="media/work/product-backlog-tab.png" alt-text="Screenshot of a custom tab on the product backlog.":::     |
| Iteration backlog tab                | `ms.vss-work-web.iteration-backlog-tabs`               | :::image type="content" source="media/work/iteration-backlog-tab.png" alt-text="Screenshot of a custom tab on the iteration backlog."::: |
| Portfolio backlog pane               | `ms.vss-work-web.portfolio-backlog-toolpane`           | :::image type="content" source="media/work/portfolio-backlog-pane.png" alt-text="Screenshot of a custom pane on the portfolio backlog."::: |
| Product backlog pane                 | `ms.vss-work-web.requirement-backlog-toolpane`         | :::image type="content" source="media/work/product-backlog-pane.png" alt-text="Screenshot of a custom pane on the product backlog.":::   |
| Iteration backlog pane               | `ms.vss-work-web.iteration-backlog-toolpane`           | :::image type="content" source="media/work/iteration-backlog-pane.png" alt-text="Screenshot of a custom pane on the iteration backlog."::: |

::: moniker-end

::: moniker range="azure-devops"

## Azure Pipelines menu and toolbar

| Name                                       | Target ID                                                               | Preview              |
| ------------------------------------------ | ----------------------------------------------------------------------- | -------------------- |
| Completed build menu                       | `ms.vss-build-web.completed-build-menu`                                 | :::image type="content" source="media/build/completed-build-actions.png" alt-text="Screenshot of the completed build actions menu.":::   |
| Test results toolbar action                | `ms.vss-test-web.test-results-actions-menu`                             | :::image type="content" source="media/build/extension-test-custom-action.png" alt-text="Screenshot of a custom action in the test results toolbar.":::        |
| Test result details tab                    | `ms.vss-test-web.test-result-details-tab-items`                         | :::image type="content" source="media/build/extension-test-custom-tab.png" alt-text="Screenshot of a custom tab in test result details.":::              |
| Release pipeline explorer context menu     | `ms.vss-releaseManagement-web.release-definition-explorer-context-menu` | :::image type="content" source="media/release/definition-explorer-context-menu.png" alt-text="Screenshot of the release definition explorer context menu."::: |
| Pipeline details view, header button       | `ms.vss-build-web.pipelines-header-menu`                                | :::image type="content" source="media/build/header-menu.png" alt-text="Screenshot of a header button in the pipeline details view.":::                  |
| Pipeline details view, folder context menu | `ms.vss-build-web.pipelines-folder-menu`                                | :::image type="content" source="media/build/folder-menu.png" alt-text="Screenshot of a folder context menu in the pipeline details view.":::          |

### Azure Pipelines tasks

Tasks perform work in a build or release pipeline. For more information, see [Add a custom pipelines task extension](../../develop/add-build-task.md).

::: moniker-end

::: moniker range="<=azure-devops"

## Azure Repos menu and toolbar

| Name                             | Target ID                                       | Preview image                                 |
| -------------------------------- | ----------------------------------------------- | --------------------------------------------- |
| Source item (grid) menu          | `ms.vss-code-web.source-grid-item-menu`         | :::image type="content" source="media/code/source-grid-item-actions.png" alt-text="Screenshot of the source item grid menu.":::   |
| Source item (tree) menu          | `ms.vss-code-web.source-tree-item-menu`         | :::image type="content" source="media/code/source-tree-item-actions.png" alt-text="Screenshot of the source item tree menu.":::   |
| Source item (grid and tree) menu | `ms.vss-code-web.source-item-menu`              | :::image type="content" source="media/code/source-item-actions.png" alt-text="Screenshot of the source item combined menu.":::             |
| Change list item menu            | `ms.vss-code-web.change-list-item-menu`         |                                               |
| Change list summary item menu    | `ms.vss-code-web.change-list-summary-item-menu` |                                               |
| Git branches tree menu           | `ms.vss-code-web.git-branches-tree-menu`        | :::image type="content" source="media/code/git-branches-tree-actions.png" alt-text="Screenshot of the Git branches tree menu.":::        |
| Git pull request actions menu    | `ms.vss-code-web.pull-request-action-menu`      | :::image type="content" source="media/code/pull-request-actions.png" alt-text="Screenshot of the Git pull request actions menu.":::      |
| Git pull request tabs (pivots)   | `ms.vss-code-web.pr-tabs`                       | :::image type="content" source="media/code/pull-request-tab.png" alt-text="Screenshot of a custom tab on a Git pull request.":::              |
| Git commit listing menu          | `ms.vss-code-web.git-commit-list-menu`          | :::image type="content" source="media/code/git-commit-list-menu.png" alt-text="Screenshot of the Git commit list menu.":::          |
| Git commit detail menu           | `ms.vss-code-web.git-commit-details-menu`       | :::image type="content" source="media/code/git-commit-detail-menu.png" alt-text="Screenshot of the Git commit detail menu.":::      |

::: moniker-end

::: moniker range="<=azure-devops"

## Azure Test Plans menu and toolbar

| Name                       | Target ID                                   | Preview image                              |
| -------------------------- | ------------------------------------------- | ------------------------------------------ |
| Test run grid menu         | `ms.vss-test-web.test-run-grid-menu`        | :::image type="content" source="media/test/test-run-grid-menu.png" alt-text="Screenshot of the test run grid menu.":::                            |
| Test plan suites tree menu | `ms.vss-test-web.test-plans-suites-context` | :::image type="content" source="media/test/test-plans-suites-context.png" alt-text="Screenshot of the test plans suites context menu.":::     |
| Test plan hub pivot tab    | `ms.vss-test-web.test-plan-pivot-tabs`      | :::image type="content" source="media/test/test-plan-hub-pivot-tab-preview.png" alt-text="Screenshot of a custom pivot tab on the test plan hub.":::      |

::: moniker-end

## Other extensibility points

- **Dashboard widget** — Contribute a new widget type that users can add to a [dashboard](../../../report/dashboards/overview.md). See [Contribute a dashboard widget](../../develop/add-dashboard-widget.md).
- **Work item form** — Add sections, tabs, actions, or custom field renderers to the work item form. See [Extend the work item form](../../develop/add-workitem-extension.md).
- **Service hooks consumer** — Contribute a consumer service that receives events from Service Hooks. See [Create a custom consumer for Service Hooks](../../develop/add-service-hook.md).
