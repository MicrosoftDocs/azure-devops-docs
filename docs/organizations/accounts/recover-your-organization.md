---
title: Restore your organization after being deleted
description: Learn how to recover your organization and data up to 90 days after being deleted, performed with organization owner permissions
ms.prod: devops
ms.technology: devops-accounts
ms.assetid: b81adafa-adac-4e80-baa6-140fb58fbeff
ms.topic: conceptual
ms.manager: douge
ms.author: chcomley
author: chcomley
ms.date: 09/12/2018
monikerRange: 'vsts'
---

# Restore your organization in Azure DevOps

[!INCLUDE [version-vsts-only](../../_shared/version-vsts-only.md)]

After you delete your organization, it's disabled but available for 30 days. If you change your mind during this time, you can recover your organization. After 30 days, your organization and data are permanently deleted.

## Prerequisites

* An organization deleted within the last 30 days.
* Organization owner permissions to restore your organization. [How do I find the organization owner?](faq-delete-restore-organization.md#find-owner)

1. Sign in to your [Visual Studio profile](https://app.vsaex.visualstudio.com/profile/view).

   [Why am I asked to choose between my work or school account and my personal account?](faq-delete-restore-organization.md#ChooseOrgAcctMSAcct)

2. On your profile page, go to the *Organizations Pending Deletion* section at the bottom. You see a link to restore your organization.

   ![Restore your deleted organization](_img/_shared/visual-studio-profile-page.png)

3. Select **Restore**.

   * If your organization URL is still available, you can restore it.

      ![Confirm restoration of your organization](_img/_shared/organizations-pending-deletion.png)

   * If your organization URL isn't available, provide a new URL and then select **Restore**.

      ![Rename your deleted organization](_img/delete-organization/rename-deleted-organization.png)

4. After you restore your organization, do the following:

   * If billing was set up for your organization, you have to set it up again. [Relink your organization](../billing/set-up-billing-for-your-organization-vs.md) to an Azure subscription.

   * If your organization was connected to Azure Active Directory for authenticating user access, you don't have to reconnect it.

   [Need help?](faq-delete-restore-organization.md#get-support)


