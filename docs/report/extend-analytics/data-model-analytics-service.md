---
title: Data model for Analytics
titleSuffix: Azure DevOps 
description: Learn about the EntityTypes and relationships provided by Analytics for Azure DevOps.  
ms.subservice: azure-devops-analytics
ms.assetid: 032FB76F-DC43-4863-AFC6-F8D67963B177   
ms.author: chcomley
author: chcomley
ms.topic: conceptual
monikerRange: '>= azure-devops-2019'
ms.date: 09/19/2022
---

# Data model for Analytics  

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

The Analytics data model for Azure DevOps consists of entity sets, whose members (entities) contain properties that can be filtered, aggregated, and summarized. Additionally, they contain [navigation properties](https://www.odata.org/getting-started/basic-tutorial/#relationship) that relate entities to one other, providing access to other properties for selecting, filtering, and grouping.

[!INCLUDE [temp](../includes/analytics-preview.md)]


## Schema namespaces 

The Analytics data model is based on two schema namespaces:
- `Microsoft.VisualStudio.Services.Analytics.Model` 
- `Microsoft.VisualStudio.Services.Analytics`. 
 
<a id="entities" />

## Entity sets and entity types  

Entity types are named structured types with a key. They define the named properties and relationships of each entity. The key of an `EntityType` is formed from a subset of the primitive properties, for example&mdash;*WorkItemId*, *PipelineId*, *ReleasePipelineId*&mdash;and more of the entity type.

Entity sets are named collections of entities. For example, `WorkItems` is an entity set containing `WorkItem` entities. An entity's key uniquely identifies the entity within an entity set. If multiple entity sets use the same entity type, the same combination of key values can appear in more than one entity set and identifies different entities, one per entity set where this key combination appears. Each of these entities has a different entity-id. Entity sets provide entry points into the data model.

Entity sets are described in OData metadata, and vary by project. You can explore the complete list of entity sets, entity types, and properties by requesting the OData metadata for your project. To learn how, see [Construct OData queries for Analytics](../analytics/analytics-query-parts.md).




### Composite entities

Composite entities support specific scenarios. They're composed from simpler entities, often require more computing resources to generate, and may return larger result sets. To achieve the best performance and avoid unnecessary throttling, ensure that you query the correct entity for your scenario.

For example, `WorkItemSnapshot` combines `WorkItemRevisions` and `Dates` such that each date has one revision for each work item. This representation supports OData queries that focus on-trend data for a filtered set of work items. However, you shouldn't use this composite entity to query the current state of work items. Instead, you should use the `WorkItems` entity set to generate a more quick-running query.

Similarly, some entities may contain all historic values, while others may only contain current values. `WorkItemRevisions` contains all work item history, which you shouldn't use in scenarios where the current values are of interest.

### Relationships

To generate more complex query results, you can combine entities using relationships. You can employ relationships to expand, filter, or summarize data.

Some navigation properties result in a single entity, while others result in a collection of entities. The following diagram shows select entities and their navigation properties. For clarity, some composite entities and relationships have been omitted.

![Relationship diagram for Analytics data model.](media/datamodel.png)

### Relationship keys

 Entity relationships are also represented as foreign keys so that external tools can join entities. These properties have the suffix "SK", and are either integer or GUID data types. Date properties have corresponding integer date key properties with the following format: **YYYYMMDD**.



## Work tracking entity types and entity sets

The following entity types and entity sets are supported with the indicated API versions. For a complete reference, see [Work tracking metadata reference for Azure Boards Analytics](../analytics/entity-reference-boards.md). 

> [!div class="mx-tdCol2BreakAll"]  
> |`EntityType/EntitySet` | Description | v1.0 | v2.0 | v3.0-preview | v4.0-preview |
> |----------------------|-------------|------|------|--------------|--------------|
> |**Area**/<br/>**Areas** |The work item **Area Paths**, with properties for grouping and filtering by area hierarchy. | ✔️|✔️|✔️ | ✔️ |  
> |**Iteration**/<br/>**Iterations** | The work item **Iteration Paths**, with properties for grouping and filtering by iteration hierarchy.  |✔️|✔️|✔️ | ✔️ |  
> |**BoardLocation**/<br/>**BoardLocations** |The Kanban board cell locations, as identified by board column, swimlane, and split, includes historic board settings. For a description of each Kanban board field, see [Workflow and Kanban board fields](../../boards/queries/query-by-workflow-changes.md#workflow-and-kanban-board-fields).| ✔️|✔️|✔️ | ✔️ |  
> |**CalendarDate**/<br/>**Dates** | The dates used to filter and group other entities using relationships.  | ✔️|✔️|✔️ | ✔️ |  
> |**Project**/<br/>**Projects** |All projects defined for an organization (cloud) or project collection (on-premises). |✔️|✔️|✔️ | ✔️ |  
> |**Process**/<br/>**Processes** |Backlog information used to expand or filter work items and work item types. For an example that uses **Processes** to filter a report, see [Requirements tracking sample report](../powerbi/sample-stories-overview.md). |  |✔️|✔️ | ✔️ |  
> |**Tag**/<br/>**Tags** | All work item tags for each project. For an example that uses **Tags** to filter a report, see [Release burndown sample report](../powerbi/sample-boards-releaseburndown.md). | ✔️|✔️|✔️ | ✔️ | 
> |**Team**/<br/>**Teams** | All teams defined for the project. For an example that uses **Teams** to filter a report, see [Add a Team slicer to a Power BI report](../powerbi/sample-boards-teamslicer.md).  | ✔️|✔️|✔️ | ✔️ | 
> |**User**/<br/>**Users** |User information that is used to expand or filter various work item properties, for example **Assigned To**, **Created By**. | ✔️|✔️|✔️ | ✔️ | 
> |**WorkItemBoardSnapshot**/<br/>**WorkItemBoardSnapshot** |(Composite) The state of each work item on each calendar date, including Kanban board location, used to generate trend reports.   For a sample report, see [Cumulative Flow Diagram (CFD) sample report](../powerbi/sample-boards-cfd.md). | ✔️|✔️|✔️ | ✔️ |  
> |**WorkItemLink**/<br/>**WorkItemLinks** | The links between work items, for example, *Child*, *Parent*, and *Related*. Includes only the latest revision of links, no history. Hyperlinks aren't included.  | ✔️|✔️|✔️ |  ✔️ | 
> |**WorkItemRevision**/<br/>**WorkItemRevisions** |All historic work item revisions, including the current revision. Does not include deleted work items. | ✔️|✔️|✔️ | ✔️ |  
> |**WorkItemSnapshot**/<br/>**WorkItemSnapshot** |(Composite) The state of each work item on each calendar date, used to support trend reporting. For a sample report, see [Bug trends sample report](../powerbi/sample-boards-bugtrend.md).  | ✔️|✔️|✔️ | ✔️ |  
> |**WorkItem**/<br/>**WorkItems** |The current state of work items. Used to support status reports. For a sample report, see [Rollup child work item values to parent sample report](../powerbi/sample-boards-rollup.md). | ✔️|✔️|✔️ | ✔️ | 
> |**WorkItemTypeField**/<br/>**WorkItemTypeFields** |The work item properties for each work item type and process. Used to support building reports. | ✔️|✔️|✔️ | ✔️ |  


::: moniker range=">= azure-devops-2020"

## Pipelines entity types and entity sets

The following entity types and entity sets are supported with the **v3.0-preview** or **v4.0-preview** Analytics version. For a complete reference, see [Pipeline metadata reference](../analytics/entity-reference-pipelines.md) .  

> [!div class="mx-tdCol2BreakAll"]  
> |EntityType/EntitySet | Description | v3.0-preview | v4.0-preview |
> |----------------------|-------------|--------------|--------------|
> |**Branch**/<br/>**Branches** | Basic information about branches used in tests or pipelines. For a sample report, see [Progress status sample report](../powerbi/sample-test-plans-progress-status.md).|  ✔️ | ✔️ |
> |**ParallelPipelineJobsSnapshot**/<br/>**ParallelPipelineJobsSnapshot** | (Composite) Supports understanding of parallel pipeline consumption. To learn more about parallel pipeline tests, see [Run tests in parallel using the Visual Studio Test task](../../pipelines/test/parallel-testing-vstest.md). |   | ✔️ |
> |**Pipeline**/<br/>**Pipelines**| Properties for a pipeline. |  ✔️ | ✔️ |
> |**PipelineJob**/<br/>**PipelineJobs** |Individual execution results for a specific Test associated with a TestRun | ✔️ | ✔️ |
> |**PipelineRun**/<br/>**PipelineRuns** | Execution information for pipelines. For a sample report, see [Pipeline pass rate trend sample report](../powerbi/sample-pipelines-pass-rate-trend.md).  |  ✔️ | ✔️ |
> |**PipelineRunActivityResult**/<br/>**PipelineRunActivityResults** | Merged log of all the stages, steps, jobs, and tasks within a specific pipeline execution. For a sample report, see [Pipeline task duration sample report](../powerbi/sample-pipelines-task-duration.md). |   ✔️ | ✔️ |
> |**PipelineTask**/<br/>**PipelineTasks** | Properties for tasks that are used within a pipeline.  |  ✔️ | ✔️ |
> |**TaskAgentPoolSizeSnapshot**/<br/>**TaskAgentPoolSizeSnapshots** |(Composite) Supports understanding of pool size, pipeline jobs, and concurrency. The [Historical graph for agent pools](../../pipelines/agents/pool-consumption-report.md) illustrates how this entity set can be used. |   | ✔️ |
> |**TaskAgentRequestSnapshot**/<br/>**TaskAgentRequestSnapshots** |(Composite)    |   | ✔️ |

 
::: moniker-end


::: moniker range=">= azure-devops-2020"

## Test entity types and entity sets

The following entity types and entity sets are supported with the **v3.0-preview** or **v4.0-preview** Analytics version. For a complete reference, see [Test metadata reference](../analytics/entity-reference-test-plans.md).  


> [!div class="mx-tdCol2BreakAll"]  
> |`EntityType/EntitySet` | Description | v3.0-preview | v4.0-preview |
> |----------------------|-------------|--------------|--------------|
> |**TestConfiguration**/<br/>**TestConfigurations** |Test plan configuration information. For details on configuring tests, see [Test different configurations](../../test/test-different-configurations.md)  |  ✔️ | ✔️ |
> |**TestResult**/<br/>**TestResults** | Individual execution results for a specific **Test** associated with a **TestRun**.  |  ✔️ | ✔️ |
> |**TestResultsDaily**/<br/>**TestResultsDaily** | A daily snapshot aggregate of **TestResult** executions, grouped by Test (not TestRun).  For a sample report, see [Test summary trend sample report](../powerbi/sample-test-summary-trend.md). |  ✔️ | ✔️ |
> |**TestRun**/<br/>**TestRuns** | Execution information for tests run under a pipeline with aggregate TestResult. |  ✔️ | ✔️ |
> |**Test**/<br/>**Tests** | Properties for a test case, such as test name and test owner. For details on defining test cases, see [Create manual test cases](../../test/create-test-cases.md).  | ✔️ | ✔️ |
> |**TestPoint**/<br/>**TestPoints** | Execution information for test points. A test point is a unique combination of test case, test suite, configuration, and tester. For a sample report, see [Progress status sample report](../powerbi/sample-test-plans-progress-status.md). | ✔️ | ✔️ |
> |**TestPointHistorySnapshot**/<br/>**TestPointHistorySnapshots** | (Composite) Individual execution results for a specific **Test** associated with a **TestRun**. For a sample report, see [Manual test execution trend sample report](../powerbi/sample-test-plans-execution-trend.md)|  ✔️ | ✔️ |
> |**TestSuite**/<br/>**TestSuites**| Test suites information. For details on defining test suites, see [Create test plans and test suites](../../test/create-a-test-plan.md). |  ✔️ | ✔️ | 

 
::: moniker-end


## Related articles 

- [OData Analytics query guidelines](odata-query-guidelines.md)
- [WIT analytics](wit-analytics.md)  
- [Aggregate data](aggregated-data-analytics.md)
- [Exploring Analytics OData metadata](analytics-metadata.md)
- [Work tracking, process, and project limits](../../organizations/settings/work/object-limits.md)  
- [Analytics views dataset design](../powerbi/data-connector-dataset.md)
