---
title: Invoke HTTP REST API task 
description: Build and release task to invoke an HTTP API and parse the response in VSTS and TFS
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.assetid: 3F5394FC-37A9-4381-8F49-4F39369E1BDD
ms.manager: douge
ms.author: ahomer
ms.date: 01/19/2018
---

# Utility: Invoke HTTP REST API

[!INCLUDE [temp](../../_shared/version-tfs-2015-update.md)]

![icon](_img/http-rest-api.png) &nbsp; Invoke an HTTP API and parse the response.

## Demands

Can be used in only an [agentless phase](../../concepts/process/phases.md#agentless-phase) of a release definition.

## Arguments

| Parameter | Comments |
| --- | --- | --- |
| **Generic endpoint** | Required. Select a Generic service endpoint. |
| **Method** | Required. For example, **GET**, **PUT**, or **UPDATE**. |
| **Headers** | Optional. The header in JSON format to be attached to the request sent to the function. |
| **Body** | Optional. The request body for the function call. |
| **Execution mode** | Required. **Synchronous mode** (the default), or **Asynchronous call** where the function calls back to update the timeline record. |
| **Response parse expression** | Optional. How to parse the response body for success. |
| **Control options** | See [Control options](../../concepts/process/tasks.md#controloptions) |

Succeeds if the function returns success and the response body parsing is successful.

The **Invoke REST API task** does not perform deployment actions directly.
Instead, it allows you to invoke any generic HTTP REST API as part of the automated
pipeline and, optionally, wait for it to be completed. 

![Configuring an Invoke REST API task](_img/invoke-rest-api-task.png)

For more information about using this task, see [Approvals and gates overview](../../concepts/definitions/release/approvals/index.md).

Also see this task on [GitHub](https://github.com/Microsoft/vsts-tasks/tree/master/Tasks/InvokeRestApi).

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../../_shared/qa-versions.md)]

<!-- ENDSECTION -->
