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

## Use Azure DevOps CLI with preconfigured agents

The Microsoft-hosted agents are preconfigured with recent versions of Azure CLI and Azure DevOps CLI. You can view the included software for Microsoft-hosted agents, including the versions of Azure CLI and Azure DevOps CLI extension by following the **Included Software** links in the [Software](../pipelines/agents/hosted.md#software) table.

The following example shows how to log in to Azure CLI and run a few commands. This example uses the `ubuntu-latest` Microsoft-hosted agent image, but you can replace it with any of the other hosted images.

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

## Install and update CLI on the agent

Microsoft-host agents have Azure CLI and the Azure DevOps extension pre-installed. If your self-hosted agent isn't preconfigured with the required software to use Azure DevOps CLI, or if you want to ensure you have the latest versions, you can install the required software using the following steps.

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

# Now you can make calls into Azure DevOps CLI
# ...
```
