---
title: Manage data warehouse and analysis services cube
titleSuffix: Azure DevOps Server
description: Manage SQL Server Reporting Services reports, data warehouse, and analysis services cube when connecting to Azure DevOps Server.
ms.assetid: 3D57E047-4922-4B4B-8736-A68B2895E846  
ms.technology: devops-analytics
ms.topic: conceptual
ms.author: kaelli
author: KathrynEE
ms.date: 09/23/2021
---

# Manage the data warehouse and analysis services cube 

[!INCLUDE [version-lt-azure-devops](../../includes/version-lt-azure-devops.md)]

If you added SQL Server Reporting Services at installation, then your on-premises Team Foundation Server (TFS) deployment is configured with a data warehouse and SQL Server Analysis Services cube. If you didn't add these services previously and want to add them now, see [Add reports to a team project](add-reports-to-a-team-project.md).

The reporting warehouse is a traditional data warehouse that consists of a relational database and an Analysis Services database. 

![Data Warehouse Architecture](media/IC777266.png)

All reportable data from all team projects that are defined in all project collections for a TFS deployment is written to a single relational database (Tfs_Warehouse). Data from that warehouse is then processed and written to the Analysis Services cube (Tfs_Analysis). Collecting data into a single data warehouse supports reporting across team projects and project collections. To learn more, see [Components of the TFS data warehouse](../dashboards/choose-source-data-authoring-tool.md?viewFallbackFrom=vsts). 

With SQL Server Reporting Services, you gain access to many default Excel and SQL Server Reporting Services reports. These reports aggregate metrics from work items, version control, test results, and builds. See [Dashboards and reports](../dashboards/overview.md).

Without these services, you can [create status and trend charts from work item queries](../dashboards/charts.md) directly from the operational data stores.

## View, add, update, or customize reports or report functionality
You use work item fields to:
- Track data for a work item type.
- Define the filter criteria for queries.
- Design reports.

To support reporting, you can add fields or change the attributes of existing fields. When you add or modify fields, you'll want to apply systematic naming conventions. Doing so makes sure that data is logically grouped into folders in the cube. To learn more, see [Add or modify work item fields to support reporting](../../reference/xml/add-or-modify-work-item-fields-to-support-reporting.md). 

To bulk add or update reports for a team project, see [Upload reports to a team project](upload-reports.md). To manage Reporting Services Reports, see [Reporting Services Reports (SSRS)](/sql/reporting-services/reports/reporting-services-reports-ssrs) .

Depending on the process template that you use to create your team project, you may have several reports already defined. You can customize these reports additionally or create new reports. These reports may contain new data fields that you added to work item types. See [Create, customize, and manage reports for Visual Studio devops](../dashboards/overview.md).

## Manage permissions to view and create reports
To create reports that access data in the cube, you must add team members to the **TFSWarehouseDataReader** role. To view or refresh data within a report, you must add team members to one or more of the Report Server roles. See [Grant permissions to view or create reports in TFS](grant-permissions-to-reports.md). 

A user who has permission to view the data in the warehouse can view data for all team projects hosted in all team project collections in the TFS deployment. There's no way to limit access to a team project or collection. 


### Refresh rate of data warehouse and cube

 The WIT data store is updated in real time as team members create and modify work items. All reportable data from all team projects that are defined in all project collections are written to a single relational data warehouse. That data warehouse is incrementally updated every two minutes. Data from the warehouse is then processed and written to the OLAP cube. The OLAP cube is updated every two hours. To learn more about process control settings, see [Change a process control setting for the data warehouse or Analysis Services cube](change-a-process-control-setting.md).

### Resolving schema conflicts and managing the data warehouse

Schema conflicts occur when a set of attributes for reportable fields differs across team project collections. Schema conflicts might block processing of the data warehouse and the Analysis Services cube. Correct conflicts to unblock processing of the warehouse and for reports to work correctly. See [Resolve schema conflicts that are occurring in the data warehouse](resolve-schema-conflicts.md).

## Manage and troubleshoot the data warehouse and analysis services cube
You can manage the warehouse and analysis services cube to address the following scenarios:

* **Correct errors that block processing of the data warehouse**. Schema conflicts occur when a set of attributes for reportable fields differs across team project collections. Schema conflicts block updated data from being moved into the warehouse and the cube. Correct all schema conflicts to unblock processing and to update reports with current data. 

  See [Resolve schema conflicts that are occurring in the data warehouse](resolve-schema-conflicts.md).


* **Update the data warehouse or cube on demand**. Resolve a problem with reports that aren't up to date or contain missing data. To resolve a problem with reports that don't update or contain missing data, try processing the data warehouse manually. Also, you can troubleshoot errors that are related to warehouse processing jobs and appear in the event viewer for an application-tier server.

  See [Manually process the TFS data warehouse and analysis services cube](manually-process-data-warehouse-and-cube.md).


* **Re-create the schemas, and rebuild the data warehouse databases**. Rebuild the warehouse and cube after you move, restore, rename, or fail over the data-tier server for Team Foundation. To access high-level reports, you must rebuild the data warehouse whenever you move, restore, rename, or fail over the data-tier server.

  See [Rebuild the TFS data warehouse and cube](rebuild-data-warehouse-and-cube.md).


* **Modify the refresh frequency of the data warehouse or cube**. Change the refresh frequency or other process control setting for the warehouse or cube. You set the default properties for the warehouse when you install TFS. You can change the default values later to respond to changing requirements. Two properties that you might want to change are:
  * The frequency with which the data is updated in the data warehouse.
  * The security settings that control user access to the data warehouse.

  See [Change a process control setting for the data warehouse or Analysis Services cube](change-a-process-control-setting.md).

## Related content

- [Reportable fields reference](../../reference/xml/reportable-fields-reference.md): Provides definitions for each reportable field. A default set of fields appears in the relational warehouse database or the cube. These fields have a reportable attribute value of Detail, Dimension, or Measure. 
[Understanding SQL Server and SQL Server Reporting Services](/azure/devops/server/architecture/sql-server-databases) describes the relationships and dependencies between SQL Server and TFS.
- [Manage team project collections](/azure/devops/server/admin/manage-project-collections): Describes how you can enable and disable data that flows into the data warehouse by editing the reporting configuration for your team project collections. After you add a report server to your deployment, you can configure reporting resources for your team project collections and the projects in those collections.

- [Data Warehouse extensibility](/previous-versions/visualstudio/visual-studio-2008/bb130342(v=vs.90)): Describes how you can add new data types to the data warehouse by implementing a warehouse adaptor.
