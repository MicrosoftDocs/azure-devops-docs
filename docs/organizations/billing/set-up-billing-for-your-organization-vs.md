---
title: Start to set up billing for VSTS
description: Use an Azure subscription to pay for users, CI/CD concurrency, extensions, and cloud-based load testing for Visual Studio Team Services (VSTS)
ms.prod: devops
ms.technology: devops-billing
ms.assetid: 87b994d6-2a92-46e5-b667-afe4eb198e25
ms.topic: quickstart
ms.manager: douge
ms.author: chcomley
author: chcomley
ms.date: 07/26/2018
---
[//]: # (monikerRange: 'vsts')

# Quickstart: Set up billing for your VSTS organization

**VSTS**

Make a purchase in the [Visual Studio Marketplace](https://marketplace.visualstudio.com/) to set up billing for your Visual Studio Team Services (VSTS) organization. During that process, we'll prompt you for an Azure subscription where charges should apply. We'll also allow you to create a new Azure subscription if you don't have one already.

This quickstart will help you set up billing for your VSTS organization in advance of making purchases, so that you'll have this in place when you're ready to buy. But the preferred method is to simply make an initial purchase.

*All VSTS services are billed via Azure*, and you're not required to use any other Azure services.

If you don't have an Azure subscription, [create one](https://azure.microsoft.com/free/?WT.mc_id=A261C142F) before you begin. Note that the Azure free trial is not supported.

## Prerequisites

The first time that you set up billing for your VSTS organization - whether via the Azure portal or as part of making a purchase in the Visual Studio Marketplace - you'll need:

* [VSTS project collection administrator or organization owner permissions](../accounts/faq-add-delete-users.md#find-owner)
* [An Azure subscription that you can use to purchase](add-backup-billing-managers.md)

To make subsequent edits to paid quantities in your VSTS organization, you only need access to purchase on the Azure subscription.

## Set up billing via the Azure portal

If you want to set up billing for your organization before buying something in the Visual Studio Marketplace, you can do so from the Azure portal.

1. [Sign in to the Azure portal](https://portal.azure.com/) as VSTS organization owner and as Azure subscription co-administrator or greater.

   [Browser problems in Azure?](https://azure.microsoft.com/documentation/articles/azure-preview-portal-supported-browsers-devices/)

2. Select **All services** and then select **Team Services administration**.

   ![Select Team Services administration under All services](_img/set-up-billing/azure-portal-team-services.png)

3. Select your organization.

   ![Select your organization](_img/set-up-billing/azure-portal-select-organization.png)

4. Select **Set up billing**.

   ![Choose the link button over the middle panel](_img/set-up-billing/azure-portal-choose-set-up-billing.png)

5. Select your Azure subscription and then select **Link**.

   ![Select an Azure subscription](_img/set-up-billing/azure-portal-link-your-organization.png)

 After Azure sets up the link, your VSTS organization appears linked to your Azure subscription.

![Your VSTS organization is now linked to your Azure subscription](_img/set-up-billing/azure-portal-billing-set-up-complete.png)

## Next steps

> [!div class="nextstepaction"]
> [Pay for users](buy-basic-access-add-users.md)

## Related articles

* [Billing FAQ](https://docs.microsoft.com/en-us/vsts/billing/vsts-billing-faq?view=vsts)
* [Add a backup billing manager](add-backup-billing-managers.md)
* [Change the subscription for billing](https://docs.microsoft.com/en-us/vsts/billing/change-azure-subscription?view=vsts)
