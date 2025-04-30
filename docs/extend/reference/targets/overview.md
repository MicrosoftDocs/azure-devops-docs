---
title: Extensibility Points
titleSuffix: Azure DevOps
description: Browse through the places where your extension can extend Azure DevOps capabilities.
ms.assetid: 007954b7-9424-4ea6-916b-8cb2f215f5c4
ms.subservice: azure-devops-ecosystem
ms.custom: engagement-fy23
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.topic: overview
ms.date: 04/11/2025
---

# Extensibility points

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

Extensions enhance the Azure DevOps user experience by contributing new capabilities. This article highlights the most common extensibility points that your extension can target. Extensibility points allow packages to add functionality in a manner defined by the operating system. For more information about the Azure DevOps extensibility model, see the [Contribution model](../../develop/contributions-overview.md).

The [Contributions Guide extension](https://marketplace.visualstudio.com/items/ms-samples.samples-contributions-guide) is a sample extension. Install this extension into your organization. Once it's installed, you see the extensibility points that are available. We recommend you install this extension into a personal or test organization. The [source code for this extension](https://github.com/Microsoft/vso-extension-samples/tree/master/contributions-guide) is also available. 

For more information, see the following references:
- [azure-devops-extension-api](/javascript/api/azure-devops-extension-api/)
- [azure-devops-extension-sdk](/javascript/api/azure-devops-extension-sdk/)
- [azure-devops-extension-sample](https://github.com/microsoft/azure-devops-extension-sample)
- [installed extension API](/rest/api/azure/devops/extensionmanagement/installed-extensions?view=azure-devops-rest-6.0&preserve-view=true)

<a name="hubs"></a>

## Hubs and hub groups

Hubs and hub groups are the primary navigation elements in Azure DevOps. **Files**, **Releases**, **Backlogs**, and **Queries** are examples of hubs. A hub belongs to a hub group. The **Files** hub, for example, belongs to the project-level **Azure Repos** hub group. Hub groups can exist at the organization or collection level or at the project level. Most extensions contribute to the project level.

The following table describes the most common hub groups in Azure DevOps where you can contribute hubs.

::: moniker range="<=azure-devops"

| Name                | ID                                         | Level                    | Preview image                |
| --------------------|--------------------------------------------|--------------------------|----------------------------- |
| Azure Boards        | `ms.vss-work-web.work-hub-group`           | Project/team             | :::image type="content" source="media/work/azure-boards.png" alt-text="Screenshot of custom work hub added to Azure Boards."::: |
| Azure Repos         | `ms.vss-code-web.code-hub-group`           | Project/team             | :::image type="content" source="media/code/azure-repos.png" alt-text="Screenshot of custom work hub added to Azure Repos.":::  |
| Azure Pipelines     | `ms.vss-build-web.build-release-hub-group` | Project/team             | :::image type="content" source="media/build/azure-pipelines.png" alt-text="Screenshot of custom hub added to Azure Pipelines."::: |
| Azure Test Plans    | `ms.vss-test-web.test-hub-group`           | Project/team             | :::image type="content" source="media/test/azure-test-plans.png" alt-text="Screenshot of custom hub added to Azure Test Plans."::: |
| Project settings    | `ms.vss-web.project-admin-hub-group`       | Project                  | :::image type="content" source="media/test/project-settings.png" alt-text="Screenshot of custom project admin hub."::: |
| Organization settings  | `ms.vss-web.collection-admin-hub-group` | Organization or collection  | :::image type="content" source="media/test/organization-settings.png" alt-text="Screenshot of custom organization admin hub."::: |
::: moniker-end

### Example

The following example shows how to contribute a hub to the Code hub group:

```json
{
    ...
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

* `ms.vss-web.hub` is the type of contribution. This type is defined in the `vss-web` extension published under the `ms` publisher. This type declares optional and required properties that are required by contributions of this type (for example, name, order, and so on).
* `ms.vss-code-web.code-hub-group` is the full ID of the hub group contribution that this hub targets. This contribution is declared in the `vss-code-web` extension published under the `ms` publisher.
* `my-custom-hub` is the short ID of this contribution; `{publisherId}.{extensionId}.my-custom-hub` is the full ID.

<a name="menus"></a>

## Add an icon to your menu or toolbar

Add an icon property, so it can be used directly by name.

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

::: moniker range="=azure-devops-2020"

## Azure Pipelines menu and toolbar

| Name                                   | Target ID                                                               | Preview                  |
| -------------------------------------- | ----------------------------------------------------------------------- | ------------------------ |
| Completed build menu                   | `ms.vss-build-web.completed-build-menu`                                 | :::image type="content" source="media/build/completed-build-actions.png" alt-text="Screenshot of completed build actions.":::              |
| Build definitions menu                 | `ms.vss-build-web.build-definition-menu`                                | :::image type="content" source="media/build/build-definition-actions.png" alt-text="Screenshot of build definition actions.":::            |
| Test results toolbar action            | `ms.vss-test-web.test-results-actions-menu`                             | :::image type="content" source="../../media/extension-test-custom-action.png" alt-text="Screenshot of test results toolbar action.":::     |
| Test result details tab                | `ms.vss-test-web.test-result-details-tab-items`                         | :::image type="content" source="../../media/extension-test-custom-tab.png" alt-text="Screenshot of test result details tab.":::            |
| Release pipeline explorer context menu | `ms.vss-releaseManagement-web.release-definition-explorer-context-menu` | :::image type="content" source="media/release/definition-explorer-context-menu.png" alt-text="Screenshot of definition explorer context menu."::: |
| Release pipeline explorer toolbar menu | `ms.vss-releaseManagement-web.release-definition-explorer-toolbar-menu` | :::image type="content" source="media/release/definition-explorer-toolbar-menu.png" alt-text="Screenshot of definition explorer toolbar menu."::: |
| Release summary toolbar menu           | `ms.vss-releaseManagement-web.release-editor-tool-bar-menu`             | :::image type="content" source="media/release/release-summary-toolbar-menu.png" alt-text="Screenshot of release summary toolbar menu.":::  |
| Release summary tab                    | `ms.vss-releaseManagement-web.release-details-view`                     | :::image type="content" source="media/release/release-summary-tab.png" alt-text="Screenshot of release summary tab.":::                    |
| Release summary section                | `ms.vss-releaseManagement-web.release-details-summary-tab`              | :::image type="content" source="media/release/release-summary-section.png" alt-text="Screenshot of release summary section.":::            |
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

- **Dashboard widget**: An extension can contribute a new type of widget that can be added by users to a [dashboard](../../../report/dashboards/overview.md). Learn how to [contribute a dashboard widget](../../develop/add-dashboard-widget.md).
- **Work item form**: The work item form is enhanced by extensions with new sections, tabs, actions, and custom field renderers. For more information, learn how to [extend the work item form](../../develop/add-workitem-extension.md).
- **Service hooks**: A *consumer* is the service that events are sent to in Service Hooks. An extension can contribute consumer services. These services get configured by a user (or programmatically), to send events to that service. For more information, see [Create a custom consumer for service hooks](../../develop/add-service-hook.md).
::: moniker range="azure-devops"
- **Features**:
    **Name:** Preview feature (hosted only)  
    **Target ID:** ms.vss-web.managed-features  
::: moniker-end
::: moniker range="< azure-devops"
- **Features**:
    **Name:** Feature (on-premises only)  
    **Target ID:** ms.vss-web.managed-features-onprem  
::: moniker-end
