---
title: Migrate to or integrate work tracking data in Azure Boards
titleSuffix: Azure Boards
description: Learn how you can migrate or integrate work tracking data from other software applications to Azure Boards, plus available extensions.
ms.custom: extensions, engagement-fy23
ms.service: azure-devops-boards
ms.topic: conceptual
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 07/31/2023
---

# Migrate and integrate work tracking data in Azure Boards 

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

You have a choice of tools to help you migrate your work tracking data to the Azure DevOps platform. This article provides an overview of what's available and links to tools that support migration of work tracking data and processes. You can also integrate Azure Boards with many third-party tools and extensions.

> [!NOTE]
> With [Azure DevOps Marketplace extensions for Azure Boards](https://marketplace.visualstudio.com/search?target=AzureDevOps&category=Azure%20Boards&sortBy=Installs), you can customize and enhance the default experience. See a [list of recommended extensions for Azure Boards](#extensions-for-azure-boards), further in this article. 

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

For more information, see [Azure DevOps Migration Tools](https://nkdagility.github.io/azure-devops-migration-tools/) and [OADOM](https://www.opshub.com/products/opshub-azure-devops-migrator/).

[OpsHub Azure DevOps Migrator](https://marketplace.visualstudio.com/items?itemName=vs-publisher-1455028.OpsHubVisualStudioOnlineMigrationUtility) (OADOM), formerly known as OpsHub Visual Studio Migration Utility(OVSMU), gives a seamless migration between Azure DevOps Server and Azure DevOps Services.  Migrate projects from DevOps Services to a collection on DevOps Server including:  

- All version control information and history
- All work items and history
- All test cases and test results
- Supports Team Foundation Server 2018 and Azure DevOps Server versions 2019, 2020, and 2022
- Supports Azure DevOps Services
 
## Migrate process models between Azure DevOps organizations

The [Process Tools for Azure DevOps](https://marketplace.visualstudio.com/items?itemName=nkdagility.processtemplate) marketplace extension provides support to complete the following tasks:  
- Migrate Inherited Processes between Organizations
- Upload an On-premises XML process model from an export 

For constraints on process template definitions that you can import, see [Resolve validation errors for process import](../../organizations/settings/work/import-process/resolve-errors.md).

## Migrate between legacy tools and Azure DevOps

[OpsHub Migration Manager](https://marketplace.visualstudio.com/items?itemName=vs-publisher-1455028.OMM) supports full fidelity large-scale data migration projects out of the box between legacy or ALM tools and Azure DevOps.  OMM offers the following benefits:

- Zero downtime migration or nondisruptive migration 
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

Azure Boards and Azure DevOps Server 2019 integrate with GitHub. Connect Azure Boards with GitHub repositories to link between GitHub commits, pull requests, and issues to work items. You can use GitHub for software development while using Azure Boards to plan and track your work.

For more information, see [Connect Azure Boards to GitHub](../github/connect-to-github.md).
 
## Integrate with third-party tools using service hooks

You can integrate Azure Boards with other third-party tools such as Jenkins and Trello. Using service hooks you can generate actions based on Azure DevOps events. For more information, see the following articles: 
-  [Create a service hook for Azure DevOps with Jenkins](../../service-hooks/services/jenkins.md) 
-  [Create a service hook for Azure DevOps with Trello](../../service-hooks/services/trello.md)
-  [Integrate with service hooks](../../service-hooks/overview.md)

## Manage project and portfolio 

The following tools support integration and synchronization with Azure DevOps with one or more project and portfolio management tools. These tools also support integration between Azure Boards and Microsoft Project Online or Microsoft Project Server. 

- [OpsHub Integration Manager(OIM)](https://www.opshub.com/products/opshub-integration-manager/) is an enterprise class integration platform. It enables bi-directional synchronization for Azure DevOps(Server and Services) with 50+ ALM, DevOps, Project, and Portfolio Management tools out of the box. It enables synchronization of all work items including test artifacts with an easy to use mapping UI and is scalable for any number of projects and teams.  
- [ConnectAll](https://www.connectall.com/) helps organizations achieve effective Value Stream Management by connecting the applications used to collaborate, drive decisions, and manage artifacts that are used during the software delivery process, like ALM, Agile, and DevOps. 
- [Project Connect](https://www.wicresoftinternational.com/about-us) offers a seamless approach to exchange critical information between development teams and project teams using Microsoft Project Online and Azure DevOps Services.

## Extensions for Azure Boards

### Product planning 
::: moniker range=">= azure-devops-2022"
For more information, see [Review team Delivery Plans](../plans/review-team-plans.md).
::: moniker-end
 
::: moniker range=">= azure-devops-2022"
- [Azure DevOps Open in Excel](https://marketplace.visualstudio.com/items?itemName=blueprint.vsts-open-work-items-in-excel)
- [Epic Roadmap extension](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.workitem-feature-timeline-extension), [Feature Timeline (Deprecated)](/previous-versions/azure/devops/all/extensions/epic-roadmap)  
- [Feature Timeline extension](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.workitem-feature-timeline-extension), [Feature Timeline (Deprecated)](/previous-versions/azure/devops/all/extensions/feature-timeline) 
- [Retrospectives](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.team-retrospectives)
- [Split!](https://marketplace.visualstudio.com/items?itemName=blueprint.vsts-extension-split-work&ssr=false#overview)
- [Team Calendar](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.team-calendar)
- [Reactivations Report](https://marketplace.visualstudio.com/items?itemName=EnterpriseServicesDevOpsTeam.ServicesBugReactivationReport&ssr=false#overview)
::: moniker-end

::: moniker range=">= azure-devops-2019 <= azure-devops-2020"
- [Azure DevOps Open in Excel](https://marketplace.visualstudio.com/items?itemName=blueprint.vsts-open-work-items-in-excel)
- [Delivery Plans](https://marketplace.visualstudio.com/items?itemName=ms.vss-plans)
- [Epic Roadmap extension](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.workitem-feature-timeline-extension), [Feature Timeline (Deprecated)](/previous-versions/azure/devops/all/extensions/epic-roadmap)  
- [Feature Timeline extension](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.workitem-feature-timeline-extension), [Feature Timeline (Deprecated)](/previous-versions/azure/devops/all/extensions/feature-timeline) 
- [Retrospectives](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.team-retrospectives)
- [Split!](https://marketplace.visualstudio.com/items?itemName=blueprint.vsts-extension-split-work&ssr=false#overview)
- [Team Calendar](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.team-calendar)
- [Reactivations Report](https://marketplace.visualstudio.com/items?itemName=EnterpriseServicesDevOpsTeam.ServicesBugReactivationReport&ssr=false#overview)
::: moniker-end
 
::: moniker range="tfs-2018"
- [Delivery Plans](https://marketplace.visualstudio.com/items?itemName=ms.vss-plans)
- [Epic Roadmap extension](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.workitem-feature-timeline-extension), [Feature Timeline (Deprecated)](/previous-versions/azure/devops/all/extensions/epic-roadmap)  
- [Feature Timeline extension](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.workitem-feature-timeline-extension), [Feature Timeline (Deprecated)](/previous-versions/azure/devops/all/extensions/feature-timeline) 
- [Retrospectives](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.team-retrospectives)

::: moniker-end

### Customizing work item types

::: moniker range=">= azure-devops-2019"
- [Cascading Lists](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.cascading-picklists-extension)
- [Clickable Links](https://marketplace.visualstudio.com/items?itemName=MarkHawkes.clickable-link-control-extension)
- [Color picklist control](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.color-form-control)
- [Multi-value control](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.vsts-extensions-multivalue-control) 
- [Work item form control library](https://marketplace.visualstudio.com/items?itemName=mohitbagra.vsts-wit-control-library)
- [Work item form one-select actions](https://marketplace.visualstudio.com/items?itemName=mohitbagra.witoneclickactions)
- [Work Item Visualization](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.WorkItemVisualization) 
- [WSJF (Weighted Shortest Job First)](https://marketplace.visualstudio.com/items?itemName=MS-Agile-SAFe.WSJF-extension)
::: moniker-end

::: moniker range="tfs-2018"  
- [Color picklist control](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.color-form-control)
- [Multivalue control](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.vsts-extensions-multivalue-control)
- [WSJF (Weighted Shortest Job First)](https://marketplace.visualstudio.com/items?itemName=MS-Agile-SAFe.WSJF-extension)

::: moniker-end
 
::: moniker range=">= azure-devops-2019"
## Querying and reporting

- [Open in Power BI](https://marketplace.visualstudio.com/items?itemName=stansw.vsts-open-in-powerbi) 
- [Query Based Boards](https://marketplace.visualstudio.com/items?itemName=realdolmen.EdTro-AzureDevOps-Extensions-QueryBasedBoards-Public)
- [Tags Manager](https://marketplace.visualstudio.com/items?itemName=YodLabs.TagsManager2)
- [Wiql Editor](https://marketplace.visualstudio.com/items?itemName=ottostreifel.wiql-editor)
- [Wiql to OData](https://marketplace.visualstudio.com/items?itemName=ms-eswm.wiql-to-odata) 
::: moniker-end

### Dashboard widgets

::: moniker range=">= azure-devops-2019"
- [Azure Application Insights Widgets](https://marketplace.visualstudio.com/items?itemName=ms-appinsights.ApplicationInsightsWidgets)
- [Countdown Widget](https://marketplace.visualstudio.com/items?itemName=ALM-DevOpsRangers.CountdownWidget)
- [GitHub Stats Widget](https://marketplace.visualstudio.com/items?itemName=YodLabs.yodlabs-githubstats)
- [Work Item Details Widget](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.WorkItemDetails)
- [Roll-up Board Widget](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.RollUpBoard)
::: moniker-end

::: moniker range="tfs-2018"
- [Roll-up Board Widget](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.RollUpBoard)
::: moniker-end
 
### Command-line interface

::: moniker range="azure-devops"
- [Azure DevOps CLI](../../cli/index.md)
- [Azure Boards Teams Tool CLI](https://marketplace.visualstudio.com/items?itemName=jessehouwing.azure-boards-teams-tool&ssr=false#overview)
::: moniker-end

::: moniker range="< azure-devops"
- [Azure Boards Teams Tool CLI](https://marketplace.visualstudio.com/items?itemName=jessehouwing.azure-boards-teams-tool&ssr=false#overview)
::: moniker-end

### Automation and miscellaneous tools

- [Azure Boards Kanban Tools](https://marketplace.visualstudio.com/items?itemName=alm-devops-rangers.KanbanBoardTools)
- [Migration Tools for Azure DevOps](https://marketplace.visualstudio.com/items?itemName=nkdagility.vsts-sync-migration)
- [Microsoft Flow, Power Apps and Power Automate](https://marketplace.visualstudio.com/items?itemName=MS-Flow.microsoftflow)
- [Power Automate, Azure DevOps](https://powerautomate.microsoft.com/connectors/details/shared_visualstudioteamservices/azure-devops/)

## Related articles

- [Bulk add or modify work items with Microsoft Excel](../backlogs/office/bulk-add-modify-work-items-excel.md) 
