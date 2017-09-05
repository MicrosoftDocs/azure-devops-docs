---
title: VSTS billing concepts
description: Use an Azure subscription to pay for more users, build & release pipelines, extensions, and cloud-based load testing for Visual Studio Team Services (Visual Studio Online, VSO, VSTS)
ms.prod: vs-devops-alm
ms.technology: vsts-sub-billing
ms.service: vsts-admin
ms.assetid: e8991424-ab10-4188-aa44-66e9af288c11
ms.manager: douge
ms.author: estfan
ms.date: 04/28/2017
---

#  VSTS billing concepts

**VSTS**

You have to set up billing when you need more than the free limits in your VSTS account (number of Team 
Services users, pipelines for Build & Release, or virtual user minutes for Cloud-Based Load Testing. Also, when 
you want to buy VSTS extensions from the 
[Visual Studio Marketplace](https://marketplace.visualstudio.com/). Learn [what you get for free in VSTS](https://www.visualstudio.com/team-services/pricing/).

> If this is your first time paying for VSTS users, pipelines, 
> or extensions, you can go directly to the Visual Studio Marketplace and 
> set up billing during your first purchase:
>
> * [Pay for more users](buy-basic-access-add-users.md)
> * [Buy more capacity for Build & Release](buy-more-build-vs.md)
>
> Otherwise, if you're buying Cloud-Based Load Testing for the first time, 
> or if you want to change the Azure subscription that you use for billing, 
> follow the steps in this topic to go through the Azure portal.
>
> To change the Azure subscription that's linked to your VSTS account, 
> [unlink your VSTS account](#change-azure-subscription), 
> then [relink your account to another Azure subscription](#Link).

## What do I need to set up billing?

Microsoft Azure handles billing for your VSTS account, 
so you'll need:

* [VSTS project collection administrator or account owner permissions](../accounts/faq-add-delete-users.md#find-owner)

<a name="EligibleAzureSubscription"></a>

* An [Azure subscription](#AzureMSDNSubscription) to bill your purchases. 
You must have at least [an **owner** or **contributor** role](#AddAzureAdmin) 
to link this subscription to your VSTS account.

    [Sign up for an Azure subscription](https://account.windowsazure.com/subscriptions/), 
    if you don't have one. Or have an Azure administrator 
    [add you as an **owner** or **contributor** role](#AddAzureAdmin) 
    to an Azure subscription that you can use to bill purchases. 
    Make sure to use the same email address 
    that you sign in to VSTS with for this activity.

    You'll link this Azure subscription to your VSTS 
    account in the [Azure portal](https://portal.azure.com).  Your 
    Azure subscription has all the necessary billing information, 
    so you won't set this up separately for your VSTS account.
    [How does Azure billing work?](#azure-billing)

    If you've lost access to your Azure subscription, 
    contact [Azure Support](http://azure.microsoft.com/en-us/support/options/).


## Next

[Link work accounts to Visual Studio with MSDN subscriptions](link-msdn-subscription-to-organizational-account-vs.md)

[Link Azure subscription to VSTS Account](set-up-billing-for-your-account-vs.md)

[Add backup billing managers](add-backup-billing-managers.md)

[Change Azure subscription for billing](change-azure-subscription.md)

