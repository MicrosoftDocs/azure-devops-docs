---
title: Dashboards & reports documentation | Team Services & TFS  
description: Index to topics for monitoring status and trends in VSTS and and Team Foundation Server (TFS)  
ms.assetid: CF7FBF52-AC95-4B0B-9FEC-D2EDD5583F9E
ms.prod: vs-devops-alm
ms.technology: vs-devops-reporting
ms.manager: douge
ms.author: kaelli
ms.topic: get-started-article 
ms.date: 06/22/2017
---

# Dashboards & Reports Documentation

[!INCLUDE [temp](_shared/vsts-tfs-header-17-15.md)]


Gain insight into the progress you're making and the quality of your software development projects. You can collect status and trend charts into dashboards that you share with your team and stakeholders.  

For more complex reporting requirements, you can open or customize a dashboard or report. Your choices depend on whether you're working in the cloud or on-premises, and resources configured for your on-premises TFS.  

If you're new to working in Team Services or TFS, see [Get started with Agile tools](../work/overview.md).   


>[!NOTE]  
><b>Feature availability: </b>The following charts, dashboards, reports and tasks are available from Team Services (cloud service) or from the web portal of the listed on-premises TFS version or a later version. Those not annotated are available from all platforms and versions. Visit the [Visual Studio Downloads](https://www.visualstudio.com/downloads/download-visual-studio-vs) page to get the latest TFS update. Additional resources may be required as annotated.  

<div style="float:left;width:350px;margin:3px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Lightweight work tracking charts <sup> 1</sup></p>
<ul style="padding-left:30px">

<li style="margin-bottom:2px">[Work tracking status and progress charts](charts.md)</li>
<li style="margin-bottom:2px">[Cumulative flow chart](./guidance/cumulative-flow.md)</li>
<li style="margin-bottom:2px">[Velocity chart](../work/scrum/velocity-and-forecasting.md) </li>
<li style="margin-bottom:2px">[Sprint burndown chart](../work/scrum/sprint-burndown.md)</li>
<li style="margin-bottom:2px">[Team capacity chart](../work/scale/capacity-planning.md) </li>
</ul>
</div>


<div style="float:left;width:350px;margin:3px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">DevOps charts and widgets</p>
<ul style="padding-left:30px">
<li style="margin-bottom:2px">[Build history](add-widget-to-dashboard.md#build-history) (TFS 2015.1)</li>
<li style="margin-bottom:2px">[Release summary](../build/actions/view-manage-releases.md#add-widget) (TFS 2017.1)</li>
<li style="margin-bottom:2px">[Requirements quality](widget-catalog.md#requirements-quality-widget) (TFS 2017)</li>
<li style="margin-bottom:2px">[Test status, progress, and result charts](../test/manual-exploratory-testing/getting-started/track-test-status.md)</li>
<li style="margin-bottom:2px">[Test quality trend chart](add-widget-to-dashboard.md#test-quality) (TFS 2015)</li>
</ul>
</div>


<div style="clear:left;font-size:100%">
</div>


<div style="float:left;width:350px;margin:3px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Dashboards (Web portal)</p>
<ul style="padding-left:30px">
<li style="margin-bottom:2px">[Create and manage team dashboards](dashboards.md) (TFS 2015.1)</li>
<li style="margin-bottom:2px">[Add charts and widgets to a dashboard](add-widget-to-dashboard.md) (TFS 2015)</li>
<li style="margin-bottom:2px">[Pin an item to a team dashboard](team-dashboard.md) (TFS 2015)</li>
<li style="margin-bottom:2px">[Add markdown guidance to a dashboard](../reference/markdown-guidance.md) (TFS 2015.1)</li>
<li style="margin-bottom:2px">[Widget catalog](widget-catalog.md) (TFS 2015.1)</li>
</ul>
</div>



<div style="float:left;width:350px;margin:3px;font-size:90%">
<p style="padding-bottom:0px;text-align:center;"><b>Power BI dashboards and reports</b><br/>(Team Services, Private Preview)</p>
<ul style="padding-left:30px">
<li style="margin-bottom:0px">[Power BI integration overview](./powerbi/overview.md)  </li>
<li style="margin-bottom:0px">[Connect to Power BI, Content Pack](./powerbi/connect-vso-pbi-vs.md)  </li>
<li style="margin-bottom:0px">[Connect to Power BI, Data Connector](./powerbi/connect-vso-pbi-vs.md)  </li>
<li style="margin-bottom:0px">[Create dashboards and reports](./powerbi/report-on-vso-with-power-bi-vs.md)  </li>
<li style="margin-bottom:0px">[Data available](./powerbi/vso-pbi-whats-available-vs.md)  </li>
<li style="margin-bottom:0px">[Create trend charts](./powerbi/create-trend-charts.md)  </li>
<li style="margin-bottom:0px">[Create rollup charts](./powerbi/create-rollup-charts.md)    </li>
</ul>
</div>


<div style="clear:left;font-size:100%">
</div>


<div style="float:left;width:350px;margin:3px;font-size:90%">
<p style="padding-bottom:0px;text-align:center;"><b>Excel and SQL Server Reports</b><br/>(TFS only)</p>
<ul style="padding-left:30px">
<li style="margin-bottom:2px">[Create adhoc Excel status and trend charts](#excel-reports) <sup> 2</sup> </li>
<li style="margin-bottom:2px">[View default Excel reports](#excel-reports) <sup> 3</sup> </li>
<li style="margin-bottom:2px">[View default SQL Server Reports](#sql-reports)  <sup> 4</sup>  </li>
<li style="margin-bottom:2px">[Create custom SQL Server Reports](https://msdn.microsoft.com/library/ff730837.aspx)<sup> 4</sup> </li> 

</ul>

</div>

<div style="float:left;width:350px;margin:3px;font-size:90%">
<p style="padding-bottom:0px;text-align:center;"><b>Dashboards (Project portal)<sup> 5</sup></b><br/>(TFS only)</p>
<ul style="padding-left:30px">
<li style="margin-bottom:2px">[Work with SharePoint dashboards](#sharepoint-dashboards) </li>
</ul>
</div>







<!---
<div style="float:left;width:300px;margin:3px;font-size:90%">
<p style="padding-bottom:0px;text-align:center;"><b>Analytics service (in preview)<sup> 7</sup></b><br/>(Team Services only)</p>
<ul style="padding-left:30px">
<li style="margin-bottom:2px">[Analytics service overview](analytics/overview-analytics-service.md)  </li>
</ul>
</div>
-->

<div style="clear:left;font-size:100%">
</div>


**Notes:**
1. These charts are built from the real-time, work tracking data store.   
2. These reports are built from the SQL Server data warehouse and cube and require that your team project is configured with SQL Server Analysis Services.
3. These reports are built from the SQL Server data warehouse and cube and require that your team project is configured with SQL Server Analysis Services and SharePoint Products. 
4. These reports are built from the SQL Server data warehouse and cube and require that your team project is configured with SQL Server Analysis Services and SQL Server Reporting Services.
5. Project portal dashboards available to you depend on the [version of SharePoint Products configured to integrate with TFS](http://msdn.microsoft.com/library/dd380719.aspx). 
 

<!---
These charts are built from the VS Team Services data connector data model. 

The Analytics service is in preview and only available to select customers of Team Services at this time. If you're a Team Services customer and are interested in working with the preview version of the Analytics service, contact the [Analytics service team](mailto:vsts-analytics-supp@microsoft.com).  
 





### Add custom fields  
You can add data to support reporting requirements in the following ways:

*   [Add a custom field (Inheritance process model, Team Services)](../work/process/customize-process-field.md) or [Add or modify a field (Hosted XML or On-premises XML)](../work/customize/add-modify-field.md)  

*   Add work item fields to the data store, relational database, or data warehouse. See [Add or modify work item fields to support reporting (TFS)](../work/reference/add-or-modify-work-item-fields-to-support-reporting.md).

*   Incorporate data from other resources to an Excel report using PowerPivot.
    PowerPivot for Excel 2010 is a data analysis add-in for Microsoft Excel 2010. By using this add-in, you can generate reports that combine data from other data stores or databases with data from Team Foundation Server. For more information, see [Microsoft PowerPivot](https://msdn.microsoft.com/library/gg399131.aspx). 

*   Create an adapter to add new data types to the data warehouse (TFS).
    An adapter is a managed assembly that implements [IWarehouseAdapter](http://msdn.microsoft.com/library/microsoft.teamfoundation.adapter.iwarehouseadapter.aspx). An adapter uses the warehouse object model to interact with the TFS data warehouse. When an adapter adds data fields to the warehouse, it programmatically extends the schema that defines data that is moved to the warehouse. For more information, see [Data Warehouse Extensibility](http://msdn.microsoft.com/library/bb130342.aspx) and [How to: Create an Adapter](http://msdn.microsoft.com/library/bb286956.aspx). 
-->

[excel-adhoc-query-report]: ./excel/create-status-and-trend-excel-reports.md
[add-a-team]: ../Work/scale/multiple-teams.md
[team-assets]: ../Work/scale/manage-team-assets.md
[add-team-members]: ../Work/scale/multiple-teams.md#add-team-members
[add-team-admin]: ../Work/scale/manage-team-assets.md#add-team-admin
   