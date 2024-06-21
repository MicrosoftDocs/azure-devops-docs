---
title: Use an Azure Resource Manager service connection
ms.custom: devx-track-arm-template, arm2024
description: Learn how to use an Azure Resource Manager service connection to connect Azure Pipelines to Azure services.
ms.topic: conceptual
ms.author: ronai
author: RoopeshNair
ms.date: 06/23/2024
monikerRange: '<= azure-devops'
---

# Connect to Azure by using an Azure Resource Manager service connection

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

You can use an Azure Resource Manager service connection to connect to Azure resources. If you use a Resource Manager service connection, you can use a pipeline to deploy to an Azure resource like an Azure App Service app without authenticating each time.

::: moniker range="azure-devops"
You have multiple options for connecting to Azure by using Azure Resource Manager service connections:

* Service principal with workload identity federation
* Service principal with secret
* Agent-assigned managed identity
* Public profile

::: moniker-end

::: moniker range="< azure-devops"

The service connection uses a service principal to authenticate with Azure resources. By using an Azure Resource Manager service connection. 

::: moniker-end

::: moniker range="azure-devops"

<a name="create-an-azure-resource-manager-service-connection-using-workload-identity-federation"></a>

## Create an Azure Resource Manager service connection that uses workload identity federation

[Workload identity federation](/azure/active-directory/workload-identities/workload-identity-federation) uses OpenID Connect (OIDC) to authenticate with Microsoft Entra protected resources without using secrets.

We recommend that you use this approach if all the following items are true for your scenario:

* You have the Owner role for your Azure subscription.
* You're not connecting to the [Azure Stack](#connect-stack) or the [Azure US Government](#connect-govt) environments.
* Any Marketplace extensions tasks that you use are updated to support workload identity federation.

### Create a new workload identity federation service connection

1. In the Azure DevOps project, go to **Project settings** > **Service connections**.

   For more information, see [Open project settings](../../project/navigation/go-to-service-page.md#open-project-settings).

1. Select **New service connection**,  then select **Azure Resource Manager** and **Next**.

   :::image type="content" source="media/new-service-connection-azure-resource-manager.png" alt-text="Screenshot that shows choosing Azure Resource Manager selection.":::

1. Select **Workload identity federation (automatic)** and **Next**.

   :::image type="content" source="media/select-workload-identity-service.png" alt-text="Screenshot that shows selecting a workload identity service connection type.":::

1. Select a **Scope level**. 

    For the **Subscription** scope, enter the following parameters:
    1. **Subscription**: Required. Select the Azure subscription.
    1. **Resource group**: Required. Enter the Azure subscription name.
    
    For the **Management Group** scope, enter the following parameters:
    1. **Management Group**: Required. Select the Azure management group.
    
    For the **Machine Learning Workspace** scope, enter the following parameters:
    1. **Subscription**: Required. Select the Azure subscription.
    1. **Resource Group**: Required. Select the resource group containing the workspace.
    1. **Machine Learning Workspace**: Required. Select the Azure Machine Learning workspace.

1. Enter a **Service connection name**.
1. Optionally, enter a description for the service connection.
1. Select **Grant access permission to all pipelines** to allow all pipelines to use this service connection. If you don't select this option, you must manually grant access to each pipeline that uses this service connection.
1. Select **Save**.

After the new service connection is created, copy the connection name and paste it into your code as the value for `azureSubscription`.

To deploy to a specific Azure resource, the task needs more data about that resource. Go to the resource in the Azure portal, and then copy the data into your code. For example, to deploy a web app, copy the name of the Azure App Service app and paste it into your code as the value for `WebAppName`.

### Create an Azure Resource Manager service connection using workload identity federation manually

You can manually create a service connection that uses an existing workload identity federation for authentication. 

1. In the Azure DevOps project, go to **Project settings** > **Service connections**.

   For more information, see [Open project settings](../../project/navigation/go-to-service-page.md#open-project-settings).

1. Select **New service connection**, then select **Azure Resource Manager** and **Next**.
1. Select **Workload identity federation (manual)** and **Next**.
1. In **Step 1: Basics**:
    1. Enter a **Service connection name** 
    1. Optionally, enter a **Description**.
    1. Select **Grant access permission to all pipelines** to allow all pipelines to use this service connection. If you don't select this option, you must manually grant access to each pipeline that uses this service connection.
    1. Select **Next**.
1. In **Step 2: Service Principal Details**:
    1. Select the **Environment**.
    1. Select the **Scope level**.
    1. Enter the information for the selected scope level.
    1. Enter the **Service principal Id**.
    1. Enter the **Tenant Id**.
    1. Select **Verify and save**.

After the new service connection is created, copy the connection name and paste it into your code as the value for `azureSubscription`.

To deploy to a specific Azure resource, the task needs more data about that resource. Go to the resource in the Azure portal, and then copy the data into your code. For example, to deploy a web app, copy the name of the Azure App Service app and paste it into your code as the value for `WebAppName`.

### Convert an existing Azure Resource Manager service connection to use workload identity federation

You can quickly convert an existing Azure Resource Manager service connection to use workload identity federation for authentication instead of a service principal. You can use the service connection conversion tool in Azure DevOps if your service connection meets these requirements:

* Azure DevOps originally created the service connection. If you manually create your service connection, you can't convert the service connection by using the service connection conversion tool because Azure DevOps doesn't have permissions to modify its own credentials.
* Only one project uses the service connection. You can't convert [cross-project service connections](service-endpoints.md#project-permissions---cross-project-sharing-of-service-connections).

To convert a service connection:

1. In the Azure DevOps project, go to **Project settings** > **Service connections**.

   For more information, see [Open project settings](../../project/navigation/go-to-service-page.md#open-project-settings).

1. Select the service connection that you want to convert to use workload identity.

1. Select **Convert**.

    :::image type="content" source="media/federated-convert-credential.png" alt-text="Screenshot that shows selecting convert for federated credentials.":::
    
    If you have an existing service principal credential with an expired secret, you see a different option to convert. 

    :::image type="content" source="media/secret-expired-workload-convert.png" alt-text="Screenshot that shows option to convert to use federated credentials when you have an expired certificate. ":::

1. Select **Convert** again to confirm that you want to create a new service connection.

   The conversion might take a few minutes. If you want to revert the connection, you must revert it within seven days.

#### Convert multiple Azure Resource Manager service connections with a script

Use a script to update multiple service connections at once to now use workload identity federation for authentication.

This example PowerShell script requires two parameters: Azure DevOps organization (example: `https://dev.azure.com/fabrikam-tailspin`) and Azure DevOps project (example: `Space game web agent`). The script then retrieves the associated service connections for your Azure DevOps project and organization. You're asked to confirm that you want to convert each associated service connection that doesn't use workload identity federation. If you confirm, the script uses the Azure DevOps REST API to update each service connection to now use workload identity federation.
The script requires [PowerShell 7.3 or newer](/powershell/scripting/install/installing-powershell-on-windows) and [Azure CLI](/cli/azure/install-azure-cli) to run. Save the script to a `.ps1` file and run it using PowerShell 7.

```powershell
#!/usr/bin/env pwsh
<# 
.SYNOPSIS 
    Convert multiple Azure Resource Manager service connection(s) to use Workload identity federation

.LINK
    https://aka.ms/azdo-rm-workload-identity-conversion

.EXAMPLE
    ./convert_azurerm_service_connection_to_oidc_simple.ps1 -Project <project> -OrganizationUrl https://dev.azure.com/<organization>
#> 

#Requires -Version 7.3

param ( 
    [parameter(Mandatory=$true,HelpMessage="Name of the Azure DevOps Project")]
    [string]
    [ValidateNotNullOrEmpty()]
    $Project,

    [parameter(Mandatory=$true,HelpMessage="Url of the Azure DevOps Organization")]
    [uri]
    [ValidateNotNullOrEmpty()]
    $OrganizationUrl
) 
$apiVersion = "7.1"
$PSNativeCommandArgumentPassing = "Standard" 

#-----------------------------------------------------------
# Log in to Azure
$azdoResource = "499b84ac-1321-427f-aa17-267ca6975798" # application id of Azure DevOps 
az login --allow-no-subscriptions --scope ${azdoResource}/.default
$OrganizationUrl = $OrganizationUrl.ToString().Trim('/')

#-----------------------------------------------------------
# Retrieve the service connection
$getApiUrl = "${OrganizationUrl}/${Project}/_apis/serviceendpoint/endpoints?authSchemes=ServicePrincipal&type=azurerm&includeFailed=false&includeDetails=true&api-version=${apiVersion}"
az rest --resource $azdoResource -u "${getApiUrl} " -m GET --query "sort_by(value[?authorization.scheme=='ServicePrincipal' && data.creationMode=='Automatic' && !(isShared && serviceEndpointProjectReferences[0].projectReference.name!='${Project}')],&name)" -o json `
        | Tee-Object -Variable rawResponse | ConvertFrom-Json | Tee-Object -Variable serviceEndpoints | Format-List | Out-String | Write-Debug
if (!$serviceEndpoints -or ($serviceEndpoints.count-eq 0)) {
    Write-Warning "No convertible service connections found"
    exit 1
}

foreach ($serviceEndpoint in $serviceEndpoints) {
    # Prompt user to confirm conversion
    $choices = @(
        [System.Management.Automation.Host.ChoiceDescription]::new("&Convert", "Converting service connection '$($serviceEndpoint.name)'...")
        [System.Management.Automation.Host.ChoiceDescription]::new("&Skip", "Skipping service connection '$($serviceEndpoint.name)'...")
        [System.Management.Automation.Host.ChoiceDescription]::new("&Exit", "Exit script")
    )
    $prompt = $serviceEndpoint.isShared ? "Convert shared service connection '$($serviceEndpoint.name)'?" : "Convert service connection '$($serviceEndpoint.name)'?"
    $decision = $Host.UI.PromptForChoice([string]::Empty, $prompt, $choices, $serviceEndpoint.isShared ? 1 : 0)

    if ($decision -eq 0) {

        Write-Host "$($choices[$decision].HelpMessage)"
    } elseif ($decision -eq 1) {
        Write-Host "$($PSStyle.Formatting.Warning)$($choices[$decision].HelpMessage)$($PSStyle.Reset)"
        continue 
    } elseif ($decision -ge 2) {
        Write-Host "$($PSStyle.Formatting.Warning)$($choices[$decision].HelpMessage)$($PSStyle.Reset)"
        exit 
    }

    # Prepare request body
    $serviceEndpoint.authorization.scheme = "WorkloadIdentityFederation"
    $serviceEndpoint.data.PSObject.Properties.Remove('revertSchemeDeadline')
    $serviceEndpoint | ConvertTo-Json -Depth 4 | Write-Debug
    $serviceEndpoint | ConvertTo-Json -Depth 4 -Compress | Set-Variable serviceEndpointRequest
    $putApiUrl = "${OrganizationUrl}/${Project}/_apis/serviceendpoint/endpoints/$($serviceEndpoint.id)?operation=ConvertAuthenticationScheme&api-version=${apiVersion}"
    # Convert service connection
    az rest -u "${putApiUrl} " -m PUT -b $serviceEndpointRequest --headers content-type=application/json --resource $azdoResource -o json `
            | ConvertFrom-Json | Set-Variable updatedServiceEndpoint
    
    $updatedServiceEndpoint | ConvertTo-Json -Depth 4 | Write-Debug
    if (!$updatedServiceEndpoint) {
        Write-Debug "Empty response"
        Write-Error "Failed to convert service connection '$($serviceEndpoint.name)'"
        exit 1
    }
    Write-Host "Successfully converted service connection '$($serviceEndpoint.name)'"
}
```

### Revert an existing Azure Resource Manager Service connection that uses a service principal secret

You can revert a converted automatic service connection with its secret for seven days. After seven days, manually create a new secret.

If you manually create and convert your service connection, you can't revert the service connection by using the service connection conversion tool because Azure DevOps doesn't have permissions to modify its own credentials.

To revert a service connection:

1. In the Azure DevOps project, go to **Pipelines** > **Service connections**.

1. Select an existing service connection to revert.

1. Select **Revert conversion to the original scheme**.

   :::image type="content" source="media/federated-revert-credential.png" alt-text="Screenshot that shows selecting revert for a federated credential.":::

1. Select **Revert** again to confirm your choice.


## Create an Azure Resource Manager service connection that uses a service principal secret

You can set up a service connection to authenticate with Azure resources by using a service principal secret. This approach is useful when you need to further limit permissions for Azure resources that users access through the service connection. 

You can choose to configure the service connection manually or automatically. It's best practice to use the automatic approach if you're signed in as the owner of the Azure Pipelines organization and the Azure subscription, and you don't need to further limit permissions for Azure resources that users access through the service connection.

We recommend that you use this approach if all the following items are true for your scenario:

* You're signed in as the owner of the Azure Pipelines organization and the Azure subscription.
* You don't need to further limit permissions for Azure resources that users access through the service connection.
* You're not connecting to [Azure Stack](#connect-stack) or to an [Azure Government Cloud](#connect-govt).
* You're not connecting from Azure DevOps Server 2019 or earlier versions of Team Foundation Server.

To create the service connection:

1. In the Azure DevOps project, go to **Project settings** > **Service connections**.

   For more information, see [Open project settings](../../project/navigation/go-to-service-page.md#open-project-settings).

1. Select **New service connection**, then select **Azure Resource Manager** and **Next**.

   :::image type="content" source="media/new-service-connection-azure-resource-manager.png" alt-text="Screenshot that shows the Azure Resource Manager selection.":::

1. Select **Service principal (automatic)** and **Next**.

1. Enter or select the following parameters:

   | Parameter | Description |
   | --------- | ----------- |
   | **Connection Name** | Required. The name that you use to refer to this service connection in task properties. Not the name of your Azure subscription. |
   | **Scope level** | Select **Subscription**, **Management Group**, or **Machine Learning Workspace**. [Management groups](/azure/azure-resource-manager/management-groups-overview) are containers that help you manage access, policy, and compliance across multiple subscriptions. A [Machine Learning Workspace](/azure/machine-learning/concept-workspace) is place to create machine learning artifacts.|
   | **Subscription** | If you selected **Subscription** or **Machine Learning Workspace** for the scope level, select an existing Azure subscription. If no Azure subscriptions or instances appear, see [Troubleshoot Azure Resource Manager service connections](../release/azure-rm-endpoint.md). |
   | **Resource Group** | If you selected **Subscription** or **Machine Learning Workspace** for the scope, you can specify the **Resource group**. If you selected the **Subscription** scope, you can leave it empty to allow users to access all resources that are defined within the subscription or select a resource group to restrict user access to resources. Users can then access only the resources that are defined for that resource group.|  
   | **Management Group** | If you selected **Management Group** for the scope, select an existing Azure management group. For more information, see [Create management groups](/azure/azure-resource-manager/management-groups-create). |
   | **Machine Learning Workspace** | If you selected **Machine Learning Workspace** for the scope, select an existing Azure Machine Learning workspace. |
   | **Service connection name** | Required. The name that you use to refer to this service connection in task properties. Not the name of your Azure subscription. |
   | **Security** | Select **Grant access permission to all pipelines** to allow all pipelines to use this service connection. If you don't select this option, you must manually grant access to each pipeline that uses this service connection. |

1. Select **Save**.

After the new service connection is created:

   * If you use the classic editor, select the connection name you assigned in the **Azure subscription** setting of your pipeline.
   * If you use a YAML file, copy the connection name into your code as the value for `azureSubscription`.

To deploy to a specific Azure resource, add more information about the resource to the task:

   * If you use the classic editor, select data to add to the task. For example, select the App Service name.
   * If you use a YAML file, go to the resource in the Azure portal. Copy the data that you need and paste into your task code. For example, to deploy a web app, copy the name of the App Service app and paste it as the value for `WebAppName` in the task YAML.

> [!NOTE]
>
> When you follow this approach, Azure DevOps *connects with Microsoft Entra ID and creates an app registration with a secret that's valid for three months*. When the service connection is about to expire, Microsoft Entra ID displays this prompt: **A certificate or secret is expiring soon. Create a new one**. In this scenario, you must refresh the service connection.
>
> To refresh a service connection, in the Azure DevOps portal, edit the connection, and then select **Verify**. After you save the edit, the service connection is valid for another three months.
>
> We recommend that you use workload identity federation instead of creating a secret. If you use workload identity federation, you don't need to rotate secrets, and app registration maintains its intended purpose. To start using workload identity federation, go to the service connection details page and select **Convert**. The service connection is converted to use workload identity federation instead of a secret. For more information, see [Convert an existing Azure Resource Manager service connection to use workload identity federation](#convert-an-existing-azure-resource-manager-service-connection-to-use-workload-identity-federation).
>

For more information, see [Troubleshoot an Azure Resource Manager service connection](../release/azure-rm-endpoint.md).

If you have problems using this approach (such as no subscriptions shown in the dropdown list) or if you want to limit user permissions, you can instead use a [service principal](#create-an-azure-resource-manager-service-connection-that-uses-workload-identity-federation) or a [virtual machine with a managed identity](#use-msi).  

::: moniker-end

<a name="create-an-azure-resource-manager-service-connection-with-an-existing-service-principal"></a>

## Create an Azure Resource Manager service connection that uses an existing service principal

If you want to use a predefined set of access permissions and you don't already have a service principal defined for this purpose, follow one of these tutorials to create a new service principal:

   * [Use the portal to create a Microsoft Entra application and a service principal that can access resources](/azure/azure-resource-manager/resource-group-create-service-principal-portal)
   * [Use Azure PowerShell to create an Azure service principal that has a certificate](/azure/active-directory/develop/howto-create-service-principal-portal#option-1-upload-a-certificate)

To create a service connection that uses an existing service principal:

1. In the Azure DevOps project, go to **Project settings** > **Service connections**.

   For more information, see [Open project settings](../../project/navigation/go-to-service-page.md#open-project-settings).

1. Select **New service connection**, then select **Azure Resource Manager** and **Next**.

   :::image type="content" source="media/new-service-connection-azure-resource-manager.png" alt-text="Screenshot that shows the Azure Resource Manager selection.":::

1. Select **Service principal (manual)** and **Next**.

1. From the **New Azure service connection** dialog, select the **Environment**. If you select **Azure Stack**, enter the environment URL, which is something like `https://management.local.azurestack.external`. 

1. Select the **Scope Level**.  

    For the **Subscription** scope, enter the following parameters:
    1. **Subscription Id**: Required. Enter the Azure subscription ID.
    1. **Subscription Name**: Required. Enter the Azure subscription name.
    
    For the **Management Group** scope, enter the following parameters:
    1. **Management Group Id**: Required. Enter the Azure management group ID.
    1. **Management Group Name**: Required. Enter the Azure management group name.
    
    For the **Machine Learning Workspace** scope, enter the following parameters:
    1. **Subscription Id**: Required. Enter the Azure subscription ID.
    1. **Subscription Name**: Required. Enter the Azure subscription name.
    1. **Resource Group**: Required. Select the resource group containing the workspace.
    1. **ML Workspace Name**: Required. Enter the name of the existing Azure Machine Learning workspace.
    1. **ML Workspace Location**: Required. Enter the location of the existing Azure Machine Learning workspace.

1. In the **Authentication** section, enter or select the following parameters:

    | Parameter | Description |
    | --------- | ----------- |
    | **Service Principal Id** | Required. Enter the service principal ID. |
    | **Credential** | Select **Service Principal Key** or **Certificate**. If you selected **Service Principal Key**, enter the key (password). If you selected **Certificate**, enter the certificate. |
    | **Tenant Id** | Required. Enter the tenant ID. |
    | **Verify** | Select to validate the settings you entered. |

1. In the Details section, enter the following parameters:

    | Parameter | Description |
    | --------- | ----------- |
    | **Connection Name** | Required. The name that you use to refer to this service connection in task properties. Not the name of your Azure subscription. |
    | **Description** | Optional. Enter a description of the service connection.|

1. In the **Security** section, select **Grant access permission to all pipelines** to allow all pipelines to use this service connection. If you don't select this option, you must manually grant access to each pipeline that uses this service connection.

1. Select **Verify and save** to validate and create the service connection.

After the new service connection is created:

   * If you use the service connection in the UI, select the connection name that you assigned in the **Azure subscription** setting of your pipeline.
   * If you use the service connection in a YAML file, copy the connection name and paste it into your code as the value for `azureSubscription`.

If necessary, modify the service principal to expose the appropriate permissions.

For more information about authenticating by using a service principal, see [Use role-based access control to manage access to your Azure subscription resources](/azure/role-based-access-control/role-assignments-portal) or the blog post [Automate an Azure resource group deployment by using a service principal in Visual Studio](https://devblogs.microsoft.com/devops/automating-azure-resource-group-deployment-using-a-service-principal-in-visual-studio-online-buildrelease-management/).

For more information, see [Troubleshoot Azure Resource Manager service connections](../release/azure-rm-endpoint.md).


::: moniker range="azure-devops"

<a name="use-msi"></a>

## Create an Azure Resource Manager service connection to a VM that uses a managed identity

> [!NOTE]
>
> To use a managed identity to authenticate, you must use a self-hosted agent on an Azure virtual machine (VM).

You can configure Azure VM-based agents to use an [Azure managed identity](/azure/active-directory/managed-service-identity/overview) in Microsoft Entra ID. In this scenario, you use the system-assigned identity (service principal) to grant the Azure VM-based agents access to any Azure resource that supports Microsoft Entra ID, such as an instance of Azure Key Vault, instead of persisting credentials in Azure DevOps for the connection.

1. In the Azure DevOps project, go to **Project settings** > **Service connections**.

   For more information, see [Open project settings](../../project/navigation/go-to-service-page.md#open-project-settings).

1. Select **New service connection**, then select **Azure Resource Manager** and **Next**.

   :::image type="content" source="media/new-service-endpoint-2.png" alt-text="Screenshot that shows choosing a service connection type.":::

1. Select **Managed identity** for the authentication method.

   :::image type="content" source="media/rm-endpoint-msi.png" alt-text="Screenshot that shows going to the managed service identity settings.":::

1. For **Environment**, select the environment name (**Azure Cloud**, **Azure Stack**, or **Azure US Government**).

1. Select the **Scope level**. 

    For the **Subscription** scope, enter the following parameters:
    1. **Subscription Id**: Required. Enter the Azure subscription ID.
    1. **Subscription Name**: Required. Enter the Azure subscription name.
    
    For the **Management Group** scope, enter the following parameters:
    1. **Management Group Id**: Required. Enter the Azure management group ID.
    1. **Management Group Name**: Required. Enter the Azure management group name.
    
    For the **Machine Learning Workspace** scope, enter the following parameters:
    1. **Subscription Id**: Required. Enter the Azure subscription ID.
    1. **Subscription Name**: Required. Enter the Azure subscription name.
    1. **Resource Group**: Required. Select the resource group containing the workspace.
    1. **ML Workspace Name**: Required. Enter the name of the existing Azure Machine Learning workspace.
    1. **ML Workspace Location**: Required. Enter the location of the existing Azure Machine Learning workspace.
    
1. Enter the **Tenant Id**.
1. Enter the **Service connection name**.
1. Optionally, enter a description for the service connection.
1. Select **Grant access permission to all pipelines** to allow all pipelines to use this service connection. If you don't select this option, you must manually grant access to each pipeline that uses this service connection.
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

## Create a service connection using a publish profile

You can create a service connection by using a publish profile. You can use a publish profile to create a service connection to an Azure App Service.

1. In the Azure DevOps project, go to **Project settings** > **Service connections**.

   For more information, see [Open project settings](../../project/navigation/go-to-service-page.md#open-project-settings).

1. Select **New service connection**, then select **Azure Resource Manager** and **Next**.

   :::image type="content" source="media/new-service-endpoint-2.png" alt-text="Screenshot of Azure Resource Manager selection.":::

1. Select **Publish profile** for the authentication method and select **Next**.

   :::image type="content" source="media/new-service-publish-profile.png" alt-text="Screenshot of Publish profile selection.":::

1. Enter the following parameters:

   | Parameter | Description |
   | --------- | ----------- |
   | **Subscription** | Required. Select an existing Azure subscription. If no Azure subscriptions or instances appear, see [Troubleshoot Azure Resource Manager service connections](../release/azure-rm-endpoint.md). |
   | **WebApp** | Required. Enter the name of the Azure App Service app. |
   | **Service connection Name** | Required. The name that you use to refer to this service connection in task properties. Not the name of your Azure subscription. |
   | **Description** | Optional. The description of the service connection.|

1. Select **Grant access permission to all pipelines** to allow all pipelines to use this service connection. If you don't select this option, you must manually grant access to each pipeline that uses this service connection.
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

::: moniker-end

[!INCLUDE [rm-help-support-shared](../includes/rm-help-support-shared.md)]
