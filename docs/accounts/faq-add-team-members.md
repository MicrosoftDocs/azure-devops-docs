---
title: Troubleshoot adding members to team projects in VSTS
description: Troubleshoot adding members to team projects in Visual Studio Team Services (VSTS)
ms.prod: vs-devops-alm
ms.technology: vs-devops-setup
ms.assetid: d3945cd4-d024-4d6f-b949-9feaa62e9948
ms.manager: douge
ms.author: chcomley
ms.date: 10/17/2017
---

#	Troubleshoot adding members to team projects in Visual Studio Team Services (VSTS)

**VSTS**



<a name="cant-add-users"></a>
####Q:	Why can't I add any more members to my team project?

A:	Your VSTS account is free for the first 5 users with Basic access. 
You can add unlimited Stakeholders and Visual Studio subscribers for no extra charge. 
After you assign all 5 free users with Basic access, 
you can continue adding Stakeholders and Visual Studio subscribers. 
To add a 6th user or more with Basic access, 
you'll need to [set up billing in Azure](../billing/set-up-billing-for-your-account-vs.md). 
You can then [pay for more users who need Basic access](../billing/buy-basic-access-add-users.md), 
return to your VSTS account, 
[add these users, and assign them Basic access](add-account-users-assign-access-levels.md). 
This lets you pay monthly for their access, and you can cancel anytime.

If you need more Visual Studio subscriptions, 
learn [how to buy these subscriptions](../billing/vs-subscriptions/buy-vs-subscriptions.md) 
from the [Visual Studio Marketplace](https://marketplace.visualstudio.com/subscriptions).

<a name="WhyCantSignIn"></a>

####Q:	Why can't some users sign in?

A:	This might happen because users must 
sign in with Microsoft accounts 
unless your VSTS account 
controls access with Azure Active Directory (Azure AD). 
If your account is connected to Azure AD, 
users must be directory members to get access. 
[How do I find out if my account uses Azure Active Directory (Azure AD)?](#ConnectedDirectory) 

If you're an Azure AD administrator, 
you can add users to the directory. If you're not, 
work with the directory administrator to add them. 
Learn [how to control account access with Azure AD](access-with-azure-ad.md).

<a name="feature-access"></a>

[!INCLUDE [no-access-existing-features](../_shared/qa-no-access-existing-features.md)]

####Q:	 Why did some users lose access to certain features?

A:	This might happen for [different reasons](faq-add-delete-users.md#stopped-features).  

<a name="ConnectedDirectory"></a>

[!INCLUDE [does-account-use-azuread](../_shared/qa-does-account-use-azuread.md)]

<a name="RemovePeople"></a>

####Q:	How do I remove users from my VSTS account?

A:	Learn [how to delete users](delete-account-users.md) 
across all team projects in your VSTS account. 
If you paid for more users, but don't need their account access
anymore, you must reduce your paid users to avoid charges.

<a name="users-delay"></a>

[!INCLUDE [user-delay](../_shared/qa-user-delay.md)]

<a name="ChooseOrgAcctMSAcct"></a>

[!INCLUDE [choose-msa-azuread-account](../_shared/qa-choose-msa-azuread-account.md)]

[!INCLUDE [choose-msa-azuread-account2](../_shared/qa-choose-msa-azuread-account2.md)]

[!INCLUDE [why-cant-sign-in-msa-azuread-account](../_shared/qa-why-cant-sign-in-msa-azuread-account.md)]

<a name="find-pca-owner"></a>

[!INCLUDE [find-project-collection-administrator](../_shared/qa-find-project-collection-administrator.md)]

[!INCLUDE [find-account-owner](../_shared/qa-find-account-owner.md)]

<a name="get-support"></a>

[!INCLUDE [get-team-services-support](../_shared/qa-get-vsts-support.md)]
