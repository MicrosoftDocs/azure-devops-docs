---
title: Query and use Azure Key Vault secrets in your Pipeline
description: How to set up Azure Key vaults with your own project and use it in your Azure Pipelines
ms.topic: tutorial
ms.date: 08/28/2023
monikerRange: '>= azure-devops-2019'
ms.custom: arm2024
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

## Create a Key Vault

### [Azure portal](#tab/portal/)

1. Sign in to the [Azure portal](https://portal.azure.com/), and then select **Create a resource**.

1. Under **Key Vault**, select **Create** to create a new Azure Key Vault.

1. Select your **Subscription** from the dropdown menu, and then select an existing **Resource group** or create a new one. Enter a **Key vault name**, select a **Region**, choose a **Pricing tier**, and select **Next** if you want to configure additional properties. Otherwise, select **Review + create** to keep the default settings.

1. Once the deployment is complete, select **Go to resource**.

    :::image type="content" source="media/go-to-resources.png" alt-text="A screenshot showing how to navigate to your resource in Azure portal.":::

### [Azure CLI](#tab/cli/)

1. First, set your default region and Azure subscription:

    - Set default subscription:
    
    ```azurecli
    az account set --subscription <your_subscription_name_or_subscription_ID>
    ```

    - Set default region:
    
    ```azurecli
    az config set defaults.location=<your_region>
    ```

1. Create a new resource group to host your Azure Key Vault. A resource group is a container that holds related resources for an Azure solution:

    ```azurecli
    az group create --name <your-resource-group>
    ```
   
1. Create a new Azure Key Vault:

    ```azurecli
    az keyvault create \
      --name <your-key-vault-name> \
      --resource-group <your-resource-group>
    ```
---

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

## Create a service principal

In this step, we will create a new [service principal](/cli/azure/azure-cli-sp-tutorial-1) in Azure, enabling us to query our Azure Key Vault from Azure Pipelines.

1. Navigate to [Azure portal](https://portal.azure.com/), then select the **>_** icon from the menu bar to open the **Cloud Shell**.

1. Select **PowerShell** or leave it as **Bash** based on your preference.

1. Run the following command to create a new service principal:

    ```Azure CLI
    az ad sp create-for-rbac --name YOUR_SERVICE_PRINCIPAL_NAME
    ```

1. Your output should match the example below. Be sure to copy the output of your command, as you will need it to create the service connection in the upcoming step. 

    ```json
    {
      "appId": "xxxxxxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "displayName": "MyServicePrincipal",
      "password": "***********************************",
      "tenant": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxxx"
    }
    ```

## Create a service connection

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Project settings**, and then select **Service connections**.

1. Select **New service connection**, select **Azure Resource Manager**, and then select **Next**.

1. Select **Service principal (manual)**, and then select **Next**.

1. For **Identity Type**, select **App registration or managed identity (manual)** from the dropdown menu.

1. For *Credential**, select **Workload identity federation**.

1. Provide a name for your service connection, and then select **Next**.

1. Copy the **Issuer** and the **Subject identifier** as we will need it in the next step.

1. Select **Azure Cloud** for **Environment**, and **Subscription** for the **Subscription scope**.

1. Enter your Azure **Subscription ID** and **Subscription name**.

1. For **Authentication**, paste your service principal's **Application (client) ID** and **Directory (tenant) ID**

1. Under **Security**, select the **Grant access permission to all pipelines** checkbox to allow all pipelines to use this service connection. If you don't select this option, you must manually grant access to each pipeline that uses this service connection.

1. Select **Verify and Save** when you're done.

    :::image type="content" border="false" source="media/managed-identity-service-connection.png" alt-text="A screenshot displaying how to create an ARM service connection using App registration or managed identity (manual)." lightbox="media/managed-identity-service-connection.png":::







1. Select **Subscription** for the **Scope Level**, and fill in the required fields with information from the previously created service principal. Select **Verify** when you're done: 

    - **Service Principal Id**: Your service principal **appId**.
    - **Service Principal key**: Your service principal **password**.
    - **Tenant ID**: Your service principal **tenant**.

1. Provide a name for your service connection, and make sure you check the **Grant access permission to all pipelines** checkbox.

1. Select **Verify and save** when you're done.

    :::image type="content" source="../../media/service-principal-service-connection.png" alt-text="A screenshot showing how to create a new manual service principal service connection.":::


## Create a workload identity federation

1. Navigate to [Azure portal](https://portal.azure.com/), then enter your service principal's ClientID in the search bar, and then select your *Application*.

1. Under **Manage**, select **Cetificates & secrets** > **Federated credentials**.

1. Select **Add credential**, and then select **Other issuer** for the **Federated credential scenario**.

1. 

## Configure Key Vault access permissions

1. Navigate to [Azure portal](https://portal.azure.com/).

1. Select the key vault you created in the previous step.

1. Select **Access policies**.

    :::image type="content" source="media/access-policies.png" alt-text="A screenshot showing how to navigate to your key vault access policies in Azure portal.":::

1. Select **Add Access Policy** to add a new policy.

1. Add a **Get** and **List** to **Secret permissions**.

    :::image type="content" source="media/get-list-permissions.png" alt-text="A screenshot showing how to add get and list permissions to your key vault in Azure portal.":::

1. Under **Select principal**, select to add a service principal and choose the one you created earlier.

1. Select **Save** when you're done.



---

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
