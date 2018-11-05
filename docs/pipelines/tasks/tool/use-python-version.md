---
title: Use Python Version task
titleSuffix: Azure Pipelines & TFS
description: Select a version of Python to run on an agent and optionally add it to PATH
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 3E49833C-1C28-4C17-B45A-569F06C00AC3
ms.manager: madhurig
ms.author: brcrista
ms.reviewer: dastahel
ms.date: 4/2/2018
monikerRange: 'vsts'
---

# Use Python Version task

**Azure Pipelines**

Use this task in a build or release pipeline to select a version of Python to run on an agent, and optionally add it to PATH.

## Demands

None

## Prerequisites

* A [Microsoft-hosted agent](../../agents/hosted.md#software) with side-by-side versions of Python installed, or a self-hosted agent with Agent.ToolsDirectory configured (see [Q&A](#how-can-i-configure-a-self-hosted-agent-to-use-this-task)).

This task will fail if no Python versions are found in Agent.ToolsDirectory. Available Python versions on Microsoft-hosted agents can be found [here](../../agents/hosted.md#software).

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/UsePythonVersionV0.md)]
::: moniker-end

## Arguments

| Argument | Description |
|----------|-------------|
| Version spec | Version range or exact version of a Python version to use. |
| Add to PATH | Whether to prepend the retrieved Python version to the PATH environment variable to make it available in subsequent tasks or scripts without using the output variable. |
| Advanced - Architecture | The target architecture (x86, x64) of the Python interpreter. |

If the task completes successfully, the task's output variable will contain the directory of the Python installation:

![output variable](_img/use_python_version_output_variable.png)

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/vsts-tasks). Feedback and contributions are welcome.

## Q & A
<!-- BEGINSECTION class="md-qanda" -->

### Where can I learn more about tool installers?

For an explanation of tool installers and examples, see [Tool installers](../../process/tasks.md#tool-installers).

[!INCLUDE [temp](../../_shared/qa-agents.md)]

### How can I configure a self-hosted agent to use this task?

You can run this task on a self-hosted agent with your own Python versions.
To run this task on a self-hosted agent, set up Agent.ToolsDirectory by following the instructions [here](https://github.com/Microsoft/vsts-task-tool-lib/blob/master/docs/overview.md#tool-cache).
The tool name to use is "Python."

<!-- ENDSECTION -->
