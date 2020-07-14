---
title: Remove or delete work items
titleSuffix: Azure Boards
description: How to remove or delete work items to another project in Azure Boards 
ms.custom: "boards-backlogs, seodec18" 
ms.technology: devops-agile
ms.assetid: 306929CA-DB58-45E3-AD45-B774901789D3  
ms.author: kaelli
author: KathrynEE
ms.topic: tutorial
monikerRange: '>= tfs-2013'
ms.date: 07/09/2020
---

# Remove or delete work items 

[!INCLUDE [temp](../includes/version-all.md)]

You can remove work items added to your backlog or taskboard that aren't relevant anymore. Simply change the State to Remove, or delete the work item. You can perform operations on individual work items or bulk modify several work items. 

[!INCLUDE [temp](../../includes/version-selector-minimize.md)]

In this article you'll learn:  

::: moniker range=">= tfs-2017"

> [!div class="checklist"]         
> * How to remove work items from the backlog by changing the State to Removed 
> * How to delete work items  
> * How to restore or permanently delete work items (web portal)    
> * How to permanently delete work items (command-line tool)  
> * What permissions are required to delete work items    

::: moniker-end

::: moniker range="<= tfs-2015"

>[!div class="checklist"]         
> * How to remove work items from the backlog by changing the State to Removed     
> * How to permanently delete work items (command-line tool)  
> * What permissions are required to delete work items   

::: moniker-end

You only have access to those actions that are supported on your platform and for which you have permissions. If you are a member of the Contributors group (anyone who has been added as a team member) or Project Administrators groups, you have access to the following features. For a simplified view of permissions assigned to built-in groups, see [Permissions and access](../../organizations/security/permissions-access.md). 

You can access the following actions for which you have permissions. If you are a member of the Contributors group (anyone who has been added as a team member) or Project Administrators groups, you have access to the following features. For a simplified view of permissions assigned to built-in groups, see [Permissions and access](../../organizations/security/permissions-access.md). 

::: moniker range=">= azure-devops-2019"

<table>
<tbody valign="top">
<tr>
<th width="50%">Contributors &amp; Stakeholders</th>
<th width="50%">Project Administrators</th>
</tr>
<tr>
<td>
<ul>
<li><a href="#remove" data-raw-source="[Remove work items (change State)](#remove)">Remove work items (change State)</a></li>
<li><a href="#delete" data-raw-source="[Delete work items](#delete)">Delete work items</a></li>
<li><a href="#restore" data-raw-source="[Restore work items](#restore)">Restore work items</a></li>
</ul>
</td>
<td><ul>
<li><a href="#restore" data-raw-source="[Permanently delete work items](#restore)">Permanently delete work items</a> </li>
<li><a href="delete-test-artifacts.md" data-raw-source="[Permanently delete test artifacts](delete-test-artifacts.md)">Permanently delete test artifacts</a></li>
</ul>
</td>
</tr>
</tbody>
</table>


::: moniker-end




::: moniker range=">= tfs-2017 <= tfs-2018"

<table>
<tbody valign="top">
<tr>
<th width="50%">Contributors &amp; Stakeholders</th>
<th width="50%">Project Administrators</th>
</tr>
<tr>
<td>
<ul>
<li><a href="#remove" data-raw-source="[Remove work items (change State)](#remove)">Remove work items (change State)</a></li>
<li><a href="#delete" data-raw-source="[Delete work items](#delete)">Delete work items</a></li>
<li><a href="#restore" data-raw-source="[Restore work items](#restore)">Restore work items</a></li>
</ul>
</td>
<td>
<ul>
<li><a href="#restore" data-raw-source="[Permanently delete work items (web portal](#restore)">Permanently delete work items (web portal</a></li>
<li><a href="#perm-delete" data-raw-source="[Permanently delete work items (command-line)](#perm-delete)">Permanently delete work items (command-line)</a></li>
<li><a href="delete-test-artifacts.md" data-raw-source="[Permanently delete test artifacts](delete-test-artifacts.md)">Permanently delete test artifacts</a></li>
</ul>
</td>
</tr>
</tbody>
</table>


::: moniker-end

::: moniker range="tfs-2015"


<table>
<tbody valign="top">
<tr>
<th width="50%">Contributors &amp; Stakeholders</th>
<th width="50%">Project Administrators</th>
</tr>
<tr>
<td>
<ul>
<li><a href="#remove" data-raw-source="[Remove work items (change State)](#remove)">Remove work items (change State)</a></li>
<li><a href="#delete" data-raw-source="[Delete work items](#delete)">Delete work items</a></li>
<li><a href="#restore" data-raw-source="[Restore work items](#restore)">Restore work items</a></li>
</ul>
</td>
<td><ul>
<li><a href="#restore" data-raw-source="[Permanently delete work items (web portal](#restore)">Permanently delete work items (web portal</a></li>
<li><a href="#perm-delete" data-raw-source="[Permanently delete work items (command-line)](#perm-delete)">Permanently delete work items (command-line)</a></li>
</ul>
</td>
</tr>
</tbody>
</table>


::: moniker-end

::: moniker range="tfs-2013"

- **Contributors & Stakeholders**: [Remove work items (change State)](#remove)  
- **Project Administrators**: [Permanently delete work items (command-line)](#perm-delete)  


::: moniker-end

::: moniker range=">= tfs-2015"

> [!TIP]  
> From the web portal, you can [multi-select several work items](bulk-modify-work-items.md) from a backlog or query results page and perform a bulk update using the associated feature. To delete, or restore several work items at the same time, see [Bulk modify work items](bulk-modify-work-items.md). 

::: moniker-end

## Prerequisites  

::: moniker range="azure-devops"

* You must connect to a project. If you don't have a project yet, [create one](/azure/devops/boards/get-started/sign-up-invite-teammates). 
* You must be added to a project as a member of the **Contributors** or **Project Administrators** security group. To get added, [Add users to a project or team](/azure/devops/organizations/security/add-users-team-project). 
* To modify work items, you must have your **View work items in this node** and **Edit work items in this node** permissions set to **Allow**. By default, the **Contributors** group has this permission set. To learn more, see [Set permissions and access for work tracking](/azure/devops/organizations/security/set-permissions-access-work-tracking). 
* To delete or remove work items, you must be granted **Stakeholder** access or higher  For details, see [About access levels](/azure/devops/organizations/security/access-levels).
* To delete work items, you must be a member of the **Project Administrators** group or have the **Delete work items in this project** permission set to Allow. By default, the Contributors group has **Delete and restore work items** set to **Allow**.

> [!NOTE]  
> Users with **Stakeholder** access for a public project have full access to all work tracking features just like users with **Basic** access. For details, see [About access levels](/azure/devops/organizations/security/access-levels).

::: moniker-end

::: moniker range=">= tfs-2017 < azure-devops"

* You must connect to a project. If you don't have a project yet, [create one](/azure/devops/organizations/projects/create-project).
* You must be added to a project as a member of the **Contributors** or **Project Administrators** security group. To get added, [Add users to a project or team](/azure/devops/organizations/security/add-users-team-project). 
* To modify work items, you must have your **View work items in this node** and **Edit work items in this node** permissions set to **Allow**. By default, the **Contributors** group has this permission set. To learn more, see [Set permissions and access for work tracking](/azure/devops/organizations/security/set-permissions-access-work-tracking). 
* To remove or delete work items, you must be granted **Stakeholder** access or higher. For details, see [About access levels](/azure/devops/organizations/security/access-levels).
* To delete work items, you must be a member of the **Project Administrators** group or have the **Delete work items in this project** permission set to Allow. The **Contributors** group has **Delete and restore work items** at the project-level set to **Allow** by default.

::: moniker-end


::: moniker range="<= tfs-2015" 

* You must connect to a project. If you don't have a project yet, [create one](/azure/devops/organizations/projects/create-project).
* You must be added to a project as a member of the **Contributors** or **Project Administrators** security group. To get added, [Add users to a project or team](/azure/devops/organizations/security/add-users-team-project). 
* To modify work items, you must have your **View work items in this node** and **Edit work items in this node** permissions set to **Allow**. By default, the **Contributors** group has this permission set. To learn more, see [Set permissions and access for work tracking](/azure/devops/organizations/security/set-permissions-access-work-tracking). 
* To delete or remove work items, you must be granted **Stakeholder** access or higher. For details, see [About access levels](/azure/devops/organizations/security/access-levels).
* To delete work items, you must be a member of the <strong>Project Administrators <strong>group or have the **Delete work items in this project</strong> permission set to **Allow</strong>. By default, for TFS 2015.1 and earlier versions, the Contributors group has **Delete work items in this project** set to **Not set**. This setting causes the Contributors group to inherit the value from the closest parent that has it explicitly set.

::: moniker-end

To learn more, see [Set permissions and access for work tracking](../../organizations/security/set-permissions-access-work-tracking.md) or [Set permissions at the project-level or project collection-level](../../organizations/security/set-project-collection-level-permissions.md). 


<a id="remove"> </a>  

## Remove work items

By changing the **State** of a work item to <em>Removed</em>, you effectively remove it from a backlog or board view (product, portfolio, and sprint backlogs, Kanban board, and taskboards).

> [!div class="mx-imgBorder"]  
> ![Change State to Removed](media/move-change-delete/remove-state.png)  

To cause removed items to not show up in queries, you must add a clause that filters on the **State** field. 

::: moniker range=">= azure-devops-2019"

> [!NOTE]  
> The *Removed* state isn't supported with the Basic process. It is only supported with the Agile, Scrum, and CMMI process work item types. The Basic process is available when you add a project to Azure DevOps Services or [Azure DevOps Server 2019 Update 1](https://go.microsoft.com/fwlink/?LinkId=2097609).  

::: moniker-end

<a id="delete"> </a> 

## Delete work items  

Deleted work items won't appear in your backlogs, boards, or queries. Deleted items are moved to a Recycle bin from which you can recover them if needed. To delete a test case, test plan, or test suite, or other test-related work item types, see [Delete test artifacts](delete-test-artifacts.md). 

> [!NOTE]   
> To permanently delete work items, you must be a member of the **Project Administrators** group or have the **Delete work items in this project** permission set to **Allow**. By default, the Contributors group has **Delete and restore work items** set to **Allow**. 


#### [Browser](#tab/browser/)

::: moniker range=">= azure-devops-2019"

1. You can delete a work item from within the work item form, by multi-selecting work items from a backlog or query results page, or from a Kanban board or taskboard. 

	To delete a single work item, open the work item, choose the ![ ](../media/icons/actions-icon.png) actions icon and select <strong>Delete</strong>. 

	> [!div class="mx-imgBorder"]
	> ![work item form, actions menu, Delete](media/move-change-delete/delete-work-item.png)  
	To delete several work items, [multi-select them from a backlog or a query results list](bulk-modify-work-items.md) and then choose the ![ ](../media/icons/actions-icon.png) actions icon and select <strong>Delete</strong>. 

	> [!div class="mx-imgBorder"]
	> ![List of work items, actions menu, Delete](media/move-change-delete/multi-delete.png) 

	To delete a work item from your Kanban or taskboard, choose the ![ ](../media/icons/actions-icon.png) actions icon of the card and select <strong>Delete</strong>. 
 
	> [!div class="mx-imgBorder"]  
	> ![Delete work item from Kanban board](media/move-change-delete/delete-work-items-from-kanban-board.png)
	>
1. Confirm you want to actually delete the item(s).  

	> [!div class="mx-imgBorder"]
	> ![Confirm delete dialog](media/move-change-delete/delete-work-items-dialog.png)  


::: moniker-end

::: moniker range="tfs-2015"  

> [!NOTE]  
> The **Delete and Recycle bin** features are available from TFS 2015.2 and later versions. 

::: moniker-end

::: moniker range=">= tfs-2015 <= tfs-2018"

1. You can delete a work item from within the work item form, or by multi-selecting work items from a backlog or query results page.   

	To delete a single work item, open the work item, choose the ![ ](../media/icons/actions-icon.png) actions icon and select <strong>Delete</strong>. 

	> [!div class="mx-imgBorder"]
	> ![work item form, actions menu, Delete](media/move-change-delete/delete-work-item.png)  

	To delete several work items, [multi-select them from a backlog or a query results list](bulk-modify-work-items.md) and then choose the ![ ](../media/icons/actions-icon.png) actions icon and select <strong>Delete</strong>. 

	> [!div class="mx-imgBorder"]
	> ![List of work items, actions menu, Delete](media/move-change-delete/multi-delete.png)  

	You can also delete work items from your Kanban or taskboard. 
 
	![Delete work item from Kanban board](media/move-change-delete/delete-work-items-from-kanban-board.png)

	Or, you can drag them to the ![Recycle bin](media/recycle-bin-icon.png) (Recycle bin). You can only access the (Recycle bin) from the **Work** hub. 

2. Confirm you want to actually delete the item(s).  

	![Confirm delete dialog](media/move-change-delete/delete-work-items-dialog-tfs.png)

	> [!NOTE]    
	> The Delete work items confirmation dialog for on-premises Azure DevOps may indicate there are auto-delete settings (disabled). There are no settings you can enable or disable. There is only a background process which permanently deletes work items that have been set to delete.   

::: moniker-end

::: moniker range="tfs-2013"  

> [!NOTE]  
> The **Delete and Recycle bin** features are available from TFS 2015.2 and later versions. The Delete option isn't available for TFS 2013. You can only delete work items from the **witadmin destroywi** command. 

::: moniker-end

#### [Azure DevOps CLI](#tab/azure-devops-cli) 

::: moniker range=">= azure-devops-2020"

You can delete a work item with the [az boards work-item delete](/cli/azure/ext/azure-devops/boards/work-item#ext-azure-devops-az-boards-work-item-delete) command. To get started, see [Get started with Azure DevOps CLI](../../cli/index.md).

> [!NOTE] 
> You can restore work items you **delete**, but cannot restore work items you choose to **destroy**.

```CLI 
az boards work-item delete --id
                           [--destroy]
                           [--org]
                           [--project]
                           [--yes] 
``` 

#### Parameters 

- **id**: Required. The ID of the work item.
- **destroy**: Optional. Permanently delete this work item.
- **org**: Azure DevOps organization URL. You can configure the default organization using `az devops configure -d organization=ORG_URL`. Required if not configured as default or picked up using `git config`. Example: `--org https://dev.azure.com/MyOrganizationName/`.
- **project**: Name or ID of the project. You can configure the default project using `az devops configure -d project=NAME_OR_ID`. Required if not configured as default or picked up using `git config`.
- **yes**: Optional. Do not prompt for confirmation.

#### Example 

The following command permanently deletes the bug with the ID 864 and doesn't prompt you for confirmation.

```CLI
az boards work-item delete --id 864 --destroy --yes
```

::: moniker-end


[!INCLUDE [temp](../../includes/note-cli-not-supported.md)] 

* * *

<a id="restore" />

::: moniker range=">= azure-devops-2019"

## Restore or permanently delete work items   

You restore deleted work items from the web portal Recycle bin. 

1. Choose **Boards>Work Items** and then choose the **Recycle bin**.  
 
	> [!div class="mx-imgBorder"]  
	> ![Boards>Work Items page, Open Recycle bin](media/move-change-delete/open-recycle-bin-new-nav.png)

	A new browser tab opens with the query which lists work items added to the Recycle bin. 

2.	Select the items you want to restore and then choose **Restore**.  
 
	![Restore selected items](media/move-change-delete/restore-from-recycle-bin.png) 
	> [!NOTE] 
	> You can't open work items that have been moved to the Recycle bin.  

	Optionally, you can choose to permanently delete the items.

	> [!NOTE] 
	> You'll only see the Permanently delete option if your [Permanently delete work items permission](../../organizations/security/set-permissions-access-work-tracking.md#move-delete-permissions) is set to Allow.  

3.	Confirm your selection. 

::: moniker-end

<a id="restore-work-items" />

::: moniker range=">= tfs-2015 <= tfs-2018"  

## Restore or permanently delete work items   

You restore deleted work items from the web portal Recycle bin. 

::: moniker-end  

::: moniker range="tfs-2015"  

> [!NOTE]  
> The <strong>Delete</strong> and <strong>Recycle bin</strong> features require TFS 2015.2 or later version. 

::: moniker-end  

::: moniker range=">= tfs-2015 <= tfs-2018"  

1. Choose <strong>Work>Backlogs</strong> or <strong>Work>Queries</strong> and then choose the <strong>Recycle bin</strong>.  
 
	![Open Recycle bin](media/move-change-delete/open-recycle-bin.png)

	A new browser tab opens with the query which lists work items added to the Recycle bin. 

1. Select the items you want to restore  and then choose **Restore**.  
 
   ![Restore selected items](media/move-change-delete/restore-from-recycle-bin.png) 

   Optionally, you can choose to permanently delete the items.

   > [!NOTE] 
   > You'll only see the Permanently delete option if your [Permanently delete work items permission](../../organizations/security/set-permissions-access-work-tracking.md#move-delete-permissions) is set to Allow.  

2. Confirm your selection. 

::: moniker-end


<a id="perm-delete" />

::: moniker range="<= tfs-2018"

## Permanently delete work items (command line)  

To permanently delete work items from the web portal, you must be a member of the Project Administrators group or be [granted explicit permissions to delete or restore work items](../../organizations/security/set-permissions-access-work-tracking.md#move-delete-permissions).
::: moniker-end

::: moniker range=">= tfs-2018"

Deleting work items from the command line is deprecated for TFS 2018.2 and later versions, and not supported for Azure Boards cloud service.

::: moniker-end

<a id="perm-delete"> </a>    

::: moniker range="<= tfs-2018"

Use the ```witadmin destroywi``` command to permanently remove work items from the data store. A permanent delete means all information in the work tracking data store is deleted and cannot be restored nor reactivated. You must be a member of the Project Administrators group of have your **Edit project-level information** permission set to Allow. 
::: moniker-end  

::: moniker range="tfs-2018"  

1. Open a Command Prompt window where the latest version of Visual Studio is installed and change the directory to where the **witadmin.exe** tool has been installed. For example, you would change to the following directory for TFS 2018. (For other versions, see [Remove work items permanently (witadmin destroywi)](../../reference/witadmin/remove-work-items-permanently.md)).  

	`%programfiles(x86)%\Microsoft Visual Studio\2018\Professional\Common7\IDE\CommonExtensions\Microsoft\TeamFoundation\Team Explorer`  

	On a 32-bit edition of Windows, replace %programfiles(x86)% with %programfiles%.      

	The **witadmin** command-line tool installs with any version of Visual Studio or Team Explorer. You can access this tool by installing the [free version of Visual Studio Community](https://visualstudio.microsoft.com/downloads/).  

1. To delete several work items, enter the server name and directory path to the collection. For example:   

   ```witadmin destroywi /collection:http://TFSServerName:8080/tfs/DefaultCollection /id:12,15,23```
 
   To delete a single work item, simply enter the ID as shown:  

   ```witadmin destroywi /collection:http://TFSServerName:8080/tfs/DefaultCollection /id:2003```    

::: moniker-end

::: moniker range="tfs-2017"  

1. Open a Command Prompt window where the latest version of Visual Studio is installed and change the directory to where the **witadmin.exe** tool has been installed. For example, you would change to the following directory for TFS 2017. (For other versions, see [Remove work items permanently (witadmin destroywi)](../../reference/witadmin/remove-work-items-permanently.md)).  

	`%programfiles(x86)%\Microsoft Visual Studio\2017\Professional\Common7\IDE\CommonExtensions\Microsoft\TeamFoundation\Team Explorer`  

	On a 32-bit edition of Windows, replace %programfiles(x86)% with %programfiles%.      

	The **witadmin** command-line tool installs with any version of Visual Studio or Team Explorer. You can access this tool by installing the [free version of Visual Studio Community](https://visualstudio.microsoft.com/downloads/).  

1. To delete several work items, enter the server name and directory path to the collection. For example:   

   ```witadmin destroywi /collection:http://TFSServerName:8080/tfs/DefaultCollection /id:12,15,23```
 
   To delete a single work item, simply enter the ID as shown:  

   ```witadmin destroywi /collection:http://TFSServerName:8080/tfs/DefaultCollection /id:2003```    

::: moniker-end

::: moniker range="tfs-2015"  

1. Open a Command Prompt window where the latest version of Visual Studio is installed and change the directory to where the **witadmin.exe** tool has been installed. For example, you would change to the following directory for TFS 2015. (For other versions, see [Remove work items permanently (witadmin destroywi)](../../reference/witadmin/remove-work-items-permanently.md)).  

	`cd %programfiles(x86)%\Microsoft Visual Studio 14.0\Common7\IDE` 

	> [!NOTE] 
	>**Required permissions:** For TFS 2015.2 or later versions, you must have [Permanently delete work items permission set to Allow](../../organizations/security/set-permissions-access-work-tracking.md#move-delete-permissions). For TFS 2015.1 or earlier versions, you must be a member of the Project Administrators group of have Edit project-level information permissions set to Allow. 	

	On a 32-bit edition of Windows, replace %programfiles(x86)% with %programfiles%.      

	The **witadmin** command-line tool installs with any version of Visual Studio or Team Explorer. You can access this tool by installing the [free version of Visual Studio Community](https://visualstudio.microsoft.com/downloads/).  

1. To delete several work items, enter the server name and directory path to the collection. For example:   

   ```witadmin destroywi /collection:http://TFSServerName:8080/tfs/DefaultCollection /id:12,15,23```
 
   To delete a single work item, simply enter the ID as shown:  

   ```witadmin destroywi /collection:http://TFSServerName:8080/tfs/DefaultCollection /id:2003```    

::: moniker-end


::: moniker range="tfs-2013"  

1. Open a Command Prompt window where the latest version of Visual Studio is installed and change the directory to where the **witadmin.exe** tool has been installed. For example, you would change to the following directory for TFS 2013. (For other versions, see [Remove work items permanently (witadmin destroywi)](../../reference/witadmin/remove-work-items-permanently.md)).  

	`cd %programfiles(x86)%\Microsoft Visual Studio 12.0\Common7\IDE` 

	On a 32-bit edition of Windows, replace %programfiles(x86)% with %programfiles%.      

	The **witadmin** command-line tool installs with any version of Visual Studio or Team Explorer. You can access this tool by installing the [free version of Visual Studio Community](https://visualstudio.microsoft.com/downloads/).  

1. To delete several work items, enter the server name and directory path to the collection. For example:   

   ```witadmin destroywi /collection:http://TFSServerName:8080/tfs/DefaultCollection /id:12,15,23```
 
   To delete a single work item, simply enter the ID as shown:  

   ```witadmin destroywi /collection:http://TFSServerName:8080/tfs/DefaultCollection /id:2003```    

::: moniker-end


## Related articles   

::: moniker range="azure-devops"  

- [Best tool to add, update, and link work items](../work-items/best-tool-add-update-link-work-items.md)  
- [View and add work items using the Work Items page](../work-items/view-add-work-items.md)  
- [Delete test artifacts](delete-test-artifacts.md) 
- [Create a test plan](../../test/create-a-test-plan.md)
- [Control how long to keep test results](../../test/how-long-to-keep-test-results.md) 

::: moniker-end


::: moniker range=">= tfs-2018 < azure-devops"  

- [Best tool to add, update, and link work items](../work-items/best-tool-add-update-link-work-items.md)  
- [View and add work items using the Work Items page](../work-items/view-add-work-items.md)  
- [Remove work items permanently (witadmin destroywi)](../../reference/witadmin/remove-work-items-permanently.md)
- [Delete test artifacts](delete-test-artifacts.md) 
- [Create a test plan](../../test/create-a-test-plan.md)
- [Control how long to keep test results](../../test/how-long-to-keep-test-results.md) 

::: moniker-end

::: moniker range="tfs-2017"  

- [Best tool to add, update, and link work items](../work-items/best-tool-add-update-link-work-items.md)  
- [Delete test artifacts](delete-test-artifacts.md) 
- [Add, update, and follow a work item](../backlogs/add-work-items.md)  
- [Remove work items permanently (witadmin destroywi)](../../reference/witadmin/remove-work-items-permanently.md)

::: moniker-end


::: moniker range="<= tfs-2015"  

- [Best tool to add, update, and link work items](../work-items/best-tool-add-update-link-work-items.md)  
- [Add and update a work item](../backlogs/add-work-items.md)  
- [Remove work items permanently (witadmin destroywi)](../../reference/witadmin/remove-work-items-permanently.md)

::: moniker-end


::: moniker range=">= tfs-2015"  

### Delete and restore actions performed under the hood  

#### Delete work items 

When you delete a work item, the following actions occur:  

- Generates a new revision of the work item  
- Updates the Changed By/Changed Date fields to support traceability  
- Preserves the work item completely, including all field assignments, attachments, tags, and links  
- Causes work item to become non-queryable and therefore can't appear in any work tracking experience, query result, or report  
- Updates charts accordingly, CFD, velocity, burndown and lightweight charts are updated to remove deleted work items  
- Removes WIT extensions  
- Preserves trend data except for the latest value 
- Removes the work item from the data warehouse/cube similar to as if it was permanently removed.  

#### Restore work items

When you restore a work item, the following actions occur:   

- Causes a new revision of the work item to be made  
- Updates the Changed By/Changed Date fields to support traceability   
- Becomes queryable  
- All fields remain unchanged  
- History contains 2 new revisions, one for deletion, and one for restore  
- Reattaches WIT extensions   
- Updates charts accordingly, CFD, velocity, burndown and lightweight charts are updated to include the restored work items  
- Restores trend data  
- Adds the work item back to the data warehouse/cube similar  
- Sets the area or iteration path fields to the root node if the previous area path or iteration paths were deleted.   

::: moniker-end




