---
title: Manage reports with Report Manager
titleSuffix: Azure DevOps Server
description: Use the SQL Server Reporting Services' Report manager to view, organize, and configure reports 
ms.technology: devops-analytics
ms.topic: conceptual
ms.assetid: f382806c-9509-45bf-b175-51a2c853621a
ms.author: kaelli
author: KathrynEE
monikerRange: '< azure-devops' 
ms.date: 11/19/2018
---


# View, organize, and configure reports using Report Manager 

[!INCLUDE [temp](../includes/tfs-report-platform-version.md)]

After you create and publish reports in SQL Server Report Designer, you can use SQL Server Reporting Services' Report Manager to view, organize, and configure those reports. By using Report Manager, you can group related reports in folders, adjust parameters and data sources, and schedule automated reports. You can also configure different methods by which your reports are saved. For example, you can save a copy of a report (sometimes referred to as a snapshot) as report history. You can also export and save reports and have reports copied automatically to a file share.  
  
 When you open Report Manager, you start in the Contents page, which shows the items that you have permission to view. You might also have permission to add, delete, and move those items. For more information, see the following page on the Microsoft Web site: [Contents Page (Report Manager)](/previous-versions/sql/sql-server-2008-r2/ms186470(v=sql.105)).  
  
 After you click a report, you can perform one or more of the tasks that are described in this article.  
  
##  <a name="ViewAReport"></a> View a report  
 By using the **View** tab, you can display results for reports. You can adjust parameters, subscribe to the report, and navigate through the report. You can also refresh, export, and print the report. For more information, see the following page on the Microsoft Web site: [Viewing Reports](/previous-versions/sql/sql-server-2008-r2/ms156312(v=sql.105)).  
  
##  <a name="ConfigureReportProperties"></a> Configure report properties  
 By using the **Properties** tab, you can configure different aspects of a report. The **Properties** tab contains the following pages:  
  
|Page|Task|Related topic on the Microsoft Web site|  
|----------|----------|---------------------------------------------|  
|**General**|**Modify Report Name, Description, or Definition**.<br /><br /> On the **General** page, you can specify the name and a description of the report. You can also modify the report definition, either by editing a copy of the report or by uploading an .rdl file.|[General Properties Page, Reports (Report Manager)](/previous-versions/sql/sql-server-2008-r2/ms186545(v=sql.105))|  
|**Parameters**|**Modify Report Parameters**.<br /><br /> On the **Parameters** page, you can view or modify the parameters that filter the data retrieved in your report. For example, you specify a date range to restrict the data that appears in the report. The **Parameters** page does not appear if no parameters were specified in the report definition before it was published.|[Parameters Properties Page (Report Manager)](/previous-versions/sql/sql-server-2008-r2/ms189700(v=sql.105))|  
|**Data Sources**|**Specify Data Sources**.<br /><br /> On the **Data Sources** page, you can define how a report connects to an external data source. You can override the connection information that was specified when the report was published. By using this page, you can create a single report that can be run against different data sources.|[Data Sources Properties Page (Report Manager)](/previous-versions/sql/sql-server-2008-r2/ms190041(v=sql.105))|  
|**Processing Options**|**Configure Execution and Caching**.<br /><br /> On the **Processing Options** page, you can control when and how often reports are processed. You can set reports to run during off-peak hours or you can cache reports to eliminate wait time if you have many users who access the same report.|[Processing Options Properties Page (Report Manager)](/previous-versions/sql/sql-server-2008-r2/ms178821(v=sql.105))|  
|**Snapshot Options**|**Configure Report History**.<br /><br /> On the **Snapshot Options** page, you can configure whether and how many report snapshots are stored in report history.|[Snapshot Options Properties Page (Report Manager)](/previous-versions/sql/sql-server-2008-r2/ms189952(v=sql.105))|  
|**Security**|**Configure Report Security**.<br /><br /> On the **Security** page, you can configure the security settings that determine access to folders, reports, models, resources, and shared data sources. This page is available only for items that you create or have permission to modify. You define access to items by assigning a group or a user to a specific role, which specifies the tasks that members of that role can perform.|[Security Properties Page, Items (Report Manager)](/previous-versions/sql/sql-server-2008-r2/ms180265(v=sql.105))|  
  
##  <a name="ViewReportHistory"></a> View report history  
 By using the **History** tab, you can create, view, and delete report snapshots. Each snapshot contains the layout and data that are captured at a specific day and time. If you change the layout or if the data has changed, those changes will appear only in snapshots that were captured after the changes were made. Saved report snapshots are not affected. You can view history for a report only if you have access to that report, and you can view the history for only one report at a time. For more information, see the following page on the Microsoft Web site: [Managing Report History](/previous-versions/sql/sql-server-2008-r2/ms155849(v=sql.105)).  
  
##  <a name="ViewAndModifySubscriptions"></a> View and modify subscriptions  
 By using the **Subscriptions** tab, you can create, view, and delete subscriptions for a specific report. A subscription is a standing request to deliver a report at a specific time or in response to an event. You can use subscriptions to schedule and automate delivery of the reports that you use often. For example, you could decide to have the results of your nightly build and test runs appear in e-mail to your team each morning.  
  
 You can create two types of subscriptions:  
  
- **Standard subscription**: A standard subscription consists of static values that cannot be varied during subscription processing. For each standard subscription, you can specify one set of presentation options, delivery options, and report parameters.  
  
- **Data-driven subscription**: Data-driven subscriptions retrieve their presentation options, delivery options, and report parameters from a data source at run time. You might use data-driven subscriptions if you want to vary report output for each recipient. For more information, see the following page on the Microsoft Web site: [Data-Driven Subscriptions](/previous-versions/sql/sql-server-2008-r2/ms159150(v=sql.105)).  
  
  For each subscription, you can have reports automatically delivered to you by e-mail or copied to a file share. You configure the delivery details, schedule, and the parameter values. For more information, see the following page on the Microsoft Web site: [Subscription Overview](/previous-versions/sql/sql-server-2008-r2/ms159762(v=sql.105)).  
  
## Related notes
-  [Choose the source of data and authoring tool](../sql-reports/components-data-warehouse.md)   
-  [Assign permissions to view and mange reports](grant-permissions-to-reports.md)   
-  [Create and manage Reporting Services reports](../sql-reports/create-and-manage-reporting-services-reports.md)