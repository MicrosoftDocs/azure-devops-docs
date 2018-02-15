---
title: Filter lists & boards
titleSuffix: VSTS & TFS  
description: Filter your view to focus on items of interest 
ms.technology: vs-devops-wit
ms.prod: vs-devops-alm
ms.assetid:
robots: NOINDEX, NOFOLLOW 
ms.manager: douge
ms.author: kaelli
ms.date: 02-24-2018
---
  

# Filter lists and boards 

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)] 

<!--- NEEDS UPDATING BASED ON FEATURES UNDER RELEASE  

Filter audit: 
* Code>Commits: Simple history, Author, From date, To date 
* Code>Pushes
* Code>Branches (Filter icon is there, but doesn't appear active. 
* Code> Pull Request (In active filter icon) 
* Code> Pull Request> Search 
* Work>Work Items - Keyword, Types, Assigned to, States, Area, Tags 
* Work> Board (Kanban) - Keyword, Types, Assigned To, Tags, Iteration, Parent Work Item 
* Work>Backlogs - Keyword, Types, Assigned to, States, Tags
* Work>Sprint Backlogs - Keyword, Types, Assigned to, States, Tags
* Work>Taskboard 
* 


--> 

<a id="filter"></a>
 
Most directory views provide one or more filter functions. Here we show you how to use filtering to find items of interest to you. 

If you have many items listed in your product or portfolio backlog&mdash;and you want to focus on a subset of them&mdash;you can filter the set. 


## Filter based on keywords or fields (VSTS, TFS 2018)    

> [!NOTE]   
> **Feature availability**: The ability to filter your backlog or a query based on the Work Item Type, Assigned To, or State fields is available from VSTS. For queries, you must enable the [New Queries Experience](../work/track/queries-preview.md). 

You can filter work items by typing a keyword or using one or more of the fields provided, such as work item type, assigned to, state, and tags. Based on the keyword that you enter, the filter function will list work items based on any visible/displayed column or field, including tags. Also, you can enter a value for an ID, whether or not the ID field is visible.  

<img src="../work/backlogs/_img/filter-backlogs-options.png" alt="Backlogs, turn filtering on" style="border: 2px solid #C3C3C3;" />

The filtered set is always a flat list, even if you've selected to show parents. 


## Filter based on keywords (TFS) 

You can use keywords to filter your backlogs or queries. The filter function lists those work items based on any visible/displayed column or field, including tags, based on the keyword that you enter. Also, you can enter a value for an ID, whether or not the ID field is visible.  

Here, we filter the backlog to only show items that include 'Web' in any one of the displayed column fields. 

<img src="../work/backlogs/_img/cyb-filter-backlog.png" alt="Apply text filter" style="border: 1px solid #C3C3C3;" />  

The filtered set is always a flat list, even if you've selected to show parents.  


## Filter based on tags (TFS) 
If you've [added tags to your work items](../work/track/add-tags-to-work-items.md), you can filter your backlogs, Kanban boards, and query results using the ![tag filter icon](../work/_img/icons/tag_filter_icon.png) tag filter. For backlogs and query results, add Tags as a column option prior to filtering on tags.  

To learn more about filtering using tags, see [Add tags to work items to categorize and filter lists and boards, Filter lists using tags](../work/track/add-tags-to-work-items.md#filter)
 

## Related notes  
- [Tags](../work/track/add-tags-to-work-items.md) 
- [Set column options](../work/backlogs/set-column-options.md)  


### Characters ignored by filter criteria

The filter criteria ignores the following characters when the field value starts with the character: ```{, (, [, !, @, #, $, %, ^, &, *, ~, `, ', "```.  
