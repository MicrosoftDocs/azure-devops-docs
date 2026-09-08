---
title: Use Agile Process Template Artifacts
titleSuffix: Azure Boards  
description: Overview of Agile process work item types and artifacts in Azure Boards, with guidance to plan and track work, run queries, and monitor progress.
ms.custom: work-items
ms.service: azure-boards
ms.topic: overview
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 07/06/2026
ai-usage: ai-assisted
--- 

# Agile process work item types 

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

The Agile process provides work item types (WITs) that help teams plan, track, and manage delivery. These WITs support common planning and execution scenarios, such as managing features, user stories, tasks, bugs, feedback, and code review. When you create a project with the Agile process, Azure DevOps creates these artifacts for you.  
 
:::image type="content" source="media/agile-process-work-tracking-wits.png" alt-text="Diagram that shows Agile process work item types and how they relate.":::

Teams also use work item queries to track status, analyze progress, and support planning decisions.  

[!INCLUDE [temp](../../includes/process-customize.md)] 

<a id="start-using"></a>

## Prerequisites

| Requirement | Details |
|---|---|
| Organization and project access | You have access to an Azure DevOps organization and project with Azure Boards enabled. |

## Plan and track work with Agile
 
Build your project plan by creating a backlog of user stories that represent the work you want to develop and ship. Track bugs, tasks, and blocking issues by using the Bug, Task, and Issue WITs. For portfolio management, create Features and Epics to view rollups of user stories within and across teams. For details, see [Agile process work item types and workflow](agile-process-workflow.md).  

[!INCLUDE [temp](../../includes/process-guidance-conceptual.md)] 

<a id="shared-queries"></a> 

## List work items by using queries

Regularly review the status of user stories and tasks to manage your workload effectively. Use shared work item queries to list items for a current sprint or the product backlog.

[!INCLUDE [temp](../../includes/shared-queries.md)] 

[!INCLUDE [temp](../../includes/quick-tips-shared-query.md)] 

## Monitor progress  

All processes, including Agile, Scrum, and CMMI, support building charts and dashboards to show status and trends. Azure DevOps also generates several charts automatically based on the Agile tools you use. These charts appear in the web portal.

[!INCLUDE [temp](../../includes/create-lightweight-charts.md)] 

[!INCLUDE [temp](../../includes/powerbi-reports-links.md)] 

## Agile process versions  

When the Agile process template receives updates, its version number changes. The template exposes a `version` element that specifies major and minor versions. For Azure Boards (cloud), the latest version is applied automatically. On-premises process templates follow the versioning shown here.

> [!div class="mx-tdCol2BreakAll"]
> |Version | Agile process name | Major version |
> |-------------|-------------------|--------------|
> | Azure DevOps Services<br/>Azure DevOps Server 2022 | Agile | 18 |

For process-template update details by server version, see [Azure DevOps Server release notes](/azure/devops/server/release-notes/azuredevops2022?view=azure-devops&preserve-view=true).

<a id="predefined-queries"></a>

## Related content

[!INCLUDE [temp](../../includes/create-team-project-links.md)]
