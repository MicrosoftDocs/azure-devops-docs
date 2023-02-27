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
monikerRange: '<= azure-devops'
ms.date: 04/01/2022
---

# Query by numeric fields in Azure Boards and Azure DevOps   

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

How do I determine how much work each developer has completed on my team? Is there a way to sum up the effort or story points for an iteration? 

The most common numeric fields track effort for items in the Requirements category or estimated, remaining, and completed work for items in the Task category. With queries you can list the work items of interest, and then define a chart that shows either a count of work items or a sum of a numeric field. 


## Supported operators and macros 

Query clauses that specify a numeric field can use the operators listed below.
- = , <> , > , < , >= , <=  
- =[Field], <>[Field], >[Field], <[Field], >=[Field], <=[Field] 
- In, Not In 
- Was Ever

## Tips for developing chart-based queries

- You can only add charts for flat-list queries  
- Chart options reference either query filters or fields displayed through column options
- Save changes you make to your query prior to adding or modifying a chart. 
- To group one or more clauses, select them and then choose the ![Group Query Clause icon](../media/icons/group-clauses-icon.png) group clauses icon. To ungroup, select on the grouped clause. 

For more details on creating queries and chart-based queries, see [Use the query editor to list and manage queries](using-queries.md) and [Charts](../../report/dashboards/charts.md).  If you want to add a custom field to track and generate sums of other numeric values, see [Add or modify a field](../../reference/add-modify-field.md).

### Useful filters 

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


<a id="counts"/>

## Work item count queries and charts

All queries show a count of items when you run the query. Here we define a flat-list query that filters for bugs in any state.  

![Query bugs any state, count of work items summary](media/query-effort-active-bugs-count-summary.png)  

Also, all charts contain a Values selection designed to display a count of work items within the chart. 

### Count of bugs per developer

Create an  active bugs query and modify the column options to show Assigned To and State. Then, add a pivot chart that displays the assignments and state. 

::: moniker range=">= azure-devops-2019"
> [!div class="mx-imgBorder"]  
> ![Configure chart dialog, pivot by assigned to and state](media/numeric/config-pivot-items-developer.png)  
::: moniker-end

::: moniker range="tfs-2018"
<img src="media/query-effort-config-chart-count-bugs-state-pivot-chart.png" alt="Configure chart, count of bugs by developer, area, pivot chart" />  
::: moniker-end

### Count of bugs by state and area 

Using the same flat-list query that filters for bugs shown in the previous section, you can show a count based on area. Modify the column options to show the Area Path. Then, add a pivot chart that displays the state and area path. 

::: moniker range=">= azure-devops-2019"
> [!div class="mx-imgBorder"]  
> ![Configure chart dialog, pivot by state and area](media/numeric/config-pivot-state-area.png)  
::: moniker-end

::: moniker range="tfs-2018"
![Configure chart, count of bugs by area, state, pivot chart](media/query-effort-config-chart-count-bugs-area-state-pivot-chart.png)
::: moniker-end


<a id="undefined-value"/>

## Undefined field value queries

You can find work items that have an undefined field value by using the equals operator (=) and leaving the Value for the field blank. For example, the following filters will list all work items of type User Stories whose Story Points field is blank.  

> [!div class="mx-imgBorder"]  
> ![Filter based on blank entries](media/numeric/field-value-blank.png)

To list work items based on a field that isn't blank, use the not operator (<>) and leave the Value blank.


<a id="effort"/>

## Effort or story point queries and charts  

You can assign Story Points to user stories or bugs when you work in an Agile process. Or, Effort to product backlog items and bugs when you work in a Scrum process. For more information, see [Basic](../get-started/plan-track-work.md), [Agile](../work-items/guidance/agile-process.md), [Scrum](../work-items/guidance/scrum-process.md), or [CMMI](../work-items/guidance/cmmi-process.md) work item types and workflow articles.  

### Sum of story points and their status   

Create a query that filters for User Story as the work item type and modify the column options to show Story Points and State. 

<img src="media/query-effort-sum-story-points-iteration.png" alt="Query editor, flat list, open stories" />

Then, add a stacked bar chart that sums the Story Points. 

::: moniker range=">= azure-devops-2019"
> [!div class="mx-imgBorder"]  
> ![Configure chart dialog, stacked bar, sum of story points](media/numeric/config-psum-story-points-stacked-bar.png)  
::: moniker-end

::: moniker range="tfs-2018"
![Configure chart, sum of story points per iteration, stacked bar chart.](media/query-effort-config-chart-sum-story-points-iteration.png)
::: moniker-end

For information on system-defined cumulative flow diagrams, see [Cumulative flow](../../report/dashboards/cumulative-flow.md).

### Burn up chart of user stories for an iteration 

Create a query that filters for User Story as the work item type and in the Active or Closed state. Modify the column options to show Story Points. 

<img src="media/query-effort-sum-story-points-active-closed.png" alt="Query editor, flat list, user stories - active or closed" />

Then, add a stacked area trend chart that sums the Story Points. 

::: moniker range=">= azure-devops-2019"
> [!div class="mx-imgBorder"]  
> ![Configure chart dialog, trend, sum of story points](media/numeric/config-trend-sum-story-points.png)  
::: moniker-end

::: moniker range="tfs-2018"
![Configure chart, sum of story points per iteration, stacked bar chart](media/query-effort-config-chart-sum-story-points-burnup.png)
::: moniker-end


<a id="work"/>

## Remaining and completed work queries and charts  

Based on the process your project references, you can assign the following fields to tasks or bugs. 

| Process | Available fields   |
|---------|---------|---------|
| Agile | Original Estimate, Remaining Work, Completed Work  |
| Scrum | Remaining Work |
| CMMI  | Original Estimate, Remaining Work, Completed Work  |


### Sum of remaining work per developer 

If you follow Scrum practices and estimate Remaining Work for your tasks and bugs, you can get a rollup of the amount of work remaining for each developer with the following query and chart. By using the In operator and including both Task and Bug, you include any bugs that are being tracked as tasks. 

<img src="media/query-effort-tasks-bugs-list.png" alt="Query of tasks and bugs for sprint" />  

Add Remaining Work as a column option to the query and save. To view a sum of the remaining work, add a pivot chart as shown. 

::: moniker range=">= azure-devops-2019"
> [!div class="mx-imgBorder"]  
> ![Configure chart dialog, pivot, sum of remaining work per developer](media/numeric/config-pivot-remaining-work-per-developer-area.png)  
::: moniker-end

::: moniker range="tfs-2018"
![Configure chart, sum of remaining work by developer, area, pivot chart](media/example-query-config-chart-sum-remaining-work-pivot-chart.png)
::: moniker-end

For information on system-defined sprint burndown charts, see [Sprint burndown](../../report/dashboards/configure-sprint-burndown.md).


<a id="fields" />

## Fields used to estimate and track work

The following table describes the activity-based and numeric fields that you can use to track work. For information on date-related fields, such as Start Date, Finish Date, and Target Date, see [Query by date or current iteration](query-by-date-or-current-iteration.md).  


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
   The type of activity that is required to complete a task.To learn more about how this field is used, see [Capacity planning](../sprints/set-capacity.md). Allowed values are:
   - Deployment
   - Design
   - Development
   - Documentation
   - Requirements
   - Testing


   The Activity field is assigned to `Activity` in the ProcessConfiguration file.<sup>3</sup>

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
   A subjective unit of measure that captures the relative business value of a product backlog item or feature compared to other items of the same type. An item that is assigned a higher number should be considered as having more business value than an item that is assigned a lower number.

   Reference name=Microsoft.VSTS.Common.BusinessValue, Data type=Integer
  
   :::column-end:::
   :::column span="1":::
   Epic, Feature
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   <a id="completed-work" />Completed Work

   :::column-end:::
   :::column span="2":::
   The amount of work that has been spent implementing a task. You can specify work in hours or in days. There are no inherent time units associated with this field.

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
   The type of activity or discipline that is assigned to a task. To learn more about how this field is used, see [Capacity planning](../sprints/set-capacity.md). Allowed values are:
   - Analysis
   - Development
   - Test
   - User Education
   - User Experience

   The Discipline field is assigned to `Activity` in the ProcessConfiguration file.<sup>3</sup>

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
   A subjective unit of measure that captures the size of a bug or product backlog item. If you assign more effort to an item, you indicate that more work is required to implement it.  

   This field <sup>3</sup> is also used to calculate team velocity and forecasting. It's assigned to `Effort` in the ProcessConfiguration file.

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
   A subjective unit of measure that captures the size of a user story. If you assign more points to a user story, you indicate that more work is required to implement it.

   This field <sup>3</sup> is also used to calculate team velocity and forecasting. It's assigned to `Effort` in the ProcessConfiguration file. 

   Reference name=Microsoft.VSTS. Scheduling.StoryPoints, Data type=Double

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
   A subjective unit of measure that captures the size of a requirement. The larger the size, the more work is required to implement it.  

   This field<sup>3</sup>  is also used to calculate team velocity and forecasting. It's assigned to `Effort` in the ProcessConfiguration file. 

   Reference name=Microsoft.VSTS. Scheduling.Size, Data type=Double

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
   The amount of work required to complete a task. You can specify work in hours or in days. There are no inherent time units associated with this field. 

   Reference name=Microsoft.VSTS.Scheduling.OriginalEstimate, Data type=Double

   :::column-end:::
   :::column span="1":::
   Task, Bug <sup>4</sup> (Agile and CMMI)
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   <a id="remaining-work" />Remaining Work
   :::column-end:::
   :::column span="2":::
   The amount of work that remains to finish a task. You can specify work in hours or in days. There are no inherent time units associated with this field.
   This field <sup>3</sup> is also used to calculate burn down. It is assigned to `type="RemainingWork"` in the ProcessConfiguration file.
   > [!NOTE]
   > For Azure Boards, the taskboard always shows &quot;h&quot; for hours in relationship to Remaining Work. For TFS, you can modify the ProcessConfiguration file for the Remaining Work type field to specify &quot;d&quot; for days, or other preferred label. 

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
   Indicates the task requires review. You can specify **Yes** or **No** (default).

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
   Indicates the task requires a test. You can specify **Yes** or **No** (default).

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
   Specifies the kind of task to implement. Allowed values are:
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
> 1. To change the menu selection: for cloud services or an Inherited process, see [Add and manage fields](../../organizations/settings/work/customize-process-field.md); and for On-premises XML process, see [Add or modify a field, customize a picklist](../../reference/add-modify-field.md).  
> 2. The values displayed in the [Capacity page](../sprints/set-capacity.md) for **Activity** (Agile or Scrum) or **Discipline** (CMMI) reflect a union of all values defined for the field in all projects within the project collection instance. Therefore, to restrict the values that appear for Capacity on the sprint backlog pages, you must make the values match in all the projects for the field assigned to `type="Activity"`.  
> 3. To change the ProcessConfiguration field assignment (on-premises only), see [Process configuration XML   element reference](../../reference/xml/process-configuration-xml-element.md).
> 4. Each team can configure their Agile tools to determine if [bugs are treated similar to requirements or tasks](#show-bugs). Since bugs can appear either with requirements or tasks, fields used to estimate effort at the requirement-level and the task-level are included in the work item form. 

## Related articles 

For information on adding custom fields, see [Customize your work tracking experience](../../reference/customize-work.md).  

The main tools you use to plan and track work are described here: 
- [Create your backlog](../backlogs/create-your-backlog.md)
- [Sprint planning](../sprints/assign-work-sprint.md)
- [Capacity planning](../sprints/set-capacity.md)
- [Taskboard](../sprints/task-board.md)
- [Kanban board](../boards/kanban-basics.md)

For more information on using work items and queries, see: 
- [Query editor](using-queries.md)   
- [Query fields, operators, and macros](query-operators-variables.md)   
- [Add work items](../backlogs/add-work-items.md)  
- [Work item field index](../work-items/guidance/work-item-field.md) 
- [About managed queries](about-managed-queries.md)  

<a id="show-bugs"/>

<a id="rollup"/>

### Rollup numeric values across work item types  

Rollup provides summed values of select fields for all child work items of a parent. Natively, Azure Boards provides rollup of **Remaining Work** for tasks on the taskboard. For other rollup requirements, see the following articles:  
- [Support rollup of work and other fields](../../reference/xml/support-rollup-of-work-and-other-fields.md)  
- [Create rollup charts with Power BI](../../report/powerbi/data-connector-connect.md)  

<a id="category"/>

### What items appear in the Requirement or Task categories? 

The default assignments of work item types to each category are listed below for each process.  

| Process | Requirement category | Task category |
|---------|---------|---------|
| Agile | User Story | Task |
| Scrum | Product Backlog Item | Task |
| CMMI | Requirement | Task |

However, each team can determine if the Bug work item type appears in either the Requirement or Task category. See [Show bugs on backlogs and boards](../../organizations/settings/show-bugs-on-backlog.md). 

You can add custom work item types to a backlog. For details, see [Add or modify a work item type, Add a custom WIT to a backlog or board](../../reference/add-modify-wit.md). 

[!INCLUDE [temp](../includes/rest-apis-queries.md)]