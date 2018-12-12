---
title: Connect to Microsoft Azure
ms.custom: seodec18
description: Use an ARM service connection to connect Azure Pipelines or TFS to Microsoft Azure
ms.assetid: 4CC6002E-9EF6-448C-AD48-5C618C103950
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
ms.manager: douge
ms.author: ahomer
author: alexhomer1
ms.date: 08/24/2018
monikerRange: '>= tfs-2017'
---

# Create an Azure service connection

**Azure Pipelines | TFS 2018 | TFS 2017**

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../_shared/concept-rename-note.md)]
::: moniker-end

This topic explains how to create an Azure Resource Manager service connection for connecting
to Microsoft Azure resources. It starts by showing the simple case where you select the 
subscription, and optionally the Azure Resource Group, to which you want to connect. Use this
approach:

* If you are connecting from Azure Pipelines, and not from TFS.
* If you are the owner of both the Azure and the Azure DevOps subscriptions you are connecting from, and both accept the same credentials as you are currently signed into Azure Pipelines with.
* You do not need to further limit the permissions for Azure resources accessed through the service connection.
* You are not connecting to [Azure Stack](#connect-stack) or an [Azure Government Cloud](#connect-govt).

If you have problems using this simple approach (such as no subscriptions being shown in the drop-down list),
or if you want to further limit users' permissions, you can do so by using a service principal as shown [here](#use-spn)
or to a VM using a managed service identity as shown [here](#use-msi).  

## Create an Azure Resource Manager service connection using automated security  

1. In Azure DevOps, open the **Service connections** page from the [project settings page](../../project/navigation/go-to-service-page.md#open-project-settings).
   In TFS, open the **Services** page from the "settings" icon in the top menu bar.

1. Choose **+ New service connection** and select **Azure Resource Manager**.

   ![Choosing a service connection type](_img/new-service-endpoint-2.png)

1. Fill in the following parameters for the service connection.

   | Parameter | Description |
   | --------- | ----------- |
   | Connection Name | Required. The name you will use to refer to this service connection in task properties. This is not the name of your Azure subscription. |
   | Scope level | Select Subscription or Management Group. [Management groups](/azure/azure-resource-manager/management-groups-overview) are containers that help you manage access, policy, and compliance across multiple subscriptions. |
   | Subscription | If you selected Subscription for the scope, select an existing Azure subscription. If you don't see any Azure subscriptions or instances, see [Troubleshoot Azure Resource Manager service connections](../release/azure-rm-endpoint.md). |
   | Management Group | If you selected Management Group for the scope, select an existing Azure management group. See [Create management groups](/azure/azure-resource-manager/management-groups-create). |
   | Resource Group | Leave empty to allow users to access all resources defined within the subscription, or select a resource group to which you want to restrict the users' access (users will be able to access only the resources defined within that group). |

1. After the new service connection is created:

   * If you are using it in the UI, select the connection name you assigned in the **Azure subscription** setting of your pipeline.
   * If you are using it in YAML, copy the connection name into your code as the **azureSubscription** value.

See also: [Troubleshoot Azure Resource Manager service connection](../release/azure-rm-endpoint.md).

<a name="use-spn"></a>

## Create an Azure Resource Manager service connection with an existing service principal

1. If you want to use a pre-defined set of access permissions, and you don't already have a suitable service principal defined, follow one of these tutorials to create a new service principal:

   * [Use the portal to create an Azure Active Directory application and service principal that can access resources](/azure/azure-resource-manager/resource-group-create-service-principal-portal)
   * [How to create and test Azure Service Principal using Azure CLI](https://blogs.msdn.microsoft.com/arsen/2016/05/11/how-to-create-and-test-azure-service-principal-using-azure-cli/)

1. In Azure DevOps, open the **Service connections** page from the [project settings page](../../project/navigation/go-to-service-page.md#open-project-settings).
   In TFS, open the **Services** page from the "settings" icon in the top menu bar.

1. Choose **+ New service connection** and select **Azure Resource Manager**.

   ![Choosing a service connection type](_img/new-service-endpoint-2.png)

1. Switch from the simplified version of the dialog to the full version using the link in the dialog.

   ![Opening the full version of the service  dialog](_img/rm-endpoint-link.png)

1. Enter a user-friendly **Connection name** to use when referring to this service connection.

1. Select the **Environment** name (such as Azure Cloud, Azure Stack, or an Azure Government Cloud).

1. If you _do not_ select **Azure Cloud**, enter the Environment URL. For Azure Stack, this will be something like `https://management.local.azurestack.external`

1. Select the **Scope level** you require: 
   
   * If you choose **Subscription**, select an existing Azure subscription. If you don't see any Azure subscriptions or instances, see [Troubleshoot Azure Resource Manager service connections](../release/azure-rm-endpoint.md). |
   * If you choose **Management Group**, select an existing Azure management group. See [Create management groups](/azure/azure-resource-manager/management-groups-create). |

1. Download and run [this PowerShell script](https://github.com/Microsoft/vsts-rm-extensions/blob/master/TaskModules/powershell/Azure/SPNCreation.ps1) in an Azure PowerShell window.
   When prompted, enter your subscription name, password, role (optional), and the type of cloud such as Azure Cloud (the default), Azure Stack, or an Azure Government Cloud.

1. Copy these fields from the output of the PowerShell script into the Azure subscription dialog textboxes:

   * Subscription ID
   * Subscription name
   * Service principal ID
   * Either the service principal client key or, if you have selected **Certificate**, enter the contents of both the certificate and private key sections of the *.pem file.
   * Tenant ID<p/>

1. Choose **Verify connection** to validate the settings you entered.

1. After the new service connection is created:

   * If you are using it in the UI, select the connection name you assigned in the **Azure subscription** setting of your pipeline.
   * If you are using it in YAML, copy the connection name into your code as the **azureSubscription** value.

1. If required, modify the service principal to expose the appropriate permissions. For more details, see 
   [Use Role-Based Access Control to manage access to your Azure subscription resources](/azure/role-based-access-control/role-assignments-portal).
   [This blog post](http://blogs.msdn.com/b/visualstudioalm/archive/2015/10/04/automating-azure-resource-group-deployment-using-a-service-principal-in-visual-studio-online-build-release-management.aspx)
   also contains more information about using service principal authentication.

See also: [Troubleshoot Azure Resource Manager service connections](../release/azure-rm-endpoint.md).

<a name="use-msi"></a>

## Create an Azure Resource Manager service connection to a VM with a managed service identity

You can configure Azure Virtual Machines (VM)-based agents with an
[Azure Managed Service Identity](https://docs.microsoft.com/en-us/azure/active-directory/managed-service-identity/overview)
in Azure Active Directory (Azure AD). This lets you use its Service Principal
information to grant the VM access to any Azure resource that supports Azure AD,
such as Key Vault, instead of persisting credentials in Azure DevOps for the connection.

1. In Azure DevOps, open the **Service connections** page from the [project settings page](../../project/navigation/go-to-service-page.md#open-project-settings).
   In TFS, open the **Services** page from the "settings" icon in the top menu bar.

1. Choose **+ New service connection** and select **Azure Resource Manager**.

   ![Choosing a service connection type](_img/new-service-endpoint-2.png)

1. Select the **Managed Identity Authentication** option.

   ![Opening the managed service identity settings](_img/rm-endpoint-msi.png)

1. Enter a user-friendly **Connection name** to use when referring to this service connection.

1. Select the **Environment** name (such as Azure Cloud, Azure Stack, or an Azure Government Cloud).

1. Obtain the service principal information for your VM. You can do this by using
   the [Azure Portal](https://docs.microsoft.com/en-gb/azure/active-directory/managed-identities-azure-resources/how-to-view-managed-identity-service-principal-portal),
   a [PowerShell script](https://docs.microsoft.com/en-gb/azure/active-directory/managed-identities-azure-resources/how-to-view-managed-identity-service-principal-powershell),
   or the [Azure CLI](https://docs.microsoft.com/en-gb/azure/active-directory/managed-identities-azure-resources/how-to-view-managed-identity-service-principal-cli).

1. Enter the values for your service principal into these fields of the connection dialog:

   * Subscription ID
   * Subscription name
   * Tenant ID<p/>

1. After the new service connection is created:

   * If you are using it in the UI, select the connection name you assigned in the **Azure subscription** setting of your pipeline.
   * If you are using it in YAML, copy the connection name into your code as the **azureSubscription** value.

1. If required, modify the service principal to expose the appropriate permissions.
   For example, if your code needs to call Azure Resource Manager, assign the VM's service principal the appropriate role using Role-Based Access Control (RBAC) in Azure AD.
   For more details, see [How can I use managed identities for Azure resources?](https://docs.microsoft.com/en-gb/azure/active-directory/managed-identities-azure-resources/overview#how-can-i-use-managed-identities-for-azure-resources) and
   [Use Role-Based Access Control to manage access to your Azure subscription resources](/azure/role-based-access-control/role-assignments-portal).

See also: [Troubleshoot Azure Resource Manager service connections](../release/azure-rm-endpoint.md).

<a name="connect-govt"></a>

## Connect to an Azure Government Cloud

For information about connecting to an Azure Government Cloud, see:

* [Connecting from Azure Pipelines (Azure Government Cloud)](/azure/azure-government/documentation-government-get-started-connect-with-vsts)

<a name="connect-stack"></a>

## Connect to Azure Stack

For information about connecting to Azure Stack, see:

* [Connect to Azure Stack](/azure/azure-stack/azure-stack-connect-azure-stack)
* [Connect Azure Stack to Azure using VPN](/azure/azure-stack/azure-stack-connect-vpn)
* [Connect Azure Stack to Azure using ExpressRoute](/azure/azure-stack/azure-stack-connect-expressroute)

[!INCLUDE [rm-help-support-shared](../_shared/rm-help-support-shared.md)]
