---
title: Use personal access tokens
titleSuffix: Azure DevOps
ms.custom: seodec18, contperf-fy20q4, contperf-fy22q3
description: Use personal access tokens (PATs) as alternate passwords to authenticate to Azure DevOps.
ms.technology: devops-security
ms.assetid: d980d58e-4240-47c7-977c-baaa7028a1d8
ms.topic: how-to
ms.author: chcomley
author: chcomley
ms.date: 04/13/2022
monikerRange: '<= azure-devops'
---

# Use personal access tokens

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

You can use a personal access token (PAT) as an alternate password to authenticate into Azure DevOps. In this article, we show you how to create, use, modify, and revoke PATs for Azure DevOps.

## About PATs

A personal access token contains your security credentials for Azure DevOps. A PAT identifies you, your accessible organizations, and scopes of access. As such, they're as critical as passwords, so you should treat them the same way.

If you're working within Microsoft tools, then your Microsoft account (MSA) or Azure Active Directory (Azure AD) is an acceptable and well-supported approach. But, if you're working with third-party tools that don't support Microsoft or Azure AD accounts – or you don't want to provide your primary credentials to the tool – use PATs to limit your risk.

You can create and manage your PATs through one of the following ways:

* the user interface in your user settings, which is described in detail in this article
* through the [PAT Lifecycle Management API](manage-personal-access-tokens-via-api.md)

To set up PATs for non-Microsoft tools, use [Git credential managers](../../repos/git/set-up-credential-managers.md) or create them manually. We recommend that you review our [authentication guidance](../../integrate/get-started/authentication/authentication-guidance.md) to help you choose the correct authentication mechanism. For smaller projects that require a less robust solution, PATs are a simple alternative. Unless your users are using a credential manager, they have to enter their credentials each time.

[!INCLUDE [personal-access-tokens](../../repos/git/includes/personal-access-tokens.md)]

## Related articles

* [About security, authentication, and authorization](../security/about-security-identity.md)
* [Default permissions and access for Azure DevOps](../security/permissions-access.md)
* [Revoke user PATs (for admins)](admin-revoke-user-pats.md)

::: moniker range="azure-devops"

## FAQs

### Q: Is there a way to renew a PAT via REST API?

A: Yes, there's a way to renew, manage, and create PATs using our [PAT Lifecycle Management APIs](manage-personal-access-tokens-via-api.md). For more information, see [Manage PATs using REST API](manage-personal-access-tokens-via-api.md) and our [FAQ](manage-personal-access-tokens-via-api.md#q-how-can-i-regeneraterotate-pats-through-the-api-i-saw-that-option-in-the-ui-but-i-dont-see-a-similar-method-in-the-api).

### Q: Can I use basic auth with all Azure DevOps REST APIs?

A: No. You can use basic auth with most Azure DevOps REST APIs, but [organizations and profiles](/rest/api/azure/devops/) only support [OAuth](../../integrate/get-started/authentication/oauth.md). For more information, see [Manage PATs using REST API](manage-personal-access-tokens-via-api.md).

### Q: What happens if I accidentally check my PAT into a public repository on GitHub?

A: Azure DevOps scans for PATs checked into public repositories on GitHub. When we find a leaked token, we immediately send a detailed email notification to the token owner and log an event to your Azure DevOps organization's [audit log](../audit/azure-devops-auditing.md#review-audit-log). We encourage affected users to mitigate immediately by [rotating or revoking the leaked PAT](use-personal-access-tokens-to-authenticate.md#revoke-a-pat). 

There's a policy for managing leaked PATs! For more information, see [Revoke leaked PATs automatically](manage-pats-with-policies-for-administrators.md#revoke-leaked-pats-automatically).

::: moniker-end
