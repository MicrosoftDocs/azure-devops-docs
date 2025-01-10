---
title: Building Azure DevOps integrations with Microsoft Entra OAuth apps
description: Use Microsoft Entra authentication to integrate with Azure DevOps Services.
ms.assetid: 19285121-1805-4421-B7C4-63784C9A7CFA
ms.subservice: azure-devops-security
ms.topic: conceptual
monikerRange: 'azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 01/08/2025
---

# Build Azure DevOps integrations with Microsoft Entra OAuth apps

[!INCLUDE [version-eq-azure-devops](../../../includes/version-eq-azure-devops.md)]

This guide provides information and links to more information on building a Microsoft Entra OAuth app for Azure DevOps. Microsoft Entra ID offers robust identity and access management capabilities, which allow you to authenticate users and perform actions on their behalf using OAuth tokens. Use this information to apply Microsoft Entra OAuth tokens for various app flows, including delegated access and service principal-based access.

## Use Microsoft Entra OAuth tokens

The Microsoft identity platform offers many ways to authenticate users via [the OAuth 2.0 protocol](/entra/identity-platform/v2-protocols). In these docs, we use OAuth tokens to colloquially refer to [on-behalf-of user flows](/entra/identity-platform/v2-oauth2-on-behalf-of-flow), also known as [delegated flows](/entra/identity-platform/delegated-access-primer), for apps that request tokens to perform actions for their users. The rest of this guide offers helpful resources for these app developers. 

Another common app flow we support is building [on-behalf-of app using service principals and managed identities](service-principal-managed-identity.md).
Microsoft Entra tokens can also be used for [ad-hoc requests with the Azure CLI](entra.md#acquire-user-tokens-in-azure-cli) or [git operations through the Git Credential Manager](entra.md#git-operations-with-git-credential-manager).

> [!IMPORTANT]
> When creating a new OAuth 2.0 app, start here with Microsoft Entra OAuth apps, as [Azure DevOps OAuth apps](azure-devops-oauth.md) are planned for deprecation in 2026. [Learn more in our blog post](https://devblogs.microsoft.com/devops/no-new-azure-devops-oauth-apps-beginning-february-2025/).

## Resources for developers

* [Register an application with the Microsoft identity platform](/entra/identity-platform/quickstart-register-app)
* [Add permissions for access to Microsoft Graph](/entra/identity-platform/quickstart-configure-app-access-web-apis#add-permissions-to-access-microsoft-graph): Learn how to add delegated permissions from an Azure resource. Instead of Microsoft Graph, select `Azure DevOps` from the list of resources.
* [Read about scopes and permissions in the Microsoft identity platform](/entra/identity-platform/scopes-oidc): Understand the `.default` scope. See the scopes available for Azure DevOps in [our list of scopes](oauth.md#scopes).
* [Request permissions through consent](/entra/identity-platform/consent-types-developer)
* [Use authentication libraries](/entra/identity-platform/reference-v2-libraries) and [code samples](/entra/identity-platform/sample-v2-code?tabs=apptype)
* [Manage personal access tokens via API](../../../organizations/accounts/manage-personal-access-tokens-via-api.md): Use the PAT lifecycle management APIs with Microsoft Entra tokens. Our docs and the [associated sample app](https://github.com/microsoft/azure-devops-auth-samples/tree/master/PersonalAccessTokenAPIAppSample) provide examples for setting up a Microsoft Entra app to use Azure DevOps REST APIs.
* [Explore support and help options for developers](/entra/identity-platform/developer-support-help-options)

### Resources for admins

* [Understand application management in Microsoft Entra ID](/entra/identity/enterprise-apps/what-is-application-management)
* [Add an enterprise application](/entra/identity/enterprise-apps/add-application-portal)
* [Explore the consent experience for applications in Microsoft Entra ID](/entra/identity-platform/application-consent-experience)

## Tips for building & migrating

> [!NOTE]
> Microsoft Entra OAuth apps don't natively support Microsoft account (MSA) users for Azure DevOps REST APIs. If you're building an app that must cater to MSA users or support both Microsoft Entra and MSA users, [Azure DevOps OAuth apps](azure-devops-oauth.md) remain your best option. We're currently working on native support for MSA users through Microsoft Entra OAuth.

* **Important Azure DevOps IDs:**
  * Microsoft Entra resource identifier: `499b84ac-1321-427f-aa17-267ca6975798`
  * Resource URI: `https://app.vssps.visualstudio.com`
  * Use the `.default` scope when requesting a token with all scopes that the app is permissioned for.
* When you migrate an existing app, you might use Azure DevOps user identifiers that don't exist in Microsoft Entra. Use the [ReadIdentities API](/rest/api/azure/devops/ims/identities/read-identities) to resolve and match the different identities used by each identity provider.

## Related articles

- [Authenticate to Azure DevOps with Microsoft Entra](entra.md)
- [Use service principals & managed identities in Azure DevOps](service-principal-managed-identity.md)
