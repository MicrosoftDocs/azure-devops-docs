---
title: Service endpoint authentication schemes
titleSuffix: Azure DevOps
description: Define authentication schemes for custom service endpoint types in Azure DevOps extensions.
ms.assetid: bffc76b7-f6ba-41f0-8460-ccb44d45d670
ms.subservice: azure-devops-ecosystem
ms.custom: pat-reduction, UpdateFrequency3
ms.topic: concept
monikerRange: '<= azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 04/03/2026
ai-usage: ai-assisted
---

# Service endpoint authentication schemes

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

When you define a custom service endpoint type in your extension, you specify an authentication scheme that tells Azure DevOps how to set credentials in the HTTP request header. Azure DevOps supports the following authentication schemes for custom endpoints.

[!INCLUDE [extension-docs-new-sdk](../../includes/extension-docs-new-sdk.md)]

## Basic authentication

Uses a username and password sent as a Base64-encoded `Authorization` header.

> [!IMPORTANT]
> Where possible, use service principals and managed identities instead of basic authentication. For more information, see [Use service principals & managed identities](../../integrate/get-started/authentication/service-principal-managed-identity.md).

The built-in scheme type is `ms.vss-endpoint.endpoint-auth-scheme-basic`. You don't need to declare it in your extension manifest — reference it in your endpoint type's `authenticationSchemes` array:

```json
"authenticationSchemes": [
    {
        "type": "ms.vss-endpoint.endpoint-auth-scheme-basic"
    }
]
```

Azure DevOps prompts the user for **Username** and **Password** and sends them as the standard HTTP Basic `Authorization` header.

## Token-based authentication

Takes a single confidential input — an API token. The token value is sent in the `Authorization` header.

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

The `{{endpoint.apitoken}}` placeholder resolves to the value the user enters in the **API Token** field at runtime.

## Certificate-based authentication

Takes a single confidential input — the certificate content, entered in a text area.

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

Use this scheme when the external service supports anonymous access and no credentials are needed.

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

## Related content

- [Service endpoint extensions](../develop/service-endpoints.md)
- [Extension manifest reference](manifest.md)
- [Authenticate and secure web extensions](auth.md)
