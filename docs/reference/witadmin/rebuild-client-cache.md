---
title: Rebuild the client cache
titleSuffix: Azure DevOps Server 
description: Update the data cache on client computers after certain maintenance operations.
ms.technology: devops-agile
ms.custom: witadmin
ms.assetid: e110852a-ab93-4259-957e-47c2076c20bb
ms.topic: reference
ms.author: kaelli
author: KathrynEE
monikerRange: '< azure-devops'
ms.date: 03/20/2018
---

# Rebuild the client cache

[!INCLUDE [temp](../../includes/version-header-tfs-only.md)]

After certain maintenance operations, client computers require a cache refresh. After you move, restore, rename, or fail over a data-tier or application-tier server, you must refresh the cache for tracking work items and users must refresh the version control cache on client computers.  

> [!NOTE]    
> This article applies to project customization of on-premises Azure DevOps Server. 

You can force a rebuild of the cache on each client computer the next time it connects to a project collection by using the **witadmin rebuildcache** command.  
  
> [!IMPORTANT]
> To avoid server performance issues, don't run this command during normal operating hours.  
  
[!INCLUDE [temp](../../includes/witadmin-run-tool.md)]  
  

## Prerequisites 
  
- To use the **witadmin rebuildcache** command, you must be a member of the **Team Foundation Administrators** security group or the **Project Administrators** security group for the project collection that you want to manage. See [Add an administrator](../../organizations/security/set-project-collection-level-permissions.md).  
  
> [!NOTE]  
>  Even if you sign in with administrative permissions, you must open an elevated Command Prompt window to perform this function on a server that is running Windows Server 2008. To open an elevated Command Prompt window, choose **Start**, open the shortcut menu for **Command Prompt**, and choose **Run as Administrator**. For more information, see the [Microsoft Web site](/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/cc772207(v=ws.10)).  
  
## Syntax  
  
```  
witadmin rebuildcache /collection:CollectionURL [/noprompt]  
```  
  
#### Parameters  
  
|**Parameter**|**Description**|  
|-------------------|---------------------|  
|**/collection**:`CollectionURL`|Specifies the URI of the project collection. For example:<br /> **On-premises TFS format:  http**://*ServerName:Port/VirtualDirectoryName/CollectionName*<br /><br /> If no virtual directory is used, then the format for the URI is as shown: **http**://*ServerName:Port/CollectionName*.|  
|**/noprompt**|Disables the prompt for confirmation.|  
|**/?** or **help**|Displays help about the command in the Command Prompt window.|  
  
## Remarks  

The **witadmin rebuildcache** command invalidates cached data on all clients for a specified project collection. It causes a cache refresh  for each client the next time the client connects to the project collection.  
  
## Example   

The following command invalidates the metadata cache for all clients that connect to DefaultCollection that is defined on the server that is named AdventureWorksServer. The client caches are updated the next time they connect to the project collection.  
  
```  
witadmin rebuildcache /collection:http://AdventureWorksServer:8080/tfs/DefaultCollection  
```  
  
## Related articles

- [witAdmin: Customize and manage objects for tracking work](witadmin-customize-and-manage-objects-for-tracking-work.md)