---
title: Find an admin or organization owner 
titleSuffix: Azure DevOps
description: Steps for how to look up users who can help you gain access or change your permissions, project collection admin, or project owner 
ms.technology: devops-security
ms.assetid: 
ms.author: kaelli
author: KathrynEE
ms.topic: quickstart
monikerRange: '>= tfs-2013'
ms.date: 07/27/2020
---

# Look up administrators or an organization owner 

[!INCLUDE [version-all](../../includes/version-all.md)]

An administrator or organization Owner can give you access to select features or functions, or change your permissions. In this article, learn how to look up administrators or organization Owners.

For an overview of built-in security groups and default permission assignments, see [Default permissions and access](permissions-access.md).

## Prerequisites

* You must have a project. If you don't have a project yet, [create one](../projects/create-project.md).  
* You must be a member of the Project Valid Users Group or Project Collection Valid Users Group to view permissions. Users added to a project are automatically added to these security groups. 

## Show members of the Project Administrators group

Choose the Project Administrators group from the **Project Settings > Permissions** page to see members. If you want to be a Project Administrator, have your current administrator add you. 

::: moniker range="azure-devops"

> [!NOTE]   
> To enable the new user interface for the Project Permissions Settings Page, see [Enable preview features](../../project/navigation/preview-features.md).

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


::: moniker range="azure-devops-2019 || azure-devops-2020"

1. Open the web portal and choose your project. To choose another project, see [Switch project, repository, team](../../project/navigation/go-to-project-repo.md).

2. Choose **Project Settings**, and then **Security**.

	*To see the full image, click to expand*.

	[![Project Settings>Security](media/view-permissions/open-security-project-level-vert.png)](media/view-permissions/open-security-project-level-vert-expanded.png#lightbox) 

3. Choose the **Members** tab. The list of members is shown. 

	> [!div class="mx-imgBorder"]  
	> ![Web portal, Security tab, Project Administrators Group, Members tab](media/view-permissions-project-level-membership.png) 

::: moniker-end  


::: moniker range="<= tfs-2018"  

1. Open the web portal and choose your project. To choose another project, see [Switch project, repository, team](../../project/navigation/go-to-project-repo.md).  

2. Choose the ![ ](../../media/icons/gear-icon.png) gear icon to open **Project Settings**.

   ![Open Project Settings, horizontal nav](../../media/settings/open-project-settings-horz.png)  

3. Choose the **Security** page, **Project Administrators** group, and then the **Members** tab.  

	The list of members is shown. 

	> [!div class="mx-imgBorder"]  
	> ![Web portal, Security tab, Project Administrators Group, Members tab](media/view-permissions-project-level-membership.png) 

::: moniker-end


## Show members of the Project Collection Administrators group

If you need elevated permissions, request them from a member of the [Project Collection Administrators group](set-project-collection-level-permissions.md). Project collection administrators manage features and functions that impact all projects. 


::: moniker range="azure-devops"

To find out who is a member of the Project Collection Administrators group, check the **Permissions** settings at the collection level. 

> [!NOTE]   
> To enable the new user interface for the **Organization Permissions Settings Page v2**, see [Enable preview features](../../project/navigation/preview-features.md). The preview page provides a group settings page that the current page does not. 

1. Choose the ![project-icon.png](../../media/icons/project-icon.png) Azure DevOps logo to open your projects, and then choose ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.  

	![Open Organization settings](../../media/open-organization-settings-preview.png)

2. Choose **Permissions** under the Security group, and then **Project Collection Administrators** > **Members** tab. 

	> [!div class="mx-imgBorder"]  
	> ![Security, Project Collection Administrators group, Members tab](media/project-collection/project-collection-admins-members-tab-s157.png)  

::: moniker-end   

::: moniker range="azure-devops-2019 || azure-devops-2020"

To find out who is a member, check the **Security** settings at the collection level. 

1. Choose the ![project-icon.png](../../media/icons/project-icon.png) Azure DevOps logo to open **Projects**, and then choose **Organization settings**. 

   ![Open Organization settings](../../pipelines/agents/media/agent-pools-tab/organization-settings.png)

2. Choose **Security**, the **Project Collection Administrators** group, and then **Members**. 

	> [!div class="mx-imgBorder"]  
	> ![Security, Project Collection Administrators group, Members tab](media/view-permissions/collection-admins-vert.png)  

::: moniker-end  

::: moniker range="<= tfs-2018"

1. Choose the ![project-icon.png](../../media/icons/project-icon.png) settings icon and choose **Collection settings**.

	> [!div class="mx-imgBorder"]  
	> ![Open Organization Settings](/azure/devops/media/settings/open-account-settings.png)  

2. Choose **Security**, **Project Collection Administrators** group, and then **Members**. 

   ![Security, Project Collection Administrators group, Members tab](media/view-permissions/collection-admins.png)

::: moniker-end


::: moniker range="azure-devops"

<a name="find-owner"></a>

## Show the organization owner 

1. Choose the ![ ](/azure/devops/media/icons/project-icon.png) Azure DevOps logo to open **Projects**, and then choose ![gear icon](../../media/icons/gear-icon.png) **Organization settings**. 

	![Open organization settings](../../media/open-organization-settings-preview.png)  

2. Choose **Overview** and scroll down to show the **Organization owner**.

   > [!div class="mx-imgBorder"]  
   > ![Organization settings, Organization owner](../../media/settings/organization-settings-info.png)

   To change the owner, see [Change organization owner](../accounts/change-organization-ownership.md). 

::: moniker-end

## Next steps

> [!div class="nextstepaction"]
> [Add users to a project or team](add-users-team-project.md) 



