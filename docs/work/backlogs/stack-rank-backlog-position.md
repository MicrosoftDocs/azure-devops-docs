---
title: Stack rank or backlog priority | VSTS & TFS
description: Understand how the stack rank or backlog priority fields determines the backlog position - Visual Studio Team Services (VSTS) and Team Foundation Server 
ms.technology: vs-devops-agile-wit
ms.prod: vs-devops-alm
ms.assetid: 04df6b31-ef6c-4285-81a6-96768f03ecf4
ms.manager: douge
ms.author: kaelli
ms.date: 08/28/2017
---



<a id="change-position"> </a>  
## Backlog priority or stack rank order

<b>VSTS | TFS 2017 | TFS 2015 | TFS 2013</b> 

The sequence of items on the backlog page is determined according to where you have [added the items or moved the items on the page](create-your-backlog.md#move-items-priority-order). As you drag and drop items within the backlog list, a background process updates this field.

You should refrain from using the bulk modify function to change the backlog priority of work items. While you can assign a value to the [Backlog Priority (Scrum)](../track/planning-ranking-priorities.md) or [Stack Rank (Agile and CMMI)](../track/planning-ranking-priorities.md) fields, you'll be assigning the same value to all items you've selected for bulk edit. These fields are used by the system to track the relative ranking of items on the product, feature, or epic backlogs.  

The preferred method for bulk edit is to use multi-select to move items to the top, bottom, or specific position within the page. If you must perform a bulk edit of one of the backlog order fields to get a large number of work items in the priority order you want, use [Excel](../office/bulk-add-modify-work-items-excel.md). You can export a query containing the backlog items, update either the Backlog Priority or Stack Rank fields, and then publish your changes. 

By default, the Backlog Priority and Stack Rank fields don't appear on the work item form.   

