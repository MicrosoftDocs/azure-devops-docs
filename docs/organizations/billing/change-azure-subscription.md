﻿---
title: Change Azure subscription used for billing
titleSuffix: Azure DevOps Services
ms.custom: seodec18
description: Unlink the Azure subscription that your organization uses for billing
ms.prod: devops
ms.technology: devops-billing
ms.assetid: e447adb1-6208-49f6-a488-515aa4b2fdcf
ms.topic: conceptual
ms.manager: mijacobs
ms.author: chcomley
author: chcomley
monikerRange: 'azure-devops'
ms.date: 05/28/2019
---

# Change or remove the Azure subscription that your organization uses for billing

[!INCLUDE [version-vsts-only](../../_shared/version-vsts-only.md)]

In this article, learn how to change the Azure subscription that your organization uses for billing or remove your billing subscription at any time.   

To configure costs for Azure DevOps, see the [pricing calculator](https://azure.microsoft.com/pricing/calculator/?service=azure-devops).

## Prerequisites

- To change or remove your billing subscription, you must be a member of the  [Project Collection Administrators group](../security/set-project-collection-level-permissions.md) or be the [organization Owner](../security/lookup-organization-owner-admin.md).  
- To change your Azure billing subscription, you must be added [as an Owner or Contributor to an Azure subscription](add-backup-billing-managers.md) that you can use to purchase.  

<a id="change-subscription" />

## Change your subscription

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select ![gear icon](../../_img/icons/gear-icon.png) **Organization settings**.

   ![Open Organization settings](../../_shared/_img/settings/open-admin-settings-vert.png)

3. Select **Billing**.

   ![Select Billing in Organization settings](_img/_shared/select-billing-organization-settings.png)

4. Select **Change Billing**.

   ![Select Change billing](_img/_shared/select-change-billing.png)

5. Select your Azure subscription, and then select **Save**.

   ![Select your Azure subscription](_img/_shared/select-azure-subscription.png)

## Remove your billing subscription 

> [!NOTE]
> When you remove the billing subscription from your organization, any paid quantities of Basic, Azure Artifacts users, Azure Test Plans users, Microsoft-hosted CI/CD, and self-hosted CI/CD go back to the free organization limits immediately.

1. Sign in to your organization, choose ![gear icon](../../_img/icons/gear-icon.png) <strong>Organization settings</strong>, choose <strong>Billing</strong>, and then choose <strong>Change billing</strong> following steps 1 through 4 provided in the [Change the subscription](#change-subscription) section.

2. Choose <strong>Remove billing</strong> and then choose <strong>Save</strong>.

	> [!div class="mx-imgBorder"]  
	> ![Remove billing](_img/change-azure-subscription/remove-billing-highlight.png)  

## Related articles

- [Buy Basic access for users](buy-basic-access-add-users.md)
- [Buy Azure Test Plans](buy-basic-access-add-users.md)
- [Buy CI/CD](buy-more-build-vs.md)
- [Sign up for Azure Artifacts](../../artifacts/start-using-azure-artifacts.md)
