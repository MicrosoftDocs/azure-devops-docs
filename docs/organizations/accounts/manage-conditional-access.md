---
title: Manage conditional access policies
titleSuffix: Azure DevOps Services
ms.custom: seodec18
description: Learn how to protect your organization credentials and keep your data safe with multi-factor authentication, security group membership, and more.
ms.prod: devops
ms.technology: devops-accounts
ms.assetid: 2e3b01ab-b5f5-4e4d-9509-7095246f6fe7
ms.topic: conceptual
ms.manager: jillfra
ms.author: chcomley
author: chcomley
ms.date: 12/19/2018
monikerRange: 'azure-devops'
---

# Manage conditional access to Azure DevOps

[!INCLUDE [version-vsts-only](../../_shared/version-vsts-only.md)]

Conditional access offers simple ways to help secure resources for organizations in Azure DevOps that are backed by an Azure Active Directory (Azure AD) tenant. Conditional access policies (CAPs) like multi-factor authentication help protect against the risk of compromised credentials and help keep your organization's data safe. In addition to requiring credentials, you can have a policy that only devices that are connected to a corporate network can gain access. More generally, there are a few requirements and actions that you can implement for devices in a device management system. This system is security software that's used by IT departments to manage devices running various operating systems from various locations and networks.

You can require conditions, such as security group membership, location and network identity, a specific OS, an enabled device in a management system, and so on.

Depending on which conditions the user satisfies, you can require multi-factor authentication, require further checks, or block access.

Azure DevOps enforces the policy for usage of personal access tokens (PATs), alternate authentication, OAuth, and SSH keys. See the following details of how and what we enforce.

   * For Web flows, CAP is honored 100%
   * For third party client flow, like using a PAT with git.exe, we only support IP fencing policies - more specifically we don't support MFA policies. See the following examples:
        * Policy 1 - Block all access from outside of IP range X, Y, and Z
            * If a user is accessing Azure DevOps via the web, the user is allowed from IP X,Y,Z or blocked if outside that list
            * If a user is accessing Azure DevOps via alt-auth, the user is allowed from IP X,Y,Z or blocked if outside that list
        * Policy 2 - Require MFA when outside of IP range X, Y, and Z
            * If a user is accessing Azure DevOps via the web, the user is allowed from IP X,Y,Z or prompted for MFA if outside that list
            * If a user is accessing Azure DevOps via alt-auth, the user is allowed from IP X,Y,Z blocked if outside that list

## Enable conditional access for Azure DevOps

To enforce conditional access policy on your organization, you must enable the policy in Azure DevOps, as it is set to off by default.

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

	[Why am I asked to choose between my work or school account and my personal account?](faq-create-organization.md#ChooseOrgAcctMSAcct)

2. Select ![gear icon](../../_img/icons/gear-icon.png) **Organization settings**.

   ![Open Organization settings](../../_shared/_img/settings/open-admin-settings-vert.png)

3. Select **Policy** and from the **dropdown** next to Enable Azure Active Directory Conditional Access Policy Validation select **On**.

   ![Enable conditional access policy](_img/_shared/enable-conditional-access-policy.png)

## Related articles

* [What is conditional access in Azure Active Directory?](/azure/active-directory/active-directory-conditional-access).
* [Detailed instructions and requirements for conditional access](/azure/active-directory/active-directory-conditional-access-azuread-connected-apps).
