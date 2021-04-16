---
title: 'Azure CLI sample for Azure Pipelines: create, manage, and monitor'
description: Azure CLI sample for creating, managing, and monitoring an Azure Pipeline using Azure DevOps commands.
author: steved0x
ms.author: jukullam
manager: mijacobs
ms.date: 04/15/2021
ms.topic: sample
ms.service: az-devops-project
ms.devlang: azurecli 
ms.custom: devx-track-azurecli
---

# Create, manage, and monitor an Azure pipeline

This sample shows you how to use Azure DevOps CLI commands to work with Azure Pipelines. Before you can run the sample, [sign up for Azure Pipelines](../../get-started/pipelines-sign-up.md) to get an Azure DevOps organization. The sample also requires an [Azure DevOps personal access token](../../../cli/log-in-via-pat.md) (PAT) for authentication. To get an Azure DevOps PAT, see [Use personal access tokens](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md#create-a-pat). Then in the GitHub Marketplace, [install the Azure Pipelines application](https://github.com/marketplace/azure-pipelines/) so that Azure Pipelines can access your GitHub repository.

This script demonstrates three operations:

* Showing how to use authentication to work with pipelines in Azure DevOps CLI
* Defining a pipeline using [YAML](../../yaml-schema.md) files and variable groups that contain secret and nonsecret variables
* Managing and monitoring a pipeline

[!INCLUDE [azure-cli-prepare-your-environment.md](../../includes/azure-cli-prepare-your-environment.md)]

## Sample script

> [!NOTE]
> Add note of FYI or caution if needed here.

First, save the following YAML file to `azure-pipelines.yml` in the root directory of your local repository. Then add and commit the file in GitHub, and push the file to the remote GitHub repository.

```yml
# Azure file copy
# Copy files to Azure Blob Storage or virtual machines
- task: AzureFileCopy@4
  inputs:
    sourcePath: 
    azureSubscription: "APEX C+L - Aquent Vendor Subscriptions"
    destination: AzureBlob
    storage: contosostoragewebblob1
    containerName: $web
    #blobPrefix: # Optional
    #resourceGroup: # Required when destination == AzureVMs
    #resourceFilteringMethod: 'machineNames' # Optional. Options: machineNames, tags
    #machineNames: # Optional
    #vmsAdminUserName: # Required when destination == AzureVMs
    #vmsAdminPassword: # Required when destination == AzureVMs
    #targetPath: # Required when destination == AzureVMs
    #additionalArgumentsForBlobCopy: # Optional
    #additionalArgumentsForVMCopy: # Optional
    #enableCopyPrerequisites: false # Optional
    #copyFilesInParallel: true # Optional
    #cleanTargetBeforeCopy: false # Optional
    #skipCACheck: true # Optional
    #sasTokenTimeOutInMinutes: # Optional
```

Next, in the following Bash script, replace the placeholders, and then run the script:

```azurecli-interactive
#!/bin/bash
# <anything the reader needs to know that is not already in prerequisites

# Provide variable definitions.
devopsToken="<azure-devops-personal-access-token>"
devopsOrg="https://dev.azure.com/<my-organization-name>"
pipelineName="<my-build>"
pipelineDesc="<my-description>"
repoType="github"; repoName="<my-github-username>/<my-repository>"
# repoType="tfsgit"; repoName="<my-repository-in-azure-devops-project>"
serviceConnectionName="<my-service-connection-name>"
resourceGroupLocation="<resource-group-location-name-or-id>"
storageAccountLocation="<storage-account-location-name-or-id>"

# Declare other variables.
uniqueId=$RANDOM
resourceGroupName="contoso-storage-rg$uniqueId"
storageAccountName="contosostoracct$uniqueId"  # needs to be lowercase
devopsProject="Contoso DevOps Project $uniqueId"
repoBranch="master"
variableGroupName="Contoso Variable group $uniqueId"

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
    --branch $repoBranch \
    --service-connection $githubServiceEndpointId \
    --yml-path azure-pipelines.yml
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

After the script sample has been run, the following command can be used to remove the resource group and all resources associated with it.

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

- [az group create](/cli/azure/group#az_group_create)
- [az group delete](/cli/azure/group#az_group_delete)
- [az devops configure](/cli/azure/ext/azure-devops/devops#az_devops_configure)
- [az devops project create](/cli/azure/devops/project#az_devops_project_create)
- [az devops project delete](/cli/azure/devops/project#az_devops_project_delete)
- [az devops service-endpoint github create](/cli/azure/ext/azure-devops/devops/service-endpoint/github#ext_azure_devops_az_devops_service_endpoint_github_create)
- [az pipelines create](/cli/azure/ext/azure-devops/pipelines#az_pipelines_create)
- [az pipelines delete](/cli/azure/ext/azure-devops/pipelines#az_pipelines_delete)
- [az pipelines run](/cli/azure/ext/azure-devops/pipelines#ext_azure_devops_az_pipelines_run)
- [az pipelines show](/cli/azure/ext/azure-devops/pipelines#ext_azure_devops_az_pipelines_show)
- [az pipelines variable-group create](/cli/azure/pipelines/variable-group#az_pipelines_variable_group_create)
- [az pipelines variable-group delete](/cli/azure/pipelines/variable-group#az_pipelines_variable_group_delete)
- [az pipelines variable-group variable create](/cli/azure/pipelines/variable-group/variable#az_pipelines_variable_group_variable_create)
- [az pipelines variable-group variable update](/cli/azure/pipelines/variable-group/variable#az_pipelines_variable_group_variable_update)
- [az storage account create](/cli/azure/storage/account#az_storage_account_create)
- [az storage account delete](/cli/azure/storage/account#az_storage_account_delete)
