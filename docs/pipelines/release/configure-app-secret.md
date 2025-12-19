---
title: Manually create an Azure Resource Manager service connection with a secret
description: Learn how to manually set an Azure Resource Manager service connection with a secret in Azure Pipelines, one of the services in Azure DevOps.
ms.topic: concept-article
ms.author: jukullam
author: juliakm
ms.date: 11/06/2025
monikerRange: '>= azure-devops'
ms.custom:
"recommendations": "true"
---

# Manually set an Azure Resource Manager service connection with a secret

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

> [!WARNING]
> Using a secret that requires manual rotation and management and is not recommended. Workload identity federation is the preferred credential type. If you don't need to use a secret because of organizational limitations, use [workload identity federation](/azure/active-directory/workload-identities/workload-identity-federation) with either an app registration or managed identity.

This article guides you through manually creating an Azure Resource Manager (ARM) service connection for service principal authentication with a secret in Azure DevOps. Use this approach when you can't use Microsoft Entra ID due to organizational limitations. For example, use a secret when workload identity federation isn't supported for your Microsoft Entra ID tenant or when you have multitenant app registrations.

For other scenarios, use [workload identity federation](/azure/active-directory/workload-identities/workload-identity-federation) with either an app registration or managed identity. Workload identity federation eliminates the need for secrets and secret management. To learn more, see [Connect to Azure with an ARM service connection](../library/connect-to-azure.md).  

## Prerequisites for app registration authentication

- To create a service connection, your Azure account needs permission to create app registrations. 
    - If [creating app registrations is disabled in your tenant](/entra/identity/role-based-access-control/delegate-app-roles#to-disable-the-default-ability-to-create-application-registrations-or-consent-to-applications), then you need to have the [Application Developer role](/entra/identity/role-based-access-control/permissions-reference#application-developer) to create application registrations. 


## Create an app registration in Azure portal

1. In the Azure portal, search for [app registrations](https://portal.azure.com/#view/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/~/RegisteredApps).

1. Select **New registration**.

    :::image type="content" source="approvals/media/new-app-registration.png" alt-text="Screenshot that shows a new app registration.":::

1. For **Name**, enter a name for your app registration, then select **Who can use this application or access this API**. 

1. Select **Register**. 

1. When your new app registration loads, copy the values for **Application (client) ID** and **Directory (tenant) ID**  to use later.

1. Within your app registration, select **Certificates & secrets**.

1. Select **Client secrets**, then select **New client secret**. Provide a description of the secret and a duration. After you save the client secret, the value of the client secret is displayed. This value is only displayed once, so copy and store it. You'll use the secret value in your ARM connection.

1. Select **Add**.

## Grant permissions to the app registration in Azure portal

1. In the Azure portal, go to the Azure subscription, management group, or machine learning workspace that you want to grant permissions for.

1. Select **Access control (IAM)**.

1. Select **Add role assignment**. Assign the Reader role to the app registration.

1. Select **Review and assign**.
 
## Create a service connection for app registration authentication in Azure DevOps

1. In Azure DevOps, open your project and go to :::image type="icon" source="../../media/icons/gear-icon.png" border="false"::: > **Pipelines** > **Service connections**.

1. Select **New service connection**.

1. Select **Azure Resource Manager**.

1. Select identity type **App registration or Managed identity (manual)** and the **Secret** credential.

1. Enter or select the following parameters for subscription:

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

1. For **Credential**, select **Service principal key**. Enter the secret value in the **Client secret** field.    
    
1. In the **Security** section, selecting **Grant access permission to all pipelines** lets all pipelines use this connection. This option isn't recommended. Instead, [authorize each pipeline individually to use the service connection](../library/service-endpoints.md#authorize-pipelines).
 
1. Select **Verify and save**. When this step successfully finishes, your Azure Resource Manager service connection is fully configured.
