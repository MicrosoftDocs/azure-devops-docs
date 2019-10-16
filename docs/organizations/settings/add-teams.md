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
ms.date: 08/15/2019
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
- If you're not a Project Administrator, [get added as one](../../organizations/security/set-project-collection-level-permissions.md). Only members of the Project Administrators group can add and delete teams.   


## Add two feature teams 

::: moniker range="azure-devops"

From your web browser you can view teams that have been added and add teams. From the Azure DevOps CLI command, you can list teams, add teams, and run other team management commands. 

::: moniker-end

Add and configure two teams, Email and Voice. Here we show you how to add and configure the Email team. 

#### [Browser](#tab/browser)
 
::: moniker range="azure-devops"

1. From the web portal, choose **Project settings** and open **Teams**. 

	> [!div class="mx-imgBorder"]
	> ![Open Code, new nav](_img/add-team/open-project-settings-teams-new-nav.png) 

2. Choose **New team**. Give the team a name, and optionally a description. 

	> [!div class="mx-imgBorder"]
	> ![Create a sub-team with its own area path](_img/add-team/create-new-team-new-nav.png)

3. Select the team to configure it. To select the set of sprints and area paths the team plans to use, choose **Iterations and areas** See [Define area paths and assign to a team](set-area-paths.md) and [Define iteration paths (aka sprints) and configure team iterations](set-iteration-paths-sprints.md). 

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

1. From the web portal, choose the ![ ](../../_img/icons/gear_icon.png) gear settings icon to open the **Project settings** page for the project.  

	![Open project admin page](_img/add-team/open-admin-context-tfs-2017.png) 

1. Choose **New team**. Give the team a name, and make sure to select **Create an area path with the name of the team**. Or, leave it unchecked and assign the default area path for the team after it is created. You can choose an existing area path or add a new one at that time. Team tools aren't available until the team's default area path is set. 

	![Create a sub-team with its own area path](_img/add-team/create-team-dialog.png)

2. Select the team to configure it. 

	![Web portal, project admin context, Overview page, Select a team to configure it](_img/add-team/select-team.png)

	The Team Profile opens. From the team profile, you can [Add team members](#add-team-members) and [Add team administrators](add-team-administrator.md).

	![Team profile, choose Iterations and areas link](_img/add-team/team-profile-tfs.png)  

3. To select the set of sprints and area paths the team plans to use, see [Define iteration paths (aka sprints) and configure team iterations](set-iteration-paths-sprints.md).

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


#### [Azure DevOps CLI](#tab/azure-devops-cli)

::: moniker range="azure-devops"  

[List teams](#list-teams) | [Add a team](#add-team) | [Move work items](#move-work-items) | [Delete a team](#delete-team)

<a id="list-teams" /> 

### List teams 

You can list teams using [az devops team list](/cli/azure/ext/azure-devops/devops/team#ext-azure-devops-az-devops-team-list). To get started, see [Get started with Azure DevOps CLI](../../cli/index.md).  

> [!div class="tabbedCodeSnippets"]
```CLI
az devops team list [--project]
                    [--skip]
                    [--top]
```

#### Parameters

- **project**: Optional. Name or ID of the project. Example: --project "Fabrikam Fiber".  You can configure the default project using `az devops configure -d project=NAME_OR_ID`. Required if not configured as default or picked up via git config.
- **skip**: Optional. Number of teams to skip.  
- **top**: Optional. Maximum number of teams to return. 

#### Example

For example, the following command returns the 11 teams defined in the Fabrikam Fiber project. For addition output formats, see [Output formats for Azure CLI commands](/cli/azure/format-output-azure-cli). 

Note that each team is assigned a unique ID. 

> [!div class="tabbedCodeSnippets"]
```CLI
C:\WINDOWS\system32>az devops team list --project "Fabrikam Fiber" --output table
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

<a id="add-team" /> 

### Add a team 

You can add a team using [az devops team create](/cli/azure/ext/azure-devops/devops/team#ext-azure-devops-az-devops-team-create). To get started, see [Get started with Azure DevOps CLI](../../cli/index.md).  

> [!div class="tabbedCodeSnippets"]
```CLI
az devops team create --name
                      [--description]
                      [--project] 
```

#### Parameters
 
- **name**: Required. Name of the new team.  
- **description**: Optional. Description of the new team.   
- **project**: Optional. Name or ID of the project. Example: --project "Fabrikam Fiber".  


#### Example

The following command adds a team named **Web** to the Fabrikam Fiber project, and returns a number of properties of the team. 

> [!div class="tabbedCodeSnippets"]
```CLI
C:\WINDOWS\system32>az devops team create --name Web --project "Fabrikam Fiber"
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
  "url": "https://dev.azure.com/kelliott/_apis/projects/56af920d-393b-4236-9a07-24439ccaa85c/teams/5385556a-254d-4ad4-bd11-71955e3a7070"
}
```


::: moniker-end

[!INCLUDE [temp](../../_shared/note-cli-not-supported.md)]

* * *


<a id="add-team-members"> </a>  

## Add team members

If you're moving from one team to two teams, team members already have access to the project. If you're setting up a team structure for the first time, adding user accounts as team members provides them access to the project and team assets. Access to the project is required to support sharing code and planning and tracking work. 

Several Agile tools, like capacity planning and team alerts, and dashboard widgets are team-scoped. That is, they automatically reference the user accounts of team members to support planning activities or sending alerts. 


::: moniker range="azure-devops"  

> [!NOTE]   
> You must first [add a user to a project or to your organization](../accounts/add-organization-users.md) or [setup your account to work with Azure AD](../accounts/access-with-azure-ad.md). This way you can add user identities to a team.

::: moniker-end 


::: moniker range="< azure-devops"  

> [!NOTE]   
> The first time you add a user account, you must enter the full domain name and the alias. Afterwards, you can browse for that name by display name as well as account name. To learn more, see [Set up groups for use in Azure DevOps Server deployments](/azure/devops/server/admin/setup-ad-groups).

::: moniker-end 

For details, see [Add users to a project or specific team](../security/add-users-team-project.md). 


## Move work items under teams 

Now that your two feature teams are configured, you need to move existing work items from their current assignments to the team's default area path. This way, the work items show up on each team's backlog. 

#### [Browser](#tab/browser) 

1. The quickest way to do this, is to [create a query](../../boards/queries/using-queries.md) of all work items you want to reassign, multi-select those items belonging to each team, and [bulk edit the area path](../../boards/backlogs/bulk-modify-work-items.md). 

   ::: moniker range=">= azure-devops-2019"  

   > [!div class="mx-imgBorder"]  
   > ![Web portal, Queries page, Bulk modify select work items](_img/add-team/query-bulk-edit-area-path.png)

   ::: moniker-end  

   ::: moniker range="<= tfs-2018"  

   ![Web portal, Queries page, Bulk modify select work items](_img/add-team/scale-agile-bulk-modify-area-path-co.png)

   ::: moniker-end  

2. After you bulk modify, do a bulk save.  

   ::: moniker range=">= azure-devops-2019"    
   > [!div class="mx-imgBorder"]  
   > ![Bulk save edited work items](_img/add-team/query-bulk-save.png)

   ::: moniker-end  

   ::: moniker range="<= tfs-2018"  

   ![Web portal, Queries page, Bulk save selected work items](_img/add-team/scale-agile-bulk-save-area-path-co.png)  

   ::: moniker-end  


#### [Azure DevOps CLI](#tab/azure-devops-cli)

::: moniker range="azure-devops"

<a id="move-work-items" /> 

You can move work items to a new area paths using [az boards work-item update](/cli/azure/ext/azure-devops/boards/work-item#ext-azure-devops-az-boards-work-item-update).  

> [!div class="tabbedCodeSnippets"]
```CLI
az boards work-item update --id
                           [--area]
                           [--assigned-to]
                           [--description]
                           [--discussion]
                           [--fields]
                           [--iteration]
                           [--open]
                           [--reason]
                           [--state]
                           [--title]
```

#### Parameters

- **id**: Required. The id of the work item to update.
- **area**: Optional. Absolute path of an area. Example: --path \ProjectName\Area\AreaName.  
- **assigned-to**: Optional. Name of the person the work item is assigned to *Jamal*.
- **description**: Optional. Description of the work item. 
- **discussion**: Optional. Comment to add to a discussion in a work item.
- **fields**: Optional. Space separated "field=value" pairs for custom fields you want to set.
- **iteration**: Optional. Absolute path of an iteration. Example: \ProjectName\Iteration\IterationName.  
- **open**: Optional. Open the work item in the default web browser. 
- **reason**: Optional. Reason for the state of the work item. 
- **state**: Optional. State of the work item, for example, *Active*. 
- **title**: Optional. Title of the work item. 

#### Example

You can only move one work item at a time using Azure DevOps CLI. In this example, we move work item ID=487 under the Fabrikam Fiber/Service Delivery/Email area path.

> [!div class="tabbedCodeSnippets"]
```CLI
C:\WINDOWS\system32>az boards work-item update --id 487 --area "Fabrikam Fiber\Service Delivery\Email"
{
  "fields": {
    "Microsoft.VSTS.Common.BacklogPriority": 1944453550.0,
    "Microsoft.VSTS.Common.Priority": 1,
    "Microsoft.VSTS.Common.Severity": "3 - Medium",
    "Microsoft.VSTS.Common.StateChangeDate": "2016-11-15T23:24:26.143Z",
    "Microsoft.VSTS.Common.ValueArea": "Business",
    "System.AreaPath": "Fabrikam Fiber\\Service Delivery\\Email",
    "System.AssignedTo": {
      "_links": {
        "avatar": {
          "href": "https://dev.azure.com/kelliott/_apis/GraphProfile/MemberAvatars/msa.ZmUwYjk5NmYtZTAyNS03NzBkLTgxNmYtMzk1NDQwYzViMzgw"
        }
      },
      "descriptor": "msa.ZmUwYjk5NmYtZTAyNS03NzBkLTgxNmYtMzk1NDQwYzViMzgw",
      "displayName": "Raisa Pokrovskaya",
      "id": "bd30c189-db0f-4dd6-9418-5d8b41dc1754",
      "imageUrl": "https://dev.azure.com/kelliott/_apis/GraphProfile/MemberAvatars/msa.ZmUwYjk5NmYtZTAyNS03NzBkLTgxNmYtMzk1NDQwYzViMzgw",
      "uniqueName": "fabrikamfiber5@hotmail.com",
      "url": "https://spsprodeus21.vssps.visualstudio.com/A380ed149-33d0-4d78-a7ed-89921802f389/_apis/Identities/bd30c189-db0f-4dd6-9418-5d8b41dc1754"
    },
    "System.BoardColumn": "New",
    "System.BoardColumnDone": false,
    "System.ChangedBy": {
      "_links": {
        "avatar": {
          "href": "https://dev.azure.com/kelliott/_apis/GraphProfile/MemberAvatars/msa.MmZhZDE3ZDAtMjRmZi03YjY5LWE5ZTUtMzYxMzQwOTZlNzNk"
        }
      },
      "descriptor": "msa.MmZhZDE3ZDAtMjRmZi03YjY5LWE5ZTUtMzYxMzQwOTZlNzNk",
      "displayName": "Kathryn",
      "id": "a0f9fe47-8a0a-438c-adfb-403c69664618",
      "imageUrl": "https://dev.azure.com/kelliott/_apis/GraphProfile/MemberAvatars/msa.MmZhZDE3ZDAtMjRmZi03YjY5LWE5ZTUtMzYxMzQwOTZlNzNk",
      "uniqueName": "kebelliott@msn.com",
      "url": "https://spsprodeus21.vssps.visualstudio.com/A380ed149-33d0-4d78-a7ed-89921802f389/_apis/Identities/a0f9fe47-8a0a-438c-adfb-403c69664618"
    },
    "System.ChangedDate": "2019-08-15T20:36:18.34Z",
    "System.CommentCount": 0,
    "System.CreatedBy": {
      "_links": {
        "avatar": {
          "href": "https://dev.azure.com/kelliott/_apis/GraphProfile/MemberAvatars/msa.MmZhZDE3ZDAtMjRmZi03YjY5LWE5ZTUtMzYxMzQwOTZlNzNk"
        }
      },
      "descriptor": "msa.MmZhZDE3ZDAtMjRmZi03YjY5LWE5ZTUtMzYxMzQwOTZlNzNk",
      "displayName": "Kathryn",
      "id": "a0f9fe47-8a0a-438c-adfb-403c69664618",
      "imageUrl": "https://dev.azure.com/kelliott/_apis/GraphProfile/MemberAvatars/msa.MmZhZDE3ZDAtMjRmZi03YjY5LWE5ZTUtMzYxMzQwOTZlNzNk",
      "uniqueName": "kebelliott@msn.com",
      "url": "https://spsprodeus21.vssps.visualstudio.com/A380ed149-33d0-4d78-a7ed-89921802f389/_apis/Identities/a0f9fe47-8a0a-438c-adfb-403c69664618"
    },
    "System.CreatedDate": "2016-11-15T23:24:26.143Z",
    "System.IterationPath": "Fabrikam Fiber\\Release 1\\Sprint 4",
    "System.Reason": "New defect reported",
    "System.State": "New",
    "System.TeamProject": "Fabrikam Fiber",
    "System.Title": "Check issues with permissions",
    "System.WorkItemType": "Bug",
    "WEF_1C5A9C9263944104B13DEF47AB16892F_Kanban.Column": "Backlog",
    "WEF_1C5A9C9263944104B13DEF47AB16892F_Kanban.Column.Done": false,
    "WEF_728F47E9D8BF470AB800917CB3E81BD0_Kanban.Column": "New",
    "WEF_728F47E9D8BF470AB800917CB3E81BD0_Kanban.Column.Done": false,
    "WEF_7ADD68E5D87D4B75AA575F3757C5FB14_Kanban.Column": "New",
    "WEF_7ADD68E5D87D4B75AA575F3757C5FB14_Kanban.Column.Done": false,
    "WEF_7E5E0F9353CB4F0091FCCE45C49F5636_Kanban.Column": "New",
    "WEF_7E5E0F9353CB4F0091FCCE45C49F5636_Kanban.Column.Done": false,
    "WEF_E825423B472B438797D4385614A48F91_Kanban.Column": "New",
    "WEF_E825423B472B438797D4385614A48F91_Kanban.Column.Done": false
  },
  "id": 487,
  "relations": [
    {
      "attributes": {
        "isLocked": false,
        "name": "Parent"
      },
      "rel": "System.LinkTypes.Hierarchy-Reverse",
      "url": "https://dev.azure.com/kelliott/56af920d-393b-4236-9a07-24439ccaa85c/_apis/wit/workItems/546"
    },
    {
      "attributes": {
        "isLocked": false,
        "name": "Child"
      },
      "rel": "System.LinkTypes.Hierarchy-Forward",
      "url": "https://dev.azure.com/kelliott/56af920d-393b-4236-9a07-24439ccaa85c/_apis/wit/workItems/374"
    }
  ],
  "rev": 24,
  "url": "https://dev.azure.com/kelliott/56af920d-393b-4236-9a07-24439ccaa85c/_apis/wit/workItems/487"
}

```


::: moniker-end


[!INCLUDE [temp](../../_shared/note-cli-not-supported.md)]

* * *



<a id="include-area-paths"> </a>  

## Configure the default project team 

One last step in moving from one team to two teams requires configuring the default project team to exclude sub-areas.  

::: moniker range=">= azure-devops-2019"

1. Open **Project Settings>Team Configuration** settings page for the default project team, and change the setting as shown.  

	> [!div class="mx-imgBorder"]  
	> ![New nav, default project team configuration, Exclude work items defined in sub-area paths, new nav](_img/add-team/exclude-areas-default-team-vert.png)  

1. Refresh the product backlog page for the team, and you'll see only those work items assigned to the *Fabrikam Fiber* area path.  

   > [!div class="mx-imgBorder"]  
   > ![Product backlog, default project team](_img/add-team/product-backlog-default-team.png)

::: moniker-end


::: moniker range=">= tfs-2017 <= tfs-2018"

1. Open the **Work>Areas** settings page for the default project team, and change the setting as shown.  

	> [!div class="mx-imgBorder"]  
	> ![Web portal, Admin context, default project, Exclude work items defined in sub-area paths](_img/add-team/exclude-areas-default-team-horz.png)  

1. Refresh the product backlog page for the team, and you'll see only those work items assigned to the *Fabrikam Fiber* area path.  

   > [!div class="mx-imgBorder"]  
   > ![Backlog view of default team](_img/add-team/product-backlog-default-team-horz.png)  

::: moniker-end

::: moniker range="<= tfs-2015"  

1. Open the **Areas** settings page for the default project team, and change the setting as shown.  

	![Web portal, Admin context, default project, Exclude work items defined in sub-area paths](_img/add-team/multiple-teams-exclude-sub-area-paths.png)  

1. Refresh the product backlog page for the team, and you'll see only those work items assigned to the *Fabrikam Fiber* area path.  

   ![Web portal, Backlog view of default team](_img/add-team/multiple-teams-product-backlog-default-team.png)  

::: moniker-end

## Delete a team 

#### [Browser](#tab/browser)

::: moniker range=">= azure-devops-2019"

1. To delete a team, open **Project Settings>Teams**, choose the &hellip; context menu for the team you want to delete, and select the **Delete** option.   
	> [!div class="mx-imgBorder"]  
	> ![Project Settings>Teams>Delete team](_img/add-team/delete-team-vert.png)  

	> [!IMPORTANT]   
	> Deleting a team deletes all team configuration settings, including team dashboards, backlogs, and boards. Data defined for work items assigned to the team are left unchanged. Once deleted, you can't recover the team configurations. 

1. To complete the delete operation, you must type the name of the WIT as shown. 

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


#### [Azure DevOps CLI](#tab/azure-devops-cli)

<a id="delete-team" /> 

::: moniker range="azure-devops"

You can delete a team using [az devops team delete](/cli/azure/ext/azure-devops/devops/team#ext-azure-devops-az-devops-team-delete).  

> [!div class="tabbedCodeSnippets"]
```CLI
az devops team delete --id
                      [--project]
                      [--yes]
```


#### Parameters

- **id**: Required. The id of the team to delete.
- **project**: Optional. Name or ID of the project. Example: --project "Fabrikam Fiber".
- **yes**: Optional. Specify to not prompt for confirmation. 

#### Example

> [!div class="tabbedCodeSnippets"]
```CLI
C:\WINDOWS\system32>az devops team delete --id 5385556a-254d-4ad4-bd11-71955e3a7070 --project "Fabrikam Fiber"
Are you sure you want to delete this team? (y/n): y

```

::: moniker-end

[!INCLUDE [temp](../../_shared/note-cli-not-supported.md)]

* * *

<a id="grant-add-permissions"></a>  

## Grant team members additional permissions  

For teams to work autonomously, you may want to provide them with permissions that they don't have by default. Suggested tasks include providing team administrators or team leads permissions to:  

- Create and edit child nodes under their default area path
- Create and edit child nodes under an existing iteration node 
- Create shared queries and folders under the Shared Queries folder

For more information on setting the above permissions or restricting access for select users, see [Set permissions and access for work tracking](../security/set-permissions-access-work-tracking.md).


::: moniker range=">= tfs-2018 <= azure-devops-2019" 

If your Azure DevOps Server or TFS deployment is integrated with SQL Server Reports, you'll need to [Grant permissions to view or create SQL Server reports to team members](../../report/admin/grant-permissions-to-reports.md). 

::: moniker-end 

::: moniker range="<= tfs-2017" 

If your TFS deployment is integrated with a SharePoint product or SQL Server Reports, you'll need to manage membership for those products separately from their websites. 

-  [Set SharePoint site permissions](../security/set-sharepoint-permissions.md) 
-  [Grant permissions to view or create SQL Server reports in TFS](../../report/admin/grant-permissions-to-reports.md). 

::: moniker-end 


## Try this next 

Once you've created a team, you'll want to configure your Agile tools to support how your team works. Also, consider adding one or more users as team administrators. Team administrators have the necessary permissions to add team members, add a picture to the team profile, and configure and manage all team features.  

> [!div class="nextstepaction"]
> [Add team administrator](add-team-administrator.md)
> or
> [Manage teams and configure team tools](manage-teams.md)


## Related articles

- [About teams and Agile tools](about-teams-and-settings.md)
- [az devops team (Azure DevOps CLI)](/cli/azure/ext/azure-devops/devops/team)
- [Teams (REST API)](/rest/api/azure/devops/core/teams)
- [Work Items (REST API)](/rest/api/azure/devops/wit/work-items)