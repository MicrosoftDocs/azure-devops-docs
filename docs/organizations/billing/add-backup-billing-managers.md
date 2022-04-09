---
title: Add a user who can set up billing for Azure DevOps
titleSuffix: Azure DevOps Services
description: Add a user who can set up and change billing for Azure DevOps.
ms.custom: seodec18, freshness-fy22
ms.technology: devops-billing
ms.assetid: bd87ec5c-84f2-4efa-bc37-a6999cb9532e
ms.topic: conceptual
ms.author: chcomley
author: chcomley
ms.date: 01/25/2022
monikerRange: 'azure-devops'
---

# Add a user to manage billing

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Learn how to give another user access, so they can [set up billing](set-up-billing-for-your-organization-vs.md) or [change billing](change-azure-subscription.md) for your Azure DevOps organization. 

You can add any of the following roles to a user within the Azure subscription your organization uses for billing:

- [Owner](/azure/role-based-access-control/built-in-roles#owner)
- [Contributor](/azure/role-based-access-control/built-in-roles#contributor)
- [Service admin](/azure/billing/billing-add-change-azure-subscription-administrator)
- [Co-admin](/azure/billing/billing-add-change-azure-subscription-administrator)

For more information about these roles, see [Azure roles](/azure/role-based-access-control/rbac-and-directory-admin-roles).

[!INCLUDE [pricing-calculator-tip](../../includes/pricing-calculator-tip.md)]

## Prerequisites

- You must be the [Azure Account Administrator](/azure/cost-management-billing/manage/add-change-subscription-administrator) to give another user access to manage billing.

## Give a user access to manage billing

1. [Sign in to the Azure portal](https://portal.azure.com/) as the Azure Account Administrator.

2. Enter *subscriptions* in the search box, and then select **Subscriptions** from the drop-down menu. If more than one subscription is listed, choose the subscription to modify.

   ![Choose the subscription to modify for backup billing manager](media/add-backup-billing-manager/choose-subscription-to-modify.png)

3. Select **Access control (IAM)**.

   ![Choose access control, and then add](media/add-backup-billing-manager/choose-access-control.png)

4. Choose **Add**.

   ![Add role assignment Azure portal](media/add-backup-billing-manager/add-role-assignment.png)

5. Select the user's *role* and *assignment* type from the dropdown menus.

   ![Choose a role and assignment type](media/add-backup-billing-manager/choose-role-and-select-an-assignment-type.png)

6. Select a user or group by entering their *name* or *email alias*. (Select a device by entering its *name*.)

   ![Select a user, group, or device by the name or email alias](media/add-backup-billing-manager/add-permissions-select-member-choose-save.png)

7. Choose **Save**, once you're done with your update.

Now you have a user who can [set up](set-up-billing-for-your-organization-vs.md) or [change billing](change-azure-subscription.md) for your organization.

> [!Note]
> To give access to a user who's not in your directory, the user must accept the email invitation before they can access the Azure subscription.

## Next steps

> [!div class="nextstepaction"]
> [What is Azure Cost Management + Billing?](/azure/cost-management-billing/cost-management-billing-overview)

## Related articles

* [Set up billing](set-up-billing-for-your-organization-vs.md)
* [Change your Azure subscription for billing](change-azure-subscription.md)
* [Learn about Azure DevOps pricing](https://azure.microsoft.com/pricing/details/visual-studio-team-services/)
* [Get Azure DevOps billing support](https://azure.microsoft.com/support/devops/)

