---
title: Azure DevOps CLI in Azure Pipeline YAML
titleSuffix: Azure DevOps 
description: Learn how to use Azure DevOps CLI with a YAML pipeline with these examples that show how to run Azure DevOps CLI commands.
ms.topic: how-to
ms.subservice: azure-devops-reference
ms.custom: devx-track-azurecli, linux-related-content
ms.manager: mijacobs 
ms.author: chcomley  
author: chcomley
monikerRange: 'azure-devops'
ms.date: 05/30/2025
#customer intent: As a team member, I want to use YAML configuration files to manage my pipeline tasks by using Azure DevOps CLI.
---

# Azure DevOps CLI in Azure Pipeline YAML

[!INCLUDE [version-eq-azure-devops](../includes/version-eq-azure-devops.md)] 

If you want to use Azure DevOps CLI with a YAML pipeline, use the following examples to install Azure CLI, add the Azure DevOps extension, and run Azure DevOps CLI commands.

> [!NOTE]
> The steps in this article show how to authenticate with Azure DevOps and run `az devops` commands using the Azure DevOps CLI extension. If you want to use Azure CLI to interact with Azure resources, use the [AzureCLI task](/azure/devops/pipelines/tasks/reference/azure-cli-v2).

## Authenticate with Azure DevOps

Some Azure DevOps CLI commands, like `az devops configure` and `az devops --help`, don't require any authentication. They don't connect into Azure DevOps. Most commands interact with Azure DevOps and do require authentication.

You can authenticate using the [System.AccessToken](../pipelines/build/variables.md#systemaccesstoken) security token used by the running pipeline, by assigning it to an environment variable named `AZURE_DEVOPS_EXT_PAT`, as shown in the following example.

# [Bash](#tab/bash)

```yml
- bash: |
    az pipelines build list --organization '$(System.TeamFoundationCollectionUri)' --project '$(System.TeamProject)'
  displayName: 'Show build list'
  env:
    AZURE_DEVOPS_EXT_PAT: $(System.AccessToken)
```

# [PowerShell](#tab/powershell)

```yml
- pwsh: |
    az pipelines build list --organization '$(System.TeamFoundationCollectionUri)' --project '$(System.TeamProject)'
  displayName: 'Show build list '
  env:
    AZURE_DEVOPS_EXT_PAT: $(System.AccessToken)
```

---

If you have multiple steps that require authentication, add the `AZURE_DEVOPS_EXT_PAT` environment variable to each step.

For more information on the scope of the security token used by the running pipeline, see [Access repositories, artifacts, and other resources](../pipelines/process/access-tokens.md).

For more information about authentication using a personal access token (PAT), see [Sign in with a personal access token](log-in-via-pat.md).

## Sign in to Azure DevOps CLI with Windows and Linux hosted agents

The Microsoft-hosted Windows and Linux agents are preconfigured with Azure CLI and the Azure DevOps CLI extension.

The following example shows how to sign in to Azure DevOps and run a few commands. This example uses the `ubuntu-latest` Microsoft-hosted agent image. You can replace it with any of the other [Windows or Linux hosted images](../pipelines/agents/hosted.md#software).

This example authenticates with Azure DevOps CLI. It uses the [System.AccessToken](../pipelines/build/variables.md#systemaccesstoken) security token used by the running pipeline.

# [Bash](#tab/bash)

```yml
trigger:
- main

pool:
  vmImage: 'ubuntu-latest'

steps:
- bash: az --version
  displayName: 'Show Azure CLI version'

- bash: az devops configure --defaults organization='$(System.TeamFoundationCollectionUri)' project='$(System.TeamProject)' --use-git-aliases true
  displayName: 'Set default Azure DevOps organization and project'

- bash: |
    az pipelines build list
    git pr list
  displayName: 'Show build list and PRs'
  env:
    AZURE_DEVOPS_EXT_PAT: $(System.AccessToken)

```
# [PowerShell](#tab/powershell)

```yml
trigger:
- main

pool:
  vmImage: 'windows-latest'

steps:
- bash: az --version
  displayName: 'Show Azure CLI version'

- pwsh: az devops configure --defaults organization='$(System.TeamFoundationCollectionUri)' project='$(System.TeamProject)' --use-git-aliases true
  displayName: 'Set default Azure DevOps organization and project'

- pwsh: |
    az pipelines build list
    git pr list
  displayName: 'Show build list and PRs'
  env:
    AZURE_DEVOPS_EXT_PAT: $(System.AccessToken)
```

---

## Install Azure DevOps CLI extension with macOS hosted agents

The macOS Microsoft-hosted agents have Azure CLI installed but not the Azure DevOps CLI extension. To install the Azure DevOps CLI extension, run the following command in your pipeline before making any Azure DevOps CLI calls.

```yml
# Install Azure DevOps extension
- bash: az extension add -n azure-devops
  displayName: 'Install Azure DevOps extension'
```

## Upgrade hosted agent Azure CLI version

Microsoft-hosted agents [typically deploy weekly updates](https://github.com/actions/runner-images#image-releases) to the software on the virtual environments. For some tools, the latest version at the time of the deployment is used. In other cases, the tool is pinned to specific versions.

- To check the included software and their versions for Microsoft-hosted agents, including the installed version of Azure CLI and Azure DevOps CLI extension, follow the **Included Software** links in the [Software](../pipelines/agents/hosted.md#software) table.
- To check the current version for Azure CLI, see [How to install the Azure CLI](/cli/azure/install-azure-cli).

You can upgrade the Azure CLI on your hosted images by running the following commands in your pipeline.

# [Bash](#tab/bash)

```yml
# Specify python version
- task: UsePythonVersion@0
  inputs:
    versionSpec: '3.x'
    architecture: 'x64'

# Update to latest Azure CLI version
- bash: pip install --pre azure-cli
  displayName: 'Upgrade Azure CLI'
```

# [PowerShell](#tab/powershell)

```yml
# Specify python version
- task: UsePythonVersion@0
  inputs:
    versionSpec: '3.x'
    architecture: 'x64'

# Update to latest Azure CLI version
- pwsh: pip install --pre azure-cli
  displayName: 'Upgrade Azure CLI'
```

---

## Conditionally install the Azure DevOps CLI extension

If your pipeline runs on several Microsoft-hosted virtual machine images, some of which don't have the Azure DevOps CLI extension installed, you can install conditionally.

# [Bash](#tab/bash)

```yml
trigger:
- main

# Run on multiple Microsoft-hosted agent images
strategy:
  matrix:
    linux24:
      imageName: "ubuntu-24.04"
    linux22:
      imageName: "ubuntu-22.04"
    mac15:
      imageName: "macos-15"
    mac14:
      imageName: "macos-14"
    mac13:
      imageName: "macos-13"
    windows2025:
      imageName: "windows-2025"
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
- bash: az devops configure --defaults organization='$(System.TeamFoundationCollectionUri)' project='$(System.TeamProject)' --use-git-aliases true
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

# [PowerShell](#tab/powershell)

```yml
trigger:
- main

# Run on multiple Microsoft-hosted agent images
strategy:
  matrix:
    linux24:
      imageName: "ubuntu-24.04"
    linux22:
      imageName: "ubuntu-22.04"
    mac15:
      imageName: "macos-15"
    mac14:
      imageName: "macos-14"
    mac13:
      imageName: "macos-13"
    windows2025:
      imageName: "windows-2025"
    windows2022:
      imageName: "windows-2022"
  maxParallel: 3

pool:
  vmImage: $(imageName)

steps:
- pwsh: az --version
  displayName: 'Show Azure CLI version'

# Install Azure DevOps CLI extension only on macOS images
- pwsh: az extension add -n azure-devops
  condition: contains(variables.imageName, 'mac')
  displayName: 'Install Azure DevOps extension'

# Azure DevOps CLI extension call that does not require login or credentials
# since it configures the local environment
- pwsh: az devops configure --defaults organization='$(System.TeamFoundationCollectionUri)' project='$(System.TeamProject)' --use-git-aliases true
  displayName: 'Set default Azure DevOps organization and project'

# Call that does require credentials, use the System.AccessToken PAT
# and assign to AZURE_DEVOPS_EXT_PAT which is known to Azure DevOps CLI extension
- pwsh: |
    az pipelines build list
    git pr list
  env:
    AZURE_DEVOPS_EXT_PAT: $(System.AccessToken)
  displayName: 'Show build list and PRs'
```

---

## Azure DevOps CLI with self-hosted agents

You can use the following methods to install or upgrade the Azure DevOps CLI in your self-hosted agent.

- [Manually install Azure CLI and Azure DevOps CLI extension](#manually-install-azure-cli-and-azure-devops-cli-extension)
- [Install Azure CLI and Azure DevOps CLI extension in your pipeline](#install-azure-cli-and-azure-devops-cli-extension-in-your-pipeline)

### Manually install Azure CLI and Azure DevOps CLI extension

Installing Azure CLI and Azure DevOps CLI extension on your self-hosted agent when you provision the virtual machine image for the agent is faster than installing them each time the pipeline is run.

To install Azure CLI on your self-hosted agent image, see [Install the Azure CLI](/cli/azure/install-azure-cli). There are separate instructions for [Windows](/cli/azure/install-azure-cli-windows), [Linux](/cli/azure/install-azure-cli-linux), and [macOS](/cli/azure/install-azure-cli-macos).

After you install Azure CLI, install the [Azure DevOps CLI extension](index.md).

### Install Azure CLI and Azure DevOps CLI extension in your pipeline

The following example of configuring Azure CLI and Azure DevOps CLI extension on a self-hosted agent using a pipeline has the following prerequisites.

- Install Azure CLI using Python. Python must be installed on the agent according to the instructions in [Python version task - How can I configure a self-hosted agent to use this task?](/azure/devops/pipelines/tasks/reference/use-python-version-v0#how-can-i-configure-a-self-hosted-agent-to-use-this-task). The `UsePythonVersion@0` task doesn't install Python onto your self-hosted agent. If you only have one version of Python installed on your self-hosted agent and it is in the path, you don't need to use the `UsePythonVersion@0` task.

# [Bash](#tab/bash)

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
  - bash: pip install --pre azure-cli
    displayName: 'Upgrade Azure CLI'
  ```

# [PowerShell](#tab/powershell)

  ```yml
  # Specify python version if you have side-by-side versions
  - task: UsePythonVersion@0
    inputs:
      versionSpec: '3.x'
      architecture: 'x64'
  
  # Update pip to latest
  - pwsh: python -m pip install --upgrade pip
    displayName: 'Upgrade pip'
  
  # Update to latest Azure CLI version, min version required for Azure DevOps is 2.10.1
  - pwsh: pip install --pre azure-cli
    displayName: 'Upgrade Azure CLI'
  ```

---

Install Azure CLI DevOps extension:

- Azure CLI version [2.10.1](index.md) or higher is installed. 
- There's a version of `bash` installed on the agent and in the path. A bash installation is required to use the [bash task](/azure/devops/pipelines/tasks/reference/bash-v3).

# [Bash](#tab/bash)

  ```yml
  # Install Azure DevOps extension
  - bash: az extension add -n azure-devops
    displayName: 'Install Azure DevOps extension'
  
  # Now you can make calls into Azure DevOps CLI
  # ...
  ```

# [PowerShell](#tab/powershell)

  ```yml
  # Install Azure DevOps extension
  - pwsh: az extension add -n azure-devops
    displayName: 'Install Azure DevOps extension'
  
  # Now you can make calls into Azure DevOps CLI
  # ...
  ```

---

The following example installs Azure CLI followed by the Azure DevOps CLI extension.

# [Bash](#tab/bash)

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
- bash: pip install --pre azure-cli
  displayName: 'Upgrade Azure CLI'

# Install Azure DevOps extension
- bash: az extension add -n azure-devops
  displayName: 'Install Azure DevOps extension'

# Now you can make calls into Azure DevOps CLI
# ...
```

# [PowerShell](#tab/powershell)

```yml
steps:
# Specify python version if you have side-by-side versions
- task: UsePythonVersion@0
  inputs:
    versionSpec: '3.x'
    architecture: 'x64'

# Update pip to latest
- pwsh: python -m pip install --upgrade pip
  displayName: 'Upgrade pip'

# Update to latest Azure CLI version, min version required for Azure DevOps is 2.10.1
- pwsh: pip install --pre azure-cli
  displayName: 'Upgrade Azure CLI'

# Install Azure DevOps extension
- pwsh: az extension add -n azure-devops
  displayName: 'Install Azure DevOps extension'

# Now you can make calls into Azure DevOps CLI
# ...
```

---

## Assign the results of an Azure DevOps CLI call to a variable

To store the results of an Azure DevOps CLI call to a pipeline variable, use the `task.setvariable` syntax described in [Set variables in scripts](../pipelines/process/variables.md#set-variables-in-scripts). The following example gets the ID of a variable group named **Fabrikam-2023** and uses this value in a subsequent step.

# [Bash](#tab/bash)

```yml
variables:
- name: variableGroupId

trigger: none

pool:
  vmImage: "ubuntu-latest"

steps:
- bash: az devops configure --defaults organization='$(System.TeamFoundationCollectionUri)' project='$(System.TeamProject)' --use-git-aliases true
  displayName: 'Set default Azure DevOps organization and project'

- bash: echo "##vso[task.setvariable variable=variableGroupId]$(az pipelines variable-group list --group-name Fabrikam-2023 --query [].id -o tsv)"
  env:
    AZURE_DEVOPS_EXT_PAT: $(System.AccessToken)
  displayName: 'Get Fabrikam-2023 variable group id'

- bash: az pipelines variable-group variable list --group-id '$(variableGroupId)'
  env:
    AZURE_DEVOPS_EXT_PAT: $(System.AccessToken)
  displayName: 'List variables in Fabrikam-2023 variable group'
```

# [PowerShell](#tab/powershell)

```yml
variables:
- name: variableGroupId

trigger: none

pool:
  vmImage: "windows-latest"

steps:
- pwsh: az devops configure --defaults organization='$(System.TeamFoundationCollectionUri)' project='$(System.TeamProject)' --use-git-aliases true
  displayName: 'Set default Azure DevOps organization and project'

- pwsh: echo "##vso[task.setvariable variable=variableGroupId]$(az pipelines variable-group list --group-name Fabrikam-2023 --query [].id -o tsv)"
  env:
    AZURE_DEVOPS_EXT_PAT: $(System.AccessToken)
  displayName: 'Get Fabrikam-2023 variable group id'

- pwsh: az pipelines variable-group variable list --group-id '$(variableGroupId)'
  env:
    AZURE_DEVOPS_EXT_PAT: $(System.AccessToken)
  displayName: 'List variables in Fabrikam-2023 variable group'
```

---

For more examples of working with variables, including working with variables across jobs and stages, see [Define variables](../pipelines/process/variables.md). For examples of the query syntax used in the previous example, see [How to query Azure CLI command output using a JMESPath query](/cli/azure/query-azure-cli).

## Related articles

- [System.AccessToken](../pipelines/build/variables.md#systemaccesstoken)
- [Access repositories, artifacts, and other resources](../pipelines/process/access-tokens.md)
- [Define variables](../pipelines/process/variables.md)
- [Azure DevOps CLI extension reference](/cli/azure/devops)
- [Azure DevOps CLI extension az pipelines reference](/cli/azure/pipelines)
- [How to query Azure CLI command output using a JMESPath query](/cli/azure/query-azure-cli)
