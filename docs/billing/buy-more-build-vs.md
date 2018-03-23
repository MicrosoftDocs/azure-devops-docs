---
title: How to buy VSTS CI/CD | VSTS
description: Pay for more continuous integration and continuous delivery (CI/CD) concurrency using VSTS (Visual Studio Online, VSO, VSTS)
ms.prod: vs-devops-alm
ms.technology: vs-devops-setup
ms.assetid: 3f42a1b2-1a32-440a-bf43-61006c59c5bf
ms.manager: douge
ms.author: chcomley
ms.date: 3/22/2018
---
[//]: # (monikerRange: 'vsts')

#  How to buy VSTS CI/CD

**VSTS**

With VSTS you can run builds and deploy releases using the Microsoft-hosted CI/CD service, your own machines, or both. 
We offer a **Free Tier** for each.

## Microsoft-hosted CI/CD (formerly Hosted Pipelines)
Each VSTS starts out with the free tier of Microsoft-hosted CI/CD, which provides the ability to run one concurrent build or release job, for 
up to 4 hours per month. If you need to run more than 4 hours per month, or you need to run more than one job at a time, you can switch to 
paid Microsoft-hosted CI/CD. When you pay per concurrent job, there are no monthly time limits for your builds and releases, and the maximum 
runtime for a single job is increased from 30 minutes to 6 hours. With Microsoft-hosted CI/CD, the price includes 
all infrastructure that Microsoft runs (virtual machines, databases, storage, egress, etc.) to deliver this service.

[Buy Microsoft-hosted CI/CD for your account](https://marketplace.visualstudio.com/items?itemName=ms.build-release-hosted-pipelines)

## Self-hosted CI/CD (formerly Private Pipelines)
VSTS also offers you a way to run a Microsoft CI/CD agent on machines that you manage, whether your machines are on premises or in the cloud. 
The free tier is one concurrent job.
Typically you'll choose this option when:
* there is custom software that runs in your build process which is not included in the Microsoft-hosted option above, or
* you already have a TFS build server running, and aren't ready to move your build definitions to VSTS.

[Buy self-hosted CI/CD](https://marketplace.visualstudio.com/items?itemName=ms.build-release-private-pipelines)

<a name="buy-build-release"></a>
## Prerequisites

The first time that you set up billing for your VSTS account--whether you do this via the Azure portal or as part of making a purchase in the Visual Studio Marketplace, you will need:

0. [VSTS project collection administrator or account owner permissions](vsts-billing-faq.md#find-owner)
0. [The **owner** or **contributor** role on your Azure subscription](add-backup-billing-managers.md)

To make subsequent edits to paid quantities in your VSTS account, you only need the owner or contributor role on your Azure subscription.

## Buying process

0.  As VSTS project collection administrator or account owner,
sign in to either:

  *  [**Visual Studio Marketplace** > **Build and release** > **Hosted pipelines for Build and Release**](https://marketplace.visualstudio.com/items?itemName=ms.build-release-hosted-pipelines)
  *  [**Visual Studio Marketplace** > **Build and release** > **Private pipelines for Build and Release**](https://marketplace.visualstudio.com/items?itemName=ms.build-release-private-pipelines)<p/>

0.  Choose **Get**

  ![Select your VSTS account](_img/get-more-build-load-testing/buy-hosted-build-release-pipelines.png)

0.  Select your VSTS account, if you have multiple accounts.

  ![Select your VSTS account](_img/get-more-build-load-testing/select-team-services-account.png)

0.  Confirm the Azure subscription that you'll use for billing (you'll only see this the first time you set up billing).

  If you have multiple Azure subscriptions,
  select the Azure subscription that you want to use.
  Or if you don't have an Azure subscription,
  create a new subscription now to use for billing.
  [VSTS billing FAQ](vsts-billing-faq.md)

  ![Confirm or select your Azure subscription](_img/get-more-build-load-testing/select-azure-subscription.png)

0.  Select the number of concurrent jobs that you want to buy. Finish your purchase.

  ![Select number of concurrent jobs to buy](_img/get-more-build-load-testing/select-number-hosted-pipelines.png)

0.  To view your current CI/CD capacity, go to your VSTS account.

  ![View CI/CD capacity in your VSTS account](_img/get-more-build-load-testing/confirm-hosted-pipeline-purchase.png)

  ![Go to VSTS account toolbar > Build and Release](_img/get-more-build-load-testing/manage-pipelines-team-services.png)

  To return to the Build & Release hub in
  your VSTS account at any time,
  go to your VSTS account toolbar,
  then go to **Build and Release**
  (```https://{youraccount}.visualstudio.com/_admin/_buildQueue?_a=resourceLimits```).

<a name="change-paid-pipelines"></a>
## Process to change your paid CI/CD capacity

When your team's needs for build or release capacity change, you can change the number of paid concurrent jobs.

0.  Go to your VSTS account toolbar, then go to **Build and Release**
(```https://{youraccount}.visualstudio.com/_admin/_buildQueue?_a=resourceLimits```).

  ![Go to VSTS account toolbar > Build and Release](_img/get-more-build-load-testing/manage-pipelines-team-services.png)

0.  Choose **Change purchased quantity** for either Microsoft-hosted or self-hosted CI/CD, which takes you to the Visual Studio Marketplace.

0.  In the Visual Studio Marketplace, choose **Get**, select your VSTS account, then update your number of paid concurrent jobs and confirm.

## XAML Build
The hosted XAML build controller is no longer supported.
  Accounts created on or after April 2016 do not have access to it.
  We plan to remove the hosted XAML build controller from all accounts in the near future.

  > **Important:** If you have an account where you still need to run [XAML builds](https://msdn.microsoft.com/en-us/library/ms181709%28v=vs.120%29.aspx),
  > you should set up an [on-premises build server](https://msdn.microsoft.com/en-us/library/ms252495%28v=vs.120%29.aspx)
  > and switch to an [on-premises build controller](https://msdn.microsoft.com/en-us/library/ee330987%28v=vs.120%29.aspx) now.

## Support

* [VSTS forum](https://social.msdn.microsoft.com/Forums/en-us/home?forum=TFService)
* [VSTS Support](https://www.visualstudio.com/team-services/support).

## Additional resources

* [VSTS: CI/CD concepts](../build-release/concepts/licensing/concurrent-pipelines-ts.md)
* [TFS: CI/CD concepts](../build-release/concepts/licensing/concurrent-pipelines-tfs.md)
* [Pricing for VSTS CI/CD](https://www.visualstudio.com/team-services/pricing)