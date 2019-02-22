---
title: Requirement Test Status Excel Report (CMMI)  
description: Use to determine gaps in test coverage and monitor test progress for each requirement.
titleSuffix: TFS
ms.prod: devops
ms.technology: devops-analytics
ms.topic: reference
ms.assetid: 4e5ffafb-82fc-4aaa-b7bb-e5e47b239e7c
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.date: 12/30/2016
---

# Requirement Test Status Excel Report (CMMI)

[!INCLUDE [temp](../_shared/tfs-sharepoint-version.md)]

You can use the Requirement Test Status report to help determine gaps in test coverage and monitor test progress for each requirement. This report indicates how many tests are passing or failing for each requirement. This report is available only when the team creates test plans and starts to run tests by using Microsoft Test Manager. For information about how to define test suites and test plans, see [Plan your tests](../../test/create-test-cases.md).  
  
 For information about how to access this report, see [Excel reports](excel-reports.md).  
  
> [!NOTE]
>  You can view the Requirement Test Status report from the Test dashboard. You can access this dashboard only if your team project portal has been enabled and is configured to use SharePoint Server Enterprise Edition. For more information, see [Dashboards (CMMI)](http://msdn.microsoft.com/c149b78b-1803-4dc0-aefe-35dbb13a5de0).  
  
 **Required permissions**  
  
 To view the report, you must be assigned or belong to a group that has been assigned the **Read** permissions in SharePoint Products for the team project.  
  
 To modify or customize the report, you must be a member of the **TfsWarehouseDataReaders** security role in SQL Server Analysis Services. You must also be assigned or belong to a group that has been assigned the **Members** permissions in SharePoint Products for the team project. For more information, see [Grant Access to the Databases of the Data Warehouse for Team System](../admin/grant-permissions-to-reports.md).  
  
##  <a name="Data"></a> Data in the report  
 The Requirement Test Status report provides a horizontal bar chart that shows the count of results for each test case and test configuration combination that the team has defined for each requirement. The chart groups the results according to their most recent test runs, where the options are **Passed** (green), **Failed** (red), **Blocked** (purple), or **Not Run** (gray).  
  
 ![Requirement Test Status Excel report](_img/procg_reqteststatus.png "ProcG_ReqTestStatus")  
  
 The report is based on a PivotChart report that shows the most recent data that is stored in the data warehouse and that is captured for the results for the test cases that are linked to specific requirements.  
  
### Required activities for monitoring test activity  
 For the Requirement Test Status report to be useful and accurate, the team must perform the following activities:  
  
-   Define test cases and requirements, and link test cases to requirements by using the **Tested By** link type.  
  
-   Define test plans, and assign test cases to them.  
  
-   For manual tests, mark the results of each validation step in the test case as passed or failed.  
  
    > [!IMPORTANT]
    >  Testers must mark a test step with a status if it is a validation test step. The overall result for a test case reflects the status of all the test steps that the tester marked. Therefore, the test case will have a status of failed if the tester marked any test step as failed or not marked.  
  
     For automated tests, each test is automatically marked as passed or failed.  
  
-   (Optional) To support filtering, assign **Iteration** and **Area** paths to each Test Case.  
  
##  <a name="Interpreting"></a> Interpreting the report  
 You should expect the Requirement Test Status report to vary depending on where you are in your product development cycle. Early iterations will show few tests that are passing. However, you should expect most tests to pass toward the end of an iteration or product development cycle.  
  
 You can review the report to find answers to the following questions:  
  
-   Which requirements have a low overall count of tests?  
  
-   Which requirements have a high overall count of tests that are blocked or have never been run?  
  
-   Does the test coverage for each requirement meet expectations?  
  
-   Which requirements have a high rate of test failures?  
  
-   What is the average number of tests that are defined per requirement?  
  
-   Which requirements have a high rate of test failures?  
  
-   Is the team running tests for each requirement?  
  
-   If tests are blocked or not being run, does the team understand the blocking issues, and is the team addressing them?  
  
##  <a name="Updating"></a> Updating and customizing the report  
 You can update the Requirement Test Status report by opening it in Office Excel and changing the filter options for the PivotTable report. You can customize this report to support other views, as the following table describes.  
  
|View|Action|  
|----------|------------|  
|Requirement test status for an iteration|Change the filter for **Iteration** (default=All)|  
|Requirement test status for a product area|Change the filter for **Area** (default=All)|  
  
 For more information about how to work with and customize PivotTables and PivotChart reports, see the following pages on the Microsoft Web site:  
  
-   [Ways to customize PivotTable reports](http://go.microsoft.com/fwlink/?LinkId=165722)  
  
-   [Edit or remove a workbook from Excel Services](http://go.microsoft.com/fwlink/?LinkId=165723)  
  
-   [Publish a workbook to Excel Services](http://go.microsoft.com/fwlink/?LinkId=165724)  
  
-   [Save a file to a SharePoint library or another Web location](http://go.microsoft.com/fwlink/?LinkId=165725)  
  
## Related notes
 [Excel reports](excel-reports.md)
