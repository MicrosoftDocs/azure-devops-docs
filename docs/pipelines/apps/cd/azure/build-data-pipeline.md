---
title: Build a data pipeline with Azure Pipelines
description: Learn how to use an Azure CI/CD data pipeline to ingest, process, and share data
ms.author: jukullam
author: JuliaKM
ms.technology: devops-cicd-apps
ms.date: 07/17/2020
ms.topic: conceptual
monikerRange: '=azure-devops'
---

# Build a data pipeline with DevOps, Azure Data Factory, and machine learning

Get started with data pipelines by building a data pipeline with data ingestion, data transformation, and model training. 

Learn how to grab data from a CSV and save to blob storage, and then transform the data and save it to a staging area. Then train a machine learning model using the transformed data and output the model as pickle file to blob storage. 

## Prerequisites

Before you begin, you need:
- An Azure account with an active subscription. [Create an account for free](https://azure.microsoft.com/free/?WT.mc_id=A261C142F).
- An active Azure DevOps organization. [Sign up for Azure Pipelines](../../../get-started/pipelines-sign-up.md).
- Downloaded data ([sample.csv](https://github.com/MicrosoftDocs/azure-devops-docs-samples/raw/main/azure-data-pipeline/data/sample.csv))
- Access to the [data pipeline solution](https://github.com/MicrosoftDocs/azure-devops-docs-samples/tree/main/azure-data-pipeline) in GitHub 
- [DevOps for Azure Databricks](https://marketplace.visualstudio.com/items?itemName=riserrad.azdo-databricks)

## Provision Azure resources

1. Sign in to the [Azure portal](https://portal.azure.com/).
1. From the menu, select **Cloud Shell**. When prompted, select the **Bash** experience.

    :::image type="content" source="media/azure-portal-menu-cloud-shell.png" alt-text="Select Cloud Shell from menu bar":::

    > [!NOTE]
    > Cloud Shell requires an Azure storage resource to persist any files that you create in Cloud Shell. When you first open Cloud Shell, you're prompted to create a resource group, storage account, and Azure Files share. This setup is automatically used for all future Cloud Shell sessions.

## Select an Azure region

A _region_ is one or more Azure datacenters within a geographic location. East US, West US, and North Europe are examples of regions. Every Azure resource, including an App Service instance, is assigned a region.

To make commands easier to run, start by selecting a default region. After you specify the default region, later commands use that region unless you specify a different region.

1. From Cloud Shell, run the following `az account list-locations` command to list the regions that are available from your Azure subscription.

    ```azurecli
    az account list-locations \
      --query "[].{Name: name, DisplayName: displayName}" \
      --output table
    ```

1. From the `Name` column in the output, choose a region that's close to you. For example, choose `eastasia` or `westus2`.

1. Run `az configure` to set your default region. Replace `<REGION>` with the name of the region you chose.

    ```azurecli
    az configure --defaults location=<REGION>
    ```

    This example sets `westus2` as the default region:

    ```azurecli
    az configure --defaults location=westus2
    ```

### Create Bash variables

1. From Cloud Shell, generate a random number. This will make it easier to create globally unique names for certain services in the next step.

    ```bash
    resourceSuffix=$RANDOM
    ```

1. Create globally unique names for your storage account and key vault. These commands use double quotes, which instruct Bash to interpolate the variables using the inline syntax.

    ```bash
    storageName="datacicd${resourceSuffix}"
    keyVault="keyvault${resourceSuffix}"
    ```

1. Create one more Bash variable to store the names of your resource group.

    ```bash
    rgName='data-pipeline-cicd-rg'
    ```

## Create Azure resources

1. Run the following `az group create` command to create a resource group using `rgName`.

    ```azurecli
    az group create --name $rgName
    ```

1. Run the following `az storage account create` command to create a new storage account.

    ```azurecli
    az storage account create \
        --name $storageName \
        --resource-group $rgName \
        --sku Standard_RAGRS \
        --kind StorageV2
    ```

    1. Run the following `az storage container create` command to create two containers, `rawdata`, `prepareddata`.
    
    ```azurecli
    az storage container create -n rawdata --account-name $storageName 
    az storage container create -n prepareddata --account-name $storageName 
    ```
    
1. Run the following `az keyvault create` command to create a new key vault. 

    ```azurecli
    az keyvault create \
        --name $keyVault \
        --resource-group $rgName
    ```

1. [Create a new Azure Data Factory](https://ms.portal.azure.com/#create/hub) within the Azure portal UI. 

    * Name: `data-factory-cicd`
    * Version: `V2`
    * Resource Group: `data-pipeline-cicd-rg`
    * Location: your closest location
    * Uncheck **Enable GIT**

   1. Add the Azure Data Factory extension. 
   
    ```azurecli
   az extension add --name datafactory
    ```   
   2. Run the following `az datafactory factory create` command to create a new data factory.  
    
   ```azurecli
    az datafactory factory create \
        --name data-factory-cicd \
        --resource-group $rgName
   ```
    3. Copy the Subscription ID for your Data Factory to use later. 


1. [Add a new Azure Databricks service](https://ms.portal.azure.com/#create/hub). 
    * Resource Group: `data-pipeline-cicd-rg`
    * Workspace name: `databricks-cicd-ws`    
    * Location: your closest location
     
   1. Add the Azure Databricks extension if it is not already installed. 

   ```azurecli
    az extension add --name databricks
    ```   
    
   2. Run the following `az databricks workspace create` command to create a new workspace.  
    ```azurecli
    az databricks workspace create \
        --resource-group $rgName \
        --name databricks-cicd-ws  \
        --location eastus2  \
        --sku standard
    ```
  3. Copy the Subscription ID for your Databricks service to use later. 

## Upload data to your storage container

1. Open your storage account in the Azure portal UI in the `data-pipeline-cicd-rg` resource group. 
1. Go to **Blob Service** > **Containers**.
1. Open the `prepareddata` container.
1. Upload `sample.csv` (source).


## Set up Key Vault

You will use Key Vault to store all connection information for your Azure services.

### Create a Databricks personal access token
1. Go Databricks in the Azure portal and launch your workspace. 
1. Generate and copy a personal access token in the Azure Databricks UI ([steps](https://docs.microsoft.com/azure/databricks/dev-tools/api/latest/authentication#--generate-a-personal-access-token)). 

### Copy the account key and connection string for your storage account 
1. Go to your storage account. 
1. Open **Access keys**. 
1. Copy the first key and connection string. 

### Save values to Key Vault
1. Create three secrets:
    
    * databricks-token: `your-databricks-pat`
    * StorageKey: `your-storage-key`    
    * StorageConnectString: `your-storage-connection`

    1. Run the following `az keyvault secret set` command to add secrets to key vault.  
   
     ```azurecli
     az keyvault secret set --vault-name "$keyVault" --name "databricks-token" --value "your-databricks-pat"
     az keyvault secret set --vault-name "$keyVault" --name "StorageKey" --value "your-storage-key"
     az keyvault secret set --vault-name "$keyVault" --name "StorageConnectString" --value "your-storage-connection"
    ```

## Import the data pipeline solution
1. Sign in to your Azure DevOps organization and navigate to your project.
1. Go to **Repos** and import your forked version of the [GitHub repository](https://github.com/MicrosoftDocs/azure-devops-docs-samples/raw/main/azure-data-pipeline/). Learn more about [importing repositories from GitHub](../../../../repos/git/import-git-repository.md). 

## Add an Azure Resource Manager service connection
1. Create an Azure Resource Manager [service connection](../../../library/service-endpoints.md).
1. Select `Service Principal (automatic)`.
1. Choose the `data-pipeline-cicd-rg` resource group.
1. Name the service connection `azure_rm_connection`.
1. Check **Grant access permission to all pipelines**. 

## Add pipeline variables
1. [Create a new variable group](../../../library/variable-groups.md) named `datapipeline-vg`.
1. Add these variables:
    * LOCATION: `location for your resources in the Azure Portal, example eastus2`
    * RESOURCE_GROUP: `data-pipeline-cicd-rg`
    * DATA_FACTORY_NAME: `data factory name from Azure portal`
    * DATA_FACTORY_DEV_NAME: `data factory name from Azure portal`
    * DATA_FACTORY_TEST_NAME: `data factory name from Azure portal`
    * ADF_PIPELINE_NAME: `DataPipeline`
    * DATABRICKS_NAME: `databricks name from Azure portal`
    * AZURE_RM_CONNECTION: `azure_rm_connection`
    * DATABRICKS_URL: `URL copied from Databricks in Azure portal`
    * STORAGE_ACCOUNT_NAME: `storage account name from Azure portal`
    * STORAGE_CONTAINER_NAME: `rawdata`
1. Create a second variable group named `keys-vg` that pulls data variables from Azure key vault. 
1. Check **Link secrets from an Azure key vault as variables**. Learn how to [link secrets from an Azure key vault](../../../library/variable-groups.md#link-secrets-from-an-azure-key-vault). 
1. Authorize the Azure subscription. 
1. Choose all of the available secrets to add as variables (`databricks-token`,`StorageConnectString`,`StorageKey`).


## Configure Azure Databricks and Azure Data Factory 

### Create `testscope` in Azure Databricks

1. Go to **Key vault** > **Properties** in the Azure portal UI. 
1. Copy the **DNS Name** and **Resource ID**. 
1. [Create a secret scope in your Azure Databricks workspace](https://docs.microsoft.com/azure/databricks/security/secrets/secret-scopes) named `testscope`. 


### Set up code repository in Azure Data Factory

1. Go to **Author & Monitor** in Azure Data Factory. Learn more about [setting up Azure Data Factory](https://docs.microsoft.com/azure/data-factory/quickstart-create-data-factory-portal). 
1. Click **Set up code repository** and connect your repo. 
    * Repository type: Azure DevOps Git
    * Azure DevOps organization: Your active account
    * Project name: Your Azure DevOps data pipeline project
    * Git repository name: **Use existing**. 
        * Select the **master** branch for collaboration.     
        * Set **/factorydata** as the root folder
    * Branch to import resource into: Select **Use existing** and **master**

### Update key vault linked service in Azure Data Factory
1. Go to **Manage** > **Linked services**.
1. Update the Azure key vault to connect to your subscription. 
1. Click **Publish** to update the pipeline. 


## Run the CI/CD pipeline

1. Navigate to the **Pipelines** page. Then choose the action to create a new pipeline.
1. Select **Azure Repos Git** as the location of your source code.
1. When the list of repositories appears, select your repository. 
1. When configuring your pipeline, select **Existing Azure Pipelines YAML file** and choose the YAML file at `/azure-data-pipeline/data_pipeline_ci_cd.yml`.
1. Run the pipeline.  If this is the first time running your pipeline, you will need to give permission to access a resource during the run. 
1. You may need to give permission during the run. 


## Clean up resources

If you're not going to continue to use this application, delete your data pipeline with the following steps:

1. Delete the `data-pipeline-cicd-rg` resource group. 
2. Delete your Azure DevOps project. 
  
## Next steps
> [!div class="nextstepaction"]
> [Learn more about data in Azure Data Factory](https://docs.microsoft.com/azure/data-factory/concepts-pipelines-activities)