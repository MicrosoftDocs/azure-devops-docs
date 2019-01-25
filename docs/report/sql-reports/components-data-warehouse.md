---
title: Components of the SQL Server data warehouse 
titleSuffix: TFS
description: Understand the components of the Team Foundation Server data warehouse 
ms.prod: devops
ms.technology: devops-analytics
ms.topic: conceptual
ms.assetid: 5aafaefc-84c1-4f8d-a716-753f5b74caa0
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.date: 10/26/17
---


# Components of the TFS data warehouse

[!INCLUDE [temp](../_shared/tfs-report-platform-version.md)]

The Team Foundation reporting warehouse is a traditional data warehouse consisting of a relational database organized in an approximate star schema and a SQL Server Analysis Services cube built on top of the relational database. The following diagram shows the high-level architecture of the Team Foundation data warehouse and the relationships between the operational stores, the data warehouse, and the team reports.  
  
 ![Data Warehouse Architecture](_img/tfs_datawarearch_r.png)  
  
<a name="operational_stores"></a> 
##  Operational stores  
 Each tool or plug-in in Team Foundation uses a relational database in SQL Server to store the data used by the tool in its day-to-day operations. This relational database is often referred to as the operational store. The operational stores for Team Foundation include:  
  
-   Common structure databases (Tfs_Configuration)  
  
-   Team project collection databases (Tfs_Collection)  
  
 You might also have operational stores created for third-party tools.  
  
 Like most operational stores, the schema of the relational database is designed and optimized for the online transactional processing of data. As the tool or plug-in performs an activity, it writes the latest information to the operational store. Therefore, data in the operational store is constantly changing and being updated, and all data is current.  
  
##  <a name="warehouse"></a> Warehouse adapters  
 Because each tool or plug-in has its own schema requirements and data is stored in the operational store to optimize transactional processing, the purpose of the warehouse adapter is to put the operational data into a form usable by the data warehouse. The warehouse adapter is a managed assembly that extracts the data from the operational store, transforms the data to a standardized format compatible with the warehouse, and writes the transformed data into the warehouse relational database. There is a separate adapter for each operational data store.  
  
 The warehouse adapter copies and transforms those data fields specified in either the basic warehouse configuration or in the process template used at the time a new team project is created. If you subsequently change the process template to add or delete which data fields are written to the data warehouse, these changes are detected the next time the adapter is run. The adapter runs periodically with a frequency set by the RunIntervalSeconds property. The default setting for the refresh frequency is two hours (7,200 seconds), so give careful consideration to the appropriate refresh frequency for your installation. For more information about changing the refresh frequency, see [Change the Refresh Frequency](../admin/change-a-process-control-setting.md).  
  
 It is important that data is not written from the relational database to the data cube while the relational database is itself being updated from the operational store. To avoid conflicts reading and writing data, the warehouse adapters that push and pull the data are synchronized. After the adapters have completed their calls, the cube is reprocessed.  
  
##  <a name="relational_db"></a> The relational database or data warehouse  
 Each tool describes its contribution to the data warehouse in an XML schema. The schema specifies the fields that are written to the relational database as dimensions, measures, and details. The schema is also mapped directly into the cube.  
  
 The data in the warehouse are stored in a set of tables organized in a star schema. The central table of the star schema is called the fact table, and the related tables represent dimensions. Dimensions provide the means for disaggregating reports into smaller parts. A row in a fact table usually contains either the value of a measure or a foreign key reference to a dimension table. The row represents the current state of every item covered by the fact table. For example, the Work Item fact table has one row for every work item stored in Work Item operational store.  
 All the date and time information in the warehouse is stored in the configured time zone. This is useful for reporting because you can combine the data from multiple collection databases without worrying about time zone differences or converting from UTC. The time zone is set once when the Warehouse database is created. However, users can change the time zone during a full Warehouse rebuild.

 A dimension table stores the set of values that exist for a given dimension. Dimensions may be shared between different fact tables and cubes, and they may be referenced by a single fact table or data cube. A Person dimension, for example, will be referenced by the Work Items fact table for Assigned To, Opened By, Resolved By, and Closed By properties, and it will be referenced by the Code Churn fact table for the Checked In By property.  
  
 Measures are values taken from the operational data. For example, Total Churn is a measure that indicates the number of source code changes in the selected changesets. Count is a special measure in that it can be implicit, as long as there is one record for every item that is counted. The measures defined in a fact table form a measure group in the cube.  
  
 For more information about the facts, dimensions, and measures in the data warehouse, see [Perspectives and measure groups provided in the Analysis Services cube](perspective-measure-groups-cube.md).  
  
##  <a name="cube"></a> The Analysis Services cube  
 Fact tables are a good source of information for reports that show the current state of affairs. However, to report on trends for data that changes over time, you need to duplicate the same data for each of the time increments that you want to report on. For example, to report on daily trends for work items or test results, the warehouse needs to retain the state of every item for each day. This allows the data cube to aggregate the measures by day. The cube aggregates both data from the underlying star schema and time data into multidimensional structures.  
  
 Each time the data cube is processed, the data stored in the star schemas in the relational database are pulled into the cube, aggregated, and stored. The data in the cube is aggregated so that high-level reports, which would otherwise require complex processing using the star schema, are simple select statements. The cube provides a central place to obtain data for reports without having to know the schema for each operational store and without having to access each store separately.  
  
##  <a name="report_designer"></a> Report Designer reports  
 Report Designer is a component of Visual Studio that allows you to define the Team Foundation data warehouse as a data source and then design a report interactively. Report Designer provides tabbed windows for Data, Layout, and Preview, and you can add datasets to accommodate a new report design idea, or adjust report layout based on preview results. In addition to the Data, Layout, and Preview design surfaces, Report Designer provides query builders, an Expression editor, and wizards to help you place images or step you through the process of creating a simple report. For more information about using Report Designer, see [Create a Detailed Report using Report Designer](create-a-detailed-report-using-report-designer.md).  
  
##  <a name="excel_reports"></a> Excel reports  
 Team Foundation integrates with Microsoft Excel to allow you to use Microsoft Excel to manage your project and produce reports. Microsoft Excel provides pivot tables and charts for viewing and analyzing multi-dimensional data. You can bind these pivot tables directly to the Team Foundation cube, so you can interact with the data in the cube. For more information about using Microsoft Excel for reporting, see [Create Excel reports from a work item query](../excel/create-status-and-trend-excel-reports.md).  
  
##  <a name="security"></a> Security  
 Security for the Team Foundation data warehouse is defined at the database level, while security for team reports is at the team project level. The Team Foundation Server administrator determines who has access to the data in the data warehouse by granting or revoking permissions on the user's account. By default, write access to the warehouse is restricted to a service account under which the warehouse service runs. Each tool adapter has write access to the data warehouse because it runs in this security context. Read-only access is granted by the administrator to individual users or groups of users. A user who has permission to view the data in the warehouse has full access to all of the data for all team projects in all team project collections. For more information about granting or denying read-only access to the data warehouse, see [Grant permissions to view or create reports in TFS](../admin/grant-permissions-to-reports.md).