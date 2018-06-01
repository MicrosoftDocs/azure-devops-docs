---
title: Delay task for Microsoft VSTS and TFS
description: Build and release task to pause execution of the process for a fixed delay time with a build or release definition in VSTS and TFS
ms.assetid: 1EFDAB02-66D7-4B8A-A8BC-43AF2C43F282
ms.prod: devops
ms.technology: devops-cicd
ms.topic: reference
ms.manager: douge
ms.author: ahomer
author: alexhomer1
ms.date: 04/09/2018
monikerRange: 'vsts'
---

# Utility: Delay

**VSTS**

![icon](_img/delay.png) &nbsp; Pause execution of the process for a fixed delay time.

## Demands

Can be used in only an [agentless phase](../../process/server-phases.md) of a release definition.

::: moniker range="vsts"

[!INCLUDE [temp](../_shared/yaml/DelayV1.1.md)]

::: moniker-end

## Arguments

| Parameter | Comments |
| --- | --- |
| **Display name** | Required. The name to display for this task. |
| **Delay Time (minutes)** | Required. The number of minutes to delay execution. |
| **Control options** | See [Control options](../../process/tasks.md#controloptions) |

Also see this task on [GitHub](https://github.com/Microsoft/vsts-tasks/tree/master/Tasks/Delay). 

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../../_shared/qa-agents.md)]

<!-- ENDSECTION -->
