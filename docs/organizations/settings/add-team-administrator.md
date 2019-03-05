---
title: Add a team administrator 
titleSuffix: Azure DevOps
description: Add a user to the team administrator role in Azure DevOps  
ms.technology: devops-settings
ms.prod: devops
ms.topic: overview
ms.assetid: 843D5E56-D24E-4DEA-9915-19B1F76E9A56
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: quickstart
monikerRange: '>= tfs-2013'
ms.date: 02/11/2019
---

# Add a team administrator 

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]


<a id="add-team-admin">  </a>  

It's always a good idea to have more than one person with administration permissions for an area. You need to be a team administrator to [Manage teams and configure team tools](manage-teams.md). 

As a team administrator, you can configure, customize, and manage all team-related activities for your team. These include being able to add team members, add team admins, and configure Agile tools and team assets. 


<a name="permissions"></a>
## Prerequisites

::: moniker range="azure-devops"
* You must be a member of a project. If you don't have a project yet, [create one](../projects/create-project.md). 
* You must be a [member of the Project Administrators group](../security/set-project-collection-level-permissions.md), or a team administrator for the team you want to update. 
::: moniker-end
::: moniker range="<= azure-devops-2019"
* You must be a member of a project. If you don't have a project yet, [create one](../projects/create-project.md). * You must be a [member of the Project Administrators group](../security/set-project-collection-level-permissions.md), or a team administrator for the team you want to update. 
::: moniker-end
To get added as a team administrator, ask another team admin, the organization owner, or a member of the [Project Administrators group](../security/set-project-collection-level-permissions.md) to add you.  

If you need to add a team, see [Add teams](add-teams.md).

<a id="open-admin-context">  </a>
## Open Project Settings>Team Profile and add an administrator

From the web portal, open the admin page for the team. 

::: moniker range=">= azure-devops-2019"

1. Choose **Project Settings** and choose **Teams**. 

	> [!div class="mx-imgBorder"]
	> ![Open Code, new nav](_img/add-team/open-project-settings-teams-new-nav.png) 

0. Choose the team to configure, and then choose the **Add** link to open the dialog for adding user identities. 

	> [!div class="mx-imgBorder"]
	> ![Team profile, Add a team admin](_img/add-team-admin/team-profile-choose-add-admin.png)  

0. Enter the identities you want to add to the team administrator role.     
	    
	> [!div class="mx-imgBorder"]
	> ![Add team administrator dialog](_img/add-team-admin/add-team-admin-dialog.png)
   
::: moniker-end    


::: moniker range=">= tfs-2017 <= tfs-2018"

0. From the web portal and team context, choose the ![ ](../../_img/icons/gear_icon.png) gear icon to open **Team Settings**.

	> [!div class="mx-imgBorder"]  
	> ![Open Team Settings](_img/add-team-admin/open-team-settings-horz.png)

	If you choose the ![ ](../../_img/icons/gear_icon.png) gear icon from the project context, then choose **Overview**, and select the team you want to configure.   

0. Choose the **Add** link to open the dialog for adding user identities.  

	![Open team administrator context](_img/add-team/admin-link.png)  
   
0. Enter the identities you want to add to the team administrator role.   

	> [!div class="mx-imgBorder"]
	> ![Add team administrator dialog](_img/add-team-admin/add-team-admin-dialog.png)
   
::: moniker-end     

::: moniker range=">= tfs-2013 <= tfs-2015"  

0. From the web portal and team context, choose the ![ ](../../_img/icons/gear_icon.png) gear icon to open the administration page.

	> [!div class="mx-imgBorder"]  
	> ![Web portal, TFS, Open Admin context, project level](../../_shared/_img/settings/open-admin-page-tfs2015.png)

	If you choose the ![ ](../../_img/icons/gear_icon.png) gear icon from the project context, then choose **Overview**, and select the team you want to add an administrator to.   

0. Choose the **Add** link to open the dialog for adding user identities.    
  
	![Web portal, TFS 2015, Open team administration context](_img/add-team/add-account-as-team-admin.png)

0. Enter the identities you want to add to the team administrator role.     

	![Add team administrator dialog](_img/add-team/team-admin-dialog.png)    
	
::: moniker-end  


## Try this next  

> [!div class="nextstepaction"]
> [Manage teams and configure team tools](manage-teams.md) 

## Related articles

- [About teams & Agile tools](../../organizations/settings/about-teams-and-settings.md)
- [Manage portfolios](../../boards/plans/portfolio-management.md)
- [Set team favorites](../../project/navigation/set-favorites.md) 