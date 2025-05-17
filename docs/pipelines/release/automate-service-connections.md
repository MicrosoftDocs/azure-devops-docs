---
title: Automate Azure Resource Manager with workload identity service connections
description: Learn how to use automation to create a service connection in Azure Pipelines with workload identity.
ms.topic: conceptual
ms.author: jukullam
author: juliakm
ms.date: 05/16/2025
monikerRange: '>= azure-devops'
"recommendations": "true"
ai-usage: ai-assisted
---

# Automate Azure Resource Manager with workload identity service connections

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Use automation to create Azure Resource Manager service connections with workload identity for consistency, efficiency, repeatability, and scalability in your Azure DevOps projects. Scripts guarantee that service connections are configured the same way every time, reduce the risk of human error, and save time, especially when you set up multiple connections or deploy to different environments. Automation also lets you scale so you can better manage large deployments.

Automation also helps enforce security policies and compliance requirements by making sure service connections use the right permissions and configurations. It also serves as documentation for the setup process.

## Process

### Constraints

- In automation, `"creationMode": "Manual"` should be used when creating service connections that need an Microsoft Entra identity. Significant Microsoft Entra privileges would be required to have Azure DevOps create all objects on behalf of the caller, therefore Azure DevOps does not support the use of `"creationMode": "Automatic"` for non-user principals. Instead, end-to-end automation should create each object (identity, service connection, credential, role assignment) individually.
- Workload identity federation defines a bi-directional relationship between the identity and service connection. As a result, objects need to be created in a certain order and the federated credential can only be created after the service connection is created. 

### Command execution order

This table provides an overview of the key properties exchanged between the creation commands of each object. Dependencies on output determine the order of execution.

| Step                                          | Input                  | Output                  |
|-----------------------------------------------|------------------------|-------------------------|
| Create identity in Entra or Azure             | `tenantId`             | `appId`, `principalId`  |
| Create service connection in Azure DevOps     | `appId`                | `workloadIdentityFederationIssuer`, `workloadIdentityFederationSubject` |
| Create federated credential in Entra or Azure | `appId`, `workloadIdentityFederationIssuer`, `workloadIdentityFederationSubject` | |
| Create role assignment in Azure               | `principalId`          |                         |

## Login with Azure CLI

The creation commands below all make use of the Azure CLI. You can log into the intended tenant using the following command:

```azurecli
az login -t eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee
```

See [Authenticate to Azure using Azure CLI](/cli/azure/authenticate-azure-cli).

## Create identity

You need either an app registration or a managed identity.

#### [Managed identity](#tab/managed-identity)

Create a managed identity with `az identity create`. 

```azurecli
az identity create -n msi-for-sc -g rg-for-sc --query '{appId:clientId,principalId:principalId}'
```

Example output:

```json
{
  "appId": "aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa",
  "principalId": "00000000-0000-0000-0000-000000000000"
}
```

A managed identity creates a service principal in Microsoft Entra. The object id of the service principal is also called `principalId`. This is needed later when assigning RBAC roles. The `appId` is used when creating the service connection in Azure DevOps.

For more information, see [az identity create](/cli/azure/identity#az-identity-create).

#### [App registration](#tab/app-registration)

Create an app registration with `az ad sp create-for-rbac`. 

```azurecli
az ad sp show --id $(az ad sp create-for-rbac -n appreg-for-rbac --create-password false -o tsv --query appId) --query '{appId:appId,principalId:id}'
```

Example output:

```json
{
  "appId": "aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa",
  "principalId": "00000000-0000-0000-0000-000000000000"
}
```

This command creates an app and service principal in Microsoft Entra. The object ID of the service principal is also called `principalId`. This is needed later when assigning RBAC roles. The `appId` is used when creating the service connection in Azure DevOps.

For more information, see [az ad sp create-for-rbac](/cli/azure/ad/sp#az-ad-sp-create-for-rbac).

---

## Create a service connection

This example uses the [Azure DevOps Azure CLI extension](/azure/devops/cli) and a configuration file to create the service connection. This configures the identity created in a new Azure service connection. The `servicePrincipalId` authorization parameter is populated with the `appId` of the identity.

> [!div class="tabbedCodeSnippets"]
```json	
{
  "data": {
    "subscriptionId": "11111111-1111-1111-1111-111111111111",
    "subscriptionName": "My Azure Subscription",
    "environment": "AzureCloud",
    "scopeLevel": "Subscription",
    "creationMode": "Manual"
  },
  "name": "MyNewServiceEndpoint",
  "type": "AzureRM",
  "url": "https://management.azure.com/",
  "authorization": {
    "parameters": {
      "tenantid": "eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee",
      "serviceprincipalid": "aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa"
    },
    "scheme": "WorkloadIdentityFederation"
  },
  "isShared": false,
  "isReady": true,
  "serviceEndpointProjectReferences": [
    {
      "projectReference": {
        "id": "c7e5f0b3-71fa-4429-9fb3-3321963a7c06",
        "name": "TestProject"
      },
      "name": "MyNewServiceEndpoint"
    }
  ]
}
```

```azurecli
az devops service-endpoint create -service-endpoint-configuration ./ServiceConnectionGeneric.json --query authorization.parameters
```

Example output:

```json
{
  "serviceprincipalid": "aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa",
  "tenantid": "eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee",
  "workloadIdentityFederationIssuer": "https://login.microsoftonline.com/eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee/v2.0",
  "workloadIdentityFederationIssuerType": "EntraID",
  "workloadIdentityFederationSubject": "<federation-subject>"
}
```

For more information about this command, see [Azure DevOps CLI service endpoint](/azure/devops/cli/service-endpoint.md).

## Create a federated identity credential

This creates a federated credential with the `workloadIdentityFederationIssuer` and `workloadIdentityFederationSubject` output from the __Create a service connection__ step

#### [Managed identity](#tab/managed-identity)

```azurecli
az identity federated-credential create --name fic-for-sc 
                                        --identity-name msi-for-sc  
                                        --resource-group rg-for-sc 
                                        --issuer "https://login.microsoftonline.com/eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee/v2.0" 
                                        --subject "<federation-subject>" 
                                        --subscription <msi-subscription-id>
```

Note: add a line continuation character (Bash: backslash, PowerShell: backquote) at the end of a line that does not complete the command.

The managed identity does not have to be created in the same subscription that it will be granted access to in the __Create role assignment__ step. 

For more information about this command, see [az identity federated-credential create](/cli/azure/identity/federated-credential#az-identity-federated-credential-create).

#### [App registration](#tab/app-registration)

```json	
{
  "name": "fic-for-sc",
  "issuer": "https://login.microsoftonline.com/eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee/v2.0",
  "subject": "<federation-subject>",
  "audiences": [
    "api://AzureADTokenExchange"
  ]
}
```

```azurecli
az ad app federated-credential create --id aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa --parameters credential.json
```

For more information about this command, see [az ad app federated-credential create](/cli/azure/ad/app/federated-credential#az-ad-app-federated-credential-create).

---

## Create role assignment

Add a role assignment to your managed identity or app registration with `az role assignment create`. For available roles, see [Azure built-in roles](/azure/role-based-access-control/built-in-roles). The assignee of the role is the service principal associated with the app registration or managed identity. A service principal is identified by its ID, also called `principalId`. The `principalId` is in the output of the __Create identity__ command above.

```azurecli
az role assignment create --role Contributor --scope /subscriptions/11111111-1111-1111-1111-111111111111 --assignee-object-id 00000000-0000-0000-0000-000000000000 --assignee-principal-type ServicePrincipal
```

For more information on this command, see [az role assignment create](/cli/azure/role/assignment#az-role-assignment-create).