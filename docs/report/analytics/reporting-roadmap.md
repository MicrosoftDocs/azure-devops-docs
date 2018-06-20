---
title: Reporting roadmap
titleSuffix: VSTS & TFS 
description: Reporting roadmap for Visual Studio Team Services (VSTS) and Team Foundation Server (TFS) 
ms.prod: devops
ms.technology: devops-analytics
ms.reviewer: greggboe
ms.manager: douge
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
monikerRange: 'vsts || >= tfs-2018'
ms.date: 04/04/2018
---

# VSTS/TFS reporting roadmap

**VSTS | TFS 2018**

The future of reporting for Visual Studio Team Services (VSTS) and Team Foundation Server (TFS) is the Analytics Service. 

## The Analytics Service
The [Analytics Service](what-is-analytics.md) is in Public Preview. It currently [contains partial data](./data-available-in-analytics.md) and only works with VSTS. We are working to add all reportable data to the Analytics Service.

**Our goal is to bring the Analytics Service to TFS in the next major release, with the intent to replace SQL Server Reporting once we can replace the functionality it provides.**

### Pricing for the [Analytics extension](https://marketplace.visualstudio.com/items?itemName=ms.vss-analytics)
While in Public Preview, the Analytics extension is free.

We are currently working out what our pricing model will be. When we have more details on pricing, we will share that information here. Our goal is to share more details in Q3, 2018. 

## TFS and SQL Server Reporting

Since [Team Foundation Server (TFS)](https://visualstudio.microsoft.com/tfs/) was released in 2005, we've offered a reporting solution [based on a data warehouse and OLAP cube](../sql-reports/index.md), coupled with [an SSRS server](../sql-reports/create-and-manage-reporting-services-reports.md?toc=../sql-reports/toc.json&bc=../sql-reports/breadcrumb/toc.json) to host reports.

<!--- ![](../sql-reports/_img/tfs_datawarearch_r.png)  -->

While the configuration is somewhat complex, it provides a powerful solution. You can create custom reports by writing [customized SSRS reports](../sql-reports/create-and-manage-reporting-services-reports.md?toc=/vsts/report/sql-reports/toc.json&bc=/vsts/report/sql-reports/breadcrumb/to]c.json). You can also create reports [using Excel](../excel/create-status-and-trend-excel-reports.md?toc=/vsts/report/sql-reports/toc.json&bc=/vsts/report/sql-reports/breadcrumb/toc.json), and share them on SharePoint once you've [configured SharePoint to host Excel Charts](../sharepoint-dashboards/configure-sharepoint-tfs-2017-earlier.md).

We have no plans to bring a cloud version of our SQL Server Reporting story to VSTS.

## Future of TFS & SQL Server Reporting

We currently support SQL Server Reporting through TFS 2018.  

We will continue to support SQL Server Reporting until Analytics is brought to TFS and can fully replace its functionality. After that, we will likely support both SQL Server Reporting and Analytics for one additional major TFS release. This allows customers time to convert their reports to Analytics.

## Roadmap timeline

Check out the [Features Timeline](https://docs.microsoft.com/en-us/vsts/release-notes/) for the roadmap of reporting features.
