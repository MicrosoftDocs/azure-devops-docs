---
title: Set up billing for VSTS 
description: Use an Azure subscription to pay for users, CI/CD concurrency, extensions, and cloud-based load testing for VSTS
ms.prod: vs-devops-alm
ms.technology: vs-devops-setup
ms.assetid: 87b994d6-2a92-46e5-b667-afe4eb198e25
ms.manager: douge
ms.author: chcomley
ms.date: 3/13/2018
---
[//]: # (monikerRange: 'vsts')

#  Set up billing for your VSTS account

**VSTS**

During your first purchase for your VSTS account, we'll prompt you to select the Azure subscription to use for billing. All VSTS services are billed via Azure, 
and you are not required to use any other Azure services. 
 
These are the paid services offered by Microsoft:
* [VSTS users](https://marketplace.visualstudio.com/items?itemName=ms.vss-vstsuser)
* [Microsoft-hosted CI/CD - hosted pipelines](https://marketplace.visualstudio.com/items?itemName=ms.build-release-hosted-pipelines)
* [Self-hosted CI/CD - private pipelines](https://marketplace.visualstudio.com/items?itemName=ms.build-release-private-pipelines)
* [Test Manager](https://marketplace.visualstudio.com/items?itemName=ms.vss-testmanager-web)
* [Package Management](https://marketplace.visualstudio.com/items?itemName=ms.feed)

## What do I need to set up billing?

The first time that you set up billing for your VSTS account--whether you do this via the Azure portal or as part of making a purchase in the Visual Studio Marketplace, you will need:

0. [VSTS project collection administrator or account owner permissions](../accounts/faq-add-delete-users.md#find-owner)
0. [The **owner** or **contributor** role on your Azure subscription](add-backup-billing-managers.md)

To make subsequent edits to paid quantities in your VSTS account, you only need the owner or contributor role on your Azure subscription.

## Set up billing via the Azure Portal
If you'd like to set up billing for your VSTS account prior to making a purchase (because setting up billing is integrated when you make a purchase), 
you can set up billing from within the Azure portal.

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
