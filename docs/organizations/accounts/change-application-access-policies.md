---
title: Change application connection and security policies for organizations
titleSuffix: Azure DevOps Services
description: Manage security policies for accessing organization through conditional access, OAuth, SSH, and personal access tokens (PATs).
ms.subservice: azure-devops-organizations
ms.assetid: 2fdfbfe2-b9b2-4d61-ad3e-45f11953ef3e
ms.topic: how-to
ms.author: chcomley
author: chcomley
ms.date: 06/06/2025
monikerRange: 'azure-devops'
---

# Change application connection & security policies for your organization

[!INCLUDE [alt-creds-deprecation-notice](../../includes/alt-creds-deprecation-notice.md)]

This article shows how to manage your organization's security policies that determine how users and applications can access services and resources in your organization. You can access most of these policies in **Organization settings**.

## Prerequisites

| Category | Requirements |
|--------------|-------------|
|**Permissions**| <ul><li>Org-level policies: [Project Collection Administrator](../security/look-up-project-collection-administrators.md)</li><li>Tenant-level policies: [Azure DevOps Administrator](../security/look-up-azure-devops-administrator.md)</li></ul>|

[!INCLUDE [manage-policies](../../includes/manage-policies.md)]

## Restrict authentication methods

To allow seamless access to your organization without repeatedly prompting for user credentials, applications can use authentication methods, like [OAuth](../../integrate/get-started/authentication/oauth.md), [SSH](../../repos/git/use-ssh-keys-to-authenticate.md), and [personal access token (PATs)](use-personal-access-tokens-to-authenticate.md). By default, all existing organizations allow access for all authentication methods.

You can limit access to these authentication methods by disabling the following application connection policies:
- **Third-party application access via OAuth**: Enable Azure DevOps OAuth apps to access resources in your organization through OAuth. This policy is defaulted to *off* for all new organizations. If you want access to [Azure DevOps OAuth apps](../../integrate/get-started/authentication/azure-devops-oauth.md), enable this policy to ensure these apps can access resources in your organization. This policy doesn't affect [Microsoft Entra ID OAuth app access](../../integrate/get-started/authentication/entra-oauth.md).
- **SSH authentication**: Enable applications to connect to your organization's Git repos through SSH.
- Tenant admins can [**restrict global personal access token creation**](manage-pats-with-policies-for-administrators.md#restrict-creation-of-global-pats-tenant-policy), [**restrict full-scoped personal access token creation**](manage-pats-with-policies-for-administrators.md#restrict-creation-of-full-scoped-pats-tenant-policy), and [**enforce maximum personal access token lifespan**](manage-pats-with-policies-for-administrators.md#set-maximum-lifespan-for-new-pats-tenant-policy) through tenant-level policies on the _Microsoft Entra_ settings page. Add Microsoft Entra users or groups to exempt them from these policies.
- Organization admins can [**restrict personal access token creation**](manage-pats-with-policies-for-administrators.md#restrict-personal-access-token-creation-organization-policy) in their respective organizations. Subpolicies allow admins to permit the creation of packaging-only PATs or the creation of any-scope PATs to allowlisted Microsoft Entra users or groups.

When you deny access to an authentication method, no application can access your organization through that method. Any application that previously had access encounter authentication errors and lose access.

## Enforce conditional access policies 

Microsoft Entra ID lets tenant admins control which users can access Microsoft resources using [Conditional Access policies (CAPs)](/azure/active-directory/conditional-access/overview). Admins set specific conditions users must meet to gain access, such as:

- Membership in a specific Microsoft Entra security group
- Location or network requirements
- Use of a particular operating system
- Use of a managed and enabled device

Based on these conditions, you can grant access, require more checks like multifactor authentication, or block access entirely. Learn more about [conditional access policies](/azure/active-directory/active-directory-conditional-access) and [how to set one up for Azure DevOps](/azure/active-directory/conditional-access/concept-conditional-access-cloud-apps) in the Microsoft Entra documentation.

### CAP support on Azure DevOps

When you sign in to the web portal of a Microsoft Entra ID-backed organization, Microsoft Entra ID validates all Conditional Access policies set by tenant administrators. After [modernizing our web authentication stack to use Microsoft Entra tokens](https://devblogs.microsoft.com/devops/full-web-support-for-conditional-access-policies-across-azure-devops-and-partner-web-properties/), Azure DevOps now enforces Conditional Access policy validation on all interactive (web) flows.

- Meet sign-in policies when using PATs on REST API calls that rely on Microsoft Entra.
- Remove Azure DevOps as a resource from the CAP, which prevents CAPs from applying.
- Enforce MFA policies on web flows only; block access for non-interactive flows if users don't meet a CAP.

### IP-based conditions

If you enable the **IP Conditional Access policy validation on non-interactive flows** policy, Azure DevOps checks IP fencing policies on non-interactive flows, such as when you use a PAT to make a REST API call.

Azure DevOps supports IP-fencing conditional access policies (CAPs) for both IPv4 and IPv6 addresses. If CAPs block your IPv6 address, ask your tenant administrator to update the policy to allow your IPv6 address. Also, consider including the IPv4-mapped address for any default IPv6 address in all CAP conditions.

If users access the Microsoft Entra sign-in page from a different IP address than the one used to access Azure DevOps resources (which can happen with VPN tunneling), review your VPN configuration or networking setup. Make sure your tenant administrator includes all relevant IP addresses in the CAPs.

### Azure Resource Manager audience and CAPs

Azure DevOps doesn't depend on the Azure Resource Manager (ARM) resource (`https://management.azure.com`) when you sign in or refresh Microsoft Entra access tokens. Previously, Azure DevOps required the ARM audience during sign-in and token refresh flows. This requirement meant that administrators had to allow all Azure DevOps users to bypass ARM CAPs to ensure access.

Tokens for Azure DevOps no longer require the ARM audience. As a result, you can manage CAPs more effectively without configuring specific audience settings for ARM. This approach streamlines authentication, reduces token management complexity, and lets you apply security policies more consistently across your Azure environments. Organizations can focus on broader access controls, improving compliance and security posture without being limited by audience-specific configurations.

> [!NOTE]
> There are the following exceptions where continued access to ARM is still required:
> - **Billing administrators** need access to ARM to set up billing and access subscriptions.
> - **Service Connection creators** require access to ARM for ARM role assignments and updates to managed service identities (MSIs).

## Policies by Level

| Policy | Org-level | Tenant-level |
|--------------|-------------|
| [**Third-party application access via OAuth**](#restrict-authentication-methods) | ✅ | |
| [**SSH authentication**](#restrict-authentication-methods) | ✅ |  |
| [**Log audit events**](../audit/azure-devops-auditing.md) | ✅ |  |
| [**Restrict personal access token creation**](manage-pats-with-policies-for-administrators.md#restrict-personal-access-token-creation-organization-policy) | ✅ |  |
| [**Allow public projects**](../projects/make-project-public.md) | ✅ |  |
| [**Additional protections when using public package registries**](https://devblogs.microsoft.com/devops/changes-to-azure-artifact-upstream-behavior/) | ✅ |  |
| [**Enable IP Conditional Access policy validation on non-interactive flows**](#enforce-conditional-access-policies) | ✅ |  | 
| [**External guest access**](add-external-user.md) | ✅ |  |
| [**Allow team and project administrators to invite new users**](../security/restrict-invitations.md) | ✅ |  |
| [**Request access** allows users to request access to the organization with a provided internal URL](disable-request-access-policy.md) | ✅ |  |
| [**Allow Microsoft to collect feedback from users**](../security/data-protection.md#data-privacy) | ✅ |  |
| [**Restrict organization creation**](azure-ad-tenant-policy-restrict-org-creation.md) |  | ✅ | 
| [**Restrict global personal access token creation**](manage-pats-with-policies-for-administrators.md#restrict-creation-of-global-pats-tenant-policy) | | ✅ |
| [**Restrict full-scoped personal access token creation**](manage-pats-with-policies-for-administrators.md#restrict-creation-of-full-scoped-pats-tenant-policy)| | ✅ |
| [**Enforce maximum personal access token lifespan**](manage-pats-with-policies-for-administrators.md#set-maximum-lifespan-for-new-pats-tenant-policy) | | ✅ |

