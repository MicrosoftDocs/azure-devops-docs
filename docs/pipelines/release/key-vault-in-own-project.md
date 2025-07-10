---
title: Query and use Azure Key Vault secrets in your pipeline
description: Lean how to set up Azure Key vaults with your own project and use it in your Azure Pipelines.
ms.topic: tutorial
ms.date: 04/14/2025
monikerRange: "<=azure-devops"
ms.custom:
  - arm2024
  - sfi-image-nochange
"recommendations": "true"
---

# Use Azure Key Vault secrets in your Pipeline

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

Azure Key Vaults enable developers to securely store and manage sensitive information such as passwords, API keys, and certificates. This article walks you through how to query and use secrets from an Azure Key Vault in your pipeline.

## Prerequisites

| **Product** | **Requirements**   |
|-------------|--------------------|
| **Azure DevOps** | - An [Azure DevOps project](../../organizations/projects/create-project.md).<br>   - **Permissions:**<br>      &nbsp;&nbsp;&nbsp;&nbsp;- To grant access to all pipelines in the project: You must be a member of the [Project Administrators group](../../organizations/security/change-project-level-permissions.md).<br>      &nbsp;&nbsp;&nbsp;&nbsp;- To create service connections: You must have the *Administrator* or *Creator* role for [service connections](../library/add-resource-protection.md). |
| **GitHub** | - A [GitHub](https://github.com) account and a [GitHub repository](../../repos/git/create-new-repo.md). <br>   - A [GitHub service connection](../library/service-endpoints.md#github-service-connection) to authorize Azure Pipelines.|
| **Azure** | - An [Azure subscription](https://azure.microsoft.com/free/). |

## Create a Key Vault

### [Azure portal](#tab/portal/)

1. Sign in to the [Azure portal](https://portal.azure.com/), and then select **Create a resource**.

1. Under **Key Vault**, select **Create** to create a new Azure Key Vault.

1. Select your **Subscription** from the dropdown menu, and then select an existing **Resource group** or create a new one. Enter a **Key vault name**, select a **Region**, choose a **Pricing tier**, and select **Next** if you want to configure additional properties. Otherwise, select **Review + create** to keep the default settings.

1. Once the deployment is complete, select **Go to resource**.

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

1. Once the deployment is complete, select **Go to resource**, then copy the **Subscription** and **Client ID**, you'll need them in the next steps.

1. Navigate to **Settings** > **Properties**, and copy your managed identity's **Tenant ID** to use later.

## Set up key vault access policies

1. Navigate to [Azure portal](https://portal.azure.com/), and use the search bar to find the key vault you created earlier.

1. Select **Access policies**, then select **Create** to add a new policy.

1. Under **Secret permissions**, select the **Get** and **List** checkboxes.

1. Select **Next**, then paste the **Client ID** of the managed identity you created earlier into the search bar.

1. Select your managed identity, select **Next**, then **Next** once more.

1. Review your new policy, and then select **Create** when you're done.

## Create a service connection

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Project settings** > **Service connections**, and then select **New service connection**.

1. Select **Azure Resource Manager**, then select **Next**.

1. Under **Identity Type**, select **Managed identity** from the dropdown menu.

1. For **Step 1: Managed identity details**, fill out the fields as follows:

    - **Subscription for managed identity**: Select the subscription that contains your managed identity.

    - **Resource group for managed identity**: Select the resource group where your managed identity is hosted.

    - **Managed Identity**: Select your managed identity from the dropdown menu.

1. For **Step 2: Azure Scope**, fill out the fields as follows:

    - **Scope level for service connection**: Select **Subscription**.

    - **Subscription for service connection**: Select the subscription your managed identity will access.

    - **Resource group for Service connection**: (Optional) Specify this if you want to restrict access to a specific resource group.

1. For **Step 3: Service connection details**:

    - **Service connection name**: Provide a name for your service connection.

    - **Service Management Reference**: (Optional) Include context information from an ITSM database.

    - **Description**: (Optional) Add a description.

1. Under **Security**, check the **Grant access permission to all pipelines** box to allow all pipelines to use this service connection. If you leave this unchecked, you’ll need to manually grant access for each pipeline.

1. Select **Save** to validate and create the service connection.

    :::image type="content" border="false" source="media/managed-identity-service-connection.png" alt-text="A screenshot displaying how to create a managed identity ARM service connection." lightbox="media/managed-identity-service-connection.png":::

# [Service Principal](#tab/serviceprincipal)

## Create a service principal

In this step, you'll create a new [service principal](/cli/azure/azure-cli-sp-tutorial-1) in Azure so that your Azure Pipelines can access Azure Key Vault.

1. Navigate to [Azure portal](https://portal.azure.com/), then select the **>_** icon from the top menu to open the **Cloud Shell**.

1. Select either **PowerShell** or **Bash** depending on your preference. 

1. Run the following command to create a new service principal:

    ```Azure CLI
    az ad sp create-for-rbac --name YOUR_SERVICE_PRINCIPAL_NAME
    ```

1. After the command runs, you’ll get an output similar to the following. Copy and save the output, you’ll need it to create a service connection in the next step. 

    ```json
    {
      "appId": "00001111-aaaa-2222-bbbb-3333cccc4444",
      "displayName": "MyServicePrincipal",
      "password": "***********************************",
      "tenant": "aaaabbbb-0000-cccc-1111-dddd2222eeee"
    }
    ```

## Create a service connection

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Project settings**, and then select **Service connections**.

1. Select **New service connection**, select **Azure Resource Manager**, and then select **Next**.

1. Select **Service principal (manual)**, and then select **Next**.

1. Under **Identity Type**, select **App registration or managed identity (manual)**.

1. Under **Credential**, select **Workload identity federation**.

1. Provide a name for your service connection, and then select **Next**.

1. Copy the **Issuer** and the **Subject identifier** values. You'll need them in the next step.

1. For **Environment**, Select **Azure Cloud** and for **Subscription scope** select **Subscription**.

1. Enter your Azure **Subscription ID** and **Subscription name**.

1. Under **Authentication**, paste your service principal's **Application (client) ID** and **Directory (tenant) ID**

1. In the **Security** section, check the **Grant access permission to all pipelines** box to allow all pipelines to use this service connection. If you skip this, you’ll need to manually grant access per pipeline.

1. Leave this page open, you’ll come back to complete it after you've (1) created the federated credential in Azure and (2) granted your service principal *Read* access at the subscription level.

    :::image type="content" border="false" source="media/service-principal-federated-credential-service-connection.png" alt-text="A screenshot displaying how to create an ARM service connection using App registration." lightbox="media/service-principal-federated-credential-service-connection.png":::

## Create a federated credential in Azure

1. Navigate to [Azure portal](https://portal.azure.com/), then use the search bar to find your service principal by entering its **ClientID**. Select the matching *Application*  from the results.

1. Under **Manage**, select **Certificates & secrets** > **Federated credentials**.

1. Select **Add credential**, then for **Federated credential scenario**, select **Other issuer**.

1. In the **Issuer** field, paste the *Issuer* value you copied from your service connection earlier.

1. In the **Subject identifier** field, paste the *Subject identifier* you copied earlier.

1. Enter a **Name** for your federated credential, and then select **Add** when you're done.

    :::image type="content" border="false" source="media/service-principal-federated-credential-in-azure.png" alt-text="A screenshot displaying how to create a federated credential for a service principal in Azure." lightbox="media/service-principal-federated-credential-in-azure.png":::

## Add role assignment to your subscription

Before you can verify the connection, you need to grant the service principal **Read** access at the subscription level:

1. Navigate to [Azure portal](https://portal.azure.com/)

1. Under **Azure services**, select **Subscriptions**, and then find and select your subscription.

1. Select **Access control (IAM)**, and then select **Add** > **Add role assignment**.

1. Under the **Role** tab, select **Reader**, and then select **Next**.

1. Select **User, group, or service principal**, and then select **Select members**. 

1. In the search bar, paste your service principal's *Object ID*, select it, then click **Select**.
 
1. Select **Review + assign**, review your settings, and then select **Review + assign** again to confirm.

1. Once the role assignment is added. go back to your service connection in Azure DevOps and select **Verify and Save** to save your service connection.

## Configure Key Vault access policies

1. Navigate to the [Azure portal](https://portal.azure.com/), find the key vault you created earlier, and then select **Access policies**.

1. Select **Create**, then under **Secret permissions** add both the **Get** and **List** permissions, and then select **Next**.

1. Under **Principal**, paste your service principal's *Object ID*, select it, and then select **Next**.

1. Select **Next** again, review your settings, and then select **Save** to apply the new policy.

---

## Query and use secrets in your pipeline

Using the [Azure Key Vault task](/azure/devops/pipelines/tasks/reference/azure-key-vault-v2), you can now query and fetch secrets from Azure Key Vault and use them in subsequent tasks in your pipeline. Note that secrets must be explicitly mapped to environment variables, as shown in the following example:

```YAML
pool:
  vmImage: 'ubuntu-latest'

steps:
- task: AzureKeyVault@1
  inputs:
    azureSubscription: 'SERVICE_CONNECTION_NAME'
    KeyVaultName: 'KEY_VAULT_NAME'
    SecretsFilter: '*'

- bash: |
    echo "Secret Found! $MY_MAPPED_ENV_VAR"        
  env:
    MY_MAPPED_ENV_VAR: $(SECRET_NAME)
```

The output from the last bash step should look like this:

```
Secret Found! ***
```

> [!NOTE]
> To query multiple secrets from your Azure Key Vault, use the `SecretsFilter` input and provide a comma-separated list of secret names, like: *'secret1, secret2'*.

## Related content

- [Protect secrets in Azure Pipelines](../security/secrets.md)

- [Access a private key vault from your pipeline](key-vault-access.md)

- [Manage security in Azure Pipelines](../policies/permissions.md)
