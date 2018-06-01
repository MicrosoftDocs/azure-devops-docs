---
title: View & add work items from the Work Items page
titleSuffix: VSTS  
description: Use the Work Items page to view and add work items that support 7 personalized pivot views       
ms.global_help.title: View & add work items
ms.global_help.keywords: ms.vss-work-web.work-items-hub, 1 
f1_keywords: 
- vs.tfc.teamexplorer.workitems
- vs.tfc.teamexplorer.TeamExplorer
ms.technology: devops-agile
ms.prod: devops
ms.assetid: EBDE0739-FAE6-4BEA-8F59-E9D20AFE5FE8
ms.manager: douge
ms.author: kaelli
ms.topic: quickstart
monikerRange: 'vsts'
ms.date: 03/20/2018 
---

# View and add work items using the Work Items page  

**VSTS | TFS 2018.2**  

View work items that you created or are assigned to you.  The **Work>Work Items** page provides several personalized pivots and filter functions to streamline listing work items. Use this page to quickly find work items defined across teams within a team project. You can enable it from the [Preview features menu](../../collaborate/preview-features.md) that you access from your account profile.

> [!NOTE]     
> **Feature availability:** The **Work Items** page is in preview and currently available from VSTS only.

## Prerequisites 

- You must connect to a team project. If you don't have an account or team project yet, create one in [VSTS](../../user-guide/sign-up-invite-teammates.md). You can then [connect to a team project from your web portal or Visual Studio](../../user-guide/connect-team-projects.md).
- To view or add work items, you must be a member of the Contributors group or be granted [Stakeholder access](../../security/get-started-stakeholder.md). If you don't have access to the team project, ask the [account owner or project administrator](../../security/lookup-account-owner-admin.md) to add you.
 

## Open the Work Items page
You can start viewing and adding work items once you connect to a team project. 

<a id="browser" /> 

Open a browser window, click the **Work** hub, and then the **Work Items** page. 

> [!div class="mx-imgBorder"]
![Work hub, Work Items page ](_img/view-add/work-items-hub.png)

> [!NOTE]    
>Depending on the process chosen when the team project was created&mdash;[Agile](guidance/agile-process-workflow.md), [Scrum](guidance/scrum-process-workflow.md), or [CMMI](guidance/cmmi-process-workflow.md)&mdash;the types of work items you can create will differ. For example, backlog items may be called product backlog items (Scrum), user stories (Agile), or requirements (CMMI). All three are similar: they describe the customer value to deliver and the work to be performed.
>
> For an overview of all three processes, see [Choose a process](../work-items/guidance/choose-process.md). 

## View work items

Using the drop-down menu, you can focus on relevant items inside a team project using one of the seven pivots as described next. Additionally, you can [filter](#filter) and [sort](#sort) each pivot view.  


<table>
<tbody valign="top">
<tr>
<td>
![Work hub, Work Items page ](_img/view-add/view-menu.png)
</td>
<td>
<ul>
<li>**Assigned to me**: lists all work items assigned to you in the project in the order they were last updated. To open or update a work item, simply click its title.</li>
<li>**Following**: lists work items that you've elected to [follow](../../collaborate/follow-work-items.md). </li>
<li>**Mentioned**: lists work items in which you've been mentioned in the last 30 days. </li>
<li>**My activity**: lists work items that you have recently viewed or updated.</li>
<li>**Recently updated**: lists work items recently updated in the project. </li>
<li>**Recently completed**: lists work items completed or closed in the project.</li>
<li>**Recently created**: lists work items created within the last 30 days in the team project.</li>
</ul>
</td>
</tr>
</tbody>
</table>

 

## Add a work item
Adding a work item is just one click away. Simply choose the work item type from the **New Work Item** drop down menu.  

For example, here we choose User Story. 

> [!div class="mx-imgBorder"]  
![Work hub, Work Items page, Add a work item ](_img/view-add/work-items-hub-new.png)

> [!TIP]    
> Work items you add are automatically scoped to the [Currently selected team's area and iteration paths](../scale/set-team-defaults.md). To change the team context, see [Switch team project or team focus](../../settings/switch-team-context.md?toc=/vsts/work/work-items/toc.json&bc=/vsts/work/work-items/breadcrumb/toc.json).

Enter a title and then save the work item. Before you can change the State from its initial default, you must save it.  

<img src="../backlogs/_img/add-new-work-item-vsts-user-story.png" alt="Agile process, User story work item form" style="border: 1px solid #C3C3C3;" />  

You can [add tags to any work item](../track/add-tags-to-work-items.md) to filter backlogs, queries, and work item lists.

 
<a id="filter" />
## Filter to create personal views
You can filter each work item pivot view by typing a keyword or using one or more of the fields provided, such as work item type (Types), State, Area Path, and Tags. The page remembers the filters you set for each pivot, supporting personalized views across all pivots.  

> [!div class="mx-imgBorder"]
![Work hub, Work Items page, Filter to show Bugs ](_img/view-add/work-items-filter-bug.png)

<a id="sort" />
## Sort your view and other View options 

You can sort your view by one of the column fields that you select from the **View options** menu. 

> [!NOTE]   
> The column fields differ depending on the view that you select. You can't change the fields supported by a view. 


<table>
<tbody valign="top">
<tr>
<td>
![Work hub, Work Items page ](_img/view-add/view-options.png)
</td>
<td>
<ul>
<li>**ID, Work Item Type, Title, State, Area Path, Tags** (Assigned to me view): Sorts by the column selected.<br/><br/></li>
<li>**Ascending/Descending**: click to change the sort order. <br/><br/></li>
<li>**Completed Work Items**: Click the slider to choose to show completed work items in the current pivot view.  </li>
</ul>
</td>
</tr>
</tbody>
</table>


## Copy selected items to the clipboard or email them

To select several items in a sequence, hold down the shift key. To select several non-sequential items, use the Ctrl key. Then, you can use **Ctrl+c** to copy the selected items to a clipboard. Or, you can open the context menu for the selected work items, click (![actions icon](../_img/icons/actions-icon.png)), and then choose the option you want from the menu. 

> [!div class="mx-imgBorder"]
![Work hub, Work Items page, Following view, Select work items, context menu](_img/view-add/following-context-menu.png)


## Open a view as a query  

You can open any view, filtered view, or selected set of work items as a query. Simply click the **Open in Queries** link or **Open selected items in Queries** option from the context menu. 

Queries provide additional features that you can use, including: 
* Edit one or more fields of several work items    
* Add or remove tags from several work items 
* Change the work item type 
* Delete work items 
* Apply work item templates
* And more

For details, see [Bulk modify work items](../backlogs/bulk-modify-work-items.md?toc=/vsts/work/work-items/toc.json&bc=/vsts/work/work-items/breadcrumb/toc.json). To learn more about queries, see [Use the query editor to list and manage queries](../track/using-queries.md).  


<a id="page-controls">  </a>
## Work Items page controls  

Use the following three controls to manage your views.

> [!div class="mx-tdBreakAll"]
> | Control                  | Function                      |
> |--------------------------|-------------------------------|
> | ![View options](../_img/icons/view-options-icon.png) | [Set sort order, view completed items](#sort)  | 
> | ![Filter](../_img/icons/filter-icon.png) | [Turn filtering On/Off](#filter)  | 
> | ![full screen icon](../_img/icons/full-screen-icon.png) / ![exit full screen icon](../_img/icons/exit-full-screen-icon.png)     | Enter or exit full screen mode      |

## Related articles
- [Move, change, or delete work items (REcycle Bin)](../backlogs/remove-delete-work-items.md?toc=/vsts/work/work-items/toc.json&bc=/vsts/work/work-items/breadcrumb/toc.json)
- [Enable preview features](../../collaborate/preview-features.md)
- [Use work item form controls](work-item-form-controls.md)
- [Keyboard shortcuts for work item forms and the Work Items page](work-item-form-keyboard-shortcuts.md)
- [Work from the account home page](../../user-guide/account-home-pages.md)

> [!NOTE]
> You can create and manage work items from the command line or scripts using the [VSTS CLI](https://docs.microsoft.com/en-us/cli/vsts/overview?view=vsts-cli-latest).


[!INCLUDE [temp](../../_shared/help-support-shared.md)] 