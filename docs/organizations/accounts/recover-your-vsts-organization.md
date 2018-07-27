---
title: Restore your VSTS organization after it has been deleted
description: Learn how to recover your organization and data up to 90 days after it has been deleted, performed with organization owner permissions
ms.prod: devops
ms.technology: devops-accounts
ms.assetid: b81adafa-adac-4e80-baa6-140fb58fbeff
ms.topic: conceptual
ms.manager: douge
ms.author: chcomley
author: chcomley
ms.date: 05/08/2018
monikerRange: 'vsts'
---
# Restore your VSTS organization

**VSTS**

Your organization will be disabled but available for 30 days after you delete it.
If you change your mind during this time, you can recover your organization.
After 30 days, your organization and data are permanently deleted.

## Prerequisites

* You need to have an organization that has been deleted within the last 30 days.
* You'll need VSTS organization owner permissions to restore your VSTS organization. [How do I find the organization owner?](faq-delete-restore-vsts-organization.md#find-owner)

1.	Sign in to your [Visual Studio profile](https://app.vsaex.visualstudio.com/profile/view).

	[Why am I asked to choose between my work or school account and my personal account?](faq-delete-restore-vsts-organization.md#ChooseOrgAcctMSAcct)

2.  Go to the "Organizations Pending Deletion" section at the bottom of your profile page. There you will see a link to restore your organization.

    ![Restore your deleted organization](_img/delete-organization/restore-organization.png)

3. Choose **Restore**.

	*	If your organization URL is still available, you can restore it.

    ![Confirm restoring your organization](_img/delete-organization/restore-confirm.png)

	*	If your organization URL isn't available, provide a new URL.

      ![Rename your deleted organization](_img/delete-organization/rename-deleted-organization.png)

4.  After you restore your organization:

    *	If billing was set up for your organization, you'll have to set it up again. Just [relink your organization](../billing/set-up-billing-for-your-organization-vs.md) to an Azure subscription.

    *   If your organization was connected to Azure AD for authenticating user access, you won't have to reconnect it again.

    [Need help?](faq-delete-restore-vsts-organization.md#get-support)


