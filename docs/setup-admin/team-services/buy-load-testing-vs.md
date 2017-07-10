---
title: How to buy cloud-based load testing | Team Services
description: Buy cloud-based load testing in Visual Studio Team Services (Visual Studio Online, VSO, VSTS)
ms.topic: get-started-article
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
ms.assetid: A93C7909-4F5B-4758-B6CE-8DE127A91FB9
ms.manager: douge
ms.author: kaelli
ms.date: 04/28/2017
---

#  How to buy cloud-based load testing in Visual Studio Team Services

**Team Services**

You can purchase additional minutes to support [load testing your apps](../../test/performance-testing/index.md). You can create load tests using Visual Studio Ultimate 2013, Visual Studio Enterprise 2015, or later versions. You can then run these tests in Team Services.

Load tests are measured and billed in virtual user minutes (VUM) as described in  this Q&A: [What are virtual user minutes (VUMs)? How many minutes will my load test use?](../../test/performance-testing/getting-started/get-started-simple-cloud-load-test.md#VUM). 

Your Visual Studio Team Services account includes **free**
20,000 virtual user minutes per month for cloud-based load testing.
If you need more than this amount, you must first
[set up billing for your Team Services account](set-up-billing-for-your-account-vs.md).
You can then [buy more Cloud-based Load Testing](#buy-load-testing) in the
[Azure classic portal](https://manage.windowsazure.com/) or the [Azure portal](https://portal.azure.com).



<a name="buy-load-testing"></a>
## Pre-requisites

Before you start:

*  You'll need Team Services
[project collection administrator or account owner permissions](#FindOwnerPCA)
to purchase for your Team Services account.

*  You must first
[set up billing for your Team Services account](set-up-billing-for-your-account-vs.md),
if you haven't already. You'll need an [Azure subscription](#AzureMSDNSubscription)
that you can link to your Team Services account for billing.

*  If you're going through the Azure portal, you'll also need at least
[Co-administrator permissions](set-up-billing-for-your-account-vs.md#AddAzureAdmin)
for the Azure subscription that's linked to your Team Services account for billing.

You can follow the steps below for the Azure classic portal
or the Azure portal. Both portals will give you the same results.

<div style="background-color: #f2f0ee;padding-top:10px;padding-bottom:10px;">
<ul class="nav nav-pills" style="padding-right:15px;padding-left:15px;padding-bottom:5px;vertical-align:top;font-size:18px;">
<li style="float:left;" data-toggle="collapse" data-target="#buy-load-testing"></li>
<li style="float: right;"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#AEAEAE;margin: 0px 0px 0px 8px;min-width:90px;color: #fff;border: solid 2px #AEAEAE;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:14px;font-weight:400" data-toggle="pill" href="#azure-classic-portal-0">Azure classic portal</a></li>
<li class="active" style="float: right"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#007acc;margin: 0px 0px 0px 0px;min-width:90px;color: #fff;border: solid 2px #007acc;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:14px;font-weight:400" data-toggle="pill" href="#azure-portal-0">Azure portal</a></li>
</ul>

<div id="buy-load-testing" class="tab-content collapse in fade" style="background-color: #ffffff;margin-left: 15px;margin-right:15px;padding: 5px 5px 5px 5px;">
<div id="azure-portal-0" class="tab-pane fade in active">
<p>**Azure portal**
<p>
<ol>
<li>[Sign in to the Azure portal](https://portal.azure.com/).
<p>If you experience browser problems with Azure,
make sure that you use a [supported browser](https://azure.microsoft.com/en-us/documentation/articles/azure-preview-portal-supported-browsers-devices/).
<li>Go to **More services** > **Developer tools** > **Team Services accounts**.
Select your Team Services account.
<p>
<p>![Browse, Team Services accounts, select your account](_img/_shared/AP_VSO_SelectLinkedAccount.png)
<p>
<p>[Why don't I see my Team Services account?](#WhyNoVSOAccount)
<p>
<li>Select **Cloud-based load testing**.
<p>
<p>![Click Settings, select Clouse-based load testing](_img/get-more-build-load-testing/AP_VSO_ManageServices.png)
<p>
<li>Turn on paid load testing.
<p>
<p>If you want, set a monthly limit on the virtual user minutes that you use.
When you're done, save your changes.
<p>
<p>![Click Paid, select an optional monthly limit, save changes](_img/get-more-build-load-testing/AP_VSO_PaidCloudLoadTesting.png)
<p>
</ol>
</div>

<div class="tab-pane fade" id="azure-classic-portal-0" style="background-color: #ffffff;margin-left: 15px;margin-right:15px;padding: 5px 5px 5px 5px;">
<p>**Azure classic portal**
<p>
<ol>
<li>[Sign in to the Azure classic portal](https://manage.windowsazure.com/)
as your Azure subscription Co-administrator.
<p>
<p>If you experience browser problems with Azure,
make sure that you use a [supported browser](https://azure.microsoft.com/en-us/documentation/articles/azure-preview-portal-supported-browsers-devices/).
<p>
<li>Select your Team Services account.
<p>
<p>![Select your Team Services account](_img/_shared/AzureChooseLinkedAccount.png)
<p>
<p>[Why don't I see my Team Services account?](#WhyNoVSOAccount)
<p>
<li>Go to **Scale**.
<p>
<p>![Click Scale](_img/_shared/AzureScaleLicensesResources.png)
<p>
<li>Turn on paid Load Testing.
You can also set monthly limits on the amounts that your account uses.
<p>
<p>You're not charged until your account goes above the free monthly amounts.
<p>
<p>![Turn on paid Load Testing. Select optional monthly limits](_img/get-more-build-load-testing/AzureManageResources.png)
<p>
<li>When you're done, save your changes.
<p>
<p>![Save changes](_img/_shared/save-changes.png)
<p>
<p>To check the amounts used by your account,
you can come back to the Azure classic portal.
<p>
<p>![Check amounts used on your account dashboard in Azure](_img/get-more-build-load-testing/AzureDashboard.png)
<p>
</ol>
</div>


</div></div>

## Related notes  

- [Build your app](../../build/apps/index.md)
- [Load test your app](../../test/performance-testing/getting-started/get-started-simple-cloud-load-test.md)  
- [How to buy more pipeline capacity for builds and releases in Team Services](buy-more-build-vs.md)  
- [Visual Studio Marketplace and billing Q&A](../../marketplace/marketplace-billing-qa.md)  

## Q&A
<!-- BEGINSECTION class="md-qanda" -->

#### Q: Are there any limits on load testing?

A: Yes, there's a limit on the duration for each test run.

For Cloud-based Load Testing, the limit depends on where you're running your test.
For details, see [this Q&A](../../test/performance-testing/getting-started/get-started-simple-cloud-load-test.md#test-limits).


### Q:  When do I get billed?

A:  You're charged only for services used above the free monthly limits.
Your charges are prorated during the 1st month. After that,
you're billed automatically on the 1st day of the calendar month.

*  Free minutes reset on the 1st of the month.

*  For Cloud-based Load Testing, you're charged for each 
   [virtual user minute](../../test/performance-testing/getting-started/get-started-simple-cloud-load-test.md#VUM).

*   Graduated discounts Cloud-based Load Testing
are calculated based on your Azure subscription billing cycle.

Learn more about [pricing here](https://www.visualstudio.com/team-services/pricing).

### Q: Are there other ways to get features for my account?

A: Yes, you can add other features to your Team Services account when you
[download and install extensions from the Visual Studio Marketplace](https://www.visualstudio.com/get-started/marketplace/get-vsts-extensions).

### Q: How do I get help or support for Team Services?

A:	Try the [Team Services forum](https://social.msdn.microsoft.com/Forums/en-us/home?forum=TFService) 
or [Team Services Support](https://www.visualstudio.com/team-services/support). 


<!-- ENDSECTION -->


<!---


<a name="no-accounts"></a>

[!INCLUDE [no-accounts](../../marketplace/_shared/qa-no-accounts.md)]

<a name="WhyNoVSOAccount"></a>

[!INCLUDE [azure-why-no-team-services-account](../../_shared/qa-azure-why-no-team-services-account.md)]

<a name="FindOwnerPCA"></a>

[!INCLUDE [find-project-collection-administrator](../../_shared/qa-find-project-collection-administrator.md)]

[!INCLUDE [find-account-owner](../../_shared/qa-find-account-owner.md)]


-->