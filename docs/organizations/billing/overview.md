---
title: Overview of billing articles
titleSuffix: Azure DevOps Services
ms.custom: seodec18
description: Understand billing management tasks, including how to set up billing, make purchases, and change the Azure subscription for billing.
ms.prod: devops
ms.technology: devops-billing
ms.assetid: d5bd13e2-aa7c-4191-aefd-bd9f05663e7b
ms.topic: overview
ms.manager: jillfra
ms.author: chcomley
author: chcomley
ms.date: 04/10/2019
monikerRange: 'azure-devops'
---

# Billing overview for Azure DevOps

[!INCLUDE [version-vsts-only](../../_shared/version-vsts-only.md)]

Set up billing when you need more than the *free tier* of resources in your organization, or to buy other features for your users that are offered by Microsoft or other companies via the [Visual Studio Marketplace](https://marketplace.visualstudio.com/azuredevops), on the Azure DevOps tab.

The Free tier includes:

* Five Azure DevOps users (Basic).
* Five Azure Artifacts users.
* Free Tier of Microsoft-hosted CI/CD (one concurrent job, up to 30 hours per month).
* One self-hosted CI/CD concurrent job.
* 20,000 virtual user minutes of cloud-based load testing.

> During your first purchase for your organization, you're prompted to select the Azure subscription to use for billing. The subscription can be part of your Enterprise Agreement, Pay-As-You-Go, Cloud Solution Provider (CSP), or other types of Azure subscriptions. All services are billed via Azure. You aren't required to pay for or use any other Azure services.
> 
> These are the paid services that are offered by Microsoft:
>
> * [Azure DevOps users/Basic](https://marketplace.visualstudio.com/items?itemName=ms.vss-vstsuser)
> * [Microsoft-hosted CI/CD](https://marketplace.visualstudio.com/items?itemName=ms.build-release-hosted-pipelines) (formerly hosted pipelines)
> * [Self-hosted CI/CD](https://marketplace.visualstudio.com/items?itemName=ms.build-release-private-pipelines) (formerly private pipelines)
> * [Azure Test Plans](https://marketplace.visualstudio.com/items?itemName=ms.vss-testmanager-web) (formerly Test Manager)
> * [Azure Artifacts](https://marketplace.visualstudio.com/items?itemName=ms.feed) (formerly Package Management)
>
> [Cloud-based load testing](buy-load-testing-vs.md) is charged based on the load tests that you run. By default, paid usage is turned off for your organization.
> You can enable paid usage via the **Billing** tab within **Organization settings** in Azure DevOps.

[!INCLUDE [loadtest-deprecated-include](../../test/_shared/loadtest-deprecated-include.md)]

## Prerequisites

Ensure the following is true for the user who's setting up billing for the first time:

* User has [project collection administrator or organization owner permissions](../accounts/faq-add-delete-users.md#find-owner)
* User has [an Azure subscription that you can use to purchase](add-backup-billing-managers.md)

To make subsequent changes to the amount of paid resources, you only need to have [access to the Azure subscription](add-backup-billing-managers.md).

## Next steps

* [Set up billing](set-up-billing-for-your-organization-vs.md)
* [Add user who can make purchases or backup billing manager](add-backup-billing-managers.md)
* [Change the Azure subscription for billing](change-azure-subscription.md)

## Related articles

* [Azure DevOps pricing](https://azure.microsoft.com/pricing/details/devops/azure-devops-services/)
* [Azure DevOps billing support](https://azure.microsoft.com/support/devops/)
