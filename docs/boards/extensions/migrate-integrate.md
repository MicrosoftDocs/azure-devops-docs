---
title: Migrate to or integrate work tracking data in Azure Boards
titleSuffix: Azure Boards
description: Learn how you can migrate or integrate work tracking data from other software applications to Azure Boards.
ms.custom: extensions, engagement-fy23
ms.service: azure-devops-boards
ms.topic: conceptual
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 10/01/2021
---

# Migrate and integrate work tracking data in Azure Boards 

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

You have a choice of tools to help you migrate your work tracking data to the Azure DevOps platform. This article provides an overview of what's available and links to tools that support migration of work tracking data and processes. You can also integrate Azure Boards with many third-party tools. 

## Migrate from an on-premises Azure DevOps server

The data migration tool for Azure DevOps provides a high fidelity way to migrate collection databases from Azure DevOps Server to Azure DevOps Services. For more information, see [Migrate data from Azure DevOps Server to Azure DevOps Services](../../migrate/migration-overview.md).

## Migrate data between Azure DevOps Projects

The [Azure DevOps Migration Tools](https://marketplace.visualstudio.com/items?itemName=nkdagility.vsts-sync-migration) marketplace extension allows you to bulk edit and migrate data between Azure DevOps Projects on both on-premises and the cloud. This tool supports the following tasks:  
- Migrate work items from one project to another project and synchronize changes after a migration
- Merge many projects into a single project
- Split one project into many projects
- Assist changing process templates
- Edit work items in bulk
- Migrate test suites and test plans 

For more information, see [Azure DevOps Migration Tools](https://nkdagility.github.io/azure-devops-migration-tools/).

[OpsHub Azure DevOps Migrator](https://marketplace.visualstudio.com/items?itemName=vs-publisher-1455028.OpsHubVisualStudioOnlineMigrationUtility) (OADOM) formerly known as OpsHub Visual Studio Migration Utility(OVSMU) enables a seamless migration between Azure DevOps Server and Azure DevOps Services.  Migrate projects from DevOps Services to a collection on DevOps Server including:  

- All version control information and history
- All work items and history
- All test cases and test results
- Supports Team Foundation Server 2018 and Azure DevOps Server versions 2019, 2020, and 2022
- Supports Azure DevOps Services.

[OADOM](https://www.opshub.com/products/opshub-azure-devops-migrator/) covers the following scenarios:
 

## Migrate process models between Azure DevOps organizations

The [Process Tools for Azure DevOps](https://marketplace.visualstudio.com/items?itemName=nkdagility.processtemplate) marketplace extension provides support to complete the following tasks:  
- Migrate Inherited Processes between Organizations
- Upload an On-premises XML process model from an export 

For constraints on process template definitions that you can import, see [Resolve validation errors for process import](../../organizations/settings/work/import-process/resolve-errors.md).

## Migrate between legacy tools and Azure DevOps

The [OpsHub Migration Manager](https://marketplace.visualstudio.com/items?itemName=vs-publisher-1455028.OMM) marketplace extension supports full fidelity, large-scale data migration projects out of the box between legacy or ALM tools and Azure DevOps.  OMM offers the following benefits:

- Zero downtime migration or non-disruptive migration 
- Factory approach for large-scale migration projects
- Full fidelity migration with history preservation for all artifacts, comments, attachments, and relationships  

## Export and import work tracking data

The main tool you can use to import work tracking data you've exported from elsewhere is Microsoft Excel. Excel supports publishing a flat list of work items or a hierarchical tree of parent-child linked work items. For more information, see [Bulk add or modify work items with Excel](../backlogs/office/bulk-add-modify-work-items-excel.md).

If you want to migrate from Jira to Azure Boards, consider using the Marketplace extension, [Jira to Azure DevOps work item migration tool](https://marketplace.visualstudio.com/items?itemName=solidify.jira-devops-migration). This tool provides support for the following tasks:  
- Export Jira issues from Jira queries  
- Map users from Jira to users in Azure DevOps 
- Migrate work item field data  
- Migrate links and attachments 
- Migrate history  

## Integrate with GitHub

Azure Boards and Azure DevOps Server 2019 integrate with GitHub. By connecting Azure Boards with GitHub repositories, you enable linking between GitHub commits, pull requests, and issues to work items. You can use GitHub for software development while using Azure Boards to plan and track your work.

To learn how, see [Connect Azure Boards to GitHub](../github/connect-to-github.md).
 
## Integrate with third-party tools using service hooks

You can integrate Azure Boards with other third-party tools such as Jenkins and Trello. Using service hooks you can generate actions based on Azure DevOps events. For more information, review one of the following articles: 
-  [Create a service hook for Azure DevOps with Jenkins](../../service-hooks/services/jenkins.md) 
-  [Create a service hook for Azure DevOps with Trello](../../service-hooks/services/trello.md)

## Project and portfolio management  

The following tools support integration and synchronization with Azure DevOps with one or more project and portfolio management tools. These tools also support integration between Azure Boards and Microsoft Project Online or Microsoft Project Server. 

- [OpsHub Integration Manager(OIM)](https://www.opshub.com/products/opshub-integration-manager/) is an enterprise class integration platform. It enables bi-directional synchronization for Azure DevOps(Server and Services) with 50+ ALM, DevOps, Project, and Portfolio Management tools out of the box. It enables synchronization of all work items including test artifacts with an easy to use mapping UI and is scalable for any number of projects and teams.  
-  [ConnectAll](https://www.connectall.com/) helps organizations achieve effective Value Stream Management by connecting the applications used to collaborate, drive decisions, and manage artifacts that are used during the software delivery process, like ALM, Agile, and DevOps. 
- [Project Connect](https://www.wicresoftinternational.com/about-us) offers a seamless approach to exchange critical information between development teams and project teams using Microsoft Project Online and Azure DevOps Services.
- [Tasktop](http://www.tasktop.com/products) provides enterprise-grade integration between Microsoft Project Server, Azure DevOps, and to most other popular Agile, DevOps and Systems Development Lifecycle (SDLC) tools. 


## Related articles

- [Migrate data from Azure DevOps Server to Azure DevOps Services](../../migrate/migration-overview.md)
- [Integrate with service hooks](../../service-hooks/overview.md)


 
