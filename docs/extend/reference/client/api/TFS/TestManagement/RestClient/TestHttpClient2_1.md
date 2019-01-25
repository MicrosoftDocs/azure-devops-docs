---
title: TFS/TestManagement/RestClient TestHttpClient2_1 API | Extensions for Azure DevOps Services
ms.assetid: eb43c2d7-b60f-5b02-3c85-eac5a884b779
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

[!INCLUDE [styleoverrides](../../../_data/style-overrides.md)]

# TestHttpClient2_1

[!INCLUDE [disclaimer](../../../_data/disclaimer.md)]



Module path: `TFS/TestManagement/RestClient`

### Initialization sample
``` javascript
  import RestClient = require("TFS/TestManagement/RestClient");

  // Get an instance of the client
  var client = RestClient.getClient();
    
  // Call a method on the client
  // e.g. client.getResource(...).then(...);
```

### Methods

* [addCustomFields()](#method_addCustomFields)
* [addTestCasesToSuite()](#method_addTestCasesToSuite)
* [addTestResultsToTestRun()](#method_addTestResultsToTestRun)
* [bulkUpdateTestResults()](#method_bulkUpdateTestResults)
* [cloneTestPlan()](#method_cloneTestPlan)
* [cloneTestSuite()](#method_cloneTestSuite)
* [createResultRetentionSettings()](#method_createResultRetentionSettings)
* [createTestConfiguration()](#method_createTestConfiguration)
* [createTestPlan()](#method_createTestPlan)
* [createTestResultAttachment()](#method_createTestResultAttachment)
* [createTestRun()](#method_createTestRun)
* [createTestRunAttachment()](#method_createTestRunAttachment)
* [createTestSettings()](#method_createTestSettings)
* [createTestSuite()](#method_createTestSuite)
* [createTestVariable()](#method_createTestVariable)
* [deleteResultRetentionSettings()](#method_deleteResultRetentionSettings)
* [deleteTestConfiguration()](#method_deleteTestConfiguration)
* [deleteTestRun()](#method_deleteTestRun)
* [deleteTestSettings()](#method_deleteTestSettings)
* [deleteTestSuite()](#method_deleteTestSuite)
* [deleteTestVariable()](#method_deleteTestVariable)
* [getActionResults()](#method_getActionResults)
* [getBugsLinkedToTestResult()](#method_getBugsLinkedToTestResult)
* [getBuildCodeCoverage()](#method_getBuildCodeCoverage)
* [getCodeCoverageSummary()](#method_getCodeCoverageSummary)
* [getPlanById()](#method_getPlanById)
* [getPlanCloneInformation()](#method_getPlanCloneInformation)
* [getPlans()](#method_getPlans)
* [getPoint()](#method_getPoint)
* [getPoints()](#method_getPoints)
* [getResultParameters()](#method_getResultParameters)
* [getResultRetentionSettings()](#method_getResultRetentionSettings)
* [getSuiteCloneInformation()](#method_getSuiteCloneInformation)
* [getSuitesByTestCaseId()](#method_getSuitesByTestCaseId)
* [getTestCaseById()](#method_getTestCaseById)
* [getTestCaseResultById()](#method_getTestCaseResultById)
* [getTestCaseResults()](#method_getTestCaseResults)
* [getTestCases()](#method_getTestCases)
* [getTestConfigurationById()](#method_getTestConfigurationById)
* [getTestConfigurations()](#method_getTestConfigurations)
* [getTestIteration()](#method_getTestIteration)
* [getTestIterations()](#method_getTestIterations)
* [getTestResultAttachmentContent()](#method_getTestResultAttachmentContent)
* [getTestResultAttachmentZip()](#method_getTestResultAttachmentZip)
* [getTestResultById()](#method_getTestResultById)
* [getTestResults()](#method_getTestResults)
* [getTestResultsByIds()](#method_getTestResultsByIds)
* [getTestResultsByQuery()](#method_getTestResultsByQuery)
* [getTestRunAttachmentContent()](#method_getTestRunAttachmentContent)
* [getTestRunAttachmentZip()](#method_getTestRunAttachmentZip)
* [getTestRunById()](#method_getTestRunById)
* [getTestRunCodeCoverage()](#method_getTestRunCodeCoverage)
* [getTestRunLogs()](#method_getTestRunLogs)
* [getTestRuns()](#method_getTestRuns)
* [getTestRunsByQuery()](#method_getTestRunsByQuery)
* [getTestRunStatistics()](#method_getTestRunStatistics)
* [getTestSettingsById()](#method_getTestSettingsById)
* [getTestSuiteById()](#method_getTestSuiteById)
* [getTestSuitesForPlan()](#method_getTestSuitesForPlan)
* [getTestVariable()](#method_getTestVariable)
* [getTestVariables()](#method_getTestVariables)
* [queryCustomFields()](#method_queryCustomFields)
* [queryFailureDetailsForBuild()](#method_queryFailureDetailsForBuild)
* [queryFailureDetailsForTestRun()](#method_queryFailureDetailsForTestRun)
* [queryReportForBuild()](#method_queryReportForBuild)
* [queryResultTrendForBuild()](#method_queryResultTrendForBuild)
* [queryTestResultRecentBugs()](#method_queryTestResultRecentBugs)
* [queryTestResultTrendReport()](#method_queryTestResultTrendReport)
* [removeTestCasesFromSuiteUrl()](#method_removeTestCasesFromSuiteUrl)
* [updateCodeCoverageSummary()](#method_updateCodeCoverageSummary)
* [updateResultRetentionSettings()](#method_updateResultRetentionSettings)
* [updateTestConfiguration()](#method_updateTestConfiguration)
* [updateTestPlan()](#method_updateTestPlan)
* [updateTestPoints()](#method_updateTestPoints)
* [updateTestResults()](#method_updateTestResults)
* [updateTestRun()](#method_updateTestRun)
* [updateTestSuite()](#method_updateTestSuite)
* [updateTestVariable()](#method_updateTestVariable)

<a name="method_addCustomFields"></a>
<h2 class='method'>addCustomFields()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.CustomTestFieldDefinition[]&gt; <b>addCustomFields</b>(newFields, project)
</pre>

### Parameters

* `newFields`: [Contracts.CustomTestFieldDefinition](../../../TFS/TestManagement/Contracts/CustomTestFieldDefinition.md)[]. 
* `project`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.CustomTestFieldDefinition](../../../TFS/TestManagement/Contracts/CustomTestFieldDefinition.md)[]&gt;

<a name="method_addTestCasesToSuite"></a>
<h2 class='method'>addTestCasesToSuite()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.SuiteTestCase[]&gt; <b>addTestCasesToSuite</b>(project, planId, suiteId, testCaseIds)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `planId`: number. 
* `suiteId`: number. 
* `testCaseIds`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.SuiteTestCase](../../../TFS/TestManagement/Contracts/SuiteTestCase.md)[]&gt;

<a name="method_addTestResultsToTestRun"></a>
<h2 class='method'>addTestResultsToTestRun()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TestCaseResult[]&gt; <b>addTestResultsToTestRun</b>(resultCreateModels, project, runId)
</pre>

### Parameters

* `resultCreateModels`: [Contracts.TestResultCreateModel](../../../TFS/TestManagement/Contracts/TestResultCreateModel.md)[]. 
* `project`: string. 
* `runId`: number. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TestCaseResult](../../../TFS/TestManagement/Contracts/TestCaseResult.md)[]&gt;

<a name="method_bulkUpdateTestResults"></a>
<h2 class='method'>bulkUpdateTestResults()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TestCaseResult[]&gt; <b>bulkUpdateTestResults</b>(resultUpdateModel, project, runId, resultIds)
</pre>

### Parameters

* `resultUpdateModel`: [Contracts.TestCaseResultUpdateModel](../../../TFS/TestManagement/Contracts/TestCaseResultUpdateModel.md). 
* `project`: string. 
* `runId`: number. 
* `resultIds`: number[]. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TestCaseResult](../../../TFS/TestManagement/Contracts/TestCaseResult.md)[]&gt;

<a name="method_cloneTestPlan"></a>
<h2 class='method'>cloneTestPlan()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.CloneOperationInformation&gt; <b>cloneTestPlan</b>(cloneRequestBody, project, sourcePlanId)
</pre>

### Parameters

* `cloneRequestBody`: [Contracts.TestPlanCloneRequest](../../../TFS/TestManagement/Contracts/TestPlanCloneRequest.md). 
* `project`: string. 
* `sourcePlanId`: number. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.CloneOperationInformation](../../../TFS/TestManagement/Contracts/CloneOperationInformation.md)&gt;

<a name="method_cloneTestSuite"></a>
<h2 class='method'>cloneTestSuite()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.CloneOperationInformation&gt; <b>cloneTestSuite</b>(cloneRequestBody, project, sourceSuiteId, planId)
</pre>

### Parameters

* `cloneRequestBody`: [Contracts.TestSuiteCloneRequest](../../../TFS/TestManagement/Contracts/TestSuiteCloneRequest.md). 
* `project`: string. 
* `sourceSuiteId`: number. 
* `planId`: number. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.CloneOperationInformation](../../../TFS/TestManagement/Contracts/CloneOperationInformation.md)&gt;

<a name="method_createResultRetentionSettings"></a>
<h2 class='method'>createResultRetentionSettings()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.ResultRetentionSettings&gt; <b>createResultRetentionSettings</b>(retentionSettings, project)
</pre>

### Parameters

* `retentionSettings`: [Contracts.ResultRetentionSettings](../../../TFS/TestManagement/Contracts/ResultRetentionSettings.md). 
* `project`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.ResultRetentionSettings](../../../TFS/TestManagement/Contracts/ResultRetentionSettings.md)&gt;

<a name="method_createTestConfiguration"></a>
<h2 class='method'>createTestConfiguration()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TestConfiguration&gt; <b>createTestConfiguration</b>(testConfiguration, project)
</pre>

### Parameters

* `testConfiguration`: [Contracts.TestConfiguration](../../../TFS/TestManagement/Contracts/TestConfiguration.md). 
* `project`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TestConfiguration](../../../TFS/TestManagement/Contracts/TestConfiguration.md)&gt;

<a name="method_createTestPlan"></a>
<h2 class='method'>createTestPlan()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TestPlan&gt; <b>createTestPlan</b>(testPlan, project)
</pre>

### Parameters

* `testPlan`: [Contracts.PlanUpdateModel](../../../TFS/TestManagement/Contracts/PlanUpdateModel.md). 
* `project`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TestPlan](../../../TFS/TestManagement/Contracts/TestPlan.md)&gt;

<a name="method_createTestResultAttachment"></a>
<h2 class='method'>createTestResultAttachment()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TestAttachmentReference&gt; <b>createTestResultAttachment</b>(attachmentRequestModel, project, runId, testCaseResultId)
</pre>

### Parameters

* `attachmentRequestModel`: [Contracts.TestAttachmentRequestModel](../../../TFS/TestManagement/Contracts/TestAttachmentRequestModel.md). 
* `project`: string. 
* `runId`: number. 
* `testCaseResultId`: number. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TestAttachmentReference](../../../TFS/TestManagement/Contracts/TestAttachmentReference.md)&gt;

<a name="method_createTestRun"></a>
<h2 class='method'>createTestRun()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TestRun&gt; <b>createTestRun</b>(testRun, project)
</pre>

### Parameters

* `testRun`: [Contracts.RunCreateModel](../../../TFS/TestManagement/Contracts/RunCreateModel.md). 
* `project`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TestRun](../../../TFS/TestManagement/Contracts/TestRun.md)&gt;

<a name="method_createTestRunAttachment"></a>
<h2 class='method'>createTestRunAttachment()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TestAttachmentReference&gt; <b>createTestRunAttachment</b>(attachmentRequestModel, project, runId)
</pre>

### Parameters

* `attachmentRequestModel`: [Contracts.TestAttachmentRequestModel](../../../TFS/TestManagement/Contracts/TestAttachmentRequestModel.md). 
* `project`: string. 
* `runId`: number. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TestAttachmentReference](../../../TFS/TestManagement/Contracts/TestAttachmentReference.md)&gt;

<a name="method_createTestSettings"></a>
<h2 class='method'>createTestSettings()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;number&gt; <b>createTestSettings</b>(testSettings, project)
</pre>

### Parameters

* `testSettings`: [Contracts.TestSettings](../../../TFS/TestManagement/Contracts/TestSettings.md). 
* `project`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;number&gt;

<a name="method_createTestSuite"></a>
<h2 class='method'>createTestSuite()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TestSuite[]&gt; <b>createTestSuite</b>(testSuite, project, planId, suiteId)
</pre>

### Parameters

* `testSuite`: [Contracts.SuiteCreateModel](../../../TFS/TestManagement/Contracts/SuiteCreateModel.md). 
* `project`: string. 
* `planId`: number. 
* `suiteId`: number. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TestSuite](../../../TFS/TestManagement/Contracts/TestSuite.md)[]&gt;

<a name="method_createTestVariable"></a>
<h2 class='method'>createTestVariable()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TestVariable&gt; <b>createTestVariable</b>(testVariable, project)
</pre>

### Parameters

* `testVariable`: [Contracts.TestVariable](../../../TFS/TestManagement/Contracts/TestVariable.md). 
* `project`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TestVariable](../../../TFS/TestManagement/Contracts/TestVariable.md)&gt;

<a name="method_deleteResultRetentionSettings"></a>
<h2 class='method'>deleteResultRetentionSettings()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;void&gt; <b>deleteResultRetentionSettings</b>(project)
</pre>

### Parameters

* `project`: string. Project ID or project name

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;void&gt;

<a name="method_deleteTestConfiguration"></a>
<h2 class='method'>deleteTestConfiguration()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;void&gt; <b>deleteTestConfiguration</b>(project, testConfigurationId)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `testConfigurationId`: number. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;void&gt;

<a name="method_deleteTestRun"></a>
<h2 class='method'>deleteTestRun()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;void&gt; <b>deleteTestRun</b>(project, runId)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `runId`: number. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;void&gt;

<a name="method_deleteTestSettings"></a>
<h2 class='method'>deleteTestSettings()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;void&gt; <b>deleteTestSettings</b>(project, testSettingsId)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `testSettingsId`: number. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;void&gt;

<a name="method_deleteTestSuite"></a>
<h2 class='method'>deleteTestSuite()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;void&gt; <b>deleteTestSuite</b>(project, planId, suiteId)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `planId`: number. 
* `suiteId`: number. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;void&gt;

<a name="method_deleteTestVariable"></a>
<h2 class='method'>deleteTestVariable()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;void&gt; <b>deleteTestVariable</b>(project, testVariableId)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `testVariableId`: number. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;void&gt;

<a name="method_getActionResults"></a>
<h2 class='method'>getActionResults()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TestActionResultModel[]&gt; <b>getActionResults</b>(project, runId, testCaseResultId, iterationId, actionPath)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `runId`: number. 
* `testCaseResultId`: number. 
* `iterationId`: number. 
* `actionPath`: string. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TestActionResultModel](../../../TFS/TestManagement/Contracts/TestActionResultModel.md)[]&gt;

<a name="method_getBugsLinkedToTestResult"></a>
<h2 class='method'>getBugsLinkedToTestResult()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.WorkItemReference[]&gt; <b>getBugsLinkedToTestResult</b>(project, runId, testCaseResultId)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `runId`: number. 
* `testCaseResultId`: number. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.WorkItemReference](../../../TFS/TestManagement/Contracts/WorkItemReference.md)[]&gt;

<a name="method_getBuildCodeCoverage"></a>
<h2 class='method'>getBuildCodeCoverage()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.BuildCoverage[]&gt; <b>getBuildCodeCoverage</b>(project, buildId, flags)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `buildId`: number. 
* `flags`: number. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.BuildCoverage](../../../TFS/TestManagement/Contracts/BuildCoverage.md)[]&gt;

<a name="method_getCodeCoverageSummary"></a>
<h2 class='method'>getCodeCoverageSummary()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.CodeCoverageSummary&gt; <b>getCodeCoverageSummary</b>(project, buildId, deltaBuildId)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `buildId`: number. 
* `deltaBuildId`: number. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.CodeCoverageSummary](../../../TFS/TestManagement/Contracts/CodeCoverageSummary.md)&gt;

<a name="method_getPlanById"></a>
<h2 class='method'>getPlanById()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TestPlan&gt; <b>getPlanById</b>(project, planId)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `planId`: number. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TestPlan](../../../TFS/TestManagement/Contracts/TestPlan.md)&gt;

<a name="method_getPlanCloneInformation"></a>
<h2 class='method'>getPlanCloneInformation()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.CloneOperationInformation&gt; <b>getPlanCloneInformation</b>(project, operationId, includeDetails)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `operationId`: number. 
* `includeDetails`: boolean. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.CloneOperationInformation](../../../TFS/TestManagement/Contracts/CloneOperationInformation.md)&gt;

<a name="method_getPlans"></a>
<h2 class='method'>getPlans()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TestPlan[]&gt; <b>getPlans</b>(project, owner, skip, top, includePlanDetails, filterActivePlans)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `owner`: string. Optional. 
* `skip`: number. Optional. 
* `top`: number. Optional. 
* `includePlanDetails`: boolean. Optional. 
* `filterActivePlans`: boolean. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TestPlan](../../../TFS/TestManagement/Contracts/TestPlan.md)[]&gt;

<a name="method_getPoint"></a>
<h2 class='method'>getPoint()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TestPoint&gt; <b>getPoint</b>(project, planId, suiteId, pointIds, witFields)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `planId`: number. 
* `suiteId`: number. 
* `pointIds`: number. 
* `witFields`: string. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TestPoint](../../../TFS/TestManagement/Contracts/TestPoint.md)&gt;

<a name="method_getPoints"></a>
<h2 class='method'>getPoints()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TestPoint[]&gt; <b>getPoints</b>(project, planId, suiteId, witFields, configurationId, testCaseId, testPointIds, includePointDetails, skip, top)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `planId`: number. 
* `suiteId`: number. 
* `witFields`: string. Optional. 
* `configurationId`: string. Optional. 
* `testCaseId`: string. Optional. 
* `testPointIds`: string. Optional. 
* `includePointDetails`: boolean. Optional. 
* `skip`: number. Optional. 
* `top`: number. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TestPoint](../../../TFS/TestManagement/Contracts/TestPoint.md)[]&gt;

<a name="method_getResultParameters"></a>
<h2 class='method'>getResultParameters()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TestResultParameterModel[]&gt; <b>getResultParameters</b>(project, runId, testCaseResultId, iterationId, paramName)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `runId`: number. 
* `testCaseResultId`: number. 
* `iterationId`: number. 
* `paramName`: string. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TestResultParameterModel](../../../TFS/TestManagement/Contracts/TestResultParameterModel.md)[]&gt;

<a name="method_getResultRetentionSettings"></a>
<h2 class='method'>getResultRetentionSettings()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.ResultRetentionSettings&gt; <b>getResultRetentionSettings</b>(project)
</pre>

### Parameters

* `project`: string. Project ID or project name

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.ResultRetentionSettings](../../../TFS/TestManagement/Contracts/ResultRetentionSettings.md)&gt;

<a name="method_getSuiteCloneInformation"></a>
<h2 class='method'>getSuiteCloneInformation()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.CloneOperationInformation&gt; <b>getSuiteCloneInformation</b>(project, operationId, includeDetails)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `operationId`: number. 
* `includeDetails`: boolean. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.CloneOperationInformation](../../../TFS/TestManagement/Contracts/CloneOperationInformation.md)&gt;

<a name="method_getSuitesByTestCaseId"></a>
<h2 class='method'>getSuitesByTestCaseId()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TestSuite[]&gt; <b>getSuitesByTestCaseId</b>(testCaseId)
</pre>

### Parameters

* `testCaseId`: number. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TestSuite](../../../TFS/TestManagement/Contracts/TestSuite.md)[]&gt;

<a name="method_getTestCaseById"></a>
<h2 class='method'>getTestCaseById()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.SuiteTestCase&gt; <b>getTestCaseById</b>(project, planId, suiteId, testCaseIds)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `planId`: number. 
* `suiteId`: number. 
* `testCaseIds`: number. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.SuiteTestCase](../../../TFS/TestManagement/Contracts/SuiteTestCase.md)&gt;

<a name="method_getTestCaseResultById"></a>
<h2 class='method'>getTestCaseResultById()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TestCaseResult&gt; <b>getTestCaseResultById</b>(project, runId, testCaseResultId, includeIterationDetails, includeAssociatedBugs)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `runId`: number. 
* `testCaseResultId`: number. 
* `includeIterationDetails`: boolean. 
* `includeAssociatedBugs`: boolean. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TestCaseResult](../../../TFS/TestManagement/Contracts/TestCaseResult.md)&gt;

<a name="method_getTestCaseResults"></a>
<h2 class='method'>getTestCaseResults()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TestCaseResult[]&gt; <b>getTestCaseResults</b>(project, runId, includeIterationDetails)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `runId`: number. 
* `includeIterationDetails`: boolean. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TestCaseResult](../../../TFS/TestManagement/Contracts/TestCaseResult.md)[]&gt;

<a name="method_getTestCases"></a>
<h2 class='method'>getTestCases()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.SuiteTestCase[]&gt; <b>getTestCases</b>(project, planId, suiteId)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `planId`: number. 
* `suiteId`: number. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.SuiteTestCase](../../../TFS/TestManagement/Contracts/SuiteTestCase.md)[]&gt;

<a name="method_getTestConfigurationById"></a>
<h2 class='method'>getTestConfigurationById()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TestConfiguration&gt; <b>getTestConfigurationById</b>(project, testConfigurationId)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `testConfigurationId`: number. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TestConfiguration](../../../TFS/TestManagement/Contracts/TestConfiguration.md)&gt;

<a name="method_getTestConfigurations"></a>
<h2 class='method'>getTestConfigurations()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TestConfiguration[]&gt; <b>getTestConfigurations</b>(project, skip, top)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `skip`: number. Optional. 
* `top`: number. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TestConfiguration](../../../TFS/TestManagement/Contracts/TestConfiguration.md)[]&gt;

<a name="method_getTestIteration"></a>
<h2 class='method'>getTestIteration()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TestIterationDetailsModel&gt; <b>getTestIteration</b>(project, runId, testCaseResultId, iterationId, includeActionResults)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `runId`: number. 
* `testCaseResultId`: number. 
* `iterationId`: number. 
* `includeActionResults`: boolean. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TestIterationDetailsModel](../../../TFS/TestManagement/Contracts/TestIterationDetailsModel.md)&gt;

<a name="method_getTestIterations"></a>
<h2 class='method'>getTestIterations()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TestIterationDetailsModel[]&gt; <b>getTestIterations</b>(project, runId, testCaseResultId, includeActionResults)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `runId`: number. 
* `testCaseResultId`: number. 
* `includeActionResults`: boolean. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TestIterationDetailsModel](../../../TFS/TestManagement/Contracts/TestIterationDetailsModel.md)[]&gt;

<a name="method_getTestResultAttachmentContent"></a>
<h2 class='method'>getTestResultAttachmentContent()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;ArrayBuffer&gt; <b>getTestResultAttachmentContent</b>(project, runId, testCaseResultId, attachmentId)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `runId`: number. 
* `testCaseResultId`: number. 
* `attachmentId`: number. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;ArrayBuffer&gt;

<a name="method_getTestResultAttachmentZip"></a>
<h2 class='method'>getTestResultAttachmentZip()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;ArrayBuffer&gt; <b>getTestResultAttachmentZip</b>(project, runId, testCaseResultId, attachmentId)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `runId`: number. 
* `testCaseResultId`: number. 
* `attachmentId`: number. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;ArrayBuffer&gt;

<a name="method_getTestResultById"></a>
<h2 class='method'>getTestResultById()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TestCaseResult[]&gt; <b>getTestResultById</b>(project, runId, testCaseResultId, detailsToInclude)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `runId`: number. 
* `testCaseResultId`: number. 
* `detailsToInclude`: [Contracts.ResultDetails](../../../TFS/TestManagement/Contracts/ResultDetails.md). Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TestCaseResult](../../../TFS/TestManagement/Contracts/TestCaseResult.md)[]&gt;

<a name="method_getTestResults"></a>
<h2 class='method'>getTestResults()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TestCaseResult[]&gt; <b>getTestResults</b>(project, runId, detailsToInclude, skip, top)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `runId`: number. 
* `detailsToInclude`: [Contracts.ResultDetails](../../../TFS/TestManagement/Contracts/ResultDetails.md). Optional. 
* `skip`: number. Optional. 
* `top`: number. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TestCaseResult](../../../TFS/TestManagement/Contracts/TestCaseResult.md)[]&gt;

<a name="method_getTestResultsByIds"></a>
<h2 class='method'>getTestResultsByIds()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TestCaseResult[]&gt; <b>getTestResultsByIds</b>(ids, project, fields)
</pre>

### Parameters

* `ids`: [Contracts.TestCaseResultIdentifier](../../../TFS/TestManagement/Contracts/TestCaseResultIdentifier.md)[]. 
* `project`: string. 
* `fields`: string[]. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TestCaseResult](../../../TFS/TestManagement/Contracts/TestCaseResult.md)[]&gt;

<a name="method_getTestResultsByQuery"></a>
<h2 class='method'>getTestResultsByQuery()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TestCaseResult[]&gt; <b>getTestResultsByQuery</b>(query, project, includeResultDetails, includeIterationDetails, skip, top)
</pre>

### Parameters

* `query`: [Contracts.QueryModel](../../../TFS/TestManagement/Contracts/QueryModel.md). 
* `project`: string. 
* `includeResultDetails`: boolean. Optional. 
* `includeIterationDetails`: boolean. Optional. 
* `skip`: number. Optional. 
* `top`: number. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TestCaseResult](../../../TFS/TestManagement/Contracts/TestCaseResult.md)[]&gt;

<a name="method_getTestRunAttachmentContent"></a>
<h2 class='method'>getTestRunAttachmentContent()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;ArrayBuffer&gt; <b>getTestRunAttachmentContent</b>(project, runId, attachmentId)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `runId`: number. 
* `attachmentId`: number. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;ArrayBuffer&gt;

<a name="method_getTestRunAttachmentZip"></a>
<h2 class='method'>getTestRunAttachmentZip()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;ArrayBuffer&gt; <b>getTestRunAttachmentZip</b>(project, runId, attachmentId)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `runId`: number. 
* `attachmentId`: number. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;ArrayBuffer&gt;

<a name="method_getTestRunById"></a>
<h2 class='method'>getTestRunById()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TestRun&gt; <b>getTestRunById</b>(project, runId)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `runId`: number. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TestRun](../../../TFS/TestManagement/Contracts/TestRun.md)&gt;

<a name="method_getTestRunCodeCoverage"></a>
<h2 class='method'>getTestRunCodeCoverage()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TestRunCoverage[]&gt; <b>getTestRunCodeCoverage</b>(project, runId, flags)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `runId`: number. 
* `flags`: number. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TestRunCoverage](../../../TFS/TestManagement/Contracts/TestRunCoverage.md)[]&gt;

<a name="method_getTestRunLogs"></a>
<h2 class='method'>getTestRunLogs()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TestMessageLogDetails[]&gt; <b>getTestRunLogs</b>(project, runId)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `runId`: number. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TestMessageLogDetails](../../../TFS/TestManagement/Contracts/TestMessageLogDetails.md)[]&gt;

<a name="method_getTestRuns"></a>
<h2 class='method'>getTestRuns()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TestRun[]&gt; <b>getTestRuns</b>(project, buildUri, owner, tmiRunId, planId, includeRunDetails, automated, skip, top)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `buildUri`: string. Optional. 
* `owner`: string. Optional. 
* `tmiRunId`: string. Optional. 
* `planId`: number. Optional. 
* `includeRunDetails`: boolean. Optional. 
* `automated`: boolean. Optional. 
* `skip`: number. Optional. 
* `top`: number. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TestRun](../../../TFS/TestManagement/Contracts/TestRun.md)[]&gt;

<a name="method_getTestRunsByQuery"></a>
<h2 class='method'>getTestRunsByQuery()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TestRun[]&gt; <b>getTestRunsByQuery</b>(query, project, includeRunDetails, skip, top)
</pre>

### Parameters

* `query`: [Contracts.QueryModel](../../../TFS/TestManagement/Contracts/QueryModel.md). 
* `project`: string. 
* `includeRunDetails`: boolean. Optional. 
* `skip`: number. Optional. 
* `top`: number. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TestRun](../../../TFS/TestManagement/Contracts/TestRun.md)[]&gt;

<a name="method_getTestRunStatistics"></a>
<h2 class='method'>getTestRunStatistics()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TestRunStatistic&gt; <b>getTestRunStatistics</b>(project, runId)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `runId`: number. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TestRunStatistic](../../../TFS/TestManagement/Contracts/TestRunStatistic.md)&gt;

<a name="method_getTestSettingsById"></a>
<h2 class='method'>getTestSettingsById()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TestSettings&gt; <b>getTestSettingsById</b>(project, testSettingsId)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `testSettingsId`: number. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TestSettings](../../../TFS/TestManagement/Contracts/TestSettings.md)&gt;

<a name="method_getTestSuiteById"></a>
<h2 class='method'>getTestSuiteById()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TestSuite&gt; <b>getTestSuiteById</b>(project, planId, suiteId, includeChildSuites)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `planId`: number. 
* `suiteId`: number. 
* `includeChildSuites`: boolean. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TestSuite](../../../TFS/TestManagement/Contracts/TestSuite.md)&gt;

<a name="method_getTestSuitesForPlan"></a>
<h2 class='method'>getTestSuitesForPlan()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TestSuite[]&gt; <b>getTestSuitesForPlan</b>(project, planId, includeSuites, skip, top, asTreeView)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `planId`: number. 
* `includeSuites`: boolean. Optional. 
* `skip`: number. Optional. 
* `top`: number. Optional. 
* `asTreeView`: boolean. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TestSuite](../../../TFS/TestManagement/Contracts/TestSuite.md)[]&gt;

<a name="method_getTestVariable"></a>
<h2 class='method'>getTestVariable()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TestVariable&gt; <b>getTestVariable</b>(project, testVariableId)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `testVariableId`: number. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TestVariable](../../../TFS/TestManagement/Contracts/TestVariable.md)&gt;

<a name="method_getTestVariables"></a>
<h2 class='method'>getTestVariables()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TestVariable[]&gt; <b>getTestVariables</b>(project, skip, top)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `skip`: number. Optional. 
* `top`: number. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TestVariable](../../../TFS/TestManagement/Contracts/TestVariable.md)[]&gt;

<a name="method_queryCustomFields"></a>
<h2 class='method'>queryCustomFields()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.CustomTestFieldDefinition[]&gt; <b>queryCustomFields</b>(project, scopeFilter)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `scopeFilter`: [Contracts.CustomTestFieldScope](../../../TFS/TestManagement/Contracts/CustomTestFieldScope.md). 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.CustomTestFieldDefinition](../../../TFS/TestManagement/Contracts/CustomTestFieldDefinition.md)[]&gt;

<a name="method_queryFailureDetailsForBuild"></a>
<h2 class='method'>queryFailureDetailsForBuild()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TestFailuresAnalysis&gt; <b>queryFailureDetailsForBuild</b>(build, project, sourceWorkflow, buildToCompare)
</pre>

### Parameters

* `build`: [Contracts.BuildReference](../../../TFS/TestManagement/Contracts/BuildReference.md). 
* `project`: string. 
* `sourceWorkflow`: string. 
* `buildToCompare`: [Contracts.BuildReference](../../../TFS/TestManagement/Contracts/BuildReference.md). 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TestFailuresAnalysis](../../../TFS/TestManagement/Contracts/TestFailuresAnalysis.md)&gt;

<a name="method_queryFailureDetailsForTestRun"></a>
<h2 class='method'>queryFailureDetailsForTestRun()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TestFailuresAnalysis&gt; <b>queryFailureDetailsForTestRun</b>(project, testRunId)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `testRunId`: number. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TestFailuresAnalysis](../../../TFS/TestManagement/Contracts/TestFailuresAnalysis.md)&gt;

<a name="method_queryReportForBuild"></a>
<h2 class='method'>queryReportForBuild()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TestReport&gt; <b>queryReportForBuild</b>(project, buildId, sourceWorkflow, includeFailureDetails, buildToCompare)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `buildId`: number. 
* `sourceWorkflow`: string. 
* `includeFailureDetails`: boolean. 
* `buildToCompare`: [Contracts.BuildReference](../../../TFS/TestManagement/Contracts/BuildReference.md). 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TestReport](../../../TFS/TestManagement/Contracts/TestReport.md)&gt;

<a name="method_queryResultTrendForBuild"></a>
<h2 class='method'>queryResultTrendForBuild()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.AggregatedResultsForBuild[]&gt; <b>queryResultTrendForBuild</b>(filter, project, buildCount)
</pre>

### Parameters

* `filter`: [Contracts.TestResultTrendFilter](../../../TFS/TestManagement/Contracts/TestResultTrendFilter.md). 
* `project`: string. 
* `buildCount`: number. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.AggregatedResultsForBuild](../../../TFS/TestManagement/Contracts/AggregatedResultsForBuild.md)[]&gt;

<a name="method_queryTestResultRecentBugs"></a>
<h2 class='method'>queryTestResultRecentBugs()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.WorkItemReference[]&gt; <b>queryTestResultRecentBugs</b>(project, testRunId, testResultId, recentDays)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `testRunId`: number. 
* `testResultId`: number. 
* `recentDays`: number. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.WorkItemReference](../../../TFS/TestManagement/Contracts/WorkItemReference.md)[]&gt;

<a name="method_queryTestResultTrendReport"></a>
<h2 class='method'>queryTestResultTrendReport()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TestCaseResult[]&gt; <b>queryTestResultTrendReport</b>(project, testRunId, testResultId, historyDays, top)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `testRunId`: number. 
* `testResultId`: number. 
* `historyDays`: number. Optional. 
* `top`: number. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TestCaseResult](../../../TFS/TestManagement/Contracts/TestCaseResult.md)[]&gt;

<a name="method_removeTestCasesFromSuiteUrl"></a>
<h2 class='method'>removeTestCasesFromSuiteUrl()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;void&gt; <b>removeTestCasesFromSuiteUrl</b>(project, planId, suiteId, testCaseIds)
</pre>

### Parameters

* `project`: string. Project ID or project name
* `planId`: number. 
* `suiteId`: number. 
* `testCaseIds`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;void&gt;

<a name="method_updateCodeCoverageSummary"></a>
<h2 class='method'>updateCodeCoverageSummary()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;void&gt; <b>updateCodeCoverageSummary</b>(coverageData, project, buildId)
</pre>

### Parameters

* `coverageData`: [Contracts.CodeCoverageData](../../../TFS/TestManagement/Contracts/CodeCoverageData.md). 
* `project`: string. 
* `buildId`: number. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;void&gt;

<a name="method_updateResultRetentionSettings"></a>
<h2 class='method'>updateResultRetentionSettings()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.ResultRetentionSettings&gt; <b>updateResultRetentionSettings</b>(retentionSettings, project)
</pre>

### Parameters

* `retentionSettings`: [Contracts.ResultRetentionSettings](../../../TFS/TestManagement/Contracts/ResultRetentionSettings.md). 
* `project`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.ResultRetentionSettings](../../../TFS/TestManagement/Contracts/ResultRetentionSettings.md)&gt;

<a name="method_updateTestConfiguration"></a>
<h2 class='method'>updateTestConfiguration()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TestConfiguration&gt; <b>updateTestConfiguration</b>(testConfiguration, project, testConfigurationId)
</pre>

### Parameters

* `testConfiguration`: [Contracts.TestConfiguration](../../../TFS/TestManagement/Contracts/TestConfiguration.md). 
* `project`: string. 
* `testConfigurationId`: number. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TestConfiguration](../../../TFS/TestManagement/Contracts/TestConfiguration.md)&gt;

<a name="method_updateTestPlan"></a>
<h2 class='method'>updateTestPlan()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TestPlan&gt; <b>updateTestPlan</b>(planUpdateModel, project, planId)
</pre>

### Parameters

* `planUpdateModel`: [Contracts.PlanUpdateModel](../../../TFS/TestManagement/Contracts/PlanUpdateModel.md). 
* `project`: string. 
* `planId`: number. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TestPlan](../../../TFS/TestManagement/Contracts/TestPlan.md)&gt;

<a name="method_updateTestPoints"></a>
<h2 class='method'>updateTestPoints()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TestPoint[]&gt; <b>updateTestPoints</b>(pointUpdateModel, project, planId, suiteId, pointIds)
</pre>

### Parameters

* `pointUpdateModel`: [Contracts.PointUpdateModel](../../../TFS/TestManagement/Contracts/PointUpdateModel.md). 
* `project`: string. 
* `planId`: number. 
* `suiteId`: number. 
* `pointIds`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TestPoint](../../../TFS/TestManagement/Contracts/TestPoint.md)[]&gt;

<a name="method_updateTestResults"></a>
<h2 class='method'>updateTestResults()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TestCaseResult[]&gt; <b>updateTestResults</b>(resultUpdateModels, project, runId)
</pre>

### Parameters

* `resultUpdateModels`: [Contracts.TestCaseResultUpdateModel](../../../TFS/TestManagement/Contracts/TestCaseResultUpdateModel.md)[]. 
* `project`: string. 
* `runId`: number. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TestCaseResult](../../../TFS/TestManagement/Contracts/TestCaseResult.md)[]&gt;

<a name="method_updateTestRun"></a>
<h2 class='method'>updateTestRun()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TestRun&gt; <b>updateTestRun</b>(runUpdateModel, project, runId)
</pre>

### Parameters

* `runUpdateModel`: [Contracts.RunUpdateModel](../../../TFS/TestManagement/Contracts/RunUpdateModel.md). 
* `project`: string. 
* `runId`: number. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TestRun](../../../TFS/TestManagement/Contracts/TestRun.md)&gt;

<a name="method_updateTestSuite"></a>
<h2 class='method'>updateTestSuite()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TestSuite&gt; <b>updateTestSuite</b>(suiteUpdateModel, project, planId, suiteId)
</pre>

### Parameters

* `suiteUpdateModel`: [Contracts.SuiteUpdateModel](../../../TFS/TestManagement/Contracts/SuiteUpdateModel.md). 
* `project`: string. 
* `planId`: number. 
* `suiteId`: number. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TestSuite](../../../TFS/TestManagement/Contracts/TestSuite.md)&gt;

<a name="method_updateTestVariable"></a>
<h2 class='method'>updateTestVariable()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TestVariable&gt; <b>updateTestVariable</b>(testVariable, project, testVariableId)
</pre>

### Parameters

* `testVariable`: [Contracts.TestVariable](../../../TFS/TestManagement/Contracts/TestVariable.md). 
* `project`: string. 
* `testVariableId`: number. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TestVariable](../../../TFS/TestManagement/Contracts/TestVariable.md)&gt;

