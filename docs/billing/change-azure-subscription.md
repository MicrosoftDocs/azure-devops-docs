---
title: Change the Azure subscription your VSTS account uses for billing
description: Change the Azure subscription your VSTS account uses for billing
ms.prod: vs-devops-alm
ms.technology: vs-devops-setup
ms.assetid: e447adb1-6208-49f6-a488-515aa4b2fdcf
ms.manager: douge
ms.author: chcomley
ms.date: 3/22/2018
---
[//]: # (monikerRange: 'vsts')

# Change the Azure subscription your VSTS account uses for billing

**VSTS**

If you want to use a different Azure subscription to bill purchases for your VSTS account, 
you will need to unlink your VSTS account from your current Azure subscription 
and relink your account to another Azure subscription. You must be the VSTS account owner. 

## Prerequisites

The first time that you set up billing for your VSTS account--whether you do this via the Azure portal or as part of making a purchase in the Visual Studio Marketplace, you will need:

0. [VSTS project collection administrator or account owner permissions](../accounts/faq-add-delete-users.md#find-owner)
0. [The **owner** or **contributor** role on your Azure subscription](add-backup-billing-managers.md)

To make subsequent edits to paid quantities in your VSTS account, you only need the owner or contributor role on your Azure subscription.

>[!NOTE]
> When you unlink your account, any paid quantities of VSTS users, Package Management users, Test Manager users, Microsoft-hosted CI/CD, and self-hosted CI/CD  
> committed for the month will continue uninterrupted until the 1st of next month, 
> but your account will revert immediately to the Free Tier for cloud-based load testing. Unlinking will also cancel any 
> non-Microsoft paid extensions without refund or credit.
>
> After you relink your account to another Azure subscription, 
> you'll need to make your purchases again for this VSTS account in the Visual Studio Marketplace, to ensure you have continued coverage at the 1st of the next month. 
> You will only incur incremental charges if the quantities of Microsoft resources you select exceed what you've already paid for the current month. 
> Purchases of non-Microsoft extensions will be treated as new purchases and billed immediately to your new Azure subscription.
>
> If you wait until the 1st of next month to relink and to make your purchases again, 
> your VSTS account will revert back to the Free Tier and users in excess of the free limits will appear as expired in your account. 


<a name="AzurePortal2"></a>
## Change subscription

0. [Sign in to the Azure portal](https://portal.azure.com/) 
as VSTS account owner and as Azure subscription co-administrator or greater.
   
    If you experience browser problems with Azure, 
    make sure that you use a [supported browser](https://azure.microsoft.com/en-us/documentation/articles/azure-preview-portal-supported-browsers-devices/).

0. Go to **More services** > **Developer tools** > **VSTS accounts**. 
Select your VSTS account.

 ![More services, Developer tools, VSTS, select your account](_img/_shared/ap_vso_selectlinkedaccount.png)

0. Unlink your VSTS account.

 ![Unlink your account](_img/_shared/azure-portal-unlink-subscription.png)

 Your VSTS account is removed from this Azure subscription, breaking the billing relationship. 

0. Make your purchases again. During your first purchase, select the new Azure subscription to use for billing going forward.

## Releated information

- [VSTS users](https://marketplace.visualstudio.com/items?itemName=ms.vss-vstsuser)
- [Microsoft-hosted CI/CD](https://marketplace.visualstudio.com/items?itemName=ms.build-release-hosted-pipelines) (hosted pipelines)
- [Self-hosted CI/CD](https://marketplace.visualstudio.com/items?itemName=ms.build-release-private-pipelines) (private pipelines)
- [Test Manager](https://marketplace.visualstudio.com/items?itemName=ms.vss-testmanager-web)
- [Package Management](https://marketplace.visualstudio.com/items?itemName=ms.feed)
- Any non-Microsoft services you're buying through the [Visual Studio Marketplace](https://marketplace.visualstudio.com/vsts).
