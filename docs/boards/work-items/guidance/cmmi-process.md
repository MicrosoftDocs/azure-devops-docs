---
title: Understand process template artifacts in Azure Boards and Azure DevOps
titleSuffix: Azure Boards  
ms.custom: work-items
description: Learn about Capability Maturity Model Integration (CMMI) process objects used to plan and track work, monitor progress, and trends when connecting to Azure Boards and Azure DevOps. 
ms.service: azure-devops-boards
ms.assetid: 212e3d0f-65f8-47af-b95a-ce9e320e16db
ms.topic: conceptual
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 10/08/2025
ai-usage: ai-assisted
---

# Understand CMMI process template artifacts

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

The Capability Maturity Model Integration (CMMI) process provides work item types (WITs) you use to plan and track work, tests, feedback, and code reviews. When you create a project with the CMMI process, the project creates artifacts such as requirements, change requests, tasks, and bugs based on the CMMI framework. These artifacts help teams capture scope, monitor progress, and record engineering and review activities.

:::image type="content" source="media/cmmi-process-work-tracking-wits.png" alt-text="Conceptual image that shows CMMI process work item types.":::

Teams use queries to list and filter work items so they can analyze progress and make data-driven decisions.

[!INCLUDE [temp](../../includes/process-customize.md)] 

<a id="start-using"></a>

## Plan and track work with CMMI

Teams plan projects by capturing features and requirements. When teams work in sprints, they create tasks and link them to requirements. Program managers link requirements to features to view rollups across teams. Teams track blocking problems with issues. For hands-on guidance, see CMMI process work item types and workflow.

[!INCLUDE [temp](../../includes/process-guidance-conceptual.md)] 

<a id="shared-queries"></a> 

## List work items with queries

Use work item queries to list items by type—change requests, bugs, tasks, and requirements. Queries help you focus on current work, triage issues, and prepare for planning and reporting.

[!INCLUDE [temp](../../includes/shared-queries.md)] 

[!INCLUDE [temp](../../includes/quick-tips-shared-query.md)] 

## Monitor progress  

All processes—Agile, Scrum, and CMMI—support building status and trend charts and dashboards. Several charts populate automatically based on the Agile tools you use; these charts appear in the web portal.

[!INCLUDE [temp](../../includes/create-lightweight-charts.md)] 

[!INCLUDE [temp](../../includes/powerbi-reports-links.md)] 

::: moniker range="< azure-devops-2022"

<a id="reports"></a>

## SQL Server reports  

If your project collection and project use SQL Server Analysis Services and Reporting Services, you can access many CMMI reports. For those reports to be useful, teams must perform activities such as defining build processes, linking work items to builds, and updating status and remaining work.  

If you need to add reporting services or update reports to the latest versions, see Add reports to a project.  
::: moniker-end

### CMMI process versions  

As the CMMI process template evolves, its version number changes. The template provides a `version` element that specifies major and minor versions. The following table maps template versions used by Azure DevOps on-premises releases; Azure Boards (cloud) always uses the latest template.

> [!div class="mx-tdCol2BreakAll"]
> |Version | CMMI name | Major version |
> |-------------|-------------------|--------------|
> | Azure DevOps Services<br/>Azure DevOps Server 2022 | CMMI | 18 |
> | Azure DevOps Server 2020 | CMMI | 17 |

For a summary of updates to on-premises process templates, see Release Notes for Azure DevOps Server.

### Use the CMMI process effectively

Teams follow different practices and established processes. This guidance highlights activities relevant to using the CMMI process effectively.

- [Learn about CMMI](cmmi/guidance-background-to-cmmi.md): Understand CMMI and its six capability levels.
- [Manage projects](/previous-versions/azure/devops/boards/work-items/guidance/cmmi/guidance-project-management): Get guidance on managing, planning, and coordinating software development and maintenance with the CMMI model.
- [Explore engineering activities](cmmi/guidance-engineering.md): Discover value-added activities for designing and building software products.

Use the CMMI template and guidance as part of a process improvement program and adapt them based on:
- Product type and history
- Project scale
- Team skills and backgrounds
- Accepted practices in your organization

<a id="predefined-queries"></a>

## Related content 

[!INCLUDE [temp](../../includes/create-team-project-links.md)]
