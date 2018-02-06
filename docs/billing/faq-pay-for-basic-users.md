---
title: Buy Basic access to add VSTS users | VSTS
description: Buy Basic access to add more users in VSTS (Visual Studio Online, VSO, VSTS)
ms.prod: vs-devops-alm
ms.technology: vs-devops-setup
ms.assetid: c229c564-bda3-4d5d-92a9-4dbe45223367
ms.manager: douge
ms.author: chcomley
ms.date: 1/29/2018
---

# Troubleshooting paying for VSTS Basic access

**VSTS**


## Permissions

<a name="FindOwnerPCA"></a>

[!INCLUDE [find-project-collection-administrator](../_shared/qa-find-project-collection-administrator.md)]

[!INCLUDE [find-account-owner](../_shared/qa-find-account-owner.md)]


## Purchases and billing

<a name="EligibleAzureSubscriptions"></a>

[!INCLUDE [azure-subscriptions-for-billing](../_shared/qa-azure-subscriptions-for-billing.md)]

<a name="billing"></a>

[!INCLUDE [azure-billing](_shared/qa-azure-billing.md)]

<a name="QALicensesResources"></a>

####Q:  When do I get billed?

A:  You're charged only when you've paid 
for users above the free limits. 
Your charges are prorated during the 1st month. 
After that, you're billed automatically on the 
1st day of the calendar month. To calculate pricing, 
[go to the Azure pricing calculator](https://azure.microsoft.com/en-us/pricing/calculator/?service=visual-studio-team-services), 
or learn about [VSTS user pricing for Basic access](https://www.visualstudio.com/team-services/pricing/). 

####Q: When do paid users renew?

A: Paid users renew automatically on the 1st of each month. 
To reduce paid users for the next month, 
you must make the change before the last day of the month.

<a name="no-accounts"></a>

[!INCLUDE [no-accounts](_shared/qa-no-accounts.md)]

[!INCLUDE [azure-bill-larger](../_shared/qa-azure-bill-larger.md)]

[!INCLUDE [azure-subscription-disabled-team-services](../_shared/qa-azure-subscription-disabled.md)]

<a name="update-paid-users-azure"></a>
####Q: Can I still buy or manage paid Basic access through the Azure portal?

A:	You can still use the Azure portal or Azure classic portal 
to pay for users who need Basic access or to manage the number 
of VSTS users that you're paying to get Basic access.

> Try [buying or managing paid Basic access through Visual Studio Marketplace](buy-basic-access-add-users.md#buy-access-vs-marketplace). 
> Otherwise, if you're buying Basic access for the first time 
> and you haven't set up billing for your VSTS account yet, 
> you must [link your VSTS account to an Azure subscription for billing](set-up-billing-for-your-account-vs.md). 
> You can then pay for VSTS users in the Azure classic portal or the Azure portal. 
> 
> To reduce or cancel users who have paid Basic access for the next month, 
> you must make your changes before the last day of the month. 
> Your charges aren't adjusted until the next month because paid users are monthly purchases.

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
<p>Before you start, you'll need [VSTS project collection administrator or account owner permissions](faq-billing-setup.md#find-owner). 
You'll also need at least [co-administrator permissions](add-backup-billing-managers.md) 
for the Azure subscription that's linked to your VSTS account.
<p>
<ol>
<li>Sign in to the [Azure portal](https://portal.azure.com).
<li>Go to **Browse** > **VSTS accounts**. 
Select your VSTS account.
<p>
<p>![Browse, VSTS accounts, select your VSTS account](_img/_shared/ap_vso_selectlinkedaccount.png)
<p>
<p>[Why don't I see my VSTS account?](#WhyNoVSOAccount)
<p>
<li>Go to **Settings** > **Users**.
<p>
<p>![View users](_img/_shared/ap_vso_managelicenses.png)
<p>
<li>Select the number of users with Basic access that you want to pay for. 
To cancel all paid users, reduce this number to zero (0). Save your changes.
<p>
<p>![Update paid users. Save changes](_img/buy-more-basic-access/ap_vso_selecttotalusers.png)
<p>If you add users, you're not charged until you save your changes. 
</ol>
</div>

<div class="tab-pane fade" id="azure-classic-portal-0" style="background-color: #ffffff;margin-left: 15px;margin-right:15px;padding: 5px 5px 5px 5px;">
<p>**Azure classic portal**
<p>
<p>Before you start, you'll need at least [co-administrator permissions](add-backup-billing-managers.md) 
for the Azure subscription that's linked to your VSTS account. 
<p>
<ol>
<li>Sign in to the [Azure classic portal](https://manage.windowsazure.com/).
<li>Go to **VSTS**. 
Select your VSTS account.
<p>
<p>![VSTS, select your VSTS account](_img/_shared/azurechooselinkedaccount.png)
<p>
<p>[Why don't I see my VSTS account?](#WhyNoVSOAccount)
<p>
<li>Go to **Scale**.
<p>
<p>![Go to the Scale page](_img/_shared/azurescalelicensesresources.png)
<p>
<li>Drag the slider to select the total number of users with Basic access 
that you want in your VSTS account. To cancel all paid users, 
drag the slider until only 5 users appear. Save your changes. 
<p>
<p>![Update paid users](_img/buy-more-basic-access/ap_vso_selecttotalusers.png)
<p>
<p>**Note** Your account includes 5 free users who get Basic access. 
So you'll only pay for users beyond that quantity. You're not charged until you save your changes. 
<p>
<p>![Save changes](_img/_shared/save-changes.png)
</ol>
</div>

<a name="WhyNoVSOAccount"></a>

[!INCLUDE [azure-why-no-vsts-account](../_shared/qa-azure-why-no-vsts-account.md)]

</div></div>

<a name="get-support"></a>

####Q:	What happened to Visual Studio Online Professional?

A:	[Learn more here](https://go.microsoft.com/fwlink/?LinkId=698858).

[!INCLUDE [azure-account-billing-support](../_shared/qa-azure-account-billing-support.md)]

[!INCLUDE [marketplace-support](../marketplace/_shared/qa-marketplace-support.md)]

[!INCLUDE [get-team-services-support](../_shared/qa-get-vsts-support.md)]

