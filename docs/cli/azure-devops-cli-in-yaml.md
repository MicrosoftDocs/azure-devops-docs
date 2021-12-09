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
ms.date: 09/22/2021
---

# Azure DevOps CLI in Azure Pipeline YAML

[!INCLUDE [temp](../includes/version-cloud-plus-2020.md)] 

If you wish to use Azure DevOps CLI with a YAML pipeline, you can use the following example to understand how YAML can be used to install Azure CLI, add the Azure DevOps extension, and run Azure DevOps CLI commands.

> [!NOTE]
> The steps in this article show how to authenticate with Azure DevOps and run `az devops` commands using the Azure DevOps CLI extension. If you want to use Azure CLI to interact with Azure resources, use the [AzureCLI task](../pipelines/tasks/deploy/azure-cli.md).

## Authenticate with Azure DevOps

Some Azure DevOps CLI commands that don't call into Azure DevOps, like `az devops configure` and `az devops -h`, do not require any authentication, but most commands interact with Azure DevOps and do require authentication. You can authenticate using the [System.AccessToken](../pipelines/build/variables.md#systemaccesstoken) security token used by the running pipeline, by assigning it to an environment variable named `AZURE_DEVOPS_EXT_PAT`, as shown in the following example.

```yml
- bash: |
    az pipelines build list
  displayName: 'Show build list'
  env:
    AZURE_DEVOPS_EXT_PAT: $(System.AccessToken)
```

If you have multiple steps that require authentication, add the `AZURE_DEVOPS_EXT_PAT` environment variable to each step.

For more information on the scope of the security token used by the running pipeline, see [Access repositories, artifacts, and other resources](../pipelines/process/access-tokens.md).

For more information about authentication using a personal access token, see [Sign in with a personal access token (PAT)](log-in-via-pat.md).

## Azure DevOps CLI with Windows and Linux hosted agents

The Microsoft-hosted Windows and Linux agents are preconfigured with Azure CLI and the Azure DevOps CLI extension. 

The following example shows how to log in to Azure DevOps and run a few commands. This example uses the `ubuntu-latest` Microsoft-hosted agent image, but you can replace it with any of the other [Windows or Linux hosted images](../pipelines/agents/hosted.md#software).

This example authenticates with Azure DevOps CLI using the [System.AccessToken](../pipelines/build/variables.md#systemaccesstoken) security token used by the running pipeline.

```yml
trigger:
- main

pool:
  vmImage: `ubuntu-latest`

steps:
- bash: az --version
  displayName: 'Show Azure CLI version'

- bash: az devops configure --defaults organization=$(System.TeamFoundationCollectionUri) project=$(System.TeamProject) --use-git-aliases true
  displayName: 'Set default Azure DevOps organization and project'

- bash: |
    az pipelines build list
    git pr list
  displayName: 'Show build list and PRs'
  env:
    AZURE_DEVOPS_EXT_PAT: $(System.AccessToken)

```

## Azure DevOps CLI with macOS hosted agents

The macOS Microsoft-hosted agents have Azure CLI installed but not the Azure DevOps CLI extension. To install the Azure DevOps CLI extension, run the following command in your pipeline before making any Azure DevOps CLI calls.

```yml
# Install Azure DevOps extension
- bash: az extension add -n azure-devops
  displayName: 'Install Azure DevOps extension'
```

## Hosted agent Azure CLI version

Microsoft-hosted agents [typically deploy weekly updates](https://github.com/actions/virtual-environments#updates-to-virtual-environments) to the software on the virtual environments. For some tools, the latest version at the time of the deployment is used; for others, the tool is pinned to specific version(s). 

* To check the included software and their versions for Microsoft-hosted agents, including the installed version of Azure CLI and Azure DevOps CLI extension, follow the **Included Software** links in the [Software](../pipelines/agents/hosted.md#software) table.
* To check the current version for Azure CLI, see [How to install the Azure CLI](/cli/azure/install-azure-cli).

If a newer version of Azure CLI is released and the hosted images do not yet have the latest version, you can upgrade the Azure CLI version to the latest version by running the following commands in your pipeline.

```yml
# Specify python version
- task: UsePythonVersion@0
  inputs:
    versionSpec: '3.x'
    architecture: 'x64'

# Update to latest Azure CLI version
- bash: pip install --pre azure-cli --extra-index-url https://azurecliprod.blob.core.windows.net/edge
  displayName: 'Upgrade Azure CLI'
```


## Conditionally install the Azure DevOps CLI extension

If you have a pipeline that runs on several Microsoft-hosted VM images, some of which do not have the Azure DevOps CLI extension installed, you can perform that step conditionally, as shown in the following example.

```yml
trigger:
- main

# Run on multiple Microsoft-hosted agent images
strategy:
  matrix:
    linux18:
      imageName: "ubuntu-18.04"
    linux20:
      imageName: "ubuntu-20.04"
    mac1015:
      imageName: "macos-10.15"
    macOS11:
      imageName: "macos-11"
    windows2019:
      imageName: "windows-2019"
    windows2022:
      imageName: "windows-2022"
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

If your self-hosted agent isn't configured with the required software to use Azure DevOps CLI, or if you want to ensure you have the latest versions, you can install the required software using the following steps.

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

## Assign the results of an Azure DevOps CLI call to a variable

To store the results of an Azure DevOps CLI call to a pipeline variable, use the `task.setvariable` syntax described in [Set variables in scripts](../pipelines/process/variables.md#set-variables-in-scripts). The following example retrieves the ID of a variable group named **Fabrikam-2021** and then uses this value in a subsequent step.

```yml
variables:
- name: variableGroupId

trigger: none

pool:
  vmImage: "ubuntu-latest"

steps:
- bash: az devops configure --defaults organization=$(System.TeamFoundationCollectionUri) project=$(System.TeamProject) --use-git-aliases true
  displayName: 'Set default Azure DevOps organization and project'

- bash: echo "##vso[task.setvariable variable=variableGroupId]$(az pipelines variable-group list --group-name Fabrikam-2021 --query [].id -o tsv)"
  env:
    AZURE_DEVOPS_EXT_PAT: $(System.AccessToken)
  displayName: 'Get Fabrikam-2021 variable group id'

- bash: az pipelines variable-group variable list --group-id $(variableGroupId)
  env:
    AZURE_DEVOPS_EXT_PAT: $(System.AccessToken)
  displayName: 'List variables in Fabrikam-2021 variable group'
```

For more examples of working with variables, including working with variables across jobs and stages, see [Define variables](../pipelines/process/variables.md). For examples of the query syntax used in the previous example, see [How to query Azure CLI command output using a JMESPath query](/cli/azure/query-azure-cli).

## Related articles

* [System.AccessToken](../pipelines/build/variables.md#systemaccesstoken)
* [Access repositories, artifacts, and other resources](../pipelines/process/access-tokens.md)
* [Define variables](../pipelines/process/variables.md)
* [Azure DevOps CLI extension reference](/cli/azure/devops)
* [Azure DevOps CLI extension az pipelines reference](/cli/azure/pipelines)
* [How to query Azure CLI command output using a JMESPath query](/cli/azure/query-azure-cli)
