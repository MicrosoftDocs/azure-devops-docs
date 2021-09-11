---
title: Buy access to Azure Test Plans
titleSuffix: Azure DevOps Server
ms.custom: seodec18
description: Steps for how to buy monthly access to Azure Test Plans. 
ms.technology: devops-billing
ms.assetid: B6BED64A-DA53-4AB0-B200-85F86A869D7B
ms.topic: conceptual
ms.author: chcomley
author: chcomley
ms.date: 12/02/2020
monikerRange: '>= tfs-2015 < azure-devops'
---
# Buy access to Azure Test Plans

[!INCLUDE [version-tfs-2015-rtm](../../pipelines/includes/version-tfs-2015-rtm.md)]

 For [Azure DevOps Server](https://visualstudio.microsoft.com/tfs/), you pay per user for [Basic](https://visualstudio.microsoft.com/team-services/compare-features/) features like Code or Agile Planning. Users with [Visual Studio subscriptions](https://visualstudio.microsoft.com/vs/pricing/) are free to add because Basic features are included in their subscription as a benefit. It's also free to add [Stakeholders](../../organizations/security/get-started-stakeholder.md), which provides access to a limited set of features.

You can [buy monthly access](buy-basic-access-add-users.md). Paid monthly access is an alternative to buying a Visual Studio subscription or User CALs. User CALS usually has a three-year commitment term. With paid monthly access, users have access to both Azure DevOps Services and Azure DevOps Server. Users aren't required to use Azure DevOps Services, though.

To learn more about the requirements to access Azure Test Plans, see [Change access levels](../../organizations/security/change-access-levels.md). For more information about licensing, see the [pricing page](https://visualstudio.microsoft.com/team-services/tfs-pricing). To configure costs for Azure DevOps, see the [pricing calculator](https://azure.microsoft.com/pricing/calculator/?service=azure-devops).

[!INCLUDE [pricing-calculator-tip](../../includes/pricing-calculator-tip.md)]

## Buy monthly access to Azure DevOps Server for your users

1. [Sign up for an organization](../accounts/create-organization.md), if you don't have one already.

   You can use Azure DevOps Server features, like Basic or Azure Test Plans up to your total entitlements across Visual Studio subscription purchases, Azure DevOps Server CALs, and paid users in Azure DevOps.

2. Based on these numbers, pay for Basic users in your organization.  

   Free users can't access Azure DevOps Server. So, add five Basic users who aren’t going to use your server, to ensure everyone else has paid monthly access.

   Users are invited to your organization, but you're not required to use Azure DevOps. 

3. As the Azure DevOps Server administrator, [add these same users to Azure DevOps Server](../../organizations/security/add-users-team-project.md#add-users-team-project). [Give them the necessary access](../../organizations/security/change-access-levels.md).

    > [!NOTE]
    > Azure DevOps Server doesn't detect what happens in Azure DevOps Services. Make sure to add these users to Azure DevOps Server and assign them the Basic access level.
    >
    > If you stop paying for these users within your organization, your administrator should remove the users from Azure DevOps Server or buy Azure DevOps Server CALs for them.

## Buy monthly access to Azure Test Plans

::: moniker range="= azure-devops-2019 || azure-devops-2020"

1. [Sign up for an organization](../accounts/create-organization.md), if you don't have one already.

2. Based on the number of users who need Azure Test Plans access in Azure DevOps Server, [pay for Basic + Test Plan users](buy-basic-access-add-users.md#assign-users-basic-or-basic--test-plans) in your organization.  

    These users get invited to your organization, but aren't required to use Azure DevOps Services. By assigning Basic + Test Plans, your users can also run Visual Studio Test Professional 2015 or [2017](https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=TestProfessional&rel=15). 

    > [!NOTE]
    > These users must sign in to Visual Studio Test Professional with the same credentials that they used to join your organization. 

3. As the Azure DevOps Server administrator, [add these same users](../../organizations/security/add-users-team-project.md#add-users-team-project). Give them [Basic + Test Plans access](../security/change-access-levels.md) so they can use Azure Test Plans. 

   Test Plans installs automatically in Azure DevOps Server. 

::: moniker-end

::: moniker range="<= tfs-2018"

1. [Sign up for an organization](../accounts/create-organization.md), if you don't have one already.

2. Based on the number of users who need Azure Test Plans access in Azure DevOps Server, [buy paid access](buy-basic-access-add-users.md).

    Test Plans installs automatically in Azure DevOps Server.

3. [Add users](../accounts/add-organization-users.md) to your organization. Assign them Basic + Test Plans access so you can track these users.

4. As the Azure DevOps Server administrator, [add these same users](../../organizations/security/add-users-team-project.md#add-users-team-project). [Give them Advanced access](../../organizations/security/change-access-levels.md) so they can use Azure Test Plans.

    > [!NOTE]
    > Azure DevOps Server doesn't detect what happens in Azure DevOps Services. 
    >
    > If you stop paying for these users, your administrator should remove those users from Azure DevOps Server.

::: moniker-end

## Q&A

<!-- BEGINSECTION class="m-qanda" -->

### Q: Why should I pay via Azure DevOps Services for my Azure DevOps Server users?

A: You get many benefits, for example:

- Paying via Azure DevOps Services gives your users the flexibility to access both Azure DevOps Server and Azure DevOps Services for the same price.
- You can pay monthly for users who need temporary access.
- You get all the purchasing capabilities that Azure offers like payment via credit card, through a Cloud Solution Provider (CSP) partner, through the Enterprise Agreement, and more.

### Q: Where can I learn more about Azure DevOps Server CALs and access levels for Azure Test Plans?

A: See [Change access levels](../security/change-access-levels.md).

<!-- ENDSECTION -->

## Related articles

- [Azure DevOps pricing](https://azure.microsoft.com/pricing/details/devops/azure-devops-services/)
- [Azure DevOps billing overview](overview.md)
