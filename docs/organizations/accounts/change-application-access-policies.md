---
title: Change application access, security policies for organizations
titleSuffix: Azure DevOps Services
ms.custom: seodec18
description: Manage security policies for accessing organization resources, like conditional access, OAuth, SSH, and personal access tokens (PATs).
ms.technology: devops-accounts
ms.assetid: 2fdfbfe2-b9b2-4d61-ad3e-45f11953ef3e
ms.topic: conceptual
ms.author: chcomley
author: chcomley
ms.date: 04/19/2021
monikerRange: 'azure-devops'
---

# Change application connection & security policies for your organization

[!INCLUDE [alt-creds-deprecation-notice](../../includes/alt-creds-deprecation-notice.md)]

Learn how to manage your organization's security policies that determine how applications can access services and resources in your organization. You can access most of these policies in **Organization Settings**.

## Prerequisites

To change a policy, you need at least Basic access and organization Owner or Project Collection Administrator permissions.
[How do I find the organization Owner?](../security/lookup-organization-owner-admin.md)

[!INCLUDE [manage-policies](../../includes/manage-policies.md)]


## Application connection policies

To access your organization without asking for user credentials multiple times, applications often use the following authentication methods:

* [**OAuth**](../../integrate/get-started/authentication/oauth.md) to generate tokens for accessing [REST APIs for Azure DevOps](/rest/api/azure/devops/). All of the REST APIs accept OAuth tokens and this is the preferred method of integration over personal access tokens (PATs). The [Organizations](/rest/api/azure/devops/account), [Profiles](/rest/api/azure/devops/profile/), and [PAT Management](/rest/api/azure/devops/tokens/pats/) APIs only support OAuth.

* [**SSH**](../../repos/git/use-ssh-keys-to-authenticate.md) to generate encryption keys for using Linux, macOS, and Windows running [Git for Windows](https://www.git-scm.com/download/win), but you can't use [Git credential managers](../../repos/git/set-up-credential-managers.md) or [PATs](use-personal-access-tokens-to-authenticate.md) for HTTPS authentication.
 
* [**PATs**](use-personal-access-tokens-to-authenticate.md) to generate tokens for:

   * Accessing specific resources or activities, like builds or work items
   * Clients, like Xcode and NuGet, that require usernames and passwords as basic credentials and don't support Microsoft account and Azure Active Directory features, like multi-factor authentication
   * Accessing [REST APIs for Azure DevOps](/rest/api/azure/devops/)

By default, your organization allows access for all authentication methods. 

You can limit access for OAuth and SSH keys by disabling access to these application connection policies:
- **Third-party application via OAuth** - Enable third-party applications to access resources in your organization through OAuth.
- **SSH Authentication** - Enable applications to connect to your organization's Git repos through SSH.

When you deny access to an authentication method, no application can access your organization through this method. Any application that previously had access will get authentication errors and no longer have access to your organization.

To remove access for PATs, you must [revoke them](use-personal-access-tokens-to-authenticate.md).

## Conditional access policies 

Azure Active Directory allows tenants to define which users are allowed to gain access to Microsoft resources through their [Conditional Access Policy (CAP) feature](/azure/active-directory/conditional-access/overview). Through these settings, the tenant admin can require members must adhere to any of the following conditions, for example, the user :	
- Must be members of a specific security group	
- Must belong to a certain location and/or network	
- Must be using a specific operating system	
- Must be using an enabled device in a management system	

Depending on which conditions the user satisfies, you can then require multi-factor authentication or further checks to gain access, or block access altogether.	

If you are in an Azure Active Directory-backed organizations and you are signing in to the web portal, Azure Active Directory will always check that you can move forward by performing validation for any CAPs that have been set by tenant admins.

Azure DevOps can also perform additional CAP validation once you are logged in and navigating through Azure DevOps. 
* If the **Enable Azure Active Directory (Azure AD) Conditional Access Policy (CAP) validation** policy is enabled, web flows are 100% honored for all conditional access policies. If the policy is disabled, Azure DevOps does not additional CAP validation, but remember, Azure AD will always check for CAPs on signin.
* For third-party client flows, like using a PAT with git.exe, we support IP fencing policies only. 

For these third-party client flows, we will not support any MFA policies set after CAP validation. See the following example:

- Policy 1 - Block all access from outside of IP range x, y, and z.
    * Accessing Azure DevOps via the web, the user's allowed from IP x, y, and z. If outside of that list, the user's blocked.
    * Accessing Azure DevOps via alt-auth, the user's allowed from IP x, y, and z. If outside of that list, the user's blocked.
- Policy 2 - Require MFA when outside of IP range x, y, and z.
    * Accessing Azure DevOps via the web, the user's allowed from IP x, y, and z. The user is prompted for MFA if outside of that list.
    * Accessing Azure DevOps via alt-auth, the user's allowed from IP x, y, and z. If outside of that list, the user's blocked.

#### IP-based conditions

We support IP-fencing conditional access policies for both IPv4 and IPv6 addresses. 

If you find that your IPv6 address is being blocked, we recommend checking with your tenant admin that they have configured CAPs to allow your IPv6 address. Additionally, it may help to include the IPv4-mapped address for your IPv6 address in all CAP conditions.

Another issue we've found is that users may be accessing the Azure AD login page via a different IP address than the IP address they are using to access Azure DevOps resources. Check your VPN configuration or networking infrastructure to make sure that if this is the case for you, all IP addresses you are using are included within your tenant admin's CAPs.


## Related articles

- [Disable Request Access Policy](disable-request-access-policy.md)
- [Restrict users from creating new organizations with Azure AD policy](azure-ad-tenant-policy-restrict-org-creation.md)
- [Restrict Team and Project Administrators from inviting new users](../security/restrict-invitations.md)
- [What is Conditional Access in Azure Active Directory?](/azure/active-directory/active-directory-conditional-access)
- [Detailed instructions and requirements for Conditional Access](/azure/active-directory/active-directory-conditional-access-azuread-connected-apps)
