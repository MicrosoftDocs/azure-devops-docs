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
