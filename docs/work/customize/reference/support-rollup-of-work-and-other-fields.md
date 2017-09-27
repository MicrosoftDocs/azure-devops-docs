---
title: Support rollup of work and other fields | VSTS & TFS
description: Provides summed values of select fields for all child work items of a parent.
ms.prod: visual-studio-tfs-dev14
ms.technology: vs-devops-wit
ms.assetid: 03d26ae1-cbfa-4156-82e3-1d2fc27f48f3
ms.manager: douge
ms.author: kaelli
ms.date: 06/01/2017
---


# Support rollup of work and other fields

[!INCLUDE [temp](../../_shared/dev15-version-header.md)]

Rollup provides summed values of select fields for all child work items of a parent. Because Visual Studio Team Services (VSTS) and Team Foundation Server (TFS) support multiple levels of nesting, when you perform rollup, you want to make sure you don't double-count values. Most project managers are interested in getting rollup of estimated or completed work, effort, size, or story points.  
  
>[!NOTE]  
>The system doesn't support rollup of the Effort, Story Points, or Size fields across product backlogs and portfolio backlogs.

## Native support of rollup within the web portal 

You can view rollup of Remaining Work from a sprint backlog or task board.  

From the sprint backlog, the sum of all Remaining Work defined for all tasks is displayed for the parent work item. This value will also display on the parent work item card when you view the task board.  
 
![Sprint backlog displays rollup of Remaining Work](_img/alm_rup_remworkiteration.png "ALM_RUP_RemWorkIteration")  
  
From a sprint task board, there are three types of rollup: 
- The rollup of Remaining Work displays on the card for the parent work item
- The sum of all Remaining Work defined for all tasks within a column displays at the top of each column
- The sum of all Remaining Work defined for all tasks for a backlog item displays within each row, grouped by column.      

<img src="../../scrum/_img/ALM_TB_Intro.png" alt="Task board, collapsed backlog items" style="border: 2px solid #C3C3C3;" />

When you update the status of a task as Completed, the system automatically zeros out the Remaining Work for that task. To learn more, see [Task board](../../scrum/task-board.md).


## Other tools that support rollup 

You can obtain rollup of additional data fields in VSTS or TFS data by using one of the following methods:  
 
|Method|VSTS|On-premises TFS|  
|------------|----------|----------------------|  
|Microsoft Project|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|Microsoft Excel|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|SQL Server Reporting Services report|![Not supported](_img/icon_witerror.png "Icon_WITerror")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|TFS-Project Server integration|![Not supported](_img/icon_witerror.png "Icon_WITerror")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|Custom plug-in or extension|![Not supported](_img/icon_witerror.png "Icon_WITerror")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
 
 
### Microsoft Project  
 Project natively supports rollup of summary tasks. With Project, you can round trip TFS data to obtain rollup values.  
  
 ![Task board displays round&#45;trip rollup from Project](_img/alm_rup_roundtriprollup.png "ALM_RUP_RoundTripRollup")  
  
 To learn how, see [Rollup estimated and actual work](../../backlogs/office/rollup-estimated-and-actual-work-using-project.md).  
  
### Microsoft Excel  
 You can export a query to Excel that contains the work items you want to provide rollup. You can then write an Excel macro to get the sums and publish data back to TFS.  To learn more about Excel and TFS integration, see [Bulk add or modify work items with Excel](../../backlogs/office/bulk-add-modify-work-items-excel.md).  
  
 To learn more about Excel macros, see [Automate tasks with the Macro Recorder](https://support.office.com/article/Automate-tasks-with-the-Macro-Recorder-974ef220-f716-4e01-b015-3ea70e64937b).  
 
### SQL Server Reporting Services report  
 Several OOB reports provide rollup. Here's an example of rollup of completed and remaining work that the Stories Overview report provides. This report is part of the default TFS Agile process template.  
  
 ![Stories Overview example report](_img/procguid_agilereports.png "ProcGuid_AgileReports")  
  
 If you have SQL Server Analysis Services deployed, you can get rollup for backlog items from these reports. The refresh frequency for these reports is 2 hours.  
  
-   [Backlog Overview](../../../report/sql-reports/backlog-overview-scrum.md)  
  
-   [Stories Overview](../../../report/sql-reports/stories-overview-report-agile.md)  
  
-   [Requirements Overview](../../../report/sql-reports/requirements-overview-report-cmmi.md)  
  
 If you need to add reports to your on-premises TFS deployment, see [Add reports to a team project](../../../report/admin/add-reports-to-a-team-project.md).  
  
### TFS-Project Server integration  
 Like Project, Project Server natively supports rollup of summary tasks. If you have TFS-Project Server integration deployed, then you have rollup. To learn about how fields are synchronized, see [Understand how updates to specific fields are managed](../../tfs-ps-sync/understand-how-updates-to-specific-fields-managed.md). If you need to add fields or change how fields are mapped, see [Customize the field mapping](../../tfs-ps-sync/customize-field-mapping-tfs-project-server.md).  
  
### Custom control or plug-in  
 You can write an extension using the [REST API for work tracking](https://visualstudio.com/integrate/api/wit/overview.md) to get rollup. A code sample available on github that can get you started is [TFS Aggregrator](https://tfsaggregator.github.io/).  

<a name="requirements"></a>   
##  Rollup requirements  
 To support rollup, structure your work items according to the following recommendations:  
  
-   Use parent-child links to link work items that contain values that you want to rollup.  
  
-   Add required fields to the WITs that will capture the rollup values. Default fields used to schedule work are only present on the task work item. These fields are:  
  
    -   Original Estimate (Microsoft.VSTS.Scheduling.OriginalEstimate): The amount of work required to complete a task. (Agile and CMMI)  
  
    -   Completed Work (Microsoft.VSTS.Scheduling.CompletedWork): The amount of work that has been spent implementing a task. (Agile and CMMI)  
  
    -   Remaining Work (Microsoft.VSTS.Scheduling.RemainingWork): This field is used to support burndown charts.  
  
     If your team project was created using the Visual Studio Scrum process template, only Remaining Work is defined in the task.  
  
     To learn more about adding fields, see [Modify a field or add a custom field](../add-modify-field.md).  
  
-   Determine the unit of time used to track work and make sure it is used consistently across your team or organization. For example, you can track tasks using hours or days.  
  
-   Determine if you want to make rollup values read-only on the work item form. By making them read-only you prevent users from entering inaccurate data. You make fields read-only using the `Control` field `Readonly` attribute.  
  
## Q & A  
  
### Q: Can I get rollup of team capacity?  
 **A:** No. The data entered for team capacity isn't stored in the regular data stores.