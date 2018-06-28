---
title: Add a team administrator 
titleSuffix: VSTS & TFS
description: Add a user account to the team administrator role in Visual Studio Team Services & Team Foundation Server   
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 843D5E56-D24E-4DEA-9915-19B1F76E9A56
ms.manager: douge
ms.author: kaelli
author: KathrynEE
ms.topic: quickstart
ms.date: 10/17/2017
---

# Add a team administrator 

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]


<a id="add-team-admin">  </a>  

It's always a good idea to have more than one person with administration permissions for an area. You need to be a team administrator to [configure team settings](manage-team-assets.md). 

As a team administrator, you can configure, customize, and manage all team-related activities for your team. These include being able to add team members, add team admins, and configure Agile tools and team assets. 


<a name="permissions"></a>
## Prerequisites

::: moniker range="vsts"
* You must be a member of a team project. If you don't have a team project yet, create one in [VSTS](../../organizations/accounts/set-up-vs.md). If you haven't been added as a team member, [get added now](../../organizations/accounts/add-account-users-from-user-hub.md). 
::: moniker-end
::: moniker range=">= tfs-2013 <= tfs-2018"
* You must be a member of a team project. If you don't have a team project yet, create one in an [on-premises TFS](../../organizations/accounts/create-team-project.md). If you haven't been added as a team member, [get added now](../../organizations/security/add-users-team-project.md). 
::: moniker-end
* To get added as a team administrator, ask another team admin, the account owner, or a member of the [Project Administrators group](../../organizations/security/set-project-collection-level-permissions.md) to add you.  

If you need to add a team, see [Add teams and team members](multiple-teams.md).

<a id="open-admin-context">  </a>
## Open the team page and add a team administrator 

From the web portal, open the admin page for the team. 

::: moniker range=">= tfs-2017"  

0. From the web portal and team context, click the ![](../_img/icons/gear_icon.png) gear icon to open the administration page.

	> [!div class="mx-imgBorder"]  
	> ![Web portal, VSTS, Open Admin context, team project level](_img/open-admin-context-ts.png)

	If you click the ![](../_img/icons/gear_icon.png) gear icon from the team project context, then click **Overview**, and select the team you want to add an administrator to.   

0. Choose the **Add** link to open the dialog for adding user identities.    
     
	<img src="_img/add-team-admin-link.png" alt="Web portal, VSTS & TFS 2017, Open  team administrator context" style="border: 2px solid #C3C3C3;" />    
   
0. Enter the identities you want to add to the team administrator role.     
	    
	<img src="_img/add-admin-dialog.png" alt="VSTS, TFS 2017, Add team administrator dialog" style="border: 1px solid #C3C3C3;" />        
   
::: moniker-end     


::: moniker range=">= tfs-2013 <= tfs-2015"  

0. From the web portal and team context, click the ![](../_img/icons/gear_icon.png) gear icon to open the administration page.

	> [!div class="mx-imgBorder"]  
	> ![Web portal, TFS, Open Admin context, team project level](_img/open-admin-context-tfs.png)

	If you click the ![](../_img/icons/gear_icon.png) gear icon from the team project context, then click **Overview**, and select the team you want to add an administrator to.   

0. Choose the **Add** link to open the dialog for adding user identities.    
  
	<img src="_img/add-account-as-team-admin.png" alt="Web portal, TFS 2015, Open team administration context" style="border: 1px solid #C3C3C3;" />         

0. Enter the identities you want to add to the team administrator role.     

	![Add account as a team administrator](_img/add-team-admin-dialog.png)    
	
::: moniker-end     

## Try this next  

> [!div class="nextstepaction"]
> [Configure team settings](manage-team-assets.md) 

## Related articles

- [About teams & Agile tools](../../organizations/settings/about-teams-and-settings.md)
- [Manage portfolios](portfolio-management.md)
- [Set team favorites](../../project/navigation/set-favorites.md) 