---
title: Access your organization with Azure Active Directory
titleSuffix: Azure DevOps Services
ms.custom: seodec18
description: Learn how to authenticate users and control access to your organization the same way you can with Microsoft services, like Office 365 and Azure
ms.prod: devops
ms.technology: devops-accounts
ms.assetid: c9aecaaf-9dfb-4877-84b4-60da253e3dc2
ms.topic: conceptual
ms.manager: jillfra
ms.author: chcomley
author: chcomley
ms.date: 08/06/2019
monikerRange: 'azure-devops'
---

# Access your organization with Azure Active Directory

[!INCLUDE [version-vsts-only](../../_shared/version-vsts-only.md)]

In this article, learn how to authenticate users and control access to
your organization the same way you
can do so with Microsoft services like Office 365 and Azure.
If your organization was created with a Microsoft account,
you can connect your organization to your
[Azure Active Directory (Azure AD)](/azure/active-directory/fundamentals/active-directory-whatis).
You can then sign in to Azure DevOps with the same username
and password that you use with these Microsoft services.
You can also enforce policies for accessing
your team's critical resources and key assets.

> To use existing on-premises identities with Azure DevOps,
> you can integrate directories with Azure AD by using
> [Azure AD Connect](https://azure.microsoft.com/documentation/articles/active-directory-aadconnect/).
> To switch your organization to another directory,
> learn [how to change your directory in Azure AD](change-organization-location.md).

## How does Azure Active Directory control access to Azure DevOps?

Your organization authenticates users
through your organization's directory. Only users who are members or guests in that directory can
get access to your organization.
When users are disabled or removed from your directory, they can't access your organization by any mechanism. This includes PATs, SSH, or any other alternate credentials.
Only specific [Azure AD administrators](https://azure.microsoft.com/documentation/articles/active-directory-assign-admin-roles/)
can manage users in your directory,
so they control who can get access to your organization.

Without Azure AD, you're solely responsible for
controlling organization access.
All users must sign in with Microsoft accounts.

<a name="permissions"></a>

### Q: What do I need to set up an existing Azure DevOps instance with Azure AD?

A: Ensure you meet the prerequisites in the article, [Connect your organization to Azure AD](https://docs.microsoft.com/en-us/azure/devops/organizations/accounts/connect-organization-to-azure-ad?view=azure-devops).

### Q: What happens to current users?

A: Your work in Azure DevOps is associated with your sign-in address.
After your organization is connected to your directory,
users continue working seamlessly if their
sign-in addresses appear in the connected directory.
If their sign-in addresses don't appear, you must [add those users to your directory](add-users-to-azure-ad.md#SetUpCurrentUsers).
Your organization might have policies about adding users to the directory, so find out more first.

### Q: What if we can't use the same sign-in addresses?

A: Add these users to the directory with new work or school accounts. Then, reassign access levels and readd them to any projects. If they have existing work or school accounts, those accounts can be used instead. Work won't be lost and stays with their current sign-in addresses. Users can migrate work that they want to keep, except for their work history. For more information, see [how to add organization users](add-organization-users.md).

### Q: What happens to tools that use my credentials, like alternate credentials?

A: Alternate credentials won't work anymore for
tools that run outside a web browser, like the Git command-line tool. [Set up your credentials](http://support.microsoft.com/kb/2991274/) again for the organization that you connected.

### Q: What if I accidentally delete a user in Azure AD?

A: [Restore the user](/azure/active-directory/active-directory-users-restore), rather than create a new one. If you create a new user, even with the same email address, this user is not associated with the previous identity.

## Manage organization access with Azure AD

* [Add Azure DevOps users to Azure AD](add-users-to-azure-ad.md)
* [Connect your organization to Azure AD](connect-organization-to-aad.md)
* [Disconnect your organization from Azure AD](disconnect-organization-from-aad.md)
* [Delete users from Azure DevOps connected to Azure AD](delete-users-from-services-aad.md)
