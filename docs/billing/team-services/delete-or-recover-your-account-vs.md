---
title: Delete or recover Team Services account | Visual Studio Team Services
description: How to delete or recover account in Visual Studio Team Services (VSTS, Visual Studio Online, VSO)
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
ms.assetid: 2a0826d4-503a-4c2a-b0aa-a1ad7e6dc544
ms.manager: douge
ms.author: estfan
ms.date: 08/04/2016
---

#   Delete or recover Visual Studio Team Services account

**Team Services**

If you don't need your Visual Studio 
Team Services account, you can delete it. 
If you change your mind within 90 days, 
you can [recover your account](#undelete). 
After 90 days, your account 
and data are permanently deleted.

When you delete your Visual Studio Team Services account:

*   All users lose access to account services and resources immediately.

*   Your account URL becomes available for anyone to use. 
But it might take up to 1 hour before your account URL becomes available again. 

*   Your account is disabled and appears deleted in your profile for 90 days.

*   If your account is linked to an Azure subscription for billing purchases, 
you must unlink your account before you delete your account. 

	You're still charged for any paid users and
	team services that your account uses during this billing cycle. 
	Billing will stop after the current cycle ends.

To delete your Team Services account, 
you'll need Team Services account owner permissions. 
[How do I find the account owner?](#find-owner)

##  Before you delete your Visual Studio Team Services account

If your Team Services account uses an Azure subscription to bill purchases, 
you must first unlink your account from your Azure subscription before deleting your account. 

To unlink your account, 
you'll need Team Services account owner permissions 
and at least Azure subscription Co-Administrator permissions. 
[How do I find the account owner?](#find-owner) Or learn more about 
[Azure subscription administrators](https://azure.microsoft.com/en-us/documentation/articles/billing-add-change-azure-subscription-administrator/).

0.  Sign in to the [Azure classic portal](https://manage.windowsazure.com/) 
or [Azure portal](https://portal.azure.com). 

0.  Unlink your account from your Azure subscription.

	**Azure classic portal**

	![Select your VSTS account, unlink your account from your Azure subscription](./_img/delete-account/AzureUnlinkVSOAccount.png)

	**Azure portal**

	![Browse, Team Services accounts, select your account](./_img/_shared/AP_VSO_SelectLinkedAccount.png)

	![Unlink your account from an Azure subscription](./_img/delete-account/APP_UnlinkVSOAccount2.png)

	[Need help?](#get-support)

##  Delete your Visual Studio Team Services account

You'll need at least Basic access and Team Services account owner 
permissions to delete your Team Services account. 
[How do I find the account owner?](#find-owner)

0.  Sign in to your Visual Studio Team Services account (```https://{youraccount}.visualstudio.com```).

0.  Go to your Team Services account settings.

	![Go to account settings](../../_shared/_img/account-settings-new-ui.png)

0.  Under **Settings**, delete your account.

	![Click Delete account](_img/delete-account/VSODeleteAccount.png)

	You'll be redirected to www.visualstudio.com, but you'll stay signed in. 

0.	To review your accounts, go to your 
[Visual Studio profile](https://app.vsaex.visualstudio.com/profile/view) 
where you'll see your deleted account. 
    
	![Your account will appear deleted on your account list](_img/delete-account/deleted-account.png)

	[Need help?](#get-support)

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
