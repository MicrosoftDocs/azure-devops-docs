---
title: Troubleshoot workload identity service connections
ms.custom: devx-track-arm-template, arm2024
description: Learn how to troubleshoot an Azure Resource Manager workload identity service connection in Azure Pipelines, one of the services in Azure DevOps.
ms.topic: troubleshooting-general
ms.author: jukullam
author: juliakm
ms.date: 03/12/2025
monikerRange: '>= azure-devops'
"recommendations": "true"
---


# Troubleshoot an Azure Resource Manager workload identity service connection

Get help debugging common issues with workload identity service connections. You also learn how to manually create a service connection if you need to.

## Troubleshooting checklist

Use the following checklist to troubleshoot issues with workload identity service connections:

- Review pipeline tasks to ensure that they support workload identity.
- Verify that workload identity federation is active for the tenant.
- Check the issuer URL and federation subject identifier for accuracy.

The following sections describe the issues and how to resolve them.

### Review pipeline tasks

Almost all pipelines tasks that authenticate with Microsoft Entra support workload identity. The table below lists workload identity federation support for [tasks included with Azure DevOps](/azure/devops/pipelines/tasks/reference/?view=azure-pipelines&preserve-view=true). For tasks installed from the [Marketplace](https://marketplace.visualstudio.com/search?target=AzureDevOps&category=Azure%20Pipelines&visibilityQuery=all&sortBy=Installs), contact the extension publisher for support.

| Task                                     | Workload identity federation support                                                                                            |
|------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| AutomatedAnalysis@0                      | Y |
| AzureAppServiceManage@0                  | Y |
| AzureAppServiceSettings@1                | Y |
| AzureCLI@1                               | Y |
| AzureCLI@2                               | Y |
| AzureCloudPowerShellDeployment@1         | Use AzureCloudPowerShellDeployment@2 |
| AzureCloudPowerShellDeployment@2         | Y |
| AzureContainerApps@0                     | Y |
| AzureContainerApps@1                     | Y |
| AzureFileCopy@1                          | Use AzureFileCopy@6 |
| AzureFileCopy@2                          | Use AzureFileCopy@6 |
| AzureFileCopy@3                          | Use AzureFileCopy@6 |
| AzureFileCopy@4                          | Use AzureFileCopy@6 |
| AzureFileCopy@5                          | Use AzureFileCopy@6 |
| AzureFileCopy@6                          | Y |
| AzureFunctionApp@1                       | Y |
| AzureFunctionApp@2                       | Y |
| AzureFunctionAppContainer@1              | Y |
| AzureFunctionOnKubernetes@0              | Use AzureFunctionOnKubernetes@1 |
| AzureFunctionOnKubernetes@1              | Y |
| AzureIoTEdge@2                           | Y |
| AzureKeyVault@1                          | Y |
| AzureKeyVault@2                          | Y |
| AzureMonitor@0                           | Use AzureMonitor@1 |
| AzureMonitor@1                           | Y |
| AzureMysqlDeployment@1                   | Y |
| AzureNLBManagement@1                     | N |
| AzurePolicyCheckGate@0                   | Y |
| AzurePowerShell@2                        | Y |
| AzurePowerShell@3                        | Y |
| AzurePowerShell@4                        | Y |
| AzurePowerShell@5                        | Y |
| AzureResourceGroupDeployment@2           | Y |
| AzureResourceManagerTemplateDeployment@3 | Y |
| AzureRmWebAppDeployment@3                | Y |
| AzureRmWebAppDeployment@4                | Y |
| AzureSpringCloud@0                       | Y |
| AzureVmssDeployment@0                    | Y |
| AzureWebApp@1                            | Y |
| AzureWebAppContainer@1                   | Y |
| ContainerBuild@0                         | Y |
| ContainerStructureTest@0                 | Y |
| Docker@0                                 | Y |
| Docker@1                                 | Azure service connection: Y<br/> Docker Registry service connection: N |
| Docker@2                                 | Y |
| DockerCompose@0                          | Y |
| DockerCompose@1                          | Y |
| DotNetCoreCLI@2                          | Y |
| HelmDeploy@0                             | Azure service connection: Y |
| HelmDeploy@1                             | Azure service connection: Y |
| InvokeRESTAPI@1                          | Y |
| JavaToolInstaller@0                      | Y |
| JenkinsDownloadArtifacts@1               | Y |
| Kubernetes@0                             | Use Kubernetes@1  |
| Kubernetes@1                             | Y |
| KubernetesManifest@0                     | Use KubernetesManifest@1 |
| KubernetesManifest@1                     | Y |
| Maven@4                                  | Y |
| Notation@0                               | Y |
| PackerBuild@0                            | Use PackerBuild@1 |
| PackerBuild@1                            | Y |
| PublishToAzureServiceBus@1               | Use PublishToAzureServiceBus@2 with Azure service connection |
| PublishToAzureServiceBus@2               | Y |
| ServiceFabricComposeDeploy@0             | N |
| ServiceFabricDeploy@1                    | N |
| SqlAzureDacpacDeployment@1               | Y |
| VSTest@3                                 | Y |

### Verify that workload identity federation is active

If you see error messages **AADSTS700223** or **AADSTS700238**, workload identity federation was disabled in your Microsoft Entra tenant.

Verify that there are no Microsoft Entra policies in place that block federated credentials.

### Check the issuer URL for accuracy

If you see a message that indicates **no matching federated identity record found**, either the issuer URL or the federation subject doesn't match. For new service connections, the correct issuer URL starts with `https://login.microsoftonline.com`:

| &nbsp;  | Azure DevOps issuer                                                 | Microsoft Entra issuer (new service connections)                        |
|---------|---------------------------------------------------------------------|-------------------------------------------------------------------------|
| Issuer  | `https://vstoken.dev.azure.com/<organization id>`                   | `https://login.microsoftonline.com/<microsoft entra tenant id>/v2.0`    |
| Subject | `sc://<organization name>/<project name>/<service connection name>` | `<microsoft entra prefix>/sc/<organization id>/<service connection id>` |

You can fix the issuer URL by editing and saving the service connection to update the issuer URL. If Azure DevOps didn't create the identity, the issuer URL must be updated manually. For Azure identities, the issuer URL automatically updates.  

## Common issues

The next sections identify common issues and describe causes and resolutions.

<a name='i-dont-have-permissions-to-create-a-service-principal-in-the-microsoft-entra-tenant'></a>

### I don't have permissions to create a service principal in the Microsoft Entra tenant

You can't use the Azure DevOps service connection configuration tool if you don't have the correct permissions. Your permissions level is insufficient to use the tool if you either don't have permissions to create service principals or if you're using a different Microsoft Entra tenant than your Azure DevOps user.

You must either have permissions in Microsoft Entra ID to create app registrations or have an appropriate role (for example, Application Developer).

You have two options to resolve the issue:

- [Solution 1: Manually configure workload identity by using managed identity authentication](configure-workload-identity.md#set-a-workload-identity-service-connection-to-use-managed-identity-authentication)
- [Solution 2: Manually configure workload identity by using app registration authentication](configure-workload-identity.md#app-registration-workload-identity)

### How do I create a workload identity federation service connection in automation? 

Workload identity federation defines a bidirectional relationship between the identity and service connection. As a result, objects need to be created in a certain order and the federated credential can only be created after the service connection is created. To learn how to automate creating workload identity service connections, go to [Use scripts to automate Azure Resource Manager with workload identity service connections](automate-service-connections.md). 

## Error messages

The following table identifies common error messages and issues that might generate them:

| Message | Possible issue |
|---------|-----------------|
| **cannot request token: Get `?audience=api://AzureADTokenExchange: unsupported protocol scheme`** | The task doesn't support workload identity federation. |
| **Identity not found** | The task doesn't support workload identity federation. |
| **Could not fetch access token for Azure** | The task doesn't support workload identity federation. |
| **Failed to obtain the JSON Web Token (JWT) using service principal client ID** | Your federation identity credentials are misconfigured or the Microsoft Entra tenant blocks OpenID Connect (OIDC). |
| **Script failed with error: UnrecognizedArgumentError: unrecognized arguments: --federated-token** | You're using an AzureCLI task on an agent that has an earlier version of the Azure CLI installed. Workload identity federation requires Azure CLI 2.30 or later. |
| **Failed to create an app in Microsoft Entra ID. Error: Insufficient privileges to complete the operation in Microsoft Graph. Ensure that the user has permissions to create a Microsoft Entra Application.** | The ability to create app registrations was [disabled](/azure/active-directory/roles/delegate-app-roles#restrict-who-can-create-applications) in the Microsoft Entra tenant. Assign the user who is creating the service connection the [Application Developer](/azure/active-directory/roles/permissions-reference#application-developer) Microsoft Entra role. Alternatively, create the service connection manually by using a managed identity. For more information, see [Workload identity with managed identity](https://aka.ms/azdo-rm-workload-identity-manual). |

### Microsoft Entra ID error codes

[!INCLUDE [aadsts-errors-workload-identity](includes/aadsts-errors-workload-identity.md)]
