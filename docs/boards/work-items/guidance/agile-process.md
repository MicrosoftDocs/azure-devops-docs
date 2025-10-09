---
title: Use Agile Process Template Artifacts
titleSuffix: Azure Boards  
description: Learn to use agile process artifacts to plan and track work and monitor progress. Learn to use trends when you connect to Azure Boards and Azure DevOps.
ms.custom: work-items
ms.service: azure-devops-boards
ms.assetid: 28e9cb42-f049-45eb-a2d8-f7a3b93471b8
ms.topic: conceptual
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 10/08/2025
ai-usage: ai-assisted
--- 

# Agile process work item types 

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

The Agile process provides work item types (WITs) you use to plan and track work, tests, feedback, and code review. Different WITs let you track features, user stories, tasks, and other types of work. When you create a project with the Agile process, Azure DevOps creates these artifacts based on agile principles and values.  
 
:::image type="content" source="media/agile-process-work-tracking-wits.png" alt-text="Screenshot that shows a conceptual diagram of Agile process work item types.":::

Along with the WITs, teams use work item queries to track information, analyze progress, and make decisions.  

[!INCLUDE [temp](../../includes/process-customize.md)] 

<a id="start-using"></a>

## Plan and track work with Agile
 
Build your project plan by creating a backlog of user stories that represent the work you want to develop and ship. Track bugs, tasks, and blocking issues using the Bug, Task, and Issue WITs. For portfolio management, create Features and Epics to view rollups of user stories within and across teams. For details, see [Agile process work item types and workflow](agile-process-workflow.md).  

[!INCLUDE [temp](../../includes/process-guidance-conceptual.md)] 

<a id="shared-queries"></a> 

## List work items by using queries

Regularly review the status of user stories and tasks to manage workload effectively. Use shared work item queries to list items for a current sprint or the product backlog.

[!INCLUDE [temp](../../includes/shared-queries.md)] 

[!INCLUDE [temp](../../includes/quick-tips-shared-query.md)] 

## Monitor progress  

All processes, including Agile, Scrum, and CMMI, support building charts and dashboards to show status and trends. Azure DevOps also generates several charts automatically based on the Agile tools you use; these charts appear in the web portal.

[!INCLUDE [temp](../../includes/create-lightweight-charts.md)] 

[!INCLUDE [temp](../../includes/powerbi-reports-links.md)] 

::: moniker range="< azure-devops-2022"
<a id="reports"></a>

## SQL Server reports

If your project collection and project use SQL Server Analysis Services and Reporting Services, you can access many Agile reports. These reports are most useful when teams perform supporting activities such as defining build processes, linking work items, and keeping status and remaining work up to date. For more information, see [Review team activities to support useful reports](/previous-versions/azure/devops/report/admin/review-team-activities-for-useful-reports).

If you need to add or update reporting services, see [Add reports to a project](/previous-versions/azure/devops/report/admin/add-reports-to-a-team-project).  

::: moniker-end

## Agile process versions  

When the Agile process template receives updates, its version number changes. The template exposes a `version` element that specifies major and minor versions. For Azure Boards (cloud) the latest version is applied automatically; on-premises process templates follow the versioning shown here.

> [!div class="mx-tdCol2BreakAll"]
> |Version | Agile process name | Major version |
> |-------------|-------------------|--------------|
> | Azure DevOps Services<br/>Azure DevOps Server 2022 | Agile | 18 |
> | Azure DevOps Server 2020|

For a summary of process-template updates, see [Release Notes for Azure DevOps Server](/azure/devops/server/release-notes/azuredevops2020u1).

<a id="predefined-queries"></a>


## Related content

[!INCLUDE [temp](../../includes/create-team-project-links.md)]
