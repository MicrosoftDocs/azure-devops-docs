---
title: Use Ruby Version
description: Use Ruby version for VSTS and TFS
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 0b9f5626-08ec-45a3-8a39-aff5b3394398
ms.manager: madhurig
ms.author: dastahel
ms.reviewer: lukillgo
ms.date: 05/03/2018
monikerRange: 'vsts'
---

# Tool: Use Ruby Version

**VSTS**

![icon](_img/ruby.png) Selects a version of Ruby to run on an agent.  Optionally adds it to PATH.

## Demands

None

## Prerequisites
* A Microsoft-hosted agent, or a self-hosted agent with its tool cache configured (see [Q&A](#how-can-i-configure-a-private-agent-to-use-this-task)).

This task will fail if no Ruby versions are found in the tool cache.

::: moniker range="vsts"

[!INCLUDE [temp](../_shared/yaml/UseRubyVersionV0.0.md)]

::: moniker-end

## Arguments

| Argument | Description |
|----------|-------------|
| Version spec | Version range or exact version of a Ruby version to use. |
| Add to PATH | Whether to prepend the retrieved Ruby version to the PATH environment variable to make it available in subsequent tasks or scripts without using the output variable. |

If the task completes successfully, the task's output variable will contain the directory of the Ruby installation.

## Q&A
<!-- BEGINSECTION class="md-qanda" -->

### Where can I learn more about tool installers?

For an explanation of tool installers and examples, see [Tool installers](../../process/tasks.md#tool-installers).

[!INCLUDE [temp](../../_shared/qa-agents.md)]

### How can I configure a self-hosted agent to use this task?

You can run this task on a self-hosted agent with your own Ruby versions.
To run this task on a self-hosted agent, set up your agent's tool cache by following the instructions [here](https://github.com/Microsoft/vsts-task-tool-lib/blob/master/docs/overview.md#tool-cache).
The tool name to use is "Ruby."

<!-- ENDSECTION -->
