---
title: Restrict new organization creation, Microsoft Entra tenant policy
titleSuffix: Azure DevOps Services
ms.custom: 
description: Learn how Azure DevOps Administrators can prevent users from creating new organizations via the Microsoft Entra tenant policy.
ms.subservice: azure-devops-organizations
ms.assetid: 
ms.topic: conceptual
ms.author: chcomley
author: chcomley
ms.date: 05/13/2022
monikerRange: 'azure-devops'
---

# Restrict organization creation via Microsoft Entra tenant policy

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Learn how to turn on the Microsoft Entra tenant policy, which restricts users from creating an organization in Azure DevOps. This policy is turned off, by default.

## Prerequisites

You must be an Azure DevOps Administrator in Microsoft Entra ID to manage this policy. It isn't a requirement to be a Project Collection Administrator.

If you don't see the policy section in Azure DevOps, then you aren't an administrator. To check your role, sign in to the [Azure portal](https://ms.portal.azure.com/#home), and then choose **Microsoft Entra ID > Roles and administrators**. In case that you aren't an Azure DevOps administrator, talk to your administrator.

![Check Microsoft Entra roles and administrators](media/azure-ad-tenant-policy/azure-ad-roles-and-administrators.png)

## Turn on the policy

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

    ![Screenshot showing highlighted Organization settings button.](../../media/settings/open-admin-settings-vert.png)
3. Select **Microsoft Entra ID**, and then switch the toggle to turn on the policy, restricting organization creation.

## Optional

### Create allowlist

> [!WARNING]
> We recommend using groups with your tenant policy allow list(s). If you use a named user, be aware that a reference to the named user's identity will reside in the United States, Europe (EU), and Southeast Asia (Singapore).

With the policy turned on, all users are restricted from creating new organizations. Grant an exception to users with an allowlist. Users on the allowlist can create new organizations, but they can't manage the policy.

Select **Add Microsoft Entra user or group**.

### Create error message

When administrators, who aren't on the allowlist, try to create an organization they get an error similar to the following example. 
 
![Error message example](media/azure-ad-tenant-policy/error-message.png)

Customize this error message in the policy settings in Azure DevOps.

1. Select **Edit display message**.

2. Enter your customized message, and then choose **Save**.

   ![Customize error message dialog](media/azure-ad-tenant-policy/display-error-message-dialog.png)

The error message is customized.

![Customized error message](media/azure-ad-tenant-policy/error-message-example-ui.png)

> [!NOTE]
> Administrators, who aren't on the allow list, can't connect their organization to the Microsoft Entra tenant where the policy is turned on.
>
> ![Connection failed error](media/azure-ad-tenant-policy/connection-failed-notification.png)

## Related articles

* [Connect your organization to Microsoft Entra ID](connect-organization-to-azure-ad.md)
* [About access with Microsoft Entra ID](access-with-azure-ad.md)
* [Get a list of organizations backed by Microsoft Entra ID](get-list-of-organizations-connected-to-azure-active-directory.md)
* [Resolve orphaned organization](resolve-orphaned-organization.md)
