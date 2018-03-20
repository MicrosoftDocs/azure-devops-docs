---
title: Set permissions and access for tracking
titleSuffix: VSTS & TFS
description: How to guide for setting permissions and access levels to support work tracking tasks (VSTS and Team Foundation Server)
ms.technology: vs-devops-reporting
ms.prod: vs-devops-alm
ms.assetid: 
ms.manager: douge
ms.author: kaelli
ms.date: 01/22/2018
---

<a id="set-permissions">  </a>
# Set dashboard permissions    

**VSTS | TFS 2018 | TFS 2017.1**

::: moniker range=">= tfs-2013 <= tfs-2015"
> [!NOTE]   
> Setting dashboard permissions isn't a supported feature from TFS 2017 and earlier versions. 
::: moniker-end

<!---

>[!NOTE]  
>**Feature availability:**  For VSTS and TFS 2017.1 and later versions, you can set dashboard permissions. 
-->

::: moniker range="vsts || >= tfs-2017 <= tfs-2018"

As a team admin you can set dashboard permissions for your team. As a member of the Project Administrators group, you can set dashboard permissions for all teams.  

From the **Permissions** tab you can grant or restrict permissions to your team members to edit and manage your team dashboards. The default setting provides all team members permissions to edit and manage dashboards.  

> [!TIP]    
> If a user reports that they can't create or edit a team dashboard, and you've set the permissions to allow them to do so, check that they have been added as a member of the team. This includes adding them as a team member to the default team project team.   
::: moniker-end

::: moniker range="vsts || >= tfs-2018"

> [!div class="mx-imgBorder"]
![Manage dashboards - permissions dialog, VSTS and TFS 2018](_img/dashboards-permissions.png) 

::: moniker-end

::: moniker range="tfs-2017"

Requires TFS 2017.1 or later version. 

> [!div class="mx-imgBorder"]
![Manage dashboards - permissions dialog, 2017.1](_img/dashboards-permissions-tfs.png) 

::: moniker-end

::: moniker range="vsts || >= tfs-2017 <= tfs-2018"
## Related notes

- [Add users to a team project or specific team](../../security/add-users-team-project.md)
- [Add a team administrator](../../work/scale/add-team-administrator.md)
 
::: moniker-end