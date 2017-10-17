---
title: How to buy cloud-based load testing | VSTS
description: Buy cloud-based load testing in VSTS (Visual Studio Online, VSO, VSTS)
ms.prod: vs-devops-alm
ms.technology: vs-devops-setup
ms.assetid: A93C7909-4F5B-4758-B6CE-8DE127A91FB9
ms.manager: douge
ms.author: billchi
ms.date: 10/6/2017
---

#  How to buy cloud-based load testing in VSTS

**VSTS**

You can purchase additional minutes to support [load testing your apps](../load-test/index.md). You can create load tests using Visual Studio Ultimate 2013, Visual Studio Enterprise 2015, or later versions. You can then run these tests in VSTS.

Load tests are measured and billed in virtual user minutes (VUM) as described in  this Q&A: [What are virtual user minutes (VUMs)? How many minutes will my load test use?](../load-test/reference-qa.md#VUM). 

Your VSTS account includes **free**
20,000 virtual user minutes per month for cloud-based load testing.
If you need more than this amount, you must first
[set up billing for your VSTS account](set-up-billing-for-your-account-vs.md).
You can then [buy more Cloud-based Load Testing](#buy-load-testing) in the
[Azure classic portal](https://manage.windowsazure.com/) or the [Azure portal](https://portal.azure.com).



<a name="buy-load-testing"></a>
## Pre-requisites

Before you start:

*  You'll need VSTS
[project collection administrator or account owner permissions](faq-pay-for-basic-users.md#FindOwnerPCA)
to purchase for your VSTS account.

*  You must first
[set up billing for your VSTS account](set-up-billing-for-your-account-vs.md),
if you haven't already. You'll need an [Azure subscription](faq-pay-for-basic-users.md#AzureMSDNSubscription)
that you can link to your VSTS account for billing.

*  If you're going through the Azure portal, you'll also need at least
[Co-administrator permissions](add-backup-billing-managers.md)
for the Azure subscription that's linked to your VSTS account for billing.

You can follow the steps below for the Azure portal or Azure classic portal. Both portals will give you the same results.

**Azure Portal**

0. [Sign in to the Azure portal](https://portal.azure.com/).

 If you experience browser problems with Azure,
 make sure that you use a [supported browser](https://azure.microsoft.com/en-us/documentation/articles/azure-preview-portal-supported-browsers-devices/).

0. Go to **More services** > **Developer tools** > **VSTS accounts**.  Select your VSTS account.

 ![Browse, VSTS accounts, select your account](_img/_shared/ap_vso_selectlinkedaccount.png)

 [Why don't I see my VSTS account?](faq-pay-for-basic-users.md#WhyNoVSOAccount)

0. Select **Cloud-based load testing**.

 ![Click Settings, select Clouse-based load testing](_img/get-more-build-load-testing/ap_vso_manageservices.png)

0. Turn on paid load testing.

 If you want, set a monthly limit on the virtual user minutes that you use.
 When you're done, save your changes.

 ![Click Paid, select an optional monthly limit, save changes](_img/get-more-build-load-testing/ap_vso_paidcloudloadtesting.png)

**Azure classic portal**

0. [Sign in to the Azure classic portal](https://manage.windowsazure.com/)
as your Azure subscription Co-administrator.

 If you experience browser problems with Azure,
 make sure that you use a [supported browser](https://azure.microsoft.com/en-us/documentation/articles/azure-preview-portal-supported-browsers-devices/).

0. Select your VSTS account.

 ![Select your VSTS account](_img/_shared/azurechooselinkedaccount.png)

 [Why don't I see my VSTS account?](faq-pay-for-basic-users.md#WhyNoVSOAccount)

0. Go to **Scale**.

 ![Click Scale](_img/_shared/azurescalelicensesresources.png)

0. Turn on paid Load Testing.  You can also set monthly limits on the amounts that your account uses.

 You're not charged until your account goes above the free monthly amounts.

 ![Turn on paid Load Testing. Select optional monthly limits](_img/get-more-build-load-testing/azuremanageresources.png)

0. When you're done, save your changes.

 ![Save changes](_img/_shared/save-changes.png)

 To check the amounts used by your account, you can come back to the Azure classic portal.

 ![Check amounts used on your account dashboard in Azure](_img/get-more-build-load-testing/azuredashboard.png)


## Related notes  

- [Build your app](../build-release/apps/index.md)
- [Load test your app](../load-test/get-started-simple-cloud-load-test.md)  
- [How to buy more pipeline capacity for builds and releases in VSTS](buy-more-build-vs.md)  
- [Marketplace support](../marketplace/marketplace-billing-qa.md)  


## Limits on load testing

There's a limit on the duration for each test run.  For Cloud-based Load Testing, the limit depends on where you're 
running your test.  For details, see [this Q&A](../load-test/reference-qa.md#test-limits).


## Billing and free monthly limits

You're charged only for services used above the free monthly limits.  Your charges are prorated during the first 
month. After that, you're billed automatically on the 1st day of the calendar month.

*  Free minutes reset on the 1st of the month.

*  For Cloud-based Load Testing, you're charged for each 
   [virtual user minute](../load-test/reference-qa.md#VUM).

*   Graduated discounts Cloud-based Load Testing
are calculated based on your Azure subscription billing cycle.

Learn more about [pricing here](https://www.visualstudio.com/team-services/pricing).

