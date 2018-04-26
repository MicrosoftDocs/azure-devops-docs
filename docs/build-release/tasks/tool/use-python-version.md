---
title: Use Python Version
description: Use Python version for VSTS and TFS
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 3E49833C-1C28-4C17-B45A-569F06C00AC3
ms.manager: madhurig
ms.author: brcrista
ms.reviewer: dastahel
ms.date: 4/2/2018
monikerRange: 'vsts'
---


# Tool: Use Python Version

**VSTS**

![icon](_img/python.png) Selects a version of Python to run on an agent.  Optionally adds it to PATH.

## Demands

None

## Prerequisites
* A hosted agent, or a private agent with its tool cache configured (see [Q&A](#how-can-i-configure-a-private-agent-to-use-this-task)).

This task will fail if no Python versions are found in the tool cache.

## Arguments

| Argument | Description |
|----------|-------------|
| Version spec | Version range or exact version of a Python version to use. |
| Add to PATH | Whether to prepend the retrieved Python version to the PATH environment variable to make it available in subsequent tasks or scripts without using the output variable. |
| Advanced - Architecture | The target architecture (x86, x64) of the Python interpreter. |

If the task completes successfully, the task's output variable will contain the directory of the Python installation:

![output variable](_img/use_python_version_output_variable.png)

::: moniker range="vsts"

## YAML snippet

(VSTS-only)

```YAML
- task: UsePythonVersion@0
  inputs:
    versionSpec: '>= 3.5'
#   addToPath: false
#   architecture: x86 # x86, x64 (default)
```

::: moniker-end

## Q&A
<!-- BEGINSECTION class="md-qanda" -->

### Where can I learn more about tool installers?

For an explanation of tool installers and examples, see [Tool installers](../../concepts/process/tasks.md#tool-installers).

[!INCLUDE [temp](../../_shared/qa-agents.md)]

### How can I configure a private agent to use this task?

You can run this task on a private agent with your own Python versions.
To run this task on a private agent, set up your agent's tool cache by following the instructions [here](https://github.com/Microsoft/vsts-task-tool-lib/blob/master/docs/overview.md#tool-cache).
The tool name to use is "Python."

<!-- ENDSECTION -->
