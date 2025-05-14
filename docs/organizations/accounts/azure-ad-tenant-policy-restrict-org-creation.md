---
title: Restrict new organization creation
titleSuffix: Azure DevOps Services
ms.custom: 
description: Learn how Azure DevOps Administrators can prevent users from creating new organizations via the Microsoft Entra tenant policy.
ms.subservice: azure-devops-organizations
ms.assetid: 
ms.topic: conceptual
ms.author: chcomley
author: chcomley
ms.date: 04/23/2025
monikerRange: 'azure-devops'
---

# Restrict organization creation

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Learn how to turn on the Microsoft Entra tenant policy, which restricts users from creating an organization in Azure DevOps. This policy is turned off, by default.

## Prerequisites

| Category | Requirements |
|--------------|-------------|
|**Permissions**|[Azure DevOps Administrator](../security/look-up-azure-devops-administrator.md). |

## Turn on the policy

To turn on the policy that restricts users from creating new organizations, do the following steps:

1. Sign in to your organization (```https://dev.azure.com/{Your_Organization}```).

2. Select ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

    ![Screenshot showing highlighted Organization settings button.](../../media/settings/open-admin-settings-vert.png)

3. Select **Microsoft Entra ID**, and then switch the toggle to turn on the policy, restricting organization creation.

   :::image type="content" source="media/azure-ad-tenant-policy/restrict-organization-creation-toggle.png" alt-text="Screenshot shows highlighted toggle for Restrict organization creation.":::

## Optional

### Create allowlist

> [!WARNING]
> We recommend using groups with your tenant policy allowlist. If you use a named user, a reference to the named user's identity resides in the United States, Europe (EU), and Southeast Asia (Singapore).

When the policy is enabled, only users in the allowlist and users assigned to the Azure DevOps **Administrator** role can create new organizations. To grant exceptions, add users to an allowlist. Users on the allowlist can create new organizations but can't manage the policy.

Select **Add Microsoft Entra user or group**.

For more information, see [Add organization users and manage access](add-organization-users.md).

### Create error message

To customize the error message, do the following steps:

1. In the policy settings in Azure DevOps, select **Edit display message**.

2. Enter your customized message, and then select **Save**.

   ![Screenshot shows Customize error message dialog.](media/azure-ad-tenant-policy/display-error-message-dialog.png)

The error message is customized.

![Screenshot shows customized error message.](media/azure-ad-tenant-policy/error-message-example-ui.png)

## Related articles

* [Connect your organization to Microsoft Entra ID](connect-organization-to-azure-ad.md)
* [Learn about access with Microsoft Entra ID](access-with-azure-ad.md)
* [Get a list of organizations backed by Microsoft Entra ID](get-list-of-organizations-connected-to-azure-active-directory.md)
* [Resolve orphaned organization](resolve-orphaned-organization.md)
