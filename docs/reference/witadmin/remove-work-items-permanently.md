---
title: Remove work items permanently
titleSuffix: TFS
description: Permanently delete work items added to Team Foundation Server
ms.service: azure-devops-boards
ms.custom: witadmin, archive-candidate
ms.assetid: 345641a1-0c8d-4af8-84ce-37a449627a52
ms.topic: reference
ms.author: kaelli
author: KathrynEE
monikerRange: 'tfs-2018'
ms.date: 01/11/2022
---

# Remove work items permanently

[!INCLUDE [version-eq-2018](../../includes/version-eq-2018.md)]

You can permanently remove work items from the on-premises Team Foundation Server work tracking data store by using the **witadmin destroywi** command. Work items whose state is set to Closed remain in the database and can be reactivated. Use this command to permanently delete work items, after which you can't restore or reactivate them.  

> [!NOTE]
> This command has been deprecated for TFS 2018.2 and later versions. Instead, you can permanently delete work items from the [Recycle bin](../../boards/backlogs/remove-delete-work-items.md#restore), or use [REST API `DELETE`](/rest/api/azure/devops/wit/work-items/delete).
 

<a id="run-witadmin-tool" />

## How to run the witadmin command-line tool  

To run the **witadmin** command-line tool, open a Command Prompt window where Visual Studio is installed. The **witadmin** command-line tool installs with any version of Visual Studio. You can access this tool by installing the free version of [Visual Studio Community or Visual Studio Team Explorer](https://visualstudio.microsoft.com/downloads/).  

> [!NOTE]   
> You must use the same or later version of Visual Studio or Team Explorer as Azure DevOps Server or TFS. For example, if you connect to a TFS 2017 instance, you must connect from Visual Studio 2017 or Team Explorer 2017.  

*Visual Studio 2017 or Team Explorer 2017 client:*

`%programfiles(x86)%\Microsoft Visual Studio\2017\Community\Common7\IDE\CommonExtensions\Microsoft\TeamFoundation\Team Explorer`

or, `TeamExplorer`, `Professional` or `Enterprise` in place of `Community`, depending on the version you've installed.  

On a 32-bit edition of Windows, replace **%programfiles(x86)%** with **%programfiles%**. You can [install Visual Studio Community (which provides access to Team Explorer) or Visual Studio Team Explorer 2017](https://visualstudio.microsoft.com/downloads/download-visual-studio-vs) for free. 

## Prerequisites
  
-  You must be a member of the **Team Foundation Administrators** security group or the **Project Administrators** security group for the project collection. See [Change project collection-level permissions](../../organizations/security/change-organization-collection-level-permissions.md).  
  
> [!NOTE]
>  Even if you sign in with administrative permissions, you must open an elevated Command Prompt window to perform this function on a server that is running Windows Server 2008. To open an elevated Command Prompt window, choose **Start**, open the shortcut menu for **Command Prompt**, and choose **Run as Administrator**. For more information, see the [Microsoft Web site](/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/cc772207(v=ws.10)).  
  
## Syntax  
  
```  
witadmin destroywi /collection:CollectionURL /id:id [/noprompt]  
```  

#### Parameters  
  
|**Parameter**|**Description**|  
|-------------------|---------------------|  
|**/collection**:`CollectionURL`|Specifies the URI of the project collection. For example:<br /><br /> **On-premises TFS format:  http**://*ServerName:Port/VirtualDirectoryName/CollectionName*<br /> If no virtual directory is used, then the format for the URI is as shown: **http**://*ServerName:Port/CollectionName*.|  
|**/id**:`id`|The ID of a work item to destroy. To specify multiple work items, separate IDs using only commas, without whitespace.|  
|**/noprompt**|Disables the prompt for confirmation.|  
|**/?** or **help**|Displays help about the command in the Command Prompt window.|  
  
  
## Permanently remove work items from the database  
 
The following example deletes the work item *2003* from the database for *Collection1* on the *AdventureWorksServer* server:  
  
```  
witadmin destroywi /collection:http://AdventureWorksServer:8080/tfs/DefaultCollection /id:2003  
```  
  
The following example deletes the work items with IDs 12, 15, and 23 from the database for *Collection1* on the *AdventureWorksServer* server:  
  
```  
witadmin destroywi /collection:http://AdventureWorksServer:8080/tfs/DefaultCollection /id:12,15,23  
```  
  
## Related articles  

- [Remove, delete, or restore work items](../../boards/backlogs/remove-delete-work-items.md) 
- [Add work items](../../boards/backlogs/add-work-items.md)   
- [witAdmin: Customize and manage objects for tracking work](witadmin-customize-and-manage-objects-for-tracking-work.md)
