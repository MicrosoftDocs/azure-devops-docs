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

When you own a large set of [personal access tokens (PATs)](use-personal-access-tokens-to-authenticate.md), it might become complex to manage the maintenance of these tokens using the UI alone.

With the PAT Lifecycle Management API, you can easily manage the PATs associated with your organizations using automated processes. This [rich set of APIs](/rest/api/azure/devops/tokens) lets you manage your PATs, allowing you to create new PATs and renew or expire existing PATs.

In this article, we show you how to configure an application that [authenticates with a Microsoft Entra token](../../integrate/get-started/authentication/entra-oauth.md) and makes calls with the PAT Lifecycle API.

## Prerequisites

| Category | Requirements |
|--------------|-------------|
| Authentication | In general, a stronger "step-up authentication" is recommended when minting new tokens, which is why [Microsoft Entra access tokens](../../integrate/get-started/authentication/entra.md) are required to access this API. PATs cannot be used to create or regenerate PATs. |
| User Identity | Only users or apps using an "on-behalf-of user" flow can generate PATs. Apps using "on-behalf-of application" flows (e.g. “client credential” flow) or authentication flows that do not issue Microsoft Entra access tokens are not valid for use with this API. As such, [service principals or managed identities](../../integrate/get-started/authentication/service-principal-managed-identity.md) cannot create or manage PATs. |
| Entra Tenant | Have a [Microsoft Entra tenant with an active Azure subscription](/azure/active-directory/develop/quickstart-create-new-tenant). |

## Call the API Directly

To call the API directly, provide a [Microsoft Entra access token](../../integrate/get-started/authentication/entra.md#ad-hoc-requests-to-azure-devops-rest-apis) as a `Bearer` token in the `Authorization` header of your request.

## Clone our sample PAT rotation app

We created a [sample Python Flask web app](https://github.com/microsoft/azure-devops-auth-samples/tree/master/PersonalAccessTokenAPIAppSample) that can be configured with your Microsoft Entra tenant and Azure DevOps organization. The sample app uses the [MSAL authorization code flow](/entra/identity-platform/msal-authentication-flows#authorization-code) to acquire a Microsoft Entra access token. If multi-factor authentication is enabled in your tenant, the [authorization code flow](/azure/active-directory/develop/v2-oauth2-auth-code-flow) must be used. 

The sample app README explains how to register an app in your Microsoft Entra tenant, configure the app to use your Microsoft Entra tenant, and run your cloned app.

##  Frequently asked questions (FAQs)

### Q: How can I regenerate/rotate PATs through the API? I saw that option in the UI, but I don’t see a similar method in the API.
The 'Regenerate' functionality available in the UI actually accomplishes a few actions, which can be replicated through API. 

To rotate your PAT, do the following steps:
1. See PAT metadata with a **GET** call, 
2. Create a new PAT with the old PAT id using a **POST** call, 
3. Revoke the old PAT using a **DELETE** call.

### Q: I see a "Need admin approval" pop-up when I try to use this app.
Your tenant's security policies require admin consent before applications can access organization resources in the organization. You msut reach out to your tenant admin.
