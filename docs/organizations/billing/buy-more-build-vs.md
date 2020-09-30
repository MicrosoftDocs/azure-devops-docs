---
title: Buy change CI/CD Azure Pipelines
titleSuffix: Azure DevOps Services
ms.custom: seodec18, contentperfq4
description: Learn how to pay for more parallel jobs or decrease jobs in Azure Pipelines.
ms.technology: devops-billing
ms.assetid: 3f42a1b2-1a32-440a-bf43-61006c59c5bf
ms.topic: quickstart
ms.author: chcomley
author: chcomley
ms.date: 05/22/2020
monikerRange: 'azure-devops'
---

# Buy and manage CI/CD for Azure DevOps

[!INCLUDE [version-vsts-only](../../includes/version-vsts-only.md)]

Learn how to buy self-hosted or Microsoft-hosted CI/CD and change your paid Azure Pipelines capacity.

With Azure Pipelines, you can run builds and deploy releases by using the Microsoft-hosted agents, your own machines, or both.
We offer a *free tier* for each. The *free tier* includes:

- Free tier of Microsoft-hosted CI/CD (one concurrent job, up to 30 hours per month)
- One self-hosted CI/CD concurrent job

[!INCLUDE [pricing-calculator-tip](../../includes/pricing-calculator-tip.md)]

## Microsoft-hosted CI/CD

Each organization begins with the *free tier* of Microsoft-hosted CI/CD. This tier provides the ability to run one parallel build or release job, for up to 30 hours per month. Switch to paid Microsoft-hosted CI/CD if you need more than 30 hours per month, or to run multiple jobs simultaneously.

When you pay per parallel job, there's no monthly time limit for your builds and releases. The maximum runtime for a single job increases from 60 minutes to 6 hours. With Microsoft-hosted CI/CD, the price includes all infrastructure that Microsoft runs (virtual machines, databases, storage, and egress) to deliver this service.

> [!NOTE]
> When you purchase your first Microsoft-hosted parallel job, the number of parallel jobs you have in the organization still stays at one. This purchase only removes the limits on the free parallel job that you have. To run two jobs concurrently, you need to purchase two parallel jobs.

Pipelines in a [public project](../public/about-public-projects.md) can run up to 10 free parallel jobs with unlimited minutes on Microsoft-hosted agents.

## Self-hosted CI/CD

Azure Pipelines also offers you a way to run the agent on machines that you manage, whether your machines are on-premises or in the cloud. Typically, you'll choose this option in either of the following situations:

* Custom software that runs in your build process isn't included in the Microsoft-hosted option.
* You already have an Azure DevOps Server build server running, and you aren't ready to move your build definitions to Azure Pipelines.

### Self-hosted public projects

For pipelines in a [public project](../public/about-public-projects.md), you can run as many parallel jobs with self-hosted agents as you require.

### Self-hosted private projects

The *free tier* is one parallel job. You also get one free parallel job for each Visual Studio Enterprise subscriber who's a member of your organization. You can get more using paid self-hosted parallel jobs.

<a name="buy-build-release"></a>

## Prerequisites

* [Billing must be set up for your organization](set-up-billing-for-your-organization-vs.md)
* You need [Project Collection Administrator or organization Owner permissions](../security/lookup-organization-owner-admin.md)

## Buy CI/CD

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).
2. Select ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.
  
   ![Open Organization settings](../../media/settings/open-admin-settings-vert.png)

3. Select **Parallel jobs** under Pipelines, and then select either **Purchase parallel jobs** for Microsoft-hosted jobs or **Change** for self-hosted jobs.

   :::image type="content" source="media/shared/manage-parallel-jobs.png" alt-text="manage parallel jobs image":::

4. Enter your desired amount, and then **Save**.


## Change quantity of CI/CD

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).
2. Select ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.
  
   ![Open Organization settings](../../media/settings/open-admin-settings-vert.png)

3. Select **Parallel jobs** under Pipelines, and then select either **Purchase parallel jobs** or **Change** for Microsoft-hosted jobs or **Change** for self-hosted jobs.

   :::image type="content" source="media/shared/manage-parallel-jobs.png" alt-text="image of manage parallel jobs":::

4. Enter a lesser or greater quantity of Microsoft-hosted or self-hosted jobs, and then select **Save**.

  > [!IMPORTANT]
  > Hosted XAML build controller isn't supported. If you have an organization where you need to run [XAML builds](https://msdn.microsoft.com/library/ms181709%28v=vs.120%29.aspx),
  > set up an [on-premises build server](https://msdn.microsoft.com/library/ms252495%28v=vs.120%29.aspx)
  > and switch to an [on-premises build controller](https://msdn.microsoft.com/library/ee330987%28v=vs.120%29.aspx). For more information about the hosted XAML model, see [Get started with XAML](../../pipelines/get-started-yaml.md).

## Next steps

> [!div class="nextstepaction"]
> [Try Azure Test Plans for free](try-additional-features-vs.md)

## Related articles
- [Set up billing](set-up-billing-for-your-organization-vs.md)
- [Manage paid access](buy-basic-access-add-users.md)
- [Buy cloud-based load testing](buy-load-testing-vs.md)
- [Buy access to TFS test hub](buy-access-tfs-test-hub.md)
- [Add user for billing management](add-backup-billing-managers.md)

