---
title: 'Azure CLI sample for Azure Pipelines and variable groups'
description: Azure CLI sample for accessing secret and nonsecret variables from a variable group in an Azure Pipeline. This sample uses the azure-devops extension.
author: steved0x
ms.author: jukullam
manager: mijacobs
ms.date: 05/20/2021
ms.topic: sample
ms.devlang: azurecli 
ms.custom: devx-track-azurecli
---

# Use a variable group's secret and nonsecret variables in an Azure Pipeline

In this sample, use the Microsoft Azure DevOps CLI (azure-devops extension) to create an Azure Pipeline that accesses a variable group containing both secret and nonsecret variables.

This script demonstrates three operations:

* Defining a [Azure Pipeline](../../index.yml) using [YAML](../../yaml-schema.md) files
* Creating a [variable group](../../library/variable-groups.md) with nonsecret and secret variables for use in a pipeline
* Running the pipeline using [Azure DevOps CLI](../../../cli/index.md), which also opens a web page for monitoring the pipeline run's processing and output

[!INCLUDE [azure-cli-prepare-your-environment.md](../../includes/azure-cli-prepare-your-environment.md)]

* [Sign up for Azure Pipelines](../../get-started/pipelines-sign-up.md) to get an Azure DevOps organization.
* [Create an Azure DevOps personal access token](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md#create-a-pat) (PAT) for authentication.
* Use or create a [GitHub](https://www.github.com) repository to place the Azure Pipeline in.
* In the GitHub Marketplace, [install the Azure Pipelines application](https://github.com/marketplace/azure-pipelines/) so that Azure Pipelines can access your GitHub repository.

## Sample script

First, save the following YAML file, which defines the Azure Pipeline, to *azure-pipelines.yml* in the root directory of your local repository. Then add and commit the file in GitHub, and push the file to the remote GitHub repository.

```yml
parameters:
- name: image
  displayName: 'Pool image'
  default: ubuntu-latest
  values:
  - windows-latest
  - windows-latest
  - ubuntu-latest
  - ubuntu-latest
  - macOS-latest
  - macOS-latest
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
    echo "Hello, world!"
    echo "Pool image: ${{ parameters.image }}"
    echo "Run tests? ${{ parameters.test }}"
  displayName: 'Show runtime parameter values'

- script: |
    echo "a=$(va)"
    echo "b=$(vb)"
    echo "contososecret=$(vcontososecret)"
    echo
    echo "Count up to the value of the variable group's nonsecret variable *a*:"
    for number in {1..$(va)}
    do
        echo "$number"
    done
    echo "Count up to the value of the variable group's nonsecret variable *b*:"
    for number in {1..$(vb)}
    do
        echo "$number"
    done
    echo "Count up to the value of the variable group's secret variable *contososecret*:"
    for number in {1..$(vcontososecret)}
    do
        echo "$number"
    done
  displayName: 'Test variable group variables (secret and nonsecret)'
  env:
    SYSTEM_ACCESSTOKEN: $(System.AccessToken)
```

After you have published the YAML file in GitHub, replace the placeholders in the following Bash script, and then run the script.

```azurecli
#!/bin/bash

# Provide variable definitions.
devopsToken="<azure-devops-personal-access-token>"
devopsOrg="https://dev.azure.com/<my-azure-devops-account-or-organization-name>"
resourceGroupLocation="<resource-group-location-name-or-id>"
storageAccountLocation="<storage-account-location-name-or-id>"
pipelineName="<my-build>"
githubOrg="<my-github-organization-name>"
githubRepo="<my-github-repository-name>"
repoName="$githubOrg/$githubRepo"
repoType="github"
branch="master"

# Declare other variables.
uniqueId=$RANDOM
resourceGroupName="contoso-storage-rg$uniqueId"
storageAccountName="contosostoracct$uniqueId"  # needs to be lowercase
devopsProject="Contoso DevOps Project $uniqueId"
serviceConnectionName="Contoso Service Connection $uniqueId"
variableGroupName="Contoso Variable Group"

# Sign in to Azure CLI and follow the directions. May be unnecessary in some environments.
echo "Sign in. (For Cloud Shell, provide the device login code.)"
az login

# Create a resource group and a storage account.
az group create --name "$resourceGroupName" --location "$resourceGroupLocation"
az storage account create --name "$storageAccountName" \
    --resource-group "$resourceGroupName" --location "$storageAccountLocation"

# Set the environment variable used for Azure DevOps token authentication.
export AZURE_DEVOPS_EXT_GITHUB_PAT=$devopsToken

# Create the Azure DevOps project. Set the default organization and project.
projectId=$(az devops project create \
    --name "$devopsProject" --organization "$devopsOrg" --visibility public --query id)
projectId=${projectId:1:-1}  # Just set to GUID; drop enclosing quotes.
az devops configure --defaults organization="$devopsOrg" project="$devopsProject"
pipelineRunUrlPrefix="$devopsOrg/$projectId/_build/results?buildId="

# Create GitHub service connection (requires AZURE_DEVOPS_EXT_GITHUB_PAT to be set).
githubServiceEndpointId=$(az devops service-endpoint github create \
    --name "$serviceConnectionName" --github-url "https://www.github.com/$repoName" --query id)
githubServiceEndpointId=${githubServiceEndpointId:1:-1}  # Just set to GUID; drop enclosing quotes.

# Create the pipeline.
pipelineId=$(az pipelines create \
    --name "$pipelineName" \
    --skip-first-run \
    --repository $repoName \
    --repository-type $repoType \
    --branch $branch \
    --service-connection $githubServiceEndpointId \
    --yml-path azure-pipelines.yml \
    --query id)

# Create a variable group with 2 non-secret variables and 1 secret variable.
# (contososecret < a < b). Then run the pipeline.
variableGroupId=$(az pipelines variable-group create \
    --name "$variableGroupName" --authorize true --variables a=12 b=29 --query id)
az pipelines variable-group variable create \
    --group-id $variableGroupId --name contososecret --secret true --value 17
pipelineRunId1=$(az pipelines run --id $pipelineId --open --query id)
echo "Go to the pipeline run's web page to view the output results for the 1st run."
echo "If the web page doesn't automatically appear, go to:"
echo "    ${pipelineRunUrlPrefix}${pipelineRunId1}"
read -p "Press Enter to change the value of one of the variable group's nonsecret variables, then run again:"

# Change the value of one of the variable group's nonsecret variables.
az pipelines variable-group variable update \
    --group-id $variableGroupId --name a --value 22
pipelineRunId2=$(az pipelines run --id $pipelineId --open --query id)
echo "Go to the pipeline run's web page to view the output results for the 2nd run."
echo "If the web page doesn't automatically appear, go to:"
echo "    ${pipelineRunUrlPrefix}${pipelineRunId2}"
read -p "Press Enter to change the value of the variable group's secret variable, then run once more:"

# Change the value of the variable group's secret variable.
az pipelines variable-group variable update \
    --group-id $variableGroupId --name contososecret --value 35
pipelineRunId3=$(az pipelines run --id $pipelineId --open --query id)
echo "Go to the pipeline run's web page to view the output results for the 3rd run."
echo "If the web page doesn't automatically appear, go to:"
echo "    ${pipelineRunUrlPrefix}${pipelineRunId3}"
read -p "Press Enter to continue:"
```

## Clean up resources

After the script sample has been run, the following commands can be used to remove the resource group and all resources associated with it.

```azurecli
az pipelines variable-group delete --group-id $variableGroupId --yes
az pipelines delete --id $pipelineId --yes
az devops service-endpoint delete --id $githubServiceEndpointId --yes
az devops project delete --id $projectId --yes
export AZURE_DEVOPS_EXT_GITHUB_PAT=""
az storage account delete --name $storageAccountName --resource-group $resourceGroupName --yes
az group delete --name $resourceGroupName --yes
az devops configure --defaults organization="" project=""
```

## Azure CLI references used in this article

- [az devops configure](/cli/azure/devops#az_devops_configure)
- [az devops project create](/cli/azure/devops/project#az_devops_project_create)
- [az devops project delete](/cli/azure/devops/project#az_devops_project_delete)
- [az devops service-endpoint github create](/cli/azure/devops/service-endpoint/github#az_devops_service_endpoint_github_create)
- [az group create](/cli/azure/group#az_group_create)
- [az group delete](/cli/azure/group#az_group_delete)
- [az login](/cli/azure/reference-index#az_login)
- [az pipelines create](/cli/azure/pipelines#az_pipelines_create)
- [az pipelines delete](/cli/azure/pipelines#az_pipelines_delete)
- [az pipelines run](/cli/azure/pipelines#az_pipelines_run)
- [az pipelines variable-group create](/cli/azure/pipelines/variable-group#az_pipelines_variable_group_create)
- [az pipelines variable-group delete](/cli/azure/pipelines/variable-group#az_pipelines_variable_group_delete)
- [az pipelines variable-group variable create](/cli/azure/pipelines/variable-group/variable#az_pipelines_variable_group_variable_create)
- [az pipelines variable-group variable update](/cli/azure/pipelines/variable-group/variable#az_pipelines_variable_group_variable_update)
- [az storage account create](/cli/azure/storage/account#az_storage_account_create)
- [az storage account delete](/cli/azure/storage/account#az_storage_account_delete)
