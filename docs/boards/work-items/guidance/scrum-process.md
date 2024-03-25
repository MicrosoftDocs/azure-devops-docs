---
title: Manage Scrum process template objects
titleSuffix: Azure Boards
ms.custom: work-items
description: Learn how to use Scrum process objects to plan and track work and monitor progress and trends when you're connected to Azure DevOps.
ms.service: azure-devops-boards
ms.assetid: f4e77db3-e54c-472a-ba60-92ceb8331882
ms.topic: conceptual
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 06/07/2023
---

# Manage Scrum process template objects  

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

The Scrum process supports the following work item types (WITs) to plan and track work, tests, feedback, and code review. With different WITs you can track different types of work&mdash;such as product backlog items, tasks, bugs, and more. These objects get created when you create a project using the Scrum process. They're based on [Scrum principles and values](https://www.scrum.org/). 

:::image type="content" source="media/scrum-process-work-tracking-wits.png" alt-text="Conceptual image, Scrum process work item types.":::

Along with the WITs, teams have access to a set of work item queries to track information, analyze progress, and make decisions.  

[!INCLUDE [temp](../../includes/process-customize.md)] 

<a id="start-using-scrum"></a>

## Plan and track work with Scrum processes

You build your project plan by creating a backlog of work items that represent the features, requirements, user stories, or other work to do. You track bugs, tasks, and blocking issues using the bug, task, and impediment WITs. To support portfolio management, teams create features and epics to view a rollup of their product backlog items within or across teams. For more information, see [Scrum process work item types and workflow](scrum-process-workflow.md).  

[!INCLUDE [temp](../../includes/process-guidance-conceptual.md)] 
 
For more information, see [Scrum work item types and workflow](scrum-process-workflow.md).  

<a id="shared-queries"></a> 

### List work items

Define work item queries to list work items for a current sprint or the product backlog.  

[!INCLUDE [temp](../../includes/shared-queries.md)] 



[!INCLUDE [temp](../../includes/quick-tips-shared-query.md)] 

## Monitor work progress  

All processes&mdash;Agile, Scrum, and CMMI&mdash;support [building status and trend charts and dashboards](../../../report/dashboards/overview.md). Also, several charts are automatically built based on the Agile tools you use. These charts display within the web portal. 

[!INCLUDE [temp](../../includes/create-lightweight-charts.md)] 

[!INCLUDE [temp](../../includes/powerbi-reports-links.md)] 

<a id="reports"></a>
::: moniker range="< azure-devops-2022"

## Scrum process and SQL Server reports

If your project collection and project are configured with SQL Server Analysis Services and Reporting Services, you have access to many Scrum reports. For these reports to be useful, [teams must complete certain activities,](/previous-versions/azure/devops/report/admin/review-team-activities-for-useful-reports) such as define build processes, link work items, and update status or remaining work.  

If you need to add reporting services or update reports to the latest versions, see [Add reports to a project](/previous-versions/azure/devops/report/admin/add-reports-to-a-team-project).  

::: moniker-end

<a id="dashboards"></a>

### Scrum process versions   

As updates get made to the Scrum process template, the version number gets updated. The following table provides a mapping of the versioning applied as updates get made to the Azure DevOps on-premises process templates. For Azure Boards, the latest version always gets used. Each template provides a `version` element, which specifies a major and minor version. 

> [!div class="mx-tdCol2BreakAll"]
> |Version | Scrum process name | Major version |
> |-------------|-------------------|--------------|
> | Azure DevOps Services<br/>Azure DevOps Server 2022 | Scrum | 18 |
> | Azure DevOps Server 2020<br/>Azure DevOps Server 2019 | Scrum | 17 |
> | TFS 2018 | Scrum | 16 |

For a summary of updates made to process templates, see [Release Notes for Azure DevOps Server](/azure/devops/server/release-notes/azuredevops2020u1).

<a id="predefined-queries"></a>



## Related articles 

[!INCLUDE [temp](../../includes/create-team-project-links.md)]
