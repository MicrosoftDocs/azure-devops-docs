---
title: Add a user who can set up billing for Azure DevOps
titleSuffix: Azure DevOps Services
ms.custom: seodec18
description: Add a user who can set up billing for Azure DevOps.
titleSuffix: Azure DevOps
ms.custom: seodec18
ms.prod: devops
ms.technology: devops-billing
ms.assetid: bd87ec5c-84f2-4efa-bc37-a6999cb9532e
ms.topic: conceptual
ms.manager: jillfra
ms.author: chcomley
author: chcomley
ms.date: 06/06/2019
monikerRange: 'azure-devops'
---

# Add a user who can set up billing for Azure DevOps

[!INCLUDE [version-vsts-only](../../_shared/version-vsts-only.md)]

In this article, learn how to let a user [set up billing](set-up-billing-for-your-organization-vs.md) or [change billing](change-azure-subscription.md) for your organization. Go to the **Subscriptions** tab and
add [**owner**](/azure/role-based-access-control/built-in-roles#owner), [**contributor**](/azure/role-based-access-control/built-in-roles#contributor), [**service admin**](/azure/billing/billing-add-change-azure-subscription-administrator#change-the-service-administrator-for-an-azure-subscription), or [**co-admin**](/azure/billing/billing-add-change-azure-subscription-administrator#add-or-change-co-administrator) roles to users in the Azure subscription that your organization uses for Azure DevOps billing.

1. [Sign in to the Azure portal](https://portal.azure.com/) as the Azure subscription administrator.

2. Enter *subscriptions* in the search box, and then select **Subscriptions** from the drop-down menu. If more than one subscription is listed, choose the subscription to modify.

   ![Choose the subscription to modify for backup billing manager](_img/add-backup-billing-manager/choose-subscription-to-modify.png)

3. Choose **Access control (IAM)**.

   ![Choose access control, and then add](_img/add-backup-billing-manager/choose-access-control.png)

4. Choose **Add**.

   ![Add role assignment Azure portal](_img/add-backup-billing-manager/add-role-assignment.png)

5. In the drop-down menus, select the *role* to add members to and select an *assignment* type.

   ![Choose a role and assignment type](_img/add-backup-billing-manager/choose-role-and-select-an-assignment-type.png)

6. Select a user or group by entering their *name* or *email alias*. (Select a device by entering its *name*.)

   ![Select a user, group, or device by the name or email alias](_img/add-backup-billing-manager/add-permissions-select-member-choose-save.png)

7. If your update is complete, choose **Save**.

A user who can [set up](set-up-billing-for-your-organization-vs.md) or [change billing](change-azure-subscription.md) is added to your organization.

>[!Note]
>To give access to a user who's not in your directory, the user must accept the invitation that's received via email before they can access the Azure subscription.

## Related articles

* [Set up billing](set-up-billing-for-your-organization-vs.md)
* [Change the Azure subscription for billing](change-azure-subscription.md)
* [Azure DevOps pricing](https://azure.microsoft.com/pricing/details/visual-studio-team-services/)
* [Azure DevOps billing support](https://azure.microsoft.com/support/devops/)

