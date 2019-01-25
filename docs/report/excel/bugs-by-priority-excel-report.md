---
title: Bugs by Priority Excel Report 
description: Shows the distribution of active Bugs, grouped by priority - Team Foundation Server 
titleSuffix: TFS
ms.prod: devops
ms.technology: devops-analytics
ms.topic: reference
ms.assetid: c1ba2ff0-b4f5-4ddb-88ce-f3358161b877
ms.author: kaelliauthor: KathrynEE
ms.manager: jillfra
ms.date: 12/30/2016
---


# Bugs by Priority Excel Report

[!INCLUDE [temp](../_shared/tfs-sharepoint-version.md)]


The Bugs by Priority report in Office Excel shows the distribution of active Bugs, grouped by priority. For information about how to access this report, see [Excel reports](excel-reports.md).  
  
> [!NOTE]
>  You can view the Bugs by Priority report from the Bugs dashboard. You can access this dashboard only if your team project portal has been enabled and is provisioned to use Microsoft Office SharePoint Server 2007. For more information, see [Configure or redirect process guidance](../sharepoint-dashboards/configure-or-redirect-process-guidance.md).  
  
##  <a name="Data"></a> Data in the Report  
 You can use the Bugs by Priority report to understand the distribution of active Bugs by priority. As the following illustration shows, this report is based on a PivotChart report that shows the last four weeks of the data captured for Bugs. This data is stored in the data warehouse.  
  
 ![Bugs by priority chart](_img/procguid_bypriority.png "ProcGuid_ByPriority")  
  
 You can review the Bugs by Priority report to determine the overall distribution of Bugs by priority. Specifically, you can find answers to the following questions:  
  
-   How many priority 1, 2, and 3 Bugs are active?  
  
-   Is the team resolving priority 1 Bugs before resolving priority 2 and 3 Bugs?  
  
### Required Activities for Tracking Bugs  
 For the Bugs by Priority report to be useful and accurate, the team must perform the following activities:  
  
-   Define Bugs, and specify their **Iteration** and **Area** paths.  
  
    > [!NOTE]
    >  For information about how to define area and iteration paths, see [Define area paths](../../organizations/settings/set-area-paths.md) or [Define iteration paths](../../organizations/settings/set-iteration-paths-sprints.md) .  
  
-   Specify the **Priority** of each Bug.  
  
-   Update the **State** of each Bug as the team fixes, verifies, and closes it.  
  
##  <a name="Updating"></a> Customizing the Report  
 You can customize the Bugs by Priority report by opening it in Office Excel and changing the filter options or a column field list for the PivotTable report. You can customize this report to support other views, as the following table describes.  
  
|View|Action|  
|----------|------------|  
|Distribution of Bugs for an iteration|Change the filter for **Iteration** (default=All)|  
|Distribution of Bugs for a product area|Change the filter for **Area** (default=All)|  
|Distribution of Bugs by severity|In the Columns PivotTable Field List, replace **Priority** with **Severity**|  
|Distribution of Bugs for the last six, eight, or more weeks|In the Columns PivotTable Field List, replace **@@Last 4 weeks@@** with a different **Set**|  
|Distribution of resolved or closed Bugs|Change the filter for **State** to resolved or closed (default=Active)|  
  
 For more information about how to work with and customize PivotTable and PivotChart reports, see the following pages on the Microsoft Web site:  
  
-   [Ways to Customize Excel Reports](http://go.microsoft.com/fwlink/?LinkId=165722)  
  
-   [Edit or remove a workbook from Excel Services](http://go.microsoft.com/fwlink/?LinkId=165723)  
  
-   [Publish a workbook to Excel Services](http://go.microsoft.com/fwlink/?LinkId=165724)  
  
-   [Save a file to a SharePoint library or another Web location](http://go.microsoft.com/fwlink/?LinkId=165725)  
  
## Related notes  
 [Excel reports](excel-reports.md)