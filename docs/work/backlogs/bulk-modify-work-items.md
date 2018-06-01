---
title: Bulk modify work items
titleSuffix: VSTS & TFS
description: Bulk edit/modify/update several/multiple work items, backlog items, tasks, or bugs or linked parent-child items for Visual Studio Team Services or Team Foundation Server    
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 152CAFE0-2360-470A-98AC-F613A67C24D2  
ms.manager: douge
ms.author: kaelli
author: KathrynEE
ms.topic: tutorial
ms.date: 03/20/2018
---

# Bulk modify work items  

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]


<!--- UPDATES REQUIRED FOR MULTI-VERSION  TAGGING -->  

Use bulk modify when you need to quickly make the same change to a number of work items. For example, you might want to change the priority of several bugs or reassign several tasks to the same team member. Use the web portal to quickly modify one or more fields for work items that will contain the same value.  

> [!TIP]    
> To add work items in bulk or update multiple fields with different values, use [Excel](../backlogs/office/bulk-add-modify-work-items-excel.md). You can't perform a bulk add of work items through the web portal.   


With bulk modify, you can edit fields, add or remove tags, reassign work, or move work to a specific sprint. You can also use bulk modify to change the work item type or move work items to other team projects. The options available to you depend on the platform you work from and the permissions you've been granted.

In this topic you'll learn:  

::: moniker range="vsts || >= tfs-2015 <= tfs-2018"
>[!div class="checklist"]    
> * How to multi-select work items from a list and open the context menu  
> * Edit one or more fields of several work items    
> * Assign work from a backlog to a sprint using drag-and-drop 
> * Add or remove tags from several work items  
::: moniker-end

::: moniker range="tfs-2013"
>[!div class="checklist"]    
> * How to multi-select work items from a list and open the context menu  
> * Edit one or more fields of several work items    
> * Assign work from a backlog to a sprint using drag-and-drop 
::: moniker-end

<!---
> [!NOTE]  
>**Feature availability:**&#160;&#160;The following features are available from VSTS (cloud service) or from the web portal of the listed on-premises TFS version or a later version. Those not annotated are available from all platforms and versions. Visit the [Visual Studio Downloads page](https://www.visualstudio.com/downloads/download-visual-studio-vs) to get the latest TFS update. Additional resources may be required as annotated. To determine your platform or TFS version, see [Provide product and content feedback](../../user-guide/provide-feedback.md#platform-version).  
-->

All of the following actions can be performed by team members that belong to the Contributors group. Members provided with Stakeholder access can perform multi-select, bulk edit, change type, email, and copy as HTML/copy to clipboard actions. For details, see [Work as a stakeholder](../../security/get-started-stakeholder.md).  

::: moniker range="vsts"
> [!div class="mx-tdBreakAll"]  
> |Multi-select work items|Bulk edit/update/delete|Copy, clone, change type,<br/>move, or email work items|  
> |-------------|----------|---------|  
> |- [Multi-select-query results](#multi-select)<br/>- [Multi-select-backlog](#multi-select)<br/><br/>**Link work items**<hr/>- [Link to a new item](add-link.md#link)<br/>- [Link to an existing item](add-link.md#link)<br/>- [New branch](connect-work-items-to-git-dev-ops.md)<sup>1</sup>|- [Edit field(s)](#edit)<br/>- [Assign to](#assign-to)<br/>- [Move to iteration](#move-iteration)<br/>- [Change position](create-your-backlog.md#move-items-priority-order)<br/>- [Change parent](organize-backlog.md#reparent)<br/>- [Add/remove tags](#tags)<br/>- [Update from template](work-item-template.md)<sup>1</sup><br/>- [Delete](remove-delete-work-items.md#delete) <sup>1</sup>|- [Clone or copy a single item](copy-clone-work-items.md#copy-clone) <sup>2</sup><br/>- [Copy as HTML/Copy to clipboard](copy-clone-work-items.md#html)<br/>- [Email selected item(s)](../track/share-plans.md)<br/>- [Change work item type](remove-delete-work-items.md#change-type)<sup>1</sup><br/>- [Move items to another team project](remove-delete-work-items.md#move)<sup>1, 3</sup>|                


**Notes:**  
1. You can't perform certain functions on work items whose WITs belong to the [Hidden Types Category](../work-items/agile-glossary.md#hidden-types). This includes all work items that track tests&mdash;such as test cases, shared steps, and shared parameters&mdash;code review requests and responses, and feedback requests and responses. 
2. You can choose to copy or clone a single work item from a query results list or from the [Actions menu of the work item form](remove-delete-work-items.md). You can only perform a clone or copy action for a single work item. Choose Copy work item when you want to create a copy of a work item and change its work item type. Choose Clone when you want to create another instance of the work item without changes to its work item type. 
3. You must be a member of the Project Administrators group or be [granted explicit permissions to move work items](../../security/set-permissions-access-work-tracking.md#move-delete-permissions).  

::: moniker-end


::: moniker range=">= tfs-2017 <= tfs-2018"
> [!div class="mx-tdBreakAll"]  
> |Multi-select work items|Bulk edit/update/delete|Copy, clone, change type,<br/>move, or email work items|  
> |-------------|----------|---------|  
> |- [Multi-select-query results](#multi-select)<br/>- [Multi-select-backlog](#multi-select)<br/><br/>**Link work items**<hr/>- [Link to a new item](add-link.md#link)<br/>- [Link to an existing item](add-link.md#link)<br/>- [New branch](connect-work-items-to-git-dev-ops.md)<sup>1</sup>|- [Edit field(s)](#edit)<br/>- [Assign to](#assign-to)<br/>- [Move to iteration](#move-iteration)<br/>- [Change position](create-your-backlog.md#move-items-priority-order)<br/>- [Change parent](organize-backlog.md#reparent)<br/>- [Add/remove tags](#tags)<br/>- [Delete](remove-delete-work-items.md#delete) <sup>1</sup>|- [Clone or copy a single item](copy-clone-work-items.md#copy-clone) <sup>2</sup><br/>- [Copy as HTML/Copy to clipboard](copy-clone-work-items.md#html)<br/>- [Email selected item(s)](../track/share-plans.md) <sup>3</sup>|       


**Notes:**  
1. You can't perform certain functions on work items whose WITs belong to the [Hidden Types Category](../work-items/agile-glossary.md#hidden-types). This includes all work items that track tests&mdash;such as test cases, shared steps, and shared parameters&mdash;code review requests and responses, and feedback requests and responses. 
2. You can choose to copy or clone a single work item from a query results list or from the [Actions menu of the work item form](remove-delete-work-items.md). You can only perform a clone or copy action for a single work item. Choose Copy work item when you want to create a copy of a work item and change its work item type. Choose Clone when you want to create another instance of the work item without changes to its work item type. 
3. For on-premises TFS, you must have an [SMTP server configured for your deployment](/tfs/server/admin/setup-customize-alerts). 


::: moniker-end



::: moniker range=">= tfs-2013 <= tfs-2015"
> [!div class="mx-tdBreakAll"]  
> |Multi-select work items|Bulk edit/update/delete|Copy, clone, change type,<br/>move, or email work items|  
> |-------------|----------|---------|  
> |- [Multi-select-query results](#multi-select)<br/>- [Multi-select-backlog](#multi-select) <br/><br/>**Link work items**<hr/>- [Link to a new item](add-link.md#link)<br/>- [Link to an existing item](add-link.md#link)|- [Edit field(s)](#edit)<br/>- [Assign to](#assign-to)<br/>- [Move to iteration](#move-iteration)<br/>- [Change position](create-your-backlog.md#move-items-priority-order)<br/>- [Change parent](organize-backlog.md#reparent)<br/>- [Delete](remove-delete-work-items.md#delete) <sup>1</sup>|- [Clone or copy a single item](copy-clone-work-items.md#copy-clone) <sup>2</sup><br/>- [Copy as HTML/Copy to clipboard](copy-clone-work-items.md#html)<br/>- [Email selected item(s)](../track/share-plans.md) <sup>3</sup>|       


**Notes:**  
1. You can't perform certain functions on work items whose WITs belong to the [Hidden Types Category](../work-items/agile-glossary.md#hidden-types). This includes all work items that track tests&mdash;such as test cases, shared steps, and shared parameters&mdash;code review requests and responses, and feedback requests and responses. 
2. You can choose to copy or clone a single work item from a query results list or from the [Actions menu of the work item form](remove-delete-work-items.md). You can only perform a clone or copy action for a single work item. Choose Copy work item when you want to create a copy of a work item and change its work item type. Choose Clone when you want to create another instance of the work item without changes to its work item type. 
3. For on-premises TFS, you must have an [SMTP server configured for your deployment](/tfs/server/admin/setup-customize-alerts). 


::: moniker-end

[!INCLUDE [temp](../_shared/prerequisites-work-items.md)]

<a id="multi-select"> </a>  
<a id="edit"> </a>  

## Bulk edit multi-selected work items   

To start a bulk edit, begin by multi-selecting the work items you want to modify, either from the query results or the backlog. You can craft your query using the [query editor or search box](../track/using-queries.md). 

::: moniker range="vsts || >= tfs-2015 <= tfs-2018"
Multi-select of work items on the backlog and sprint backlogs works in the same way as multi-select works within query results. 
::: moniker-end
::: moniker range="tfs-2015"
(Requires TFS 2015.1 or later versions)  
::: moniker-end
You can use bulk modify by selecting work items from the backlog page or query results list. From the backlog page context menu, you can change the backlog priority of several items (Change position or Move to position),  assign them to a team member, move them to a different sprint, or [map them to a feature](organize-backlog.md#mapping).

The menu options available to you change depending on the platform you work from and whether you work from a backlog page or query results list.  

::: moniker range="vsts || >= tfs-2018"
<!---#### VSTS and TFS 2018-->

<table valign="top">
<tr valign="top">
<td>
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Backlog menu </p>
<img src="_img/bulk-m-backlog-menu-options-ts.png" alt="Backlog multi-select menu" style="border: 1px solid #C3C3C3;" />  
</td>

<td>
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Query results multi-select menu </p>
<img src="_img/bulk-m-query-results-menu-options-ts.png" valign="top" alt="Query results multi-select menu" style="border: 1px solid #C3C3C3;" /> 
</td>
</tr>
</table>
::: moniker-end

::: moniker range="tfs-2017"
<!---#### TFS 2017-->

<table valign="top">
<tr valign="top">
<td>
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Backlog multi-select menu </p>
<img src="_img/bulk-m-backlog-r-tfs-2016-menu-options.png" alt="Query results multi-select menu" style="border: 1px solid #C3C3C3;" />  
</td>

<td>
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Query results multi-select menu </p>
<img src="_img/bulk-m-query-r-tfs-2016-menu-options.png" alt="Query results multi-select menu, TFS-2015 " style="border: 1px solid #C3C3C3;" />  
</td>
</tr>
</table>
::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2015"
<!---#### TFS 2015, TFS 2013-->

<table valign="top">
<tr valign="top">
<td>
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Backlog multi-select menu</p>
<img src="_img/bulk-m-backlog-r-tfs-menu-options.png" alt="Backlog multi-select menu, TFS 2015" style="border: 1px solid #C3C3C3;" /> 
</td>

<td>
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Query results multi-select menu</p>
<img src="_img/bulk-m-query-r-tfs-menu-options.png" alt="Query results multi-select menu, TFS 2015" style="border: 1px solid #C3C3C3;" />  
</td>
</tr>
</table>
 
::: moniker-end

### To multi-select and open the context menu 

To select several items in a sequence, hold down the shift key. To select several non-sequential items, use the Ctrl key. Then, you can either drag the selected items to a new position within the backlog, to a different sprint. 

To open the context menu, click (![actions icon](../_img/icons/actions-icon.png)) or (![context icon](../_img/icons/context_menu.png)), and then choose the option from the menu. 

Here, we use the context menu to move several non-sequential items to the current sprint.

::: moniker range="vsts || >= tfs-2017 <= tfs-2018"
<!---#### VSTS and TFS 2017 -->

<img src="_img/bulk-modify-multi-select-ts.png" alt="VSTS, Backlog page, multi-select items, Open context menu, Move to iteration,  " style="border: 2px solid #C3C3C3;" />
::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2015"
<!---#### TFS 2015, TFS 2013-->

<img src="_img/backlog-multi-select-non-sequential-items.png" alt="TFS 2015, web portal, Backlog page, multi-select items, Open context menu, Move to iteration,  " style="border: 2px solid #C3C3C3;" />

::: moniker-end
> [!TIP]  
>Use the backlog <b>Create Query</b> feature to create a query with the backlog items. You can then open the query within the web portal or [Excel](../backlogs/office/bulk-add-modify-work-items-excel.md) to perform bulk updates.  


<!---
Select the work items you want to modify. 

![Select the work items you want to modify](_img/IC686840.png)
-->

<a id="move-iteration"> </a> 
<a id="assign-to"> </a>  
## Reassign work items 
With work items selected, open the context menu for any selected item, and reassign all of them. By doing this, you can quickly assign them to a member of your team or to another sprint or iteration. 

![Assign to link from work item context menu](_img/IC700157.png)  

To learn more about the Assign To and Iteration Path fields, see [Query by assignment, workflow or Kanban board changes](../track/query-by-workflow-changes.md#workflow-fields) and [Query by area or iteration path](../track/query-by-area-iteration-path.md).

<a id="edit-fields"> </a>  
## Edit one or more fields  

To assign or modify several fields, choose Edit from the context menu of one of the selected work items. Enter a value for each field that you want to update.  

::: moniker range="vsts || >= tfs-2017 <= tfs-2018"
<!---#### VSTS and TFS 2017 -->

1. For audit purposes, you can type a description for your bulk update task. To learn more about each field, see the [Work item field index](../work-items/guidance/work-item-field.md). 

	<img src="_img/bulk-modify-edit-fields-ts.png" alt="VSTS and TFS 2017, Query results page, bulk edit fields" style="border: 2px solid #C3C3C3;" />

2. From the Query results page, you must save all work items that you bulk-modified. When you bulk modify items from the backlog, they are automatically saved. Work items shown in bold text indicate that local changes have not yet been saved to the data store.  

	<img src="_img/bulk-modify-save-ts.png" alt="VSTS and TFS 2017, Query results page, save bulk modified items" style="border: 2px solid #C3C3C3;" />

::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2015"
<!---#### TFS 2015, TFS 2013-->

1. For audit purposes, you can type a description for your bulk update task. To learn more about each field, see the [Work item field index](../work-items/guidance/work-item-field.md). 

	<img src="_img/IC666563.png" alt="TFS 2015, web portal, Query results page, Edit work items dialog, bulk modify fields" style="border: 2px solid #C3C3C3;" />

2. Save all work items that you bulk-modified. Work items shown in bold text indicate that local changes have not yet been saved to the data store.  

	![TFS 2015, web portal, query results page, Bulk modify save results](_img/IC677240.png)  

::: moniker-end

::: moniker range="vsts || >= tfs-2015 <= tfs-2018"
[!INCLUDE [temp](../_shared/assign-to-sprint.md)]
::: moniker-end

::: moniker range="vsts || >= tfs-2015 <= tfs-2018"
<a id="tags"></a>
## Bulk modify tags 

From the Edit work items dialog, select **Tags (Add)** or **Tags (Remove)**.  

Here we choose to add the Beta tag to the selected work items. 

![Edit work items - Add tags](../track/_img/tags-bulk-add.png) 
::: moniker-end 
::: moniker range="tfs-2015" 
Bulk update of work items to add or remove tags from the web portal requires TFS 2015.2 or later version. To bulk edit work items when connecting to TFS 2015.1 or earlier versions, [use Excel](../backlogs/office/bulk-add-modify-work-items-excel.md). 
::: moniker-end 

## Related articles

To add fields or customize a work item form, see [Customize your work tracking experience](../customize/customize-work.md). The method you use depends on the process model that supports your team project.  

 
### Migrate or change a large number of work items 

For large scale, organizational moves, use the REST API calls for [Work item batch operations](https://www.visualstudio.com/en-us/docs/integrate/api/wit/batch). 

At this time, you can't move work items to a different account or collection. You can only migrate work item information by exporting and then importing them using [Excel](../backlogs/office/bulk-add-modify-work-items-excel.md). 

### Add multiple values to a field  
If you have implemented a [custom control that supports multiple values](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.vsts-extensions-multivalue-control), you can use Excel to bulk edit the field, but you can't modify it using the web portal. In the web portal, you can only select a single value for the field.   



 