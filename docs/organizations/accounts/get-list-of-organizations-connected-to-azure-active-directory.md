---
title: Get list of organizations connected to Microsoft Entra ID
titleSuffix: Azure DevOps Services
description: Learn how to download a complete list of organizations backed by or connected to Microsoft Entra ID.
ms.subservice: azure-devops-organizations
ms.assetid: 629a48b6-b2ab-4706-8256-d187c8ed5ce7
ms.topic: conceptual
ms.author: chcomley
author: chcomley
ms.date: 04/28/2020
monikerRange: 'azure-devops'
---

# Get list of organizations backed by Microsoft Entra ID

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Learn how to download a complete list of organizations backed by a Microsoft Entra tenant. 
On this list, you can find the following information:
- organization IDs
- organization names
- organization URLs
- organization owners

## Prerequisites

You must be a member of an Azure DevOps organization [connected to Microsoft Entra ID](connect-organization-to-azure-ad.md).

## Get list of organizations

Using any organization backed by your Microsoft Entra ID, complete the following steps. If you don't have access to an organization, create one by signing in to [Start.VisualStudio.com](https://start.visualstudio.com/) with your Microsoft Entra identity. You can [delete the organization](delete-your-organization.md) when you're done.

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

    ![Screenshot showing highlighted Organization settings button.](../../media/settings/open-admin-settings-vert.png)

3. Select **Microsoft Entra ID**, and then **Download**.

   :::image type="content" source="media/shared/select-azure-ad-download.png" alt-text="Select Microsoft Entra ID, and then Download":::

## Next steps

> [!div class="nextstepaction"]
> [Restrict organization creation with tenant policy](azure-ad-tenant-policy-restrict-org-creation.md)

## Related articles

* [Resolve orphaned organization](resolve-orphaned-organization.md)
* [Disconnect from Microsoft Entra ID](disconnect-organization-from-azure-ad.md)
* [Change Microsoft Entra connection](change-azure-ad-connection.md)
* [Enforce Conditional Access policies](change-application-access-policies.md)
* [Manage access with Microsoft Entra groups](./manage-azure-active-directory-groups.md)
