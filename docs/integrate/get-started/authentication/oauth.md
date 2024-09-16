---
ms.topic: how-to
title: Authorize access to REST APIs with OAuth 2.0
description: Use OAuth 2.0 authentication to get started with the REST APIs for Azure DevOps Services.
ms.assetid: 19285121-1805-4421-B7C4-63784C9A7CFA
ms.subservice: azure-devops-security
monikerRange: 'azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 11/10/2023
---

# Authorize access to REST APIs with OAuth 2.0

[!INCLUDE [version-eq-azure-devops](../../../includes/version-eq-azure-devops.md)]

Learn how to authenticate your web app users for REST API access, so your app doesn't continue to ask for usernames and passwords.

> [!NOTE]
> - The following guidance is intended for Azure DevOps Services users since OAuth 2.0 isn't supported on Azure DevOps Server. Client Libraries are a series of packages built specifically for extending Azure DevOps Server functionality. For on-premises users, we recommend using [Client Libraries](../../concepts/dotnet-client-libraries.md), Windows Auth, or [personal access tokens (PATs)](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) to authenticate on behalf of a user.
> - For more information, see the [C# OAuth GitHub sample](https://github.com/Microsoft/vsts-auth-samples/tree/master/OAuthWebSample).

## About OAuth 2.0

Azure DevOps Services uses the [OAuth 2.0 protocol](https://oauth.net/2/) to authorize your app for a user and generate an access token. Use this token when you call the REST APIs from your application. When you call Azure DevOps Services APIs for that user, use that user's access token. Access tokens expire, so refresh the access token if it's expired.

:::image type="content" source="media/oauth-overview.png" alt-text="Process to get authorization.":::

## Available OAuth models

When you create an OAuth 2.0 app use [**Microsoft Entra ID OAuth**](/azure/active-directory/fundamentals/auth-oauth2). [Azure DevOps OAuth 2.0](azure-devops-oauth.md) is on the path of deprecation for October 2025.

<a name='azure-active-directory-oauth'></a>

### Microsoft Entra ID OAuth

When you create a Microsoft Entra ID OAuth app, your app is issued Microsoft Entra tokens, not Azure DevOps access tokens. These tokens have a standard one-hour duration before expiration.

For more information, see the following articles:
* [Register an application with the Microsoft identity platform](/azure/active-directory/develop/quickstart-register-app)
* [Microsoft identity platform and OAuth 2.0 On-Behalf-Of flow](/azure/active-directory/develop/v2-oauth2-on-behalf-of-flow)
* [Configure a client application to access a web API](/azure/active-directory/develop/quickstart-configure-app-access-web-apis#delegated-permission-to-microsoft-graph): The linked example demonstrates how to choose a permission for the Microsoft Graph resource. When you create an app, select `Azure DevOps` from the list of resources instead.
* [Manage PATs via API](../../../organizations/accounts/manage-personal-access-tokens-via-api.md)

> [!NOTE]
> When you create apps that use other APIs, make sure to select the [scopes](#scopes) needed for those APIs.

### Azure DevOps OAuth

> [!NOTE]
> Azure DevOps OAuth is slated for deprecation in October 2025. See this blog post for more.

For existing apps, look at the [Azure DevOps OAuth guide](./azure-devops-oauth.md). You can also [manage which Azure DevOps apps are authorized](../../../organizations/settings/manage-authorizations.md) to access your resources.

## Scopes

Developers are expected to specify what scopes they require from their users. Scopes are available on both OAuth models. The following scopes are available via delegated (on-behalf-of user) flows only.
To find out what scopes you need for your app, look under the `scopes` header on the API Reference page for each API you're using. 

Some scopes might be inclusive of other scopes, for example, `code_manage` includes `code_write`. Consider what is the minimal number of scopes you need when requesting scope consent from users.

> [!IMPORTANT]
> Scopes only enable access to REST APIs and select Git endpoints. SOAP API access isn't supported.

[!INCLUDE [scopes table](../../includes/scopes.md)]

## Related articles

* [OAuth 2.0 authentication with Microsoft Entra ID](/azure/active-directory/fundamentals/auth-oauth2)
