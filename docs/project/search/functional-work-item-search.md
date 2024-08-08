---
title: Use functional work item search options
description: How to use Work Item Search - functional options for Work Item Search in Microsoft Azure DevOps for all projects. 
ms.assetid: B64E70C5-E5B2-49E6-BD05-FF5932F9894C
ms.subservice: azure-devops-search
ms.custom: cross-service, cross-project
ms.topic: conceptual
ms.author: chcomley
author: chcomley
ms.date: 08/08/2024
monikerRange: '<= azure-devops'
---

# Functional work item search

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Functional work item search command filters let you search for work items more precisely by assignment, work item type, specific fields, and more. For more filter functions, see [Get started with search](get-started-search.md).

Work Item Search lets you do the following tasks and more.

|**Search task**  |**Description**  |
|---------|---------|
|[Search over all your projects](#search-across-all-fields)   | Search in your own and your partner teams' backlog. Use cross-project searches over all the work items to search across your enterprise's entire work items. Narrow your search by using project and area path filters.         |
|[Search across all work item fields](#search-across-all-fields)   | Quickly and easily find relevant work items by searching across all work item fields, including custom fields. Use a full text search across all fields to efficiently locate relevant work items. The snippet view indicates where matches were found.        |
|[Search in specific fields](#quick-filters-for-matching-in-specific-fields)  | Use the quick in-line search filters to narrow down to a list of work items in seconds. Use the filters on any work item field. The list of suggestions helps complete your search faster. For example, a search such as **AssignedTo:Chris WorkItemType:Bug State:Active** finds all active bugs assigned to a user named Chris.        |
|Search across test   |Search across Test Plans, Test Suites, and other test work item types.         |
|[Take advantage of integration with work item tracking](#search-by-work-item-id)   | The Work Item Search interface integrates with familiar controls for managing your work items; letting you view, edit, comment, share, and more.        |

## Prerequisites

- **Access levels:**
  - **All project members:** Every project member can use the search functions, including users with Stakeholder, Basic, and higher levels of access.
::: moniker range=" azure-devops"
- Work Item Search is available by default when the Boards service is installed and enabled.
::: moniker-end

### Search by work item ID

Enter the work item ID in the Azure DevOps title bar. You can read and edit the work item in a modal dialog.

![Screenshot of opening the work item in a modal dialogue.](media/advanced-work-item-search-syntax/open-work-item-modal-new.png)

## Search across all fields

Search all work item fields, including custom ones, for natural searches. The following snippet view shows matches.

<img alt="Screenshot of Searching across all work item fields." src="media/work-item-search-get-started/NewSearchAcross.gif" width="710" height="400" border="0"></img>  

- Use simple search strings for words or phrases. Work item search matches derived forms of your search terms; for example, a search for "updating" also finds instances of the word "updated" and "update." Searches aren't case-sensitive.
- Search from a project to, by default, search only within that project. 
- Search from inside a team to, by default, search only within the default area path of that team. 
  - Select a project to view a list of area paths in that project for which you have Read access.
  - Select area paths in the tree to narrow your search if necessary.
- View hit counts for all projects, even one that you don't select. 
- Open the search results in a new browser tab from either the main search function or by selecting **Ctrl** + **Shift** + **Enter**.

## Best practices

- **Text search across all fields:** Use a text search across all fields to efficiently locate relevant work items. This search is useful for finding work items with similar exception traces.
- **Quick in-line search filters:** Use quick in-line search filters on any work item field to narrow down the list of work items in seconds. The list of suggestions helps you complete your search faster.

## Compare search vs. managed work item queries

The main search function and managed queries are two ways to find and list work items. For a single work item, use the main search. For a list of work items that you want to triage, update, chart, or share, use a managed query.

You can search more fields with the main search function than with managed queries. 

---
:::row:::
   :::column span="1":::
      **Use a managed query**
   :::column-end:::
   :::column span="1":::
      **Search**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      - List items to perform bulk updates to fields.  
      - Review work that's in progress or recently closed.
      - Triage work: set priority, review, update.
      - Create a chart and add it to a dashboard.
      - Create a chart to get a count of items or sum a field.
      - Create a chart that shows a burndown or burnup over time.
      - View a tree of parent-child related work items.
      - List work items with link relationships.
      - List work items for a single project, multiple projects, or across all projects.
   :::column-end:::
   :::column span="1":::
      - Find a specific work item using its ID or a keyword.
      - Find one or more work items across all projects in a fast, flexible manner.  
      - Perform full text search across all work item fields.  
      - Review work items assigned to a specific team member.  
      - Search against specific work item fields to quickly narrow down a list of work items.  
      - Determine what key words support a managed search.  
      - List work items for a single project, multiple projects, or across all projects.
   :::column-end:::
:::row-end:::
---

For more information, see the following articles:

- [View and run a query](../../boards/queries/view-run-query.md)
- [Use search](../../boards/queries/search-box-queries.md)  
- [Define a query](../../boards/queries/using-queries.md)
- [Query quick reference, Example queries](../../boards/queries/query-index-quick-ref.md)  

<a name="quickfilters"></a>

## Fine-tune your search

1. Specify fields to fine-tune your search. Search all assigned items by entering `a:` and a user name.

	:::image type="content" source="media/get-started/search-work-vert.png" alt-text="Search from title bar":::    

   Quick filters:

   * `a:` for **Assigned to:** 
   * `c:` for **Created by:** 
   * `s:` for **State** 
   * `t:` for **Work item type**
 
2. Start entering the name of a field in your work items; for example, enter `ta`.

   :::image type="content" source="media/work-item-search-get-started/dyna-dropdown.png" alt-text="Quick filters as you enter the name of a field":::

   The dropdown list shows work item field name suggestions that match user input. These suggestions help you complete the search faster. For example, a search such as `tags:Critical` finds all work items tagged 'Critical.' 

3. Add more filters to further narrow your search, and use Boolean operators to combine terms if necessary. For example, **a: Chris t: Bug s: Active** finds all active bugs assigned to a user named Chris.

4. Narrow your search to specific types and states, by using the selector lists at the top of the results page.
5. Widen your search across all projects, or narrow it to specific types and states. Use the filter to show the selector lists.

   ![Screenshot showing the filter lists.](media/shared/show-filters.png)    

6. Select the criteria you want in the drop-down selector lists, or search across the entire organization.

   ![Screenshot of selector drop-down lists.](media/work-item-search-get-started/area-selectors.png)    

7. Sort the results with the drop-down list of field names, work item types, or by relevance.

   ![Screenshot showing sort drop-down list.](media/work-item-search-get-started/sort-order.png)    

### Quick filters for matching in specific fields

Quick inline search filters let you refine work items in seconds. The dropdown list of suggestions helps complete your search faster. Mix and match the functions to create quick powerful searches. 

|**Usage**  |**Example** |
|---------|---------|
| Scope your search terms to match in any work item field including custom fields. Enter the field name followed by the search terms.   |`tags:Critical` finds work items having a field 'tags' containing the term 'Critical.'         |
|Use multiple inline search filters to scope your search by any work item field, including custom fields.    | `t: Bug path:"project\search"` finds all bugs in the area path "project\search."        |
|Use the operators `>`, `>=`, `<`, `<=`, `=`, and `!=` for date, integer, and float fields.   |  `t: Bug CreatedDate> @Today-7` finds all bugs created in the last week.       |
|For the search query that contains multiple terms and users looking for exact match, embed the search term inside `" "`   | `BuildPath: "tools.demoproject.com"` finds all work items that necessarily contain the path "tools.demoproject.com."        |

<img alt="Quick inline search filters let you refine work items in seconds" src="media/work-item-search-get-started/NewFilters.gif" width="710" height="400" border="0"></img>  

<a name="locationfunctions"></a>

### Scope projects and area and iteration paths using filters 

Filters make it easy to narrow the search to specified projects and area paths.

Narrow the search to a specific location using the `proj`, `area`, `iteration`, `path`, and `comment` filters:

|**Usage** |**Example**  |
|---------|---------|
|Finds all occurrences of the word **Wiki** in the **Fabrikam** project.  |    `Wiki proj:Fabrikam`      |
|Finds all occurrences of the word **Wiki** in the area path **Contoso/Mobile** and its subpaths.     |  `Wiki area:Contoso/Mobile`        |
|Finds all occurrences of the word **Wiki** in the iteration path **Contoso/Sprint101** and its subpaths.    |  `Wiki iteration:Contoso/Sprint101`        |
|Enclose the argument to the filter in double-quotes if it contains a space.  | `Wiki path:"Contoso/Windows Phones and Devices/Services"`        |
|Finds backlog comments | `comment:todo` |

## See more of the work item

You can quickly get a full screen view of the selected work item using ![Expand the file to fullscreen](media/shared/fullscreen-icon-expand.png) **expand** and ![Shrink the file to a window](media/shared/fullscreen-icon-shrink.png) **shrink** in the toolbar. However, another way to see more of the work item, while you can still
select work items from the list of matching results, is to hide the left column filter pane
by choosing **&lt;** at the top left of the column. Use **&gt;** to restore the filter pane. 

If you're using a portrait orientation screen, use the **Preview pane: Right** link at the top right of the window to display the code below the search results list.

> [!TIP]
> Search remembers the state of the filter pane, configuration of the work item view pane, and its position between sessions as part of your user preferences.

## Search work items with REST API

You can use APIs to extend or supplement the capabilities listed in this article. For information about Work Item Search with REST API, see [Fetch Work Item Search Results](/rest/api/azure/devops/search/work-item-search-results/fetch-work-item-search-results).

## Next steps

> [!div class="nextstepaction"]
> [Supported filter functions and more for work items](../../boards/backlogs/filter-backlogs-boards-plans.md#supported-filter-functions)

## Related articles

- [Get started with Search](get-started-search.md)
- [Search code](functional-code-search.md)
- [Search artifacts and packages](functional-package-search.md)
