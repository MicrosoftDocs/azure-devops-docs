---
title: Change Azure Active Directory tenant -- prepare source directory
description: Change directory (tenant) in Azure Active Directory for VSTS -- prepare your source directory
ms.prod: vs-devops-alm
ms.technology: vs-devops-setup
ms.assetid: 2607876c-d9b0-499a-9645-dd4e68b6af20
ms.manager: douge
ms.author: chcomley
ms.date: 10/17/2017
ms.topic: get-started-article
---

#	Change Azure AD tenant -- prepare source directory

**VSTS**

You'll now set up source directory permissions and VSTS account owner permissions
so you can perform the migration.

## Set up your Microsoft account as Azure subscription co-administrator

[See steps here](/azure/billing/billing-add-change-azure-subscription-administrator).


[Why am I asked to choose between my work or school account and my personal account?](faq-azure-access.md#ChooseOrgAcctMSAcct)


## Set up your Microsoft account as global administrator in your source directory

[Add your account to the directory](/azure/active-directory/active-directory-create-users), and in the **Tell us about this user** step, choose **User with an existing Microsoft account**.  In the **user profile** step, choose **Global Admin**.


## Set up your Microsoft account as your VSTS account owner

0.	Sign in to your VSTS account (```http://{youraccount}.visualstudio.com```) as the account owner. 

	[Why am I asked to choose between my work or school account and my personal account?](faq-azure-access.md#ChooseOrgAcctMSAcct)

0.	View your VSTS account users.

	![Users hub](_img/_shared/users-hub-jamal.png)

0.	Add your Microsoft account to your VSTS account as a user.

	![Add your Microsoft account](_img/change-azure-active-directory/add-msa-vsts.png)

	Your Microsoft account appears in this list 
	because you added this user to the source directory.

0.	Sign in to your VSTS account with your Microsoft account,
so that VSTS can validate this user. Otherwise, 
your Microsoft account won't appear in the possible account owners list.

0.	Sign back in to your VSTS account as the account owner. 
Now change the VSTS account owner to your Microsoft account. 
Learn [how to change VSTS account owners](change-account-ownership-vs.md).

	**Important**: Before you disconnect your VSTS account,
	make sure that this Microsoft account is the VSTS account owner. 


> [!div class="nextstepaction"]
> [Change Azure AD tenant: prepare target directory](change-azure-ad-vsts-account-disconnect.md)

