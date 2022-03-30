---
title: Invoke a function task 
description: Invoke an HTTP triggered function in a function app hosted in Azure Functions and parse the response in Azure Pipelines and TFS
ms.assetid: 8D3F3DAA-92C8-4631-96C6-938D43C60008
ms.topic: reference
ms.custom: seodec18
ms.author: ronai
author: RoopeshNair
ms.date: 12/14/2021
monikerRange: '>= tfs-2017'
---

# Invoke a function task

[!INCLUDE [version-gt-eq-2017](../../../includes/version-gt-eq-2017.md)]

Use this task in an [agentless job](../../process/phases.md#server-jobs) of a release pipeline to invoke an HTTP triggered function in a function app that is created and hosted in Azure Functions and parse the response.

::: moniker range="<= tfs-2018"

[!INCLUDE [temp](../../includes/concept-rename-note.md)]

::: moniker-end

## Demands

Can be used in only an [agentless job](../../process/phases.md#server-jobs) of a release pipeline.

::: moniker range="azure-devops"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/AzureFunctionV1.md)]

::: moniker-end

## Arguments

| Parameter | Comments |
| --- | --- |
| <code>function</code><br/>**Azure function URL** | Required. The URL of the function to be invoked. Example: "https://azurefunctionapp.azurewebsites.net/api/HttpTriggerJS1" |
| <code>key</code><br/>**Function key** | Required. Function or host key to access and invoke the function. Using a secret pipeline variable to store the function key is recommended. |
| <code>method</code><br/>**Method** | Required. The HTTP method with which the function will be invoked. |
| <code>headers</code><br/>**Headers** | Optional. The header in JSON format to be attached to the request sent to the function. |
| <code>queryParameters</code><br/>**Query parameters** | Optional. the string query to append to the function URL. Must not start with "?" or "&". |
| <code>body</code><br/>**Body** | Optional. The request body in JSON format. |
| <code>waitForCompletion</code><br/>**Completion event** | Required. How the task reports completion. Options: "ApiResponse", "Callback."<br/>**API response** (default) - the function returns success and success criteria evaluates to true.<br/>**Callback** - the function makes a callback to update the timeline record. |
| <code>successCriteria</code><br/>**Success criteria** | Optional. The criteria to consider the task successful. By default, the task returns 200 OK status when successful. |

## Open source

This task is open source on [GitHub](https://github.com/microsoft/azure-pipelines-tasks/tree/master/Tasks/AzureFunctionV1). Feedback and contributions are welcome.


## FAQ

### Where should a task signal completion when **Callback** is chosen as the completion event?

To signal completion, the function should POST completion data to the following pipelines REST endpoint.

```
{planUri}/{projectId}/_apis/distributedtask/hubs/{hubName}/plans/{planId}/events?api-version=2.0-preview.1

**Request Body**
{ "name": "TaskCompleted", "taskId": "taskInstanceId", "jobId": "jobId", "result": "succeeded" }
```
See [this simple cmdline application](https://github.com/Microsoft/azure-pipelines-extensions/tree/master/ServerTaskHelper/HttpRequestSampleWithoutHandler) for specifics. 
In addition, a C# helper library is available to enable live logging and managing task status for agentless tasks. [Learn more](/archive/blogs/aseemb/async-http-agentless-task) 

### Why does the task failed within 1 minute when the timeout is longer?

If the function executes for more than 1 minute, use the **Callback** completion event. The API Response completion option is supported for requests that complete within 60 seconds.
