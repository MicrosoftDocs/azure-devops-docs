---
title: Test Case Readiness Report 
titleSuffix: TFS 
ms.prod: devops
ms.technology: devops-analytics
ms.topic: reference
description: Determine how many test cases have been defined and are ready to run 
ms.assetid: c4e804d5-1549-41c0-a365-28fdec77bffe
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.date: 10/17/17
---

# Test Case Readiness report

[!INCLUDE [temp](../_shared/tfs-report-platform-version.md)]

After the team starts to define test cases, you can use the Test Case Readiness report to determine how many test cases have been defined and are ready to run.  
  
> [!NOTE]
>  The Test Case Readiness report is useful only if your team is testing your application by using Test Runner and Microsoft Test Manager. For more information about how to define and use test cases, see [Plan your tests](../../test/create-test-cases.md).  
  
 For information about how to access, refresh, or manage reports, see [Reporting Services Reports](reporting-services-reports.md).  
  
> [!NOTE]
>  This report requires that the team project collection that contains your team project was configured with SQL Server Reporting Services. This report is not available if ![Report](_img/icon_reportte.png "Icon_reportTE") **Reports** does not appear when you open Team Explorer and expand your team project node.  
  
**You can use this report to answer the following questions**:<br /><br /> -   When will all the test cases be ready to run?<br />-   Will all the test cases be ready to run by the end of the iteration?<br />-   How many test cases must the team still write and review?<br />-   How many test cases are ready to be run?
  
 **Required permissions**  
  
 To view the report, you must be assigned or belong to a group that has been assigned the **Browser** role in Reporting Services. For more information, see [Grant permissions to view or create reports](../admin/grant-permissions-to-reports.md).  
  
##  <a name="Data"></a> Data in the report  
 The Test Case Readiness report provides an area graph that shows how many test cases are in the **Design** or **Ready** state over the time period that you specify. By reviewing this data, you can easily determine how quickly the team is designing test cases and making them ready for testing. When you create a test case, it is automatically set to the design state. After the team has reviewed and approved the test case, then a team member should change its state to **Ready**, which indicates that the test case is ready to be run.  
  
 The following illustration shows an example of a Test Case Readiness report.  
  
 ![Example Test Case Readiness Report](_img/procguid_testcasereadiness.png "ProcGuid_TestCaseReadiness")  
  
 The data that appears in the report is derived from the data warehouse. The report summarizes the data that was captured for each test case during the time interval  that you specified, based on the area path and other filters that you specified.  
  
 You can filter the report in the following ways:  
  
-   Change the start and end dates for the report.  
  
-   Filter the test cases that are counted in the report by specifying area paths, priority, and state.  
  
 For more information, see [Filtering the Report](#Changing) later in this article.  
  
### Required activities for tracking test cases  
 For the Test Case Readiness report to be useful and accurate, the team must perform the following activities:  
  
-   Define test cases, and specify the **Iteration** and **Area** paths for each test case.  
  
-   Update the state of each test case as it progresses from **Design** to **Ready** to **Closed**.  
  
##  <a name="Interpreting"></a> Interpreting the report  
 The Test Case Readiness report displays the number of all test cases, grouped by state.  
  
### Questions answered by the report  
 You can review the report to determine the team's progress within an iteration or over time. For example, you can answer these questions:  
  
-   How many test cases are ready to be run?  
  
-   How many test cases must the team still write and review?  
  
-   When will all the test cases be ready to run?  
  
-   Will all the test cases be ready to run by the end of the iteration?  
  
### Healthy version of report  
 A healthy Test Case Readiness report will show a steady progress in test cases being designed and moving to the ready state, as the following illustration shows.  
  
 ![Healthy version of Test Case Readiness](_img/procguid_testcasereadiness_healthy.png "ProcGuid_TestCaseReadiness_Healthy")  
  
### Unhealthy version of report  
 The following illustration shows an unhealthy version of the Test Case Readiness report, in which the states do not change for several weeks at a time.  
  
 ![Unhealthy version of Test Case Readiness](_img/procguide_testcasereadiness_unhealthy.png "ProcGuide_TestCaseReadiness_Unhealthy")  
  
 An unhealthy Test Case Readiness report shows one or more of the following indicators:  
  
-   **No test cases are ready to be run**.  
  
     When all test cases remain in a design state for a long time, some issue is blocking progress. You might want to investigate the cause of the blockage.  
  
-   **The number of test cases does not appear sufficient**.  
  
     The number of test cases that are defined for a project should be equal to or larger than the number of user stories that the team is implementing.  
  
##  <a name="Changing"></a> Filtering the report  
 You can filter the Test Case Readiness report to show only those test cases that are defined for the product areas, states, and priorities that you specify. The following illustration shows the available filters:  
  
 ![Filters for Test Case Readiness report](_img/procguid_readiness.png "ProcGuid_Readiness")  
  
#### To change the time interval of the report  
  
1.  In **Iteration Start (Date)** or **Iteration End (Date)**, click the calendar icon, and then click the appropriate date.  
  
2.  Click **View Report**.  
  
#### To filter the test cases that are counted in the report  
  
1.  Perform one or both of the following actions:  
  
    -   In the **Area** list, select the check box of each product area to include.  
  
    -   In the **State** and **Priority** lists, select the check box of each state and priority to include.  
  
2.  Click **View Report**.  
  
## Related notes
- [Reporting Services Reports](reporting-services-reports.md)

