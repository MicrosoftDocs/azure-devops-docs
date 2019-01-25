---
title: Authentication Schemas for Service Endpoints | Extensions for Azure DevOps Services
description: Find the different ways to authenticate with external services using service endpoints in Azure DevOps Services extensions.
ms.assetid: bffc76b7-f6ba-41f0-8460-ccb44d45d670
ms.prod: devops
ms.technology: devops-ecosystem
ms.topic: conceptual
ms.manager: jillfra
monikerRange: '>= tfs-2017'
ms.author: elbatk
author: elbatk
ms.date: 03/02/2016
---

# Service endpoint authentication schemes

For Azure DevOps Services and Team Foundation Server to be able to connect to the external service, in addition to using the credentials, there is also need to know how to 
set the credentials in the HTTP request header when calling the external endpoint. Azure DevOps Services supports a closed set of authentication schemes 
that can be utilized by a custom service endpoint type. This set is closed so that Azure DevOps Services would be able to interpret the authentication scheme used 
in any custom endpoint & support connecting to the external service.

Following are the authentication schemes that are part of the closed set:

## Basic authentication
This scheme takes 2 inputs - Username & Password (confidential)

Default authentication header used is: "Basic {{ #base64 endpoint.username \":\" endpoint.password }}"

```json
{
"id": "endpoint-auth-scheme-basic",
"description": "Basic Authentication based endpoint authentication scheme",
"type": "ms.vss-endpoint.service-endpoint-auth-scheme",
"targets": [
    "ms.vss-endpoint.endpoint-auth-schemes"
],
"properties": {
    "name": "UsernamePassword",
    "displayName": "i18n:Basic Authentication",
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
}
```

## Token based authentication
This scheme takes 1 input - API Token (confidential)

Default authentication header used is: {{endpoint.apitoken}}

```json
{
"id": "endpoint-auth-scheme-token",
"description": "i18n:Token based endpoint authentication scheme",
"type": "ms.vss-endpoint.service-endpoint-auth-scheme",
"targets": [
    "ms.vss-endpoint.endpoint-auth-schemes"
],
"properties": {
    "name": "Token",
    "displayName": "i18n:Token Based Authentication",
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
}
```
## Certificate based authentication
This scheme takes 1 input - Certificate (confidential)

The value of certificate has to be provided in the text area.

```json
{
"id": "endpoint-auth-scheme-cert",
"description": "i18n:Creates a certificate-based endpoint authentication scheme",
"type": "ms.vss-endpoint.service-endpoint-auth-scheme",
"targets": [
    "ms.vss-endpoint.endpoint-auth-schemes"
],
"properties": {
    "name": "Certificate",
    "displayName": "i18n:Certificate Based",
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
}
```

## No authentication
This scheme is used when an endpoint type does not require to take any input. For e.g. external services that support anonymous access to its resources.

```json
{
"id": "endpoint-auth-scheme-none",
"description": "i18n:Creates an endpoint authentication scheme with no authentication.",
"type": "ms.vss-endpoint.service-endpoint-auth-scheme",
"targets": [
    "ms.vss-endpoint.endpoint-auth-schemes"
],
"properties": {
    "name": "None",
    "displayName": "i18n:No Authentication"
}
}
```