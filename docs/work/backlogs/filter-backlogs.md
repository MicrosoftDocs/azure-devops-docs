---
title: Filter backlogs | VSTS & TFS 
description: Filter your backlog based on keywords, tags, or other fields   
ms.technology: vs-devops-wit
ms.prod: vs-devops-alm
ms.assetid: 
ms.manager: douge
ms.author: kaelli
ms.date: 08/28/2017
---
  
<a id="filter"></a>

# Filter product and portfolio backlogs 

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)] 

<!--- NEEDS UPDATING BASED ON FEATURES UNDER RELEASE  --> 
 
If you have many items listed in your product or portfolio backlog&mdash;and you want to focus on a subset of them&mdash;you can filter the set.  

## Filter based on keywords  
You can use keywords to filter your backlogs, Kanban boards, and query results. The filter function picks up work items based on any visible/displayed column or field, including tags, based on the keyword that you enter. Also, you can enter a value for an ID, whether or not the ID field is visible.  

Here, we filter the backlog to only show items that include 'Web' in any one of the displayed column fields. 

<img src="_img/cyb-filter-backlog.png" alt="Apply text filter" style="border: 2px solid #C3C3C3;" />  

The filtered set is always a flat list, even if you've selected to show parents.  

The filter criteria ignores the following characters when the field value starts with the character: ```{, (, [, !, @, #, $, %, ^, &, *, ~, `, ', "```.  

## Filter based on tags  
If you've [added tags to your work items](../track/add-tags-to-work-items.md), you can filter your backlogs, Kanban boards, and query results using the ![tag filter icon](../_img/icons/tag_filter_icon.png) tag filter. For backlogs and query results, add Tags as a column option prior to filtering on tags.  

To learn more about filtering using Tags, see [Add tags to work items to categorize and filter lists and boards, Filter lists using tags](../track/add-tags-to-work-items.md#filter)
 

## Related notes  
- [Tags](../track/add-tags-to-work-items.md) 
- [Set column options](set-column-options.md)  



