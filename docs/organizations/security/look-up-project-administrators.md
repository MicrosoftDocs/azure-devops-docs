---
title: Find a project administrator
titleSuffix: Azure DevOps
description: Quickly identify members of the Project Administrators group in Azure DevOps.
ms.subservice: azure-devops-security
ms.custom: security-refresh
ms.author: chcomley
author: chcomley
ms.topic: quickstart
monikerRange: '<= azure-devops'
ms.date: 07/12/2024
--- 

# Look up a project administrator 

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

The **Project Administrators** group is the primary administrative security group for a project, with members authorized to do the following tasks:

- **Delete or rename** a project
- **Add users and teams** to a project
- **Manage Area Paths and Iteration Paths**
- **Organize shared query folders**
- **Adjust group memberships**, including adding members to the **Project Administrators** group or other project-level groups
- **Control permissions** at the project level and for project-defined objects

To add users to the **Project Administrators** group or change a project-level permission see [Change project-level permissions](change-project-level-permissions.md). 
 
## Prerequisites

You must be a member of the **Project Collection Valid Users** group to look up members of the **Project Administrators** group. Users added to a project are automatically added to this group. 

## Identify members of the Project Administrators group

Do the following steps to identify members of the **Project Administrators** group.

::: moniker range="azure-devops"
> [!NOTE]   
> To enable the **Project Permissions Settings Page** preview page, see [Enable preview features](../../project/navigation/preview-features.md).

::: moniker-end    

::: moniker range="azure-devops"

#### [Preview page](#tab/preview-page) 

1. Sign in to your project (```https://dev.azure.com/{Your_Organization}/{Your_Project}```).

2. Select **Project settings** > **Permissions**.

	![Screenshot showing Choose Project settings > Permissions.](../settings/media/shared/open-project-settings-permissions-preview.png)

3. Select **Project Administrators** > **Members**.  

	> [!div class="mx-imgBorder"]  
	> ![Screenshot showing Project Settings, Permissions page, Add member option.](media/project-collection/project-admin-members-tab-s154.png) 

4. Enter the name of the user account into the text box and then select from the match that appears. You can enter several identities recognized by the system into the **Add users and/or groups** box. The system automatically searches for matches. Select your match. 

	> [!div class="mx-imgBorder"]  
	> ![Add users and group dialog](media/project-collection/add-member-project-admin.png)  

	> [!NOTE]   
	> Users that have limited access, such as Stakeholders, won't be able to access select features even if granted permissions to those features. To learn more, see [Permissions and access](permissions-access.md).

5. Select **Save**. 

#### [Current page](#tab/current-page) 

1. Sign in to your project (```https://dev.azure.com/{Your_Organization}/{Your_Project}```).

2. Select **Project settings** > **Security**.

	[![Screenshot of Project Settings>Security selection.](media/view-permissions/open-security-project-level-vert.png)](media/view-permissions/open-security-project-level-vert-expanded.png#lightbox) 

3. Select **Project Administrators** > **Members**. 

	> [!div class="mx-imgBorder"]  
	> ![Screenshot of Project Settings>Security, Add member option.](media/project-level-permissions-add-member.png) 


The display presents a list of the Project Collection Administrators group's members.

* * *
::: moniker-end    

::: moniker range="< azure-devops"

1. Sign in to your project (```https://dev.azure.com/{Your_Organization}/{Your_Project}```).

2. Select **Project Settings** > **Security**.

	[![Screenshot shows Project Settings>Security.](media/view-permissions/open-security-project-level-vert.png)](media/view-permissions/open-security-project-level-vert-expanded.png#lightbox) 

3. Select **Members**.

	> [!div class="mx-imgBorder"]  
	> ![Web portal, Security tab, Project Administrators Group, Members tab](media/view-permissions-project-level-membership.png) 

The display presents a list of the Project Collection Administrators group's members.

::: moniker-end
 
## Next steps

> [!div class="nextstepaction"]
> [Add users to a project or team](add-users-team-project.md) 

## Related articles

- [Change project-level permissions](change-project-level-permissions.md)
- [Permissions lookup guide](permissions-lookup-guide.md)
- [Default permissions and access](permissions-access.md) 
