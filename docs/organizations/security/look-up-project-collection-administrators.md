---
title: Look up a project collection administrator 
titleSuffix: Azure DevOps
description: Learn how identify members of the Project Collection Administrators group in Azure DevOps.
ms.subservice: azure-devops-security
ms.custom: security-refresh
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 07/12/2024
---

# Look up a project collection administrator 

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

The **Project Collection Administrators** group is a pivotal security group within an organization or collection, with members empowered to do the following tasks:
::: moniker range="azure-devops" 
- **Add users** to a collection
- **Create and manage projects** within an organization or collection
- **Define and oversee Inherited processes** for a collection
- **Install and uninstall extensions**
- **Modify group memberships**, including adding members to the Project Collection Administrators group or other project-level groups
- **Manage permissions** across all levels
::: moniker-end
::: moniker range="< azure-devops"  
- **Add users** to a collection
- **Create and manage projects** within an organization or collection
- **Create and manage Inherited processes** defined for a collection
- **Import and export On-premises XML process templates** to a collection
- **Install and uninstall extensions**
- **Add members and groups to the Project Collection Administrators group** or any other project-level group
- **Manage permissions** across all levels
::: moniker-end

To add members to the **Project Collection Administrators** group or change a project collection-level permission see [Change project collection-level permissions](change-organization-collection-level-permissions.md). 

For more information, see [Get started with permissions and security groups](about-permissions.md).

## Prerequisites

You must be a member of the **Project Collection Valid Users** group to look up members of the **Project Collection Administrators** group. Users added to a project are automatically added to this group. 
 
::: moniker range="azure-devops"  
> [!NOTE]  
> Users added to the **Project-Scoped Users** group can't access **Organization settings** other than the **Overview** section if the [**Limit user visibility and collaboration to specific projects** preview feature is enabled](../../user-guide/manage-organization-collection.md#project-scoped-user-group) for the organization.

::: moniker-end  
 
## Show members of the Project Collection Administrators group

::: moniker range="azure-devops"

To identify members of the **Project Collection Administrators** group, do the following steps. 

> [!NOTE]   
> To enable the **Organization Permissions Settings Page v2** preview page, see [Enable preview features](../../project/navigation/preview-features.md). The preview page provides a group settings page that the current page doesn't. 

1. Select the :::image type="icon" source="../../media/icons/project-icon.png" border="false"::: Azure DevOps logo to open your projects, and then select :::image type="icon" source="../../media/icons/gear-icon.png" border="false"::: **Organization settings**.  

	![Screenshot showing Opening Organization settings.](../../media/open-organization-settings-preview.png)

2. Select **Permissions** > **Project Collection Administrators** > **Members**. 

	> [!div class="mx-imgBorder"]  
	> ![Screenshot of Security, Project Collection Administrators group, Members tab.](media/project-collection/project-collection-admins-members-tab-s157.png)  

::: moniker-end   

::: moniker range="< azure-devops"

To identify members, do the following steps. 

1. Select the :::image type="icon" source="../../media/icons/project-icon.png" border="false"::: Azure DevOps logo to open **Projects**, and then select **Organization settings**. 

   ![Screenshot of opening Organization settings.](../../pipelines/agents/media/agent-pools-tab/organization-settings.png)

2. Select **Security** > **Project Collection Administrators** > **Members**. 

	> [!div class="mx-imgBorder"]  
	> ![Screenshot of Security, Project Collection Administrators group, Members tab.](media/view-permissions/collection-admins-vert.png)  

::: moniker-end  

The display shows a list of users who are part of the **Project Collection Administrators** group.

## Next steps

> [!div class="nextstepaction"]
> [Look up a project administrator](look-up-project-administrators.md)

## Related articles

- [Change project collection-level permissions](change-organization-collection-level-permissions.md)
- [Permissions lookup guide](permissions-lookup-guide.md)
- [Default permissions and access](permissions-access.md)
- [Get started with permissions, access, and security groups](about-permissions.md)
- [Look up the organization owner](look-up-organization-owner.md)
