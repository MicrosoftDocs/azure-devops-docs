---
title: Bug Progress Excel Report  
description: Tracks the team's progress toward resolving Bugs - Team Foundation Server 
titleSuffix: TFS
ms.prod: devops
ms.technology: devops-analytics
ms.topic: reference
ms.assetid: 471fb90b-9815-4d26-aa01-7ee293682717
ms.author: kaelliauthor: KathrynEE
ms.manager: jillfra
ms.date: 12/30/2016
---

# Bug Progress Excel report

[!INCLUDE [temp](../_shared/tfs-sharepoint-version.md)]


You can use the Bug Progress report in Office Excel to track the team's progress toward resolving Bugs. This report shows the number of Bugs in each state over time. For information about how to access this report, see [Excel reports](excel-reports.md).  
  
> [!NOTE]
>  You can view the Bugs Progress report from the Bugs dashboard. You can access this dashboard only if your team project portal has been enabled and is provisioned to use Microsoft Office SharePoint Server 2007. For more information, see [Configure or redirect process guidance](../sharepoint-dashboards/configure-or-redirect-process-guidance.md).
  
<a name="Data"></a> 

## Data in the report  

 You can use the Bug Progress report to understand how well the team is finding, fixing, and closing Bugs. This report is based on a PivotChart report that shows the last four weeks of data captured for bugs. The data is stored in the data warehouse.  
  
 ![Bug Progress Excel Report](_img/procguid_excelbug.png "ProcGuid_ExcelBug")  
  
### Required activities for tracking bugs  

For the Bug Progress chart to be useful and accurate, the team must perform the following activities:  
  
-   Define Bugs, and specify their **Iteration** and **Area** paths.  
  
    > [!NOTE]
    >  For information about how to define area and iteration paths, see [Define area paths](../../organizations/settings/set-area-paths.md) or [Define iteration paths](../../organizations/settings/set-iteration-paths-sprints.md) .  
  
-   Specify the **Priority** of each Bug.  
-   Update the **State** of each Bug as the team fixes, verifies, and closes it.  
  
<a name="Interpreting"></a> 

## Interpret the report  

You should expect the Bug Progress report to vary based on where you are in your product development cycle. Early iterations should show a gradual increase in the active number of Bugs. Iterations that are close to the end of a product cycle should show a wide band of resolved and closed Bugs.  
  
 You can review the chart to determine the progress over time or within an iteration. Specifically, you can find answers to the following questions:  
  
- How quickly is the team resolving and closing Bugs?  
- Is the team fixing Bugs quickly enough to finish on time?  
- Did the team find any Bugs in the past several weeks?  

For information about healthy and unhealthy versions of the report, see [Bug Status](../sql-reports/bug-status-report.md).  
  
<a name="Updating"></a> 

## Customize the report  
 You can customize the Bug Progress report by opening it in Office Excel and changing the filter options for the PivotTable report. You can customize this report to support other views as the following table describes.  
  
|View|Action|  
|----------|------------|  
|Burndown of Bugs for an iteration|Change the filter for **Iteration** (default=All)|  
|Burndown of Bugs for a product area|Change the filter for **Area** (default=All)|  
|Burndown of Bugs for the last six, eight, or more weeks|In the Columns PivotTable Field List, replace **@@Last 4 weeks@@** with a different **Set**|  
  

## Related articles

- [Excel reports](excel-reports.md)
- [Design the layout and format of a PivotTable](https://support.office.com/article/design-the-layout-and-format-of-a-pivottable-a9600265-95bf-4900-868e-641133c05a80)  