---
title: VSTS billing overview 
description: VSTS billing overview
ms.topic: get-started-article
ms.prod: vs-devops-alm
ms.technology: vs-devops-setup
ms.assetid: d5bd13e2-aa7c-4191-aefd-bd9f05663e7b
ms.manager: douge
ms.author: chcomley
ms.date: 3/13/2018
---
[//]: # (monikerRange: 'vsts')

# VSTS billing overview

**VSTS**

You have to set up billing when you need more than the **free tier** of resources in your VSTS account: (5 VSTS users (Basic), 5 Package Management users, 
Free Tier of Microsoft-hosted CI/CD (1 concurrent job, up to 4 hours per month), 1 self-hosted CI/CD concurrent job, 20,000 virtual user minutes of cloud-based load testing), 
or to buy other features for your users that are offered by Microsoft or by other companies via the [Visual Studio Marketplace](https://marketplace.visualstudio.com/).

> During your first purchase for your VSTS account, we'll prompt you to select the Azure subscription to use for billing. This can be part of your 
> Enterprise Agreement, Pay-As-You-Go, CSP, or many other types of Azure subscriptions. All VSTS services are billed via Azure, though you are not required to pay for or 
> use any other Azure services. 
> 
> These are the paid services offered by Microsoft:
>
> * [VSTS users/Basic](https://marketplace.visualstudio.com/items?itemName=ms.vss-vstsuser)
> * [Microsoft-hosted CI/CD](https://marketplace.visualstudio.com/items?itemName=ms.build-release-hosted-pipelines) (hosted pipelines)
> * [Self-hosted CI/CD](https://marketplace.visualstudio.com/items?itemName=ms.build-release-private-pipelines) (private pipelines)
> * [Test Manager](https://marketplace.visualstudio.com/items?itemName=ms.vss-testmanager-web)
> * [Package Management](https://marketplace.visualstudio.com/items?itemName=ms.feed)
>
> [Cloud-based load testing](buy-load-testing-vs.md) is charged based on the load tests you run. By default, paid usage is turned off for your VSTS account. 
> You can only enable paid usage via the Azure portal. If you want to change the Azure subscription that you use for billing, follow the guidance in this topic to go through the Azure portal.

## What do I need to set up billing?

The first time that you set up billing for your VSTS account--whether you do this via the Azure portal or as part of making a purchase in the Visual Studio Marketplace, you will need:

0. [VSTS project collection administrator or account owner permissions](../accounts/faq-add-delete-users.md#find-owner)
0. [The **owner** or **contributor** role on your Azure subscription](add-backup-billing-managers.md)

You will also need these same permissions/roles to make subsequent changes, such as changing paid quantities or adding additional paid services in your VSTS account.

## Related information

* [Set up billing](set-up-billing-for-your-account-vs.md)
* [Add backup billing managers](add-backup-billing-managers.md)
* [Troubleshoot VSTS billing] (faq-billing-setup.md)
* [Change the Azure subscription for billing](change-azure-subscription.md)
* [VSTS pricing](https://azure.microsoft.com/pricing/details/visual-studio-team-services/)
* [VSTS billing support](https://www.visualstudio.com/team-services/support/)