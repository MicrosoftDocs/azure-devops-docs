---
title: Change the number of paid VSTS users on your account | VSTS
description: Change the number of paid VSTS users on your account as your team grows or contracts (Visual Studio Online, VSO, VSTS)
ms.topic: get-started-article
ms.prod: vs-devops-alm
ms.technology: vs-devops-setup
ms.assetid: 02cb8774-6d1d-4f15-8818-b56541033b1f
ms.manager: douge
ms.author: chcomley
ms.date: 3/22/2018
---
[//]: # (monikerRange: 'vsts')

# Change the number of paid VSTS users on your account

**VSTS**

When your team grows, you'll need to pay for more VSTS users in your account before you can add people to your team. When your team contracts,
you can reduce the number of paid VSTS users in your account and the changes take effect on the 1st day of the next month.

>[!NOTE]
> To reduce or cancel users who have paid Basic access for the next month, you must make your changes before the last day of the month. 
> Your charges won't change until the next month because paid users are monthly purchases. 

## Prerequisites

The first time that you set up billing for your VSTS account--whether you do this via the Azure portal or as part of making a purchase in the Visual Studio Marketplace, you will need:

0. [VSTS project collection administrator or account owner permissions](vsts-billing-faq.md#find-owner)
0. [The **owner** or **contributor** role on your Azure subscription](add-backup-billing-managers.md)

To make subsequent edits to paid quantities in your VSTS account, you only need the owner or contributor role on your Azure subscription.

### Update the number of paid users on your account

1. As VSTS project collection administrator or account owner, sign in to [**Visual Studio Marketplace** > **Other** > **VSTS Users**](https://marketplace.visualstudio.com/items?itemName=ms.vss-vstsuser), and choose **Buy**.

  ![Go to Visual Studio Marketplace, Other, VSTS Users](_img/buy-more-basic-access/team-services-users-vs-marketplace.png)

2. Select your VSTS account, if you have multiple accounts.

  ![Select your VSTS account](_img/buy-more-basic-access/select-team-services-account-vs-marketplace.png)

	<p><a data-toggle="collapse" href="#expando-why-no-ts-account">Don't see your VSTS accounts? &#x25BC;</a></p>
	<div class="collapse" id="expando-why-no-ts-account">
	<p>To select your VSTS account here, you must have have VSTS
	[project collection administrator or account owner permissions](vsts-billing-faq.md#find-owner).
	</div>

3. Update the number of paid users. To cancel all your paid users, reduce this number to zero (0).

  For example, we're going to increase our total paid users from this number:

  ![Current number of users who have paid Basic access](_img/buy-more-basic-access/select-number-users-vs-marketplace.png) to this number:

  ![Increase users who have paid Basic access](_img/buy-more-basic-access/select-number-users-vs-marketplace-add-more.png)

 >[!NOTE]
 > When you reduce the number of paid users on your account, be sure to remove users from the Users hub before the end of the month. When the next month starts,  
 > the new limit (paid users + 5 free) will be in effect. 
 > 
 >  If you [pay for TFS client access licenses (CALs) through VSTS](buy-access-tfs-test-hub.md), make sure that you still have enough CALs for the users who need them.


4. Confirm your changes. Go back to your VSTS account to [reassign access levels for your users, if necessary](../accounts/add-account-users-assign-access-levels.md).

  ![Reassign user access levels, if necessary](_img/buy-more-basic-access/confirm-updated-basic-access-purchase-vs-marketplace.png)

## Related information

- [Add more team members to your VSTS account](../accounts/add-account-users-from-user-hub.md)
- [Pay for TFS users](buy-access-tfs-test-hub.md)
- [Set up billing](set-up-billing-for-your-account-vs.md)
- [Add backup billing managers](add-backup-billing-managers.md)
- [Change the Azure subscription for billing](change-azure-subscription.md)
- [VSTS billing FAQ](vsts-billing-faq.md)
- [VSTS pricing](https://azure.microsoft.com/pricing/details/visual-studio-team-services/)
- [VSTS billing support](https://www.visualstudio.com/team-services/support/)