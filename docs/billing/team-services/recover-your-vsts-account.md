---
title: Delete or recover Team Services account | Visual Studio Team Services
description: How to delete or recover account in Visual Studio Team Services (VSTS, Visual Studio Online, VSO)
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
ms.assetid: b81adafa-adac-4e80-baa6-140fb58fbeff
ms.manager: douge
ms.author: estfan
ms.date: 08/04/2016
---

#   Delete or recover Visual Studio Team Services account

**Team Services**


PLACEHOLDER FILE





<a name="undelete"></a>
##  Restore your Visual Studio Team Services account

Your account will be disabled but available for 90 days after you delete it. 
If you change your mind during this time, you can recover your account. 
After 90 days, your account and data are permanently deleted.

You'll need Team Services account owner 
permissions to restore your Team Services account. 
[How do I find the account owner?](#find-owner)

0.	Sign in to your [Visual Studio profile](https://app.vsaex.visualstudio.com/profile/view).

	[Why am I asked to choose between my work or school account and my personal account?](#ChooseOrgAcctMSAcct)

0.  Restore your account.

	![Next to your deleted account, click Restore](_img/delete-account/restore-account.png)

	*	If your account URL is still available, you can restore your account.

		![Confirm restoring your account](_img/delete-account/restore-confirm.png)

	*	If your account URL isn't available, provide a new URL.

       ![Rename your deleted account](_img/delete-account/rename-deleted-account.png)

0.  After you restore your account:

	*	If billing was set up for your account, you'll have to set it up again. Just 
[relink your account](set-up-billing-for-your-account-vs.md) to an Azure subscription.

	*   If your account was connected to Azure AD for authenticating user access, you won't have to reconnect it again.

	[Need help?](#get-support)

##  Q&A

<!-- BEGINSECTION class="md-qanda" -->

<a name="find-owner"></a>

[!INCLUDE [find-account-owner](../../_shared/qa-find-account-owner.md)]

[!INCLUDE [why-no-owned-accounts](../../_shared/qa-why-no-owned-accounts.md)]

<a name="ChooseOrgAcctMSAcct"></a>

[!INCLUDE [choose-msa-azuread-account](../../_shared/qa-choose-msa-azuread-account.md)]

[!INCLUDE [choose-msa-azuread-account2](../../_shared/qa-choose-msa-azuread-account2.md)]

[!INCLUDE [why-cant-sign-in-msa-azuread-account](../../_shared/qa-why-cant-sign-in-msa-azuread-account.md)]

<a name="get-support"></a>

[!INCLUDE [get-team-services-support](../../_shared/qa-get-team-services-support.md)]

<!-- ENDSECTION --> 
