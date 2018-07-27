---
title: Delete your VSTS organization
description: How to delete your Visual Studio Team Services organization and what happens to users
ms.prod: devops
ms.technology: devops-accounts
ms.assetid: 82433ad3-d665-4a11-95b7-82178f493fb5
ms.topic: conceptual
ms.manager: douge
ms.author: chcomley
author: chcomley
ms.date: 07/17/2018
monikerRange: 'vsts'
---

# Delete your VSTS organization

**VSTS**

If you don't need your  VSTS organization, you can delete it.
If you change your mind within 30 days,
you can [recover your organization](recover-your-vsts-organization.md).
After 30 days, your organization and data are permanently deleted.

When you delete your VSTS organization:

* All users lose access to organization services and resources immediately.

* Your organization URL becomes available for anyone to use. But it might take up to 1 hour before your organization URL becomes available again.

* Your organization is disabled and appears deleted in your profile for 30 days.

* If your organization is linked to an Azure subscription for billing purchases, you must unlink your organization before you delete your organization.

  You're still charged for any paid users and
  VSTS that your organization uses during this billing cycle.
  Billing will stop after the current cycle ends.

To delete your VSTS organization, you'll need VSTS organization owner permissions. [How do I find the organization owner?](faq-delete-restore-vsts-organization.md#find-owner)

## Before you delete your VSTS organization

If your VSTS organization uses an Azure subscription to bill purchases, you must first unlink your organization from your Azure subscription before deleting your organization.

To unlink your organization, you'll need VSTS organization owner permissions and at least Azure subscription Co-Administrator permissions. [How do I find the organization owner?](faq-delete-restore-vsts-organization.md#find-owner) Or learn more about [Azure subscription administrators](https://azure.microsoft.com/en-us/documentation/articles/billing-add-change-azure-subscription-administrator/).

1. Sign in to the [Azure portal](https://portal.azure.com).

2. Enter *team services organizations* in the search box and then choose **Team Services organizations** in the resulting menu.
3. Choose the organization you will be deleting.
4. Choose **Unlink**.
  Your VSTS organization is unlinked from your Azure subscription.

**Azure portal**

  ![Unlink your organization from an Azure subscription](_img/delete-organization/app_unlinkvsoorganization2.png)

  [Need help?](faq-delete-restore-vsts-organization.md#get-support)

## Delete your organization

You'll need at least Basic access and VSTS organization owner
permissions to delete your VSTS organization.
[How do I find the organization owner?](faq-delete-restore-vsts-organization.md#find-owner)

# [New navigation](#tab/new-nav)

1. Sign in to your VSTS organization (```https://{yourorganization}.visualstudio.com```).
2. Highlight the organization that you want to delete and then choose ![gear icon](../../_img/icons/gear-icon.png), **Admin settings**.

   ![Choose Admin settings](../../_shared/_img/settings/open-admin-settings-vert.png)

3. Choose **Overview** and then **Delete**.

   ![Choose Overview, and then Delete](_img/delete-vsts-organization/organization-overview-settings.png)

4. In the resulting popup, choose your reason for deleting the organization from the dropdown menu, enter the name of your organization, and then choose **Delete**.

   ![Select reason for deletion, and then select delete](_img/delete-vsts-organization/delete-organization-popup.png)

5. To review your organizations, go to your [Visual Studio profile](https://app.vsaex.visualstudio.com/profile/view) where you'll see your deleted organization.

   [Need help?](faq-delete-restore-vsts-organization.md#get-support)
---
# [Previous navigation](#tab/previous-nav)

1. Sign in to your VSTS organization (```https://{yourorganization}.visualstudio.com```).

2. Choose ![gear icon](../../_img/icons/gear-icon.png), the  admin settings icon.

   ![Open admin settings](../../_shared/_img/settings/open-admin-settings-horz-browser.png)

3. Choose **Delete **.

   ![Choose Delete](_img/delete-vsts-organization/organization-settings-delete.png)

4. To review your organizations, go to your [Visual Studio profile](https://app.vsaex.visualstudio.com/profile/view) where you'll see your deleted organization.

  [Need help?](faq-delete-restore-vsts-organization.md#get-support)

---
