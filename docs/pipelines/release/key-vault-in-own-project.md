---
title: Query and use Azure Key Vault secrets in your Pipeline
description: How to set up Azure Key vaults with your own project and use it in your Azure Pipelines
ms.topic: tutorial
ms.date: 08/28/2023
monikerRange: '>= azure-devops-2019'
"recommendations": "true"
---

# Use Azure Key Vault secrets in your Pipeline

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

With Azure Key Vault, you can securely store and manage your sensitive information such as passwords, API keys, certificates, etc. using Azure Key Vault, you can easily create and manage encryption keys to encrypt your data. Azure Key Vault can also be used to manage certificates for all your resources. In this article, you'll learn how to:

> [!div class="checklist"]
>
> - Create an Azure Key Vault.
> - Configure your Key Vault permissions.
> - Create a new service connection.
> - Query for secrets from your Azure Pipeline.

## Prerequisites

- An Azure DevOps organization. [Create one for free](../../organizations/accounts/create-organization.md#create-an-organization) if you don't already have one.
- Your own project. [Create a project](../../organizations/projects/create-project.md#create-a-project) if you don't already have one.
- Your own repository. [Create a new Git repo](../../repos/git/create-new-repo.md) if you don't already have one.
- An Azure subscription. [Create a free Azure account](https://azure.microsoft.com/free) if you don't already have one.

## Create an Azure Key Vault

### [Azure portal](#tab/portal/)

1. Navigate to [Azure portal](https://portal.azure.com/).

1. Select **Create a resource** in the left navigation pane.

    :::image type="content" source="media/create-resource-pane.png" alt-text="A screenshot showing how to create a new resource in Azure portal.":::

1. Search for **Key Vault** and then press Enter.
    
    :::image type="content" source="media/search-resources.png" alt-text="A screenshot showing how to search for Azure Key Vault in Azure portal.":::

1. Select **Create** to create a new Azure Key Vault.

    :::image type="content" source="media/create-key-vault.png" alt-text="A screenshot showing how to create a new Azure Key Vault in Azure portal.":::

1. Select your **Subscription** and then add a new **Resource group**. Enter a **Key vault name** and select a **Region** and a **Pricing tier**. Select **Review + create** when you're done.

    :::image type="content" source="media/create-key-vault-window.png" alt-text="A screenshot showing the steps to create a new key vault in Azure portal.":::

1. Select **Go to resource** when the deployment of your new resource is completed.

    :::image type="content" source="media/go-to-resources.png" alt-text="A screenshot showing how to navigate to your resource in Azure portal.":::

### [Azure CLI](#tab/cli/)

1. First we need to set our default region and Azure subscription.

    - Set default subscription:
    
    ```azurecli
    az account set --subscription <your_subscription_name_or_subscription_ID>
    ```

    - Set default region:
    
    ```azurecli
    az config set defaults.location=<your_region>
    ```

1. Create a new resource group to host your Azure Key Vault. A resource group is a container that holds related resources for an Azure solution.

    ```azurecli
    az group create --name <your-resource-group>
    ```
   
1. Create a new Azure Key Vault.

    ```azurecli
    az keyvault create \
      --name <your-key-vault-name> \
      --resource-group <your-resource-group>
    ```
---

## Configure Key Vault access permissions

Before proceeding with the next steps, we must first create a service principal to be able to query our Azure Key Vault from Azure Pipelines. Complete the steps in [Create a service principal](/azure/active-directory/develop/howto-create-service-principal-portal#register-an-application-with-azure-ad-and-create-a-service-principal), and then continue with the next steps.

1. Navigate to [Azure portal](https://portal.azure.com/).

1. Select the key vault you created in the previous step.

1. Select **Access policies**.

    :::image type="content" source="media/access-policies.png" alt-text="A screenshot showing how to navigate to your key vault access policies in Azure portal.":::

1. Select **Add Access Policy** to add a new policy.

1. Add a **Get** and **List** to **Secret permissions**.

    :::image type="content" source="media/get-list-permissions.png" alt-text="A screenshot showing how to add get and list permissions to your key vault in Azure portal.":::

1. Under **Select principal**, select to add a service principal and choose the one you created earlier.

1. Select **Save** when you're done.

## Create a new service connection

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select ![gear icon](../../media/icons/gear-icon.png) **Project settings**, and then select **Service connections**.

1. If you're setting up a service connection for the first time in your project, select **Create service connection**. If you've made service connections before, select **New service connection**.

1. Select **Azure Resource Manager**, and then select **Next**.

1. Select **Service principal (manual)**, and then select **Next**.

1. Select **Subscription** for the **Scope Level** and complete the fields with the information from the service principal you created earlier, and then select **Verify**.

1. Provide a name for your service connection, and make sure you check the **Grant access permission to all pipelines** checkbox.

1. Select **Verify and save** when you're done.

:::image type="content" source="../../media/service-principal-service-connection.png" alt-text="A screenshot showing how to create a new manual service principal service connection.":::

## Query and use secrets in your pipeline

Using the [Azure Key Vault task](/azure/devops/pipelines/tasks/reference/azure-key-vault-v2) we can fetch the value of our secret and use it in subsequent tasks in our pipeline. One thing to keep in mind is that secrets must be explicitly mapped to env variable as shown in the example below.

```YAML
pool:
  vmImage: 'ubuntu-latest'

steps:
- task: AzureKeyVault@1
  inputs:
    azureSubscription: 'repo-kv-demo'                    ## YOUR_SERVICE_CONNECTION_NAME
    KeyVaultName: 'kv-demo-repo'                         ## YOUR_KEY_VAULT_NAME
    SecretsFilter: 'secretDemo'                          ## YOUR_SECRET_NAME. Default value: *
    RunAsPreJob: false                                   ## Make the secret(s) available to the whole job

- task: DotNetCoreCLI@2
  inputs:
    command: 'build'
    projects: '**/*.csproj'

- task: DotNetCoreCLI@2
  inputs:
    command: 'run'
    projects: '**/*.csproj'
  env:
    mySecret: $(secretDemo)

- bash: |
    echo "Secret Found! $MY_MAPPED_ENV_VAR"        
  env:
    MY_MAPPED_ENV_VAR: $(mySecret)
```

The output from the last bash command should look like this:

```
Secret Found! ***
```

> [!NOTE]
> If you want to query for multiple secrets from your Azure Key Vault, use the `SecretsFilter` argument to pass a comma-separated list of secret names: *'secret1, secret2'*.

## Related articles

- [Manage service connections](../library/service-endpoints.md)
- [Define variables](../process/variables.md)
- [Publish Pipeline Artifacts](../publish-pipeline-artifact.md)