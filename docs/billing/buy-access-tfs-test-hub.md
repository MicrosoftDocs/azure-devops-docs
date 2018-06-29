---
title: Buy TFS CALs or access to the TFS Test hub | Team Foundation Server (TFS)
description: Steps for administrators on how to buy Team Foundation Server client access licenses (CALs) or access to the TFS Test hub 
ms.prod: devops
ms.technology: devops-billing
ms.assetid: B6BED64A-DA53-4AB0-B200-85F86A869D7B
ms.topic: conceptual
ms.manager: douge
ms.author: chcomley
author: chcomley
ms.date: 06/11/2018
monikerRange: '>= tfs-2015 <= tfs-2018'
---
# Buy access to Team Foundation Server or the TFS Test hub

**TFS 2018** | **TFS 2017** | **TFS 2015.2**

For [TFS](https://visualstudio.microsoft.com/tfs/) you pay per user for [Basic](https://visualstudio.microsoft.com/team-services/compare-features/) features like Code or Agile Planning.
Users who have a [Visual Studio subscription](https://visualstudio.microsoft.com/vs/pricing/) are free
to add because Basic features are included in their subscription as a benefit.
It's also free to add [stakeholders](../organizations/security/get-started-stakeholder.md) to TFS, which provides access to a limited set of features.

>[!NOTE]
> You will need TFS 2015.2 or later to pay for your TFS users monthly via the Visual Studio Marketplace, which uses Azure for billing.

Paid VSTS users are entitled access to Basic features in your enterprise's TFS, making paying monthly for VSTS users a great alternative to buying TFS User CALs, which typically have a 3-year commitment term.
Even when you buy access to TFS this way, you are not required to use VSTS (though of course you can if you wish, in
addition to using TFS).

[Follow these steps to pay monthly for TFS users](#rent-cal).

You can also buy [Test Manager](https://marketplace.visualstudio.com/items?itemName=ms.vss-testmanager-web) for your TFS users on a monthly basis, as an alternative to buying a Visual Studio subscription that is entitled to use the Test hub in TFS.

[Follow these steps to pay monthly for TFS Test hub access](#test-hub).

To learn more about requirements to access TFS or the Test hub,
see [Change access levels](../organizations/security/change-access-levels.md).
For more about TFS licensing, see the
[Team Foundation Server pricing page](https://visualstudio.microsoft.com/team-services/tfs-pricing).

## Buy monthly access to TFS for your users

1. [Sign up for a VSTS account](../organizations/accounts/create-account-msa-or-work-student.md), if you don't have one already.

2. Based on the number of users who need TFS CALs, [pay for VSTS users](https://marketplace.visualstudio.com/items?itemName=ms.vss-vstsuser). Note that VSTS accounts include 5 free users, and these free users do not apply to TFS.

3. If you haven't already, sign in to your VSTS account (```https://{youraccount}.visualstudio.com```).

4. [Add users](../organizations/accounts/add-account-users-from-user-hub.md) to your VSTS account so that you can track these users more easily.

    Though these users will get invited to your VSTS account, you're not required to use VSTS.

5. As TFS administrator, now [add these same users to TFS](../organizations/security/add-users-team-project.md#add-users-team-project), and [give them the necessary access](../organizations/security/change-access-levels.md).

    >[!NOTE]
    > TFS doesn't detect what happens in VSTS so make sure to add these users to TFS and assign them the Basic access level.
    >
    > If you stop paying for these users within your VSTS account, your TFS administrator should remove the users from TFS or buy TFS CALs for them.

## Buy monthly access to the Test hub

1. [Sign up for a VSTS account](../organizations/accounts/create-account-msa-or-work-student.md), if you don't have one already.

2. Based on the number of users who need Test hub access in TFS, [buy Test Manager](https://marketplace.visualstudio.com/items?itemName=ms.vss-testmanager-web).

    Test Manager is installed automatically in TFS.

3. If you haven't already, sign in to your VSTS account (```https://{youraccount}.visualstudio.com```).

4. [Add users](../organizations/accounts/add-account-users-from-user-hub.md) to your VSTS account and [assign them Test Manager](../marketplace/assign-paid-extensions.md) via the Users hub in your VSTS account so that you can track these users.

    Though these users will get invited to your VSTS account,you're not required to use VSTS. By assigning Test Manager within your VSTS account, your users can also run Visual Studio Test Professional 2015 or [2017](https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=TestProfessional&rel=15). If you only add the users to TFS, they will not be able to run Test Professional.

    >[!NOTE]
    > These users must sign in to Visual Studio Test Professional with the same credentials that they used to join your VSTS account.

5. As TFS administrator, [add these same users to TFS](../organizations/security/add-users-team-project.md#add-users-team-project). [Give them Advanced access](../organizations/security/change-access-levels.md) so they can use the Test hub.

    >[!NOTE]
    > TFS doesn't detect what happens in VSTS so make sure these users get Advanced access in TFS.
    > 
    > If you stop paying for these VSTS users, your TFS administrator should remove those users from TFS.

## Related information

- [VSTS pricing](https://azure.microsoft.com/pricing/details/visual-studio-team-services/)
- [VSTS billing support](https://visualstudio.microsoft.com/team-services/support/)

## Q&A

<!-- BEGINSECTION class="m-qanda" -->

### Q: Why should I pay via VSTS for my TFS users?

A: You get many benefits, for example:

- Paying via VSTS gives your users the flexibility to access both TFS and VSTS for the same price.
- You can pay monthly for users who need temporary access.
- You get all the purchasing capabilities that Azure offers, like payment via credit card, through a Cloud Solution Provider (CSP) partner, through the Enterprise Agreement, and more.

### Q: Where can I learn more about TFS CALs and access levels for the Test hub?

A: See [Change access levels](../organizations/security/change-access-levels.md).

<!-- ENDSECTION -->
