---
title: Run pipelines with Anaconda environments
description: Set up and use Anaconda environments with Azure Pipelines, Azure DevOps
ms.topic: quickstart
ms.assetid: 50ed6bb4-5f35-4e1e-aafc-295eb10198df
ms.reviewer: vijayma
ms.custom: seodec18
ms.date: 01/24/2022
monikerRange: azure-devops
author: JuliaKM
---

# Run pipelines with Anaconda environments

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Learn how to set up and use Anaconda with Python in your pipeline. Anaconda is a Python distribution for data science and machine learning.  

## Get started

Follow these instructions to set up a pipeline for a sample Python app with Anaconda environment.

1. Sign in to your Azure DevOps organization and navigate to your project.

1. In your project, navigate to the **Pipelines** page. Then choose the action to create a new pipeline.

1. Walk through the steps of the wizard by first selecting **GitHub** as the location of your source code.

1. You might be redirected to GitHub to sign in. If so, enter your GitHub credentials.

1. When the list of repositories appears, select your Anaconda sample repository.

1. Azure Pipelines will analyze the code in your repository and detect an existing `azure-pipelines.yml` file.

1. Select **Run**.

1. A new run is started. Wait for the run to finish.

> [!TIP]
> To make changes to the YAML file as described in this topic, select the pipeline in the **Pipelines** page, and then **Edit** the `azure-pipelines.yml` file.

## Add conda to your system path

On [hosted agents](../agents/hosted.md), conda is left out of `PATH` by default to keep its Python version from conflicting with other installed versions. The `task.prependpath` agent command will make it available to all subsequent steps.

# [Ubuntu](#tab/ubuntu)

```yaml
- bash: echo "##vso[task.prependpath]$CONDA/bin"
  displayName: Add conda to PATH
```

# [macOS](#tab/macos)

Use the `macOS-latest` agent with Anaconda. 

```yaml
- bash: echo "##vso[task.prependpath]$CONDA/bin"
  displayName: Add conda to PATH

# On Hosted macOS, the agent user doesn't have ownership of Miniconda's installation directory/
# We need to take ownership if we want to update conda or install packages globally
- bash: sudo chown -R $USER $CONDA
  displayName: Take ownership of conda installation
```

# [Windows](#tab/windows)

```yaml
- powershell: Write-Host "##vso[task.prependpath]$env:CONDA\Scripts"
  displayName: Add conda to PATH
```

---

## Create an environment

### From command-line arguments

The `conda create` command will create an environment with the arguments you pass it.

# [Ubuntu](#tab/ubuntu)

```yaml
- bash: conda create --yes --quiet --name myEnvironment
  displayName: Create Anaconda environment
```

# [macOS](#tab/macos)

```yaml
- bash: conda create --yes --quiet --name myEnvironment
  displayName: Create Anaconda environment
```

# [Windows](#tab/windows)

```yaml
- script: conda create --yes --quiet --name myEnvironment
  displayName: Create Anaconda environment
```

> [!NOTE]
> To add specific conda channels, you need to add an extra line for conda config:
> `conda config --add channels conda-forge`


---

### From YAML

You can check in an [`environment.yml`](https://conda.io/docs/user-guide/tasks/manage-environments.html#creating-an-environment-from-an-environment-yml-file) file to your repo that defines the configuration for an Anaconda environment.

```yaml
- script: conda env create --quiet --file environment.yml
  displayName: Create Anaconda environment
```

> [!NOTE]
> If you are using a self-hosted agent and don't remove the environment at the end, you'll get an
> error on the next build since the environment already exists. To resolve, use the `--force`
> argument: `conda env create --quiet --force --file environment.yml`.

> [!NOTE]
> If you are using self-hosted agents that are sharing storage, and running jobs in parallel 
> using the same Anaconda environments, there may be clashes between those environments. 
> To resolve, use the `--name` argument and a unique identifier as the argument value,
> like a concatenation with the `$(Build.BuildNumber)` build variable.

### Install packages from Anaconda

The following YAML installs the `scipy` package in the conda environment named `myEnvironment`.

# [Ubuntu](#tab/ubuntu)

```yaml
- bash: |
    source activate myEnvironment
    conda install --yes --quiet --name myEnvironment scipy
  displayName: Install Anaconda packages
```

# [macOS](#tab/macos)

```yaml
- bash: |
    source activate myEnvironment
    conda install --yes --quiet --name myEnvironment scipy
  displayName: Install Anaconda packages
```

# [Windows](#tab/windows)

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

# [Ubuntu](#tab/ubuntu)

```yaml
- bash: |
    source activate myEnvironment
    python -m pytest --junitxml=junit/unit-test.xml
  displayName: pytest

- task: PublishTestResults@2
  inputs:
    testResultsFiles: 'junit/*.xml'
  condition: succeededOrFailed()
```

# [macOS](#tab/macos)

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

# [Windows](#tab/windows)

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
On Hosted macOS, the agent user does not have ownership of the directory where Miniconda is installed.
For a fix, see the "Hosted macOS" tab under [Add conda to your system path](#add-conda-to-your-system-path).

### Why does my build stop responding on a `conda create` or `conda install` step?
If you forget to pass `--yes`, conda will stop and wait for user interaction.

### Why is my script on Windows stopping after it activates the environment?
On Windows, `activate` is a Batch script. You must use the [`call`](/windows-server/administration/windows-commands/call) command to resume running your script after activating.
See examples of using `call` [in a pipeline](#run-pipeline-steps-in-an-anaconda-environment).

### How can I run my tests with multiple versions of Python?
See [Build Python apps in Azure Pipelines](./python.md).
