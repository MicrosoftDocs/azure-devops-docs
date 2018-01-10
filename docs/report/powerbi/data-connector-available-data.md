---
title: Data available in Power BI | VSTS
description: Learn about what data is available in the Power BI Data Connector for Visual Studio Team Services (VSTS)  
ms.technology: vs-devops-reporting
ms.prod: vs-devops-alm
ms.assetid: 8E92B372-B312-4BAD-960A-B3CB0202E2A1  
ms.manager: douge
ms.author: stansw
ms.date: 03/02/2017
---

#Data model in the Power BI Data Connector for VSTS

<b>VSTS</b>

To connect to the Analytics Services for VSTS from the Power BI Desktop Data Connector, you must download the *Power BI Desktop January 2018 Update* or a newer version. You can download it from the official [Power BI Desktop download page](https://powerbi.microsoft.com/desktop/).

<!--  THIS SHOULD BE INCLUDED IN THE RELEASE NOTES PAGE>
The current release of the Data Connector supports custom fields added to the process references by a team project. 

## Options for work item types

| Work item type option | Description |
|-|-|
| Work Items | Load current or historical state of all Work Items  |
| Bugs | Load current or historical state of Bugs only |

## Options for Historical data

| Historical option | Description |
|-|-|
| Today | Loads only the most recent revision for each work item. |
| Last 30 days | Loads work item history for the last 30 days, on a daily interval.
| Last 26 weeks | Loads work item history for the last 26 weeks, on a weekly interval.
| All history by month | Loads all work item history, on a monthly interval
-->


## How historical data is modelled
Historical data is modelled as a **periodic snapshot fact table**. The fact table contains one row created at midnight for each work item at the end of each period. For example, history on a daily period is modeled as one row at midnight for each day, while a weekly period would be one row at midnight of the last day of the week. 

The grain of this table is the period, not the individual work item. What this means is that **a single Work Item will appear multiple times**, once for each historical period. Selecting the last 30 days of history will result in a single work item appearing 30 times in the data model. If the work item has not changed within the last 30 day's the most recent revision of the work item is replicated on each day.

When working with the data connector we recommend using the <code>Date</code> column or filtering to the most recent instance of the period using the <code>IsCurrent</code>.  For example, if you wanted to show a table of work items and values for the associated fields you would use <code>Is Current</code> as a filter which is set to True, that way you don't see duplicates of each of the work items included in the table.  If you wanted instead to show a trend of work items based on state you would include the Date column on the Axis of the visualization.  

>[!IMPORTANT]  
>Always use the **Date** option when using the Date column.  Date is not intended to support default Hierarchies in Power BI.

![](./_img/data-connector-date.png)

## Related notes  
- [Power BI integration overview](overview.md)
- [Work Item Categories](../../work/customize/reference/use-categories-to-group-work-item-types.md)
- [Work Item Backlogs](../../work/backlogs/backlogs-boards-plans.md)
- [Connect to VSTS with Power BI Data Connector](./data-connector-connect.md)
- [Data Connector - Example reports](./data-connector-examples.md)
- [Functions available in Power BI Data Connector](data-connector-functions.md) 