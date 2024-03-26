---
title: Use agile process template artifacts
titleSuffix: Azure Boards  
description: Learn how you can use agile process artifacts to plan and track work and monitor progress. Also learn how to use trends when you connect to Azure Boards and Azure DevOps.
ms.custom: work-items
ms.service: azure-devops-boards
ms.assetid: 28e9cb42-f049-45eb-a2d8-f7a3b93471b8
ms.topic: conceptual
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 06/05/2023
---

# Agile process work item types 

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

The Agile process supports the following work item types (WITs) to plan and track work, tests, feedback, and code review. With different WITs you can track different types of work&mdash;such as features, user stories, and tasks. These artifacts get created when you create a project using the Agile  process and are based on Agile principles and values.  
 
![Conceptual image, Agile process work item types.](media/agile-process-work-tracking-wits.png)

Along with the WITs, teams have access to a set of work item queries to track information, analyze progress, and make decisions.  

[!INCLUDE [temp](../../includes/process-customize.md)] 

<a id="start-using"></a>

## Plan and track work with Agile
 
Build your project plan by creating a backlog of user stories that represent the work you want to develop and ship. You track bugs, tasks, and blocking issues using the bug, task, and issue WITs. To support portfolio management, teams create features and epics to view a rollup of user stories within or across teams. For details about using Agile WITs, see [Agile process work item types and workflow](agile-process-workflow.md).  

[!INCLUDE [temp](../../includes/process-guidance-conceptual.md)] 

<a id="shared-queries"></a> 

## List work items by using queries

You can manage your workload more effectively by frequently reviewing the status of user stories and tasks. You can use the shared work item queries to list work items for a current sprint or the product backlog.  

[!INCLUDE [temp](../../includes/shared-queries.md)] 



[!INCLUDE [temp](../../includes/quick-tips-shared-query.md)] 


## Monitor progress  

All processes&mdash;Agile, Scrum, and CMMI&mdash;support [building status and trend charts and dashboards](../../../report/dashboards/overview.md). Also, several charts are automatically built based on the Agile tools you use. These charts display within the web portal. 

[!INCLUDE [temp](../../includes/create-lightweight-charts.md)] 

[!INCLUDE [temp](../../includes/powerbi-reports-links.md)] 

::: moniker range="< azure-devops-2022"
<a id="reports"></a>

## SQL Server reports

If your project collection and the project are configured with SQL Server Analysis Services and Reporting Services, you have access to many Agile reports. For these reports to be useful, [teams must complete certain activities,](/previous-versions/azure/devops/report/admin/review-team-activities-for-useful-reports) such as define build processes, link work items, and update status or remaining work.  

If you need to add reporting services or update reports to the latest versions, see [Add reports to a project](/previous-versions/azure/devops/report/admin/add-reports-to-a-team-project).  

::: moniker-end

## Agile process versions  

As updates are made to the Agile process template, the version number is updated. The following table provides a mapping of the versioning applied as updates are made to the Azure DevOps on-premises process templates. For Azure Boards, the latest version is always used. Each template provides a `version` element. This element specifies a major and minor version. 

> [!div class="mx-tdCol2BreakAll"]
> |Version | Agile process name | Major version |
> |-------------|-------------------|--------------|
> | Azure DevOps Services<br/>Azure DevOps Server 2022 | Agile | 18 |
> | Azure DevOps Server 2020<br/>Azure DevOps Server 2019 | Agile | 17 |
> | TFS 2018 | Agile | 16 |


For a summary of updates made to process templates, see [Release Notes for Azure DevOps Server](/azure/devops/server/release-notes/azuredevops2020u1).

<a id="predefined-queries"></a>


## Related articles

[!INCLUDE [temp](../../includes/create-team-project-links.md)]  
