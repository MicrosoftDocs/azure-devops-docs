---
title: About migrating and integrating work tracking data
titleSuffix: Azure Boards
description: Learn how you can migrate or integrate work tracking data from other software applications to Azure Boards, plus available extensions.
ms.custom: extensions, engagement-fy23
ms.service: azure-devops-boards
ms.topic: conceptual
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 02/11/2025
---

# About migrating and integrating work tracking data 

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

There are various tools available to help you migrate your work tracking data to the Azure DevOps platform. This article provides an overview of these tools and links to resources that support the migration of work tracking data and processes. You can also integrate Azure Boards with numerous non-Microsoft tools and extensions.

> [!NOTE]
> With [Azure DevOps Marketplace extensions for Azure Boards](https://marketplace.visualstudio.com/search?target=AzureDevOps&category=Azure%20Boards&sortBy=Installs), you can customize and enhance the default experience. For more information, see the [list of recommended extensions for Azure Boards](#extensions-for-azure-boards), further in this article. 

## Migrate from Azure DevOps Server

The Data Migration Tool for Azure DevOps provides a high fidelity way to migrate collection databases from Azure DevOps Server to Azure DevOps Services. For more information, see [Migrate data from Azure DevOps Server to Azure DevOps Services](../../migrate/migration-overview.md).

## Migrate data between projects

You can search for extensions in the [Visual Studio Marketplace](https://marketplace.visualstudio.com/azuredevops) that allow you to bulk edit and migrate data between project on both on-premises and the cloud. Such tools generally support the following tasks:  
- Migrate work items from one project to another project and synchronize changes after a migration
- Merge many projects into a single project
- Split one project into many projects
- Assist changing process templates
- Edit work items in bulk
- Migrate test suites and test plans

### Migrate data between projects without downtime  

There are non-Microsoft tools available in the [Visual Studio Marketplace](https://marketplace.visualstudio.com/azuredevops) that enable seamless migration without downtime or disruption, even when the target environment isn't empty or when templates differ. These tools generally support:

- Version control information and history, including original dates and users added to comments.
- Work items, both standard and custom, along with their history, retaining the original dates and users.
- Test plans, test suites, test cases, and test results.
- Iteration, area path, group, team, and user data.
- Dashboards, queries, widgets, and pipelines.
- Compatibility with Azure DevOps Server versions 2010 and later.
- Support for Azure DevOps Services.

## Migrate process models between Azure DevOps organizations

For constraints on process template definitions that you can import, see [Resolve validation errors for process import](../../organizations/settings/work/import-process/resolve-errors.md).
  
## Export and import work tracking data

The main tool you can use to import work tracking data you exported from elsewhere is Microsoft Excel. Excel supports publishing a flat list of work items or a hierarchical tree of parent-child linked work items. For more information, see [Bulk add or modify work items with Excel](../backlogs/office/bulk-add-modify-work-items-excel.md).

## Integrate with GitHub

Azure Boards (cloud) and Azure DevOps Server integrate with GitHub. Connect Azure Boards with GitHub repositories to link between GitHub commits, pull requests, and issues to work items. You can use GitHub for software development while using Azure Boards to plan and track your work.

For more information, see [Connect Azure Boards to GitHub](../github/connect-to-github.md).
 
## Integrate with non-Microsoft tools using service hooks

You can integrate Azure Boards with other non-Microsoft tools such as Jenkins and Trello. Using service hooks you can generate actions based on Azure DevOps events. For more information, see the following articles: 
-  [Create a service hook for Azure DevOps with Jenkins](../../service-hooks/services/jenkins.md) 
-  [Create a service hook for Azure DevOps with Trello](../../service-hooks/services/trello.md)
-  [Integrate with service hooks](../../service-hooks/overview.md)

## Extensions for Azure Boards

The following table contains some Microsoft extensions. You can search for other non-Microsoft extensions in the [Visual Studio Marketplace](https://marketplace.visualstudio.com/azuredevops).

| Category | Extensions |
|--------------|-------------|
| **Automation** | [Power Automate, Azure DevOps](https://powerautomate.microsoft.com/connectors/details/shared_visualstudioteamservices/azure-devops/) |
| **Command-line interface** | [Azure DevOps CLI](../../cli/index.md) |
| **Customizing work item types** | - [Cascading Lists](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.cascading-picklists-extension)<br>- [Color picklist control](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.color-form-control)<br>- [Multi-value control](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.vsts-extensions-multivalue-control)<br>- [Work Item Visualization](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.WorkItemVisualization)<br>- [WSJF (Weighted Shortest Job First)](https://marketplace.visualstudio.com/items?itemName=MS-Agile-SAFe.WSJF-extension) |
| **Dashboard widgets** | - [Azure Application Insights widget](https://marketplace.visualstudio.com/items?itemName=ms-appinsights.ApplicationInsightsWidgets)<br>- [Work Item Details widget](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.WorkItemDetails)<br>- [Roll-up Board widget](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.RollUpBoard) |
| **Product planning** | - [Azure DevOps Open in Excel](https://marketplace.visualstudio.com/items?itemName=blueprint.vsts-open-work-items-in-excel)<br>- [Epic Roadmap extension](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.workitem-feature-timeline-extension), [Feature Timeline (Deprecated)](/previous-versions/azure/devops/all/extensions/epic-roadmap)<br>- [Feature Timeline extension](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.workitem-feature-timeline-extension), [Feature Timeline (Deprecated)](/previous-versions/azure/devops/all/extensions/feature-timeline)<br>- [Retrospectives](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.team-retrospectives)<br>- [Split!](https://marketplace.visualstudio.com/items?itemName=blueprint.vsts-extension-split-work&ssr=false#overview)<br>- [Team Calendar](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.team-calendar)<br>- [Reactivations Report](https://marketplace.visualstudio.com/items?itemName=EnterpriseServicesDevOpsTeam.ServicesBugReactivationReport&ssr=false#overview) |
| **Querying and reporting** | [WIQL to OData](https://marketplace.visualstudio.com/items?itemName=ms-eswm.wiql-to-odata) |

## Related articles

- [Bulk add or modify work items with Microsoft Excel](../backlogs/office/bulk-add-modify-work-items-excel.md)
- [Use the Azure DevOps REST API](/rest/api/azure/devops/)
