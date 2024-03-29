---
title: Troubleshoot workload identity service connections
ms.custom: devx-track-arm-template, arm2024
description: Learn how to troubleshoot an Azure Resource Manager workload identity service connection in Azure Pipelines, one of the services in Azure DevOps.
ms.topic: troubleshooting-general
ms.author: jukullam
author: juliakm
ms.date: 02/08/2024
monikerRange: '>= azure-devops'
"recommendations": "true"
---


# Troubleshoot an Azure Resource Manager workload identity service connection

Get help debugging common issues with workload identity service connections. You also learn how to manually create a service connection if you need to.

## Troubleshooting checklist

Use the following checklist to troubleshoot issues with workload identity service connections:

- Review pipeline tasks to ensure that they support workload identity.
- Verify that workload identity federation is active for the tenant.
- Check the issuer URL and federation subject for accuracy.

The following sections describe the issues and how to resolve them.

### Review pipeline tasks

Not all pipelines tasks support workload identity. During the preview, no Azure Marketplace tasks support workload identity service connections.

The following tasks currently don't support workload identity federation:

- AzureCloudPowerShellDeploymentV1
- AzCopy (AzureFileCopyV1, AzureFileCopyV2, AzureFileCopyV3, AzureFileCopyV4, AzureFileCopyV5)
- AzureMonitorAlertsV0
- AzureNLBManagementV1
- PackerBuild (PackerBuildV0, PackerBuildV1)
- ServiceFabricComposeDeployV0
- ServiceFabricDeployV1

### Verify that workload identity federation is active

If you see error messages **AADSTS700223** or **AADSTS700238**, workload identity federation was disabled in your Microsoft Entra tenant.

Verify that there are no Microsoft Entra policies in place that block federated credentials.

### Check the issuer URL for accuracy

If you see a message that indicates **no matching federated identity record found**, either the issuer URL or the federation subject doesn't match. The correct issuer URL starts with `https://vstoken.dev.azure.com`.

You can fix the issuer URL by editing and saving the service connection to update the issuer URL. If Azure DevOps didn't create the identity, the issuer URL must be updated manually. For Azure identities, the issuer URL automatically updates.  

## Common issues

The next sections identify common issues and describe causes and resolutions.

<a name='i-dont-have-permissions-to-create-a-service-principal-in-the-micrososft-entra-tenant'></a>

### I don't have permissions to create a service principal in the Microsoft Entra tenant

You can't use the Azure DevOps service connection configuration tool if you don't have the correct permissions. Your permissions level is insufficient to use the tool if you either don't have permissions to create service principals or if you're using a different Microsoft Entra tenant than your Azure DevOps user.

You must either have permissions in Microsoft Entra ID to create app registrations or have an appropriate role (for example, Application Developer).

You have two options to resolve the issue:

- [Solution 1: Manually configure workload identity by using managed identity authentication](configure-workload-identity.md#set-a-workload-identity-service-connection-to-use-managed-identity-authentication)
- [Solution 2: Manually configure workload identity by using service principal authentication](configure-workload-identity.md#set-a-workload-identity-service-connection-to-use-service-principal-authentication)

### I use a container resource that specifies an instance of Azure Container Registry

[Container resources](/azure/devops/pipelines/process/resources?view#define-a-containers-resource) that are pulled from Azure Container Registry don't support a workload identity federation service connection that's specified in `azureSubscription`.

## Error messages

The following table identifies common error messages and issues that might generate them:

| Message | Possible issue |
|---------|-----------------|
| **cannot request token: Get `?audience=api://AzureADTokenExchange: unsupported protocol scheme`** | The task doesn't support workload identity federation. |
| **Identity not found** | The task doesn't support workload identity federation. |
| **Could not fetch access token for Azure** | The task doesn't support workload identity federation. |
| **AADSTS700016: Application with identifier '****' wasn't found** | The identity that is used for the service connection no longer exists or it might have been removed from the service connection. In this scenario, create a new service connection. |
| **AADSTS7000215:  Invalid client secret provided.** | You're using a service connection that has an expired secret. [Convert the service connection to workload identity federation](https://aka.ms/azdo-rm-workload-identity-conversion) and replace the expired secret with federated credentials. |
| **AADSTS700024: Client assertion is not within its valid time range** | This error might occur in the following cases:<br />- You're using an AzureCLI task with `addSpnToEnvironment` set to `true` to consume the `idToken` environment variable. The `idToken` environment variable expires after 10 minutes.<br />- Some Azure data plane (non-Azure Resource Manager) operations require a separate bearer token to authenticate. You request a bearer token in the Azure CLI by using `az account get-access-token` or in Azure PowerShell by using Get-AzAccessToken. These tokens have a lifetime of one hour. Using the token after one hour results in an `AADSTS700024` error. Some tools and SDKs (for example, [Azure GO SDK](https://github.com/Azure/azure-sdk-for-go) and [Azure Python SDK](/azure/developer/python/sdk/azure-sdk-overview)) use the Azure CLI and `az account get-access-token` indirectly to obtain a bearer token. If you have tasks that (directly or indirectly) obtain a bearer token and run longer than one hour, use a service connection with a secret instead. |
| **AADSTS70021: No matching federated identity record found for presented assertion. Assertion Issuer: `https://app.vstoken.visualstudio.com`.** | The issuer URL isn't correct. The correct issuer URL has the format `https://vstoken.dev.azure.com/XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX`. You can fix the issuer URL by editing and then saving a service connection. If Azure DevOps didn't create your identity, you must manually update the issuer. You can find the correct issuer in the edit dialog of the service connection or in the response (under authorization parameters) if you use the REST API. |
| **AADSTS70021: No matching federated identity record found for presented assertion. Assertion Issuer:  `https://vstoken.dev.azure.com/XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX`. Assertion Subject: `sc://<org>/<project>/<service-connection>.`** | Either the issuer URL or the federation subject doesn't match. The Azure DevOps organization or project was renamed or a manually created service connection was renamed without updating the federation subject on the identity. |
| **AADSTS700211: No matching federated identity record found for presented assertion issuer** | Either the issuer URL, the federation subject, or both are rejected by a Microsoft Entra policy. |
| **AADSTS700223** | Workload identity federation is constrained or disabled on the Microsoft Entra tenant. In this scenario, often it's possible to use a managed identity for the federation instead. For more information, see [Workload identity with managed identity](https://aka.ms/azdo-rm-workload-identity-manual). |
| **Microsoft Entra rejected the token issued by Azure DevOps with error code AADSTS700238** | Workload identity federation has been constrained on the Microsoft Entra tenant. The issuer for your organization (`https://vstoken.dev.azure.com/XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX`) isn't allowed to use workload identity federation. Ask your Microsoft Entra tenant administrator or administration team to allow workload identity federation for your Azure DevOps organization. |
| **Failed to obtain the JSON Web Token (JWT) using service principal client ID** | Your federation identity credentials are misconfigured or the Microsoft Entra tenant blocks OpenID Connect (OIDC). |
| **Script failed with error: UnrecognizedArgumentError: unrecognized arguments: --federated-token** | You're using an AzureCLI task on an agent that has an earlier version of the Azure CLI installed. Workload identity federation requires Azure CLI 2.30 or later. |
| **Failed to create an app in Microsoft Entra ID. Error: Insufficient privileges to complete the operation in Microsoft Graph. Ensure that the user has permissions to create a Microsoft Entra Application.** | The ability to create app registrations was [disabled](/azure/active-directory/roles/delegate-app-roles#restrict-who-can-create-applications) in the Microsoft Entra tenant. Assign the user who is creating the service connection the [Application Developer](/azure/active-directory/roles/permissions-reference#application-developer) Microsoft Entra role. Alternatively, create the service connection manually by using a managed identity. For more information, see [Workload identity with managed identity](https://aka.ms/azdo-rm-workload-identity-manual). |
