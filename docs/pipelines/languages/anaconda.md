---
title: Run pipelines with Anaconda environments
description: Set up and use Anaconda environments with Azure Pipelines, Azure DevOps
ms.prod: devops
ms.technology: devops-cicd
ms.topic: quickstart
ms.assetid: 50ed6bb4-5f35-4e1e-aafc-295eb10198df
ms.manager: alewis
ms.author: brcrista
ms.reviewer: dastahel
ms.custom: seodec18
ms.date: 03/25/2019
monikerRange: 'azure-devops'
---

# Run pipelines with Anaconda environments

**Azure Pipelines**

This guidance explains how to set up and use Anaconda environments in your pipelines.

## Add conda to your system path

On hosted agents, conda is left out of `PATH` by default to keep its Python version from conflicting with other installed versions. The `task.prependpath` agent command will make it available to all subsequent steps.

# [Hosted Ubuntu 16.04](#tab/ubuntu-16-04)

```yaml
- bash: echo "##vso[task.prependpath]$CONDA/bin"
  displayName: Add conda to PATH
```

# [Hosted macOS](#tab/macos)

```yaml
- bash: echo "##vso[task.prependpath]$CONDA/bin"
  displayName: Add conda to PATH

# On Hosted macOS, the agent user doesn't have ownership of Miniconda's installation directory/
# We need to take ownership if we want to update conda or install packages globally
- bash: sudo chown -R $USER $CONDA
  displayName: Take ownership of conda installation
```

# [Hosted VS2017](#tab/vs2017)

```yaml
- powershell: Write-Host "##vso[task.prependpath]$env:CONDA\Scripts"
  displayName: Add conda to PATH
```

---

## Create an environment

### From command-line arguments

The `conda create` command will create an environment with the arguments you pass it.

# [Hosted Ubuntu 16.04](#tab/ubuntu-16-04)

```yaml
- bash: conda create --yes --quiet --name myEnvironment
  displayName: Create Anaconda environment
```

# [Hosted macOS](#tab/macos)

```yaml
- bash: conda create --yes --quiet --name myEnvironment
  displayName: Create Anaconda environment
```

# [Hosted VS2017](#tab/vs2017)

```yaml
- script: conda create --yes --quiet --name myEnvironment
  displayName: Create Anaconda environment
```

---

### From YAML

You can check in an [`environment.yml`](https://conda.io/docs/user-guide/tasks/manage-environments.html#creating-an-environment-from-an-environment-yml-file) file to your repo that defines the configuration for an Anaconda environment.

```yaml
- script: conda env create --quiet --file environment.yml
  displayName: Create Anaconda environment
```

### Install packages from Anaconda

The following YAML installs the `scipy` package in the conda environment named `myEnvironment`.

# [Hosted Ubuntu 16.04](#tab/ubuntu-16-04)

```yaml
- bash: |
    source activate myEnvironment
    conda install --yes --quiet --name myEnvironment scipy
  displayName: Install Anaconda packages
```

# [Hosted macOS](#tab/macos)

```yaml
- bash: |
    source activate myEnvironment
    conda install --yes --quiet --name myEnvironment scipy
  displayName: Install Anaconda packages
```

# [Hosted VS2017](#tab/vs2017)

```yaml
- script: |
    call activate myEnvironment
    conda install --yes --quiet --name myEnvironment scipy
  displayName: Install Anaconda packages
```

---

## Run pipeline steps in an Anaconda environment

> [!NOTE]
> Each build step runs in its own process.
> When you activate an Anaconda environment, it will edit `PATH` and make other changes to its current process.
> Therefore, an Anaconda environment must be activated separately for each step.

# [Hosted Ubuntu 16.04](#tab/ubuntu-16-04)

```yaml
- bash: |
    source activate myEnvironment
    pytest --junitxml=junit/unit-test.xml
  displayName: pytest

- task: PublishTestResults@2
  inputs:
    testResultsFiles: 'junit/*.xml'
  condition: succeededOrFailed()
```

# [Hosted macOS](#tab/macos)

```yaml
- bash: |
    source activate myEnvironment
    pytest --junitxml=junit/unit-test.xml
  displayName: pytest

- task: PublishTestResults@2
  inputs:
    testResultsFiles: 'junit/*.xml'
  condition: succeededOrFailed()
```

# [Hosted VS2017](#tab/vs2017)

```yaml
- script: |
    call activate myEnvironment
    pytest --junitxml=junit/unit-test.xml
  displayName: pytest

- task: PublishTestResults@2
  inputs:
    testResultsFiles: 'junit/*.xml'
  condition: succeededOrFailed()
```

---

## FAQs

### Why am I getting a "Permission denied" error?
On Hosted macOS, the agent user doesn't have ownership of the directory where Miniconda is installed.
For a fix, see the "Hosted macOS" tab under [Add conda to your system path](#add-conda-to-your-system-path).

### Why is my build hanging on a `conda create` or `conda install` step?
If you forget to pass `--yes`, conda will stop and wait for user interaction.

### Why is my script on Windows stopping after it activates the environment?
On Windows, `activate` is a Batch script. You must use the [`call`](https://docs.microsoft.com/windows-server/administration/windows-commands/call) command to resume running your script after activating.
See examples of using `call` [above](#run-pipeline-steps-in-an-anaconda-environment).

### How can I run my tests with multiple versions of Python?
See [Build Python apps in Azure Pipelines](./python.md).