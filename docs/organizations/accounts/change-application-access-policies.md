---
title: Change application access, security policies for organizations
titleSuffix: Azure DevOps Services
description: Manage security policies for accessing organization resources, like conditional access, OAuth, SSH, and personal access tokens (PATs).
ms.subservice: azure-devops-organizations
ms.assetid: 2fdfbfe2-b9b2-4d61-ad3e-45f11953ef3e
ms.topic: how-to
ms.author: chcomley
author: chcomley
ms.date: 10/22/2024
monikerRange: 'azure-devops'
---

# Change application connection & security policies for your organization

[!INCLUDE [alt-creds-deprecation-notice](../../includes/alt-creds-deprecation-notice.md)]

This article shows how to manage your organization's security policies that determine how applications can access services and resources in your organization. You can access most of these policies in **Organization settings**.

## Prerequisites

| Category | Requirements |
|--------------|-------------|
|**Permissions**| Member of the [Project Collection Administrators group](../security/look-up-project-collection-administrators.md). Organization owners are automatically members of this group.|

[!INCLUDE [manage-policies](../../includes/manage-policies.md)]

## Change application connection policies

To allow seamless access to your organization without repeatedly prompting for user credentials, applications often use the following authentication methods:

* [**OAuth**](../../integrate/get-started/authentication/oauth.md): Generate tokens for accessing [REST APIs for Azure DevOps](/rest/api/azure/devops/). All REST APIs accept OAuth tokens, making it the preferred method of integration over personal access tokens (PATs). The [Organizations](/rest/api/azure/devops/account), [Profiles](/rest/api/azure/devops/profile/), and [PAT Management](/rest/api/azure/devops/tokens/pats/) APIs only support OAuth. You can also use OAuth tokens with [Microsoft Entra ID](../../integrate/get-started/authentication/oauth.md) to provide secure and seamless authentication for users within your organization.

* [**SSH**](../../repos/git/use-ssh-keys-to-authenticate.md): Generate encryption keys for use with Linux, macOS, and Windows running [Git for Windows](https://www.git-scm.com/download/win). You can't use [Git credential managers](../../repos/git/set-up-credential-managers.md) or [PATs](use-personal-access-tokens-to-authenticate.md) for HTTPS authentication with SSH.

* [**PATs**](use-personal-access-tokens-to-authenticate.md): Generate tokens for:
  * Accessing specific resources or activities, such as builds or work items.
  * Clients like Xcode and NuGet that require usernames and passwords as basic credentials and don't support Microsoft account and Microsoft Entra features, such as multifactor authentication.
  * Accessing [REST APIs for Azure DevOps](/rest/api/azure/devops/).

By default, your organization allows access for all authentication methods.

You can limit access for OAuth and SSH keys by disabling these application connection policies:
- **Third-party application access via OAuth**: Enable Azure DevOps OAuth apps to access resources in your organization through OAuth. This policy is defaulted to *off* for all new organizations. If you want access to [Azure DevOps OAuth apps](../../integrate/get-started/authentication/azure-devops-oauth.md), enable this policy to ensure these apps can access resources in your organization. This policy doesn't impact [Microsoft Entra ID OAuth app access](../../integrate/get-started/authentication/entra-oauth.md).
- **SSH Authentication**: Enable applications to connect to your organization's Git repos through SSH.

When you deny access to an authentication method, no application can access your organization through that method. Any application that previously had access encounter authentication errors and lose access.

To remove access for PATs, [revoke them](use-personal-access-tokens-to-authenticate.md).

## Change conditional access policies 

Microsoft Entra ID allows tenants to define which users can access Microsoft resources through their [Conditional Access Policy (CAP) feature](/azure/active-directory/conditional-access/overview). Tenant admins can set conditions that users must meet to gain access. For example, the user must:

- Be a member of a specific security group
- Belong to a certain location and/or network
- Use a specific operating system
- Use an enabled device in a management system

Depending on which conditions the user satisfies, you can then require multifactor authentication, set further checks to gain access, or block access altogether.

### CAP support on Azure DevOps

When you sign in to the web portal of a Microsoft Entra ID-backed organization, Microsoft Entra ID always performs validation for any Conditional Access Policies (CAPs) set by tenant administrators.

Azure DevOps can also perform more CAP validation once you're signed in and navigating through a Microsoft Entra ID-backed organization:

* If the **“Enable IP Conditional Access policy Validation”** organization policy is enabled, we check IP fencing policies on both web and non-interactive flows, such as non-Microsoft client flows like using a PAT with git operations.
* Sign-in policies might be enforced for PATs as well. Using PATs to make Microsoft Entra ID calls requires adherence to any sign-in policies that are set. For example, if a sign-in policy requires that a user sign in every seven days, you must also sign in every seven days to continue using PATs for Microsoft Entra ID requests.
* If you don't want any CAPs to be applied to Azure DevOps, remove Azure DevOps as a resource for the CAP. We don't enforce CAPs on Azure DevOps on an organization-by-organization basis.

We support MFA policies on web flows only. For non-interactive flows, if they don't satisfy the conditional access policy, the user isn't prompted for MFA and gets blocked instead.

#### IP-based conditions

We support IP-fencing conditional access policies (CAPs) for both IPv4 and IPv6 addresses. If your IPv6 address is being blocked, ensure that the tenant administrator configured CAPs to allow your IPv6 address. Additionally, consider including the IPv4-mapped address for any default IPv6 address in all CAP conditions.

If users access the Microsoft Entra sign-in page via a different IP address than the one used to access Azure DevOps resources (common with VPN tunneling), check your VPN configuration or networking infrastructure. Ensure to include all used IP addresses within your tenant administrator's CAPs.

## Related articles

- [Disable Request Access Policy](disable-request-access-policy.md)
- [Restrict users from creating new organizations with Microsoft Entra policy](azure-ad-tenant-policy-restrict-org-creation.md)
- [Restrict Team and Project Administrators from inviting new users](../security/restrict-invitations.md)
- [Learn about Conditional Access in Microsoft Entra ID](/azure/active-directory/active-directory-conditional-access)
- [Learn about instructions and requirements for Conditional Access](/azure/active-directory/conditional-access/concept-conditional-access-cloud-apps)
