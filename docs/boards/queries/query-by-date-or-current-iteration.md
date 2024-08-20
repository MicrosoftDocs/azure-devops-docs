---
title: Query by date or current iteration in Azure Boards 
titleSuffix: Azure Boards
description: Learn how to query for work items based on a date, a team's current iteration, or a sliding window of sprints in Azure Boards and Azure DevOps. 
ms.custom: boards-queries
ms.service: azure-devops-boards
ms.assetid: 95D9F558-E3C4-4D5F-BB69-76A3BD7625D8
ms.author: chcomley
author: chcomley
ms.topic: example-scenario
monikerRange: '<= azure-devops'
ms.date: 10/06/2022
---

# Query by date or current iteration in Azure Boards

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

In this article, learn how to list work items based on when they were created, closed, resolved, or changed. You can specify a date or use a supported macro. Use the `@Today` macro and specify a plus or minus number of days for relative dates. For queries that list work items based on their assignment to a team's current sprint, use `@CurrentIteration`.

For example, find work items that were modified in the last three days with the following query.

::: moniker range=">= azure-devops-2019"
:::image type="content" source="media/example-work-item-queries/query-changed-date-last-3-days.png" alt-text="Screenshot that shows Query Editor showing the Changed Date field set to >= 3.":::
::: moniker-end

::: moniker range=">= azure-devops-2019"
Also, you can use  the `CurrentIteration +/- _n_` macro to create queries based on a sliding window of team iterations.
::: moniker-end

## Supported operators and macros

Query clauses that specify a **DateTime** field or the **Iteration Path** field can use the operators and macros listed in the following table.

---
:::row:::
   :::column span="1":::
      **Data type**
   :::column-end::: 
   :::column span="3":::
      **Supported operators and macros**
   :::column-end:::
:::row-end:::
---
::: moniker range=">= azure-devops-2019"
:::row:::
   :::column span="1":::
      DateTime   
   :::column-end::: 
   :::column span="3":::
      `= , <> , > , < , >= , <= , =[Field], <>[Field], >[Field], <[Field], >=[Field], <=[Field], In, Not In, Was Ever`  

      **Macros**: `@StartOfDay`, `@StartOfWeek`, `@StartOfMonth`, `@StartOfYear`, and `@Today`.
      You can use `+/- _n_` with each of the supported macros.
   :::column-end:::
:::row-end:::
 ---
:::row:::
   :::column span="1":::
      TreePath
   :::column-end::: 
   :::column span="3":::
      = , <> , Under, Not Under  
      **Macros**: `@CurrentIteration`<sup>1</sup> and `@CurrentIteration +/- n`<sup>2</sup> valid with the **Iteration Path** field.
   :::column-end:::
:::row-end:::
---
::: moniker-end

Notes:
1. The `@StartOfDay`, `@StartOfWeek`, `@StartOfMonth`, and `@StartOfYear` macros are supported for Azure DevOps Server 2019.1 and later versions, and only when they run from the web portal.
1. The `@CurrentIteration +/- n` macro is supported for Azure DevOps Server 2019 and later versions, and only when it runs from the web portal.

> [!TIP]
> The `WasEver` operator can be used with the **Iteration Path** field but only when defined through the WIQL syntax. For an example, see [Work Item Query Language (WIQL) syntax reference](wiql-syntax.md).

[!INCLUDE [date-time-pattern](../includes/date-time-pattern.md)]

<a id="team_view">  </a>
<a id="current_sprint_restrict"> </a>

## Client restrictions on the use of the @CurrentIteration macros

You can use the `@CurrentIteration` macro in a query from the following clients:

- Web portal that connects to Azure Boards
- Visual Studio 2019 or later versions connected to Azure Boards
- The REST API

You can use the `@CurrentIteration +/- n` macro in a query against Azure Boards, Azure DevOps Server 2019, and later versions, and with a REST API that includes the team as a parameter. An example is `@CurrentIteration('[Project]\Team')`.

An error occurs if you open a query that contains the `@CurrentIteration` macro in earlier versions of Visual Studio, or from Microsoft Excel or Microsoft Project. Also, you can't use the macro when [copying or cloning test suites and test cases](/previous-versions/azure/devops/test/mtm/copying-and-cloning-test-suites-and-test-cases), [defining alerts](../../organizations/notifications/about-notifications.md), or with [REST APIs](/rest/api/azure/devops/).

## Date-based queries

Filter for work items by the date on which they were changed or for a specific time period. Limit the scope of your query, which can help with performance by only returning results that fit the date range that you include. If you're new to creating queries, see [Use the query editor to list and manage queries](using-queries.md).

Not all fields are valid for all work item types. Jump to [date fields](#date_fields) for the set of fields you can include in queries and the work item types to which they apply.

> [!TIP]
> - Remember to enter dates in the **Date Pattern** field that you set for your [personal profile](../../organizations/settings/set-your-preferences.md).
> - To understand how `AND/OR` clauses are grouped, see the **Group clauses** section in [Define a work item query in Azure Boards](../queries/using-queries.md#group-clauses). To view the WIQL syntax for a query, install the [WIQL editor extension](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.wiql-editor), which allows you to see the WIQL version of any Query Editor entry.

---
:::row:::
   :::column span="1":::
      **Filter for**
   :::column-end::: 
   :::column span="2":::
      **Include these query clauses**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Items created in the last 30 days.
   :::column-end::: 
   :::column span="2":::
      :::image type="content" source="media/q-by-date-last-30-days.png" alt-text="Screenshot that shows the Query Editor clause for finding items created in the last 30 days.":::
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Items modified on a specific date.
   :::column-end::: 
   :::column span="2":::
      :::image type="content" source="media/q-by-specific-date.png" alt-text="Screenshot that shows the Query Editor clause for finding items changed on a specific date.":::
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Items resolved today.
   :::column-end::: 
   :::column span="2":::
      :::image type="content" source="media/q-by-resolved-today.png" alt-text="Screenshot that shows the Query Editor clause for finding items resolved today.":::
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Items closed within a specified time period.
   :::column-end::: 
   :::column span="2":::
      :::image type="content" source="media/q-by-closed-time-period.png" alt-text="Screenshot that shows the Query Editor clause for finding items closed within a specified time period.":::
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Items that aren't closed (Closed Date is null).
   :::column-end::: 
   :::column span="2":::
      :::image type="content" source="media/q-closed-date-null.png" alt-text="Screenshot that shows the Query Editor clause for finding items whose Closed Date is empty or null.":::
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Items whose status was updated within the last week.
   :::column-end::: 
   :::column span="2":::
      :::image type="content" source="media/q-by-state-changed-within-last-week.png" alt-text="Screenshot that shows the Query Editor clause for items whose status was updated within the last week.":::
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Items closed during the current sprint. (The `<xref href="CurrentIteration" data-throw-if-not-resolved="False" data-raw-source="@CurrentIteration"></xref>` macro references the sprint defined for the current team context.)
   :::column-end::: 
   :::column span="2":::
      :::image type="content" source="media/q-by-done-current-iteration.png" alt-text="Screenshot that shows the Query Editor clause for items closed during the current sprint.":::
   :::column-end:::
:::row-end:::
---

::: moniker range=">= azure-devops-2019"

## Create start of day, week, month, or year date-based queries

The following examples show how to use the `StartOf...` macros to filter for work items with various offsets. For more information, see [Work Item Query Language (WIQL) syntax](wiql-syntax.md#start-of).
::: moniker-end

::: moniker range="azure-devops-2019"
> [!NOTE]
> Requires Azure DevOps Server 2019 Update 1 or later version.
::: moniker-end

::: moniker range=">= azure-devops-2019"

:::row:::
   :::column span="1":::
      **Filter for**
   :::column-end::: 
   :::column span="2":::
      **Include these query clauses**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Bugs closed in the last two weeks.
   :::column-end::: 
   :::column span="2":::
      :::image type="content" source="media/example-queries/close-date-last-2-weeks.png" alt-text="Screenshot that shows the Query Editor clause for finding bugs closed in the last two weeks.":::
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Items modified in the last 10 days.
   :::column-end::: 
   :::column span="2":::
      :::image type="content" source="media/example-queries/changed-date-last-10-days.png" alt-text="Screenshot that shows the Query Editor clauses for finding items changed in the last 10 days.":::
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Features scheduled to be completed in the next three months.
   :::column-end::: 
   :::column span="2":::
      :::image type="content" source="media/example-queries/start-month-target-date-3.png" alt-text="Screenshot that shows the Query Editor clauses for features scheduled to be completed in the next three months.":::
   :::column-end:::
:::row-end:::
---

Not all fields are valid for all work item types. Jump to [date fields](#date_fields) for the set of fields you can include in queries and the work item types to which they apply.

::: moniker-end

<a id="current-iteration">  </a>

## Create queries for your team's current iteration

If your team follows Scrum processes, you [schedule work to be completed in sprints](../sprints/define-sprints.md). You can track the progress of requirements, bugs, and other work to be completed in the current sprint by using the `@CurrentIteration` macro.

Any item assigned to a sprint that corresponds to the current iteration path for the team is found. For example, if a team is on Sprint 5, the query returns items assigned to Sprint 5. Later, when the team is working in Sprint 6, the same query returns items assigned to Sprint 6.

> [!NOTE]
> For the `@CurrentIteration` macro to work, the team must have selected an iteration path whose date range encompasses the current date. For more information, see [Define iteration paths (also referred to as sprints) and configure team iterations](../../organizations/settings/set-iteration-paths-sprints.md#activate). Also, queries that contain this macro are only valid when run from the web portal.
>
> See also [Client restrictions on the use of the @CurrentIteration macros](#current_sprint_restrict) earlier in this article.

::: moniker range=">= azure-devops-2019"

Azure Boards adds a team parameter when you select the **@CurrentIteration** or **@CurrentIteration +/- _n_** macros. The team parameter derives from your current [team context](#team_view).

> [!div class="mx-imgBorder"]
> ![Screenshot that shows the Query filter by using the CurrentIteration macro with team parameter.](media/query-date-iteration/at-current-with-team-parameter.png)

> [!TIP]
> If the `@CurrentIteration` macro isn't working, check that the [expected iteration is selected for your team and that dates have been set for it](../../organizations/settings/set-iteration-paths-sprints.md#activate).

To change the team parameter that the system automatically sets, you choose it by entering the name of the team in the parameter field added below the **@CurrentIteration** macro.

> [!div class="mx-imgBorder"]
> ![Screenshot that shows choosing a team parameter.](media/query-date-iteration/choose-team-parameter.png)

::: moniker-end

::: moniker range=">= azure-devops-2019"

<a id="current-iteration-plus-minus-n">  </a>

## Create a sliding window of your team's iterations query

Use the `@CurrentIteration +/- <i>n</i>` macro when you want to track the work a team planned for upcoming sprints and for understanding work that wasn't completed in previous sprints.

> [!NOTE]
> For the `@CurrentIteration +/- <i>n</i>` macro to work, the team must have selected iteration paths that meet the `+/- _n_`
> criteria. Date ranges must encompass the current date for the `@CurrentIteration`. For more information about team selection of iteration paths, see [Define iteration (sprint) paths and configure team iterations](../../organizations/settings/set-iteration-paths-sprints.md#activate).
> 
> See also [Client restrictions on the use of the @CurrentIteration macros](#current_sprint_restrict) earlier in this article.

The following image shows how to list all User Story and Bug work item types that are assigned to the sliding window that spans the last two, the current, and the next two sprints selected for the Cloud Admin and Tools team.

> [!div class="mx-imgBorder"]
> ![Screenshot that shows CurrentIteration plus and minus clauses.](media//query-date-iteration/sliding-window-iterations.png)

To use this macro, the specified team must [select a set of sprints](../../organizations/settings/set-iteration-paths-sprints.md) that span the `+/- _n_` value entered for the macro.

::: moniker-end

<a id="list-work-items-moved-out-sprint">  </a>

## List work items moved out of a sprint

List work items that were defined for a sprint but later moved out by using a query with a clause that contains the `Was Ever` operator for the **Iteration Path** field. Only construct this query by using the [WIQL syntax](wiql-syntax.md). Edit the WIQL syntax in Query Editor by installing the [WIQL Editor Marketplace extension](https://marketplace.visualstudio.com/items?itemName=ottostreifel.wiql-editor).

For example, the following syntax queries for work items meet the following criteria:

- Defined in the current project.
- Work item type equals User Story or Bug.
- Work items are under the Fabrikam Fiber Web team Area Path.
- Work items aren't in a `Closed`, `Completed`, `Cut`, or `Resolved` state.
- Not in the current iteration path for the Fabrikam Fiber Web team.
- Were assigned to the current iteration path for the Fabrikam Fiber Web team.
- Are now assigned to the current iteration +1 for the Fabrikam Fiber Web team.
- Were changed within the last 30 days (the length of the sprint).

> [!div class="tabbedCodeSnippets"]
```WIQL
SELECT
    [System.Id],
    [System.WorkItemType],
    [System.AssignedTo],
    [System.Title],
    [System.State],
    [System.Tags],
    [System.IterationPath],
    [System.AreaPath]
FROM workitems
WHERE
    [System.TeamProject] = @project
    AND [System.WorkItemType] IN ('User Story', 'Bug')
    AND [System.AreaPath] UNDER 'FabrikamFiber\Web'
    AND NOT [System.State] IN ('Completed', 'Closed', 'Cut', 'Resolved')
    AND NOT [System.IterationPath] = @currentIteration('[FabrikamFiber]\Web <id:cdf5e823-1179-4503-9fb1-a45e2c1bc6d4>')
    AND (
        EVER (
            [System.IterationPath] = @currentIteration('[FabrikamFiber]\Web <id:cdf5e823-1179-4503-9fb1-a45e2c1bc6d4>')
        )
        AND [System.IterationPath] = @currentIteration('[FabrikamFiber]\Web <id:cdf5e823-1179-4503-9fb1-a45e2c1bc6d4>') + 1
        AND [System.ChangedDate] >= @today - 30
    )
ORDER BY [System.Id]
```

The Query Editor view of the syntax appears as shown.

> [!NOTE]
> The Query Editor displays a :::image type="icon" source="../../media/icons/required-icon.png" border="false"::: information icon next to the `Was Ever` operator, indicating an issue with the clause. However, the query still runs and you can create query charts. To modify the query, you *must* use the [WIQL Editor](https://marketplace.visualstudio.com/items?itemName=ottostreifel.wiql-editor).

:::image type="content" source="media/example-work-item-queries/query-work-items-moved-out-of-sprint.png" alt-text="Screenshot that shows Query Editor work items moved out of a sprint.":::

<a id="list-work-items-added-to-a-sprint"></a>

## List work items added to a sprint after the start date

To list newly created work items added to a sprint after its start date, use a query similar to the one shown in the following image. This query works by filtering for work items assigned to the current sprint but were created after the start of the sprint date. Use the clause `created Date = @Today - 28`.

:::image type="content" source="media/example-work-item-queries/query-work-items-added-to-sprint.png" alt-text="Screenshot that shows Query Editor work items newly created and added to a sprint after its start date.":::

For other options for querying changes to sprint scope, see [About Sprints, Scrum and project management, Sprint scope change](../sprints/scrum-overview.md#sprint-scope-change).

<a id="date_fields">  </a>
<a id="fields"></a>

## Date and Iteration Path fields

Use **Date** fields to filter your queries. Some of these fields are populated with information as a work item progresses from one state to another. Several of these fields don't appear on the work item form, but they're tracked for those work item types listed in the following table.

:::row:::
   :::column span="1":::
      **Field name**
   :::column-end:::
   :::column span="2":::
      **Description**
   :::column-end:::
   :::column span="1":::
      **Work item types**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Activated Date (Notes 1 and 2)
   :::column-end:::
   :::column span="2":::
      The date and time when the work item was created or when its status was changed from `Closed`, `Completed`, or `Done` to a `New` or `Active` state.
      Reference name=Microsoft.VSTS.Common.ActivatedDate, Data type=DateTime
   :::column-end:::
   :::column span="1":::
      Bug, Change Request, Epic, Feature, Issue, Product Backlog Item, Requirement, Review, Risk, Shared Step, Task, Test Case, User Story
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      Change Date 
   :::column-end:::
   :::column span="2":::
      The date and time when a work item was modified.
      Reference name=System.ChangedDate, Data type=DateTime
   :::column-end:::
   :::column span="1":::
      All
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      Closed Date (Note 2)
    :::column-end:::
    :::column span="2":::
      The date and time when a work item was closed.
      Reference name=Microsoft.VSTS.Common.ClosedDate, Data type=DateTime
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
      Reference name=System.CreatedDate, Data type=DateTime
   :::column-end:::
   :::column span="1":::
      All 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      Due Date
    :::column-end:::
    :::column span="2":::
      The forecasted due date for an issue to be resolved.
      Reference name=Microsoft.VSTS.Scheduling.DueDate, Data type=DateTime
   :::column-end:::
   :::column span="1":::
      Issue (Agile) 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      Finish Date (Note 3)
    :::column-end:::
    :::column span="2":::
      The date and time when the schedule indicates that the task is completed.
      Reference name=Microsoft.VSTS.Scheduling.FinishDate, Data type=DateTime
   :::column-end:::
   :::column span="1":::
      Requirement, Task, Test Plan, User Story
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      Iteration Path
    :::column-end:::
    :::column span="2":::
      Groups work items by named sprints or time periods. The iteration must be a valid node in the project hierarchy. You [define iteration paths for a project and select iteration paths for a team](../../organizations/settings/set-iteration-paths-sprints.md).
      Reference name=System.IterationPath, Data type=TreePath
   :::column-end:::
   :::column span="1":::
      All
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      Resolved Date (Notes 1 and 2)
    :::column-end:::
    :::column span="2":::
      The date and time when the work item was moved into a `Resolved` state.
      Reference name=Microsoft.VSTS.Common.ResolvedDate, Data type=DateTime
   :::column-end:::
   :::column span="1":::
      Bug, Change Request, Epic, Feature, Issue, Product Backlog Item, Requirement, Review, Risk, Shared Step, Task, Test Case, User Story
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      Start Date (Note 3)
    :::column-end:::
    :::column span="2":::
      The date and time when the schedule indicates that the task starts.
      ::: moniker range="azure-devops"
      > [!NOTE]
      > [Delivery Plans](../plans/review-team-plans.md) uses the **Start Date** and **Target Date** fields to show the span of features, epics, and other portfolio backlog items.
      ::: moniker-end
      Reference name=Microsoft.VSTS.Scheduling.StartDate, Data type=DateTime
   :::column-end:::
   :::column span="1":::
      Epic, Feature, Requirement, Task, Test Plan, User Story
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      State Change Date
    :::column-end:::
    :::column span="2":::
      The date and time when the value of the **State** field changed.
      Reference name=Microsoft.VSTS.Common.StateChangeDate, Data type=DateTime
   :::column-end:::
   :::column span="1":::
      All
   :::column-end:::
:::row-end:::	
:::row:::
   :::column span="1":::
      Target Date
    :::column-end:::
    :::column span="2":::
      The date by which a feature, work item, or issue is to be completed or resolved.
      ::: moniker range="azure-devops"
      > [!NOTE]
      > [Delivery Plans](../plans/review-team-plans.md) uses the **Start Date** and **Target Date** fields to show the span of features, epics, and other portfolio backlog items.
      ::: moniker-end
      Reference name=Microsoft.VSTS.Scheduling.TargetDate, Data type=DateTime
   :::column-end:::
   :::column span="1":::
      Epic, Feature 
   :::column-end:::
:::row-end:::

Notes:

1. See also [Query by assignment or workflow changes, Date, and Identity fields](query-by-workflow-changes.md).

1. For these fields to be defined for a work item type, they must be included in the ```WORKFLOW``` section of the work item type definition. For example, this syntax is included within the ```FIELDS``` definition when transitioning to a `Resolved` state.
	
   ```xml
	<FIELD refname="Microsoft.VSTS.Common.ResolvedDate" />  
	   <SERVERDEFAULT from="clock"  />  
	</FIELD >  
   ```

1. **Start Date** and **Finish Date** values are calculated if you create a project plan in Project and then synchronize that plan with tasks that are stored in Azure Boards. These fields might not appear on the work item form, but they're calculated for the backlog items and tasks that are linked to backlog items. You can view their read-only values in results from a query or from Excel.

	[!INCLUDE [temp](../includes/deprecate-project.md)]

## Related articles

- [Query by assignment or workflow changes](query-by-workflow-changes.md)
- [Define iteration (sprint) paths and configure team iterations](../../organizations/settings/set-iteration-paths-sprints.md)
- [Create managed queries with Query Editor](using-queries.md)
- [Query operators and macros](query-operators-variables.md)
- [Work item fields and attributes](../work-items/work-item-fields.md)
- [Work Item Query Language (WIQL) syntax](../queries/wiql-syntax.md)

[!INCLUDE [temp](../includes/rest-apis-queries.md)]
