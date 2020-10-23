---
title: Conda Environment task
ms.custom: seodec18, devx-track-python
description: How to create and activate a Conda environment when building code in Azure Pipelines and TFS
ms.assetid: D97AA092-1F19-4729-B98F-E27615003C1E
ms.manager: madhurig
ms.author: vijayma
author: vijayma
ms.reviewer: dastahel
ms.date: 04/21/2020
monikerRange: azure-devops
---

# Conda Environment task

**Azure Pipelines**

Use this task to create and activate a Conda environment.

> [!NOTE]
> This task has been deprecated. Use `conda` directly in the [bash task](../utility/bash.md) or [batch script task](../utility/batch-script.md) as an alternative.

This task will create a Conda environment and activate it for subsequent build tasks.

If the task finds an existing environment with the same name, the task will simply reactivate it. This is possible on self-hosted agents. To recreate the environment and reinstall any of its packages, set the "Clean the environment" option.

Running with the "Update to the latest Conda" option will attempt to update Conda before creating or activating the environment.
If you are running a self-hosted agent and have [configured a Conda installation to work with the task](#agent-config), this may result in your Conda installation being updated.

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

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/CondaEnvironmentV1.md)]

::: moniker-end

## Arguments

| Argument | Description |
|----------|-------------|
|`createCustomEnvironment`<br/>Create custom environment | (Optional) Setting this to `true` [creates](https://docs.conda.io/projects/conda/en/latest/commands/create.html) or reactivates a Conda environment instead of using the `base` environment. This is recommended for self-hosted agents. <br/>Default value: `false`|
|`environmentName`<br/>Environment name |(Required) Name of the Conda environment to create and activate. |
|`packageSpecs` <br/>Package specs | (Optional) Space-delimited list of packages to install when creating the environment. <br/>Default value: `python=3`|
|`updateConda` <br/>Update to the latest Conda | (Optional) Update Conda to the latest version. This applies to the Conda installation found in `PATH` or at the path specified by the `CONDA` environment variable. <br/>Default value: `true`|
|`installOptions` <br/>Other options for `conda install` | (Optional) Space-delimited list of additional arguments to pass to the `conda install` command. |
|`createOptions` <br/>Other options for `conda create` | (Optional) Space-delimited list of other options to pass to the `conda create` command. |
|`cleanEnvironment` <br/>Clean the environment | (Optional) Delete the environment and recreate it if it already exists. If not selected, the task will reactivate an existing environment. <br/>Default value: `false`|

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## FAQ
<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../../includes/qa-agents.md)]

<a name="agent-config"></a>

### How can I configure a self-hosted agent to use this task?

You can use this task either with a full Anaconda installation or a Miniconda installation.
If using a self-hosted agent, you must add the `conda` executable to `PATH`.
Alternatively, you can set the `CONDA` environment variable to the root of the Conda installation -- that is, the directory you specify as the "prefix" when installing Conda.

<!-- ENDSECTION -->
