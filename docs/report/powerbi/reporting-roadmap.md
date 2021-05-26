---
title: Reporting roadmap
titleSuffix: Azure DevOps 
description: Reporting roadmap for Azure DevOps and Team Foundation Server (TFS) 
ms.technology: devops-analytics
ms.reviewer: greggboe
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
monikerRange: '>= tfs-2013'
ms.date: 08/24/2020
---

# Reporting roadmap for Azure DevOps 

[!INCLUDE [temp](../../includes/version-vsts-tfs-all-versions.md)]

The future of reporting for Azure DevOps and Azure DevOps Server is the Analytics service. Analytics replaces the previous platform based on SQL Server Reporting Services.

> [!NOTE]  
> If you are looking for information about the Azure Analysis Services, see 
[Azure Analysis Services](https://azure.microsoft.com/services/analysis-services/).

## The Analytics service

::: moniker range="azure-devops"

The Analytics service is available for all organizations using Azure DevOps Services. It provides several [advanced widgets](../dashboards/analytics-widgets.md). [Power BI integration](overview.md) and access to the [OData feed](../extend-analytics/quick-ref.md) of Analytics remain in Preview. 

::: moniker-end

::: moniker range="azure-devops-2020"

Analytics is generally available for Azure DevOps Server 2020. It provides several [advanced widgets](../dashboards/analytics-widgets.md). [Power BI integration](overview.md) and access to the [OData feed](../extend-analytics/quick-ref.md) of Analytics remain in Preview. 

::: moniker-end


::: moniker range="<= azure-devops-2019"

Analytics is in Public Preview for Azure DevOps Server 2019 and later versions. You gain access to it by [enabling or installing Analytics](../dashboards/analytics-extension.md). Analytics provides several [advanced widgets](../dashboards/analytics-widgets.md), [Power BI integration](overview.md), and access to the [OData feed](../extend-analytics/quick-ref.md).

Analytics will become generally available in the next major release of Azure DevOps Server. While in Public Preview, Analytics is free.

Team Foundation Server (TFS) 2018 and earlier versions do not support Analytics. 

::: moniker-end

To learn more, see [What is Analytics](what-is-analytics.md). It currently contains partial data. We are working to add all reportable data to Analytics. See [Data Available in Analytics](./data-available-in-analytics.md) for more information.




## Azure DevOps Server, TFS, and SQL Server Reporting

Since [Team Foundation Server (TFS)](https://visualstudio.microsoft.com/tfs/) was released in 2005, we've offered a reporting solution [based on a data warehouse and OLAP cube](../sql-reports/reporting-services-reports.md), coupled with [an SSRS server](../sql-reports/create-and-manage-reporting-services-reports.md?toc=../sql-reports/toc.json&bc=../sql-reports/breadcrumb/toc.json) to host reports.

<!--- ![TFS Data warehouse architecture conceptual diagram](../sql-reports/media/tfs_datawarearch_r.png)  -->

While the configuration is somewhat complex, it provides a powerful solution. You can create custom reports by writing [customized SSRS reports](../sql-reports/create-and-manage-reporting-services-reports.md?toc=/azure/devops/report/sql-reports/toc.json&bc=/azure/devops/report/sql-reports/breadcrumb/to]c.json). You can also create reports [using Excel](../create-status-and-trend-excel-reports.md?toc=/azure/devops/report/toc.json&bc=/azure/devops/report/breadcrumb/toc.json), and share them on SharePoint once you've [configured SharePoint to host Excel Charts](/previous-versions/azure/devops/report/sharepoint-dashboards/configure-sharepoint-tfs-2017-earlier).

We have no plans to bring a cloud version of our SQL Server Reporting story to Azure DevOps Services.

## Future of SQL Server Reporting

We currently support SQL Server Reporting through TFS 2018, and will continue to support it in Azure DevOps Server 2019 and 2020.  

Azure DevOps Server 2020 is the last version to support SQL Server Reporting. Future versions will support only Analytics. This plan allows customers time to convert their reports to Analytics.
 
## Roadmap timeline

Check out the [Features Timeline](/azure/devops/release-notes/features-timeline) for the roadmap of reporting features.