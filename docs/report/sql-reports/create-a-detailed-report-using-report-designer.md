---
title: Create a Detailed Report using Report Designer
titleSuffix: TFS 
ms.prod: devops
ms.technology: devops-analytics
ms.topic: conceptual
description: Understand how to track team's progress by creating reports that contain detailed information - Team Foundation Server 
ms.assetid: 073c4d96-8525-40fc-8fd6-944d161acc2d
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.date: 10/17/17
---



# Create a Detailed Report using Report Designer

[!INCLUDE [temp](../_shared/tfs-report-platform-version.md)]

You can track your team's progress more easily by creating reports that contain detailed information from Visual Studio Application Lifecycle Management (ALM) (TFS). For example, you can create a report that includes details such as titles of work items. To create this type of report, you can use SQL Server's Report Designer and the relational database of the TFS data warehouse.  
  
 After you create your first report, you might change it by experimenting with different data and layouts. For example, you could group the table by the Assigned To field.  
  
 If you have not created reports for TFS before, see [Dashboards and reports](../admin/review-team-activities-for-useful-reports.md). For more information about how to use Report Designer, see the Microsoft Web site: [Designing and Implementing Reports Using Report Designer](http://go.microsoft.com/fwlink/?LinkId=181954). To create reports that primarily show aggregate information, see [Create an aggregate report using Report Designer and the Analysis Services Cube](create-aggregate-report-report-designer-analysis-services-cube.md).  
  
 **Requirements**  
  
-   You must have Visual Studio and SQL Server Business Intelligence Development Studio installed on the same computer.  
  
     To install Business Intelligence Development Studio, run the Setup program for SQL Server, and select the **Client Components** check box when you specify the components to install. To install the most recent service pack for SQL Server, see the following page on the Microsoft Web site: [How to obtain the latest service pack for SQL Server 2008](http://go.microsoft.com/fwlink/?LinkID=182174).  
  
-   You must be a member of the **TfsWarehouseDataReaders** security role in the Analysis Services database on the data-tier server of Team Foundation Server. For more information, see [How to: Grant Access to the Databases of the Data Warehouse](../admin/grant-permissions-to-reports.md).  

-   You must be a member of the **Team Foundation Content Manager** role in SQL Server Reporting Services. For more information, see [Add accounts to administer TFS](/azure/devops/server/admin/add-administrator-tfs).  
  
### To create a report  
  
1.  In Visual Studio, create or open a Report Server project. For more information, see [Create a Report Server Project](create-a-report-server-project.md).  
  
2.  On the **Project** menu, choose **Add New Item**.  
  
     The **Add New Item** dialog box appears.  
  
3.  Choose **Report Wizard**, and then choose **Add**.  
  
     The **Report Wizard** opens to the **Select Data Source** page.  
  
4.  Choose the **TFS2010ReportDS** shared data source, and then choose **Next**.  
  
     Even though you might have installed or upgraded to TFS 2013, these names, which were assigned to the data sources for TFS 2010, are in use.  
  
     The wizard advances to the **Design the Query** page.  
  
    > [!NOTE]
    >  The data source that you specify connects to the relational database from the TFS data warehouse. For more information, see [Choose the source of data and authoring tool](https://msdn.microsoft.com/library/bb649557.aspx). If your project does not have this data source, create it. For more information, see [Create a Report Server Project](create-a-report-server-project.md).  
  
5.  Choose **Query Builder**.  
  
     The **Query Build** dialog box appears.  
  
### To create the query that will retrieve the data for the report  
  
1.  Choose **Generic Query Designer** on the query builder toolbar to enable the query designer.  
  
2.  Choose **Add Table** on the query builder toolbar.  
  
     The **Add Table** dialog box appears.  
  
3.  Choose the **Current Work Item** table, and then choose **Add**.  
  
4.  Choose the **Work Item** table, and then choose **Add**.  
  
     This table contains the Work Item dimension.  
  
5.  Choose the **Person** table, choose **Add**, and then click **Close**.  
  
     This table contains the Person dimension. The fact table for current work items has foreign keys to this table for the Assigned To, Changed By, and Created By fields.  
  
6.  In the **Work Item** table, select the check boxes for **System_Title** and **System_State**.  
  
7.  In the **Person** table, select the check box for **Person**.  
  
8.  In the query pane, delete the clauses that use Changed By and Created By so that you now have the following query.  
  
    ```sql
    SELECT Person.Person, [Work Item].System_State  
    FROM   [Current Work Item] INNER JOIN  
           [Work Item] ON [Current Work Item].[Work Item] =  
           [Work Item].__ID INNER JOIN  
           Person ON [Current Work Item].[Assigned To] = Person.__ID  
    ```  
  
9. Choose **Run** on the query builder toolbar to verify that the query works, and then choose **OK**.  
  
     The **Query Builder** is closed, and the **Design the Query** page of the **Report Wizard** reappears.  
  
### To design the report layout  
  
1.  Choose **Next**.  
  
     The wizard advances to the **Report Type** page.  
  
2.  Choose **Tabular**, and then choose **Next**.  
  
     The wizard advances to the **Design the Table** page.  
  
3.  Choose **System_Title**, and then choose **Details**.  
  
4.  Choose **Person**, and then choose **Details**.  
  
5.  Choose **System_State**, choose **Group**, and then choose **Next**.  
  
     The wizard advances to the **Choose the Table Layout** page.  
  
6.  Choose the layout options that you prefer, and then choose **Next**.  
  
     The wizard advances to the **Choose the Table Style** page.  
  
7.  Choose any style, and then choose **Next**.  
  
     The wizard advances to the **Completing the Report** page.  
  
8.  Type a name for the report, choose **Preview Report**, and then choose **Finish** to create the report.  
  
     The wizard closes, and the report document window appears with the **Preview** tab active.  
  
### To deploy the report  
  
1.  In **Solution Explorer**, choose the report.  
  
2.  On the **Build** menu, choose **Deploy** *ReportName*.  
  
     To successfully deploy the report, your project settings must be set to appropriate values. For more information, see [Create a Report Server Project](create-a-report-server-project.md).  
  
## Related notes
 [Table reference for the relational warehouse database](https://msdn.microsoft.com/library/ms244691.aspx)