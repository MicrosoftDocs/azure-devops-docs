---
title: Add a team, move from one team to several teams
titleSuffix: Azure DevOps 
description: Add a team to scale your Agile tools in Azure DevOps Services & Team Foundation Server  
ms.technology: devops-settings
ms.prod: devops
ms.topic: overview
ms.assetid: 9F1D0A0F-02D5-4E06-A5EC-C220472A0F66
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: quickstart
monikerRange: '>= tfs-2013'
ms.date: 02/20/2019
---

# Add a team, move from one default team to several teams

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

As your organization grows, you'll want to make sure that you configure your Agile tools to support that growth. To enable each feature team the autonomy it needs to manage their backlog and plan their sprints, they need their own set of team tools. For more information about features assigned to teams, see [About teams and Agile tools](about-teams-and-settings.md). 

> [!NOTE]    
> This article describes how to add a team or team members to a project defined in Azure DevOps. To learn about Microsoft Teams, see the Marketplace extension, [Microsoft Teams Integration](https://marketplace.visualstudio.com/items?itemName=ms-vsts.vss-services-teams). 
>
> For a good understanding on how to remain Agile as you add teams, review the [Scale Agile to Large Teams](/azure/devops/learn/agile/scale-agile-large-teams) article.

<!---
In this topic you'll learn:  

>[!div class="checklist"]    
> * How to add a team, move from one team to two teams   
> * How to add team members  
> * How to move work items assigned to one team to another team  
> * How to delete a team      
> * Additional permissions you may want to grant team members    
-->

<a id="add-team"> </a>  

As your team grows, you can easily move from one team to two. In this example, we add two feature teams, Email and Voice, and maintain the Fabrikam Fiber team with visibility across each of these two teams.  

## Prerequisites 

- If you don't have a project yet, [create one](../projects/create-project.md).  
- If you're not a project administrator, [get added as one](../../organizations/security/set-project-collection-level-permissions.md). Only members of the Project Administrators group or those who have been [granted explicit permissions to edit project information](../security/set-project-collection-level-permissions.md) can add and delete teams.   


## Add two feature teams 

Add and configure two teams, Email and Voice. Here we show you how to add and configure the Email team. 
 
::: moniker range="azure-devops"

1. From the web portal, choose **Project settings** and open **Teams**. 

	> [!div class="mx-imgBorder"]
	> ![Open Code, new nav](_img/add-team/open-project-settings-teams-new-nav.png) 

0. Choose **New team**. Give the team a name, and optionally a description. 

	> [!div class="mx-imgBorder"]
	> ![Create a sub-team with its own area path](_img/add-team/create-new-team-new-nav.png)

0. Select the team to configure it. To select the set of sprints and area paths the team plans to use, choose **Iterations and areas** See [Define area paths and assign to a team](set-area-paths.md) and [Define iteration paths (aka sprints) and configure team iterations](set-iteration-paths-sprints.md). 

	> [!div class="mx-imgBorder"]
	> ![Team profile, choose Iterations and areas link](_img/add-team/team-profile-choose-iterations-and-areas.png)

	> [!IMPORTANT]  
	> Team tools aren't available until the team's default area path is set. If you haven't created one or more Area Paths for the team to use, then [do that now](set-area-paths.md). Area Paths must be created for the project first, then assigned to the team. 

	From the team profile, you can perform these additional tasks:  
	- [Add team administrators](add-team-administrator.md)  
	- [Add team members](#add-team-members)  
	- [Navigate to team notifications](../../notifications/howto-manage-team-notifications.md)
	- [Navigate to and set default team dashboard permissions](../../report/dashboards/dashboard-permissions.md)  

	To configure other team features, see [Manage teams and configure team tools](manage-teams.md).

::: moniker-end


::: moniker range=">= tfs-2017 <= tfs-2018"

<a id="add-team-team-services" /> 

0. From the web portal, choose the ![ ](../../_img/icons/gear_icon.png) gear settings icon to open the **Project settings** page for the project.  

	![Open project admin page](_img/add-team/open-admin-context-tfs-2017.png) 

0. Choose **New team**. Give the team a name, and make sure to select **Create an area path with the name of the team**. Or, leave it unchecked and assign the default area path for the team after it is created. You can choose an existing area path or add a new one at that time. Team tools aren't available until the team's default area path is set. 

	![Create a sub-team with its own area path](_img/add-team/create-team-dialog.png)

0. Select the team to configure it. 

	![Web portal, project admin context, Overview page, Select a team to configure it](_img/add-team/select-team.png)

	The Team Profile opens. From the team profile, you can [Add team members](#add-team-members) and [Add team administrators](add-team-administrator.md).

	![Team profile, choose Iterations and areas link](_img/add-team/team-profile-tfs.png)  

0. To select the set of sprints and area paths the team plans to use, see [Define iteration paths (aka sprints) and configure team iterations](set-iteration-paths-sprints.md).

	> [!IMPORTANT]  
	> Team tools aren't available until the team's default area path is set. 

	To configure other team features, see [Manage teams and configure team tools](manage-teams.md).


::: moniker-end  

::: moniker range=">= tfs-2013 <= tfs-2015"
<a id="add-team-tfs-2015" />

1. From the web portal, choose the ![ ](../../_img/icons/gear_icon.png) gear settings icon to open **Project Settings.**  

	<img src="../../_shared/_img/settings/open-admin-page-tfs2015.png" alt="Open project admin page" style="border: 2px solid #C3C3C3;" />

2. Create a new team. Give the team a name, and make sure to select **Create an area path with the name of the team**. 

	Or, leave it unchecked and assign the default area path for the team after it is created. You can choose an existing area path or add a new one at that time. Team tools aren't available until the team's default area path is set. 

	![Create a sub-team with its own area path](_img/add-team/scale-agile-co.png)

3. Select the team from the Overview tab to configure it.  

	![Web portal, admin context, project, Overview page, Select a sub-team to configure it](_img/add-team/scale-agile-select-team-to-configure-it-co.png)

4. To select the set of sprints the team plans to use, open the **Iterations** page for the team. See [Define iteration paths (aka sprints) and configure team iterations](set-iteration-paths-sprints.md#activate).  

5. To change the area paths assigned to the team, open the **Areas** page. See [Set team defaults, Set team default area path(s)](set-area-paths.md#team-area-paths).  
 
::: moniker-end   


<a id="add-team-members"> </a>  

## Add team members
If you're moving from one team to two teams, team members already have access to the project. If you're setting up a team structure for the first time, adding user accounts as team members provides them access to the project and team assets. Access to the project is required to support sharing code and planning and tracking work. 

Several Agile tools, like capacity planning and team alerts, and dashboard widgets are team-scoped. That is, they automatically reference the user accounts of team members to support planning activities or sending alerts. 

::: moniker range="azure-devops"  
> [!NOTE]   
> You must first [add user to a project or to your organization](../accounts/add-organization-users.md) or [setup your account to work with Azure AD](../accounts/access-with-azure-ad.md). This way you can add user identities to a team.
::: moniker-end 


::: moniker range="< azure-devops"  
> [!NOTE]   
> The first time you add a user account, you must enter the full domain name and the alias. Afterwards, you can browse for that name by display name as well as account name. To learn more, see [Set up groups for use in Azure DevOps Server deployments](/azure/devops/server/admin/setup-ad-groups).
::: moniker-end 

For details, see [Add users to a project or specific team](../security/add-users-team-project.md). 


## Move work items under teams 
Now that your two feature teams are configured, you need to move existing work items from their current assignments to the team's default area path. This way, the work items show up on each team's backlog. 

1.	The quickest way to do this, is to [create a query](../../boards/queries/using-queries.md) of all work items you want to reassign, multi-select those items belonging to each team, and [bulk edit the area path](../../boards/backlogs/bulk-modify-work-items.md). 

	::: moniker range=">= azure-devops-2019"  
	> [!div class="mx-imgBorder"]  
	>![Web portal, Queries page, Bulk modify select work items](_img/add-team/query-bulk-edit-area-path.png)
	::: moniker-end  
	::: moniker range="<= tfs-2018"  
	![Web portal, Queries page, Bulk modify select work items](_img/add-team/scale-agile-bulk-modify-area-path-co.png)
	::: moniker-end  
2.	After you bulk modify, do a bulk save.  

	::: moniker range=">= azure-devops-2019"    
	> [!div class="mx-imgBorder"]  
	>![Bulk save edited work items](_img/add-team/query-bulk-save.png)
	::: moniker-end  
	::: moniker range="<= tfs-2018"  
	![Web portal, Queries page, Bulk save selected work items](_img/add-team/scale-agile-bulk-save-area-path-co.png)  
	::: moniker-end  

<a id="include-area-paths"> </a>  

## Configure the default project team 
One last step in moving from one team to two teams requires configuring the default project team to exclude sub-areas.  

::: moniker range=">= azure-devops-2019"
0. Open **Project Settings>Team Configuration** settings page for the default project team, and change the setting as shown.  
	> [!div class="mx-imgBorder"]  
	> ![New nav, default project team configuration, Exclude work items defined in sub-area paths, new nav](_img/add-team/exclude-areas-default-team-vert.png)  

0.	Refresh the product backlog page for the team, and you'll see only those work items assigned to the *Fabrikam Fiber* area path.  

	> [!div class="mx-imgBorder"]  
	> ![Product backlog, default project team](_img/add-team/product-backlog-default-team.png)

::: moniker-end


::: moniker range=">= tfs-2017 <= tfs-2018"
0. Open the **Work>Areas** settings page for the default project team, and change the setting as shown.  

	> [!div class="mx-imgBorder"]  
	> ![Web portal, Admin context, default project, Exclude work items defined in sub-area paths](_img/add-team/exclude-areas-default-team-horz.png)  

0.	Refresh the product backlog page for the team, and you'll see only those work items assigned to the *Fabrikam Fiber* area path.  

	> [!div class="mx-imgBorder"]  
	> ![Backlog view of default team](_img/add-team/product-backlog-default-team-horz.png)  

::: moniker-end

::: moniker range="<= tfs-2015"  
0. Open the **Areas** settings page for the default project team, and change the setting as shown.  

	![Web portal, Admin context, default project, Exclude work items defined in sub-area paths](_img/add-team/multiple-teams-exclude-sub-area-paths.png)  

0.	Refresh the product backlog page for the team, and you'll see only those work items assigned to the *Fabrikam Fiber* area path.  

	![Web portal, Backlog view of default team](_img/add-team/multiple-teams-product-backlog-default-team.png)  

::: moniker-end

## Delete a team 

::: moniker range=">= azure-devops-2019"

0. To delete a team, open **Project Settings>Teams**, choose the &hellip; context menu for the team you want to delete, and select the **Delete** option.   
	> [!div class="mx-imgBorder"]  
	> ![Project Settings>Teams>Delete team](_img/add-team/delete-team-vert.png)  

	> [!IMPORTANT]   
	> Deleting a team deletes all team configuration settings, including team dashboards, backlogs, and boards. Data defined for work items assigned to the team are left unchanged. Once deleted, you can't recover the team configurations. 

2. To complete the delete operation, you must type the name of the WIT as shown. 

	![Delete team confirmation dialog](_img/add-team/multiple-teams-delete-team-confirmation-dialog.png)

::: moniker-end

::: moniker range="<= tfs-2018"

1. To delete a team, open **Project Settings>Work>Overview**, choose the &hellip; context menu for the team you want to delete, and select the **Delete** option.   

	![Web portal, admin context-project level, Delete team](_img/add-team/multiple-teams-delete-team.png)
 
	> [!IMPORTANT]   
	> Deleting a team deletes all team configuration settings, including team dashboards, backlogs, and boards. Data defined for work items assigned to the team are left unchanged. Once deleted, you can't recover the team configurations. 

2. To complete the delete operation, you must type the name of the WIT as shown. 

	![Delete team confirmation dialog](_img/add-team/multiple-teams-delete-team-confirmation-dialog.png)

::: moniker-end


<a id="grant-add-permissions"></a>  

## Grant team members additional permissions  

For teams to work autonomously, you may want to provide them with permissions that they don't have by default. Suggested tasks include providing team administrators or team leads permissions to:  

- Create and edit child nodes under their default area path
- Create and edit child nodes under an existing iteration node 
- Create shared queries and folders under the Shared Queries folder

For more information on setting the above permissions or restricting access for select users, see [Set permissions and access for work tracking](../security/set-permissions-access-work-tracking.md).


::: moniker range="tfs-2018 || azure-devops-2019" 

If your Azure DevOps Server or TFS deployment is integrated with SQL Server Reports, you'll need to [Grant permissions to view or create SQL Server reports to team members](../../report/admin/grant-permissions-to-reports.md). 

::: moniker-end 

::: moniker range="<= tfs-2017" 

If your TFS deployment is integrated with a SharePoint product or SQL Server Reports, you'll need to manage membership for those products separately from their websites. 

-  [Set SharePoint site permissions](../security/set-sharepoint-permissions.md) 
-  [Grant permissions to view or create SQL Server reports in TFS](../../report/admin/grant-permissions-to-reports.md). 

::: moniker-end 


## Try this next 

Once you've created a team, you'll want to configure your Agile tools to support how your team works. Also, consider adding one or more users as team administrators. Team admins have the necessary permissions to add team members, add a picture to the team profile , and configure and manage all team features.  

> [!div class="nextstepaction"]
> [Add team administrator](add-team-administrator.md)
> or
> [Manage teams and configure team tools](manage-teams.md)



