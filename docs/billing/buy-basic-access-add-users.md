---
title: Buy Basic access to add VSTS users | VSTS
description: Buy Basic access to add more users in VSTS (Visual Studio Online, VSO, VSTS)
ms.topic: get-started-article
ms.prod: vs-devops-alm
ms.technology: vs-devops-setup
ms.assetid: 02cb8774-6d1d-4f15-8818-b56541033b1f
ms.manager: douge
ms.author: billchi
ms.date: 01/04/2017
---

# Pay for VSTS users who need Basic access

**VSTS**

You can add these users to your VSTS account for free:

*	5 users who get [Basic](https://www.visualstudio.com/team-services/compare-features/) 
features like version control, tools for Agile, Java, build, release management, and more
*	Unlimited [Stakeholders](https://www.visualstudio.com/team-services/compare-features/) 
who get more restricted features like working with your backlog, work items, and queries
*	Unlimited [Visual Studio subscribers](https://www.visualstudio.com/team-services/compare-features/) 
who also get Basic features, and in some cases, additional features with specific extensions like 
[Test Manager](https://marketplace.visualstudio.com/items?itemName=ms.vss-testmanager-web)

When your account stays within these free limits, 
you don't have to pay for these users to join your account.
If you have to add 6 users or more who need Basic access, 
you can pay monthly for additional users in the Visual Studio Marketplace. 
Each of these users also gets a Team Foundation Server 
CAL (Client Access License) to access an on-premises TFS, 
so you can buy monthly TFS access for your team. To calculate pricing, 
[go to the Azure pricing calculator](https://azure.microsoft.com/en-us/pricing/calculator/?service=visual-studio-team-services), 
or learn about [VSTS user pricing for Basic access](https://www.visualstudio.com/team-services/pricing/). 
If you previously paid for Basic access through the Azure portal, 
you can still [find those steps here](faq-pay-for-basic-users.md#update-paid-users-azure).



## Prerequisites

*	To manage users, you'll need [VSTS project collection administrator or account owner permissions](../security/set-project-collection-level-permissions.md?toc=/vsts/accounts/toc.json&bc=/vsts/accounts/breadcrumb/toc.json). 

*	You'll need an Azure subscription 
that you can link to your VSTS account for billing, 
if your VSTS account isn't linked already. 
[Which Azure subscriptions can I use?](faq-pay-for-basic-users.md#AzureMSDNSubscription)

	To use an existing Azure subscription for billing, 
	you'll need at least Co-administrator permissions for that subscription. 
	If you don't have permissions, 
	have an Azure Account Administrator or Service Administrator 
	[add you as a Co-administrator to the Azure subscription that you want to use for billing](add-backup-billing-managers.md).

	If you don't have an Azure subscription, 
	you can create a subscription when you start your purchase. 
	Or [create your Azure subscription here before you start](https://portal.azure.com). 
	You'll get the necessary administrator permissions 
	with your new subscription. 

	Your VSTS account will reuse this Azure subscription 
	when you make future purchases for your VSTS account 
	from the [Visual Studio Marketplace](https://marketplace.visualstudio.com) 
	or from Azure. [More about Azure subscriptions for billing](faq-pay-for-basic-users.md#billing)



<a name="buy-access-vs-marketplace"></a>
## Pay for more VSTS users who need Basic access

0.	As VSTS project collection administrator or account owner, 
sign in to [**Visual Studio Marketplace** > **Other** > **VSTS Users**](https://marketplace.visualstudio.com/items?itemName=ms.vss-vstsuser), 
and choose **Buy**.

	![Go to Visual Studio Marketplace, Other, VSTS Users](_img/buy-more-basic-access/team-services-users-vs-marketplace.png)

0.  Select your VSTS account, 
if you have multiple accounts.

	![Select your VSTS account](_img/buy-more-basic-access/select-team-services-account-vs-marketplace.png)

	**Don't see your VSTS accounts?**   
	To select your VSTS account here, you must have have [VSTS project collection administrator or account owner permissions](../security/set-project-collection-level-permissions.md?toc=/vsts/accounts/toc.json&bc=/vsts/accounts/breadcrumb/toc.json).	

0.	Confirm the Azure subscription that you'll use for billing. 

	If you have multiple Azure subscriptions, 
	select the Azure subscription that you want to use.
	Or if you don't have an Azure subscription, 
	create a new subscription now to use for billing. 
	[More about Azure subscriptions for billing](faq-pay-for-basic-users.md#billing)

	![Confirm or select your Azure subscription](_img/buy-more-basic-access/confirm-azure-subscription-vs-marketplace.png)

	**Don't see the Azure subscription that you expect?**  
	To use an existing Azure subscription for billing, 
	you'll need at least Co-administrator permissions for that subscription. 
	If you don't have permissions, 
	have an Azure Account Administrator or Service Administrator 
	[add you as a Co-administrator to the linked Azure subscription](add-backup-billing-managers.md).

0.	Enter the number of users who need paid Basic access.

	![Enter the number of users who need paid Basic access](_img/buy-more-basic-access/select-number-users-vs-marketplace.png)

0.	Now go to your VSTS account, 
[add your new users, and assign them Basic access](../accounts/add-account-users-assign-access-levels.md). 

	![Go to your VSTS account](_img/buy-more-basic-access/confirm-basic-access-purchase-vs-marketplace.png)

	The number of users who you can assign paid Basic access appears here.

	![Number of users who you can assign paid Basic access](_img/buy-more-basic-access/paid-basic-access-for-team-services-users.png)

	Your user summary shows only the number of users with access levels assigned to them.


## Change number of users who have paid Basic access

When your team size changes, and you have to update the users 
who have paid Basic access in your VSTS account, 
update this quantity in the Visual Studio Marketplace, 
whether you're adding or removing these users. 

For example, if you remove users who have paid 
Basic access from your VSTS account, 
you must reduce them too in the Visual Studio Marketplace. That way, 
you're not charged for them when your next Azure billing cycle starts. 
If you previously managed paid Basic access through the Azure portal, 
you can still [find those steps here](faq-pay-for-basic-users.md#update-paid-users-azure).

> To reduce or cancel users who have paid Basic access for the next month, 
> you must make your changes before the last day of the month. 
> Your charges won't change until the next month because paid users are monthly purchases. 

### Prerequisites

*	You'll need [VSTS project collection administrator or account owner permissions](../security/set-project-collection-level-permissions.md?toc=/vsts/accounts/toc.json&bc=/vsts/accounts/breadcrumb/toc.json).

*	You'll need at least Co-administrator permissions for the Azure subscription 
that's linked to your VSTS account for billing. If you don't have permissions, 
have an Azure Account Administrator or Service Administrator 
[add you as a Co-administrator to the linked Azure subscription](add-backup-billing-managers.md).

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
	**What if I reduce users during the month?**   
	Your charges won't change until the next month 
	because paid Basic access is a monthly commitment. 


0.	Confirm your changes. Go back to your VSTS account to 
[reassign access levels for your users, if necessary](../accounts/add-account-users-assign-access-levels.md).

	![Reassign user access levels, if necesary](_img/buy-more-basic-access/confirm-updated-basic-access-purchase-vs-marketplace.png)


## Related notes

- [Grant or restrict access to select features and functions](../security/restrict-access.md)
- [Delete users from VSTS](../accounts/delete-account-users.md)
- [Troubleshoot adding and deleting account users](../accounts/faq-add-delete-users.md)
- [Troubleshoot adding members to team projects](../accounts/faq-add-team-members.md)


### How does *access* differ from *permissions*?

Access levels control which features are available to users, while permissions control their access to account resources. To learn more, see [Default permissions and access](../security/permissions-access.md). 

### Need more Visual Studio subscriptions? 

Visual Studio subscriptions give you flexible ways to access VSTS 
and to license the Visual Studio IDE and other Microsoft software for dev and test. 
To buy more [Visual Studio subscriptions](https://www.visualstudio.com/products/how-to-buy-vs), 
visit the [Visual Studio Marketplace](https://marketplace.visualstudio.com/subscriptions), 
 or learn [how to buy Visual Studio subscriptions here](vs-subscriptions/buy-vs-subscriptions.md).

### Need to change paid extension users instead? 

To change the number of paid extension users that you have in your VSTS account, 
learn [how to update your paid extension users here](change-number-paid-extension-users.md).

