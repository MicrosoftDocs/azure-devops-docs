---
title: Find a project administrator
titleSuffix: Azure DevOps
description: Quickstart guide to learn who is a member of the Project Administrators group in Azure DevOps
ms.subservice: azure-devops-security
ms.custom: security-refresh
ms.author: chcomley
author: chcomley
ms.topic: quickstart
monikerRange: '<= azure-devops'
ms.date: 02/11/2022
--- 

# Look up a project administrator 

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

The **Project Administrators** group is the main administrative security group defined for a project. Members of the **Project Administrators** group have permissions to perform the following common tasks:  

- Delete and rename the project  
- Add users and teams to the project
- Add and manage **Area Paths** and **Iteration Paths** 
- Add and manage shared query folders  
- Add members and groups to the **Project Administrators** group or any other project-level group
- Manage permissions at the project-level or for any object defined for the project.  

To add members to the **Project Administrators** group or change a project-level permission see [Change project-level permissions](change-project-level-permissions.md). 

For a description of each project-level group, see [Security groups, service accounts, and permissions, Project-level groups](permissions.md#project-level-groups). To understand how security groups are used to manage permissions, see [Get started with permissions, access, and security groups](about-permissions.md).   
 
## Prerequisites

* You must be a member of the **Project Collection Valid Users** group to look up members of the **Project Administrators** group. Users added to a project are automatically added to this group. 

## Show members of the Project Administrators group

Choose the **Project Administrators** group from the **Project Settings > Permissions** page to see members.  

::: moniker range="azure-devops"

> [!NOTE]   
> To enable the **Project Permissions Settings Page** preview page, see [Enable preview features](../../project/navigation/preview-features.md).

::: moniker-end    

::: moniker range="azure-devops"

#### [Preview page](#tab/preview-page) 

1. Open the web portal and choose your project. To choose another project, see [Switch project, repository, team](../../project/navigation/go-to-project-repo.md).

2. Choose **Project settings**, and then **Permissions**.

	![Choose Project settings > Permissions](../settings/media/shared/open-project-settings-permissions-preview.png)

3. Choose **Project Administrators** group, and then **Members**.  

	> [!div class="mx-imgBorder"]  
	> ![Project Settings, Permissions page, Add member](media/project-collection/project-admin-members-tab-s154.png) 

4. Enter the name of the user account into the text box and then select from the match that appears. You can enter several identities recognized by the system into the **Add users and/or groups** box. The system automatically searches for matches. Choose the matches that meet your choices. 

	> [!div class="mx-imgBorder"]  
	> ![Add users and group dialog](media/project-collection/add-member-project-admin.png)  

	> [!NOTE]   
	> Users that have limited access, such as Stakeholders, won't be able to access select features even if granted permissions to those features. To learn more, see [Permissions and access](permissions-access.md).

5. Choose **Save**. 

#### [Current page](#tab/current-page) 

1. Open the web portal and choose your project. To choose another project, see [Switch project, repository, team](../../project/navigation/go-to-project-repo.md).

2. Choose **Project Settings**, and then **Security**.

	*To see the full image, click to expand*.

	[![Project Settings>Security](media/view-permissions/open-security-project-level-vert.png)](media/view-permissions/open-security-project-level-vert-expanded.png#lightbox) 

3. Choose **Project Administrators** group, and then the **Members** tab.  The list of members is shown.   

	> [!div class="mx-imgBorder"]  
	> ![Project Settings>Security, Add member](media/project-level-permissions-add-member.png) 

* * *

::: moniker-end    


::: moniker range=">= azure-devops-2019 < azure-devops"

1. Open the web portal and choose your project. To choose another project, see [Switch project, repository, team](../../project/navigation/go-to-project-repo.md).

2. Choose **Project Settings**, and then **Security**.

	*To see the full image, click to expand*.

	[![Project Settings>Security](media/view-permissions/open-security-project-level-vert.png)](media/view-permissions/open-security-project-level-vert-expanded.png#lightbox) 

3. Choose the **Members** tab. The list of members is shown. 

	> [!div class="mx-imgBorder"]  
	> ![Web portal, Security tab, Project Administrators Group, Members tab](media/view-permissions-project-level-membership.png) 

::: moniker-end  


::: moniker range="tfs-2018"  

1. Open the web portal and choose your project. To choose another project, see [Switch project, repository, team](../../project/navigation/go-to-project-repo.md).  

2. Choose the :::image type="icon" source="../../media/icons/gear-icon.png" border="false"::: gear icon to open **Project Settings**.

   ![Open Project Settings, horizontal nav](../../media/settings/open-project-settings-horz.png)  

3. Choose the **Security** page, **Project Administrators** group, and then the **Members** tab.  

	The list of members is shown. 

	> [!div class="mx-imgBorder"]  
	> ![Web portal, Security tab, Project Administrators Group, Members tab](media/view-permissions-project-level-membership.png) 

::: moniker-end

 
## Next steps

> [!div class="nextstepaction"]
> [Add users to a project or team](add-users-team-project.md) 

## Related articles

- [Change project-level permissions](change-project-level-permissions.md)
- [Permissions lookup guide](permissions-lookup-guide.md)
- [Default permissions and access](permissions-access.md) 
