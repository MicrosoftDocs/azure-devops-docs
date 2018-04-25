---
title: Billing overview for Visual Studio Team Services
description: Overview of billing management tasks in VSTS (Visual Studio Team Services), including how to set up billing, make purchases, and change Azure subscription for billing
ms.prod: devops
ms.technology: devops-billing
ms.assetid: d5bd13e2-aa7c-4191-aefd-bd9f05663e7b
ms.topic: overview
ms.manager: douge
ms.author: chcomley
author: chcomley
ms.date: 04/06/2018
---
[//]: # (monikerRange: 'vsts')

# Billing overview for VSTS

**VSTS**

Set up billing when you need more than the **Free Tier** of resources in your VSTS account or to buy other features for your users that are offered by Microsoft or other companies via the [Visual Studio Marketplace](https://marketplace.visualstudio.com/).

The Free Tier includes:

* 5 VSTS users (Basic)
* 5 Package Management users
* Free Tier of Microsoft-hosted CI/CD (1 concurrent job, up to 4 hours per month)
* 1 self-hosted CI/CD concurrent job
* 20,000 virtual user minutes of cloud-based load testing

> During your first purchase for your VSTS account, we'll prompt you to select the Azure subscription to use for billing. This can be part of your
> Enterprise Agreement, Pay-As-You-Go, Cloud Solution Provider (CSP), or many other types of Azure subscriptions. All VSTS services are billed via Azure, though you are not required to pay for or
> use any other Azure services.
> 
> These are the paid services offered by Microsoft:
>
> * [VSTS users/Basic](https://marketplace.visualstudio.com/items?itemName=ms.vss-vstsuser)
> * [Microsoft-hosted CI/CD](https://marketplace.visualstudio.com/items?itemName=ms.build-release-hosted-pipelines) (formerly hosted pipelines)
> * [Self-hosted CI/CD](https://marketplace.visualstudio.com/items?itemName=ms.build-release-private-pipelines) (formerly private pipelines)
> * [Test Manager](https://marketplace.visualstudio.com/items?itemName=ms.vss-testmanager-web)
> * [Package Management](https://marketplace.visualstudio.com/items?itemName=ms.feed)
>
> [Cloud-based load testing](buy-load-testing-vs.md) is charged based on the load tests you run. By default, paid usage is turned off for your VSTS account.
> You can only enable paid usage via the Azure portal.

## Prerequisites

The first time that you set up billing for your VSTS account - whether you do this via the Azure portal or as part of making a purchase in the Visual Studio Marketplace, you will need:

* [VSTS project collection administrator or account owner permissions](../accounts/faq-add-delete-users.md#find-owner)
* [The **owner** or **contributor** role on your Azure subscription](add-backup-billing-managers.md)

You will also need these same permissions/roles to make subsequent changes, such as changing paid quantities or adding additional paid services in your VSTS account.

## Next steps

* [Set up billing](set-up-billing-for-your-account-vs.md)
* [Add a backup billing manager](add-backup-billing-managers.md)
* [Change the Azure subscription for billing](change-azure-subscription.md)

## Related articles

* [VSTS pricing](https://azure.microsoft.com/pricing/details/visual-studio-team-services/)
* [VSTS billing support](https://www.visualstudio.com/team-services/support/)