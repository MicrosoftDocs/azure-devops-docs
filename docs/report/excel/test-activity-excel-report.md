---
title: Test Activity Excel Report 
description: Helps monitor the number of manual tests that the team has run over time.
titleSuffix: TFS
ms.prod: devops
ms.technology: devops-analytics
ms.topic: reference
ms.assetid: cb950153-2f44-4b0b-afeb-cfb697281930
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.date: 12/30/2016
---

# Test Activity Excel Report

[!INCLUDE [temp](../_shared/tfs-sharepoint-version.md)]


You can use the Test Activity report to help monitor the number of manual tests that the team has run over time. This report is available only after the team creates test plans and starts to run tests by using Microsoft Test Manager. For information about how to define test suites and test plans, see [Plan your tests](../../test/create-test-cases.md).  
  
 For information about how to access this report, see [Excel reports](excel-reports.md).  
  
> [!NOTE]
>  You can view the Test Activity report from the Test dashboard. You can access this dashboard only if your team project portal has been enabled and is configured to use SharePoint Server Enterprise Edition. For more information, see [Share information using the project portal](../sharepoint-dashboards/share-information-using-the-project-portal.md).  
  
 **Required permissions**  
  
 To view the report, you must be assigned or belong to a group that has been assigned the **Read** permissions in SharePoint Products for the team project.  
  
 To modify or customize the report, you must be a member of the **TfsWarehouseDataReaders** security role in SQL Server Analysis Services. You must also be assigned or belong to a group that has been assigned the **Members** permissions in SharePoint Products for the team project. For more information, see [Grant Access to the Databases of the Data Warehouse for Team System](../admin/grant-permissions-to-reports.md).  
  
##  <a name="Data"></a> Data in the report  
 You can use the Test Activity report to understand how well the team is completing tests. This report is based on a PivotChart that shows the most recent four weeks of data that was captured for test results and that is stored in the data warehouse.  
  
 ![Test Activity Excel Report](_img/procguid_testactivity.png "ProcGuid_TestActivity")  
  
### Required activities for monitoring test activity  
 For the Test Activity report to be useful and accurate, the team must perform the following activities:  
  
-   Define test cases and test pans, and assign test cases to test plans.  
  
-   For manual tests, mark the results of each validation step in the test case as passed or failed.  
  
    > [!IMPORTANT]
    >  Testers must mark a test step with a status if it is a validation test step. The overall result for a test case reflects the status of all the test steps that were marked. Therefore, the test case will have a status of failed if any test step is marked as failed or not marked.  
  
     For automated tests, each test case is automatically marked as passed or failed.  
  
-   (Optional) To support filtering, assign **Iteration** and **Area** paths to each test case.  
  
##  <a name="Interpreting"></a> Interpreting the report  
 You should expect the Test Activity report to vary depending on where you are in your product development cycle. Early iterations should show a gradual increase in the number of manual test cases that have been run.  
  
 You can review the report to answer to the following questions:  
  
-   Is the trend of manual tests that the team is running consistently increasing?  
  
-   Do you identify any spikes in the test activity that you cannot account for?  
  
 The Test Activity report indicates the results for each test case run for each test configuration and for all test plans. Spikes that might occur may be early indicators of problems in either the test activity or the quality of code that is being checked in.  
  
 You might want to check the status of recent builds, bug status, and code churn to determine whether the metrics for each of these factors can help explain the changes in test activity.  
  
##  <a name="Updating"></a> Updating and customizing the report  
 You can update the Test Activity report by opening it in Microsoft Excel and changing the filter options for the PivotTable report. You can customize this report to support other views, as the following table describes.  
  
|View|Action|  
|----------|------------|  
|Test activity for an iteration|Change the filter for **Iteration** (default=All)|  
|Test activity for a product area|Change the filter for **Area** (default=All)|  
|Test activity for a specific test plan or suite of test plans|Change the filter for **Test Plan** (default=All)|  
|Test activity for automated test cases|Change the filter for **Is Automated** (default=False)|  
|Test activity for the last six, eight, or more weeks|In the Columns PivotTable Field List, replace **@@Last 4 weeks@@** with a different **Set**|  
  
 For more information about how to work with and customize PivotTable and PivotChart reports, see the following pages on the Microsoft Web site:  
  
-   [Ways to customize PivotTable reports](http://go.microsoft.com/fwlink/?LinkId=165722)  
  
-   [Edit or remove a workbook from Excel Services](http://go.microsoft.com/fwlink/?LinkId=165723)  
  
-   [Publish a workbook to Excel Services](http://go.microsoft.com/fwlink/?LinkId=165724)  
  
-   [Save a file to a SharePoint library or another Web location](http://go.microsoft.com/fwlink/?LinkId=165725)  
  
## Related notes
 [Excel reports](excel-reports.md)
