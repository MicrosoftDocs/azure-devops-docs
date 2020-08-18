---
title: Overview of billing articles
titleSuffix: Azure DevOps 
ms.custom: seodec18
description: Understand billing management tasks, including how to set up billing, make purchases, and change the Azure subscription for billing.
ms.technology: devops-billing
ms.assetid: d5bd13e2-aa7c-4191-aefd-bd9f05663e7b
ms.topic: overview
ms.author: chcomley
author: chcomley
ms.date: 12/10/2019
monikerRange: '>= tfs-2015'
---

# Billing overview for Azure DevOps

[!INCLUDE [version-ts-tfs-2015-2016](../../includes/version-ts-tfs-2015-2016.md)]

[Set up billing](set-up-billing-for-your-organization-vs.md) when you need more than the *free tier* of resources in your organization, or to buy other features for your users that are offered by Microsoft or other companies.

The *free tier* includes:

[!INCLUDE [free-tier](../../includes/free-tier.md)]

::: moniker range="azure-devops"

All charges appear on your monthly Azure bill. Azure supports payment by credit card as well as invoiced billing through the Enterprise Agreement (EA), Cloud Solution Providers (CSP), and more.

* [Azure DevOps pricing](https://azure.microsoft.com/pricing/details/devops/azure-devops-services/)
* [Azure DevOps billing overview](overview.md)

::: moniker-end

::: moniker range=">= tfs-2015 < azure-devops"

Make some purchases for Azure DevOps Server on your monthly Azure bill.  

* [Azure DevOps Server pricing](https://visualstudio.microsoft.com/team-services/tfs-pricing/)
* [How to buy CALs or access to the Test Services page](buy-access-tfs-test-hub.md)

::: moniker-end

## All services are billed via Azure

During your first purchase for your organization, you're prompted to select the Azure subscription to use for billing. The subscription can be part of your Enterprise Agreement, Pay-As-You-Go, Cloud Solution Provider (CSP), or other types of Azure subscriptions. All services are billed via Azure. You aren't required to pay for or use any other Azure services.
 
The following links take you to the paid services that are offered by Microsoft:

 * [Buy Basic access for users](buy-basic-access-add-users.md)
 * [Buy Azure Test Plans](buy-basic-access-add-users.md)
 * [Buy CI/CD](buy-more-build-vs.md)
 * [Sign up for Azure Artifacts](../../artifacts/start-using-azure-artifacts.md)
 * [Buy cloud-based load testing](buy-load-testing-vs.md). You're charged based on the load tests that you run. By default, paid usage is turned off for your organization.

[!INCLUDE [loadtest-deprecated-include](../../test/includes/loadtest-deprecated-include.md)]

Enable paid usage via the **Billing** tab within **Organization settings** in Azure DevOps.

[!INCLUDE [pricing-calculator-tip](../../includes/pricing-calculator-tip.md)]

## Prerequisites

Ensure the following is true for the user who's [setting up billing](set-up-billing-for-your-organization-vs.md) for the first time:

* User has [Project Collection Administrator or organization Owner permissions](../security/lookup-organization-owner-admin.md)
* User has [an Azure subscription that you can use to purchase](add-backup-billing-managers.md)

To make subsequent changes to the amount of paid resources, you only need to have [access to the Azure subscription](add-backup-billing-managers.md).

## Next steps

* [Set up billing](set-up-billing-for-your-organization-vs.md)
* [Add user who can make purchases or backup billing manager](add-backup-billing-managers.md)
* [Change the Azure subscription for billing](change-azure-subscription.md)

## Related articles

- [Azure DevOps pricing](https://azure.microsoft.com/pricing/details/devops/azure-devops-services/)
- [Azure DevOps billing support](https://azure.microsoft.com/support/devops/)
- [Get Started using Azure DevOps](../../get-started/index.yml)
- [Marketplace & Extensibility](../../marketplace-extensibility/index.yml)
- [Azure DevOps Server Administration](/azure/devops/server/server/index)
- [Buy Visual Studio cloud subscriptions](/visualstudio/subscriptions/vscloud-overview)