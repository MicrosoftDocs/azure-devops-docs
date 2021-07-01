---
title: Use Azure Key Vault in your project
description: How to set up Azure Key vaults in your project and use it in your Azure Pipelines
ms.topic: tutorial
ms.date: 06/30/2021
monikerRange: '>= azure-devops-2019'
"recommendations": "true"
---

# Use Azure Key Vault with your project

**Azure Pipelines | Azure DevOps Server 2020 | Azure DevOps Server 2019**

With Azure Key Vault you can securely store and manage your sensitive information such as passwords, API keys, certificates, etc. using Azure Key Vault, you can easily create and manage encryption keys to encrypt your data. Azure Key Vault can also be used to manage certificates for all your resources.

## Prerequisites

- An Azure DevOps organization. [Create one for free](../../organizations/accounts/create-organization.md#create-an-organization) if you don't already have one.
- Your own project. [Create a project](../../organizations/projects/create-project.md#create-a-project) if you don't already have one.
- Your own repository. [Create a new Git repo](../../repos/git/create-new-repo.md) if you don't already have one.
- An Azure subscription. [Create a free Azure account](https://azure.microsoft.com/free) if you don't already have one.

## Create an Azure Key Vault


### [Azure Portal](#tab/portal/)

1. Navigate to [Azure Portal](https://portal.azure.com/).

1. Select **Create a resource** in the left navigation pane.

    :::image type="content" source="media/create-resource-pane.png" alt-text="Create a new resource from the left nav pane":::

1. Search for **Key Vault** and then click Enter.
    
    :::image type="content" source="media/search-resources.png" alt-text="Search for Azure Key Vault":::

1. Select **Create** to create a new Azure Key Vault.

    :::image type="content" source="media/create-key-vault.png" alt-text="Create a new Azure Key Vault":::

1. Select your **Subscription** and then add a new **Resource group**. Enter a **Key vault name** and select a **Region** and a **Pricing tier**. Select **Review + create** when you are done.

    :::image type="content" source="media/create-key-vault-window.png" alt-text="Create a new key vault window":::

1. Select **Go to resource** when the deployment of your new resource is completed.

    :::image type="content" source="media/go-to-resources.png" alt-text="Go to resource":::

### [Azure CLI](#tab/cli/)

1. First we need to set our default region and Azure subscription.

    - Set default subscription:
    
    ```Command
    az account set --subscription <your_subscription_name_or_subscription_ID>
    ```

    - Set default region:
    
    ```Command
    az config set defaults.location=<your_region>
    ```

1. Create a new resource group to host your Azure Key Vault. A resource group is a container that holds related resources for an Azure solution.

    ```Command
    az group create --name <your-resource-group>
    ```
   
1. Create a new Azure Key Vault.

    ```Command
    az keyvault create \
      --name <your-key-vault-name> \
      --resource-group <your-resource-group>
    ```
---

## Configure Key Vault access permissions

Before proceeding with the next steps, we must first create a service principal to be able to query our Azure Key Vault from Azure Pipelines. Follow the steps in the following how-to to [Create a service principal](azure/active-directory/develop/howto-create-service-principal-portal.md#register-an-application-with-azure-ad-and-create-a-service-principal) and then continue with the next steps.

1. Navigate to [Azure Portal](https://portal.azure.com/).

1. Select the key vault you created in the previous step.

1. Select **Access policies**.

    :::image type="content" source="media/access-policies.png" alt-text="configure access policies":::

1. Select **Add Access Policy** to add a new policy.

1. Add a **Get** and **List** to **Secret permissions**.

    :::image type="content" source="media/get-list-permissions.png" alt-text="Add get and list permissions":::

1. Under **Select principal** select to add a service principal and choose the one you created earlier.

1. Select **Save** when you are done.

## Query and use secrets in your pipeline

Using the [Azure Key Vault task](../tasks/deploy/azure-key-vault.md) we can fetch the value of our secret and use it in subsequent tasks in our pipeline. One thing to keep in mind is that secrets must be explicitly mapped to env variable as shown in the example below.

```YAML
pool:
  vmImage: 'ubuntu-latest'

steps:
- task: AzureKeyVault@1
  inputs:
    azureSubscription: 'repo-kv-demo'                    ## YOUR_SERVICE_CONNECTION_NAME
    KeyVaultName: 'kv-demo-repo'                         ## YOUR_KEY_VAULT_NAME
    SecretsFilter: 'secretDemo'                          ## YOUR_SECRET_NAME
    RunAsPreJob: false

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

The output from the bash task should look like this:

```
Secret Found! ***
```

## Related articles

- [Manage service connections](../library/service-endpoints.md)
- [Define variables](../process/variables.md)
- [Publish Pipeline Artifacts](../publish-pipeline-artifact.md)