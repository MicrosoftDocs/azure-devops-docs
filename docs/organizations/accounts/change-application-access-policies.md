---
title: Change application access, security policies for organizations
titleSuffix: Azure DevOps Services
ms.custom: seodec18
description: Manage security policies for accessing organization resources, like conditional access, OAuth, SSH, and personal access tokens (PATs).
ms.subservice: azure-devops-organizations
ms.assetid: 2fdfbfe2-b9b2-4d61-ad3e-45f11953ef3e
ms.topic: conceptual
ms.author: chcomley
author: chcomley
ms.date: 05/05/2022
monikerRange: 'azure-devops'
---

# Change application connection & security policies for your organization

[!INCLUDE [alt-creds-deprecation-notice](../../includes/alt-creds-deprecation-notice.md)]

Learn how to manage your organization's security policies that determine how applications can access services and resources in your organization. You can access most of these policies in **Organization Settings**.

## Prerequisites

You must be a member of the [Project Collection Administrators group](../security/look-up-project-collection-administrators.md). Organization owners are automatically members of this group.

[!INCLUDE [manage-policies](../../includes/manage-policies.md)]


## Application connection policies

To access your organization without asking for user credentials multiple times, applications often use the following authentication methods:

* [**OAuth**](../../integrate/get-started/authentication/oauth.md) to generate tokens for accessing [REST APIs for Azure DevOps](/rest/api/azure/devops/). All of the REST APIs accept OAuth tokens and this is the preferred method of integration over personal access tokens (PATs). The [Organizations](/rest/api/azure/devops/account), [Profiles](/rest/api/azure/devops/profile/), and [PAT Management](/rest/api/azure/devops/tokens/pats/) APIs only support OAuth.

* [**SSH**](../../repos/git/use-ssh-keys-to-authenticate.md) to generate encryption keys for using Linux, macOS, and Windows running [Git for Windows](https://www.git-scm.com/download/win), but you can't use [Git credential managers](../../repos/git/set-up-credential-managers.md) or [PATs](use-personal-access-tokens-to-authenticate.md) for HTTPS authentication.
 
* [**PATs**](use-personal-access-tokens-to-authenticate.md) to generate tokens for:

   * Accessing specific resources or activities, like builds or work items
   * Clients, like Xcode and NuGet, that require usernames and passwords as basic credentials and don't support Microsoft account and Azure Active Directory (Azure AD) features, like multi-factor authentication
   * Accessing [REST APIs for Azure DevOps](/rest/api/azure/devops/)

By default, your organization allows access for all authentication methods. 

You can limit access for OAuth and SSH keys by disabling access to these application connection policies:
- **Third-party application via OAuth** - Enable third-party applications to access resources in your organization through OAuth. This policy is defaulted to *off* for all new organizations. If you want access to third-party applications, enable this policy to make sure these apps can gain access to resources in your organization.
- **SSH Authentication** - Enable applications to connect to your organization's Git repos through SSH.

When you deny access to an authentication method, no application can access your organization through this method. Any application that previously had access will get authentication errors and no longer have access to your organization.

To remove access for PATs, you must [revoke them](use-personal-access-tokens-to-authenticate.md).

## Conditional access policies 

Azure AD allows tenants to define which users are allowed to gain access to Microsoft resources through their [Conditional Access Policy (CAP) feature](/azure/active-directory/conditional-access/overview). Through these settings, the tenant admin can require members must adhere to any of the following conditions, for example, the user must:

- be a member of a specific security group	
- belong to a certain location and/or network	
- be using a specific operating system	
- be using an enabled device in a management system	

Depending on which conditions the user satisfies, you can then require multi-factor authentication or further checks to gain access, or block access altogether.	

If you sign in to the web portal of an Azure AD-backed organization, Azure AD checks that you can move forward by performing validation for any CAPs that were set by tenant administrators.

Azure DevOps can also perform more CAP validation once you're signed in and navigating through Azure DevOps.

* If the **Enable Azure AD CAP validation** policy is enabled, web flows are 100% honored for all conditional access policies. If the policy is disabled, Azure DevOps doesn't perform more CAP validation, but Azure AD always checks for CAPs upon sign-in.
* For third-party client flows, like using a PAT with git.exe, we support IP fencing policies only. Users may find that sign-in policy may be enforced for PATs as well. Using PATs to make Azure AD calls requires the user to adhere to any sign-in policies that are set. For example, if a sign-in policy requires that a user sign in every seven days, you must also sign in every seven days if you wish to continue using PATs to make requests to Azure AD.

For these third-party client flows, we don't support any MFA policies set after CAP validation. See the following examples:

- Policy 1 - Block all access from outside of IP range x, y, and z.
    * Access Azure DevOps via the web, the user's allowed from IP x, y, and z. If outside of that list, the user's blocked.
    * Access Azure DevOps via alt-auth, the user's allowed from IP x, y, and z. If outside of that list, the user's blocked.
- Policy 2 - Require MFA when outside of IP range x, y, and z.
    * Access Azure DevOps via the web, the user's allowed from IP x, y, and z. The user is prompted for MFA if outside of that list.
    * Access Azure DevOps via alt-auth, the user's allowed from IP x, y, and z. If outside of that list, the user's blocked.

#### IP-based conditions

We support IP-fencing conditional access policies for both IPv4 and IPv6 addresses. 

If you find that your IPv6 address is being blocked, we recommend confirming that they configured CAPs to allow your IPv6 address. Also, it may help to include the IPv4-mapped address for your IPv6 address in all CAP conditions.

Another issue we've found is that users may be accessing the Azure AD sign-in page via a different IP address than the IP address they're using to access Azure DevOps resources. Check your VPN configuration or networking infrastructure to make sure all IP addresses you're using are included within your tenant admin's CAPs.


## Related articles

- [Disable Request Access Policy](disable-request-access-policy.md)
- [Restrict users from creating new organizations with Azure AD policy](azure-ad-tenant-policy-restrict-org-creation.md)
- [Restrict Team and Project Administrators from inviting new users](../security/restrict-invitations.md)
- [What is Conditional Access in Azure AD?](/azure/active-directory/active-directory-conditional-access)
- [Detailed instructions and requirements for Conditional Access](/azure/active-directory/conditional-access/concept-conditional-access-cloud-apps)
