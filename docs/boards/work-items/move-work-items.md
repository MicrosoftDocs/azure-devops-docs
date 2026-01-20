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
ms.date: 10/27/2025
---

# Move work items from one team to another team

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

When you add a team or reorganize existing teams, you need to transfer work items from one team to another by updating their Area Paths. Every work item in Azure DevOps assigns to an Area Path, which determines team ownership and influences how work items appear on backlogs and boards.

Work items categorized under the Requirements category appear on a team backlog based on their assignment to the team Area Path. Similarly, assigning other work items to a team's Area Path supports queries and reporting based on team ownership.

## Why move work items between teams

Common scenarios for moving work items include:

- **Team reorganization**: When your organization restructures teams or redistributes responsibilities
- **Workload balancing**: Redistributing work items to balance capacity across teams
- **Skill alignment**: Moving items to teams with the appropriate expertise
- **Feature ownership transfer**: Transferring ownership when features change hands
- **Project consolidation**: Combining work from multiple teams into a single team

## Prerequisites 

::: moniker range="azure-devops"  

| Category | Requirements |
|--------------|-------------|
| **Permissions** | - To view, follow, and edit work items: **View work items in this node** and **Edit work items in this node** permissions set to **Allow**. By default, the **Contributors** group has these permissions. For more information, see [Set work tracking permissions](../../organizations/security/set-permissions-access-work-tracking.md). <br> - To add tags to work items: Project-level **Create new tag definition** permission set to **Allow**. By default, the **Contributors** group has this permission. |
| **Access levels** | - [Project member](../../organizations/security/add-users-team-project.md). <br> - To add new tags to work items or to view or follow pull requests: At least [**Basic** access](../../organizations/security/access-levels.md). <br> - To view or follow work items: At least **Stakeholder** access. For more information, see [About access levels](../../organizations/security/access-levels.md). <br> - All project members, including members in the **Readers** group, can send emails containing work items. |
|**Area Path permissions**| **View** and **Edit** work items under the Area Path nodes. For more information, see [Modify work items under an area or iteration path](../../organizations/security/set-permissions-access-work-tracking.md#create-child-nodes-modify-work-items-under-an-area-or-iteration-path).|
|**Configured area paths**| The target team has correctly configured Area Paths. If not, set up the required Area Paths before you transfer work items.|
|**Consistent process model**| Your team uses a compatible process model (Inherited, Hosted XML, or On-premises XML) to ensure seamless movement of work items.|
|**Backed up work items**| We recommend that you back up or export work items before you perform bulk moves to prevent data loss if an error occurs. |
|**Tools**| To use Azure CLI commands: [Azure DevOps CLI](../../cli/index.md). |  

::: moniker-end  

::: moniker range="< azure-devops"  

| Category | Requirements |
|--------------|-------------|
| **Permissions** | - To view, follow, and edit work items: **View work items in this node** and **Edit work items in this node** permissions set to **Allow**. By default, the **Contributors** group has these permissions. For more information, see [Set work tracking permissions](../../organizations/security/set-permissions-access-work-tracking.md). <br> - To add tags to work items: Project-level **Create new tag definition** permission set to **Allow**. By default, the **Contributors** group has this permission. |
| **Access levels** | - [Project member](../../organizations/security/add-users-team-project.md). <br> - To add new tags to work items or to view or follow pull requests: At least [**Basic** access](../../organizations/security/access-levels.md). <br> - To view or follow work items: At least **Stakeholder** access. For more information, see [About access levels](../../organizations/security/access-levels.md). <br> - All project members, including members in the **Readers** group, can send emails containing work items. |
|**Area Path permissions**| **View** and **Edit** work items under the **Area Path** nodes. For more information, see [Modify work items under an area or iteration path](../../organizations/security/set-permissions-access-work-tracking.md#create-child-nodes-modify-work-items-under-an-area-or-iteration-path).|

::: moniker-end  

## Move work items using the web portal

The most efficient way to move multiple work items between teams is through bulk editing in the web portal.

### Step 1: Create a query to identify work items

Create a query to find all work items you want to move to the new team:

1. Navigate to **Boards** > **Queries** > **New query**
2. Define query criteria to identify the work items, for example:
   - **Area Path** = Current team's area path
   - **Work Item Type** = User Story (or other relevant types)
   - **State** = Active (or other relevant states)
3. Run the query to verify it returns the correct work items
4. Save the query for future reference

### Step 2: Bulk edit the Area Path

To move work items to the new team:

1. [Create a query](../queries/using-queries.md) of all work items you want to reassign. 
   
2. Multi-select those items that belong to each team and [bulk edit the area path](../backlogs/bulk-modify-work-items.md).

   ![Screenshot of Web portal, Queries page, Bulk modify select work items.](media/move-work-items/query-bulk-edit-area-path.png)

3. In the bulk edit dialog:
   - Select **Area Path** from the field dropdown
   - Choose the target team's Area Path
   - Optionally update other fields like **Assigned To** or **Iteration Path**
  
4. After you bulk modify the items, bulk save them.
  
   ![Screenshot of Bulk save edited work items.](media/move-work-items/query-bulk-save.png)

### Step 3: Verify the move

After saving, verify that the work items now appear in the target team's backlog:

1. Navigate to the target team's backlog
2. Confirm the moved work items appear in the correct backlog
3. Check that the Area Path field reflects the new team assignment

<a id="move-work-items"></a> 

::: moniker range="azure-devops"   

## Move a work item using Azure CLI

You can use [az boards work-item update](/cli/azure/boards/work-item#az-boards-work-item-update) to move a single work item by updating its Area Path.   

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

### Parameters

- **id**: Required. The ID of the work item to update.
- **area**: Optional. Absolute path of an area. Example: --area "\ProjectName\Area\AreaName".  
- **assigned-to**: Optional. Name of the person the work item assigns to, for example, "Jamal".
- **description**: Optional. Description of the work item. 
- **discussion**: Optional. Comment to add to a discussion in a work item.
- **fields**: Optional. Space separated "field=value" pairs for custom fields you want to set.
- **iteration**: Optional. Absolute path of an iteration. Example: "\ProjectName\Iteration\IterationName".  
- **open**: Optional. Open the work item in the default web browser. 
- **reason**: Optional. Reason for the state of the work item. 
- **state**: Optional. State of the work item, for example, "Active". 
- **title**: Optional. Title of the work item. 

### Example

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

### Bulk moves with Azure CLI

For moving multiple work items using Azure CLI, you need to script multiple individual updates. Here's an example PowerShell script pattern:

```powershell
# Example: Move multiple work items to a new area path
$workItemIds = @(148, 149, 150, 151)
$newAreaPath = "Fabrikam Fiber\Production Planning"

foreach ($id in $workItemIds) {
    az boards work-item update --id $id --area $newAreaPath
    Write-Host "Moved work item $id to $newAreaPath"
}
```

::: moniker-end 

## Best practices for moving work items

Consider these guidelines when moving work items between teams:

### Planning the move
- **Communication**: Notify affected team members before moving work items
- **Timing**: Move items during sprint boundaries to minimize disruption
- **Dependencies**: Check for dependencies between work items before moving
- **Capacity**: Ensure the target team has capacity for the additional work

### During the move
- **Batch processing**: Move related work items together to maintain context
- **Preserve history**: Moving items preserves their history and relationships
- **Update assignments**: Consider reassigning work items to members of the target team
- **Review iterations**: Update Iteration Paths if the teams use different sprint schedules

### After the move
- **Verify visibility**: Confirm work items appear on the correct team backlogs
- **Update documentation**: Update any team documentation that references moved items
- **Review reports**: Check that team reports and dashboards reflect the changes
- **Follow up**: Ensure team members know about the transferred work

## Troubleshooting and verification

After you move work items from one team to another team, follow these steps if you don't see the work items:

### Common issues and solutions

| Issue | Solution |
|-------|----------|
| **Work items don't appear on backlog** | Verify the Area Path matches the team's configured area paths |
| **Permission errors during move** | Check that you have Edit permissions for both source and target Area Paths |
| **Work items missing from sprint** | Update the Iteration Path to match the target team's sprint schedule |
| **Filters hiding work items** | Review backlog filters and work item type settings |

### Verification steps
- **Refresh**: Refresh the board or select **Show more items** if newly added work items don't appear.
- **Verify team**: Check that you selected the correct team to ensure the items appear on the backlog.
- **Verify Area Path**: Verify that the moved work items assign to the correct Area Path that corresponds to the team's backlog. Each team has specific Area Paths that determine which work items show up on their backlog. This verification is crucial for ensuring visibility in the backlog.
- **Verify Iteration Path**: Check the Iteration Path for the sprint. The sprint backlog only displays work items assigned to the selected sprint's Iteration Path.
- **Verify work item types and filters**: Review your backlog filters and ensure work item types have correct categorization to display all relevant items.

For more information, see [Create your backlog](../backlogs/create-your-backlog.md).

## Considerations for large-scale moves

When moving many work items or reorganizing multiple teams:

### Planning considerations
- **Impact assessment**: Analyze which reports, dashboards, and queries will be affected
- **Change management**: Develop a communication plan for affected stakeholders
- **Rollback plan**: Prepare a plan to reverse changes if issues arise
- **Testing**: Test the move process with a small subset of work items first

### Execution strategies
- **Phased approach**: Move work items in phases rather than all at once
- **Off-hours execution**: Perform large moves during low-activity periods
- **Monitoring**: Watch for performance impacts during bulk operations
- **Validation**: Verify each phase before proceeding to the next

## Alternative approaches

### Moving teams instead of work items
Sometimes it's more efficient to reconfigure team Area Paths rather than move individual work items:
- When most of a team's work items need to move
- When reorganizing area paths makes more sense organizationally
- When the volume of work items is very large

### Using queries for gradual transitions
Create queries to gradually transition work items:
- Filter by creation date to move newer items first
- Use work item states to move completed items separately
- Group by work item type for systematic transitions

## Related content

- [Create or add a team](../../organizations/settings/add-teams.md)
- [Learn about teams and Agile tools](../../organizations/settings/about-teams-and-settings.md)
- [Configure team settings](../../organizations/settings/manage-teams.md)
- [Set area paths for a team](../../organizations/settings/set-area-paths.md)
- [Bulk modify work items](../backlogs/bulk-modify-work-items.md)
