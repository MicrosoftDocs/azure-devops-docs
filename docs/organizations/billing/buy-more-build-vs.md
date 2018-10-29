---
title: Buy CI/CD in Azure DevOps Services
description: Learn how to pay for more parallel jobs in Azure Pipelines
ms.prod: devops
ms.technology: devops-billing
ms.assetid: 3f42a1b2-1a32-440a-bf43-61006c59c5bf
ms.topic: quickstart
ms.manager: douge
ms.author: chcomley
author: chcomley
ms.date: 10/29/2018
monikerRange: 'vsts'
---

# Quickstart: Buy CI/CD for Azure DevOps

[!INCLUDE [version-vsts-only](../../_shared/version-vsts-only.md)]

In this quickstart, you learn how to buy self-hosted or Microsoft-hosted CI/CD and change your paid Azure Pipelines capacity.

With Azure Pipelines you can run builds and deploy releases using the Microsoft-hosted agents, your own machines, or both.
We offer a **free tier** for each.

If you don't have an Azure subscription, [create a subscription](https://azure.microsoft.com/en-us/pricing/purchase-options/) before you begin.

## Microsoft-hosted CI/CD

Each organization starts out with the free tier of Microsoft-hosted CI/CD, which provides the ability to run one parallel build or release job, for up to 1800 minutes per month. If you need to run more than that, or you need to run more than one job at a time, you can switch to paid Microsoft-hosted CI/CD. When you pay per concurrent job, there are no monthly time limits for your builds and releases, and the maximum runtime for a single job is increased from 30 minutes to 6 hours. With Microsoft-hosted CI/CD, the price includes all infrastructure that Microsoft runs (virtual machines, databases, storage, egress, etc.) to deliver this service.

### Public projects

If your pipelines are in a [public project](../public/index.md), then you run up to 10 free parallel jobs with unlimited minutes on Microsoft-hosted agents. If you need more, simply [contact us](https://azure.microsoft.com/support/devops/).

### Private projects

[Buy Microsoft-hosted parallel jobs for your organization.](https://marketplace.visualstudio.com/items?itemName=ms.build-release-hosted-pipelines)

## Self-hosted CI/CD

Azure Pipelines also offers you a way to run the agent on machines that you manage, whether your machines are on premises or in the cloud. Typically you'll choose this option when:

* there is custom software that runs in your build process which is not included in the Microsoft-hosted option above, or
* you already have a TFS build server running, and aren't ready to move your build pipelines to Azure Pipelines.

### Public projects

If your pipelines are in a [public project](../public/index.md), then you run up to 10 free parallel jobs with self-hosted agents. If you need more, simply [contact us](https://azure.microsoft.com/support/devops/).

### Private projects

The free tier is one parallel job. In addition, you get one free parallel job for each Visual Studio Enterprise subscriber that is a member of your organization. You can get more using paid self-hosted parallel jobs.

[Buy self-hosted parallel jobs](https://marketplace.visualstudio.com/items?itemName=ms.build-release-private-pipelines)

<a name="buy-build-release"></a>

## Prerequisites

The first time that you set up billing for your organization - whether you do this via the Azure portal or as part of making a purchase in the Visual Studio Marketplace, you will need:

* [Project collection administrator or organization owner permissions](billing-faq.md#find-owner)
* [The **owner** or **contributor** role on your Azure subscription](add-backup-billing-managers.md)

To make subsequent edits to paid quantities in your organization, you only need the owner or contributor role on your Azure subscription.

## Buy CI/CD

1. As project collection administrator or organization owner, sign in to either:

 * [Visual Studio Marketplace > Pipelines > **Microsoft-hosted parallel jobs**](https://marketplace.visualstudio.com/items?itemName=ms.build-release-hosted-pipelines)
 * [Visual Studio Marketplace > Pipelines > **Self-hosted parallel jobs**](https://marketplace.visualstudio.com/items?itemName=ms.build-release-private-pipelines)

2. Choose **Get**. (The following images represent Microsoft-hosted CI/CD, rather than Self-hosted, although the process is the same.)

    ![Choose Get](_img/get-more-build-load-testing/buy-hosted-build-release-pipelines.png)

3. Select your organization and then choose **Buy**.

    ![Select your organization](_img/get-more-build-load-testing/select-team-services-organization.png)

4. Confirm the Azure subscription that you'll use for billing (you'll only see this the first time you set up billing), then choose **Continue**.

    If you have multiple Azure subscriptions,
  select the Azure subscription that you want to use.
  Or if you don't have an Azure subscription,
  create a new subscription now to use for billing.
  [Azure DevOps billing FAQ](billing-faq.md)

    ![Confirm or select your Azure subscription](_img/get-more-build-load-testing/select-azure-subscription.png)

5. Select the number of parallel jobs that you want to buy, then choose **Continue**.

    ![Select number of concurrent jobs to buy](_img/get-more-build-load-testing/select-number-hosted-pipelines.png)

6. Review your order and choose **Confirm**.

    ![Review hosted pipeline order](_img/get-more-build-load-testing/review-confirm-order.png)

7. To view your current parallel jobs capacity, go to your organization and choose **Manage jobs**.

    ![View capacity in your organization](_img/get-more-build-load-testing/confirm-hosted-pipeline-purchase.png)

     ![Go to your organization toolbar > Build and Release](_img/get-more-build-load-testing/manage-pipelines-team-services.png)

  To return to the list of pipelines in
  your organization at any time,
  go to your organization toolbar,
  then go to **Pipelines**
  (```https://dev.azure.com/{yourorganization}/_admin/_buildQueue?_a=resourceLimits```).

## XAML Build

The hosted XAML build controller is no longer supported.
  Organizations created on or after April 2016 do not have access to it.
  The hosted YAML model is our newest build model, and as a best practice, consider adopting it. Read more about it [here](../../pipelines/get-started-yaml.md).

  > **Important:** If you have an organization where you still need to run [XAML builds](https://msdn.microsoft.com/library/ms181709%28v=vs.120%29.aspx),
  > you should set up an [on-premises build server](https://msdn.microsoft.com/library/ms252495%28v=vs.120%29.aspx)
  > and switch to an [on-premises build controller](https://msdn.microsoft.com/library/ee330987%28v=vs.120%29.aspx) now.

<a name="change-paid-pipelines"></a>

## Clean up resources

When your team's needs for build or release capacity change, you can change the number of paid concurrent jobs.

1. Go to your organization toolbar, then go to **Pipelines** (```https://dev.azure.com/{yourorganization}/_admin/_buildQueue?_a=resourceLimits```).

2. Choose **Change** for either Microsoft-hosted or self-hosted parallel jobs, which takes you to the Visual Studio Marketplace.

   ![Go to your organization toolbar > Pipelines > Change](_img/get-more-build-load-testing/manage-pipelines.png)

3. In the Visual Studio Marketplace, Azure DevOps tab, choose **Get**, select your organization, then update your number of paid concurrent jobs and confirm.

## Next steps

> [!div class="nextstepaction"]
> [Start free trials](try-additional-features-vs.md)

## Related articles

* [Azure Pipelines: Parallel jobs](../../pipelines/licensing/concurrent-jobs-vsts.md)
* [TFS: Pipelines](../../pipelines/licensing/concurrent-pipelines-tfs.md)
* [Pricing for Azure Pipelines](https://visualstudio.microsoft.com/team-services/pricing)
