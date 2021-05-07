---
title: Authentication Schemas for Service Endpoints | Extensions for Azure DevOps
description: Find the different ways to authenticate with external services using service endpoints in Azure DevOps extensions.
ms.assetid: bffc76b7-f6ba-41f0-8460-ccb44d45d670
ms.technology: devops-ecosystem
ms.topic: conceptual
monikerRange: '>= tfs-2017'
ms.author: chcomley
author: chcomley
ms.date: 09/10/2020
---

# Service endpoint authentication schemes

[!INCLUDE [version-tfs-2017-through-vsts](../../includes/version-tfs-2017-through-vsts.md)]

Learn how to set the credentials in the HTTP request header when you're calling the external endpoint. Azure DevOps can then connect to the external service using the credentials. Azure DevOps supports a closed set of authentication schemes 
that can be utilized by a custom service endpoint type. Azure DevOps interprets the authentication scheme that's used in any custom endpoint & support connection to the external service.

See the following authentication schemes that are part of the closed set.

[!INCLUDE [extension-docs-new-sdk](../../includes/extension-docs-new-sdk.md)]

## Basic authentication

This scheme takes two inputs - Username & Password (confidential)

Default authentication header used is: "Basic {{ #base64 endpoint.username \":\" endpoint.password }}"

```json
{
    "id": "endpoint-auth-scheme-basic",
    "description": "Basic Authentication based endpoint authentication scheme",
    "type": "ms.vss-endpoint.service-endpoint-type",
    "targets": [
        "ms.vss-endpoint.endpoint-types"
    ],
    "properties": {
        "name": "UsernamePassword",
        "displayName": "i18n:Basic Authentication",
        "authenticationSchemes": [
            {
                "type": "ms.vss-endpoint.endpoint-auth-scheme-basic",
                "headers": [
                    {
                        "name": "Authorization",
                        "value": "Basic {{ #base64 endpoint.username \":\" endpoint.password }}"
                    }
                ],
                "inputDescriptors": [
                    {
                        "id": "username",
                        "name": "i18n:Username",
                        "description": "i18n:Username for connecting to the endpoint",
                        "inputMode": "textbox",
                        "isConfidential": false,
                        "validation": {
                            "isRequired": true,
                            "dataType": "string",
                             "maxLength": 300
                        }
                    },
                    {   
                        "id": "password",
                        "name": "i18n:Password",
                        "description": "i18n:Password for connecting to the endpoint",
                        "inputMode": "passwordbox",
                        "isConfidential": true,
                        "validation": {
                            "isRequired": true,
                            "dataType": "string",
                            "maxLength": 300
                        }
                    }
                ]
            }
        ]
    }
}
```

## Token-based authentication

This scheme takes one input - API Token (confidential)

Default authentication header used is: {{endpoint.apitoken}}

```json
{
    "id": "endpoint-auth-scheme-token",
    "description": "i18n:Token based endpoint authentication scheme",
    "type": "ms.vss-endpoint.service-endpoint-type",
    "targets": [
        "ms.vss-endpoint.endpoint-types"
    ],
    "properties": {
        "name": "Token",
        "displayName": "i18n:Token Based Authentication",
        "authenticationSchemes": [
            {
                "type": "ms.vss-endpoint.endpoint-auth-scheme-token",
                "headers": [
                    {
                        "name": "Authorization",
                        "value": "{{endpoint.apitoken}}"
                    }
                ],
                "inputDescriptors": [
                    {
                        "id": "apitoken",
                        "name": "i18n:API Token",
                        "description": "i18n:API Token for connection to endpoint",
                        "inputMode": "textbox",
                        "isConfidential": true,
                        "validation": {
                            "isRequired": true,
                            "dataType": "string",
                            "maxLength": 300
                        }
                    }
                ]
            }
        ]
    }
}
```

## Certificate-based authentication

This scheme takes one input - Certificate (confidential)

The value of certificate has to be provided in the text area.

```json
{
    "id": "endpoint-auth-scheme-cert",
    "description": "i18n:Creates a certificate-based endpoint authentication scheme",
    "type": "ms.vss-endpoint.service-endpoint-type",
    "targets": [
        "ms.vss-endpoint.endpoint-types"
    ],
    "properties": {
        "name": "Certificate",
        "displayName": "i18n:Certificate Based",
        "authenticationSchemes": [
            {
                "type": "ms.vss-endpoint.endpoint-auth-scheme-cert",
                "inputDescriptors": [
                    {
                        "id": "certificate",
                        "name": "i18n:Certificate",
                        "description": "Content of the certificate",
                        "inputMode": "TextArea",
                        "isConfidential": true,
                        "validation": {
                            "isRequired": true,
                            "dataType": "string"
                        }
                    }
                ]
            }
        ]
    }
}
```

## No authentication

This scheme is used when an endpoint type doesn't require to take any input. For example, external services that support anonymous access to its resources.

```json
{
    "id": "endpoint-auth-scheme-none",
    "description": "i18n:Creates an endpoint authentication scheme with no authentication.",
    "type": "ms.vss-endpoint.endpoint-auth-scheme-none",
    "targets": [
        "ms.vss-endpoint.endpoint-auth-schemes"
    ],
    "properties": {
        "name": "None",
        "displayName": "i18n:No Authentication"
    }
}
```
