---
title: Use Azure Key Vault secrets in Azure Pipelines
description: How to create Azure Key vaults, store secrets, and use them in your Azure Pipelines.
ms.topic: tutorial
ms.date: 04/23/2024
ms.custom: devx-track-azurecli, arm2024
monikerRange: '>= azure-devops'
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

## Get the sample code

If you already have your own repository, proceed to the next step. Otherwise, import the following sample repository into your Azure Repo.

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Repos**, and then select **Import**. Enter the following repository URL, and then select **Import**.

    ```
    https://github.com/MicrosoftDocs/pipelines-dotnet-core
    ```

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

## Set up authentication

# [Managed Identity](#tab/managedidentity)

## Create a user-assigned managed identity

1. Sign in to the [Azure portal](https://portal.azure.com/), then search for the **Managed Identities** service in the search bar.

1. Select Create, and fill out the required fields as follows:

    - **Subscription**: Select your subscription from the dropdown menu.
    - **Resource group**: Select an existing resource group or create a new one.
    - **Region**: Select a region from the dropdown menu.
    - **Name**: Enter a name for your user-assigned managed identity.

1. Select **Review + create** when you're done.

1. Once the deployment is complete, select **Go to resource**, then copy the **Subscription** and **Client ID** values to use in upcoming steps.

1. Navigate to **Settings** > **Properties**, and copy your managed identity's **Tenant ID** value for later use.

## Set up key vault access policies

1. Navigate to [Azure portal](https://portal.azure.com/), and use the search bar to find the key vault you created earlier.

1. Select **Access policies**, then select **Create** to add a new policy.

1. Under **Secret permissions**, select **Get** and **List** checkboxes.

1. Select **Next**, then paste the **Client ID** of the managed identity you created earlier into the search bar. Select your managed identity.

1. Select **Next**, then **Next** once more.

1. Review your new policies, and then select **Create** when you're done.

## Create a service connection

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Project settings** > **Service connections**, and then select **New service connection** to create a new service connection.

1. Select **Azure Resource Manager**, then select **Next**.

1. For **Identity Type**, select **Managed identity** from the dropdown menu.

1. For **Step 1: Managed identity details**, fill out the fields as follows:

    - **Subscription for managed identity**: Select the subscription containing your managed identity.
    
    - **Resource group for managed identity**: Select the resource group hosting your managed identity.
    
    - **Managed Identity**: Select your managed identity from the dropdown menu.

1. For **Step 2: Azure Scope**, fill out the fields as follows:

    - **Scope level for service connection**: Select Subscription.
    
    - **Subscription for service connection**: Select the subscription your managed identity will access.
    
    - **Resource group for Service connection**: (Optional) Specify to limit managed identity access to one resource group.

1. For **Step 3: Service connection details**:

    - **Service connection name**: Provide a name for your service connection.
    
    - **Service Management Reference**: (Optional) Context information from an ITSM database.
    
    - **Description**: (Optional) Add a description.

1. In **Security**, select the **Grant access permission to all pipelines** checkbox to allow all pipelines to use this service connection. If you don't select this option, you must manually grant access to each pipeline that uses this service connection.

1. Select **Save** to validate and create the service connection.

    :::image type="content" border="false" source="media/managed-identity-service-connection.png" alt-text="A screenshot displaying how to create a managed identity ARM service connection." lightbox="media/managed-identity-service-connection.png":::

# [Service Principal](#tab/serviceprincipal)

## Set up key vault access policies

To access your Azure Key Vault, you must first set up a service principal to grant access to Azure Pipelines:

1. [Create a service principal](/cli/azure/azure-cli-sp-tutorial-1#create-a-service-principal)

1. Navigate to [Azure portal](https://portal.azure.com/), and then use the search bar to find the key vault you created earlier.

1. Select **Access policies**, and then select **Create**.

1. Under **Secret permissions**, add the **Get** and **List** permissions, and then select **Next**.

1. For **Principal**, paste your service principal's *Object ID*, select it, and then select **Next**.

1. Select **Next** once more, review your policies, and then select **Save** when you're done.

## Add role assignment

In the next step, you’ll create an ARM service connection for your service principal. Before verifying the connection, you need to: (1) grant the service principal *Read* access at the subscription level, and (2) create a federated credential for your service principal.

The following steps outline how to grant *Read* access at the subscription level:

1. Navigate to [Azure portal](https://portal.azure.com/), select **Subscriptions**, and then find and select your subscription.

1. Select **Access control**, and then select **Add** > **Add role assignment**.

1. Select **Reader** under the **Role** tab, and then select **Next**.

1. Select **User, group, or service principal**, and then select **Select members**. 

1. Paste your service principal's Object ID in the search bar, select it, and then **Select**.
 
1. Select **Review + assign**, review your settings, and then select **Review + assign** once more to confirm your choices and add the role assignment.

## Create a service connection

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Project settings**, and then select **Service connections**.

1. Select **New service connection**, select **Azure Resource Manager**, and then select **Next**.

1. Select **Service principal (manual)**, and then select **Next**.

1. For **Identity Type**, select **App registration or managed identity (manual)** from the dropdown menu.

1. For **Credential**, select **Workload identity federation**.

1. Provide a name for your service connection, and then select **Next**.

1. Select **Azure Cloud** for **Environment**, and **Subscription** for the **Subscription scope**.

1. Enter your Azure **Subscription ID** and **Subscription name**.

1. For **Authentication**, paste your service principal's **Application (client) ID** and **Directory (tenant) ID**

1. Under **Security**, select the **Grant access permission to all pipelines** checkbox to allow all pipelines to use this service connection. If you don't select this option, you must manually grant access to each pipeline that uses this service connection.

1. Leave this window open, you'll return to verify and save your service connection once you've created the federated credential in Azure.

## Create a service principal federated credential

1. Navigate to [Azure portal](https://portal.azure.com/), then enter your service principal's *ClientID* in the search bar, and then select your *Application*.

1. Under **Manage**, select **Certificates & secrets** > **Federated credentials**.

1. Select **Add credential**, and then for **Federated credential scenario**, select **Other issuer**.

1. For **Issuer**, paste the *Issuer* you copied from your service connection earlier.

1. For **Subject identifier**, paste the *Subject identifier* you copied from your service connection earlier.

1. Provide a **Name** for your federated credential, and then select **Add** when you're done.

1. Return to your service connection window, select **Verify and Save** to save your service connection.

---

## Access key vault secrets from your pipeline

#### [YAML](#tab/yaml)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines**, and then select **New Pipeline**.

1. Select **Azure Repos Git** (YAML), and then select your repository.

1. Select the **Starter pipeline** template.

1. The default pipeline will include a script that runs echo commands. Those are not needed so we can delete them.

1. Add the AzureKeyVault task, replacing the placeholders with the name of the service connection you created earlier and your key vault name. Your YAML file should resemble the following snippet:

    ```yml
    trigger:
    - main
    
    pool:
      vmImage: ubuntu-latest
    
    steps:
    - task: AzureKeyVault@2
      displayName: Azure Key Vault
      inputs:
        azureSubscription: 'SERVICE_CONNECTION_NAME'
        KeyVaultName: 'KEY_VAULT_NAME'
        SecretsFilter: '*'
        RunAsPreJob: false
    ```

1. Let's add the following tasks to copy and publish our secret. This example is for demonstration purposes only and should not be implemented in a production environment.

    ```YAML
    trigger:
    - main
    
    pool:
      vmImage: ubuntu-latest
    
    steps:
    - task: AzureKeyVault@2
      displayName: Azure Key Vault
      inputs:
        azureSubscription: 'SERVICE_CONNECTION_NAME'
        KeyVaultName: 'KEY_VAULT_NAME'
        SecretsFilter: '*'
        RunAsPreJob: false
    
    - task: CmdLine@2
      displayName: Create file
      inputs:
        script: 'echo $(SECRET_NAME) > secret.txt'
    
    - task: CopyFiles@2
      displayName: Copy file
      inputs:
        Contents: secret.txt
        targetFolder: '$(Build.ArtifactStagingDirectory)'

    - task: PublishBuildArtifacts@1
      displayName: Publish Artifact
      inputs:
        PathtoPublish: '$(Build.ArtifactStagingDirectory)'
        ArtifactName: 'drop'
        publishLocation: 'Container'
    ```

1. Select **Save and run**, and then select it once more to commit your changes and trigger the pipeline. You may be asked to allow the pipeline access to Azure resources, if prompted select **Allow**. You will only have to approve your pipeline once.

1. Select the **CmdLine** task to view the logs.

    :::image type="content" border="false" source="media/azure-key-vault/command-line-task.png" alt-text="A screenshot showing the command-line task logs.":::

1. Once the pipeline run is complete, return to the pipeline summary and select the published artifact.

    :::image type="content" border="false" source="media/azure-key-vault/pipeline-summary.png" alt-text="A screenshot showing the published artifact in the summary tab.":::

1. Select **drop** > **secret.txt** to download it.

    :::image type="content" border="false" source="media/azure-key-vault/view-artifact.png" alt-text="A screenshot showing how to download the published artifact.":::

1. Open the text file you just downloaded, the text file should contain the secret from your Azure key vault.

#### [Classic](#tab/classic)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines**, and then select **New Pipeline**.

1. Select **Use the classic editor** to create a classic pipeline.

1. Select **Azure Repos Git**, select your repository and default branch, and then select **Continue**.

1. Select the **.Net Desktop** pipeline template.

1. For this example, we will only need the last two tasks. Press CTRL and then select the first five tasks, right-click and choose **Remove selected tasks(s)** to delete them.

    :::image type="content" border="false" source="media/delete-tasks.png" alt-text="A screenshot showing how to delete multiple pipeline tasks.":::

1. Select **+** to add a new task. Search for the **Command line** task, select it, and then select **Add** to add it to your pipeline. Once added, configure it as follows:
    
    - **Display name**: Create file
    - **Script**: `echo $(SECRET_NAME) > secret.txt`

    :::image type="content" border="false" source="media/create-secret-file.png" alt-text="A screenshot showing how to configure the command line task.":::

1. Select **+** to add a new task. Search for the **Azure Key Vault** task, select it, and then select *Add** to add it to your pipeline. Once added, configure it as follows:

    - **Display name**: Azure Key Vault
    - **Azure subscription**: select the service connection you created earlier
    - **Key vault**: select your key vault
    - **Secret filter**: A comma separated list of secret names or leave * to download all secrets from the selected key vault
    
    :::image type="content" border="false" source="media/azure-key-vault-classic-task-setup.png" alt-text="A screenshot showing how to set up the Azure Key Vault task in classic pipelines.":::

1. Select the **Copy files** task and fill out the required fields as follows:
    
    - **Display name**: Copy File
    - **Contents**: secret.txt
    - **Target Folder**: $(build.artifactstagingdirectory)

    :::image type="content" border="false" source="media/copy-files-task-classic-pipeline.png" alt-text="A screenshot showing how to set up the copy files task in classic pipelines.":::

1. Select the **Publish Artifacts** task and fill out the required fields as follows:

    - **Display name**: Publish Artifact
    - **Path to publish**: $(build.artifactstagingdirectory)
    - **Artifact name**: drop
    - **Artifact publish location**: Azure Pipelines
    
    :::image type="content" border="false" source="media/publish-artifacts-classic-pipeline.png" alt-text="A screenshot showing how to set up the publish artifacts task in classic pipelines.":::

1. Select **Save and queue**, and then select **Run** to run your pipeline.

1. Once the pipeline run is complete, return to the pipeline summary and select the published artifact.

1. Select **drop** > **secret.txt** to download the published artifact.

    :::image type="content" border="false" source="media/azure-key-vault/view-artifact.png" alt-text="A screenshot showing how to download the published artifact.":::

1. Open the text file you just downloaded, the text file should contain the secret from your Azure key vault.


***

> [!WARNING]
> This tutorial is for educational purposes only. For security best practices and how to safely work with secrets, see [Manage secrets in your server apps with Azure Key Vault](/training/modules/manage-secrets-with-azure-key-vault/).

## Clean up resources

Follow the steps below to delete the resources you created:

1. If you've created a new organization to host your project, see [how to delete your organization](../../organizations/accounts/delete-your-organization.md), otherwise [delete your project](../../organizations/projects/delete-project.md).

1. All Azure resources created during this tutorial are hosted under a single resource group. Run the following command to delete your resource group and all of its resources.

    ```azurecli
    az group delete --name <YOUR_RESOURCE_GROUP_NAME>
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

## Related articles

- [Publish and download pipeline artifacts](../artifacts/pipeline-artifacts.md)
- [Release artifacts and artifact sources](artifacts.md)
- [Use gates and approvals to control deployment](deploy-using-approvals.md)
