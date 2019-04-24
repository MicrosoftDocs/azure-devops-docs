---
title: Delete or remove an organization
titleSuffix: Azure DevOps Services
ms.custom: seodec18
description: Learn how to delete your organization, and what happens to users when you do.
ms.prod: devops
ms.technology: devops-accounts
ms.assetid: 82433ad3-d665-4a11-95b7-82178f493fb5
ms.topic: conceptual
ms.manager: jillfra
ms.author: chcomley
author: chcomley
ms.date: 04/24/2019
monikerRange: 'azure-devops'
---

# Delete your organization

[!INCLUDE [version-vsts-only](../../_shared/version-vsts-only.md)]

If you no longer need your organization in Azure DevOps, you can delete it. If you change your mind within 30 days, you can [recover your organization](recover-your-vsts-organization.md).
After 30 days, your organization and data are permanently deleted.

When you delete your organization, note the following:

* All users lose access to organization services and resources immediately.

* Your organization URL becomes available for anyone to use. (It might take up to one hour before your organization URL becomes available again.)

* Your organization is disabled, and appears deleted in your profile for 30 days.

* If your organization is linked to an Azure subscription for billing purchases, you must unlink your organization before you delete your organization.

  You're still charged for any paid users and services used during this billing cycle. Billing stops after the current cycle ends.

To delete your organization, you need organization owner permissions. [How do I find the organization owner?](faq-delete-restore-organization.md#find-owner)

## Prerequisites

If your organization uses an Azure subscription to bill purchases, you must [first remove billing from your organization](../billing/change-azure-subscription.md) before you can delete your organization in Azure DevOps.

## Delete organization

To delete your organization, you need at least Basic access and organization owner
permissions. [How do I find the organization owner?](faq-delete-restore-organization.md#find-owner)

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select ![gear icon](../../_img/icons/gear-icon.png) **Organization settings**.

    ![Open Organization settings](../../_shared/_img/settings/open-admin-settings-vert.png)


3. Select **Overview** > **Delete**.

   ![Screenshot of organization settings, with Overview and Delete highlighted](_img/delete-organization/organization-overview-settings.png)

4. In the resulting dialog box, enter the name of the organization, and then select **Delete**.

   ![Screenshot of Delete Account dialog box](_img/delete-organization/delete-organization-popup.png)

5. To review your organizations, go to your [Visual Studio profile](https://app.vsaex.visualstudio.com/profile/view), where you can see your deleted organization.

   [Need help?](faq-delete-restore-organization.md#get-support)


