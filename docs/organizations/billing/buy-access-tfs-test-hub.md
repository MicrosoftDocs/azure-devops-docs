---
title: Buy client access licenses for Azure DevOps Server or access to Azure Test Plans
titleSuffix: Azure DevOps Server
ms.custom: seodec18
description: Steps for administrators to follow on how to buy client access licenses (CALs) or access to Azure Test Plans 
ms.prod: devops
ms.technology: devops-billing
ms.assetid: B6BED64A-DA53-4AB0-B200-85F86A869D7B
ms.topic: conceptual
ms.manager: jillfra
ms.author: chcomley
author: chcomley
ms.date: 06/12/2019
monikerRange: '>= tfs-2015 <= azure-devops-2019'
---
# Buy access to Azure DevOps Server or Azure Test Plans

[!INCLUDE [version-tfs-2015-rtm](../../pipelines/_shared/version-tfs-2015-rtm.md)]

For [Azure DevOps Server](https://visualstudio.microsoft.com/tfs/), you pay per user for [Basic](https://visualstudio.microsoft.com/team-services/compare-features/) features like Code or Agile Planning. Users who have a [Visual Studio subscription](https://visualstudio.microsoft.com/vs/pricing/) are free to add because Basic features are included in their subscription as a benefit. It's also free to add [Stakeholders](../../organizations/security/get-started-stakeholder.md), which provides access to a limited set of features.

Paid users are entitled access to Basic features in your company's Azure DevOps Server. Paying monthly for users is a great alternative to buying User CALs, which typically have a 3-year commitment term. When you buy access in this way, you aren't required to use Azure DevOps Services (although you can use Azure DevOps Services in addition to Azure DevOps Server).

You can also buy [Basic + Test Plans](buy-basic-plus-test-plans.md) for your users monthly. This method is an alternative way to buy a Visual Studio subscription that's entitled to use Azure Test Plans in Azure DevOps Server.

To learn more about the requirements to access Azure DevOps Server or Azure Test Plans, see [Change access levels](../../organizations/security/change-access-levels.md). For more information about licensing, see the [pricing page](https://visualstudio.microsoft.com/team-services/tfs-pricing). To configure costs for Azure DevOps, see the [pricing calculator](https://azure.microsoft.com/en-us/pricing/calculator/?service=azure-devops).

## Buy monthly access to Azure DevOps Server for your users

1. [Sign up for an organization](../accounts/create-organization.md), if you don't have one already.

2. You can use Azure DevOps Server features, like Basic or Azure Test Plans up to your total entitlements across Visual Studio subscription purchases, Azure DevOps Server CALs, and paid users in Azure DevOps. Based on your number of users,  [pay for users](buy-basic-access-add-users.md).

3. [Add users](../accounts/add-organization-users.md) to your organization so you can more easily track these users.

    These users are invited to your organization, but you're not required to use Azure DevOps.

4. As the Azure DevOps Server administrator, [add these same users to Azure DevOps Server](../../organizations/security/add-users-team-project.md#add-users-team-project). [Give them the necessary access](../../organizations/security/change-access-levels.md).

    > [!NOTE]
    > Azure DevOps Server doesn't detect what happens in Azure DevOps Services. Make sure to add these users to Azure DevOps Server and assign them the Basic access level.
    >
    > If you stop paying for these users within your organization, your administrator should remove the users from Azure DevOps Server or buy Azure DevOps Server CALs for them.

## Buy monthly access to Azure Test Plans

::: moniker range="= azure-devops-2019"

1. [Sign up for an organization](../accounts/create-organization.md), if you don't have one already.

2. Based on the amount of users who need Azure Test Plans access in Azure DevOps Server, [buy Basic + Test Plans](buy-basic-plus-test-plans.md).

    Test Plans installs automatically in Azure DevOps Server.

3. [Add users](../accounts/add-organization-users.md) to your organization. Assign them Basic + Test Plans so you can track these users.

     These users are invited to your organization, but are not required to use Azure DevOps Services. By assigning Basic + Test Plans or Microsoft Test Manager within your organization, your users can also run Visual Studio Test Professional 2015 or [2017](https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=TestProfessional&rel=15). If you only add the users to Azure DevOps Server, they can't run Test Professional.

    > [!NOTE]
    > These users must sign in to Visual Studio Test Professional with the same credentials that they used to join your organization.

4. As the Azure DevOps Server administrator, [add these same users](../../organizations/security/add-users-team-project.md#add-users-team-project). [Give them Basic + Test Plans access](../../organizations/security/change-access-levels.md) so they can use Azure Test Plans.

::: moniker-end

::: moniker range="<= tfs-2018"

1. [Sign up for an organization](../accounts/create-organization.md), if you don't have one already.

2. Based on the amount of users who need Azure Test Plans access in Azure DevOps Server, [buy Basic + Test Plans access](buy-basic-plus-test-plans.md).

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
- [Azure DevOps billing support](https://azure.microsoft.com/support/devops/)


