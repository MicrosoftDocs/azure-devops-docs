---
ms.topic: how-to
title: Authorize access to REST APIs with OAuth 2.0
description: Use OAuth 2.0 authentication to get started with the REST APIs for Azure DevOps Services.
ms.assetid: 19285121-1805-4421-B7C4-63784C9A7CFA
ms.subservice: azure-devops-security
monikerRange: 'azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 07/15/2022
---

# Authorize access to REST APIs with OAuth 2.0

[!INCLUDE [version-eq-azure-devops](../../../includes/version-eq-azure-devops.md)]

In this article, learn how to authenticate your web app users for REST API access, so your app doesn't continue to ask for usernames and passwords.

> [!NOTE]
> The following guidance is intended for Azure DevOps Services users since OAuth 2.0 is not supported on Azure DevOps Server. [Client Libraries](../../concepts/dotnet-client-libraries.md) are a series of packages built specifically for extending Azure DevOps Server functionality. For on-premises users, we recommend using [Client Libraries](../../concepts/dotnet-client-libraries.md), Windows Auth, or [Personal Access Tokens (PATs)](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) to authenticate on behalf of a user.

## About OAuth 2.0
Azure DevOps Services uses the [OAuth 2.0 protocol](https://oauth.net/2/) to authorize your app for a user and generate an access token. Use this token when you call the REST APIs from your application. When you call Azure DevOps Services APIs for that user, use that user's access token. Access tokens expire, so refresh the access token if it's expired.

:::image type="content" source="media/oauth-overview.png" alt-text="Process to get authorization.":::

## Available OAuth models
To create an OAuth 2.0 app, you can rely on [our own implementation](./azure-devops-oauth.md) or use the one available through the [Microsoft Identity Platform, aka **Azure AD OAuth**](/azure/active-directory/fundamentals/auth-oauth2). We recommend that new apps move forward with registering on Azure AD OAuth, which comes with all of the powerful features of the Microsoft Identity platform. Azure DevOps OAuth remains spported, but no active investment is being made on this model at this time.

### Azure AD OAuth
To get started with Azure AD OAuth, follow the Microsoft Identity docs. You may find the following resources helpful:
* [Quickstart: Register an application with the Microsoft identity platform](/azure/active-directory/develop/quickstart-register-app)
* [Microsoft identity platform and OAuth 2.0 On-Behalf-Of flow](/azure/active-directory/develop/v2-oauth2-on-behalf-of-flow)
* [](/azure/active-directory/develop/quickstart-configure-app-access-web-apis#delegated-permission-to-microsoft-graph)

### Azure DevOps OAuth
To get started with Azure DevOps OAuth, follow our Azure DevOps OAuth guide here.

## OAuth Scopes
These scopes are available for both OAuth models. The following scopes reflect those available via delegated (on-behalf-of user) flows only.

> [!IMPORTANT]
> Scopes only enable access to REST APIs and select Git endpoints. SOAP API access isn't supported.  

[!INCLUDE [scopes table](../../includes/scopes.md)]

> [!NOTE]
> The [PAT Management APIs](../../../organizations/accounts/manage-personal-access-tokens-via-api.md) are only available via Azure AD OAuth and still require a `user_impersonation` scope today.


## Samples

You can find a C# sample that implements OAuth to call Azure DevOps Services REST APIs in our [C# OAuth GitHub Sample](https://github.com/Microsoft/vsts-auth-samples/tree/master/OAuthWebSample).

## Related articles

* [Using Azure AD OAuth](/azure/active-directory/fundamentals/auth-oauth2)
* [Using Azure DevOps OAuth](./azure-devops-oauth.md)_
* [Default permissions and access for Azure DevOps](../../../organizations/security/permissions-access.md)
