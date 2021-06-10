---
title: Use Azure Key Vault secrets in Azure Pipelines
description: How to create Azure Key vaults, store secrets, and use those secrets in your Azure Pipelines
ms.topic: tutorial
ms.date: 02/16/2021
ms.custom: contperf-fy21q3, devx-track-azurecli
monikerRange: '>= azure-devops-2019'
---

# Use Azure Key Vault secrets in Azure Pipelines

**Azure Pipelines | Azure DevOps Server 2020 | Azure DevOps Server 2019**

> [!NOTE]
> This article will guide you through working with Azure key vault in your pipeline. if you want to set secret variables or reference variable groups, see [Define variables](../process/variables.md#secret-variables) for more details.

Azure Key Vault allows users to securely store, manage, and access sensitive information. Secrets can be API keys, credentials, certificates, etc.

Azure Key Vault service supports two types of containers: vaults and managed HSM (hardware security module) pools. Vaults support storing software and HSM-backed keys, secrets, and certificates, while managed HSM pools only support HSM-backed keys.
 
In this tutorial, you will learn how to:

> [!div class="checklist"]
> * Create an Azure Key Vault using Azure CLI
> * Add a secret and configure access to Azure key vault 
> * Use secrets in your pipeline

## Prerequisites

* An Azure DevOps organization. If you don't have one, you can [create one for free](../get-started/pipelines-sign-up.md). 

<a name="creating-azure-key-vault"></a>

## Create an Azure Key Vault

Azure key vaults can be created and managed through the Azure portal or Azure CLI. We will use Azure CLI in this tutorial to create our Azure Key vault.

[!INCLUDE [include](../ecosystems/includes/sign-in-azure-cli.md)]


1. If you have more than one Azure subscription associated with your account, use the command below to specify a default subscription. You can use `az account list` to generate a list of your subscriptions.

    ```Command
    az account set --subscription <your_subscription_name_or_ID>
    ```

1. Run the following command to set your default Azure region. You can use `az account list-locations` to generate a list of available regions.

    ```Command
    az configure --defaults location=<your_region>
    ```

    For example, this command will select the westus2 region:

    ```Command
    az configure --defaults location=westus2
    ```

1. Run the following command to create a new resource group. A resource group is a container that holds related resources for an Azure solution.

    ```Command
    az group create --name <your-resource-group>
    ```
   
1. Run the following command to create a new key vault.

    ```Command
    az keyvault create \
      --name <your-key-vault> \
      --resource-group <your-resource-group>
    ```

1. Run the following command to create a new secret in your key vault. Secrets are stored as a key value pair. In the example below, *Password* is the key and *mysecretpassword* is the value. 

    ```Command
    az keyvault secret set \
      --name "Password" \
      --value "mysecretpassword" \
      --vault-name <your-key-vault-name>
    ```

## Create a project

Sign in to [Azure Pipelines](https://azure.microsoft.com/services/devops/pipelines). Your browser will then navigate to `https://dev.azure.com/your-organization-name` and displays your Azure DevOps dashboard.

If you don't have any projects in your organization yet, select **Create a project to get started** to create a new project. Otherwise, select the **New project** button in the upper-right corner of the dashboard.

## Create a repo

We will use YAML to create our pipeline but first we need to create a new repo. 

1. Sign in to your Azure DevOps organization and navigate to your project.

1. Go to **Repos**, and then select **Initialize** to initialize a new repo with a README.

    :::image type="content" border="false" source="media/azure-key-vault/initialize-repo.png" alt-text="Creating the repo":::

## Create a new pipeline

1. Go to **Pipelines**, and then select **New Pipeline**.

1. Select **Azure Repos Git**.

    :::image type="content" border="false" source="media/azure-key-vault/create-pipeline.png" alt-text="Creating the pipeline":::

1. Select the repo you created earlier. It should have the same name as your Azure DevOps project.

1. Select **Starter pipeline**.

1. The default pipeline will include a few scripts that run echo commands. Those are not needed so we can delete them. Your new YAML file will now look like this:

    ```
	trigger:
	- main
	
	pool:
	  vmImage: 'ubuntu-latest'
	
	steps:
    ```

1. Select **Show assistant** to expand the assistant panel. This panel provides convenient and searchable list of pipeline tasks.  

    :::image type="content" border="false" source="media/azure-key-vault/show-assistant.png" alt-text="Showing the pipeline assistant":::

1. Search for **vault** and select the [**Azure Key Vault**](../tasks/deploy/azure-key-vault.md) task.

    :::image type="content" border="false" source="media/azure-key-vault/azure-key-vault-task.png" alt-text="Selecting the Azure Key Vault task":::

1. Select and authorize your Azure subscription then select the Azure key vault task and select **Add** to add it to your pipeline. This task allows the pipeline to connect to your Azure Key Vault and retrieve secrets to use as pipeline variables.

    > [!NOTE]
    > The **Make secrets available to whole job** feature is not currently supported in Azure DevOps Server 2019 and 2020.

    :::image type="content" border="false" source="media/azure-key-vault/configure-azure-key-vault-task.png" alt-text="Configuring the Azure Key Vault task":::

1. Your YAML file should look something like the following

    ```YAML
    trigger:
    - main
    
    pool:
      vmImage: ubuntu-latest
    
    steps:
    - task: AzureKeyVault@2
      inputs:
        azureSubscription: 'Your-Azure-Subscription'
        KeyVaultName: 'Your-Key-Vault-Name'
        SecretsFilter: '*'
        RunAsPreJob: false
    
    - task: CmdLine@2
      inputs:
        script: 'echo $(Your-Secret-Name) > secret.txt'
    
    - task: CopyFiles@2
      inputs:
        Contents: secret.txt
        targetFolder: '$(Build.ArtifactStagingDirectory)'

    - task: PublishBuildArtifacts@1
      inputs:
        PathtoPublish: '$(Build.ArtifactStagingDirectory)'
        ArtifactName: 'drop'
        publishLocation: 'Container'
    ```

1. Do not save or run your pipeline just yet. We must first give our pipeline the right permissions to access Azure Key Vault. Keep your working browser tab open, we will resume the remaining steps here once we set up the key vault permissions.

## Set up Azure Key Vault access policies

In order to access our Azure Key Vault, we must first set up a service principal to give access to Azure Pipelines. Follow [this guide](/azure/active-directory/develop/howto-create-service-principal-portal#register-an-application-with-azure-ad-and-create-a-service-principal) to create your service principal and then proceed with the next steps in this section.

1. Go to [Azure portal](https://azure.microsoft.com/).

1. Use the search bar to search for the key vault you created earlier.

    :::image type="content" border="false" source="media/azure-key-vault/search-azure-key-vault.png" alt-text="Searching for Azure Key Vault":::

1. Under **Settings** Select **Access policies**.

1. Select **Add Access Policy** to add a new policy.

1. For **Secret permissions**, select **Get** and **List**.

1. Select the option to select a service principal and search for the one you just created in the beginning of this section. A security principal is an object that represents a user, group, service, or application that's requesting access to Azure resources.
    
1. Select **Add** to create the access policy, then **Save**.

## Run and review the pipeline

1. Return to the previous tab where we left off.

1. Select **Save** then **Save** again to commit your changes and trigger the pipeline.

    > [!NOTE]
    > You may be asked to allow the pipeline access to Azure resources, if prompted select **Allow**. You will only have to approve your pipeline once. 

1. Select the **CmdLine** job to view the logs. Note that the actual secret is not part of the logs. 

    :::image type="content" border="false" source="media/azure-key-vault/command-line-task.png" alt-text="Reviewing the command-line task":::

1. Return to pipeline summary and select the published artifact.

    :::image type="content" border="false" source="media/azure-key-vault/pipeline-summary.png" alt-text="The pipeline summary":::

1. Under **Job** select the **secret.txt** file to open it.

    :::image type="content" border="false" source="media/azure-key-vault/view-artifact.png" alt-text="Viewing the secret in the artifact":::

1. The text file should contain our secret: *mysecretpassword* from earlier.

> [!WARNING]
> This tutorial is for education purposes only. For security best practices and how to safely work with secrets, see [Manage secrets in your server apps with Azure Key Vault](/learn/modules/manage-secrets-with-azure-key-vault/).

If you encounter an error indicating that the user or group does not have secrets list permission on key vault, run the following commands to authorize your application to access the key or secret in the Azure Key Vault:

```Command
$ErrorActionPreference="Stop";
Login-AzureRmAccount -SubscriptionId your-subscription-ID;
$spn=(Get-AzureRmADServicePrincipal -SPN service-principal-ID);
$spnObjectId=$spn.Id;
Set-AzureRmKeyVaultAccessPolicy -VaultName key-vault-tutorial -ObjectId $spnObjectId -PermissionsToSecrets get,list;
```

## Clean up resources

Follow the steps below to delete the resources you created:

1. If you created a new organization to host your project, see [how to delete your organization](../../organizations/accounts/delete-your-organization.md), otherwise [delete your project](../../organizations/projects/delete-project.md).

1. All Azure resources created during this tutorial are hosted under a single resource group *PipelinesKeyVaultResourceGroup*. Run the following command to delete the resource group and all of its resources.

    ```Command
    az group delete --name PipelinesKeyVaultResourceGroup
    ```

## Next steps

> [!div class="nextstepaction"]
> [Artifacts in Azure Pipelines](../artifacts/artifacts-overview.md)
> [Publish and download artifacts in Azure Pipelines](../artifacts/pipeline-artifacts.md)
> [Release artifacts and artifact sources](artifacts.md)
