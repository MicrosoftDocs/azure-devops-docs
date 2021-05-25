---
title: Build a data pipeline by using Azure Pipelines
description: Learn how to use an Azure CI/CD data pipeline to ingest, process, and share data.
ms.author: jukullam
author: JuliaKM
ms.technology: devops-cicd-apps
ms.date: 01/05/2021
ms.topic: conceptual
monikerRange: '=azure-devops'
---

# Build a data pipeline by using Azure Data Factory, DevOps, and machine learning

Get started building a data pipeline with data ingestion, data transformation, and model training. 

Learn how to grab data from a CSV (comma-separated values) file and save the data to Azure Blob Storage. Transform the data and save it to a staging area. Then train a machine learning model by using the transformed data. Write the model to blob storage as a Python [pickle file](https://docs.python.org/3/library/pickle.html). 

## Prerequisites

Before you begin, you need:
- An Azure account that has an active subscription. [Create an account for free](https://azure.microsoft.com/free/?WT.mc_id=A261C142F).
- An active Azure DevOps organization. [Sign up for Azure Pipelines](../../../get-started/pipelines-sign-up.md).
- Data from [sample.csv](https://github.com/MicrosoftDocs/azure-devops-docs-samples/raw/main/azure-data-pipeline/data/sample.csv).
- Access to the [data pipeline solution](https://github.com/MicrosoftDocs/azure-devops-docs-samples/tree/main/azure-data-pipeline) in GitHub. 
- [DevOps for Azure Databricks](https://marketplace.visualstudio.com/items?itemName=riserrad.azdo-databricks).

## Provision Azure resources

1. Sign in to the [Azure portal](https://portal.azure.com/).
1. From the menu, select the **Cloud Shell** button. When you're prompted, select the **Bash** experience.

    :::image type="content" source="media/azure-portal-menu-cloud-shell.png" alt-text="Screenshot showing where to select Cloud Shell from the menu.":::

    > [!NOTE]
    > You'll need an Azure Storage resource to persist any files that you create in Azure Cloud Shell. When you first open Cloud Shell, you're prompted to create a resource group, storage account, and Azure Files share. This setup is automatically used for all future Cloud Shell sessions.

## Select an Azure region

A _region_ is one or more Azure datacenters within a geographic location. East US, West US, and North Europe are examples of regions. Every Azure resource, including an App Service instance, is assigned a region.

To make commands easier to run, start by selecting a default region. After you specify the default region, later commands use that region unless you specify a different region.

1. In Cloud Shell, run the following `az account list-locations` command to list the regions that are available from your Azure subscription.

    ```azurecli
    az account list-locations \
      --query "[].{Name: name, DisplayName: displayName}" \
      --output table
    ```

1. From the `Name` column in the output, choose a region that's close to you. For example, choose `eastasia` or `westus2`.

1. Run `az configure` to set your default region. In the following example, replace `<REGION>` with the name of the region you chose.

    ```azurecli
    az configure --defaults location=<REGION>
    ```

    The following example sets `westus2` as the default region.

    ```azurecli
    az configure --defaults location=westus2
    ```

### Create Bash variables

1. In Cloud Shell, generate a random number. You'll use this number to create globally unique names for certain services in the next step.

    ```bash
    resourceSuffix=$RANDOM
    ```

1. Create globally unique names for your storage account and key vault. The following commands use double quotation marks, which instruct Bash to interpolate the variables by using the inline syntax.

    ```bash
    storageName="datacicd${resourceSuffix}"
    keyVault="keyvault${resourceSuffix}"
    ```

1. Create one more Bash variable to store the names and the region of your resource group. In the following example, replace `<REGION>` with the region that you chose for the default region.

    ```bash
    rgName='data-pipeline-cicd-rg'
    region='<REGION>'
    ```

1. Create variable names for your Azure Data Factory and Azure Databricks instances.

    ```bash
    datafactorydev='data-factory-cicd-dev'
    datafactorytest='data-factory-cicd-test'

    databricksname='databricks-cicd-ws'
    ```

## Create Azure resources

1. Run the following `az group create` command to create a resource group by using `rgName`.

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

1. Run the following `az storage container create` command to create two containers, `rawdata` and `prepareddata`.

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

1. [Create a new data factory](https://ms.portal.azure.com/#create/hub) by using the portal UI or the Azure CLI:

    * Name: `data-factory-cicd-dev`
    * Version: `V2`
    * Resource group: `data-pipeline-cicd-rg`
    * Location: Your closest location
    * Clear the selection for **Enable GIT**.

   1. Add the Azure Data Factory extension. 
   
        ```azurecli
       az extension add --name datafactory
        ```   
   2. Run the following `az datafactory factory create` command to create a new data factory.  
    
       ```azurecli
        az datafactory factory create \
            --name data-factory-cicd-dev \
            --resource-group $rgName
       ```
    3. Copy the subscription ID. Your data factory will use this ID later. 

1. [Create a second data factory](https://ms.portal.azure.com/#create/hub) by using the portal UI or the Azure CLI. You'll use this data factory for testing.

    * Name: `data-factory-cicd-test`
    * Version: `V2`
    * Resource group: `data-pipeline-cicd-rg`
    * Location: Your closest location
    * Clear the selection for **Enable GIT**.

  
   1. Run the following `az datafactory factory create` command to create a new data factory for testing.  
    
       ```azurecli
        az datafactory factory create \
            --name data-factory-cicd-test \
            --resource-group $rgName
       ```
    
    2. Copy the subscription ID. Your data factory will use this ID later. 
 
1. [Add a new Azure Databricks service](https://ms.portal.azure.com/#create/hub): 
    * Resource group: `data-pipeline-cicd-rg`
    * Workspace name: `databricks-cicd-ws`    
    * Location: Your closest location
     
   1. Add the Azure Databricks extension if it's not already installed. 

       ```azurecli
        az extension add --name databricks
        ```   
        
   2. Run the following `az databricks workspace create` command to create a new workspace.  
        ```azurecli
        az databricks workspace create \
            --resource-group $rgName \
            --name databricks-cicd-ws  \
            --location eastus2  \
            --sku trial
        ```
    3. Copy the subscription ID. Your Databricks service will use this ID later. 

## Upload data to your storage container

1. In the Azure portal, open your storage account in the `data-pipeline-cicd-rg` resource group. 
1. Go to **Blob Service** > **Containers**.
1. Open the `prepareddata` container.
1. Upload the [sample.csv](https://github.com/MicrosoftDocs/azure-devops-docs-samples/raw/main/azure-data-pipeline/data/sample.csv) file.


## Set up Key Vault

You'll use Azure Key Vault to store all connection information for your Azure services.

### Create a Databricks personal access token
1. In the Azure portal, go Databricks and then open your workspace. 
1. In the Azure Databricks UI, [create and copy a personal access token](/azure/databricks/dev-tools/api/latest/authentication#--generate-a-personal-access-token). 

### Copy the account key and connection string for your storage account 
1. Go to your storage account. 
1. Open **Access keys**. 
1. Copy the first key and connection string. 

### Save values to Key Vault
1. Create three secrets:
    
    * databricks-token: `your-databricks-pat`
    * StorageKey: `your-storage-key`    
    * StorageConnectString: `your-storage-connection`

1. Run the following `az keyvault secret set` command to add secrets to your key vault.  
   
    ```azurecli
    az keyvault secret set --vault-name "$keyVault" --name "databricks-token" --value "your-databricks-pat"
    az keyvault secret set --vault-name "$keyVault" --name "StorageKey" --value "your-storage-key"
    az keyvault secret set --vault-name "$keyVault" --name "StorageConnectString" --value "your-storage-connection"
    ```

## Import the data pipeline solution
1. Sign in to your Azure DevOps organization and then go to your project.
1. Go to **Repos** and then import your forked version of the [GitHub repository](https://github.com/MicrosoftDocs/azure-devops-docs-samples/raw/main/azure-data-pipeline/). For more information, see [Import a Git repo into your project](../../../../repos/git/import-git-repository.md). 

## Add an Azure Resource Manager service connection
1. Create an Azure Resource Manager [service connection](../../../library/service-endpoints.md).
1. Select **Service Principal (automatic)**.
1. Choose the **data-pipeline-cicd-rg** resource group.
1. Name the service connection `azure_rm_connection`.
1. Select **Grant access permission to all pipelines**. 

## Add pipeline variables

1. [Create a new variable group](../../../library/variable-groups.md) named `datapipeline-vg`.

1. Add the Azure DevOps extension if it isn't already installed. 

   ```azurecli
   az extension add --name azure-devops 
   ```  
1. Sign in to your [Azure DevOps organization](../../../../cli/log-in-via-pat.md).

   ```azurecli
   az devops login --org https://dev.azure.com/<yourorganizationname>
   ```

   ```
   az pipelines variable-group create --name datapipeline-vg -p <yourazuredevopsprojectname> --variables \
                                       "LOCATION=$region" \
                                       "RESOURCE_GROUP=$rgName" \
                                       "DATA_FACTORY_NAME=$datafactorydev" \
                                       "DATA_FACTORY_DEV_NAME=$datafactorydev" \
                                       "DATA_FACTORY_TEST_NAME=$datafactorytest" \
                                       "ADF_PIPELINE_NAME=DataPipeline" \
                                       "DATABRICKS_NAME=$databricksname" \
                                       "AZURE_RM_CONNECTION=azure_rm_connection" \
                                       "DATABRICKS_URL=<URL copied from Databricks in Azure portal>" \
                                       "STORAGE_ACCOUNT_NAME=$storageName" \
                                       "STORAGE_CONTAINER_NAME=rawdata"
   ```

1. Create a second variable group named `keys-vg`. This group will pull data variables from Key Vault. 
1. Select **Link secrets from an Azure key vault as variables**. For more information, see [Link secrets from an Azure key vault](../../../library/variable-groups.md#link-secrets-from-an-azure-key-vault). 
1. Authorize the Azure subscription. 
1. Choose all of the available secrets to add as variables (`databricks-token`,`StorageConnectString`,`StorageKey`).


## Configure Azure Databricks and Azure Data Factory 
Follow the steps in the next sections to set up Azure Databricks and Azure Data Factory. 
### Create testscope in Azure Databricks

1. In the Azure portal, go to **Key vault** > **Properties**. 
1. Copy the **DNS Name** and **Resource ID**. 
1. In your Azure Databricks workspace, [create a secret scope](/azure/databricks/security/secrets/secret-scopes) named `testscope`. 

### Add a new cluster in Azure Databricks

1. In the Azure Databricks workspace, go to **Clusters**. 
1. Select **Create Cluster**. 
1. Name and save your new cluster. 
1. Select your new cluster name. 
1. In the URL string, copy the content between `/clusters/` and `/configuration`. For example, in the string `clusters/0306-152107-daft561/configuration`, you would copy `0306-152107-daft561`. 
1. Save this string to use later. 

### Set up your code repository in Azure Data Factory

1. In Azure Data Factory, go to **Author & Monitor**. For more information, see [Create a data factory](/azure/data-factory/quickstart-create-data-factory-portal). 
1. Select **Set up code repository** and then connect your repo. 
    * Repository type: Azure DevOps Git
    * Azure DevOps organization: Your active account
    * Project name: Your Azure DevOps data pipeline project
    * Git repository name: **Use existing**. 
        * Select the **main** branch for collaboration.     
        * Set **/azure-data-pipeline/factorydata** as the root folder.
    * Branch to import resource into: Select **Use existing** and **main**.

### Link Azure Data Factory to your key vault
1. In the Azure portal UI, open the key vault. 
1. Select **Access policies**.
1. Select **Add Access Policy**.
1. For **Configure from template**, select **Key & Secret Management**. 
1. In **Select principal**, search for the name of your development data factory and add it.  
1. Select **Add** to add your access policies.
1. Repeat these steps to add an access policy for the test data factory. 

### Update the key vault linked service in Azure Data Factory
1. Go to **Manage** > **Linked services**.
1. Update the Azure key vault to connect to your subscription. 

### Update the storage linked service in Azure Data Factory
1. Go to **Manage** > **Linked services**.
1. Update the Azure Blob Storage value to connect to your subscription. 

### Update the Azure Databricks linked service in Azure Data Factory
1. Go to **Manage** > **Linked services**.
1. Update the Azure Databricks value to connect to your subscription. 
1. For the **Existing Cluster ID**, enter the cluster value you saved earlier. 

### Test and publish the data factory
1. In Azure Data Factory, go to **Edit**. 
1. Open `DataPipeline`. 
1. Select **Variables**. 
1. Verify that the `storage_account_name` refers to your storage account in the Azure portal. Update the default value if necessary. Save your changes.
1. Select **Validate** to verify `DataPipeline`. 
1. Select **Publish** to publish data-factory assets to the `adf_publish` branch of your repository.  

## Run the CI/CD pipeline

Follow these steps to run the continuous integration and continuous delivery (CI/CD) pipeline:

1. Go to the **Pipelines** page. Then choose the action to create a new pipeline.
1. Select **Azure Repos Git** as the location of your source code.
1. When the list of repositories appears, select your repository. 
1. As you set up your pipeline, select **Existing Azure Pipelines YAML file**. Choose the YAML file: **/azure-data-pipeline/data_pipeline_ci_cd.yml**.
1. Run the pipeline.  If your pipeline hasn't been run before, you might need to give permission to access a resource during the run. 


## Clean up resources

If you're not going to continue to use this application, delete your data pipeline by following these steps:

1. Delete the `data-pipeline-cicd-rg` resource group. 
2. Delete your Azure DevOps project. 
  
## Next steps
> [!div class="nextstepaction"]
> [Learn more about data in Azure Data Factory](/azure/data-factory/concepts-pipelines-activities)
