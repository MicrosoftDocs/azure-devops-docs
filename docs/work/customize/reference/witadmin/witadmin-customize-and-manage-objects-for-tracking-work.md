---
title: witAdmin:Customize and manage objects for tracking work | VSTS & TFS
description: Tracks your team's progress by creating and customizing objects that track work items.
ms.prod: visual-studio-tfs-dev14
ms.technology: vs-devops-wit
ms.assetid: 7853f6db-98c9-4012-b6a5-51618c41d58c
ms.manager: douge
ms.author: kaelli
ms.date: 08/11/2017
---


# witAdmin: Customize and manage objects for tracking work 

[!INCLUDE [temp](../../../_shared/customization-witadmin-plus-version-header.md)]

You can change how you track your team's progress by creating and customizing objects that track work items. By using the **witadmin** command-line tool, you can create, delete, import, and export objects such as categories, global lists, global workflow, types of links, and types of work items. You can also permanently delete types of work item types, and you can delete, list, or change the attributes of fields in work item.  
  
As the following illustration shows, you manage categories and types of and work items for each team project. You manage global lists, types of links, and fields in work item for each team project collection. You can customize global workflow for a team project or a collection.  
  
![Work Item Tracking Objects](_img/pnt_wit_objects.png "PNT_WIT_Objects")  
  
[!INCLUDE [temp](../../../_shared/process-editor.md)]

For most commands, you must be a member of the Project Administrators or Project Collection Administrators groups. For more information, see [Add an administrator](../../../../security/set-project-collection-level-permissions.md). 

[!INCLUDE [temp](../../../_shared/witadmin-run-tool.md)]  

 

<a name="global"></a> 
## Global parameters  
 You can use the following parameters to display help text for **witadmin**.  
  
|Parameter|Description|  
|---------------|-----------------|  
|**/help**<br />or<br />**/?**|Displays the syntax and parameters for the **witadmin** command-line tool.|  
|**command /help**<br />or<br /> **command /?**|Displays the syntax and parameters for the **witadmin** command that you specify.|  

<a name="index"></a> 
##witadmin commands  

All work tracking objects&mdash;such as, work item types (WITs), process configuration, global lists&mdash; are customized by their XML definitions.  

All **witadmin** commands can be run against an on-premises TFS. You can run list and export **witadmin** commands against a VSTS account. If you are new to work tracking customization and for definitions of the work tracking objects your can customize, see [Customize your work tracking experience](../../customize-work.md). 

##[Work item types](witadmin-import-export-manage-wits.md)
  
- **destroywitd**: Delete a WIT   
- **exportwitd**: Export a WIT file  
- **importwitd**: Import a WIT file  
- **listwitd**:  List WIT names   
- **renamewitd**: Change a WIT display name    


##[Fields](manage-work-item-fields.md)</p>

- **deletefield**: Delete a field  
- **listfields**: List field attributes  
- **indexfield**: Turn field indexing on/off  
- **changefield**: Change a field attribute   

##[Process configuration](witadmin-import-export-process-configuration.md)</p>
  
- **exportprocessconfig**: Export the ProcessConfiguration file   
- **importprocessconfig**: Import the ProcessConfiguration file  

##[Link types](manage-link-types.md)</p>
  
- **deletelinktype**:  Delete a link type  
- **exportlinktype**:  Export a link type file   
- **importlinktype**:  Import a link type file  
- **listlinktypes**:  List the defined link types   
- **reactivatelinktype**: Reactivate or rename a link type   


##[Global lists](manage-global-lists-for-work-item-types.md)</p>
  
- **destroygloballist**: Delete a global list  
- **exportgloballist**: Export the global list  
- **importgloballist**: Import the global list  
- **listgloballist**: List all global list names   

  
##[Global workflow](witadmin-import-export-global-workflow.md)</p>

- **exportglobalworkflow**: Export the global workflow file  
- **importglobalworkflow**: Import the global workflow file   


##[Work items](remove-work-items-permanently.md) 

- **witadmin destroywi**: Permanently delete work items    


##[Client cache](rebuild-client-cache.md)</p>
  
- **rebuildcache**: Rebuild the client cache   


##[Categories](witadmin-import-export-categories.md)</p>
  
- **exportcategories**:  Export the Categories file   
- **importcategories**:  Import the Categories file      
  

## Related notes
-  [Customize your work tracking experience](../../customize-work.md)   
-  [On-premises XML process model](../../on-premises-xml-process-model.md)  