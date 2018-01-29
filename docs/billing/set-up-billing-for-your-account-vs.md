---
title: Set up billing for VSTS 
description: Use an Azure subscription to pay for users, CI/CD concurrency, extensions, and cloud-based load testing for VSTS
ms.prod: vs-devops-alm
ms.technology: vs-devops-setup
ms.assetid: 87b994d6-2a92-46e5-b667-afe4eb198e25
ms.manager: douge
ms.author: chcomley
ms.date: 1/29/2018
---

#  Set up billing for your VSTS account

**VSTS**

During your first purchase for your VSTS account, we'll prompt you to select the Azure subscription to use for billing. All VSTS services are billed via Azure, 
though you are not required to use any other Azure services. 
 
These are the paid services offered by Microsoft:
* [VSTS users](https://marketplace.visualstudio.com/items?itemName=ms.vss-vstsuser)
* [CI/CD - hosted pipelines](https://marketplace.visualstudio.com/items?itemName=ms.build-release-hosted-pipelines)
* [CI/CD - private pipelines](https://marketplace.visualstudio.com/items?itemName=ms.build-release-private-pipelines)
* [Test Manager](https://marketplace.visualstudio.com/items?itemName=ms.vss-testmanager-web)
* [Package Management](https://marketplace.visualstudio.com/items?itemName=ms.feed)

## What do I need to set up billing?

Microsoft Azure handles billing for your VSTS account, 
so you'll need:

* [VSTS project collection administrator or account owner permissions](faq-billing-setup.md#find-owner).

<a name="EligibleAzureSubscription"></a>

* An Azure subscription to bill your purchases. 
You must have at least [an **owner** or **contributor** role](add-backup-billing-managers.md) 
to link this Azure subscription to your VSTS account.

    [Sign up for an Azure subscription](https://portal.azure.com), 
    if you don't have one. Or have an Azure administrator 
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

<a name="Link"></a>
<a name="AzurePortal"></a>
## Set up billing via the Azure Portal

0. [Sign in to the Azure portal](https://portal.azure.com/) 
as VSTS account owner and as Azure subscription co-administrator or greater.
   
 [Browser problems in Azure?](https://azure.microsoft.com/en-us/documentation/articles/azure-preview-portal-supported-browsers-devices/)

0. Go to **More services** > **Developer tools** > **VSTS accounts**. 
Select your VSTS account.

    ![More services, Developer tools, VSTS accounts, select your account](_img/set-up-billing/ap_vso_startlink2.png)

0. Choose the **Link** button.

 ![Choose Link button over middle panel](_img/set-up-billing/ap-vso-selectlink2.png)

0. Select your Azure subscription. 

 ![Select an Azure subscription](_img/set-up-billing/ap_vso_selectsubscription.png)

 After Azure sets up the link, your VSTS account appears linked to your Azure subscription. 

 ![Your VSTS account is now linked to your Azure subscription](_img/set-up-billing/ap_vso_linked.png)

## Related information

- [Billing overview](overview.md)
- [Add backup billing managers](add-backup-billing-managers.md)
- [Change the Azure subscription for billing](change-azure-subscription.md)
- [VSTS pricing](https://azure.microsoft.com/pricing/details/visual-studio-team-services/)
- [VSTS billing support](https://www.visualstudio.com/team-services/support/)
- [Troubleshooting](faq-billing-setup.md)
