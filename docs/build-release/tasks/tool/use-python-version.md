---
title: Use Python Version
description: Use Python version for VSTS and TFS
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.assetid: 3E49833C-1C28-4C17-B45A-569F06C00AC3
ms.manager: madhurig
ms.author: brcrista
ms.reviewer: dastahel
ms.date: 4/2/2018
monikerRange: 'vsts'
---


# Tool: Use Python Version

**VSTS**

![icon](_img/python.png) Retrieves the specified version of Python from the tool cache. Optionally add it to PATH.

## Demands

None

## Arguments

| Argument | Description |
|----------|-------------|
| Version spec | Version range or exact version of a Python version to use. |
| Add to PATH | Whether to prepend the retrieved Python version to the PATH environment variable to make it available in subsequent tasks or scripts without using the output variable. |

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
```

::: moniker-end

## Q&A
<!-- BEGINSECTION class="md-qanda" -->

### Where can I learn more about tool installers?

For an explanation of tool installers and examples, see [Tool installers](../../concepts/process/tasks.md#tool-installers).

[!INCLUDE [temp](../../_shared/qa-agents.md)]

<!-- ENDSECTION -->
