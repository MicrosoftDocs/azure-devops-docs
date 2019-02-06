---
title: Invoke Azure Function task 
description: Invoke a HTTP triggered function in an Azure function app and parse the response in Azure Pipelines and TFS
ms.assetid: 8D3F3DAA-92C8-4631-96C6-938D43C60008
ms.prod: devops
ms.technology: devops-cicd
ms.topic: reference
ms.manager: jillfra
ms.custom: seodec18
ms.author: ahomer
author: alexhomer1
ms.date: 12/07/2018
monikerRange: '>= tfs-2017'
---

# Invoke Azure Function task

[!INCLUDE [version-tfs-2017-rtm](../../_shared/version-tfs-2017-rtm.md)]

Use this task in a build or release pipeline to invoke a HTTP triggered function in an Azure function app and parse the response.

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../../_shared/concept-rename-note.md)]
::: moniker-end

## Demands

Can be used in only an [agentless job](../../process/server-phases.md) of a release pipeline.

::: moniker range="azure-devops"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/AzureFunctionV1.md)]
::: moniker-end

## Arguments

| Parameter | Comments |
| --- | --- |
| **Azure function URL** | Required. The URL of the Azure function to be invoked. |
| **Function key** | Required. The value of the available function or the host key for the function to be invoked. Should be secured by using a hidden variable. |
| **Method** | Required. The HTTP method with which the function will be invoked. |
| **Headers** | Optional. The header in JSON format to be attached to the request sent to the function. |
| **Query parameters** | Optional. Query parameters to append to the function URL. Must not start with "**?**" or "**&**". |
| **Body** | Optional. The request body for the Azure function call in JSON format. |
| **Completion Event** | Required. How the task reports completion. Can be **API response** (the default) - completion is when function returns success and success criteria evaluates to true, or **Callback** - the Azure function makes a callback to update the timeline record. |
| **Success criteria** | Optional. How to parse the response body for success. |
| **Control options** | See [Control options](../../process/tasks.md#controloptions) |

Succeeds if the function returns success and the response body parsing is successful, or when the function updates the timeline record with success.

For more information about using this task, see [Approvals and gates overview](../../release/approvals/index.md).

## Open source

This task is open source on [GitHub](https://github.com/Microsoft/azure-pipelines-tasks/tree/master/Tasks/AzureFunction). Feedback and contributions are welcome.


## Q&A

### Where should a task signal completion when **Callback** is chosen as the completion event?

To signal completion, the Azure function should POST completion data to the following pipelines REST endpoint.

```
{planUri}/{projectId}/_apis/distributedtask/hubs/{hubName}/plans/{planId}/events?api-version=2.0-preview.1

**Request Body**
{ "name": "TaskCompleted", "taskId": "taskInstanceId", "jobId": "jobId", "result": "succeeded" }

```
See [this simple cmdline application](https://github.com/Microsoft/azure-pipelines-extensions/tree/master/ServerTaskHelper/HttpRequestSampleWithoutHandler) for specifics. 
In addition, a C# helper library is available to enable live logging and managing task status for agentless tasks. [Learn more](https://blogs.msdn.microsoft.com/aseemb/2017/12/18/async-http-agentless-task/) 
