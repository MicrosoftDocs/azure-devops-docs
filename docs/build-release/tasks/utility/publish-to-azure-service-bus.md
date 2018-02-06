---
title: Publish To Azure Service Bus task 
description: Build and release task to send a message to an Azure Service Bus in VSTS and TFS
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.assetid: 81D73795-0171-434F-AE37-5386F4E71915
ms.manager: douge
ms.author: ahomer
ms.date: 01/19/2018
---

# Utility: Publish To Azure Service Bus

[!INCLUDE [temp](../../_shared/version-tfs-2015-update.md)]

![icon](_img/publish-to-azure-service-bus.png) Send a message to an Azure Service Bus using a service connection and without using an agent.

## Demands

Can be used in only an [agentless phase](../../concepts/process/phases.md#agentless-phase) of a release definition.

## Arguments

| Parameter | Comments |
| --- | --- |
| **Display name** | Required. The name to display for this task. |
| **Azure Service Bus Connection** | Required. An existing service connection to an Azure Service Bus. |
| **Message body** | Required. The text of the message body to send to the Service Bus. |
| **Wait for Task Completion** | Optional. Set this option to force the task to halt until a response is received. |
| **Control options** | See [Control options](../../concepts/process/tasks.md#controloptions) |

Also see this task on [GitHub](https://github.com/Microsoft/vsts-tasks/tree/master/Tasks/PublishToAzureServiceBus).

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../../_shared/qa-agents.md)]

[!INCLUDE [temp](../../_shared/qa-versions.md)]

<!-- ENDSECTION -->

