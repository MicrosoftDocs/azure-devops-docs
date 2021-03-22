---
title: Access your organization with Azure Active Directory
titleSuffix: Azure DevOps Services
ms.custom: seodec18
description: About authenticating users and controlling conditional access to your organization with your Azure Active Directory tenant.
ms.technology: devops-accounts
ms.assetid: c9aecaaf-9dfb-4877-84b4-60da253e3dc2
ms.topic: conceptual
ms.author: chcomley
author: chcomley
ms.date: 10/01/2020
monikerRange: 'azure-devops'
---

# About accessing your organization via Azure AD

[!INCLUDE [version-vsts-only](../../includes/version-vsts-only.md)]

[!INCLUDE [alt-creds-deprecation-notice](../../includes/alt-creds-deprecation-notice.md)]

Learn about controlling access to your organization via Azure Active Directory (Azure AD).
If your organization was created with a Microsoft account, connect your organization to your [Azure Azure AD](/azure/active-directory/fundamentals/active-directory-whatis).
Sign in to Azure DevOps Services with the same username and password that you use with your Microsoft services.
Enforce policies for accessing your team's critical resources and key assets.

> [!NOTE]
> To use existing on-premises identities with Azure DevOps, you can integrate directories with Azure AD by using [Azure AD Connect](/azure/active-directory/hybrid/whatis-hybrid-identity). To switch your organization to another directory, learn [how to change your directory in Azure AD](change-azure-ad-connection.md).

## How Azure AD controls access to Azure DevOps

Your organization authenticates users through your organization's directory. Only users who are members or guests in that directory get access to your organization.
Disabled or removed users from your directory have no access to your organization by any mechanism. For example, mechanisms such as personal access tokens (PATs) or SSH.
Only specific [Azure AD administrators](/azure/active-directory/roles/permissions-reference) manage users in your directory, so they control who gets access to your organization.

Without Azure AD, you're solely responsible for controlling organization access. All users must sign in with Microsoft accounts.

## Frequently asked questions (FAQs)

<a name="permissions"></a>

### Q: What do I need to set up an existing Azure DevOps Services instance with Azure AD?

A: Ensure you meet the prerequisites in the following article, [Connect your organization to Azure AD](./connect-organization-to-azure-ad.md?view=azure-devops&preserve-view=true).

### Q: What happens to current users?

A: Your work in Azure DevOps Services is associated with your credentials for Azure AD.
After your organization is connected to your directory, users continue working seamlessly if their credential addresses appear in the connected directory.
If users' addresses don't appear, you must [add those users to your directory](/azure/active-directory/fundamentals/add-users-azure-active-directory). Your organization might have policies about adding users to the directory, so find out more first.

### Q: What if we can't use the same sign-in addresses?

A: Add these users to the directory with new work or school accounts, and reassign access levels and readd them to any projects. If they have existing work or school accounts, those accounts can be used instead. Work won't be lost and stays with their current sign-in addresses. Users can migrate work that they want to keep, except for their work history. For more information, see [how to add organization users](add-organization-users.md).

### Q: What happens to tools that use my credentials, like alternate credentials?

A: Azure DevOps no longer supports Alternate Credentials authentication since the beginning of March 2, 2020. If you're still using Alternate Credentials, we strongly encourage you to switch to a more secure authentication method (for example, personal access tokens or SSH). [Learn more](https://devblogs.microsoft.com/devops/azure-devops-will-no-longer-support-alternate-credentials-authentication/).

### Q: What if I accidentally delete a user in Azure AD?

A: [Restore the user](/azure/active-directory/active-directory-users-restore), rather than create a new one. If you create a new user, even with the same email address, this user isn't associated with the previous identity.

## Related articles

* [Add or delete users using Azure Active Directory](/azure/active-directory/fundamentals/add-users-azure-active-directory)
* [Connect your organization to Azure AD](./connect-organization-to-azure-ad.md)
* [Disconnect your organization from Azure AD](./disconnect-organization-from-azure-ad.md)
* [Get a list of organizations backed by Azure AD](get-list-of-organizations-connected-to-azure-active-directory.md)
* [Restrict organization creation with tenant policy](azure-ad-tenant-policy-restrict-org-creation.md)