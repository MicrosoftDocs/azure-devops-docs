---
title: Remove, delete, and restore work items in Azure Boards
titleSuffix: Azure Boards
description: Learn how to remove, delete, or restore work items in Azure Boards to manage backlogs and boards more efficiently.
ms.custom: "boards-backlogs, seodec18, contperf-fy21q2, linked-from-support"  
ms.service: azure-devops-boards
ms.assetid: 306929CA-DB58-45E3-AD45-B774901789D3  
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 06/01/2022
---

# Remove, delete, or restore work items in Azure Boards

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Work items can live forever in your work tracking data store. You never have to delete them. However, you might want to set up a work item management process for one of the following actions: 

- **Change state**: Remove work items from appearing on backlogs and boards by changing the work item **State** to *Remove* or *Cut*. The state available to you is based on the workflow assigned to the work item type.  
- **Delete**: Remove work items from backlogs, boards, and queries. Deleted work items are moved to a **Recycle Bin**.   
- **Restore**: Recover deleted work items by restoring them from the **Recycle Bin**.  
- **Destroy**: Permanently delete work items, which deletes all data from the work tracking data store. 
 
> [!NOTE]  
> The ability to archive work items or projects isn't a supported feature at this time. 

::: moniker range=">= azure-devops-2019"
To move a work item from one project to another, or to change the work item type, see [Move work items, change work item type](move-change-type.md). 
::: moniker-end

> [!NOTE]  
> For information about the Azure Artifacts Recycle Bin, see [Delete and recover packages](../../artifacts/how-to/delete-and-recover-packages.md).

## Prerequisites 

In general, members of the **Contributors** group can remove, delete, and restore work items. To permanently delete work items, you must be a member of the **Project Administrators** group, or be granted the required permission. Users with **Stakeholder** access can view the contents of the **Recycle Bin**, but can't restore or permanently delete items in the bin regardless of the permissions they're granted.   

:::row:::
   :::column span="1":::
      **Task** 
   :::column-end:::
   :::column span="2":::
       **Required permission(s)** 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [Change state to **Remove** or **Cut**](#remove) 
   :::column-end:::
   :::column span="2":::
       - Have the **Area Path** permission set to **Allow**: **Edit work items in this node** 
       - By default, members of the **Contributors** group have this permission.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      [Delete work items](#delete) and  
      [Restore work items](#restore)  
   :::column-end:::
   :::column span="2":::
       - Have the project-level permission set to **Allow**: **Delete and restore work items**
       - Have **Basic** access or higher.
       - By default, members of the **Contributors** group have this permission.
   :::column-end:::
:::row-end:::
::: moniker range="tfs-2018"
:::row:::
   :::column span="1":::
      [Permanently delete or destroy work items from the command line](#witadmin-cli)  
   :::column-end:::
   :::column span="2":::
       Be a member of the **Project Administrators** group.
   :::column-end:::
:::row-end:::
::: moniker-end
::: moniker range=">= azure-devops-2019"
:::row:::
   :::column span="1":::
      [Permanently delete or destroy work items](#restore-or-destroy-work-items)  
   :::column-end:::
   :::column span="2":::
       - Have the project-level permission set to **Allow**: **Permanently delete work items**
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
       - Have the project-level permission set to **Allow**: **Permanently delete work items**
       - By default, members of the **Project Administrators** group have this permission.
   :::column-end:::
:::row-end:::
::: moniker-end
---


For a simplified view of permissions assigned to built-in groups, see [Permissions and access](../get-started/permissions-access-boards.md).  

::: moniker range="azure-devops" 
> [!NOTE]  
> Users with **Stakeholder** access for a public project have full access to all work tracking features just like users with **Basic** access. For details, see [Stakeholder access quick reference](../../organizations/security/stakeholder-access.md).
::: moniker-end
 
## Remove or delete multiple work items 

You can act on individual work items or bulk modify several work items. 

From the web portal, you can multi-select several work items from a backlog or query results page. You can also do a bulk update using the associated feature. To delete or restore several work items at the same time, see [Bulk modify work items](bulk-modify-work-items.md).  


<a id="remove"> </a>  

### Remove work items

By changing the **State** of a work item to *Removed*, you effectively remove it from a backlog or board view (product, portfolio, and sprint backlogs, Kanban board, and Taskboards). The *Removed* state corresponds to the **Removed** workflow category state. If you [define custom workflow states](../../organizations/settings/work/customize-process-workflow.md), any state you map to the **Removed** workflow category state will act in a similar way. 

> [!div class="mx-imgBorder"]  
> ![Screenshot of work item form, Change State to Removed.](media/move-change-delete/remove-state.png)  

To cause removed items to not show up in queries, you must add a clause that filters on the **State** field.  

::: moniker range=">= azure-devops-2019"

> [!NOTE]  
> The *Removed* state isn't supported with the Basic process. It is only supported with the Agile, Scrum, and CMMI process work item types. The Basic process is available when you add a project to Azure DevOps Services or [Azure DevOps Server 2019 Update 1](https://go.microsoft.com/fwlink/?LinkId=2097609).  

::: moniker-end



<a id="delete"> </a> 
<a id="delete-work-items" />

### Delete work items   

Deleted work items won't appear in your backlogs, boards, or queries. Deleted items are moved to a **Recycle Bin** from which you can recover them if needed. To delete a test case, test plan, or other test-related work item types, see [Delete test artifacts](delete-test-artifacts.md).  
::: moniker range=">= azure-devops-2019"

You can delete work items in one of the following ways: 
- From within the work item form
- From the **Work Items** page :::image type="icon" source="../media/icons/actions-icon.png" border="false"::: **More Actions** menu
- From the Kanban board card :::image type="icon" source="../media/icons/actions-icon.png" border="false"::: context menu
- From a backlog or query results page.  


1.  To initiate a delete operation: 

	From the work item form, open the work item, choose  :::image type="icon" source="../media/icons/actions-icon.png" border="false"::: **Actions**, and select **Delete**. 

	> [!div class="mx-imgBorder"]
	> ![Screenshot of work item form, Actions menu, choose Delete.](media/move-change-delete/delete-work-item.png) 
 
	To delete several work items, [multi-select them from a backlog or a query results list](bulk-modify-work-items.md), choose the  :::image type="icon" source="../media/icons/actions-icon.png" border="false"::: context menu, and then select **Delete**. 

	> [!div class="mx-imgBorder"]
	> ![Screenshot of backlog multi-select Actions menu, choose Delete.](media/move-change-delete/multi-delete.png) 

	To delete a work item from your Kanban or taskboard, choose the  :::image type="icon" source="../media/icons/actions-icon.png" border="false"::: context menu for the card and select **Delete**. 
 
	> [!div class="mx-imgBorder"]  
	> ![Screenshot of Kanban board card context menu, choose Delete.](media/move-change-delete/delete-work-items-from-kanban-board.png)
	>
1. Confirm you want to actually delete the item(s).  

	> [!div class="mx-imgBorder"]
	> ![Confirm delete dialog.](media/move-change-delete/delete-work-items-dialog.png)  


::: moniker-end


::: moniker range="tfs-2018"

1. You can delete a work item from within the work item form, or by multi-selecting work items from a backlog or query results page.   

	To delete a single work item, open the work item, choose the  :::image type="icon" source="../media/icons/actions-icon.png" border="false"::: **Actions**, and select **Delete**. 

	> [!div class="mx-imgBorder"]
	> ![Screenshot of work item form, Actions menu, Delete option, TFS 2018 version.](media/move-change-delete/delete-work-item.png)  

	To delete several work items, [multi-select them from a backlog or a query results list](bulk-modify-work-items.md). Then, choose the  :::image type="icon" source="../media/icons/actions-icon.png" border="false"::: actions icon and select <strong>Delete</strong>. 

	> [!div class="mx-imgBorder"]
	> ![Screenshot of List of work items, actions menu, Delete, TFS 2018 version.](media/move-change-delete/multi-delete.png)  

	You can also delete work items from your Kanban or taskboard. 
 
	![Screenshot of Kanban board, Delete work item, TFS 2018 version.](media/move-change-delete/delete-work-items-from-kanban-board.png)

	Or, you can drag them to the :::image type="icon" source="media/recycle-bin-icon.png" border="false"::: **Recycle bin**. You can only access the **Recycle bin** from the **Work** hub. 

2. Confirm you want to actually delete the item(s).  

	![Confirm delete dialog, TFS 2018 version.](media/move-change-delete/delete-work-items-dialog-tfs.png)

	> [!NOTE]    
	> The Delete work items confirmation dialog for on-premises Azure DevOps may indicate there are auto-delete settings (disabled). There are no settings you can enable or disable. There is only a background process which permanently deletes work items that have been set to delete.   
::: moniker-end


<a id="restore" />
<a id="restore-or-destroy-work-items" />
<a id="restore-or-permanently-delete-work-items" />


## Restore or destroy work items  

You can't open work items that have been moved to the **Recycle Bin**. Also, you'll only see the **Permanently delete option** if your [Permanently delete work items](../../organizations/security/set-permissions-access-work-tracking.md#move-delete-permissions) project-level permission is set to **Allow**.  

::: moniker range=">= azure-devops-2019"

You restore deleted work items or permanently delete them from the web portal **Recycle Bin**. 

1. Choose **Boards>Work Items** and then choose the **Recycle Bin**.  
 
	> [!div class="mx-imgBorder"]  
	> ![Screenshot of Boards, Work Items page, Open Recycle bin.](media/move-change-delete/open-recycle-bin-new-nav.png)

	If you don't see the **Recycle Bin** option, choose **More commands &hellip;** and choose it from the menu of options.

1.  A new browser tab opens with the query that lists work items added to the **Recycle Bin**.  

1.	Select the items you want to restore and then choose **Restore**.  

	![Screenshot of Restore selected items.](media/move-change-delete/restore-from-recycle-bin.png) 

	Optionally, you can choose to permanently delete the items.

1.	Confirm your selection. 

::: moniker-end

<a id="restore-work-items" />

::: moniker range="tfs-2018"  

You restore deleted work items from the web portal **Recycle Bin**. 

1. Choose **Work>Backlogs** or **Work>Queries** and then choose the **Recycle Bin**.  
 
	![Screenshot to Open Recycle bin, TFS 2018 version.](media/move-change-delete/open-recycle-bin.png)

	A new browser tab opens with the query that lists work items added to the **Recycle Bin**. 

1. Select the items you want to restore  and then choose **Restore**.  

   ![[Screenshot of Restore selected items, TFS 2018 version.](media/move-change-delete/restore-from-recycle-bin.png) 

   Optionally, you can choose to permanently delete the items.

2. Confirm your selection. 

::: moniker-end

> [!NOTE]   

> Deleted test artifacts won't appear in the **Recycle Bin** and can't be restored. Deletion of test artifacts deletes the selected test artifact and all of its associated child items, such as child test suites, test points across all configurations, testers (the underlying test case work item doesn't get deleted), test results history, and other associated history.

<a id="az-boards-cli" />

::: moniker range="azure-devops" 
 
## Delete or destroy work items from the command line

You can delete or destroy a work item with the [az boards work-item delete](/cli/azure/boards/work-item#az-boards-work-item-delete) command. To get started, see [Get started with Azure DevOps CLI](../../cli/index.md).  

> [!NOTE] 
> You can restore work items you **delete**, but you can't restore work items you choose to **destroy**.

```azurecli 
az boards work-item delete --id
                           [--destroy]
                           [--org]
                           [--project]
                           [--yes] 
``` 

### Parameters 

- **id**: Required. The ID of the work item.
- **destroy**: Optional. Permanently delete this work item.
- **org**: Azure DevOps organization URL. You can configure the default organization using `az devops configure -d organization=ORG_URL`. Required if not configured as default or picked up using `git config`. Example: `--org https://dev.azure.com/MyOrganizationName/`.
- **project**: Name or ID of the project. You can configure the default project using `az devops configure -d project=NAME_OR_ID`. Required if not configured as default or picked up using `git config`.
- **yes**: Optional. Don't prompt for confirmation.

#### Example 

The following command permanently deletes the bug with the ID 864 and doesn't prompt you for confirmation.

```azurecli
az boards work-item delete --id 864 --destroy --yes
```

::: moniker-end


::: moniker range="tfs-2018"

<a id="witadmin-cli" />
 
### Destroy work items from the command line  

Use the `witadmin destroywi` command to permanently remove work items from the data store. A permanent delete means all information in the work tracking data store is deleted and can't be restored nor reactivated.  

> [!NOTE]   
> Deleting work items from the `witadmin` command line is deprecated for TFS 2018.2 and later versions, and not supported for Azure Boards cloud service.  

Open a Command Prompt window where the latest version of Visual Studio is installed and change the directory to where the `witadmin.exe` tool has been installed.  

For example, you would change to the following directory for TFS 2018. (For other versions, see [Remove work items permanently (witadmin destroywi)](/previous-versions/azure/devops/reference/witadmin/remove-work-items-permanently)).  

`%programfiles(x86)%\Microsoft Visual Studio\2018\Professional\Common7\IDE\CommonExtensions\Microsoft\TeamFoundation\Team Explorer`  

On a 32-bit edition of Windows, replace %programfiles(x86)% with %programfiles%.      

The `witadmin` command-line tool installs with any version of Visual Studio or Team Explorer. You can access this tool by installing the [free version of Visual Studio Community](https://visualstudio.microsoft.com/downloads/).  

- To delete several work items, enter the server name and directory path to the collection. For example:   

	``` CLI
	witadmin destroywi /collection:http://TFSServerName:8080/tfs/DefaultCollection /id:12,15,23
	```
- To delete a single work item, enter the ID as shown:  

	``` CLI
	witadmin destroywi /collection:http://TFSServerName:8080/tfs/DefaultCollection /id:2003
	```    
::: moniker-end


## Delete and restore processes 

**When you delete a work item, the following actions occur:**

- Generates a new revision of the work item  
- Updates the **Changed By/Changed Date** fields to support traceability  
- Preserves the work item completely, including all field assignments, attachments, tags, and links  
- Causes the work item to become non-queryable and, as such, won't appear in any work tracking experience, query result, or report  
- Updates charts correctly. The CFD, velocity, burndown, and lightweight charts are updated to remove deleted work items  
- Removes work tracking extensions  
- Preserves trend data except for the latest value 
- Removes the work item from the data warehouse/cube similar to as if it was permanently removed.  


**When you restore a work item, the following actions occur:**   

- Causes a new revision of the work item to be made  
- Updates the **Changed By/Changed Date** fields to support traceability   
- Becomes queryable  
- All fields remain unchanged  
- History contains two new revisions, one for deletion, and one for restore  
- Reattaches work tracking extensions  
- Updates charts correctly. The CFD, velocity, burndown, and lightweight charts are updated to include the restored work items  
- Restores trend data  
- Adds the work item back to the data warehouse/cube  
- Sets the area or iteration path fields to the root node if the previous area path or iteration paths were deleted.   


## Use a REST API to delete, restore, and destroy work items

To programmatically delete, restore, and destroy work items, see one of the following REST API resources:  

- [Recycle bin REST API Reference](/rest/api/azure/devops/wit/recyclebin)
- [Work Items - Delete REST API Reference](/rest/api/azure/devops/wit/work-items/delete)
  
## Related articles   

- [Best tool to add, update, and link work items](../work-items/best-tool-add-update-link-work-items.md)  
- [View and add work items using the Work Items page](../work-items/view-add-work-items.md)  
- [Delete test artifacts](delete-test-artifacts.md) 
- [Set permissions and access for work tracking](../../organizations/security/set-permissions-access-work-tracking.md)  
- [Change project-level permissions](../../organizations/security/change-project-level-permissions.md)  
- [Stakeholder access quick reference](../../organizations/security/stakeholder-access.md) 

