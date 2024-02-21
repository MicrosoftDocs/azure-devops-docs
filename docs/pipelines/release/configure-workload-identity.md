---
title: Set a Resource Manager workload identity service connection
ms.custom: devx-track-arm-template, arm2024
description: Learn how to manually set an Azure Resource Manager workload identity service connection in Azure Pipelines.
ms.topic: conceptual
ms.author: jukullam
author: juliakm
ms.date: 09/06/2023
monikerRange: '>= azure-devops'
"recommendations": "true"
---

# Manually set an Azure Resource Manager workload identity service connection

When you [troubleshoot an Azure Resource Manager workload identity service connection](troubleshoot-workload-identity.md#troubleshoot-azure-resource-manager-workload-identity-service-connections), you might need to manually configure the connection instead of using the automated tool. You should [try the automated approach first](../library/connect-to-azure.md#create-an-azure-resource-manager-service-connection-using-workload-identity-federation) before starting a manual configuration.

There are two options for authentication: managed identity and using a service principal. The advantage of the managed identity option is that you can use it when you don't have permission to create service principals or you're using a different Azure Microsoft Entra tenant than your Azure DevOps user.

## Workload identity with managed identity

You might need to manually create a managed identity with federated credentials and grant appropriate permissions. You can also use the REST API for this process.

### Create a managed identity

1. Sign in to the [Azure portal](https://portal.azure.com).

1. In the search box, enter **Managed Identities**.

1. Select **Create**, and enter values in the following boxes in the **Create User Assigned Managed Identity** pane:

    - **Subscription**: Choose the subscription to create the user-assigned managed identity under.
    - **Resource group**: Choose a resource group to create the user-assigned managed identity in, or select **Create new** to create a new resource group.
    - **Region**: Choose a region to deploy the user-assigned managed identity, for example, **East US**.
    - **Name**: Enter the name for your user-assigned managed identity, for example, UADEVOPS.

1. Copy the **Subscription ID** and  **Client ID**  for your managed identity. You'll use these values later.

1. Go to **Settings** > **Properties**.

1. Copy the **Tenant Id** value to use later.

1. Go to **Settings** > **Federated credentials**.

1. Select **Add credentials**.

1. Select the **Other issuer** scenario.

1. Enter values for **Issuer** and **Subject identifier**. You'll replace these values later.

    |Field  |Description  |
    |---------|---------|
    |Issuer     |  Enter `https://app.vstoken.visualstudio.com/<unique-identifier>`.      |
    |Subject identifier     |   Specify `sc://<Azure DevOps organization>/<Project name>/<Service Connection name>`. You don't need to have created the service connection.      |

1. Select **Save**.

1. Keep this window open. You'll return and update your app registration federated credential later.

### Grant permissions to the managed identity

1. In the Azure portal, go to the Azure resource that you want to target (example: resource group).

1. Select **Access control (IAM)**.

    :::image type="content" source="approvals/media/access-control-resource-group.png" alt-text="Screenshot that shows Access control selection. ":::

1. Select **Add role assignment**. Assign the desired role to your managed identity (example: Contributor).

1. Select **Review and assign**.

### Create service connection

1. In Azure DevOps, open your project and go to :::image type="icon" source="../../media/icons/gear-icon.png" border="false"::: > **Pipelines** > **Service connections**.
1. Select **New service connection**.
1. Select **Azure Resource Manager**.

1. Select **Workload Identity federation (manual)**.

    :::image type="content" source="approvals/media/workload-identity-service-connection-manual.png" alt-text="Screenshot that shows workload identity service connection selection. ":::

1. Enter the **Service connection name**. The name should match the name you used in the **Subject identifier** field when creating your federated credential.

1. Set the **Subscription ID** to the subscription ID and the **Subscription Name** to the subscription name for your Azure portal account.

    :::image type="content" source="approvals/media/federated-set-subscription.png" alt-text="Screenshot that shows federated subscription credentials. ":::

1. In the authentication section, set the **Service Principal Id** to the **Client Id** value of your managed identity, and set the **Tenant ID** to the **Tenant Id** value of your managed identity.

    :::image type="content" source="approvals/media/federated-managed-values.png" alt-text="Screenshot that shows Azure portal managed identity values. ":::

1. In Azure DevOps, copy the generated values for **Issuer** and **Subject identifier**.

    :::image type="content" source="approvals/media/federated-credentials-devops.png" alt-text="Screenshot that shows DevOps credentials for federated authentication.":::

1. In the Azure portal, return to your app registration federated credential.

1. Enter the values for **Issuer** and **Subject identifier** from your Azure DevOps project and enter those values in the Azure portal for your federated credential.

    :::image type="content" source="approvals/media/copy-federated-credential.png" alt-text="Screenshot that shows a comparison of federated credential in DevOps and the Azure portal. ":::

1. In the Azure portal, select **Update** to save the updated credential.

1. In Azure DevOps, select **Verify and save**.

## Workload identity with a service principal

You might need to manually create a service principal with federated credentials and grant appropriate permissions. You can also use the REST API for this process.

### Create an app registration and a federated credential

1. In the Azure portal, go to [app registrations](https://portal.azure.com/#view/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/~/RegisteredApps).
1. Select **New registration**.

    :::image type="content" source="approvals/media/new-app-registration.png" alt-text="Screenshot that shows a new app registration.":::

1. In **Name**, enter a name for your app registration, and then select **Who can use this application or access this API**.
1. Copy the **Application (client) ID** and **Directory (tenant) ID** for your app registration. You'll use those values later.

    :::image type="content" source="approvals/media/app-registration-client-tenant.png" alt-text="Screenshot that shows app registration client and tenant IDs. ":::

1. Go to **Manage** > **Certificates & secrets**.
1. Select **Federated credentials**.

    :::image type="content" source="approvals/media/federated-credentials-choice.png" alt-text="Screenshot that shows federated credentials tab option. ":::

1. Select **Add credentials**.
1. Select the **Other issuer** scenario.

    :::image type="content" source="approvals/media/federated-credential-scenario.png" alt-text="Screenshot that shows selecting a federated credential scenario.":::

1. Enter values for **Issuer** and **Subject identifier**.

    |Field  |Description  |
    |---------|---------|
    |Issuer     |  Enter `https://app.vstoken.visualstudio.com/<unique-identifier>`.      |
    |Subject identifier     |   Specify `sc://<Azure DevOps organization>/<Project name>/<Service Connection name>`. You don't need to have already created the service connection.      |

1. Select **Save**.

1. Keep this window open. You'll return and update your app registration federated credential later.

### Grant permissions to the app registration

1. In the Azure portal, go to the Azure resource that you want to target (example: resource group).

1. Select **Access control (IAM)**.

    :::image type="content" source="approvals/media/access-control-resource-group.png" alt-text="Screenshot that shows Access control selection. ":::

1. Select **Add role assignment**. Assign the desired role to your app registration (example: Contributor).

1. Select **Review and assign**.

### Create a service connection

1. In Azure DevOps, open your project and go to :::image type="icon" source="../../media/icons/gear-icon.png" border="false"::: > **Pipelines** > **Service connections**.
1. Select **New service connection**.
1. Select **Azure Resource Manager**.
1. Select **Workload Identity federation (manual)**.

    :::image type="content" source="approvals/media/workload-identity-service-connection-manual.png" alt-text="Screenshot that shows workload identity service connection selection. ":::

1. Enter the **Service connection name**. The name should match the name you used in the **Subject identifier** field when creating your federated credential.

1. Set **Subscription Id** and **Subscription Name** to the subscription ID and the subscription name of your Azure portal account.

    :::image type="content" source="approvals/media/federated-set-subscription.png" alt-text="Screenshot that shows federated subscription credentials. ":::

1. In the authentication section, set the **Service Principal Id** to the **Application (client) ID** value of your app registration.

1. In the authentication section, set the **Tenant Id** to the **Directory (tenant) ID** value of your app registration.

1. Copy the generated values for **Issuer** and **Subject identifier**.

    :::image type="content" source="approvals/media/federated-credentials-devops.png" alt-text="Screenshot that shows DevOps credentials for federated authentication.":::

1. In the Azure portal, return to your app registration federated credential.

1. Copy the values for **Issuer** and **Subject identifier** from your Azure DevOps project and enter those values in the Azure portal for your federated credential.

    :::image type="content" source="approvals/media/copy-federated-credential.png" alt-text="Screenshot comparison of federated credential in DevOps and the Azure portal. ":::

1. In the Azure portal, select **Update** to save the updated credential.

1. In Azure DevOps, select **Verify and save**.
