---
title: Delay task
description: Pause execution of a build or release pipeline for a fixed delay time 
ms.assetid: 1EFDAB02-66D7-4B8A-A8BC-43AF2C43F282
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

# Delay task

**Azure Pipelines**

Use this task in a build or release pipeline to pause execution of the pipeline for a fixed delay time.

## Demands

Can be used in only an [agentless job](../../process/server-phases.md) of a release pipeline.

::: moniker range="azure-devops"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/DelayV1.md)]
::: moniker-end

## Arguments

| Parameter | Comments |
| --- | --- |
| **Display name** | Required. The name to display for this task. |
| **Delay Time (minutes)** | Required. The number of minutes to delay execution. |
| **Control options** | See [Control options](../../process/tasks.md#controloptions) |

Also see this task on [GitHub](https://github.com/Microsoft/azure-pipelines-tasks/tree/master/Tasks/DelayV1).

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../../_shared/qa-agents.md)]

<!-- ENDSECTION -->
