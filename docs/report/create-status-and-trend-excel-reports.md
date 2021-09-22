---
title: Create Excel reports from a work item query  
titleSuffix: Azure DevOps Server
description: How to create status and trend Excel charts from a flat list query with SQL Server Analysis Services installed for on-premises projects and collections. 
ms.assetid: EBBA2C3A-A9F4-4808-B746-5DC0F039EA53  
ms.technology: devops-analytics
ms.topic: quickstart
ms.author: kaelli
author: KathrynEE
monikerRange: '< azure-devops'
ms.date: 09/22/2021
---

# Create status and trend reports from a work item query  

[!INCLUDE [temp](./includes/tfs-report-platform-version.md)]

One of the quickest ways to generate a custom work tracking report is to use Excel and start with a flat list query. You can generate both status and trend charts. Also, once you've built a report, you can manipulate the data further by adding or filtering fields using the PivotTable. 

::: moniker range=">= azure-devops-2019 < azure-devops"

> [!NOTE]  
> This feature is only available with an on-premises Azure DevOps Server 2019 and later versions configured with SQL Server Analysis Services. Also, this feature only supports projects that are defined on project collections configured with the On-premises XML process model. If you're collection is configured to support the Inheritance process model, you can use Analytics views to filter work items and generate Power BI reports. To learn more, see [What are Analytics views?](./powerbi/what-are-analytics-views.md) To learn more about process models, see [Customize your work tracking experience](../reference/customize-work.md#process-modelsn).
> 
> If you want to export work items to Excel, see [Bulk add or modify work items with Excel](../boards/backlogs/office/bulk-add-modify-work-items-excel.md). To get the latest version of the Azure Devops add-in for Office, install [Azure DevOps Office® Integration 2019](https://go.microsoft.com/fwlink/?linkid=2076587&clcid=0x409).  

::: moniker-end

::: moniker range="<= tfs-2018"

> [!NOTE]  
> This feature is available with an on-premises Team Foundation Server (TFS) configured with SQL Server Analysis Services. 
> 
>If you want to export work items to Excel, see [Bulk add or modify work items with Excel](../boards/backlogs/office/bulk-add-modify-work-items-excel.md). To get the latest version of the Azure Devops add-in for Office, install [Azure DevOps Office® Integration 2019](https://go.microsoft.com/fwlink/?linkid=2076587&clcid=0x409). 

::: moniker-end


Here's an example of a status report generated from a flat-list query.  

![Excel State pie chart report](media/excel-reports/IC733832.png)   


## Prerequisites

You can generate these reports only when you work with an on-premises Azure DevOps Server that has been configured with reporting services. 
- Your deployment needs to be integrated with reporting services. If your on-premises application-tier server hasn't been configured to support reporting services, you can add that functionality by following the steps provided here: [Add reports to a team project](./admin/add-reports-to-a-team-project.md). 

- You must be a member of the **TfsWarehouseDataReader** security roles. To get added, see [Grant permissions to view or create reports in Azure DevOps Server](./admin/grant-permissions-to-reports.md).

- A version of Excel that is compatible with your version of Azure DevOps, such as Office 2010 or later version. For a complete list of supported versions, see [Azure DevOps client compatibility, Microsoft Office integration](/azure/devops/server/compatibility#microsoft-office-integration). If you don't have Excel, [install it now](https://office.microsoft.com/excel/). 

- A version of Visual Studio that supports the Team Explorer plugin, such as Visual Studio or Visual Studio Community. You can [install Visual Studio from this download site](https://visualstudio.microsoft.com/downloads/download-visual-studio-vs). Team Explorer is free and requires a Windows OS.

- To work from Microsoft Excel and use the **Team** menu, you'll need to install [Azure DevOps Office® Integration 2019](https://go.microsoft.com/fwlink/?linkid=2076587&clcid=0x409). 
 

## Create an Excel report from a flat-list query
 
Use this procedure when you work from the Team Explorer plug-in for Visual Studio. 

1. Create or open a [flat-list query](../boards/queries/using-queries.md) that contains the work items that you want to include in the report.  
	> [!NOTE]   
	> To view queries in Visual Studio 2019 and later versions, you must choose the **Tools** option **Legacy experience (compatibility mode)** as described in [Set the Work Items experience in Visual Studio 2019](/../boards/work-items/set-work-item-experience-vs.md).

   Choose the fields you want to base reports on and include them in the filter criteria or as a column option. For non-reportable fields, see [Q: Which fields are non-reportable](#which_fields_are_non_reportable)?

2. Create a report in Excel From the query results view. The option to **Create Report in Microsoft Excel** only appears if all prerequisites are met.

   ![Create Report in Microsoft Excel](media/excel-reports/IC730317.png)

3. Select the check boxes of the reports that you want to generate.

   ![Expanded nodes, New Work Item Report dialog box](media/excel-reports/IC730318.png)

   Wait until Excel finishes generating the reports. This step might take several minutes, depending on the number of reports and quantity of data.

   Each worksheet displays a report. The first worksheet provides hyperlinks to each report. Pie charts display status reports and area graphs display trend charts. 

4. To view a report, choose a tab, for example, choose the State tab to view the distribution of work items by State. 

   You can change the chart type and filters. For more information, see [Use PivotTables and other business intelligence tools to analyze your data](https://office.microsoft.com/excel-help/use-pivottables-and-other-business-intelligence-tools-to-analyze-your-data-HA104042322.aspx?CTT=1). 

## Create a query-based report by using Excel

Use this procedure when you work from the web portal or the Team Explorer plug-in for Visual Studio. 

1. Open an Office Excel workbook and choose **New Report**.  
	> [!NOTE]   
	> The option **New Report** appears even if all prerequisites aren't met. Choosing it may cause Excel to stop responding or display the following error message:  
	> :::image type="content" source="media/excel-reports/error-message-prereqs-not-met.png" alt-text="Error message displayed when prerequisites aren't met.":::

	![New Report (Team menu selection)](media/excel-reports/IC733833.png)  

   If you don't see the **Team** menu, you'll need to install you'll need to install the [Azure DevOps Office® Integration 2019](https://go.microsoft.com/fwlink/?linkid=2076587&clcid=0x409). See **Requirements** listed earlier in this article.   

2. Connect to the project and choose the query.   

   If the server you need isn't listed, [add it now](../organizations/projects/connect-to-projects.md).  

3. Choose the reports to generate (steps 3 and 4 from the previous procedure).  

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

### Q: Can I export a query to Excel? 

**A:** If you want to export a query to Excel, you can do that from [Excel or Visual Studio/Team Explorer](../boards/backlogs/office/bulk-add-modify-work-items-excel.md). Or, to export a query directly from the web portal **Queries** page, install the [Azure DevOps Open in Excel Marketplace extension](https://marketplace.visualstudio.com/items?itemName=blueprint.vsts-open-work-items-in-excel). This extension adds an **Open in Excel** link to the toolbar of the query results page.


<a id="which_fields_are_non_reportable"></a>

### Q: Which fields can't I use to generate a report?
 
   **A:** Even though you can include non-reportable fields in your query field criteria or as a column option, they won't be used to generate a report. 

   * **Description**, **History**, and other HTML data-type fields. These fields won't be added to the PivotTable or used to generate a report. Excel does not support generating reports on these fields.

   * Fields with filter criteria that specify the **Contains**, **Contains Words**, **Does Not Contain**, or **Does Not Contain Words** operators will not be added to the PivotTable. Excel does not support these operators. To learn more about these operators, see [Query fields, operators, and macros](../boards/queries/query-operators-variables.md).

### Q: Can I create reports if I'm working in Azure DevOps?
 
   **A:** You can't create Excel reports; however, you can create [query-based charts](./dashboards/charts.md), generate Power BI reports using an [Analytics views](./powerbi/create-quick-report.md), or use the [Analytics Service](./powerbi/what-is-analytics.md). 

### Q: How do I refresh the report to show the most recent data?

   **A:** At any time, you can choose **Refresh** on the **Data** tab within Excel to update the data for the PivotTables in your workbook. To learn more, see [Update (refresh) data in a PivotTable](https://office.microsoft.com/excel-help/update-refresh-data-in-a-pivottable-HA102840043.aspx?CTT=1).

<!-- ENDSECTION -->

## Related articles

::: moniker range=">= azure-devops-2019"
- [Bulk add or modify work items with Excel](../boards/backlogs/office/bulk-add-modify-work-items-excel.md)
- [Track progress with status and trend query-based charts](./dashboards/charts.md)
- [What are Analytics views?](./powerbi/what-are-analytics-views.md)
- [Create a Power BI report with a default Analytics view](./powerbi/create-quick-report.md)
- [Analytics Service](./powerbi/what-is-analytics.md)
- [Reporting Services reports](./sql-reports/reporting-services-reports.md)
- [Grant permissions to view or create SQL Server reports in Azure DevOps Server](./admin/grant-permissions-to-reports.md)
::: moniker-end

::: moniker range="<= tfs-2018"

- [Bulk add or modify work items with Excel](../boards/backlogs/office/bulk-add-modify-work-items-excel.md)
- [Track progress with status and trend query-based charts](./dashboards/charts.md)
- [Reporting Services reports](./sql-reports/reporting-services-reports.md)
- [Grant permissions to view or create SQL Server reports in Azure DevOps Server](./admin/grant-permissions-to-reports.md)
::: moniker-end