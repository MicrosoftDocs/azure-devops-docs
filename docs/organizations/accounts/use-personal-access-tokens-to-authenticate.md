---
title: Authenticate with personal access tokens
titleSuffix: Azure DevOps
ms.custom: seodec18, contperf-fy20q4
description: Use personal access tokens (PATs) as alternate passwords to authenticate access to Azure DevOps.
ms.technology: devops-security
ms.assetid: d980d58e-4240-47c7-977c-baaa7028a1d8
ms.topic: conceptual
ms.author: chcomley
author: chcomley
ms.date: 06/14/2021
monikerRange: '>= tfs-2017'
---

# Use personal access tokens

[!INCLUDE [version-tfs-2017-through-vsts](../../includes/version-tfs-2017-through-vsts.md)]

A personal access token (PAT) is used as an alternate password to authenticate into Azure DevOps. Learn how to create, use, modify, and revoke PATs for Azure DevOps.

If you're working within Microsoft tools, then your Microsoft account (MSA) or Azure Active Directory (Azure AD) is an acceptable and well-supported approach. But, if you're working with third-party tools that don't support Microsoft or Azure AD accounts – or you don't want to provide your primary credentials to the tool – you can make use of PATs to limit your risk.

PATs are easy to create when you need them and easy to revoke when you don’t. To set up PATs for non-Microsoft tools, use [Git credential managers](../../repos/git/set-up-credential-managers.md) or create them manually. We recommend that you review our [authentication guidance](../../integrate/get-started/authentication/authentication-guidance.md) to help you choose the correct authentication mechanism. For smaller projects that require a less robust solution, PATs are a simple alternative. Unless your users are using a credential manager, they have to enter their credentials each time.

You can create and manage your PATs through one of two ways:

* the user interface in your user settings, which is described in detail below, and
* through the [PAT Lifecycle Management API](manage-personal-access-tokens-via-api.md).

> [!IMPORTANT]
> For organizations backed by Azure Active Directory, you have 90 days to sign in with your new PAT, otherwise it's considered inactive. For more information, see [User sign-in frequency for Conditional Access](/azure/active-directory/conditional-access/howto-conditional-access-session-lifetime).

[!INCLUDE [personal-access-tokens](../../repos/git/includes/personal-access-tokens.md)]

## Related articles

* [About security, authentication, and authorization](../security/about-security-identity.md)
* [Default permissions and access for Azure DevOps](../security/permissions-access.md)
* [Revoke other users' PATs](admin-revoke-user-pats.md)

::: moniker range="azure-devops"

## FAQs

### Q: Is there a way to renew a PAT via REST API?

A: Yes, there's a way to renew, manage, and create PATs using our [PAT Lifecycle Management APIs](manage-personal-access-tokens-via-api.md). Read more about renewing/regenerating/rotating PATs in our [FAQ](manage-personal-access-tokens-via-api.md#q-how-can-i-regeneraterotate-pats-through-the-api-i-saw-that-option-in-the-ui-but-i-dont-see-a-similar-method-in-the-api).

### Q: Can I use basic auth with all of Azure DevOps REST APIs?

A: No. You can use basic auth with most of them, but [organizations and profiles](/rest/api/azure/devops/) only support [OAuth](../../integrate/get-started/authentication/oauth.md).

### Q: What happens if I accidentally check my PAT into a public repository on GitHub?

A: Azure DevOps scans for PATs checked into public repositories on GitHub. When we find a leaked token, we immediately send a detailed email notification to the token owner and log an event to your Azure DevOps organization's [audit log](../audit/azure-devops-auditing.md#review-audit-log). We encourage affected users to mitigate immediately by [rotating or revoking the leaked PAT](use-personal-access-tokens-to-authenticate.md#revoke-a-pat).

::: moniker-end
