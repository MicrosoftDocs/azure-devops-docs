---
title: Dashboards and reports using Power BI | VSTS
description: Learn about default reports and how to refresh datasets, create reports and dashboards from Visual Studio Team Services (VSTS) data using Power BI  
ms.technology: vs-devops-reporting
ms.prod: vs-devops-alm
ms.assetid: BBCB1E19-F2D2-4C52-BE8C-7CEF8A7FDB0B  
ms.manager: douge
ms.author: kaelli
ms.date: 08/04/2017
---


# Create Power BI dashboards and reports 
**VSTS**
[!INCLUDE [temp](../_shared/content-pack-deprecation.md)]

You can create dashboards, individual reports, or explore data collected for your VSTS account once you [connect to Power BI](connect-vso-pbi-vs.md). As the Power BI data model for VSTS grows to include more features you'll have access to more advanced reporting. As Power BI is upgraded, it will provide you with additional visualizations and capabilities over time without any upgrades.

Prior to working with VSTS data, review [Power BI - Guided Learning](https://powerbi.microsoft.com/en-us/guided-learning/).

## Get started
After getting connected to VSTS you will see an initial dashboard. On the left side of the screen you will notice Dashboards, Reports and Datasets.

![Dashboards, Reports and Datasets](_img/vs-team-services-power-bi-opened.png)

These are related in the following way: Dashboards contain charts that are based on Power Q&A or charts contained in a report. Reports contain charts based on data contained in the dataset.

Currently, a report can be based on a single dataset. You can create as many reports based on a dataset as you want. Dashboards can contain charts from one or more reports or Power Q&A questions.

> [!NOTE]  
> Consider renaming the dataset, report and dashboard immediately after the data finishes loading. Every time you click **Get Data**, new data is imported with the name "VSTS"  and another dataset, report and dashboard is created. This can become confusing very quickly.
> 
> A good habit is to rename the datasets based on either the account or the project name. For example, using Fabrikam as the account or Fabrikam.projectA to differentiate a project will make using Power BI much easier.  



## Work with datasets
Refer to [Get started with Power BI](https://powerbi.microsoft.com/documentation/powerbi-service-get-started) for information on working with datasets. 

##Work with reports
Reports are at the heart of Power BI and provide the basis for dashboards. Dashboards are the shareable component of Power BI. See the Power BI documentation on [Reports](https://powerbi.microsoft.com/en-us/documentation/powerbi-service-reports/) for more information.

###Understand the default report
The VSTS content pack generates a single report with several pages. 

<table width="100%">
<tr>
<th width="25%">Report page</th>
<th width="75%">Description</th>
</tr>
<tr>
<td>Open Bug Status</td>
<td>This is a general bug status report which is applicable to all three of the [out-of-the-box processes (Agile, CMMI, and Scrum](../../work/work-items/guidance/choose-process.md). All charts exclude closed bugs (State=Closed or Done). </td>
</tr>
<tr>
<td>Git Activity</td>
<td>Provides source control file information for a team project created to use Git. Report pages show data from the last 30 days only.</td>
</tr>
<tr>
<td>(Team Foundation) Version Control</td>
<td>Provides source control file information  for a team project created to use Team Foundation version control (TFVC).  </td>
</tr>
<tr>
<td>Builds (Xaml)</td>
<td>Information related to automated builds. This does not include the latest build engine released with TFS 2015 (formerly Build v.Next).</td>
</tr>
<tr>
<td>Agile Project Status &#42; </td>
<td> basic report that details data pertinent to a team project created with a version of the [Agile process](../../work/work-items/guidance/agile-process.md). </td>
</tr>
<tr>
<td>Scrum Project Status &#42; </td>
<td> basic report that details data pertinent to a team project created with a version of the [Scrum process](../../work/work-items/guidance/scrum-process.md). </td>
</tr>
<tr>
<td>CMMI Project Status &#42; </td>
<td>A basic report that details data pertinent to a team project created with a version of the [CMMI process](../../work/work-items/guidance/cmmi-process.md). </td>
</tr>
<tr>
<td>Pull Requests</td>
<td>Provides information related specifically to pull requests for a team project created to use Git.</td>
</tr>
</table>

 &#42;  Delete any project status report pages that don't apply to your particular situation and update the dashboard as appropriate.

### Edit the default report
For information on how to edit the default report, see the [Power BI documentation](https://powerbi.microsoft.com/en-us/documentation/powerbi-service-the-report-editor-take-a-tour/).

## Work with Dashboards
For help in creating and managing Dashboards, see the [Dashboards in the Power BI service](https://powerbi.microsoft.com/en-us/documentation/powerbi-service-dashboards/).