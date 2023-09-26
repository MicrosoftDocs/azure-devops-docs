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
ms.date: 04/01/2022
---


# Understand CMMI process template artifacts


[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

The CMMI process supports the following work item types (WITs) to plan and track work, tests, feedback, and code review. With different WITs you can track different types of work&mdash;such as requirements, change requests, tasks, bugs and more. These artifacts are created when you create a project using the CMMI process. They're based on the [Capability Maturity Model Integration (CMMI)](./cmmi/guidance-background-to-cmmi.md) process.

:::image type="content" source="media/cmmi-process-work-tracking-wits.png" alt-text="Conceptual image, CMMI process work item types.":::


Along with the WITs, teams have access to a set of work item queries to track information, analyze progress, and make decisions.  

[!INCLUDE [temp](../../includes/process-customize.md)] 

<a id="start-using" />

## Plan and track work with CMMI

Teams plan their project by capturing features and requirements. When teams work in sprints, they define tasks and link them to requirements. To gain insight into a rollup of requirements across teams, program managers link requirements to a feature. Blocking issues are tracked using issues. For details on using these WITs, see [CMMI process work item types and workflow](cmmi-process-workflow.md)

[!INCLUDE [temp](../../includes/process-guidance-conceptual.md)] 

<a id="shared-queries"></a> 

## List work items with queries

You can use work item queries to list work items based on their type, such as change requests, bugs, tasks, and requirements.  

[!INCLUDE [temp](../../includes/shared-queries.md)] 


::: moniker range="tfs-2018"

Or, use one of the shared queries that the CMMI process provides.

![Screenshot of CMMI shared queries.](media/IC667909.png)

[Descriptions of predefined queries](#predefined-queries) are listed later in this article.  

::: moniker-end

[!INCLUDE [temp](../../includes/quick-tips-shared-query.md)] 

## Monitor progress  

All processes&mdash;Agile, Scrum, and CMMI&mdash;support <a href="../../../report/dashboards/overview.md" data-raw-source="[building status and trend charts and dashboards](../../../report/dashboards/overview.md)">building status and trend charts and dashboards</a>. Also, several charts are automatically built based on the Agile tools you use. These charts display within the web portal.  

[!INCLUDE [temp](../../includes/create-lightweight-charts.md)] 

[!INCLUDE [temp](../../includes/powerbi-reports-links.md)] 


::: moniker range="< azure-devops-2022"

<a id="reports"></a>

## SQL Server reports  


If your project collection and the project are configured with SQL Server Analysis Services and Reporting Services, you'll have access to many CMMI reports. For these reports to be useful, [teams must do certain activities](/previous-versions/azure/devops/report/admin/review-team-activities-for-useful-reports), such as define build processes, link work items, and update status or remaining work.  

If you need to add reporting services or update reports to the latest versions, see [Add reports to a project](/previous-versions/azure/devops/report/admin/add-reports-to-a-team-project).  
::: moniker-end
 

## Related notes  

[!INCLUDE [temp](../../includes/create-team-project-links.md)]


### CMMI process versions  

As updates are made to the CMMI process template, the version number is updated. The following table provides a mapping of the versioning applied as updates are made to the Azure DevOps on-premises process templates. For Azure Boards, the latest version is always used. Each template provides a `version` element. This element specifies a major and minor version. 

> [!div class="mx-tdCol2BreakAll"]
> |Version | CMMI name | Major version |
> |-------------|-------------------|--------------|
> | Azure DevOps Services<br/>Azure DevOps Server 2022 | CMMI | 18 |
> | Azure DevOps Server 2020<br/>Azure DevOps Server 2019 | CMMI | 17 |
> | TFS 2018 | CMMI | 16 |

For a summary of updates made to process templates, see [Release Notes for Azure DevOps Server](/azure/devops/server/release-notes/azuredevops2020u1).


### More CMMI guidance

The situations and working practices of development teams vary widely, and most companies have their own well-established processes. For these reasons, the guidance given here doesn't attempt to prescribe a development process in full. Instead, we describe just the activities that are relevant to making best use of the CMMI process.

-  [Background to CMMI](cmmi/guidance-background-to-cmmi.md): Provides an overview of CMMI and the six capability levels that are intrinsic to the model.

-  [Project management](/previous-versions/azure/devops/boards/work-items/guidance/cmmi/guidance-project-management): Provides guidance to help you better understand how to manage, plan, and coordinate the development and maintenance of software products working with the CMMI model.

-  [Engineering](cmmi/guidance-engineering.md): Addresses the value-added activities for discovering the information that is required to design and build software products

Using the CMMI template and guidance can help you achieve the aims of CMMI if you use it as part of a process improvement program. Adapt this guidance to your own situation, which  depends on the type and history of the product that you're developing, the project's scale, the background of the team members, and accepted practices in your organization.

 This guidance was developed in partnership with David Anderson. For more information, see the following Web page: [David J Anderson & Associates](https://djaa.com/).  


<a id="predefined-queries" />

::: moniker range="tfs-2018"

### CMMI process predefined queries  

#### Query for items assigned to you

You can find the work items that are assigned to you by using one of the shared queries that the following table describes.

> [!div class="mx-tdCol2BreakAll"]
> | Shared query | Description |
> |---|---|
> | My Test Cases | Lists all test cases that are not closed and that are assigned to the team member who is running the query. Test cases are sorted by priority and then ID. |
> | My Work Items | Lists all work items, excluding shared steps, that are not closed and that are assigned to the team member who is running the query. Work items are sorted by rank, priority, type, and ID. |

#### Development and test queries

Team members can use the shared queries that are described in the following table to track the status of development and test tasks and active and resolved bugs.

> [!div class="mx-tdCol2BreakAll"]
> | Shared query | Description |
> |---|---|
> | Active Bugs | Lists all active bugs and sorts them by rank, priority, and severity. |
> | Development Tasks | Lists all tasks whose **Discipline** is set to **Development**. Tasks are sorted by ID. |
> | My Test Cases | Lists all test cases that are not closed and that are assigned to the team member who is running the query. Test cases are sorted by priority and then ID. |
> | Open Tasks | Lists all tasks that are not closed, sorted by rank, priority, and then ID. |
> | Open Test Cases | Lists all test cases that are not closed, sorted by priority and then ID. |
> | Resolved Bugs | Lists all resolved bugs that are defined for the project, sorted by rank, priority, and severity. |
> | Test Tasks | Lists all tasks whose **Discipline** is set to **Test**, sorted by ID. |

#### Backlog management queries

Product owners can use the shared queries that are described in the following table to track the status of requirements and untriaged work.

> [!div class="mx-tdCol2BreakAll"]
> | Shared query | Description |
> |---|---|
> | Customer Requirements | Lists all requirements, sorted by ID, that have been identified as Scenario or Quality of Service work items. |
> | Product Requirements | Lists all requirements, sorted by ID, that have been identified as Functional, Operational, Security, Safety, or a Feature. |
> | Open Requirements | Lists all requirements that are not closed, sorted by iteration ID, priority, and then work item ID. |
> | Open Requirements without Test Cases | Lists all requirements that are not closed and that do not have a Tested By link to a test case, sorted by work item ID. |
> | Open Work Items | Lists all work items except shared steps that are not closed. Work items are sorted by rank, priority, type, and then ID. |
> | Proposed Work Items | Lists all proposed work items, sorted by rank, priority, iteration, area, triage, and then work item ID. |
> | Reviews | Lists all reviews, sorted by work item ID. |
> | Untriaged Work Items | Lists all requirements, tasks, change requests, bugs, and issues that have not been closed or triaged. The Triage field for these work items is set to Pending, More Info, or Info Received.<br /><br />Work items are sorted by state, triage, rank, priority, iteration, and area. |
> | Work Breakdown | Lists all requirements that are not closed and their child requirements or tasks. |
> | Work Items With Summary Values | Lists all tasks that have child tasks and that contain non-zero values for the Remaining Work or Completed Work fields. This query is designed to find tasks that report work effort that is already accounted for in their child tasks. For the hours to be counted only once, summary tasks should not be assigned any hours.<br /><br />For more information, see [Address inaccuracies published for summary values](../../../report/sql-reports/address-inaccuracies-published-for-summary-values.md). |

#### Change management queries

Product owners can use the shared queries that are described in the following table to track change requests and dependencies that have been identified between change requests and requirements.

> [!div class="mx-tdCol2BreakAll"]
> | Shared query | Description |
> |---|---|
> | Change Requests | Lists all change requests, sorted by ID. |
> | Open Change Requests with Requirements | Lists change requests that are not closed and their linked requirements, sorted by ID. Only change requests that are linked to a requirement with a link type of Affects appears in the list. |
> | Requirements with Open Change Requests | Lists requirements and the change requests that are not closed and that depend on them, sorted by ID. Only requirements that are linked to a change request with a link type of Affected By are listed. |

#### Troubleshooting queries

Product owners can use the shared queries that are described in the following table to troubleshoot issues and risks to the product schedule.

> [!div class="mx-tdCol2BreakAll"]
> | Shared query | Lists |
> |---|---|
> | Blocked Work Items | Lists all work items where the **Blocked** field is set to **Yes**.<br /><br />Only requirements, tasks, bugs, issues, and change requests can be blocked. |
> | Corrective Action Status | Lists all tasks whose **Task Type** is set to **Corrective Action**. |
> | Mitigation Actions | Lists all tasks whose **Task Type** is set to **Mitigation Action**. |
> | Open Issues | Lists all issues that are not closed.<br /><br />The [Issues workbook](/previous-versions/azure/devops/report/sharepoint-dashboards/workbooks) references this query. |
> | Risks | Lists all risks, sorted by ID. |

::: moniker-end
 