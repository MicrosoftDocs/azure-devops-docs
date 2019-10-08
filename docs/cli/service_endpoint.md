---
title: Create Service Endpoint using Azure DevOps CLI  
titleSuffix: Azure DevOps 
description: Use Azure DevOps CLI to create Service Endpoint
ms.topic: reference 
ms.manager: jillfra
ms.prod: devops 
ms.technology: devops-ref
ms.manager: jillfra 
ms.author: gsaral
author: KathrynEE
monikerRange: 'azure-devops'
ms.date: 07/31/2019
---

# Azure DevOps CLI Service Endpoint

[!INCLUDE [temp](../_shared/version-vsts-only.md)] 

## Creating GitHub Service Endpoint

Use command:

``` bash
az devops service-endpoint github create
```

In interactive mode this command will ask for [GitHub PAT token](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line) using a prompt message, for automation purpose set the GitHub PAT token in `AZURE_DEVOPS_EXT_GITHUB_PAT` environment variable.

## Creating Azure RM Service Endpoint

Use command:

```bash
az devops service-endpoint azurerm create
```

### Using client secret/password

In interactive mode this command will ask for service principal password/secret using a prompt message, for automation purpose set service principal password/secret in `AZURE_DEVOPS_EXT_AZURE_RM_SERVICE_PRINCIPAL_KEY` environment variable.

### Using client certificate

If AAD application uses [certificate for authentification](/azure/active-directory/develop/active-directory-certificate-credentials) then create .pem for the certificate and pass path to .pem file in `--azure-rm-service-principal-certificate-path` argument.

.pem file can be created using openssl 

```bash
openssl pkcs12 -in file.pfx -out file.pem -nodes -password pass:<password_here>
```

## Create service endpoint using configuration file

DevOps CLI extension supports creation of any type of service endpoint using 

```bash
az devops service-endpoint create
```

Prerequisite for using this command is that user should be aware of the request format for creating that particular kind of service endpoint.

It can be achived using the following steps:
Create endpoint of same type from UI and capture its network trace (using tool of your preference like Fiddler, Chrome Developer tool)

![Docker Create UI](_img/DockerServiceEndpointCreateUI.png)

Captured request will be a POST call to uri ending
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

This request body should be saved in a file and that file can act as a template for creation of service endpoints of type "Docker Registry Service Connection"

Path to this file (after updating appropriate values like Name, ID or password) can be passed to `--service-endpoint-configuration` parameter.
Note that the path is provided using '\\' backslash.
