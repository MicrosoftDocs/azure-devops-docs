---
title: Create service endpoint using Azure DevOps CLI  
titleSuffix: Azure DevOps 
description: Learn how to use Azure DevOps CLI to create a service endpoint
ms.topic: how-to
ms.subservice: azure-devops-reference
ms.manager: mijacobs 
ms.author: chcomley
author: chcomley
monikerRange: 'azure-devops'
ms.date: 06/13/2022
---

# Azure DevOps CLI service endpoint

[!INCLUDE [version-eq-azure-devops](../includes/version-eq-azure-devops.md)] 

With the `az devops service-endpoint` command, you can create and manage different types of service connections. A service connection allows Azure DevOps to communicate with an external service, such as Azure, Bitbucket, Kubernetes, Maven, GitHub, and more. With `az devops service-endpoint`, you can perform the following tasks:   

- Create a service endpoint using a configuration file
- Update a service endpoint
- Manage GitHub service endpoints/connections
- Manage Azure Resource Manager service endpoints/connections
- List service endpoints defined for a project 
- Get the details of a service endpoint.  

For detail command syntax, see [`az devops service-endpoint`](/cli/azure/devops/service-endpoint). For syntax on the REST API for service endpoints, see [Endpoints](/rest/api/azure/devops/serviceendpoint/endpoints).

You can also use azure cli commands to get details, list, delete, and update a service endpoint. See [Index to Azure DevOps CLI examples, Service endpoints or service connections](quick-reference.md#service-endpoints).

To use the web portal to create and edit service connections, see [Manage service connections](../pipelines/library/service-endpoints.md). 
 

## Create service endpoint using a configuration file 

To create a service endpoint using a configuration file, you must first define the configuration file. The contents of the configuration file differ depending on the type of connection, such as Azure Classic, Azure Data Explorer, Bitbucket Cloud, Chef, and more.  

### Configuration file format 

The following syntax shows the `json` format for the configuration file. 

> [!div class="tabbedCodeSnippets"]
```json	
{
  "data": {},
  "name": "MyNewServiceEndpoint",
  "type": "Generic",
  "url": "https://myserver",
  "authorization": {
    "parameters": {
      "username": "myusername",
      "password": "mysecretpassword"
    },
    "scheme": "UsernamePassword"
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

The following table describes each parameter. The `type` parameter supports creation of any type of service endpoint. 


| Parameter           | Type                  |  Description  |  
|---------------------|-----------------------|---------------|
| `name`	| string| Sets the friendly name of the endpoint.| 
| `type`	| string| Sets the type of the endpoint. | 
| `url`	| string| Sets the url of the endpoint. | 
| `authorization`   | EndpointAuthorization | Sets the authorization data for talking to the endpoint. | 
| `isShared`	| boolean| Indicates whether the service endpoint is shared with other projects or not. | 
| `isReady`	| boolean| EndPoint state indicator.  | 
| `serviceEndpointProjectReferences` | Project Reference | Sets project reference of the service endpoint. | 


For a list of supported types and their required input parameters, you can exercise the following REST API entry: 

```https://dev.azure.com/{organization}/_apis/serviceendpoint/types?api-version=6.0-preview.1```

Also, for a description of service connection types and other parameters that they may require, see [Manage service connections, Common service connection types](../pipelines/library/service-endpoints.md#common-service-connection-types). 
 
### Run the `create` command

You create a service endpoint with the [`az devops service-endpoint create`](/cli/azure/devops/service-endpoint#az-devops-service-endpoint-create) command. 

> [!div class="tabbedCodeSnippets"]
```Azure CLI
az devops service-endpoint create --service-endpoint-configuration 
                                  [--encoding {ascii, utf-16be, utf-16le, utf-8}]
                                  [--org]
                                  [--project]
```


### Parameters

- **service-endpoint-configuration**: Required. Name of the `json` configuration file with service endpoint configuration.  
- **encoding**: Optional. Encoding of the input file. Default is `utf-8`. Accepted values: `ascii`, `utf-16be`, `utf-16le`, `utf-8`.
- **org**: Azure DevOps organization URL. You can configure the default organization using `az devops configure -d organization=ORG_URL`. Required if not configured as default.
- **project**: Name or ID of the project. You can configure the default project using `az devops configure -d project=NAME_OR_ID`. Required if not configured as default.

### Example
The following command creates a service connection referencing the `ServiceConnectionGeneric.json` file.
 
> [!div class="tabbedCodeSnippets"]
```Azure CLI
az devops service-endpoint create --service-endpoint-configuration ./ServiceConnectionGeneric.json
```
Upon successful creation, an `Id` is assigned to the service endpoint and a response similar to the following syntax is returned.

> [!div class="tabbedCodeSnippets"]
```Azure CLI
{
  "administratorsGroup": null,
  "authorization": {
    "parameters": {
      "password": null,
      "username": "myusername"
    },
    "scheme": "UsernamePassword"
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

To create a GitHub service endpoint, use the [`az devops service-endpoint github create`](/cli/azure/devops/service-endpoint/github)  command:

> [!div class="tabbedCodeSnippets"]
```Azure CLI
az devops service-endpoint github create --github-url
                                         --name 
                                         [--org]
                                         [--project]
```

In interactive mode, the `az devops service-endpoint github create` command asks for a [GitHub PAT token](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line) using a prompt message, for automation purpose set the GitHub PAT token using the `AZURE_DEVOPS_EXT_GITHUB_PAT` environment variable. For more information, see [Sign in with a personal access token (PAT)](log-in-via-pat.md).



## Create an Azure Resource Manager service endpoint

To create an Azure Resource Manager service endpoint, use the [`az devops service-endpoint azurerm create`](/cli/azure/devops/service-endpoint/azurerm) command.  

> [!div class="tabbedCodeSnippets"]
```Azure CLI
az devops service-endpoint azurerm create --azure-rm-service-principal-id
                                          --azure-rm-subscription-id
                                          --azure-rm-subscription-name
                                          --azure-rm-tenant-id
                                          --name
                                          [--azure-rm-service-principal-certificate-path] 
                                          [--org]
                                          [--project]
```

### Use a client secret/password

In interactive mode, the the `az devops service-endpoint azurerm create` command asks for a service principal password/secret using a prompt message. For automation purposes, set the service principal password/secret using the `AZURE_DEVOPS_EXT_AZURE_RM_SERVICE_PRINCIPAL_KEY` environment variable.

```bash
export AZURE_DEVOPS_EXT_AZURE_RM_SERVICE_PRINCIPAL_KEY=<your_secret_here>
```

```powershell
$env:AZURE_DEVOPS_EXT_AZURE_RM_SERVICE_PRINCIPAL_KEY=<your_secret_here>
```

### Use a client certificate

If Azure Active Directory application uses [certificate for authentication](/azure/active-directory/develop/active-directory-certificate-credentials), then create a .pem file for the certificate and pass the path to the .pem file using the `--azure-rm-service-principal-certificate-path` argument.

You can create a.pem file using openssl:

```bash
openssl pkcs12 -in file.pfx -out file.pem -nodes -password pass:<password_here>
```
 

## Related articles

- [Manage service connections](../pipelines/library/service-endpoints.md)
- [Create an Azure Resource Manager service connection using automated security](../pipelines/library/connect-to-azure.md#create-an-azure-resource-manager-service-connection-using-automated-security)
- [`az devops service-endpoint`](/cli/azure/devops/service-endpoint)
- [Endpoints REST API](/rest/api/azure/devops/serviceendpoint/endpoints) 


<!---




The Azure DevOps CLI extension supports creation of any type of service endpoint. 

```azurecli
az devops service-endpoint create
```

In order to use this command, you must understand the request format for creating a particular kind of service endpoint.

You can achieve it using the following steps:

1. Create endpoint of same type from the user interface and capture its network trace (using tool of your preference like Fiddler, Chrome Developer tool). 

	![Screenshot of Create Service Connection for Docker dialog.](media/DockerServiceEndpointCreateUI.png)

	Captured request is a POST call to uri ending 
`apis/serviceendpoint/endpoints`

	and body will look like 



	```json
	{
	  "id": "980cf1c0-ba7c-4731-bd7f-1df785b89ab3",
	  "description": "",
	  "administratorsGroup": null,
	  "authorization": {
	    "parameters": {
	      "username": "Docker_ID_Sample",
	      "password": "Docker_ID_Sample",
	      "email": "Docker_ID_Email",
	      "registry": "https://index.docker.io/v1/"
	    },
	    "scheme": "UsernamePassword"
	  },
	  "createdBy": null,
	  "data": {
	    "registrytype": "Others"
	  },
	  "name": "Docker_Registry_Sample",
	  "type": "dockerregistry",
	  "url": "https://index.docker.io/v1/",
	  "readersGroup": null,
	  "groupScopeId": null,
	  "serviceEndpointProjectReferences": null,
	  "operationStatus": null
	}
	```

Save the request body in a file and that file can act as a template for creation of service endpoints of type "Docker Registry Service Connection".

Path to this file (after updating appropriate values like Name, ID or password) can be passed to `--service-endpoint-configuration` parameter.
Note that the path is provided using '\\' backslash. 


-->

