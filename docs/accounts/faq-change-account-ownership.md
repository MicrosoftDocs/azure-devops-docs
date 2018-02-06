---
title: Troubleshoot changing account owner for VSTS 
description: Troubleshoot changing account owner for VSTS
ms.prod: vs-devops-alm
ms.technology: vs-devops-setup
ms.assetid: e0fe24d4-f76b-43af-b0fd-125a7fb39042
ms.manager: douge
ms.author: chcomley
ms.date: 10/09/2017
---

# Troubleshoot changing account owner for VSTS

**VSTS**

<a name="find-owner-pca"></a>

[!INCLUDE [find-project-collection-administrator](../_shared/qa-find-project-collection-administrator.md)]

[!INCLUDE [find-account-owner](../_shared/qa-find-account-owner.md)]

<a name="NoNewOwner"></a>
####Q: Why can't I find the user I want to make the new owner?

A: This might happen because:

*	They're not in your VSTS account, 
or they don't have account access. 
Learn how to [add them to your account](add-account-users-assign-access-levels.md).  
*	They haven't created a Visual Studio profile 
and agreed to the Terms of Service.  
*	If you recently added this person to your account, 
you might experience a delay before this person appears 
in the possible account owners list.   
*	If your account uses Azure Active Directory to control access, 
directory members won't appear in the possible account owners 
list until they meet the requirements above.

[!INCLUDE [recover-password](../_shared/qa-recover-password.md)]

####Q: Can I reverse the account owner change?

A: Yes, if you're a project collection administrator.

####Q: Can I change the account name (URL) too?

A: Only the account owner can change the URL. 
If you're the account owner, learn how to 
[change the account URL here](rename-vsts-account.md).

####Q:	How many account owners can I have?

A:	Your account can have only one owner. 
Only they can [perform certain actions](#owner-differences), 
so make sure to keep your account owner updated.

####Q: Why did you ask for extra information when I signed in?

A: If our Terms of Service have changed since you last signed in, 
you might be asked to agree and confirm that your information is up to date.

<a name="owner-differences"></a>
####Q: What makes the account owner different than other account users?

A: The account owner manages payments and access for account users and also manages billing for the account through the 
[Azure classic portal](https://manage.windowsazure.com/) or the
[Azure portal](https://portal.azure.com). 

Account owners also have permissions to perform these tasks:

*	Pay for users accessing the account
*	Pay for additional account services
*	Rename the account URL
*	Change the account owner

In contrast, project collection administrators can manage user access 
and change the account owner, but they can't rename the account URL.

<a name="ChooseOrgAcctMSAcct"></a>

[!INCLUDE [choose-msa-azuread-account](../_shared/qa-choose-msa-azuread-account.md)]

[!INCLUDE [choose-msa-azuread-account2](../_shared/qa-choose-msa-azuread-account2.md)]

[!INCLUDE [why-cant-sign-in-msa-azuread-account](../_shared/qa-why-cant-sign-in-msa-azuread-account.md)]

[!INCLUDE [why-no-owned-accounts](../_shared/qa-why-no-owned-accounts.md)]

<a name="get-support"></a>

[!INCLUDE [get-team-services-support](../_shared/qa-get-vsts-support.md)]

