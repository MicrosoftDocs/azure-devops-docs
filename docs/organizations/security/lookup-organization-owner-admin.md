---
title: Find an admin or organization owner 
titleSuffix: Azure DevOps
description: Steps for how to look up users who can help you gain access or change your permissions, project collection admin or project owner 
ms.prod: devops
ms.technology: devops-security
ms.assetid: 
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: quickstart
monikerRange: '>= tfs-2013'
ms.date: 09/18/2019
---



# Look up administrators or an organization owner 

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

When you need to have your permissions changed or you need to get access to select features or functions, you may need to find out who can grant them. Usually it is an administrator or the account owner.

For an overview of built-in security groups and default permission assignments, see [Default permissions and access](permissions-access.md).

## Prerequisites

* You must have a project. If you don't have a project yet, [create one](../projects/create-project.md).  
* You must be a member of the Project Valid Users Group or Project Collection Valid Users Group to view permissions. Users added to a project are automatically added to these security groups. 

## Show members of the Project Administrators group

If you aren't a Project Administrator, and you need to be, find someone who is, and have them add you. You can find who is a member of the Project Administrators group by choosing that group from the **Project Settings>Security** page and seeing who are members. 

::: moniker range="azure-devops"

> [!NOTE]   
> To enable the new user interface for the Project Permissions Settings Page, see [Enable preview features](../../project/navigation/preview-features.md).

#### [Preview page](#tab/preview-page) 

1. Open the web portal and choose the project where you want to look up members of a Project Administrators group or any other project security group. To choose another project, see [Switch project, repository, team](../../project/navigation/go-to-project-repo.md).

2. Choose **Project Settings** and then **Permissions**.

	> [!div class="mx-imgBorder"]  
	> ![Project groups](_img/permissions/project-permisions-s154.png)

1. Choose **Project Administrators** group, and then **Members**.  

	> [!div class="mx-imgBorder"]  
	> ![Project Settings>Security, Add member](_img/project-collection/project-admin-members-tab-s154.png) 

1. Enter the name of the user account into the text box and then select from the match that appears. You can enter several identities recognized by the system into the **Add users and/or groups** box. The system automatically searches for matches. Choose the matches that meet your choices. 

	> [!div class="mx-imgBorder"]  
	> ![Add users and group dialog](_img/project-collection/add-member-project-admin.png)  

	> [!NOTE]   
	> Users that have limited access, such as Stakeholders, won't be able to access select features even if granted permissions to those features. To learn more, see [Permissions and access](permissions-access.md).

1. Choose **Save**. 

#### [Current page](#tab/current-page) 

1. Open the web portal and choose the project where you want to look up members of a Project Administrators group or any other project security group. To choose another project, see [Switch project, repository, team](../../project/navigation/go-to-project-repo.md).

2. Choose **Project Settings** and then **Security**.

	*To see the full image, click to expand*.

	[![Project Settings>Security](_img/view-permissions/open-security-project-level-vert.png)](_img/view-permissions/open-security-project-level-vert-expanded.png#lightbox) 

1. Choose **Project Administrators** group, and then the **Members** tab.  The list of members is shown.   

	> [!div class="mx-imgBorder"]  
	> ![Project Settings>Security, Add member](_img/project-level-permissions-add-member.png) 

* * *

::: moniker-end    


::: moniker range="azure-devops-2019"

1. Open the web portal and choose the project where you want to look up members of a Project Administrators group or any other project security group. To choose another project, see [Switch project, repository, team](../../project/navigation/go-to-project-repo.md).

2. Choose **Project Settings** and then **Security**.

	*To see the full image, click to expand*.

	[![Project Settings>Security](_img/view-permissions/open-security-project-level-vert.png)](_img/view-permissions/open-security-project-level-vert-expanded.png#lightbox) 

1. Choose the **Members** tab. The list of members is shown. 

	> [!div class="mx-imgBorder"]  
	> ![Web portal, Security tab, Project Administrators Group, Members tab](_img/view-permissions-project-level-membership.png) 

::: moniker-end  


::: moniker range="<= tfs-2018"  

1. Open the web portal and choose the project where you want to look up members of a Project Administrators group or any other project security group. To choose another project, see [Switch project, repository, team](../../project/navigation/go-to-project-repo.md).  

1. Choose the ![ ](../../_img/icons/gear-icon.png) gear icon to open **Project Settings**.

   ![Open Project Settings, horizontal nav](../../_shared/_img/settings/open-project-settings-horz.png)  

2. Choose the **Security** page, **Project Administrators** group, and then the **Members** tab.  

	The list of members is shown. 

	> [!div class="mx-imgBorder"]  
	> ![Web portal, Security tab, Project Administrators Group, Members tab](_img/view-permissions-project-level-membership.png) 

::: moniker-end


## Show members of the Project Collection Administrators group

If you need elevated permissions, you'll have to request them from a member of the [Project Collection Administrators group](set-project-collection-level-permissions.md). Project collection administrators manage features and functions that impact all projects. 


::: moniker range="azure-devops"

To find out who is a member of the Project Collection Administrators group, check the **Permissions** settings at the collection level. 

> [!NOTE]   
> To enable the new user interface for the **Organization Permissions Settings Page v2**, see [Enable preview features](../../project/navigation/preview-features.md). The preview page provides a group settings page that the current page does not. 

1. Choose the ![ ](/azure/devops/_img/icons/project-icon.png) Azure DevOps logo to open **Projects**. Then choose ![gear icon](../../_img/icons/gear-icon.png) **Organization settings**.  

	> [!div class="mx-imgBorder"]  
	> ![Open Organization settings](/azure/devops/_shared/_img/settings/open-admin-settings-vert.png)  

1. Choose **Permissions** under the **Security** group, then **Project Collection Administrators** group, and then the **Members** tab. 

	> [!div class="mx-imgBorder"]  
	> ![Security, Project Collection Administrators group, Members tab](_img/project-collection/project-collection-admins-members-tab-s157.png)  

::: moniker-end   



::: moniker range="azure-devops-2019"

To find out who is a member, check the **Security** settings at the collection level. 

1. Choose the ![ ](/azure/devops/_img/icons/project-icon.png) Azure DevOps logo to open **Projects**. Then choose **Admin settings**. 

	> [!div class="mx-imgBorder"]  
	> ![Open Organization settings](/azure/devops/_shared/_img/settings/open-admin-settings-server.png)  

1. Choose **Security**, the **Project Collection Administrators** group, and then **Members**. 

	> [!div class="mx-imgBorder"]  
	> ![Security, Project Collection Administrators group, Members tab](_img/view-permissions/collection-admins-vert.png)  

::: moniker-end  

::: moniker range="<= tfs-2018"

1. Choose the ![ ](/azure/devops/_img/icons/gear_icon.png) settings icon and choose **Collection settings**.

	> [!div class="mx-imgBorder"]  
	> ![Open Organization Settings](/azure/devops/_shared/_img/settings/open-account-settings.png)  

1. Choose **Security**, **Project Collection Administrators** group, and then **Members**. 

   ![Security, Project Collection Administrators group, Members tab](_img/view-permissions/collection-admins.png)

::: moniker-end


::: moniker range="azure-devops"

<a name="find-owner"></a>

## Show who is the organization owner 

1. Choose the ![ ](/azure/devops/_img/icons/project-icon.png) Azure DevOps logo to open **Projects**. Then choose ![gear icon](../../_img/icons/gear-icon.png) **Organization settings**. 

	> [!div class="mx-imgBorder"]  
	> ![Open Organization settings](/azure/devops/_shared/_img/settings/open-admin-settings-vert.png)  

1. Choose **Overview** and scroll down to show the **Organization owner**.

   > [!div class="mx-imgBorder"]  
   > ![Organization settings, Organization owner](../../_shared/_img/settings/organization-settings-info.png)

   To change the owner, see [Change organization owner](../accounts/change-organization-ownership.md). 

::: moniker-end

## Try this next

> [!div class="nextstepaction"]
> [Add users to a project or team](add-users-team-project.md) 



