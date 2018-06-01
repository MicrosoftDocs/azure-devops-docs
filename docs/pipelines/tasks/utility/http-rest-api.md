---
title: Invoke HTTP REST API task for Microsoft VSTS and TFS 
description: Build and release task to invoke an HTTP API and parse the response with a build or release definition in VSTS and TFS
ms.assetid: 3F5394FC-37A9-4381-8F49-4F39369E1BDD
ms.prod: devops
ms.technology: devops-cicd
ms.topic: reference
ms.manager: douge
ms.author: ahomer
author: alexhomer1
ms.date: 04/09/2018
monikerRange: '>= tfs-2017'
---

# Utility: Invoke REST API

**VSTS**

![icon](_img/http-rest-api.png) &nbsp; Invoke an HTTP API and parse the response.

## Demands

Can be used in only an [agentless phase](../../process/server-phases.md) of a release definition.

::: moniker range="vsts"

[!INCLUDE [temp](../_shared/yaml/InvokeRestApiV1.1.md)]

::: moniker-end

## Arguments

| Parameter | Comments |
| --- | --- | --- |
| **Generic endpoint** | Required. Select a Generic service endpoint. Provides the baseUrl for the call and the authorization to use. |
| **Method** | Required. The HTTP method with which the API will be invoked; for example, **GET**, **PUT**, or **UPDATE**. |
| **Headers** | Optional. The header in JSON format to be attached to the request sent to the API. |
| **Body** | Optional. The request body for the function call in JSON format. |
| **Url Suffix and parameters** | The string to append to the baseUrl from endpoint while making the HTTP call | 
| **Completion Event** | Required. How the task reports completion. Can be **API response** (the default) - completion is when function returns success and success criteria evaluates to true, or **Callback** - the Azure function makes a callback to update the timeline record. |
| **Success criteria** | Optional. How to parse the response body for success. |
| **Control options** | See [Control options](../../process/tasks.md#controloptions) |

Succeeds if the API returns success and the response body parsing is successful, or when the API updates the timeline record with success.

The **Invoke REST API task** does not perform deployment actions directly.
Instead, it allows you to invoke any generic HTTP REST API as part of the automated
pipeline and, optionally, wait for it to be completed. 

![Configuring an Invoke REST API task](_img/invoke-rest-api-task.png)

For more information about using this task, see [Approvals and gates overview](../../release/approvals/index.md).

Also see this task on [GitHub](https://github.com/Microsoft/vsts-tasks/tree/master/Tasks/InvokeRestApiV1).
