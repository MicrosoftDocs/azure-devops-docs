---
title: Start to set up billing for Azure DevOps
description: Use an Azure subscription to pay for users, CI/CD concurrency, extensions, and cloud-based load testing for Azure DevOps 
ms.prod: devops
ms.technology: devops-billing
ms.assetid: 87b994d6-2a92-46e5-b667-afe4eb198e25
ms.topic: quickstart
ms.manager: douge
ms.author: chcomley
author: chcomley
ms.date: 09/13/2018
monikerRange: 'vsts'
---


# Quickstart: Set up billing for your organization

[!INCLUDE [version-vsts-only](../../_shared/version-vsts-only.md)]

In this quickstart, you learn to set up billing for your organization in advance of making purchases, so that you'll have this in place once you're ready to buy, however the preferred method is to simply make an initial purchase. Make a purchase in the [Visual Studio Marketplace](https://marketplace.visualstudio.com/) to set up billing for your organization. During that process we'll prompt you for an Azure subscription where charges should apply and allow you to create a new Azure subscription if you don't have one already.

**All services are billed via Azure**, and you are not required to use any other Azure services.

If you don't have an Azure subscription, [create one](https://azure.microsoft.com/pricing/purchase-options/) before you begin. Please note that the Azure Free Trial is not supported.

## Prerequisites

The first time you set up billing for your organization, whether you do this via the Azure portal or as part of making a purchase in the Visual Studio Marketplace, you must have the following:

* [Azure DevOps project collection administrator or organization owner permissions](../accounts/faq-add-delete-users.md#find-owner)
* [An Azure subscription you can use to purchase](add-backup-billing-managers.md)

To make subsequent edits to paid quantities in your organization, you only need have access to [purchase on the Azure subscription](add-backup-billing-managers.md).

## Set up billing via the Azure Portal

If you'd like to set up billing for your organization prior to buying something in the Visual Studio Marketplace, you can do so from within the Azure portal.

1. [Sign in to the Azure portal](https://portal.azure.com/) as organization owner and as a user who can [make purchases on an Azure subscription](add-backup-billing-managers.md).

    [Browser problems in Azure?](https://azure.microsoft.com/documentation/articles/azure-preview-portal-supported-browsers-devices/)

2. Go to **All services** > **Azure DevOps Services organizations**. 

   ![Choose All services and Azure DevOps organizations](../accounts/_img/_shared/azure-portal-team-services-administration.png)

3. Select your organization.

   ![Azure portal select your organization](_img/set-up-billing/azure-portal-select-organization.png)

4. Choose **Set up billing**.

    ![Choose Link button over middle panel](_img/set-up-billing/azure-portal-choose-set-up-billing.png)

5. Select your Azure subscription and then choose **Link**.

   ![Select an Azure subscription](_img/set-up-billing/azure-portal-link-your-organization.png)

 After the link is set up in Azure, your organization appears linked to your Azure subscription.

## Next steps

> [!div class="nextstepaction"]
> [Pay for users](buy-basic-access-add-users.md)

## Related articles

* [Billing FAQ](../billing/billing-faq.md)
* [Add a backup billing manager](add-backup-billing-managers.md)
* [Change the subscription](../billing/change-azure-subscription.md) for billing.
