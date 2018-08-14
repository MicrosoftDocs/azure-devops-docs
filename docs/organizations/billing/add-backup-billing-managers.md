---
title: Add a user who can purchase for your Azure DevOps Services organization
description: Add a backup user or other billing manager who can buy via Visual Studio Marketplace for your Azure DevOps Services organization
ms.prod: devops
ms.technology: devops-billing
ms.assetid: bd87ec5c-84f2-4efa-bc37-a6999cb9532e
ms.topic: conceptual
ms.manager: douge
ms.author: chcomley
author: chcomley
ms.date: 04/18/2018
monikerRange: 'vsts'
---

# Add a user to make purchases for your Azure DevOps Services organization

[!INCLUDE [version-vsts-only](../../_shared/version-vsts-only.md)]

To let a user manage billing or make purchases through Visual Studio Marketplace for your Azure DevOps Services organization,
add [**owner**](https://docs.microsoft.com/azure/role-based-access-control/built-in-roles#owner), [**contributor**](https://docs.microsoft.com/azure/role-based-access-control/built-in-roles#contributor), [**service admin**](https://docs.microsoft.com/azure/billing/billing-add-change-azure-subscription-administrator#change-the-service-administrator-for-an-azure-subscription), or [**co-admin**](https://docs.microsoft.com/azure/billing/billing-add-change-azure-subscription-administrator#add-or-change-co-administrator) roles to users in the Azure subscription that's linked to your Azure DevOps Services organization.

1. [Sign in to the Azure portal](https://portal.azure.com/) as the Azure subscription administrator.

1. Enter *subscriptions* in the search box, and then select **Subscriptions** from the drop-down menu. If more than one subscription is listed, choose the subscription to modify.

   ![Choose the subscription to modify for backup billing manager](_img/add-backup-billing-manager/choose-subscription-to-modify.png)

1. Choose **Access control (IAM)** and then select **Add**.

   ![Choose access control and then add](_img/add-backup-billing-manager/choose-access-control-and-then-add.png)

1. In the drop-down menus, select the *role* to add members to and select an *assignment* type.

   ![Choose a role and assignment type](_img/add-backup-billing-manager/choose-role-and-select-an-assignment-type.png)

1. Select a user or group by entering their *name* or *email alias*. (Select a device by entering its *name*.)

   ![Select a user, group, or device by the name or email alias](_img/add-backup-billing-manager/add-permissions-select-member-choose-save.png)

1. If your update is complete, choose **Save**.

A backup billing manager is added to your Azure DevOps Services organization.

>[!Note]
>To give access to a user who's not in your directory, the user must accept the invitation that's received via email before they can access the Azure subscription.

## Related articles

* [Set up billing](set-up-billing-for-your-organization-vs.md)
* [Change the Azure subscription for billing](change-azure-subscription.md)
* [Azure DevOps Services pricing](https://azure.microsoft.com/pricing/details/visual-studio-team-services/)
* [Azure DevOps Services billing support](https://visualstudio.microsoft.com/team-services/support/)