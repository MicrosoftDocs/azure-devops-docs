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
ms.date: 09/10/2024
---

# Understand CMMI process template artifacts

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

The Capability Maturity Model Integration (CMMI) process supports various work item types (WITs) to plan and track work, tests, feedback, and code reviews. Different WITs allow you to track various types of work, such as requirements, change requests, tasks, bugs, and more. These artifacts get created when you set up a project using the CMMI process, based on the [Capability Maturity Model Integration (CMMI)](./cmmi/guidance-background-to-cmmi.md) framework.

:::image type="content" source="media/cmmi-process-work-tracking-wits.png" alt-text="Conceptual image, CMMI process work item types.":::

Teams can use a set of work item queries to track information, analyze progress, and make decisions.

[!INCLUDE [temp](../../includes/process-customize.md)] 

<a id="start-using"></a>

## Plan and track work with CMMI

Teams plan their project by capturing features and requirements. When teams work in sprints, they define tasks and link them to requirements. To gain insight into a rollup of requirements across teams, program managers link requirements to a feature. Blocking issues are tracked using issues. For details on using these WITs, see [CMMI process work item types and workflow](cmmi-process-workflow.md)

[!INCLUDE [temp](../../includes/process-guidance-conceptual.md)] 

<a id="shared-queries"></a> 

## List work items with queries

You can use work item queries to list work items based on their type, such as change requests, bugs, tasks, and requirements.  

[!INCLUDE [temp](../../includes/shared-queries.md)] 

[!INCLUDE [temp](../../includes/quick-tips-shared-query.md)] 

## Monitor progress  

All processes&mdash;Agile, Scrum, and CMMI&mdash;support <a href="../../../report/dashboards/overview.md" data-raw-source="[building status and trend charts and dashboards](../../../report/dashboards/overview.md)">building status and trend charts and dashboards</a>. Also, several charts are automatically built based on the Agile tools you use. These charts display within the web portal.  

[!INCLUDE [temp](../../includes/create-lightweight-charts.md)] 

[!INCLUDE [temp](../../includes/powerbi-reports-links.md)] 

::: moniker range="< azure-devops-2022"

<a id="reports"></a>

## SQL Server reports  

If your project collection and the project are configured with SQL Server Analysis Services and Reporting Services, you have access to many CMMI reports. For these reports to be useful, [teams must do certain activities](/previous-versions/azure/devops/report/admin/review-team-activities-for-useful-reports), such as define build processes, link work items, and update status or remaining work.  

If you need to add reporting services or update reports to the latest versions, see [Add reports to a project](/previous-versions/azure/devops/report/admin/add-reports-to-a-team-project).  
::: moniker-end

### CMMI process versions  

As updates are made to the CMMI process template, the version number is updated. The following table provides a mapping of the versioning applied as updates are made to the Azure DevOps on-premises process templates. For Azure Boards, the latest version is always used. Each template provides a `version` element. This element specifies a major and minor version. 

> [!div class="mx-tdCol2BreakAll"]
> |Version | CMMI name | Major version |
> |-------------|-------------------|--------------|
> | Azure DevOps Services<br/>Azure DevOps Server 2022 | CMMI | 18 |
> | Azure DevOps Server 2020<br/>Azure DevOps Server 2019 | CMMI | 17 |

For a summary of updates made to process templates, see [Release Notes for Azure DevOps Server](/azure/devops/server/release-notes/azuredevops2020u1).

### Use the CMMI process effectively

Development teams have diverse practices and established processes. This guidance focuses on activities relevant to effectively using the CMMI process.

- [Learn about CMMI](cmmi/guidance-background-to-cmmi.md): Understand CMMI and its six capability levels.
- [Manage projects](/previous-versions/azure/devops/boards/work-items/guidance/cmmi/guidance-project-management): Get guidance on managing, planning, and coordinating software development and maintenance with the CMMI model.
- [Explore engineering activities](cmmi/guidance-engineering.md): Discover value-added activities for designing and building software products.

Use the CMMI template and guidance as part of a process improvement program. Adapt this guidance based on:
- Product type and history
- Project scale
- Team members' backgrounds
- Accepted practices in your organization

<a id="predefined-queries"></a>

## Related articles 

[!INCLUDE [temp](../../includes/create-team-project-links.md)]
