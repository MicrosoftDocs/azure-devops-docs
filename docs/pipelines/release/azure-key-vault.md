---
title: Use Azure Key Vault secrets in Azure Pipelines
description: Learn how to create Azure Key vaults, store secrets, and use them in your Azure Pipelines.
ms.topic: tutorial
ms.date: 01/27/2026
monikerRange: '>= azure-devops'
ms.custom: devx-track-azurecli, arm2024, sfi-image-nochange
"recommendations": "true"
---

# Use Azure Key Vault secrets in Azure Pipelines

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Azure Key Vault  is a cloud service that helps developers securely store and manage sensitive information such as API keys, credentials, and certificates. 
Azure Key Vault service supports two types of containers: vaults and managed HSM (Hardware Security Module) pools. Vaults can store both software and HSM-backed keys, secrets, and certificates, while managed HSM pools exclusively support HSM-backed keys. In this article, you’ll learn how to create an Azure Key Vault, add a secret and configure access permissions, and then use that secret securely in Azure pipeline.

## Prerequisites

| Category           | Requirements              |
|--------------------|---------------------------|
| **Azure DevOps**   | - An [Azure DevOps organization](../../organizations/accounts/create-organization.md).<br> - An [Azure DevOps project](../../organizations/projects/create-project.md). |
| **Azure**          | An [Azure subscription](https://azure.microsoft.com/pricing/purchase-options/azure-account?cid=msft_learn). |

## Get the code

If you don't have your own project, import the following sample repository into your Azure Repo.

1. Sign in to your Azure DevOps organization, then navigate to your project.

1. Select **Repos**, then select **Import**. Enter the following repository URL, then select **Import**.

    ```
    https://github.com/MicrosoftDocs/pipelines-dotnet-core
    ```

## Create an Azure Key Vault

Follow these steps to create a new Azure Key Vault in Azure Using Azure CLI:

1. Navigate to [Azure portal](https://portal.azure.com/), then select [Cloud Shell](/azure/cloud-shell/overview) in the upper-right corner.

1. If your account is associated with multiple Azure subscriptions, set your default subscription:

    ```azurecli
    az account set --subscription <YOUR_SUBSCRIPTION_NAME_OR_ID>
    ```

1. Set a default Azure region. To see a list of available regions, run `az account list-locations`.

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

1. Add a secret to your Azure Key Vault:

    ```azurecli
    az keyvault secret set \
      --name <YOUR_SECRET_NAME> \
      --value <YOUR_ACTUAL_SECRET> \
      --vault-name <YOUR_KEY_VAULT_NAME>
    ```

## Set up authentication

Now that you've created your Azure Key Vault, the next step is to set up authentication. Select *Managed Identity* or *Service Principal*, and follow the instructions to configure authentication.

# [Managed Identity](#tab/managedidentity)

## Create a user-assigned managed identity

1. Navigate to [Azure portal](https://portal.azure.com/), then search for **Managed Identities** in the search bar.

1. Select **Create**, and provide the following information:

    - **Subscription**: Select your Azure subscription from the dropdown menu.
    - **Resource group**: Select an existing resource group or create a new one.
    - **Region**: Select the region where the managed identity will be created.
    - **Name**: Enter a name for the user-assigned managed identity.

1. Select **Review + create**, then select **Create** to start the deployment.

1. After the deployment completes, select **Go to resource**, and copy the **Subscription ID** and **Client ID** values. You’ll need these values in later steps.

1. Under **Settings**, select **Properties**, and copy your managed identity's **Tenant ID** value for later use.

## Set up key vault access policies

1. Navigate to [Azure portal](https://portal.azure.com/), and use the search bar to locate the Azure Key Vault you created earlier.

1. Select **Access policies**, then select **Create** to add a new policy.

1. Under **Secret permissions**, select **Get** and **List** checkboxes.

1. Select **Next**, paste the **Client ID** of the managed identity you created earlier into the search bar, and then select the managed identity.

1. Select **Next**, then **Next** again.

1. Review the access policy details, and then select **Create** to apply the policy.

## Create a service connection

1. Sign in to Azure DevOps, then navigate to your project.

1. Select **Project settings** > **Service connections**, and then select **New service connection**.

1. Select **Azure Resource Manager**, then select **Next**.

1. For **Identity Type**, select **Managed identity**.

1. Under **Step 1: Managed identity details**, provide the following information:

    - **Subscription for managed identity**: Select the subscription that contains your managed identity.
    
    - **Resource group for managed identity**: Select the resource group that hosts your managed identity.
    
    - **Managed Identity**: Select your managed identity from the dropdown list.

1. For **Step 2: Azure Scope**, provide the following information:

    - **Scope level for service connection**: Select **Subscription**.
    
    - **Subscription for service connection**: Select the subscription the managed identity will access.
    
    - **Resource group for Service connection**: (Optional) Specify a resource group to limit the managed identity’s access to one resource group.

1. For **Step 3: Service connection details**, provide the following information:

    - **Service connection name**: Enter a name for the service connection.
    
    - **Service Management Reference**: (Optional) Context information from an ITSM database.
    
    - **Description**: (Optional) Enter a description.

1. Under **Security**, the **Grant access permission to all pipelines** option allows all pipelines to use this service connection. This option isn't recommended. Instead, [authorize each pipeline individually to use the service connection](../library/service-endpoints.md#authorize-pipelines).

1. Select **Save** to validate and create the service connection.

    :::image type="content" border="false" source="media/managed-identity-service-connection.png" alt-text="A screenshot displaying how to create a managed identity ARM service connection." lightbox="media/managed-identity-service-connection.png":::

# [Service Principal](#tab/serviceprincipal)

## Set up key vault access policies

To access your Azure Key Vault, you must first set up a service principal to grant access to Azure Pipelines:

1. [Create a service principal](/cli/azure/azure-cli-sp-tutorial-1#create-a-service-principal)

1. Navigate to [Azure portal](https://portal.azure.com/), and use the search bar to locate the Azure Key Vault you created earlier.

1. Select **Access policies**, and then select **Create**.

1. Under **Secret permissions**, add the **Get** and **List** permissions, and then select **Next**.

1. For **Principal**, paste the *Object ID* of your service principal, select the service principal, and then select **Next**.

1. Select **Next** again, review the access policy, and then select **Save**.

## Add role assignment

In the next step, you’ll create an ARM service connection for your service principal. Before verifying the connection, you need to:
- Grant the service principal *Reader* access at the subscription level
- Create a federated credential for your service principal

Follow these steps to grant Reader access at the subscription level:

1. Navigate to [Azure portal](https://portal.azure.com/), select **Subscriptions**, and then select your subscription.

1. Select **Access control (IAM)**, and then select **Add** > **Add role assignment**.

1. On the **Role** tab, select **Reader**, and then select **Next**.

1. Select **User, group, or service principal**, and then select **Select members**. 

1. Paste the *Object ID* of your service principal into the search bar, select it, and then select **Select**.
 
1. Select **Review + assign**, review the settings, and then select **Review + assign** again to apply the role assignment.

## Create a service connection

1. Sign in to Azure DevOps, then navigate to your project.

1. Select **Project settings**, then select **Service connections**.

1. Select **New service connection**, select **Azure Resource Manager**, and then select **Next**.

1. Select **Service principal (manual)**, and then select **Next**.

1. For **Identity Type**, select **App registration or managed identity (manual)**.

1. For **Credential**, select **Workload identity federation**.

1. Enter a name for the service connection, and then select **Next**.

1. For **Environment**, select **Azure Cloud**, and for Subscription scope, select **Subscription**.

1. Enter your Azure **Subscription ID** and **Subscription name**.

1. For **Authentication**, paste your service principal's **Application (client) ID** and **Directory (tenant) ID**

1. Under **Security**, the **Grant access permission to all pipelines** option allows all pipelines to use this service connection. This option isn’t recommended. Instead, [authorize each pipeline individually to use the service connection](../library/service-endpoints.md#authorize-pipelines).

1. Leave this window open. You’ll return later to verify and save the service connection after creating the federated credential.

## Create a service principal federated credential

1. Navigate to [Azure portal](https://portal.azure.com/), enter the Client ID of your service principal in the search bar, and then select your *Application*.

1. Under **Manage**, select **Certificates & secrets** > **Federated credentials**.

1. Select **Add credential**, and then choose **Other issuer** for **Federated credential scenario**.

1. For **Issuer**, paste the *Issuer* value you copied from the service connection.

1. For **Subject identifier**, paste the *Subject identifier* value you copied from the service connection.

1. Enter a **Name** for the federated credential, and then select **Add**.

1. Return to your service connection window, select **Verify and Save** to save your service connection.

---

## Access key vault secrets from your pipeline

> [!WARNING]
> This tutorial is for educational purposes only. For security best practices and guidance on safely working with secrets, see [Manage secrets in your server apps with Azure Key Vault](/training/modules/manage-secrets-with-azure-key-vault/).

#### [YAML](#tab/yaml)

1. Sign in to Azure DevOps, then navigate to your project.

1. Select **Pipelines**, then select **New Pipeline**.

1. Select **Azure Repos Git** (YAML), and then select your repository.

1. Select the **Starter pipeline** template.

1. The default pipeline includes sample echo commands. These aren’t needed and can be removed.

1. Add the *Azure Key Vault task* to your pipeline. Replace the placeholders with the name of the service connection you created earlier and your Key Vault name. Your YAML file should look similar to the following example:

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

1. Add the following tasks to copy and publish the secret. This example is for **demonstration purposes only** and shouldn’t be used in a production environment.

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

1. Select **Save and run**, and then select it once more to commit your changes and trigger the pipeline. If prompted, select **Allow** to grant the pipeline access to Azure resources.

1. After the pipeline starts, select the **CmdLine** task to view the logs.

    :::image type="content" border="false" source="media/azure-key-vault/command-line-task.png" alt-text="A screenshot showing the command-line task logs.":::

1. When the pipeline run completes, return to the pipeline summary and select the published artifact.

    :::image type="content" border="false" source="media/azure-key-vault/pipeline-summary.png" alt-text="A screenshot showing the published artifact in the summary tab.":::

1. Select **drop** > **secret.txt** to download the file.

    :::image type="content" border="false" source="media/azure-key-vault/view-artifact.png" alt-text="A screenshot showing how to download the published artifact.":::

1. Open the downloaded text file. It should contain the secret retrieved from your Azure Key Vault.

#### [Classic](#tab/classic)

1. Sign in to Azure DevOps, then navigate to your project.

1. Select **Pipelines**, and then select **New Pipeline**.

1. Select **Use the classic editor** to create a Classic pipeline.

1. Select **Azure Repos Git**, select your repository and default branch, and then select **Continue**.

1. Select the **.Net Desktop** pipeline template.

1. For this example, only the last two tasks are required. Hold **CTRL** and then select the first five tasks, right-click and then select **Remove selected tasks(s)** to delete them.

    :::image type="content" border="false" source="media/delete-tasks.png" alt-text="A screenshot showing how to delete multiple pipeline tasks.":::

1. Select **+** to add a new task. Search for the **Command line** task, select it, and then select **Add**. Configure the task as follows:
    
    - **Display name**: Create file
    - **Script**: `echo $(SECRET_NAME) > secret.txt`

    :::image type="content" border="false" source="media/create-secret-file.png" alt-text="A screenshot showing how to configure the command line task.":::

1. Select **+** to add a new task. Search for the **Azure Key Vault** task, select it, and then select **Add**. Configure the task as follows:

    - **Display name**: Azure Key Vault
    - **Azure subscription**: Select the service connection you created earlier
    - **Key vault**: Select your Key Vault
    - **Secret filter**: Enter a comma‑separated list of secret names, or use * to download all secrets
    
    :::image type="content" border="false" source="media/azure-key-vault-classic-task-setup.png" alt-text="A screenshot showing how to set up the Azure Key Vault task in classic pipelines.":::

1. Select the **Copy files** task and configure the following fields:
    
    - **Display name**: Copy File
    - **Contents**: secret.txt
    - **Target Folder**: $(build.artifactstagingdirectory)

    :::image type="content" border="false" source="media/copy-files-task-classic-pipeline.png" alt-text="A screenshot showing how to set up the copy files task in classic pipelines.":::

1. Select the **Publish Artifacts** task and configure the following fields:

    - **Display name**: Publish Artifact
    - **Path to publish**: $(build.artifactstagingdirectory)
    - **Artifact name**: drop
    - **Artifact publish location**: Azure Pipelines
    
    :::image type="content" border="false" source="media/publish-artifacts-classic-pipeline.png" alt-text="A screenshot showing how to set up the publish artifacts task in classic pipelines.":::

1. Select **Save and queue**, and then select **Run** to start the pipeline.

1. After the pipeline completes, return to the pipeline summary and select the published artifact.

1. Select **drop** > **secret.txt** to download the artifact.

    :::image type="content" border="false" source="media/azure-key-vault/view-artifact.png" alt-text="A screenshot showing how to download the published artifact.":::

1. Open the downloaded text file. It should contain the secret retrieved from your Azure Key Vault.


* * *


## Clean up resources

Follow these steps to delete the resources you created:

1. If you created a new organization to host your project, see [how to delete your organization](../../organizations/accounts/delete-your-organization.md), otherwise [delete your project](../../organizations/projects/delete-project.md).

1. All Azure resources created during this tutorial are hosted in a single resource group. Run the following command to delete the resource group and all of its resources.

    ```azurecli
    az group delete --name <YOUR_RESOURCE_GROUP_NAME>
    ```

## Troubleshooting

#### Error: “The user or group does not have secrets list permission”:

This error occurs when the service principal or managed identity used by your pipeline doesn’t have permission to list secrets in the Azure Key Vault. To resolve this issue, make sure the identity has the **Get** and **List** permissions for secrets. Run the following commands to grant the required permissions to your service principal:


```azurecli
az login

az account set --subscription <YOUR_SUBSCRIPTION_ID>

$spnObjectId = az ad sp show --id <YOUR_SERVICE_PRINCIPAL_ID>

az keyvault set-policy --name <YOUR_KEY_VAULT_NAME> --object-id $spnObjectId --secret-permissions get list
```

## Related content

- [Access a private key vault from your pipeline](key-vault-access.md)

- [Publish and download pipeline artifacts](../artifacts/pipeline-artifacts.md)

- [Manage service connections](../library/service-endpoints.md)
