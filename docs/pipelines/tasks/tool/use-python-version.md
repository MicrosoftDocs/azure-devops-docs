---
title: Use Python Version task
description: Select a version of Python to run on an agent and optionally add it to PATH
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 3E49833C-1C28-4C17-B45A-569F06C00AC3
ms.manager: madhurig
ms.custom: seodec18
ms.author: brcrista
author: brcrista
ms.reviewer: dastahel
ms.date: 04/25/2019
monikerRange: 'azure-devops'
---

# Use Python Version task

**Azure Pipelines**

Use this task in a build or release pipeline to select a version of Python to run on an agent, and optionally add it to PATH.

## Demands

None

## Prerequisites

* A [Microsoft-hosted agent](../../agents/hosted.md#software) with side-by-side versions of Python installed, or a self-hosted agent with Agent.ToolsDirectory configured (see [Q&A](#how-can-i-configure-a-self-hosted-agent-to-use-this-task)).

This task will fail if no Python versions are found in Agent.ToolsDirectory. Available Python versions on Microsoft-hosted agents can be found [here](../../agents/hosted.md#software).

> [!Note]
> x86 and x64 versions of Python are available on Microsoft-hosted Windows agents, but not on Linux or macOS agents.

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../_shared/yaml/UsePythonVersionV0.md)]

::: moniker-end

## Arguments

| Argument | Description | Default |
|----------|-------------|---------|
| Version spec | Version range or exact version of a Python version to use. | 3.x |
| Add to PATH | Whether to prepend the retrieved Python version to the PATH environment variable to make it available in subsequent tasks or scripts without using the output variable. | true |
| Advanced - Architecture | The target architecture (x86, x64) of the Python interpreter. x86 is supported only on Windows. | x64 |

::: moniker range="> azure-devops-2019"

As of version 0.150 of the task, version spec will also accept `pypy2` or `pypy3`.

::: moniker-end

If the task completes successfully, the task's output variable will contain the directory of the Python installation:

![output variable](_img/use_python_version_output_variable.png)

## Remarks

After running this task with "Add to PATH," the `python` command in subsequent scripts will be for the highest available version of the interpreter matching the version spec and architecture.

The versions of Python installed on the Microsoft-hosted Ubuntu and macOS images follow the symlinking structure for Unix-like systems defined in [PEP 394](https://www.python.org/dev/peps/pep-0394/).
For example, for Python 3.7, `python3.7` is the actual interpreter.
`python3` is symlinked to that interpreter, and `python` is a symlink to that symlink.

On the Microsoft-hosted Windows images, the interpreter is just `python`.

For Microsoft-hosted agents, x86 is supported only on Windows.
This is because Windows can run executables compiled for the x86 architecture with the WoW64 subsystem.
Hosted Ubuntu and Hosted macOS run 64-bit operating systems and run only 64-bit Python.

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## Q & A
<!-- BEGINSECTION class="md-qanda" -->

### Where can I learn more about tool installers?

For an explanation of tool installers and examples, see [Tool installers](../../process/tasks.md#tool-installers).

[!INCLUDE [temp](../../_shared/qa-agents.md)]

### How can I configure a self-hosted agent to use this task?

Our image generation scripts are open-source [on GitHub](https://github.com/microsoft/azure-pipelines-image-generation).
Search the code for `AGENT_TOOLSDIRECTORY`.

For details on how the task finds a particular Python version, see [here](https://github.com/Microsoft/vsts-task-tool-lib/blob/master/docs/overview.md#tool-cache).
The tool name to use is "Python."
In order that your scripts may work as they would on Microsoft-hosted agents, we recommend following the symlinking structure from [PEP 394](https://www.python.org/dev/peps/pep-0394/) on Unix-like systems.

<!-- ENDSECTION -->
