---
title: Find an admin or account owner for VSTS or TFS
description: Steps for how to look up users who can help you gain access or change your permissions, project collection admin or project owner 
ms.prod: devops
ms.technology: devops-security
ms.assetid: 
ms.manager: douge
ms.author: kaelli
author: KathrynEE
ms.topic: quickstart
ms.date: 12/12/2017
monikerRange: '>= tfs-2013'
---
# Quickstart: Look up the account owner or a project administrator

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

When you need to have your permissions changed or you need to get access to select features or functions, you may need to find out who can grant them. Usually it is an administrator or the account owner.

For an overview of built-in security groups and default permission assignments, see [Default permissions and access](permissions-access.md).

## Prerequisites

* You must have a team project. If you don't have a team project yet, create one in [VSTS](../../user-guide/sign-up-invite-teammates.md) or set one up in an [on-premises TFS](../projects/create-project.md).
* You must be a member of the Project Valid Users Group or Project Collection Valid Users Group to view permissions.  

## Find out who is a member of the Project Administrators group

If you aren't a project administrator, and you need to be, find someone who is, and have them add you. You can find who is a member of the Project Administrators group by clicking on that group in the team project admin context and seeing who are members. 
 
0. From the web portal of your team project, click the ![gear icon](_img/icons/gear_icon.png) gear settings icon.

0. Click the **Security** page, **Project Administrators** group, and the **Members** tab.  

	<img src="_img/view-permissions-project-level-membership.png" alt="Web portal, Security tab, Project Administrators Group, Members tab" style="border: 2px solid #C3C3C3;" />


## Determine who is a member of the Project Collection Administrators group

If you need elevated permissions, you'll have to request them from a member of the [Project Collection Administrators group](set-project-collection-level-permissions.md). Project collection administrators manage features and functions that impact all team projects. 

To find out who is a member, check the Security settings at the collection level. 

0.	From the web portal, click the ![gear icon](../../_img/icons/gear-icon.png) gear icon and choose the **Security** page, **Project Collection Administrators** group, and then **Members**. 

	<img alt="Click gear button, Security" src="_img//view-permissions/collection-admins.png" style="border: 1px solid #CCCCCC" />
  
::: moniker range="vsts"

<a name="find-owner"></a>

## Look up the account owner 

0.	Open the admin context for your account.  

	<img alt="Go to account settings" src="../../_shared/_img/organization-settings-new-ui.png" style="border: 1px solid #C3C3C3;" /> 

0.	Under **Settings**, find the current owner.

	<img alt="Find current owner" src="../../_shared/_img/organization-owner-new-ui.png" style="border: 1px solid #C3C3C3;" /> 

	To change the account owner, see [Change account ownership](../accounts/change-organization-ownership-vs.md). 

::: moniker-end

<!---
## Find out who is a team administrator for a specific team
--> 


## Try this next
> [!div class="nextstepaction"]
> [Add users to a team project or team](add-users-team-project.md) 



