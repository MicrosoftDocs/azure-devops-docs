---
title: Azure DevOps Services - Stored Credentials
description: Learn how Microsoft stores your credentials for Azure DevOps
ms.prod: devops
ms.topic: article
ms.technology: devops-whitepapers
ms.author: chcomley
author: chcomley
ms.manager: jillfra
ms.date: 01/25/2019
monikerRange: 'azure-devops'
---

# How we store your credentials for Azure DevOps Services

[!INCLUDE [temp](../../_shared/version-vsts-only.md)]

## Credential security

Microsoft is committed to ensuring that your projects remain safe and secure, without exception. In Azure DevOps, your projects benefit from multiple layers of security and governance technologies, operational practices, and compliance policies. We enforce data privacy and integrity both at rest and in transit. In addition, we adhere to the following practices with respect to the credentials or secrets that Azure DevOps stores. To learn more about how to choose the right authentication mechanism, see [Guidance for authentication](../../integrate/get-started/authentication/authentication-guidance.md).

## Alternate credentials (basic auth)

* We store two values, a 16-byte password salt and a 32-byte password hash
* Raw password is provided directly by the caller over SSL
* Password salt is randomly generated in-memory on the server side using RNGCryptoServiceProvider each time a password is created or changed
* Password hash is generated in-memory on the server side from the raw password and password salt bytes using Rfc2898DeriveBytes with 1000 iterations
* Salt and hash are stored in a database

## Personal access tokens (PATs)

* We store a hash of the PAT
* Raw PAT is generated in-memory on the server side as 32 bytes randomly generated through RNGCryptoServiceProvider then shared with the caller as a base-32-encoded string. This value is NOT stored.
* PAT hash is generated in-memory on the server side as an *HMACSHA256Hash* of the raw PAT using a 64-byte symmetric signing key stored in our key vault 
* Hash is stored in our database

## Secure shell (SSH) keys

* We store a hash of the enclosing organization ID and the SSH public key
* Raw public key is provided directly by the caller over SSL
* SSH hash is generated in-memory on the server side as an *HMACSHA256Hash* of the organization ID and raw public key using a 64-byte symmetric signing key stored in our key vault
* Hash is stored in our database

## OAuth credentials (JWTs)

* These are issued as fully self-describing JSON web tokens (JWTs) and are NOT stored in our service
* The claims in JWTs issued and presented to our service are validated using a certificate stored in our key vault
