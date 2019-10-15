---
title: Buy access Azure DevOps Server or Azure Test Plans
titleSuffix: Azure DevOps Services
ms.custom: seodec18
description: Get a free 30-day trial for Azure Test Plans (formerly Test Manager)
ms.prod: devops
ms.technology: devops-billing
ms.assetid: 435fb3a4-1766-4172-928d-80c09cfb1410
ms.topic: quickstart
ms.manager: jillfra
ms.author: chcomley
author: chcomley
ms.date: 10/14/2019
monikerRange: '>= tfs-2015 < azure-devops'
---

# Quickstart: Buy access to Azure DevOps Server or Azure Test Plans

**Azure Pipelines** | **Azure DevOps Server 2019** | **TFS 2018** | **TFS 2017** | **TFS 2015**

In this quickstart, learn how to buy access to Azure DevOps Server or Azure Test Plans.

For [Azure DevOps Server](https://visualstudio.microsoft.com/tfs/), you pay per user for [Basic](https://visualstudio.microsoft.com/team-services/compare-features/) features like Code or Agile Planning. Users, who have a [Visual Studio subscription](https://visualstudio.microsoft.com/vs/pricing/), are free to add because Basic features are included in their subscription as a benefit. It's also free to add Stakeholders, which provides access to a limited set of features.

Paid users are entitled access to Basic features in your company's Azure DevOps Server. Paying monthly for users is a great alternative to buying User CALs, which typically have a 3-year commitment term. When you buy access in this way, you aren't required to use Azure DevOps Services, although you can use Azure DevOps Services in addition to Azure DevOps Server. 

You can also buy [Basic + Test Plans](buy-basic-access-add-users.md) for your users monthly. This method is an alternative way to buy a Visual Studio subscription that's entitled to use Azure Test Plans in Azure DevOps Server. 

To learn more about the requirements to access Azure DevOps Server or Azure Test Plans, see [Change access levels](../security/change-access-levels.md). For more information about licensing, see the [pricing page](https://visualstudio.microsoft.com/team-services/tfs-pricing). To configure costs for Azure DevOps, see the [pricing calculator](https://azure.microsoft.com/pricing/calculator/?service=azure-devops). 

## Buy monthly access to Azure DevOps Server for your users 

1. [Sign up for an organization](../accounts/create-organization.md), if you don't have one already. 
You can use Azure DevOps Server features, like Basic or Azure Test Plans up to your total entitlements across Visual Studio subscription purchases, Azure DevOps Server CALs, and paid users in Azure DevOps.
2. Based on these numbers, [pay for Basic users](buy-basic-access-add-users.md) in your organization.  
Free users aren’t licensed to use Azure DevOps Server, so add 5 additional Basic users who aren’t going to use your server. This step ensures that everyone else has paid monthly access. 
Users are invited to your organization, but you're not required to use Azure DevOps. 
3. Add users to your organization so you can more easily track these users. 
These users are invited to your organization, but you're not required to use Azure DevOps. 
4. As the Azure DevOps Server administrator, [add these same users to Azure DevOps Server](../security/add-users-team-project.md#add-users-to-a-project). [Give them the necessary access](../security/change-access-levels.md). 

> [!NOTE]
> Azure DevOps Server doesn't detect what happens in Azure DevOps Services. Make sure to add these users to Azure DevOps Server and assign them the Basic access level. 
If you stop paying for these users within your organization, your administrator should remove the users from Azure DevOps Server or buy Azure DevOps Server CALs for them. 

## Buy monthly access to Azure Test Plans

1. [Sign up for an organization](../accounts/create-organization.md), if you don't have one already.
2. Based on the amount of users who need Azure Test Plans access in Azure DevOps Server, pay for [Basic + Test Plans users in your organization](buy-basic-access-add-users.md). 
   These users are invited to your organization, but aren't required to use Azure DevOps Services. By assigning Basic + Test Plans or Microsoft Test Manager within your organization, your users can also run Visual Studio Test Professional 2015 or [2017](https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=TestProfessional&rel=15).

> [!NOTE]
> These users must sign in to Visual Studio Test Professional with the same credentials that they used to join your organization. 

3. As the Azure DevOps Server administrator, [add these same users](../security/add-users-team-project.md#add-users-to-a-project). Give them [Basic + Test Plans access](../security/change-access-levels.md) so they can use Azure Test Plans. 
   Test Plans installs automatically in Azure DevOps Server. 

## FAQs

### Q: Why should I pay via Azure DevOps Services for my Azure DevOps Server users?

A: You get many benefits, like the following: 

- Paying via Azure DevOps Services gives your users the flexibility to access both Azure DevOps Server and Azure DevOps Services for the same price. 
- You can pay monthly for users who need temporary access. 
- You get all the purchasing capabilities that Azure offers like payment via credit card, through a Cloud Solution Provider (CSP) partner, through the Enterprise Agreement, and more. 

### Q: Where can I learn more about Azure DevOps Server CALs and access levels for Azure Test Plans? 

A: See [Change access levels](../security/change-access-levels.md).

## Next steps

> [!div class="nextstepaction"]
> [Create a test plan](../../test/create-a-test-plan.md)
