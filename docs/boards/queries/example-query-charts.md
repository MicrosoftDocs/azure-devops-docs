---
title: Example query charts in Azure Boards  
titleSuffix: Azure Boards
description: Learn about useful query charts to create and display on dashboards when working in Azure Boards.
ms.service: azure-devops-boards
ms.custom: boards-queries, contperf-fy23 
ms.author: kaelli
author: KathrynEE
ms.topic: sample
monikerRange: '<= azure-devops'
ms.date: 12/16/2022
---


# Example query charts

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]


What are some useful query charts for teams to create and monitor? 

> [!NOTE]  
> There is no **Discussion** work item field. To query work items with comments entered in the Discussion area, you filter on the **History** field. The full content of the text entered into the Discussion text box is added to the History field. 

How to view total work done 
How to view remaining work - 

Create tasks and estimate work 
How to view all work items
How to view work items I'm following 

Query charts and Query widgets for dashboards, customizing widget tile. 

<!---TIPS
consider the time frame you want to monitor
snapshot or trends
what's shipping when?
Track bug debt, progress
Active bugs
Stale bugs
Hi priority bugs
Triage bugs
Active bug trends

## Questions to answer 

- Do you want to view status or a trend over time
- If trend, what time frame is of interest 
- What team, product, or organization goals need to be monitored
- What recurring activities need to be done to maintain backlog hygiene? 

<!--- What articles should link to this article?  
- Does a change in Stack Rank count toward the Changed Date? 

--> 


## Maintain backlog hygiene 

Here are a few tasks to review periodically, usually at the beginning or end of a sprint. Review this list for what makes sense for your team and organization goals. 
 
- Unassigned work items
- Active work items not assigned to the current sprint 
- Incomplete work assigned to a past sprint 
- Stale work items, no changes made in the last 2 to 3 months (query by Changed Date)
- Ill-defined work items such as no Story Points or Effort defined 
- Unparented work 


## Example status charts 

- **Planned work**: How much work is represented in the backlog. A query that looks at work in the New or Proposed category state provides a snapshot of work in the backlog.  
- **Active bugs**: Agile teams should consider monitoring their bug or technical debt and set goals to maintain the total number under a specific number. 
- **Active bugs by assignment**: Monitoring how bugs are assigned across a team can help load balance work.  
- Active bugs by state 
- **Tagged work items**: If your team tags work to meet specific goals, milestones, or categories of work; then monitoring the number of work items and their state is recommended. 
- **Blocked work**: How much work is currently blocked? You can query blocked work using a tag or custom field. 


## Example trend charts 

- Bug trends over time by state (last 30 days)
- Active work trends by state (last 30 days)
- Unassigned work  
- Newly added work over time 

## Useful work tracking widgets and charts

- Velocity 
- Sprint burndown 
- Lead time
- Cycle time 
- Cumulative flow 


Widget error: The daily number of work items returned exceeds the trend chart size limit of 1000. 

## Supported operators and macros 

Query clauses that specify the **History** field can use the **Contains Words** and **Does Not Contain Words** operators. Search against an exact phrase or to use the wildcard character, *. You can only use the wildcard character at the end of a partial word or phrase.

The **History** field is automatically indexed for full-text search when full-text search is available. See Full-Text and partial word searches 

<a id="query-history" />

## Query a work item's history 

You can use either the web portal or Team Explorer to view the history of a work item or find work items based on the contents of the **History** field. When you run a search on the contents of the **History**  field, it returns only work items that have changes recorded in that field. That is, it doesn't register changes that were made to text in other fields.  

#### [Browser](#tab/browser/)
<a id="team-services" /> 

:::image type="content" source="media/hist-audit-query-ts-bt.png" alt-text="Screenshot of Query Editor to Search for items based on words contained in the History field.":::

#### [Visual Studio](#tab/visual-studio/)
<a id="tee-query-history" />
<a id="team-explorer" />


The **Query Editor** isn't available when you're connected to GitHub or third-party Git repository. Also, it isn't available from Visual Studio 2019 under the following conditions:   
* If you're set to use the default Landing page experience as described in [Set the Work Items experience in Visual Studio 2019](../work-items/set-work-item-experience-vs.md).  
* If you're set to use the new Git Tool as described in [Git experience in Visual Studio](/visualstudio/ide/git-with-visual-studio).  

![Screenshot of Query Editor to Search for items based on words contained in the History field in Team Explorer.](media/hist-audit-query-team-explorer.png) 

* * *


## List items based on the contents of the History field  

You use the query editor to add the **History** field to a [query clause](using-queries.md). Comments entered into the **Discussion** area are queryable. Change history entries, such as which fields were changed, aren't queryable. To quickly find items based on words entered into the Discussion area, or **Description** or other rich-text fields, consider using [work item search](../../project/search/functional-work-item-search.md).

You can filter for work items by the date on which they were changed or for a specific time period. If you limit the scope of your query, it can help with performance by only returning those results that fit the date range that you want to include. 

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
   Items whose History field doesn&#39;t contain the word &quot;beta&quot;
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
   
   Items I&#39;ve been associated with 
   :::column-end:::
   :::column span="1":::
   `History Contains Words MyName`  
   `Or Assigned To Was Ever _ @Me`  
   :::column-end:::
:::row-end:::
---

### Tips for using the query editor

- Type the complete word or phrase that is specified in the **History** field of those work items that you want to find.
- Enter the full text for the word that you want to search. The **History** field is indexed for full-text search. If you enter only a partial word, the query won't return work items that contain the full word. For example, if the **History** field contains the phrase *reproducible behavior* and you search for *repro*, the work item won't be found. However, if you search for the complete word *reproducible*, the work item will be found. You can also search for the string with a wild card, such as `repro*`. 
- The query editor ignores common words or stop words as defined in  [Configure and Manage Stopwords and Stoplists for Full-Text Search](/sql/relational-databases/search/configure-and-manage-stopwords-and-stoplists-for-full-text-search).
- On the query editor toolbar, choose ![Run query](../media/icons/run_query.png) or ![Run query, earlier version](../media/icons/run_query_te.png) icon and confirm that your query returns expected results. 
- If you don&#39;t receive the results you expect, adjust the word or phrase that you entered, and run the query again. 
 


<a id="view-history" />

## View the history of work items  

An entry is made to the **History** field each time a work item is saved. To view the history of changes, open an existing work item, and then choose the ![history tab icon](../media/icons/icon-history-tab-wi.png) or **History** tab, or for some work item types, choose the **Details** tab. 

<a id="web-portal-explorer-tab" /> 
The history details shown depend on the platform, version, and client. 

#### [Browser](#tab/browser/)

<a id="team-services-tab" /> 
<a id="team-services-view" /> 

:::image type="content" source="media/hist-audit-wi-form-vsts-tab.png" alt-text="Screenshot of Work item form, Web portal, Choose History tab.":::

The state change history diagram appears first. To see the entire history of state changes, choose **Show all**.

:::image type="content" source="media/state-change-history-diagram.png" alt-text="Screenshot of Work item form, Web portal, State change history diagram (web portal only).":::

Choose an entry in the left pane to view the details of changes made.

:::image type="content" source="media/hist-audit-wi-form.png" alt-text="Screenshot of Work item form, History tab, Web portal, Details.":::

#### [Visual Studio](#tab/visual-studio/)

To view only the comments that were added to the log, choose the **Discussion Only** tab. To view all changes made to the item, choose the **All Changes** tab, and then choose the **show all changes** link for a specific date and time.  

![Screenshot of Work item form, Team Explorer, History tab.](media/ALM_HA_AllChanges.png) 

* * *

<a id="filter-history" /> 


::: moniker range="azure-devops"

## Filter the history view 

The **History** tab is designed to track all changes made to a work item to support full traceability. The long revision history that results can make it difficult to understand when changes happen to specific fields. To quickly find revisions made to a specific field or by specific people, filter the history view. 

> [!NOTE]   
> The **Toggle filter** feature requires you to enable the **New Boards Hub** preview feature. To enable this feature, see [Manage or enable features](../../project/navigation/preview-features.md).

You enable the filter feature by choosing :::image type="icon" source="media/history-audit/filter-icon.png" border="false"::: **Toggle filter**.

:::image type="content" source="media/history-audit/history-filter.png" alt-text="Screenshot of Work item form, History tab, Web portal, history filter enabled.":::

To review updates by specific people, select their names from the **Updated by** menu. 

:::image type="content" source="media/history-audit/filter-history-people.png" alt-text="Screenshot of Work item form, History tab, Filter by who made updates.":::

To review updates made to one or more fields, select the fields from the **Fields** menu. 

:::image type="content" source="media/history-audit/filter-history-field-assigned-to.png" alt-text="Screenshot of Work item form, History tab, Filter on changes made to Assigned To field.":::

::: moniker-end


 

## Related articles

- [Query editor](using-queries.md)
- [Query fields, operators, and macros](query-operators-variables.md)   
- [Query by date or current iteration](query-by-date-or-current-iteration.md)
 

[!INCLUDE [temp](../includes/rest-apis-queries.md)]



