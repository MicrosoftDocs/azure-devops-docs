---
title: Test dashboard (Agile and CMMI) | TFS
description: Use test dashboard to monitor test activities, report on progress and find gaps in test coverage.
ms.prod: devops
ms.technology: devops-analytics
ms.topic: conceptual
ms.assetid: 701fd381-fff0-4508-9316-852a45b6afb4
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.date: 12/30/2016
---

# Test dashboard (Agile and CMMI)
[!INCLUDE [temp](../_shared/tfs-sharepoint-version.md)]

By using the test dashboard, you can monitor test activities, report on progress, find gaps in test coverage, and identify test areas that might require additional investigation. This dashboard displays five reports that provide information about testing that has occurred in the most recent four weeks.  
  

**You can use this dashboard to answer the following questions**:<br /><br /> -   Is test case authoring on track?<br />-   Has the team defined test cases for all user stories or requirements?<br />-   What are the proportions of test cases that are passing, failing, and blocked?<br />-   Do test failure metrics indicate a problem that requires further investigation?<br />-   What is the status of last night's build?<br />-   What are the most recent check-ins? 
  
 **Requirements**  
  
-   The **Test Plan Progress**, **Test Case Readiness**, **User Story Test Status**, **Requirement Test Status**, and **Test Activity** reports are available only when the team creates test plans and runs tests as described in [Plan your tests](../../test/create-test-cases.md).  
  
-   Burndown, progress, trend charts, and reports ![Step 1](_img/procguid_1.png "ProcGuid_1") through ![Step 5](_img/procguid_6.png "ProcGuid_6") do not appear when the server that hosts Analysis Services for the team project is not available.  
  
-   Plus requirements listed in [Project portal dashboards](project-portal-dashboards.md).  
  
##  <a name="Data"></a> Data displayed in the dashboard  
 You can use the test dashboard to understand how well the team is progressing in testing the user stories (Agile) or requirements (CMMI). The test dashboard, displays the following web parts.  
  
 **Agile process template version**  
  
 ![Web Parts for Test Progress Dashboard](_img/procguid_dashboardtest.png "ProcGuid_DashboardTest")  
  
 **CMMI process template version**  
  
 ![Test Dashboard](_img/procguid_dashboard_test.png "ProcGuid_Dashboard_Test")  
  
|Web Part|Data displayed|Related topic|  
|--------------|--------------------|-------------------|  
|![Step 1](_img/procguid_1.png "ProcGuid_1")|Stacked area graph of the test results of all test cases grouped into their most recent recorded outcome during the past four weeks. Outcomes include **Never Run**, **Blocked**, **Failed**, and **Passed**.<br /><br /> ![Test Plan Progress Excel Report](_img/procguid_agiletest.png "ProcGuid_AgileTest")|[Test Plan Progress](../sql-reports/test-plan-progress-report.md)|  
|![Step 2](_img/procguid_2.png "ProcGuid_2")|Stacked area graph that shows how many test cases have been in the **Design** or **Ready** state for the most recent four weeks.<br /><br /> ![Test Case Readiness Excel Report](_img/procguid_exceltestcase.png "ProcGuid_ExcelTestCase")|[Test Case Readiness](../sql-reports/test-case-readiness-report.md)|  
|![Step 3](_img/procguid_3.png "ProcGuid_3")|Horizontal bar chart that shows the count of test results for each combination of test case and test configuration that is defined for each user story or requirement. The chart groups the test results according to their most recent test run, where the options are **Passed** (green), **Failed** (red), **Blocked** (purple), or **Not Run** (gray).<br /><br /> ![User Story Test Status Excel Report](_img/procguid_exruserstore.png "ProcGuid_ExRUserStore")|[User Story Test Status](../excel/user-story-test-status-excel-report-agile.md)<br /><br /> [Requirement Test Status](../excel/requirement-test-status-excel-report-cmmi.md)|  
|![Step 4](_img/procguid_4.png "ProcGuid_4")|Line chart that shows the cumulative count of all results run for all manual test cases during the most recent four weeks.<br /><br /> ![Test Activity Excel Report](_img/procguid_testactivity.png "ProcGuid_TestActivity")|[Test Activity](../excel/test-activity-excel-report.md)|  
|![Step 5](_img/procguid_5.png "ProcGuid_6")|Stacked area graph that shows the cumulative count of all failed outcome results for test cases, sorted by failure type, during the most recent four weeks. Failure types include **Regression**, **New Issue**, and **Known Issue**.<br /><br /> ![Failure Analysis Excel Report](_img/procguid_failureanalysis.png "ProcGuid_FailureAnalysis")|[Failure Analysis](../excel/failure-analysis-excel-report.md)|  
|![Step 6](_img/procguid_6.png "ProcGuid_6a")|List of upcoming events. This list is derived from a SharePoint Web Part.<br /><br /> ![Import Events Web part](_img/sharepoint_dashboard.png "SharePoint_Dashboard")|Not applicable|  
|![Step 7](_img/procguid_7.png "ProcGuid_7")|Count of active, resolved, and closed work items. You can open the list of work items by choosing each number. This list is derived from a Team Web Access Web Part.<br /><br /> ![Project Work Items Web part](_img/twsa_dashprojectwi.png "TWSA_DashProjectWI")|Not applicable|  
|![9](_img/procguid_9.png "ProcGuid_9")|List of recent builds and their build status. You can view more details by choosing a specific build. This list is derived from a Team Web Access Web Part.<br /><br /> ![Recent Builds Web part](_img/twsa_dashbuilds.png "TWSA_DashBuilds")<br /><br /> **Legend**:<br /><br /> ![Build in Progress](_img/icon_buildstatus_1.gif "Icon_BuildStatus_1"): Build not started<br /><br /> ![Build Not Started](_img/icon_buildstatus_2.gif "Icon_BuildStatus_2"): Build in progress<br /><br /> ![Build Succeeded](_img/icon_buildstatus_3.gif "Icon_BuildStatus_3"): Build succeeded<br /><br /> ![Build Failed](_img/icon_buildstatus_4.gif "Icon_BuildStatus_4"): Build failed<br /><br /> ![Build Stopped](_img/icon_buildstatus_5.gif "Icon_BuildStatus_5"): Build stopped<br /><br /> ![Build Partially Succeeded](_img/icon_buildstatus_6.gif "Icon_BuildStatus_6"): Build partially succeeded|[Run, monitor, and manage](../../pipelines/overview.md)|  
|![10](_img/procguid_10.png "ProcGuid_10")|List of the most recent check-ins. You can view more details by choosing a specific check-in. This list is derived from a Team Web Access Web Part.<br /><br /> ![Recent Checkins Web part](_img/twsa_dashcheckins.png "TWSA_DashCheckins")|[Manage pending changes](../../repos/tfvc/develop-code-manage-pending-changes.md)|  
  
##  <a name="Activities"></a> Required activities to monitor test efforts  
 For the reports in the test dashboard to be useful and accurate, the team must perform the following activities:  
  
-   Define test cases and user stories or requirements, and create **Tested By** links from test cases to user stories or requirements.  
  
-   [Define test plans, and assign test cases to test plans](../../test/create-test-cases.md).  
  
-   For manual tests, mark the results of each validation step in the test case as passed or failed.  
  
    > [!IMPORTANT]
    >  Testers must mark a test step with a status if it is a validation test step. The overall result for a test case reflects the status of all the test steps that the tester marked. Therefore, the test case will have a status of failed if the tester marked any test step as failed or did not mark it.  
  
     For automated tests, each test case is automatically marked as passed or failed.  
  
-   (Optional) To support filtering, assign **Iteration** and **Area** paths to each test case.  
  
##  <a name="Progress"></a> Monitor test progress  
 You can use the first three reports in the Test Dashboard to monitor test progress and answer the questions in the following table.  
  
|Report|Questions answered|Notes|  
|------------|------------------------|-----------|  
|**Test Case Readiness**|-   How many test cases has the test team defined?<br />-   How many test cases are ready to run today?<br />-   How many test cases must the team still write and review?<br />-   Does the overall number of test cases appear to be sufficient for the number of User stories that the team is implementing?<br />-   What percentage of test cases can the test team run today?<br />-   Will the team be able to prepare all the test cases by the end of the iteration?|-   Healthy progress shows a steady increase in the number of test cases that the team is designing and moving to the ready state.<br />-   Unhealthy progress shows that no or few test cases are ready to be run.<br />     When all test cases remain in a design state for a long time, an issue may block progress. You might want to investigate the cause of the blockage.<br />-   A gap in testing may develop if the number of test cases does not appear sufficient.<br />     The number of test cases that are defined for a project should be equal to or larger than the number of User stories that the team is implementing. The number of test cases does not appear sufficient.|  
|**Test Plan Progress**|-   How many test cases are passing?<br />-   How many test cases are failing?<br />-   How many test cases are blocked?<br />-   How many test cases have never run?<br />-   What percentage of test cases are passing across all Test Plans?<br />-   How much testing has the team completed?<br />-   Is the team likely to finish the testing on time?|-   As the development cycle progresses, the more test cases should pass, and fewer test cases should stay in other states.<br />-   Unhealthy progress occurs when too many test cases fail. Depending on where you are in the product cycle, you might investigate why so many test cases are failing.<br />-   If the number of test cases that are failing or never run is flat, you might want to investigate the specific causes that affect each area.|  
|**User Story Test Status**<br /><br /> **Requirement Test Status**|-   Are test cases being run for each user story or requirement?<br />-   If test cases are blocked or not being run, does the team understand the blocking issues and are they being addressed?|-   Healthy progress shows most test cases for each user story or requirement are passing.<br />-   Unhealthy progress is indicated too many test cases for a specific user story or requirement, which are in a **Never Run**, **Blocked**, or **Failed** state. You might want to investigate the causes that keep the test cases that are defined for a user story or requirement  from passing.|  
  
##  <a name="Gaps"></a> Determine gaps in testing  
 You can use the **User Story Test Status** or **Requirement Test Status** report to determine whether tests are covering all the code and to answer the following questions:  
  
-   Which user stories or requirements have a low overall count of test cases?  
  
-   Which user stories or requirements have a high overall count of test cases that are blocked or have never been run?  
  
-   Does the test case coverage for each user story or requirement meet expectations?  
  
-   Which user stories or requirements have a high rate of test failures?  
  
-   What is the average number of test cases that are defined for each user story or requirement?  
  
##  <a name="Trends"></a> Monitor test failures and regressions  
 By monitoring test failures, you can identify and address problems in the code early. You can use the last two reports in the Test Dashboard to gain better insight into the number of tests that are failing.  
  
|Report|Questions answered|Notes|  
|------------|------------------------|-----------|  
|**Manual Test Activity**|-   Is the number of tests that the team has never run decreasing?<br />-   Is the team minimizing the overall number of blocked tests?<br />-   Are fewer tests failing over time?<br />-   Are more tests passing?<br />-   Does the test activity contain spikes that you cannot account for?|The **Manual Test Activity** report indicates the results for each test case run for each test configuration and for all test plans. Spikes that might occur may be early indicators of problems in either the test activity or the quality of code that the team is checking in.<br /><br /> You might want to check the metrics for recent builds, bug status, and code churn to determine whether any of them can help explain the changes.|  
|**Test Failure Analysis**|-   How many tests are regressing?<br />-   Is the team keeping the overall number of regressions or test failures within expected ranges or team goals?<br />-   Is the team addressing  issues as they are identified and known issues in a timely manner?|A healthy Test Failure Analysis report shows moderate numbers of new issues, known issues, and regressions. If any spikes occur in these areas, the team might need to investigate further. Spikes may indicate problems in either the test activity or the quality of code that the team is checking in.<br /><br /> Also, you might want to check the metrics for recent builds, bug status, and code churn to determine whether any of them can help explain the changes.|  
  
## Related notes
 [Project portal dashboards](project-portal-dashboards.md)
