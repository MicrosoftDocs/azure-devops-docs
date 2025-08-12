---
title: Azure Resource Manager service connection special cases
description: Connect Azure Pipelines to Azure using an Azure Resource Manager service connection with either an agent-assigned managed identity or a publish profile.
ms.topic: conceptual
ms.author: jukullam
author: juliakm
ms.date: 10/18/2024
ai-usage: ai-assisted 
monikerRange: '<= azure-devops'
ms.custom: sfi-image-nochange
---

# Azure Resource Manager service connection special cases

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

While the recommended option for Azure Resource Manager service connections is to [use workload identity federation with an app registration or managed identity](connect-to-azure.md), there are times when you might need to use an agent-assigned managed identity or a publish profile instead. In this article, you'll learn how to create an Azure Resource Manager service connection that uses an app registration with a secret, one that connects to a self-hosted agent on an Azure virtual machine, and a service connection that uses a publish profile to connect to an Azure App Service app. 

You can also use Azure Resource Manager to connect to Azure Government Cloud and Azure Stack. 

## Create an app registration with a secret (automatic)

With this selection, Azure DevOps automatically queries for the subscription, management group, or Machine Learning workspace that you want to connect to and creates a secret for authentication. 

> [!WARNING]
> Using a secret requires manual rotation and management and is not recommended. Workload identity federation is the preferred credential type.

You can use this approach if all the following items are true for your scenario:

* You're signed in as the owner of the Azure Pipelines organization and the Azure subscription.
* You don't need to further limit permissions for Azure resources that users access through the service connection.
* You're not connecting to the [Azure Stack](azure-resource-manager-alternate-approaches.md#connect-to-azure-stack) or the [Azure US Government](azure-resource-manager-alternate-approaches.md#connect-to-an-azure-government-cloud) environments.
* You're not connecting from Azure DevOps Server 2019 or earlier versions of Team Foundation Server.


1. In the Azure DevOps project, go to **Project settings** > **Service connections**.

   For more information, see [Open project settings](../../project/navigation/go-to-service-page.md#open-project-settings).

1. Select **New service connection**,  then select **Azure Resource Manager** and **Next**.

   :::image type="content" source="media/new-service-connection-azure-resource-manager.png" alt-text="Screenshot that shows choosing Azure Resource Manager selection.":::

1. Select **App registration (automatic)** with the credential **Secret**.

   :::image type="content" source="media/select-app-registration-secret-service.png" alt-text="Screenshot of Workload Identity federation app registration (automatic) authentication method selection.":::

1. Select a **Scope level**. Select **Subscription**, **Management Group**, or **Machine Learning Workspace**. [Management groups](/azure/azure-resource-manager/management-groups-overview) are containers that help you manage access, policy, and compliance across multiple subscriptions. A [Machine Learning Workspace](/azure/machine-learning/concept-workspace) is place to create machine learning artifacts.

    * For the **Subscription** scope, enter the following parameters:
    
        | Parameter | Description |
        | --------- | ----------- |
        | **Subscription** | Required. Select the Azure subscription. |
        | **Resource group** | Required. Select the Azure resource group. |
    
    * For the **Management Group** scope, select the **Azure management group**.
    
    * For the **Machine Learning Workspace** scope, enter the following parameters:

        | Parameter | Description |
        | --------- | ----------- |
        | **Subscription** | Required. Select the Azure subscription. |
        | **Resource Group** | Required. Select the resource group containing the workspace. |
        | **Machine Learning Workspace** | Required. Select the Azure Machine Learning workspace. |
|

1. Enter a **Service connection name**.
1. Optionally, enter a description for the service connection.
1. Selecting **Grant access permission to all pipelines** lets all pipelines use this connection. This option isn't recommended. Instead, [authorize each pipeline individually to use the service connection](service-endpoints.md#authorize-pipelines).
1. Select **Save**.

<a name="use-msi"></a>

## Create an Azure Resource Manager service connection to a VM that uses a managed identity

> [!NOTE]
>
> To use a managed identity to authenticate, you must use a self-hosted agent on an Azure virtual machine (VM).

You can configure self-hosted agents on Azure VMs to use an [Azure managed identity](/azure/active-directory/managed-service-identity/overview) in Microsoft Entra ID. In this scenario, you use the agent-assigned managed identity to grant the agents access to any Azure resource that supports Microsoft Entra ID, such as an instance of Azure Key Vault.

1. In the Azure DevOps project, go to **Project settings** > **Service connections**.

   For more information, see [Open project settings](../../project/navigation/go-to-service-page.md#open-project-settings).

1. Select **New service connection**, then select **Azure Resource Manager**.

   :::image type="content" source="media/new-service-endpoint-2.png" alt-text="Screenshot that shows choosing a service connection type.":::

1. Select **Managed identity (agent assigned)** for the identity type.

1. For **Environment**, select the environment name (**Azure Cloud**, **Azure Stack**, or Government cloud options).

1. Select the **Scope level**. Select **Subscription**, **Management Group**, or **Machine Learning Workspace**. [Management groups](/azure/azure-resource-manager/management-groups-overview) are containers that help you manage access, policy, and compliance across multiple subscriptions. A [Machine Learning Workspace](/azure/machine-learning/concept-workspace) is place to create machine learning artifacts.

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
    
1. Enter the **Tenant Id**.
1. Enter the **Service connection name**.
1. Optionally, enter a description for the service connection.
1. Selecting **Grant access permission to all pipelines** lets all pipelines use this connection. This option isn't recommended. Instead, [authorize each pipeline individually to use the service connection](service-endpoints.md#authorize-pipelines).
1. Select **Save**.

1. After the new service connection is created:

   * If you use the service connection in the UI, select the connection name that you assigned in the **Azure subscription** setting of your pipeline.
   * If you use the service connection in a YAML file, copy the connection name into your code as the value for `azureSubscription`.

1. Ensure that the VM (agent) has the appropriate permissions.

   For example, if your code needs to call Azure Resource Manager, assign the VM the appropriate role by using role-based access control (RBAC) in Microsoft Entra ID.

   For more information, see [How can I use managed identities for Azure resources?](/azure/active-directory/managed-identities-azure-resources/overview#how-can-i-use-managed-identities-for-azure-resources) and
   [Use role-based access control to manage access to your Azure subscription resources](/azure/role-based-access-control/role-assignments-portal).

For more information about the process, see [Troubleshoot Azure Resource Manager service connections](../release/azure-rm-endpoint.md).

<a name="use-publish-profile"></a>

## Create an Azure Resource Manager service connection using a publish profile

You can create a service connection by using a publish profile. You can use a publish profile to create a service connection to an Azure App Service.

1. In the Azure DevOps project, go to **Project settings** > **Service connections**.

   For more information, see [Open project settings](../../project/navigation/go-to-service-page.md#open-project-settings).

1. Select **New service connection**, then select **Azure Resource Manager** and **Next**.

   :::image type="content" source="media/new-service-endpoint-2.png" alt-text="Screenshot of Azure Resource Manager selection.":::

1. Select **Publish profile** for the identity type.

1. Enter the following parameters:

   | Parameter | Description |
   | --------- | ----------- |
   | **Subscription** | Required. Select an existing Azure subscription. If no Azure subscriptions or instances appear, see [Troubleshoot Azure Resource Manager service connections](../release/azure-rm-endpoint.md). |
   | **WebApp** | Required. Enter the name of the Azure App Service app. |
   | **Service connection Name** | Required. The name that you use to refer to this service connection in task properties. Not the name of your Azure subscription. |
   | **Description** | Optional. The description of the service connection.|

1. Selecting **Grant access permission to all pipelines** lets all pipelines use this connection. This option isn't recommended. Instead, [authorize each pipeline individually to use the service connection](service-endpoints.md#authorize-pipelines).
1. Select **Save**.

After the new service connection is created:

   * If you use the service connection in the UI, select the connection name that you assigned in the **Azure subscription** setting of your pipeline.
   * If you use the service connection in a YAML file, copy the connection name and paste it into your code as the value for `azureSubscription`.

<a name="connect-govt"></a>

## Connect to an Azure Government Cloud

For information about connecting to an Azure Government Cloud, see [Connect from Azure Pipelines (Azure Government Cloud)](/azure/azure-government/documentation-government-get-started-connect-with-vsts).

<a name="connect-stack"></a>

## Connect to Azure Stack

For information about connecting to Azure Stack, see these articles:

* [Connect to Azure Stack](/azure/azure-stack/azure-stack-connect-azure-stack)
* [Connect Azure Stack to Azure by using a VPN](/azure/azure-stack/azure-stack-connect-vpn)
* [Connect Azure Stack to Azure by using Azure ExpressRoute](/azure/azure-stack/azure-stack-connect-expressroute)


For more information, see [Troubleshoot Azure Resource Manager service connections](../release/azure-rm-endpoint.md).


[!INCLUDE [rm-help-support-shared](../includes/rm-help-support-shared.md)]
