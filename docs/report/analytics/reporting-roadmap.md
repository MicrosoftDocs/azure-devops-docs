---
title: Reporting roadmap
titleSuffix: Azure DevOps & TFS 
description: Reporting roadmap for Azure DevOps and Team Foundation Server (TFS) 
ms.prod: devops
ms.technology: devops-analytics
ms.reviewer: greggboe
ms.manager: douge
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
monikerRange: '>= tfs-2018'
ms.date: 11/01/2018
---

# Reporting roadmap for Azure DevOps and Azure DevOps Server

[!INCLUDE [temp](../../_shared/version-azure-devops.md)]

The future of reporting for Azure DevOps and Azure DevOps Server is the Analytics Service. 

## The Analytics Service
The [Analytics Service](what-is-analytics.md) is in Public Preview. It currently contains partial data.   We are working to add all reportable data to the Analytics Service. See [Data Available in Analytics](./data-available-in-analytics.md) for more information.

Analytics is enabled it by installing the [Analytics extension](../analytics/analytics-extension.md)

Azure DevOps Server 2019 RC1 and later versions support installation of the Analytics extension. Team Foundation Server (TFS) version 2018 and earlier versions do not support the Analytics extension. 

## Pricing for the [Analytics extension](../analytics/analytics-extension.md)
While in Public Preview, the Analytics extension is free.

We are currently working out what our pricing model will be. We plan to share details in Q4, 2018.

::: moniker range="tfs-2018 || azdevserver-2019"  

## Azure DevOps Server, TFS, and SQL Server Reporting

Since [Team Foundation Server (TFS)](https://visualstudio.microsoft.com/tfs/) was released in 2005, we've offered a reporting solution [based on a data warehouse and OLAP cube](../sql-reports/index.md), coupled with [an SSRS server](../sql-reports/create-and-manage-reporting-services-reports.md?toc=../sql-reports/toc.json&bc=../sql-reports/breadcrumb/toc.json) to host reports.

<!--- ![TFS Data warehouse architecture conceptual diagram](../sql-reports/_img/tfs_datawarearch_r.png)  -->

While the configuration is somewhat complex, it provides a powerful solution. You can create custom reports by writing [customized SSRS reports](../sql-reports/create-and-manage-reporting-services-reports.md?toc=/azure/devops/report/sql-reports/toc.json&bc=/azure/devops/report/sql-reports/breadcrumb/to]c.json). You can also create reports [using Excel](../excel/create-status-and-trend-excel-reports.md?toc=/azure/devops/report/sql-reports/toc.json&bc=/azure/devops/report/sql-reports/breadcrumb/toc.json), and share them on SharePoint once you've [configured SharePoint to host Excel Charts](../sharepoint-dashboards/configure-sharepoint-tfs-2017-earlier.md).

We have no plans to bring a cloud version of our SQL Server Reporting story to Azure DevOps Services.

## Future of SQL Server Reporting

We currently support SQL Server Reporting through TFS 2018, and will continue to support it in Azure DevOps Server 2019.  

We will continue to support SQL Server Reporting until Analytics can replace its functionality. After that, we will likely support both SQL Server Reporting and Analytics for one additional major Azure DevOps Server release. This allows customers time to convert their reports to Analytics.

::: moniker-end  

## Roadmap timeline

Check out the [Features Timeline](/azure/devops/release-notes/) for the roadmap of reporting features.
