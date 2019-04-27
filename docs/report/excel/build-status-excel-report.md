---
title: Build Status Excel Report  
description: Helps track the progress of builds by showing the number of builds that failed or succeeded - Team Foundation Server 
titleSuffix: TFS
ms.prod: devops
ms.technology: devops-analytics
ms.topic: reference
ms.assetid: ada4926d-5e2b-4a17-b651-60684e4d72cd
ms.author: kaelli
author: KathrynEE
ms.manager: jillfra
monikerRange: '<= tfs-2017'
ms.date: 12/30/2016
---
# Build Status Excel Report

[!INCLUDE [temp](../_shared/tfs-sharepoint-version.md)]


The Build Status report helps the team track the progress of their builds by showing the number of builds that failed or succeeded for the most recent four weeks.  
  

> [!IMPORTANT]  
> This report is only applicable for XAML builds, which are deprecated for TFS 2018 and later versions. If your build process isn't based on XAML builds, this report and the TFS Warehouse for builds won't yield any meaningful data.  


 For information about how to access this report, see [Excel reports](excel-reports.md).  
  
> [!NOTE]
>  You can view the Build Status report from the Quality dashboard. You can access this dashboard only if your team project portal has been enabled and is provisioned to use Microsoft Office SharePoint Server 2007. For more information, see [Configure or redirect process guidance](../sharepoint-dashboards/configure-or-redirect-process-guidance.md).  
  
 **Required Permissions**  
  
 To view the report, you must be assigned or belong to a group that has been assigned the **Read** permissions in SharePoint Products for the team project.  
  
 To modify or customize the report, you must be a member of the **TfsWarehouseDataReaders** security role in SQL Server Analysis Services. You must also be assigned or belong to a group that has been assigned the **Members** permissions in SharePoint Products for the team project. For more information, see [Grant Access to the Databases of the Data Warehouse for Team System](../admin/grant-permissions-to-reports.md).  
  
##  <a name="Data"></a> Data in the Report  
 The team can review the Build Status report to help determine the trend of build health over time and whether any builds need attention today. As the following illustration shows, the report provides a stacked column of the number of builds that were run with an outcome of failed, passed, or unknown during the most recent two weeks.  
  
 ![Build Status report](_img/procguid_agileexcel.png "ProcGuid_AgileExcel")  
  
 The chart is based on a PivotTable from data that is stored in the Analysis Services database.  
  
### Required Activities for Tracking Build Status  
 For the Build Status report to be useful and accurate, the team must perform the following activities:  
  
-   **Configure a build system**. To use Team Foundation Build, you must set up a build system.  
  
     For more information, see [Build and Release agents](../../pipelines/agents/agents.md).
  
-   **Create build pipelines**. You can create several build pipelines and then run each of them to produce code for a different platform. Also, you can run each build pipeline for a different configuration.  
  
     For more information, see [Get started with CI/CD](../../pipelines/get-started-designer.md).
  
-   **Run builds regularly**. You can run builds at set intervals or after every check-in. You can create regular builds when you use the schedule trigger.  
  
     For more information, see [Build triggers](../../pipelines/build/triggers.md).
  
    > [!NOTE]
    >  Although a team member can manually rate a build by using Build Explorer, this rating is not reflected in the Build Quality Indicators report. The build rating appears in the Build Summary report. For more information, see [Rate the quality of a completed build](https://msdn.microsoft.com/library/ms181734.aspx) and [Build Summary](../sql-reports/build-summary-report.md).  
  
##  <a name="Interpreting"></a> Interpreting the Report  
 You can use the Builds Status report to gain insight into the following questions:  
  
-   How is my team's build health changing over time?  
  
-   Do any builds need attention today?  
  
##  <a name="Updating"></a> Customizing the Report  
 You can customize the Builds Status report by opening it in Office Excel and changing the filter options or a column field list for the PivotTable report. You can modify the report to support other views, as the following table describes.  
  
|View|Action|  
|----------|------------|  
|Build results for an iteration|Change the filter for **WorkItem.Iteration** (default=All)|  
|Build results for a product area|Change the filter for **WorkItem.Area** (default=All)|  
|Build results for the most recent six, eight, or more weeks|In the Columns PivotTable Field List, replace **@@Last 4 weeks@@** with a different **Set**|  
  
 For more information about how to work with and customize PivotTable and PivotChart reports, see the following pages on the Microsoft Web site:  
  
-   [Ways to customize PivotTable reports](http://go.microsoft.com/fwlink/?LinkId=165722)  
  
-   [Edit or remove a workbook from Excel Services](http://go.microsoft.com/fwlink/?LinkId=165723)  
  
-   [Publish a workbook to Excel Services](http://go.microsoft.com/fwlink/?LinkId=165724)  
  
-   [Save a file to a SharePoint library or another Web location](http://go.microsoft.com/fwlink/?LinkId=165725)  
  
## Related notes 
 [Excel reports](excel-reports.md)