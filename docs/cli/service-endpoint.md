---
title: Create Service Endpoint Using Azure DevOps CLI  
titleSuffix: Azure DevOps 
description: Learn how to use Azure DevOps CLI to create a service endpoint. You can create and manage different types of service connections.
ms.topic: how-to
ms.subservice: azure-devops-reference
ms.custom: devx-track-arm-template, devx-track-azurecli, arm2024
ms.manager: mijacobs 
ms.author: chcomley
author: chcomley
monikerRange: 'azure-devops'
ms.date: 06/03/2025
#customer intent: As a developer, I want to use Azure DevOps CLI to create and manage different types of service connections.
---

# Azure DevOps CLI service endpoint

[!INCLUDE [version-eq-azure-devops](../includes/version-eq-azure-devops.md)]

A *service connection* allows Azure DevOps to communicate with an external service, such as Azure, Bitbucket, Kubernetes, Maven, and GitHub. With the `az devops service-endpoint` command, you can create and manage different types of service connections. You can accomplish the following tasks:

- Create a service endpoint by using a configuration file
- Update a service endpoint
- Manage GitHub service endpoints and connections
- Manage Azure Resource Manager service endpoints and connections
- List service endpoints defined for a project
- Get the details of a service endpoint

For detailed command syntax, see [az devops service-endpoint](/cli/azure/devops/service-endpoint). For syntax on the REST API for service endpoints, see [Endpoints](/rest/api/azure/devops/serviceendpoint/endpoints).

You can use Azure CLI commands to get details, list, delete, and update a service endpoint. See [Service endpoints or service connections](quick-reference.md#service-endpoints-or-service-connections).

To use the web portal to create and edit service connections, see [Manage service connections](../pipelines/library/service-endpoints.md).

[!INCLUDE [use-service-principals-tip](../includes/use-service-principals-tip.md)]

## Create service endpoint using a configuration file

To create a service endpoint by using a configuration file, first define the configuration file. The contents of the configuration file differ depending on the type of connection, such as Azure Classic, Azure Data Explorer, Bitbucket Cloud, or Chef.

### Configuration file format

The following syntax shows the JSON format for the configuration file.

> [!div class="tabbedCodeSnippets"]

```json
{
  "data": {},
  "name": "MyNewServiceEndpoint",
  "type": "AzureRM",
  "url": "https://management.azure.com/",
  "authorization": {
    "parameters": {
      "tenantid": "your-tenant-id"
    },
    "scheme": "ManagedServiceIdentity"
  },
  "isShared": false,
  "isReady": true,
  "serviceEndpointProjectReferences": [
    {
      "projectReference": {
        "id": "aaaaaaaa-0000-1111-2222-bbbbbbbbbbbb",
        "name": "TestProject"
      },
      "name": "MyNewServiceEndpoint"
    }
  ]
}
```

The following table describes each parameter. The `type` parameter supports creation of any type of service endpoint.

| Parameter           | Type                  |  Description  |  
|---------------------|-----------------------|---------------|
| `name`              | string | Sets the friendly name of the endpoint. |
| `type`              | string | Sets the type of the endpoint. |
| `url`               | string | Sets the url of the endpoint. |
| `authorization`     | EndpointAuthorization | Sets the authorization data for talking to the endpoint. |
| `isShared`          | boolean| Indicates whether the service endpoint is shared with other projects. |
| `isReady`           | boolean| EndPoint state indicator.  |
| `serviceEndpointProjectReferences` | Project Reference | Sets project reference of the service endpoint. |

For a list of supported types and their required input parameters, review the following REST API entry:

```http
https://dev.azure.com/{organization}/_apis/serviceendpoint/types?api-version=6.0-preview.1
```

For a description of service connection types and parameters, see [Common service connection types](../pipelines/library/service-endpoints.md#common-service-connection-types).

### Run the `create` command

You create a service endpoint with the [az devops service-endpoint create](/cli/azure/devops/service-endpoint#az-devops-service-endpoint-create) command.

> [!div class="tabbedCodeSnippets"]

```azurecli
az devops service-endpoint create --service-endpoint-configuration 
                                  [--encoding {ascii, utf-16be, utf-16le, utf-8}]
                                  [--organization]
                                  [--project]
```

### Parameters

- **service-endpoint-configuration**: Required. Name of the `json` configuration file with service endpoint configuration.
- **encoding**: Optional. Encoding of the input file. Default is `utf-8`. Accepted values: `ascii`, `utf-16be`, `utf-16le`, `utf-8`.
- **organization**: Azure DevOps organization URL. You can configure the default organization using `az devops configure --defaults organization=ORG_URL`. Required if not configured as default.
- **project**: Name or ID of the project. You can configure the default project using `az devops configure --defaults project=NAME_OR_ID`. Required if not configured as default.

### Example

The following command creates a service connection referencing the *ServiceConnectionGeneric.json* file.

> [!div class="tabbedCodeSnippets"]

```Azure CLI
az devops service-endpoint create --service-endpoint-configuration ./ServiceConnectionGeneric.json
```

After creation, the command assigns an `Id` to the service endpoint. This example returns the following result.

> [!div class="tabbedCodeSnippets"]

```azurecli
{
  "administratorsGroup": null,
  "authorization": {
    "parameters": {
      "serviceprincipalid": "your-service-principal-id",
      "serviceprincipalkey": "your-service-principal-key",
      "tenantid": "your-tenant-id"
    },
    "scheme": "ServicePrincipal"
  },
  "createdBy": {
    "descriptor": "aad.OGYxZTFlODEtMGJiNC03N2ZkLThkYzUtYjE3MTNiNTQ2MjQ4",
    "directoryAlias": null,
    "displayName": "Jamal Hartnett",
    "id": "60c83423-4eb6-4c5e-8395-1e71cb4aef4c",
    "imageUrl": "https://dev.azure.com/fabrikam/_apis/GraphProfile/MemberAvatars/aad.OGYxZTFlODEtMGJiNC03N2ZkLThkYzUtYjE3MTNiNTQ2MjQ4",
    "inactive": null,
    "isAadIdentity": null,
    "isContainer": null,
    "isDeletedInOrigin": null,
    "profileUrl": null,
    "uniqueName": "fabrikamfiber4@hotmail.com",
    "url": "https://spsprodwcus0.vssps.visualstudio.com/A0214b8cc-a36c-4b93-abbf-6348473c2f0a/_apis/Identities/60c83423-4eb6-4c5e-8395-1e71cb4aef4c"
  },
  "data": {},
  "description": null,
  "groupScopeId": null,
  "id": "3b6890ef-54b3-47ec-a907-a5d2f96237da",
  "isReady": true,
  "isShared": false,
  "name": "MyNewServiceEndpoint",
  "operationStatus": null,
  "owner": "library",
  "readersGroup": null,
  "serviceEndpointProjectReferences": [
    {
      "name": "MyNewServiceEndpoint",
      "projectReference": {
        "id": "677da0fb-b067-4f77-b89b-f32c12bb8617",
        "name": null
      }
    }
  ],
  "type": "Generic",
  "url": "https://myserver"
}
```

## Create a GitHub service endpoint

To create a GitHub service endpoint, use the [az devops service-endpoint github create](/cli/azure/devops/service-endpoint/github) command:

> [!div class="tabbedCodeSnippets"]

```azurecli
az devops service-endpoint github create --github-url
                                         --name 
                                         [--organization]
                                         [--project]
```

In interactive mode, the `az devops service-endpoint github create` command prompts you for [GitHub PAT token](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line). For automation purposes, set the GitHub PAT token using the `AZURE_DEVOPS_EXT_GITHUB_PAT` environment variable. For more information, see [Sign in with a personal access token](log-in-via-pat.md).

## Create an Azure Resource Manager service endpoint

To create an Azure Resource Manager service endpoint, use the [az devops service-endpoint azurerm create](/cli/azure/devops/service-endpoint/azurerm) command.  

> [!div class="tabbedCodeSnippets"]

```azurecli
az devops service-endpoint azurerm create --azure-rm-service-principal-id
                                          --azure-rm-subscription-id
                                          --azure-rm-subscription-name
                                          --azure-rm-tenant-id
                                          --name
                                          [--azure-rm-service-principal-certificate-path] 
                                          [--organization]
                                          [--project]
```

### Use a client secret

In interactive mode, the `az devops service-endpoint azurerm create` command prompts you for a service principal secret. For automation purposes, set the service principal secret using the `AZURE_DEVOPS_EXT_AZURE_RM_SERVICE_PRINCIPAL_KEY` environment variable.

```bash
export AZURE_DEVOPS_EXT_AZURE_RM_SERVICE_PRINCIPAL_KEY=<your_secret_here>
```

```powershell
$env:AZURE_DEVOPS_EXT_AZURE_RM_SERVICE_PRINCIPAL_KEY=<your_secret_here>
```

### Use a client certificate

If the Microsoft Entra application uses [certificate for authentication](/azure/active-directory/develop/active-directory-certificate-credentials), create a .pem file for the certificate. Pass the path to the .pem file using the `--azure-rm-service-principal-certificate-path` argument.

You can create a .pem file using OpenSSL:

```bash
openssl pkcs12 -in file.pfx -out file.pem -nodes -secret pass:<secret_here>
```

## Related articles

- [Manage service connections](../pipelines/library/service-endpoints.md)
- [Connect to Azure with an Azure Resource Manager service connection](../pipelines/library/connect-to-azure.md)
- [az devops service-endpoint](/cli/azure/devops/service-endpoint)
- [Endpoints REST API](/rest/api/azure/devops/serviceendpoint/endpoints)
