---
title: Query Work Items By History
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
ms.date: 10/08/2025
#customer intent: As an Azure DevOps developer, I want to query work item history and comments, so I can support audit requirements in Azure Boards.
---

# Query work item history and discussion fields

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

A work item's history records who created the item, what changed, and why the change occurred. This information supports traceability and auditing. When you add entries to the History field, include enough detail to help the next owner understand context and next steps.

> [!NOTE]
> There is no separate **Discussion** field. To find comments added in the Discussion area, filter on the **History** field—all text entered into the Discussion box is appended to History.

## Prerequisites

[!INCLUDE [prerequisites-queries](../includes/prerequisites-queries.md)]

## Supported operators and macros

- Supported operators:
  - Contains Words
  - Does Not Contain Words

- Search methods:
  - Exact phrase: locate an exact sequence of words.
  - Wildcard character (`*`): use only at the end of a partial word or phrase.

- Full-text search: the History field is indexed for full-text search where the service supports it. (Azure DevOps Services exposes work item search by default; on-premises Azure DevOps Server requires the Search/Reporting feature to be installed and configured.)

<a id="query-history"></a>

## Query a work item's history

You can use the web portal or Team Explorer to view a work item's history or search for work items based on the History field. Searching the History field returns only items with content recorded in that field and doesn't include structured changes made to other fields.

#### [Browser](#tab/browser/)
<a id="team-services"></a> 

:::image type="content" source="media/hist-audit-query-ts-bt.png" alt-text="Screenshot that shows the Query Editor searching the History field.":::

#### [Visual Studio](#tab/visual-studio/)
<a id="tee-query-history"></a>
<a id="team-explorer"></a>


Note about Query Editor availability: the Azure DevOps web portal includes a query editor. In Visual Studio / Team Explorer, the Query Editor might be unavailable when you're connected to GitHub or another non‑Microsoft Git host. Visual Studio 2019 might also hide the Query Editor if you use certain UI experiences (for example, the Landing page experience or the new Git Tool). See the linked Visual Studio guidance for details.

:::image type="content" source="media/hist-audit-query-team-explorer.png" alt-text="Screenshot that shows the Query Editor in Team Explorer searching the History field.":::

* * *


## List items based on the contents of the History field  

Use the Query Editor to include the History field in a query clause.

- Queryable content: comments entered in the Discussion area (History).
- Nonqueryable content: revision metadata such as "Field X changed from A to B" isn't queryable through the History field.
- Alternative search methods: to search words in rich-text fields (Description, Steps, Discussion), use work item search (see linked guidance).
- Filter by change date: filter work items by when they changed or by a specific date range.

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
   Items whose History contains "reproducible"
   :::column-end:::
   :::column span="1":::
   `History Contains Words reproducible`
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Items whose History doesn't contain "beta"
   :::column-end:::
   :::column span="1":::
   `History Does Not Contain Words beta`
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Items that contain "stack traces" and were closed but later reactivated
   :::column-end:::
   :::column span="1":::
   `History Contains Words "stack traces"`  `And State Was Ever Closed`  `And State <> Closed`
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Items closed within a date range (example)
   :::column-end:::
   :::column span="1":::
   `State = Done`  `And Closed Date > @Today - 30`  `And Closed Date <= @Today`
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Items with which I have an association
   :::column-end:::
   :::column span="1":::
   `History Contains Words MyName`  `Or Assigned To Was Ever _ @Me`
   :::column-end:::
:::row-end:::
---

### Tips for using the query editor

- Limit scope by date range to improve performance and return relevant results.
- Use full words or exact phrases:
  - Partial words might not return matches. For example, "reproducible behavior"  matches, but "repro" might not.
  - Use wildcards at the end of words or phrases, such as `repro*`.
- Be aware of stop words: common words might get ignored by full-text indexing. See the linked guidance for stopword configuration.
- Run and validate your query:
  - Select the run icon in the query editor toolbar to test the query.
  - If results are missing, adjust your terms and rerun.

<a id="view-history"></a>

## View the history of work items  

An entry appends to the History field each time you save a work item. To view history, open the work item and select the History tab (or Details for some work item types).

<a id="web-portal-explorer-tab"></a> 
The exact history details vary by client and version.

#### [Browser](#tab/browser/)

:::image type="content" source="media/hist-audit-wi-form-vsts-tab.png" alt-text="Screenshot that shows the Work item form History tab in the web portal.":::

The state-change history diagram appears first; select Show all to see the full state-change timeline.

:::image type="content" source="media/state-change-history-diagram.png" alt-text="Screenshot that shows the state change history diagram in the web portal.":::

Select an entry to view the details of changes made.

:::image type="content" source="media/hist-audit-wi-form.png" alt-text="Screenshot that shows details for a selected History entry in the web portal.":::

#### [Visual Studio](#tab/visual-studio/)

To view only comments added to the log, select Discussion Only. To view all changes, select All Changes and then Show all changes for a specific revision.

:::image type="content" source="media/ALM_HA_AllChanges.png" alt-text="Screenshot that shows the History tab in Team Explorer with all changes.":::

* * *

<a id="filter-history"></a> 


::: moniker range="azure-devops"

## Filter the history view 

The History tab records all changes to a work item to provide full traceability. Use filtering to find revisions by who updated an item or which fields changed.

> [!NOTE]
> The Toggle filter feature requires the New Boards Hub feature (enabled by default). See the linked guidance to manage preview features.

To review updates by specific people, choose names from the Updated by menu.

:::image type="content" source="media/history-audit/filter-history-people.png" alt-text="Screenshot that shows filtering the History view by person.":::

To review updates to specific fields, choose fields from the Fields menu.

:::image type="content" source="media/history-audit/filter-history-field-assigned-to.png" alt-text="Screenshot that shows filtering History view by the Assigned To field.":::

::: moniker-end

<a id="fields"></a>

## Fields that support history, auditing, and revision tracking 

Use these fields to filter queries and build reports. Some fields update as an item moves between states; others update when the item is modified. A few fields don't appear on the work item form but are tracked for the WITs shown.

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
   Name of the team member who most recently modified the work item.  
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
   Date and time when a work item was modified.  
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
   Date and time when a work item was closed.  
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
   Date and time when a work item was created.  
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
   Record of changes appended after creation. Each revision indicates who made the change, when it occurred, and which fields changed.

   > [!NOTE]
   > History queries return items whose Discussion or Description fields contain the search terms. You can't use the History field to query structured changes made to other fields.

   The `History` field and the `Description`, `Steps to Repro`, and `Title` fields are indexed for full-text search where the service supports indexing.  
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
   Date and time when the work item moved into a Resolved state.  
   `Reference name=Microsoft.VSTS.Common.ResolvedDate, Data type=DateTime`
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
   Revision number assigned to a historical revision of a work item.

   > [!NOTE]
   > A work item revision limit of 10,000 applies to updates made through the REST API for Azure DevOps Services; portal updates aren't affected. (Verify current limits in the Azure DevOps REST API documentation.)
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
   Date and time when a work item was revised.  
   `Reference name=System.RevisedDate, Data type=DateTime`
   :::column-end:::
   :::column span="1":::
   All
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   State Change Date
   :::column-end:::
   :::column span="2":::
   Date and time when the State field value changed.  
   `Reference name=Microsoft.VSTS.Common.StateChangeDate, Data type=DateTime`
   :::column-end:::
   :::column span="1":::
   All
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   <a id="test-suite-audit">Test Suite Audit</a>
   :::column-end:::
   :::column span="2":::
   Tracks operations performed when modifying a test suite (for example, adding tests or changing configurations). Viewable through the History tab or via queries.  
   `Reference name=Microsoft.VSTS.TCM.TestSuiteAudit, Data type=PlainText`
   :::column-end:::
   :::column span="1":::
   Test Suite
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   <a id="watermark">Watermark</a>
   :::column-end:::
   :::column span="2":::
   A system-managed, noneditable field that increments with changes to a work item.  
   `Reference name=System.Watermark, Data type=Integer`
   :::column-end:::
   :::column span="1":::
   All
   :::column-end:::
:::row-end:::

**Table notes**

<sup>**1**</sup> These fields must be included in the workflow (`WORKFLOW`) section of the WIT definition. For example, to set Resolved Date automatically:

```xml
<FIELD refname="Microsoft.VSTS.Common.ResolvedDate">
  <SERVERDEFAULT from="clock" />
</FIELD>
```
