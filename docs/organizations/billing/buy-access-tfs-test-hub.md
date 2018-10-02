---
title: Buy TFS CALs or access to Azure Test Plans
description: Steps for administrators on how to buy Team Foundation Server (TFS) client access licenses (CALs) or access to Azure Test Plans 
ms.prod: devops
ms.technology: devops-billing
ms.assetid: B6BED64A-DA53-4AB0-B200-85F86A869D7B
ms.topic: conceptual
ms.manager: douge
ms.author: chcomley
author: chcomley
ms.date: 09/17/2018
monikerRange: '>= tfs-2015 <= tfs-2018'
---
# Buy access to Team Foundation Server or Azure Test Plans

[!INCLUDE [version-tfs-2015-rtm](../../pipelines/_shared/version-tfs-2015-rtm.md)]

For [Team Foundation Server (TFS)](https://visualstudio.microsoft.com/tfs/), you pay per user for [Basic](https://visualstudio.microsoft.com/team-services/compare-features/) features like Code or Agile Planning. Users who have a [Visual Studio subscription](https://visualstudio.microsoft.com/vs/pricing/) are free to add because Basic features are included in their subscription as a benefit. It's also free to add [stakeholders](../../organizations/security/get-started-stakeholder.md) to TFS, which provides access to a limited set of features.

> [!NOTE]
> You need TFS 2015.2 or later to pay monthly for your TFS users via the Visual Studio Marketplace, which uses Azure for billing.

Paid users are entitled access to Basic features in your enterprise's TFS. Paying monthly for users is a great alternative to buying TFS User CALs, which typically have a 3-year commitment term. When you buy access to TFS in this way, you aren't required to use Azure DevOps Services (although you can use Azure DevOps Services in addition to TFS).

To pay monthly for TFS users, follow [these steps](#rent-cal).

You can also buy [Azure Test Plans Manager](https://marketplace.visualstudio.com/items?itemName=ms.vss-testmanager-web) for your TFS users on a monthly basis. This method is an alternative way to buy a Visual Studio subscription that's entitled to use Azure Test Plans in TFS.

To pay monthly for TFS Azure Test Plans access, follow [these steps](#test-hub).

To learn more about the requirements to access TFS or Azure Test Plans, see [Change access levels](../../organizations/security/change-access-levels.md). For more information about TFS licensing, see the [Team Foundation Server pricing page](https://visualstudio.microsoft.com/team-services/tfs-pricing).

## Buy monthly access to TFS for your users

1. [Sign up for an organization](../accounts/create-organization-msa-or-work-student.md), if you don't have one already.

2. Based on the number of users who need TFS CALs, [pay for users](https://marketplace.visualstudio.com/items?itemName=ms.vss-vstsuser). Organizations include five free users and these users don't apply to TFS.

3. If you haven't already, sign in to your organization (`https://dev.azure.com/{yourorganization}`).

4. [Add users](../accounts/add-organization-users.md) to your organization so you can more easily track these users.

    These users will be invited to your organization, but you're not required to use Azure DevOps.

5. As the TFS administrator, [add these same users to TFS](../../organizations/security/add-users-team-project.md#add-users-team-project). [Give them the necessary access](../../organizations/security/change-access-levels.md).

    > [!NOTE]
    > TFS doesn't detect what happens in Azure DevOps Services. Make sure to add these users to TFS and assign them the Basic access level.
    >
    > If you stop paying for these users within your organization, your TFS administrator should remove the users from TFS or buy TFS CALs for them.

## Buy monthly access to Azure Test Plans

1. [Sign up for an organization](../accounts/create-organization-msa-or-work-student.md), if you don't have one already.

2. Based on the number of users who need Azure Test Plans access in TFS, [buy Azure Test Plans Manager](https://marketplace.visualstudio.com/items?itemName=ms.vss-testmanager-web).

    Azure Test Plans Manager is installed automatically in TFS.

3. If you haven't already, sign in to your organization (`https://dev.azure.com/{yourorganization}`).

4. [Add users](../accounts/add-organization-users.md) to your organization. [Assign them to Azure Test Plans Manager](../../marketplace/assign-paid-extensions.md) via Azure Test Plans in your organization so you can track these users.

     These users will be invited to your organization, but you're not required to use Azure DevOps Services. By assigning Azure Test Plans Manager within your organization, your users can also run Visual Studio Test Professional 2015 or [2017](https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=TestProfessional&rel=15). If you only add the users to TFS, they won't be able to run Test Professional.

    > [!NOTE]
    > These users must sign in to Visual Studio Test Professional with the same credentials that they used to join your organization.

5. As the TFS administrator, [add these same users to TFS](../../organizations/security/add-users-team-project.md#add-users-team-project). [Give them Advanced access](../../organizations/security/change-access-levels.md) so they can use Azure Test Plans.

    > [!NOTE]
    > TFS doesn't detect what happens in Azure DevOps Services. Make sure these users get Advanced access in TFS.
    > 
    > If you stop paying for these users, your TFS administrator should remove those users from TFS.

## Related articles

- [Azure DevOps pricing](https://azure.microsoft.com/pricing/details/devops/azure-devops-services/)
- [Azure DevOps billing support](https://azure.microsoft.com/support/devops/)

## Q&A

<!-- BEGINSECTION class="m-qanda" -->

### Q: Why should I pay via Azure DevOps Services for my TFS users?

A: You get many benefits, for example:

- Paying via Azure DevOps Services gives your users the flexibility to access both TFS and Azure DevOps Services for the same price.
- You can pay monthly for users who need temporary access.
- You get all the purchasing capabilities that Azure offers like payment via credit card, through a Cloud Solution Provider (CSP) partner, through the Enterprise Agreement, and more.

### Q: Where can I learn more about TFS CALs and access levels for Azure Test Plans?

A: See [Change access levels](../security/change-access-levels.md).

<!-- ENDSECTION -->
