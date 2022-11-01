---
title: Using Invoke Azure Function / REST API Checks
description: Use Invoke Azure Function / REST API Checks to determine when a deployment stage can run
ms.topic: conceptual
ms.author: sandrica
author: silviuandrica
ms.date: 07/13/2022
monikerRange: ">= azure-devops-2020"
---

# Invoke Azure Function / REST API Checks

The Invoke Azure Function / REST API Checks allow you to write code to decide if a specific pipeline stage is allowed to access a protected resource or not. These checks can run in two modes:
- Asynchronous (Recommended): push mode, in which Azure DevOps awaits for the Azure Function / REST API implementation to call back into Azure DevOps with a stage access decision
- Synchronous: poll mode, in which Azure DevOps periodically calls the Azure Function / REST API to get a stage access decision

## When to Use Asynchronous vs Synchronous Azure Function / REST API Checks

The recommended way to use checks is in asynchronous mode, because it offers you the highest level of control over the check logic and provides the best Azure Pipelines scalability. In general, all synchronous checks can be implemented using the asynchronous checks mode, as well.

Lets look at some example use cases.

### External Dependency Must Be Satisfied
Say you have a Service Connection to a production resource, and you wish to ensure that access to it happens only after an administrator approved a ServiceNow ticket. In this case, you should:
- Add an _asynchronous_ Azure Function check that verifies the ServiceNow ticket has been approved.
- If it is not, the check sends an update to Azure Pipelines and reschedules itself to check the state of the ticket after 15 minutes.
- Once the ticket is approved, the check calls back into Azure Pipelines with a positive decision.

### Performance Criteria Must Be Met
Say you deploy new versions of your system in multiple steps, starting with a canary deployment. You wish to ensure your canary deployment's performance is adequate. In this case, you should:
- Add an _asynchronous_ Azure Function check 
- The check starts a monitor of the canary deployment's performance.
- Schedule multiple evaluation checkpoints in your Azure Function, to evaluate performance.
- Once your evaluation gives you enough confidence, your Azure Function calls back into Azure Pipelines with a positive decision.

### Deployment Reason Must Be Valid
Say you have a Service Connection to a production environment resource, and you wish to ensure that access to it happens only for manually-queued builds. In this case, you should:
- Add a _synchronous_ Azure Function check that verifies that `Build.Reason` for the pipeline run is `Manual`.
- Configure the Azure Function check to pass `Build.Reason` in its Headers.
- Set the check's _Time between evaluations_ to _0_, so failure or pass is final and no reevaluation is necessary.

## Asynchronous Azure Function / REST API Checks

In asynchronous mode, Azure DevOps makes a call to the Azure Function / REST API and awaits a call back with the stage access decision. The rest of this section talks about Azure Function checks, but unless otherwise noted, the guidance applies to Invoke REST API checks as well.

### Recommended Implementation of Asynchronous Azure Function / REST API Checks

The asynchronous mode has two communication steps:
1. **Delivering the check payload**. For this, Azure Pipelines makes an HTTP call to your Azure Function / REST API. The purpose of the call is to deliver the check payload, but _not_ to receive a decision on the spot. Your function should just acknowledge receipt of the information.
1. **Receiving the access decision through a callback**. Your Azure Function / REST API should reach a decision asynchronously, after acknowledging check payload receipt, and communicate it to Azure Pipelines. 

A check's decision is final. That is, if a check passes, then the pipeline is allowed access to a protected resource and stage deployment can proceed. If a check fails, then the stage fails. If there are multiple checks in a single stage, all need to pass before access and stage deployment are allowed, but a single failure is enough to fail the stage.

The recommended implementation of the async mode for a single Azure Function check is depicted in the following diagram.

:::image type="content" source="media/checks/async_checks.png" alt-text="The recommended implementation of the async mode for a single Azure Function check.":::

The steps in the diagram are:
1. Check Delivery. Azure Pipelines prepares to deploy a pipeline stage and requires access to a protected resource. It invokes the corresponding Azure Function check and expects receipt confirmation. Stage deployment is paused pending a decision.
2. Check Evaluation.
  - 2.1 The Azure Function starts executing and enters an inner loop, in which it can do multiple evaluations of the conditions necessary to reach access decision.
  - 2.2 The Azure Function performs a first evaluation of the access conditions. It can decide to allow access, deny it, or evaluate the conditions at a later point. 
  - 2.3 The Azure Function reschedules a reevaluation of the conditions for a later point. 
  - 2.4 The Azure Function re-evaluates the access conditions. Assume the evaluation is successful.
3. Decision communication. The Azure function calls back into Azure Pipelines with the access decision. Stage deployment can proceed.


### Recommended Configuration for Asynchronous Azure Function / REST API Checks

In the Azure Function / REST API check configuration panel, make sure you:
- Selected _Callback_ for the _Completion event_.
- Set _Time between evaluations (minutes)_ to _0_.

> [!NOTE]
    In the near future, the _Time between evaluations (minutes)_ will be removed, and a value of 0 will be required.

### Passing Pipeline Run Information to Azure Function / REST API Checks

When configuring the check, you can specify the pipeline run information you wish to send to your Azure Function / REST API check. At a minimum, you should send:
- `"PlanUrl": "$(system.CollectionUri)"` 
- `"ProjectId": "$(system.TeamProjectId)"`
- `"HubName": "$(system.HostType)"` 
- `"PlanId": "$(system.PlanId)"` 
- `"JobId": "$(system.JobId)"` 
- `"TaskInstanceId": "$(system.TaskInstanceId)"` 
- `"AuthToken": "$(system.AccessToken)"`

These key-value pairs are set, by default, in the Headers of the REST call made by Azure Pipelines.

You can use `AuthToken` to make calls into Azure DevOps, such as when your check will call back with a decision.  The `AuthToken` is restricted to the scope of the pipeline run from which the Azure Function / REST API check call was made.

### Sending a Decision back to Azure DevOps

Your Azure Function / REST API check must use the following REST API endpoint to communicate a decision back to Azure Pipelines:
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
 
### Sending Status Updates to Azure DevOps from Azure Function / REST API Checks

You can provide status updates to Azure Pipelines users from within your checks using Azure Pipelines REST APIs. This functionality is useful, for example, if you wish to let users know the check is waiting on an external action, such as someone needs to approve a ServiceNow ticket, or to communicate the reason why a check failed and what needs to be done to fix its cause.

The steps to send status updates are:
1.
2.
3.

### Examples

#### Basic Azure Function Check

In this [basic example](), the Azure Function checks that the invoking pipeline has run a static analysis task prior to granting access to a protected resource.

The main logic of the Azure Function does the following:
1. Confirms the receipt of the check payload
1. Sends a status update to Azure Pipelines that the check started
1. Uses `{AuthToken}` to make a call back into Azure Pipelines to retrieve the pipeline run's [Timeline]() entry
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

#### Advanced Azure Function Check

In this [advanced example](), the Azure Function checks that the Azure Boards ticket referenced in the commit message that triggered the pipeline run is in the correct state prior to granting access to a protected resource.

The main logic of the Azure Function does the following:
1. Confirms the receipt of the check payload
1. Sends a status update to Azure Pipelines that the check started
1. Uses `{AuthToken}` to make a call back into Azure Pipelines to retrieve the state of the Azure Boards ticket referenced in the commit message that triggered the pipeline run
1. Checks if the ticket is in the `Completed` state
1. Sends a status update with the result of the check
1. If the ticket is not in the `Completed` state, it reschedules another evaluation in 5 minutes
1. Once the ticket is in the correct state, it sends a positive decision to Azure Pipelines

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

### Error Handling

Azure Pipelines attempts at most 10 times to deliver the check payload to your Azure Function / REST API check. A successful delivery is defined as an HTTP 20x code received within 3 seconds. When the limit is reached without a successful delivery, the check is considered failed, and the associated stage will fail, too. The retry interval is non-deterministic and non-configurable.

If your Azure Function / REST API check does not call back into Azure Pipelines within the configured timeout, the associated stage will be skipped. Stages depending on it will be skipped as well.

## Synchronous Azure Function / REST API Checks

In synchronous mode, Azure DevOps makes a call to the Azure Function / REST API to get an immediate decision whether access to a protected resource is permitted or not. 

The implementation of the sync mode for a single Azure Function check is depicted in the following diagram.

:::image type="content" source="media/checks/sync_checks.png" alt-text="The implementation of the sync mode for a single Azure Function check.":::

The steps are:
1. Azure Pipelines prepares to deploy a pipeline stage and requires access to a protected resource. 
1. It invokes the corresponding Azure Function check and waits for a decision.
1. The check runs and reaches a decision. Assume the check fails.
1. Azure Pipelines schedules a new call to the Azure Function check.
1. It invokes the corresponding Azure Function check and waits for a decision.
1. The check runs and reaches a decision. Assume the check passes.

Your synchronous Azure Function / REST API check must return within 3 seconds.

### Configure Synchronous Azure Function / REST API Checks

To use the synchronous mode for the Azure Function / REST API, in the check configuration panel, make sure you:
- Selected _ApiResponse_ for the _Completion event_ under _Advanced_
- Defined the _Success criteria_ which defines when to pass the check based on the Azure Function / REST API check's response body
- Set _Time between evaluations_ under _Control options_
- Set _Timeout_

> [!NOTE]
    In the near future, Azure Pipelines will enforce that there be at most X check evaluations, based on the  _Time between evaluations_ and _Timeout_ values.

### Check Reevaluation

The synchronous mode enables you to run the same check multiple times, regardless if it passed or if it failed. 

For example, say you configured a synchronous Azure Function / REST API check and an Approval for a Service Connection. Until the approval is given, your check will continue reevaluating.

In another example, say you configured two synchronous Azure Function / REST API checks for a Service Connection. Say that the first check has _Time between evaluations_ set to 10 minutes, its first evaluation fails, but the second one succeeds. Assume the second check has _Time between evaluations_ set to 1 minute. In this situation, the second check will run 10 times, until the first check passes.

To prevent a check from running multiple times, you can make its decision be final by setting _Time between evaluations_ to 0. In this case, if the check fails, the other running Approvals and Checks are cancelled, and the stage deployment fails

### Passing Pipeline Run Information to Azure Function / REST API Checks

When configuring the check, you can specify the pipeline run information you wish to send to your Azure Function / REST API check. By default, Azure Pipeline adds the following information in the Headers of the HTTP call it makes.
- `"PlanUrl": "$(system.CollectionUri)"` 
- `"ProjectId": "$(system.TeamProjectId)"`
- `"HubName": "$(system.HostType)"` 
- `"PlanId": "$(system.PlanId)"` 
- `"JobId": "$(system.JobId)"` 
- `"TaskInstanceId": "$(system.TaskInstanceId)"` 
- `"AuthToken": "$(system.AccessToken)"`

While you can use `AuthToken` to make calls into Azure DevOps, this is not recommended, as this will most likely cause your check to take more than 3 seconds to reply, so the check evaluation will fail.


## FAQs
