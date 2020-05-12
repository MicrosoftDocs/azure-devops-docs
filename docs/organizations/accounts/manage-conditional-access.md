---
title: Manage security policies, Conditional Access
titleSuffix: Azure DevOps Services
ms.custom: seodec18
description: Learn how to secure your org and enable conditional access with Azure AD, enterprise access to projects, and allow public projects.
ms.technology: devops-accounts
ms.assetid: 2e3b01ab-b5f5-4e4d-9509-7095246f6fe7
ms.topic: conceptual
ms.author: chcomley
author: chcomley
ms.date: 05/06/2020
monikerRange: 'azure-devops'
---

# Manage security policies for your organization

[!INCLUDE [version-vsts-only](../../includes/version-vsts-only.md)]

[!INCLUDE [alt-creds-deprecation-notice](../../includes/alt-creds-deprecation-notice.md)]

In this article, learn how to manage your organization security policies in Azure DevOps. You can enable or disable the following security policies.

- **Allow public projects** - Allows non-members of a project and users who aren't signed in read-only, limited access to the project's artifacts and services. Anonymous access is used to access both private and public repositories. Learn more at [Make your project public](../public/make-project-public.md) and [Enable anonymous access to projects for your organization](../public/create-public-project.md#enable-anonymous-access-to-projects-for-your-organization).
- **Enterprise access to projects** - All projects that are shared with your Enterprise  become private projects. Those projects are no longer be viewable by all users in your Enterprise.
- **Enable Azure Active Directory (Azure AD) Conditional Access Policy (CAP) validation** - this policy is set to *off* by default and only applies to alternate credentials. This policy doesn't apply for CAPs set in Azure AD, no matter the settings in Azure DevOps.

   You can require the following conditions, for example:
    - Security group membership
    - Location and network identity
    - Specific operating system
    - Enabled device in a management system

   Depending on which conditions the user satisfies, you can require multi-factor authentication, further checks, or block access.

   For more information, see the REST API reference article, section [API version mapping](https://docs.microsoft.com/rest/api/azure/devops/?view=azure-devops-server-rest-5.0).

Azure DevOps enforces the usage of [personal access tokens](use-personal-access-tokens-to-authenticate.md) (PATs), [OAuth, and SSH keys](change-application-access-policies.md), and user policies. You can [restrict Azure AD users from creating new organizations](azure-ad-tenant-policy-restrict-org-creation.md), and for Web flows, CAP is honored 100%. For third-party client flow, like using a PAT with git.exe, we support IP fencing policies - we don't support MFA policies. See the following examples:
- Policy 1 - Block all access from outside of IP range x, y, and z.
    * Accessing Azure DevOps via the web, the user's allowed from IP x, y, and z. If outside of that list, the user's blocked.
    * Accessing Azure DevOps via alt-auth, the user's allowed from IP x, y, and z. If outside of that list, the user's blocked.
- Policy 2 - Require MFA when outside of IP range x, y, and z.
    * Accessing Azure DevOps via the web, the user's allowed from IP x, y, and z. The user is prompted for MFA if outside of that list.
    * Accessing Azure DevOps via alt-auth, the user's allowed from IP x, y, and z. If outside of that list, the user's blocked.

> [!NOTE]
> Some third-party extensions may require additional configuration changes.

## Prerequisites

To change a security policy, you need at least Basic access and organization Owner or Project Collection Administrator permissions.
[How do I find the organization Owner?](../security/lookup-organization-owner-admin.md)

[!INCLUDE [manage-policies](../../includes/manage-policies.md)]

## Related articles

* [What is Conditional Access in Azure Active Directory?](/azure/active-directory/active-directory-conditional-access)
* [Detailed instructions and requirements for Conditional Access](/azure/active-directory/active-directory-conditional-access-azuread-connected-apps)
* [Change application connection policies](change-application-access-policies.md)

<!---
Removed the following, as I don't feel it belongs in this article, but want to save:

Secure resources for organizations in Azure DevOps that are backed by an Azure Active Directory (Azure AD) tenant, with Conditional Access. Conditional Access policies (CAPs), like multi-factor authentication, help protect against the risk of compromised credentials and keep your organization data safe. There's also a policy where only devices connected to a corporate network can gain access, called Enterprise access to projects. Implement requirements and actions for devices in a device management system. A device management system is security software that's used by IT departments to manage devices running various operating systems (OSs), from various locations and networks.





-->
