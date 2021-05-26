---
title: Change application access, security policies for organizations
titleSuffix: Azure DevOps Services
ms.custom: seodec18
description: Manage policies for security, like conditional access, OAuth, SSH, and personal access tokens (PATs), so you don't have to enter user credentials many times.
ms.technology: devops-accounts
ms.assetid: 2fdfbfe2-b9b2-4d61-ad3e-45f11953ef3e
ms.topic: conceptual
ms.author: chcomley
author: chcomley
ms.date: 04/19/2021
monikerRange: 'azure-devops'
---

# Change application connection & security policies for your organization

[!INCLUDE [version-vsts-only](../../includes/version-vsts-only.md)]

[!INCLUDE [alt-creds-deprecation-notice](../../includes/alt-creds-deprecation-notice.md)]

Learn how to manage your security policies and the policies that determine which applications can integrate with services and resources in your organization. By default, your organization allows access for most authentication methods.
You can limit access, but you must specifically restrict access for each method.
When you deny access to an authentication method, no application can access your organization. Any application that previously had access gets an authentication error and has no access to your organization.

## Application connection policies

To access your organization without asking for user credentials multiple times, applications use the following authentication methods.

* [**OAuth**](../../integrate/get-started/authentication/oauth.md) to generate tokens for accessing [REST APIs for Azure DevOps](/rest/api/azure/devops/). The [Organizations](/rest/api/azure/devops/account) and [Profiles](/rest/api/azure/devops/profile/) APIs support only OAuth.

* [**SSH authentication**](../../repos/git/use-ssh-keys-to-authenticate.md) to generate encryption keys for using Linux, macOS, and Windows running [Git for Windows](https://www.git-scm.com/download/win), but you can't use [Git credential managers](../../repos/git/set-up-credential-managers.md) or [personal access tokens](use-personal-access-tokens-to-authenticate.md) (PATs) for HTTPS authentication.
 
* [**PATs**](use-personal-access-tokens-to-authenticate.md) to generate tokens for:

   * Accessing specific resources or activities, like builds or work items
   * Clients like Xcode and NuGet that require usernames and passwords as basic credentials and don't support Microsoft account and Azure Active Directory features like multi-factor authentication
   * Accessing [REST APIs for Azure DevOps](/rest/api/azure/devops/)

To remove access for PATs, you must [revoke them](use-personal-access-tokens-to-authenticate.md).

## Tenant level policies

You can use the tenant level policy to restrict creating new organizations to desired users only. Check [restrict organization creation](azure-ad-tenant-policy-restrict-org-creation.md) for more details.

## Conditional access policies 

Azure DevOps honors all conditional access policies 100% for our Web flows. For third-party client flow, like using a PAT with git.exe, we support IP fencing policies only - we don't support MFA policies. See the following examples:
- Policy 1 - Block all access from outside of IP range x, y, and z.
    * Accessing Azure DevOps via the web, the user's allowed from IP x, y, and z. If outside of that list, the user's blocked.
    * Accessing Azure DevOps via alt-auth, the user's allowed from IP x, y, and z. If outside of that list, the user's blocked.
- Policy 2 - Require MFA when outside of IP range x, y, and z.
    * Accessing Azure DevOps via the web, the user's allowed from IP x, y, and z. The user is prompted for MFA if outside of that list.
    * Accessing Azure DevOps via alt-auth, the user's allowed from IP x, y, and z. If outside of that list, the user's blocked.

By default, your organization allows access for all authentication methods.
You can limit access, but you must specifically restrict access for each method.
When you deny access to an authentication method, no application can access your organization. Any app that previously had access gets an authentication error and has no access to your organization.

> [!NOTE]
> We support IP fencing conditional access policies both for IPv4 and IPv6.

## Security policies

You can enable or disable the following security policy.

- **Allow public projects** - Allows non-members of a project and users who aren't signed in read-only, limited access to the project's artifacts and services. Anonymous access is used to access both private and public repositories. Learn more at [Make your project public](../public/make-project-public.md) and [Enable anonymous access to projects for your organization](../public/create-public-project.md#enable-anonymous-access-to-projects-for-your-organization).
- **Enable Azure Active Directory (Azure AD) Conditional Access Policy (CAP) validation** - this policy is set to *off* by default and only applies to other authentication methods aside from the web flow. This policy doesn't apply for CAPs set in Azure AD, no matter the settings in Azure DevOps.	

   You can require the following conditions, for example:	
    - Security group membership	
    - Location and network identity	
    - Specific operating system	
    - Enabled device in a management system	

   Depending on which conditions the user satisfies, you can require multi-factor authentication, further checks, or block access.	

   For more information, see the REST API reference article, section [API version mapping](/rest/api/azure/devops/?view=azure-devops-server-rest-5.0&preserve-view=true).

## Prerequisites

To change a policy, you need at least Basic access and organization Owner or Project Collection Administrator permissions.
[How do I find the organization Owner?](../security/lookup-organization-owner-admin.md)

[!INCLUDE [manage-policies](../../includes/manage-policies.md)]


## Related articles

- [Disable Request Access Policy](disable-request-access-policy.md)
- [Restrict users from creating new organizations with Azure AD policy](azure-ad-tenant-policy-restrict-org-creation.md)
- [Restrict Team and Project Administrators from inviting new users](../security/restrict-invitations.md)
- [What is Conditional Access in Azure Active Directory?](/azure/active-directory/active-directory-conditional-access)
- [Detailed instructions and requirements for Conditional Access](/azure/active-directory/active-directory-conditional-access-azuread-connected-apps)
