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
ms.date: 05/18/2021
---

# Azure DevOps CLI in Azure Pipeline YAML

[!INCLUDE [temp](../includes/version-cloud-plus-2020.md)] 

If you prefer to use YAML to provide your release pipeline configuration, you can use the following example to understand how YAML can be used to install Azure CLI and add the Azure DevOps extension.

In the example, you will learn how to add the Azure DevOps extension to Azure CLI and run the build and PR list commands on Linux, macOS and Windows hosted agents.

## Use Azure DevOps CLI with preconfigured agents

The Microsoft-hosted agents are preconfigured with recent versions of Azure CLI and Azure DevOps CLI. You can see the included software for Microsoft-hosted agents by following the **Included Software** links in the [Software](../pipelines/agents/hosted.md#software) table.

The following example shows how to log in to Azure CLI and run a few commands. This example uses the `ubuntu-latest` Microsoft-hosted agent image, but you can replace it with any of the other hosted images.

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

## Install and update CLI on the agent

If your agent isn't preconfigured with the required software to use Azure DevOps CLI, you can install the required software using the following steps.

```yml
steps:
# Specify python version and install if needed
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
```

## Create the azure-pipelines-steps.yml file 

Include the content below.

### For macOS: azure-pipelines-steps-mac.yml

```yaml
steps:
- script: az extension add -n azure-devops
  displayName: 'Install Azure DevOps Extension'

- script: echo ${AZURE_DEVOPS_CLI_PAT} | az devops login
  env:
    AZURE_DEVOPS_CLI_PAT: $(System.AccessToken)
  displayName: 'Login Azure DevOps Extension'

- script: az devops configure --defaults organization=$(System.TeamFoundationCollectionUri) project=$(System.TeamProject) --use-git-aliases true
  displayName: 'Set default Azure DevOps organization and project'

- script: |
    az pipelines build list
    git pr list
  displayName: 'Show build list and PRs'

```

### For Linux: azure-pipelines-steps-linux.yml


```yaml
steps:
# Updating the python version available on the linux agent
- task: UsePythonVersion@0
  inputs:
    versionSpec: '3.x'
    architecture: 'x64'

# Updating pip to latest
- script: python -m pip install --upgrade pip
  displayName: 'Upgrade pip'

# Updating to latest Azure CLI version.
- script: pip install --pre azure-cli --extra-index-url https://azurecliprod.blob.core.windows.net/edge
  displayName: 'upgrade azure cli'

- script: az --version
  displayName: 'Show Azure CLI version'

- script: az extension add -n azure-devops
  displayName: 'Install Azure DevOps Extension'

- script: echo ${AZURE_DEVOPS_CLI_PAT} | az devops login
  env:
    AZURE_DEVOPS_CLI_PAT: $(System.AccessToken)
  displayName: 'Login Azure DevOps Extension'

- script: az devops configure --defaults organization=$(System.TeamFoundationCollectionUri) project=$(System.TeamProject) --use-git-aliases true
  displayName: 'Set default Azure DevOps organization and project'

- script: |
    az pipelines build list
    git pr list
  displayName: 'Show build list and PRs'
```

#### For Windows: azure-pipelines-steps-win.yml

```yaml
steps:
# Updating the python version available on the linux agent
- task: UsePythonVersion@0
  inputs:
    versionSpec: '3.x'
    architecture: 'x64'

# Updating pip to latest which is required by the Azure DevOps extension
- script: python -m pip install --upgrade pip
  displayName: 'Upgrade pip'

# Upgrading Azure CLI from 2.0.46 to latest; min version required for Azure DevOps is 2.0.49
- script: pip install --pre azure-cli --extra-index-url https://azurecliprod.blob.core.windows.net/edge
  displayName: 'upgrade azure cli'

- script: az --version
  displayName: 'Show Azure CLI version'

- script: az extension add -n azure-devops
  displayName: 'Install Azure DevOps Extension'

- script: echo %AZURE_DEVOPS_CLI_PAT% | az devops login
  env:
    AZURE_DEVOPS_CLI_PAT: $(System.AccessToken)
  displayName: 'Login Azure DevOps Extension'

- script: az devops configure --defaults organization=$(System.TeamFoundationCollectionUri) project=$(System.TeamProject) --use-git-aliases true
  displayName: 'Set default Azure DevOps organization and project'

- script: |
    az pipelines build list
    git pr list
  displayName: 'Show build list and PRs'
```

## Create the azure-pipelines.yml 

Include the content below.

```yaml
jobs:
# Running Azure DevOps extension commands on a hosted Mac agent
- job:
  displayName: 'macOS'
  pool:
    vmImage: 'macOS-latest'
  steps:
  - template: azure-pipelines-steps-mac.yml

# Running Azure DevOps extension commands on a hosted Linux agent
- job:
  displayName: 'Linux'
  pool:
    vmImage: 'ubuntu-16.04'
  steps:
  - template: azure-pipelines-steps-linux.yml

# Running Azure DevOps extension commands on a hosted Windows agent
- job:
  displayName: 'Windows'
  pool:
    vmImage: 'vs2017-win2016'
  steps:
  - template: azure-pipelines-steps-win.yml
```
