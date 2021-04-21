---
title: 'Azure CLI sample for Azure Pipelines: create, manage, and monitor'
description: Azure CLI sample for creating, managing, and monitoring an Azure Pipeline using Azure DevOps commands.
author: steved0x
ms.author: jukullam
manager: mijacobs
ms.date: 04/20/2021
ms.topic: sample
ms.service: az-devops-project
ms.devlang: azurecli 
ms.custom: devx-track-azurecli
---

# Create, manage, and monitor an Azure pipeline

This sample shows you how to use Azure DevOps CLI commands to work with Azure Pipelines. Before you can run the sample, [sign up for Azure Pipelines](../../get-started/pipelines-sign-up.md) to get an Azure DevOps organization. The sample also requires an [Azure DevOps personal access token](../../../cli/log-in-via-pat.md) (PAT) for authentication. To get an Azure DevOps PAT, see [Use personal access tokens](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md#create-a-pat). Then in the GitHub Marketplace, [install the Azure Pipelines application](https://github.com/marketplace/azure-pipelines/) so that Azure Pipelines can access your GitHub repository.

This script demonstrates three operations:

* Defining a pipeline using [YAML](../../yaml-schema.md) files
* Creating a variable group with nonsecret variables and updating it to add a secret variable
* Using the nonsecret and secret variables from the variable group during a pipeline run

[!INCLUDE [azure-cli-prepare-your-environment.md](../../includes/azure-cli-prepare-your-environment.md)]

## Sample script

First, save the following YAML file to *azure-pipelines.yml* in the root directory of your local repository. Then add and commit the file in GitHub, and push the file to the remote GitHub repository.

```yml
parameters:
- name: image
  displayName: 'Pool image'
  default: ubuntu-latest
  values:
  - windows-latest
  - vs2017-win2016
  - ubuntu-latest
  - ubuntu-16.04
  - macOS-latest
  - macOS-10.14
- name: test
  displayName: Run Tests?
  type: boolean
  default: false

variables:
- group: "Contoso Variable Group"
- name: va
  value: $[variables.a]
- name: vb
  value: $[variables.b]
- name: vcontososecret
  value: $[variables.contososecret]

trigger:
- master

pool:
  vmImage: ubuntu-latest

steps:
- script: |
    echo Hello, world!
    echo Pool image: ${{ parameters.image }}
    echo Run tests? ${{ parameters.test }}
  displayName: 'Show runtime parameter values'

- script: |
    echo a=$(va)
    echo b=$(vb)
    echo contososecret=$(vcontososecret)
    echo Is a less than b? ${{ lt(variables.va, variables.vb) }}
    echo Is a equal to b? ${{ eq(variables.va, variables.vb) }}
    echo Is a greater than b? ${{ gt(variables.va, variables.vb) }}
    echo Is a greater than contososecret? ${{ gt(variables.va, variables.vcontososecret) }}
    echo Is b greater than contososecret? ${{ gt(variables.vb, variables.vcontososecret) }}
    echo Is a less than contososecret? ${{ lt(variables.va, variables.vcontososecret) }}
    echo Is b less than contososecret? ${{ lt(variables.vb, variables.vcontososecret) }}
    echo
    for number in {1..$(contososecret)}
    do
    echo $number
    done
  displayName: 'Test variable group variables (secret and nonsecret)'
  env:
    SYSTEM_ACCESSTOKEN: $(System.AccessToken)
```

Next, replace the placeholders in the following script, and then run it in Bash.

```azurecli
#!/bin/bash

# Provide variable definitions.
devopsToken="<azure-devops-personal-access-token>"
devopsOrg="https://dev.azure.com/<my-azure-devops-account-or-organization-name>"
pipelineName="<my-build>"
pipelineDesc="<my-description>"
githubOrg="<my-github-organization-name>"
githubRepo="<my-github-repository-name>"
repoName="$githubOrg/$githubRepo"
repoType="github"
resourceGroupLocation="<resource-group-location-name-or-id>"
storageAccountLocation="<storage-account-location-name-or-id>"

# Declare other variables.
uniqueId=$RANDOM
resourceGroupName="contoso-storage-rg$uniqueId"
storageAccountName="contosostoracct$uniqueId"  # needs to be lowercase
devopsProject="Contoso DevOps Project $uniqueId"
serviceConnectionName="Contoso Service Connection $uniqueId"
variableGroupName="Contoso Variable Group"

# Create a resource group and a storage account.
az group create --name "$resourceGroupName" --location "$resourceGroupLocation"
az storage account create --name "$storageAccountName" \
    --resource-group "$resourceGroupName" --location "$storageAccountLocation"

# Set the environment variable used for Azure DevOps token authentication.
export AZURE_DEVOPS_EXT_GITHUB_PAT=$devopsToken

# Create the Azure DevOps project. Set the default organization and project.
projectId=$(az devops project create \
    --name "$devopsProject" --organization "$devopsOrg" --visibility public --query id)
az devops configure --defaults organization="$devopsOrg" project="$devopsProject"

# Create GitHub service connection (requires AZURE_DEVOPS_EXT_GITHUB_PAT to be set)
githubServiceEndpointId=$(az devops service-endpoint github create \
    --name "$serviceConnectionName" --github-url "https://www.github.com/$repoName" --query id)

pipelineId=$(az pipelines create \
    --name "$pipelineName" \
    --description "$pipelineDesc" \
    --repository $repoName \
    --repository-type $repoType \
    --service-connection $githubServiceEndpointId \
    --yml-path azure-pipelines.yml \
    --query id)

# Create a variable group with 2 non-secret variables and 1 secret variable
# (contososecret < a < b). Then run the pipeline.
variableGroupId=$(az pipelines variable-group create \
    --name "$variableGroupName" --authorize true --variables a=35 b=86 --query id)
az pipelines variable-group variable create \
    --group-id $variableGroupId --name contososecret --secret true --value 14
az pipelines run --id $pipelineId --open
read -p "Press any key to change the value of the variable group's secret variable, then run again:"

# Change the variable group's secret variable value (a < contososecret < b).
az pipelines variable-group variable update \
    --group-id $variableGroupId --name contososecret --value 53
az pipelines run --id $pipelineId --open
read -p "Press any key to again change the value of the variable group's secret variable, then run again:"

# Change the variable group's secret variable value again (a < b < contososecret).
az pipelines variable-group variable update \
    --group-id $variableGroupId --name contososecret --value 97
az pipelines run --id $pipelineId --open
read -p "Press any key to continue:"
```

## Clean up resources

After the script sample has been run, the following commands can be used to remove the resource group and all resources associated with it.

```azurecli-interactive
az pipelines variable-group delete --group-id $variableGroupId --yes
az pipelines delete --id $pipelineId --yes
az devops service-endpoint delete --id $githubServiceEndpointId --yes
az devops project delete --id "$projectId" --yes
export AZURE_DEVOPS_EXT_GITHUB_PAT=""
az storage account delete --name $storageAccountName --resource-group $resourceGroupName --yes
az group delete --name $resourceGroupName --yes
az devops configure --defaults organization="" project=""
```

## Azure CLI references used in this article

- [az devops configure](/cli/azure/ext/azure-devops/devops#az_devops_configure)
- [az devops project create](/cli/azure/devops/project#az_devops_project_create)
- [az devops project delete](/cli/azure/devops/project#az_devops_project_delete)
- [az devops service-endpoint github create](/cli/azure/ext/azure-devops/devops/service-endpoint/github#az_devops_service_endpoint_github_create)
- [az group create](/cli/azure/group#az_group_create)
- [az group delete](/cli/azure/group#az_group_delete)
- [az pipelines create](/cli/azure/ext/azure-devops/pipelines#az_pipelines_create)
- [az pipelines delete](/cli/azure/ext/azure-devops/pipelines#az_pipelines_delete)
- [az pipelines run](/cli/azure/ext/azure-devops/pipelines#az_pipelines_run)
- [az pipelines variable-group create](/cli/azure/pipelines/variable-group#az_pipelines_variable_group_create)
- [az pipelines variable-group delete](/cli/azure/pipelines/variable-group#az_pipelines_variable_group_delete)
- [az pipelines variable-group variable create](/cli/azure/pipelines/variable-group/variable#az_pipelines_variable_group_variable_create)
- [az pipelines variable-group variable update](/cli/azure/pipelines/variable-group/variable#az_pipelines_variable_group_variable_update)
- [az storage account create](/cli/azure/storage/account#az_storage_account_create)
- [az storage account delete](/cli/azure/storage/account#az_storage_account_delete)
