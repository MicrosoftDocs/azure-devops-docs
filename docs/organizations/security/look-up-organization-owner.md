---
title: Find or look up the organization owner 
titleSuffix: Azure DevOps
description: How-to guide for finding the owner of your organization.
ms.subservice: azure-devops-security
ms.custom: security-refresh
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: 'azure-devops'
ms.date: 07/29/2024
---

# Look up the organization owner

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Each organization has a single owner who can add users, adjust access levels, manage permissions, and customize projects. You can find the owner in your organization settings.

To change the **Organization owner**, see [Change organization owner](../accounts/change-organization-ownership.md). 

## Prerequisites

* To look up the owner or view organization settings, you must be a member of the **Project Collection Valid Users** group. Users added to a project are automatically included in this group. 

<a name="find-owner"></a>

## Find the organization owner 

1. Sign in to your organization (```https://dev.azure.com/{Your_Organization}```).

   :::image type="content" source="../../media/open-organization-settings-preview.png" alt-text="Screenshot showing Organization settings button in Azure DevOps."::: 

2. Select **Overview**.

   :::image type="content" source="../accounts/media/shared/organization-settings-select-overview.png" alt-text="Screenshot showing the Overview button highlighted in Azure DevOps.":::

3. Scroll to view the **Organization owner**.

   > [!div class="mx-imgBorder"]  
   > ![Screenshot showing the Organization owner on the Overview page.](../../media/settings/organization-settings-info.png)

## Next steps

> [!div class="nextstepaction"]
> [Look up a project collection administrator](look-up-project-collection-administrators.md)

## Related articles

- [Request an increase in permission levels](request-changes-permissions.md)
- [Look up a project administrator](look-up-project-administrators.md)
- [Permissions lookup guide](permissions-lookup-guide.md)
- [About permissions, access, & security](about-permissions.md)
