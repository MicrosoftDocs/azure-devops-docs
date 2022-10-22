---
title: Access your organization with Azure Active Directory
titleSuffix: Azure DevOps Services
ms.custom: seodec18, engagement-fy23
description: About user authentication and controlling conditional access to your organization with your Azure Active Directory tenant.
ms.subservice: azure-devops-organizations
ms.assetid: c9aecaaf-9dfb-4877-84b4-60da253e3dc2
ms.topic: conceptual
ms.author: chcomley
author: chcomley
ms.date: 10/05/2022
monikerRange: 'azure-devops'
---

# About accessing your organization via Azure AD

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

[!INCLUDE [alt-creds-deprecation-notice](../../includes/alt-creds-deprecation-notice.md)]

Learn about controlling access to your organization via Azure Active Directory (Azure AD).
If your organization was created with a Microsoft account, connect your organization to your [Azure Azure AD](/azure/active-directory/fundamentals/active-directory-whatis).
Sign in to Azure DevOps with the same username and password that you use with your Microsoft services.
Enforce policies for accessing your team's critical resources and key assets.

> [!NOTE]
> To use existing on-premises identities with Azure DevOps, you can integrate directories with Azure AD by using [Azure AD Connect](/azure/active-directory/hybrid/whatis-hybrid-identity). To switch your organization to another directory, learn [how to change your directory in Azure AD](change-azure-ad-connection.md).

## How Azure AD controls access to Azure DevOps

Your organization authenticates users through its directory. Only users who are members or guests in that directory get access to your organization.
Disabled or removed users from your directory have no access to your organization by any mechanism. For example, mechanisms such as personal access tokens (PATs) or SSH.
Only specific [Azure AD administrators](/azure/active-directory/roles/permissions-reference) manage users in your directory, so they control who gets access to your organization.

Without Azure AD, you're solely responsible for controlling organization access. All users must sign in with Microsoft accounts.

For more information, see [Frequently asked questions about Azure access](faq-azure-access.yml)

## Related articles

* [Add or delete users using Azure Active Directory](/azure/active-directory/fundamentals/add-users-azure-active-directory)
* [Connect your organization to Azure AD](./connect-organization-to-azure-ad.md)
* [Disconnect your organization from Azure AD](./disconnect-organization-from-azure-ad.md)
* [Get a list of organizations backed by Azure AD](get-list-of-organizations-connected-to-azure-active-directory.md)
* [Restrict organization creation with tenant policy](azure-ad-tenant-policy-restrict-org-creation.md)
