---
title: Remove users from AD/Azure AD security groups 
titleSuffix: Azure DevOps
description: Manage changes to an organization when users leave a project or company by removing their user account from AD/Azure AD security groups  
ms.prod: devops
ms.technology: devops-security
ms.assetid: 
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: tutorial
monikerRange: '>= tfs-2013'
ms.date: 02/19/2019
---

# Remove user accounts

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

When a user with access to Azure DevOps leaves a company, an administrator would typically remove them from Azure Active Directory or Active Directory. This automatically voids their user account and remove their ability to access or connect to Azure DevOps.

::: moniker range="azure-devops"  
If you manage your Azure DevOps users with Microsoft Service Accounts (MSA), then you'll need to [remove their account](../accounts/delete-organization-users.md). 

In this topic you'll find:
> [!div class="checklist"]
> * A checklist to review when removing user accounts
> * Options for removing users from organizations in Azure DevOps
> * Links to topics for removing user accounts from AD or Azure AD  
::: moniker-end  

::: moniker range="<= azure-devops-2019"  

In this topic you'll find:
> [!div class="checklist"]
> * A checklist to review when removing user accounts
> * Links to topics for removing user accounts from AD or Azure AD  
::: moniker-end  


## Consider when removing users

* Have you granted users any paid extensions? You'll want to [transfer those extensions to another user](../accounts/delete-organization-users.md). 
* Do users have any tokens that you need to revoke?
* Have you granted individual user accounts special permissions that need to be revoked? 
* Have you reassigned work users you are removing to current team members? 

::: moniker range="azure-devops" 
## Remove users from an organization in Azure DevOps

If your organization uses MSA accounts, then to you must remove users from the organization as you have no other way to prevent access. When you do so, you'll not be able to create a query for work items assigned to the removed user account. To learn more, see [Delete users from Azure DevOps](../accounts/delete-organization-users.md).

If your organization is backed by Azure AD, then you can disable or delete the Azure AD user account while leaving their Azure DevOps account active. In this way, you can continue to query their work item history using their account name.
::: moniker-end 

## Remove users from AD or Azure AD

For information on removing users from AD or Azure AD, see one of these topics: 

* [Delete users from Azure AD](/azure/active-directory/add-users-azure-active-directory#delete-users-from-azure-ad)
* [Delete a User Account from Active Directory](https://technet.microsoft.com/library/cc753730.aspx)

::: moniker range="azure-devops" 
## Reduce the number of paid users, reassign paid extensions

* [Change number of users who have paid Basic access](../../billing/buy-basic-access-add-users.md)
* [Assign paid extension access to users](../../marketplace/assign-paid-extensions.md)

> [!NOTE]
> To manage users, you must be a member of the [Project Collection Administrator group](set-project-collection-level-permissions.md).

::: moniker-end 

## Related articles

* [About permissions and groups](../../organizations/security/about-permissions.md)
* [Set permissions at the project-level or project collection-level](set-project-collection-level-permissions.md)
* [About security and identity](about-security-identity.md)

