---
title: Create service endpoint using Azure DevOps CLI  
titleSuffix: Azure DevOps 
description: Learn how to use Azure DevOps CLI to create a service endpoint
ms.topic: reference 
ms.prod: devops 
ms.technology: devops-reference
ms.manager: mijacobs 
ms.author: gsaral
author: KathrynEE
monikerRange: '>= azure-devops-2020'
ms.date: 08/17/2020
---

# Azure DevOps CLI service endpoint

[!INCLUDE [temp](../includes/version-cloud-plus-2020.md)] 

You can use the `az devops service-endpoint` command to create different types of service endpoints. 


## Create a GitHub service endpoint

To create a GitHub service endpoint, use the following command:

```azurecli
az devops service-endpoint github create
```

In interactive mode, the `az devops service-endpoint github create` command asks for a [GitHub PAT token](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line) using a prompt message, for automation purpose set the GitHub PAT token using the `AZURE_DEVOPS_EXT_GITHUB_PAT` environment variable.

## Create an Azure RM service endpoint

To create a an Azure RM service endpoint, use the following command:

```azurecli
az devops service-endpoint azurerm create
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

## Create service endpoint using a configuration file

The Azure DevOps CLI extension supports creation of any type of service endpoint. 

```azurecli
az devops service-endpoint create
```

In order to use this command, you must understand  the request format for creating a particular kind of service endpoint.

You can achieve it using the following steps:

1. Create endpoint of same type from UI and capture its network trace (using tool of your preference like Fiddler, Chrome Developer tool). 

	![Docker Create UI](media/DockerServiceEndpointCreateUI.png)

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

## Related articles

- [Service connections](../pipelines/library/service-endpoints.md)
- [Create an Azure Resource Manager service connection using automated security](../pipelines/library/connect-to-azure.md#create-an-azure-resource-manager-service-connection-using-automated-security)
