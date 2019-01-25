---
title: Test Case Readiness Excel Report  
description: Use the Test Case Readiness report to help monitor the progress that the team is making toward defining and designing Test Cases.
titleSuffix: TFS
ms.prod: devops
ms.technology: devops-analytics
ms.topic: reference
ms.assetid: faaad500-45da-45c7-8ab2-59d1c6f30c2a
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.date: 12/30/2016
---

# Test Case Readiness Excel Report
[!INCLUDE [temp](../_shared/tfs-sharepoint-version.md)]

You can use the Test Case Readiness report to help monitor the progress that the team is making toward defining and designing Test Cases. This report shows a burndown chart of how many test cases were in the design and ready states for the most recent four weeks.  
  
 For information about how to access this report, see [Excel reports](excel-reports.md).  
  
> [!NOTE]
>  You can view the Test Case Readiness from the Test dashboard. You can access this dashboard only if your team project portal has been enabled and is configured to use SharePoint Server Enterprise Edition. For more information, see [Share information using the project portal](../sharepoint-dashboards/share-information-using-the-project-portal.md).  
  
 **Required permissions**  
  
 To view the report, you must be assigned or belong to a group that has been assigned the **Read** permissions in SharePoint Products for the team project.  
  
 To modify or customize the report, you must be a member of the **TfsWarehouseDataReaders** security role in SQL Server Analysis Services. You must also be assigned or belong to a group that has been assigned the **Members** permissions in SharePoint Products for the team project. For more information, see [Grant Access to the Databases of the Data Warehouse for Team System](../admin/grant-permissions-to-reports.md).  
  
##  <a name="Data"></a> Data in the report  
 This report provides a stacked area graph that shows how many Test Cases have been in the **Design** or **Ready** state for the most recent four weeks.  
  
 ![Test Case Readiness Excel Report](_img/procguid_exceltestcase.png "ProcGuid_ExcelTestCase")  
  
 The report is based on a PivotChart report that shows the data that is stored in the data warehouse for Test Cases.  
  
### Required activities for monitoring test case readiness  
 For the Test Case Readiness report to be useful and accurate, the team must perform the following activities:  
  
-   Define [test cases](../../test/create-test-cases.md), and update their **State** from **Design** to **Ready**.  
  
-   (Optional) To support filtering, assign **Iteration** and **Area** paths to Test Cases.  
  
##  <a name="Interpreting"></a> Interpreting the report  
 You should expect the Test Case Readiness report to vary depending on where you are in your product development cycle. Early iterations should show a gradual increase in how many Test Cases are in the **Design** state. Toward the end of the product cycle, most Test Cases should be in a **Ready** state.  
  
 You can review the report to find answers to the following questions:  
  
-   How many Test Cases is the test team defining?  
  
-   How many Tests Cases are ready to run today?  
  
-   How many Test Cases must the team still write and review?  
  
-   Does the overall number of Test Cases appear to be enough for the number of User Stories that the team is implementing?  
  
-   What is the percentage of Test Cases that the test team can run today?  
  
-   Will the team be able to have all the Tests Cases ready by the end of the iteration?  
  
##  <a name="Updating"></a> Updating and customizing the report  
 You can update the Test Case Readiness report by opening it in Office Excel and changing the filter options for the PivotTable report. You can customize this report to support other views, as the following table describes.  
  
|View|Action|  
|----------|------------|  
|Test Case readiness for an iteration|Change the filter for **Iteration** (default=All)|  
|Test Case readiness for a product area|Change the filter for **Area** (default=All)|  
|Test Case readiness for the most recent six, eight, or more weeks|In the Columns PivotTable Field List, replace **@@Last 4 weeks@@** with a different **Set**|  
  
 For more information about how to work with and customize PivotTables and PivotChart reports, see the following pages on the Microsoft Web site:  
  
-   [Ways to customize PivotTable reports](http://go.microsoft.com/fwlink/?LinkId=165722)  
  
-   [Edit or remove a workbook from Excel Services](http://go.microsoft.com/fwlink/?LinkId=165723)  
  
-   [Publish a workbook to Excel Services](http://go.microsoft.com/fwlink/?LinkId=165724)  
  
-   [Save a file to a SharePoint library or another Web location](http://go.microsoft.com/fwlink/?LinkId=165725)  
  
## Related notes
 [Excel reports](excel-reports.md)
