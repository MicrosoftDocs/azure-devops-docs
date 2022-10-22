---
title: Filtering on historical data from Analytics
titleSuffix: Azure DevOps
description: Learn how filters are applied to historical Analytics data for work tracking.
ms.subservice: azure-devops-analytics
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
monikerRange: '>= azure-devops-2019'
ms.date: 05/25/2022
---


# Applying filters to historical data

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]. 

This article explains how filters are applied to historical revisions of the work item. It's especially relevant when reporting on trends. For example, tracking over time the number of Active Bugs or the number of Features with the tag "Customer". 

Both [Analytics Views](./what-are-analytics-views.md) and the [Burndown and Burnup widgets](../dashboards/configure-burndown-burnup-widgets.md) let you configure filters that scope the data set to your needs. Filters can scope the data to specific teams, work item types, or backlogs. Filters may also include the ability to filter on any field and a corresponding value. For example, you could filter work items to "Bugs" belonging to team "Admirals" that have the tag "Customer".

## How filters are applied to historical data

Filters are applied to each revision of a work item. For example, let's say we have a work item that has the following revisions:

|Rev #|Revision Date|ID|Title|State|Area Path|Tags|
|---|---|---|---|---|---|---|
|1|Jan-01|1001|A bug|New|||
|2|Jan-02|1001|A bug|New|/Admirals||
|3|Jan-10|1001|A bug|Active|/Admirals||
|4|Jan-12|1001|A bug|Active|/Admirals|Customer|
|5|Jan-20|1001|A bug|Resolved|/Admirals|Customer|
|6 (Current)|Jan-28|1001|A bug|Closed|/Admirals|Customer|

The latest revision (#6) is the Current revision of the work item. In Analytics Views, if you selected "Current only" in the History tab, you would get one row of data for this work item, the current row.

When reporting on history, we could potentially be pulling in revisions 1 through 6 for reporting. 

Let's say, when creating an Analytics View or configuring the Burndown widget, you set these two filters:

* Area Path = /Admirals
* Tags contains Customer

Applying these filters to the set of work item revisions yields the following matches:

|Match?|Rev #|Revision Date|ID|Title|State|Area Path|Tags|
|---|---|---|---|---|---|---|---|
|![Not matched icon.](./media/icons/table-no.png)|1|Jan-01|1001|A bug|New|||
|![Not matched icon.](./media/icons/table-no.png)|2|Jan-02|1001|A bug|New|/Admirals||
|![Not matched icon.](./media/icons/table-no.png)|3|Jan-10|1001|A bug|Active|/Admirals||
|![Matched icon.](./media/icons/table-yes.png)|4|Jan-12|1001|A bug|Active|/Admirals|Customer|
|![Matched icon.](./media/icons/table-yes.png)|5|Jan-20|1001|A bug|Resolved|/Admirals|Customer|
|![Matched icon.](./media/icons/table-yes.png)|6 (Current)|Jan-28|1001|A bug|Closed|/Admirals|Customer|

Revisions 1, 2 and 3 don't match, because those revisions didn't match the filters. The above work item wouldn't appear in your data set or your trend chart until revision 4, or Jan-12. 

Let's say you wanted to report on your trend of Active bugs, you'd create a filter of State = Active. Those filters would match the following revisions:

|Match?|Rev #|Changed Date|ID|Title|State|Area Path|Tags|
|---|---|---|---|---|---|---|---|
|![Not matched icon.](./media/icons/table-no.png)|1|Jan-01|1001|A bug|New|||
|![Not matched icon.](./media/icons/table-no.png)|2|Jan-02|1001|A bug|New|/Admirals||
|![Matched icon.](./media/icons/table-yes.png)|3|Jan-10|1001|A bug|Active|/Admirals||
|![Matched icon.](./media/icons/table-yes.png)|4|Jan-12|1001|A bug|Active|/Admirals|Customer|
|![Not matched icon.](./media/icons/table-no.png)|5|Jan-20|1001|A bug|Resolved|/Admirals|Customer|
|![Not matched icon.](./media/icons/table-no.png)|6 (Current)|Jan-28|1001|A bug|Closed|/Admirals|Customer|

The filters would only match revision 3 and 4 of the work item, and would only include the Jan-10 and Jan-12 revisions in your trend chart.

## What does this mean for Burndown?
When you configure a Burndown (or Burnup) widget that filters for a given Tag (for example, "Customer"), work items won't appear in your burndown until the date the work item has the Tag. If at any point, the Tag is removed from the work item, that work item will be omitted from the burndown after the date the Tag was removed. 

Some have assumed that if the current version of a work item has the Tag, then it will be included in the burndown retroactively from the start. For example, if the current version of the work item has the tag "Customer", it was assumed that work item would be included in the burndown from the point the work item was created.

It isn't how historical filtering works. If filters were only applied based on the current version of a work item, then trend charts wouldn't work. You can't remove an item from your burndown by removing a Tag, or by setting the Area Path to another team's area path. 

> [!NOTE] 
> We are considering adding a "was ever" operand to the filter criteria in Analytics Views and widgets such as Burndown/Burnup. This feature would allow you to create a filter like: "State **was ever** Active". This would mean a work item revision would match the filter criteria if any revision of the work item ever had State = Active. If you believe this feature is important, you can [vote for it on our Developer Community site](https://developercommunity.visualstudio.com/idea/366009/support-was-ever-filter-in-analytics-views-burndow.html). 

## Conclusion

To restate, when reporting on historical data, all filters are applied to the work item's version as-of the historical point in time. Work items will appear in your trend when they meet the filter criteria. They'll disappear from your trend when they no longer meet the filter criteria.  


## Related articles

- [Entities and properties reference for Azure Boards](../analytics/entity-reference-boards.md)
- [Data model for Analytics](../extend-analytics/data-model-analytics-service.md)
