---
title: Using device bound Entra tokens in Azure DevOps
author: ramrajesh
ms.author: rajr
ms.date: 04/07/2025
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description:  Using device bound Entra tokens in Azure DevOps
hide_comments: true
---

# Using device bound Entra tokens in Azure DevOps

Bearer tokens are common in modern identity flows. When a user logs into Azure DevOps, the web client acquires an OAuth 2.0 access token, a type of bearer token from Entra using Microsoft Authentication Library (MSAL). This token is stored in the user's browser cache. However, they are vulnerable to being stolen from token caches. [Proof-of-Possession (PoP)](/entra/msal/dotnet/advanced/proof-of-possession-tokens) or device bound tokens help reduce this risk by tying this token to the client device using a public/private key pair. Microsoft Entra adds the public key to the token, and the client signs it with the private key—resulting in two digital signatures: one from Entra and one from the client. This offers two key protections:

**Token cache safety**. The local browser cache doesn’t store fully signed [PoP tokens.](/entra/msal/dotnet/advanced/proof-of-possession-tokens) Tokens are signed only when needed, so stolen cache tokens can’t be used without the private key which are hardware-protected in most cases.

**Man-in-the-middle protection**. The protocol also prevents replay or interception attacks from man-in-the-middle attacks.

Azure DevOps will upgrade the access tokens used in the web client to device bound tokens to protect users against token theft.
