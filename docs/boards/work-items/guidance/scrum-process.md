---
title: Manage Scrum process template objects
titleSuffix: Azure Boards
ms.custom: work-items
description: Learn how to use Scrum process objects to plan and track work and monitor progress and trends when you're connected to Azure DevOps.
ms.service: azure-devops-boards
ms.assetid: f4e77db3-e54c-472a-ba60-92ceb8331882
ms.topic: overview
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 10/08/2025
ai-usage: ai-assisted
---

# Manage Scrum process template objects  

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

The Scrum process provides work item types (WITs) you use to plan and track work, tests, feedback, and code review. Different WITs let you track different kinds of work—product backlog items (PBIs), tasks, bugs, and more. When you create a project using the Scrum process, the project creates these artifacts based on [Scrum principles and values](https://www.scrum.org/).

:::image type="content" source="media/scrum-process-work-tracking-wits.png" alt-text="Conceptual image that shows Scrum process work item types.":::

Teams use a set of work item queries to track information, analyze progress, and support decisions.

[!INCLUDE [temp](../../includes/process-customize.md)] 

<a id="start-using-scrum"></a>

## Plan and track work with Scrum processes

You build a project plan by creating a backlog of work items that represent features, requirements, user stories, or other work. Track bugs, tasks, and blocking issues using the Bug, Task, and Impediment work item types. To support portfolio management, create features and epics to roll up PBIs across teams. For details, see [Scrum process work item types and workflow](scrum-process-workflow.md).

[!INCLUDE [temp](../../includes/process-guidance-conceptual.md)] 

For a quick overview, see [Scrum work item types and workflow](scrum-process-workflow.md).

<a id="shared-queries"></a> 

### List work items

Use work item queries to list items for a current sprint or to inspect the product backlog.

[!INCLUDE [temp](../../includes/shared-queries.md)] 

[!INCLUDE [temp](../../includes/quick-tips-shared-query.md)] 

## Monitor work progress  

All processes—Agile, Scrum, and CMMI—support building status and trend charts and dashboards. Several charts populate automatically based on the Agile tools you use; the web portal displays these charts.

[!INCLUDE [temp](../../includes/create-lightweight-charts.md)] 

[!INCLUDE [temp](../../includes/powerbi-reports-links.md)] 

<a id="reports"></a>
::: moniker range="< azure-devops-2022"

## Scrum process and SQL Server reports

If your project collection and project use SQL Server Analysis Services and Reporting Services, you can access many Scrum reports. For those reports to be useful, teams must complete activities such as defining build processes, linking work items to builds, and updating status or remaining work.

If you need to add reporting services or update reports to supported versions, see [Add reports to a project](/previous-versions/azure/devops/report/admin/add-reports-to-a-team-project).  
::: moniker-end

<a id="dashboards"></a>

### Scrum process versions

As the Scrum process template evolves, its version number changes. Each template provides a `version` element that specifies major and minor versions. The table below maps template versions used by Azure DevOps on-premises releases; Azure Boards (cloud) always uses the latest template.

> [!div class="mx-tdCol2BreakAll"]
> |Version | Scrum process name | Major version |
> |-------------|-------------------|--------------|
> | Azure DevOps Services<br/>Azure DevOps Server 2022 | Scrum | 18 |
> | Azure DevOps Server 2020 | Scrum | 17 |

For a summary of updates to process templates, see [Release Notes for Azure DevOps Server](/azure/devops/server/release-notes/azuredevops2020u1).

<a id="predefined-queries"></a>

## Related content 

[!INCLUDE [temp](../../includes/create-team-project-links.md)]
