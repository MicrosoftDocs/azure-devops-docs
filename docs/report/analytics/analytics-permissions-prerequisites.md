---
title: Permissions and prerequisites to access Analytics
titleSuffix: Azure DevOps  
description: Understand the permissions and prerequisites to meet to access and generate reports with Analytics. 
ms.subservice: azure-devops-analytics
ms.author: chcomley
author: chcomley
ms.topic: conceptual
monikerRange: '>= azure-devops-2019'
ms.date: 09/30/2022
---

# Permissions and prerequisites to access Analytics in Azure DevOps

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]
 
To work with Analytics and create reports, several prerequisites must be met as summarized in this article. 

By default, all project members are provided access to Analytics data for the projects they are members of, including members added to the project **Readers** group.  Users with **Stakeholder** access have no access to view or edit Analytics views.

## Service and feature enablement  

In general, Analytics is always on and available to members of an organization or collection to view data and create report. 

### Analytics service

::: moniker range="azure-devops"

For Azure DevOps Services, Analytics is always on. You can't disable it or pause it.  

::: moniker-end

::: moniker range=">= azure-devops-2020 < azure-devops" 
For Azure DevOps Server 2020 and later on-premises versions, Analytics is automatically installed with each project collection you create. 
::: moniker-end


::: moniker range="azure-devops-2019" 
For Azure DevOps Server 2019, you must first install Analytics on each project collection you create. 
::: moniker-end

::: moniker range="< azure-devops" 
You can pause and restart the service. When paused, no new data is added to Analytics. 

To learn more, see [Install or enable the Analytics service](../dashboards/analytics-extension.md).
::: moniker-end


### Azure DevOps services 

To exercise any Azure DevOps service, it must be enabled. No data can be captured for a service that has been disabled. Services can be enabled or disabled on a project by project basis. 

To verify that all services are enabled, see [Turn a service on or off](../../organizations/settings/set-services.md).


### Analytics views 

**Analytics views**, a hub in your web portal, provides a simplified way to specify the filter criteria for a Power BI report based on the Analytics data.  To learn more, see [What is the Analytics Service?](../powerbi/what-are-analytics-views.md) 

To access **Analytics views**, you must have it enabled. The organization owner or member of the Project Collection Administrators group can enable it for everyone in the organization. Or, each project member can enable it for themselves. 

To learn how, see [Manage or enable features](../../project/navigation/preview-features.md).


## Permissions

You set [permissions](../../report/powerbi/analytics-security.md) for the service at the project level, and for shared **Analytics views** at the object level. 

The following table summarizes the permissions available to be set and the default assignments made to the project security groups. 


|Permission|  Readers |  Contributors    |Project Administrators| 
|----------|----------|------------------|-------------------|  
|**View Analytics** |✔️|✔️|✔️|  
|**View a shared Analytics view** | |✔️|✔️|  
|**Add a private or shared Analytics view**  | |✔️|✔️|  
|**Edit and delete shared Analytics views**  | | |✔️|  
 

## Data tracking prerequisites 

To capture meaningful data, software teams must perform meaningful actions. The following sections provide general recommendations based on the type of data you want to report on. 

::: moniker range=">= azure-devops-2020" 
> [!NOTE]   
> Branch, Pipeline, and Test entity sets are supported with Analytics **v3.0-preview** and later versions. Snapshot entity sets to support pipeline jobs, task agent requests, and task agent pool size were added with Analytics **v4.0-preview** version. Make sure you specify the Analytics version that supports the entity set of interest. 

To understand what properties and enumerated list values you can filter or group data by, [explore the Analytics metadata](analytics-query-parts.md) for the corresponding entity type.  

::: moniker-end

### Azure Boards and work tracking

For a review of available entity sets that you can query, see [Metadata reference for Azure Boards Analytics](entity-reference-boards.md). 

To report on work tracking, teams need to perform several tasks to ensure meaningful data is available. Review the following tasks prior to defining your Analytics queries and reports.   
- To report on active bugs or bug trends, define bugs and update the bug **State**  as it is fixed, verified, and then closed. 
- To report on backlog work or other work item types, make sure you define those work items, and update their **State** as it moves from new to closed. Consider whatever fields or tags you'll use to filter or group data in a report and make sure that is well defined and consistent. 
- To support rollup reports, ensure parent-child links exist between product backlog items and tasks/bugs, or parent-child links exist between features or portfolio backlog work items and their child items. To learn more, see [Organize your backlog and map child work items to parents](../../boards/backlogs/organize-backlog.md). 
- To create burndown or burnup reports, such as [Sprint burndown](../powerbi/sample-boards-sprintburndown.md) or [Release burndown](../powerbi/sample-boards-releaseburndown.md), ensure you have thought through how you want to filter and group data in your report. Burndown/burnup reports reference the `WorkItemsSnapshot` entity set. Snapshot entity sets are modeled as daily snapshots. Data is aggregated based on assignments made as of the date they are assigned. What this means is that to filter a burndown/burnup report based on field or tag assignments, you must assign the fields or tags prior to the period you want to report on. Otherwise, the fields/tags aren't registered by the report until the date on which they are applied.
- To support [Requirements tracking](../powerbi/sample-stories-overview.md), define test cases, and create a **Tested By** link from each test case to a user story, product backlog item, or requirement. 
Define test cases and link test cases to their parent PBIs using the Tested By link. See Create your tests.
- (Recommended)  To support filtering and grouping within a report, assign  **Area Path** and **Iteration Path** to all work items. For information about how to define iteration and area paths, see [Define area paths and assign to a team](../../organizations/settings/set-area-paths.md) or [Define iteration paths (sprints) and configure team iterations](../../organizations/settings/set-iteration-paths-sprints.md).  

> [!NOTE]   
> All custom fields added to a work item type are available for use in reports. Custom fields are labeled with *Custom_DisplayNameOfField*, where all spaces have been removed from the display name. 

::: moniker range=">= azure-devops-2020" 

### Test plans 

To review test plan progress and test case readiness, teams need to perform the following activities. 
- Define test cases, test plans, and test suites, and specify their current state. To learn more, see [Create test plans and test suites](../../test/create-a-test-plan.md) and [Create test cases](../../test/create-test-cases.md).
- Update the **State** of test objects as they progress from *Design* to *Ready* to *Closed*.
- For manual tests, mark the results of each validation step in the test case as passed or failed.
	> [!TIP]    
	> Testers must mark a test step with a status if it is a validation test step. The overall result for a test reflects the status of all the test steps that were marked. Therefore, the test will have a status of failed if any test step is marked as failed or not marked.
- For automated tests, each test is automatically marked as passed or failed.
- (Recommended) To support filtering and grouping within a report, assign **Area Path** and **Iteration Path** to test cases, test suites and test plans.
 

### Pipelines 

To report on pipelines, teams need to Define pipelines using YAML and run pipelines regularly. To learn more, see [Key concepts for new Azure Pipelines users](../../pipelines/get-started/key-pipelines-concepts.md).

In addition, consider the following actions:
- Consider what data you want to report on and choose the correct entity set. For a review of available entity sets to query, see [Metadata reference for Azure Pipelines Analytics](entity-reference-pipelines.md). 
- Consider which pipelines you want to report on and the date range of your report. You'll want to filter your data so as to meet [query best practices](analytics-best-practices.md) and minimize any performance issues.

### Pipelines and test 

To report on pipelines and tests results, make sure you add test tasks to the pipeline definition. To learn more, see [Build and release tasks-Test](../../pipelines/tasks/index.md#test). 

If you're just getting started, consider reviewing this Learn module, 
[Run quality tests in your build pipeline by using Azure Pipelines](/training/modules/run-quality-tests-build-pipeline).

::: moniker-end


## Related articles

- [What is the Analytics service?](../powerbi/what-is-analytics.md)
- [Default permissions quick reference for Azure DevOps](../../organizations/security/permissions-access.md)
- [Best practices to use when querying the Analytics service](analytics-best-practices.md) 



 
