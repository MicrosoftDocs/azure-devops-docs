---
title: Buy access to Azure Test Plans
titleSuffix: Azure DevOps Server
ms.custom: freshness-fy22q1, engagement-fy23
description: Steps for how to buy monthly access to Azure Test Plans.
ms.subservice: azure-devops-billing
ms.assetid: B6BED64A-DA53-4AB0-B200-85F86A869D7B
ms.topic: conceptual
ms.author: chcomley
author: chcomley
ms.date: 12/13/2022
monikerRange: '< azure-devops'
---
# Buy access to Azure Test Plans

[!INCLUDE [version-lt-azure-devops](../../includes/version-lt-azure-devops.md)]

 For [Azure DevOps Server](https://visualstudio.microsoft.com/tfs/), you pay per user for Basic features. Users with [Visual Studio subscriptions](https://visualstudio.microsoft.com/vs/pricing/) are free to add because Basic features are included in their subscription as a benefit. It's also free to add users with [Stakeholder access](../../organizations/security/get-started-stakeholder.md), which provides free access to a limited set of features.

[Buy monthly access](buy-basic-access-add-users.md), rather than a Visual Studio subscription or [Azure DevOps Server Client Access License (CAL)](../../user-guide/about-azure-devops-services-tfs.md). With paid monthly access, users have access to both Azure DevOps Services and Azure DevOps Server. Users aren't required to use Azure DevOps Services, though. For more information about access levels, see [Change access levels](../security/change-access-levels.md).

## Prerequisites

- **Permissions:** Be a member of the Team Foundation Administrators group. The user who installed Azure DevOps Server gets automatically added to this group. For more information, see [Add or remove a team administrator](../settings/add-team-administrator.md).

For more information about the requirements to access Azure Test Plans, see [Change access levels](../../organizations/security/change-access-levels.md). For more information about licensing, see the [pricing page](https://visualstudio.microsoft.com/team-services/tfs-pricing). To configure costs for Azure DevOps, see the [pricing calculator](https://azure.microsoft.com/pricing/calculator/?service=azure-devops).

## Buy monthly access to Azure DevOps Server

1. [Create an organization](../accounts/create-organization.md), if you don't have one already.

   You can use Azure DevOps Server features, like Basic or Azure Test Plans up to your total entitlements across Visual Studio subscription purchases, Azure DevOps Server CALs, and paid users in Azure DevOps.

2. Based on your total entitlements, pay for Basic users in your organization.  

   Free users can't access Azure DevOps Server. So, add five Basic users who won't use your server, to ensure everyone else has paid monthly access.

   Users get invited to your organization, but aren't required to use Azure DevOps. 

3. As the Azure DevOps Server Administrator, [add these same users to Azure DevOps Server](../../organizations/security/add-users-team-project.md#add-users-team-project). 
4. [Assign access levels for users](../../organizations/security/change-access-levels.md).

::: moniker range=" < azure-devops > azure-devops-2020"

## Buy monthly access to Test Plans

1. [Create an organization](../accounts/create-organization.md), if you don't have one already.

2. Based on the number of users who need Azure Test Plans access in Azure DevOps Server, [pay for Basic + Test Plan users](buy-basic-access-add-users.md#assign-basic-or-basic--test-plans) in your organization.  

    These users get invited to your organization, but aren't required to use Azure DevOps Services. By assigning Basic + Test Plans, your users can also run Visual Studio Test Professional 2015 or [2017](https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=TestProfessional&rel=15). 

    > [!NOTE]
    > Invited users must sign in to Visual Studio Test Professional with the same credentials that they used to join your organization. 

3. As the Azure DevOps Server Administrator, [add these same users](../../organizations/security/add-users-team-project.md#add-users-team-project). Give users [Basic + Test Plans access](../security/change-access-levels.md) so they can use Azure Test Plans. 

   Test Plans installs automatically in Azure DevOps Server. 

> [!NOTE]
> - Benefits of paying for Azure DevOps Server users via Basic + Test Plans in Azure DevOps Services:
>    - Users can access both Azure DevOps Server and Azure DevOps Services for the same price.
>    - Pay monthly for users who need temporary access.
>    - Utilize all Azure purchasing options, including credit card, Cloud Solution Provider (CSP) partner, Enterprise Agreement, and more.
> - Azure DevOps Server doesn't detect activities in Azure DevOps Services.
> - Add these users to Azure DevOps Server and assign them the Basic access level.
> - If you stop paying for these users, your administrator should remove them from Azure DevOps Server or buy them an Azure DevOps Server CAL.
::: moniker-end

## Next steps

> [!div class="nextstepaction"]
> [Buy parallel jobs](../../pipelines/licensing/concurrent-jobs.md#how-much-do-parallel-jobs-cost)

## Related articles

- [Buy Basic access for users](buy-basic-access-add-users.md)
- [Sign up for Azure Artifacts](../../artifacts/start-using-azure-artifacts.md)
- [Change your subscription for billing](change-azure-subscription.md)
- [Learn about Microsoft Cost Management and billing](/azure/cost-management-billing/cost-management-billing-overview)
