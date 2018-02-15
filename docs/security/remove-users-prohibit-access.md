---
title: Remove users from AD/AAD security groups 
titleSuffix: VSTS & TFS
description: Manage changes to an organization when users leave a project or company by removing their user account from AD/AAD security groups  
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
ms.assetid: 
ms.manager: douge
ms.author: kaelli
ms.topic: get-started-article
ms.date: 02/06/2018
---


# Remove user accounts

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

When a user with access to Visual Studio Team Services (VSTS) or Team Foundation Server (TFS) leaves a company, an administrator would typically remove them from Azure Active Directory or Active Directory. This will automatically void their user account and remove their ability to access or connect to VSTS or TFS. 

If you manage your VSTS users with Microsoft Service Accounts (MSA), then you'll need to [remove their account from the Users hub](../accounts/delete-account-users.md). 


In this topic you'll find:
> [!div class="checklist"]   
> * A checklist to review when removing user accounts
> * Options for removing users from VSTS accounts
> * Links to topics for removing user accounts from AD or Azure AD  

## Things to consider when removing users
- Have you granted users any paid extensions? You'll want to transfer those extensions to another user from the **Users** hub. 
- Do users have any tokens that you need to revoke?
- Have you granted individual user accounts special permissions that need to be revoked? 
- Have you reassigned work users you are removing to current team members? 


## Remove users from VSTS accounts

If your VSTS account uses MSA accounts, then to you must remove users from the VSTS account as you have no other way to prevent access. When you do so, you'll not be able to create a query for work items assigned to the removed user account. To learn more, see [Delete users for VSTS](../accounts/delete-account-users.md).

If your VSTS account is backed by AAD, then you can disable or delete the AAD user account while leaving their VSTS account active. In this way, you can continue to query their work item history using their account name.  

##  Remove users from AD or AAD  

For information on removing users from AD or AAD, see one of these topics: 

- [Delete users from Azure AD](https://docs.microsoft.com/azure/active-directory/add-users-azure-active-directory#delete-users-from-azure-ad)
- [Delete a User Account from Active Directory](https://technet.microsoft.com/en-us/library/cc753730.aspx)

 
##  Reduce the number of paid users, reassign paid extensions

- [Change number of users who have paid Basic access](../billing/buy-basic-access-add-users.md)
- [Assign paid extension access to users for VSTS](../marketplace/assign-paid-extensions.md)

> [!NOTE]   
> To access the VSTS **Users** hub and manage users, you must have 
[VSTS project collection administrator or account owner permissions](lookup-account-owner-admin.md).

## Related notes

- [About permissions and groups](../security/about-permissions.md)
- [Set permissions at the project-level or project collection-level](set-project-collection-level-permissions.md)
- [About security and identity](about-security-identity.md)

[!INCLUDE [temp](../_shared/help-support-shared.md)] 

