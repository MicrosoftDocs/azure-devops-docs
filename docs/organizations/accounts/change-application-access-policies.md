---
title: Change application access policies for organizations
titleSuffix: Azure DevOps Services
ms.custom: seodec18
description: Manage policies for alternate authentication, like OAuth, SSH, and personal access tokens (PATs) so you don't have to enter user credentials multiple times.
ms.technology: devops-accounts
ms.assetid: 2fdfbfe2-b9b2-4d61-ad3e-45f11953ef3e
ms.topic: conceptual
ms.author: chcomley
author: chcomley
ms.date: 05/06/2020
monikerRange: 'azure-devops'
---

# Change application connection policies for your organization

[!INCLUDE [version-vsts-only](../../includes/version-vsts-only.md)]

[!INCLUDE [alt-creds-deprecation-notice](../../includes/alt-creds-deprecation-notice.md)]

In this article, learn how to manage the policies that determine which applications can integrate with services and resources in your organization. To access your organization without asking for user credentials multiple times, applications use the following authentication methods.

* [OAuth](../../integrate/get-started/authentication/oauth.md) to generate tokens for accessing [REST APIs for Azure DevOps](../../integrate/get-started/rest/basics.md). The [Organizations](/rest/api/azure/devops/account) and [Profiles](/rest/api/azure/devops/profile/) APIs support only OAuth.

* [SSH authentication](../../repos/git/use-ssh-keys-to-authenticate.md) to generate encryption keys for using Linux, macOS, and Windows running [Git for Windows](https://www.git-scm.com/download/win), but you can't use [Git credential managers](../../repos/git/set-up-credential-managers.md) or [personal access tokens](use-personal-access-tokens-to-authenticate.md) for HTTPS authentication.
 
* [Personal access tokens](use-personal-access-tokens-to-authenticate.md) to generate tokens for:

   * Accessing specific resources or activities, like builds or work items
   * Clients like Xcode and NuGet that require usernames and passwords as basic credentials and don't support Microsoft account and Azure Active Directory features like multi-factor authentication
   * Accessing [REST APIs for Azure DevOps](../../integrate/get-started/rest/basics.md)

By default, your organization allows access for all authentication methods.
You can limit access, but you must specifically restrict access for each method.
When you deny access to an authentication method, no application can access your organization. Any app that previously had access gets an authentication error and has no access to your organization.

> To remove access for personal access tokens,
> you must [revoke them](use-personal-access-tokens-to-authenticate.md).

## Prerequisites

To change an application connection policy, you need at least Basic access and organization Owner or Project Collection Administrator permissions.
[How do I find the organization Owner?](../security/lookup-organization-owner-admin.md)

[!INCLUDE [manage-policies](../../includes/manage-policies.md)]


## Related articles

- [Assign access levels and extensions by group membership](assign-access-levels-and-extensions-by-group-membership.md)
- [Manage security policies, like Conditional Access with Azure AD](manage-conditional-access.md)
- [Disable Request Access Policy](disable-request-access-policy.md)
- [Restrict users from creating new organizations with Azure AD policy](azure-ad-tenant-policy-restrict-org-creation.md)
- [Restrict Team and Project Administrators from inviting new users](../security/restrict-invitations.md)
