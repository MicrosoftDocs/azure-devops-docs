---
title: Delay task 
description: Build and release task to pause execution of the process for a fixed delay time in VSTS and TFS
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.assetid: 1EFDAB02-66D7-4B8A-A8BC-43AF2C43F282
ms.manager: douge
ms.author: ahomer
ms.date: 01/19/2018
---

# Utility: Delay

[!INCLUDE [temp](../../_shared/version-tfs-2015-update.md)]

![icon](_img/delay.png) &nbsp; Pause execution of the process for a fixed delay time.

## Demands

Can be used in only an [agentless phase](../../concepts/process/phases.md#agentless-phase) of a release definition.

## Arguments

| Parameter | Comments |
| --- | --- |
| **Display name** | Required. The name to display for this task. |
| **Delay Time (minutes)** | Required. The number of minutes to delay execution. |
| **Control options** | See [Control options](../../concepts/process/tasks.md#controloptions) |

Also see this task on [GitHub](https://github.com/Microsoft/vsts-tasks/tree/master/Tasks/Delay).

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../../_shared/qa-agents.md)]

[!INCLUDE [temp](../../_shared/qa-versions.md)]

<!-- ENDSECTION -->

