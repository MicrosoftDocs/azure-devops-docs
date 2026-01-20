---
title: Query by numeric fields based on effort, schedules, and story points
titleSuffix: Azure Boards
description: Track work by creating queries based on effort, story points, schedules, or time tracking fields in Azure Boards and Azure DevOps.
ms.custom: boards-queries, engagement-fy23
ms.service: azure-devops-boards
ms.assetid: 78fe418f-fbd8-4ae2-97d7-c754c14dd3cd
ms.author: chcomley
author: chcomley
ms.topic: example-scenario
ai-usage: ai-assisted
monikerRange: '<= azure-devops'
ms.date: 10/08/2025
---

# Query by numeric fields

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Learn how to query by numeric fields such as effort, schedule estimates, story points, or time-tracking fields in Azure Boards and Azure DevOps.

Common numeric fields track effort for requirements or estimated, remaining, and completed work for tasks. Use queries to list the work items you care about, then create charts that show either a count of work items or a sum of a numeric field.

## Prerequisites

[!INCLUDE [prerequisites-queries](../includes/prerequisites-queries.md)]

## Use operators and macros

Clauses that reference numeric fields support these operators:
- `=`, `<>`, `>`, `<`, `>=`, `<=`
- `=[Field]`, `<>[Field]`, `>[Field]`, `<[Field]`, `>=[Field]`, `<=[Field]`
- `In`, `Not In`
- `Was Ever`

## Develop chart-based queries

Tips for building queries that feed charts:
- Add charts to flat-list queries only.
- Reference either query filters or fields displayed through column options.
- Save your query before you add or modify a chart.
- To group clauses, select them and use the group-clauses icon; to ungroup, select the grouped clause.

For more information, see [Use the query editor to list and manage queries](using-queries.md), [Charts](../../report/dashboards/charts.md), and [Add or modify a field](../../reference/add-modify-field.md).

### Use filters

The following table shows useful filters for queries.

:::row:::
   :::column span="1":::
   **Filter for**
   :::column-end:::
   :::column span="1":::
   **Include these query clauses**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   User stories or bugs
   :::column-end:::
   :::column span="1":::
   `Work Item Type In User Story,Bug`
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Tasks or bugs
   :::column-end:::
   :::column span="1":::
   `Work Item Type In Task,Bug`
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Items that are Active or Closed
   :::column-end:::
   :::column span="1":::
   `State In Active,Closed`
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Items in the Requirements category
   :::column-end:::
   :::column span="1":::
   `Work Item Type In Group Microsoft.RequirementCategory`
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Unestimated user stories
   :::column-end:::
   :::column span="1":::
   `Story Points <> (leave Value field blank)`
   :::column-end:::
:::row-end:::

---

<a id="counts"></a>

## Query for count of work items

All queries return a count of matching items when you run them. The following example shows a flat-list query that filters for bugs in any state.

![Screenshot that shows a query for bugs in any state with the work item count summary.](media/query-effort-active-bugs-count-summary.png)

Charts also include a Values selection to show a count of work items.

### Query for count of bugs per developer

Create an active bugs query, include Assigned To and State in the columns, then add a pivot chart that shows assignments and state.

> [!div class="mx-imgBorder"]
> ![Screenshot that shows the Configure chart dialog configured to pivot by Assigned To and State.](media/numeric/config-pivot-items-developer.png)

### Query for count of bugs by state and area

Using the same flat-list query, include Area Path as a column and add a pivot chart grouped by state and area.

> [!div class="mx-imgBorder"]
> ![Screenshot that shows the Configure chart dialog configured to pivot by State and Area Path.](media/numeric/config-pivot-state-area.png)

<a id="undefined-value"></a>

## Query for undefined field values

Find work items with an undefined (blank) field value by using the "equals" operator `=` and leaving the Value blank. For example, this clause finds user stories whose Story Points field is blank.

> [!div class="mx-imgBorder"]
> ![Screenshot that shows a filter where the Story Points value is blank.](media/numeric/field-value-blank.png)

To find items where a field isn't blank, use the "not" operator `<>` and leave the value blank.

<a id="effort"></a>

## Query for effort or story points

Assign Story Points to user stories or bugs in the Agile process. Use Effort for product backlog items and bugs in the Scrum process. For more, see [Basic](../get-started/plan-track-work.md), [Agile](../work-items/guidance/agile-process.md), [Scrum](../work-items/guidance/scrum-process.md), or [CMMI](../work-items/guidance/cmmi-process.md).

### Query for sum of story points and their status

Create a query that filters for User Story and add Story Points and State to the columns.

> [!div class="mx-imgBorder"]
> ![Screenshot that shows the Query editor flat-list for open stories with Story Points and State columns.](media/query-effort-sum-story-points-iteration.png)

Then add a stacked bar chart that sums Story Points.

> [!div class="mx-imgBorder"]
> ![Screenshot that shows the Configure chart dialog for a stacked bar chart that sums Story Points.](media/numeric/config-psum-story-points-stacked-bar.png)

For information on cumulative flow diagrams, see [Cumulative flow](../../report/dashboards/cumulative-flow.md).

### Query for burn up chart of user stories for an iteration

Create a query that filters for User Story in Active or Closed state and include Story Points in the columns.

> [!div class="mx-imgBorder"]
> ![Screenshot that shows the Query editor flat-list for user stories in Active or Closed state.](media/query-effort-sum-story-points-active-closed.png)

Then add a stacked area trend chart that sums Story Points.

> [!div class="mx-imgBorder"]
> ![Screenshot that shows the Configure chart dialog for a trend chart that sums Story Points.](media/numeric/config-trend-sum-story-points.png)

<a id="work"></a>

## Query for remaining and completed work

Depending on your process, projects can include these fields on tasks or bugs:

| Process | Available fields |
|---------|------------------|
| Agile   | Original Estimate, Remaining Work, Completed Work |
| Scrum   | Remaining Work |
| CMMI    | Original Estimate, Remaining Work, Completed Work |

### Sum of remaining work per developer

If you estimate Remaining Work for tasks and bugs, get a rollup with a query that uses the *In* operator and includes both Task and Bug to include bugs tracked as tasks.

> [!div class="mx-imgBorder"]
> ![Screenshot that shows a query of tasks and bugs for a sprint.](media/query-effort-tasks-bugs-list.png)

Add Remaining Work as a column, save, and then add a pivot chart to show a sum of Remaining Work per developer.

> [!div class="mx-imgBorder"]
> ![Screenshot that shows the Configure chart dialog to pivot by Assigned To and sum Remaining Work.](media/numeric/config-pivot-remaining-work-per-developer-area.png)

For system-defined sprint burndown charts, see [Sprint burndown](../../report/dashboards/configure-sprint-burndown.md).

<a id="fields"></a>

## Fields used to estimate and track work

This table describes activity-based and numeric fields you can use to track work. For date-related fields such as Start Date, Finish Date, and Target Date, see [Query by date or current iteration](query-by-date-or-current-iteration.md).

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
   Activity <sup>1, 2</sup>
   :::column-end:::
   :::column span="2":::
   The activity required to complete a task. For capacity planning, see [Capacity planning](../sprints/set-capacity.md). Allowed values include:
   - Deployment
   - Design
   - Development
   - Documentation
   - Requirements
   - Testing

   The Activity field maps to `Activity` in the ProcessConfiguration file.<sup>3</sup>

   Reference name=Microsoft.VSTS.Common.Activity, Data type=String
   :::column-end:::
   :::column span="1":::
   Task, Bug<sup>4</sup> (Agile and Scrum)
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Business Value
   :::column-end:::
   :::column span="2":::
   A subjective measure of relative business value for a product backlog item or feature. Higher numbers indicate higher relative value.

   Reference name=Microsoft.VSTS.Common.BusinessValue, Data type=Integer
   :::column-end:::
   :::column span="1":::
   Epic, Feature
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   <a id="completed-work"></a>Completed Work
   :::column-end:::
   :::column span="2":::
   The amount of work spent implementing a task. You can record work in hours or days; no inherent time units are enforced.

   Reference name=Microsoft.VSTS.Scheduling.CompletedWork, Data type=Double
   :::column-end:::
   :::column span="1":::
   Task, Bug<sup>4</sup>
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Discipline <sup>1, 2</sup>
   :::column-end:::
   :::column span="2":::
   The discipline assigned to a task. See [Capacity planning](../sprints/set-capacity.md). Allowed values include:
   - Analysis
   - Development
   - Test
   - User Education
   - User Experience

   The Discipline field maps to `Activity` in the ProcessConfiguration file.<sup>3</sup>

   Reference name=Microsoft.VSTS.Common.Discipline, Data type=String
   :::column-end:::
   :::column span="1":::
   Task, Bug <sup>4</sup> (CMMI)
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Effort
   :::column-end:::
   :::column span="2":::
   A subjective measure of the size of a bug or product backlog item. Use Effort to calculate team velocity and forecasting; it maps to `Effort` in the ProcessConfiguration file.

   Reference name=Microsoft.VSTS.Scheduling.Effort, Data type=Double
   :::column-end:::
   :::column span="1":::
   Product Backlog Item, Bug <sup>4</sup> (Scrum)

   Feature, Epic
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Story Points
   :::column-end:::
   :::column span="2":::
   A subjective measure of the size of a user story. Story Points contribute to team velocity and forecasting and map to `Effort` in the ProcessConfiguration file.

   Reference name=Microsoft.VSTS.Scheduling.StoryPoints, Data type=Double
   :::column-end:::
   :::column span="1":::
   User Story, Bug <sup>4</sup> (Agile)
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Size
   :::column-end:::
   :::column span="2":::
   A subjective measure of requirement size. Size contributes to velocity and maps to `Effort` in the ProcessConfiguration file.

   Reference name=Microsoft.VSTS.Scheduling.Size, Data type=Double
   :::column-end:::
   :::column span="1":::
   Requirement, Bug <sup>4</sup> (CMMI)
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Original Estimate
   :::column-end:::
   :::column span="2":::
   The initial amount of work estimated to complete a task. Expressed in hours or days; no inherent units are enforced.

   Reference name=Microsoft.VSTS.Scheduling.OriginalEstimate, Data type=Double
   :::column-end:::
   :::column span="1":::
   Task, Bug <sup>4</sup> (Agile and CMMI)
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   <a id="remaining-work"></a>Remaining Work
   :::column-end:::
   :::column span="2":::
   The amount of work that remains to finish a task. Recorded in hours or days; no inherent units are enforced. Remaining Work also contributes to burn down and maps to `RemainingWork` in the ProcessConfiguration file.

   > [!NOTE]
   > For Azure Boards, the taskboard displays "h" (hours) for Remaining Work. For on-premises XML process configuration, you can modify the ProcessConfiguration file to change the label (for example, "d" for days).

   Reference name=Microsoft.VSTS.Scheduling.RemainingWork, Data type=Double
   :::column-end:::
   :::column span="1":::
   Task, Bug<sup>4</sup>
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Requires Review
   :::column-end:::
   :::column span="2":::
   Indicates the task requires review. Allowed values: **Yes** or **No** (default).

   Reference name=Microsoft.VSTS.CMMI.RequiresReview, Data type=String
   :::column-end:::
   :::column span="1":::
   Task (CMMI)
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Requires Test
   :::column-end:::
   :::column span="2":::
   Indicates the task requires a test. Allowed values: **Yes** or **No** (default).

   Reference name=Microsoft.VSTS.CMMI.RequiresTest, Data type=String
   :::column-end:::
   :::column span="1":::
   Task (CMMI)
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Task Type<sup>1</sup>
   :::column-end:::
   :::column span="2":::
   Specifies the kind of task. Allowed values include:
   - Corrective Action
   - Mitigation Action
   - Planned

   Reference name=Microsoft.VSTS.CMMI.TaskType, Data type=String
   :::column-end:::
   :::column span="1":::
   Task, Bug<sup>4</sup> (CMMI process)
   :::column-end:::
:::row-end:::

> [!NOTE]
> 1. To change picklist values: for cloud services or an Inherited process, see [Add and manage fields](../../organizations/settings/work/customize-process-field.md); for on-premises XML process use [Add or modify a field, customize a picklist](../../reference/add-modify-field.md).
> 2. The Capacity page shows a union of all values defined for the field across projects in the project collection. To restrict values seen on the Capacity page, make the values match across all teams that share the field assigned to `type="Activity"`.
> 3. To change the ProcessConfiguration field assignment (on-premises only), see [Process configuration XML element reference](../../reference/xml/process-configuration-xml-element.md).
> 4. Each team configures whether bugs behave like requirements or tasks. Because bugs can appear with either, fields used to estimate effort at both levels are included on the work item form.

## Next steps

> [!div class="nextstepaction"]
> [Customize your work tracking experience](../../reference/customize-work.md)

## Related content

- [Create your backlog](../backlogs/create-your-backlog.md)
- [Plan sprints](../sprints/assign-work-sprint.md)
- [Plan capacity](../sprints/set-capacity.md)
- [Define a work item query](using-queries.md)
- [Query fields, operators, and macros](query-operators-variables.md)
- [Support rollup of work and other fields](../../reference/xml/support-rollup-of-work-and-other-fields.md)
- [Create rollup charts with Power BI](../../report/powerbi/data-connector-connect.md)

[!INCLUDE [temp](../includes/rest-apis-queries.md)]
