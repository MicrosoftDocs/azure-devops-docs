---
ms.prod: devops
ms.technology: devops-ecosystem
title: Samples Overview | Extensions for Azure DevOps Services
description: Overview of the available extension samples, including a description, the link to the repo and the contributions they touch
ms.assetid: 2639a776-d2f7-4866-b54f-1da3883b1b91
ms.topic: conceptual
ms.manager: jillfra
monikerRange: '>= tfs-2017'
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Azure DevOps Services extension samples

You can get started developing your extension by working from an sample. 
The Microsoft samples listed below show the capabilities of the extension framework and how to 
contribute to various areas. Each sample illustrates one or more contributions. We've limited the 
number of contributions for each sample to increase understanding of the extension framework.

| Sample | Source | Contributions | Description |
|--------|-------|---------------|-------------|
| [Color Scale Work Item Form Custom Control](./custom-control.md) | [GitHub](https://github.com/Microsoft/vsts-sample-wit-custom-control) | Work Item Form Control | Add color coding to the values in a dropdown. |
| [Countdown Widget](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.CountdownWidget) | [GitHub](https://github.com/ALM-Rangers/Countdown-Widget-Extension) | Dashboard Widget | Every team has important dates to remember. Make them visible for your team on your dashboard! |
| [File Owner](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.FileOwner) | [GitHub](https://github.com/ALM-Rangers/File-Owner-Extension) | Context menu action (source explorer) | Allows users to see who owns a file from the Source Explorer |
| [Folder Management](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.FolderManagement) | [GitHub](https://github.com/ALM-Rangers/VSO-Extension-FolderManagement) | Context menu action (code explorer tree) | Create a folder in your source repositories from the code explorer tree. No need to clone the repository or install extra tools |
| Print Cards | [GitHub](https://github.com/ALM-Rangers/Print-Cards-Extension) | Toolbar action (Kanban board) | Print cards from your Kanban board for use on a physical board |
| [Offline Test Execution](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.OfflineTestExecution) | [GitHub](https://github.com/ALM-Rangers/Offline-Test-Execution-extension) | Test plan tab | Allows the tester to perform the test steps even if disconnected from Azure DevOps Services. It can be done using the exported Excel Spreadsheet. |
| [Release Management Tasks](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.utilitytasks) | [GitHub](https://github.com/openalm/Extension-UtilitiesPack) | Release Management tasks | Utility tasks for Release Management: Tokenizer, Powershell++, Shell++, Zip & Unzip, Powershell to rollback  |
| [Roll-up Board](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.RollUpBoard) | [GitHub](https://github.com/ALM-Rangers/Roll-Up-Board-Widget-Extension) | Dashboard Widget | This widget shows the number of cards in each column of the Kanban board |
| [Sample Data](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.SampleDataWidget) | [GitHub](https://github.com/ALM-Rangers/Sample-Data-Widget-Extension) | Dashboard Widget | Lets you create and remove sample data in your project. |
| [Show Area Path Dependencies](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.ShowAreaPathDependencies) | [GitHub](https://github.com/ALM-Rangers/Show-Area-Path-Dependencies-Extension) | Hub | Provides a lightweight way to manage dependencies on other teams. |
| [State Model Visualization](https://marketplace.visualstudio.com/items?itemName=taavi-koosaar.StateModelVisualization) | [GitHub](https://github.com/melborp/StateModelVisualization) | Toolbar action (work item), Hub | Visualize the state model for a selected work item type. |
| [Tags MRU](https://marketplace.visualstudio.com/items?itemName=cschleiden.tags-mru) | [GitHub](https://github.com/cschleiden/vsts-extension-tags-mru) | Context menu action (work item), Notification (work item) | Keeps a list of the most recently used work item tags and allows adding them with a single click. |
| [Team Calendar](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.team-calendar) | [GitHub](https://github.com/Microsoft/vsts-team-calendar) | Hub, Event sources | Track events important to your team, view and manage days off, quickly see when sprints start and end, and more. |
| [Project Health](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.TeamProjectHealth) | [GitHub](https://github.com/ALM-Rangers/Visualize-Team-Project-Health-Widgets) | Dashboard Widget | Enable users to visualize the overall health of builds, delivering a visual cue similar to the Codify Build Light. |
| [User Voice UI](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.vsts-uservoice-ui) | [GitHub](https://github.com/Microsoft/vsts-uservoice-ui-extension) | Group (work item form), Hub, Extension data | Shows rich data of the linked User Voice suggestions on the work item form. It covers the following techniques: calling external APIs, add tags to work item, add links to work item, resize of container. |
| [Work Item Details](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.WorkItemDetails) | [GitHub](https://github.com/ALM-Rangers/Work-Item-Details-Widget-Extension) | Context menu action (work item), Dashboard Widget | View details of work item(s) on your dashboard |
| [WSJF](https://marketplace.visualstudio.com/items?itemName=MS-Agile-SAFe.WSJF-extension) | [GitHub](https://github.com/Microsoft/vsts-wsjf-extension) | Notification (work item), Context menu action (work item) | Calculates the Weighted Shortest Job First (WSJF), which is a formula to calculate the backlog items with highest ROI. It is a popular prioritization feature in frameworks like [SAFe](http://www.scaledagileframework.com/wsjf/). |

## How to get started

To get you started as quickly as possible, there is a [seed project](https://github.com/cschleiden/vsts-extension-ts-seed-simple) available
that contains the files required to build an extension using TypeScript. To automate building, packaging and publishing the extension a grunt script is 
added.

If you are interested in a sample project that contains the majority of the contributions, see the [Azure DevOps Services Sample Extensions](https://github.com/Microsoft/vsts-extension-samples) repository on GitHub.