---
title: Create a Report Server Project
titleSuffix: Azure DevOps Server
description: Learn how to use SQL Server Report Designer to create a report to track the team's progress.
ms.technology: devops-analytics
ms.topic: how-to
ms.assetid: 5fc5d272-2569-4dd8-b493-704f03f2aca1
ms.author: kaelli
author: KathrynEE
ms.date: 10/14/2021
---

# Create a Report Server project 

[!INCLUDE [version-lt-azure-devops](../../includes/version-lt-azure-devops.md)]

You can track your team's progress by using SQL Server Report Designer to create reports. Before you can base these reports on data from Azure DevOps, you must first create a Report Server project in Visual Studio.  
  
 For an overview of Report Designer, see the following page on the Microsoft Web site: [Designing and Implementing Reports Using Report Designer](/previous-versions/sql/sql-server-2008-r2/ms159253(v=sql.105)). For more information about how to create reports in Report Designer, see [Create a Detailed Report using Report Designer](create-a-detailed-report-using-report-designer.md) and [Create an aggregate report using Report Designer and the Analysis Services Cube](create-aggregate-report-report-designer-analysis-services-cube.md).  
  
 ## Prerequisites  
  
-   You must have Visual Studio and SQL Server Business Intelligence Development Studio installed on the same computer.  
  
     To install Business Intelligence Development Studio, run the Setup program for SQL Server, and select the **Client Components** check box when you specify the components to install. To install the most recent service pack for SQL Server, see the following page on the Microsoft Web site: [How to obtain the latest service pack for SQL Server 2008](https://go.microsoft.com/fwlink/?LinkID=182174).  
  
-   You must be a member of the **TfsWarehouseDataReaders** security role in the Analysis Services database on the data-tier server of Team Foundation Server. For more information, see [How to: Grant Access to the Databases of the Data Warehouse](../admin/grant-permissions-to-reports.md).  

-   You must be a member of the **Team Foundation Content Manager** role in SQL Server Reporting Services. For more information, see [Add accounts to administer TFS](/azure/devops/server/admin/add-administrator).  
  
## Create a Reporting Server project  
  
1.  In Visual Studio, open the **File** menu, point to **New**, and then select **Project**.  
  
     The **New Project** dialog box appears.  
  
2.  Under **Project types**, select **Business Intelligence Projects**.  
  
     If **Business Intelligence Projects** doesn't appear in the list of project types, you must install SQL Server Business Intelligence Development Studio. For more information, see the Prerequisites section near the start of this article.  
  
3.  Under **Templates**, select **Report Server Project.**  
  
4.  In the **Name** box, type a name for the project, and then select **OK**.  
  
## Create the Tfs2010ReportDS and Tfs2010OlapReportDS data sources  
  
1.  On the **Project** menu, select **Add New Item**.  
  
     The **Add New Item** dialog box appears.  
  
2.  Select **Data Source**, and then select  **Add**.  
  
     The **Shared Data Source** dialog box appears.  
  
3.  In the **Name** box, type `Tfs2010ReportDS`.  
  
    > [!IMPORTANT]
    >  If you do not use the name specified in this step, the procedures for deploying your reports will not work properly. This procedure creates local copies of the data sources that you will use as you develop your reports. These copies are equivalent to data sources that TFS has created on the server that is running SQL Server Reporting Services. When you deploy a report, TFS will use the data source on the server that has the same name as your local copy of the data source in your project.  
  
4.  In the **Type** list, select **Microsoft SQL Server**, and then select **Edit**.  
  
5.  In the **Connection Properties** dialog box, type the name of the server and instance (*DataWarehouseServerName*/*InstanceName*) that runs Analysis Services, and then select **Use Windows Authentication**.  
  
    > [!NOTE]
    >  In a typical configuration, use the name of the data-tier server. However, the warehouse can also be hosted on a separate server.  
  
6.  Select **Select or Enter a database name**, and then select **Tfs_Warehouse**.  
  
7.  (Optional) Select **Test Connection** to verify that the connection works as defined, and then select **OK** to return to the **Shared Data Source** dialog box.  
  
8.  Select **OK**, and then select **OK** to create the data source.  
  
9. Repeat steps 1-7 to create another data source. Specify **Microsoft SQL Server Analysis Services** for the type of the data source, and name it `Tfs2010OlapReportDS`. Specify **Tfs_Analysis** for the database name.  
  
     Even though you might have installed or upgraded to TFS 2013, these names, which were assigned to the data sources for TFS 2010, are in use.  
  
## Set the project's properties to deploy reports  
  
1. On the **Project** menu, select **Properties**.  
  
2. For the value of the **OverwriteDataSources** property, select **False**.  
  
   > [!NOTE]
   >  If you set this option, you can publish your reports without overwriting the data sources on the server with those that you defined in this project.  
  
3. For the value of the **TargetDataSourceFolder** property, type `/`.  
  
4. For the value of the **TargetReportFolder** property, type the path of the folder where you'll deploy the reports from this project. If you'll deploy the reports to a specific team project, use the name of the team project.  
  
5. For the value of the **TargetServerURL** property, type the URL of the Reporting Services server. For example, you can type **http://**<em>ReportingServicesServerName</em>**/reportserver**.