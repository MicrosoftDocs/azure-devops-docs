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
ms.date: 10/22/2024
monikerRange: 'azure-devops'
---

# Restrict organization creation via Microsoft Entra tenant policy

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Learn how to turn on the Microsoft Entra tenant policy, which restricts users from creating an organization in Azure DevOps. This policy is turned off, by default.

## Prerequisites

| Category | Requirements |
|--------------|-------------|
|**Permissions**|[Azure DevOps Administrator in Microsoft Entra ID](/azure/active-directory/roles/permissions-reference). To check your role, sign in to the [Azure portal](https://ms.portal.azure.com/#home), and go to **Microsoft Entra ID** > **Roles and administrators**. If you're not an Azure DevOps administrator, you can't see the policies. Contact your administrator, if necessary. The Project Collection Administrator role isn't required. |

## Turn on the policy

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

    ![Screenshot showing highlighted Organization settings button.](../../media/settings/open-admin-settings-vert.png)

3. Select **Microsoft Entra ID**, and then switch the toggle to turn on the policy, restricting organization creation.

## Optional

### Create allowlist

> [!WARNING]
> We recommend using groups with your tenant policy allow list. If you use a named user, be aware that a reference to the named user's identity will reside in the United States, Europe (EU), and Southeast Asia (Singapore).

When the policy is enabled, all users are restricted from creating new organizations. To grant exceptions, add users to an allowlist. Users on the allowlist can create new organizations but can't manage the policy.

Select **Add Microsoft Entra user or group**.

### Create error message

When administrators, who aren't on the allowlist, try to create an organization they get an error. 

To customize this error message, do the following steps:

1. In the policy settings in Azure DevOps, select **Edit display message**.

2. Enter your customized message, and then select **Save**.

   ![Screenshot show Customize error message dialog.](media/azure-ad-tenant-policy/display-error-message-dialog.png)

The error message is customized.

![Customized error message](media/azure-ad-tenant-policy/error-message-example-ui.png)

> [!NOTE]
> Administrators, who aren't on the allow list, can't connect their organization to the Microsoft Entra tenant where the policy is turned on.
>
> ![Connection failed error](media/azure-ad-tenant-policy/connection-failed-notification.png)

## Related articles

* [Connect your organization to Microsoft Entra ID](connect-organization-to-azure-ad.md)
* [Learn about access with Microsoft Entra ID](access-with-azure-ad.md)
* [Get a list of organizations backed by Microsoft Entra ID](get-list-of-organizations-connected-to-azure-active-directory.md)
* [Resolve orphaned organization](resolve-orphaned-organization.md)
