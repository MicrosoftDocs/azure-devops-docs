---
title: View, filter, & add user stories, issues, and bugs from the Work Items hub
titleSuffix: Azure Boards
description: View and filter work items user stories, issues, bugs, & other work items from the Work Items hub and 7 personalized pivot views   
ms.custom: "boards-work-items, seodec18"  
f1_keywords: 
- vs.tfc.teamexplorer.workitems
- vs.tfc.teamexplorer.TeamExplorer
ms.technology: devops-agile
ms.prod: devops
ms.assetid: EBDE0739-FAE6-4BEA-8F59-E9D20AFE5FE8
ms.manager: douge
ms.author: kaelli
author: KathrynEE
ms.topic: quickstart
monikerRange: '>= azdevserver-2019'
ms.date: 12/04/2018
---

# View and add work items using the Work Items page  

**Azure Boards | Azure DevOps Server 2019 | Visual Studio 2019** 


View work items that you created or are assigned to you. The **Work Items** page provides several personalized pivots and filter functions to streamline listing work items. Use this page to quickly find work items defined across teams within a project. 

> [!NOTE]     
> The **Work Items** page is currently available from Azure DevOps Services, Azure DevOps Server 2019 RC1, and Visual Studio 2019 RC1. 

## Prerequisites 

- You must connect to a project. If you don't have a project yet, [create one](../get-started/index.md). You can then [connect to a project from your web portal or Visual Studio](../../organizations/projects/connect-to-projects.md).
- To view or add work items, you must be a member of the Contributors group or have [Stakeholder access](../../organizations/security/get-started-stakeholder.md). If you don't have access to the project, ask the [organization owner or project administrator](../../organizations/security/lookup-organization-owner-admin.md) to add you.


## Open Work Items
You can start viewing and adding work items once you connect to a project. 
<a id="browser" /> 

[!INCLUDE [temp](../../_shared/new-navigation-azdevops.md)] 

# [New navigation](#tab/new-nav)

(1) Check that you have selected the right project, then (2) choose **Boards>Work Items**. 

> [!div class="mx-imgBorder"]  
> ![Open Boards>Work Items, new navigation](_img/view-add/open-work-items-agile.png)

::: moniker range="azdevserver-2019"

> [!NOTE]   
> The new Work Items experience is available when you connect to a GitHub repository. If you connect to a TFVC repository, you'll continue to see the legacy query-focused experience. 
::: moniker-end

# [Previous navigation](#tab/previous-nav)

::: moniker range="vsts"

Open a browser window, choose **Work**, and then **Work Items**. 

> [!div class="mx-imgBorder"]
![Boards>Work Items ](_img/view-add/work-items-hub.png)

::: moniker-end

::: moniker range="azdevserver-2019"

[!INCLUDE [temp](../../_shared/previous-navigation-not-supported-azd.md)] 

::: moniker-end

# [Visual Studio 2019](#tab/visual-studio)

Open Visual Studio 2019, Team Explorer, and then choose **Work Items**. 

> [!div class="mx-imgBorder"]  
> ![Visual Studio, Team Explorer, Choose Work Items](_img/view-add/open-work-items-vs-te-complete.png) 


If you don't see the **Work Items** option, you need to connect to a project and not just a repository. From the Connect to a Project dialog. Use **CTRL-Shift** to select your options and then choose **Connect**.

> [!div class="mx-imgBorder"]  
> ![Connect to a Project dialog, connect to a Project and Git repository](_img/view-add/connect-to-a-project-and-github.png)


---

> [!NOTE]    
> Depending on the process chosen when the project was created&mdash;[Agile](guidance/agile-process-workflow.md), [Scrum](guidance/scrum-process-workflow.md), or [CMMI](guidance/cmmi-process-workflow.md)&mdash;the types of work items you can create will differ. For example, backlog items may be called user stories (Agile), product backlog items (Scrum), or requirements (CMMI). All three are similar: they describe the customer value to deliver and the work to be performed.
>
> For an overview of all three processes, see [Choose a process](../work-items/guidance/choose-process.md). 


## View work items

Using the drop-down menu, you can focus on relevant items inside a project using one of seven pivots. Additionally, you can [filter](#filter) and [sort](#sort) each pivot view.  

# [New navigation](#tab/new-nav)

<table>
<tbody valign="top">
<tr>
<td>
![Boards>Work Items view](_img/view-add/view-menu.png)
</td>
<td>
<ul>
<li>**Assigned to me**: lists all work items assigned to you in the project in the order they were last updated. To open or update a work item, simply click its title.</li>
<li>**Following**: lists work items that you're [following](follow-work-items.md). </li>
<li>**Mentioned**: lists work items in which you've been mentioned in the last 30 days. </li>
<li>**My activity**: lists work items that you've recently viewed or updated.</li>
<li>**Recently updated**: lists work items recently updated in the project. </li>
<li>**Recently completed**: lists work items completed or closed in the project.</li>
<li>**Recently created**: lists work items created within the last 30 days in the project.</li>
</ul>
</td>
</tr>
</tbody>
</table>

# [Previous navigation](#tab/previous-nav)

::: moniker range="vsts"

<table>
<tbody valign="top">
<tr>
<td>
![Boards>Work Items ](_img/view-add/view-menu.png)
</td>
<td>
<ul>
<li>**Assigned to me**: lists all work items assigned to you in the project in the order they were last updated. To open or update a work item, simply click its title.</li>
<li>**Following**: lists work items that you're[following](follow-work-items.md). </li>
<li>**Mentioned**: lists work items in which you've been mentioned in the last 30 days. </li>
<li>**My activity**: lists work items that you've recently viewed or updated.</li>
<li>**Recently updated**: lists work items recently updated in the project. </li>
<li>**Recently completed**: lists work items completed or closed in the project.</li>
<li>**Recently created**: lists work items created within the last 30 days in the project.</li>
</ul>
</td>
</tr>
</tbody>
</table>

::: moniker-end

::: moniker range="azdevserver-2019"

[!INCLUDE [temp](../../_shared/previous-navigation-not-supported-azd.md)] 

::: moniker-end

# [Visual Studio 2019](#tab/visual-studio)

<table>
<tbody valign="top">
<tr>
<td>
![Boards>Work Items](_img/view-add/pivot-menu-vs-te.png)
</td>
<td>
<ul>
<li>**Assigned to me**: lists all work items assigned to you in the project in the order they were last updated. To open or update a work item, simply click its title.</li>
<li>**Following**: lists work items that you're [following](follow-work-items.md). </li>
<li>**Mentioned**: lists work items in which you've been mentioned in the last 30 days. </li>
<li>**My activity**: lists work items that you've recently viewed or updated.</li>
</ul>
</td>
</tr>
</tbody>
</table>

To view a work item, double-click the title or open the context menu for the work item (right-click or enter the menu key) and select **Open**. A browser window will open with the work item form.

<table>
<tbody valign="top">
<tr>
<td>
![Work item context menu](_img/view-add/work-item-menu-options-vs.png)
</td>
<td>
Additional menu options support the following tasks: 
<ul>
<li>**Assign to me**: Changes the Assigned to field to your user name. </li>
<li>**New Branch...**: Opens a dialog to create a new branch automatically linked to the work item. For details, see [Drive GIt development](../backlogs/connect-work-items-to-git-dev-ops.md). </li>
<li>**Complete work item**: Updates the State field to Completed, Done, or Closed. </li>
<li>**Relate to changes**: Links the work item to the current commit of recent changes.</li>
</ul>
</td>
</tr>
</tbody>
</table>

---


## Add a work item
Adding a work item is just one click away. Simply choose the work item type from the **New Work Item** drop down menu.  

For example, here we choose User Story. 

# [New navigation](#tab/new-nav)

> [!div class="mx-imgBorder"]  
> ![Boards>Work Items, Add a work item ](_img/view-add/work-items-hub-new.png)

# [Previous navigation](#tab/previous-nav)  

::: moniker range="vsts"

> [!div class="mx-imgBorder"]  
> ![Boards>Work Items, Add a work item ](_img/view-add/work-items-hub-new.png)

::: moniker-end

::: moniker range="azdevserver-2019"
[!INCLUDE [temp](../../_shared/previous-navigation-not-supported-azd.md)] 
::: moniker-end

# [Visual Studio 2019](#tab/visual-studio)

Choose **New Work Item** and select the work item type you want. 

> [!div class="mx-imgBorder"]  
> ![Work Items, Add User Story](_img/view-add/add-user-story-vs-te.png)

A browser window will open with the work item form to fill out. 

---

<!---
> [!TIP]    
> Work items you add are automatically scoped to the currently selected team's area and iteration paths. To change the team context, see [Switch project or team focus](../../project/navigation/go-to-project-repo.md?toc=/azure/devops/boards/work-items/toc.json&bc=/azure/devops/boards/work-items/breadcrumb/toc.json). -->

Enter a title and then save the work item. Before you can change the State from its initial default, you must save it.  

![Agile process, User story work item form](../backlogs/_img/add-new-work-item-vsts-user-story.png)  

You can [add tags to any work item](../queries/add-tags-to-work-items.md) to filter backlogs, queries, and work item lists.

 
<a id="filter" />
## Filter to create personal views

You can filter each work item pivot view by typing a keyword or using one or more of the fields provided, such as work item type (Types), State, Area Path, and Tags. The page remembers the filters you set for each pivot, supporting personalized views across all pivots.  


# [New navigation](#tab/new-nav)

> [!div class="mx-imgBorder"]
![Boards>Work Items, Filter to show Bugs ](_img/view-add/work-items-filter-bug.png)

# [Previous navigation](#tab/previous-nav)  

::: moniker range="vsts"

> [!div class="mx-imgBorder"]
![Boards>Work Items, Filter to show Bugs ](_img/view-add/work-items-filter-bug.png)

::: moniker-end

::: moniker range="azdevserver-2019"
[!INCLUDE [temp](../../_shared/previous-navigation-not-supported-azd.md)] 
::: moniker-end

# [Visual Studio 2019](#tab/visual-studio)

> [!div class="mx-imgBorder"]
![Team Explorer>Work Items, Filter based on a key word ](_img/view-add/filter-list-vs-te.png)

---

<a id="sort" />
## Add columns and sort by a column 

From the web portal, you can sort your view by one of the column fields that you select from the **Column Options** dialog. For details, see [Change column options](../backlogs/set-column-options.md).

## Capture comments in the Discussion section 

Use the **Discussion** section in the work item form to add and review comments about the work under development. 

> [!div class="mx-imgBorder"]  
> ![Discussion section within a work item form](/azure/devops/boards/backlogs/_img/discussion-section.png)   

Use the [**@mention** control](../../notifications/at-mentions.md) to notify another team member about the discussion. Simply type **@** and their name. Or, bring a group into the discussion by typing **@** and the group name, such as a team or security group. To reference a work item, use the [**#ID** control](../../notifications/add-links-to-work-items.md). Type **#** and a list of work items that you've recently referenced will appear from which you can select.  

::: moniker range="vsts"

The rich text editor tool bar displays below the text entry area when you click your cursor within the each text box that can be formatted. 

> [!div class="mx-imgBorder"]  
> ![Discussion section, Rich Text Editor toolbar](../queries/_img/share-plans/discussion-rich-text-editor-toolbar.png)  

Use the icons&mdash;![ ](../../_img/icons/at-mention.png) at-mention, ![ ](../../_img/icons/work-id.png) #-work-item-ID, and ![ ](../../_img/icons/pr-id.png) pull-request ID &mdash;to facilitate bringing others into the discussion or linking to work items or pull requests. Choose one of these icons and a menu displays with the most recent options that you've previously selected. 

::: moniker-end

## Copy selected items to the clipboard or email them

To select several items in a sequence, hold down the shift key from a web portal page. To select several non-sequential items, use the **Ctrl** key. Then, you can use **Ctrl+c** to copy the selected items to a clipboard. Or, you can open the context menu for the selected work items, click (![ ](../_img/icons/actions-icon.png) actions icon), and then select an option from the menu. 

> [!div class="mx-imgBorder"]
![Boards>Work Items, Following view, Select work items, context menu](_img/view-add/following-context-menu.png)


## Open a view as a query  

From the web portal, you can open any view, filtered view, or selected set of work items as a query. Simply choose **Open in Queries** or the **Open selected items in Queries** option from the context menu. 

Queries provide additional features that you can use, including: 
* Edit one or more fields of several work items    
* Add or remove tags from several work items 
* Change the work item type 
* Delete work items 
* Apply work item templates
* And more

For details, see [Bulk modify work items](../backlogs/bulk-modify-work-items.md?toc=/azure/devops/boards/work-items/toc.json&bc=/azure/devops/boards/work-items/breadcrumb/toc.json). To learn more about queries, see [Use the query editor to list and manage queries](../queries/using-queries.md).  


<a id="page-controls">  </a>
## Work Items page controls  

Use the following three controls to manage your views in the web portal.

> [!div class="mx-tdBreakAll"]
> | Control                  | Function                      |
> |--------------------------|-------------------------------|
> | ![View options](../_img/icons/view-options-icon.png) | View/hide completed items | 
> | ![Filter](../_img/icons/filter-icon.png) | [Turn filtering On/Off](#filter)  | 
> | ![full screen icon](../_img/icons/full-screen-icon.png) / ![exit full screen icon](../_img/icons/exit-full-screen-icon.png)     | Enter or exit full screen mode      |

## Related articles
- [Move, change, or delete work items (Recycle Bin)](../backlogs/remove-delete-work-items.md?toc=/azure/devops/boards/work-items/toc.json&bc=/azure/devops/boards/work-items/breadcrumb/toc.json)
- [Enable preview features](../../project/navigation/preview-features.md)
- [Use work item form controls](work-item-form-controls.md)
- [Keyboard shortcuts for work item forms and the Work Items page](work-item-form-keyboard-shortcuts.md)
- [Work across projects](../../project/navigation/work-across-projects.md)

> [!NOTE]
> You can create and manage work items from the command line or scripts using the [Azure DevOps CLI](/cli/vsts/overview?view=vsts-cli-latest).

