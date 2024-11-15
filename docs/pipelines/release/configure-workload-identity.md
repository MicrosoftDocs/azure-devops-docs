---
title: Set a Resource Manager workload identity service connection
ms.custom: devx-track-arm-template, arm2024
description: Learn how to manually set an Azure Resource Manager workload identity service connection in Azure Pipelines, one of the services in Azure DevOps.
ms.topic: conceptual
ms.author: jukullam
author: juliakm
ms.date: 10/16/2024
monikerRange: '>= azure-devops'
"recommendations": "true"
---

# Manually set an Azure Resource Manager workload identity service connection

> [!NOTE]
>We are rolling out the [new Azure service connection creation experience](../../../release-notes/2024/sprint-246-update.md#new-azure-service-connection-creation-experience-with-improved-managed-identity-support). Receiving it in your organization depends on various factors, and you may still see the older user experience.

When you [troubleshoot an Azure Resource Manager workload identity service connection](troubleshoot-workload-identity.md#i-dont-have-permissions-to-create-a-service-principal-in-the-microsoft-entra-tenant), you might need to manually configure the connection instead of using the automated tool that's available in Azure DevOps.

We recommend that you [try the automated approach](../library/connect-to-azure.md#create-an-azure-resource-manager-service-connection-that-uses-workload-identity-federation) before you begin a manual configuration.

There are two options for authentication: use a managed identity or use an app registration. The advantage of the managed identity option is that you can use it if you don't have permissions to create service principals or if you're using a different Microsoft Entra tenant than your Azure DevOps user.

## Set a workload identity service connection 

#### [Managed identity](#tab/managed-identity)

<a name="set-a-workload-identity-service-connection-to-use-managed-identity-authentication"></a>

To manually set up managed identity authentication for your Azure Pipelines, follow these steps to create a managed identity in the Azure portal, establish a service connection in Azure DevOps, add federated credentials, and grant the necessary permissions. You'll need to follow these steps in this order:

1. Create the managed identity in Azure portal. 
1. Create the service connection in Azure DevOps and save as a draft. 
1. Add a federated credential to your managed identity in Azure portal.
1. Grant permissions to the managed identity in Azure portal.
1. Save your service connection in Azure DevOps.

You can also use the REST API for this process.

### Prerequisites for managed identity authentication

- To create a user-assigned managed identity, your Azure account needs the [Managed Identity Contributor](/azure/role-based-access-control/built-in-roles/identity#managed-identity-contributor) or higher role assignment.
- To use a managed identity to access Azure resources in your pipeline, [assign the managed identity access to the resource](/entra/identity/managed-identities-azure-resources/how-to-assign-access-azure-resource).  


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

1. Select **Azure Resource Manager**.

1. Select identity type **App registration or Managed identity (manual)** the **Workload identity federation** credential.

    :::image type="content" source="media/workload-identity-manual-app-workload.png" alt-text="Screenshot that shows selecting the Workload Identity service connection for managed identity.":::

1. For **Service connection name**, enter a value such as `uamanagedidentity`. You'll use this value in your federated credential subject identifier.

1. Select **Next**.

1. In **Step 2: App registration details**:

    **Step 2: App registration details** contains the following parameters. You can enter or select the following parameters:

   | Parameter | Description |
   | --------- | ----------- |
   | **Issuer** | Required. DevOps automatically creates the issuer URL. |
   | **Subject identifier** | Required. DevOps automatically creates the subject identifier. |
   | **Environment** | Required. Choose a cloud environment to connect to. If you select **Azure Stack**, enter the environment URL, which is something like `https://management.local.azurestack.external`. |


    1. Select the **Scope Level**. Select **Subscription**, **Management Group**, or **Machine Learning Workspace**. [Management groups](/azure/azure-resource-manager/management-groups-overview) are containers that help you manage access, policy, and compliance across multiple subscriptions. A [Machine Learning Workspace](/azure/machine-learning/concept-workspace) is place to create machine learning artifacts.
    
        * For the **Subscription** scope, enter the following parameters:

            | Parameter | Description |
            | --------- | ----------- |
            | **Subscription Id** | Required. Enter the Azure subscription ID. |
            | **Subscription Name** | Required. Enter the Azure subscription name. |
        
        * For the **Management Group** scope, enter the following parameters:

            | Parameter | Description |
            | --------- | ----------- |
            | **Management Group Id** | Required. Enter the Azure management group ID. |
            | **Management Group Name** | Required. Enter the Azure management group name. |
        
        * For the **Machine Learning Workspace** scope, enter the following parameters:

            | Parameter | Description |
            | --------- | ----------- |
            | **Subscription Id** | Required. Enter the Azure subscription ID. |
            | **Subscription Name** | Required. Enter the Azure subscription name. |
            | **Resource Group** | Required. Select the resource group containing the workspace. |
            | **ML Workspace Name** | Required. Enter the name of the existing Azure Machine Learning workspace. |
            | **ML Workspace Location** | Required. Enter the location of the existing Azure Machine Learning workspace. |    
    
    1. In the **Authentication** section, enter or select the following parameters:
    
        | Parameter | Description |
        | --------- | ----------- |
        | **Application (client) ID** | Required. Enter the Client ID for your managed identity. |
        | **Directory (tenant) ID** | Required. Enter the Tenant ID from your managed identity. |
    
    
    1. In the **Security** section, select **Grant access permission to all pipelines** to allow all pipelines to use this service connection. If you don't select this option, you must manually grant access to each pipeline that uses this service connection.

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

#### [App registration](#tab/app-registration)

<a name="app-registration-workload-identity"></a>

This section guides you through setting up an app registration and federated credentials in the Azure portal, creating a service connection for service principal authentication in Azure DevOps, adding federated credentials to your app registration, and granting the necessary permissions. The app registration uses service principal authentication. You'll need to complete these steps in the following order:

1. Create the app registration with service principal authentication in Azure portal. 
1. Create the service connection in Azure DevOps and save as a draft. 
1. Add a federated credential to your app registration in Azure portal.
1. Grant permissions to the app registration in Azure portal.
1. Save your service connection in Azure DevOps.

You can also use the REST API for this process.


### Prerequisites for app registration authentication

- To create a service connection, your Azure account needs to be able to create app registrations. 
    - If [creating app registrations is disabled in your tenant](/entra/identity/role-based-access-control/delegate-app-roles#to-disable-the-default-ability-to-create-application-registrations-or-consent-to-applications), then you need to have the [Application Developer role](/entra/identity/role-based-access-control/permissions-reference#application-developer) to create application registrations. 


### Create an app registration and federated credentials in Azure portal

1. In the Azure portal, search for [app registrations](https://portal.azure.com/#view/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/~/RegisteredApps).

1. Select **New registration**.

    :::image type="content" source="approvals/media/new-app-registration.png" alt-text="Screenshot that shows a new app registration.":::

1. For **Name**, enter a name for your app registration, and then select **Who can use this application or access this API**. 

1. Select **Register**. 

1. When your new app registration loads, copy the values for **Application (client) ID** and **Directory (tenant) ID**  to use later.

    :::image type="content" source="approvals/media/app-registration-client-tenant.png" alt-text="Screenshot that shows the app registration client ID and tenant ID.":::


### Create a service connection for app registration authentication in Azure DevOps

1. In Azure DevOps, open your project and go to :::image type="icon" source="../../media/icons/gear-icon.png" border="false"::: > **Pipelines** > **Service connections**.

1. Select **New service connection**.

1. Select **Azure Resource Manager**.

1. Select identity type **App registration or Managed identity (manual)** the **Workload identity federation** credential.

    :::image type="content" source="media/workload-identity-manual-app-workload.png" alt-text="Screenshot that shows selecting the Workload Identity service connection.":::

1. For **Service connection name**, enter a value such as `uaappregistration`. You'll use this value in your federated credential subject identifier.

1. Select **Next**.

1. In **Step 2: App registration details**:

    **Step 2: App registration details** contains the following parameters. You can enter or select the following parameters:

   | Parameter | Description |
   | --------- | ----------- |
   | **Issuer** | Required. DevOps automatically creates the issuer URL. |
   | **Subject identifier** | Required. DevOps automatically creates the subject identifier. |
   | **Environment** | Required. Choose a cloud environment to connect to. If you select **Azure Stack**, enter the environment URL, which is something like `https://management.local.azurestack.external`. |


    1. Select the **Scope Level**. Select **Subscription**, **Management Group**, or **Machine Learning Workspace**. [Management groups](/azure/azure-resource-manager/management-groups-overview) are containers that help you manage access, policy, and compliance across multiple subscriptions. A [Machine Learning Workspace](/azure/machine-learning/concept-workspace) is place to create machine learning artifacts.
    
        * For the **Subscription** scope, enter the following parameters:

            | Parameter | Description |
            | --------- | ----------- |
            | **Subscription Id** | Required. Enter the Azure subscription ID. |
            | **Subscription Name** | Required. Enter the Azure subscription name. |
        
        * For the **Management Group** scope, enter the following parameters:

            | Parameter | Description |
            | --------- | ----------- |
            | **Management Group Id** | Required. Enter the Azure management group ID. |
            | **Management Group Name** | Required. Enter the Azure management group name. |
        
        * For the **Machine Learning Workspace** scope, enter the following parameters:

            | Parameter | Description |
            | --------- | ----------- |
            | **Subscription Id** | Required. Enter the Azure subscription ID. |
            | **Subscription Name** | Required. Enter the Azure subscription name. |
            | **Resource Group** | Required. Select the resource group containing the workspace. |
            | **ML Workspace Name** | Required. Enter the name of the existing Azure Machine Learning workspace. |
            | **ML Workspace Location** | Required. Enter the location of the existing Azure Machine Learning workspace. |    
    
    1. In the **Authentication** section, enter or select the following parameters:
    
        | Parameter | Description |
        | --------- | ----------- |
        | **Application (client) ID** | Required. Enter the Application (client) ID for your app registration. |
        | **Directory (tenant) ID** | Required. Enter the Directory (tenant) ID for your app registration. |
    
    
    1. In the **Security** section, select **Grant access permission to all pipelines** to allow all pipelines to use this service connection. If you don't select this option, you must manually grant access to each pipeline that uses this service connection.

1. In Azure DevOps, copy the generated values for **Issuer** and **Subject identifier**.

1. Select **Keep as draft** to save a draft credential. You can't complete setup until your managed identity has a federated credential in Azure portal. 


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

1. Select **Verify and save**. When this step successfully finishes, your Azure Resource Manager service connection is fully configured.

--- 

