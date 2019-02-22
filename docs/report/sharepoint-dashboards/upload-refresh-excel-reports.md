---
title: Upload Excel reports | TFS
description: Add Excel reports to a SharePoint project portal 
ms.prod: devops
ms.technology: devops-analytics
ms.topic: conceptual
ms.assetid: a606b12a-ac2e-4a02-a8b0-56f18c3dcc82
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.date: 03/09/2017
---

# Upload and refresh Excel reports in the team project portal

[!INCLUDE [temp](../_shared/tfs-sharepoint-version.md)]

After you create a report in Excel that shows data for your team project, you can share that report with other team members. You can add the report to a shared folder or send it in e-mail, or you can upload the report to your team's *project portal*. To keep the report accurate, you might also want to run the report again on a particular schedule, such as every week or at each project milestone.  
  
## Upload reports to a project portal  
 You can share Microsoft Excel reports just as you share any other document through the project portal. You can upload reports into the portal from either the portal itself or from Team Explorer. For more information, see [Manage documents and document libraries](manage-documents-and-document-libraries.md). After you have uploaded your reports, you can manage them the same way that you manage any other documents that you have uploaded to your portal. If you have many reports, you might want to group them within folders to make it easier to find specific reports.  
  
## Refresh saved reports  
 When you view a report using Microsoft Excel, the data appears as it existed in the spreadsheet when the file was most recently saved. To display more current data, you must refresh the report. To refresh the report, you must have access to the same data source on which the report is based.  
  
 If your report is based on a work item query, you must refresh the contents of the work item list, and then you must refresh the PivotTable and PivotChart reports. To refresh a list of work items, you display the Team ribbon and then click Refresh. To refresh PivotTable and PivotChart reports, you open the Data menu and then click **Refresh**.  
  
 To maintain history for a report, you can save a copy of it every time that you refresh the data. If you need your reports to be refreshed automatically, you might consider using SQL Server Reporting Services to create your report instead. For more information, see [Choose the source of data and authoring tool](../choose-source-data-authoring-tool.md).  
  
## Related notes
-  [Create Excel reports from a work item query](../excel/create-status-and-trend-excel-reports.md)   
-  [Perspectives and measure groups provided in the Analysis Services cube](../sql-reports/perspective-measure-groups-cube.md)