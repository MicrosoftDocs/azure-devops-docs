---
title: Add or remove columns, change column width, placement, or sort order on backlogs and query results  
titleSuffix: VSTS & TFS
ms.global_help.title: Change column options
description: Show and sort on fields in a column for a backlog or query in Visual Studio Team Services or Team Foundation Server 
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 823CC1FD-74A9-4123-92E1-506A505DEC8D
ms.manager: douge
ms.author: kaelli
author: KathrynEE
ms.date: 03/20/2018
---



# Change column options 

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

<a id="column-options">  </a>

From each backlog page or query, you can add or remove columns. Or, you can drag a column to a new position. Your settings persist for each page you customize and are only valid for your views.    

Start by opening the **Column Options** dialog. Each user can set their own column options which persist for each product or portfolio backlog across user sessions.    

<img src="_img/set-column-open-dialog-s125.png" alt="Open column options" style="border: 1px solid #C3C3C3;" /> 

> [!TIP]    
> Unlike a query result, you can't sort a backlog by a column. However, you can use the **Create Query** link on each backlog to create a query that you can sort on any field column you choose.


::: moniker range=">= tfs-2018"

In the Column options dialog, click **Add a column** to add a field that isn't shown. To change the order of the fields, drag-and-drop the field where you want it within the set of selected fields. And, to remove a field, click the ![delete icon](../_img/icons/delete_icon.png).

::: moniker-end
::: moniker range="tfs-2018"
> [!NOTE]    
> The following dialog is available from TFS 2018.2 and later versions. 
::: moniker-end
::: moniker range=">= tfs-2018"
<img src="_img/set-column-options-s125.png" alt="Column options dialog, VSTS" style="border: 1px solid #C3C3C3;" /> 

::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2017"

Find the field you want to add from the Available columns set and click **>** (greater-than character) to move it into the Selected columns. You can then change the order of the columns with the ![up arrow](../_img/icons/Arrow_Up.png)/![down arrow](../_img/icons/Arrow_Down.png) up and down arrows. To remove a field, select it and then click the **<** (less-than character).  
 
<img src="_img/b-vs-b-column-options.png" alt="Column options dialog, TFS" style="border: 1px solid #C3C3C3;" /> 

::: moniker-end

## Use keyboard shortcuts to change the column order, column width, or sort options

You can change the column order, column size, or sort options by using the following keyboard commands:
- To change the column order, click on the field and drag it to a new location
- To re-size a column, click the column divider to the right of the field and drag to a new location  
- For query results:
	- Add the field as a column in order to sort by that field 
	- To sort by a column, hold down the shift key and click on the field
	- To reverse the sort order, shift-click on the field 
	- To sort by multiple columns, shift-click on each column in the order you want to sort   

::: moniker range="vsts || >= tfs-2015 <= tfs-2018"
For additional keyboard shortcuts, enter **Shift-?** to display available commands based on the page you're on. 
::: moniker-end

## Related articles

- [Backlog keyboard shortcuts](backlogs-keyboard-shortcuts.md)  
- [Query keyboard shortcuts](../track/queries-keyboard-shortcuts.md)
- [Backlogs, boards, and plans](backlogs-boards-plans.md)   
- [Create managed queries](../track/using-queries.md)