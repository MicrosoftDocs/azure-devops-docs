---
title: Rename or Remove a Team 
titleSuffix: Azure DevOps 
description: Learn how to rename or remove, delete a team in Azure DevOps. 
ms.subservice: azure-devops-settings
ms.assetid: 9F1D0A0F-02D5-4E06-A5EC-C220472A0F66
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 03/02/2026
ms.custom: sfi-image-nochange
---

# Rename or remove a team  

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

As your organization evolves, you might need to rename or remove a team to better align with new roles, projects, or organizational structures.

When you rename a team, the new name automatically propagates throughout Azure DevOps, ensuring consistency and avoiding confusion. The following team artifacts automatically get renamed:
- Team security group
- Team backlogs and boards
- Team dashboards

Automatic renaming maintains access controls, project tracking, and dashboard configurations without manual updates. Removing a team deletes its configuration settings, including dashboards, backlogs, and boards. The team's members are reassigned to other teams, ensuring workflow continuity and organizational clarity. Work item data remains unchanged. Team configurations can't be recovered after deletion.

> [!TIP]    
> Update any queries that reference the old team security group name.

## Prerequisites 

[!INCLUDE [prerequisites-project-administrator-only](../../includes/prerequisites-project-administrator-only.md)]

## Rename a team

#### [Web portal](#tab/preview-page) 

::: moniker range="azure-devops"

1. From your project in the web portal, select **Project settings** > **Teams**. 

	:::image type="content" source="media/shared/open-project-settings-teams-preview.png" alt-text="Screenshot of Open Project settings, and then Teams, new Teams page.":::

1. Choose the team you want to rename, and then select **Settings**.  

1. Under **Team Details**, enter a new name for the team. Optionally, add a new description.  

1. **Save** your changes.

::: moniker-end

[!INCLUDE [temp](../../includes/note-new-teams-not-supported.md)]

#### [Azure DevOps CLI](#tab/azure-devops-cli) 

<a id="update-team"></a> 

::: moniker range="azure-devops"

You can rename a team or its description by using [Azure DevOps team update](/cli/azure/devops/team#az-devops-team-update). For more information, see [Get started with Azure DevOps CLI](../../cli/index.md).  

> [!div class="tabbedCodeSnippets"]
```azurecli
az devops team update --team
                      [--description]
                      [--name]
                      [--org]
                      [--project]
```

#### Parameters

- `team`: Optional. Name or ID of a team.  
- `description`: Optional. Description to apply to the team.  
- `name`: Optional. Name to apply to rename the team.   
- `org`: Optional. URL of organization. You can configure the default organization by using `az devops configure -d org=URL`. Required if not configured as default or picked up via git config.
- `project`: Optional. Name or ID of the project. Example: `--project "Fabrikam Fiber"`. You can configure the default project by using `az devops configure -d project=NAME_OR_ID`. Required if not configured as default or picked up via git config.

#### Example

The following command renames the Account Management team to Organization Management. The Azure CLI uses JSON as its default output format. For additional output formats, see [Output formats for Azure CLI commands](/cli/azure/format-output-azure-cli). 

> [!div class="tabbedCodeSnippets"]
```azurecli
az devops team update --team "Account Management" --name "Organization Management" --description "Management team focused on creating and maintaining customer services for organizations"
```

```output
{
  "description": "Management team focused on creating and maintaining customer services for organizations",
  "id": "a0a0a0a0-bbbb-cccc-dddd-e1e1e1e1e1e1",
  "identity": {
    "descriptor": "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-227716950-993605186-2584159299-2630527068-1-4146437839-3810360391-2614259327-2922617790",
    "id": "a0a0a0a0-bbbb-cccc-dddd-e1e1e1e1e1e1",
    "isActive": true,
    "isContainer": true,
    "masterId": "a0a0a0a0-bbbb-cccc-dddd-e1e1e1e1e1e1",
    "memberOf": [],
    "members": [],
    "metaTypeId": 255,
    "properties": {
      "Account": {
        "$type": "System.String",
        "$value": "Account Management"
      },
      "Description": {
        "$type": "System.String",
        "$value": "Management team focused on creating and maintaining customer services"
      },
      "Domain": {
        "$type": "System.String",
        "$value": "vstfs:///Classification/TeamProject/b1b1b1b1-cccc-dddd-eeee-f2f2f2f2f2f2"
      },
      "LocalScopeId": {
        "$type": "System.String",
        "$value": "b1b1b1b1-cccc-dddd-eeee-f2f2f2f2f2f2"
      },
      "Microsoft.TeamFoundation.Team": {
        "$type": "System.String",
        "$value": "True"
      },
      "SchemaClassName": {
        "$type": "System.String",
        "$value": "Group"
      },
      "ScopeId": {
        "$type": "System.String",
        "$value": "c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3"
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
        "$value": "d3d3d3d3-eeee-ffff-aaaa-b4b4b4b4b4b4"
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
    "providerDisplayName": "[Fabrikam Fiber]\\Account Management",
    "resourceVersion": 2,
    "subjectDescriptor": "vssgp.Uy0xLTktMTU1MTM3NDI0NS0yMjc3MTY5NTAtOTkzNjA1MTg2LTI1ODQxNTkyOTktMjYzMDUyNzA2OC0xLTQxNDY0Mzc4MzktMzgxMDM2MDM5MS0yNjE0MjU5MzI3LTI5MjI2MTc3OTA"
  },
  "identityUrl": "https://spsprodeus21.vssps.visualstudio.com/A380ed149-33d0-4d78-a7ed-89921802f389/_apis/Identities/a0a0a0a0-bbbb-cccc-dddd-e1e1e1e1e1e1",
  "name": "Organization Management",
  "projectId": "b1b1b1b1-cccc-dddd-eeee-f2f2f2f2f2f2",
  "projectName": "Fabrikam Fiber",
  "url": "https://dev.azure.com/fabrikam/_apis/projects/b1b1b1b1-cccc-dddd-eeee-f2f2f2f2f2f2/teams/a0a0a0a0-bbbb-cccc-dddd-e1e1e1e1e1e1"
}
```
::: moniker-end

[!INCLUDE [temp](../../includes/note-cli-not-supported.md)]  

* * *

## Set a team as the default

When a project gets created, a default team also gets created based on the project name. 

1. Open **Project settings** > **Teams**.

1. Select :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: **More options** next to the team you want as the new default, and then select **Set team as project default**.   

## Delete a team 

You can delete any team except the default team. At least one team must be defined for a project.

> [!IMPORTANT]   
> Deleting a team removes all team configuration settings, including dashboards, backlogs, and boards. Work item data remains unchanged. Team configurations can't be recovered once deleted.

#### [Web portal](#tab/preview-page) 

::: moniker range="azure-devops"

1. From your project in the web portal, select **Project settings** > **Teams** as shown in the previous section.

1. Select the team you want to delete and then select **Settings**.

1. Scroll down and select **Delete Team**.    

1. Select **Delete** in the confirmation box to complete the delete operation. 

  :::image type="content" source="media/rename-remove-team/delete-team-confirmation.png" alt-text="Screenshot of Delete team confirmation dialog, new teams page.":::    

::: moniker-end

[!INCLUDE [temp](../../includes/note-new-teams-not-supported.md)]  

#### [Azure DevOps CLI](#tab/azure-devops-cli)

<a id="delete-team"></a> 

::: moniker range="azure-devops"

You can delete a team by using [az devops team delete](/cli/azure/devops/team#az-devops-team-delete).  

> [!div class="tabbedCodeSnippets"]
```azurecli
az devops team delete --id
                      [--project]
                      [--yes]
```

#### Parameters

- `id`: Required. The ID of the team to delete.
- `project`: Optional. Name or ID of the project. Example: `--project "Fabrikam Fiber"`
- `yes`: Optional. Specify to not prompt for confirmation. 

#### Example

> [!div class="tabbedCodeSnippets"]
```azurecli
az devops team delete --id a0a0a0a0-bbbb-cccc-dddd-e1e1e1e1e1e1 --project "Fabrikam Fiber"
Are you sure you want to delete this team? (y/n): y
```

::: moniker-end

[!INCLUDE [temp](../../includes/note-cli-not-supported.md)]  

* * *

## Related content

- [Create or add a team](add-teams.md)  
- [Learn about teams and Agile tools](about-teams-and-settings.md)  
- [Use the Azure DevOps Teams CLI](/cli/azure/devops/team)  
- [Use the Teams REST API](/rest/api/azure/devops/core/teams)  
- [Use the Work Items REST API](/rest/api/azure/devops/wit)  
