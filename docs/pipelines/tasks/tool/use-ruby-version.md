---
title: Use Ruby Version task
description: Select a version of Ruby to run on an agent and optionally add it to PATH
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 0b9f5626-08ec-45a3-8a39-aff5b3394398
ms.manager: madhurig
ms.custom: seodec18
ms.author: dastahel
ms.reviewer: lukillgo
ms.date: 12/07/2018
monikerRange: 'azure-devops'
---

# Use Ruby Version task

**Azure Pipelines**

Use this task in a build or release pipeline to select a version of Ruby to run on an agent, and optionally add it to PATH.

## Demands

None

## Prerequisites

* A [Microsoft-hosted agent](../../agents/hosted.md#software) with side-by-side versions of Ruby installed, or a self-hosted agent with Agent.ToolsDirectory configured (see [Q&A](#how-can-i-configure-a-self-hosted-agent-to-use-this-task)).

This task will fail if no Ruby versions are found in Agent.ToolsDirectory. Available Ruby versions on Microsoft-hosted agents can be found [here](../../agents/hosted.md#software).

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/UseRubyVersionV0.md)]
::: moniker-end

## Arguments

| Argument | Description |
|----------|-------------|
| Version spec | Version range or exact version of a Ruby version to use. |
| Add to PATH | Whether to prepend the retrieved Ruby version to the PATH environment variable to make it available in subsequent tasks or scripts without using the output variable. |

If the task completes successfully, the task's output variable will contain the directory of the Ruby installation.

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## Q & A
<!-- BEGINSECTION class="md-qanda" -->

### Where can I learn more about tool installers?

For an explanation of tool installers and examples, see [Tool installers](../../process/tasks.md#tool-installers).

[!INCLUDE [temp](../../_shared/qa-agents.md)]

### How can I configure a self-hosted agent to use this task?

You can run this task on a self-hosted agent with your own Ruby versions.
To run this task on a self-hosted agent, set up Agent.ToolsDirectory by following the instructions [here](https://github.com/Microsoft/vsts-task-tool-lib/blob/master/docs/overview.md#tool-cache).
The tool name to use is "Ruby."

<!-- ENDSECTION -->
