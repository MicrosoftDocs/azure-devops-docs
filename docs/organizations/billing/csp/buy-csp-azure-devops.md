---
title: Buy Azure DevOps for Cloud Solution Providers
titleSuffix: Azure DevOps Services
description: Cloud Solution Provider (CSP) partners can purchase Azure DevOps for customers
ms.prod: devops
ms.technology: devops-billing
ms.assetid: a7d8ce85-c95f-495a-82f3-9237b49b29de
ms.topic: conceptual
ms.manager: jillfra
ms.author: chcomley
author: chcomley
ms.date: 05/10/2019
monikerRange: 'azure-devops'
---
# Cloud Solution Providers: Buy Azure DevOps

[!INCLUDE [version-vsts-only](../../../_shared/version-vsts-only.md)]

Partners in the Cloud Solution Provider (CSP) program can enable their customers to [pay for Azure DevOps](https://azure.microsoft.com/pricing/details/devops/azure-devops-services/) by using a CSP-based Azure subscription.

## Prerequisites

To enable your customer to purchase Azure DevOps by using a CSP-based Azure subscription, confirm the following statements are true:

- The customer has [Project Collection Administrator (PCA) or organization Owner permissions](../../accounts/faq-add-delete-users.md)
- The customer has [Contributor or Owner role permissions](../add-backup-billing-managers.md) to the CSP-based Azure subscription

When your customer gains access to the CSP-based Azure subscription, they can [set up billing](../set-up-billing-for-your-organization-vs.md) or [change billing](../change-azure-subscription.md) for their Azure DevOps organization and further charges are billed to the CSP subscription.

## Change billing to CSP Azure subscription

### CSP steps

1. Sign in to the [Azure portal](https://ms.portal.azure.com/#home) as CSP.
2. Assign your selected user Contributor access to the CSP Azure subscription.

### Customer steps

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).
2. Select ![gear icon](../../../_img/icons/gear-icon.png) **Organization settings**.

   ![Open Organization settings](../../../_shared/_img/settings/open-admin-settings-vert.png)

3. Select **Billing**.

   ![Select Billing from Organization settings](../_img/_shared/select-billing-organization-settings.png)
4. Select **Change billing**.

   ![Change billing button](../_img/_shared/select-change-billing.png)

5. Select your CSP Azure subscription that you want to be billed with, and then select **Save**.


