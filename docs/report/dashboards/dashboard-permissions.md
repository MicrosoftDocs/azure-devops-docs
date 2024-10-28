---
title: Set dashboard permissions for team members
titleSuffix: Azure DevOps
description: Learn how to set permissions to create, edit, or delete dashboards in Azure DevOps.
ms.custom: dashboards, engagement-fy23
ms.subservice: azure-devops-analytics
ms.topic: how-to
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 10/25/2024
---

# Set dashboard permissions    

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)] 

<a id="set-permissions">  </a>

::: moniker range=">= azure-devops-2020"

Dashboards are viewable by all members of the Project Valid Users group. Permissions to edit, delete, or manage dashboards can be configured for both team and project dashboards.

As a member of the Project Administrators group, you can set the default dashboard permissions for all teams. As a team or project administrator, you have the flexibility to set individual dashboard permissions for team members. This enables you to tailor permissions based on the specific needs and roles of each team member. These permissions only impact the team members and their respective team dashboards, allowing for granular control over who can edit, delete, or manage dashboards.

By configuring these permissions, you ensure that only authorized users can make changes to dashboards, maintaining the integrity and organization of your project data.

::: moniker-end

::: moniker range="azure-devops-2019"

As a member of the Project Administrators group, you can set the default dashboard permissions for all teams within the project. This allows you to establish a consistent set of permissions across the entire project, ensuring that all teams adhere to the same standards.

As a team or project administrator, you have the flexibility to set individual dashboard permissions for team members. This enables you to tailor permissions based on the specific needs and roles of each team member. These permissions only impact the team members and their respective team dashboards, allowing for granular control over who can edit, delete, or manage dashboards.

By configuring these permissions, you ensure that only authorized users can make changes to dashboards, maintaining the integrity and organization of your project data.

::: moniker-end

For more information about adding and viewing dashboards, see [Add, rename, and delete dashboards](dashboards.md).   

> [!TIP]
> If a user reports that they can't create or edit a team dashboard despite having the necessary permissions, ensure they are added as a member of the team. This includes adding them as a member of the default project team. For more information, see [Add users to a project or specific team](../../organizations/security/add-users-team-project.md).

<a id="permissions">  </a>

## Prerequisites

::: moniker range=">= azure-devops-2020"

- **Access:** All members of the Project Valid Users group can view dashboards.
- **Permissions:**
  - **Team dashboards**: To add, edit, or manage a team dashboard, meet the following requirements:
    - Have at least **Basic** access.
    - Be a [team administrator](../../organizations/settings/add-team-administrator.md), a project administrator, or have **Edit dashboard** permissions.
    - Be a [member of the team](../../organizations/security/add-users-team-project.md).
  - **Project dashboards**: To add, edit, or manage project dashboards, meet the following requirements:
    - Have at least **Basic** access.
    - Be a project administrator or have **Edit dashboard** permissions.
    - Be a [member of the team](../../organizations/security/add-users-team-project.md).

::: moniker-end

::: moniker range="azure-devops-2019"

- **Access:** All members of the Project Valid Users group can view dashboards.
- **Permissions:** To add, edit, or manage a team dashboard, meet the following requirements:
  - Have at least **Basic** access.
  - Be a [team administrator](../../organizations/settings/add-team-administrator.md), a project administrator, or have dashboard permissions.
  - Be a [member of the team](../../organizations/security/add-users-team-project.md) to edit its dashboards.
::: moniker-end

## Set default team dashboard permissions

By default, all team members have permissions to create and edit dashboards for their teams. All members of the Project Administrators or Project Collection Administrators group and team administrators can set the default dashboard permissions for a team.

1. Select **Project settings** > **Dashboards**.  

	> [!div class="mx-imgBorder"]  
	> ![Screenshot of Web portal, Project Settings, open Dashboards, Azure DevOps Server 2019.](media/set-permissions/project-setting-permissions.png)

2. Move the toggle to enable or disable those permissions you want to grant or restrict. 
   
   The system automatically saves your changes.

## Set individual team dashboard permissions 

> [!NOTE]
> The dashboard permissions dialog currently doesn't support granting permissions to other users or groups. You can only modify the default settings for the team.

::: moniker range=">= azure-devops-2020"

1. Open the [Dashboards directory](dashboards.md), select the :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: actions icon for the dashboard, and then select the **Security** menu option. 

	> [!div class="mx-imgBorder"]  
	> ![Screenshot of Dashboards directory, open Security for a dashboard.](media/set-permissions/open-dashboard-security.png)

1. Change **Allow** or **Deny** to grant or restrict a permission. 
 
	Here we restrict team members from editing the Analytics dashboard. Only Fabrikam team administrators can edit the Analytics dashboard. 

 	> [!div class="mx-imgBorder"]  
	> ![Dialog for Analytics dashboard Permissions.](media/set-permissions/team-analytics-dashboard-permissions.png)

2. Close the dialog. 

::: moniker-end

::: moniker range="azure-devops-2019"

1. Open the [Dashboards directory](dashboards.md), select the :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: actions icon for the dashboard, and then select the **Security** menu option. 

	> [!div class="mx-imgBorder"]  
	> ![Screenshot of Dashboards directory, open Security for a dashboard, Azure DevOps Server 2019.](media/set-permissions/open-dashboard-security.png)

1. Change **Allow** or **Deny** to grant or restrict a permission. 
 
	Here we restrict team members from editing the Analytics dashboard. Only Fabrikam team administrators can edit the Analytics dashboard. 

 	> [!div class="mx-imgBorder"]  
	> ![Permissions for Analytics dashboard dialog, Azure DevOps Server 2019.](media/set-permissions/dashboard-permission-dialog.png)

2. Select **Save changes** and then **Close**. 

::: moniker-end

::: moniker range=">= azure-devops-2020"

## Set permissions for a project dashboard 

1. To set permissions for a project dashboard, open the [Dashboards directory](dashboards.md), select the :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: actions icon for the dashboard, and then select the **Security** menu option. 

	> [!div class="mx-imgBorder"]  
	> ![Screenshot of Web portal, open Dashboard security option.](media/set-permissions/open-project-dashboard-security.png)

	By default, the creator or owner of the dashboard has all permissions granted to edit, delete, and manage dashboard permissions. 

1. To add another user or group, search for their identity and then select the permission settings that you want.  

	> [!div class="mx-imgBorder"]  
	> ![Dialog for a Project dashboard, add user and set permissions.](media/set-permissions/add-user-project-permissions.png)

2. Close the dialog. 

3. Reopen the security dialog to verify the changes were made. 

 	> [!div class="mx-imgBorder"]  
	> ![Project dashboard permissions dialog.](media/set-permissions/project-dashboard-permissions-added.png)

::: moniker-end

## Related articles

- [Add, rename, and delete dashboards](dashboards.md)
- [Add users to a project or specific team](../../organizations/security/add-users-team-project.md)
- [Add a team administrator](../../organizations/settings/add-team-administrator.md) 
