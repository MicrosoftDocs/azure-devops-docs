---
title: User Story Test Status Excel Report (Agile)  
description: Determine gaps in test coverage and monitor test progress for each user story.
titleSuffix: TFS
ms.prod: devops
ms.technology: devops-analytics
ms.topic: reference
ms.assetid: bb10f6a4-25f0-4fcf-b0f2-789264d3ef27
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.date: 12/30/2016
---

# User Story Test Status Excel Report (Agile)

[!INCLUDE [temp](../_shared/tfs-sharepoint-version.md)]

You can use the User Story Test Status report to help determine gaps in test coverage and monitor test progress for each user story. This report indicates how many test cases are passing or failing for each user story. This report is available only when the team creates test plans and starts to run tests by using Microsoft Test Manager. For information about how to define test suites and test plans, see [Plan your tests](../../test/create-test-cases.md).  
  
 For information about how to access this report, see [Excel reports](excel-reports.md).  
  
> [!NOTE]
>  You can view the User Story Test Status report from the Test dashboard. You can access this dashboard only if your team project portal has been enabled and is configured to use SharePoint Server Enterprise Edition. For more information, see [Project portal dashboards](../sharepoint-dashboards/project-portal-dashboards.md).  
  
 **Required permissions**  
  
 To view the report, you must be assigned or belong to a group that has been assigned the **Read** permissions in SharePoint Products for the team project.  
  
 To modify or customize the report, you must be a member of the **TfsWarehouseDataReaders** security role in SQL Server Analysis Services. You must also be assigned or belong to a group that has been assigned the **Members** permissions in SharePoint Products for the team project. For more information, see [Grant Access to the Databases of the Data Warehouse for Team System](../admin/grant-permissions-to-reports.md).  
  
##  <a name="Data"></a> Data in the report  
 The User Story Test Status report provides a horizontal bar chart that shows the count of results for each test case and test configuration combination that the team has defined for each user story. The chart groups the results according to their most recent test runs, where the options are **Passed** (green), **Failed** (red), **Blocked** (purple), or **Not Run** (gray).  
  
 ![User Story Test Status Excel Report](_img/procguid_exruserstore.png "ProcGuid_ExRUserStore")  
  
 The report is based on a PivotChart report that shows the most recent data that is stored in the data warehouse and that is captured for the results for the test cases that are linked to specific user stories.  
  
### Required activities for monitoring test activity  
 For the User Story Test Status report to be useful and accurate, the team must perform the following activities:  
  
-   Define test cases and user stories, and link test cases to user stories by using the **Tested By** link type.  
  
-   Define test plans, and assign test cases to them.  
  
-   For manual tests, mark the results of each validation step in the test case as passed or failed.  
  
    > [!IMPORTANT]
    >  Testers must mark a test step with a status if it is a validation test step. The overall result for a test case reflects the status of all the test steps that the tester marked. Therefore, the test case will have a status of failed if the tester marked any test step as failed or not marked.  
  
     For automated tests, each test case is automatically marked as passed or failed.  
  
-   (Optional) To support filtering, assign **Iteration** and **Area** paths to each test case.  
  
##  <a name="Interpreting"></a> Interpreting the report  
 You should expect the User Story Test Status report to vary depending on where you are in your product development cycle. Early iterations will show few test cases that are passing. However, you should expect most test cases to pass toward the end of an iteration or product development cycle.  
  
 You can review the report to find answers to the following questions:  
  
-   Which user stories have a low overall count of test cases?  
  
-   Which user stories have a high overall count of test cases that are blocked or have never been run?  
  
-   Does the test case coverage for each user story meet expectations?  
  
-   Which user stories have a high rate of test failures?  
  
-   What is the average number of test cases that are defined per user story?  
  
-   Which user stories have a high rate of test failures?  
  
-   Is the team running test cases for each user story?  
  
-   If test cases are blocked or not being run, does the team understand the blocking issues, and is the team addressing them?  
  
##  <a name="Updating"></a> Updating and customizing the report  
 You can update the User Story Test Status report by opening it in Office Excel and changing the filter options for the PivotTable report. You can customize this report to support other views, as the following table describes.  
  
|View|Action|  
|----------|------------|  
|User story test status for an iteration|Change the filter for **Iteration** (default=All)|  
|User story test status for a product area|Change the filter for **Area** (default=All)|  
  
 For more information about how to work with and customize PivotTables and PivotChart reports, see the following pages on the Microsoft Web site:  
  
-   [Ways to customize PivotTable reports](http://go.microsoft.com/fwlink/?LinkId=165722)  
  
-   [Edit or remove a workbook from Excel Services](http://go.microsoft.com/fwlink/?LinkId=165723)  
  
-   [Publish a workbook to Excel Services](http://go.microsoft.com/fwlink/?LinkId=165724)  
  
-   [Save a file to a SharePoint library or another Web location](http://go.microsoft.com/fwlink/?LinkId=165725)  
  
## Related notes
 [Excel reports](excel-reports.md)
