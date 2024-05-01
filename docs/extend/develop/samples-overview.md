---
ms.subservice: azure-devops-ecosystem
title: Samples overview | Extensions for Azure DevOps
description: Overview of the available extension samples for Azure DevOps, including a description, the link to the repo and the contributions they touch.
ms.assetid: 2639a776-d2f7-4866-b54f-1da3883b1b91
ms.custom: engagement-fy23
ms.topic: conceptual
monikerRange: '<= azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 05/01/2024
---

# Extension samples

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Start developing your extension by working from a sample. 

[!INCLUDE [extension-docs-new-sdk](../../includes/extension-docs-new-sdk.md)]

The following Microsoft samples show the capabilities of the extension framework and how to contribute to various areas. Each sample illustrates one or more contributions. We limit the number of contributions for each sample to increase understanding of the extension framework.

| Sample | Source | Contributions | Description |
|--------|-------|---------------|-------------|
| [BreadcrumbService](./add-hub.md) | [GitHub](https://github.com/microsoft/azure-devops-extension-sample/tree/master/src/Samples/BreadcrumbService) | Breadcrumb Service, Hub | Adds a breadcrumb service, which adds a "Sample Breadcrumb Item" to the sample hub. To see this item, go to the **Sample Hub** in the **Pipelines** hub group. |
| CodeEditorContribution | [GitHub](https://github.com/microsoft/azure-devops-extension-sample/tree/master/src/Samples/CodeEditorContribution) | Code Editor | Adds a language definition and a JSON schema for the code editor. |
| [Feature](./add-hub.md) | [GitHub](https://github.com/microsoft/azure-devops-extension-sample/tree/master/src/Samples/Feature) | Feature, Hub, Property Provider | Shows how to hook into the **Preview Features** panel under the user profile menu. Adds a simple hub that only shows when you turn on an "ABC" feature. You can toggle the feature on and off, per user or per organization. |
| [Hub](./add-hub.md) | [GitHub](https://github.com/microsoft/azure-devops-extension-sample/tree/master/src/Samples/Hub) | Hub | Adds a hub named **Sample Hub** into the **Pipelines** hub group. The Sample Hub is on a project-level page, under the **Pipelines** navigation element. |
| [Menu](./add-action.md) | [GitHub](https://github.com/microsoft/azure-devops-extension-sample/tree/master/src/Samples/Menu) | Build Definition Menu Item | Adds a **Sample build definition menu item** to the **Builds** hub in the dropdown actions menu. The menu handler gets the current build definition from the context passed, makes a REST call, and then shows the result in a message box. |
| [Panel](./add-hub.md) | [GitHub](https://github.com/microsoft/azure-devops-extension-sample/tree/master/src/Samples/Panel) | Panel Content, Hub | Applied within the **Hub** sample. Contains a toggle button along with **OK** and **Cancel** buttons. Can be used as a custom panel or dialog content. |
| [Pivot](./add-hub.md) | [GitHub](https://github.com/microsoft/azure-devops-extension-sample/tree/master/src/Samples/Pivot) | Web Tab | Adds a **Sample Pivot** tab to the organization or project collection home page, next to **Projects**, **My work items**, and **My pull requests**. |
| Pills | [GitHub](https://github.com/microsoft/azure-devops-extension-sample/tree/master/src/Samples/Pills) | Pill Provider | Adds pills to the title of the Pipeline definition (Runs) page. |
| QueryParamsHandler | [GitHub](https://github.com/microsoft/azure-devops-extension-sample/tree/master/src/Samples/QueryParamsHandler) | Event Subscription | Adds a service that loads on any page whenever a `showMyPanel` query parameter presents in the URL when any page gets loaded. The startup service shows the custom panel from the Panel sample, using an optional `myPanelTitle` query parameter as the panel title. |
| [RepositoryActions](./add-action.md) | [GitHub](https://github.com/microsoft/azure-devops-extension-sample/tree/master/src/Samples/RepositoryActions) | Menu Item | It adds a **Sample repository action** menu item to the repository picker in the header of code hub pages. If the `href` property shows, select the action to go to the given URL. If the `uri` property is provided, that code executes when you select the action. |
| [RepositoryServiceHub](./add-hub.md) | [GitHub](https://github.com/microsoft/azure-devops-extension-sample/tree/master/src/Samples/Feature) | Hub | Adds a **Repository Information** hub to the **Code** hub group. Demonstrates how to interact with the `IVersionControlRepositoryService` to obtain basic information about a user's Git repository. |
| [WorkItemFormGroup](./custom-control.md) | [GitHub](https://github.com/microsoft/azure-devops-extension-sample/tree/master/src/Samples/WorkItemFormGroup) | Work Item Form Group | Adds a **Sample WorkItem Form Group** extension to the work item form to show how to interact with the `IWorkItemFormService` service and `IWorkItemNotificationListener`. Provides a UI to show case how to change field values using the form service and displaying work item form notification events. |
| [WorkItemOpen](./add-hub.md) | [GitHub](https://github.com/microsoft/azure-devops-extension-sample/tree/master/src/Samples/WorkItemOpen) | Hub | Adds a **Sample WorkItem Open** hub to the **Boards** hub group to show how to interact with the `IWorkItemFormNavigationService` service. Provides a UI for you to open an existing work item by ID, or open the work item form for a new work item by work item type. Either of these options open a dialog in the host frame. |
| [Color Scale Work Item Form Custom Control](./custom-control.md) | [GitHub](https://github.com/Microsoft/vsts-sample-wit-custom-control) | Work Item Form Control | Adds color coding to the values in a dropdown. |
| [Folder Management](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.FolderManagement) | [GitHub](https://github.com/ALM-Rangers/VSO-Extension-FolderManagement) | Context menu action (code explorer tree) | Creates a folder in your source repositories from the code explorer tree. No need to clone the repository or install extra tools. |
| [Offline Test Execution](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.OfflineTestExecution) | [GitHub](https://github.com/ALM-Rangers/Offline-Test-Execution-extension) | Test plan tab | Allows the tester to perform the test steps even if disconnected from Azure DevOps. Can be done using the exported Excel spreadsheet. |
| [Release Management Utility tasks](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.utilitytasks) | [GitHub](https://github.com/openalm/Extension-UtilitiesPack) | Release Management tasks | Utility tasks for Release Management.  |
| [Roll-up Board](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.RollUpBoard) | [GitHub](https://github.com/ALM-Rangers/Roll-Up-Board-Widget-Extension) | Dashboard Widget | Shows the number of cards in each column of the Kanban board. |
| [State Model Visualization](https://marketplace.visualstudio.com/items?itemName=taavi-koosaar.StateModelVisualization) | [GitHub](https://github.com/melborp/StateModelVisualization) | Toolbar action (work item), Hub | Visualize the state model for a selected work item type. |
| [Team Calendar](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.team-calendar) | [GitHub](https://github.com/Microsoft/vsts-team-calendar) | Hub, Event sources | Track events important to your team, view and manage days off, quickly see when sprints start and end, and more. |
| [Team Project Health](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.TeamProjectHealth) | [GitHub](https://github.com/ALM-Rangers/Visualize-Team-Project-Health-Widgets) | Dashboard Widget | Lets users  visualize the overall health of builds, delivering a visual cue similar to the Codify Build Light. |
| [WSJF (Weighted Shortest Job First)](https://marketplace.visualstudio.com/items?itemName=MS-Agile-SAFe.WSJF-extension) | [GitHub](https://github.com/Microsoft/vsts-wsjf-extension) | Notification (work item), Context menu action (work item) | Auto calculates WSJF (weighted shortest job first) per work item and stores it in a work item field. |
| [Cascading Lists](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.cascading-picklists-extension) | [GitHub](https://github.com/microsoft/azure-devops-extension-cascading-picklist) | Work Item Form | Define cascading behavior for picklists in work item form. |

## Get started

To get started as quickly as possible, use the [seed project](https://github.com/cschleiden/vsts-extension-ts-seed-simple) that contains the files required to build an extension using TypeScript. There's a grunt script to automate building, packaging, and publishing the extension.

## Related articles

- [Develop a web extension](../get-started/node.md)
- [Use the Developer Formula Design System](https://developer.microsoft.com/azure-devops/)
- [Use the Azure DevOps sample extensions repo](https://github.com/Microsoft/azure-devops-extension-sample)
- [View the contribution model](../develop/contributions-overview.md)
- [Package and publish extensions](../publish/overview.md)
