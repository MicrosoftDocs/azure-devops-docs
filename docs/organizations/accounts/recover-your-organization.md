---
title: Restore organization after it's removed, deleted
titleSuffix: Azure DevOps Services
ms.custom: seodec18
description: Learn how to recover your organization and data up to 90 days after being deleted, done with organization Owner permissions.
ms.technology: devops-accounts
ms.assetid: b81adafa-adac-4e80-baa6-140fb58fbeff
ms.topic: conceptual
ms.author: chcomley
author: chcomley
ms.date: 04/16/2020
monikerRange: 'azure-devops'
---

# Recover your deleted organization in Azure DevOps

[!INCLUDE [version-vsts-only](../../includes/version-vsts-only.md)]

After you delete your organization, it's disabled but available for 28 days. If you change your mind during this time, you can recover your organization. After 28 days, your organization and data are permanently deleted.

## Prerequisites

* An organization deleted within the last 28 days.
* Organization Owner permissions to restore your organization. [How do I find the organization Owner?](../security/lookup-organization-owner-admin.md)

## Recover organization

1. Sign in to your [Visual Studio profile](https://app.vsaex.visualstudio.com/profile/view).

   [Why am I asked to choose between my work or school account and my personal account?](faq-user-and-permissions-management.yml#ChooseOrgAcctMSAcct)

2. On your profile page, go to the lower *Organizations Pending Deletion* section, and then select **Restore**.

   ![Restore your deleted organization](media/shared/visual-studio-profile-page.png)

3. In the resulting popup, select **Restore** to confirm.

   * If your organization URL is still available, you can restore it.

      ![Confirm restoration of your organization](media/recover-your-organization/confirm-restore-organization.png)

   * If your organization URL isn't available, provide a new URL, and then select **Restore**.

4. After you restore your organization, do the following tasks:

   * If billing was previously set up for your organization, you have to set it up again. [Relink your organization](../billing/set-up-billing-for-your-organization-vs.md) to an Azure subscription.
   * If your organization was connected to Azure Active Directory for authenticating user access, you don't have to reconnect it.

## Related articles

* [Delete your organization from Azure DevOps](delete-your-organization.md)
* [Create a new organization](create-organization.md)
* [Change organization owner](change-organization-ownership.md)
* [Change organization data region](change-organization-location.md)
