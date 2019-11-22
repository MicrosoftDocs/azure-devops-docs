---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Service Endpoint Types | REST API Reference for Team Foundation Server
description: Get the available service endpoint types
ms.ContentId: 81A52B66-E3EB-4212-91A0-60B4430B64BC
---

# Service endpoint types

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]


[!INCLUDE [API_version](../_data/version3-preview1.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of service endpoint types

```no-highlight
GET https://{instance}/defaultcollection/_apis/distributedtask/serviceendpointtypes?[api-version={version}]
```

| Parameter     | Type     | Notes
|:--------------|:---------|:------------
| URL
| instance      | string   | TFS server name ({server:port}).
| Query
| version       | string   | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/distributedtask/serviceendpointtypes?api-version=3.0-preview.1
```

#### Sample response

```json
{
  "count": 4,
  "value": [
    {
      "authenticationSchemes": [
        {
          "inputDescriptors": [
            {
              "id": "subscriptionId",
              "name": "Subscription Id",
              "description": "Subscription Id from the <a href=\"https://go.microsoft.com/fwlink/?LinkID=312990\" target=\"_blank\">publish settings file</a>",
              "inputMode": "textBox",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "groupName": null,
              "valueHint": null,
              "validation": {
                "dataType": "guid",
                "isRequired": true,
                "maxLength": 38
              }
            },
            {
              "id": "subscriptionName",
              "name": "Subscription Name",
              "description": "Subscription Name from the <a href=\"https://go.microsoft.com/fwlink/?LinkID=312990\" target=\"_blank\">publish settings file</a>",
              "inputMode": "textBox",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "groupName": null,
              "valueHint": null,
              "validation": {
                "dataType": "string",
                "isRequired": true,
                "maxLength": 255
              }
            },
            {
              "id": "username",
              "name": "Username",
              "description": "Specify a work or school account (for example <b>@fabrikam.com</b>). Microsoft accounts (for example <b>@live</b> or <b>@hotmail</b>) are not supported. Not recommended if Multi-Factored Authentication is enabled.",
              "inputMode": "textBox",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "groupName": "AuthenticationParameter",
              "valueHint": null,
              "validation": {
                "dataType": "string",
                "isRequired": true,
                "maxLength": 300
              }
            },
            {
              "id": "password",
              "name": "Password",
              "description": "Password for connecting to the endpoint",
              "inputMode": "passwordBox",
              "isConfidential": true,
              "useInDefaultDescription": false,
              "groupName": "AuthenticationParameter",
              "valueHint": null,
              "validation": {
                "dataType": "string",
                "isRequired": true,
                "maxLength": 300
              }
            }
          ],
          "scheme": "UsernamePassword",
          "displayName": "Credentials",
          "authorizationHeaders": [
            {
              "name": "Authorization",
              "value": "Basic {{ #base64 endpoint.username \":\" endpoint.password }}"
            }
          ]
        },
        {
          "inputDescriptors": [
            {
              "id": "subscriptionId",
              "name": "Subscription Id",
              "description": "Subscription Id from the <a href=\"https://go.microsoft.com/fwlink/?LinkID=312990\" target=\"_blank\">publish settings file</a>",
              "inputMode": "textBox",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "groupName": null,
              "valueHint": null,
              "validation": {
                "dataType": "guid",
                "isRequired": true,
                "maxLength": 38
              }
            },
            {
              "id": "subscriptionName",
              "name": "Subscription Name",
              "description": "Subscription Name from the <a href=\"https://go.microsoft.com/fwlink/?LinkID=312990\" target=\"_blank\">publish settings file</a>",
              "inputMode": "textBox",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "groupName": null,
              "valueHint": null,
              "validation": {
                "dataType": "string",
                "isRequired": true,
                "maxLength": 255
              }
            },
            {
              "id": "certificate",
              "name": "Management Certificate",
              "description": "Management Certificate from the <a href=\"https://go.microsoft.com/fwlink/?LinkID=312990\" target=\"_blank\">publish settings file</a>",
              "inputMode": "textArea",
              "isConfidential": true,
              "useInDefaultDescription": false,
              "groupName": "AuthenticationParameter",
              "valueHint": null,
              "validation": {
                "dataType": "string",
                "isRequired": true
              }
            }
          ],
          "scheme": "Certificate",
          "displayName": "Certificate Based",
          "authorizationHeaders": []
        },
        {
          "inputDescriptors": [
            {
              "id": "subscriptionId",
              "name": "Subscription Id",
              "description": "Subscription Id from the <a href=\"https://go.microsoft.com/fwlink/?LinkID=312990\" target=\"_blank\">publish settings file</a>",
              "inputMode": "textBox",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "groupName": null,
              "valueHint": null,
              "validation": {
                "dataType": "guid",
                "isRequired": true,
                "maxLength": 38
              }
            },
            {
              "id": "subscriptionName",
              "name": "Subscription Name",
              "description": "Subscription Name from the <a href=\"https://go.microsoft.com/fwlink/?LinkID=312990\" target=\"_blank\">publish settings file</a>",
              "inputMode": "textBox",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "groupName": null,
              "valueHint": null,
              "validation": {
                "dataType": "string",
                "isRequired": true,
                "maxLength": 255
              }
            },
            {
              "id": "servicePrincipalId",
              "name": "Service Principal Id",
              "description": "Client Id for connecting to the endpoint.\nRefer to <a href=\"https://go.microsoft.com/fwlink/?LinkID=623000\" target=\"_blank\">link</a> on how to create Azure Service Principal.",
              "inputMode": "textBox",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "groupName": "AuthenticationParameter",
              "valueHint": null,
              "validation": {
                "dataType": "string",
                "isRequired": true
              }
            },
            {
              "id": "servicePrincipalKey",
              "name": "Service Principal Key",
              "description": "Service Principal Key for connecting to the endpoint.\nRefer to <a href=\"https://go.microsoft.com/fwlink/?LinkID=623000\" target=\"_blank\">link</a> on how to create Azure Service Principal.",
              "inputMode": "passwordBox",
              "isConfidential": true,
              "useInDefaultDescription": false,
              "groupName": "AuthenticationParameter",
              "valueHint": null,
              "validation": {
                "dataType": "string",
                "isRequired": true
              }
            },
            {
              "id": "tenantId",
              "name": "Tenant Id",
              "description": "Tenant Id for connecting to the endpoint.\nRefer to <a href=\"https://go.microsoft.com/fwlink/?LinkID=623000\" target=\"_blank\">link</a> on how to create Azure Service Principal.",
              "inputMode": "textBox",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "groupName": "AuthenticationParameter",
              "valueHint": null,
              "validation": {
                "dataType": "guid",
                "isRequired": true
              }
            }
          ],
          "scheme": "ServicePrincipal",
          "displayName": "Service Principal Authentication",
          "authorizationHeaders": []
        }
      ],
      "dataSources": [
        {
          "name": "AzureWebSiteNames",
          "endpointUrl": "https://management.core.windows.net/$(endpoint.subscriptionId)/services/webspaces/$(WebSiteLocation)Webspace/sites",
          "resultSelector": "xpath://Site/Name"
        },
        {
          "name": "AzureHostedServiceNames",
          "endpointUrl": "https://management.core.windows.net/$(endpoint.subscriptionId)/services/hostedservices",
          "resultSelector": "xpath://ServiceName"
        },
        {
          "name": "AzureStorageServiceNames",
          "endpointUrl": "https://management.core.windows.net/$(endpoint.subscriptionId)/services/storageservices",
          "resultSelector": "xpath://ServiceName"
        },
        {
          "name": "AzureLocations",
          "endpointUrl": "https://management.core.windows.net/$(endpoint.subscriptionId)/locations",
          "resultSelector": "xpath://Name"
        },
        {
          "name": "AzureWebsiteLocations",
          "endpointUrl": "https://management.core.windows.net/$(endpoint.subscriptionId)/services/WebSpaces?properties=georegions",
          "resultSelector": "xpath://Name"
        },
        {
          "name": "AzureAffinityGroups",
          "endpointUrl": "https://management.core.windows.net/$(endpoint.subscriptionId)/affinitygroups",
          "resultSelector": "xpath://Name"
        }
      ],
      "name": "azure",
      "displayName": "Azure Classic",
      "description": "Service endpoint type for all Azure connections",
      "endpointUrl": {
        "displayName": "Server Url",
        "helpText": "",
        "value": "https://management.core.windows.net/"
      },
      "helpMarkDown": "For certificate: download <a href=\"https://go.microsoft.com/fwlink/?LinkID=312990\" target=\"_blank\"><b>publish settings file</b></a>. For Service Principal: refer to <a href=\"https://go.microsoft.com/fwlink/?LinkID=623000\" target=\"_blank\"><b>link</b></a>. <a href=\"https://msdn.microsoft.com/Library/vs/alm/Release/author-release-definition/understanding-tasks#serviceconnections\" target=\"_blank\"><b>Learn More</b></a>"
    },
    {
      "authenticationSchemes": [
        {
          "inputDescriptors": [
            {
              "id": "subscriptionId",
              "name": "Subscription Id",
              "description": "Subscription Id from the <a href=\"https://go.microsoft.com/fwlink/?LinkID=312990\" target=\"_blank\">publish settings file</a>",
              "inputMode": "textBox",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "groupName": null,
              "valueHint": null,
              "validation": {
                "dataType": "guid",
                "isRequired": true,
                "maxLength": 38
              }
            },
            {
              "id": "subscriptionName",
              "name": "Subscription Name",
              "description": "Subscription Name from the <a href=\"https://go.microsoft.com/fwlink/?LinkID=312990\" target=\"_blank\">publish settings file</a>",
              "inputMode": "textBox",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "groupName": null,
              "valueHint": null,
              "validation": {
                "dataType": "string",
                "isRequired": true,
                "maxLength": 255
              }
            },
            {
              "id": "servicePrincipalId",
              "name": "Service Principal Id",
              "description": "Client Id for connecting to the endpoint.\nRefer to <a href=\"https://go.microsoft.com/fwlink/?LinkID=623000\" target=\"_blank\">link</a> on how to create Azure Service Principal.",
              "inputMode": "textBox",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "groupName": "AuthenticationParameter",
              "valueHint": null,
              "validation": {
                "dataType": "string",
                "isRequired": true
              }
            },
            {
              "id": "servicePrincipalKey",
              "name": "Service Principal Key",
              "description": "Service Principal Key for connecting to the endpoint.\nRefer to <a href=\"https://go.microsoft.com/fwlink/?LinkID=623000\" target=\"_blank\">link</a> on how to create Azure Service Principal.",
              "inputMode": "passwordBox",
              "isConfidential": true,
              "useInDefaultDescription": false,
              "groupName": "AuthenticationParameter",
              "valueHint": null,
              "validation": {
                "dataType": "string",
                "isRequired": true
              }
            },
            {
              "id": "tenantId",
              "name": "Tenant Id",
              "description": "Tenant Id for connecting to the endpoint.\nRefer to <a href=\"https://go.microsoft.com/fwlink/?LinkID=623000\" target=\"_blank\">link</a> on how to create Azure Service Principal.",
              "inputMode": "textBox",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "groupName": "AuthenticationParameter",
              "valueHint": null,
              "validation": {
                "dataType": "guid",
                "isRequired": true
              }
            }
          ],
          "scheme": "ServicePrincipal",
          "displayName": "Service Principal Authentication",
          "authorizationHeaders": []
        }
      ],
      "dataSources": [
        {
          "name": "AzureResourceGroups",
          "endpointUrl": "https://management.azure.com/subscriptions/$(endpoint.subscriptionId)/resourcegroups?api-version=2016-02-01",
          "resultSelector": "jsonpath:$.value[*].name"
        },
        {
          "name": "AzureStorageAccountRM",
          "endpointUrl": "https://management.azure.com/subscriptions/$(endpoint.subscriptionId)/providers/Microsoft.Storage/storageAccounts?api-version=2015-06-15",
          "resultSelector": "jsonpath:$.value[*].name"
        },
        {
          "name": "AzureVirtualMachinesV2Id",
          "endpointUrl": "https://management.azure.com/subscriptions/$(endpoint.subscriptionId)/providers/Microsoft.Compute/virtualMachines?api-version=2015-06-15",
          "resultSelector": "jsonpath:$.value[*].id"
        },
        {
          "name": "AzureRMWebAppNames",
          "endpointUrl": "https://management.azure.com/subscriptions/$(endpoint.subscriptionId)/providers/Microsoft.Web/sites?api-version=2015-08-01",
          "resultSelector": "jsonpath:$.value[*].name"
        },
        {
          "name": "AzureRMWebAppResourceGroup",
          "endpointUrl": "https://management.azure.com/subscriptions/$(endpoint.subscriptionId)/providers/Microsoft.Web/sites?api-version=2015-08-01",
          "resultSelector": "jsonpath:$.value[?(@.name=='{{WebAppName}}')].properties.resourceGroup"
        },
        {
          "name": "AzureRMWebAppSlotsId",
          "endpointUrl": "https://management.azure.com/subscriptions/$(endpoint.subscriptionId)/resourceGroups/$(ResourceGroupName)/providers/Microsoft.Web/sites/$(WebAppName)/slots?api-version=2015-08-01",
          "resultSelector": "jsonpath:$.value[*].id"
        }
      ],
      "name": "azurerm",
      "displayName": "Azure Resource Manager",
      "description": "Service endpoint type for Azure Resource Manager connections",
      "endpointUrl": {
        "displayName": "Server Url",
        "helpText": "",
        "value": "https://management.core.windows.net/"
      },
      "helpMarkDown": "For Service Principal: refer to <a href=\"https://go.microsoft.com/fwlink/?LinkID=623000\" target=\"_blank\"><b>link</b></a>. <a href=\"https://msdn.microsoft.com/Library/vs/alm/Release/author-release-definition/understanding-tasks#serviceconnections\" target=\"_blank\"><b>Learn More</b></a>"
    },
    {
      "authenticationSchemes": [
        {
          "inputDescriptors": [
            {
              "id": "username",
              "name": "Node Name (Username)",
              "description": "Chef username",
              "inputMode": "textBox",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "groupName": "AuthenticationParameter",
              "valueHint": null,
              "validation": {
                "dataType": "string",
                "isRequired": true
              }
            },
            {
              "id": "password",
              "name": "Client Key",
              "description": "Client key specified in the .pem file",
              "inputMode": "textArea",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "groupName": "AuthenticationParameter",
              "valueHint": null,
              "validation": {
                "dataType": "string",
                "isRequired": true
              }
            }
          ],
          "scheme": "UsernamePassword",
          "displayName": "Basic Authentication",
          "authorizationHeaders": [
            {
              "name": "Authorization",
              "value": "Basic {{ #base64 endpoint.username \":\" endpoint.password }}"
            }
          ]
        }
      ],
      "name": "chef",
      "displayName": "Chef",
      "description": "Service endpoint type for all Chef connections",
      "helpMarkDown": "<a href=\"https://msdn.microsoft.com/Library/vs/alm/Release/author-release-definition/understanding-tasks#serviceconnections\" target=\"_blank\"><b>Learn More</b></a>"
    },
    {
      "authenticationSchemes": [
        {
          "inputDescriptors": [
            {
              "id": "username",
              "name": "Username",
              "description": "Username for connecting to the endpoint",
              "inputMode": "textBox",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "groupName": "AuthenticationParameter",
              "valueHint": null,
              "validation": {
                "dataType": "string",
                "isRequired": true,
                "maxLength": 300
              }
            },
            {
              "id": "password",
              "name": "Password",
              "description": "Password for connecting to the endpoint",
              "inputMode": "passwordBox",
              "isConfidential": true,
              "useInDefaultDescription": false,
              "groupName": "AuthenticationParameter",
              "valueHint": null,
              "validation": {
                "dataType": "string",
                "isRequired": true,
                "maxLength": 300
              }
            }
          ],
          "scheme": "UsernamePassword",
          "displayName": "Basic Authentication",
          "authorizationHeaders": [
            {
              "name": "Authorization",
              "value": "Basic {{ #base64 endpoint.username \":\" endpoint.password }}"
            }
          ]
        }
      ],
      "dataSources": [
        {
          "name": "Jobs",
          "endpointUrl": "{{endpoint.url}}api/json?tree=jobs[name,displayName]",
          "resultSelector": "jsonpath:$.jobs[*]"
        },
        {
          "name": "Builds",
          "endpointUrl": "{{endpoint.url}}job/{{definition}}/api/json?tree=builds[displayName,id,result]",
          "resultSelector": "jsonpath:$.builds[?(@.result=='SUCCESS')]"
        },
        {
          "name": "LatestBuild",
          "endpointUrl": "{{endpoint.url}}job/{{definition}}/api/json?tree=lastSuccessfulBuild[id,displayName]",
          "resultSelector": "jsonpath:$.lastSuccessfulBuild"
        },
        {
          "name": "Artifacts",
          "endpointUrl": "{{endpoint.url}}/job/{{definition}}/{{version}}/api/json?tree=artifacts[*]",
          "resultSelector": "jsonpath:$.artifacts[*]"
        },
        {
          "name": "BranchName",
          "endpointUrl": "{{endpoint.url}}/job/{{definition}}/{{version}}/api/json",
          "resultSelector": "jsonpath:$.actions[*].buildsByBranchName[?(@.buildNumber == {{version}})].revision.branch[*].name"
        }
      ],
      "name": "jenkins",
      "displayName": "Jenkins",
      "description": "Service endpoint type for all Jenkins connections",
      "helpMarkDown": "<a href=\"https://msdn.microsoft.com/Library/vs/alm/Release/author-release-definition/understanding-tasks#serviceconnections\" target=\"_blank\"><b>Learn More</b></a>"
    }
  ]
}
```
