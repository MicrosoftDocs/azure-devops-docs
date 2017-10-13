---
title: How to buy build hosted and private pipelines | VSTS
description: Buy more capacity for builds and releases by purchasing more private or hosted pipelines in VSTS (Visual Studio Online, VSO, VSTS)
ms.prod: vs-devops-alm
ms.technology: vs-devops-setup
ms.assetid: 3f42a1b2-1a32-440a-bf43-61006c59c5bf
ms.manager: douge
ms.author: billchi
ms.date: 10/6/2017
---

#  How to buy more pipeline capacity for builds and releases in VSTS

**VSTS**

VSTS offers these
[additional VSTS](https://www.visualstudio.com/team-services/pricing):

Create, queue, and monitor cross-platform builds and releases with these [Build & Release task-based services](../build-release/concepts/licensing/concurrent-pipelines-ts.md).
Use Hosted Pipelines to run builds and deploy releases concurrently on Microsoft-managed
agents. Use Private Pipelines to run builds and deploy releases on machines that you manage,
running agent software from Microsoft.

  > To better connect with Release Management, **Build & Deployment** was renamed **Build & Release**.  
  > Unit names are now **Hosted Pipelines** and **Private Pipelines**, rather than Hosted Agents and Private Agents.

  Each pipeline lets you run 1 build or deploy 1 release at a time.
  The maximum number of concurrent builds that you can run and releases
  that you can deploy at the same time is limited only by the number of pipelines that you have.

  Your VSTS account includes these **free** amounts:

  * 1 free Private Pipeline

    With this free Private Pipeline, run unlimited concurrent builds
    or deploy 1 release at a time in Team Foundation Server 2017,
    or run 1 build or deploy 1 release at a time in VSTS on
    agent software from Microsoft.  Private agents are now free and unlimited.
    Each Visual Studio Enterprise subscriber also contributes
    a Private Pipeline that you can use. You can also
    [buy more Private Pipelines](#buy-build-release).

  * 1 free Hosted Pipeline

    With this free Hosted Pipeline, you get 4 hours (240 minutes) per month
    and a maximum duration of 30 minutes per build or deployment in VSTS.
    If you just need more build time for 1 concurrent build or release,
    [buy another Hosted Pipeline](#buy-build-release) without the 4-hour limit
    to increase your maximum duration per build or deployment up to 6 hours.
    For more concurrent builds or releases, [buy more Hosted Pipelines](#buy-build-release).

    Learn about:

    * [VSTS: Build & Release pipelines](../build-release/concepts/licensing/concurrent-pipelines-ts.md)
    * [TFS: Build & Release pipelines](../build-release/concepts/licensing/concurrent-pipelines-tfs.md)
    * [Pricing for Build & Release pipelines](https://www.visualstudio.com/team-services/pricing)



  *  **Build (XAML)**: The hosted XAML build controller is no longer supported.
  Accounts created on or after April 2016 do not have access to it.
  We plan to remove the hosted XAML build controller from all accounts on July 1 2017.

  > **Important:** If you have an account where you still need to run [XAML builds](https://msdn.microsoft.com/en-us/library/ms181709%28v=vs.120%29.aspx),
  > you should set up an [on-premises build server](https://msdn.microsoft.com/en-us/library/ms252495%28v=vs.120%29.aspx)
  > and switch to an [on-premises build controller](https://msdn.microsoft.com/en-us/library/ee330987%28v=vs.120%29.aspx) now.
  > If you used the hosted XAML build controller, you might have been paying for build minutes, which is a model we no longer support.
  > Please purchase concurrent pipelines. See [Buy pipelines for Build & Release](#buy-build-release).
  > We will soon block the hosted pool from using the per-minute billing model.
  > By making this switch, you can run longer builds (unlimited minutes within reason).


> [!NOTE]
> When you pay for pipelines, you can run more than one build or release at the same time 
> in your VSTS account. Learn [about pipeline pricing](https://www.visualstudio.com/team-services/pricing) 
or [how pipelines work](../build-release/concepts/licensing/concurrent-pipelines-ts.md).


<a name="buy-build-release"></a>
##  Pre-requisites

Before you start:

*  You'll need VSTS
[project collection administrator or account owner permissions](faq-pay-for-basic-users.md#FindOwnerPCA)
to purchase for your VSTS account.

*  You'll need an Azure subscription that you can
link to your VSTS account for billing,
if your VSTS account isn't linked already.
[Which Azure subscriptions can I use?](faq-pay-for-basic-users.md#AzureMSDNSubscription)

  To use an existing Azure subscription for billing,
  you'll need at least Co-administrator permissions for that subscription.
  If you don't have permissions, have an Azure Account
  Administrator or Service Administrator
  [add you as Co-administrator to the Azure subscription that you want to use for billing](add-backup-billing-managers.md).

  If you don't have an Azure subscription,
  you can create a subscription when you start your purchase.
  Or [create your Azure subscription here before you start](https://portal.azure.com).
  You'll get the necessary administrator permissions
  with your new subscription.

  Your VSTS account will reuse this Azure subscription
  when you make future purchases for your VSTS account
  from the [Visual Studio Marketplace](https://marketplace.visualstudio.com)
  or from Azure. [More about Azure subscriptions for billing](faq-pay-for-basic-users.md#billing).

## Buy pipelines

> **Note** If you previously bought agents in the Azure portal, they're now pipelines,
> but don't worry, your monthly purchases and pricing won't change.
> If you need to change the number of pipelines that you're buying each month,
> please go to the Visual Studio Marketplace.
> We plan to retire the experience for buying agents in the Azure portal soon.


0.  As VSTS project collection administrator or account owner,
sign in to either:

  *  [**Visual Studio Marketplace** > **Build and release** > **Hosted pipelines for Build and Release**](https://marketplace.visualstudio.com/items?itemName=ms.build-release-hosted-pipelines)
  *  [**Visual Studio Marketplace** > **Build and release** > **Private pipelines for Build and Release**](https://marketplace.visualstudio.com/items?itemName=ms.build-release-private-pipelines)<p/>

0.  Choose **Buy** for your selected pipeline.

  ![Select your VSTS account](_img/get-more-build-load-testing/buy-hosted-build-release-pipelines.png)

0.  Select your VSTS account,
if you have multiple accounts.

  ![Select your VSTS account](_img/get-more-build-load-testing/select-team-services-account.png)

  <p><a data-toggle="collapse" href="#expando-why-no-ts-account">Don't see your VSTS accounts? &#x25BC;</a></p>
  <div class="collapse" id="expando-why-no-ts-account">
  <p>To select your VSTS account here, you must have have VSTS
  [project collection administrator or account owner permissions](faq-pay-for-basic-users.md#FindOwnerPCA).
  </div>

0.  Confirm the Azure subscription that you'll use for billing.

  If you have multiple Azure subscriptions,
  select the Azure subscription that you want to use.
  Or if you don't have an Azure subscription,
  create a new subscription now to use for billing.
  [More about Azure subscriptions for billing](faq-pay-for-basic-users.md#billing)

  ![Confirm or select your Azure subscription](_img/get-more-build-load-testing/select-azure-subscription.png)

  <p><a data-toggle="collapse" href="#expando-why-no-azure-sub">Don't see the Azure subscription that you expect? &#x25BC;</a></p>
  <div class="collapse" id="expando-why-no-azure-sub">
  <p>To use an existing Azure subscription for billing,
  you'll need at least Co-administrator permissions for that subscription.
  If you don't have permissions,
  have an Azure Account Administrator or Service Administrator
  [add you as a Co-administrator to the linked Azure subscription](add-backup-billing-managers.md).
  </div>

0.  Select the number of pipelines that you want to buy.
Finish your purchase.

  ![Select number of pipelines to buy](_img/get-more-build-load-testing/select-number-hosted-pipelines.png)

0.  To view your pipelines, go to your VSTS account.

  ![View pipelines in your VSTS account](_img/get-more-build-load-testing/confirm-hosted-pipeline-purchase.png)

  ![Go to VSTS account toolbar > Build and Release](_img/get-more-build-load-testing/manage-pipelines-team-services.png)

  To return to the Build & Release hub in
  your VSTS account at any time,
  go to your VSTS account toolbar,
  then go to **Build and Release**
  (```https://{youraccount}.visualstudio.com/_admin/_buildQueue?_a=resourceLimits```).

<a name="change-paid-pipelines"></a>
## Change your purchased pipelines

When your team's needs for build or release capacity changes,
you can update the number of pipelines that you bought.

0.  Go to your VSTS account toolbar,
then go to **Build and Release**
(```https://{youraccount}.visualstudio.com/_admin/_buildQueue?_a=resourceLimits```).

  ![Go to VSTS account toolbar > Build and Release](_img/get-more-build-load-testing/manage-pipelines-team-services.png)

0.  Choose **Change purchased quantity**
for the paid pipeline that you want to update,
so you can go to the Visual Studio Marketplace.

0.  In the Visual Studio Marketplace,
choose **Buy**, select your VSTS account,
then update your number of paid pipelines.



## Related notes  

- [Build your app](../build-release/apps/index.md)
- [Concurrent build and release pipelines in VSTS](../build-release/concepts/licensing/concurrent-pipelines-ts.md)
- [Concurrent release pipelines in Team Foundation Server](../build-release/concepts/licensing/concurrent-pipelines-tfs.md)
- [How to buy cloud-based load testing in VSTS](buy-load-testing-vs.md)  
- [Marketplace support](../marketplace/marketplace-billing-qa.md)  






## Limits on builds and releases

Your free hosted pipeline includes 4 hours per month
for builds and releases with a maximum duration of 30 minutes per build or deployment.
A paid hosted pipeline increases your maximum duration to 6 hours per build or deployment.


## Billing and free monthly limits

You're charged only for services used above the free monthly limits.  Your charges are prorated during the first 
month. After that, you're billed automatically on the 1st day of the calendar month.

*  Free minutes reset on the 1st of the month.

*  Each paid hosted pipeline or private pipeline
includes unlimited minutes per month, within reason.

*  Each connected private XAML controller is counted as one private pipeline,
although a private XAML controller can host more than one agent.

*  For Cloud-based Load Testing, you're charged for each
   [virtual user minute](../load-test/reference-qa.md#VUM).

*   Graduated discounts Cloud-based Load Testing
are calculated based on your Azure subscription billing cycle.

Learn more about [pricing here](https://www.visualstudio.com/team-services/pricing).


## Support

Try the [VSTS forum](https://social.msdn.microsoft.com/Forums/en-us/home?forum=TFService)
or [VSTS Support](https://www.visualstudio.com/team-services/support).

