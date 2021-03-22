---
ms.technology: devops-agile
ms.author: kaelli
author: KathrynEE
ms.topic: include
ms.date: 01/14/2021
---


### Supported macros 

The following table summarizes the query macros or variables supported by the Azure DevOps versions. You can use some of these macros to filter notifications. 

> [!NOTE]  
> You can use certain macros from the web portal only. Tfese include the **@CurrentIteration**, **@CurrentIteration +/- n**, **@Follows**, **@MyRecentActivity**, **@RecentMentions**, **@RecentProjectActivity**, and **@TeamAreas** macros. These macros aren't supported when exporting a query to Excel, notification filters, or exercised from Team Explorer, or REST APIs. 

For more detailed descriptions and links to examples, see [Query fields, operators, and macros](../queries/query-operators-variables.md). 


---
:::row:::
   :::column span="1":::
      **Macro** 
   :::column-end:::
   :::column span="1":::
      **Query support**
   :::column-end:::
   :::column span="1":::
     **Supported versions**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [[Any]](../queries/titles-ids-descriptions.md)
   :::column-end:::
   :::column span="1":::
      Find any work item type, `Work Item Type=[Any]`, or any State, `State=[Any]`.
   :::column-end:::
   :::column span="1":::
      All versions 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [@Me](../queries/query-by-workflow-changes.md)
   :::column-end:::
   :::column span="1":::
      Find work where `Identity field=logged in user`.
   :::column-end:::
   :::column span="1":::
      All versions 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [@Today](../queries/query-by-date-or-current-iteration.md) 
   :::column-end:::
   :::column span="1":::
      Find work where `Date-Time field=today`.
   :::column-end:::
   :::column span="1":::
      All versions  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [@Project](../queries/using-queries.md#across-projects)  
   :::column-end:::
   :::column span="1":::
      Find work defined in one or more projects. 
   :::column-end:::
   :::column span="1":::
      TFS 2015-TFS 2018, Azure DevOps 2019-2020, Azure DevOps Services  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [@CurrentIteration](../queries/query-by-date-or-current-iteration.md)   
   :::column-end:::
   :::column span="1":::
      Find work defined in current iteration for a team.
   :::column-end:::
   :::column span="1":::
      All versions  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [@CurrentIteration +/-n](../queries/query-by-date-or-current-iteration.md)   
   :::column-end:::
   :::column span="1":::
      Find work defined in +/- n of current iteration for a team.
   :::column-end:::
   :::column span="1":::
      Azure DevOps 2019-2020, Azure DevOps Services  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [@Follows](../queries/titles-ids-descriptions.md#following)
   :::column-end:::
   :::column span="1":::
      Find work current logged in user is following, `ID In @Follows`.
   :::column-end:::
   :::column span="1":::
      TFS 2017-TFS 2018, Azure DevOps 2019-2020, Azure DevOps Services  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [@MyRecentActivity, @RecentMentions, @RecentProjectActivity](../queries/titles-ids-descriptions.md#recent-macros)
   :::column-end:::
   :::column span="4":::
      Find work items recently changed, `ID In @MyRecentActivity`
      See also [View and add work items, Work Items page](../work-items/view-add-work-items.md).
   :::column-end:::
   :::column span="1":::
      TFS 2018, Azure DevOps 2019-2020, Azure DevOps Services  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [@StartOfDay, @StartOfMonth, @StartOfWeek, @StartOfYear](../queries/query-by-date-or-current-iteration.md)   
   :::column-end:::
   :::column span="1":::
      Find work where the selected date-time field is within the current day, month, week, or year with a plus/minus offset, example: `Closed Date>=@StartOfDay-7`.
   :::column-end:::
   :::column span="1":::
      Azure DevOps 2019-2020, Azure DevOps Services  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [@TeamAreas](../queries/query-by-area-iteration-path.md)
   :::column-end:::
   :::column span="1":::
      Find work assigned to an Area Path or Iteration Path of specified team, for examples, see [Query by area or iteration path](../queries/query-by-area-iteration-path.md). 
   :::column-end:::
   :::column span="1":::
      Azure DevOps 2019-2020, Azure DevOps Services  
   :::column-end:::
:::row-end:::
---