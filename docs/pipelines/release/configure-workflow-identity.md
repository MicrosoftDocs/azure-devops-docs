---
title: 'Manually configure Azure Resource Manager workflow identity service connections'
ms.custom: seodec18, devx-track-arm-template
description: How to manually configure workflow identity service connections in Azure Pipelines
ms.topic: conceptual
ms.author: jukullam
author: juliakm
ms.date: 09/06/2023
monikerRange: '>= azure-devops'
"recommendations": "true"
---

# Manually configure Azure Resource Manager workflow identity service connections


When you [troubleshoot an Azure Resource Manager workflow identity service connection](troubleshoot-workflow-identity.md#troubleshoot-azure-resource-manager-workflow-identity-service-connections), you many need to manually configure the connection instead of using the automated tool. You should [try the automated approach first](../library/connect-to-azure.md#create-an-azure-resource-manager-service-connection-using-workload-identity-federation) before starting a manual configuration. 

There are two options for authentication: managed identity and using a service principal. The advantage of the managed identity option is that you can use it when you don't have permission to create service principals or you are using a different Azure Entra ID tenant than your Azure DevOps user. 

## Workflow identity with managed identity

> [!IMPORTANT]
> Workload identity federation for Azure Resource Manager is currently in public preview.
> See the [Supplemental Terms of Use for Microsoft Azure Previews](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) for legal terms that apply to Azure features that are in beta, preview, or otherwise not yet released into general availability.
>
> This feature is in public preview and may not be available yet in your region. To request early access, go to [https://aka.ms/azdo-rm-workload-identity-preview](https://aka.ms/azdo-rm-workload-identity-preview).

You may need to manually create a managed identity with federated credentials and grant appropriate permissions. You can also use the REST API for this process.    

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
    |Issuer     |  Enter ` https://app.vstoken.visualstudio.com/<unique-identifier>`.      |
    |Subject identifier     |   Specify `sc://<Azure DevOps organization>/<Project name>/<Service Connection name> `. You do not need to have created the service connection.      |

1. Select **Save**.

1. Keep this window open. You'll return and update your app registration federated credential later. 
 
### Grant permissions to the managed identity

1. In Azure portal, go to the Azure resource that you want to target (example: resource group). 

1.  Select **Access control (IAM)**. 

    :::image type="content" source="approvals/media/access-control-resource-group.png" alt-text="Screenshot of Access control selection. ":::

1. Select **Add role assignment**. Assign the desired role to your managed identity (example: Contributor).

1. Select **Review and assign**.

### Create service connection

1. In Azure DevOps, open your project and go to :::image type="icon" source="../../media/icons/gear-icon.png" border="false"::: > **Pipelines** > **Service connections**. 
1. Select **New service connection**.
1. Select **Azure Resource Manager**. 

1. Select **Workload Identity federation (manual)**. 

    :::image type="content" source="approvals/media/workload-identity-service-connection-manual.png" alt-text="Screenshot of workload identity service connection selection. ":::

1. Enter the **Service connection name**. The name should match the name you used in the **Subject identifier** field when creating your federated credential. 

1. Set the **Subscription ID** to the subscription ID and the **Subscription Name** to the subscription name for your Azure portal account. 

    :::image type="content" source="approvals/media/federated-set-subscription.png" alt-text="Screenshot of federated subscription credentials. ":::

1. In the authentication section, set the **Service Principal Id** to the **Client Id** value of your managed identity, and set the **Tenant ID** to the **Tenant Id** value of your managed identity.

    :::image type="content" source="approvals/media/federated-managed-values.png" alt-text="Screenshot of Azure portal managed identity values. ":::

1. In Azure DevOps, copy the generated values for **Issuer** and **Subject identifier**.
    
    :::image type="content" source="approvals/media/federated-credentials-devops.png" alt-text="Screenshot of DevOps credentials for federated authentication.":::

1. In Azure portal, return to your app registration federated credential. 

1. Enter the values for **Issuer** and **Subject identifier** from your Azure DevOps project and enter those values in Azure portal for your federated credential. 

    :::image type="content" source="approvals/media/copy-federated-credential.png" alt-text="Screenshot comparison of federated credential in DevOps and Azure portal. ":::

1. In Azure portal, select **Update** to save the updated credential. 

1. In Azure DevOps, select **Verify and save**.


## Workflow identity with a service principal

> [!IMPORTANT]
> Workload identity federation for Azure Resource Manager is currently in public preview.
> See the [Supplemental Terms of Use for Microsoft Azure Previews](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) for legal terms that apply to Azure features that are in beta, preview, or otherwise not yet released into general availability.
>
> This feature is in public preview and may not be available yet in your region. To request early access, go to [https://aka.ms/azdo-rm-workload-identity-preview](https://aka.ms/azdo-rm-workload-identity-preview).

You may need to manually create a service principal with federated credentials and grant appropriate permissions. You can also use the REST API for this process.    

### Create app registration and federated credential

1. In Azure portal, go to [app registrations](https://portal.azure.com/#view/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/~/RegisteredApps). 
1. Select **New registration**. 
1. 
    :::image type="content" source="approvals/media/new-app-registration.png" alt-text="Screenshot of new app registration.":::

1. Enter a **Name** for your app registration and select **Who can use this application or access this API**. 
1. Copy the **Application (client) ID** and **Directory (tenant) ID** for your app registration. You'll use those values later. 

    :::image type="content" source="approvals/media/app-registration-client-tenant.png" alt-text="Screenshot of app registration client and tenant IDs. ":::
1. Go to **Manage** > **Certificates & secrets**. 
1. Select **Federated credentials**. 

    :::image type="content" source="approvals/media/federated-credentials-choice.png" alt-text="Screenshot of federated credentials tab option. ":::
1. Select **Add credentials**.
1. Select the **Other issuer** scenario. 

    :::image type="content" source="approvals/media/federated-credential-scenario.png" alt-text="Screenshot of selecting a federated credential scenario.":::

1. Enter values for **Issuer** and **Subject identifier**. 

    |Field  |Description  |
    |---------|---------|
    |Issuer     |  Enter ` https://app.vstoken.visualstudio.com/<unique-identifier>`.      |
    |Subject identifier     |   Specify `sc://<Azure DevOps organization>/<Project name>/<Service Connection name> `. You do not need to have created the service connection.      |

1. Select **Save**.

1. Keep this window open. You'll return and update your app registration federated credential later. 
 
### Grant permissions to the app registration

1. In Azure portal, go to the Azure resource that you want to target (example: resource group). 

1.  Select **Access control (IAM)**. 

    :::image type="content" source="approvals/media/access-control-resource-group.png" alt-text="Screenshot of Access control selection. ":::

1. Select **Add role assignment**. Assign the desired role to your app registration (example: Contributor).

1. Select **Review and assign**.

### Create service connection

1. In Azure DevOps, open your project and go to :::image type="icon" source="../../media/icons/gear-icon.png" border="false"::: > **Pipelines** > **Service connections**. 
1. Select **New service connection**.
1. Select **Azure Resource Manager**. 
1. Select **Workload Identity federation (manual)**. 

    :::image type="content" source="approvals/media/workload-identity-service-connection-manual.png" alt-text="Screenshot of workload identity service connection selection. ":::

1. Enter the **Service connection name**. The name should match the name you used in the **Subject identifier** field when creating your federated credential. 

1. Set the **Subscription Id** to the subscription ID and the **Subscription Name** to the subscription name for your Azure portal account. 

    :::image type="content" source="approvals/media/federated-set-subscription.png" alt-text="Screenshot of federated subscription credentials. ":::

1. In the authentication section, set the **Service Principal Id** to the **Application (client) ID** value of your app registration.

1. In the authentication section, set the **Tenant Id** to the **Directory (tenant) ID** value of your app registration.

1. Copy the generated values for **Issuer** and **Subject identifier**.
    
    :::image type="content" source="approvals/media/federated-credentials-devops.png" alt-text="Screenshot of DevOps credentials for federated authentication.":::

1. In Azure portal, return to your app registration federated credential. 

1. Copy the values for **Issuer** and **Subject identifier** from your Azure DevOps project and enter those values in Azure portal for your federated credential. 

    :::image type="content" source="approvals/media/copy-federated-credential.png" alt-text="Screenshot comparison of federated credential in DevOps and Azure portal. ":::

1. In Azure portal, select **Update** to save the updated credential. 

1. In Azure DevOps, select **Verify and save**.


