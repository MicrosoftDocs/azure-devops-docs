---
title: Set permissions and access for tracking
titleSuffix: VSTS & TFS
description: How to guide for setting permissions and access levels to support work tracking tasks (VSTS and Team Foundation Server)
ms.technology: devops-analytics
ms.prod: devops
ms.topic: conceptual
ms.manager: douge
ms.author: kaelliauthor: KathrynEE
monikerRange: 'vsts || >= tfs-2017 <= tfs-2018'
ms.date: 03/22/2018
---

<a id="set-permissions">  </a>
# Set dashboard permissions    

**VSTS | TFS 2018 | TFS 2017.1**

<!---

>[!NOTE]  
>**Feature availability:**  For VSTS and TFS 2017.1 and later versions, you can set dashboard permissions. 
-->

::: moniker range="vsts || >= tfs-2017 <= tfs-2018"

As a team admin you can set dashboard permissions for your team. As a member of the Project Administrators group, you can set dashboard permissions for all teams. 

To learn more about adding and viewing dashboards, see [Add and manage dashboards](dashboards.md).   

> [!TIP]    
> If a user reports that they can't create or edit a team dashboard, and you've set the permissions to allow them to do so, check that they have been added as a member of the team. This includes adding them as a team member to the default team project team. For details, see [Add users to a team project or specific team](../../security/add-users-team-project.md). 

::: moniker-end

# [New Dashboards Experience](#tab/new-query-exp) 

::: moniker range="vsts"

To enable the New Dashboard experience, see [Enable preview features](../../collaborate/preview-features.md). 

By default, all team members have permissions to edit dashboards defined for the team. All other valid users of the team project have view only permissions, except for administrators. You can change the edit permissions for specific team dashboards. 

1. To change the permissions for a dashboard, open the dashboard and then click the ![gear icon](_img/icons/gear-icon.png) gear icon for the dashboard. 

	For example, here we open the Settings dialog for the Fabrikam Fiber team's Overview dashboard. 

	> [!div class="mx-imgBorder"]  
	> ![Open the dashboards settings dialog](_img/dashboards/open-dashboard-settings-dialog.png) 
	   
2. Choose the **Manage permissions for this dashboard** link.  

	> [!div class="mx-imgBorder"]  
	> ![Open the dashboards settings dialog](_img/dashboards/dashboard-settings-dialog.png)   

3. Change the permission settings shown as needed. These permissions are set for members of your team for the specific dashboard. 
 
	Here we change the **Delete dashboard** permission to Allow.  

	> [!div class="mx-imgBorder"]  
	> ![Open the dashboards settings dialog](_img/dashboards/set-permissions-dialog.png)  

4. Choose **Save** to save your changes and dismiss the Settings dialog. 

::: moniker-end

::: moniker range=">= tfs-2017 <= tfs-2018"
The New Dashboard experience is only available from VSTS at this time. 
::: moniker-end


# [Old Dashboards Experience](#tab/old-query-exp)  

By default, all team members have permissions to edit dashboards defined for the team. All other valid users of the team project have view only permissions, except for administrators. You can change the view, edit, and manage permissions for all team dashboards for members of your team. 

::: moniker range="tfs-2017"

> [!NOTE]   
> To set the permissions, requires TFS 2017.1 or later version. For TFS 2017 and earlier versions, only team and project administrators can add and edit dashboards. 

::: moniker-end

1. To change the permissions for a dashboard, open the dashboard and then click the ![configure icon](_img/icons/configure-icon.png) wrench icon for the dashboard.

	For example, here we open the Manage Dashboards dialog for the Fabrikam Fiber Web team's Test dashboard. 

	![Open Manage dashboards dialog](_img/dashboards-configure-ts.png) 

2. Choose the **Permissions** tab and check those checkboxes to grant or restrict permissions to your team members to edit and manage your team dashboards. The default settings, as shown in the illustration, provide all team members permissions to edit and manage dashboards.  

	::: moniker range="vsts || >= tfs-2018"  
	> [!div class="mx-imgBorder"]
	> ![Manage dashboards - permissions dialog, VSTS and TFS 2018](_img/dashboards-permissions.png)   
	::: moniker-end  
	::: moniker range="tfs-2017"  
	Requires TFS 2017.1 or later version.   

	> [!div class="mx-imgBorder"]
	> ![Manage dashboards - permissions dialog, 2017.1](_img/dashboards-permissions-tfs.png) 
	::: moniker-end

3. Choose **Save** to save your changes and dismiss the Settings dialog. 

---


## Related notes

- [Add users to a team project or specific team](../../security/add-users-team-project.md)
- [Add a team administrator](../../work/scale/add-team-administrator.md)
 

<!---
or add a user or group and set permissions for them. For an overview of how to do add users or groups, see [Add users to a team project or specific team](../../security/add-users-team-project.md).
-->
