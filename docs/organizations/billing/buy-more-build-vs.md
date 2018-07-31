---
title: Buy CI/CD by using Visual Studio Team Services
description: Learn how to pay for more continuous integration and continuous delivery (CI/CD) concurrency by using Visual Studio Team Services
ms.prod: devops
ms.technology: devops-billing
ms.assetid: 3f42a1b2-1a32-440a-bf43-61006c59c5bf
ms.topic: quickstart
ms.manager: douge
ms.author: chcomley
author: chcomley
ms.date: 07/31/2018
---
[//]: # (monikerRange: 'vsts')

# Quickstart: Buy CI/CD by using VSTS

**VSTS**

In this quickstart, you'll learn how to buy private or hosted pipelines and change your paid continuous integration/continuous delivery (CI/CD) capacity by using Visual Studio Team Services (VSTS).

With VSTS, you can run builds and deploy releases by using the Microsoft-hosted CI/CD service, your own machines, or both.
We offer a *free tier* for each.

If you don't have an Azure subscription, create a [free account](https://azure.microsoft.com/free/?WT.mc_id=A261C142F) before you begin.

## Microsoft-hosted CI/CD (formerly Hosted Pipelines)

Each VSTS instance starts with the free tier of Microsoft-hosted CI/CD. This tier provides the ability to run one concurrent build or release job, for up to 4 hours per month. If you need to run more than 4 hours per month, or you need to run more than one job at a time, you can switch to paid Microsoft-hosted CI/CD. 

When you pay per concurrent job, there are no monthly time limits for your builds and releases. The maximum runtime for a single job increases from 30 minutes to 6 hours. With Microsoft-hosted CI/CD, the price includes all infrastructure that Microsoft runs (for example, virtual machines, databases, storage, and egress) to deliver this service.

[Buy Microsoft-hosted CI/CD for your organization](https://marketplace.visualstudio.com/items?itemName=ms.build-release-hosted-pipelines).

## Self-hosted CI/CD (formerly Private Pipelines)

VSTS also offers you a way to run a Microsoft CI/CD agent on machines that you manage, whether your machines are on-premises or in the cloud. The free tier is one concurrent job.
Typically, you'll choose this option in either of these situations:

* Custom software that runs in your build process is not included in the Microsoft-hosted option.
* You already have a Team Foundation Server build server running, and you aren't ready to move your build definitions to VSTS.

[Buy self-hosted CI/CD](https://marketplace.visualstudio.com/items?itemName=ms.build-release-private-pipelines).

<a name="buy-build-release"></a>

## Prerequisites

The first time that you set up billing for your VSTS organization - whether via the Azure portal or as part of making a purchase in the Visual Studio Marketplace - you'll need:

* [VSTS project collection administrator or organization owner permissions](vsts-billing-faq.md#find-owner)
* [The owner or contributor role on your Azure subscription](add-backup-billing-managers.md)

To make subsequent edits to paid quantities in your VSTS organization, you need only the owner or contributor role on your Azure subscription.

## Buying process

1. As a VSTS project collection administrator or organization owner, sign in to either:

   * [Visual Studio Marketplace > Build and release > Hosted pipelines for Build and Release](https://marketplace.visualstudio.com/items?itemName=ms.build-release-hosted-pipelines)
   * [Visual Studio Marketplace > Build and release > Private pipelines for Build and Release](https://marketplace.visualstudio.com/items?itemName=ms.build-release-private-pipelines)

2. Select **Get**.

   ![Select Get for Microsoft-hosted CI/CD](_img/get-more-build-load-testing/buy-hosted-build-release-pipelines.png)

3. Select your VSTS organization, if you have multiple organizations. Then select **Buy**.

   ![Select your VSTS organization](_img/get-more-build-load-testing/select-team-services-organization.png)

4. Confirm the Azure subscription that you'll use for billing. (You'll see this only the first time you set up billing.) Then select **Continue**.

   If you have multiple Azure subscriptions, select the Azure subscription that you want to use. If you don't have an Azure subscription, create a new subscription now to use for billing.
  
   For more information, see [VSTS billing FAQ](vsts-billing-faq.md).

   ![Confirm or select your Azure subscription](_img/get-more-build-load-testing/select-azure-subscription.png)

5. Select the number of concurrent jobs that you want to buy, and then select **Continue**.

   ![Select the number of concurrent jobs to buy](_img/get-more-build-load-testing/select-number-hosted-pipelines.png)

6. Review your order and select **Confirm**.

   ![Review the hosted pipeline order](_img/get-more-build-load-testing/review-confirm-order.png)

7. To view your current CI/CD capacity, go to your VSTS organization and select **Manage Pipelines**.

   ![View CI/CD capacity in your VSTS organization](_img/get-more-build-load-testing/confirm-hosted-pipeline-purchase.png)

   ![Go to the VSTS organization toolbar > Build and Release](_img/get-more-build-load-testing/manage-pipelines-team-services.png)

To return to the **Build and Release** hub in your VSTS organization at any time, go to your VSTS organization toolbar, and then go to **Build and Release** (`https://{yourorganization}.visualstudio.com/_admin/_buildQueue?_a=resourceLimits`).

## XAML build

The hosted XAML build controller is no longer supported.
  Organizations created on or after April 2016 do not have access to it.
  The hosted YAML model is our newest build model, and as a best practice, consider adopting it. Read more about it [here](../../pipelines/build/yaml.md).

> [!IMPORTANT] 
> If you have an organization where you still need to run [XAML builds](https://msdn.microsoft.com/en-us/library/ms181709%28v=vs.120%29.aspx), you should set up an [on-premises build server](https://msdn.microsoft.com/en-us/library/ms252495%28v=vs.120%29.aspx) and switch to an [on-premises build controller](https://msdn.microsoft.com/en-us/library/ee330987%28v=vs.120%29.aspx) now.

<a name="change-paid-pipelines"></a>

## Clean up resources

When your team's needs for build or release capacity change, you can change the number of paid concurrent jobs.

1. Go to your VSTS organization toolbar, and then go to **Build and Release** (`https://{yourorganization}.visualstudio.com/_admin/_buildQueue?_a=resourceLimits`).

   ![Go to VSTS organization toolbar > Build and Release](_img/get-more-build-load-testing/manage-pipelines-team-services.png)

2. Select **Change** for either Microsoft-hosted or self-hosted CI/CD, which takes you to the Visual Studio Marketplace.

3. In the Visual Studio Marketplace, select **Get**. Select your VSTS organization, and then update your number of paid concurrent jobs and confirm.

## Next steps

> [!div class="nextstepaction"]
> [Start free trials](https://docs.microsoft.com/en-us/vsts/billing/try-additional-features-vs?view=vsts)

## Related articles

* [VSTS: CI/CD concepts](../pipelines/licensing/concurrent-jobs-vsts.md)
* [Team Foundation Server: CI/CD concepts](../pipelines/licensing/concurrent-pipelines-tfs.md)
* [Pricing for VSTS CI/CD](https://visualstudio.microsoft.com/team-services/pricing)
