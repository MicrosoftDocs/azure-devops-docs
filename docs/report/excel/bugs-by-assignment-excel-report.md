---
title: Bugs by Assignment Excel Report  
description: Shows the distribution of active Bugs, grouped by priority, to team members - Team Foundation Server  
titleSuffix: TFS
ms.prod: devops
ms.technology: devops-analytics
ms.topic: reference
ms.assetid: c7851b4c-33a2-4536-85d3-ec73c8e2a8b6
ms.author: kaelliauthor: KathrynEE
ms.manager: jillfra
ms.date: 12/30/2016
---

# Bugs by Assignment Excel Report

[!INCLUDE [temp](../_shared/tfs-sharepoint-version.md)]


The Bugs by Assignment report shows the distribution of active Bugs, grouped by priority, to team members. For information about how to access this chart, see [Excel reports](excel-reports.md).  
  
> [!NOTE]
>  You can view the Bugs by Assignment report from the Bugs Dashboard. You can access this dashboard only if your team project portal has been enabled and is provisioned to use Microsoft Office SharePoint Server 2007. For more information, see [Configure or redirect process guidance](../sharepoint-dashboards/configure-or-redirect-process-guidance.md).  
  
##  <a name="Data"></a> Data in the Report  
 You can use the Bugs by Assignment report to understand the distribution of Bugs to team members and determine whether to reassign some Bugs. This report is based on a PivotChart report that shows the last four weeks of data captured for Bugs. This data is stored in the data warehouse.  
  
 ![Bugs by Assignment chart](_img/procguid_byassignment.png "ProcGuid_ByAssignment")  
  
 You can review the Bugs by Assignment report to determine the allocation of bugs to each team member. Specifically, you can find answers to the following questions:  
  
-   How many bugs are assigned to each team member?  
  
-   Which team member is assigned the most bugs?  
  
-   Which team member is assigned the most high priority bugs?  
  
-   Does any team member have a backlog of priority 1 bugs that warrant redistribution?  
  
### Required Activities for Tracking Bugs  
 For the Bugs by Assignment report to be useful and accurate, the team must perform the following activities:  
  
-   Define Bugs, and specify their **Iteration** and **Area** paths.  
  
    > [!NOTE]
    >  For information about how to define area and iteration paths, see [Define area paths](../../organizations/settings/set-area-paths.md) or [Define iteration paths](../../organizations/settings/set-iteration-paths-sprints.md) .  
  
-   Assign each Bug to the team member who is working to resolve or close it.  
  
-   Specify the **Priority** of each Bug.  
  
-   Update the **State** of each Bug as the team fixes, verifies, and closes it.  
  
##  <a name="Updating"></a> Customizing the Report  
 You can customize the Bugs by Assignment report by opening it in Office Excel and changing the filter options for the PivotTable report. You can customize this report to support other views as the following table describes.  
  
|View|Action|  
|----------|------------|  
|Distribution of Bugs for an iteration|Change the filter for **Iteration** (default=All)|  
|Distribution of Bugs for a product area|Change the filter for **Area** (default=All)|  
|Distribution of Bugs by severity|In the Columns PivotTable Field List, replace **Priority** with **Severity**|  
|Distribution of bugs for the last six, eight, or more weeks|In the Columns PivotTable Field List, replace **@@Last 4 weeks@@** with a different **Set**|  
|Distribution of resolved or closed Bugs to team members|Change the filter for **State** to **Resolved** or **Closed** (default=**Active**)|  
  
 For more information about how to work with and customize PivotTable and PivotChart reports, see the following pages on the Microsoft Web site:  
  
-   [Ways to Customize Excel Reports](http://go.microsoft.com/fwlink/?LinkId=165722)  
  
-   [Edit or remove a workbook from Excel Services](http://go.microsoft.com/fwlink/?LinkId=165723)  
  
-   [Publish a workbook to Excel Services](http://go.microsoft.com/fwlink/?LinkId=165724)  
  
-   [Save a file to a SharePoint library or another Web location](http://go.microsoft.com/fwlink/?LinkId=165725)  
  
## Related notes  
 [Excel reports](excel-reports.md)