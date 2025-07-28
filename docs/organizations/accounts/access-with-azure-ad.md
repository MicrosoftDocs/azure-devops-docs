---
title: Access your organization via Microsoft Entra ID
titleSuffix: Azure DevOps Services
ms.custom: engagement-fy23
description: About user authentication, and controlling conditional access to your organization with a Microsoft Entra tenant.
ms.subservice: azure-devops-organizations
ms.assetid: c9aecaaf-9dfb-4877-84b4-60da253e3dc2
ms.topic: conceptual
ms.author: chcomley
author: chcomley
ai-usage: ai-assisted
ms.date: 07/28/2025
monikerRange: 'azure-devops'
---

# About accessing your organization via Microsoft Entra ID

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

This article discusses controlling access to your organization using Microsoft Entra ID. [Connecting your organization to Microsoft Entra ID](connect-organization-to-azure-ad.md) enhances security and simplifies user management.

## Organization configuration options and benefits

Azure DevOps organizations support two primary authentication configurations that determine which types of users can collaborate within your organization. While access is always restricted to users you explicitly add, the configuration type controls the available user pool from which you can select. 

### Connected to Microsoft Entra ID 

These organizations are integrated with Microsoft Entra ID, enabling centralized identity and access management. 

**User access:** 

    - ✅ Entra ID users (members or guests of the connected tenant) can sign in. 
    - ⚠️ Microsoft account users can sign in after [accepting an invitation as a guest user](/entra/external-id/b2b-quickstart-add-guest-users-portal) to the connected Microsoft Entra ID tenant, provided your tenant [allows guest user access](/entra/external-id/external-collaboration-settings-configure). 

**Benefits:**

- **Centralized management**: Manage user access and permissions from a single location. Microsoft Entra administrators oversee user access, providing secure and centralized control.
- **Enhanced security**: Utilize advanced security features like MFA and conditional access.
- **Simplified user experience**: Provide a seamless sign-in experience with SSO.
- **Directory-based authentication**: Only users who are members or guests in your directory can access your organization.
- **Access revocation**: Disabled or removed users have no access by any mechanism, including PATs or SSH.
- **Seamless integration**: Enhanced integration with Microsoft 365 services.

**Ownership:** The organization is governed by Microsoft Entra administrator policies and can be [recovered by the administrator](resolve-orphaned-organization.md) if it becomes orphaned. 

### Not connected to Microsoft Entra ID 

The following examples are standalone Azure DevOps organizations that primarily use Microsoft accounts (MSAs) for authentication. 

**User access:** 

    - ✅ Microsoft account users can sign in freely. 
    - ⚠️ Entra ID users can only sign-in if their sign in address matches their Entra user principal name (UPN). When adding Entra users to your organization, ensure you are adding them by UPN. 

**Limitations:** Lacks centralized identity governance and enterprise-grade security features. 

**Ownership:** Owned by the creator of the organization. 

## High-level steps to connect your organization to Microsoft Entra ID

1. **[Connect to Microsoft Entra ID](connect-organization-to-azure-ad.md)**: If your organization was created with a Microsoft account, connect it to your [Microsoft Entra ID](/azure/active-directory/fundamentals/active-directory-whatis). This integration allows you to manage access and enforce security policies centrally.
2. **Sign in**: Use the same credentials that you use with your Microsoft services to sign in to Azure DevOps. The single sign-on (SSO) capability streamlines the sign-in process and improves security.
3. **Enforce policies**: Implement and enforce policies to control access to your team's critical resources and key assets. Microsoft Entra ID provides robust policy management features, including multifactor authentication (MFA), conditional access, and role-based access control.

<a name='how-azure-ad-controls-access-to-azure-devops'></a>

## How Microsoft Entra ID controls access to Azure DevOps

Your organization authenticates users through its directory, ensuring that only members or guests within that directory can access your organization. Disabled or removed users from your directory are denied access by any mechanism, including personal access tokens (PATs) or SSH.

Access control gets managed by specific [Microsoft Entra administrators](/azure/active-directory/roles/permissions-reference) who oversee user management within your directory. These administrators can control who gets access to your organization, ensuring secure and centralized management.

Without Microsoft Entra ID, you're solely responsible for controlling organization access. In this case, all users sign in with only Microsoft accounts, and you manually manage user permissions and access.

For more information, see [Frequently asked questions about Azure access](faq-azure-access.yml)

> [!div class="nextstepaction"]
> [Connect your organization to Microsoft Entra ID](./connect-organization-to-azure-ad.md)

## Related content

* [Add or delete users using Microsoft Entra ID](/azure/active-directory/fundamentals/add-users-azure-active-directory)
* [Disconnect your organization from Microsoft Entra ID](/azure/active-directory/add-users-azure-active-directory#delete-a-user)
* [Get a list of organizations backed by Microsoft Entra ID](get-list-of-organizations-connected-to-microsoft-entra-id.md)
* [Restrict organization creation with tenant policy](azure-ad-tenant-policy-restrict-org-creation.md)
