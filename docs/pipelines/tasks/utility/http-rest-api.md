---
title: Invoke HTTP REST API task
description: Build and release task to invoke an HTTP API and parse the response with a build or release pipeline in Azure Pipelines and TFS
ms.assetid: 3F5394FC-37A9-4381-8F49-4F39369E1BDD
ms.topic: reference
ms.custom: seodec18
ms.author: ronai
author: RoopeshNair
ms.date: 01/10/2019
monikerRange: '<= azure-devops'
---

# Invoke REST API task

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

Use this task to invoke an HTTP API and parse the response.

::: moniker range="tfs-2018"

[!INCLUDE [temp](../../includes/concept-rename-note.md)]

::: moniker-end

::: moniker range="tfs-2018"

This task is available in both builds and releases in TFS 2018.2 In TFS 2018 RTM, this task is available only in releases.

::: moniker-end

## Demands

This task can be used in only an [agentless job](../../process/phases.md#server-jobs).

::: moniker range="azure-devops"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/InvokeRestApiV1.md)]

::: moniker-end

## Arguments

| Parameter | Comments |
| --- | --- | --- |
| **Connection type** | Required. Select **Azure Resource Manager** to invoke an Azure management API or **Generic** for all other APIs. |
| **Generic service connection** | Required. Generic service connection that provides the baseUrl for the call and the authorization to use. |
| **Azure subscription** | Required. Azure Resource Manager subscription to configure and use for invoking Azure management APIs. |
| **Method** | Required. The HTTP method with which the API will be invoked; for example, **GET**, **PUT**, or **UPDATE**. |
| **Headers** | Optional. The header in JSON format to be attached to the request sent to the API. |
| **Body** | Optional. The request body for the function call in JSON format. |
| **URL suffix and parameters** | The string to append to the baseUrl from the Generic service connection while making the HTTP call | 
| **Wait for completion** | Required. How the task reports completion. Can be **API response** (the default) - completion is when the function returns success within 20 seconds and the success criteria evaluates to true, or **Callback** - the external service makes a callback to update the timeline record.   |
| **Success criteria** | Optional. How to parse the response body for success. By default, the task passes when 200 OK is returned from the call. Additionally, the success criteria - if specified - is evaluated. |
| **Control options** | See [Control options](../../process/tasks.md#controloptions) |

Succeeds if the API returns success and the response body parsing is successful, or when the API updates the timeline record with success.

The **Invoke REST API task** does not perform deployment actions directly. Instead, it allows you to invoke any generic HTTP REST API as part of the automated pipeline and, optionally, wait for it to be completed.

# [YAML](#tab/yaml)

```yml
steps:
- task: InvokeRESTAPI@1
  displayName: 'Invoke REST API: GET'
  inputs:
    serviceConnection: 'generic_demo'
    method: GET
    successCriteria: 'eq(root[''count''], ''1425'')'
```

# [Classic](#tab/classic)

1. From your pipeline definition, select the ellipsis button (...), and then select **Add an agentless job**.

1. In your new agentless job, select the `+` sign to add a new task.

1. Search for the **Invoke REST API** task. Select **Add** to add it to your agentless job.

1. Select your **Connection type** and your **Service connection**. Select the HTTP **Method** that you want to use, and then select a **Completion event**. You can also define a success a criteria to pass the task.

1. Select **Save & queue** when you are done.

    :::image type="content" source="media/invoke-rest-api-classic.png" alt-text="A screenshot showing how to set up the invoke REST API task.":::

In this example, the task succeeded when the response matched our `successCriteria`: *eq(root[''count''], ''1425'')*.

:::image type="content" source="media/invoke-rest-api-success.png" alt-text="A screenshot showing the pipeline status.":::

---

## Open source

The [InvokeRESTAPI](https://github.com/Microsoft/azure-pipelines-tasks/tree/master/Tasks/InvokeRestApiV1) task is open source on GitHub. Feedback and contributions are welcome.

## FAQ

### What base URLs are used when invoking Azure Management APIs?

Azure management APIs are invoked using *ResourceManagerEndpoint* of the selected environment. For example `https://management.Azure.com` is used when the subscription is in **AzureCloud** environment.

### Where should a task signal completion when **Callback** is chosen as the completion event?

To signal completion, the external service should POST completion data to the following pipelines REST endpoint.
```
{planUri}/{projectId}/_apis/distributedtask/hubs/{hubName}/plans/{planId}/events?api-version=2.0-preview.1

**Request Body**
 { "name": "TaskCompleted", "taskId": "taskInstanceId", "jobId": "jobId", "result": "succeeded" }
 ```
 
See [this simple cmdline application](https://github.com/Microsoft/azure-pipelines-extensions/tree/master/ServerTaskHelper/HttpRequestSampleWithoutHandler) for specifics. 
 
In addition, a C# helper library is available to enable live logging and managing task status for agentless tasks. [Learn more](/archive/blogs/aseemb/async-http-agentless-task) 

### Can I use the response body as the input for another task?

No, as this task is an agentless task and uses TFS's internal HttpRequest, which doesn't return the content of the HTTP request.


