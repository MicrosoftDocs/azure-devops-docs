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

## Azure DevOps CLI with Windows and Linux hosted agents

The Microsoft-hosted Windows and Linux agents are preconfigured with Azure CLI and the Azure DevOps CLI extension. 

> [!IMPORTANT]
> Microsoft-hosted agents [typically deploy weekly updates](https://github.com/actions/virtual-environments#updates-to-virtual-environments) to the software on the virtual environments. For some tools, the latest version at the time of the deployment is used; for others, the tool is pinned to specific version(s).
>
> To check the included software and their versions for Microsoft-hosted agents, including the versions of Azure CLI and Azure DevOps CLI extension, follow the **Included Software** links in the [Software](../pipelines/agents/hosted.md#software) table.

The following example shows how to log in to Azure CLI and run a few commands. This example uses the `ubuntu-latest` Microsoft-hosted agent image, but you can replace it with any of the other Windows or Linux hosted images.

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

## Azure DevOps CLI with macOS hosted agents

The macOS Microsoft-hosted agents have Azure CLI installed but not the Azure DevOps CLI extension. As of the time of this writing, the **macOS X Catalina 10.15** hosted agent has Azure CLI 2.23.0 installed, and the **macOS X Mojave 10.14** agent image has Azure CLI 2.22.1 installed. To see the installed software for Microsoft-hosted agents, follow the **Included Software** links in the [Software](../pipelines/agents/hosted.md#software) table.

### macOS X Catalina 10.15

To install the Azure DevOps CLI extension, run the following command in your pipeline before calling `az devops login`.

```yml
# Install Azure DevOps extension
- bash: az extension add -n azure-devops
  displayName: 'Install Azure DevOps extension'
```

### macOS X Catalina 10.14

The minimum Azure CLI version that supports the Azure DevOps CLI extension is 2.0.49, and the macOS X Catalina 10.14 hosted agent has Azure CLI 2.22.1 installed. To install the Azure DevOps CLI extension using that version of Azure CLI, run the following command in your pipeline before calling `az devops login`.

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

## Azure DevOps CLI with self-hosted agents

If your self-hosted agent isn't preconfigured with the required software to use Azure DevOps CLI, or if you want to ensure you have the latest versions, you can install the required software using the following steps.

> [!IMPORTANT]
> The `UsePythonVersion@0` task does not install Python onto your self-hosted agent. The self-hosted agent must have Python installed as described in [Python version task - How can I configure a self-hosted agent to use this task?](../pipelines/tasks/tool/use-python-version.md#how-can-i-configure-a-self-hosted-agent-to-use-this-task). If you only have one version of Python installed on your self-hosted agent and it is in the path, you don't need to use the `UsePythonVersion@0` task.

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

# Update to latest Azure CLI version, min version required for Azure DevOps is 2.0.49
- bash: pip install --pre azure-cli --extra-index-url https://azurecliprod.blob.core.windows.net/edge
  displayName: 'Upgrade Azure CLI'

# Install Azure DevOps extension
- bash: az extension add -n azure-devops
  displayName: 'Install Azure DevOps extension'

# Now you can make calls into Azure DevOps CLI
# ...
```
