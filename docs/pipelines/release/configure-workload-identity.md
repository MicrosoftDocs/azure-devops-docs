---
title: Set a Resource Manager workload identity service connection
ms.custom: devx-track-arm-template, arm2024
description: Learn how to manually set an Azure Resource Manager workload identity service connection in Azure Pipelines, one of the services in Azure DevOps.
ms.topic: conceptual
ms.author: jukullam
author: juliakm
ms.date: 08/28/2024
monikerRange: '>= azure-devops'
"recommendations": "true"
---

# Manually set an Azure Resource Manager workload identity service connection

When you [troubleshoot an Azure Resource Manager workload identity service connection](troubleshoot-workload-identity.md#i-dont-have-permissions-to-create-a-service-principal-in-the-micrososft-entra-tenant), you might need to manually configure the connection instead of using the automated tool that's available in Azure DevOps.

We recommend that you [try the automated approach](../library/connect-to-azure.md#create-an-azure-resource-manager-service-connection-that-uses-workload-identity-federation) before you begin a manual configuration.

There are two options for authentication: use a managed identity or use a service principal. The advantage of the managed identity option is that you can use it if you don't have permissions to create service principals or if you're using a different Microsoft Entra tenant than your Azure DevOps user.

## Set a workload identity service connection to use managed identity authentication

To manually set up managed identity authentication for your Azure DevOps pipelines, follow these steps to create a managed identity in the Azure portal, establish a service connection in Azure DevOps, add federated credentials, and grant the necessary permissions. You'll need to follow these steps in this order:

1. Create the managed identity in Azure portal. 
1. Create the service connection in Azure DevOps and save as a draft. 
1. Add a federated credential to your managed identity in Azure portal.
1. Grant permissions to the managed identity in Azure portal.
1. Save your service connection in Azure DevOps.

You can also use the REST API for this process.

### Create a managed identity in Azure portal

1. Sign in to the [Azure portal](https://portal.azure.com).

1. In the search box, enter **Managed Identities**.

1. Select **Create**.

1. In the **Create User Assigned Managed Identity** pane, enter or select values for the following items:

    - **Subscription**: Select the subscription in which to create the user-assigned managed identity.
    - **Resource group**: Select a resource group to create the user-assigned managed identity in, or select **Create new** to create a new resource group.
    - **Region**: Select a region to deploy the user-assigned managed identity (example: **East US**).
    - **Name**: Enter the name for your user-assigned managed identity (example: **UADEVOPS**).

1. Select **Review + create** to create a new managed identity. When your deployment is complete, select **Go to resource**. 

1. Copy the **Subscription**, **Subscription ID**, and **Client ID**  values for your managed identity to use later.

1. Within your managed identity in Azure portal, go to **Settings** > **Properties**.

1. Copy the **Tenant Id** value to use later.

### Create a service connection for managed identity authentication in Azure DevOps

1. In Azure DevOps, open your project and go to :::image type="icon" source="../../media/icons/gear-icon.png" border="false"::: > **Pipelines** > **Service connections**.

1. Select **New service connection**.

1. Select **Azure Resource Manager**, and then select **Next**.

1. Select **Workload Identity federation (manual)**, and then select **Next**.

    :::image type="content" source="approvals/media/workload-identity-service-connection-manual.png" alt-text="Screenshot that shows selecting the Workload Identity service connection.":::

1. For **Service connection name**, enter a value such as `uamanagedidentity`. You'll use this value in your federated credential subject identifier.

1. For **Subscription ID** and **Subscription Name**, enter the values for the subscription in your Azure portal account.

    :::image type="content" source="approvals/media/federated-set-subscription.png" alt-text="Screenshot that shows federated subscription credentials.":::

1. In the authentication section:

   1. For **Service Principal Id**, enter the value of **Client Id** from your managed identity.
   1. For **Tenant ID**, enter the value of **Tenant Id** from your managed identity.

      :::image type="content" source="approvals/media/federated-managed-values.png" alt-text="Screenshot that shows Azure portal managed identity values.":::

1. In Azure DevOps, copy the generated values for **Issuer** and **Subject identifier**.

    :::image type="content" source="approvals/media/federated-credentials-devops.png" alt-text="Screenshot that shows DevOps credentials for federated authentication.":::

1. Select **Keep as draft** to save a draft credential. You can't complete setup until your managed identity has a federated credential in Azure portal. 


### Add a federated credential in Azure portal

1. In a new browser window, within your managed identity in Azure portal, go to **Settings** > **Federated credentials**.

1. Select **Add credentials**.

1. Select the **Other issuer** scenario.

1. Paste the values for **Issuer** and **Subject identifier** that you copied from your Azure DevOps project into your federated credentials in the Azure portal.

    :::image type="content" source="approvals/media/copy-federated-credential.png" alt-text="Screenshot that shows a comparison of federated credentials in Azure DevOps and the Azure portal.":::

1. Enter the **Name** of your federated credential.

1. Select **Add**.

### Grant permissions to the managed identity in Azure portal

1. In Azure portal, go to the Azure resource that you want to grant permissions for (for example, a resource group).

1. Select **Access control (IAM)**.

    :::image type="content" source="approvals/media/access-control-resource-group.png" alt-text="Screenshot that shows selecting Access control in the resource menu.":::

1. Select **Add role assignment**. Assign the required role to your managed identity (for example, Contributor).

1. Select **Review and assign**.

### Save your Azure DevOps service connection 

1. In Azure DevOps, return to your draft service connection. 

1. Select **Finish setup**. 

1. Select **Verify and save**. Once this step successfully completes, your managed identity is fully configured. 

## Set a workload identity service connection to use service principal authentication

This section guides you through setting up an app registration and federated credentials in the Azure portal, creating a service connection for service principal authentication in Azure DevOps, adding federated credentials to your app registration, and granting the necessary permissions. The app registration uses service principal authentication. You'll need to complete these steps in the following order:

1. Create the app registration with service principal authentication in Azure portal. 
1. Create the service connection in Azure DevOps and save as a draft. 
1. Add a federated credential to your app registration in Azure portal.
1. Grant permissions to the app registration in Azure portal.
1. Save your service connection in Azure DevOps.

You can also use the REST API for this process.

### Create an app registration and federated credentials in Azure portal

1. In the Azure portal, search for [app registrations](https://portal.azure.com/#view/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/~/RegisteredApps).

1. Select **New registration**.

    :::image type="content" source="approvals/media/new-app-registration.png" alt-text="Screenshot that shows a new app registration.":::

1. For **Name**, enter a name for your app registration, and then select **Who can use this application or access this API**. 

1. Select **Register**. 

1. When your new app registration loads, copy the values for **Application (client) ID** and **Directory (tenant) ID**  to use later.

    :::image type="content" source="approvals/media/app-registration-client-tenant.png" alt-text="Screenshot that shows the app registration client ID and tenant ID.":::


### Create a service connection for service principal authentication in Azure DevOps

1. Open a new browser window. 

1. In Azure DevOps, open your project and go to :::image type="icon" source="../../media/icons/gear-icon.png" border="false"::: > **Pipelines** > **Service connections**.

1. Select **New service connection**.

1. Select **Azure Resource Manager**, and then select **Next**.

1. Select **Workload Identity federation (manual)**, and then select **Next**.

    :::image type="content" source="approvals/media/workload-identity-service-connection-manual.png" alt-text="Screenshot that shows selecting the workload identity service connection.":::

1. For **Service connection name**, enter a value such as `uaappregistration`. You'll use this value in your federated credential subject identifier.


1. For **Subscription ID** and **Subscription Name**, enter the values for the subscription in your Azure portal account.

    :::image type="content" source="approvals/media/federated-set-subscription.png" alt-text="Screenshot that shows federated subscription credentials.":::

1. In the authentication section:

    1. For **Service Principal Id**, enter the value of **Application (client) ID** from your app registration.

    1. For **Tenant Id**, enter the value of **Directory (tenant) ID** from your app registration.

1. Copy the generated values for **Issuer** and **Subject identifier**.

    :::image type="content" source="approvals/media/federated-credentials-devops.png" alt-text="Screenshot that shows DevOps credentials for federated authentication.":::

1. Select **Keep as draft** to save a draft credential. You can't complete setup until your app registration has a federated credential in Azure portal. 


### Add a federated credential to your app registration in Azure portal

1. In Azure portal, open your app registration and go to **Manage** > **Certificates & secrets**.

1. Select **Federated credentials**.

    :::image type="content" source="approvals/media/federated-credentials-choice.png" alt-text="Screenshot that shows the federated credentials tab.":::

1. Select **Add credentials**.

1. Select the **Other issuer** scenario.

    :::image type="content" source="approvals/media/federated-credential-scenario.png" alt-text="Screenshot that shows selecting a federated credentials scenario.":::

1. Paste the values for **Issuer** and **Subject identifier** that you copied from your Azure DevOps project into your federated credentials in the Azure portal.

    :::image type="content" source="approvals/media/copy-federated-credential.png" alt-text="Screenshot comparison of federated credentials in Azure DevOps and the Azure portal.":::

1. Select **Save**.

### Grant permissions to the app registration in Azure portal

1. In the Azure portal, go to the Azure resource that you want to grant permissions for (for example, a resource group).

1. Select **Access control (IAM)**.

    :::image type="content" source="approvals/media/access-control-resource-group.png" alt-text="Screenshot that shows selecting Access control in the resource menu.":::

1. Select **Add role assignment**. Assign the required role to the app registration (for example, Contributor).

1. Select **Review and assign**.

###  Save your app registration Azure DevOps service connection

1. In Azure DevOps, return to your draft service connection. 

1. Select **Finish setup**. 

1. Select **Verify and save**. Once this step successfully completes, your azure resource manager service connection is fully configured.