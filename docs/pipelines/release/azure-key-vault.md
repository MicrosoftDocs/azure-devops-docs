---
title: Use Azure Key Vault secrets in Azure Pipelines
description: How to create Azure Key vaults, store secrets, and use them in your Azure Pipelines.
ms.topic: tutorial
ms.date: 04/23/2024
ms.custom: devx-track-azurecli, arm2024
monikerRange: '>= azure-devops-2019'
"recommendations": "true"
---

# Use Azure Key Vault secrets in Azure Pipelines

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

Azure Key Vault allows developers to securely store and manage sensitive information like API keys, credentials, or certificates. 
Azure Key Vault service supports two types of containers: vaults and managed HSM (Hardware Security Module) pools. Vaults can store both software and HSM-backed keys, secrets, and certificates, while managed HSM pools exclusively support HSM-backed keys.

In this tutorial, you will learn how to:

> [!div class="checklist"]
>
> * Create an Azure Key Vault using Azure CLI
> * Add a secret and configure access to Azure key vault
> * Use secrets in your pipeline

## Prerequisites

- An Azure DevOps organization and a project. Create an [organization](../../organizations/accounts/create-organization.md) or a [project](../../organizations/projects/create-project.md#create-a-project) if you haven't already.

- An Azure subscription. [Create an Azure account for free](https://azure.microsoft.com/free/?WT.mc_id=A261C142F) if you don't have one already.

## Create a repo

If you already have your own repository, proceed to the next step. Otherwise, follow the instructions below to initialize your repository. We will use this Azure Repo to set up our pipeline.

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Repos**, and then select **Initialize** to initialize the main branch with a README.

    :::image type="content" border="false" source="media/azure-key-vault/initialize-repo.png" alt-text="A screenshot showing how to initialize a repository with a README file.":::

## Create an Azure Key Vault

1. Sign in to the [Azure Portal](https://portal.azure.com/), and then select the [Cloud Shell](/azure/cloud-shell/overview) button in the upper-right corner.

1. If you have more than one Azure subscription associated with your account, use the command below to specify a default subscription. You can use `az account list` to generate a list of your subscriptions.

    ```azurecli
    az account set --subscription <YOUR_SUBSCRIPTION_NAME_OR_ID>
    ```

1. Set your default Azure region. You can use `az account list-locations` to generate a list of available regions.

    ```azurecli
    az config set defaults.location=<YOUR_REGION>
    ```

1. Create a new resource group.

    ```azurecli
    az group create --name <YOUR_RESOURCE_GROUP_NAME>
    ```

1. Create a new Azure Key Vault.

    ```azurecli
    az keyvault create \
      --name <YOUR_KEY_VAULT_NAME> \
      --resource-group <YOUR_RESOURCE_GROUP_NAME>
    ```

1. Create a new secret in your Azure key vault.

    ```azurecli
    az keyvault secret set \
      --name <YOUR_SECRET_NAME> \
      --value <YOUR_ACTUAL_SECRET> \
      --vault-name <YOUR_KEY_VAULT_NAME>
    ```

## Set up key vault access policies

To access our Azure Key Vault, we need to set up a service principal to grant access to Azure Pipelines. Follow [this guide](/cli/azure/azure-cli-sp-tutorial-1#create-a-service-principal) to create a service principal with Azure CLI, and then continue with the next steps in this section.

1. Navigate to [Azure portal](https://azure.microsoft.com/), and then use the search bar to find the key vault you created earlier.

    :::image type="content" border="false" source="media/azure-key-vault/search-azure-key-vault.png" alt-text="A screenshot showing how to search for your Azure Key Vault.":::

1. Select **Access policies**, and then select **Create** to create a new policy.

1. Under **Secret permissions**, select **Get** and **List**.

1. Select **Next**, and then select the service principal you created earlier. A service principal is an object that represents an application or service that's requesting access to Azure resources.

1. Select **Next**, and then **Next** once more.

1. Review your policies, and then select **Create** when you're done.

> [!NOTE]
> Azure Key Vaults that use Azure role-based access control (Azure RBAC) are not supported.

## Create a new pipeline

#### [YAML](#tab/yaml)

1. Select **Pipelines**, and then select **New Pipeline**.

1. Select **Azure Repos Git** (YAML).

    :::image type="content" border="false" source="media/azure-key-vault/create-pipeline.png" alt-text="A screenshot showing how to select Azure Repos source control.":::

1. Select the repository you created in the previous step.

1. Select the **Starter pipeline** template.

1. The default pipeline will include a few scripts that run echo commands. Those are not needed so we can delete them. Your new YAML file should look like this:

    ```YAML
    trigger:
    - main
    
    pool:
        vmImage: 'ubuntu-latest'
    
    steps:
    ```

1. Select **Show assistant** to expand the assistant panel. This panel provides convenient and searchable list of pipeline tasks.  

    :::image type="content" border="false" source="media/azure-key-vault/show-assistant.png" alt-text="A screenshot showing how to access the task assistant panel.":::

1. Search for **vault** and select the **Azure Key Vault** task.

    :::image type="content" border="false" source="media/azure-key-vault/azure-key-vault-task.png" alt-text="A screenshot showing how to search for the Azure Key Vault task.":::

1. Select your **Azure subscription** and then select **Authorize**. Select your **Key vault** from the dropdown menu, and then select **Add** to add the task to your YAML pipeline.

    :::image type="content" border="false" source="media/azure-key-vault/configure-azure-key-vault-task.png" alt-text="A screenshot showing how to configure the Azure Key Vault task.":::

    > [!NOTE]
    > The **Make secrets available to whole job** feature is not supported in Azure DevOps Server 2019 and 2020.

1. Your YAML file should look like the following:

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

#### [Classic](#tab/classic)

1. Select **Pipelines**, and then select **New Pipeline**.

1. Select **Use the classic editor** to create a pipeline without YAML.

1. Select **Azure Repos Git**, and then select your repository and default branch. Select **Continue** when you are done.

1. Select the **.Net Desktop** pipeline template.

1. For this example, we will only need the last two tasks from the template. Press CTRL and then select the first five tasks, right-click and choose **Remove selected tasks(s)** to delete them.

    :::image type="content" border="false" source="media/delete-tasks.png" alt-text="A screenshot showing how to delete pipeline tasks.":::

1. Select **+** to add a new task. Add the **Command line** task and configure it as follows:
    
    Display name: Command Line Script.
    Script: ```echo $(Your-Secret-Name) > secret.txt```

    :::image type="content" border="false" source="media/cmd-task.png" alt-text="A screenshot showing how to configure the command line task.":::

1. Select **+** to add a new task. Add the **Azure Key Vault** task and configure it as follows:

    Display Name: Azure Key Vault
    Azure subscription: Select your Azure subscription from the list, and then select **Authorize**.
    Key vault: Select your key vault
    Secret filter: A comma separated list of secret names or leave * to download all secrets from the selected key vault.
    
    :::image type="content" border="false" source="media/key-vault-classic.png" alt-text="A screenshot showing how to configure the Azure Key Vault task.":::

1. Select the **Copy files** task and fill out the required fields.

    :::image type="content" border="false" source="media/copy-task.png" alt-text="A screenshot showing how to set up the copy files task.":::

1. Select the **Publish Artifacts** and keep the default settings.

    :::image type="content" border="false" source="media/publish-artifacts.png" alt-text="A screenshot showing how to set up the publish artifacts task.":::

***

Don't save or queue your pipeline just yet. We must first give our pipeline the right permissions to access Azure Key Vault. Keep your browser tab open, we will resume the remaining steps once we set up the key vault permissions.

## Run and review the pipeline

1. Return to the previous tab where we left off.

1. Select **Save**, and then select **Save** again to commit your changes and trigger the pipeline. You may be asked to allow the pipeline access to Azure resources, if prompted select **Allow**. You will only have to approve your pipeline once.

1. Select the **CmdLine** task to view the logs.

    :::image type="content" border="false" source="media/azure-key-vault/command-line-task.png" alt-text="A screenshot showing the command-line task logs.":::

1. Return to pipeline summary and select the published artifact.

    :::image type="content" border="false" source="media/azure-key-vault/pipeline-summary.png" alt-text="A screenshot showing the pipeline summary and the published artifact.":::

1. Select the **secret.txt** artifact to open it.

    :::image type="content" border="false" source="media/azure-key-vault/view-artifact.png" alt-text="A screenshot showing how to open the published artifact.":::

1. The text file should contain our secret: *mysecretpassword*.

> [!WARNING]
> This tutorial is for educational purposes only. For security best practices and how to safely work with secrets, see [Manage secrets in your server apps with Azure Key Vault](/training/modules/manage-secrets-with-azure-key-vault/).

## Clean up resources

Follow the steps below to delete the resources you created:

1. If you created a new organization to host your project, see [how to delete your organization](../../organizations/accounts/delete-your-organization.md), otherwise [delete your project](../../organizations/projects/delete-project.md).

1. All Azure resources created during this tutorial are hosted under a single resource group *PipelinesKeyVaultResourceGroup*. Run the following command to delete the resource group and all of its resources.

    ```azurecli
    az group delete --name PipelinesKeyVaultResourceGroup
    ```

## FAQ

#### Q: I'm getting the following error: "the user or group does not have secrets list permission" what should I do?

A: If you encounter an error indicating that the user or group does not have secrets list permission on key vault, run the following commands to authorize your application to access the key or secret in the Azure Key Vault:

```PowerShell
$ErrorActionPreference="Stop";
$Credential = Get-Credential;
Connect-AzAccount -SubscriptionId <YOUR_SUBSCRIPTION_ID> -Credential $Credential;
$spn=(Get-AzureRmADServicePrincipal -SPN <YOUR_SERVICE_PRINCIPAL_ID>);
$spnObjectId=$spn.Id;
Set-AzureRmKeyVaultAccessPolicy -VaultName key-vault-tutorial -ObjectId $spnObjectId -PermissionsToSecrets get,list;
```

## Next steps

> [!div class="nextstepaction"]
>
> [Artifacts in Azure Pipelines](../artifacts/artifacts-overview.md)
> [Publish and download artifacts in Azure Pipelines](../artifacts/pipeline-artifacts.md)
> [Release artifacts and artifact sources](artifacts.md)
