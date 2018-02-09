---
title: How to buy cloud-based load testing | VSTS
description: Buy cloud-based load testing in VSTS (Visual Studio Online, VSO, VSTS)
ms.prod: vs-devops-alm
ms.technology: vs-devops-setup
ms.assetid: A93C7909-4F5B-4758-B6CE-8DE127A91FB9
ms.manager: douge
ms.author: chcomley
ms.date: 1/29/2018
---

#  How to buy cloud-based load testing in VSTS

**VSTS**

VSTS offers a cloud-based solution for [load testing your apps](../load-test/index.md). You can create load tests using Visual Studio Ultimate 2013, Visual Studio Enterprise 2015, or later versions. You can then run these tests in VSTS.

Load tests are measured and billed in virtual user minutes (VUM) as described in  this Q&A: [What are virtual user minutes (VUMs)? How many minutes will my load test use?](../load-test/reference-qa.md#VUM). 

Your VSTS account includes 20,000 virtual user minutes **free** per month for cloud-based load testing.
If you need more than this amount, you must first
[set up billing for your VSTS account](set-up-billing-for-your-account-vs.md) then 
[enable paid cloud-based load testing](#buy-load-testing) in the [Azure portal](https://portal.azure.com)
for your VSTS account.

<a name="buy-load-testing"></a>
## Pre-requisites

Before you start:

*  You'll need VSTS
[project collection administrator or account owner permissions](faq-pay-for-basic-users.md#FindOwnerPCA)
to enable paid usage for your VSTS account.

*  You must first
[set up billing for your VSTS account](set-up-billing-for-your-account-vs.md),
if you haven't already. VSTS is billed through your Azure subscription.

*  If you're going through the Azure portal, you'll also need at least
[co-administrator permissions](add-backup-billing-managers.md)
for the Azure subscription that's linked to your VSTS account for billing.

You can follow the steps below.


<p>**Azure portal**
<p>
<ol>
<li>[Sign in to the Azure portal](https://portal.azure.com/).
<p>If you experience browser problems with Azure,
make sure that you use a [supported browser](https://azure.microsoft.com/en-us/documentation/articles/azure-preview-portal-supported-browsers-devices/).
<li>Go to **More services** > **Developer tools** > **VSTS accounts**.
Select your VSTS account.
<p>
<p>![Browse, VSTS accounts, select your account](_img/_shared/ap_vso_selectlinkedaccount.png)
<p>
<p>[Why don't I see my VSTS account?](faq-pay-for-basic-users.md#WhyNoVSOAccount)
<p>
<li>Select **cloud-based load testing**.
<p>
<p>![Click Settings, select cloud-based load testing](_img/get-more-build-load-testing/ap_vso_manageservices.png)
<p>
<li>Turn on paid load testing.
<p>
<p>If you want, set a monthly limit on the virtual user minutes that you use.
When you're done, save your changes.
<p>
<p>![Click Paid, select an optional monthly limit, save changes](_img/get-more-build-load-testing/ap_vso_paidcloudloadtesting.png)
<p>
</ol>
</div>

</div></div>

## Billing and free monthly usage

You're charged only for virtual user minutes of cloud-based load testing used above the free monthly usage (20,000 virtual user minutes).  

*  Free virtual user minutes reset on the 1st of the month.

*  No additional virtual user minutes are included with Visual Studio subscriptions--the free amounts are per VSTS account, not per user.

*  For cloud-based load testing, you're charged for each 
   [virtual user minute](../load-test/reference-qa.md#VUM) that exceeds the free monthly usage.

*   Graduated discounts for cloud-based load testing
are calculated based on your Azure subscription billing cycle.

## Related information  

- [Load test your app](../load-test/get-started-simple-cloud-load-test.md)  
- [Billing overview](overview.md)  
- [VSTS pricing](https://azure.microsoft.com/pricing/details/visual-studio-team-services/)
- [VSTS billing support](https://www.visualstudio.com/team-services/support/)

## Limits on load test runs

There's a limit on the duration for each test run. For cloud-based load testing, the limit depends on where you're 
running your test.  For details, see [this Q&A](../load-test/reference-qa.md#test-limits).


