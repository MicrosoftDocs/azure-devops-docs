---
title: Azure function task 
description: Build and release task to invoke a HTTP triggered function in an Azure function app and parse the response in VSTS and TFS
ms.assetid: 8D3F3DAA-92C8-4631-96C6-938D43C60008
ms.prod: devops
ms.technology: devops-cicd
ms.topic: reference
ms.manager: douge
ms.author: ahomer
author: alexhomer1
ms.date: 04/09/2018
monikerRange: 'vsts'
---

# Utility: Azure function

**VSTS**

![icon](_img/azure-function.png) &nbsp; Invoke a HTTP triggered function in an Azure function app and parse the response.

## Demands

Can be used in only an [agentless phase](../../concepts/process/phases.md#agentless-phase) of a release definition.

## Arguments

| Parameter | Comments |
| --- | --- |
| **Azure function URL** | Required. The URL of the Azure function to be invoked. |
| **Function key** | Required. The value of the available function or the host key for the function to be invoked. Should be secured by using a hidden variable. |
| **Headers** | Optional. The header in JSON format to be attached to the request sent to the function. |
| **Request body** | Optional. The request body for the Azure function call. |
| **Execution mode** | Required. **Synchronous mode** (the default), or **Asynchronous call** where the Azure function calls back to update the timeline record. |
| **Response parse expression** | Optional. How to parse the response body for success. |
| **Control options** | See [Control options](../../concepts/process/tasks.md#controloptions) |

Succeeds if the function returns success and the response body parsing is successful.

For more information about using this task, see [Approvals and gates overview](../../concepts/definitions/release/approvals/index.md).

Also see this task on [GitHub](https://github.com/Microsoft/vsts-tasks/tree/master/Tasks/AzureFunction).

::: moniker range="vsts"

## YAML snippet

(VSTS-only)

```YAML
- task: AzureFunction@1
  inputs:
    function:
    key:
#   method: POST # OPTIONS, GET, HEAD, POST (default), PUT, DELETE, TRACE, PATCH
#   headers: {Content-Type:application/json, PlanUrl: $(system.CollectionUri), ProjectId: $(system.TeamProjectId), HubName: $(system.HostType), PlanId: $(system.PlanId), JobId: $(system.JobId), TimelineId: $(system.TimelineId), TaskInstanceId: $(system.TaskInstanceId), AuthToken: $(system.AccessToken)}
    queryParameters:
    body:
#   waitForCompletion: false # true, false (default)
    successCriteria:
```

::: moniker-end
