---
title: Move work items from one team to another team
titleSuffix: Azure Boards 
description: Learn how to move work items assigned to one team to another team.  
ms.subservice: azure-devops-settings
ms.custom: devx-track-azurecli
ai-usage: ai-assisted
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 01/03/2025
---

# Move work items from one team to another team

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

When you add a team or reorganize existing teams, you might need to transfer work items from one team to another by updating their Area Paths. Every work item in Azure DevOps is assigned to an Area Path, which determines team ownership and influences how work items are displayed on backlogs and boards.

Work items categorized under the Requirements category appear on a team's backlog based on their assignment to the team's Area Path. Similarly, assigning other work items to a team's Area Path supports queries and reporting based on team ownership.

## Prerequisites 

::: moniker range="azure-devops"  

[!INCLUDE [prerequisites-work-items](../includes/prerequisites-work-items.md)]
|**Area Path permissions**| **View** and **Edit** work items under the Area Path nodes. For more information, see [Modify work items under an area or iteration path](../../organizations/security/set-permissions-access-work-tracking.md#create-child-nodes-modify-work-items-under-an-area-or-iteration-path).
|**Configured area paths**| The target team has correctly configured Area Paths. If not, set up the required Area Paths before transferring work items.|
|**Consistent process model**| Your team uses a compatible process model (Inherited, Hosted XML, or On-premises XML) to ensure seamless movement of work items.|
|**Backed up work items**| We recommend you back up or export work items before performing bulk moves to prevent data loss if there's an error. |
|**Tools**| To use Azure CLI commands: [Azure DevOps CLI](../../cli/index.md).   

::: moniker-end  

::: moniker range="< azure-devops"  

[!INCLUDE [prerequisites-work-items](../includes/prerequisites-work-items.md)]
|**Area Path permissions**| **View** and **Edit** work items under the **Area Path** nodes. For more information, see [Modify work items under an area or iteration path](../../organizations/security/set-permissions-access-work-tracking.md#create-child-nodes-modify-work-items-under-an-area-or-iteration-path).

::: moniker-end  

## Move work items under teams 

To move work items under a team, do the following steps:

1. [Create a query](../queries/using-queries.md) of all work items you want to reassign. 

1. Multi-select those items, which belong to each team, and [bulk edit the area path](../backlogs/bulk-modify-work-items.md).

  ![Screenshot of Web portal, Queries page, Bulk modify select work items.](media/move-work-items/query-bulk-edit-area-path.png)
  
1. After you bulk modify, bulk save.
  
  ![Screenshot of Bulk save edited work items.](media/move-work-items/query-bulk-save.png)

<a id="move-work-items"></a> 

::: moniker range="azure-devops"   

## Move a work item using Azure CLI

You can use the [az boards work-item update](/cli/azure/boards/work-item#az-boards-work-item-update) to move a single work item by updating its Area Path.   

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

You can only move one work item at a time using Azure DevOps CLI. In this example, we move work item *ID=148* under the *Fabrikam Fiber\Production Planning* area path.

> [!div class="tabbedCodeSnippets"]
```azurecli
az boards work-item update --id 148 --area "Fabrikam Fiber\Production Planning" --output yaml
```

The following YAML output provides information on each of the fields defined for the work item. 

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

## Verify visibility

After you move work items from one team to another team, do the following actions if you don't see the work items:
- **Refresh**: Refresh the board or select **Show more items** if newly added work items don't appear.
- **Verify team**: Check that you selected the right team to ensure the items appear on the backlog.
- **Verify Area Path**: Verify that the moved work items are assigned to the correct Area Path that corresponds to the team's backlog. Each team has specific Area Paths that determine which work items show up on their backlog. This action is crucial for ensuring visibility in the backlog.
- **Verify Iteration Path**: Check the Iteration Path for the sprint. The sprint backlog only displays work items assigned to the selected sprint's Iteration Path.
- **Verify work item types and filters**: Review your backlog filters and that work item types are correctly categorized to ensure all relevant items display.

For more information, see [Set up your project's backlogs and boards](../backlogs/set-up-your-backlog.md).

## Related articles

- [Create or add a team](../../organizations/settings/add-teams.md)
- [Learn about teams and Agile tools](../../organizations/settings/about-teams-and-settings.md) 
