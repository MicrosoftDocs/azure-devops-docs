---
title: Authenticate with personal access tokens
titleSuffix: Azure DevOps
ms.custom: seodec18, contentperfq4
description: Use personal access tokens (PATs) as alternate passwords to authenticate access to Azure DevOps.
ms.technology: devops-security
ms.assetid: d980d58e-4240-47c7-977c-baaa7028a1d8
ms.topic: conceptual
ms.author: chcomley
author: chcomley
ms.date: 08/25/2020
monikerRange: '>= tfs-2017'
---

# Use personal access tokens

[!INCLUDE [version-tfs-2017-through-vsts](../../includes/version-tfs-2017-through-vsts.md)]

A personal access token (PAT) is used as an alternate password to authenticate into Azure DevOps. In this article, learn how to create, use, modify, and revoke PATs for Azure DevOps.

If you're working within Microsoft tools, then your Microsoft account (MSA) or Azure Active Directory (Azure AD) is an acceptable and well-supported approach. But, if you're working with 3rd party tools that don't support Microsoft or Azure AD accounts – or you don't want to provide your primary credentials to the tool – you can make use of PATs to limit your risk. 

PATs are easy to create when you need them and easy to revoke when you don’t. To set up PATs for non-Microsoft tools, use [Git credential managers](../../repos/git/set-up-credential-managers.md) or create them manually. We recommend that you review our [authentication guidance](../../integrate/get-started/authentication/authentication-guidance.md) to help you choose the correct authentication mechanism. For smaller projects that require a less robust solution, PATs are a simple alternative. Unless your users are using a credential manager, they have to enter their credentials each time.

[!INCLUDE [personal-access-tokens](../../repos/git/includes/personal-access-tokens.md)]

## Related articles

- [About security and identity](../security/about-security-identity.md)
- [Default permissions and access for Azure DevOps](../security/permissions-access.md)
- [Revoke other users' PATs](admin-revoke-user-pats.md)

::: moniker range="azure-devops"

## FAQ

### Q: Is there a way to renew a PAT via REST API?

A: No, we don't have a REST API to renew a PAT. You can only regenerate a PAT within the user interface (UI).

### Q: Can I use basic auth with all of Azure DevOps REST APIs?

A: No. You can use basic auth with most of them, but [organizations and profiles](/rest/api/azure/devops/) only support [OAuth](../../integrate/get-started/authentication/oauth.md).

::: moniker-end
