---
title: Automate Azure Resource Manager with workload identity service connections
description: Learn how to use automation to create a service connection in Azure Pipelines with workload identity.
ms.topic: conceptual
ms.author: jukullam
author: juliakm
ms.date: 12/06/2024
monikerRange: '>= azure-devops'
"recommendations": "true"
ai-usage: ai-assisted
---

# Automate Azure Resource Manager with workload identity service connections

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Use automation to create Azure Resource Manager service connections with workload identity for consistency, efficiency, repeatability, and scalability in your Azure DevOps projects. By using scripts, you can guarantee that service connections are configured the same way every time, reducing the risk of human error and saving valuable time, especially when setting up multiple connections or deploying to different environments. Automation also allows for easy scaling, making it simpler to manage large-scale deployments.

Automation also helps enforce security policies and compliance requirements by making sure that service connections are created with the necessary permissions and configurations, while also serving as documentation for the setup process.

To automate the creation of a service connection that uses workload identity federation, you need to create objects in a specific order. Specifically, the federated credential can only be created after the service connection has been created. 

## Create identity

You need either an app registration or a managed service identity.


#### [Managed identity](#tab/managed-identity)

Create a managed identity with `az identity create`. 

```sh
az identity create -n msi-for-sc -g rg-for-sc -o json --query '{appId:clientId,principalId:principalId}'
{
  "appId": "aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa",
  "principalId": "00000000-0000-0000-0000-000000000000"
}
```

A managed identity creates a service principal in Entra under the good. The object id of the service principal is also called `principalId`. This is needed later when assigned RBAC roles.

#### [App registration](#tab/app-registration)

Create an app registration with `az ad sp create-for-rbac`. 

```sh
az ad sp show --id $(az ad sp create-for-rbac -n appreg-for-rbac --create-password false -o tsv --query appId) --query '{appId:appId,principalId:id}'
{
  "appId": "aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa",
  "principalId": "00000000-0000-0000-0000-000000000000"
}
```

The above command creates an app and service principal in Entra. The object id of the service principal is also called `principalId`. This is needed later when assigned RBAC roles.


---

## Create role assignment

Add a role assignment to your managed identity or app registration with `az role assignment create`. This needs toe objectId of the principal 

```sh
az role assignment create --role Contributor --scope /subscriptions/3f56da7f-5953-4018-8ca8-e20dbfa0a7e2/resourceGroups/ericvan-scratch --assignee-object-id 00000000-0000-0000-0000-000000000000 --assignee-principal-type ServicePrincipal
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

## Create a service connection

The below is using a configuration file to create the service connection, see [Azure DevOps CLI service endpoint](../../cli/service-endpoint.md).

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

```sh
az devops service-endpoint create -service-endpoint-configuration ./ServiceConnectionGeneric.json
```

## Create federated identity credential

#### [Managed identity](#tab/managed-identity)

```azurecli
az identity federated-credential create --name $IdentityName `
                                        --identity-name $IdentityName  `
                                        --resource-group $IdentityResourceGroupName `
                                        --issuer  $serviceEndpoint.authorization.parameters.workloadIdentityFederationIssuer `
                                        --subject $serviceEndpoint.authorization.parameters.workloadIdentityFederationSubject `
                                        --subscription $IdentitySubscriptionId
```

#### [App registration](#tab/app-registration)

NEED EXAMPLE

---