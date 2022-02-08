---
title: Overview of billing articles
titleSuffix: Azure DevOps 
ms.custom: seodec18, freshness-fy22, contperf-fy22q3
description: Understand billing management tasks, including how to set up billing, make purchases, and change the Azure subscription for billing.
ms.technology: devops-billing
ms.assetid: d5bd13e2-aa7c-4191-aefd-bd9f05663e7b
ms.topic: overview
ms.author: chcomley
author: chcomley
ms.date: 01/18/2022
monikerRange: '>= tfs-2015'
---

# Billing overview for Azure DevOps

[!INCLUDE [version-gt-eq-2015](../../includes/version-gt-eq-2015.md)]

[Set up billing](set-up-billing-for-your-organization-vs.md) when you need more than the *free tier* of resources in your organization, or to buy other features offered by Microsoft or other companies.

## Free tier

The *free tier* includes the following aspects:

[!INCLUDE [free-tier](../../includes/free-tier.md)]

::: moniker range="azure-devops"

All charges appear on your monthly Azure bill. Azure supports payment by credit card and invoiced billing through the Enterprise Agreement (EA), Cloud Solution Providers (CSP), and more.

::: moniker-end

::: moniker range=">= tfs-2015 < azure-devops"

Make some purchases for Azure DevOps Server on your monthly Azure bill.  

* [Azure DevOps Server pricing](https://visualstudio.microsoft.com/team-services/tfs-pricing/)
* [How to buy CALs or access to the Test Services page](buy-access-tfs-test-hub.md)

::: moniker-end

## All services billed via Azure

During your first purchase for your organization, you're prompted to select the Azure subscription to use for billing. The subscription can be part of your Enterprise Agreement, Pay-As-You-Go, Cloud Solution Provider (CSP), or other types of Azure subscriptions. All services are billed via Azure. You aren't required to pay for or use any other Azure services.
 
The following links take you to the paid services that are offered by Microsoft:

 * [Buy Basic access for users](buy-basic-access-add-users.md)
 * [Buy Azure Test Plans](buy-basic-access-add-users.md)
 * [Buy parallel jobs](../../pipelines/licensing/concurrent-jobs.md#how-much-do-parallel-jobs-cost)
 * [Sign up for Azure Artifacts](../../artifacts/start-using-azure-artifacts.md)

[!INCLUDE [loadtest-deprecated-include](../../test/includes/loadtest-deprecated-include.md)]

Enable paid usage via the **Billing** tab within **Organization settings** in Azure DevOps.

:::image type="content" source="media/shared/select-billing-organization-settings.png" alt-text="Screenshot of Billing selection in Organization settings.":::

[!INCLUDE [pricing-calculator-tip](../../includes/pricing-calculator-tip.md)]

## Next steps

> [!div class="nextstepaction"]
> [Set up billing](set-up-billing-for-your-organization-vs.md)

## Related articles

- [Azure DevOps pricing](https://azure.microsoft.com/pricing/details/devops/azure-devops-services/)
- [Change the Azure subscription for billing](change-azure-subscription.md)
- [Add user who can make purchases or backup billing manager](add-backup-billing-managers.md)
- [Marketplace & Extensibility](../../marketplace-extensibility/index.yml)
- [Buy Visual Studio cloud subscriptions](/visualstudio/subscriptions/vscloud-overview)
