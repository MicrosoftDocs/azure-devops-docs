---
title: Query work items by history
titleSuffix: Azure Boards
description: Learn how to query work item history and comments to support audit requirements when working in Azure Boards.
ms.service: azure-devops-boards
ms.custom: boards-queries, engagement-fy23
ms.assetid: A5AC271A-8DF0-40AD-9867-1B1E9E5B1FE9
ai-usage: ai-assisted
ms.author: chcomley
author: chcomley
ms.topic: example-scenario
monikerRange: '<= azure-devops'
ms.date: 11/26/2024
---


# Query work item history and discussion fields

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

The history of a work item records who created the item, what changes were made, and the reasons behind those changes. This information is essential for tracking the evolution of an item over time. When adding entries to the history field, include detailed information to help the next work item owner understand the context of the changes and the actions required.

> [!NOTE]
> There is no separate **Discussion** work item field. To query work items with comments from the Discussion area, filter on the **History** field. All text entered into the Discussion box is automatically included in the History field.

## Prerequisites

[!INCLUDE [prerequisites-queries](../includes/prerequisites-queries.md)]

## Supported operators and macros

- **Supported operators:**
  - **Contains Words**
  - **Does Not Contain Words**

- **Search methods:**
  - **Exact phrase:** Locate an exact sequence of words.
  - **Wildcard character (`*`):** Use only at the end of a partial word or phrase.

- **Full-text search:** The **History** field is automatically indexed for full-text search when available.

<a id="query-history"></a>

## Query a work item's history 

You can use the web portal or Team Explorer to view a work item's history or search for work items based on the **History** field. Searching the **History** field returns only work items with changes recorded in that field and does not include changes made to other fields.

#### [Browser](#tab/browser/)
<a id="team-services"></a> 

:::image type="content" source="media/hist-audit-query-ts-bt.png" alt-text="Screenshot of Query Editor to Search for items based on words contained in the History field.":::

#### [Visual Studio](#tab/visual-studio/)
<a id="tee-query-history"></a>
<a id="team-explorer"></a>


The **Query Editor** isn't available when you're connected to GitHub or non-Microsoft Git repository. Also, it isn't available from Visual Studio 2019 under the following conditions:   
* If you're set to use the default Landing page experience as described in [Set the Work Items experience in Visual Studio 2019](../work-items/set-work-item-experience-vs.md).  
* If you're set to use the new Git Tool as described in [Git experience in Visual Studio](/visualstudio/ide/git-with-visual-studio).  

![Screenshot of Query Editor to Search for items based on words contained in the History field in Team Explorer.](media/hist-audit-query-team-explorer.png) 

* * *


## List items based on the contents of the History field  

Use the query editor to include the **History** field in a [query clause](using-queries.md).

- **Queryable content:** Comments entered in the **Discussion** area.
- **Non-queryable content:** Change history entries, such as modifications to fields, aren't queryable.
- **Alternative search methods:** To search for words in the **Discussion**, **Description**, or other rich-text fields, use [work item search](../../project/search/functional-work-item-search.md).
- **Filter by Change Date:** Filter work items by the date they were changed or specify a particular time period.

:::row:::
   :::column span="1":::
   **Filter for**
   :::column-end:::
   :::column span="1":::
   **Include these query clauses**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
   Items whose History field contains the word &quot;reproducible&quot;  
   :::column-end:::
   :::column span="1":::
   `History Contains Words reproducible`  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Items whose History field doesn't contain the word &quot;beta&quot;
   :::column-end:::
   :::column span="1":::
   `History Does Not Contain Words beta`
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Items that contain the phrase &quot;stack traces&quot; and were closed but reactivated
   :::column-end:::
   :::column span="1":::
   `History Contains Words stack traces`  `And State Was Ever Closed`  
   `And State <>  Closed`  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Items closed within a specified time period
   :::column-end:::
   :::column span="1":::
   `State = Done`  
   `And Closed Date > 7/1/2015`  
   `And Closed Date <= 7/21/2015`  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Items I've been associated with
   :::column-end:::
   :::column span="1":::
   `History Contains Words MyName`  
   `Or Assigned To Was Ever _ @Me`  
   :::column-end:::
:::row-end:::
---

### Tips for using the query editor

- **Limit query scope by date range:** Narrow the date range to improve performance and return only relevant results.

- **Use complete words or phrases:**
  - Enter full words or exact phrases from the **History** field.
  - Partial words don't return work items. For example:
    - Searching for "reproducible behavior" finds the item.
    - Searching for "repro" doesn't find it.
  - Use wildcards at the end of words or phrases, such as `repro*`.

- **Be aware of "stop" words:**
  - The query editor ignores common words.
  - For more information, see [Configure and Manage Stopwords and Stoplists for Full-Text Search](/sql/relational-databases/search/configure-and-manage-stopwords-and-stoplists-for-full-text-search).

- **Run and validate your query:**
  - Select ![Run query](../media/icons/run_query.png) or ![Run query, earlier version](../media/icons/run_query_te.png) in the query editor toolbar.
  - Ensure the query returns the expected results.
  - If results are missing, adjust your search terms and run the query again.

<a id="view-history"></a>

## View the history of work items  

An entry gets made to the **History** field each time a work item is saved. To view the history of changes, open an existing work item, and then choose the ![history tab icon](../media/icons/icon-history-tab-wi.png) or **History**, or for some work item types (WITs), choose **Details**. 

<a id="web-portal-explorer-tab"></a> 
The history details shown depend on the platform, version, and client.

#### [Browser](#tab/browser/)

<a id="team-services-tab"></a> 
<a id="team-services-view"></a> 

:::image type="content" source="media/hist-audit-wi-form-vsts-tab.png" alt-text="Screenshot of Work item form, Web portal, Choose History tab.":::

The state change history diagram appears first. To see the entire history of state changes, choose **Show all**.

:::image type="content" source="media/state-change-history-diagram.png" alt-text="Screenshot of Work item form, Web portal, State change history diagram (web portal only).":::

Choose an entry in the left pane and view the details of changes made.

:::image type="content" source="media/hist-audit-wi-form.png" alt-text="Screenshot of Work item form, History tab, Web portal, Details.":::

#### [Visual Studio](#tab/visual-studio/)

To view only the comments that were added to the log, choose the **Discussion Only** tab. To view all changes made to the item, choose the **All Changes** tab, and then choose the **show all changes** link for a specific date and time.  

![Screenshot of Work item form, Team Explorer, History tab.](media/ALM_HA_AllChanges.png) 

* * *

<a id="filter-history"></a> 


::: moniker range="azure-devops"

## Filter the history view 

The **History** tab is designed to track all changes made to a work item to support full traceability. The long revision history that results can make it difficult to understand when changes happen to specific fields. To quickly find revisions made to a specific field or by specific people, filter the history view. 

> [!NOTE]   
> The **Toggle filter** feature requires the **New Boards Hub** feature, which is enabled by default. To enable this feature, see [Manage or enable features](../../project/navigation/preview-features.md).

To review updates by specific people, select their names from the **Updated by** menu. 

:::image type="content" source="media/history-audit/filter-history-people.png" alt-text="Screenshot of Work item form, History tab, Filter by who made updates.":::

To review updates made to one or more fields, select the fields from the **Fields** menu. 

:::image type="content" source="media/history-audit/filter-history-field-assigned-to.png" alt-text="Screenshot of Work item form, History tab, Filter on changes made to Assigned To field.":::

::: moniker-end

<a id="fields"></a>

## Fields that support history, auditing, and revision tracking 

You can use the following fields to filter queries and create reports. Several of these fields are populated with information as a work item progresses from one state to another. Other fields update when the work item is modified. Some fields don't appear on the work item form, but they're tracked for the WITs listed.  

:::row:::
   :::column span="1":::
   **Field name**
   :::column-end:::
   :::column span="2":::
   **Description**
   :::column-end:::
   :::column span="1":::
   **Work item type**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
   Changed By
   :::column-end:::
   :::column span="2":::
   The name of the team member who modified the work item most recently.

   `Reference name=System.ChangedBy, Data type=String`
   :::column-end:::
   :::column span="1":::
   All
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Change Date
   :::column-end:::
   :::column span="2":::
   The date and time when a work item was modified.

   `Reference name=System.ChangedDate, Data type=DateTime`
   :::column-end:::
   :::column span="1":::
   All
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Closed Date <sup>1</sup> 
   :::column-end:::
   :::column span="2":::
   The date and time when a work item was closed.  
   `Reference name=Microsoft.VSTS.Common.ClosedDate, Data type=DateTime`
   :::column-end:::
   :::column span="1":::
   All
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Created Date
   :::column-end:::
   :::column span="2":::
   The date and time when a work item was created.
 
   `Reference name=System.CreatedDate, Data type=DateTime`
   :::column-end:::
   :::column span="1":::
   All
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   History
   :::column-end:::
   :::column span="2":::
   The record of changes that were made to the work item after it was created. Every time the work item gets updated, information appends to the history, which specifies the date of the change, who made the changes, and which fields were changed.  

   > [!NOTE]
   > History field queries return work items whose **Discussion** comments or **Description** fields contain words that match the keywords entered. You can't use the History field to query on changes made to other fields.  

   You can't add formatted text to the history field. Once you save the work item, you can't alter the history.  
   The `History` field, along with the `Description`, `Steps to Repro` and `Title` fields are automatically indexed for full-text search as described in [Query fields, operators, and macros](query-operators-variables.md).  

   `Reference name=System.History, Data type=History`
   :::column-end:::
   :::column span="1":::
   All
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Resolved Date <sup>1</sup> 
   :::column-end:::
   :::column span="2":::
   The date and time when the work item was moved into a Resolved state. 

   `Reference name=Microsoft.VSTS.Common.ResolvedDate, Data` type=DateTime
   :::column-end:::
   :::column span="1":::
   Bug (Agile, CMMI) 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Rev
   :::column-end:::
   :::column span="2":::
   A number that is assigned to the historical revision of a work item.   
   > [!NOTE]   
   > A work item revision limit of 10,000 is in effect for updates made through the REST API for Azure DevOps Services. This limit restricts updates from the REST API, however, updates from the web portal are not affected.   

   `Reference name=System.Rev, Data type=Integer`
   :::column-end:::
   :::column span="1":::
   All
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Revised Date
   :::column-end:::
   :::column span="2":::
   The date and time when a work item was revised or modified.

   `Reference name=System.RevisedDate, Data type=DateTime`
   :::column-end:::
   :::column span="1":::
   Shared Parameter, Shared Step, Test Case
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   State Change Date
   :::column-end:::
   :::column span="2":::
   The date and time when the value of the State field changed.

   `Reference name=Microsoft.VSTS.Common.StateChangeDate, Data type=DateTime`
   :::column-end:::
   :::column span="1":::
   All
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   <a id="test-suite-audit"/>Test Suite Audit
   :::column-end:::
   :::column span="2":::
   Tracks other operations performed when modifying a test suite, for example, adding tests to a test suite or changing configurations. This field can be viewed through the History tab or through a separate query. There's a consolidated history view, including changes performed to work items field and changes resulting from related artifacts such as test points and configurations.  
   
   `Reference name=Microsoft.VSTS.TCM.TestSuiteAudit, Data type=PlainText`
   :::column-end:::
   :::column span="1":::
   Test Suite
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   <a id="watermark"/>Watermark
   :::column-end:::
   :::column span="2":::
   A system-managed field (not editable) that increments with changes made to a work item.  
   
   `Reference name=System.Watermark, Data type=Integer`
   :::column-end:::
   :::column span="1":::
   All
   :::column-end:::
:::row-end:::


> [!NOTE]
> 1. These fields must be included in the `WORKFLOW` section of the WIT definition. For example, this syntax is included within the `FIELDS` definition when transitioning to a Resolved state:
> 
>    ```xml
>    <FIELD refname="Microsoft.VSTS.Common.ResolvedDate">
>       <SERVERDEFAULT from="clock" />
>    </FIELD>
>    ```

## Related articles

- [Use the query editor](using-queries.md)
- [Query fields, operators, and macros](query-operators-variables.md)   
- [Query by date or current iteration](query-by-date-or-current-iteration.md)
 

[!INCLUDE [temp](../includes/rest-apis-queries.md)]
