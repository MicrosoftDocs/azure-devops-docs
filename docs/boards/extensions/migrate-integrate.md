---
title: About migrating and integrating work tracking data
titleSuffix: Azure Boards
description: Learn how you can migrate or integrate work tracking data from other software applications to Azure Boards, plus available extensions.
ms.custom: extensions, engagement-fy23
ms.service: azure-devops-boards
ms.topic: overview
ms.author: chcomley
author: chcomley
ai-usage: ai-assisted
monikerRange: '<= azure-devops'
ms.date: 10/08/2025
---

# About migrating and integrating work tracking data

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

You can migrate work tracking data into Azure Boards and integrate Azure Boards with many non-Microsoft tools. This article gives an overview of migration options, common scenarios, and extensions that help with migration and integration.

> [!TIP]
> Browse Azure Boards extensions in the Visual Studio Marketplace to customize and extend your boards experience. See the "Extensions for Azure Boards" section later in this article.

## Migrate from Azure DevOps Server

Use the Data Migration Tool for Azure DevOps to migrate collection databases from Azure DevOps Server to Azure DevOps Services with high fidelity. For details and guidance, see [Migrate data from Azure DevOps Server to Azure DevOps Services](../../migrate/migration-overview.md).

## Migrate data between projects

Search the Visual Studio Marketplace for extensions that help you bulk edit, migrate, or synchronize work items between projects. These tools typically support these tasks:

- Migrate work items (including custom fields and history) from one project to another and synchronize changes after migration.
- Merge multiple projects into a single project, or split a project into multiple projects.
- Assist with process template changes and mapping fields between processes.
- Bulk edit work items.
- Migrate test plans, test suites, test cases, and test results.

### Migrate data between projects without downtime

Some non-Microsoft tools enable migration with minimal disruption, even when the target environment contains data or uses a different process template. These tools commonly preserve:

- Version control history, including original dates and authors for commits and comments.
- Work items and their history (standard and custom), preserving original dates and authors.
- Test plans, test suites, test cases, and test results.
- Area and iteration paths, teams, and user mappings.
- Dashboards, queries, widgets, and pipeline references (where supported).
- Compatibility with Azure DevOps Server (2010+) and Azure DevOps Services (cloud), depending on the tool.

Before you migrate, test the tool in a staging environment, confirm support for your Server or Services versions, and back up your data.

## Migrate process models between Azure DevOps organizations

When you import process templates, you might hit validation constraints. For troubleshooting process import errors, see [Resolve validation errors for process import](../../organizations/settings/work/import-process/resolve-errors.md).

## Export and import work tracking data

Use Microsoft Excel to export and import work item lists or hierarchical work item trees. Excel supports publishing flat lists or parent-child hierarchies. For step-by-step instructions, see [Bulk add or modify work items with Excel](../backlogs/office/bulk-add-modify-work-items-excel.md).

## Integrate with GitHub

You can connect Azure Boards with GitHub to link commits, pull requests, and issues to Azure Boards work items. This integration lets you use GitHub for development while tracking work in Azure Boards. See [Connect Azure Boards to GitHub](../github/connect-to-github.md) for setup steps.

## Integrate with non‑Microsoft tools using service hooks

Use service hooks to trigger actions in external services (for example, Jenkins or Trello) when Azure DevOps events occur. For examples and service-specific guidance, see:

- [Create a service hook for Azure DevOps with Jenkins](../../service-hooks/services/jenkins.md)  
- [Create a service hook for Azure DevOps with Trello](../../service-hooks/services/trello.md)  
- [Integrate with service hooks overview](../../service-hooks/overview.md)

## Extensions for Azure Boards

The table below lists representative Microsoft extensions and useful categories. Search the Visual Studio Marketplace for more Microsoft and non-Microsoft extensions that match your scenario.

| Category | Extensions |
|--------------|-------------|
| **Automation** | [Power Automate, Azure DevOps](https://powerautomate.microsoft.com/connectors/details/shared_visualstudioteamservices/azure-devops/) |
| **Command-line interface** | [Azure DevOps CLI](../../cli/index.md) |
| **Customizing work item types** | - [Cascading Lists](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.cascading-picklists-extension)<br>- [Color picklist control](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.color-form-control)<br>- [Multi-value control](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.vsts-extensions-multivalue-control)<br>- [Work Item Visualization](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.WorkItemVisualization)<br>- [WSJF (Weighted Shortest Job First)](https://marketplace.visualstudio.com/items?itemName=MS-Agile-SAFe.WSJF-extension) |
| **Dashboard widgets** | - [Azure Application Insights widget](https://marketplace.visualstudio.com/items?itemName=ms-appinsights.ApplicationInsightsWidgets)<br>- [Work Item Details widget](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.WorkItemDetails)<br>- [Roll-up Board widget](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.RollUpBoard) |
| **Product planning** | - [Azure DevOps Open in Excel](https://marketplace.visualstudio.com/items?itemName=blueprint.vsts-open-work-items-in-excel)<br>- [Epic Roadmap extension](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.workitem-feature-timeline-extension) |
| **Querying and reporting** | [WIQL to OData](https://marketplace.visualstudio.com/items?itemName=ms-eswm.wiql-to-odata) |

> [!TIP]
> When you evaluate extensions for migration or integration, verify compatibility with your Azure DevOps Server or Services version and test in a nonproduction environment.

## Next step

- [Bulk add or modify work items with Microsoft Excel](../backlogs/office/bulk-add-modify-work-items-excel.md)  

## Related content

- [Use the Azure DevOps REST API](/rest/api/azure/devops/)
- [Migrate data from Azure DevOps Server to Azure DevOps Services](../../migrate/migration-overview.md)  
- [Integrate with service hooks](../../service-hooks/overview.md)
