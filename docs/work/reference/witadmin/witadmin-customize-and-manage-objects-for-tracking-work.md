---
title: witAdmin:Customize and manage objects for tracking work | Team Services & TFS
description: Tracks your team's progress by creating and customizing objects that track work items.
ms.prod: visual-studio-tfs-dev14
ms.technology: vs-devops-wit
ms.topic: reference
ms.assetid: 7853f6db-98c9-4012-b6a5-51618c41d58c
ms.manager: douge
ms.author: kaelli
ms.date: 06/23/2017
---


# witAdmin: Customize and manage objects for tracking work 

[!INCLUDE [temp](../../_shared/customization-witadmin-plus-version-header.md)]

You can change how you track your team's progress by creating and customizing objects that track work items. By using the **witadmin** command-line tool, you can create, delete, import, and export objects such as categories, global lists, global workflow, types of links, and types of work items. You can also permanently delete types of work item types, and you can delete, list, or change the attributes of fields in work item.  
  
As the following illustration shows, you manage categories and types of and work items for each team project. You manage global lists, types of links, and fields in work item for each team project collection. You can customize global workflow for a team project or a collection.  
  
 ![Work Item Tracking Objects](_img/pnt_wit_objects.png "PNT_WIT_Objects")  
  
[!INCLUDE [temp](../../_shared/process-editor.md)]


##How to run the witadmin command-line tool  

[!INCLUDE [temp](../../_shared/witadmin-run-tool.md)]  

For most commands, you must be a member of the Project Administrators or Project Collection Administrators groups. For more information, see [Add an administrator](../../../setup-admin/add-administrator-tfs.md).  

<a name="global"></a> 
## Global parameters  
 You can use the following parameters to display help text for **witadmin**.  
  
|Parameter|Description|  
|---------------|-----------------|  
|**/help**<br />or<br />**/?**|Displays the syntax and parameters for the **witadmin** command-line tool.|  
|**command /help**<br />or<br /> **command /?**|Displays the syntax and parameters for the **witadmin** command that you specify.|  

<a name="index"></a> 
##Index of witadmin commands  

All work tracking objects&mdash;such as, work item types (WITs), process configuration, global lists&mdash; are customized by their XML definitions.  

All **witadmin** commands can be run against an on-premises TFS. You can run list and export **witadmin** commands against a Team Services account. If you are new to work tracking customization and for definitions of the work tracking objects your can customize, see [Customize your work tracking experience](../../customize/customize-work.md). 

<div style="float:left;width:275px;margin:8px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">[Work item types](witadmin-import-export-manage-wits.md)</p>
<ul style="padding-left:30px">
<li style="margin-bottom:2px">**destroywitd**: Delete a WIT </li>
<li style="margin-bottom:2px">**exportwitd**: Export a WIT file  </li>
<li style="margin-bottom:2px">**importwitd**: Import a WIT file</li>
<li style="margin-bottom:2px">**listwitd**:  List WIT names </li>
<li style="margin-bottom:2px">**renamewitd**: Change a WIT display name </li> 

</ul>
</div>
<div style="float:left;width:250px;margin:8px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">[Fields](manage-work-item-fields.md)</p>
<ul style="padding-left:30px"> 
<li style="margin-bottom:2px">**deletefield**: Delete a field  </li>
<li style="margin-bottom:2px">**listfields**: List field attributes</li>
<li style="margin-bottom:2px">**indexfield**: Turn field indexing on/off</li>
<li style="margin-bottom:2px">**changefield**: Change a field attribute </li>
</ul>
</div>

<div style="float:left;width:225px;margin:8px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">[Process configuration](witadmin-import-export-process-configuration.md)</p>
<ul style="padding-left:30px">
<li style="margin-bottom:2px">**exportprocessconfig**: Export the ProcessConfiguration file </li>
<li style="margin-bottom:2px">**importprocessconfig**: Import the ProcessConfiguration file</li>
</ul>
</div>

<div style="clear:left;font-size:100%">
</div>

<div style="float:left;width:275px;margin:8px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">[Link types](manage-link-types.md)</p>
<ul style="padding-left:30px">
<li style="margin-bottom:2px">**deletelinktype**:  Delete a link type</li>
<li style="margin-bottom:2px">**exportlinktype**:  Export a link type file </li>
<li style="margin-bottom:2px">**importlinktype**:  Import a link type file</li>
<li style="margin-bottom:2px">**listlinktypes**:  List the defined link types </li>
<li style="margin-bottom:2px">**reactivatelinktype**: Reactivate or rename a link type </li>
</ul>
</div>

<div style="float:left;width:250px;margin:8px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">[Global lists](manage-global-lists-for-work-item-types.md)</p>
<ul style="padding-left:30px">
<li style="margin-bottom:2px">**destroygloballist**: Delete a global list</li>
<li style="margin-bottom:2px">**exportgloballist**: Export the global list</li>
<li style="margin-bottom:2px">**importgloballist**: Import the global list</li>
<li style="margin-bottom:2px">**listgloballist**: List all global list names</li> 
</ul>
</div>



<div style="float:left;width:225px;margin:8px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">[Global workflow](witadmin-import-export-global-workflow.md)</p>
<ul style="padding-left:30px"> 
<li style="margin-bottom:2px">**exportglobalworkflow**:  Export the global workflow file</li>
<li style="margin-bottom:2px">**importglobalworkflow**:  Import the global workflow file </li>
</ul>
</div>



<div style="clear:left;font-size:100%">
</div>


 
<div style="float:left;width:275px;margin:8px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">[Work items](remove-work-items-permanently.md)</p>
<ul style="padding-left:30px"> 
<li style="margin-bottom:2px">**witadmin destroywi**:  Permanently delete work items</li>  
</ul>
</div>

<div style="float:left;width:250px;margin:8px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">[Client cache](rebuild-client-cache.md)</p>
<ul style="padding-left:30px">
<li style="margin-bottom:2px">**rebuildcache**:  Rebuild the client cache</li> 
</ul>
</div>

<div style="float:left;width:225px;margin:8px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">[Categories](witadmin-import-export-categories.md)</p>
<ul style="padding-left:30px">
<li style="margin-bottom:2px">**exportcategories**:  Export the Categories file</li> 
<li style="margin-bottom:2px">**importcategories**:  Import the Categories file</li>    

</ul>
</div>

<div style="clear:left;font-size:100%">
</div>
    

## Related notes
-  [Customize your work tracking experience](../../customize/customize-work.md)   
 