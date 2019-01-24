---
title: Requirements Progress Excel Report (CMMI)  
description: Tracks the rate at which the team is implementing requirements.
titleSuffix: TFS
ms.prod: devops
ms.technology: devops-analytics
ms.topic: reference
ms.assetid: 45434ab2-3363-4ebd-89ce-95f438c64424
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.date: 12/30/2016
---

# Requirements Progress Excel Report (CMMI)

[!INCLUDE [temp](../_shared/tfs-sharepoint-version.md)]

You can use the Requirements Excel report to track the rate at which the team is implementing requirements. This report shows the distribution of active, resolved, and closed requirements over time. For information about how to access this report, see [Excel reports](excel-reports.md).  
  
> [!NOTE]
>  You can view the Requirements report from the Burndown dashboard. You can access this dashboard only if your team project portal has been enabled and is provisioned to use Microsoft Office SharePoint Server 2007. For more information, see [Configure or redirect process guidance](../sharepoint-dashboards/configure-or-redirect-process-guidance.md).  
  
 **Required Permissions**  
  
 To view the report, you must be assigned or belong to a group that has been assigned the **Read** permissions in SharePoint Products for the team project.  
  
 To modify or customize the report, you must be a member of the **TfsWarehouseDataReaders** security role in SQL Server Analysis Services. You must also be assigned or belong to a group that has been assigned the **Members** permissions in SharePoint Products for the team project. For more information, see [Grant Access to the Databases of the Data Warehouse for Team System](../admin/grant-permissions-to-reports.md).  
  
##  <a name="Data"></a> Data in the Report  
 You can use the Requirements report to understand how well the team is completing the requirements that it defined for an iteration or release. This report is based on a PivotChart report that shows the last four weeks of data that was captured for requirements and that is stored in the data warehouse.  
  
 ![Requirements Progress report](_img/procguid_reqprogress.png "ProcGuid_ReqProgress")  
  
### Required Activities for Tracking Requirements  
 For the Requirements report to be useful and accurate, the team must perform the following activities:  
  
-   define requirements.  
  
-   Update the **State** of each requirement as it transitions from **Active** to **Resolved** to **Closed**.  
  
-   (optional) Specify the **Iteration** path, **Area** path, or both of each requirement if you want to filter by those fields.  
  
##  <a name="Interpreting"></a> Interpreting the Report  
 You should expect the Requirements report to vary based on where you are in your product development cycle. Early iterations should show a gradual increase in the number of active requirements. Iterations that are near the end of a product cycle should show a wide band of resolved and closed Requirements.  
  
 You can review the chart to determine the team's progress over time or during an iteration. Specifically, you can determine how much progress the team is making toward resolving and closing user stories.  
  
##  <a name="Updating"></a> Updating and Customizing the Report  
 You can update the Requirements report by opening the report in Office Excel and changing the filter options for the PivotTable report. You can customize this report to support other views as the following table describes.  
  
|View|Action|  
|----------|------------|  
|Burndown of requirements for an iteration|Change the filter for **Iteration** (default=All)|  
|Burndown of requirements for a product area|Change the filter for **Area** (default=All)|  
|Burndown of requirements for the last six, eight, or more weeks|In the Columns PivotTable Field List, replace **@@Last 4 weeks@@** with a different **Set**|  
  
 For more information about how to work with and customize PivotTable and PivotChart reports, see the following pages on the Microsoft Web site:  
  
-   [Ways to customize PivotTable reports](http://go.microsoft.com/fwlink/?LinkId=165722)  
  
-   [Edit or remove a workbook from Excel Services](http://go.microsoft.com/fwlink/?LinkId=165723)  
  
-   [Publish a workbook to Excel Services](http://go.microsoft.com/fwlink/?LinkId=165724)  
  
-   [Save a file to a SharePoint library or another Web location](http://go.microsoft.com/fwlink/?LinkId=165725)  
  
## Related notes
 [Excel reports](excel-reports.md)