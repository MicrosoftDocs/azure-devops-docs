---
title: Azure function task 
description: Build and release task to invoke a HTTP triggered function in an Azure function app and parse the response in VSTS and TFS
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.assetid: 8D3F3DAA-92C8-4631-96C6-938D43C60008
ms.manager: douge
ms.author: ahomer
ms.date: 01/19/2018
---

# Utility: Azure function

[!INCLUDE [temp](../../_shared/version-tfs-2015-update.md)]

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

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../../_shared/qa-versions.md)]

<!-- ENDSECTION -->
