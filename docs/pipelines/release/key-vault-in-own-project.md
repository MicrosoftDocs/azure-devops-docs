---
title: Query and Use Azure Key Vault Secrets in Your Pipeline
description: Learn how to set up Azure Key Vault with your own project and use it in your Azure pipelines.
ms.topic: tutorial
ms.date: 04/14/2025
monikerRange: "<=azure-devops"
ms.custom: arm2024, sfi-image-nochange
"recommendations": "true"
---

# Use Azure Key Vault secrets in your pipeline

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Developers can use Azure key vaults to securely store and manage sensitive information such as passwords, API keys, and certificates. This article walks you through how to query and use secrets from an Azure key vault in your pipeline.

## Prerequisites

| Product | Requirements   |
|-------------|--------------------|
| Azure DevOps | - An [Azure DevOps project](../../organizations/projects/create-project.md).<br>   - Permissions:<br>      &nbsp;&nbsp;&nbsp;&nbsp;- To grant access to all pipelines in the project: You must be a member of the [Project administrators group](../../organizations/security/change-project-level-permissions.md).<br>      &nbsp;&nbsp;&nbsp;&nbsp;- To create service connections: You must have the Administrator or Creator role for [service connections](../library/add-resource-protection.md). |
| GitHub | - A [GitHub](https://github.com) account and a [GitHub repository](../../repos/git/create-new-repo.md). <br>   - A [GitHub service connection](../library/service-endpoints.md#github-service-connection) to authorize Azure Pipelines.|
| Azure | - An [Azure subscription](https://azure.microsoft.com/pricing/purchase-options/azure-account?cid=msft_learn). |

## Create a key vault

### [Azure portal](#tab/portal/)

1. Sign in to the [Azure portal](https://portal.azure.com/), and then select **Create a resource**.

1. Under **Key Vault**, select **Create** to create a new Azure key vault.

1. Select your subscription from the dropdown menu, and then select an existing resource group or create a new one. Enter a key vault name, select a region, choose a pricing tier, and select **Next** if you want to configure more properties. Otherwise, select **Review + create** to keep the default settings.

1. After the deployment is finished, select **Go to resource**.

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

1. Create a new resource group to host your Azure key vault. A resource group is a container that holds related resources for an Azure solution:

    ```azurecli
    az group create --name <your-resource-group>
    ```
   
1. Create a new Azure key vault:

    ```azurecli
    az keyvault create \
      --name <your-key-vault-name> \
      --resource-group <your-resource-group>
    ```
---

## Set up authentication

# [Managed Identity](#tab/managedidentity)

## Create a user-assigned managed identity

1. Sign in to the [Azure portal](https://portal.azure.com/), and then search for the **Managed Identities** service in the search bar.

1. Select **Create**, and then fill out the required fields:

    - **Subscription**: Select your subscription from the dropdown menu.
    - **Resource group**: Select an existing resource group or create a new one.
    - **Region**: Select a region from the dropdown menu.
    - **Name**: Enter a name for your user-assigned managed identity.

1. Select **Review + create** after you're finished.

1. After the deployment is finished, select **Go to resource**. Copy the subscription and client ID because you need them in the next steps.

1. Go to **Settings** > **Properties**, and copy your managed identity **Tenant ID** to use later.

## Set up key vault access policies

1. Go to the [Azure portal](https://portal.azure.com/), and use the search bar to find the key vault that you created earlier.

1. Select **Access policies**, and then select **Create** to add a new policy.

1. Under **Secret permissions**, select the **Get** and **List** checkboxes.

1. Select **Next**, and then paste the client ID of the managed identity that you created earlier into the search bar.

1. Select your managed identity, select **Next**, and then **Next** again.

1. Review your new policy, and then select **Create** after you're finished.

## Create a service connection

1. Sign in to your Azure DevOps organization, and then go to your project.

1. Select **Project settings** > **Service connections**, and then select **New service connection**.

1. Select **Azure Resource Manager**, and then select **Next**.

1. Under **Identity Type**, select **Managed identity** from the dropdown menu.

1. For **Step 1: Managed identity details**, fill out the fields:

    - **Subscription for managed identity**: Select the subscription that contains your managed identity.
    - **Resource group for managed identity**: Select the resource group where your managed identity is hosted.
    - **Managed identity**: Select your managed identity from the dropdown menu.

1. For **Step 2: Azure Scope**, fill out the fields:

    - **Scope level for service connection**: Select **Subscription**.
    - **Subscription for service connection**: Select the subscription that your managed identity accesses.
    - **Resource group for service connection**: (Optional) Specify this item if you want to restrict access to a specific resource group.

1. For **Step 3: Service connection details**, fill out the fields:

    - **Service connection name**: Enter a name for your service connection.
    - **Service management reference**: (Optional) Include context information from an ITSM database.
    - **Description**: (Optional) Add a description.

1. Under **Security**, select the **Grant access permission to all pipelines** checkbox to allow all pipelines to use this service connection. If you leave this checkbox blank, you need to manually grant access for each pipeline.

1. Select **Save** to validate and create the service connection.

    :::image type="content" border="false" source="media/managed-identity-service-connection.png" alt-text="Screenshot that shows how to create a managed identity Azure Resource Manager service connection." lightbox="media/managed-identity-service-connection.png":::

# [Service Principal](#tab/serviceprincipal)

## Create a service principal

In this step, you create a new [service principal](/cli/azure/azure-cli-sp-tutorial-1) in Azure so that your pipelines can access Azure Key Vault.

1. Go to the [Azure portal](https://portal.azure.com/), and then select the **>_** icon from the top menu to open the cloud shell.

1. Select either **PowerShell** or **Bash** depending on your preference.

1. Run the following command to create a new service principal:

    ```Azure CLI
    az ad sp create-for-rbac --name YOUR_SERVICE_PRINCIPAL_NAME
    ```

1. After the command runs, you get an output similar to the following example. Copy and save the output because you need it to create a service connection in the next step.

    ```json
    {
      "appId": "00001111-aaaa-2222-bbbb-3333cccc4444",
      "displayName": "MyServicePrincipal",
      "password": "***********************************",
      "tenant": "aaaabbbb-0000-cccc-1111-dddd2222eeee"
    }
    ```

## Create a service connection

1. Sign in to your Azure DevOps organization, and then go to your project.

1. Select **Project settings**, and then select **Service connections**.

1. Select **New service connection** > **Azure Resource Manager**, and then select **Next**.

1. Select **Service principal (manual)**, and then select **Next**.

1. Under **Identity Type**, select **App registration or managed identity (manual)**.

1. Under **Credential**, select **Workload identity federation**.

1. Provide a name for your service connection, and then select **Next**.

1. Copy the **Issuer** and the **Subject identifier** values because you need them in the next step.

1. For **Environment**, select **Azure Cloud**. For **Subscription scope**, select **Subscription**.

1. Enter your Azure subscription ID and subscription name.

1. Under **Authentication**, paste your service principal **Application (client) ID** and **Directory (tenant) ID** values.

1. In the **Security** section, select the **Grant access permission to all pipelines** checkbox to allow all pipelines to use this service connection. If you skip this step, you need to manually grant access per pipeline.

1. Leave this page open. You come back to finish it after you create the federated credential in Azure and grant your service principal Read access at the subscription level.

    :::image type="content" border="false" source="media/service-principal-federated-credential-service-connection.png" alt-text="Screenshot that shows how to create an Azure Resource Manager service connection by using App registration." lightbox="media/service-principal-federated-credential-service-connection.png":::

## Create a federated credential in Azure

1. Go to the [Azure portal](https://portal.azure.com/), and then use the search bar to find your service principal by entering its client ID. Select the matching application from the results.

1. Under **Manage**, select **Certificates & secrets** > **Federated credentials**.

1. Select **Add credential**, and then for **Federated credential scenario**, select **Other issuer**.

1. In the **Issuer** field, paste the **Issuer** value that you copied from your service connection earlier.

1. In the **Subject identifier** field, paste the subject identifier that you copied earlier.

1. Enter a name for your federated credential, and then select **Add** after you're finished.

    :::image type="content" border="false" source="media/service-principal-federated-credential-in-azure.png" alt-text="Screenshot that shows how to create a federated credential for a service principal in Azure." lightbox="media/service-principal-federated-credential-in-azure.png":::

## Add a role assignment to your subscription

Before you can verify the connection, you need to grant the service principal Read access at the subscription level:

1. Go to the [Azure portal](https://portal.azure.com/).

1. Under **Azure services**, select **Subscriptions**, and then find and select your subscription.

1. Select **Access control (IAM)**, and then select **Add** > **Add role assignment**.

1. Under the **Role** tab, select **Reader**, and then select **Next**.

1. Select **User, group, or service principal**, and then choose **Select members**.

1. In the search bar, paste your service principal's object ID, select it, and then choose **Select**.

1. Select **Review + assign**, review your settings, and then select **Review + assign** again to confirm.

1. After the role assignment is added, go back to your service connection in Azure DevOps and select **Verify and Save** to save your service connection.

## Configure key vault access policies

1. Go to the [Azure portal](https://portal.azure.com/), find the key vault that you created earlier, and then select **Access policies**.

1. Select **Create**, and then under **Secret permissions**, add both the **Get** and **List** permissions, and then select **Next**.

1. Under **Principal**, paste your service principal's object ID, select it, and then select **Next**.

1. Select **Next** again, review your settings, and then select **Save** to apply the new policy.

---

## Query and use secrets in your pipeline

With the [Azure Key Vault task](/azure/devops/pipelines/tasks/reference/azure-key-vault-v2), you can now query and fetch secrets from your key vault and use them in subsequent tasks in your pipeline. Secrets must be explicitly mapped to environment variables, as shown in the following example:

```YAML
pool:
  vmImage: 'ubuntu-latest'

steps:
- task: AzureKeyVault@2                                # Download Azure Key Vault secrets.
  inputs:
    azureSubscription: 'SERVICE_CONNECTION_NAME'       # Name of the service connection. Alias: ConnectedServiceName.
    KeyVaultName: 'KEY_VAULT_NAME'                     # Name of the key vault.
    SecretsFilter: '*'                                 # Secrets filter. Default: *.

- bash: |
    echo "Secret Found! $MY_MAPPED_ENV_VAR"        
  env:
    MY_MAPPED_ENV_VAR: $(SECRET_NAME)
```

The output from the last bash step should look like this example:

```
Secret Found! ***
```

> [!NOTE]
> To query multiple secrets from your key vault, use the `SecretsFilter` input and provide a comma-separated list of secret names, like *'secret1, secret2'*.

## Related content

- [Protect secrets in Azure Pipelines](../security/secrets.md)
- [Access a private key vault from your pipeline](key-vault-access.md)
- [Manage security in Azure Pipelines](../policies/permissions.md)
