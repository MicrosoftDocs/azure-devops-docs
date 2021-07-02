---
title: Azure DevOps CLI in Azure Pipeline YAML
titleSuffix: Azure DevOps 
description: Use Azure DevOps CLI to create Azure Pipeline YAML
ms.topic: reference 
ms.prod: devops 
ms.technology: devops-reference
ms.manager: mijacobs 
ms.author: kaelli  
author: KathrynEE
monikerRange: '>= azure-devops-2020'
ms.date: 05/19/2021
---

# Azure DevOps CLI in Azure Pipeline YAML

[!INCLUDE [temp](../includes/version-cloud-plus-2020.md)] 

If you prefer to use YAML to provide your release pipeline configuration, you can use the following example to understand how YAML can be used to install Azure CLI, add the Azure DevOps extension, and run the build and PR list commands.

> [!NOTE]
> The steps in this article show how to log in to Azure DevOps and run `az devops` commands using the Azure DevOps CLI extension. If you want to use Azure CLI to interact with Azure resources, use the [AzureCLI task](../pipelines/tasks/deploy/azure-cli.md).

## Azure DevOps CLI with Windows and Linux hosted agents

The Microsoft-hosted Windows and Linux agents are preconfigured with Azure CLI and the Azure DevOps CLI extension. 

> [!IMPORTANT]
> Microsoft-hosted agents [typically deploy weekly updates](https://github.com/actions/virtual-environments#updates-to-virtual-environments) to the software on the virtual environments. For some tools, the latest version at the time of the deployment is used; for others, the tool is pinned to specific version(s).
>
> To check the included software and their versions for Microsoft-hosted agents, including the versions of Azure CLI and Azure DevOps CLI extension, follow the **Included Software** links in the [Software](../pipelines/agents/hosted.md#software) table.

The following example shows how to log in to Azure DevOps and run a few commands. This example uses the `ubuntu-latest` Microsoft-hosted agent image, but you can replace it with any of the other [Windows or Linux hosted images](../pipelines/agents/hosted.md#software).

This example logs into Azure DevOps CLI using the [System.AccessToken](../pipelines/build/variables.md#systemaccesstoken) security token used by the running pipeline.

```yml
trigger:
- main

pool:
  vmImage: `ubuntu-latest`

steps:
- bash: az --version
  displayName: 'Show Azure CLI version'

- bash: echo ${AZURE_DEVOPS_CLI_PAT} | az devops login
  env:
    AZURE_DEVOPS_CLI_PAT: $(System.AccessToken)
  displayName: 'Login Azure DevOps Extension'

- bash: az devops configure --defaults organization=$(System.TeamFoundationCollectionUri) project=$(System.TeamProject) --use-git-aliases true
  displayName: 'Set default Azure DevOps organization and project'

- bash: |
    az pipelines build list
    git pr list
  displayName: 'Show build list and PRs'

```

If you are using a Windows agent, and want to replace [bash](../pipelines/tasks/utility/bash.md) with [script](../pipelines/yaml-schema.md#script), which uses bash for Linux and macOS and cmd.exe for Windows, use the following example to log in to Azure DevOps.

```yml
# %AZURE_DEVOPS_CLI_PAT% on Windows when using script
- script: echo %AZURE_DEVOPS_CLI_PAT% | az devops login
  env:
    AZURE_DEVOPS_CLI_PAT: $(System.AccessToken)
  displayName: 'Login Azure DevOps Extension'
```

## Azure DevOps CLI with macOS hosted agents

The macOS Microsoft-hosted agents have Azure CLI installed but not the Azure DevOps CLI extension. 

> [!IMPORTANT]
> Microsoft-hosted agents [typically deploy weekly updates](https://github.com/actions/virtual-environments#updates-to-virtual-environments) to the software on the virtual environments. For some tools, the latest version at the time of the deployment is used; for others, the tool is pinned to specific version(s).
>
> To check the included software and their versions for Microsoft-hosted agents, including the version of Azure CLI, follow the **Included Software** links in the [Software](../pipelines/agents/hosted.md#software) table.

* [macOS X Catalina 10.15](#macos-x-catalina-1015)
* [macOS X Catalina 10.14](#macos-x-catalina-1014)

### macOS X Catalina 10.15

The macOS X Catalina 10.15 hosted agent has Azure CLI 2.23.0 installed, but not the Azure DevOps CLI extension.

To install the Azure DevOps CLI extension, run the following command in your pipeline before calling `az devops login`.

```yml
# Install Azure DevOps extension
- bash: az extension add -n azure-devops
  displayName: 'Install Azure DevOps extension'
```

### macOS X Catalina 10.14

The minimum Azure CLI version that supports the Azure DevOps CLI extension is [2.10.1](index.md), and the macOS X Catalina 10.14 hosted agent has Azure CLI 2.22.1 installed. To install the Azure DevOps CLI extension using that version of Azure CLI, run the following command in your pipeline before calling `az devops login`.

```yml
# Install Azure DevOps extension
- bash: az extension add -n azure-devops
  displayName: 'Install Azure DevOps extension'
```

To upgrade the Azure CLI version to the latest version before installing the Azure DevOps CLI extension, run the following commands in your pipeline.

```yml
# Specify python version
- task: UsePythonVersion@0
  inputs:
    versionSpec: '3.x'
    architecture: 'x64'

# Update to latest Azure CLI version
- bash: pip install --pre azure-cli --extra-index-url https://azurecliprod.blob.core.windows.net/edge
  displayName: 'Upgrade Azure CLI'

# Install Azure DevOps extension
- bash: az extension add -n azure-devops
  displayName: 'Install Azure DevOps extension'

# Now you can make calls into Azure DevOps CLI
# ...
```

## Conditionally install the Azure DevOps CLI extension

If you have a pipeline that runs on several Microsoft-hosted VM images, some of which do not have the Azure DevOps CLI extension installed, you can perform that step conditionally, as shown in the following example.

```yml
trigger:
- main

# Run on all Microsoft-hosted agent images
strategy:
  matrix:
    linux16:
      imageName: "ubuntu-16.04"
    linux18:
      imageName: "ubuntu-18.04"
    linux20:
      imageName: "ubuntu-20.04"
    mac1014:
      imageName: "macos-10.14"
    mac1015:
      imageName: "macos-10.15"
    windows2016:
      imageName: "vs2017-win2016"
    windows2019:
      imageName: "windows-2019"
  maxParallel: 3

pool:
  vmImage: $(imageName)

steps:
- bash: az --version
  displayName: 'Show Azure CLI version'

# Install Azure DevOps CLI extension only on macOS images
- bash: az extension add -n azure-devops
  condition: contains(variables.imageName, 'mac')
  displayName: 'Install Azure DevOps extension'

# Azure DevOps CLI extension call that does not require login or credentials
# since it configures the local environment
- bash: az devops configure --defaults organization=$(System.TeamFoundationCollectionUri) project=$(System.TeamProject) --use-git-aliases true
  displayName: 'Set default Azure DevOps organization and project'

# Call that does require credentials, use the System.AccessToken PAT
# and assign to AZURE_DEVOPS_EXT_PAT which is known to Azure DevOps CLI extension
- bash: |
    az pipelines build list
    git pr list
  env:
    AZURE_DEVOPS_EXT_PAT: $(System.AccessToken)
  displayName: 'Show build list and PRs'
```

## Azure DevOps CLI with self-hosted agents

If your self-hosted agent isn't preconfigured with the required software to use Azure DevOps CLI, or if you want to ensure you have the latest versions, you can install the required software using the following steps.

* [Manually install Azure CLI and Azure DevOps CLI extension](#manually-install-azure-cli-and-azure-devops-cli-extension)
* [Install Azure CLI and Azure DevOps CLI extension in your pipeline](#install-azure-cli-and-azure-devops-cli-extension-in-your-pipeline)

### Manually install Azure CLI and Azure DevOps CLI extension

Installing Azure CLI and Azure DevOps CLI extension on your self-hosted agent when you provision the virtual machine image for the agent is much faster than installing them each time the pipeline is run. 

* To install Azure CLI on your self-hosted agent image, see [Install the Azure CLI](/cli/azure/install-azure-cli). There are separate instructions for [Windows](/cli/azure/install-azure-cli-windows), [Linux](/cli/azure/install-azure-cli-linux), and [macOS](/cli/azure/install-azure-cli-macos).
* After installing Azure CLI, install [Azure DevOps CLI extension](index.md).

### Install Azure CLI and Azure DevOps CLI extension in your pipeline

The following example of configuring Azure CLI and Azure DevOps CLI extension on a self-hosted agent using a pipeline has the following prerequisites.

* Install Azure CLI using Python
  * Python must be installed on the agent according to the instructions in [Python version task - How can I configure a self-hosted agent to use this task?](../pipelines/tasks/tool/use-python-version.md#how-can-i-configure-a-self-hosted-agent-to-use-this-task) The `UsePythonVersion@0` task does not install Python onto your self-hosted agent. If you only have one version of Python installed on your self-hosted agent and it is in the path, you don't need to use the `UsePythonVersion@0` task.
  ```yml
  # Specify python version if you have side-by-side versions
  - task: UsePythonVersion@0
    inputs:
      versionSpec: '3.x'
      architecture: 'x64'
  
  # Update pip to latest
  - bash: python -m pip install --upgrade pip
    displayName: 'Upgrade pip'
  
  # Update to latest Azure CLI version, min version required for Azure DevOps is 2.10.1
  - bash: pip install --pre azure-cli --extra-index-url https://azurecliprod.blob.core.windows.net/edge
    displayName: 'Upgrade Azure CLI'
  ```

* Install Azure CLI DevOps extension
  * Azure CLI version [2.10.1](index.md) or higher is installed. 
  * There is a version of `bash` installed on the agent and in the path. A bash installation is required to use the [bash task](../pipelines/tasks/utility/bash.md).
  ```yml
  # Install Azure DevOps extension
  - bash: az extension add -n azure-devops
    displayName: 'Install Azure DevOps extension'
  
  # Now you can make calls into Azure DevOps CLI
  # ...
  ```

The following example installs Azure CLI followed by the Azure DevOps CLI extension.

```yml
steps:
# Specify python version if you have side-by-side versions
- task: UsePythonVersion@0
  inputs:
    versionSpec: '3.x'
    architecture: 'x64'

# Update pip to latest
- bash: python -m pip install --upgrade pip
  displayName: 'Upgrade pip'

# Update to latest Azure CLI version, min version required for Azure DevOps is 2.10.1
- bash: pip install --pre azure-cli --extra-index-url https://azurecliprod.blob.core.windows.net/edge
  displayName: 'Upgrade Azure CLI'

# Install Azure DevOps extension
- bash: az extension add -n azure-devops
  displayName: 'Install Azure DevOps extension'

# Now you can make calls into Azure DevOps CLI
# ...
```
