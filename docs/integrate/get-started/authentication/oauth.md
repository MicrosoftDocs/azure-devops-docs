---
ms.topic: how-to
title: Authorize access to REST APIs with OAuth 2.0
description: Use OAuth 2.0 authentication to get started with the REST APIs for Azure DevOps Services.
ms.assetid: 19285121-1805-4421-B7C4-63784C9A7CFA
ms.subservice: azure-devops-security
monikerRange: 'azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 10/21/2024
---

# Authorize access to REST APIs with OAuth 2.0

[!INCLUDE [version-eq-azure-devops](../../../includes/version-eq-azure-devops.md)]

Learn how to authenticate your web app users for REST API access, so your app doesn't continue to ask for usernames and passwords.

> [!NOTE]
> - The following guidance is intended for Azure DevOps Services users since OAuth 2.0 isn't supported on Azure DevOps Server. Client Libraries are a series of packages built specifically for extending Azure DevOps Server functionality. For on-premises users, we recommend using [Client Libraries](../../concepts/dotnet-client-libraries.md), Windows Auth, or [personal access tokens (PATs)](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) to authenticate on behalf of a user.
> - For more information, see the [C# OAuth GitHub sample](https://github.com/Microsoft/vsts-auth-samples/tree/master/OAuthWebSample).

## About OAuth 2.0

Azure DevOps Services uses the [OAuth 2.0 protocol](https://oauth.net/2/) to authorize your app for a user and generate an access token. Use this token when you call the REST APIs from your application. When you call Azure DevOps Services APIs for that user, use that user's access token. Access tokens expire, so refresh the access token if expired.

:::image type="content" source="media/oauth-overview.png" alt-text="Process to get authorization.":::

## Available OAuth models

> [!IMPORTANT]
> When creating a new OAuth 2.0 app, use Microsoft Entra ID OAuth. Azure DevOps OAuth 2.0 is slated for deprecation in 2026. Starting March 2025, we will stop accepting new Azure DevOps OAuth apps. [Learn more in our blog post](https://devblogs.microsoft.com/devops/no-new-azure-devops-oauth-apps-beginning-february-2025/).

<a name='azure-active-directory-oauth'></a>

### Microsoft Entra ID OAuth

Building on a new platform can be overwhelming. In [this guide to building a Microsoft Entra app for Azure DevOps](entra-oauth.md), we collect helpful links that might be useful to kicking off the OAuth app development process on Microsoft Entra. For folks migrating from Azure DevOps OAuth to Microsoft Entra OAuth, we offer tips to consider during your migration effort.

### Azure DevOps OAuth

For existing apps, see the [Azure DevOps OAuth app guide](./azure-devops-oauth.md). You can also [manage which Azure DevOps apps are authorized](../../../organizations/settings/manage-authorizations.md) to access your resources.

## Scopes

Developers are expected to specify what scopes they require from their users. The same scopes are available on both OAuth models. The following scopes are available via delegated (on-behalf-of user) flows only.
To find out what scopes you need for your app, look under the `scopes` header on the API Reference page for each API you're using. 

Some scopes might be inclusive of other scopes, for example, `vso.code_manage` includes `vso.code_write`. For example, many scopes inherit from `vso.profile`. Consider what is the minimal number of scopes you need when requesting scope consent from users.

> [!NOTE]
> Scopes only enable access to REST APIs and select Git endpoints. SOAP API access isn't supported.

[!INCLUDE [scopes table](../../includes/scopes.md)]

## Frequently asked questions (FAQs)

#### Q: Can I use OAuth with my mobile phone app?

A: No. Azure DevOps Services only supports the web server flow, so there's no way to implement OAuth, as you can't securely store the app secret.

#### Q: Can I use OAuth with the SOAP endpoints and REST APIs?

A: No. OAuth is only supported in the REST APIs.

## Related articles

* [Choosing the right authentication method](authentication-guidance.md)
* [Building for Azure DevOps with Microsoft Entra OAuth apps](entra-oauth.md)
* [Using Azure DevOps OAuth](azure-devops-oauth.md)
