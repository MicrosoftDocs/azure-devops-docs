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
ms.date: 04/04/2022
---

# Add or remove a team administrator 

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]


<a id="add-team-admin">  </a>  

Learn how to add or remove an administrator for your team. It's always a good idea to have more than one user with administration permissions for a team. Team administrators can [manage teams and configure team tools](manage-teams.md) and manage projects. You may want to remove a user's administration permissions, for instance if the user is no longer active. 

To add a team, see [Add teams](add-teams.md). To add or remove a project administrator, see [Change project-level permissions](../security/change-project-level-permissions.md).

<a name="permissions"></a>

## Prerequisites

- To add or remove a user as a team administrator, you must be a member of the [**Project Administrators** group](../security/change-project-level-permissions.md), or a team administrator for the team you want to update.
- To be added as a team administrator, you must be granted **Basic** or higher access-level. Users granted **Stakeholder** access can't be added as a team administrator. 

<a id="open-admin-context">  </a>

## Add an administrator

To get added as a team administrator, ask another team administrator or a member of the **Project Administrators** group. See [Look up a project administrator](../security/look-up-project-administrators.md).

::: moniker range="azure-devops"

> [!NOTE]   
> To enable the user interface for the **New Teams Page**, see [Manage or enable features](../../project/navigation/preview-features.md).

#### [New Teams Page](#tab/preview-page) 

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```) and select a project.
2. Choose **Project settings**, and then choose **Teams**. 
    
	> [!div class="mx-imgBorder"]
    > ![Screenshot of Project settings and Teams buttons for selection.](media/shared/open-project-settings-teams-preview.png)

3. Select the team to configure, and then select **Settings** > **Add**. 

	> [!div class="mx-imgBorder"]
	> ![Screenshot of dialog for adding user identity, new teams page view for Azure DevOps Services.](media/add-team-admin/settings-add-team-administrator-preview.png)  

3. Enter the user's identity you want to add to the administrator role, and then select **Save**.     
	    
	> [!div class="mx-imgBorder"]
	> ![Screenshot of Add team administrator dialog on the New Teams page.](media/add-team-admin/add-team-administrator-dialog-preview.png)

#### [Current page](#tab/current-page) 

1. Choose **Project settings**, and then choose **Teams**. 

	> [!div class="mx-imgBorder"]
    > ![Screenshot of selected Project settings and Teams buttons.](media/shared/open-project-settings-team-new-nav.png)

2. Select the team to configure, and then select **Settings** > **Add**. 

	> [!div class="mx-imgBorder"]
	> ![Screenshot of the Add button for selection.](media/add-team-admin/settings-add-team-administrator.png)  

3. Enter the user identity that you want to add to the administrator role, and then select **Save**.     
	    
	> [!div class="mx-imgBorder"]
	> ![Screenshot of Add team administrator dialog on current page for Azure DevOps Server 2019 and up.](media/add-team-admin/add-administrators-dialog.png)

***

::: moniker-end


::: moniker range=">= azure-devops-2019 < azure-devops"

1. Choose **Project settings**, and then choose **Teams**. 

	> [!div class="mx-imgBorder"]
    > ![Screenshot of selected Project settings and Teams buttons.](media/shared/open-project-settings-team-new-nav.png)

2. Select the team to configure, and then select **Settings** > **Add**. 

	> [!div class="mx-imgBorder"]
	> ![Screenshot of the Add button for selection.](media/add-team-admin/settings-add-team-administrator.png)  

3. Enter the user identity that you want to add to the administrator role, and then select **Save**.     
	    
	> [!div class="mx-imgBorder"]
	> ![Screenshot of Add team administrator dialog on current page for Azure DevOps Server 2019 and up.](media/add-team-admin/add-administrators-dialog.png)

::: moniker-end

::: moniker range="tfs-2018"

1. From the web portal and team context, choose **Team Settings** :::image type="icon" source="../../media/icons/gear_icon.png" border="false":::.

	> [!div class="mx-imgBorder"]  
	> ![Screenshot of open Team Settings.](media/add-team-admin/open-team-settings-horz.png)

	If you choose **Project settings** :::image type="icon" source="../../media/icons/gear_icon.png" border="false":::, then choose **Overview**, and select the team you want to configure.   

2. Choose the **Add** link to open the dialog for adding user identities.  

	![Screenshot of Open team administrator context.](media/add-team/admin-link.png)  
   
3. Enter the identities you want to add to the team administrator role.   

	> [!div class="mx-imgBorder"]
	> ![Screenshot of Add team administrator dialog for TFS 2017 through 2018.](media/add-team-admin/add-team-admin-dialog.png)
   
::: moniker-end     


* * *

<a id="remove-admin">  </a>

## Remove an administrator

Each team must have at least one administrator. To remove an administrator, you must first add at least a second administrator. 

Open the **Teams** page as described in the previous section.

::: moniker range="azure-devops" 

#### [New Teams Page](#tab/preview-page) 
 
Choose **Settings** and scroll down to the Administrators section. Choose ![remove icon](../../media/icons/remove-icon.png) for the user that you want to remove as a team administrator. 

![Screenshot of X selected to remove team administrator.](media/add-team-admin/remove-admin-new-ui-page.png)


#### [Current page](#tab/current-page) 

From the Administrators section, choose ![delete icon](../../media/icons/delete-icon.png) for the user that you want to remove as a team administrator. 

> [!div class="mx-imgBorder"]
> ![Remove a team admin](media/add-team-admin/remove-admin-prev-ui.png)  

* * *
 
::: moniker-end

::: moniker range=">= azure-devops-2019 < azure-devops"

From the Administrators section, choose ![delete icon](../../media/icons/delete-icon.png) for the user that you want to remove as a team administrator. 

> [!div class="mx-imgBorder"]
> ![Remove a team admin](media/add-team-admin/remove-admin-prev-ui.png)  

::: moniker-end

::: moniker range="< azure-devops-2019" 

From the Administrators section, choose ![delete icon](../../media/icons/delete-icon.png) for the user that you want to remove as a team administrator. 

> [!div class="mx-imgBorder"]
> ![Screenshot of current UI for Remove a team administrator.](media/add-team-admin/remove-admin-prev-ui.png)

::: moniker-end

## Next steps  

> [!div class="nextstepaction"]
> [Manage teams and configure team tools](manage-teams.md) 

## Related articles

- [Add teams](add-teams.md)  
- [About teams & Agile tools](../../organizations/settings/about-teams-and-settings.md)
- [Configure and customize Azure Boards](../../boards/configure-customize.md)
- [Set team favorites](../../project/navigation/set-favorites.md)

