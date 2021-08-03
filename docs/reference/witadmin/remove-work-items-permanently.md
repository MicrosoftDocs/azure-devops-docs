---
title: Remove work items permanently
titleSuffix: Azure DevOps Server 
description: Permanently delete work items added to Team Foundation Server
ms.technology: devops-agile
ms.custom: witadmin
ms.assetid: 345641a1-0c8d-4af8-84ce-37a449627a52
ms.topic: reference
ms.author: kaelli
author: KathrynEE
monikerRange: '< azure-devops-2019'
ms.date: 07/12/2018
---

# Remove work items permanently

[!INCLUDE [temp](../../includes/version-header-tfs-only.md)]

You can permanently remove work items from the on-premises Azure DevOps work tracking data store by using the **witadmin destroywi** command. Work items whose state is set to Closed remain in the database and can be reactivated. Use this command to permanently delete work items, after which you can't restore or reactivate them.  

> [!NOTE]
> This command has been deprecated for TFS 2018.2 and later versions. Instead, you can use the [Recycle bin](../../boards/backlogs/remove-delete-work-items.md#restore) to permanently delete work items, or use [REST API `DELETE`](/rest/api/azure/devops/wit/work%20items/delete).

You can run **witadmin destroywi** against an on-premises Azure DevOps Server only. 

<a id="run-witadmin-tool" />

## How to run the witadmin command-line tool  

To run the **witadmin** command-line tool, open a Command Prompt window where Visual Studio is installed. The **witadmin** command-line tool installs with any version of Visual Studio. You can access this tool by installing the free version of [Visual Studio Community or Visual Studio Team Explorer](https://visualstudio.microsoft.com/downloads/).  

> [!NOTE]   
> If you are connecting to an on-premises server, you must use the same or later version of Visual Studio or Team Explorer as Azure DevOps Server or TFS. For example, if you connect to a TFS 2017 instance, you must connect from Visual Studio 2017 or Team Explorer 2017. There is no Team Explorer 2015 version. 

::: moniker range=">= tfs-2017 <= tfs-2018"

*Visual Studio 2017 or Team Explorer 2017 client:*

`%programfiles(x86)%\Microsoft Visual Studio\2017\Community\Common7\IDE\CommonExtensions\Microsoft\TeamFoundation\Team Explorer`

or, `TeamExplorer`, `Professional` or `Enterprise` in place of `Community`, depending on the version you've installed.  

::: moniker-end

::: moniker range="tfs-2015"

*Visual Studio 2015 client:*

`cd %programfiles(x86)%\Microsoft Visual Studio 14.0\Common7\IDE`

::: moniker-end

::: moniker range="tfs-2013"

*Visual Studio 2013 client:*

`cd %programfiles(x86)%\Microsoft Visual Studio 12.0\Common7\IDE`

*Team Explorer 2013 client:* 

`cd %programfiles%\Microsoft Visual Studio 12.0\Common7\IDE\CommonExtensions\Microsoft\TeamFoundation\Team Explorer`

::: moniker-end

On a 32-bit edition of Windows, replace **%programfiles(x86)%** with **%programfiles%**. You can [install Visual Studio Community (which provides access to Team Explorer) or Visual Studio Team Explorer 2017](https://visualstudio.microsoft.com/downloads/download-visual-studio-vs) for free. 

## Prerequisites
  
-  You must be a member of the **Team Foundation Administrators** security group or the **Project Administrators** security group for the project collection. See [Add administrators, set permissions at the project-level or project collection-level](../../organizations/security/set-project-collection-level-permissions.md).  
  
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
  
The following example deletes the work items with IDs, 12, 15, and 23 from the database for Collection1 on the AdventureWorksServer server:  
  
```  
witadmin destroywi /collection:http://AdventureWorksServer:8080/tfs/DefaultCollection /id:12,15,23  
```  
  
## Related articles  

- [Move, change, or delete work items](../../boards/backlogs/remove-delete-work-items.md)  
- [Add work items](../../boards/backlogs/add-work-items.md)   
- [witAdmin: Customize and manage objects for tracking work](witadmin-customize-and-manage-objects-for-tracking-work.md)
