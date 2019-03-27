---
title: Perform ad hoc searches for quick queries
titleSuffix: Azure Boards
description: Use the search box and quickly filter for assigned to, created by, state, or work item type in Azure Boards, Azure DevOps, & Team Foundation Server  
ms.custom: boards-queries
ms.prod: devops
ms.technology: devops-agile
ms.assetid: D5A98F10-AAD2-46DD-91DE-41497CF5ECEF 
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: tutorial
monikerRange: '>= tfs-2013'
ms.date: 03/26/2019
---


# Perform a semantic or ad hoc work item search

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

<a id="search-box"/>

You can find work items using shortcut filters or by specifying keywords or phrases, specific fields/field values, assignment or date modifications, or using Equals, Contains, and Not operators. Searching is not case-sensitive. Use semantic or ad hoc searches when you want to perform the following tasks:

- Find a specific work item using its ID or a keyword
- Find one or more work items across all projects in a fast, flexible manner
- Perform full text search across all work item fields
- Review work items assigned to a specific team member
- Search against specific work item fields to quickly narrow down a list of work items
- Determine what key words will support a managed search

You can perform a powerful [semantic search](#start-search) from the web portal for Azure DevOps Services or TFS 2017.2 or later versions when the [server instance has been configured with the work item search extension](../../project/search/administration.md).

For TFS 2017.1 and earlier versions, or where the work item search extension hasn't been configured, you can perform [ad hoc searches](#initiate-an-ad-hoc-search-use-shortcut-filters). 

With semantic search, you search against a more fully indexed set of fields. With ad hoc search, the number of fields that are indexed are limited. 

::: moniker range=">= tfs-2017 <= azure-devops-2019"
> [!TIP]   
> If semantic search has been configured, you'll notice that the search box moves into the blue bar as shown in the following image.  
> 
>![Search Work Items Text Box](_img/search-box/search-box-vsts.png)  
::: moniker-end     

<a name="start-search"></a>
## Initiate a semantic search for work items

With semantic search you can search: 
- Across one or more projects  
- Across all work item fields using free text  
- Against specific work item fields  

Free text search easily searches across all work item fields, including custom fields, which enables more natural searches. Search results are displayed in a snippet view where the search matches found are highlighted. Semantic search also integrates with work item tracking, providing familiar controls to view, edit, comment, and share information within a work item form. 

::: moniker range=">= azure-devops-2019"

0. Choose any **Boards** page, enter a keyword or phrase in the search box, and press *Enter* or choose the ![ ](../../project/search/_img/_shared/start-search-icon.png) start search icon. 

	> [!div class="mx-imgBorder"]
	> ![Work Item Search box](../../project/navigation/_img/search/work-item-search-vert.png)    

0. Search results are displayed in a snippet view where the matches found are shown in bold.

   ![Search results](../../project/search/_img/work-item-search-get-started/results-matching.png)

   This is a full text search that uses simple search strings for words or phrases.
   Work item search matches derived forms of your search terms; for example, a search for
   "updating" will also find instances of the word "updated" and "update". Note that searches are _not_ case-sensitive.

0. Select a snippet of a work item to display it in the right window. 
  
   Open the search results in a new browser tab from a search box by
   pressing _Ctrl_ + _Enter_ or by holding _Ctrl_ and clicking  the
   ![start search icon](../../project/search/_img/_shared/start-search-icon.png) icon.
   In Google Chrome, press _Ctrl_ + _Shift_ + _Enter_ to switch the focus
   to the new browser tab. 

::: moniker-end


::: moniker range=">= tfs-2017 <= tfs-2018"

1. In the search box, check that the text says _Search work items_. If it doesn't, use the selector to select it.

   ![The Work Item Search textbox in the title bar](../../project/search/_img/work-item-search-get-started/title-bar-search-box-empty-outlined.png)   

1. Enter a search string in the text box, and press _Enter_ (or choose the 
   ![start search icon](../../project/search/_img/_shared/start-search-icon.png) icon) to start your search. 

1. Search results are displayed in a snippet view where the matches found are shown in bold.

   ![Search results](../../project/search/_img/work-item-search-get-started/results-matching.png)

   This is a full text search that uses simple search strings for words or phrases.
   Work item search matches derived forms of your search terms; for example, a search for
   "updating" will also find instances of the word "updated" and "update". Note that searches are _not_ case-sensitive.

1. Select a snippet of a work item to display it in the right window. 
  
   Open the search results in a new browser tab from a search box by
   pressing _Ctrl_ + _Enter_ or by holding _Ctrl_ and clicking  the
   ![start search icon](../../project/search/_img/_shared/start-search-icon.png) icon.
   In Google Chrome, press _Ctrl_ + _Shift_ + _Enter_ to switch the focus
   to the new browser tab. 

::: moniker-end

::: moniker range=">= tfs-2013  <= tfs-2015" 

Semantic search isn't supported for TFS 2017.1 and earlier versions. You can still perform searches using [ad hoc search](#initiate-an-ad-hoc-search-use-shortcut-filters).
::: moniker-end

::: moniker range="azure-devops-2019"
[!INCLUDE [temp](../../_shared/previous-navigation-not-supported-azd.md)] 
::: moniker-end



### Fine tune semantic search results 

::: moniker range=">= azure-devops-2019"
1. Fine tune your search by specifying the fields to search. Enter `a:` and a user name
   to search for all items assigned to that user.

	> [!div class="mx-imgBorder"]  
	> ![Search from the title bar](../../project/navigation/_img/search/search-work-vert.png)    

   The quick filters you can use are:

   * `a:` for **Assigned to:** 
   * `c:` for **Created by:** 
   * `s:` for **State** 
   * `t:` for **Work item type**<p />
 
1. Start typing the name of a field in your work items; for example, type `ta`.

   ![Quick filters as you type](../../project/search/_img/work-item-search-get-started/dyna-dropdown.png)    

   The dropdown list shows work item field name suggestions 
   that match user input thereby helping the user to complete the search faster. For example, a search such as 
   **tags:Critical** finds all work items tagged 'Critical'. 

1. Add more filters to further narrow your search, and use Boolean operators
   to combine terms if required. For example, 
   **a: Chris t: Bug s: Active** finds all active bugs assigned
   to a user named Chris.

1. Narrow your search to specific types
   and states, by using the drop-down selector lists at the top of the results page.


::: moniker-end


::: moniker range=">= tfs-2017 <= tfs-2018"
1. Fine tune your search by specifying the fields to search. Enter `a:` and a user name
   to search for all items assigned to that user.

	> [!div class="mx-imgBorder"]  
	> ![Search from the title bar](../../project/navigation/_img/search/work-item-search-filters.png)    

   The quick filters you can use are:

   * `a:` for **Assigned to:** 
   * `c:` for **Created by:** 
   * `s:` for **State** 
   * `t:` for **Work item type**<p />
 
1. Start typing the name of a field in your work items; for example, type `ta`.

   ![Quick filters as you type](../../project/search/_img/work-item-search-get-started/dyna-dropdown.png)    

   The dropdown list shows work item field name suggestions 
   that match user input thereby helping the user to complete the search faster. For example, a search such as 
   **tags:Critical** finds all work items tagged 'Critical'. 

1. Add more filters to further narrow your search, and use Boolean operators
   to combine terms if required. For example, 
   **a: Chris t: Bug s: Active** finds all active bugs assigned
   to a user named Chris.

1. Narrow your search to specific types
   and states, by using the drop-down selector lists at the top of the results page.
::: moniker-end

::: moniker range="<= tfs-2015" 

Semantic search isn't supported for TFS 2017.1 and earlier versions. You can still perform searches using [ad hoc search](#initiate-an-ad-hoc-search-use-shortcut-filters).
::: moniker-end


## Initiate an ad hoc search, use shortcut filters

For TFS 2017.1 and earlier versions, you can perform ad hoc searches from the web portal or from Visual Studio Team Explorer. Ad hoc searches automatically scope to the items defined to the project you're currently connected to.  

You can enter or select one or more of the following shortcut identifiers:

-   `A` =for **A**ssigned To, (for example, `A:Annie` or `A=@me`)
-   `C` for = **C**reated By, (for example, `C:Peter` or `C=@me`)
-   `S` for = **S**tate, (for example, `S=New`)
-   `T` for = Work Item **T**ype, (for example, `T=Task`).

Use the `@Me` and `@Today` macros to specify your user name or today's date.

Use the `=`, `:`, and `-` operators to specify the operations **Equals**, **Contains**, and **Not**, respectively.

### From the web portal 

::: moniker range="azure-devops"
Ad hoc search isn't available from Azure DevOps Services. Only [semantic search](#start-search). 

::: moniker-end
::: moniker range=">= tfs-2017 <= azure-devops-2019"

> [!div class="mx-imgBorder"]  
> ![Search box shortcut menu (web portal)](_img/example-search-box-queries/IC588318.png)   

::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2015"

Open the ![Context Menu Icon](_img/example-search-box-queries/IC533396.png) context menu and select an option.

> [!div class="mx-imgBorder"]  
> ![Search box shortcut menu (web portal)](_img/example-search-box-queries/IC588318.png)    

::: moniker-end

### From Visual Studio Team Explorer

Open the ![Context Menu Icon](_img/example-search-box-queries/IC533396.png) context menu and select an option.

> [!div class="mx-imgBorder"]  
> ![Search box menu (Team Explorer)](_img/example-search-box-queries/IC588319.png) 


Finding work items using the search box (Team Explorer)

![Find a work item using the search text box](_img/example-search-box-queries/IC552976.png)  

You can combine shortcuts and use search operators within the search box.

Use the ![Search box clear icon (Team Explorer)](_img/example-search-box-queries/IC588317.png) **Clear** button to remove content from the search box. To switch your context to the search box from within Visual Studio, enter **Ctrl+'**.


<a id="keywords" /> 
## Find items based on keywords or phrases

Keywords or phrases that you type into the search box return a list of work items that contain those keywords or phrases in the **Description**, **Repro Steps**, or **Title** fields. You must enclose each phrase in quotation marks.

In the **Search work items** box, type a keyword or phrase that appears in the **Title**, **Description**, or **Repro Steps** fields for the work items of interest.

Enclose multiple words in quotation marks.

For example, to find work items with the specified keywords in the **Title** or **Description** fields:

-   For the keyword "duplication" enter **duplication**.  
-   For the phrase "Getting Started" enter **"Getting Started"**.  
-   For the phrase "Getting Started" or the keyword "feature" enter **feature "Getting Started"**.

|Filter for items that contain these keywords or phrases:|Type the following string:|
|---|---|
|duplication|`duplication`|
|Getting Started|`"Getting Started"`|
|feature and Getting Started|`feature "Getting Started"`|

You can perform partial or exact match queries on a keyword or a phrase contained within any text field. Or, you can perform a full-text search query by filtering on keywords and phrases contained within the full-text search index. Team Foundation automatically indexes all long-text fields with a data type of **PlainText** and **HTML** and the **Title** field for full-text search.

## Find items based on specific fields and field values

To find work items based on a keyword or phrase contained within other text string fields, specify either the friendly name or the reference name of the field. Enclose each phrase in quotation marks. You can determine the friendly name of a field by hovering over the field within a work item form. To determine the reference name of commonly used fields or to find a field that is not listed on the form, see [Work item field index](../work-items/guidance/work-item-field.md).

|Filter for items that meet this criteria:|Type the following string:|  
|---|---|  
|Contains one attached file.|`System.AttachedFileCount=1`|  
|Cut user stories.|`T:Story Reason=Cut`<br/>Or<br/>`T="User Story" System.Reason=Cut`|  
|Resolved by Peter.|`"Resolved By":Peter` <br/>Or<br/>`Microsoft.VSTS.Common.ResolvedBy:Peter` |  
|Modified today.|`"Changed Date"=@Today`|  
|Created yesterday as a test activity.|`"Created Date"=@Today-1 Activity=Test `|  

> [!NOTE]     
> Some fields, such as **History** and **Description**, do not support partial word text searches. For example, if the **History** field contains the phrase `reproducible behavior` and you search for `History:repro` the work item will not be found. However, if you search for the complete string `History:reproducible` the work item will be found.

## Use @Me or @Today macros

The **@Me** macro expands to the full name of the current user in any work item search. The **@Me** macro is especially useful for creating a search that you can share with other users, and it can simplify your work by reducing the number of characters you must type to specify your own user name. For a description of all macros, see [Query fields, operators, and macros, Query macros or variables](query-operators-variables.md#macros). 

<table width="100%">
<tbody valign="top">
<tr>
<th width="50%">Filter for</th>
<th width="50%">Type the following string</th>
</tr>
<tr>
<td>Currently assigned to you
</td>
<td>
`A=@Me`
</td>
</tr>

<tr>
<td>Created by you
</td>
<td>
`C=@Me` 
</td>
</tr>


<tr>
<td>Resolved yesterday
</td>
<td>
`"Resolved Date"=@Today-1` 
</td>
</tr>

<tr>
<td>Modified 7 days ago
</td>
<td>
`System.ChangedDate=@Today-7`
</td>
</tr>

<tr>
<td>
Created yesterday under the Phone Saver team
</td>
<td>
&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;```Created Date _ = _ @Today-1```  
```And _ Area Path _ = _ FabrikamFiber\Phone Saver```  

</td>
</tr>

</tbody>
</table>  


## Use Equals, Contains, and Not operators

Use the following search operators to specify search criteria:

&#160;&#160;&#160;**=** (EQUALS) to search for exact matches of text.  
&#160;&#160;&#160;**:** (CONTAINS) to search for partial matches of text.  
&#160;&#160;&#160;**-** (NOT) to exclude work items that contain certain text. The NOT operator can only be used with field names.

The following examples show how to use operators when you create a search string.

|Filter for items that meet this criteria:|Type the following string:|  
|---|---|
|Assigned to Peter and not Active.|`A:Peter -S=Active`|
|In which the Activity field was not `Development`.|`- Activity=Development`|
|Resolved by Peter.|`"Resolved By":Peter`|
|Contain the keyword `triage` in the title or description, are not assigned to you, and are not closed.|`triage -A=@me -S=Closed`|
|Active bugs that are assigned to you that do not contain the keyword `bugbash` in the title.|`S=Active T=bug A=@Me -Title:bugbash`


## Related articles

- [Ad hoc versus managed queries](adhoc-vs-managed-queries.md)  
- [Create managed queries with the query editor](using-queries.md)   
- [Query fields, operators, and macros](query-operators-variables.md)   
- [Work item field index](../work-items/guidance/work-item-field.md)     - [Use work item templates, Define an ad hoc work item template using a hyperlink](../backlogs/work-item-template.md#adhoc-template)
- [Syntax for the Work Item Query Language (WIQL)](wiql-syntax.md)

[!INCLUDE [temp](../_shared/image-differences.md)]

### Does the search box support less than/greater than operators?

No. The search box doesn't recognize comparison operators such as greater than (>) or less than (<). It translates queries with these operators into a search phrase.

