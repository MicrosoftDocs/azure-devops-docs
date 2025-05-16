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

- In automation, `"creationMode": "Manual"` should be used when creating service connections that need an Microsoft Entra identity. Significant Microsoft Entra privileges are required to have Azure DevOps create all objects on behalf of the caller. Instead, end-to-end automation should create each object (identity, service connection, credential, role assignment) individually.
- Workload identity federation defines a bi-directional relationship between the identity and service connection. As a result, objects need to be created in a certain order and the federated credential can only be created after the service connection is created. 

### Overview

This table provides an overview of the key properties exchanged between the creation commands.

| Step                        | Input                  | Output                  |
|-----------------------------|------------------------|-------------------------|
| Create identity             | `tenantId`             | `appId`, `principalId`  |
| Create service connection   | `appId`                | `workloadIdentityFederationIssuer`, `workloadIdentityFederationSubject` |
| Create federated credential | `appId`, `workloadIdentityFederationIssuer`, `workloadIdentityFederationSubject` | |
| Create role assignment      | `principalId`          |                         |

## Create identity
You need either an app registration or a managed identity.

#### [Managed identity](#tab/managed-identity)

Create a managed identity with `az identity create`. 

```azurecli
az identity create -n msi-for-sc -g rg-for-sc -o json --query '{appId:clientId,principalId:principalId}'
{
  "appId": "aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa",
  "principalId": "00000000-0000-0000-0000-000000000000"
}
```

A managed identity creates a service principal in Microsoft Entra. The object id of the service principal is also called `principalId`. This is needed later when assigning RBAC roles. The `appId` is used when creating the service connection in Azure DevOps.

For more information, see [az identity create](/cli/azure/identity?view=azure-cli-latest#az-identity-create).

#### [App registration](#tab/app-registration)

Create an app registration with `az ad sp create-for-rbac`. 

```azurecli
az ad sp show --id $(az ad sp create-for-rbac -n appreg-for-rbac --create-password false -o tsv --query appId) --query '{appId:appId,principalId:id}'
{
  "appId": "aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa",
  "principalId": "00000000-0000-0000-0000-000000000000"
}
```

This command creates an app and service principal in Microsoft Entra. The object ID of the service principal is also called `principalId`. This is needed later when assigning RBAC roles. The `appId` is used when creating the service connection in Azure DevOps.

For more information, see [az ad sp create-for-rbac](/cli/azure/ad/sp?view=azure-cli-latest#az-ad-sp-create-for-rbac).

---

## Create a service connection

This example uses a configuration file to create the service connection. This configures the identity created in a new Azure service connection. The `servicePrincipalId` authorization parameter is populated with the `appId` of the identity.

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
az devops service-endpoint create -service-endpoint-configuration ./ServiceConnectionGeneric.json
{
  "administratorsGroup": null,
  "authorization": {
    "parameters": {
      "serviceprincipalid": "aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa",
      "tenantid": "eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee",
      "workloadIdentityFederationIssuer": "https://login.microsoftonline.com/eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee/v2.0",
      "workloadIdentityFederationSubject": "<federation-subject>"
    },
    "scheme": "WorkloadIdentityFederation"
  },
  ...
}
```

For more information about this command, see [Azure DevOps CLI service endpoint](../../cli/service-endpoint.md).

## Create a federated identity credential

#### [Managed identity](#tab/managed-identity)

```azurecli
az identity federated-credential create --name fic-for-sc 
                                        --identity-name msi-for-sc  
                                        --resource-group rg-for-sc 
                                        --issuer "https://login.microsoftonline.com/eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee/v2.0" 
                                        --subject "<federation-subject>" 
                                        --subscription <msi-subscription-id>
```

For more information about this command, see [az identity federated-credential create](/cli/azure/identity/federated-credential?view=azure-cli-latest#az-identity-federated-credential-create).

#### [App registration](#tab/app-registration)

```azurecli
az ad app federated-credential create --id xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx --parameters credential.json
("credential.json" contains the following content)
{
    "name": "fic-for-sc",
    "issuer": "https://login.microsoftonline.com/eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee/v2.0",
    "subject": "<federation-subject>",
    "audiences": [
        "api://AzureADTokenExchange"
    ]
}
```

For more information about this command, see [az ad app federated-credential create](/cli/azure/ad/app/federated-credential?view=azure-cli-latest#az-ad-app-federated-credential-create).

---

## Create role assignment

Add a role assignment to your managed identity or app registration with `az role assignment create`. For available roles, see [Azure built-in roles](/azure/role-based-access-control/built-in-roles). The assignee of the role is the service principal associated with the app registration or managed identity. A service principal is identified by its ID, also called `principalId`. The `principalId` is in the output of the command that created the identity above.

```azurecli
az role assignment create --role Contributor --scope /subscriptions/11111111-1111-1111-1111-111111111111 --assignee-object-id 00000000-0000-0000-0000-000000000000 --assignee-principal-type ServicePrincipal
{
  ...
  "principalId": "00000000-0000-0000-0000-000000000000",
  "principalType": "ServicePrincipal",
  ...
  "scope": "/subscriptions/11111111-1111-1111-1111-111111111111",
  "type": "Microsoft.Authorization/roleAssignments",
  ...
}
```

For more information on this command, see [az role assignment create](/cli/azure/role/assignment?view=azure-cli-latest#az-role-assignment-create).