---
title: Use an Azure Resource Manager service connection
description: Learn how to use an Azure Resource Manager service connection to connect Azure Pipelines to Azure services.
ms.topic: conceptual
ms.author: jukullam
author: juliakm
ms.date: 10/25/2024
ai-usage: ai-assisted
monikerRange: '<= azure-devops'
ms.custom:
  - devx-track-arm-template
  - arm2024
  - sfi-image-nochange
---

# Connect to Azure with an Azure Resource Manager service connection

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

> [!NOTE]
>We are rolling out the new Azure service connection creation experience. Receiving it in your organization depends on various factors, and you may still see the older user experience.

An Azure Resource Manager service connection allows you to connect to Azure resources like Azure Key Vault from your pipeline. This connection lets you use a pipeline to deploy to Azure resources, such as an Azure App Service app, without needing to authenticate each time.

::: moniker range="azure-devops"
You have multiple authentication options for connecting to Azure with an Azure Resource Manager service connection. We recommend using [workload identity federation](/azure/active-directory/workload-identities/workload-identity-federation) with either an app registration or managed identity. Workload identity federation eliminates the need for secrets and secret management. 

Recommended options:
* [App registration (automatic) with workload identity federation](#create-an-app-registration-with-workload-identity-federation-automatic) 
* Managed identity that creates a workload identity federation credential and connects to an [existing user-assigned managed identity](/entra/identity/managed-identities-azure-resources/how-manage-user-assigned-managed-identities?pivots=identity-mi-methods-azp#create-a-user-assigned-managed-identity). Use this option when you [don't have permission to create an app registration](/entra/identity/role-based-access-control/delegate-app-roles#to-disable-the-default-ability-to-create-application-registrations-or-consent-to-applications).
* [App registration or managed identity (manual) with workload identity federation or a secret](../release/configure-workload-identity.md). Manual configuration is more time consuming than the automatic configuration and should only be used if you've already tried to automatic option. 

> [!NOTE]
> There are other Azure Resource Manager service connection authentication options that don't use workload identity federation. These options are available for backwards compatibility and edge cases and not recommended. If you're setting up a service connection for the first time, use workload identity federation. If you have an existing service connection, try [converting your service connection to use workload identity federation](#convert-an-existing-service-connection-to-use-workload-identity-federation) first. 
> * [Automatic app registration with a secret](azure-resource-manager-alternate-approaches.md#create-an-app-registration-with-a-secret-automatic)
> * [Agent-assigned managed identity](azure-resource-manager-alternate-approaches.md#create-an-azure-resource-manager-service-connection-to-a-vm-that-uses-a-managed-identity)
> * [Publish profile](azure-resource-manager-alternate-approaches.md#create-an-azure-resource-manager-service-connection-using-a-publish-profile)

::: moniker-end

::: moniker range="azure-devops"

<a name="create-an-azure-resource-manager-service-connection-using-workload-identity-federation"></a>

## Create an app registration with workload identity federation (automatic)

<a name="create-an-azure-resource-manager-service-connection-that-uses-workload-identity-federation"></a>
You can use this approach if all the following items are true for your scenario:

* You have the Owner role for your Azure subscription.
* You're not connecting to the [Azure Stack](azure-resource-manager-alternate-approaches.md#connect-to-azure-stack) or the [Azure US Government](azure-resource-manager-alternate-approaches.md#connect-to-an-azure-government-cloud) environments.
* Any Marketplace extensions tasks that you use are updated to support workload identity federation.

With this selection, Azure DevOps automatically queries for the subscription, management group, or Machine Learning workspace that you want to connect to and creates a workload identity federation for authentication.

1. In the Azure DevOps project, go to **Project settings** > **Service connections**.

   For more information, see [Open project settings](../../project/navigation/go-to-service-page.md#open-project-settings).

1. Select **New service connection**,  then select **Azure Resource Manager** and **Next**.

   :::image type="content" source="media/new-service-connection-azure-resource-manager.png" alt-text="Screenshot that shows choosing Azure Resource Manager selection.":::

1. Select **App registration (automatic)** with the credential **Workload identity federation**.

   :::image type="content" source="media/select-app-registration-workload-identity-service.png" alt-text="Screenshot of app registration (automatic) authentication method selection with workload identity selected.":::

1. Select a **Scope level**. Select **Subscription**, **Management Group**, or **Machine Learning Workspace**. [Management groups](/azure/azure-resource-manager/management-groups-overview) are containers that help you manage access, policy, and compliance across multiple subscriptions. A [Machine Learning Workspace](/azure/machine-learning/concept-workspace) is place to create machine learning artifacts.

    * For the **Subscription** scope, enter the following parameters:
    
        | Parameter | Description |
        | --------- | ----------- |
        | **Subscription** | Required. Select the Azure subscription. |
        | **Resource group** | Optional. Select the Azure resource group. |
    
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

## Create a service connection for an existing user-assigned managed identity

Use this option to automatically create a workload identity credential for an existing user-assigned managed identity. You need to have an [existing user-assigned managed identity](/entra/identity/managed-identities-azure-resources/how-manage-user-assigned-managed-identities?pivots=identity-mi-methods-azp#create-a-user-assigned-managed-identity) before you start. 

1. In the Azure DevOps project, go to **Project settings** > **Service connections**.

   For more information, see [Open project settings](../../project/navigation/go-to-service-page.md#open-project-settings).

1. Select **New service connection**, then select **Azure Resource Manager** and **Next**.

    :::image type="content" source="media/new-service-connection-azure-resource-manager.png" alt-text="Screenshot that shows choosing Azure Resource Manager selection.":::
   
1. Select **Managed identity**.

    :::image type="content" source="media/azure-resource-manager-options-managed-identity.png" alt-text="Screenshot that shows choosing Azure Resource Manager selection of managed identity with user assigned identity.":::

1. In **Step 1: Managed identity details**:
    1. Select **Subscription for Managed Identity**. This is the Azure subscription that contains your managed identity. 
    1. Select **Resource group for Managed Identity**. This is the resource group that contains your managed identity. 
    1. Select **Managed Identity**. This is the managed identity within your resource group that you'll use to access resources. 
    
1. In **Step 2: Azure Scope**:

    1. Select the **Scope Level**. Select **Subscription**, **Management Group**, or **Machine Learning Workspace**. [Management groups](/azure/azure-resource-manager/management-groups-overview) are containers that help you manage access, policy, and compliance across multiple subscriptions. A [Machine Learning Workspace](/azure/machine-learning/concept-workspace) is place to create machine learning artifacts.
    
        * For the **Subscription** scope, enter the following parameters:

            | Parameter | Description |
            | --------- | ----------- |
            | **Subscription for service connection** | Required. Select the Azure subscription name your managed identity will access. |
            | **Resource group for service connection** | Optional. Enter to limit managed identity access to one resource group. |
        
        * For the **Management Group** scope, enter the following parameters:

            | Parameter | Description |
            | --------- | ----------- |
            | **Management Group** | Required. Select the Azure management group. |
        
        * For the **Machine Learning Workspace** scope, enter the following parameters:

            | Parameter | Description |
            | --------- | ----------- |
            | **Subscription** | Required. Select the Azure subscription name. |
            | **Resource group for service connection** | Optional. Select the resource group containing the workspace. |
            | **ML Workspace workspace** | Required. Enter the name of the existing Azure Machine Learning workspace. |
    
    1. In the **Step 3: Service connection details:** section, enter or select the following parameters:
        
        | Parameter | Description |
        | --------- | ----------- |
        | **Service Connection Name** | Required. The name that you use to refer to this service connection in task properties. Not the name of your Azure subscription. |
        | **Service Management Reference** | Optional. Context information from an ITSM database. |
        | **Description** | Optional. Enter a description of the service connection.|
    
    1. In the **Security** section, select **Grant access permission to all pipelines** to allow all pipelines to use this service connection. If you don't select this option, you must manually grant access to each pipeline that uses this service connection.
    
    1. Select **Save** to validate and create the service connection.

::: moniker-end

::: moniker range="azure-devops"

## Convert an existing service connection to use workload identity federation

You can quickly convert an existing Azure Resource Manager service connection to use workload identity federation for authentication instead of a secret. You can use the service connection conversion tool in Azure DevOps if your service connection meets these requirements:

* Azure DevOps originally created the service connection. If you manually create your service connection, you can't convert the service connection by using the service connection conversion tool because Azure DevOps doesn't have permissions to modify its own credentials.
* Only one project uses the service connection. You can't convert [cross-project service connections](../policies/permissions.md#set-service-connection-project-permissions).

To convert a service connection:

1. In the Azure DevOps project, go to **Project settings** > **Service connections**.

   For more information, see [Open project settings](../../project/navigation/go-to-service-page.md#open-project-settings).

1. Select the service connection that you want to convert to use workload identity.

1. Select **Convert**.

    :::image type="content" source="media/federated-convert-credential.png" alt-text="Screenshot that shows selecting convert for federated credentials.":::
    
    If you have an existing credential with an expired secret, you see a different option to convert. 

    :::image type="content" source="media/secret-expired-workload-convert.png" alt-text="Screenshot that shows option to convert to use federated credentials when you have an expired certificate. ":::

1. Select **Convert** again to confirm that you want to create a new service connection.

   The conversion might take a few minutes. If you want to revert the connection, you must revert it within seven days.

#### Convert multiple service connections with a script

Use a script to update multiple service connections at once to now use workload identity federation for authentication.

This example PowerShell script requires two parameters: Azure DevOps organization (example: `https://dev.azure.com/fabrikam-tailspin`) and Azure DevOps project (example: `Space game web agent`). The script then retrieves the associated service connections for your Azure DevOps project and organization. 

When converting service connections to use workload identity federation, you're prompted to confirm the update for each connection not already using it. Upon confirmation, the script updates these service connections via the Azure DevOps REST API to utilize workload identity federation.

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

### Revert an existing service connection that uses a secret

You can revert a converted automatic service connection with its secret for seven days. After seven days, manually create a new secret.

If you manually create and convert your service connection, you can't revert the service connection by using the service connection conversion tool because Azure DevOps doesn't have permissions to modify its own credentials.

To revert a service connection:

1. In the Azure DevOps project, go to **Pipelines** > **Service connections**.

1. Select an existing service connection to revert.

1. Select **Revert conversion to the original scheme**.

   :::image type="content" source="media/federated-revert-credential.png" alt-text="Screenshot that shows selecting revert for a federated credential.":::

1. Select **Revert** again to confirm your choice.

::: moniker-end

<a name="create-an-azure-resource-manager-service-connection-with-an-existing-service-principal"></a>

::: moniker range=">= azure-devops-2020 < azure-devops"

## Create a service connection that uses an existing service principal

If you want to use a predefined set of access permissions and you don't already have a service principal defined for this purpose, follow one of these tutorials to create a new service principal:

   * [Use the portal to create a Microsoft Entra application and a service principal that can access resources](/azure/azure-resource-manager/resource-group-create-service-principal-portal)
   * [Use Azure PowerShell to create an Azure service principal that has a certificate](/azure/active-directory/develop/howto-create-service-principal-portal#option-1-upload-a-certificate)

To create a service connection that uses an existing service principal:

1. In the Azure DevOps project, go to **Project settings** > **Service connections**.

   For more information, see [Open project settings](../../project/navigation/go-to-service-page.md#open-project-settings).

1. Select **New service connection**, then select **Azure Resource Manager** and **Next**.

   :::image type="content" source="media/new-service-connection-azure-resource-manager.png" alt-text="Screenshot that shows the Azure Resource Manager selection.":::

1. Select **Service principal (manual)** and **Next**.

    :::image type="content" source="media\new-azure-resource-manager-conn-sp-manual-selection-server.png" alt-text="Screenshot that shows selecting a service principal (manual) authentication method selection.":::

1. From the **New Azure service connection** dialog, select the **Environment**. If you select **Azure Stack**, enter the environment URL, which is something like `https://management.local.azurestack.external`. 

1. Select the **Scope Level**. Select **Subscription** or **Management Group**. [Management groups](/azure/azure-resource-manager/management-groups-overview) are containers that help you manage access, policy, and compliance across multiple subscriptions. 

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
    | **Security** | Select **Grant access permission to all pipelines** to allow all pipelines to use this service connection. If you don't select this option, you must manually grant access to each pipeline that uses this service connection. |

1. Select **Verify and save** to validate and create the service connection.

::: moniker-end

[!INCLUDE [rm-help-support-shared](../includes/rm-help-support-shared.md)]
