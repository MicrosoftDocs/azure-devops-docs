---
title: Support rollup of work and other fields
titleSuffix: Azure DevOps & TFS
description: Provides summed values of select fields for all child work items of a parent.
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 03d26ae1-cbfa-4156-82e3-1d2fc27f48f3
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
monikerRange: '>= tfs-2013'
ms.date: 02/16/2018
---


# Rollup of work and other fields

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

Rollup provides summed values of select fields for all child work items of a parent. Because Azure DevOps Services and Team Foundation Server (TFS) support multiple levels of nesting, when you perform rollup, you want to make sure you don't double-count values. Most project managers are interested in getting rollup of estimated or completed work, effort, size, or story points.  
  
> [!NOTE]    
>The system doesn't support rollup of the Effort, Story Points, or Size fields across product backlogs and portfolio backlogs.

## Native support of rollup within the web portal 

You can view rollup of Remaining Work from a sprint backlog or task board.  

From the sprint backlog, the sum of all Remaining Work defined for all tasks is displayed for the parent work item. This value will also display on the parent work item card when you view the task board.  
 
![Sprint backlog displays rollup of Remaining Work](_img/alm_rup_remworkiteration.png "ALM_RUP_RemWorkIteration")  
  
From a sprint task board, there are three types of rollup: 
- The rollup of Remaining Work displays on the card for the parent work item
- The sum of all Remaining Work defined for all tasks within a column displays at the top of each column
- The sum of all Remaining Work defined for all tasks for a backlog item displays within each row, grouped by column.      

![Task board, collapsed backlog items](../../boards/sprints//_img/ALM_TB_Intro.png)

When you update the status of a task as Completed, the system automatically zeros out the Remaining Work for that task. To learn more, see [Task board](../../boards/sprints//task-board.md).


## Other tools that support rollup 

You can obtain rollup of additional data fields in Azure DevOps Services or TFS data by using one of the following methods:  
 
|Method|Azure DevOps Services|On-premises TFS|  
|------------|----------|----------------------|  
|Work item query charts|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|Microsoft Excel|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|
|Microsoft Project|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|Marketplace extensions|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|   
| Analytics |![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![Not supported](_img/icon_witerror.png "Icon_WITerror")|  
|SQL Server Reporting Services report|![Not supported](_img/icon_witerror.png "Icon_WITerror")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|TFS-Project Server integration|![Not supported](_img/icon_witerror.png "Icon_WITerror")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
 
<a name="charts"></a>
## Work item query charts and rollup
You can create a flat list query that sums the values of a field you specify. To learn more, see [Track progress by creating status and trend query-based charts](../../report/dashboards/charts.md). Charts support a count of work items or a sum of a field. 

For example, here we show a pivot table that sums the story points for user stories by area path and work item state. 
 
![Example rollup of story points by area and state](_img/support-rollup-chart.png)

  
## Microsoft Excel and rollup of work tracking data 
You can export a query to Excel that contains the work items you want to provide rollup. You can then write an Excel macro to get the sums and publish data back to TFS.  To learn more about Excel integration, see [Bulk add or modify work items with Excel](../../boards/backlogs/office/bulk-add-modify-work-items-excel.md).  
  
To learn more about Excel macros, see [Automate tasks with the Macro Recorder](https://support.office.com/article/Automate-tasks-with-the-Macro-Recorder-974ef220-f716-4e01-b015-3ea70e64937b).  

> [!TIP]
> To provide support for opening work items and query results in Excel from the web portal, add the [VSTS Open in Excel](https://marketplace.visualstudio.com/items?itemName=blueprint.vsts-open-work-items-in-excel) Marketplace extension to your organization or collection.

## Microsoft Project and rollup of work tracking data  
 Project natively supports rollup of summary tasks. With Project, you can round trip work tracking data to obtain rollup values.  
  
 ![Task board displays round&#45;trip rollup from Project](_img/alm_rup_roundtriprollup.png "ALM_RUP_RoundTripRollup")  
  
 To learn how, see [Rollup estimated and actual work](../../boards/backlogs/office/rollup-estimated-and-actual-work-using-project.md).  

 
<a name="marketplace"></a>
## Marketplace extensions and custom controls   
There are several extensions available from the [Marketplace](https://marketplace.visualstudio.com/vsts) that provide rollup. Here are a few that may support your needs: 

- [VSTS Rollup](https://marketplace.visualstudio.com/items?itemName=canarysautomationspvtltd.vstsrollup), supports Azure DevOps Services only
- [TFS Aggregator](https://marketplace.visualstudio.com/items?itemName=tfsaggregatorteam.tfs-aggregator-server-plugin), supports Azure DevOps Services and TFS 

Or, you can write an extension using the [REST API for work tracking](/rest/api/azure/devops/wit/work%20items) to get rollup. A code sample available on github that can get you started is [TFS Aggregator](https://tfsaggregator.github.io/).  

::: moniker range=">= azure-devops-2019"

<a name="marketplace"></a>
## Analytics service

You can use the [Analytics Service](../../report/powerbi/what-is-analytics.md) to answer quantitative questions about your projects. With this service, you can add [Analytics widgets](../../report/dashboards/analytics-widgets.md) to your dashboard. Or, you can create additional reports using [Power BI](../../report/powerbi/overview.md).  

> [!NOTE]
> **The Analytics Service is in public preview**. While in preview, it is available to everyone free of charge. We encourage you to use it and provide us feedback. As we add features, we will post them on the [Microsoft DevOps Blog](https://blogs.msdn.microsoft.com/devops/?s=VSTS+Analytics+Extension).

::: moniker-end  

::: moniker range="<= azure-devops-2019"  
## SQL Server Reporting Services report  
 Several OOB reports provide rollup. Here's an example of rollup of completed and remaining work that the Stories Overview report provides. This report is part of the default TFS Agile process template.  
  
 ![Stories Overview example report](_img/procguid_agilereports.png "ProcGuid_AgileReports")  
  
 If you have SQL Server Analysis Services deployed, you can get rollup for backlog items from these reports. The refresh frequency for these reports is 2 hours.  
  
-   [Backlog Overview](../../report/sql-reports/backlog-overview-scrum.md)   
-   [Stories Overview](../../report/sql-reports/stories-overview-report-agile.md)   
-   [Requirements Overview](../../report/sql-reports/requirements-overview-report-cmmi.md)  
  
If you need to add reports to your on-premises TFS deployment, see [Add reports to a project](../../report/admin/add-reports-to-a-team-project.md).  

::: moniker-end  

::: moniker range="<= tfs-2015"  
## TFS-Project Server integration 

Like Project, Project Server natively supports rollup of summary tasks. If you have TFS-Project Server integration deployed, then you have rollup. To learn about how fields are synchronized, see [Understand how updates to specific fields are managed](../tfs-ps-sync/understand-how-updates-to-specific-fields-managed.md). If you need to add fields or change how fields are mapped, see [Customize the field mapping](../tfs-ps-sync/customize-field-mapping-tfs-project-server.md).  
  

> [!IMPORTANT]  
> TFS 2017 and later versions no longer support native integration with Office Project Server. If you're working with an on-premises TFS 2015 or TFS 2013, see [Synchronize TFS with Project Server](../tfs-ps-sync/synchronize-tfs-project-server.md).
>  
::: moniker-end 

<a name="requirements"></a>   
##  Rollup requirements  
 To support rollup, structure your work items according to the following recommendations:  
  
-   Use parent-child links to link work items that contain values that you want to rollup.  
  
-   Add required fields to the WITs that will capture the rollup values. Default fields used to schedule work are only present on the task work item. These fields are:  
    -   Original Estimate (Microsoft.VSTS.Scheduling.OriginalEstimate): The amount of work required to complete a task. (Agile and CMMI) 
    -   Completed Work (Microsoft.VSTS.Scheduling.CompletedWork): The amount of work that has been spent implementing a task. (Agile and CMMI)   
    -   Remaining Work (Microsoft.VSTS.Scheduling.RemainingWork): This field is used to support burndown charts.  
  
     If your project was created using the Visual Studio Scrum process template, only Remaining Work is defined in the task.  
  
     To learn more about adding fields, see [Modify a field or add a custom field](../add-modify-field.md).  
  
-   Determine the unit of time used to track work and make sure it is used consistently across your team or organization. For example, you can track tasks using hours or days.    
-   Determine if you want to make rollup values read-only on the work item form. By making them read-only you prevent users from entering inaccurate data. You make fields read-only using the `Control` field `Readonly` attribute.  
  
## Q & A  
  
### Q: Can I get rollup of team capacity?  
 **A:** No. The data entered for team capacity isn't stored in the regular data stores.