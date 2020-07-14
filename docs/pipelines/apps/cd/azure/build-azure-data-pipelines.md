---
title: Quickstart - Build a data pipeline with Azure Pipelines
description: Learn how to use an Azure CI/CD data pipeline to ingest, process, and share data
ms.author: jukullam
author: JuliaKM
ms.technology: devops-cicd-apps
ms.topic: quickstart 
ms.date: 06/19/2020
monikerRange: '=azure-devops'
---

# Quickstart: Implement a data pipeline with Azure DevOps, Azure Data Factory, and machine learning

Get started with data pipelines by building a data pipeline with data ingestion, data transformation, and model training. 

Learn how to injest data from a CSV and save to blob storage, and then transform the injested data and save it to a staging area. Then, train a machine learning model using the transformed data and output the model as pickle file to blob storage. 

## Prerequisites

Before you begin, you need:
- An Azure account with an active subscription. [Create an account for free](https://azure.microsoft.com/free/?WT.mc_id=A261C142F).
- An active Azure DevOps organization. [Sign up for Azure Pipelines](../../../get-started/pipelines-sign-up.md).
- A downloaded code sample [sample.csv](https://github.com/gary918/DataPipeline/blob/master/data/sample.csv)
- Fork the [data pipeline solution](https://github.com/gary918/DataPipeline) in GitHub 
- Install [DevOps for Azure Databricks](https://marketplace.visualstudio.com/items?itemName=riserrad.azdo-databricks) into your Azure DevOps account

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

1. Create globally unique names for your App Service Web App, Azure Container Registry, and Azure Database for MySQL server. Note that these commands use double quotes, which instructs Bash to interpolate the variables using the inline syntax.

    ```bash
    registryName="data-cicd${resourceSuffix}"
    storageName="datacicd${resourceSuffix}"
    ```

1. Create two more Bash variables to store the names of your resource group and service plan.

    ```bash
    rgName='data-pipeline-cicd-rg'
    keyVault='data-pipeline-cicd-keyvault'
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
    az storage container create -n rawdata
    az storage container create -n prepareddata
    ```
    
    1. Open the `prepareddata` container in the Azure Portal UI and upload `sample.csv`([source](https://github.com/gary918/DataPipeline/blob/master/data/sample.csv)).

1. Run the following `az keyvault create` command to create a new key vault. 

    ```azurecli
    az keyvault create \
        --name $keyVault \
        --resource-group $rgName
    ```

1. [Create a new Azure Data Factory](https://ms.portal.azure.com/#create/hub) within the Azure Portal UI. 

    * Name: `data-factory-cicd`
    * Version: `V2`
    * Resource Group: `data-pipeline-cicd-rg`
    * Location: your closest location
    * Uncheck **Enable GIT**

1. [Add a new Azure Databricks service](https://ms.portal.azure.com/#create/hub). 
    * Resource Group: `data-pipeline-cicd-rg`
    * Location: your closest location

## Set up Key Vault

You will use Key Vault to store all secrets (connection information) between the Azure services.

1. Generate a personal access token to use with Azure Databricks ([steps](https://docs.microsoft.com/azure/databricks/dev-tools/api/latest/authentication#--generate-a-personal-access-token)). 
1. Copy the account key and connection string for your storage account.
1.	Make key vault accessible by other services. You will need to first [create a service principal](https://docs.microsoft.com/azure/active-directory/develop/howto-create-service-principal-portal). 

## Create your pipeline and deploy your template

1. Sign in to your Azure DevOps organization and navigate to your project.
1. Go to **Pipelines**, and then select **Create Pipeline**.
1. Create a service connection for Azure Resource Manager and name it azure_rm_connection.
1. You will create two variable groups, one to connect to the Key Vault and one that stores information for the pipeline. 
Names MATTER - datapipeline-vg

## Configure Azure Databricks
Please refer to this document https://docs.microsoft.com/azure/databricks/security/secrets/secret-scopes to create a secret scope named "testscope" within the Azure Databricks workspace.

You can find the DNS Name and Resource ID in your Key Vault properties. 

## Configure Azure Data Factory 

1. Go to **Author & Monitor** in Azure Data Factory. 
1. Click **Set up code repository** and connect your repo. 
* ADD TABLE WITH SPECIFICS
1. Update Key Pass
1. Publish the pipeline under **Manage**

## Run the CI/CD Pipeline

1. Create a Pipeline using `/pipelines/data_pipeline_ci_cd.yml`. 
1. Need to give permission during the run. 
## Clean up resources

If you're not going to continue to use this application, delete <resources> with the following steps:

1. From the left-hand menu...
2. ...click Delete, type...and then click Delete

<!---Required:
To avoid any costs associated with following the quickstart procedure, a
Clean up resources (H2) should come just before Next steps (H2).

If there is a follow-on quickstart that uses the same resources, make that option clear
so that a reader doesn't need to recreate those resources.
--->

## Next steps

Advance to the next article to learn how to create...
> [!div class="nextstepaction"]
> [Next steps button](contribute-get-started-mvc.md)
