---
title: Conda Environment
description: How to create and activate a Conda environment when building code in VSTS and TFS
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: D97AA092-1F19-4729-B98F-E27615003C1E
ms.manager: madhurig
ms.author: brcrista
ms.reviewer: dastahel
ms.date: 4/26/2018
monikerRange: 'vsts'
---

# Package: Conda Environment

**VSTS**

![icon](_img/conda.png) Create and activate a Conda environment.

This task will create a Conda environment and activate it for subsequent build tasks.

If the task finds an existing environment with the same name, the task will simply reactivate it. This is possible on self-hosted agents. To recreate the environment and reinstall any of its packages, set the "Clean the environment" option.

Running with the "Update to the latest Conda" option will attempt to update Conda before creating or activating the environment. If you are running a self-hosted agent and have [configured a Conda installation to work with the task](#how-can-i-configure-a-private-agent-to-use-this-task), this may result in your Conda installation being updated.

> [!NOTE]
> Microsoft-hosted agents won't have Conda in their `PATH` by default. You will need to run this task in order to use Conda.

After running this task, `PATH` will contain the binary directory for the activated environment, followed by the binary directories for the Conda installation itself.
You can run scripts as subsequent build tasks that run Python, Conda, or the command-line utilities from other packages you install.
For example, you can run tests with [pytest](https://docs.pytest.org/en/latest/) or upload a package to Anaconda Cloud with the [Anaconda client](https://github.com/Anaconda-Platform/anaconda-client).

> [!TIP]
> After running this task, the environment will be "activated," and packages you install by calling `conda install` will get installed to this environment.

## Demands

None

## Prerequisites
* A Microsoft-hosted agent, or a self-hosted agent with Anaconda or Miniconda installed.
* If using a self-hosted agent, you must either add the `conda` executable to `PATH` or set the `CONDA` environment variable to the root of the Conda installation.

::: moniker range="vsts"

[!INCLUDE [temp](../_shared/yaml/CondaEnvironmentV0.0.md)]

::: moniker-end

## Arguments

| Argument | Description |
|----------|-------------|
| Environment name | Name of the Conda environment to create and activate. |
| Package specs | Space-delimited list of packages to install when creating the environment. |
| Update to the latest Conda | Update Conda to the latest version. This applies to the Conda installation found in `PATH` or at the path specified by the `CONDA` environment variable. |

### Advanced
| Argument | Description |
|----------|-------------|
| Environment creation options | Space-delimited list of other options to pass to the `conda create` command. |
| Clean the environment | Delete the environment and recreate it if it already exists. If not selected, the task will reactivate an existing environment. |

## Q&A
<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../../_shared/qa-agents.md)]

### How can I configure a self-hosted agent to use this task?

You can use this task either with a full Anaconda installation or a Miniconda installation.
If using a self-hosted agent, you must add the `conda` executable to `PATH`.
Alternatively, you can set the `CONDA` environment variable to the root of the Conda installation -- that is, the directory you specify as the "prefix" when installing Conda.

<!-- ENDSECTION -->
