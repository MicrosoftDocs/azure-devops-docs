---
title: Set up billing for VSTS to pay for more services 
description: Use an Azure subscription to pay for users, build pipelines, extensions, and cloud-based load testing for VSTS
ms.prod: vs-devops-alm
ms.technology: vs-devops-setup
ms.assetid: 87b994d6-2a92-46e5-b667-afe4eb198e25
ms.manager: douge
ms.author: billchi
ms.date: 10/6/2017
---

#  Set up billing to pay for users, pipelines, and cloud-based load testing in VSTS

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
> [unlink your VSTS account](change-azure-subscription.md), 
> then [relink your account to another Azure subscription](#Link).

## What do I need to set up billing?

Microsoft Azure handles billing for your VSTS account, 
so you'll need:

* [VSTS project collection administrator or account owner permissions](faq-billing-setup.md#find-owner)

<a name="EligibleAzureSubscription"></a>

* An [Azure subscription](faq-pay-for-basic-users.md#AzureMSDNSubscription) to bill your purchases. 
You must have at least [an **owner** or **contributor** role](add-backup-billing-managers.md) 
to link this subscription to your VSTS account.

    [Sign up for an Azure subscription](https://portal.azure.com), 
    if you don't have one. Or have an Azure administrator 
    [add you as an **owner** or **contributor** role](add-backup-billing-managers.md) 
    to an Azure subscription that you can use to bill purchases. 
    Make sure to use the same email address 
    that you sign in to VSTS with for this activity.

    You'll link this Azure subscription to your VSTS 
    account in the [Azure portal](https://portal.azure.com).  Your 
    Azure subscription has all the necessary billing information, 
    so you won't set this up separately for your VSTS account.
    [How does Azure billing work?](faq-billing-setup.md#azure-billing)

    If you've lost access to your Azure subscription, 
    contact [Azure Support](http://azure.microsoft.com/en-us/support/options/).

<a name="Link"></a>
<a name="AzurePortal"></a>
## Link an Azure subscription to your VSTS account for billing

0. [Sign in to the Azure portal](https://portal.azure.com/) 
as VSTS account owner and as Azure subscription Co-administrator or greater.
   
 [Browser problems in Azure?](https://azure.microsoft.com/en-us/documentation/articles/azure-preview-portal-supported-browsers-devices/)

0. Go to **More services** > **Developer tools** > **VSTS accounts**. 
Select your VSTS account.

    ![More services, Developer tools, VSTS accounts, select your account](_img/set-up-billing/ap_vso_startlink2.png)

0. Choose the **Link** button.

 ![Choose Link button over middle panel](_img/set-up-billing/ap-vso-selectlink2.png)

0. Select your Azure subscription. 

 ![Select an Azure subscription](_img/set-up-billing/ap_vso_selectsubscription.png)

 After Azure sets up the link, your VSTS account appears linked to your Azure subscription. 

 ![Your account is now linked to your Azure subscription](_img/set-up-billing/ap_vso_linked.png)

## Next

* [Pay for more users](buy-basic-access-add-users.md)
* [Buy more pipeline capacity for builds](buy-more-build-vs.md)  
* [Buy more cloud-based testing services](buy-load-testing-vs.md) 


## Troubleshooting

[Troubleshooting](faq-billing-setup.md)
