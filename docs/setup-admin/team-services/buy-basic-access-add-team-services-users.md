---
title: Buy Basic access to add Team Services users | Visual Studio Team Services
description: Buy Basic access to add more users in Visual Studio Team Services (Visual Studio Online, VSO, VSTS)
ms.topic: get-started-article
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
ms.assetid: 02cb8774-6d1d-4f15-8818-b56541033b1f
ms.manager: douge
ms.author: estfan
ms.date: 1/10/2017
---

# Pay for Team Services users who need Basic access

**Team Services**

You can add these users to your Visual Studio Team Services account for free:

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
or learn about [Team Services user pricing for Basic access](https://www.visualstudio.com/team-services/pricing/). 
If you previously paid for Basic access through the Azure portal, 
you can still [find those steps here](#update-paid-users-azure).

> <p><a data-toggle="collapse" href="#expando-need-more-vs-subs">Need more Visual Studio subscriptions? &#x25BC;</a></p>
> <div class="collapse" id="expando-need-more-vs-subs">
> <p>Visual Studio subscriptions give you flexible ways to access Team Services 
> and to license the Visual Studio IDE and other Microsoft software for dev and test. 
> To buy more [Visual Studio subscriptions](https://www.visualstudio.com/products/how-to-buy-vs), 
> visit the [Visual Studio Marketplace](https://marketplace.visualstudio.com/subscriptions), 
> or learn [how to buy Visual Studio subscriptions here](../../marketplace/vs-subscriptions/buy-vs-subscriptions.md).
> </div>
>
> <p><a data-toggle="collapse" href="#expando-change-paid-extension-users">Need to change paid extension users instead? &#x25BC;</a></p>
> <div class="collapse" id="expando-change-paid-extension-users">
> <p>To change the number of paid extension users that you have in your Team Services account, 
> learn [how to update your paid extension users here](../../marketplace/get-vsts-extensions.md#change-extension-quantity).
> </div>
>
> <p><a data-toggle="collapse" href="#expando-access-vs-perms">How does access differ from permissions? &#x25BC;</a></p>
> <div class="collapse" id="expando-access-vs-perms">
> <p> Access levels control which features are available to users, 
> while permissions control access to account resources. 
> Learn how to [manage users and access levels here](add-account-users-assign-access-levels-team-services.md). 
> For TFS, learn how to [change access levels here](../../work/connect/change-access-levels.md) 
> or [buy more access to TFS or the Test hub here](../buy-access-tfs-test-hub.md). 
>
> To manage permissions for Team Services or TFS instead, 
> learn how to [add permissions here](../add-users.md) or 
> [restrict permissions here](../restrict-access-tfs.md).
> </div>

## Before you start

*	To manage users, you'll need Team Services 
[project collection administrator or account owner permissions](#FindOwnerPCA).

*	You'll need an Azure subscription 
that you can link to your Team Services account for billing, 
if your Team Services account isn't linked already. 
[Which Azure subscriptions can I use?](#AzureMSDNSubscription)

	To use an existing Azure subscription for billing, 
	you'll need at least Co-administrator permissions for that subscription. 
	If you don't have permissions, 
	have an Azure Account Administrator or Service Administrator 
	[add you as a Co-administrator to the Azure subscription that you want to use for billing](set-up-billing-for-your-account-vs.md#AddAzureAdmin).

	If you don't have an Azure subscription, 
	you can create a subscription when you start your purchase. 
	Or [create your Azure subscription here before you start](https://account.windowsazure.com/subscriptions/). 
	You'll get the necessary administrator permissions 
	with your new subscription. 

	Your Team Services account will reuse this Azure subscription 
	when you make future purchases for your Team Services account 
	from the [Visual Studio Marketplace](https://marketplace.visualstudio.com) 
	or from Azure. [More about Azure subscriptions for billing](#billing)

<a name="buy-access-vs-marketplace"></a>
## Pay for more Team Services users who need Basic access

0.	As Team Services project collection administrator or account owner, 
sign in to [**Visual Studio Marketplace** > **Other** > **Team Services Users**](https://marketplace.visualstudio.com/items?itemName=ms.vss-vstsuser), 
and choose **Buy**.

	![Go to Visual Studio Marketplace, Other, Team Services Users](_img/buy-more-basic-access/team-services-users-vs-marketplace.png)

0.  Select your Team Services account, 
if you have multiple accounts.

	![Select your Team Services account](_img/buy-more-basic-access/select-team-services-account-vs-marketplace.png)

	<p><a data-toggle="collapse" href="#expando-why-no-ts-account">Don't see your Team Services accounts? &#x25BC;</a></p>
	<div class="collapse" id="expando-why-no-ts-account">
	<p>To select your Team Services account here, you must have have Team Services 
	[project collection administrator or account owner permissions](#FindOwnerPCA).	
	</div>

0.	Confirm the Azure subscription that you'll use for billing. 

	If you have multiple Azure subscriptions, 
	select the Azure subscription that you want to use.
	Or if you don't have an Azure subscription, 
	create a new subscription now to use for billing. 
	[More about Azure subscriptions for billing](#billing)

	![Confirm or select your Azure subscription](_img/buy-more-basic-access/confirm-azure-subscription-vs-marketplace.png)

	<p><a data-toggle="collapse" href="#expando-why-no-azure-sub">Don't see the Azure subscription that you expect? &#x25BC;</a></p>
	<div class="collapse" id="expando-why-no-azure-sub">
	<p>To use an existing Azure subscription for billing, 
	you'll need at least Co-administrator permissions for that subscription. 
	If you don't have permissions, 
	have an Azure Account Administrator or Service Administrator 
	[add you as a Co-administrator to the linked Azure subscription](set-up-billing-for-your-account-vs.md#AddAzureAdmin).
	</div>

0.	Enter the number of users who need paid Basic access.

	![Enter the number of users who need paid Basic access](_img/buy-more-basic-access/select-number-users-vs-marketplace.png)

0.	Now go to your Team Services account, 
[add your new users, and assign them Basic access](add-account-users-assign-access-levels-team-services.md). 

	![Go to your Team Services account](_img/buy-more-basic-access/confirm-basic-access-purchase-vs-marketplace.png)

	The number of users who you can assign paid Basic access appears here.

	![Number of users who you can assign paid Basic access](_img/buy-more-basic-access/paid-basic-access-for-team-services-users.png)

	Your user summary shows only the number of users with access levels assigned to them.

## Change number of users who have paid Basic access

When your team size changes, and you have to update the users 
who have paid Basic access in your Team Services account, 
update this quantity in the Visual Studio Marketplace, 
whether you're adding or removing these users. 

For example, if you remove users who have paid 
Basic access from your Team Services account, 
you must reduce them too in the Visual Studio Marketplace. That way, 
you're not charged for them when your next Azure billing cycle starts. 
If you previously managed paid Basic access through the Azure portal, 
you can still [find those steps here](#update-paid-users-azure).

> To reduce or cancel users who have paid Basic access for the next month, 
> you must make your changes before the last day of the month. 
> Your charges won't change until the next month because paid users are monthly purchases. 

### Before you start

*	You'll need Team Services 
[project collection administrator or account owner permissions](#FindOwnerPCA).

*	You'll need at least Co-administrator permissions for the Azure subscription 
that's linked to your Team Services account for billing. If you don't have permissions, 
have an Azure Account Administrator or Service Administrator 
[add you as a Co-administrator to the linked Azure subscription](set-up-billing-for-your-account-vs.md#AddAzureAdmin).

### Update number of users who have paid Basic access

0.	As Team Services project collection administrator or account owner, 
sign in to [**Visual Studio Marketplace** > **Other** > **Team Services Users**](https://marketplace.visualstudio.com/items?itemName=ms.vss-vstsuser), 
and choose **Buy**.

	![Go to Visual Studio Marketplace, Other, Team Services Users](_img/buy-more-basic-access/team-services-users-vs-marketplace.png)

0.  Select your Team Services account, 
if you have multiple accounts.

	![Select your Team Services account](_img/buy-more-basic-access/select-team-services-account-vs-marketplace.png)

	<p><a data-toggle="collapse" href="#expando-why-no-ts-account">Don't see your Team Services accounts? &#x25BC;</a></p>
	<div class="collapse" id="expando-why-no-ts-account">
	<p>To select your Team Services account here, you must have have Team Services 
	[project collection administrator or account owner permissions](#FindOwnerPCA).	
	</div>

0.	Update your total users who have paid Basic access. 
To cancel all your paid users, 
reduce this number to zero (0).

	For example, we're going to increase our total paid users from this number:

	![Current number of users who have paid Basic access](_img/buy-more-basic-access/select-number-users-vs-marketplace.png)

	to this number:

	![Increase users who have paid Basic access](_img/buy-more-basic-access/select-number-users-vs-marketplace-add-more.png)

	**Note** When you reduce users, make sure that you don't have more users with paid Basic 
	access in your Team Services account than you have in the Visual Studio Marketplace. 
	Otherwise, when the next Azure billing cycle starts, 
	the paid users who haven't signed into your account the longest will lose access first. 
	If you [pay for TFS client access licenses (CALs) through Team Services](../buy-access-tfs-test-hub.md), 
	make sure that you still have enough CALs for the users who need them.

	<a name="RemoveLicenses"></a>
	<p><a data-toggle="collapse" href="#expando-reduce-users-during-month">What if I reduce users during the month? &#x25BC;</a></p>
	<div class="collapse" id="expando-reduce-users-during-month">
	<p>Your charges won't change until the next month 
	because paid Basic access is a monthly commitment. 
	</div>

0.	Confirm your changes. Go back to your Team Services account to 
[reassign access levels for your users, if necessary](add-account-users-assign-access-levels-team-services.md).

	![Reassign user access levels, if necesary](_img/buy-more-basic-access/confirm-updated-basic-access-purchase-vs-marketplace.png)

## Q&A

### Permissions

<!-- BEGINSECTION class="m-qanda" -->

<a name="FindOwnerPCA"></a>

[!INCLUDE [find-project-collection-administrator](../../_shared/qa-find-project-collection-administrator.md)]

[!INCLUDE [find-account-owner](../../_shared/qa-find-account-owner.md)]

<!-- ENDSECTION --> 

### Purchases and billing

<a name="AzureMSDNSubscription"></a>

[!INCLUDE [azure-subscriptions-for-billing](../../_shared/qa-azure-subscriptions-for-billing.md)]

<a name="billing"></a>

[!INCLUDE [azure-billing](../../marketplace/_shared/qa-azure-billing.md)]

<a name="QALicensesResources"></a>

####Q:  When do I get billed?

A:  You're charged only when you've paid 
for users above the free limits. 
Your charges are prorated during the 1st month. 
After that, you're billed automatically on the 
1st day of the calendar month. To calculate pricing, 
[go to the Azure pricing calculator](https://azure.microsoft.com/en-us/pricing/calculator/?service=visual-studio-team-services), 
or learn about [Team Services user pricing for Basic access](https://www.visualstudio.com/team-services/pricing/). 

####Q: When do paid users renew?

A: Paid users renew automatically on the 1st of each month. 
To reduce paid users for the next month, 
you must make the change before the last day of the month.

<a name="no-accounts"></a>

[!INCLUDE [no-accounts](../../marketplace/_shared/qa-no-accounts.md)]

[!INCLUDE [azure-bill-larger](../../_shared/qa-azure-bill-larger.md)]

[!INCLUDE [azure-subscription-disabled-team-services](../../_shared/qa-azure-subscription-disabled-team-services.md)]

<a name="update-paid-users-azure"></a>
####Q: Can I still buy or manage paid Basic access through the Azure portal?

A:	You can still use the Azure portal or Azure classic portal 
to pay for users who need Basic access or to manage the number 
of Team Services users that you're paying to get Basic access.

> Try [buying or managing paid Basic access through Visual Studio Marketplace](#buy-access-vs-marketplace). 
> Otherwise, if you're buying Basic access for the first time, 
> and you haven't set up billing for your Team Services account yet, 
> you must [link your Team Services account to an Azure subscription for billing](set-up-billing-for-your-account-vs.md). 
> You can then pay for Team Services users in the Azure classic portal or the Azure portal. 
> 
> To reduce or cancel users who have paid Basic access for the next month, 
> you must make your changes before the last day of the month. 
> Your charges won't change until the next month because paid users are monthly purchases.

<div style="background-color: #f2f0ee;padding-top:10px;padding-bottom:10px;">
<ul class="nav nav-pills" style="padding-right:15px;padding-left:15px;padding-bottom:5px;vertical-align:top;font-size:18px;">
<li style="float:left;" data-toggle="collapse" data-target="#update-paid-users">Buy or manage paid Basic access</li>
<li style="float: right;"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#AEAEAE;margin: 0px 0px 0px 8px;min-width:90px;color: #fff;border: solid 2px #AEAEAE;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:14px;font-weight:400" data-toggle="pill" href="#azure-classic-portal-0">Azure classic portal</a></li>
<li class="active" style="float: right"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#007acc;margin: 0px 0px 0px 0px;min-width:90px;color: #fff;border: solid 2px #007acc;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:14px;font-weight:400" data-toggle="pill" href="#azure-portal-0">Azure portal</a></li>
</ul>

<div id="update-paid-users" class="tab-content collapse in fade" style="background-color: #ffffff;margin-left: 15px;margin-right:15px;padding: 5px 5px 5px 5px;">
<div id="azure-portal-0" class="tab-pane fade in active">
<p>**Azure portal**
<p>
<p>Before you start, you'll need [Team Services project collection administrator or account owner permissions](#find-owner). 
You'll also need at least [Co-administrator permissions](set-up-billing-for-your-account-vs.md#AddAzureAdmin) 
for the Azure subscription that's linked to your Team Services account.
<p>
<ol>
<li>Sign in to the [Azure portal](https://portal.azure.com).
<li>Go to **Browse** > **Team Services accounts**. 
Select your Team Services account.
<p>
<p>![Browse, Team Services accounts, select your Team Services account](_img/_shared/AP_VSO_SelectLinkedAccount.png)
<p>
<p>[Why don't I see my Team Services account?](#WhyNoVSOAccount)
<p>
<li>Go to **Settings** > **Users**.
<p>
<p>![View users](_img/_shared/AP_VSO_ManageLicenses.png)
<p>
<li>Select the number of users with Basic access that you want to pay for. 
To cancel all paid users, reduce this number to zero (0). Save your changes.
<p>
<p>![Update paid users. Save changes](_img/buy-more-basic-access/AP_VSO_SelectTotalUsers.png)
<p>If you add users, you're not charged until you save your changes. 
</ol>
</div>

<div class="tab-pane fade" id="azure-classic-portal-0" style="background-color: #ffffff;margin-left: 15px;margin-right:15px;padding: 5px 5px 5px 5px;">
<p>**Azure classic portal**
<p>
<p>Before you start, you'll need at least [Co-administrator permissions](set-up-billing-for-your-account-vs.md#AddAzureAdmin) 
for the Azure subscription that's linked to your Team Services account. 
<p>
<ol>
<li>Sign in to the [Azure classic portal](https://manage.windowsazure.com/).
<li>Go to **Visual Studio Team Services**. 
Select your Team Services account.
<p>
<p>![Visual Studio Team Services, select your Team Services account](_img/_shared/AzureChooseLinkedAccount.png)
<p>
<p>[Why don't I see my Team Services account?](#WhyNoVSOAccount)
<p>
<li>Go to **Scale**.
<p>
<p>![Go to the Scale page](_img/_shared/AzureScaleLicensesResources.png)
<p>
<li>Drag the slider to select the total number of users with Basic access 
that you want in your Team Services account. To cancel all paid users, 
drag the slider until only 5 users appear. Save your changes. 
<p>
<p>![Update paid users](_img/buy-more-basic-access/AP_VSO_SelectTotalUsers.png)
<p>
<p>**Note** Your account includes 5 free users who get Basic access. 
So you'll only pay for users beyond that quantity. You're not charged until you save your changes. 
<p>
<p>![Save changes](_img/_shared/save-changes.png)
</ol>
</div>

<a name="WhyNoVSOAccount"></a>

[!INCLUDE [azure-why-no-team-services-account](../../_shared/qa-azure-why-no-team-services-account.md)]

</div></div>

<a name="get-support"></a>

####Q:	What happened to Visual Studio Online Professional?

A:	[Learn more here](https://go.microsoft.com/fwlink/?LinkId=698858).

[!INCLUDE [azure-account-billing-support](../../_shared/qa-azure-account-billing-support.md)]

[!INCLUDE [marketplace-support](../../marketplace/_shared/qa-marketplace-support.md)]

[!INCLUDE [get-team-services-support](../../_shared/qa-get-team-services-support.md)]

