---
title: Look Up Project Collection Administrator 
titleSuffix: Azure DevOps
description: Learn how to identify members of the Project Collection Administrators group in Azure DevOps.
ms.subservice: azure-devops-security
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 08/12/2025
ms.custom: security-refresh, sfi-image-nochange
---

# Look up a project collection administrator

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

The **Project Collection Administrators** group is a pivotal security group within an organization or collection, with members empowered to do the following tasks:
::: moniker range="azure-devops" 
- **Add users** to a collection
- **Create and manage projects** within an organization or collection
- **Define and oversee inherited processes** for a collection
- **Install and uninstall extensions**
- **Modify group memberships**, including adding members to the **Project Collection Administrators** group or other project-level groups
- **Manage permissions** across all levels
::: moniker-end
::: moniker range="< azure-devops"  
- **Add users** to a collection
- **Create and manage projects** within an organization or collection
- **Create and manage Inherited processes** defined for a collection
- **Import and export on-premises XML process templates** to a collection
- **Install and uninstall extensions**
- **Add members and groups to the Project Collection Administrators group** or any other project-level group
- **Manage permissions** across all levels
::: moniker-end

Organization owners are automatically members of this group. To add members to the **Project Collection Administrators** group or change a project collection-level permission, see [Change permissions at the organization or collection-level](change-organization-collection-level-permissions.md).

For more information, see [About permissions and security groups](about-permissions.md).

## Prerequisites

[!INCLUDE [prerequisites-project-collection-valid-users-group](../../includes/prerequisites-project-collection-valid-users-group.md)]

## Show members of the Project Collection Administrators group

::: moniker range="azure-devops"

To identify members of the **Project Collection Administrators** group, follow these steps.

1. Select the :::image type="icon" source="../../media/icons/project-icon.png" border="false"::: Azure DevOps logo to open your projects, and then select :::image type="icon" source="../../media/icons/gear-icon.png" border="false"::: **Organization settings**.

   :::image type="content" source="../../media/open-organization-settings-preview.png" alt-text="Screenshot showing Opening Organization settings.":::

1. Select **Permissions** > **Project Collection Administrators** > **Members**.

   :::image type="content" source="media/project-collection/project-collection-admins-members-tab-s157.png" alt-text="Screenshot of Security, Project Collection Administrators group, Members tab.":::

::: moniker-end

::: moniker range="< azure-devops"

To identify members, follow these steps.

1. Select the :::image type="icon" source="../../media/icons/project-icon.png" border="false"::: Azure DevOps logo to open **Projects**, and then select **Organization settings**.

   :::image type="content" source="../../pipelines/agents/media/agent-pools-tab/organization-settings.png" alt-text="Screenshot of opening Organization settings.":::

1. Select **Security** > **Project Collection Administrators** > **Members**. 

   :::image type="content" source="media/view-permissions/collection-admins-vert.png" alt-text="Screenshot of Security, Project Collection Administrators group, Members tab.":::

::: moniker-end  

The display shows a list of users who are part of the **Project Collection Administrators** group.

## Next step

> [!div class="nextstepaction"]
> [Look up a project administrator](look-up-project-administrators.md)

## Related content

- [Change project collection-level permissions](change-organization-collection-level-permissions.md)
- [Permissions lookup guide](permissions-lookup-guide.md)
- [Default permissions and access](permissions-access.md)
- [Get started with permissions, access, and security groups](about-permissions.md)
- [Look up the organization owner](look-up-organization-owner.md)
