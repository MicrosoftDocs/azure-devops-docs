---
title: Add, remove team administrator 
titleSuffix: Azure DevOps
description: Add another user to the team administrator role in Azure DevOps.  
ms.subservice: azure-devops-settings
ms.custom: teams
ms.assetid: 843D5E56-D24E-4DEA-9915-19B1F76E9A56
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 11/12/2024
---

# Add or remove a team administrator 

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

<a id="add-team-admin">  </a>  

Learn how to add or remove team administrators. We recommend having multiple users with administration permissions for redundancy. Team administrators can [manage teams and configure team tools](manage-teams.md) and oversee projects. Remove a user's administration permissions if the user is no longer active.

To add a team, see [Add teams](add-teams.md). To add or remove a project administrator, see [Change project-level permissions](../security/change-project-level-permissions.md).

<a name="permissions"></a>

## Prerequisites

[!INCLUDE [prerequisites-project-administrator-and-basic](../../includes/prerequisites-project-administrator-and-basic.md)]

<a id="open-admin-context">  </a>

## Add an administrator

::: moniker range="azure-devops"

> [!NOTE]   
> To enable the user interface for the **New Teams Page**, see [Manage or enable features](../../project/navigation/preview-features.md).

#### [New Teams Page](#tab/preview-page) 

1. Sign in to your organization (```https://dev.azure.com/{Your_Organization}```) and select a project.
2. Select **Project settings** > **Teams**. 
    
	> [!div class="mx-imgBorder"]
    > ![Screenshot of Project settings and Teams buttons for selection.](media/shared/open-project-settings-teams-preview.png)

3. Select the team to configure, and then select **Settings** > **Add**. 

	> [!div class="mx-imgBorder"]
	> ![Screenshot of dialog for adding user identity, new teams page view for Azure DevOps Services.](media/add-team-admin/settings-add-team-administrator-preview.png)  

4. Enter the user's identity you want to add to the administrator role, and then select **Save**.     
	    
	> [!div class="mx-imgBorder"]
	> ![Screenshot of Add team administrator dialog on the New Teams page.](media/add-team-admin/add-team-administrator-dialog-preview.png)

#### [Current page](#tab/current-page) 

1. Sign in to your organization (```https://dev.azure.com/{Your_Organization}```) and select a project.

2. Choose **Project settings** > **Teams**. 

	> [!div class="mx-imgBorder"]
    > ![Screenshot of selected Project settings and Teams buttons.](media/shared/open-project-settings-team-new-nav.png)

3. Select the team to configure, and then select **Settings** > **Add**. 

	> [!div class="mx-imgBorder"]
	> ![Screenshot of the Add button for selection.](media/add-team-admin/settings-add-team-administrator.png)  

4. Enter the user identity that you want to add to the administrator role, and then select **Save**.     
	    
	> [!div class="mx-imgBorder"]
	> ![Screenshot of Add team administrator dialog on current page for Azure DevOps Server 2019 and up.](media/add-team-admin/add-administrators-dialog.png)

***

::: moniker-end

::: moniker range=" < azure-devops"

1. Select **Project settings** > **Teams**. 

	> [!div class="mx-imgBorder"]
    > ![Screenshot of selected Project settings and Teams buttons.](media/shared/open-project-settings-team-new-nav.png)

2. Select the team to configure, and then select **Settings** > **Add**. 

	> [!div class="mx-imgBorder"]
	> ![Screenshot of the Add button for selection.](media/add-team-admin/settings-add-team-administrator.png)  

3. Enter the user identity that you want to add to the administrator role, and then select **Save**.     
	    
	> [!div class="mx-imgBorder"]
	> ![Screenshot of Add team administrator dialog on current page for Azure DevOps Server 2019 and up.](media/add-team-admin/add-administrators-dialog.png)

::: moniker-end

***

<a id="remove-admin">  </a>

## Remove an administrator

Each team has at least one administrator. To remove an administrator, first add at least a second administrator. 

Open the **Teams** page as described in the previous section.

::: moniker range="azure-devops"

#### [New Teams Page](#tab/preview-page) 
 
Select **Settings** and scroll down to the Administrators section. Select ![remove icon](../../media/icons/remove-icon.png) for the user that you want to remove as a team administrator. 

![Screenshot of X selected to remove team administrator.](media/add-team-admin/remove-admin-new-ui-page.png)


#### [Current page](#tab/current-page) 

From the Administrators section, choose ![delete icon](../../media/icons/delete-icon.png) for the user that you want to remove as a team administrator. 

> [!div class="mx-imgBorder"]
> ![Screenshot shows removing a team administrator.](media/add-team-admin/remove-admin-prev-ui.png)  

* * *
 
::: moniker-end

::: moniker range=" < azure-devops"

From the Administrators section, choose ![delete icon](../../media/icons/delete-icon.png) for the user that you want to remove as a team administrator. 

> [!div class="mx-imgBorder"]
> ![Screenshot shows removing a team administrator.](media/add-team-admin/remove-admin-prev-ui.png)  

::: moniker-end

## Next steps  

> [!div class="nextstepaction"]
> [Manage teams and configure team tools](manage-teams.md) 

## Related articles

- [Add teams](add-teams.md)
- [Learn about teams & Agile tools](../../organizations/settings/about-teams-and-settings.md)
- [Configure and customize Azure Boards](../../boards/configure-customize.md)
- [Set team favorites](../../project/navigation/set-favorites.md)

