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

Building on a new platform can be overwhelming. Below, we provide some helpful links we think might be useful to the OAuth app development process on Entra. For folks migrating from Azure DevOps OAuth to Entra OAuth, we provide helpful tips to consider during your migration effort.

#### Good resources for developers
* [OAuth 2.0 and OpenID Connect (OIDC) in the Microsoft identity platform](/entra/identity-platform/v2-protocols)
* [Microsoft identity platform and OAuth 2.0 On-Behalf-Of flow](/entra/identity-platform/v2-oauth2-on-behalf-of-flow)
* [Understanding delegated access](/entra/identity-platform/delegated-access-primer) 
* [Quickstart: Register an application with the Microsoft identity platform](/entra/identity-platform/quickstart-register-app)
* [Add permissions to access Microsoft Graph](/entra/identity-platform/quickstart-configure-app-access-web-apis#add-permissions-to-access-microsoft-graph)
  * Helpful to understand how to add delegatd permissions from the Azure DevOps resource, instead of Microsoft Graph. When you create an app, select `Azure DevOps` from the list of resources instead.
  * Azure DevOps OAuth does not support application permissions through Entra. To learn more about application identity support for Azure DevOps, read more about [managed identities and service principal support](service-principal-managed-identity?view=azure-devops).
* [Scopes and permissions in the Microsoft identity platform](/entra/identity-platform/scopes-oidc)
  * Read up on how to use the `.default` scope
* [Requesting permissions through consent](/entra/identity-platform/consent-types-developer)

* [Microsoft identity platform authentication libraries](/entra/identity-platform/reference-v2-libraries)
* [Microsoft identity platform code samples](/entra/identity-platform/sample-v2-code?tabs=apptype)
* [Manage PATs via API](../../../organizations/accounts/manage-personal-access-tokens-via-api.md)
  * A guide on setting up an Entra app used for our PAT lifecycle management APIs. This walkthrough and its [associated sample app](https://github.com/microsoft/azure-devops-auth-samples/tree/master/PersonalAccessTokenAPIAppSample) might be helpful for you to get started with Entra.
* [Support and help options for developers](/entra/identity-platform/developer-support-help-options)

#### Good resources for admins
* [What is application management in Microsoft Entra ID?](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/what-is-application-management)
* [Quickstart: Add an enterprise application](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/add-application-portal)
* [Consent experience for applications in Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/identity-platform/application-consent-experience)

#### Building & migrating tips
* Azure DevOps
  * Entra resource identifier: `499b84ac-1321-427f-aa17-267ca6975798`
  * Resource Uri: `https://app.vssps.visualstudio.com`
  * Use the `.default` scope when requesting a token with all scopes that the app has been permissioned for.
* When building an Azure DevOps OAuth app, you may have relied on Azure DevOps user identifiers that do not exist in Entra. Use the [ReadIdentities API](https://learn.microsoft.com//rest/api/azure/devops/ims/identities/read-identities) to resolve and match the different identities in use.


### Azure DevOps OAuth

> [!IMPORTANT]
> Azure DevOps OAuth is slated for deprecation in October 2025. [Learn more in our blog post](https://devblogs.microsoft.com/devops/?p=69491).

For existing apps, look at the [Azure DevOps OAuth guide](./azure-devops-oauth.md). You can also [manage which Azure DevOps apps are authorized](../../../organizations/settings/manage-authorizations.md) to access your resources.


## Scopes

Developers are expected to specify what scopes they require from their users. Scopes are available on both OAuth models. The following scopes are available via delegated (on-behalf-of user) flows only.
To find out what scopes you need for your app, look under the `scopes` header on the API Reference page for each API you're using. 

Some scopes might be inclusive of other scopes, for example, `vso.code_manage` includes `vso.code_write`. `vso.profile` is inherited by many other scopes. Consider what is the minimal number of scopes you need when requesting scope consent from users.

> [!NOTE]
> Scopes only enable access to REST APIs and select Git endpoints. SOAP API access isn't supported.

[!INCLUDE [scopes table](../../includes/scopes.md)]

## Related articles

* [Choosing the right authentication method](authentication-guidance.md)
