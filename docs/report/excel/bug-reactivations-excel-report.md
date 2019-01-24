---
title: Bug Reactivations Excel Report  
description: Use the Bug Reactivations report to determine how effectively the team is fixing bugs - Team Foundation Server  
titleSuffix: TFS
ms.prod: devops
ms.technology: devops-analytics
ms.topic: reference
ms.assetid: c26a24cc-5710-425d-8fc4-77e35442e743
ms.author: kaelliauthor: KathrynEE
ms.manager: jillfra
ms.date: 12/30/2016
---

# Bug Reactivations Excel Report

[!INCLUDE [temp](../_shared/tfs-sharepoint-version.md)]

You can use the Bug Reactivations report to determine how effectively the team is fixing bugs. This report shows the cumulative count of Bugs that the team has reactivated and Bugs that the team has since resolved, for the most recent four weeks. The reactivation rate is also referred to as the fault feedback ratio.  
  
 For information about how to access this chart, see [Excel reports](excel-reports.md).  
  
> [!NOTE]
>  You can view the Bug Reactivations report from the Quality dashboard. You can access this dashboard only if your team project portal has been enabled and is provisioned to use Microsoft Office SharePoint Server 2007. For more information, see [Configure or redirect process guidance](../sharepoint-dashboards/configure-or-redirect-process-guidance.md).  
  
 **Required Permissions**  
  
 To view the report, you must be assigned or belong to a group that has been assigned the **Read** permissions in SharePoint Products for the team project.  
  
 To modify or customize the report, you must be a member of the **TfsWarehouseDataReaders** security role in SQL Server Analysis Services. You must also be assigned or belong to a group that has been assigned the **Members** permissions in SharePoint Products for the team project. For more information, see [Grant Access to the Databases of the Data Warehouse for Team System](../admin/grant-permissions-to-reports.md).  
  
##  <a name="Data"></a> Data in the Report  
 The Bug Reactivations report shows an area graph of the number of Bugs that the team has reactivated (**Reactivated and Still Active**) from a resolved or closed state and Bugs that the team has **Resolved**.  
  
 ![Bug Reactivations Excel Report](_img/procguid_agileexr.png "ProcGuid_AgileExR")  
  
 This report is based on a PivotChart report that shows the most recent four weeks of data that was captured for Bugs and that is stored in the data warehouse.  
  
### Required Activities for Tracking Bugs  
 For the Bug Reactivations report to be useful and accurate, the team must perform the following activities:  
  
-   Define Bugs.  
  
    > [!NOTE]
    >  For information about how to define area and iteration paths, see [Define area paths](../../organizations/settings/set-area-paths.md) or [Define iteration paths](../../organizations/settings/set-iteration-paths-sprints.md) .  
  
-   Update the **State** of each Bug as the team fixes, verifies, closes, or reactivates it.  
  
-   (Optional) Specify the **Iteration** and **Area** paths of each Bug if you want to filter by those fields.  
  
##  <a name="Interpreting"></a> Interpreting the Report  
 You should expect the Bug Reactivations report to vary based on where you are in your product development cycle. Early iterations should show very few reactivations. As the team closes Bugs, you will want to review the rate of reactivations.  
  
 The Reactivations report displays information that you can use to detect whether the team is reactivating a high number of Bugs or User Stories. The reactivation rate counts the number of supposedly fixed Bugs whose fixes do not work. These reactivations can create a harmful cycle of rework that interferes with making progress on planned tasks.  
  
 You can review the report to answer these questions:  
  
-   How many Bugs have been reactivated in the past four weeks?  
  
-   Is the team resolving and closing reactivated Bugs quickly enough?  
  
 For information about healthy and unhealthy versions of the report, see [Reactivations](../sql-reports/reactivations-report.md).  
  
##  <a name="Updating"></a> Updating and Customizing the Report  
 You can update the Bug Reactivations report by opening it in Office Excel and changing the filter options for the PivotTable report. You can customize this report to support other views as the following table describes.  
  
|View|Action|  
|----------|------------|  
|Reactivation of Bugs for an iteration|Change the filter for **Iteration** (default=All)|  
|Reactivation of Bugs for a product area|Change the filter for **Area** (default=All)|  
|Reactivation of Bugs for the last six, eight, or more weeks|In the Columns PivotTable Field List, replace **@@Last 4 weeks@@** with a different **Set**|  
  
 For more information about how to work with and customize PivotTables and PivotChart reports, see the following pages on the Microsoft Web site:  
  
-   [Ways to customize PivotTable reports](http://go.microsoft.com/fwlink/?LinkId=165722)  
  
-   [Edit or remove a workbook from Excel Services](http://go.microsoft.com/fwlink/?LinkId=165723)  
  
-   [Publish a workbook to Excel Services](http://go.microsoft.com/fwlink/?LinkId=165724)  
  
-   [Save a file to a SharePoint library or another Web location](http://go.microsoft.com/fwlink/?LinkId=165725)  
  
## Related notes  
 [Excel reports](excel-reports.md)