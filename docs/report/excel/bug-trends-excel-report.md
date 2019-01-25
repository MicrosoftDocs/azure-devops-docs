---
title: Bug Trends Excel Report  
description: Track the rate at which the team is discovering, resolving, and closing Bugs - Team Foundation Server  
titleSuffix: TFS
ms.prod: devops
ms.technology: devops-analytics
ms.topic: reference
ms.assetid: fedaecea-cedb-467b-b8f4-03f63420f7b3
ms.author: kaelliauthor: KathrynEE
ms.manager: jillfra
ms.date: 12/30/2016
---

# Bug Trends Excel Report

[!INCLUDE [temp](../_shared/tfs-sharepoint-version.md)]

You can use the Bug Trends report in Office Excel to track the rate at which the team is discovering, resolving, and closing Bugs. This report shows a moving average of Bugs that the team has discovered and resolved over time. For information about how to access this report, see [Excel reports](excel-reports.md).  
  
> [!NOTE]
>  You can view the Bugs Trends report from the Bugs dashboard. You can access this dashboard only if your team project portal has been enabled and is provisioned to use Microsoft Office SharePoint Server 2007. For more information, see [Configure or redirect process guidance](../sharepoint-dashboards/configure-or-redirect-process-guidance.md).  
  
##  <a name="Data"></a> Data in the Report  
 You can use the Bug Trends report to understand the rate at which the team is finding, fixing, and closing Bugs. This report is based on a PivotChart report that shows the last four weeks of data captured for Bugs. That data is stored in the data warehouse.  
  
 ![Bug Trends report](_img/procguid_bugtrends.png "ProcGuid_BugTrends")  
  
 You should expect the Bug Trends report to vary based on where you are in your product development cycle. Early iterations should exhibit a gradual increase in the rate at which the team discovers bugs.  
  
 For information about healthy and unhealthy versions of the report, see [Bug Trends](../sql-reports/bug-trends-report.md).  
  
### Required Activities for Tracking Bugs  
 For the Bug Trends report to be useful and accurate, the team must perform the following activities:  
  
-   Define Bugs, and specify their **Iteration** and **Area** paths.  
  
    > [!NOTE]
    >  For information about how to define area and iteration paths, see [Define area paths](../../organizations/settings/set-area-paths.md) or [Define iteration paths](../../organizations/settings/set-iteration-paths-sprints.md) .  
  
-   Update the **State** of each Bug as it is fixed, verified, and closed.  
  
##  <a name="Updating"></a> Customizing the Report  
 You can customize the Bug Trends report by opening the report in Office Excel and changing the filter options for the PivotTable report. You can customize this report to support other views as the following table describes.  
  
|View|Action|  
|----------|------------|  
|Bug trends for an iteration|Change the filter for **Iteration** (default=All)|  
|Bug trends for a product area|Change the filter for **Area** (default=All)|  
|Bug trends for the last six, eight, or more weeks|In the Columns PivotTable Field List, replace **@@Last 4 weeks@@** with a different **Set**|  
  
 For more information about how to work with and customize PivotTable and PivotChart reports, see the following pages on the Microsoft Web site:  
  
-   [Ways to Customize Excel Reports](http://go.microsoft.com/fwlink/?LinkId=165722)  
  
-   [Edit or remove a workbook from Excel Services](http://go.microsoft.com/fwlink/?LinkId=165723)  
  
-   [Publish a workbook to Excel Services](http://go.microsoft.com/fwlink/?LinkId=165724)  
  
-   [Save a file to a SharePoint library or another Web location](http://go.microsoft.com/fwlink/?LinkId=165725)  
  
## Related notes  
 [Excel reports](excel-reports.md)