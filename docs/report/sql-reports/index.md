---
title: Data Warehouse & SQL Server Reports  
titleSuffix: TFS 
ms.prod: devops
ms.technology: devops-analytics
ms.topic: overview
description: Index to topics for managing the data warehouse, adding reports, and viewing SQL Server reports 
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
monikerRange: '<= azure-devops-2019'
ms.date: 11/19/2018
---

# SQL Server Reporting  

[!INCLUDE [temp](../_shared/tfs-report-platform-version.md)]

The SQL Server reporting solution is based on a [data warehouse and OLAP cube](components-data-warehouse.md) coupled with a SQL Server Reporting server to host reports.

::: moniker range="azure-devops-2019"
Azure DevOps Server 2019 supports both the SQL Server Reporting solution and the [Analytics Service](../powerbi/what-is-analytics.md). To learn more about the future of reporting for the Azure DevOps Server, read [Reporting roadmap](../powerbi/reporting-roadmap.md). 

::: moniker-end

> [!IMPORTANT]  
> Integration with the data warehouse and SQL Server Reporting Services is only supported for on-premises Azure DevOps Server 2019 and Team Foundation Server (TFS). If you don't have a reporting site and want to add it, see [Add reports to a project](../admin/add-reports-to-a-team-project.md?toc=/azure/devops/report/sql-reports/toc.json).  
> 
> For information on what is supported for Azure DevOps Services, see [Dashboards and reports overview](../dashboards/overview.md). 


::: moniker range="<= tfs-2018"

To learn more about the future of reporting for TFS, read [Reporting roadmap](../powerbi/reporting-roadmap.md).

::: moniker-end

## 5-Minute Quickstarts  
- [Create Excel reports from a work item query](../excel/create-status-and-trend-excel-reports.md?toc=/azure/devops/report/sql-reports/toc.json&bc=/azure/devops/report/sql-reports/breadcrumb/toc.json)  


## Concepts 

- [Choose data source and authoring tool](../dashboards/choose-source-data-authoring-tool.md?toc=/azure/devops/report/sql-reports/toc.json&bc=/azure/devops/report/sql-reports/breadcrumb/toc.json)
- [Components of the data warehouse](components-data-warehouse.md?toc=/azure/devops/report/sql-reports/toc.json&bc=/azure/devops/report/sql-reports/breadcrumb/toc.json)  

## How-to Guides

- [Add reports to a team project](../admin/add-reports-to-a-team-project.md?toc=/azure/devops/report/sql-reports/toc.json&bc=/azure/devops/report/sql-reports/breadcrumb/toc.json)
- [Manually process the data warehouse and cube](../admin/manually-process-data-warehouse-and-cube.md?toc=/azure/devops/report/sql-reports/toc.json&bc=/azure/devops/report/sql-reports/breadcrumb/toc.json)
- [View, organize, and configure reports using Report Manager](../admin/view-organize-configure-reports-using-report-manager.md?toc=/azure/devops/report/sql-reports/toc.json&bc=/azure/devops/report/sql-reports/breadcrumb/toc.json)

  
## Reference

- [Data warehouse tables](table-reference-relational-warehouse-database.md)
- [Cube perspectives and measure groups](perspective-measure-groups-cube.md)


## Resources
- [Server Administration](/azure/devops/server/index)
- [Azure DevOps Developer Community](https://developercommunity.visualstudio.com/spaces/22/index.html)
- [(Archived) TFS - Reporting & Warehouse forum](https://social.msdn.microsoft.com/Forums/en-ushome?forum=tfsreporting)
