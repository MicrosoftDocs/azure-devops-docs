---
title: Manage personal access tokens using API
titleSuffix: Azure DevOps
description: Learn how to use the PAT lifecycle management API to get, create, update, and revoke their personal access tokens (PATs).
ms.subservice: azure-devops-security
ms.custom: devx-track-python
ms.topic: how-to
ms.reviewer: wonga
ms.date: 10/24/2024
monikerRange: 'azure-devops'
---

# Manage personal access tokens (PATs) using REST API

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

We have been recommending more secure, short-lived [Microsoft Entra tokens](../../integrate/get-started/authentication/entra.md)_in place of the easily leakable [personal access tokens (PATs)](use-personal-access-tokens-to-authenticate.md). Wherever PATs are used, Entra tokens are accepted with increasing frequency.

Scenarios remain where PATs are still needed. For those, we offer a [rich set of PAT Lifecycle Management APIs](/rest/api/azure/devops/tokens) that let you create, renew, or revoke PATs. These APIs may be useful when maintaining large volumes of tokens through UI is unsustainable. They also opens the opportunity to programmatically rotate PATs regularly, offering them shorter lifespans.

## Prerequisites

| Category | Requirements |
|--------------|-------------|
| Authentication | In general, a stronger "step-up authentication" is recommended when minting new tokens, which is why [Microsoft Entra access tokens](../../integrate/get-started/authentication/entra.md) are required to access this API. PATs can't be used to create or regenerate PATs. |
| User Identity | Only users or apps using an "on-behalf-of user" flow can generate PATs. Apps using "on-behalf-of application" flows or authentication flows that don't issue Microsoft Entra access tokens aren't valid for use with this API. As such, [service principals or managed identities](../../integrate/get-started/authentication/service-principal-managed-identity.md) can't create or manage PATs. |
| Entra Tenant | Have a [Microsoft Entra tenant with an active Azure subscription](/azure/active-directory/develop/quickstart-create-new-tenant). |
| Token Scope | Previously the PAT Lifecycle Management APIs only supported the `user_impersonation` scope, but now the `vso.tokens` are the recommended scope to use with these APIS. |

## Call the API Directly

To call the API directly, provide a [Microsoft Entra access token](../../integrate/get-started/authentication/entra.md#ad-hoc-requests-to-azure-devops-rest-apis) as a `Bearer` token in the `Authorization` header of your request.

## Clone our sample PAT rotation app

We created a [sample Python Flask web app](https://github.com/microsoft/azure-devops-auth-samples/tree/master/PersonalAccessTokenAPIAppSample) that can be configured with your Microsoft Entra tenant and Azure DevOps organization. The sample app uses the [authorization code flow](/entra/identity-platform/msal-authentication-flows#authorization-code) to acquire a Microsoft Entra access token. If multifactor authentication is enabled in your tenant, the [authorization code flow](/azure/active-directory/develop/v2-oauth2-auth-code-flow) must be used. The README explains how to register an app in your Microsoft Entra tenant, configure it to use your tenant, and run the cloned app.

##  Frequently asked questions (FAQs)

### Q: How can I regenerate/rotate PATs through the API? I saw that option in the UI, but I don’t see a similar method in the API.
The 'Regenerate' functionality available in the UI actually accomplishes a few actions, which can be replicated through API. 

To rotate your PAT, do the following steps:
1. See PAT metadata with a **GET** call, 
2. Create a new PAT with the old PAT id using a **POST** call, 
3. Revoke the old PAT using a **DELETE** call.

### Q: I see a "Need admin approval" pop-up when I try to use this app.
Your tenant's security policies require admin consent before applications can access organization resources in the organization. Reach out to your tenant admin(s).

### Q: Can I use a service principal to create or manage PATs?
No, personal access tokens belong to a user identity. Entra [service principals or managed identities](../../integrate/get-started/authentication/service-principal-managed-identity.md) are able to generate short-lived Entra tokens that can be used in most places where a PAT is accepted. Learn more about [our efforts to reduce PAT usage across Azure DevOps](https://devblogs.microsoft.com/devops/reducing-pat-usage-across-azure-devops/) and explore replacing PATs with Entra tokens.
