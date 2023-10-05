---
title: Pipelines properties reference for Analytics 
titleSuffix: Azure DevOps
description: Properties, enumerated types, and members metadata reference for the Analytics service for Azure Pipelines.  
ms.subservice: azure-devops-analytics
ms.author: chcomley
author: chcomley
ms.topic: conceptual
monikerRange: '>= azure-devops-2020'
ms.date: 11/04/2022
---


# Metadata reference for Azure Pipelines Analytics  

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)] 

The Analytics service collects pipeline and test activity generated via Azure Pipelines.  This article describes the properties that you can use to generate an Analytics report for pipelines. You use a combination of properties to filter a query, aggregate data, or build a report.  
 

[!INCLUDE [note-analytics-early-draft](../includes/note-analytics-data-model.md)]

## Entity sets and entity types

The following table summarizes the entity types and entity sets that support Azure Pipelines. All entity types/entity sets are available with Analytics **v4.0 preview** version. Analytics version **v3.0-preview** doesn't support snapshots.   

|EntitySet | EntityType | Description |  
|-----------|-------------|-------------| 
|[**Branches**](#branches)|**Branch** | Basic information about branches used in tests or pipelines. For a sample report, see [Progress status sample report](../powerbi/sample-test-plans-progress-status.md).|  
|[**ParallelPipelineJobsSnapshot**](#parallelpipelinejobssnapshot)|**ParallelPipelineJobsSnapshot** | (Composite) Supports understanding of parallel pipeline consumption. To learn more about parallel pipeline tests, see [Run tests in parallel using the Visual Studio Test task](../../pipelines/test/parallel-testing-vstest.md). |   
|[**Pipelines**](#pipelines) | **Pipeline**| Properties for a pipeline. |   
|[**PipelineJobs**](#pipelinejobs)|**PipelineJob** |Individual execution results for a specific Test associated with a TestRun |  
|[**PipelineRuns**](#pipelineruns)|**PipelineRun** | Execution information for pipelines. For a sample report, see [Pipeline pass rate trend sample report](../powerbi/sample-pipelines-pass-rate-trend.md).  |  
|[**PipelineRunActivityResults**](#pipelinerunactivityresults)|**PipelineRunActivityResult** | Merged log of all the stages, steps, jobs, and tasks within a specific pipeline execution. For a sample report, see [Pipeline task duration sample report](../powerbi/sample-pipelines-task-duration.md). |    
|[**PipelineTasks**](#pipelinetasks)|**PipelineTask** | Properties for tasks that are used within a pipeline.  |   
|[**TaskAgentPoolSizeSnapshots**](#taskagentpoolsizesnapshots)|**TaskAgentPoolSizeSnapshot** |(Composite) Supports understanding of pool size, pipeline jobs, and concurrency. The [Historical graph for agent pools](../../pipelines/agents/pool-consumption-report.md) illustrates how this entity set can be used. |    
|[**TaskAgentRequestSnapshots**](#taskagentrequestsnapshots)|**TaskAgentRequestSnapshot** |(Composite) Supports reporting on task agent requests.   |  


## Branches 

The following properties are valid for the **Branches** entity set. Surrogate keys associated with **Branch** include `BranchSK` and `ProjectSK`. 

|**Display name** |**Name**  | **Data type** | **Description**  | 
|---------------|----------------|---------------|--------------------------------------|
|  |`AnalyticsUpdatedDate` | DateTime | Watermark that indicates the last time the Analytics data was updated.  | 
|**Branch Name**|`BranchName` | String | The name assigned to a branch when it's created.  | 
|**Repository Id**|`RepositoryId` | String | The number assigned to a repository when it's created.  | 
|**Repository Vsts Id**|`RepositoryVstsId` | String | The number assigned to a TFVC repository when it's created.  | 
|**RepositoryUrl**|`RepositoryUrl` | String | The URL defined for a repository when it's created.  | 
 

Navigational properties include [`Project`](entity-reference-general.md#projects) and its referential constraint `ProjectSK`.
 
## ParallelPipelineJobsSnapshot 

The following properties are valid for the **ParallelPipelineJobsSnapshot** entity set. Reference keys include:  
- `IsHosted`
- `ParallelismTag`
- `SamplingDate`


|**Display name** | **Name** | **Data type** | **Description** | 
|-----------------|--------------------|---------------|--------------------------------------| 
|**Hosted Or Self-hosted** | `IsHosted` | Boolean | Indicates if the parallel pipeline is run on a Microsoft-hosted agent (True) or is self-hosted (False). To learn more, see [Azure Pipelines agents](../../pipelines/agents/agents.md). | 
|**Failed To Reach All Providers** | `FailedToReachAllProviders` | Boolean | Indicates if the job run reached all providers (True) or not (False).   |
|**Number Of Parallel Pipelines Jobs** | `TotalCount` | Int32 | The number of jobs run as part of the snapshot.  | 
|**Number Of Parallel Pipelines Minutes** | `TotalMinutes` | Int32 | The number of minutes taken to run the snapshot.  | 
|**Parallelism Type** | `ParallelismTag` | String | A tag that indicates the type of parallelism associated with the job snapshot.  |  
|**Premium Type** | `IsPremium` | Boolean |  Indicates if the parallel pipeline is premium (True) or not (False).  |  
|**Sample Date** | `SamplingDate` | DateTime | The date associated with the snapshot.  |    

 

## Pipelines 

The following properties are valid for **Pipelines** and its surrogate key `PipelineSK`.

|**Display name** | **Name** | **Data type** | **Description** | 
|-----------------|--------------------|---------------|--------------------------------------| 
|**Pipeline Id** | `PipelineId` | Int32 | The ID assigned to the pipeline.  | 
|**Pipeline Name** | `PipelineName` | String | The name assigned to the pipeline.  |  
|**Pipeline Version** | `PipelineVersion` | Int32 | The version associated with the pipeline.  | 
|**Pipeline Process Type** | `PipelineProcessType` | Enumerated | The type of pipeline definition. Valid values are listed below for [PipelineProcessType](#pipelineprocesstype-enumerated-type-members). |  


Navigational properties include [`Project`](entity-reference-general.md#projects) and its referential constraint `ProjectSK`.

### PipelineProcessType enumerated type members

The following members are defined for the `PipelineProcessType` enumerated type that indicates the method used to define the pipeline.  

|Member name           | Value        | Definition |
|----------------------|--------------|--------------|
|`Designer`            | 1            | Classic pipeline definition.  |
|`Yaml`                | 2            | YAML pipeline definition. |
|`Docker`              | 3            | Docker pipeline definition.   |


## PipelineJobs  

A pipeline job is a series of steps that run sequentially as a unit. A job is the smallest unit of work that you can schedule to run. Pipelines are organized around jobs, and each pipeline has at least one job. To learn more, see [Specify jobs in your pipeline](../../pipelines/process/phases.md).

The following properties are valid for  **PipelineJobs** and its `PipelineJobSK` surrogate key.

|**Display name** |**Name**  | **Data type** | **Description**  | 
|---------------|----------------|---------------|--------------------------------------|
|**Pipeline Full Job Name** |`FullJobName` | String | The full name of a pipeline job.  | 
|**Pipeline Id** |`PipelineId` | Int32 | The ID assigned to the pipeline in which the job is defined.  | 
|**Pipeline Job Identifier** |`JobId` | String | The job identifier assigned to a pipeline job when it's created.  | 
|**Pipeline Job Name** |`JobName` | String | The name assigned to the pipeline job.   | 
|**Pipeline Stage Name** |`StageName` | String | The stage name associated with the pipeline job.    | 
|**Pipeline Job Strategy Attributes** |`StrategyAttributes` | String | The attributes defined for the pipeline job.   | 
|**Stage Identifier** |`StageId` | String | The stage identifier associated with the pipeline job.   | 

Navigational properties include [`Project`](entity-reference-general.md#projects) and its referential constraint `ProjectSK`.

For a sample report that queries the **PipelineJob** entity type, see [Pipeline stage wise failures sample report](../powerbi/sample-pipelines-stagewise-failures.md).

## PipelineRuns  

A pipeline run represents a single execution of a pipeline. During a run, the pipeline is processed, and agents process one or more jobs. A pipeline run includes jobs, steps, and tasks. To learn more, see [Pipeline run sequence](../../pipelines/process/runs.md).

The following properties are valid for the **PipelineRun** entity type and its `PipelineRunSK` surrogate key.

|**Display name** |**Name**  | **Data type** | **Description**  | 
|---------------|----------------|---------------|--------------------------------------|
|**Canceled Count**|`CanceledCount` | Int32 | The count of pipeline runs that were canceled.  | 
|**Completed Date**|`CompletedDate` | DateTime | The date and time when the pipeline completes execution.  | 
|**Failed Count**|`FailedCount` | Int32 | The count of pipeline runs that succeeded.  | 
|**Number Revision**|`RunNumberRevision` | Int32 | The number assigned to a pipeline run with sequential executions.  |  
|**Partially Succeeded Count**|`PartiallySucceededCount` | Int32 | The count of pipeline runs that partially succeeded.  |  
|**Pipeline Run Id**|`PipelineRunId` | Int32 | The number assigned to a pipeline run.  | 
|**Queued Date**|`QueuedDate` | DateTime | The date and time when the pipeline was queued to run.  | 
|**Queue Duration Seconds**|`QueueDurationSeconds` | Decimal | The number of seconds the pipeline remained in the queue.  | 
|**Run Number**|`RunNumber` | String | The number assigned to a pipeline run when it's executed.  | 
|**Run Outcome**|`RunOutcome` | Enumerated | The outcome assigned to a pipeline upon completion of its execution. Valid values are listed below for [PipelineRunOutcome](#pipelinerunoutcome-enumerated-type-members).  |  
|**Run Reason**|`RunReason` | Enumerated | The condition that caused the pipeline to run. Valid values are listed below for [PipelineRunReason](#pipelinerunreason-enumerated-type-members).  | 
|**Run Duration Seconds**|`RunDurationSeconds` | Decimal | The number of seconds it took for the pipeline run to complete.  |  
|**Started Date**|`StartedDate` | DateTime | The date and time when the pipeline run began.  |  
|**Succeeded Count**|`SucceededCount` | Int32 | The count of pipeline runs that succeeded.  |  
|**Total Duration Seconds**|`TotalDurationSeconds` | Decimal | The total number of seconds the pipeline was in the queue and run.  | 

### Navigation properties

The following navigational properties are supported.  

| Display name | Name|-Referential constraint| Referenced property |  
|--------------|-----|-----------------------|---------------------| 
| **Branch**   | `Branch`|`BranchSK`|`BranchSK`        | 
| **Completed On** | `CompletedOn`|`CompletedDateSK`|`DateSK`  |  
| **Queued On**    | `QueuedOn`   |`QueuedDateSK`|`DateSK`           | 
| **Started On**   | `StartedOn`  |`QueuedDateSK`|`DateSK`           | 
| **Pipeline**     | `Pipeline`   |`PipelineSK`|`PipelineSK`      |  
| [**Project**](entity-reference-general.md#projects)  | `Project`|  `ProjectSK`| `ProjectSK` | 

### PipelineRunReason enumerated type members

The following members are defined for the `PipelineRunReason` enumerated type that indicates the conditions under which each pipeline stage, job, or step runs as described in [Specify conditions](../../pipelines/process/conditions.md).  

| Member name          | Value        | Display name        |  
|----------------------|--------------|---------------------|  
|`None`                | 0            | None                | 
|`Manual`              | 1            | Manual              | 
|`IndividualCI`        | 2            | Individual CI       |    
|`BatchedCI`           | 4            | Batched CI          |     
|`Schedule`            | 8            | Schedule            |       
|`UserCreated`         | 32            | User Created       |     
|`ValidateShelveset`   | 64            | Validate Shelveset |  
|`CheckInShelveset`    | 128            | Check In Shelveset| 
|`PullRequest`         | 256            | Pull Request      |     
|`PipelineRunCompletion`| 512           | Build Completion  | 
 
### PipelineRunOutcome enumerated type members

The following members are defined for the `PipelineRunOutcome` enumerated type that indicates the outcome of a pipeline run.    

| Member name          | Value        | Display name        |  
|----------------------|--------------|---------------------|  
|`None`                | 0            | None                | 
|`Succeed`             | 2            | Succeed             |   
|`PartiallySucceeded`  | 4            | Partially Succeeded |   
|`Failed`              | 6            | Failed              |          
|`Canceled`            | 32           | Canceled            |    


## PipelineRunActivityResults  

The following properties are valid for the **PipelineRunActivityResults** entity set and its `PipelineRunActivityResultSK` surrogate key. 

Many properties are date-based or user-based. These properties are associated with the **CalendarDate** and **User** entity sets described in [Calendar date, Project, and User metadata reference](entity-reference-general.md). 

|**Display name** | **Name** | **Data type** | **Description** | 
|-----------------|----------|---------------|--------------------------------------| 
|**Abandoned Count**|`AbandonedCount`                   | Int32 | The count of pipeline runs that were marked as abandoned.    |  
|**Activity Completed Date**|`ActivityCompletedDate`    | DateTime | The date and time when the pipeline run completes execution.  | 
|**Activity Duration Seconds**|`ActivityDurationSeconds`| Decimal | The total number of seconds the pipeline was in the queue and run.  | 
|**Activity Started Date**|`ActivityStartedDate`        | DateTime | The date-time when the pipeline run started.  | 
|**Canceled Count**|`CanceledCount`                     | Int32 | The count of pipeline runs that were canceled.  |   
|**Failed Count**|`FailedCount`                         | Int32 | The count of pipeline runs that failed.  |  
|**Pipeline Activity Type**|`ActivityType`              | Enumerated | The type of pipeline activity. Valid values are listed below for [PipelineActivityType](#pipelineactivitytype-enumerated-type-members). | 
|**Pipeline Run Id** |`PipelineRunId`                   | Int32 | The number assigned to a pipeline run when it's executed.  | 
|**Pipeline Run Outcome**|`PipelineRunOutcome`          | Enumerated | The outcome assigned to a pipeline upon completion of its execution. Valid values are listed under [PipelineRunOutcome](#pipelinerunoutcome-enumerated-type-members). | 
|**Relative Start Time From Job Seconds**|`RelativeStartTimeFromJobSeconds` | Int32 | The number of seconds that elapsed from the start of the job.  | 
|**Relative Start Time From Stage Seconds**|`RelativeStartTimeFromStageSeconds` | Int32 | The number of seconds that elapsed from the start of the stage.  | 
|**Relative Start Time From Run Seconds**|`RelativeStartTimeFromRunSeconds` | Int32 |The number of seconds that elapsed from when the run executed.    | 
|**Skipped Count**|`SkippedCount` | Int32 | The count of pipeline runs that were skipped.  |    
|**Succeeded Count**|`SucceededCount` | Int32 | The count of pipeline runs that succeeded.  |  
|**Succeeded With Issues Count**|`SucceededWithIssuesCount` | Int32 | The count of pipeline runs that partially succeeded.  | 
|**Task Display Name**|`TaskDisplayName` | String | Name of a task executed in the pipeline run.  | 
|**Task Log Path**|`TaskLogPath` | String | The path of the log file generated by a task.    |  
|**Task Result**|`TaskOutcome` | Custom | The result of the task that was executed.  |  

For sample reports that query the **PipelineRunActivityResult** entity type, see [Pipeline task duration trend sample report](../powerbi/sample-pipelines-task-duration-trend.md).

### Navigation properties 

Navigation properties include those listed in the following table. 

|**Display Name** |**Name**        |**Referential constraint**  |**Referenced property** |
|-----------------|----------------|----------------------------|---------------------------|
|**Activity Started On** | `ActivityStartedOn` | `ActivityStartedDateSK` | `DateSK` |
|**Branch** | `Branch` | `BranchSK` | `BranchSK` | 
|**Pipeline** | `Pipeline` | `PipelineSK` | `PipelineSK` | 
|**Pipeline Task** | `PipelineTask` | `PipelineTaskSK` | `PipelineTaskSK` | 
|**Pipeline Job** | `PipelineJob` | `PipelineJobSK` | `PipelineJobSK` | 
|**Pipeline Run Queued On** | `PipelineRunQueuedOn` | `PipelineRunQueuedDateSK` | `DateSK` |
|**Pipeline Run Started On** | `PipelineRunStartedOn` | `PipelineRunStartedDateSK` | `DateSK` |
|**Pipeline Run Completed On** | `PipelineRunCompletedOn` | `PipelineRunCompletedDateSK` |`DateSK` | 
|**Pipeline Run Started On** | `PipelineRunStartedOn` | `PipelineRunStartedDateSK` | `DateSK` | 
| [**Project**](entity-reference-general.md#projects)  | `Project`|  `ProjectSK`| `ProjectSK` |  
 

### PipelineActivityType enumerated type members

The following members are defined for the `PipelineActivityType` enumerated type.  

| Member name          | Value        | Display name        |  
|----------------------|--------------|---------------------|  
|`Task`                | 0            | Task                |  
|`Approval`            | 1            | Approval            | 
|`AgentWait`           | 2            | Agent Wait          |  
 

## PipelineTasks 

The following properties are valid for the **PipelineTasks** entity set and its surrogate key `PipelineTaskSK`.

|**Display name** | **Name** | **Data type** | **Description** | 
|-----------------|--------------------|---------------|--------------------------------------| 
|**Task Definition Id** | `TaskDefinitionId` | GUID | The GUID assigned to a pipeline task.  | 
|**Task Definition Version** | `TaskDefinitionVersion` | String | The version assigned to a pipeline task.  |  

Navigational properties include [`Project`](entity-reference-general.md#projects) and its referential constraint `ProjectSK`.


## TaskAgentPoolSizeSnapshots  

The following properties are valid for the **TaskAgentPoolSizeSnapshots** entity set and its surrogate key `SamplingDate`.

|**Display name** |  **Property name**  | **Data type** | **Description**  | 
|-----------------|--------------------|---------------|--------------------------------------| 
|**Online Count** | `OnlineCount` | Int32 | The number of agents online in the agent pool when the task was run.   | 
|**Offline Count** | `OfflineCount` | Int32 | The number of agents offline in the agent pool when the task was run. |  
|**Pool Id** | `PoolId` | Int32 | The number assigned to the agent pool.  | 
|**Sample Date** | `SamplingDate` | DateTime | The date and time when the pool size was snapped.   | 

For a sample report built off of the **TaskAgentPoolSizeSnapshot** entity, see [Historical graph for agent pools (Preview)](../../pipelines/agents/pool-consumption-report.md).

## TaskAgentRequestSnapshots  

Agent pools are allocated when a task is executed. The **TaskAgentRequestSnapshots** entity set captures data related to the task agent requests.

The following properties are valid for the **TaskAgentRequestSnapshot** entity type and its surrogate keys `SamplingTime` and `SamplingDateSK`. 

|**Display name** | **Name**          | **Data type** | **Description** | 
|-----------------|-------------------|---------------|--------------------------------------| 
|**Build Queued**  | `IsQueued`        | Boolean  | Indicates if the build is queued (True) or not queued (False).  |  
|**Build Running** | `IsRunning`      | Boolean  | Indicates if the build is running (True) or not running (False).  |   
|**Hosted Or Self-hosted** |`IsHosted`| Boolean  | Indicates if the agent assigned to the task is hosted (True) or self-hosted (False).  |  
|**Job End Date** | `FinishedDate`    | DateTime  |The date-time when the task agent request finished running.  | 
|                  | `FinishedDateSK`   | Int32    | The date the task agent request finished running, expressed as `YYYYMMDD` in the time zone defined for the organization. | 
|**Queued Date** | `QueuedDate`       | DateTime | The date-time when the task agent request was queued.  | 
|                | `QueuedDateSK`     | Int32    | The date the task agent request was queued, expressed as `YYYYMMDD` in the time zone defined for the organization.  
|**Queue Duration Seconds** | `QueueDurationSeconds` | Decimal | The number of seconds the task agent request remained in the queue before an agent was assigned.   |  
|**Pool Id**    | `PoolId`            | Int32    | The number assigned to the agent pool assigned to the task agent request.  |  
|**Pipeline Type** | `PipelineType`   | String | The pipeline type containing the task agent request.  |  
|**Request Id** | `RequestId`         | Int64 | The number assigned to the task agent request.  | 
|**Sample Hour** | `SamplingHour`     | Int32 | The number assigned to hour when the request was received.  | 
|**Sample Time** | `SamplingTime`     | DateTime | The date-time when the task agent request was received.   |
|**Started Date** | `StartedDate`     | DateTime | The date-time when the task agent request was executed.   | 
|                | `StartedDateSK`    | Int32    | The date the task agent request started execution, expressed as `YYYYMMDD` in the time zone defined for the organization.   | 

Navigation properties include those listed in the following table. 

| Display name | Name| Referential constraint|-Referenced property |  
|--------------|-----|-----------------------|---------------------| 
| **Branch**   | `Branch`|`BranchSK`|`BranchSK`        | 
| **Completed On** | `CompletedOn`|`CompletedDateSK`|`DateSK`  | 
| **Job End Time** | `FinishedOn` | `FinishedDateSK` |  `DateSK` |  
| **Queued On**    | `QueuedOn`   |`QueuedDateSK`|`DateSK`           | 
| **Pipeline**     | `Pipeline`   |`PipelineSK`|`PipelineSK`      |  
| [**Project**](entity-reference-general.md#projects)  | `Project`|  `ProjectSK`| `ProjectSK` | 
| **Started On**   | `StartedOn`  |`QueuedDateSK`|`DateSK`           | 



## Related articles

- [Historical data representation in Analytics](analytics-historical-filtering.md)
- [Data model for Analytics](../extend-analytics/data-model-analytics-service.md)
- [Use Azure Pipelines](../../pipelines/get-started/pipelines-get-started.md)
- [About pipeline tests](../../pipelines/test/test-glossary.md)
- [OData Analytics query guidelines](../extend-analytics/odata-query-guidelines.md)  


 