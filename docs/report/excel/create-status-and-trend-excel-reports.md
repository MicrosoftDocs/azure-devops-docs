---
title: Create Excel reports from a work item query  
description: View progress by creating status and trend Excel charts from a flat list query when connecting to a team project on Team Foundation Server    
ms.assetid: EBBA2C3A-A9F4-4808-B746-5DC0F039EA53  
titleSuffix: TFS
ms.prod: devops
ms.technology: devops-analytics
ms.topic: quickstart
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
monikerRange: '<= azure-devops-2019'
ms.date: 11/19/2018
---

# Create Excel reports from a work item query  

[!INCLUDE [temp](../_shared/tfs-report-platform-version.md)]

One of the quickest ways to generate a custom report in Excel is to start with a flat list query. You can generate both status and trend charts. Also, once you've build a report, you can manipulate the data further by adding or filtering fields using the PivotTable. 

::: moniker range="azure-devops-2019"

> [!NOTE]  
>This feature is available with Azure DevOps Server 2019 configured with SQL Server Analysis Services. 
> 
>If you want to export work items to Excel, see [Bulk add or modify work items with Excel](../../boards/backlogs/office/bulk-add-modify-work-items-excel.md).

::: moniker-end

::: moniker range="<= tfs-2018"

> [!NOTE]  
> This feature is available with an on-premises Team Foundation Server (TFS) configured with SQL Server Analysis Services. 
> 
>If you want to export work items to Excel, see [Bulk add or modify work items with Excel](../../boards/backlogs/office/bulk-add-modify-work-items-excel.md).

::: moniker-end


Here's an example of a status report generated from a flat-list query.  

![Excel State pie chart report](_img/IC733832.png)   


#### Requirements 
You can generate these reports only when you work with an on-premises TFS that has been configured with reporting services. 

* Your deployment needs to be integrated with reporting services. If your on-premises TFS application-tier server hasn't been configured to support reporting services, you can add that functionality by following the steps provided here: [Add reports to a team project](../admin/add-reports-to-a-team-project.md). 


* You must be a member of the **TfsWarehouseDataReader** security roles. To get added, see [Grant permissions to view or create reports in TFS](../admin/grant-permissions-to-reports.md).

* A version of Excel that is compatible with Office 2007, Office 2010, or Office 2013. If you don't have Excel, [install it now](http://office.microsoft.com/excel/). 

* Either Visual Studio or the Team Explorer plug-in for Visual Studio, which you can [install from this download site](https://visualstudio.microsoft.com/downloads/download-visual-studio-vs). Team Explorer is free and requires a Windows OS.

   You need to install Team Explorer to get the Team Foundation add-in for Excel. 

## Create an Excel report from a flat-list query
 
Use this procedure when you work from the Team Explorer plug-in for Visual Studio. 

1. Create or open a [flat-list query](../../boards/queries/using-queries.md#flat-list-query) that contains the work items that you want to include in the report.

   Choose the fields you want to base reports on and include them in the filter criteria or as a column option. For non-reportable fields, see [Q: Which fields are non-reportable](#which_fields_are_non_reportable)?

2. Create a report in Excel From the query results view.

   ![Create Report in Microsoft Excel](_img/IC730317.png)

3. Select the check boxes of the reports that you want to generate.

   ![Expanded nodes, New Work Item Report dialog box](_img/IC730318.png)

   Wait until Excel finishes generating the reports. This step might take several minutes, depending on the number of reports and quantity of data.

   Each worksheet displays a report. The first worksheet provides hyperlinks to each report. Pie charts display status reports and area graphs display trend charts. 

4. To view a report, choose a tab, for example, choose the State tab to view the distribution of work items by State. 

   You can change the chart type and filters. For more information, see [Use PivotTables and other business intelligence tools to analyze your data](http://office.microsoft.com/excel-help/use-pivottables-and-other-business-intelligence-tools-to-analyze-your-data-HA104042322.aspx?CTT=1). 

## Create a query-based report by using Excel

Use this procedure when you work from the web portal or the Team Explorer plug-in for Visual Studio. 

1. Open an Office Excel workbook and choose **New Report**.  
   ![New Report (Team menu selection)](_img/IC733833.png)  

   If you don't see the Team menu, you'll need to install Team Explorer to get the Team Foundation add-in to Excel. See **Requirements** listed earlier in this article.   

2. Connect to the team project and choose the query.   

   If the server you need isn't listed, [add it now](../../organizations/projects/connect-to-projects.md).  

3. Choose the reports to generate (steps 3 and 4 from the previous procedure).  

## Q & A
<!-- BEGINSECTION class="md-qanda" -->



### Q: Can I export a query to Excel? 

**A:** If you want to export a query to Excel, you can do that from [Excel or Visual Studio/Team Explorer](../../boards/backlogs/office/bulk-add-modify-work-items-excel.md). Or, to export a query directly from the web portal Queries page, install the [VSTS Open in Excel Marketplace extension](https://marketplace.visualstudio.com/items?itemName=blueprint.vsts-open-work-items-in-excel). This extension will add in **Open in Excel** link to the toolbar of the query results page.


<a id="which_fields_are_non_reportable"></a>
###Q: Which fields can't I use to generate a report?
 
   **A:** Even though you can include non-reportable fields in your query field criteria or as a column option, they won't be used to generate a report. 

   * Description, History, and other HTML data-type fields. These fields won't be added to the PivotTable or used to generate a report. Excel does not support generating reports on these fields.

   * Fields with filter criteria that specify the **Contains**, **Contains Words**, **Does Not Contain**, or **Does Not Contain Words** operators will not be added to the PivotTable. Excel does not support these operators.

###Q: Can I create reports if I'm working in Azure DevOps?
 
   **A:** You can't create Excel reports; however, you can create [query-based charts](../charts.md) or use the [Analytics Service](../powerbi/what-is-analytics.md?toc=/azure/devops/report/powerbi/toc.json&bc=/azure/devops/report/powerbi/breadcrumb/toc.json). 

###Q: How do I refresh the report to show the most recent data?

   **A:** At any time, you can choose Refresh on the Data tab to update the data for the PivotTables in your workbook. To learn more, see [Update (refresh) data in a PivotTable](http://office.microsoft.com/excel-help/update-refresh-data-in-a-pivottable-HA102840043.aspx?CTT=1).

###Q: Can I upload these reports to a project portal?

   **A:** Yes. See [Manage documents and document libraries](../sharepoint-dashboards/manage-documents-and-document-libraries.md).

<!-- ENDSECTION -->

