---
title: Test metadata reference for Analytics 
titleSuffix: Azure DevOps
description:  Properties, enumerated types, and members metadata reference for the Analytics service and Azure DevOps testing.  
ms.subservice: azure-devops-analytics
ms.author: chcomley
author: chcomley
ms.topic: conceptual
monikerRange: '>= azure-devops-2020'
ms.date: 11/07/2022
---


# Metadata reference for Test Plans Analytics

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)] 

The Analytics service collects all data for all Azure DevOps test activities. Azure Test Plans supports the definition and execution of planned and exploratory tests. And with Azure Pipelines, you can also execute automated tests with Continuous Integration/Continuous Deployment (CI/CD) workflows. 

If you're new to Azure DevOps testing, we recommend you review the following articles: 
- [What is Azure Test Plans?](../../test/overview.md)
- [Test objects and terms](../../test/test-objects-overview.md)  
- [About pipeline tests](../../pipelines/test/test-glossary.md)
- [Visual Studio Test](../../pipelines/tasks/test/vstest.md)
 

The metadata information provided in this article describes the entities, properties, and enumerated types supported for all Azure DevOps test activities. 


[!INCLUDE [note-analytics-early-draft](../includes/note-analytics-data-model.md)]
## Entity sets and entity types

To query Analytics for Test Plan data, use one or more of the entity types and entity sets described in the following table.  

> [!NOTE]   
> Analytics for Azure DevOps testing is supported with **v3.0-preview** and **v4.0-preview** versions.  
> Analytics stores all test-related work items as work items. You can query and generate reports on this data using the work tracking entities described in [Work tracking metadata reference for Azure Boards Analytics](entity-reference-boards.md). 

|`EntitySet` | `EntityType` | Description | 
|-----------|-------------|-----------|-------------|
|[**Tests**](#tests)| **Test** | Properties for a test case, such as test name and test owner. For details on defining test cases, see [Create manual test cases](../../test/create-test-cases.md).  | 
|[**TestConfigurations**](#testconfigurations) | **TestConfiguration** |Test plan configuration information. For details on configuring tests, see [Test different configurations](../../test/test-different-configurations.md).  | 
|[**TestPoints**](#testpoints) | **TestPoint** | Execution information for test points. A test point is a unique combination of test case, test suite, configuration, and tester. For a sample report, see [Progress status sample report](../powerbi/sample-test-plans-progress-status.md). | 
|[**TestPointHistorySnapshot**](#testpointhistorysnapshot) | **TestPointHistorySnapshot** | (Composite) Individual execution results for a specific **Test** associated with a **TestRun**. For a sample report, see [Manual test execution trend sample report](../powerbi/sample-test-plans-execution-trend.md).| 
|[**TestResults**](#testresults) | **TestResult** | Individual execution results for a specific **Test** associated with a **TestRun**.  |  
|[**TestResultsDaily**](#testresultsdaily) | **TestResultDaily** | A daily snapshot aggregate of **TestResult** executions, grouped by Test (not TestRun). For a sample report, see [Test summary trend sample report](../powerbi/sample-test-summary-trend.md). | 
|[**TestRuns**](#testruns) | **TestRun** | Execution information with aggregated test results for tests that are run under a pipeline. |  
|[**TestSuites**](#testsuites) | **TestSuite**| Test suites information. For details on defining test suites, see [Create test plans and test suites](../../test/create-a-test-plan.md). |  


## Tests

The following properties are valid for the **Test** entity type and **Tests** entity set. Surrogate key is `TestSK`.  

Navigational properties include [`Project`](entity-reference-general.md#projects) and its referential constraint `ProjectSK`.

|**Display name** | **Name** | **Data type** | **Description** | 
|-----------------|--------------------|---------------|--------------------------------------| 
|                 |`AnalyticsUpdatedDate` | DateTime | Watermark that indicates the last time the Analytics data was updated.  | 
|**Container Name** | `ContainerName` | String | Name of the job container containing the test task within a pipeline.   | 
|**Fully Qualified Test Name** | `FullyQualifiedTestName` | String | The name created for the test. The fully qualified name format corresponds to `Namespace.Testclass.Methodname` with a character limit of 512. If the test is data driven and has parameters, the character limit will include the parameters.  | 
|**Priority** | `Priority` | Int32 | Specifies the degree of importance or criticality of a test. Priority is typically specified as an attribute in the test code.   |   
|**Test Case Reference Id** | `TestCaseReferenceId` | Int32 | The number (not the ID) assigned to a test case.  | 
|**Test Name** | `TestName` | String | The name of the test. |  
|**Test Owner** | `TestOwner` | String | Owner of a test or test run. The test owner is typically specified as an attribute in the test code. See [Publish Test Results task](../../pipelines/tasks/test/publish-test-results.md) to view the mapping of the Owner attribute for supported test result formats. |  

## TestConfigurations

Test configurations specify different environments in which you'll run tests as described in [Test different configurations](../../test/test-different-configurations.md).

The following properties are valid for the **TestConfiguration** entity type and **TestConfigurations** entity set and their surrogate key `TestConfigurationSK`.

|**Display name** | **Name** | **Data type** | **Description** | 
|-----------------|--------------------|---------------|--------------------------------------|  
|**Test Configuration Id** | `TestConfigurationId` | Int32 | The number (not the ID) assigned to a test case.  | 
|**Test Configuration Name** | `Name`  | String | Name assigned to the test configuration.   |  
|**Test Configuration State** | `State` | String | The state of the test configuration, either Active or Inactive.   |  


Navigational properties include [`Project`](entity-reference-general.md#projects) and its referential constraint `ProjectSK`.
 

## TestPoints

 A test point is a unique combination of test case, test suite, configuration, and tester. The following properties are valid for the **TestPoint** EntityType and **TestPoints** EntitySet. Surrogate key is `TestPointSK`. 

|**Display name** | **Name** | **Data type** | **Description** | 
|-----------------|--------------------|---------------|--------------------------------------| 
|                 |`AssignedToUserSK` | GUID | The GUID assigned to the tester associated with the test point.   | 
|                 |`TesterUserSK` | GUID | The GUID assigned to the tester associated with the test point.   | 
|**Automation Status** | `AutomationStatus` | Enumerated | The status of a test case, such as Automated, Not Automated, or Planned. Corresponds to the [Microsoft.VSTS.TCM.AutomationStatus](../../boards/queries/build-test-integration.md) work item field. | 
|**Changed Date**     | `ChangedDate` | DateTime | The date-time when the test point last changed.  |  
|**Last Result State**   | `LastResultState` | Enumerated | The state of the test point, such as pending, queued, or in progress. Valid values are listed below for [TestResultState](#testresultstate-enumerated-type-members).   |  
|**Priority** | `Priority` | Int32 | The priority assigned to the associated test case.   |   
|**Test Case Id** | `TestCaseId` | Int32 | The work item ID assigned to the associated test case. | 
|**Test Configuration Id** | `TestConfigurationId` | Int32 | The number assigned to the associated test configuration.   |   
|**Test Plan Id** | `TestPlanId` | Int32 | The work item ID assigned to the associated test plan.  | 
|**Test Result Outcome** | `LastResultOutcome` | Enumerated | Specifies the last test result outcome. Valid values are listed below for [TestOutcome](#testoutcome-enumerated-type-members).  | 
|**Test Suite Id**   | `TestSuiteId` | Int32 | The work item ID assigned to the associated test suite.     |  

To review test points via the user interface, see [Run manual tests, Save results, close the session, and review results](../../test/run-manual-tests.md#save-results-close-the-session-and-review-results). 

### Navigation properties

The following table lists those navigation properties for the **TestPoint** entity type and **TestPoints** entity set. 

|**Display Name** |**Name**        |**Referential constraint**  |**Referenced property** |
|-----------------|----------------|----------------------------|---------------------------|
|    | `ChangedOn` | `ChangedDateSK` | `DateSK` | 
|Assigned To | `AssignedTo` | `AssignedToUserSK` | `UserSK` | 
|Project | `Project` | `ProjectSK` | `ProjectSK` | 
|Test Case Work Item| `TestCase` | `TestCaseId` | `WorkItemId` | 
|Test Configuration | `TestConfiguration` | `TestConfigurationSK` | `TestConfigurationSK` |
|Test Suite   | `TestSuite` | `TestSuiteSK` | `TestSuiteSK` | 
|Tester User Name | `Tester` | `TesterUserSK` | `UserSK` | 


### TestResultState enumerated type members 

A test result can be in one of the six states summarized in the following table for the `TestResultState` enumerated type.  

| Member name          | Value        | Display name        | 
|----------------------|--------------|---------------------| 
|`None`                  | 0            | None                |  
|`Pending`               | 1            | Pending             |  
|`Queued`                | 2            | Queued              |    
|`InProgress`            | 3            | In Progress         |
|`Paused`                | 4            | Paused              |    
|`Completed`             | 5            | Completed           |  

### TestOutcome enumerated type members 

The 15 outcomes for a test are listed in the following table and are the members are defined for the `TestOutcome` enumerated type.  

| Member name          | Value        | Display name        |  Description | 
|----------------------|--------------|---------------------| ---------------------|  
|`Unspecified`           | 0          | Unspecified         |                            | 
|`None`                  | 1          | None                |                            |  
|`Passed`                | 2          | Passed              | Test executed successfully. |  
|`Failed`                | 3          | Failed              | Test not meeting the desired outcome. |  
|`Inconclusive`          | 4          | Inconclusive        | Test without a definitive outcome. |   
|`Timeout`               | 5          | Timeout             | Test execution duration exceeding the specified threshold. |                  
|`Aborted`               | 6          | Aborted             | Test execution terminated abruptly due to internal or external factors, for example, bad code, environment issues. |
|`Blocked`               | 7          | Blocked             |                            |                  
|`NotExecuted`           | 8          | Not Executed        |  Test marked as skipped for execution. | 
|`Warning`               | 9          | Warning             |                            |   
|`Error`                 | 10         | Error               |                            |    
|`NotApplicable`         | 11         | Not Applicable      |                           |      
|`Paused`                | 12         | Paused              |                           |  
|`InProgress`            | 13         | In Progress          |                           |      
|`NotImpacted`           | 14         | Not Impacted         | Test not impacted by the code change that triggered the pipeline. |     


## TestPointHistorySnapshot  


The following properties are valid for the **TestPointHistorySnapshot** entity set. Surrogate keys include `TestPointSK` and `DateSK`.

|**Display name** | **Name** | **Data type** | **Description** | 
|-----------------|--------------------|---------------|--------------------------------------|
|                 |`AnalyticsUpdatedDate` | DateTime | Watermark that indicates the last time the Analytics data was updated.  |  
|                 |`AssignedToUserSK` | GUID | The GUID assigned to the test work item.   | 
|                 |`IsLastDayOfPeriod` |  Enumerated | Use to filter data to determine if a day finishes in different periods such as days, weeks, months, or years.  Valid values are listed here: [Period enumerated type members](entity-reference-general.md#period-enumerated-type-members).| 
|                 |`TesterUserSK` | GUID | The GUID assigned to the tester associated with the test point.   | 
|                 |`TestConfigurationSK` | Int32 | The key assigned to the associated test configuration.    | 
|**Automation Status**     | `AutomationStatus` | Enumerated | The status of a test case, such as Automated, Not Automated, or Planned. Corresponds to the [Microsoft.VSTS.TCM.AutomationStatus](../../boards/queries/build-test-integration.md) work item field. |   
|**Priority** | `Priority` | Int32 | The priority assigned to the associated test case.   |  
|**Test Case Id** | `TestCaseId` | Int32 | The work item ID assigned to the associated test case. | 
|**Test Configuration Id** | `TestConfigurationId` | Int32 | The number assigned to the associated test configuration.   |   
|**Test Plan Id** | `TestPlanId` | Int32 | The work item ID assigned to the associated test plan.  | 
|**Test Result Outcome** | `ResultOutcome` | Enumerated | Specifies the last test result outcome. Valid values are listed in [TestOutcome](#testoutcome-enumerated-type-members).  | 
|**Test Suite Id**   | `TestSuiteId` | Int32 | The work item ID assigned to the associated test suite.     |  
 
 
### Navigation properties

The following table lists those navigation properties for the **TestPointHistorySnapshot** entity type and **TestPointHistorySnapshot** entity set. 

|**Display Name** |**Name**        |**Referential constraint**  |**Referenced property** |
|-----------------|----------------|----------------------------|---------------------------|
|   | `Date` | `DateSK` | `DateSK` | 
|Assigned To | `AssignedTo` | `AssignedToUserSK` | `UserSK` | 
|Project | `Project` | `ProjectSK` | `ProjectSK` | 
|Test Case Work Item| `TestCase` | `TestCaseId` | `WorkItemId` | 
|Test Configuration | `TestConfiguration` | `TestConfigurationSK` | `TestConfigurationSK` |
|Test Suite   | `TestSuite` | `TestSuiteSK` | `TestSuiteSK` | 
|Tester User Name | `Tester` | `TesterUserSK` | `UserSK` | 



## TestResults   

A test result corresponds to a single instance of execution of a test case with a specific outcome and details. 


Test runs occur when you manually run a test or include test tasks within a pipeline definition as described in [Build, test, and deploy .NET Core apps, Run your tests](../../pipelines/ecosystems/dotnet-core.md#run-your-tests).  

The following properties are valid for the **TestResults** entity set. Surrogate key is `TestResultSK`.

|**Display name** | **Name** | **Data type** | **Description** | 
|-----------------|--------------------|---------------|--------------------------------------|
|                 |`AnalyticsUpdatedDate` | DateTime | Watermark that indicates the last time the Analytics data was updated.  |  
|**Completed Date** | `CompletedDate` | DateTime | The date-time when the test result completed execution.  | 
|**Duration Seconds** | `DurationSeconds` | Decimal | The number of seconds it took for the test to execute. | 
|**Is Flaky** | `IsFlaky` | Boolean | Indicates if the test is marked as flaky (True) or not (False). A flaky Test is a test that intermittently fails for no apparent reason, such as a change to the code or test.**** For more information, see [Manage flaky tests](../../pipelines/test/flaky-test-management.md).  | 
|**Release Id**   | `ReleaseId` | Int32 | The number assigned to the release associated with the test result.   |  
|**Release Environment Id** | `ReleaseEnvironmentId` | Int32 | The number assigned to the release environment associated with the test result.   |  
|**Release Pipeline Id** | `ReleasePipelineId` | Int32 | The number assigned to the release pipeline associated with the test result.    |  
|**Release Stage Id** | `ReleaseStageId` | Int32 | The number assigned to the release stage associated with the test result.   |   
|**Started Date** | `StartedDate`  | DateTime |The date-time when the test result started execution.  |    
|**Test Result Id** | `TestResultId` | Int32 | The number assigned to a test result.  |   
|**Test Run Id** | `TestRunId` | Int32 | The number assigned to a test run.  |   
|**Test Run Type** | `TestRunType` | Enumerated | Indicates if it's a manual or automated test type. Valid values are listed below for [TestRunType](#testruntype-enumerated-type-members). |     
|**Test Outcome** | `Outcome` | Enumerated | The  test run outcome. There are 15 possible outcomes for a test result: Aborted, Blocked, Error, Failed, Inconclusive, In progress, None, Not applicable, Not executed, Not impacted, Passed, Paused, Timeout, Unspecified, and Warning. Valid values are listed below for [TestOutcome](#testoutcome-enumerated-type-members).   |     
|**Workflow** | `Workflow` | Enumerated  | The pipeline workflow type. Valid values are listed below for [SourceWorkflow](#sourceworkflow-enumerated-type-members).   | 
 
### Navigation properties

The following table lists the navigation properties valid for a **TestResult** entity type. 

|**Name**        |**Referential constraint**  |**Referenced property** |
|----------------|----------------------------|---------------------------|
| `CompletedOn`  | `CompletedDateSK` | `DateSK` | 
| `StartedOn`    | `StartedDateSK` | `DateSK` | 
| `Branch`       | `BranchSK` | `BranchSK` | 
|`Project`       | `ProjectSK` | `ProjectSK` | 
|`Pipeline`      | `PipelineSK` | `PipelineSK` | 
| `PipelineRun`  | `PipelineRunSK` | `PipelineRunSK` |
|`Test`          | `TestSK` | `TestSK` |
| `TestRun`      | `TestRunSK` |`TestRunSK` |   


### SourceWorkflow enumerated type members 

The following table lists the members defined for the `SourceWorkflow` enumerated type.  


| Display name | Member name  | Value        | 
|--------------|--------------|--------------| 
|Build          |`Build`     | 1            |
|Release        |`Release`   | 2            |       
|Manual         |`Manual`    | 3            | 


### TestRunType enumerated type members 

The following table lists the members defined for the `SourceWorkflow` enumerated type.  

|Member name             | Value        | Display name  | 
|------------------------|--------------|---------------------|
|`Automated`             | 1            | Automated           |  
|`Manual`                | 2            | Manual              |



## TestResultsDaily  


The following properties are valid for the **TestResultsDaily** entity set. Surrogate key is`TestResultsDailySK`.

|**Display name** | **Name** | **Data type** | **Description** | 
|-----------------|--------------------|---------------|--------------------------------------|
|                 |`AnalyticsUpdatedDate` | DateTime | Watermark that indicates the last time the Analytics data was updated.  |  
|**Release Pipeline Id** | `ReleasePipelineId` | Int32 | The number assigned to the associated release pipeline.   |   
|**Release Stage Id** | `ReleaseStageId` | Int32 | The number assigned to the associated release pipeline stage.   |  
|**Result Aborted Count** | `ResultAbortedCount` | Int32 | The number of test outcomes reported as *Aborted* for the test result daily.   |  
|**Result Blocked Count** | `ResultBlockedCount` | Int32 | The number of test outcomes reported as *Blocked* for the test result daily.    |     
|**Result Count** | `ResultCount` | Int32 | The total number of test results reported. | 
|**Result Duration Seconds** | `ResultDurationSeconds` | Decimal | The number of seconds that the test result required to execute.   |   
|**Result Error Count** | `ResultErrorCount` | Int32 | The number of test outcomes reported as *Error* for the test result daily.   |   
|**Result Fail Count** | `ResultFailCount` | Int32 | The number of test outcomes reported as *Failed* for the test result daily. |   
|**Result Flaky Count** | `ResultFlakyCount` | Int32 | The number of flaky results. A flaky Test is a test that intermittently fails for no apparent reason, such as a change to the code or test.  For more information, see [Manage flaky tests](../../pipelines/test/flaky-test-management.md).   |    
|**Result Inconclusive Count** | `ResultInconclusiveCount` | Int32 |  The number of test outcomes reported as *Inconclusive* for the test result daily.   |  
|**Result Pass Count** | `ResultPassCount` | Int32 | The number of test outcomes reported as *Passed* for the test result daily.  |    
|**Result None Count** | `ResultNoneCount` | Int32 | The number of test outcomes reported as *None* for the test result daily.  |    
|**Result Timeout Count** | `ResultTimeoutCount` | Int32 | The number of test outcomes reported as *Timeout* for the  test result daily.  |   
|**Result Not Executed Count** | `ResultNotExecutedCount` | Int32 | The number of test outcomes reported as *Not Executed* for the test result daily.  |  
|**Result Warning Count** | `ResultWarningCount` | Int32 | The number of test outcomes reported as *Warning* for the test result daily.    |   
|**Result Not Applicable Count** | `ResultNotApplicableCount` | Int32 | The number of test outcomes reported as *Not Applicable* for the  test result daily.    |   
|**Result Not Impacted Count** | `ResultNotImpactedCount` | Int32 | The number of test outcomes reported as *Not Impacted* for the test result daily.    |  
|**Result Duration Seconds** | `ResultDurationSeconds` | Decimal | The number of seconds it took for the test result to complete.   |    
|**Started Date** | `StartedDate`  | String | The date-time of the start of the test result.    |   
|**Test Run Type** | `TestRunType` |  Enumerated | Indicates if it's a manual or automated test type. Valid values are listed under [TestRunType](#testruntype-enumerated-type-members). |
|**Workflow** | `Workflow` | Enumerated |  The pipeline workflow type. Valid values are listed under [SourceWorkflow](#sourceworkflow-enumerated-type-members). |


### Navigation properties

The following table lists the navigation properties that are valid for a **TestResultDaily** entity type.

|**Name**        |**Referential constraint**  |**Referenced property** |
|----------------|----------------------------|---------------------------|
| `Branch`       | `BranchSK` | `BranchSK` | 
| `Date`    | `StartedDateSK` | `DateSK` | 
|`Pipeline`      | `PipelineSK` | `PipelineSK` |  
|`Project`       | `ProjectSK` | `ProjectSK` | 
|`Test`          | `TestSK` | `TestSK` | 

## TestRuns  

Test runs occur when you manually run a test or include test tasks within a pipeline definition. To learn more, see [Build, test, and deploy .NET Core apps, Run your tests](../../pipelines/ecosystems/dotnet-core.md#run-your-tests).  

The following properties are valid for **TestRuns** and its surrogate key `TestRunSK`.

|**Display name** | **Name** | **Data type** | **Description** | 
|-----------------|--------------------|---------------|--------------------------------------|
|                 |`AnalyticsUpdatedDate` | DateTime | Watermark that indicates the last time the Analytics data was updated.  |  
|**Has Detail**   | `HasDetail` | Boolean | Indicates whether details are provided for the test run (True) or not (False).   |  
|**Is Automated** | `IsAutomated` | Boolean | Indicates whether details are provided for the test run (True) or not (False).   | 
|**Priority**     | `Priority` | Int32 | The version assigned to a pipeline task.  |    
|**Completed Date** | `CompletedDate` | DateTime | The date-time of the completion of the test run or test result.  | 
|**Release Id**   | `ReleaseId` | Int32 | The number assigned to the associated release definition.     |  
|**Release Environment Id** | `ReleaseEnvironmentId` | Int32 | The number assigned to the associated release environment.   |  
|**Release Pipeline Id** | `ReleasePipelineId` | Int32 | The number assigned to the associated release pipeline.   |  
|**Release Stage Id** | `ReleaseStageId` | Int32 | The number assigned to the associated release pipeline stage.   |  
|**Result Aborted Count** | `ResultAbortedCount` | Int32 | The number of test outcomes reported as *Aborted* for the test run or test result daily.   |  
|**Result Blocked Count** | `ResultBlockedCount` | Int32 | The number of test outcomes reported as *Blocked* for the test run or test result daily.    |        
|**Result Count** | `ResultCount` | Int32 | The total number of test results reported. | 
|**Result Duration Seconds** | `ResultDurationSeconds` | Decimal | The number of seconds that the test run required to execute.   |   
|**Result Error Count** | `ResultErrorCount` | Int32 | The number of test outcomes reported as *Error* for the test run or test result daily.   |  
|**Result Fail Count** | `ResultFailCount` | Int32 | The number of test outcomes reported as *Failed* for the test run or test result daily. |  
|**Result Flaky Count** | `ResultFlakyCount` | Int32 | The number of test outcomes marked as flaky. A flaky test is a test that intermittently fails for no apparent reason, such as a change to the code or test.  For more information, see [Manage flaky tests](../../pipelines/test/flaky-test-management.md).    |    
|**Result Inconclusive Count** | `ResultInconclusiveCount` | String |  The number of test outcomes reported as *Inconclusive* for the test run or test result daily.   |  
|**Result Pass Count** | `ResultPassCount` | Int32 | The number of test outcomes reported as *Passed* for the test run or test result daily.  |   
|**Result Timeout Count** | `ResultTimeoutCount` | Int32 | The number of test outcomes reported as *Timeout* for the test run or test result daily.  |  
|**Result Not Executed Count** | `ResultNotExecutedCount` | Int32 | The number of test outcomes reported as *Not Executed* for the test run or test result daily.  |    
|**Result Warning Count** | `ResultWarningCount` | Int32 | The number of test outcomes reported as *Warning* for the test run or test result daily.    |  
|**Result Not Applicable Count** | `ResultNotApplicableCount` | Int32 | The number of test outcomes reported as *Not Applicable* for the test run or test result daily.    |  
|**Result Not Impacted Count** | `ResultNotImpactedCount` | Int32 | The number of test outcomes reported as *Not Impacted* for the test run or test result daily.    | 
|**Run Duration Seconds** | `RunDurationSeconds` | Decimal | The state of the test configuration, either Active or Inactive.   
|**Started Date** | `StartedDate`  | DateTime | The date-time of the start of the test run.    |   
|**Test Run Id** | `TestRunId` | Int32 | The number assigned to a test run.  |  
|**Test Run Type** | `TestRunType` |  Enumerated | Indicates if it's a manual or automated test type. Valid values are listed under [TestRunType](#testruntype-enumerated-type-members). |
|**Title** | `Title` | String | The GUID assigned to a pipeline task.  | 
|**Workflow** | `Workflow` | Enumerated |  The pipeline workflow type. Valid values are listed under [SourceWorkflow](#sourceworkflow-enumerated-type-members). |


### Navigation properties

The following table lists the navigation properties that are valid for a **TestRun** entity type.

|**Name**        |**Referential constraint**  |**Referenced property** |
|----------------|----------------------------|---------------------------|
| `Branch`       | `BranchSK` | `BranchSK` | 
| `CompletedOn`  | `CompletedDateSK` | `DateSK` | 
|`Pipeline`      | `PipelineSK` | `PipelineSK` | 
| `PipelineRun`  | `PipelineRunSK` | `PipelineRunSK` |
|`Project`       | `ProjectSK` | `ProjectSK` | 
| `StartedOn`    | `StartedDateSK` | `DateSK` | 
 
## TestSuites 

Test suites are defined for test plans and specify the tests to run. To learn more, see [Create test plans and test suites](../../test/create-a-test-plan.md).

The following properties are valid for  **TestSuites** and its surrogate key `TestSuiteSK`.

|**Display name** | **Name** | **Data type** | **Description** | 
|-----------------|--------------------|---------------|--------------------------------------|  
|  |`AnalyticsUpdatedDate` | DateTime | Watermark that indicates the last time the Analytics data was updated.  | 
|**Test Plan Id** | `TestPlanId` | Int32 | The number (not the ID) assigned to a test case.  | 
|**Test Suite Id** | `TestSuiteId`  | Int32 | Name assigned to the test configuration.   |  
|**Test Plan Title** | `TestPlanTitle` | String | The state of the test configuration, either Active or Inactive.   |  
|**Test Suite Title** | `Title` | Int32 | The number (not the ID) assigned to a test case.  | 
|**OrderId** | `OrderId`  | Int32 | Name assigned to the test configuration.   |  
|**Test Suite Level 1 Id** through **Test Suite Level 14 Id** | `IdLevel1` through`IdLevel14` | Int32 | The level of a nested test suite.   |  
|**Test Suite Level 1 Title** through **Test Suite Level 14 Title** | `TitleLevel1` through `TitleLevel14` | String | The name of the nested test suite level.   | 
|**Test Suite Depth** | `Depth`  | Byte | The nested level of a test suite within a test plan.   |  
|**Test Suite Type** | `Type` | Enumerated | Specifies the type of test suite. Valid values are listed for [TestSuiteType](#testsuitetype-enumerated-type-members) enumerated type.|  
|**Test Plan Id** | `TestPlanId` | Int32 | The number (not the ID) assigned to a test plan.  | 
|**Requirement Work Item Id** | `RequirementWorkItemId`  | Int32 | ID of the work item user story, product backlog item, or other requirement-category work item associated with the test suite.   |  
|**Test Plan Title** | `TestPlanTitle` | String | The title defined for the test plan.    |  

### Navigation properties
 
The following table lists the navigation properties that are valid for a **TestSuite** entity type.

|**Display Name** |**Name**        |**Referential constraint**  |**Referenced property** |
|-----------------|----------------|----------------------------|---------------------------|
|Project | `Project` | `ProjectSK` | `ProjectSK` | 
|Requirement Work Item | `RequirementWorkItem` | `RequirementWorkItemId` |`WorkItemId` | 
|Test Plan Work Item | `TestPlanWorkItem` | `TestPlanId` | `WorkItemId` |
|Test Suite Work Item | `TestSuiteWorkItem` | `TestSuiteId` | `WorkItemId` | 
 
### TestSuiteType enumerated type members 
 
The following members are defined for the `TestSuiteType` enumerated type.  

| Member name          | Value        | Display name        |  
|----------------------|--------------|---------------------|  
|`None`                  | 0            | None                |  
|`QueryBased`            | 1            | Query Based         |     
|`Static`                | 2            | Static              |      
|`RequirementBased`      | 3            | Requirement Based   |
 
## Related articles

- [Data model for Analytics](../extend-analytics/data-model-analytics-service.md)
- [What is Azure Test Plans?](../../test/overview.md) 
- [Test objects and terms](../../test/test-objects-overview.md) 
- [OData Analytics query guidelines](../extend-analytics/odata-query-guidelines.md)  
 