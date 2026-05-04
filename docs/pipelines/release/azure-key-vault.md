---
title: Use Azure Key Vault Secrets in Azure Pipelines
description: Learn how to create Azure key vaults, store secrets, and use them in your Azure Pipelines.
ms.topic: tutorial
ms.date: 01/27/2026
monikerRange: '>= azure-devops'
ms.custom: devx-track-azurecli, arm2024, sfi-image-nochange
"recommendations": "true"
---

# Use Azure Key Vault secrets in Azure Pipelines

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Azure Key Vault is a cloud service that helps developers securely store and manage sensitive information such as API keys, credentials, and certificates. Key Vault supports two types of containers: vaults and managed hardware security module (HSM) pools. Vaults can store both software and HSM-backed keys, secrets, and certificates. Managed HSM pools exclusively support HSM-backed keys.

In this article, you learn how to create a key vault, add a secret, configure access policies, and then use that secret in Azure Pipelines. This tutorial uses a key vault with public network access. If you need to access a private key vault from your pipeline, see [Access a private key vault from your pipeline](key-vault-access.md). To link Key Vault secrets to variable groups, see [Link a variable group to secrets in Azure Key Vault](../library/link-variable-groups-to-key-vaults.md).

## Prerequisites

| Category           | Requirements              |
|--------------------|---------------------------|
| Azure DevOps   | - An [Azure DevOps organization](../../organizations/accounts/create-organization.md).<br> - An [Azure DevOps project](../../organizations/projects/create-project.md). |
| Azure          | An [Azure subscription](https://azure.microsoft.com/pricing/purchase-options/azure-account?cid=msft_learn). |

## Get the code

If you don't have your own project, import the following sample repository into your Azure repo:

1. Sign in to your Azure DevOps organization, and then go to your project.

1. Select **Repos**, and then select **Import**. Enter the following repository URL, and then select **Import**.

    ```
    https://github.com/MicrosoftDocs/pipelines-dotnet-core
    ```

## Create a key vault

To create a new key vault in Azure by using the Azure CLI, follow these steps:

1. Go to the [Azure portal](https://portal.azure.com/), and then select [Azure Cloud Shell](/azure/cloud-shell/overview) in the upper-right corner.

1. If your account is associated with multiple Azure subscriptions, set your default subscription.

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

1. Create a new key vault.

    ```azurecli
    az keyvault create \
      --name <YOUR_KEY_VAULT_NAME> \
      --resource-group <YOUR_RESOURCE_GROUP_NAME>
    ```

1. Add a secret to your key vault.

    ```azurecli
    az keyvault secret set \
      --name <YOUR_SECRET_NAME> \
      --value <YOUR_ACTUAL_SECRET> \
      --vault-name <YOUR_KEY_VAULT_NAME>
    ```

## Set up authentication

After you create your key vault, the next step is to set up authentication. Select **Managed Identity** or **Service Principal**, and follow the instructions to configure authentication.

# [Managed Identity](#tab/managedidentity)

## Create a user-assigned managed identity

1. Go to the [Azure portal](https://portal.azure.com/), and then search for **Managed Identities** in the search bar.

1. Select **Create**, and provide the following information:

    - **Subscription**: Select your Azure subscription from the dropdown menu.
    - **Resource group**: Select an existing resource group or create a new one.
    - **Region**: Select the region where the managed identity is created.
    - **Name**: Enter a name for the user-assigned managed identity.

1. Select **Review + create**, and then select **Create** to start the deployment.

1. After the deployment finishes, select **Go to resource**, and copy the **Subscription ID** and **Client ID** values. You need these values in later steps.

1. Under **Settings**, select **Properties**, and copy your managed identity's **Tenant ID** value for later use.

## Set up key vault access policies

1. Go to the [Azure portal](https://portal.azure.com/), and use the search bar to locate the key vault you created earlier.

1. Select **Access policies**, and then select **Create** to add a new policy.

1. Under **Secret permissions**, select the **Get** and **List** checkboxes.

1. Select **Next**. Paste the **Client ID** of the managed identity that you created earlier into the search bar, and then select the managed identity.

1. Select **Next**, and then select **Next** again.

1. Review the access policy details, and then select **Create** to apply the policy.

## Create a service connection

1. Sign in to Azure DevOps, and then go to your project.

1. Select **Project settings** > **Service connections** > **New service connection**.

1. Select **Azure Resource Manager**, and then select **Next**.

1. For **Identity Type**, select **Managed identity**.

1. Under **Step 1: Managed identity details**, provide the following information:

    - **Subscription for managed identity**: Select the subscription that contains your managed identity.
    - **Resource group for managed identity**: Select the resource group that hosts your managed identity.
    - **Managed identity**: Select your managed identity from the dropdown list.

1. For **Step 2: Azure Scope**, provide the following information:

    - **Scope level for service connection**: Select **Subscription**.
    - **Subscription for service connection**: Select the subscription that the managed identity accesses.
    - **Resource group for service connection**: (Optional) Specify a resource group to limit the managed identity's access to one resource group.

1. For **Step 3: Service connection details**, provide the following information:

    - **Service connection name**: Enter a name for the service connection.
    - **Service management reference**: (Optional) Include context information from an ITSM database.
    - **Description**: (Optional) Enter a description.

1. Under **Security**, the **Grant access permission to all pipelines** option allows all pipelines to use this service connection. We don't recommend this option. Instead, [authorize each pipeline individually to use the service connection](../library/service-endpoints.md#authorize-pipelines).

1. Select **Save** to validate and create the service connection.

    :::image type="content" border="false" source="media/managed-identity-service-connection.png" alt-text="Screenshot that shows how to create a managed identity Azure Resource Manager service connection." lightbox="media/managed-identity-service-connection.png":::

# [Service Principal](#tab/serviceprincipal)

## Set up key vault access policies

To access your key vault, you must first set up a service principal to grant access to Azure Pipelines.

1. [Create a service principal](/cli/azure/azure-cli-sp-tutorial-1#create-a-service-principal).

1. Go to the [Azure portal](https://portal.azure.com/), and use the search bar to locate the key vault that you created earlier.

1. Select **Access policies**, and then select **Create**.

1. Under **Secret permissions**, add the **Get** and **List** permissions, and then select **Next**.

1. For **Principal**, paste the object ID of your service principal, select the service principal, and then select **Next**.

1. Select **Next** again, review the access policy, and then select **Save**.

## Add role assignment

In the next step, you create an Azure Resource Manager service connection for your service principal. Before you verify the connection, you need to:

- Grant the service principal Reader access at the subscription level.
- Create a federated credential for your service principal.

To grant Reader access at the subscription level, follow these steps:

1. Go to the [Azure portal](https://portal.azure.com/), select **Subscriptions**, and then select your subscription.

1. Select **Access control (IAM)**, and then select **Add** > **Add role assignment**.

1. On the **Role** tab, select **Reader**, and then select **Next**.

1. Select **User, group, or service principal**, and then choose **Select members**.

1. Paste the object ID of your service principal into the search bar, select it, and then choose **Select**.

1. Select **Review + assign**, review the settings, and then select **Review + assign** again to apply the role assignment.

## Create a service connection

1. Sign in to Azure DevOps, and then go to your project.

1. Select **Project settings** > **Service connections**.

1. Select **New service connection** > **Azure Resource Manager**, and then select **Next**.

1. Select **Service principal (manual)**, and then select **Next**.

1. For **Identity Type**, select **App registration or managed identity (manual)**.

1. For **Credential**, select **Workload identity federation**.

1. Enter a name for the service connection, and then select **Next**.

1. For **Environment**, select **Azure Cloud**, and for **Subscription scope**, select **Subscription**.

1. Enter your Azure subscription ID and subscription name.

1. For **Authentication**, paste your service principal's application (client) ID and directory (tenant) ID.

1. Under **Security**, the **Grant access permission to all pipelines** option allows all pipelines to use this service connection. We don't recommend this option. Instead, [authorize each pipeline individually to use the service connection](../library/service-endpoints.md#authorize-pipelines).

1. Leave this window open. You return later to verify and save the service connection after you create the federated credential.

## Create a service principal federated credential

1. Go to the [Azure portal](https://portal.azure.com/), enter the client ID of your service principal in the search bar, and then select your application.

1. Under **Manage**, select **Certificates & secrets** > **Federated credentials**.

1. Select **Add credential**, and then for **Federated credential scenario**, select **Other issuer**.

1. For **Issuer**, paste the **Issuer** value that you copied from the service connection.

1. For **Subject identifier**, paste the **Subject identifier** value that you copied from the service connection.

1. Enter a name for the federated credential, and then select **Add**.

1. Return to your service connection window, and select **Verify and Save** to save your service connection.

---

## Access key vault secrets from your pipeline

> [!WARNING]
> This tutorial is for educational purposes only. For security best practices and guidance on safely working with secrets, see [Manage secrets in your server apps with Azure Key Vault](/training/modules/manage-secrets-with-azure-key-vault/).

#### [YAML](#tab/yaml)

1. Sign in to Azure DevOps, and then go to your project.

1. Select **Pipelines** > **New Pipeline**.

1. Select **Azure Repos Git** (YAML), and then select your repository.

1. Select the **Starter pipeline** template.

1. The default pipeline includes sample echo commands. You don't need these commands, so you can remove them.

1. Add the **Azure Key Vault task** to your pipeline. Replace the placeholders with the name of the service connection that you created earlier and your key vault name. Your YAML file should look similar to the following example:

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

1. Add the following tasks to copy and publish the secret. This example is for *demonstration purposes only*. Don't use it in a production environment.

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

    :::image type="content" border="false" source="media/azure-key-vault/command-line-task.png" alt-text="Screenshot that shows the command-line task logs.":::

1. When the pipeline run finishes, return to the pipeline summary and select the published artifact.

    :::image type="content" border="false" source="media/azure-key-vault/pipeline-summary.png" alt-text="Screenshot that shows the published artifact in the summary tab.":::

1. Select **drop** > **secret.txt** to download the file.

    :::image type="content" border="false" source="media/azure-key-vault/view-artifact.png" alt-text="Screenshot that shows how to download the published artifact.":::

1. Open the downloaded text file. It should contain the secret retrieved from your key vault.

#### [Classic](#tab/classic)

1. Sign in to Azure DevOps, and then go to your project.

1. Select **Pipelines**, and then select **New Pipeline**.

1. Select **Use the classic editor** to create a classic pipeline.

1. Select **Azure Repos Git**, select your repository and default branch, and then select **Continue**.

1. Select the **.Net Desktop** pipeline template.

1. For this example, only the last two tasks are required. Hold **Ctrl** and then select the first five tasks. Right-click, and then select **Remove selected tasks(s)** to delete them.

    :::image type="content" border="false" source="media/delete-tasks.png" alt-text="Screenshot that shows how to delete multiple pipeline tasks.":::

1. Select **+** to add a new task. Search for the **Command line** task, select it, and then select **Add**. Configure the task:

    - **Display name**: Enter **Create file**.
    - **Script**: Enter **echo $(SECRET_NAME) > secret.txt**.

    :::image type="content" border="false" source="media/create-secret-file.png" alt-text="Screenshot that shows how to configure the command-line task.":::

1. Select **+** to add a new task. Search for the **Azure Key Vault** task, select it, and then select **Add**. Configure the task:

    - **Display name**: Enter **Azure Key Vault**.
    - **Azure subscription**: Select the service connection that you created earlier.
    - **Key vault**: Select your key vault.
    - **Secrets filter**: Enter a comma‑separated list of secret names, or use an asterisk (*) to download all secrets.

    :::image type="content" border="false" source="media/azure-key-vault-classic-task-setup.png" alt-text="Screenshot that shows how to set up the Azure Key Vault task in classic pipelines.":::

1. Select the **Copy files** task, and configure the following fields:

    - **Display name**: Enter **Copy File**.
    - **Contents**: Enter **secret.txt**.
    - **Target Folder**: Enter **$(build.artifactstagingdirectory)**.

    :::image type="content" border="false" source="media/copy-files-task-classic-pipeline.png" alt-text="Screenshot that shows how to set up the Copy File task in classic pipelines.":::

1. Select the **Publish Artifacts** task, and configure the following fields:

    - **Display name**: Enter **Publish Artifact**.
    - **Path to publish**: Enter **$(build.artifactstagingdirectory)**.
    - **Artifact name**: Enter **drop**.
    - **Artifact publish location**: Enter **Azure Pipelines**.
    
    :::image type="content" border="false" source="media/publish-artifacts-classic-pipeline.png" alt-text="Screenshot that shows how to set up the Publish Artifact task in classic pipelines.":::

1. Select **Save and queue**, and then select **Run** to start the pipeline.

1. After the pipeline finishes, return to the pipeline summary and select the published artifact.

1. Select **drop** > **secret.txt** to download the artifact.

    :::image type="content" border="false" source="media/azure-key-vault/view-artifact.png" alt-text="Screenshot that shows how to download the published artifact.":::

1. Open the downloaded text file. It should contain the secret that was retrieved from your key vault.

* * *

## Clean up resources

To delete the resources that you created, follow these steps:

1. If you created a new organization to host your project, see [how to delete your organization](../../organizations/accounts/delete-your-organization.md). Otherwise, [delete your project](../../organizations/projects/delete-project.md).

1. All Azure resources created during this tutorial are hosted in a single resource group. Run the following command to delete the resource group and all of its resources.

    ```azurecli
    az group delete --name <YOUR_RESOURCE_GROUP_NAME>
    ```

## Troubleshooting

#### Error: "The user or group does not have secrets list permission"

This error occurs when the service principal or managed identity used by your pipeline doesn't have permission to list secrets in the key vault. To resolve this issue, make sure the identity has the **Get** and **List** permissions for secrets. Run the following commands to grant the required permissions to your service principal:

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
