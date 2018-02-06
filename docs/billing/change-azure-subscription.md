---
title: Change the Azure subscription your VSTS account uses for billing
description: Change the Azure subscription your VSTS account uses for billing
ms.prod: vs-devops-alm
ms.technology: vs-devops-setup
ms.assetid: e447adb1-6208-49f6-a488-515aa4b2fdcf
ms.manager: douge
ms.author: chcomley
ms.date: 1/29/2018
---

# Change the Azure subscription your VSTS account uses for billing

**VSTS**


If you want to use a different Azure subscription to bill purchases for your VSTS account, 
you can unlink your VSTS account from your current Azure subscription, 
and relink your account to another Azure subscription that's associated with you as the VSTS account owner. 


## Prerequisites

* VSTS project collection administrator or account owner permissions ([How do I find the project collection administrator or account owner permissions](../accounts/faq-add-delete-users.md#find-owner)).

* At least [an **owner** or **contributor** role](add-backup-billing-managers.md) for both Azure subscriptions.

>[!NOTE]
> When you unlink your account, any paid VSTS users, Package Management users, Test Manager users, CI/CD hosted pipelines, or CI/CD private pipelines that you've 
> committed for the month will continue uninterrupted until the 1st of next month, 
> but your account will revert immediately to the free monthly limits 
> for cloud-based load testing. Unlinking will also cancel any 
> non-Microsoft paid extensions without refund or credit.
>
> After you relink your account to another Azure subscription, 
> you'll need to make your purchases again for this VSTS account in the Visual Studio Marketplace, to ensure you have continued coverage at the 1st of the next month. 
> You will only incur incremental charges if the quantities of Microsoft resources you select exceed what you've already paid for the current month. 
> Purchases of non-Microsoft extensions will be treated as new purchases and 
> billed immediately to your new Azure subscription.
>
> If you wait until the 1st of next month to relink and to make your purchases again, 
> your VSTS account will revert back to the normal free amounts and users in excess of the free limits will appear as expired in your account. 


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

- [VSTS users](https://marketplace.visualstudio.com/items?itemName=ms.vss-vstsuser)
- [CI/CD - hosted pipelines](https://marketplace.visualstudio.com/items?itemName=ms.build-release-hosted-pipelines)
- [CI/CD - private pipelines](https://marketplace.visualstudio.com/items?itemName=ms.build-release-private-pipelines)
- [Test Manager](https://marketplace.visualstudio.com/items?itemName=ms.vss-testmanager-web)
- [Package Management](https://marketplace.visualstudio.com/items?itemName=ms.feed)
- Any non-Microsoft services you're buying through the [Visual Studio Marketplace](https://marketplace.visualstudio.com/vsts).
