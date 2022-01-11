---
title: witAdmin Customize and manage objects for tracking work 
titleSuffix: Azure DevOps Server  
description: Tracks your team's progress by creating and customizing objects that track work items.
ms.technology: devops-agile
ms.custom: witadmin
ms.assetid: 7853f6db-98c9-4012-b6a5-51618c41d58c
ms.topic: reference
ms.author: kaelli
author: KathrynEE
monikerRange: '<= azure-devops'
ms.date: 01/11/2022
---



# witAdmin: Customize and manage objects for tracking work 

[!INCLUDE [temp](../../includes/customization-witadmin-plus-version-header.md)]

You can change how you track your team's progress by creating and customizing objects that track work items. By using the **witadmin** command-line tool, you can create, delete, import, and export objects such as categories, global lists, global workflow, types of links, and types of work items. You can also delete, list, or change the attributes of work item fields.  
  
> [!NOTE]   
> The **witadmin** command-line tool is not supported on Azure DevOps Services. Instead, you use [inherited processes](../../organizations/settings/work/manage-process.md). 

As the following illustration shows, you manage categories and types of and work items for each project. You manage global lists, types of links, and fields in work item for each project collection. You can customize global workflow for a project or a collection.  
  
![Work Item Tracking Objects](media/pnt_wit_objects.png "PNT_WIT_Objects")  
  
[!INCLUDE [temp](../../includes/process-editor.md)]

For most commands, you must be a member of the Project Administrators or Project Collection Administrators groups. For more information, see [Add an administrator](../../organizations/security/set-project-collection-level-permissions.md). 

[!INCLUDE [temp](../../includes/witadmin-run-tool.md)]  

<a name="global"></a> 
## Global parameters  
 You can use the following parameters to display help text for **witadmin**.  
  
|Parameter|Description|  
|---------------|-----------------|  
|**/help**<br />or<br />**/?**|Displays the syntax and parameters for the **witadmin** command-line tool.|  
|**command /help**<br />or<br /> **command /?**|Displays the syntax and parameters for the **witadmin** command that you specify.|  

<a name="index"></a>
 
## witadmin commands  

You customize all work tracking objects&mdash;such as, work item types (WITs), process configuration, global lists&mdash;by updating their XML definitions.  

You run **witadmin** commands against Azure DevOps Services or an on-premises Azure DevOps Server. As shown in the command lists below, only **witadmin** commands that list or export files are supported for the Azure DevOps Services. If you're new to work tracking customization, see [Customize your work tracking experience](../customize-work.md). 

## [Work item types](witadmin-import-export-manage-wits.md)

---
:::row:::
   :::column span="3":::
      **Command** 
   :::column-end:::
   :::column span="1":::
      **Azure DevOps Services** 
   :::column-end:::
   :::column span="1":::
      **Azure DevOps Server (on-premises)**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="3":::
   **destroywitd**: Delete a WIT   
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="3":::
   **exportwitd**: Export a WIT file  
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="3":::
   **importwitd**: Import a WIT file  
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="3":::
   **listwitd**:  List WIT names   
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="3":::
   **renamewitd**: Change a WIT display name   
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
---
 



## [Fields](manage-work-item-fields.md)



---
:::row:::
   :::column span="3":::
      **Command** 
   :::column-end:::
   :::column span="1":::
      **Azure DevOps Services** 
   :::column-end:::
   :::column span="1":::
      **Azure DevOps Server (on-premises)**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="3":::
   **deletefield**: Delete a field  
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="3":::
   **listfields**: List field attributes  
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
::: moniker range="< azure-devops-2019"
:::row:::
   :::column span="3":::
   **indexfield**: Turn field indexing on/off  
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
::: moniker-end
:::row:::
   :::column span="3":::
   **changefield**: Change a field attribute 
   :::column-end:::
   :::column span="1":::
      
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="3":::
   **renamewitd**: Change a WIT display name   
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
---
 
 

## [Process configuration](witadmin-import-export-process-configuration.md)
 
---
:::row:::
   :::column span="3":::
      **Command** 
   :::column-end:::
   :::column span="1":::
      **Azure DevOps Services** 
   :::column-end:::
   :::column span="1":::
      **Azure DevOps Server (on-premises)**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="3":::
   **exportprocessconfig**: Export the ProcessConfiguration file   
   :::column-end:::
   :::column span="1":::
       ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="3":::
   **importprocessconfig**: Import the ProcessConfiguration file  
   :::column-end:::
   :::column span="1":::
      
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
---


## [Link types](manage-link-types.md)

---
:::row:::
   :::column span="3":::
      **Command** 
   :::column-end:::
   :::column span="1":::
      **Azure DevOps Services** 
   :::column-end:::
   :::column span="1":::
      **Azure DevOps Server (on-premises)**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="3":::
   **deletelinktype**:  Delete a link type  
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="3":::
   **exportlinktype**:  Export a link type file 
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
::: moniker range="< azure-devops-2019"
:::row:::
   :::column span="3":::  
   **importlinktype**:  Import a link type file
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
::: moniker-end
:::row:::
   :::column span="3":::  
   **listlinktypes**:  List the defined link types
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="3":::   
   **reactivatelinktype**: Reactivate or rename a link type  
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
---


## [Global lists](manage-global-lists-for-work-item-types.md)
  
- **destroygloballist**: Delete a global list  
- **exportgloballist**: Export the global list  
- **importgloballist**: Import the global list  
- **listgloballist**: List all global list names   

  
## [Global workflow](witadmin-import-export-global-workflow.md)

- **exportglobalworkflow**: Export the global workflow file  
- **importglobalworkflow**: Import the global workflow file   


::: moniker range="< azure-devops-2019"
## [Work items](remove-work-items-permanently.md) 

- **destroywi**: Permanently delete work items    
::: moniker-end

## [Client cache](rebuild-client-cache.md)
 
---
:::row:::
   :::column span="3":::
      **Command** 
   :::column-end:::
   :::column span="1":::
      **Azure DevOps Services** 
   :::column-end:::
   :::column span="1":::
      **Azure DevOps Server (on-premises)**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="3":::
   **rebuildcache**: Rebuild the client cache  
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
---


## [Categories](witadmin-import-export-categories.md)
 
---
:::row:::
   :::column span="3":::
      **Command** 
   :::column-end:::
   :::column span="1":::
      **Azure DevOps Services** 
   :::column-end:::
   :::column span="1":::
      **Azure DevOps Server (on-premises)**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="3":::
   **exportcategories**:  Export the Categories file   
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="3":::
   **importcategories**:  Import the Categories file   
   :::column-end:::
   :::column span="1":::
      
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
---


## Related articles
-  [Customize your work tracking experience](../customize-work.md)   
-  [On-premises XML process model](../on-premises-xml-process-model.md)  