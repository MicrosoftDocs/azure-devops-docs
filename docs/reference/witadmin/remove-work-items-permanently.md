---
title: Remove work items permanently
titleSuffix: TFS  
description: Permanently delete work items added to Team Foundation Server
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 345641a1-0c8d-4af8-84ce-37a449627a52
ms.topic: reference
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
monikerRange: '<= azure-devops-2019'
ms.date: 07/12/2018
---

# Remove work items permanently

[!INCLUDE [temp](../../_shared/version-header-tfs-only.md)]

You can permanently remove one or more work items from the on-premises Team Foundation database for a project collection by using the **witadmin destroywi** command. Work items whose state is set to Closed remain in the database and can be reactivated. Permanently removed work items are removed from the database and cannot be restored nor reactivated.  
  
 Each work item represents an object that is stored in the Team Foundation database and that is assigned a unique identifier, which is referred to as a work item ID. Work item IDs are unique within a project collection.  
  
 You can run **witadmin destroywi** against an on-premises TFS only. 

[!INCLUDE [temp](../../_shared/witadmin-run-tool.md)]    
  
 **Requirements**  
  
-   You must be a member of the **Team Foundation Administrators** security group or the **Project Administrators** security group for the project collection. See [Add administrators, set permissions at the project-level or project collection-level](../../organizations/security/set-project-collection-level-permissions.md).  
  
> [!NOTE]
>  Even if you sign in with administrative permissions, you must open an elevated Command Prompt window to perform this function on a server that is running Windows Server 2008. To open an elevated Command Prompt window, choose **Start**, open the shortcut menu for **Command Prompt**, and choose **Run as Administrator**. For more information, see the [Microsoft Web site](http://go.microsoft.com/fwlink/?LinkId=111235).  
  
## Syntax  
  
```  
witadmin destroywi /collection:CollectionURL /id:id [/noprompt]  
```  

::: moniker range="tfs-2018"
> [!NOTE]
> This command has been deprecated for TFS 2018.2 and later versions. Instead, you can use the [Recycle bin](../../boards/backlogs/remove-delete-work-items.md#restore-or-permanently-delete-work-items) to permanently delete work items, or use [REST API `DELETE`](/rest/api/azure/devops/wit/work%20items/delete).
::: moniker-end

#### Parameters  
  
|**Parameter**|**Description**|  
|-------------------|---------------------|  
|**/collection**:`CollectionURL`|Specifies the URI of the project collection. For example:<br /><br /> **On-premises TFS format:  http**://*ServerName:Port/VirtualDirectoryName/CollectionName*<br /> If no virtual directory is used, then the format for the URI is the following: **http**://*ServerName:Port/CollectionName*.|  
|**/id**:`id`|The ID of a work item to destroy. To specify multiple work items, separate IDs using only commas, without whitespace.|  
|**/noprompt**|Disables the prompt for confirmation.|  
|**/?** or **help**|Displays help about the command in the Command Prompt window.|  
  
  
## Permanently remove work items from the database  
 
The following example deletes the work item *2003* from the database for *Collection1* on the *AdventureWorksServer* server:  
  
```  
witadmin destroywi /collection:http://AdventureWorksServer:8080/tfs/DefaultCollection /id:2003  
```  
  
The following example deletes the work items with IDs, 12, 15, and 23 from the database for Collection1 on the AdventureWorksServer server:  
  
```  
witadmin destroywi /collection:http://AdventureWorksServer:8080/tfs/DefaultCollection /id:12,15,23  
```  
  
## Related articles  
- [Move, change, or delete work items](../../boards/backlogs/remove-delete-work-items.md)  
- [Add work items](../../boards/backlogs/add-work-items.md)   
- [witAdmin: Customize and manage objects for tracking work](witadmin-customize-and-manage-objects-for-tracking-work.md)