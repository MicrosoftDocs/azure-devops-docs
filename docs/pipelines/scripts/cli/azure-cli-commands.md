---
title: 'Azure CLI sample for Azure Pipelines: create, manage, and monitor'
description: Azure CLI sample for creating, managing, and monitoring an Azure Pipeline using Azure DevOps commands.
author: steved0x
ms.author: jukullam
manager: mijacobs
ms.date: 03/15/2021
ms.topic: sample
ms.service: az-devops-project
ms.devlang: azurecli 
ms.custom: devx-track-azurecli
---

# Create, manage, and monitor an Azure pipeline

This sample shows you how to use Azure DevOps CLI commands to work with Azure pipelines. Before you can run the sample, [sign up for Azure Pipelines](../../get-started/pipelines-sign-up.md) to get an Azure DevOps organization and create a project to contain the pipeline. The sample also requires an [Azure DevOps personal access token](../../../cli/log-in-via-pat.md) (PAT) for authentication. To get an Azure DevOps PAT, see [Use personal access tokens](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md#create-a-pat). Then in the GitHub Marketplace, [install the Azure Pipelines application](https://github.com/marketplace/azure-pipelines/) so that Azure Pipelines can access your GitHub repository.

This script demonstrates three operations:

* Showing how to use authentication to work with pipelines in Azure DevOps CLI
* Using [YAML](../../yaml-schema.md) files to define the pipeline
* Managing and monitoring a pipeline

[!INCLUDE [azure-cli-prepare-your-environment.md](../../../../../includes/azure-cli-prepare-your-environment.md)]

## Sample script

> [!NOTE]
> Add note of FYI or caution if needed here.

```azurecli-interactive
#!/bin/bash
# <anything the reader needs to know that is not already in prerequisites

# Provide variable definitions.
devopsToken='azure-devops-personal-access-token'
# devopsToken=$(cat <token-file-path-and-name>)  # Define from token file.
devopsOrg='https://dev.azure.com/<my-organization>'
devopsProject='<my-project>'
pipelineName='<my-build>'
pipelineDesc='<my-description>'
repoType='github'; repoName='<my-github-username>/<my-repository>'
# repoType='tfsgit'; repoName='<my-repository-in-azure-devops-project>'
repoBranch='master'

# Set the environment variable used for Azure DevOps token authentication
export AZURE_DEVOPS_EXT_GITHUB_PAT=$devopsToken
export AZURE_DEVOPS_EXT_PAT=$devopsToken

# Set up your default Azure DevOps organization and project
az devops configure --defaults organization=$devopsOrg project=$devopsProject

# Create Azure Resource Manager service connection
export AZURE_DEVOPS_EXT_AZURE_RM_SERVICE_PRINCIPAL_KEY=<client secret string value from your service principal>
az devops service-endpoint azurerm create \
    --name <service-connection-name-to-create> \
    --azure-rm-subscription-id <subscription-guid> \
    --azure-rm-subscription-name "<name-of-subscription>" \
    --azure-rm-service-principal-id <service-principal-application-guid> \
    --azure-rm-tenant-id <service-principal-directory-guid>


az pipelines create \
    --name $pipelineName \
    --description $pipelineDesc \
    --repository $repoName \
    --repository-type $repoType \
    --branch $repoBranch \
    --service-connection v-dele-serv-conn https://1essharedassets.pkgs.visualstudio.com/_packaging/Axon/nuget/v3/index.json \


read -p "Press any key to <do the next step"
az referenceName command
```

## Clean up resources

After the script sample has been run, the following command can be used to remove the resource group and all resources associated with it.

```azurecli-interactive
az group delete --name $resourceGroupName
```

## Azure CLI references used in this article

Remove this sentence: alphabetize this list and provide links at the command level

- [az config param-persist delete](/cli/azure/config/param-persist#az_config_param_persist_delete)
- [az config param-persist off](/cli/azure/config/param-persist#az_config_param_persist_off)
- [az config param-persist on](/cli/azure/config/param-persist#az_config_param_persist_on)
- [az config param-persist show](/cli/azure/config/param-persist#az_config_param_persist_show)
- [az function app create](/cli/azure/functionapp#az_functionapp_create)
- [az group create](/cli/azure/group#az_group_create)
- [az storage account create](/cli/azure/storage/account#az_storage_account_create)
- [az devops configure](/cli/azure/ext/azure-devops/devops#ext_azure_devops_az_devops_configure)
- [az devops service-endpoint create](/cli/azure/ext/azure-devops/devops/service-endpoint#ext_azure_devops_az_devops_service_endpoint_create)
- [az pipelines create](/cli/azure/ext/azure-devops/pipelines#ext_azure_devops_az_pipelines_create)
- [az pipelines run](/cli/azure/ext/azure-devops/pipelines#ext_azure_devops_az_pipelines_run)
- [az pipelines show](/cli/azure/ext/azure-devops/pipelines#ext_azure_devops_az_pipelines_show)
- [az pipelines variable-group create](/cli/azure/pipelines/variable-group#az_pipelines_variable_group_create)
- 