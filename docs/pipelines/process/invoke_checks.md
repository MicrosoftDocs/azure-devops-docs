---
title: Using Invoke Azure Function / REST API checks
description: Use Invoke Azure Function / REST API checks to determine when a deployment stage can run
ms.topic: conceptual
ms.author: sandrica
author: silviuandrica
ms.date: 07/13/2022
monikerRange: ">= azure-devops-2020"
---

# Invoke Azure Function / REST API checks

The Invoke Azure Function / REST API Checks allow you to write code to decide if a specific pipeline stage is allowed to access a protected resource or not. These checks can run in two modes:
- **Asynchronous (Recommended)**: push mode, in which Azure DevOps awaits for the Azure Function / REST API implementation to call back into Azure DevOps with a stage access decision
- **Synchronous**: poll mode, in which Azure DevOps periodically calls the Azure Function / REST API to get a stage access decision

In the rest of this guide, we'll refer to Azure Function / REST API Checks as simply checks.

The recommended way to use checks is in asynchronous mode. This mode offers you the highest level of control over the check logic, makes it easy to reason about what state the system is in, and decouples Azure Pipelines from your checks implementation, providing the best scalability. All synchronous checks can be implemented using the asynchronous checks mode.

## Asynchronous checks

In asynchronous mode, Azure DevOps makes a call to the Azure Function / REST API check and awaits a callback with the resource access decision. There's no open HTTP connection between Azure DevOps and your check implementation during the waiting period. 

The rest of this section talks about Azure Function checks, but unless otherwise noted, the guidance applies to Invoke REST API checks as well.

### Recommended implementation of asynchronous checks

The recommended asynchronous mode has two communication steps:
1. **Deliver the check payload**. Azure Pipelines makes an HTTP call to your Azure Function / REST API _only_ to deliver the check payload, and _not_ to receive a decision on the spot. Your function should just acknowledge receipt of the information and terminate the HTTP connection with Azure DevOps. Your check implementation should process the HTTP request within 3 seconds.
1. **Deliver access decision through a callback**. Your check should run asynchronously, evaluate the condition necessary for the pipeline to access the protected resource (possibly doing multiple evaluations at different points in time). Once it reaches a final decision, your Azure Function makes an HTTP REST call into Azure DevOps to communicate the decision. At any point in time, there should be a single open HTTP connection between Azure DevOps and your check implementation. Doing so saves resources on both your Azure Function side and on Azure Pipelines's side.

If a check passes, then the pipeline is allowed access to a protected resource and stage deployment can proceed. If a check fails, then the stage fails. If there are multiple checks in a single stage, all need to pass before access to protected resources is allowed, but a single failure is enough to fail the stage.

The recommended implementation of the async mode for a single Azure Function check is depicted in the following diagram.

:::image type="content" source="media/checks/async_checks.png" alt-text="The recommended implementation of the async mode for a single Azure Function check.":::

The steps in the diagram are:
1. Check Delivery. Azure Pipelines prepares to deploy a pipeline stage and requires access to a protected resource. It invokes the corresponding Azure Function check and expects receipt confirmation, by the call ending with an HTTP 200 status code. Stage deployment is paused pending a decision.
2. Check Evaluation. This step happens inside your Azure Function implementation, which runs on your own Azure resources and the code of which is completely under your control. We recommend your Azure Function follow these steps:
   - 2.1 Start an _async_ task and return HTTP status code `200`
   - 2.2 Enter an inner loop, in which it can do multiple condition evaluations
   - 2.3 Evaluate the access conditions
   - 2.4 If it can't reach a final decision, reschedule a reevaluation of the conditions for a later point, then go to step 2.3
1. Decision Communication. The Azure function calls back into Azure Pipelines with the access decision. Stage deployment can proceed

### Recommended configuration for asynchronous checks

In the Azure Function / REST API check configuration panel, make sure you:
- Selected _Callback_ for the _Completion event_
- Set _Time between evaluations (minutes)_ to _0_

Setting the _Time between evaluations_ to a non-zero value means the check decision (pass / fail) isn't final. The check will be reevaluated until all other Approvals & Checks reach a final state. 

> [!NOTE]
> In the near future, the _Time between evaluations_ will be removed, and a value of 0 will be used instead.

### Pass pipeline run information to checks

When configuring the check, you can specify the pipeline run information you wish to send to your check. At a minimum, you should send:
- `"PlanUrl": "$(system.CollectionUri)"` 
- `"ProjectId": "$(system.TeamProjectId)"`
- `"HubName": "$(system.HostType)"` 
- `"PlanId": "$(system.PlanId)"` 
- `"JobId": "$(system.JobId)"` 
- `"TaskInstanceId": "$(system.TaskInstanceId)"` 
- `"AuthToken": "$(system.AccessToken)"`

These key-value pairs are set, by default, in the Headers of the REST call made by Azure Pipelines.

You can use `AuthToken` to make calls into Azure DevOps, such as when your check will call back with a decision.  The `AuthToken` is restricted to the scope of the pipeline run from which the check call was made.

### Send a decision back to Azure DevOps

Your check must use the following REST API endpoint to communicate a decision back to Azure Pipelines:
- `POST {PlanUri}/{ProjectId}/_apis/distributedtask/hubs/{HubName}/plans/{PlanId}/events?api-version=2.0-preview.1`
- Headers: `Basic: {AuthToken}`
- Body:
```json
{
    "name": "TaskCompleted",
    "taskId": "{TaskInstanceId}",
    "jobId": "{JobId}",
    "result": "succeeded|failed"
}
```
 
### Send status updates to Azure DevOps from checks

You can provide status updates to Azure Pipelines users from within your checks using Azure Pipelines REST APIs. This functionality is useful, for example, if you wish to let users know the check is waiting on an external action, such as someone needs to approve a ServiceNow ticket.

The steps to send status updates are:
1. Create a task log, by making an authenticated HTTP POST request to `{planUri}/{projectId}/_apis/distributedtask/hubs/{hubName}/plans/{planId}/logs?api-version=4.1"` with body `{"path":"logs\\{taskInstanceId}"}`
1. Append to task log, by making an authenticated HTTP POST request to `{planUri}/{projectId}/_apis/distributedtask/hubs/{hubName}/plans/{planId}/logs/{taskLogId}?api-version=4.1` with the body containing log messages stream data
1. Update timeline record, by making an authenticated HTTP PATCH request to `{planUri}/{projectId}/_apis/distributedtask/hubs/{hubName}/plans/{planId}/timelines/{timelineId}/records?api-version=4.1` with body `{"value":[{"id": taskInstanceId, "log": taskLogObject}],"count":1}`

### Examples

#### Basic Azure Function check

In this [basic example](https://github.com/microsoft/azure-pipelines-extensions/tree/master/ServerTaskHelper/AzureFunctionBasicHandler), the Azure Function checks that the invoking pipeline has run a static analysis task prior to granting access to a protected resource.

The Azure Function goes through the following steps:
1. Confirms the receipt of the check payload
1. Sends a status update to Azure Pipelines that the check started
1. Uses `{AuthToken}` to make a callback into Azure Pipelines to retrieve the pipeline run's [Timeline]() entry
1. Checks if the Timeline contains a task with `"id": "sadada"` (the static analysis task)
1. Sends a status update with the result of the search
1. Sends a check decision to Azure Pipelines 

You can download this example from [GitHub]().

To use this Azure Function check, you need to ensure that you specify the following Headers when configuring the check:
```json
{
"Content-Type":"application/json", 
"PlanUrl": "$(system.CollectionUri)", 
"ProjectId": "$(system.TeamProjectId)", 
"HubName": "$(system.HostType)", 
"PlanId": "$(system.PlanId)", 
"JobId": "$(system.JobId)", 
"TimelineId": "$(system.TimelineId)", 
"TaskInstanceId": "$(system.TaskInstanceId)", 
"AuthToken": "$(system.AccessToken)",
"BuildId": "$(build.BuildId)"
}
```

#### Advanced Azure Function check

In this [advanced example](https://github.com/microsoft/azure-pipelines-extensions/tree/master/ServerTaskHelper/AzureFunctionAdvancedHandler), the Azure Function checks that the Azure Boards work item referenced in the commit message that triggered the pipeline run is in the correct state.

The Azure Function goes through the following steps:
1. Confirms the receipt of the check payload
1. Sends a status update to Azure Pipelines that the check started
1. Uses `{AuthToken}` to make a callback into Azure Pipelines to retrieve the state of the Azure Boards work item referenced in the commit message that triggered the pipeline run
1. Checks if the work item is in the `Completed` state
1. Sends a status update with the result of the check
1. If the work item isn't in the `Completed` state, it reschedules another evaluation in 5 minutes
1. Once the work item is in the correct state, it sends a positive decision to Azure Pipelines

You can download this example from [GitHub]().

To use this Azure Function check, you need to ensure that you specify the following Headers when configuring the check:
```json
{
"Content-Type":"application/json", 
"PlanUrl": "$(system.CollectionUri)", 
"ProjectId": "$(system.TeamProjectId)", 
"HubName": "$(system.HostType)", 
"PlanId": "$(system.PlanId)", 
"JobId": "$(system.JobId)", 
"TimelineId": "$(system.TimelineId)", 
"TaskInstanceId": "$(system.TaskInstanceId)", 
"AuthToken": "$(system.AccessToken)",
"SourceVersionMessage": "$(build.SourceVersionMessage)"
}
```

### Error handling

Azure Pipelines attempts at most 10 times to deliver the check payload to your Azure Function / REST API check. A successful delivery is defined as an HTTP 20x code received within 3 seconds. When the limit is reached without a successful delivery, the check is considered failed, and the associated stage will fail, too. The retry interval is non-deterministic and non-configurable.

If your check doesn't call back into Azure Pipelines within the configured timeout, the associated stage will be skipped. Stages depending on it will be skipped as well.

## Synchronous checks

In synchronous mode, Azure DevOps makes a call to the Azure Function / REST API check to get an immediate decision whether access to a protected resource is permitted or not. 

The implementation of the sync mode for a single Azure Function check is depicted in the following diagram.

:::image type="content" source="media/checks/sync_checks.png" alt-text="The implementation of the sync mode for a single Azure Function check.":::

The steps are:
1. Azure Pipelines prepares to deploy a pipeline stage and requires access to a protected resource
1. It enters an inner loop in which:
  - 2.1. Azure Pipelines invokes the corresponding Azure Function check and waits for a decision
  - 2.2. Your Azure Function evaluates the conditions necessary to permit access and returns a decision
  - 2.3. If the Azure Function response body doesn't satisfy the _Success criteria_ you defined and _Time between evaluations_ is non-zero, Azure Pipelines reschedules another check evaluation after _Time between evaluations_

### Configure synchronous checks

To use the synchronous mode for the Azure Function / REST API, in the check configuration panel, make sure you:
- Selected _ApiResponse_ for the _Completion event_ under _Advanced_
- Specified the _Success criteria_ that define when to pass the check based on the check's response body
- Set _Time between evaluations_ to _0_ under _Control options_
- Set _Timeout_ to how long you wish to wait for a check to succeed. If there's no positive decision and _Timeout_ is reached, the corresponding pipeline stage will be skipped

The _Time between evaluations_ setting defines how long the check's decision is valid. A value of 0 means the decision is final. A non-zero value means the check will be retried after the configured interval, when its decision is negative. When [multiple Approvals and Checks](approvals.md#multiple-approvals-and-checks) are running, the check will be retried regardless of decision.

The maximum number of evaluations is defined by the ratio between the _Timeout_ and _Time between evaluations_ values. We recommend you ensure this ratio is at most 10.

> [!NOTE]
> In the near future, Azure Pipelines will enforce there be at most 10 check retries.

### Pass pipeline run information to checks

When configuring the check, you can specify the pipeline run information you wish to send to your Azure Function / REST API check. By default, Azure Pipeline adds the following information in the Headers of the HTTP call it makes.
- `"PlanUrl": "$(system.CollectionUri)"` 
- `"ProjectId": "$(system.TeamProjectId)"`
- `"HubName": "$(system.HostType)"` 
- `"PlanId": "$(system.PlanId)"` 
- `"JobId": "$(system.JobId)"` 
- `"TaskInstanceId": "$(system.TaskInstanceId)"` 
- `"AuthToken": "$(system.AccessToken)"`

We don't recommend making calls into Azure DevOps in synchronous mode, because it will most likely cause your check to take more than 3 seconds to reply, so the check will fail.

### Error handling

For each check instance, Azure Pipelines attempts at most X times to obtain a decision, regardless of the returned HTTP status code. If your check takes more than 3 seconds to return, Azure Pipelines considers the attempt as failed. When the limit is reached without a positive decision, the check is considered failed, and the associated stage will fail, too.

## When to use asynchronous vs synchronous checks

Lets look at some example use cases and what are the recommended type of checks to use.

### External information must be correct
Say you have a Service Connection to a production resource, and you wish to ensure that access to it's permitted only if the information in a ServiceNow ticket is correct. In this case, the flow would be as follows:
- You add an _asynchronous_ Azure Function check that verifies the correctness of the ServiceNow ticket
- When a pipeline that wants to use the Service Connection runs:
    - Azure Pipelines calls your check function
    - If the information is incorrect, the check returns a negative decision. Assume this outcome
    - The pipeline stage fails
    - You update the information in the ServiceNow ticket
    - You restart the failed stage
    - The check runs again and this time it succeeds
    - The pipeline run continues

### External approval must be granted
Say you have a Service Connection to a production resource, and you wish to ensure that access to it's permitted only after an administrator approved a ServiceNow ticket. In this case, the flow would be as follows:
- You add an _asynchronous_ Azure Function check that verifies the ServiceNow ticket has been approved
- When a pipeline that wants to use the Service Connection runs:
    - Azure Pipelines calls your check function.
    - If the ServiceNow ticket isn't approved, the Azure Function sends an update to Azure Pipelines, and reschedules itself to check the state of the ticket in 15 minutes
    - Once the ticket is approved, the check calls back into Azure Pipelines with a positive decision
    - The pipeline run continues

### Development process was followed
Say you have a Service Connection to a production resource, and you wish to ensure that access to it's permitted only if the code coverage is above 80%. In this case, the flow would be as follows:
- You write your pipeline in such a way that stage failures cause the build to fail
- You add an _asynchronous_ Azure Function check that verifies the code coverage for the associated pipeline run
- When a pipeline that wants to use the Service Connection runs:
    - Azure Pipelines calls your check function
    - If the code coverage condition isn't met, the check returns a negative decision. Assume this outcome
    - The check failure causes your stage to fail, which causes your pipeline run to fail
- The engineering team adds the necessary unit tests to reach 80% code coverage
- A new pipeline run is triggered, and this time, the check passes
    - The pipeline run continues

### Performance criteria must be met
Say you deploy new versions of your system in multiple steps, starting with a canary deployment. You wish to ensure your canary deployment's performance is adequate. In this case, the flow would be as follows:
- You add an _asynchronous_ Azure Function check 
- When a pipeline that wants to use the Service Connection runs:
    - Azure Pipelines calls your check function
    - The check starts a monitor of the canary deployment's performance
    - The check schedules multiple evaluation checkpoints, to see how the performance evolved
    - Once you gain enough confidence in the canary deployment's performance, your Azure Function calls back into Azure Pipelines with a positive decision
    - The pipeline run continues

### Deployment reason must be valid
Say you have a Service Connection to a production environment resource, and you wish to ensure that access to it happens only for manually queued builds. In this case, the flow would be as follows:
- You add a _synchronous_ Azure Function check that verifies that `Build.Reason` for the pipeline run is `Manual`
- You configure the Azure Function check to pass `Build.Reason` in its Headers
- You set the check's _Time between evaluations_ to _0_, so failure or pass is final and no reevaluation is necessary
- When a pipeline that wants to use the Service Connection runs:
    - Azure Pipelines calls your check function
    - If the reason is other than `Manual`, the check fails, and the pipeline run fails

## Multiple checks

Before Azure Pipelines deploys a stage in a pipeline run, multiple Checks may need to pass. A protected resource may have one or more Checks associated to it. A stage may use multiple protected resources. Azure Pipelines collects all the Checks associated to each protected resource used in a stage and evaluates them concurrently.

A pipeline run is allowed to deploy to a stage only when _all_ Checks pass at the same time. A single final negative decision causes the pipeline to be denied access and the stage to fail.

When you use checks in the recommended way (asynchronous, with final states) makes their access decisions final, and eases understanding the state of the system.

Check out the [Multiple Approvals and Checks](approvals.md#multiple-approvals-and-checks) section for examples.

## Learn more
- [Approvals and Checks](approvals.md)
- [Invoke Azure Function Task](../tasks/deploy/azure-function-app.md)
- [Invoke REST API Task](../tasks/utility/http-rest-api.md)
