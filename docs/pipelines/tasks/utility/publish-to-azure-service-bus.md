---
title: Publish To Azure Service Bus task 
description: Send a message to an Azure Service Bus with a build or release pipeline in Azure Pipelines and TFS
ms.assetid: 81D73795-0171-434F-AE37-5386F4E71915
ms.prod: devops
ms.technology: devops-cicd
ms.topic: reference
ms.manager: jillfra
ms.custom: seodec18
ms.author: ahomer
author: alexhomer1
ms.date: 12/07/2018
monikerRange: '> tfs-2018'
---

# Publish To Azure Service Bus task

**Azure Pipelines**

Use this task in a build or release pipeline to send a message to an Azure Service Bus using a service connection and without using an agent.

## Demands

Can be used in only an [agentless job](../../process/server-phases.md) of a release pipeline.

::: moniker range="azure-devops"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/PublishToAzureServiceBusV1.md)]
::: moniker-end

## Arguments

| Parameter | Comments |
| --- | --- |
| **Display name** | Required. The name to display for this task. |
| **Azure Service Bus Connection** | Required. An existing service connection to an Azure Service Bus. |
| **Message body** | Required. The text of the message body to send to the Service Bus. |
| **Wait for Task Completion** | Optional. Set this option to force the task to halt until a response is received. |
| **Control options** | See [Control options](../../process/tasks.md#controloptions) |

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks/tree/master/Tasks/PublishToAzureServiceBusV1). Feedback and contributions are welcome.

## Q & A

### Do I need an agent?

You do not need an agent to run this task. This task Can be used in only an [agentless job](../../process/server-phases.md) of a release pipeline.

### Where should a task signal completion?

To signal completion, the external service should POST completion data to the following pipelines REST endpoint.

```
{planUri}/{projectId}/_apis/distributedtask/hubs/{hubName}/plans/{planId}/events?api-version=2.0-preview.1

**Request Body**
 { "name": "TaskCompleted", "taskId": "taskInstanceId", "jobId": "jobId", "result": "succeeded" }
```

See [this simple cmdline application](https://github.com/Microsoft/azure-pipelines-extensions/tree/master/ServerTaskHelper/HttpRequestSampleWithoutHandler) for specifics. 

In addition, a C# helper library is available to enable live logging and managing task status for agentless tasks. [Learn more](https://blogs.msdn.microsoft.com/aseemb/2017/12/18/async-http-agentless-task/) 

