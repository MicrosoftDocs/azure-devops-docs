---
title: Change the number of paid VSTS users on your account | VSTS
description: Change the number of paid VSTS users on your account as your team grows or contracts (Visual Studio Online, VSO, VSTS)
ms.topic: get-started-article
ms.prod: vs-devops-alm
ms.technology: vs-devops-setup
ms.assetid: 02cb8774-6d1d-4f15-8818-b56541033b1f
ms.manager: douge
ms.author: chcomley
ms.date: 1/29/2018
---

# Change the number of paid VSTS users on your account

**VSTS**

When your team grows, you'll need to pay for more VSTS users in your account before you can add people to your team. When your team contracts, 
you can reduce the number of paid VSTS users in your account and the changes take effect on the 1st day of the next month.

>[!NOTE]
> To reduce or cancel users who have paid Basic access for the next month, you must make your changes before the last day of the month. 
> Your charges won't change until the next month because paid users are monthly purchases. 

### Before you start

*	You'll need VSTS 
[project collection administrator or account owner permissions](faq-pay-for-basic-users.md#FindOwnerPCA).

*	You'll need at least co-administrator permissions for the Azure subscription 
that's linked to your VSTS account for billing. If you don't have permissions, 
have an Azure account administrator or service administrator 
[add you as a co-administrator to the linked Azure subscription](add-backup-billing-managers.md).

### Update number of users who have paid Basic access

0.	As VSTS project collection administrator or account owner, 
sign in to [**Visual Studio Marketplace** > **Other** > **VSTS Users**](https://marketplace.visualstudio.com/items?itemName=ms.vss-vstsuser), 
and choose **Buy**.

	![Go to Visual Studio Marketplace, Other, VSTS Users](_img/buy-more-basic-access/team-services-users-vs-marketplace.png)

0.  Select your VSTS account, 
if you have multiple accounts.

	![Select your VSTS account](_img/buy-more-basic-access/select-team-services-account-vs-marketplace.png)

	<p><a data-toggle="collapse" href="#expando-why-no-ts-account">Don't see your VSTS accounts? &#x25BC;</a></p>
	<div class="collapse" id="expando-why-no-ts-account">
	<p>To select your VSTS account here, you must have have VSTS 
	[project collection administrator or account owner permissions](faq-pay-for-basic-users.md#FindOwnerPCA).	
	</div>

0.	Update your total users who have paid Basic access. 
To cancel all your paid users, 
reduce this number to zero (0).

	For example, we're going to increase our total paid users from this number:

	![Current number of users who have paid Basic access](_img/buy-more-basic-access/select-number-users-vs-marketplace.png)

	to this number:

	![Increase users who have paid Basic access](_img/buy-more-basic-access/select-number-users-vs-marketplace-add-more.png)

	**Note** When you reduce users, make sure that you don't have more users with paid Basic 
	access in your VSTS account than you have in the Visual Studio Marketplace. 
	Otherwise, when the next Azure billing cycle starts, 
	the paid users who haven't signed into your account the longest will lose access first. 
	If you [pay for TFS client access licenses (CALs) through VSTS](buy-access-tfs-test-hub.md), 
	make sure that you still have enough CALs for the users who need them.

	<a name="RemoveLicenses"></a>
	<p><a data-toggle="collapse" href="#expando-reduce-users-during-month">What if I reduce users during the month? &#x25BC;</a></p>
	<div class="collapse" id="expando-reduce-users-during-month">
	<p>Your charges won't change until the next month 
	because paid Basic access is a monthly commitment. 
	</div>

0.	Confirm your changes. Go back to your VSTS account to 
[reassign access levels for your users, if necessary](../accounts/add-account-users-assign-access-levels.md).

	![Reassign user access levels, if necesary](_img/buy-more-basic-access/confirm-updated-basic-access-purchase-vs-marketplace.png)

