---
title: Remove, delete, and restore work items in Azure Boards
titleSuffix: Azure Boards
description: Learn how to remove, delete, or restore work items in Azure Boards to manage backlogs and boards more efficiently.
ms.custom: boards-backlogs, linked-from-support
ms.service: azure-devops-boards
ms.assetid: 306929CA-DB58-45E3-AD45-B774901789D3
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 10/14/2024
#customer intent: As a team member or administrator, I want to understand how to remove or restore work items in Azure Boards to manage them.
---

# Remove, delete, or restore work items in Azure Boards

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Work items can live forever in your work tracking data store. You never have to delete them. However, you might want to set up a work item management process for one of the following actions:

| Action | Description |
|:-------|:------------|
| [Change state](#remove-work-items)        | Remove work items from appearing on backlogs and boards by changing the work item **State** to *Remove* or *Cut*. The state available to you is based on the workflow assigned to the work item type. |
| [Delete](#delete-work-items)              | Remove work items from backlogs, boards, and queries. Deleted work items are moved to a **Recycle Bin**. |
| [Restore](#restore-or-destroy-work-items) | Recover deleted work items by restoring them from the **Recycle Bin**. |
| [Destroy](#restore-or-destroy-work-items) | Permanently delete work items, including all data from the work tracking data store. |

> [!NOTE]  
> - You can't archive work items or projects at this time.
> - For information about the Azure Artifacts Recycle Bin, see [Delete and recover packages](../../artifacts/how-to/delete-and-recover-packages.md).

To move a work item from one project to another, or to change the work item type, see [Move work items and change work item type](move-change-type.md).


## Prerequisites

| Category | Requirements |
|--------------|-------------|
| **Permissions** | - To remove, delete, and restore work items: Member of the **Contributors** group.<br>- To permanently delete work items: Member of the **Project Administrators** group or granted the required permission.<br>- Users with **Stakeholder** access can view the contents of the **Recycle Bin**, but can't restore or permanently delete items in the bin regardless of the permissions they're granted.|

:::row:::
   :::column span="1":::
      **Task** 
   :::column-end:::
   :::column span="2":::
       **Required permissions**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [Change state to **Remove** or **Cut**](#remove)
   :::column-end:::
   :::column span="2":::
       - **Area Path** permission set to **Allow**: **Edit work items in this node**
       - By default, members of the **Contributors** group have this permission.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      [Delete work items](#delete) and  
      [Restore work items](#restore)  
   :::column-end:::
   :::column span="2":::
       - Project-level permission set to **Allow**: **Delete and restore work items**
       - At least [**Basic** access](../../organizations/security/access-levels.md).
       - By default, members of the **Contributors** group have this permission.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      [Permanently delete or destroy work items](#restore-or-destroy-work-items)  
   :::column-end:::
   :::column span="2":::
       - Project-level permission set to **Allow**: **Permanently delete work items**
       - By default, members of the **Project Administrators** group have this permission.
   :::column-end:::
:::row-end:::
::: moniker-end
::: moniker range=">= azure-devops"
:::row:::
   :::column span="1":::
      [Delete or destroy work items from the command line](#az-boards-cli)
   :::column-end:::
   :::column span="2":::
       - Project-level permission set to **Allow**: **Permanently delete work items**
       - By default, members of the **Project Administrators** group have this permission.
   :::column-end:::
:::row-end:::
::: moniker-end
---

For a simplified view of permissions assigned to built-in groups, see [Permissions and access](../get-started/permissions-access-boards.md).  

::: moniker range="azure-devops"
> [!NOTE]  
> Users with **Stakeholder** access for a public project have full access to all work tracking features just like users with **Basic** access. For more information, see [Stakeholder access quick reference](../../organizations/security/stakeholder-access.md).
::: moniker-end

## Remove or delete multiple work items

You can act on individual work items or bulk modify several work items.

From the web portal, you can multi-select several work items from a backlog or query results page. You can also do a bulk update using the associated feature. To delete or restore several work items at the same time, see [Modify work items in bulk](bulk-modify-work-items.md).

You can also delete or destroy work items in batch with a REST API. For more information, see [Work Items - Delete](/rest/api/azure/devops/wit/work-items/delete?view=azure-devops-rest-6.0&tabs=HTTP&viewFallbackFrom=azure-devops-rest-7.0&preserve-view=true).

[!INCLUDE [feature-added-2022-1](../../includes/feature-added-2022-1.md)]

<a id="remove"> </a>  

### Remove work items

By changing the **State** of a work item to *Removed*, you effectively remove it from a backlog or board view: product, portfolio, and sprint backlogs, boards, and Taskboards. The *Removed* state corresponds to the **Removed** workflow category state. If you define custom workflow states, any state you map to the **Removed** workflow category state act in a similar way. For more information, see [Customize the workflow](../../organizations/settings/work/customize-process-workflow.md).

:::image type="content" source="media/move-change-delete/remove-state.png" alt-text="Screenshot of work item form, Change State to Removed.":::  

To cause removed items to not show up in queries, you must add a clause that filters on the **State** field.  

::: moniker range=">= azure-devops-2019"

> [!NOTE]  
> The *Removed* state isn't supported with the Basic process. It is only supported with the Agile, Scrum, and CMMI process work item types. The Basic process is available when you add a project to Azure DevOps Services or [Azure DevOps Server 2019 Update 1](https://go.microsoft.com/fwlink/?LinkId=2097609).  

::: moniker-end

<a id="delete"> </a> 
<a id="delete-work-items"></a>

### Delete work items

Deleted work items don't appear in your backlogs, boards, or queries. When you delete an item, it goes to the **Recycle Bin**. You can restore it from there if you change your mind. To delete a test case, test plan, or other test-related work item types, see [Delete test artifacts](delete-test-artifacts.md).  
::: moniker range=">= azure-devops-2019"

You can delete work items in one of the following ways:

- The work item form
- The **Work Items** page :::image type="icon" source="../media/icons/actions-icon.png" border="false"::: **More Actions** menu
- The board card :::image type="icon" source="../media/icons/actions-icon.png" border="false"::: context menu
- A backlog or query results page
- [REST API](/rest/api/azure/devops/wit/work-items/delete-work-items?view=azure-devops-rest-7.1&preserve-view=true&tabs=HTTP)

1. Initiate your delete operation:
   - From the work item form, open the work item, choose  :::image type="icon" source="../media/icons/actions-icon.png" border="false"::: **Actions**, and select **Delete**. 

     :::image type="content" source="media/move-change-delete/delete-work-item.png" alt-text="Screenshot of work item form, Actions menu, choose Delete."::: 

   - To delete several work items, [multi-select them from a backlog or a query results list](bulk-modify-work-items.md), choose the  :::image type="icon" source="../media/icons/actions-icon.png" border="false"::: context menu, and then select **Delete**. 

     :::image type="content" source="media/move-change-delete/multi-delete.png" alt-text="Screenshot of backlog multi-select Actions menu, choose Delete."::: 

   - To delete a work item from your board or Taskboard, choose the  :::image type="icon" source="../media/icons/actions-icon.png" border="false"::: context menu for the card and select **Delete**. 

     :::image type="content" source="media/move-change-delete/delete-work-items-from-kanban-board.png" alt-text="Screenshot of board card context menu, choose Delete.":::

1. Confirm you want to delete the items.  

   :::image type="content" source="media/move-change-delete/delete-work-items-dialog.png" alt-text="Screenshot of the Confirm delete dialog.":::  

::: moniker-end

<a id="restore"></a>
<a id="restore-or-permanently-delete-work-items"></a>

## Restore or destroy work items

You can't open work items from the **Recycle Bin**. You only see the **Permanently delete option** if your [Permanently delete work items](../../organizations/security/set-permissions-access-work-tracking.md#move-delete-permissions) project-level permission is set to **Allow**.  

::: moniker range=">= azure-devops-2019"

Restore deleted work items or permanently delete them from the web portal **Recycle Bin**.

1. Select **Boards** > **Work Items** > **Recycle Bin**.  

   :::image type="content" source="media/move-change-delete/open-recycle-bin-new-nav.png" alt-text="Screenshot of Boards, Work Items page, Open Recycle bin.":::

   If you don't see the **Recycle Bin** option, choose **More commands &hellip;** and select from the menu of options.

   A new browser tab opens with the query that lists work items added to the **Recycle Bin**.  

1. Select the items you want to restore and then choose **Restore**.  

   :::image type="content" source="media/move-change-delete/restore-from-recycle-bin.png" alt-text="Screenshot of Restore selected items.":::

   Optionally, you can choose to permanently delete the items.

1. Confirm your selection.

::: moniker-end

> [!NOTE]
> Deleted test artifacts don't appear in the **Recycle Bin** and can't be restored. When you delete a test artifact, all of its associated child items, such as child test suites, test points across all configurations, testers, test results history, and other associated history also get deleted. The underlying test case work item doesn't get deleted.

<a id="az-boards-cli"></a>

::: moniker range="azure-devops"

## Delete or destroy work items from the command line

You can delete or destroy a work item with the [az boards work-item delete](/cli/azure/boards/work-item#az-boards-work-item-delete) command. To get started, see [Get started with Azure DevOps CLI](../../cli/index.md).  

> [!NOTE]
> You can restore *deleted* work items, but you can't restore *destroyed* work items.

```azurecli
az boards work-item delete --id
                           [--destroy]
                           [--org]
                           [--project]
                           [--yes] 
```

- **id**: Required. The ID of the work item.
- **destroy**: Optional. Permanently delete this work item.
- **org**: Azure DevOps organization URL. You can configure the default organization using `az devops configure -d organization=ORG_URL`. Required if not configured as default or picked up using `git config`. Example: `--org https://dev.azure.com/MyOrganizationName/`.
- **project**: Name or ID of the project. You can configure the default project using `az devops configure -d project=NAME_OR_ID`. Required if not configured as default or picked up using `git config`.
- **yes**: Optional. Don't prompt for confirmation.

The following command permanently deletes the bug with the ID 864 and doesn't prompt you for confirmation.

```azurecli
az boards work-item delete --id 864 --destroy --yes
```

::: moniker-end

## Delete and restore processes

**When you delete a work item, Azure DevOps does the following actions:**

- Generates a new revision of the work item  
- Updates the **Changed By/Changed Date** fields to support traceability  
- Preserves the work item completely, including all field assignments, attachments, tags, and links  
- Causes the work item to become nonqueryable and, as such, doesn't appear in any work tracking experience, query result, or report  
- Updates charts correctly. The CFD, velocity, burndown, and lightweight charts are updated to remove deleted work items  
- Removes work tracking extensions  
- Preserves trend data except for the latest value
- Removes the work item from the data warehouse/cube similar to as if it was permanently removed

**When you restore a work item, Azure DevOps does the following actions:**

- Causes a new revision of the work item to be made
- Updates the **Changed By/Changed Date** fields to support traceability
- Becomes queryable
- All fields remain unchanged
- History contains two new revisions, one for deletion, and one for restore
- Reattaches work tracking extensions
- Updates charts correctly. The CFD, velocity, burndown, and lightweight charts are updated to include the restored work items
- Restores trend data
- Adds the work item back to the data warehouse/cube
- Sets the area or iteration path fields to the root node if the previous area path or iteration paths were deleted

## Use a REST API to delete, restore, and destroy work items

To programmatically delete, restore, and destroy work items, see one of the following REST API resources:

- [Recycle bin REST API Reference](/rest/api/azure/devops/wit/recyclebin)
- [Work Items - Delete REST API Reference](/rest/api/azure/devops/wit/work-items/delete)
  
## Related articles

- [View and add work items using the Work Items page](../work-items/view-add-work-items.md)
- [Delete test artifacts](delete-test-artifacts.md)
- [Set permissions and access for work tracking](../../organizations/security/set-permissions-access-work-tracking.md)
- [Change project-level permissions](../../organizations/security/change-project-level-permissions.md)
- [Stakeholder access quick reference](../../organizations/security/stakeholder-access.md)
