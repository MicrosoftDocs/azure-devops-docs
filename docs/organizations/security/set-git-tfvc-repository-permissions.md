---
title: Set Git or TFVC repository permissions for VSTS & TFS 
description: Steps for how to grant or restrict access to a Git or Team Foundation Version Control repository feature or function
ms.assetid:  
ms.prod: devops
ms.technology: devops-security
ms.topic: quickstart
ms.manager: douge
ms.author: kaelli
author: KathrynEE
ms.date: 12/12/2017
monikerRange: '>= tfs-2013'
---


# Set repository permissions for Git or TFVC

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

You can grant or restrict access to a repository by setting the permission state to Allow or Deny for a single user or a security group. For a description of each security group and permission level, see [Permissions and group reference](permissions.md).

## Prerequisites

* You must have a team project. If you don't have a team project yet, create one in [VSTS](../../user-guide/sign-up-invite-teammates.md) or set one up in an [on-premises TFS](../accounts/create-team-project.md).
* You must be a member of the [Project Administrators Group](set-project-collection-level-permissions.md) or have your **Manage permissions** set to Allow for Git repositories or TFVC repository.  

<a id="git-repository">  </a>

## Set Git repository permissions

You can set the permissions for all Git repositories for a team project, or for a single repository. 

1. From the web portal user and team project context, open the admin context by clicking the ![](../../work/_img/icons/gear_icon.png) gear Settings icon and click **Version Control**.

2. To set the set the permissions for all Git repositories for a team project, click **Git Repositories** and choose the security group whose permissions you want to manage. 

	Otherwise, click a specific repository and choose the security group whose permissions you want to manage.   

3. Click the setting for the permission you want to change. 

	Here we grant permissions to the Contributors group to create repositories. 

	<img src="_img/set-repo-git-permissions.png" alt="Security dialog for all GIt repositories, Contributors group" style="border: 1px solid #C3C3C3;" />

4. When done, click **Save changes**. 

<!---
![Permissions page for Git project in admin context](_img/restrict-access-tfs/git-permissions.png) 
--> 
 

 
<a id="tfvc-repository">  </a>

## Set TFVC repository permissions


0. From the web portal user and team project context, open the admin context by clicking the ![](../../work/_img/icons/gear_icon.png) gear Settings icon and click **Version Control**.

1. Click the TFVC repository for the team project and then choose the security group whose permissions you want to manage.   

2. Change the permission setting to **Allow** or **Deny**. 

	For example, here we change the **Manage branch** permission to Allow for all members of the Contributors group. 

	<img src="_img/set-repo-tfvc-permissions.png" alt="Security dialog for the TFVC repository, Contributors group" style="border: 1px solid #C3C3C3;" />

3. Save your changes. 
 
<!---
![Permissions page for TF version control](_img/restrict-access-tfs/readers-permissions.png)  
--> 

## Related notes

- [Default Git permissions](default-git-permissions.md)  
- [Default TFVC permissions](default-tfvc-permissions.md)  
- [Git permissions prior to TFS 2017 Update 1](git-permissions-before-2017.md) 
- [Default permissions and access](permissions-access.md) 
- [Permissions and groups reference](permissions.md)  
