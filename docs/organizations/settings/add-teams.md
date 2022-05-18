---
title: Create or add a team
titleSuffix: Azure DevOps 
description: Learn how to create or add a team to a project to scale Azure DevOps.  
ms.technology: devops-settings
ms.assetid: 9F1D0A0F-02D5-4E06-A5EC-C220472A0F66
ms.author: kaelli
author: KathrynEE
ms.topic: tutorial
monikerRange: '<= azure-devops'
ms.date: 05/25/2022
---

# Create or add a team 

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]


You add teams to provide them the tools they need to manage their backlog, plan sprints, configure dashboards, define alerts, and set team favorites. You create a team in Azure DevOps that corresponds to a group of project members focused on specific products, services, or feature areas. As your organization grows, you add teams to support that growth. For a good understanding on how to remain Agile as you add teams, review [Scale Agile to Large Teams](/devops/plan/scaling-agile). For more information about team-configurable tools, see [About teams and Agile tools](about-teams-and-settings.md). 

Each new project is configured with a default team with the project name. For example, the project named Fabrikam Fiber is configured with the default team Fabrikam Fiber Team. You can rename the default team and you can reassign a new team as the default. 
 

> [!NOTE]    
> This article describes how to add a team or team members to a project defined in Azure DevOps. To learn about Microsoft Teams, see the Marketplace extension, [Microsoft Teams Integration](https://marketplace.visualstudio.com/items?itemName=ms-vsts.vss-services-teams). 

Use this article to learn how to perform the following tasks: 
> [!div class="checklist"]   
> * Create a team
> * Add members to a team       
> * Set the default team for a project  


As your team grows, you can easily move from one team to two. In this example, we add two feature teams, Email and Voice, and maintain the Fabrikam Fiber default team with visibility across each of these two teams.  

## Prerequisites 

- If you don't have a project yet, [create one](../projects/create-project.md).  
- To add a team, you must be a member of the **Project Administrators** group. See [Change project-level permissions](../security/change-project-level-permissions.md). Only members of the Project Administrators group can add and delete teams.   

 
<a id="add-team"> </a>  

## Create a team  

From your web browser, you can view, create, and configure teams. Only members of the Project Administrators group can create teams. To change the configuration for a team, you must be a team administrator or member of the Project Administrators group. 

::: moniker range="azure-devops"

From the Azure CLI tool, you can [list teams](#list-teams), [create a team](#add-team), [update a team configuration](rename-remove-team.md#update-team), and [delete a team](rename-remove-team.md#delete-team). 

[!INCLUDE [note-new-teams-page](../../includes/note-new-teams-page.md)]

#### [New Teams UI](#tab/preview-page) 

1. From the web portal, choose **Project settings** and open **Teams**.   
   ![Screenshot of Open Project settings, and then Teams buttons on New Teams page.](media/shared/open-project-settings-teams-preview.png)

1. Choose **New team**.   
	:::image type="content" source="media/add-team/new-team-button-new-teams-preview.png" alt-text="Screenshot of Create a new team dialog, New Teams preview feature enabled.":::

1. Give the team a name, and optionally a description. Make sure to select **Create an area path with the name of the team**. Or, leave it unchecked and assign the default area path for the team after it's created. You can choose an existing area path or add a new one at that time. Team tools aren't available until the team's default area path is set. 
	:::image type="content" source="media/add-team/create-new-team-dialog-new-teams-preview.png" alt-text="Screenshot of Create a new team dialog, New Teams preview feature enabled.":::

1. Select the team to configure it. Choose **Settings** to upload an image, change the team name, add a team administrator, or delete the team.   
	:::image type="content" source="media/add-team/team-settings-dialog-new-teams-preview.png" alt-text="Screenshot of Team Settings dialog, New Teams preview feature enabled.":::

1.  Choose **Iterations and areas** to set the **Area Paths** and **Iteration Paths** for the team to use.   
	:::image type="content" source="media/add-team/team-settings-select-iterations-areas-new-teams-preview.png" alt-text="Screenshot of team settings, Iterations and areas highlighted, New Teams preview feature enabled.":::

	To learn how, see these articles: 
		- [Define area paths and assign to a team](set-area-paths.md)  
		- [Define iteration paths, also known as sprints, and configure team iterations](set-iteration-paths-sprints.md).  

#### [Current UI](#tab/current-page)  

1. From the web portal, choose **Project settings** and open **Teams**.   
	![Screenshot of Open Project settings button, and then Teams button selection on Current page](media/shared/open-project-settings-team-new-nav.png)

2. Choose **New team**. Give the team a name, and optionally a description. Make sure to select **Create an area path with the name of the team**. Or, leave it unchecked and assign the default area path for the team after it's created. You can choose an existing area path or add a new one at that time. Team tools aren't available until the team's default area path is set.   
	 ![Screenshot of New team subteam with its own area path on Current page](media/add-team/create-new-team-new-nav.png)

3. Select the team to configure it.
4. Choose **Iterations and areas** to set the **Area Paths** and **Iteration Paths** for the team to use.   
   ![Screenshot of team profile, choose Iterations and areas link on Current page](media/add-team/team-profile-choose-iterations-and-areas.png)

	To learn how, see these articles: 
		- [Define area paths and assign to a team](set-area-paths.md)  
		- [Define iteration paths, also known as sprints, and configure team iterations](set-iteration-paths-sprints.md).  


#### [Azure DevOps CLI](#tab/azure-devops-cli)

<a id="add-team-cli" /> 

You can add a team using [Azure DevOps team create](/cli/azure/devops/team#ext-azure-devops-az-devops-team-create). To get started, see [Get started with Azure DevOps CLI](../../cli/index.md).  

> [!div class="tabbedCodeSnippets"]
```azurecli
az devops team create --name
                      [--description]
                      [--project] 
```

#### Parameters
 
- **name**: Required. Name of the new team.  
- **description**: Optional. Description of the new team.   
- **project**: Optional. Name or ID of the project. Example: `--project "Fabrikam Fiber"`.  

#### Example

The following command adds a team named **Web** to the Fabrikam Fiber project, and returns a number of properties of the team. 

> [!div class="tabbedCodeSnippets"]
```azurecli
az devops team create --name Web --project "Fabrikam Fiber"
{
  "description": "",
  "id": "5385556a-254d-4ad4-bd11-71955e3a7070",
  "identity": {
    "descriptor": "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-227716950-993605186-2584159299-2630527068-1-1113613831-2979292483-2600436946-77439922",
    "id": "5385556a-254d-4ad4-bd11-71955e3a7070",
    "isActive": true,
    "isContainer": true,
    "masterId": "5385556a-254d-4ad4-bd11-71955e3a7070",
    "memberOf": [],
    "members": [],
    "metaTypeId": 255,
    "properties": {
      "Account": {
        "$type": "System.String",
        "$value": "Web"
      },
      "Description": {
        "$type": "System.String",
        "$value": ""
      },
      "Domain": {
        "$type": "System.String",
        "$value": "vstfs:///Classification/TeamProject/56af920d-393b-4236-9a07-24439ccaa85c"
      },
      "LocalScopeId": {
        "$type": "System.String",
        "$value": "56af920d-393b-4236-9a07-24439ccaa85c"
      },
      "Microsoft.TeamFoundation.Team": {
        "$type": "System.Boolean",
        "$value": true
      },
      "SchemaClassName": {
        "$type": "System.String",
        "$value": "Group"
      },
      "ScopeId": {
        "$type": "System.String",
        "$value": "e03662ad-bec4-4a33-bb0f-86e365ee2d88"
      },
      "ScopeName": {
        "$type": "System.String",
        "$value": "Fabrikam Fiber"
      },
      "ScopeType": {
        "$type": "System.String",
        "$value": "TeamProject"
      },
      "SecuringHostId": {
        "$type": "System.String",
        "$value": "380ed149-33d0-4d78-a7ed-89921802f389"
      },
      "SecurityGroup": {
        "$type": "System.String",
        "$value": "SecurityGroup"
      },
      "SpecialType": {
        "$type": "System.String",
        "$value": "Generic"
      },
      "VirtualPlugin": {
        "$type": "System.String",
        "$value": ""
      }
    },
    "providerDisplayName": "[Fabrikam Fiber]\\Web",
    "resourceVersion": 2,
    "subjectDescriptor": "vssgp.Uy0xLTktMTU1MTM3NDI0NS0yMjc3MTY5NTAtOTkzNjA1MTg2LTI1ODQxNTkyOTktMjYzMDUyNzA2OC0xLTExMTM2MTM4MzEtMjk3OTI5MjQ4My0yNjAwNDM2OTQ2LTc3NDM5OTIy"
  },
  "identityUrl": "https://spsprodeus21.vssps.visualstudio.com/A380ed149-33d0-4d78-a7ed-89921802f389/_apis/Identities/5385556a-254d-4ad4-bd11-71955e3a7070",
  "name": "Web",
  "projectId": "56af920d-393b-4236-9a07-24439ccaa85c",
  "projectName": "Fabrikam Fiber",
  "url": "https://dev.azure.com/fabrikam/_apis/projects/56af920d-393b-4236-9a07-24439ccaa85c/teams/5385556a-254d-4ad4-bd11-71955e3a7070"
}
```
 
* * *

::: moniker-end

::: moniker range=">= azure-devops-2019 < azure-devops"

1. From the web portal, choose **Project settings** and open **Teams**.   
	![Screenshot of Open Project settings button, and then Teams button selection on Current page](media/shared/open-project-settings-team-new-nav.png)

2. Choose **New team**. Give the team a name, and optionally a description. Make sure to select **Create an area path with the name of the team**. Or, leave it unchecked and assign the default area path for the team after it's created. You can choose an existing area path or add a new one at that time. Team tools aren't available until the team's default area path is set.   
	 ![Screenshot of New team subteam with its own area path on Current page](media/add-team/create-new-team-new-nav.png)

3. Select the team to configure it.
4. Choose **Iterations and areas** to set the **Area Paths** and **Iteration Paths** for the team to use.   
   ![Screenshot of team profile, choose Iterations and areas link on Current page](media/add-team/team-profile-choose-iterations-and-areas.png)

	To learn how, see these articles: 
		- [Define area paths and assign to a team](set-area-paths.md)  
		- [Define iteration paths, also known as sprints, and configure team iterations](set-iteration-paths-sprints.md).  

::: moniker-end

::: moniker range="tfs-2018"

<a id="add-team-team-services" /> 

1. From the web portal, choose **Project settings** :::image type="icon" source="../../media/icons/gear_icon.png" border="false":::.    

	 ![Open project admin page](media/add-team/open-admin-context-tfs-2017.png) 

2. Choose **New team**. Give the team a name, and make sure to select **Create an area path with the name of the team**. Or, leave it unchecked and assign the default area path for the team after it's created. You can choose an existing area path or add a new one at that time. Team tools aren't available until the team's default area path is set. 

   	
	 ![Screenshot of how to Create a subteam with its own area path](media/add-team/create-team-dialog.png)

3. Select the team to configure it.  

	 ![Screenshot of Web portal, project admin context, Overview page, Select a team to configure it](media/add-team/select-team.png)

	The Team Profile opens. From the team profile, you can [Add team members](#add-team-members) and [Add team administrators](add-team-administrator.md).

   	
	 ![Screenshot of Team profile, choose Iterations and areas link](media/add-team/team-profile-tfs.png)  

4. Select the set of sprints and area paths the team plans to use. For more information, see [Define iteration paths, also known as sprints, and configure team iterations](set-iteration-paths-sprints.md).

	> [!IMPORTANT]  
	> Team tools aren't available until the team's default area path is set. 

	To configure other team features, see [Manage teams and configure team tools](manage-teams.md).

5. To assign a team as the default team, choose **Actions** :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: for that team and select **Set team as project default**. 

::: moniker-end


> [!IMPORTANT]   
> Configuring the **Area Paths** and **Iteration Paths** used by the team is essential for many of the Azure Board tools to work, such as Backlogs, Boards, Sprints, and Delivery Plans. Team tools aren't available until the team's default area path is set. **Area Paths** and **Iteration Paths** are first configured for the project and then assigned or selected by the team.  

<a id="add-team-members"> </a>  

## Add team members

When you set up a team structure for the first time, add user accounts as team members. This action provides access to the project and team assets. Moving from one team to two teams, team members already have access to the project. To support sharing code, planning, and tracking work, you must have access to the project. 

Several Agile tools, like capacity planning and team alerts, and dashboard widgets are team-scoped. That is, they automatically reference the user accounts of team members to support planning activities or sending alerts. 

::: moniker range="azure-devops"  

> [!NOTE]   
> You must first [add a user to a project or to your organization](../accounts/add-organization-users.md) or [set up your account to work with Azure AD](../accounts/access-with-azure-ad.md). This way you can add user identities to a team.

::: moniker-end

::: moniker range="azure-devops"

#### [New Teams UI](#tab/preview-page) 

You can toggle between direct or expanded membership views. The **Direct Members** view displays users and groups that have been added to the team. The **Expanded Members** view replaces any Azure DevOps groups with the members that belong to those groups. Azure Active Directory or Active Directory groups aren't expanded.  

1. Open a backlog or board for a team and choose the :::image type="icon" source="../../media/icons/team.png" border="false"::: team profile icon. Then choose **Team Settings**. 

   Here we open the Board for the Web team and from there the team profile.  

   > [!div class="mx-imgBorder"]  
   > ![Work Backlog or Board, choose team profile icon](../settings/media/team-defaults/open-team-profile-choose-team-settings.png)  

2. If you need to switch the team context, use the team selector within the breadcrumbs.  

	:::image type="content" source="media/add-users/change-team-context.png" alt-text="Screenshot of Project Settings>Teams>Team and Teams breadcrumb.":::

3. Choose **Add**. 

	> [!div class="mx-imgBorder"]  
	> ![Team Profile, choose Add, preview page](media/add-users/new-teams-page-add-member.png)   

4. Enter the sign-in addresses or display name for each account you want to add. You can also add a project security group&mdash;such as another team group, custom group, or Azure Active Directory group when used by the organization. Add them one at a time or all at the same time. You can enter several identities into the text box, separated by commas.

	:::image type="content" source="media/add-users/change-team-context.png" alt-text="Invite members to team dialog, choose user account.  ":::

   > [!TIP]
   > You must enter user and group names one at a time. However, after entering a name, the account is added to the list, and you can enter another name in the Identities text box before choosing to save your changes.

	You may need to choose the :::image type="icon" source="../../media/icons/refresh.png" border="false"::: refresh icon to see your updates. 

6. To add an account as a team administrator, choose the Settings page and then choose **Add** under the Administrators section. For details, see [Add a team administrator](../../organizations/settings/add-team-administrator.md)

#### [Current UI](#tab/current-page)


You can toggle between direct or expanded membership views. The **direct** view displays users and groups that have been added to the team. The **expanded** view replaces any Azure DevOps groups with the members that belong to those groups. Azure Active Directory or Active Directory groups aren't expanded.   

You add team members from **Project Settings>Work>Team configuration**. You can quickly navigate to it from a team work tracking backlog, board, or dashboard. 

1. Open a backlog or board for a team and choose the **Show Team Profile** :::image type="icon" source="../../media/icons/team.png" border="false":::. Then choose **Team Settings**. 

   Here we open the Board for the Web team and from there the team profile.  

   > [!div class="mx-imgBorder"]  
   > ![Work Backlog or Board, choose team profile icon](media/team-defaults/open-team-profile-choose-team-settings.png)  

2. If you need to switch the team context, use the team selector within the breadcrumbs.  

	> [!div class="mx-imgBorder"]  
	> ![Team Configuration, Team breadcrumb](media/team-defaults/select-team-context.png) 

3. Choose **Add**. 

	> [!div class="mx-imgBorder"]  
	> ![Team Profile, choose Add, currect page](../security/media/add-users/team-profile-choose-add.png)   

4. Enter the sign-in addresses or display name for each account you want to add. Add them one at a time or all at the same time. You can enter several identities into the text box, separated by commas.

	![Add users and group dialog, current page](../security/media/project-level-permissions-add-a-user.png)

   > [!TIP]
   > You must enter user and group names one at a time. However, after entering a name, the account is added to the list, and you can enter another name in the Identities text box before choosing to save your changes.

	You may need to choose the :::image type="icon" source="../../media/icons/refresh.png" border="false"::: refresh icon to see your updates. 

6. To add an account as a team administrator, choose **Add** located in the Team Profile page. For details, see [Add a team administrator](add-team-administrator.md)

*** 
::: moniker-end


::: moniker range=">= azure-devops-2019 < azure-devops"

You can toggle between direct or expanded membership views. The **direct** view displays users and groups that have been added to the team. The **expanded** view replaces any Azure DevOps groups with the members that belong to those groups. Azure Active Directory or Active Directory groups aren't expanded.   

You add team members from **Project Settings>Work>Team configuration**. You can quickly navigate to it from a team work tracking backlog, board, or dashboard. 

1. Open a backlog or board for a team and choose the **Show Team Profile** :::image type="icon" source="../../media/icons/team.png" border="false":::. Then choose **Team Settings**. 

   Here we open the Board for the Web team and from there the team profile.  

   > [!div class="mx-imgBorder"]  
   > ![Work Backlog or Board, choose team profile icon](../settings/media/team-defaults/open-team-profile-choose-team-settings.png)  

2. If you need to switch the team context, use the team selector within the breadcrumbs.  

	> [!div class="mx-imgBorder"]  
	> ![Team Configuration, Team breadcrumb](media/team-defaults/select-team-context.png) 

3. Choose **Add**. 

	> [!div class="mx-imgBorder"]  
	> ![Team Profile, choose Add, currect page](../security/media/add-users/team-profile-choose-add.png)   

4. Enter the sign-in addresses or display name for each account you want to add. Add them one at a time or all at the same time. You can enter several identities into the text box, separated by commas.

	![Add users and group dialog, current page](../security/media/project-level-permissions-add-a-user.png)

   > [!TIP]
   > You must enter user and group names one at a time. However, after entering a name, the account is added to the list, and you can enter another name in the Identities text box before choosing to save your changes.

	You may need to choose the :::image type="icon" source="../../media/icons/refresh.png" border="false"::: refresh icon to see your updates. 

6. To add an account as a team administrator, choose **Add** located in the Team Profile page. For details, see [Add a team administrator](add-team-administrator.md)

::: moniker-end

::: moniker range="tfs-2018"

1. From the project admin context, open the **Overview** page, and then choose the team you want to add team members to.   

	![Project Settings, Overview page, Choose team](media/add-users/overview-page-select-team.png) 

2. Choose the ![plus icon](../../media/icons/add-light-icon.png)**Add** to add a user or a user group.

3. Enter the sign-in addresses or display name for each user you want to add. Add them one at a time or all at the same time. You can enter several identities into the text box, separated by commas.

	![Add users and group dialog, 2018 and earlier](../security/media/project-level-permissions-add-a-user.png)

   > [!TIP]
   > You must enter user and group names one at a time. However, after entering a name, it is added to the list, and you can enter another name in the Identities text box before choosing to save your changes.

	You may need to choose the :::image type="icon" source="../../media/icons/refresh.png" border="false"::: refresh icon to see your updates. 

5. To add an account as a team administrator, choose **Add** located in the Team Profile page. For details, see [Add a team administrator](add-team-administrator.md).

::: moniker-end

 

::: moniker range="< azure-devops"  

> [!NOTE]   
> The first time you add a user account, you must enter the full domain name and the alias. Afterwards, you can browse for that name by display name as well as account name. To learn more, see [Set up groups for use in Azure DevOps Server deployments](/azure/devops/server/admin/setup-ad-groups).

::: moniker-end 


::: moniker range=">= azure-devops-2019"

1. From the web portal, choose **Project settings** and open **Teams** as described in the previous section.  
 
2. Choose the team you want to add team members to.  **New team**. Give the team a name, and optionally a description. 

	 
	 ![Screenshot of New team subteam with its own area path on Current page](media/add-team/create-new-team-new-nav.png)

3. Select the team to configure it, and then choose **Iterations and areas**. For more information, see [Define area paths and assign to a team](set-area-paths.md). See also [Define iteration paths, also known as sprints, and configure team iterations](set-iteration-paths-sprints.md). 

	 
   ![Screenshot of team profile, choose Iterations and areas link on Current page](media/add-team/team-profile-choose-iterations-and-areas.png)

	> [!IMPORTANT]  
	> Team tools aren't available until the team's default area path is set. If you haven't created one or more Area Paths for the team to use, then [do that now](set-area-paths.md). Area Paths must be created for the project first, then assigned to the team. 

::: moniker-end

::: moniker range="tfs-2018"

<a id="add-team-team-services" /> 

1. From the web portal, choose **Project settings** :::image type="icon" source="../../media/icons/gear_icon.png" border="false":::.  

	 ![Open project admin page](media/add-team/open-admin-context-tfs-2017.png) 

2. Choose **New team**. Give the team a name, and make sure to select **Create an area path with the name of the team**. Or, leave it unchecked and assign the default area path for the team after it's created. You can choose an existing area path or add a new one at that time. Team tools aren't available until the team's default area path is set. 

	 ![Screenshot of how to Create a subteam with its own area path](media/add-team/create-team-dialog.png)

3. Select the team to configure it. 

	 ![Screenshot of Web portal, project admin context, Overview page, Select a team to configure it](media/add-team/select-team.png)

	The Team Profile opens. From the team profile, you can [Add team members](#add-team-members) and [Add team administrators](add-team-administrator.md).

   	
	 ![Screenshot of Team profile, choose Iterations and areas link](media/add-team/team-profile-tfs.png)  

4. Select the set of sprints and area paths the team plans to use. For more information, see [Define iteration paths, also known as sprints, and configure team iterations](set-iteration-paths-sprints.md).

	> [!IMPORTANT]  
	> Team tools aren't available until the team's default area path is set. 

	To configure other team features, see [Manage teams and configure team tools](manage-teams.md).

5. To assign a team as the default team, choose **Actions** :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: for that team and select **Set team as project default**. 

::: moniker-end

From the team profile, you can do do these additional tasks:  
- [Add team administrators](add-team-administrator.md)
- [Add team members](#add-team-members)
- [Navigate to team notifications](../../notifications/manage-team-group-global-organization-notifications.md)
- [Navigate to and set default team dashboard permissions](../../report/dashboards/dashboard-permissions.md)

To configure other team features, see [Manage teams and configure team tools](manage-teams.md).

<a id="include-area-paths"> </a>  

## Set the default project team 
 
::: moniker range="azure-devops"

One last step in moving from one team to two teams requires configuring the default project team to exclude sub-areas.  


#### [New Teams UI](#tab/preview-page) 

1. Open **Project settings > Team configuration > Areas** settings page for the default project team, and change the setting as shown.  

	 ![Screenshot of Default project team configuration, and Exclude work items defined in sub-area paths on the New Teams page](media/add-team/exclude-areas-default-team-vert.png)  

2. Refresh the product backlog page for the team, and you see only those work items assigned to the *Fabrikam Fiber* area path.
  
     
   ![Screenshot of the product backlog and the default project team on the New Teams page](media/add-team/product-backlog-default-team.png)

#### [Current UI](#tab/current-page) 

1. Open **Project settings > Team configuration > Areas** settings page for the default project team, and change the setting as shown.  

	   
	 ![Screenshot of Current page default project team configuration, Exclude work items defined in sub-area paths, new nav](media/add-team/exclude-areas-default-team-vert.png)  

2. Refresh the product backlog page for the team, and you see only those work items assigned to the *Fabrikam Fiber* area path.  

	   
	 ![Screenshot of Current page Product backlog, default project team](media/add-team/product-backlog-default-team.png)

#### [Azure DevOps CLI](#tab/azure-devops-cli) 

You can set the default area path for a team or add an area path, using [az boards area team add](/cli/azure/boards/area/team#ext-azure-devops-az-boards-area-team-add).  To get started, see [Get started with Azure DevOps CLI](../../cli/index.md). 

> [!div class="tabbedCodeSnippets"]
```azurecli
az boards area team add --path  --team
                        [--include-sub-areas {false, true}]
                        [--project]
                        [--set-as-default]
```

#### Parameters

- **path**: Required. Absolute path of an area. Example: --path \ProjectName\Area\AreaName. 
- **team**: Required. Name or ID of the team.
- **include-sub-areas**: Optional. Include child nodes of the area path. Accepted values: false, true. 
- **project**: Optional. Name or ID of the project. Example: --project "Fabrikam Fiber".  
- **set-as-default**: Optional. Specify as the default area path for the team. Default: False.

#### Example

For example, the following command adds the Voice area path to the Voice team for the Fabrikam Fiber project, sets it as the default and to include sub-areas. 

> [!div class="tabbedCodeSnippets"]
```azurecli
az boards area team add --path "\Fabrikam Fiber\Voice" --team Voice --project "Fabrikam Fiber" --include-sub-areas --set-as-default --include-sub-areas true --output table
Area                                   Include sub areas    Is Default
-------------------------------------  -------------------  ------------
Fabrikam Fiber\Service Delivery\Voice  False                False
Fabrikam Fiber\Voice                   True                 True
```

 
* * *

::: moniker-end


::: moniker range=">= azure-devops-2019 < azure-devops" 

1. Open **Project settings > Team configuration > Areas** settings page for the default project team, and change the setting as shown.  

	   
	 ![Screenshot of Current page default project team configuration, Exclude work items defined in sub-area paths, new nav](media/add-team/exclude-areas-default-team-vert.png)  

2. Refresh the product backlog page for the team, and you see only those work items assigned to the *Fabrikam Fiber* area path.  

	   
	 ![Screenshot of Current page Product backlog, default project team](media/add-team/product-backlog-default-team.png)

::: moniker-end

::: moniker range="tfs-2018"

1. Open the **Work > Areas** settings page for the default project team, and change the setting as shown.  

	   
	 ![Screenshot of Web portal, Admin context, default project, Exclude work items defined in sub-area paths](media/add-team/exclude-areas-default-team-horz.png)  

2. Refresh the product backlog page for the team, and you see only those work items assigned to the *Fabrikam Fiber* area path.  

     
   ![Screenshot of the Backlog view of default team](media/add-team/product-backlog-default-team-horz.png)  

::: moniker-end



<a id="list-teams" /> 

::: moniker range="azure-devops" 

## List teams with Azure CLI

You can list teams using [Azure DevOps team list](/cli/azure/devops/team#ext-azure-devops-az-devops-team-list). To get started, see [Get started with Azure DevOps CLI](../../cli/index.md).  

> [!div class="tabbedCodeSnippets"]
```azurecli
az devops team list [--project]
                    [--skip]
                    [--top]
```

> [!TIP]
> If you don't specify a **top** number, 100 teams are returned. To list all teams in a project, specify a number for **top** which is greater than the current number of teams defined.  

#### Parameters

- **project**: Optional. Name or ID of the project. Example: --project "Fabrikam Fiber".  You can configure the default project using `az devops configure -d project=NAME_OR_ID`. Required if not configured as default or picked up via git config.
- **skip**: Optional. Number of teams to skip.  
- **top**: Optional. Maximum number of teams to return. 

#### Example

For example, the following command returns the 11 teams defined in the Fabrikam Fiber project. For addition output formats, see [Output formats for Azure CLI commands](/cli/azure/format-output-azure-cli). 

Each team is assigned a unique ID. 

> [!div class="tabbedCodeSnippets"]
```azurecli
az devops team list --project "Fabrikam Fiber" --output table
ID                                    Name                Description
------------------------------------  ------------------  ----------------------------------------------------------------------------
7f099146-29a2-4798-9949-77c9f5f79653  Account Management  Management team focused on creating and maintaining customer services
2017b37a-486b-4222-ac84-b8b9eefa540e  Customer Profile    Feature team focused on securing account data
a90cd8f0-8e0d-42d6-aeb2-13442b826730  Email               Feature team delivering email apps
a48cb46f-7366-4f4b-baf5-b3632398ed1e  Fabrikam Team       The default project team. Was Fabrikam Fiber Team
e42fccbc-d96f-4c98-8168-7a85ecede548  Internet            Feature team developing web apps
b70aa504-33b4-4d17-a85d-0fbf4829a154  Phone               Feature team delivering phone apps
43e6bd2e-696f-492c-bbf7-9cde9cd420ea  Service Delivery    Management team responsible for ensure high performance delivery of services
8920d2ec-eed1-4792-8934-82a57abce7c2  Service Status      Feature team focused on monitoring and addressing service issues
9c676c8c-1910-4f73-b7b9-a946b5c551ae  Shopping Cart       Feature team managing shopping cart apps
64b86488-e105-4901-ba43-ffd48137bb93  TV                  Feature team developing TV apps
cda2b9b0-0335-4a0d-8bd0-67611d64ce9d  Voice               Feature team focused on voice communications
```

::: moniker-end

<a id="grant-add-permissions"></a>  

## Grant team members additional permissions  

For teams to work autonomously, you may want to provide them with permissions that they don't have by default. Suggested tasks include providing team administrators or team leads permissions to:  

- Create and edit child nodes under their default area path
- Create and edit child nodes under an existing iteration node 
- Create shared queries and folders under the Shared Queries folder

For more information on setting permissions and access for select users, see [Set permissions and access for work tracking](../security/set-permissions-access-work-tracking.md).

::: moniker range="<= azure-devops-2020" 

If your deployment is integrated with SQL Server Reports, you need to [Grant permissions to view or create SQL Server reports to team members](/previous-versions/azure/devops/report/admin/grant-permissions-to-reports). 

::: moniker-end 


## Next steps

Configure your Agile tools to support how your team works. Also, consider adding one or more users as team administrators. Team administrators have the necessary permissions to add team members, add a picture to the team profile, and configure and manage all team features.  

> [!div class="nextstepaction"]
> [Move work items from one team to another team](move-team-work-items.md)
> or
> [Manage teams and configure team tools](manage-teams.md)

## Related articles

- [Rename or remove a team](rename-remove-team.md)
- [About teams and Agile tools](about-teams-and-settings.md)
- [Azure DevOps Teams CLI](/cli/azure/devops/team)
- [Teams (REST API)](/rest/api/azure/devops/core/teams)
- [Work Items (REST API)](/rest/api/azure/devops/wit)