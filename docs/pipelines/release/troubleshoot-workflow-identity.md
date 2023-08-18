---
title: Troubleshoot Azure Resource Manager workflow identity service connections
ms.custom: seodec18, devx-track-arm-template
description: How to troubleshoot workflow identity service connections in Azure Pipelines
ms.topic: troubleshooting-general
ms.author: jukullam
author: juliakm
ms.date: 08/17/2023
monikerRange: '>= azure-devops'
"recommendations": "true"
---


# Troubleshoot Azure Resource Manager workflow identity service connections

> [!IMPORTANT]
> Workload identity federation for Azure Resource Manager is currently in public preview.
> See the [Supplemental Terms of Use for Microsoft Azure Previews](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) for legal terms that apply to Azure features that are in beta, preview, or otherwise not yet released into general availability.

Get help debugging common issues with workflow identity service connections and learn how to manually create a service connection if necessary. 


## Troubleshooting check list

### Review pipeline tasks

Not all pipelines tasks support workflow identity. During the preview, no Azure Marketplace tasks support workflow identity service connections. Check the [list of supported tasks](https://github.com/microsoft/azure-pipelines-tasks/blob/users/geekzter/oidc-preview-docs/docs/service-connections/azure-oidc/troubleshooting.md#task-coverage). Packer and Service Fabric don't currently support workflow identity. 

### Verify workflow identity federation is active

If you see the error message `AADSTS700223`, workflow identity federation was disabled in the Azure portal for your Microsoft Entra tenant. 

Sign in to the Azure portal and verify that there are no policies in place that block federated credentials. 

### Check the issuer URL for accuracy

If you see a message that there is `no matching federated identity record found`, either the issuer URL or federation subject does not match. The correct issuer URL show start with `https://vstoken.dev.azure.com`. 

You can fix the issuer URL by editing and saving the service connection to update the issuer URL. For identities that not been created by Azure DevOps, the issuer needs to be updated manually. For Azure identities, the issuer URL automatically updates.  


## Common issues and causes

### I can't enable features for my organization

I want to set up workflow identity but I don't see the option to turn it on. 


#### Solution: Verify organization admins and enable features

1. Find your organization owners on the organization settings page `https://dev.azure.com/<org>/_settings/organizationOverview`. 
1. Make sure the preview feature Workload Identity federation for ARM service connections is enabled for your organization, see [manage or enable features](../../project/navigation/preview-features.md). 


### I don't have permission to create a service principal in the Azure Entra ID tenant

You can't use the the service connection configuration tool when you don't have the correct permissions. Your permission level is inadequate if you don't have permission to create service principals or you are using a different Azure Entra ID tenant than your Azure DevOps user. 

#### Solution: Manually configure workflow identity 

You may need to manually create a service principal with federated credentials, grant appropriate permissions, and configure managed identity.  

##### Create app registration and federated credential

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
    |Issuer     |  Enter `https://app.vstoken.visualstudio.com`.      |
    |Subject identifier     |   Specify `sc://<Azure DevOps organization>/<Project name>/<Service Connection name> `. You do not need to have created the service connection.      |

1. Select **Save**.

##### Grant permissions to the app registration

1. In Azure portal, go to the Azure resource that you want to target (example: resource group). 

1.  Select **Access control (IAM)**. 

    :::image type="content" source="approvals/media/access-control-resource-group.png" alt-text="Screenshot of Access control selection. ":::

1. Select **Add role assignment**. Assign the desired role to your app registration (example: Contributor).

1. Select **Review and assign**.

##### Create service connection

1. In Azure DevOps, open your project and go to :::image type="icon" source="../../media/icons/gear-icon.png" border="false"::: > **Pipelines** > **Service connections**. 
1. Select **New service connection**.
1. Select **Azure Resource Manager**. 
1. Select **Workload Identity federation (manual)**. 

    :::image type="content" source="approvals/media/workload-identity-service-connection-manual.png" alt-text="Screenshot of workload identity service connection selection. ":::

1. Enter the **Service connection name**. The name should match the name you used in the **Subject identifier** field when creating your federated credential. 

1. Set the **Subscription Id** to the Subscription ID for your Azure portal account. 

1. In the authentication section, set the **Service Principal Id** to the **Application (client) ID** value of your app registration.

1. In the authentication section, set the **Tenant Id** to the **Directory (tenant) ID** value of your app registration.

1. Select **Verify and save**.