---
title: Delay task
description: Pause execution of a build or release pipeline for a fixed delay time 
ms.assetid: 1EFDAB02-66D7-4B8A-A8BC-43AF2C43F282
ms.topic: reference
ms.custom: seodec18
ms.author: ronai
author: RoopeshNair
ms.date: 02/12/2020
monikerRange: '> tfs-2018'
---

# Delay task

**Azure Pipelines**

Use this task in an [agentless job](../../process/phases.md#server-jobs) of a release pipeline to pause execution of the pipeline for a fixed delay time.

## Demands

Can be used in only an [agentless job](../../process/phases.md#server-jobs) of a release pipeline.

::: moniker range="azure-devops"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/DelayV1.md)]

::: moniker-end

## Arguments

| Arguments | Description |
| --- | --- |
| `delayForMinutes`<br/>Delay Time (minutes)| (Required) Delay the execution of the workflow by specified time in minutes. <br/>0 value means that workflow execution will start without delay <br/>Default value: `0`|

Also see this task on [GitHub](https://github.com/Microsoft/azure-pipelines-tasks/tree/master/Tasks/DelayV1).

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## FAQ

<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../../includes/qa-agents.md)]

<!-- ENDSECTION -->
