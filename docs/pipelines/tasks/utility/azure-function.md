---
title: Invoke Azure Function task 
titleSuffix: Azure Pipelines & TFS
description: Invoke a HTTP triggered function in an Azure function app and parse the response in Azure Pipelines and TFS
ms.assetid: 8D3F3DAA-92C8-4631-96C6-938D43C60008
ms.prod: devops
ms.technology: devops-cicd
ms.topic: reference
ms.manager: douge
ms.author: ahomer
author: alexhomer1
ms.date: 08/24/2018
monikerRange: '>= tfs-2017'
---

# Invoke Azure Function task

**Azure Pipelines | TFS 2018 | TFS 2017**

Use this task in a build or release pipeline to invoke a HTTP triggered function in an Azure function app and parse the response.

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../../_shared/concept-rename-note.md)]
::: moniker-end

## Demands

Can be used in only an [agentless job](../../process/server-phases.md) of a release pipeline.

::: moniker range="> tfs-2018"
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

Also see this task on [GitHub](https://github.com/Microsoft/vsts-tasks/tree/master/Tasks/AzureFunction).
