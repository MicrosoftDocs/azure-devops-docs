---
title: Change the Azure subscription your VSTS account uses for billing
description: Change the Azure subscription your VSTS account uses for billing
ms.prod: vs-devops-alm
ms.technology: vsts-sub-billing
ms.service: vsts-admin
ms.assetid: e447adb1-6208-49f6-a488-515aa4b2fdcf
ms.manager: douge
ms.author: estfan
ms.date: 04/28/2017
---

# Change the Azure subscription your VSTS account uses for billing

**VSTS**


If you want to use another Azure subscription to bill purchases for your VSTS account, 
you can unlink your VSTS account from your current Azure subscription, 
and relink your account to another Azure subscription that's associated with you as the VSTS account owner. 


## What do I need to change my Azure subscription?

* VSTS project collection administrator or account owner permissions ([How do I find the project collection administrator or account owner permissions](../accounts/faq-add-delete-users.md#find-owner))

* At least [an **owner** or **contributor** role](#AddAzureAdmin) for both Azure subscriptions

> When you unlink your account, any paid users or pipelines that you've 
> committed for the month will stay unaffected until the 1st of next month, 
> but your account will revert immediately to the free monthly limits 
> for Cloud-based Load Testing. This will also cancel any 
> non-Microsoft paid extensions without refund or credit.
>
> When you relink your account to another Azure subscription, 
> you'll have to add your paid users again, 
> extensions, and pipelines by repurchasing them in the 
> Visual Studio Marketplace, or if applicable, 
> resetting previous quantities in the Azure portal.  If 
> you've paid for any Microsoft resources this month, 
> those resources won't be billed again, 
> but rebuying non-Microsoft extensions 
> will be treated as new purchases and 
> billed immediately to your new Azure subscription.
>
> If you wait until the 1st of next month to relink, 
> your VSTS account will revert back to the free amounts, 
> for example, 5 free users. This means that if you have 
> any paid users, they'll appear expired in your VSTS account. 
> So, make sure to restore any paid users so they don't lose access 
> on the 1st of next month.


<a name="AzurePortal2"></a>
## Change subscription

0. [Sign in to the Azure portal](https://portal.azure.com/) 
as VSTS account owner and as Azure subscription Co-administrator or greater.
   
    If you experience browser problems with Azure, 
    make sure that you use a [supported browser](https://azure.microsoft.com/en-us/documentation/articles/azure-preview-portal-supported-browsers-devices/).

0. Go to **More services** > **Developer tools** > **VSTS accounts**. 
Select your VSTS account.

 ![More services, Developer tools, VSTS, select your account](_img/_shared/ap_vso_selectlinkedaccount.png)

0. Unlink your account.

 ![Unlink your account](_img/_shared/azure-portal-unlink-subscription.png)

 Your VSTS account is removed from Azure. 
 You'll now relink your account to a new Azure subscription.

0. Go to **More services** > **Developer tools** > **VSTS accounts**. 
Select your VSTS account.

 ![More services, Developer tools, VSTS accounts, select your account](_img/set-up-billing/ap_vso_startlink2.png)

0. Select your Azure subscription. 
Finish relinking your account.

 ![Select an Azure subscription](_img/set-up-billing/ap_vso_change-azure-subscription.png)

 After you finish relinking, 
 your account reappears in the Azure portal with 
 your selected Azure subscription.  For more details, see 
 [how to link your VSTS account to an Azure subscription](#AzurePortal).

0. Follow these steps to restore any 
[paid users](buy-basic-access-add-users.md) or 
[agents](buy-more-build-vs.md) 
that you had in Azure.


[Troubleshooting](faq-billing-setup.md)
