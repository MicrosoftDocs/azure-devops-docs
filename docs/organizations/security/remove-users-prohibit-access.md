---
title: Remove users from AD/Azure AD security groups 
titleSuffix: Azure DevOps
description: Manage changes to an organization when users leave a project or company by removing their user account from AD/Azure AD security groups  
ms.technology: devops-security
ms.assetid: 
ms.author: kaelli
author: KathrynEE
ms.topic: tutorial
monikerRange: '<= azure-devops'
ms.date: 10/14/2019
---

# Remove user accounts

[!INCLUDE [version-all](../../includes/version-all.md)]

When a user with access to Azure DevOps leaves a company, an administrator would typically remove them from Azure Active Directory or Active Directory. This automatically voids their user account and remove their ability to access or connect to Azure DevOps.

::: moniker range="azure-devops"  
If you manage your Azure DevOps users with Microsoft Service Accounts (MSA), then you'll need to [remove their account](../accounts/delete-organization-users.md). 

In this article you'll find:
> [!div class="checklist"]
> * A checklist to review when removing user accounts
> * Options for removing users from organizations in Azure DevOps
> * Links to articles for removing user accounts from AD or Azure AD  
::: moniker-end  

::: moniker range="< azure-devops"  

In this article you'll find:
> [!div class="checklist"]
> * A checklist to review when removing user accounts
> * Links to articles for removing user accounts from AD or Azure AD  
::: moniker-end  


## Consider when removing users

* Do users have any tokens that you need to revoke?
* Have you granted individual user accounts special permissions that need to be revoked? 
* Have you reassigned work users you are removing to current team members? 

::: moniker range="azure-devops"

## Remove users from an organization in Azure DevOps

If your organization uses MSA accounts, then to you must remove users from the organization as you have no other way to prevent access. When you do so, you'll not be able to create a query for work items assigned to the removed user account. To learn more, see [Delete users from Azure DevOps](../accounts/delete-organization-users.md).

If your organization is backed by Azure AD, then you can disable or delete the Azure AD user account while leaving their Azure DevOps account active. In this way, you can continue to query their work item history using their account name.

::: moniker-end 

## Remove users from AD or Azure AD

For information on removing users from AD or Azure AD, see one of the following articles: 

* [Delete users from Azure AD](/azure/active-directory/add-users-azure-active-directory#delete-a-user)
* [Delete a User Account from Active Directory](/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/cc753730(v=ws.11))

## Related articles

* [About permissions and inheritance](../../organizations/security/about-permissions.md)
* [Set permissions at the project-level or project collection-level](set-project-collection-level-permissions.md)
* [About security, authentication, and authorization](about-security-identity.md)