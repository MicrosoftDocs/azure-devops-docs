---
title: VSTS billing overview 
description: VSTS billing overview
ms.topic: get-started-article
ms.prod: vs-devops-alm
ms.technology: vs-devops-setup
ms.assetid: d5bd13e2-aa7c-4191-aefd-bd9f05663e7b
ms.manager: douge
ms.author: chcomley
ms.date: 1/29/2018
---

#  VSTS billing overview

**VSTS**

You have to set up billing when you need more than the **free** resources in your VSTS account (5 VSTS users, 5 Package Management users, 1 limited hosted pipeline for CI/CD, 1 private pipeline, 
20,000 virtual user minutes of cloud-based load testing), or to buy other features for your users that are offered by Microsoft or by other companies via the 
[Visual Studio Marketplace](https://marketplace.visualstudio.com/). 

> During your first purchase for your VSTS account, we'll prompt you to select the Azure subscription to use for billing. All VSTS services are billed via Azure, 
> though you are not required to use any other Azure services. These are the paid services offered by Microsoft:
>
> * [VSTS users](https://marketplace.visualstudio.com/items?itemName=ms.vss-vstsuser)
> * [CI/CD - hosted pipelines](https://marketplace.visualstudio.com/items?itemName=ms.build-release-hosted-pipelines)
> * [CI/CD - private pipelines](https://marketplace.visualstudio.com/items?itemName=ms.build-release-private-pipelines)
> * [Test Manager](https://marketplace.visualstudio.com/items?itemName=ms.vss-testmanager-web)
> * [Package Management](https://marketplace.visualstudio.com/items?itemName=ms.feed)
>
> [Cloud-based load testing]() is charged based on the load tests you run. By default, paid usage is turned off for your VSTS account. You can enable paid usage via the Azure portal. 
> or if you want to change the Azure subscription that you use for billing, 
> follow the steps in this topic to go through the Azure portal.

## What do I need to set up billing?

Microsoft Azure handles billing for your VSTS account, 
so you'll need:

* [VSTS project collection administrator or account owner permissions](../accounts/faq-add-delete-users.md#find-owner).

<a name="EligibleAzureSubscription"></a>

* An Azure subscription to bill your purchases. 
You must have at least [an **owner** or **contributor** role](add-backup-billing-managers.md) 
to link this subscription to your VSTS account.

    [Sign up for an Azure subscription](https://portal.azure.com), 
    if you don't have one, or have an Azure administrator 
    [add you as an **owner** or **contributor** role](add-backup-billing-managers.md) 
    to an Azure subscription that you can use to bill purchases. 
    Make sure to use the same email address 
    that you sign in to VSTS with for this activity.

    You can also link this Azure subscription to your VSTS 
    account in the [Azure portal](https://portal.azure.com).  Your 
    Azure subscription has all the necessary billing information, 
    so you won't set this up separately for your VSTS account.
    [How does Azure billing work?](faq-billing-setup.md#azure-billing)

    If you've lost access to your Azure subscription, 
    contact [Azure Support](http://azure.microsoft.com/en-us/support/options/).


## Related information

- [Set up billing](set-up-billing-for-your-account-vs.md)
- [Add backup billing managers](add-backup-billing-managers.md)
- [Change the Azure subscription for billing](change-azure-subscription.md)
- [VSTS pricing](https://azure.microsoft.com/pricing/details/visual-studio-team-services/)
- [VSTS billing support](https://www.visualstudio.com/team-services/support/)