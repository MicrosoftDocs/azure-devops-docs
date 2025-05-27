---
title: Use scripts to automate Azure Resource Manager with workload identity service connections
description: Learn how to use automation to create a service connection in Azure Pipelines with workload identity.
ms.topic: how-to
ms.author: jukullam
author: juliakm
ms.date: 05/16/2025
monikerRange: '= azure-devops'
"recommendations": "true"
ai-usage: ai-assisted
---

# Use scripts to automate Azure Resource Manager with workload identity service connections

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Learn how to use scripts to create Azure Resource Manager service connections with workload identity in Azure Pipelines. Scripts ensure consistency, efficiency, and repeatability when setting up service connections, reducing the risk of human error. They save time, especially when creating multiple connections or deploying to different environments. These scripts can also be integrated into an automation process to scale and better manage large deployments.

Using scripts as part of an automation process helps enforce security policies and compliance requirements by ensuring service connections use the correct permissions and configurations. It also serves as documentation for the setup process.

## Prerequisites

| **Product** | **Requirements**   |
|---|---|
| **Azure DevOps** | - An Azure DevOps organization and a project. Create an [organization](../../organizations/accounts/create-organization.md) or a [project](../../organizations/projects/create-project.md#create-a-project) if you haven't already.
| **Azure** | An [Azure subscription](https://azure.microsoft.com/free/).<br> **Permissions:**<br>      &nbsp;&nbsp;&nbsp;&nbsp; - To create a role assignment in Azure: you must have *User Access Administrator* or *Role Based Access Control Administrator* permissions, or higher. These roles allow you to manage access and assign roles necessary for creating identities. For more information, see [Azure built-in roles](/azure/role-based-access-control/built-in-roles).|
| **Entra** | **Permissions:**<br>      &nbsp;&nbsp;&nbsp;&nbsp; - To create an app registration in Microsoft Entra: [App registration delegation](/entra/identity/role-based-access-control/delegate-app-roles#restrict-who-can-create-applications) should be enabled or you should have the *Application Developer* role. For more information, see [Microsoft Entra built-in roles](/entra/identity/role-based-access-control/permissions-reference#application-developer).<br/>Instead of creating an app registration in Entra, you can also create a managed identity in Azure.|

## Process

### Constraints

- In automation, `"creationMode": "Manual"` should be used when creating service connections that need a Microsoft Entra identity. Significant Microsoft Entra privileges would be required to have Azure DevOps create all objects on behalf of the caller, therefore Azure DevOps doesn't support the use of `"creationMode": "Automatic"` for non-user principals. Instead, end-to-end automation should create each object (identity, service connection, credential, role assignment) individually.
- Workload identity federation defines a bi-directional relationship between the identity and service connection. As a result, objects need to be created in a certain order and the federated credential can only be created after the service connection is created. 

### Command execution order

This table provides an overview of the key properties exchanged between the creation commands of each object. Dependencies on output determine the order of execution.

| Step                                          | Input                  | Output                  |
|-----------------------------------------------|------------------------|-------------------------|
| Create identity in Microsoft Entra or Azure   | `tenantId`             | `appId`, `principalId`  |
| Create service connection in Azure DevOps     | `appId`                | `workloadIdentityFederationIssuer`, `workloadIdentityFederationSubject` |
| Create federated credential in Microsoft Entra or Azure | `appId`, `workloadIdentityFederationIssuer`, `workloadIdentityFederationSubject` | |
| Create role assignment in Azure               | `principalId`          |                         |

## 1. Sign in with Azure CLI

The following commands use the Azure CLI. Sign in to the intended tenant:

```azurecli
az login --tenant TENANT_ID
```

Learn more in [Authenticate to Azure using Azure CLI](/cli/azure/authenticate-azure-cli).

## 2. Create identity

Create an identity using managed identity or an app registration.

#### [Managed identity](#tab/managed-identity)

Create a managed identity with `az identity create`. 

```azurecli
az identity create --name MyIdentity --resource-group MyResourceGroup --query '{clientId:clientId,principalId:principalId}'
```

Example output:

```json
{
  "clientId": "00001111-aaaa-2222-bbbb-3333cccc4444",
  "principalId": "aaaaaaaa-bbbb-cccc-1111-222222222222"
}
```

A managed identity creates a service principal in Microsoft Entra. The object ID of the service principal is also called `principalId`. Use the service principal later to assign RBAC roles. The `appId` is used to create the service connection in Azure DevOps.

Learn more in [az identity create](/cli/azure/identity#az-identity-create).

#### [App registration](#tab/app-registration)

Create an app registration using `az ad sp create-for-rbac`. 

```azurecli
az ad sp show --id $(az ad sp create-for-rbac -n appreg-for-rbac --create-password false -o tsv --query appId) --query '{appId:appId,principalId:id}'
```

Example output:

```json
{
  "appId": "00001111-aaaa-2222-bbbb-3333cccc4444",
  "principalId": "aaaaaaaa-bbbb-cccc-1111-222222222222"
}
```

This command creates an app and a service principal in Microsoft Entra and retrieves its `appId` and `principalId`. The object ID of the service principal is also called `principalId`. You'll use the service principal later to assign RBAC roles. The `appId` is used to create the service connection in Azure DevOps. The `--create-password false` flag ensures no password is created for the service principal.

For more information, see [az ad sp create-for-rbac](/cli/azure/ad/sp#az-ad-sp-create-for-rbac).

---

## 3. Create a service connection

This example uses the [Azure DevOps Azure CLI extension](/azure/devops/cli) and a configuration file to create the service connection. This configures the identity created in a new Azure service connection. The `servicePrincipalId` authorization parameter is populated with the `appId` of the identity.

You'll need an `appId` to use as input. 

The first code snippet is a configuration file, `ServiceConnectionGeneric.json`.  

> [!div class="tabbedCodeSnippets"]
```json	
{
  "data": {
    "subscriptionId": "SUBSCRIPTION_ID",
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
      "tenantid": "TENANT_ID",
      "serviceprincipalid": "APP_ID"
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

`az devops service-endpoint create` automates creating a service connection in Azure DevOps using `ServiceConnectionGeneric.json`. The output includes authorization parameters you'll use in future steps. 

Example output:

```json
{
  "serviceprincipalid": "00001111-aaaa-2222-bbbb-3333cccc4444",
  "tenantid": "aaaabbbb-0000-cccc-1111-dddd2222eeee",
  "workloadIdentityFederationIssuer": "https://login.microsoftonline.com/aaaabbbb-0000-cccc-1111-dddd2222eeee/v2.0",
  "workloadIdentityFederationIssuerType": "EntraID",
  "workloadIdentityFederationSubject": "<federation-subject>"
}
```

For more information about this command, see [Azure DevOps CLI service endpoint](/azure/devops/cli/service-endpoint).

## 4. Create a federated identity credential

Create a federated credential using the `workloadIdentityFederationIssuer` and `workloadIdentityFederationSubject` output from the __Create a service connection__ step. 

#### [Managed identity](#tab/managed-identity)

```azurecli
az identity federated-credential create --name fic-for-sc 
                                        --identity-name MyIdentity  
                                        --resource-group MyResourceGroup 
                                        --issuer "https://login.microsoftonline.com/TENANT_ID/v2.0" 
                                        --subject "<federation-subject>" 
                                        --subscription MSI_SUBSCRIPTION_ID
```

`az identity federated-credential create` links a federated identity credential to a managed identity, enabling the managed identity to authenticate with  Microsoft Entra ID using the provided subject claim.

> [!TIP]
> Add a line continuation character (Bash: backslash, PowerShell: backquote) at the end of any lines that don't complete the command.

The managed identity doesn't have to be created in the same subscription that it's  granted to access in the [Create role assignment step](#5-create-role-assignment). 

For more information about this command, see [az identity federated-credential create](/cli/azure/identity/federated-credential#az-identity-federated-credential-create).

#### [App registration](#tab/app-registration)

```json	
{
  "name": "fic-for-sc",
  "issuer": "https://login.microsoftonline.com/TENANT_ID/v2.0",
  "subject": "<federation-subject>",
  "audiences": [
    "api://AzureADTokenExchange"
  ]
}
```

```azurecli
az ad app federated-credential create --id APP_ID --parameters credential.json
```

`az ad app federated-credential create` links a federated identity credential to an app registration, enabling the application to authenticate with the specified identity provider using the details in the `credential.json` file. 

For more information about this command, see [az ad app federated-credential create](/cli/azure/ad/app/federated-credential#az-ad-app-federated-credential-create).

---

## 5. Create role assignment

Add a role assignment to your managed identity or app registration with `az role assignment create`. For available roles, see [Azure built-in roles](/azure/role-based-access-control/built-in-roles). The assignee of the role is the service principal associated with the app registration or managed identity. A service principal is identified by its ID, also called `principalId`. The `principalId` is in the output of the __Create identity__ command.

```azurecli
az role assignment create --role Contributor --scope /subscriptions/SUBSCRIPTION_ID --assignee-object-id PRINCIPAL_ID --assignee-principal-type ServicePrincipal
```

`az role assignment create --role Contributor` command assigns the Contributor role to a service principal at the subscription level. This allows the service principal to manage resources within the specified subscription. 

For more information on this command, see [az role assignment create](/cli/azure/role/assignment#az-role-assignment-create).