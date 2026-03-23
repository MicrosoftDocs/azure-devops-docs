---
title: Extensibility Points
titleSuffix: Azure DevOps
description: Browse through the places where your extension can extend Azure DevOps capabilities.
ms.assetid: 007954b7-9424-4ea6-916b-8cb2f215f5c4
ms.subservice: azure-devops-ecosystem
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.topic: overview
ms.date: 12/01/2025
ms.custom: engagement-fy23, sfi-image-nochange
---

# Extensibility points

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

Extensions add capabilities to the Azure DevOps UI and REST surface. This article lists the most common extensibility points you can target and shows the IDs you use in your extension manifest. For an overview of the extension model and contribution patterns, see the [Contribution model](../../develop/contributions-overview.md).

[!INCLUDE [extension-samples-tip](../../includes/extension-samples-tip.md)]

<a name="hubs"></a>

## Hubs and hub groups

Hubs and hub groups provide primary navigation in Azure DevOps (for example, **Files**, **Releases**, **Backlogs**, **Queries**). A hub belongs to a hub group; for example, the **Files** hub belongs to the project-level **Azure Repos** hub group. Hub groups can exist at the organization/collection level or at the project level. Most extensions contribute at the project level.

The following table lists common hub groups and their contribution IDs.

::: moniker range="<=azure-devops"

| Name                | ID                                         | Level                    | Preview image                |
| --------------------|--------------------------------------------|--------------------------|----------------------------- |
| Azure Boards        | `ms.vss-work-web.work-hub-group`           | Project/team             | :::image type="content" source="media/work/azure-boards.png" alt-text="Screenshot of custom work hub added to Azure Boards."::: |
| Azure Repos         | `ms.vss-code-web.code-hub-group`           | Project/team             | :::image type="content" source="media/code/azure-repos.png" alt-text="Screenshot of custom work hub added to Azure Repos.":::  |
| Azure Pipelines     | `ms.vss-build-web.build-release-hub-group` | Project/team             | :::image type="content" source="media/build/azure-pipelines.png" alt-text="Screenshot of custom hub added to Azure Pipelines."::: |
| Azure Test Plans    | `ms.vss-test-web.test-hub-group`           | Project/team             | :::image type="content" source="media/test/azure-test-plans.png" alt-text="Screenshot of custom hub added to Azure Test Plans."::: |
| Project settings    | `ms.vss-web.project-admin-hub-group`       | Project                  | :::image type="content" source="media/test/project-settings.png" alt-text="Screenshot of custom project admin hub."::: |
| Organization settings | `ms.vss-web.collection-admin-hub-group`  | Organization/collection  | :::image type="content" source="media/test/organization-settings.png" alt-text="Screenshot of custom organization admin hub."::: |
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

* `ms.vss-web.hub` is the type of contribution. The `vss-web` extension published under the `ms` publisher defines this type. This type defines the optional and required properties for contributions of this type (for example, name, order).
* `ms.vss-code-web.code-hub-group` is the full ID of the hub group contribution that this hub targets. The `vss-code-web` extension published under the `ms` publisher declares this contribution.
* `my-custom-hub` is the short ID of this contribution; `{publisherId}.{extensionId}.my-custom-hub` is the full ID.

<a name="menus"></a>

## Add an icon to your menu or toolbar

Add an icon property so you can reference it directly by name.

We recommend providing your own icon.
Using your own icon example:

 ```"properties": {
            "name": "Sample hub",
            "uri": "dist/Hub/Hub.html",
            "icon": "asset://static/sample-icon.png",
            "supportsMobile": true
        }
```

Using the [Office UI Fabric Icons](https://uifabricicons.azurewebsites.net/) example:

```"properties": {
            "iconName": "Code",
            "name": "Code Hub",
            "order": 30,
            "uri": "/views/code/custom.html"
        }
```

> [!NOTE]
> Icons, `icon` and `iconName` properties, don't support tab contributions. They only work for hubs, menus, and toolbars.

## Settings for menus and toolbars

| Name                              | Target ID                                           |  
| ----------------------------------|-----------------------------------------------------|
| Organization/collection overview toolbar | `ms.vss-admin-web.collection-overview-toolbar-menu` |
| Collection overview projects grid | `ms.vss-admin-web.projects-grid-menu`               |
| Project overview toolbar          | `ms.vss-admin-web.project-overview-toolbar-menu`    |
| Project overview teams grid       | `ms.vss-admin-web.teams-grid-menu`                  |

<a name="menus_work"></a> 

::: moniker range="<=azure-devops"

## Azure Boards menu and toolbar

| Name                                 | Target ID                                              | Preview image                              |
| ------------------------------------ | ------------------------------------------------------ | ------------------------------------------ |
| Work item query menu                 | `ms.vss-work-web.work-item-query-menu`                 | :::image type="content" source="media/work/query-actions.png" alt-text="Screenshot of custom query action added to query menu.":::         |
| Work item query results toolbar menu | `ms.vss-work-web.work-item-query-results-toolbar-menu` | :::image type="content" source="media/work/query-results-toolbar-menu.png" alt-text="Screenshot of Query Results custom toolbar menu action.":::  |
| Work item query results menu item    | `ms.vss-work-web.query-result-work-item-menu`          | :::image type="content" source="media/work/query-results-item-menu.png" alt-text="Screenshot of Query Results Item Menu custom action."::: |
| Work item query results tab          | `ms.vss-work-web.query-tabs`                           | :::image type="content" source="media/work/query-results-pivot-tab.png" alt-text="Screenshot of Query toolbar custom pivot tab.":::        |
| Work item for context menu           | `ms.vss-work-web.work-item-toolbar-menu`               | :::image type="content" source="media/work/work-item-toolbar-actions.png" alt-text="Screenshot of custom work item toolbar actions.":::    |
| Backlog item menu                    | `ms.vss-work-web.backlog-item-menu`                    | :::image type="content" source="media/work/backlog-item-actions.png" alt-text="Screenshot of backlog item actions custom menu options."::: |
| Sprint board pivot filter menu       | `ms.vss-work-web.sprint-board-pivot-filter-menu`       | :::image type="content" source="media/work/sprint-board-pivot-filter-actions.png" alt-text="Screenshot of sprint board pivot filter menu.":::      |
| Board pivot filter menu              | `ms.vss-work-web.backlog-board-pivot-filter-menu`      | :::image type="content" source="media/work/backlog-board-pivot-filter-actions.png" alt-text="Screenshot of Backlog Board Pivot Filter Actions."::: |
| Card menu                            | `ms.vss-work-web.backlog-board-card-item-menu`         |                                             |
| Product backlog tab                  | `ms.vss-work-web.product-backlog-tabs`                 | :::image type="content" source="media/work/product-backlog-tab.png" alt-text="Screenshot of product Backlog Custom Tab.":::     |
| Iteration backlog tab                | `ms.vss-work-web.iteration-backlog-tabs`               | :::image type="content" source="media/work/iteration-backlog-tab.png" alt-text="Screenshot of iterations Backlog Custom Tab."::: |
| Portfolio backlog pane               | `ms.vss-work-web.portfolio-backlog-toolpane`           | :::image type="content" source="media/work/portfolio-backlog-pane.png" alt-text="Screenshot of Portfolio Backlog Custom Pane."::: |
| Product backlog pane                 | `ms.vss-work-web.requirement-backlog-toolpane`         | :::image type="content" source="media/work/product-backlog-pane.png" alt-text="Screenshot of Product Backlog Custom Pane.":::   |
| Iteration backlog pane               | `ms.vss-work-web.iteration-backlog-toolpane`           | :::image type="content" source="media/work/iteration-backlog-pane.png" alt-text="Screenshot of Iteration Backlog Custom Pane."::: |

::: moniker-end

::: moniker range="azure-devops"

## Azure Pipelines menu and toolbar

| Name                                       | Target ID                                                               | Preview              |
| ------------------------------------------ | ----------------------------------------------------------------------- | -------------------- |
| Completed build menu                       | `ms.vss-build-web.completed-build-menu`                                 | :::image type="content" source="media/build/completed-build-actions.png" alt-text="Screenshot of completed build actions.":::   |
| Test results toolbar action                | `ms.vss-test-web.test-results-actions-menu`                             | :::image type="content" source="media/build/extension-test-custom-action.png" alt-text="Screenshot of test results toolbar action.":::        |
| Test result details tab                    | `ms.vss-test-web.test-result-details-tab-items`                         | :::image type="content" source="media/build/extension-test-custom-tab.png" alt-text="Screenshot of test result details tab.":::              |
| Release pipeline explorer context menu     | `ms.vss-releaseManagement-web.release-definition-explorer-context-menu` | :::image type="content" source="media/release/definition-explorer-context-menu.png" alt-text="Screenshot of definition explorer context menu."::: |
| Pipeline details view, header button       | `ms.vss-build-web.pipelines-header-menu`                                | :::image type="content" source="media/build/header-menu.png" alt-text="Screenshot of pipeline details view, header menu.":::                  |
| Pipeline details view, folder context menu | `ms.vss-build-web.pipelines-folder-menu`                                | :::image type="content" source="media/build/folder-menu.png" alt-text="Screenshot of pipeline details view, folder context menu.":::          |

<a name="buildtasks"></a>

### Azure Pipelines tasks

Tasks perform work in a build or release. For more information, see [Add a custom pipelines task extension](../../develop/add-build-task.md).

::: moniker-end

<a name="menus_code"></a>

::: moniker range="<=azure-devops"

## Azure Repos menu and toolbar

| Name                             | Target ID                                       | Preview image                                 |
| -------------------------------- | ----------------------------------------------- | --------------------------------------------- |
| Source item (grid) menu          | `ms.vss-code-web.source-grid-item-menu`         | :::image type="content" source="media/code/source-grid-item-actions.png" alt-text="Screenshot of repos item grid actions.":::   |
| Source item (tree) menu          | `ms.vss-code-web.source-tree-item-menu`         | :::image type="content" source="media/code/source-tree-item-actions.png" alt-text="Screenshot of repos item tree actions.":::   |
| Source item (grid and tree) menu | `ms.vss-code-web.source-item-menu`              | :::image type="content" source="media/code/source-item-actions.png" alt-text="Screenshot of repos item actions.":::             |
| Change list item menu            | `ms.vss-code-web.change-list-item-menu`         |                                               |
| Change list summary item menu    | `ms.vss-code-web.change-list-summary-item-menu` |                                               |
| Git branches tree menu           | `ms.vss-code-web.git-branches-tree-menu`        | :::image type="content" source="media/code/git-branches-tree-actions.png" alt-text="Screenshot of git branches tree.":::        |
| Git pull request actions menu    | `ms.vss-code-web.pull-request-action-menu`      | :::image type="content" source="media/code/pull-request-actions.png" alt-text="Screenshot of git pull request actions.":::      |
| Git pull request tabs (pivots)   | `ms.vss-code-web.pr-tabs`                       | :::image type="content" source="media/code/pull-request-tab.png" alt-text="Screenshot of git pull request tab.":::              |
| Git commit listing menu          | `ms.vss-code-web.git-commit-list-menu`          | :::image type="content" source="media/code/git-commit-list-menu.png" alt-text="Screenshot of git commit list menu.":::          |
| Git commit detail menu           | `ms.vss-code-web.git-commit-details-menu`       | :::image type="content" source="media/code/git-commit-detail-menu.png" alt-text="Screenshot of git commit detail menu.":::      |

::: moniker-end

<a name="menus_test"></a>

::: moniker range="<=azure-devops"

## Azure Test Plans menu and toolbar

| Name                       | Target ID                                   | Preview image                              |
| -------------------------- | ------------------------------------------- | ------------------------------------------ |
| Test run grid menu         | `ms.vss-test-web.test-run-grid-menu`        | :::image type="content" source="media/test/test-run-grid-menu.png" alt-text="Screenshot of test run grid menu.":::                            |
| Test plan suites tree menu | `ms.vss-test-web.test-plans-suites-context` | :::image type="content" source="media/test/test-plans-suites-context.png" alt-text="Screenshot of test plans suites context.":::     |
| Test plan hub pivot tab    | `ms.vss-test-web.test-plan-pivot-tabs`      | :::image type="content" source="media/test/test-plan-hub-pivot-tab-preview.png" alt-text="Screenshot of test hub pivot tab.":::      |

::: moniker-end

<a name="dashboard"></a>

## Other extensibility points

- **Dashboard widget**: An extension can contribute a new type of widget that users can add to a [dashboard](../../../report/dashboards/overview.md). Learn how to [contribute a dashboard widget](../../develop/add-dashboard-widget.md).
- **Work item form**: Extensions enhance the work item form with new sections, tabs, actions, and custom field renderers. For more information, learn how to [extend the work item form](../../develop/add-workitem-extension.md).
- **Service hooks**: A *consumer* is the service that Service Hooks sends events to. An extension can contribute consumer services. A user (or programmatically) configures these services to send events to that service. For more information, see [Create a custom consumer for service hooks](../../develop/add-service-hook.md).
