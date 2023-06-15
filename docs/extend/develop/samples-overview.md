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
ms.date: 10/12/2022
---

# Extension samples

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Get started developing your extension by working from a sample. 

[!INCLUDE [extension-docs-new-sdk](../../includes/extension-docs-new-sdk.md)]

The following Microsoft samples show the capabilities of the extension framework and how to 
contribute to various areas. Each sample illustrates one or more contributions. We've limited the 
number of contributions for each sample to increase understanding of the extension framework.

| Sample | Source | Contributions | Description |
|--------|-------|---------------|-------------|
| [BreadcrumbService](./custom-control.md) | [GitHub](https://github.com/microsoft/azure-devops-extension-sample/tree/master/src/Samples/BreadcrumbService) | Breadcrumb Service, Hub | It adds a breadcrumb service which adds a "Sample Breadcrumb Item" to the sample hub. Visit the "Sample Hub" in the Pipelines hub group to see this item. |
| [CodeEditorContribution](./custom-control.md) | [GitHub](https://github.com/microsoft/azure-devops-extension-sample/tree/master/src/Samples/CodeEditorContribution) | Code Editor | It adds a language definition and a JSON schema for the code editor. |
| [Feature](./custom-control.md) | [GitHub](https://github.com/microsoft/azure-devops-extension-sample/tree/master/src/Samples/Feature) | Feature, Hub, Property Provider | It shows how to hook into the Preview Features panel (under the user profile menu). It adds a simple hub that is only shown when an "ABC" feature is turned on. The feature can be toggled per-user or per-organization. |
| [Hub](./custom-control.md) | [GitHub](https://github.com/microsoft/azure-devops-extension-sample/tree/master/src/Samples/Hub) | Hub | It adds a hub named "Sample Hub" into the `Pipelines` hub group. If you visit a project-level page, you will find Sample Hub under the `Pipelines` navigation element in the vertical navigation menu on the left of the page. |
| [Menu](./custom-control.md) | [GitHub](https://github.com/microsoft/azure-devops-extension-sample/tree/master/src/Samples/Menu) | Build Definition Menu Item | It adds a "Sample build definition menu item" to the `Builds` hub in the dropdown actions menu in the top-right of the page. The menu handler gets the current build definition from the context that is passed to it, it makes a REST call, and shows the result in a message box. |
| [Panel](./custom-control.md) | [GitHub](https://github.com/microsoft/azure-devops-extension-sample/tree/master/src/Samples/Panel) | Panel Content, Hub | It is leveraged within the `Hub` sample. It is content that contains a toggle button along with OK/Cancel buttons. It can be used as custom panel or dialog content. |
| [Pivot](./custom-control.md) | [GitHub](https://github.com/microsoft/azure-devops-extension-sample/tree/master/src/Samples/Pivot) | Web Tab | It adds a "Sample Pivot" pivot (tab) to the Organization (Project Collection) home page, next to "Projects", "My work items", and "My pull requests". |
| [Pills](./custom-control.md) | [GitHub](https://github.com/microsoft/azure-devops-extension-sample/tree/master/src/Samples/Pills) | Pill Provider | It adds pills to the title of the Pipeline definition (Runs) page. |
| [QueryParamsHandler](./custom-control.md) | [GitHub](https://github.com/microsoft/azure-devops-extension-sample/tree/master/src/Samples/QueryParamsHandler) | Event Subscription | It adds a service that gets loaded on any page whenever a "showMyPanel" query parameter is present in the URL when any page is loaded. The startup service shows the custom panel from the Panel sample, using an optional "myPanelTitle" query parameter as the panel title. |
| [RepositoryActions](./custom-control.md) | [GitHub](https://github.com/microsoft/azure-devops-extension-sample/tree/master/src/Samples/RepositoryActions) | Menu Item | It adds a "Sample repository action" menu item to the repository picker in the header of code hub pages. If a `href` property is provided, clicking on the action will navigate to the given url. If a `uri` is provided, that code will be executed when the action is clicked. |
| [RepositoryServiceHub](./custom-control.md) | [GitHub](https://github.com/microsoft/azure-devops-extension-sample/tree/master/src/Samples/Feature) | Hub | It adds a "Repository Information" hub to the `Code` hub group. It demonstrates how to interact with the `IVersionControlRepositoryService` to obtain basic information about a user's currently selected Git repository. |
| [WorkItemFormGroup](./custom-control.md) | [GitHub](https://github.com/microsoft/azure-devops-extension-sample/tree/master/src/Samples/WorkItemFormGroup) | Work Item Form Group | It adds a "Sample WorkItem Form Group" extension to workitem form to show how to interact with the `IWorkItemFormService` service and `IWorkItemNotificationListener`. It gives UI to show case how to change field values using the form service and displaying workitem form notification events. |
| [WorkItemOpen](./custom-control.md) | [GitHub](https://github.com/microsoft/azure-devops-extension-sample/tree/master/src/Samples/WorkItemOpen) | Hub | It adds a "Sample WorkItem Open" hub to the Boards hub group to show how to interact with the `IWorkItemFormNavigationService` service. It gives UI for you to open an existing work item (by ID) or open the work item form for a new work item (by work item type). Either of these options open a dialog in the host frame. |
| [Color Scale Work Item Form Custom Control](./custom-control.md) | [GitHub](https://github.com/Microsoft/vsts-sample-wit-custom-control) | Work Item Form Control | Add color coding to the values in a dropdown. |
| [Folder Management](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.FolderManagement) | [GitHub](https://github.com/ALM-Rangers/VSO-Extension-FolderManagement) | Context menu action (code explorer tree) | Create a folder in your source repositories from the code explorer tree. No need to clone the repository or install extra tools. |
| [Offline Test Execution](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.OfflineTestExecution) | [GitHub](https://github.com/ALM-Rangers/Offline-Test-Execution-extension) | Test plan tab | Allows the tester to perform the test steps even if disconnected from Azure DevOps. It can be done using the exported Excel Spreadsheet. |
| [Release Management Utility tasks](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.utilitytasks) | [GitHub](https://github.com/openalm/Extension-UtilitiesPack) | Release Management tasks | Utility tasks for Release Management.  |
| [Roll-up Board](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.RollUpBoard) | [GitHub](https://github.com/ALM-Rangers/Roll-Up-Board-Widget-Extension) | Dashboard Widget | This widget shows the number of cards in each column of the Kanban board. |
| [Sample Data Widget](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.SampleDataWidget) | [GitHub](https://github.com/ALM-Rangers/Sample-Data-Widget-Extension) | Dashboard Widget | Create sample data in your Team Services project. |
| [State Model Visualization](https://marketplace.visualstudio.com/items?itemName=taavi-koosaar.StateModelVisualization) | [GitHub](https://github.com/melborp/StateModelVisualization) | Toolbar action (work item), Hub | Visualize the state model for a selected work item type. |
| [Team Calendar](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.team-calendar) | [GitHub](https://github.com/Microsoft/vsts-team-calendar) | Hub, Event sources | Track events important to your team, view and manage days off, quickly see when sprints start and end, and more. |
| [Team Project Health](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.TeamProjectHealth) | [GitHub](https://github.com/ALM-Rangers/Visualize-Team-Project-Health-Widgets) | Dashboard Widget | Enable users to visualize the overall health of builds, delivering a visual cue similar to the Codify Build Light. |
| [WSJF (Weighted Shortest Job First)](https://marketplace.visualstudio.com/items?itemName=MS-Agile-SAFe.WSJF-extension) | [GitHub](https://github.com/Microsoft/vsts-wsjf-extension) | Notification (work item), Context menu action (work item) | Auto calculates WSJF (weighted shortest job first) per work item and stores it in a work item field. |
| [Cascading Lists](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.cascading-picklists-extension) | [GitHub](https://github.com/microsoft/azure-devops-extension-cascading-picklist) | Work Item Form | Define cascading behavior for picklists in work item form. |

## How to get started

To get you started as quickly as possible, there's a [seed project](https://github.com/cschleiden/vsts-extension-ts-seed-simple) available that contains the files required to build an extension using TypeScript. To automate building, packaging, and publishing the extension, a grunt script is 
added.

## Related articles

- [Develop a web extension](../get-started/node.md)
- [Developer Formula Design System](https://developer.microsoft.com/azure-devops/)
- [Azure DevOps sample extensions repo](https://github.com/Microsoft/azure-devops-extension-sample)
- [Contribution model](../develop/contributions-overview.md)
- [Package and publish extensions](../publish/overview.md)
