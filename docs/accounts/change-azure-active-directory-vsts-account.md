---
title: Change your VSTS account Azure Active Directory tenant
description: VSTS - Change directory (tenant) in Azure Active Directory (Azure AD, AAD) for VSTS (VSTS, Visual Studio Online, VSO)
ms.prod: vs-devops-alm
ms.technology: vs-devops-setup
ms.assetid: c687302d-ca34-44ea-8cfb-88fe7330072d
ms.manager: douge
ms.author: chcomley
ms.date: 10/6/2017
ms.topic: get-started-article
---

#	Change Azure Active Directory (Azure AD) tenant

**VSTS**

To move your VSTS account 
between directories (tenants) in Azure AD, 
disconnect your account from its current directory, 
then reconnect your account to the directory that you want.

<a name="permissions"></a>

You'll need:

*	VSTS account owner permissions. Only account 
owners can manage directory connections. 
[How do I find the account owner?](faq-change-app-access.md#find-owner)

*	At least Basic access, not Stakeholder

*	Global administrator permissions 
for your source and target Azure AD directories (tenants). 
Learn [how to manage Azure AD administrators](https://azure.microsoft.com/en-us/documentation/articles/active-directory-assign-admin-roles/).

*	Co-administrator permissions for the Azure subscriptions 
associated with your source and target directories. 
Learn [how to manage Azure subscription administrators](../billing/add-backup-billing-managers.md).

*	A temporary Microsoft account, like @outlook.com, 
to move your VSTS account between directories. 
This Microsoft account will need these permissions, 
which you'll set up below:

	*	Source directory global administrator
	*	(if adding users to target directory) Target directory user administrator
	*	Azure subscription co-administrator for both directories
	*	VSTS account owner. Only account owners can change directory connections.

##	What happens to current users?

Your work in VSTS is associated with your sign-in address. 
During directory migration, all VSTS account users need
Microsoft accounts to sign in. They'll continue working seamlessly 
if their Microsoft accounts share the same sign-in addresses that they use now. 
Otherwise, they'll lose access until you finish the migration or 
unless you add them as new users to your VSTS account.

After migration, users must be members of the target directory 
to get access to your VSTS account. They'll continue 
working seamlessly if they use the same sign-in addresses that they use now. 
Otherwise, you'll have to add them as new users to your VSTS account. 
Your organization might have policies about adding external users to the directory, 
so find out more first.


> [!div class="nextstepaction"]
> [Change Azure AD tenant: prepare source directory](change-azure-ad-vsts-account-prep-src.md)

