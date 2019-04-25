---
title: Quality dashboard (Agile and CMMI) | TFS
description: Obtains an overview of progress occurring in the test, development, and build areas as they relate to the quality of the software under development.
ms.prod: devops
ms.technology: devops-analytics
ms.topic: conceptual
ms.assetid: eaae1890-73e5-4324-9df4-634281621d2a
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.date: 12/30/2016
---

# Quality dashboard (Agile and CMMI)
[!INCLUDE [temp](../_shared/tfs-sharepoint-version.md)]

You can use the Quality dashboard to obtain an overview of progress occurring in the test, development, and build areas as they relate to the quality of the software under development. The team can use the Quality dashboard to learn and make decisions that support team goals around product quality.  
  
 By using this dashboard, you can review test progress, build states, progress in resolving and closing bugs, rate of bug reactivations, the percentage of code that has been tested, and the trends in code changes. Each of these metrics is plotted for the most recent four weeks.  
  

**You can use this dashboard to answer the following questions**:<br /><br /> -   Is the test effort on track?<br />-   Is the team testing the appropriate functionality?<br />-   Are the team's bug fixes of high quality?<br />-   Are tests stale?<br />-   Does the team have sufficient tests?<br />-   Are any bottlenecks occurring?
  
 **Requirements**  
  
 Same requirements defined in [Project portal dashboards](project-portal-dashboards.md).  
  
##  <a name="Data"></a> Data displayed in the dashboard  
 Team members can use the Quality dashboard to determine the overall quality of the product that they are developing. In an ideal case, test pass rates, bugs, and code churn all show the same picture, but often they do not. When you find a discrepancy, you must examine more closely the appropriate build and data series. The Quality dashboard combines the test results, code coverage from testing, code churn, and bugs, to help you understand many perspectives at the same time.  
  
 To learn about the Web Parts that are displayed on the Quality dashboard, refer to the illustration and the table that follow.  
  
 ![Product Quality Dashboard](_img/procguid_dashboard_productquality.png "ProcGuid_Dashboard_ProductQuality")  
  
> [!NOTE]
>  The **Test Plan Progress** report is available only when the team [creates test plans](../../test/create-test-cases.md) and runs tests.  
>   
>  Progress, build, and code charts, reports ![Step 1](_img/procguid_1.png "ProcGuid_1") through ![Step 6](_img/procguid_6a.png "ProcGuid_6a"), do not appear when the data warehouse for the team project is not available.  
  
 To learn more about how to interpret, update, or customize the charts that appear in the Quality dashboard, see the topics in the following table.  
  
|Web Part|Data displayed|Related topic|  
|--------------|--------------------|-------------------|  
|![Step 1](_img/procguid_1.png "ProcGuid_1")|Stacked area graph of the test results of all Test cases grouped by their most recent recorded outcome - **Never Run**, **Blocked**, **Failed**, or **Passed** - during the most recent four weeks.<br /><br /> ![Test Plan Progress Excel Report](_img/procguid_agiletest.png "ProcGuid_AgileTest")|[Test Plan Progress](../sql-reports/test-plan-progress-report.md)|  
|![Step 2](_img/procguid_2.png "ProcGuid_2")|Stacked columns that show how many builds **Failed** or **Succeeded** during the most recent four weeks.<br /><br /> ![Build Status report](_img/procguid_agileexcel.png "ProcGuid_AgileExcel")|[Build Status](../excel/build-status-excel-report.md)|  
|![Step 3](_img/procguid_3.png "ProcGuid_3")|A stacked area graph of the cumulative count of all Bugs, grouped by state, during the most recent four weeks.<br /><br /> ![Bug Progress Excel Report](_img/procguid_excelbug.png "ProcGuid_ExcelBug")|[Bug Progress](../excel/bug-progress-excel-report.md)|  
|![Step 4](_img/procguid_4.png "ProcGuid_4")|A stacked area graph of how many bugs the team has reactivated from the resolved or closed state during the most recent four weeks.<br /><br /> ![Bug Reactivations Excel Report](_img/procguid_agileexr.png "ProcGuid_AgileExR")|[Bug Reactivations](../excel/bug-reactivations-excel-report.md)|  
|![Step 5](_img/procguid_6.png "ProcGuid_6")|Line chart that shows the percentage of code tested by build verification tests (BVT) and other tests during the most recent four weeks.<br /><br /> ![Code Coverage Report](_img/procguid_codecoverage.png "ProcGuid_CodeCoverage")|[Code Coverage](../excel/code-coverage-excel-report.md)|  
|![Step 6](_img/procguid_6a.png "ProcGuid_6a")|Stacked area graph that shows how many lines of code the team added, removed, and changed in the check-ins before the build during the most recent four weeks.<br /><br /> ![Code Churn Report](_img/procguid_codechurn.png "ProcGuid_CodeChurn")|[Code Churn](../excel/code-churn-excel-report.md)|  
|![Step 7](_img/procguid_7.png "ProcGuid_7")|List of upcoming events. This list is derived from a SharePoint Web Part.<br /><br /> ![Import Events Web part](_img/sharepoint_dashboard.png "SharePoint_Dashboard")|Not applicable|  
|![Step 8](_img/procguid_8.png "ProcGuid_8")|Count of active, resolved, and closed work items. You can open the list of work items by choosing each number. This list is derived from a Team Web Access Web Part.<br /><br /> ![Project Work Items Web part](_img/twsa_dashprojectwi.png "TWSA_DashProjectWI")|Not applicable|  
|![9](_img/procguid_9.png "ProcGuid_9")|List of recent builds and their status. You can view more details by choosing a specific build. This list is derived from a Team Web Access Web Part.<br /><br /> ![Recent Builds Web part](_img/twsa_dashbuilds.png "TWSA_DashBuilds")<br /><br /> **Legend**:<br /><br /> ![Build in Progress](_img/icon_buildstatus_1.gif "Icon_BuildStatus_1"): Build not started<br /><br /> ![Build Not Started](_img/icon_buildstatus_2.gif "Icon_BuildStatus_2"): Build in progress<br /><br /> ![Build Succeeded](_img/icon_buildstatus_3.gif "Icon_BuildStatus_3"): Build succeeded<br /><br /> ![Build Failed](_img/icon_buildstatus_4.gif "Icon_BuildStatus_4"): Build failed<br /><br /> ![Build Stopped](_img/icon_buildstatus_5.gif "Icon_BuildStatus_5"): Build stopped<br /><br /> ![Build Partially Succeeded](_img/icon_buildstatus_6.gif "Icon_BuildStatus_6"): Build partially Succeeded|[Run, monitor, and manage](../../pipelines/overview.md)|  
|![10](_img/procguid_10.png "ProcGuid_10")|List of the most recent check-ins. You can view more details by choosing a specific check-in. This list is derived from a Team Web Access Web Part.<br /><br /> ![Recent Checkins Web part](_img/twsa_dashcheckins.png "TWSA_DashCheckins")|[Manage pending changes](../../repos/tfvc/develop-code-manage-pending-changes.md)|  
  
##  <a name="Activities"></a> Required activities for monitoring quality  
 For the Quality Dashboard to be useful and accurate, the team must perform the activities that this section describes.  
  
### Required activities for tracking test plan progress  
 For the Test Plan Progress report to be useful and accurate, the team must perform the following activities:  
  
-   Define test cases and user stories, and create **Tested By** links between test cases and user stories.  
  
-   [Define test plans](../../test/create-test-cases.md), and assign test cases to test plans.  
  
-   For manual tests, mark the results of each validation step in the test case as passed or failed.  
  
    > [!IMPORTANT]
    >  Testers must mark a test step with a status if it is a validation test step. The overall result for a test case reflects the status of all the test steps that the tester marked. Therefore, the test case will have a status of failed if the tester marked any test step as failed or did not mark it.  
  
     For automated tests, each test case is automatically marked as passed or failed.  
  
-   (Optional) To support filtering, assign **Iteration** and **Area** paths to each test case.  
  
    > [!NOTE]
    >  For information about how to define area and iteration paths, see [Define area paths](../../organizations/settings/set-area-paths.md) or [Define iteration paths](../../organizations/settings/set-iteration-paths-sprints.md) .  
  
### Required activities for tracking bug progress and bug reactivations  
 For the Bug Progress and Bug Reactivations reports to be useful and accurate, the team must perform the following activities:  
  
-   Define Bugs.  
  
-   Update the **State** of each Bug as the team fixes, verifies, closes, or reactivates it.  
  
-   (Optional) Specify the **Iteration** and **Area** paths of each Bug if you want to filter by those fields.  
  
### Required activities for tracking build status, code coverage, and code churn  
 For the Build Status, Code Coverage, and Code Churn reports to be useful and accurate, team members must perform the following activities:  
  
-   **Configure a build system**. To use Team Foundation Build, you must set up a build system.  
  
     For more information, see [Build and Release agents](../../pipelines/agents/agents.md).
  
-   **Create build pipelines**. You can create several build pipelines and then run each of them to produce code for a different platform. Also, you can run each build for a different configuration.  
  
     For more information, see [Get started with CI/CD](../../pipelines/get-started-designer.md).
  
-   **Define tests to run automatically as part of the build**. As part of the build pipeline, you can define tests to run as part of the build or to fail if the tests fail.  
  
     For more information, see [Set up continuous testing for your builds](../../pipelines/test/set-up-continuous-testing-builds.md).
  
-   **Configure tests to gather code coverage data**. For code coverage data to appear in the report, team members must instrument tests to gather that data.  
  
     For more information, see [Run tests in your build process](../../pipelines/test/test-build.md).  
  
-   **Run builds regularly**. You can run builds at regular intervals or after every check-in. You can create regular builds when you use the schedule trigger.  
  
     For more information, see [Build triggers](../../pipelines/build/triggers.md).
  
    > [!NOTE]
    >  Although a team member can manually rate a build by using Build Explorer, this rating is not reflected in the Build Quality Indicators report. The build rating appears in the Build Summary report. For more information, see [Rate the quality of a completed build](https://msdn.microsoft.com/library/ms181734.aspx) and [Build Summary](../sql-reports/build-summary-report.md).  
  
##  <a name="Troubleshooting"></a> Troubleshoot quality issues  
 The following table describes specific quality issues that the Quality dashboard can help you monitor and identify actions the team can take.  
  
|Issue|Reports to review|Troubleshooting notes|  
|-----------|-----------------------|---------------------------|  
|Build failures|**Builds Status**|A nightly build is the heartbeat of software development projects. When builds are not completing successfully or are not passing build verification tests (BVT), the team must fix the problem immediately.|  
|Tests failing|**Test Plan Progress**<br /><br /> **Code Churn**|When the rates of failed tests and code churn are high, the team may investigate why the software is failing so often. Causes may include loose development practices or tests that are too rigorous for an early iteration cycle.|  
|Tests passing but with a high rate of finding Bug|**Test Plan Progress**<br /><br /> **Bug Progress**|When many tests pass in the same period as many Bugs are found, the team might investigate the following possibilities:<br /><br /> -   Tests might not be sufficiently rigorous for the current product stage. In early iterations, simple tests are good. However,  tests should exercise broader scenarios and integration as the product matures.<br />-   Tests might be stale or testing the wrong functionality.<br />-   Different test techniques might offer better results.<br />-   Bugs are being reported but not subject to testing. When Bugs are reported and are not linked to a test case, they are not subject to regression testing.|  
|Tests are stale|**Test Plan Progress**<br /><br /> **Code Coverage**<br /><br /> **Code Churn**|When many tests pass, a significant amount of code changes, and code coverage decreases, the team might not be running tests that exercise the new code.<br /><br /> Because tests are not developed at the same rate as the code changes, test coverage might become less and less adequate.|  
|Team is not testing, closing, or reactivating resolved Bugs|**Bug Progress**|When a bulge occurs in the Bug Progress report for resolved Bugs, developers are resolving Bugs, but testers have not verified and closed them. The team should investigate why this pattern has developed.|  
|Too little testing|**Test Plan Progress**<br /><br /> **Code Churn**|When the team is running few tests, code churn is high, and code coverage is less than expected, the team might need to allocate more resources to testing. In addition, the team should ensure that testers are focusing on the same functions as the rest of the team.|  
|Reactivations|**Bug Reactivations**|When the team reactivates Bugs at a high or increasing rate, testers are frequently rejecting developers' fixes. The team must address these problems to avoid allocating significant resources toward reworking the rejected fixes. Potential causes include poor bug reporting, poor test lab management, or overly aggressive triage.|  
|Inadequate unit testing|**Code Coverage**<br /><br /> **Code Churn**|When a decrease in code coverage coincides with an increase in code churn, developers might be checking in code without any corresponding unit tests to cover it.<br /><br /> In most cases, the code coverage should approach 100% if the team practices test-driven development or similar techniques. If unit tests are reused as BVTs, the code coverage should appear in the corresponding reports.|  
  
## Related notes
 [Project portal dashboards](project-portal-dashboards.md)
