---
ms.topic: how-to
title: Building a Microsoft Entra OAuth app for Azure DevOps
description: Use Microsoft Entra authentication to integrate with Azure DevOps Services.
ms.assetid: 19285121-1805-4421-B7C4-63784C9A7CFA
ms.subservice: azure-devops-security
monikerRange: 'azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 10/28/2024
---

# Building for Azure DevOps with Microsoft Entra OAuth Apps

## Entra OAuth Tokens
The Microsoft Identity platform offers a number of ways to authenticate users via [the OAuth 2.0 protocol](/entra/identity-platform/v2-protocols). In these docs, we use OAuth tokens to colloquially refer to [on-behalf-of user flows](/entra/identity-platform/v2-oauth2-on-behalf-of-flow), aka [delegated flows](/entra/identity-platform/delegated-access-primer), for apps that request tokens to perform actions for their users. The rest of this guide offers helpful resources for these app developers. 

Another common app flow we support is building [on-behalf-of app using service principals and managed identities](service-principal-managed-identity.md).
Entra tokens can also be used for [ad-hoc requests with the Azure CLI](entra.md#acquiring-an-access-token-for-a-user) or [git operations through the Git Credential Manager](entra.md#using-microsoft-entra-tokens-for-git).

> [!IMPORTANT]
> When creating a new OAuth 2.0 app, start here with Microsoft Entra OAuth apps, as [Azure DevOps OAuth apps](azure-devops-oauth.md) are planned for deprecation in 2026. [Learn more in our blog post](https://devblogs.microsoft.com/devops/no-new-azure-devops-oauth-apps-beginning-february-2025/).

### Helpful resources
Building on a new platform can be overwhelming. We provide some helpful links we think might be useful to the OAuth app development process on Microsoft Entra. For developers switching over from Azure DevOps OAuth to Microsoft Entra OAuth, we provide helpful tips to consider during your migration effort.

#### Good resources for developers
* [Quickstart: Register an application with the Microsoft identity platform](/entra/identity-platform/quickstart-register-app)
* [Add permissions to access Microsoft Graph](/entra/identity-platform/quickstart-configure-app-access-web-apis#add-permissions-to-access-microsoft-graph): Useful to learn how to add delegated permissions from an Azure resource. Instead of Microsoft Graph, select `Azure DevOps` from the list of resources instead.
* [Scopes and permissions in the Microsoft identity platform](/entra/identity-platform/scopes-oidc): Read up on the `.default` scope. See the scopes available for Azure DevOps in [our list of scopes](oauth.md#scopes).
* [Requesting permissions through consent](/entra/identity-platform/consent-types-developer)
* [Authentication libraries](/entra/identity-platform/reference-v2-libraries) and [code samples](/entra/identity-platform/sample-v2-code?tabs=apptype)
* [Manage personal access tokens via API](../../../organizations/accounts/manage-personal-access-tokens-via-api.md): Using the PAT lifecycle management APIs requires Microsoft Entra tokens and our docs and the [associated sample app](https://github.com/microsoft/azure-devops-auth-samples/tree/master/PersonalAccessTokenAPIAppSample) might be a helpful example for setting up a Microsoft Entra app to use Azure DevOps REST APIs.
* [Support and help options for developers](/entra/identity-platform/developer-support-help-options)

#### Good resources for admins
* [What is application management in Microsoft Entra ID?](/entra/identity/enterprise-apps/what-is-application-management)
* [Quickstart: Add an enterprise application](/entra/identity/enterprise-apps/add-application-portal)
* [Consent experience for applications in Microsoft Entra ID](/entra/identity-platform/application-consent-experience)

#### Building & migrating tips
> [!NOTE]
> Microsoft Entra OAuth apps doesn't natively support MSA users for Azure DevOps REST APIs. If you are building an app that must cater to MSA users or supports both Microsoft Entra and MSA users, [Azure DevOps OAuth apps](azure-devops-oauth.md) remains your best option. We are currently working on native support for MSA users through Microsoft Entra OAuth.

* **Good-to-know Azure DevOps IDs:**
  * Microsoft Entra resource identifier: `499b84ac-1321-427f-aa17-267ca6975798`
  * Resource Uri: `https://app.vssps.visualstudio.com`
  * Use the `.default` scope when requesting a token with all scopes that the app is permissioned for.
* When migrating an existing app, you may be using Azure DevOps user identifiers that don't exist in Microsoft Entra. Use the [ReadIdentities API](/rest/api/azure/devops/ims/identities/read-identities) to resolve and match the different identities in use by each identity provider.

