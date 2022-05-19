---
title: Move work items from one team to another team
titleSuffix: Azure DevOps 
description: Learn how to move work items assigned to one team to another team.  
ms.technology: devops-settings 
ms.author: kaelli
author: KathrynEE
ms.topic: tutorial
monikerRange: '<= azure-devops'
ms.date: 04/04/2022
---

# Move work items from one team to another team

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

When you add a team to your growing organization, you may need to move work items assigned to one team to new Area Paths owned by the new team.  
 

## Prerequisites 

- To change the **Area Paths** of work items, you must be a project member and have permissions to view and edit work items under the Area Path nodes.   

## Move work items under teams 

#### [Web portal](#tab/browser)

::: moniker range=">= azure-devops-2019"

1. [Create a query](../queries/using-queries.md) of all work items you want to reassign. Multi-select those items, which belong to each team, and [bulk edit the area path](../backlogs/bulk-modify-work-items.md).

   <img src="media/move-work-items/query-bulk-edit-area-path.png" alt="Screenshot of Web portal, Queries page, Bulk modify select work items." />

2. After you bulk modify, do a bulk save.  
  
   <img src="media/move-work-items/query-bulk-save.png" alt="Screenshot of Bulk save edited work items." />  
 
::: moniker-end

::: moniker range="tfs-2018"  

1. [Create a query](../queries/using-queries.md) of all work items you want to reassign. Multi-select those items belonging to each team, and [bulk edit the area path](../backlogs/bulk-modify-work-items.md).

2. After you bulk modify, do a bulk save.  

   ![Screenshot of the Web portal, Queries page, Bulk save selected work items](media/move-work-items/scale-agile-bulk-save-area-path-co.png)  

::: moniker-end  

#### [Azure DevOps CLI](#tab/azure-devops-cli)

<a id="move-work-items" /> 

::: moniker range="azure-devops"

You can move work items to a new area paths using [az boards work-item update](/cli/azure/boards/work-item#ext-azure-devops-az-boards-work-item-update).  

> [!div class="tabbedCodeSnippets"]
```azurecli
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

- **id**: Required. The ID of the work item to update.
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
```azurecli
az boards work-item update --id 148 --area "Fabrikam Fiber\Production Planning" --output yaml
```

The YAML output listed below provides information on each of the fields defined for the work item. 

> [!div class="tabbedCodeSnippets"]
```YAML output
fields:
  Microsoft.VSTS.Common.Priority: 2
  Microsoft.VSTS.Common.StackRank: 1500000001.0
  Microsoft.VSTS.Common.StateChangeDate: '2021-11-23T22:26:28.27Z'
  Microsoft.VSTS.Common.ValueArea: Business
  System.AreaPath: Fabrikam Fiber\Production Planning
  System.AssignedTo:
    _links:
      avatar:
        href: https://fabrikamprime.visualstudio.com/_apis/GraphProfile/MemberAvatars/aad.NDEwY2FkMDQtOWQyOS03NDFlLTk2MmEtNGZlYmU2NGE1NTM4
    descriptor: aad.NDEwY2FkMDQtOWQyOS03NDFlLTk2MmEtNGZlYmU2NGE1NTM4
    displayName: Jamal Hartnett
    id: d291b0c4-a05c-4ea6-8df1-4b41d5f39eff
    imageUrl: https://fabrikamprime.visualstudio.com/_apis/GraphProfile/MemberAvatars/aad.NDEwY2FkMDQtOWQyOS03NDFlLTk2MmEtNGZlYmU2NGE1NTM4
    uniqueName: fabrikamfiber4@hotmail.com
    url: https://spsprodeus27.vssps.visualstudio.com/A5d5b8da6-3db7-4829-baf9-1e500c21cc12/_apis/Identities/d291b0c4-a05c-4ea6-8df1-4b41d5f39eff
  System.BoardColumn: Backlog
  System.ChangedBy:
   _links:
      avatar:
        href: https://fabrikamprime.visualstudio.com/_apis/GraphProfile/MemberAvatars/aad.NDEwY2FkMDQtOWQyOS03NDFlLTk2MmEtNGZlYmU2NGE1NTM4
    descriptor: aad.NDEwY2FkMDQtOWQyOS03NDFlLTk2MmEtNGZlYmU2NGE1NTM4
    displayName: Jamal Hartnett
    id: d291b0c4-a05c-4ea6-8df1-4b41d5f39eff
    imageUrl: https://fabrikamprime.visualstudio.com/_apis/GraphProfile/MemberAvatars/aad.NDEwY2FkMDQtOWQyOS03NDFlLTk2MmEtNGZlYmU2NGE1NTM4
    uniqueName: fabrikamfiber4@hotmail.com
    url: https://spsprodeus27.vssps.visualstudio.com/A5d5b8da6-3db7-4829-baf9-1e500c21cc12/_apis/Identities/d291b0c4-a05c-4ea6-8df1-4b41d5f39eff
  System.ChangedDate: '2022-05-19T22:58:52.93Z'
  System.CommentCount: 0
  System.CreatedBy:
   _links:
      avatar:
        href: https://fabrikamprime.visualstudio.com/_apis/GraphProfile/MemberAvatars/aad.NDEwY2FkMDQtOWQyOS03NDFlLTk2MmEtNGZlYmU2NGE1NTM4
    descriptor: aad.NDEwY2FkMDQtOWQyOS03NDFlLTk2MmEtNGZlYmU2NGE1NTM4
    displayName: Jamal Hartnett
    id: d291b0c4-a05c-4ea6-8df1-4b41d5f39eff
    imageUrl: https://fabrikamprime.visualstudio.com/_apis/GraphProfile/MemberAvatars/aad.NDEwY2FkMDQtOWQyOS03NDFlLTk2MmEtNGZlYmU2NGE1NTM4
    uniqueName: fabrikamfiber4@hotmail.com
    url: https://spsprodeus27.vssps.visualstudio.com/A5d5b8da6-3db7-4829-baf9-1e500c21cc12/_apis/Identities/d291b0c4-a05c-4ea6-8df1-4b41d5f39eff
  System.CreatedDate: '2021-11-23T22:26:28.27Z'
  System.Description: <div>This user story is for documentation purposes.&nbsp; </div>
  System.IterationPath: Fabrikam Fiber\Release 2\Sprint 1
  System.Reason: New
  System.State: New
  System.TeamProject: Fabrikam Fiber
  System.Title: Test the Request feedback functionality
  System.WorkItemType: User Story
  WEF_10182DA5BCCD4CE2A43629FFBD290EF2_Kanban.Column: Backlog
id: 148
relations:
- attributes:
    isLocked: false
    name: Child
  rel: System.LinkTypes.Hierarchy-Forward
  url: https://fabrikamprime.visualstudio.com/854a3f67-9962-43d1-a968-2e5f2eb66c99/_apis/wit/workItems/152
- attributes:
    isLocked: false
    name: Child
  rel: System.LinkTypes.Hierarchy-Forward
  url: https://fabrikamprime.visualstudio.com/854a3f67-9962-43d1-a968-2e5f2eb66c99/_apis/wit/workItems/153
- attributes:
    isLocked: false
    name: Child
  rel: System.LinkTypes.Hierarchy-Forward
  url: https://fabrikamprime.visualstudio.com/854a3f67-9962-43d1-a968-2e5f2eb66c99/_apis/wit/workItems/151
- attributes:
    isLocked: false
    name: Child
  rel: System.LinkTypes.Hierarchy-Forward
  url: https://fabrikamprime.visualstudio.com/854a3f67-9962-43d1-a968-2e5f2eb66c99/_apis/wit/workItems/149
rev: 5
url: https://fabrikamprime.visualstudio.com/854a3f67-9962-43d1-a968-2e5f2eb66c99/_apis/wit/workItems/148

```

::: moniker-end

[!INCLUDE [temp](../../includes/note-cli-not-supported.md)]

* * *
 

## Related articles

- [Create or add a team](../../organizations/settings/add-teams.md)
- [About teams and Agile tools](../../organizations/settings/about-teams-and-settings.md) 