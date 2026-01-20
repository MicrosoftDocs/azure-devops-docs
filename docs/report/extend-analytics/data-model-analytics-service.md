---
title: Data model for Analytics
titleSuffix: Azure DevOps 
description: Learn about the EntityTypes and relationships provided by Analytics for Azure DevOps.  
ms.subservice: azure-devops-analytics
ms.assetid: 032FB76F-DC43-4863-AFC6-F8D67963B177   
ms.author: chcomley
author: chcomley
ms.topic: overview
monikerRange: "<=azure-devops"
ai-usage: ai-assisted
ms.date: 10/27/2025
---

# Data model for Analytics  

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

The Analytics data model for Azure DevOps consists of entity sets, whose members (entities) contain properties that you can filter, aggregate, and summarize. Additionally, they contain [navigation properties](https://www.odata.org/getting-started/basic-tutorial/#relationship) that relate entities to one other, providing access to other properties for selecting, filtering, and grouping.

[!INCLUDE [temp](../includes/analytics-preview.md)]

## Understanding the Analytics data model

The Analytics service provides a structured approach to accessing Azure DevOps data through OData endpoints. This data model enables you to:

- **Query work tracking data**: Access work items, areas, iterations, and related metadata
- **Analyze pipeline information**: Query build and release pipeline data
- **Report on test results**: Access test execution and planning data
- **Create custom reports**: Build Power BI reports and other analytics solutions

## Schema namespaces 

The Analytics data model operates on two schema namespaces:
- `Microsoft.VisualStudio.Services.Analytics.Model` 
- `Microsoft.VisualStudio.Services.Analytics`

These namespaces organize the entities and define their structure, ensuring consistent data access patterns across different Azure DevOps features.
 
<a id="entities"></a>

## Entity sets and entity types  

Entity types are named structured types with a key. They define the named properties and relationships of each entity. The key of an `EntityType` forms from a subset of the primitive properties—for example, *WorkItemId*, *PipelineId*, *ReleasePipelineId*—and other properties of the entity type.

Entity sets are named collections of entities. For example, `WorkItems` is an entity set containing `WorkItem` entities. An entity's key uniquely identifies the entity within an entity set. If multiple entity sets use the same entity type, the same combination of key values can appear in more than one entity set and identifies different entities, one per entity set where this key combination appears. Each of these entities has a different entity-id. Entity sets provide entry points into the data model.

Entity sets are described in OData metadata, and vary by project. You can explore the complete list of entity sets, entity types, and properties by requesting the OData metadata for your project. To learn how, see [Construct OData queries for Analytics](../analytics/analytics-query-parts.md).

### Composite entities

Composite entities support specific scenarios. The system composes them from simpler entities, often requires more computing resources to generate, and may return larger result sets. To achieve the best performance and avoid unnecessary throttling, ensure that you query the correct entity for your scenario.

For example, `WorkItemSnapshot` combines `WorkItemRevisions` and `Dates` such that each date has one revision for each work item. This representation supports OData queries that focus on trend data for a filtered set of work items. However, you shouldn't use this composite entity to query the current state of work items. Instead, you should use the `WorkItems` entity set to generate a more quickly running query.

Similarly, some entities may contain all historic values, while others may only contain current values. `WorkItemRevisions` contains all work item history, which you shouldn't use in scenarios where the current values are of interest.

### Relationships

To generate more complex query results, you can combine entities using relationships. You can employ relationships to expand, filter, or summarize data.

Some navigation properties result in a single entity, while others result in a collection of entities. The following diagram shows select entities and their navigation properties. For clarity, some composite entities and relationships have been omitted.

![Relationship diagram for Analytics data model.](media/datamodel.png)

### Understanding entity relationships

The Analytics data model uses several types of relationships:

- **One-to-many**: A single parent entity relates to multiple child entities (e.g., one Area to many WorkItems)
- **Many-to-one**: Multiple entities relate to a single parent entity (e.g., many WorkItems to one Area)
- **One-to-one**: A single entity relates to exactly one other entity
- **Many-to-many**: Multiple entities relate to multiple other entities (e.g., WorkItems to Tags)

### Relationship keys

Entity relationships are also represented as foreign keys so that external tools can join entities. These properties have the suffix "SK", and are either integer or GUID data types. Date properties have corresponding integer date key properties with the following format: **YYYYMMDD**.

## Work tracking entity types and entity sets

The following entity types and entity sets are supported with the indicated API versions. For a complete reference, see [Work tracking metadata reference for Azure Boards Analytics](../analytics/entity-reference-boards.md). 

> [!div class="mx-tdCol2BreakAll"]  
> |`EntityType/EntitySet` | Description | v1.0 | v2.0 | v3.0-preview | v4.0-preview |
> |----------------------|-------------|------|------|--------------|--------------|
> |**Area**/<br/>**Areas** |The work item **Area Paths**, with properties for grouping and filtering by area hierarchy. | ✔️|✔️|✔️ | ✔️ |  
> |**Iteration**/<br/>**Iterations** | The work item **Iteration Paths**, with properties for grouping and filtering by iteration hierarchy.  |✔️|✔️|✔️ | ✔️ |  
> |**BoardLocation**/<br/>**BoardLocations** |The board cell locations, as identified by board column, swimlane, and split, includes historic board settings. For a description of each board field, see [Workflow and board fields](../../boards/queries/query-by-workflow-changes.md#workflow-and-board-fields).| ✔️|✔️|✔️ | ✔️ |  
> |**CalendarDate**/<br/>**Dates** | The dates used to filter and group other entities using relationships.  | ✔️|✔️|✔️ | ✔️ |  
> |**Project**/<br/>**Projects** |All projects defined for an organization (cloud) or project collection (on-premises). |✔️|✔️|✔️ | ✔️ |  
> |**Process**/<br/>**Processes** |Backlog information used to expand or filter work items and work item types. For an example that uses **Processes** to filter a report, see [Requirements tracking sample report](../powerbi/sample-stories-overview.md). |  |✔️|✔️ | ✔️ |  
> |**Tag**/<br/>**Tags** | All work item tags for each project. For an example that uses **Tags** to filter a report, see [Release burndown sample report](../powerbi/sample-boards-releaseburndown.md). | ✔️|✔️|✔️ | ✔️ | 
> |**Team**/<br/>**Teams** | All teams defined for the project. For an example that uses **Teams** to filter a report, see [Add a Team slicer to a Power BI report](../powerbi/sample-boards-teamslicer.md).  | ✔️|✔️|✔️ | ✔️ | 
> |**User**/<br/>**Users** |User information that you use to expand or filter various work item properties, for example **Assigned To**, **Created By**. | ✔️|✔️|✔️ | ✔️ | 
> |**WorkItemBoardSnapshot**/<br/>**WorkItemBoardSnapshot** |(Composite) The state of each work item on each calendar date, including board location, used to generate trend reports. For a sample report, see [Cumulative Flow Diagram (CFD) sample report](../powerbi/sample-boards-cfd.md). | ✔️|✔️|✔️ | ✔️ |  
> |**WorkItemLink**/<br/>**WorkItemLinks** | The links between work items, for example, *Child*, *Parent*, and *Related*. Includes only the latest revision of links, no history. Hyperlinks aren't included.  | ✔️|✔️|✔️ |  ✔️ | 
> |**WorkItemRevision**/<br/>**WorkItemRevisions** |All historic work item revisions, including the current revision. Does not include deleted work items. | ✔️|✔️|✔️ | ✔️ |  
> |**WorkItemSnapshot**/<br/>**WorkItemSnapshot** |(Composite) The state of each work item on each calendar date, used to support trend reporting. For a sample report, see [Bug trends sample report](../powerbi/sample-boards-bugtrend.md).  | ✔️|✔️|✔️ | ✔️ |  
> |**WorkItem**/<br/>**WorkItems** |The current state of work items. Used to support status reports. For a sample report, see [Rollup child work item values to parent sample report](../powerbi/sample-boards-rollup.md). | ✔️|✔️|✔️ | ✔️ | 
> |**WorkItemTypeField**/<br/>**WorkItemTypeFields** |The work item properties for each work item type and process. Used to support building reports. | ✔️|✔️|✔️ | ✔️ |  

### Key work tracking entities for reporting

When building reports, consider these primary entity sets:

- **Current state reports**: Use `WorkItems` for current work item status
- **Historical trend reports**: Use `WorkItemSnapshot` for trend analysis over time
- **Detailed change tracking**: Use `WorkItemRevisions` for comprehensive history
- **Board-specific reports**: Use `WorkItemBoardSnapshot` for Kanban board analysis

::: moniker range="<=azure-devops"

## Pipelines entity types and entity sets

The following entity types and entity sets are supported with the **v3.0-preview** or **v4.0-preview** Analytics version. For a complete reference, see [Pipeline metadata reference](../analytics/entity-reference-pipelines.md).  

> [!div class="mx-tdCol2BreakAll"]  
> |EntityType/EntitySet | Description | v3.0-preview | v4.0-preview |
> |----------------------|-------------|--------------|--------------|
> |**Branch**/<br/>**Branches** | Basic information about branches used in tests or pipelines. For a sample report, see [Progress status sample report](../powerbi/sample-test-plans-progress-status.md).|  ✔️ | ✔️ |
> |**ParallelPipelineJobsSnapshot**/<br/>**ParallelPipelineJobsSnapshot** | (Composite) Supports understanding of parallel pipeline consumption. For more information about parallel pipeline tests, see [Run tests in parallel using the Visual Studio Test task](../../pipelines/test/parallel-testing-vstest.md). |   | ✔️ |
> |**Pipeline**/<br/>**Pipelines**| Properties for a pipeline. |  ✔️ | ✔️ |
> |**PipelineJob**/<br/>**PipelineJobs** |Individual execution results for a specific job within a pipeline run. | ✔️ | ✔️ |
> |**PipelineRun**/<br/>**PipelineRuns** | Execution information for pipelines. For a sample report, see [Pipeline pass rate trend sample report](../powerbi/sample-pipelines-pass-rate-trend.md).  |  ✔️ | ✔️ |
> |**PipelineRunActivityResult**/<br/>**PipelineRunActivityResults** | Merged log of all the stages, steps, jobs, and tasks within a specific pipeline execution. For a sample report, see [Pipeline task duration sample report](../powerbi/sample-pipelines-task-duration.md). |   ✔️ | ✔️ |
> |**PipelineTask**/<br/>**PipelineTasks** | Properties for tasks that you use within a pipeline.  |  ✔️ | ✔️ |
> |**TaskAgentPoolSizeSnapshot**/<br/>**TaskAgentPoolSizeSnapshots** |(Composite) Supports understanding of pool size, pipeline jobs, and concurrency. The [Historical graph for agent pools](../../pipelines/agents/pool-consumption-report.md) illustrates how this entity set can be used. |   | ✔️ |
> |**TaskAgentRequestSnapshot**/<br/>**TaskAgentRequestSnapshots** |(Composite) Provides insights into agent request patterns and resource utilization over time. |   | ✔️ |

### Pipeline entity usage patterns

Different pipeline entities serve specific reporting scenarios:

- **Pipeline overview reports**: Use `Pipelines` and `PipelineRuns` for high-level metrics
- **Performance analysis**: Use `PipelineRunActivityResults` for detailed timing analysis
- **Resource utilization**: Use `TaskAgentPoolSizeSnapshot` for capacity planning
- **Failure analysis**: Use `PipelineJobs` for job-level success/failure tracking
 
::: moniker-end

::: moniker range="<=azure-devops"

## Test entity types and entity sets

The following entity types and entity sets are supported with the **v3.0-preview** or **v4.0-preview** Analytics version. For a complete reference, see [Test metadata reference](../analytics/entity-reference-test-plans.md).  

> [!div class="mx-tdCol2BreakAll"]  
> |`EntityType/EntitySet` | Description | v3.0-preview | v4.0-preview |
> |----------------------|-------------|--------------|--------------|
> |**TestConfiguration**/<br/>**TestConfigurations** |Test plan configuration information. For details on configuring tests, see [Test different configurations](../../test/test-different-configurations.md).  |  ✔️ | ✔️ |
> |**TestResult**/<br/>**TestResults** | Individual execution results for a specific **Test** associated with a **TestRun**.  |  ✔️ | ✔️ |
> |**TestResultsDaily**/<br/>**TestResultsDaily** | A daily snapshot aggregate of **TestResult** executions, grouped by Test (not TestRun). For a sample report, see [Test summary trend sample report](../powerbi/sample-test-summary-trend.md). |  ✔️ | ✔️ |
> |**TestRun**/<br/>**TestRuns** | Execution information for tests run under a pipeline with aggregate TestResult data. |  ✔️ | ✔️ |
> |**Test**/<br/>**Tests** | Properties for a test case, such as test name and test owner. For details on defining test cases, see [Create manual test cases](../../test/create-test-cases.md).  | ✔️ | ✔️ |
> |**TestPoint**/<br/>**TestPoints** | Execution information for test points. A test point is a unique combination of test case, test suite, configuration, and tester. For a sample report, see [Progress status sample report](../powerbi/sample-test-plans-progress-status.md). | ✔️ | ✔️ |
> |**TestPointHistorySnapshot**/<br/>**TestPointHistorySnapshots** | (Composite) Historical execution data for test points over time. For a sample report, see [Manual test execution trend sample report](../powerbi/sample-test-plans-execution-trend.md).|  ✔️ | ✔️ |
> |**TestSuite**/<br/>**TestSuites**| Test suites information. For details on defining test suites, see [Create test plans and test suites](../../test/create-a-test-plan.md). |  ✔️ | ✔️ | 

### Test entity reporting scenarios

Test entities support various reporting needs:

- **Test execution tracking**: Use `TestResults` and `TestRuns` for detailed execution data
- **Test planning metrics**: Use `TestPoints` and `TestSuites` for planning coverage
- **Trend analysis**: Use `TestResultsDaily` and `TestPointHistorySnapshots` for historical trends
- **Configuration coverage**: Use `TestConfigurations` for multi-platform testing analysis
 
::: moniker-end

## Best practices for using the Analytics data model

### Performance optimization

1. **Choose the right entity**: Use current state entities (`WorkItems`) for status reports and snapshot entities for trends
2. **Filter early**: Apply filters at the entity level rather than after data retrieval
3. **Limit data ranges**: Use date filters to restrict historical data queries
4. **Use appropriate aggregations**: Leverage built-in aggregation functions when possible

### Query design patterns

#### Current state queries
```odata
/WorkItems?$filter=State ne 'Closed'&$select=WorkItemId,Title,State
```

#### Historical trend queries
```odata
/WorkItemSnapshot?$filter=DateSK ge 20241001&$select=WorkItemId,State,DateSK
```

#### Relationship navigation
```odata
/WorkItems?$expand=Area($select=AreaPath),AssignedTo($select=UserName)
```

### Common pitfalls to avoid

- **Using revision entities for current state**: Don't use `WorkItemRevisions` when `WorkItems` suffices
- **Over-expanding relationships**: Only expand necessary navigation properties
- **Missing filters**: Always filter large entity sets to improve performance
- **Ignoring composite entities**: Use composite entities like `WorkItemSnapshot` for trend analysis

## Version considerations

Different API versions provide different capabilities:

- **v1.0**: Basic work tracking entities
- **v2.0**: Added process and enhanced filtering capabilities
- **v3.0-preview**: Added pipeline and test entities
- **v4.0-preview**: Enhanced composite entities and additional pipeline metrics

Choose the appropriate version based on your reporting requirements and the entities you need to access.

## Related articles 

- [OData Analytics query guidelines](odata-query-guidelines.md)
- [WIT analytics](wit-analytics.md)  
- [Aggregate data](aggregated-data-analytics.md)
- [Exploring Analytics OData metadata](analytics-metadata.md)
- [Work tracking, process, and project limits](../../organizations/settings/work/object-limits.md)  
- [Analytics views dataset design](../powerbi/data-connector-dataset.md)
- [Construct OData queries for Analytics](../analytics/analytics-query-parts.md)
- [Analytics security and permissions](../analytics/analytics-security.md)
