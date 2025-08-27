---
ms.topic: how-to
title: OAuth 2.0 Authentication for Azure DevOps REST APIs
description: Learn how to use OAuth 2.0 authentication with Azure DevOps REST APIs, with Microsoft Entra ID as the recommended approach.
ms.assetid: 19285121-1805-4421-B7C4-63784C9A7CFA
ai-usage: ai-assisted
ms.subservice: azure-devops-security
monikerRange: 'azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 07/14/2025
---

# OAuth 2.0 authentication for Azure DevOps REST APIs

[!INCLUDE [version-eq-azure-devops](../../../includes/version-eq-azure-devops.md)]

Learn how to use OAuth 2.0 to authenticate your applications for Azure DevOps REST API access without requiring users to repeatedly provide credentials.

> [!IMPORTANT]
> We recommend that you use Microsoft Entra ID OAuth for new applications. Azure DevOps OAuth 2.0 is deprecated and no longer accepts new registrations as of April 2025, with full deprecation planned for 2026.

## How OAuth 2.0 works with Azure DevOps

> [!NOTE]
> OAuth 2.0 is available only for Azure DevOps Services, not Azure DevOps Server. For on-premises scenarios, use [Client libraries](../../concepts/dotnet-client-libraries.md), Windows Authentication, or [personal access tokens](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md).

Azure DevOps Services uses the [OAuth 2.0 protocol](https://oauth.net/2/) to authorize applications and generate access tokens for REST API calls. The process involves the following steps:

- **App registration**: Register your application with the OAuth provider.
- **User authorization**: Grant permission for your app to access user data.
- **Token exchange**: Receive an access token to make API calls.
- **API access**: Use the token for authenticated REST API requests.
- **Token refresh**: Refresh expired tokens to maintain access.

:::image type="content" source="media/oauth-overview.png" alt-text="Diagram that shows the OAuth 2.0 authorization flow process from app registration to API access.":::

## OAuth implementation options

Choose the appropriate OAuth implementation based on your application's needs.

### Microsoft Entra ID OAuth (recommended)

Microsoft Entra ID OAuth provides the most secure and future-proof authentication method for Azure DevOps applications. Benefits include:

- **Enterprise integration**: Seamless integration with existing Microsoft Entra ID infrastructure.
- **Enhanced security**: Advanced security features include Microsoft Entra Conditional Access and multifactor authentication.
- **Future support**: Actively maintained and supported platform.
- **Unified identity**: Single sign-on experience across Microsoft services.

**Get started**: Follow our [Microsoft Entra ID OAuth guide](entra-oauth.md) for implementation details and migration guidance.

### Azure DevOps OAuth (deprecated)

> [!WARNING]
> Azure DevOps OAuth is deprecated. New app registrations are no longer accepted as of April 2025. The service is scheduled for full deprecation in 2026. Migrate existing applications to Microsoft Entra ID OAuth.

For existing Azure DevOps OAuth applications:

- Review the [Azure DevOps OAuth guide](./azure-devops-oauth.md) for current implementation details.
- Plan migration to Microsoft Entra ID OAuth before 2026.
- [Manage existing app authorizations](../../../organizations/settings/manage-authorizations.md) as needed.

**Migration planning**: Start planning your migration to Microsoft Entra ID OAuth early. The [Migration guide](entra-oauth.md) provides tips and considerations for a smooth transition.

## OAuth scopes

Scopes define what Azure DevOps resources your application can access. Both Microsoft Entra ID OAuth and Azure DevOps OAuth use the same scope definitions.

### Key scope considerations

- **Principle of least privilege**: Request only the minimum scopes your application needs.
- **Scope inheritance**: Some scopes include others (for example, `vso.code_manage` includes `vso.code_write`).
- **API coverage**: Scopes enable access to REST APIs and select Git endpoints only (SOAP APIs not supported).
- **User consent**: Users must explicitly grant permission for each requested scope.

### Find required scopes

To determine what scopes your application needs:

- Check the API reference documentation for each endpoint you plan to use.
- Look for the `scopes` header on each API page.
- To avoid requesting redundant permissions, consider scope relationships.

### Available scopes

[!INCLUDE [scopes table](../../includes/scopes.md)]

## Frequently asked questions

### Q. Can I use OAuth with mobile applications?

A. No. Azure DevOps Services supports only the web server flow (authorization code flow), which requires securely storing an app secret. Mobile applications can't securely store secrets, which makes OAuth unsuitable for mobile scenarios.

**Alternative for mobile apps**: Use [personal access tokens](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) for mobile application authentication.

### Q. Does OAuth work with all Azure DevOps APIs?

A. OAuth supports REST APIs and select Git endpoints only. SOAP APIs don't support OAuth authentication.

### Q. How do I migrate from Azure DevOps OAuth to Microsoft Entra ID OAuth?

A. Follow the [Microsoft Entra ID OAuth migration guide](entra-oauth.md), which includes:

- Step-by-step migration instructions.
- Code examples and best practices.
- Timeline considerations for the deprecation.

### Q. What happens to my existing Azure DevOps OAuth app after 2026?

A. Existing Azure DevOps OAuth apps stop working when the service is fully deprecated in 2026. Plan your migration to Microsoft Entra ID OAuth well before this deadline.

## Choose your implementation path

- **For new applications:** [Build with Microsoft Entra ID OAuth](entra-oauth.md)
- **For existing Azure DevOps OAuth apps:** [Plan your migration to Microsoft Entra ID](entra-oauth.md)
- **For existing apps that need immediate support:** [Azure DevOps OAuth documentation](azure-devops-oauth.md)

## Related content

- [Authentication guidance overview](authentication-guidance.md)
- [Manage app authorizations](../../../organizations/settings/manage-authorizations.md)
