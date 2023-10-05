---
title: Find or lookup the organization owner 
titleSuffix: Azure DevOps
description: How-to guide to learn who is the owner of your organization   
ms.subservice: azure-devops-security
ms.custom: security-refresh
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: 'azure-devops'
ms.date: 02/7/2022
---

# Look up the organization owner

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Each organization has one and only one owner. The **Organization owner** has permissions to add users, change the access level for a user or group, manage permissions at all levels, and configure and customize all projects defined for the organization.  

To change the **Organization owner**, see [Change organization owner](../accounts/change-organization-ownership.md). 

## Prerequisites

* You must be a member of the **Project Collection Valid Users** group to look up the organization owner or view organization settings. Users added to a project are automatically added to this group. 
 

<a name="find-owner"></a>

## Look up the organization owner 

1. Choose the Azure DevOps logo :::image type="icon" source="../../media/icons/project-icon.png" border="false"::: to open **Projects**, and then choose :::image type="icon" source="../../media/icons/gear-icon.png" border="false"::: **Organization settings**. 

	![Open organization settings](../../media/open-organization-settings-preview.png)  

2. Choose **Overview** and scroll down to show the **Organization owner**.

   > [!div class="mx-imgBorder"]  
   > ![Organization settings, Organization owner](../../media/settings/organization-settings-info.png)

 
## Next steps

> [!div class="nextstepaction"]
> [Look up a project collection administrator](look-up-project-collection-administrators.md)

## Related articles

- [Request an increase in permission levels](request-changes-permissions.md)
- [Look up a project administrator](look-up-project-administrators.md)
- [Change project collection-level permissions](change-organization-collection-level-permissions.md)
- [Permissions lookup guide](permissions-lookup-guide.md)
- [Default permissions and access](permissions-access.md).
