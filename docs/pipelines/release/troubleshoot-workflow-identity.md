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
>
> This feature is in public preview and may not be available yet in your region. To request early access, go to [https://aka.ms/azdo-rm-workload-identity-preview](https://aka.ms/azdo-rm-workload-identity-preview).

Get help debugging common issues with workflow identity service connections and learn how to manually create a service connection if necessary. 


## Troubleshooting check list

### Review pipeline tasks

Not all pipelines tasks support workflow identity. During the preview, no Azure Marketplace tasks support workflow identity service connections. The following tasks don't currently support with workflow identity federation.

- `AzureCloudPowerShellDeploymentV1`
- `AzCopy` (`AzureFileCopyV1`, `AzureFileCopyV2`, `AzureFileCopyV3`, `AzureFileCopyV4`, `AzureFileCopyV5`)
- `AzureIoTEdgeV2`
- `AzureMonitorAlertsV0`
- `AzureNLBManagementV1`
- `PackerBuild` (`PackerBuildV0`, `PackerBuildV1`)
- `ServiceFabricComposeDeployV0`
- `ServiceFabricDeployV1`	

### Verify workflow identity federation is active

If you see the error message `AADSTS700223`, workflow identity federation was disabled in the Azure portal for your Microsoft Entra tenant. 

Sign in to the Azure portal and verify that there are no policies in place that block federated credentials. 

### Check the issuer URL for accuracy

If you see a message that there's `no matching federated identity record found`, either the issuer URL or federation subject doesn't match. The correct issuer URL show start with `https://vstoken.dev.azure.com`. 

You can fix the issuer URL by editing and saving the service connection to update the issuer URL. The issuer needs to be updated manually if Azure DevOps didn't create the identity. For Azure identities, the issuer URL automatically updates.  


## Common issues and causes

<!-- ### I can't enable features for my organization

I want to set up workflow identity but I don't see the option to turn it on. 

#### Solution: Verify organization admins and enable features

1. Find your organization owners on the organization settings page `https://dev.azure.com/<org>/_settings/organizationOverview`. 
1. Make sure the preview feature Workload Identity federation for ARM service connections is enabled for your organization, see [manage or enable features](../../project/navigation/preview-features.md). 
 -->

### I don't have permission to create a service principal in the Azure Entra ID tenant

You can't use the service connection configuration tool when you don't have the correct permissions. Your permission level is inadequate if you don't have permission to create service principals or you're using a different Azure Entra ID tenant than your Azure DevOps user. 

You need to either have permission in Microsoft Entra ID to create app registrations or you need to have an appropriate role (example: Application Developer).

You have two options:

* [Solution 1: Manually configure workflow identity with managed identity](configure-workflow-identity.md#workflow-identity-with-managed-identity)
* [Solution 2: Manually configure workflow identity with a service principal](configure-workflow-identity.md#workflow-identity-with-a-service-principal)

## Error messages

| Message | Plausible issue |
|---------|-----------------|
| *cannot request token: Get `?audience=api://AzureADTokenExchange: unsupported protocol scheme`* | Task doesn't support workload identity federation. |
| *Identity not found* | Task doesn't support workload identity federation. |
| *Could not fetch access token for Azure* | Task doesn't support workload identity federation. |
| \<Task\> *only support(s) service principal authorization* | Task doesn't support workload identity federation. |
| *AADSTS70021: No matching federated identity record found for presented assertion. Assertion Issuer: `https://app.vstoken.visualstudio.com`.* | The issuer URL isn't correct. The correct issuer URL is `https://vstoken.dev.azure.com/XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX`. You can fix the issuer URL by editing and resaving a service connection. You need to manually update the issuer if Azure DevOps didn't create your identity. You can find the correct issuer in the edit dialog of the service connection, or in the response (under authorization parameters) when using the REST API. |
| *AADSTS70021: No matching federated identity record found for presented assertion. Assertion Issuer:  `https://vstoken.dev.azure.com/XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX`. Assertion Subject: `sc://\<org\>/\<project\>/\<service-connection\>.`* | Either the issuer url or federation subject doesn't match. The Azure DevOps organization or project has been renamed, or a manually created service connection was renamed without updating the federation subject on the identity. |
| *AADSTS700223* | Workload identity federation has been disabled on the Microsoft Entra ID tenant. |
| *AADSTS700024: Client assertion is not within its valid time range* | You're using the AzureCLI task with `addSpnToEnvironment: true` to consume the `idToken` environment variable. The `idToken` has expired after 10 minutes. |
