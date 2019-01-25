---
title: Build dashboard  (Agile and CMMI) 
titleSuffix: TFS
description: Obtain an overview of the development activities that are affecting the quality of the builds - Team Foundation Server  
ms.prod: devops
ms.technology: devops-analytics
ms.topic: reference
ms.assetid: 9ff71bb8-2e3d-49ae-97c0-5c8bd37c3b93
ms.author: kaelli
author: KathrynEE
ms.manager: jillfra
ms.date: 12/30/2016
---

# Build dashboard  (Agile and CMMI)

[!INCLUDE [temp](../_shared/tfs-sharepoint-version.md)]

You can use the Build dashboard to obtain an overview of the development activities that are affecting the quality of the builds. Nightly builds are important to software development projects. When builds are not completing successfully or are not passing build verification tests (BVT), the team must fix the problem immediately.  
  
**You can use this dashboard to answer the following questions**:<br /><br /> -   How volatile is the code base?<br />-   How much of the code is the team testing?<br />-   How high is the quality of the builds?<br />-   Is the quality increasing, decreasing, or staying constant?<br />-   Which builds succeeded?<br />-   Which builds have a significant number of changes to the code? 
  
 **Requirements**  
  
 Same requirements defined in [Project portal dashboards](project-portal-dashboards.md).  
  
##  <a name="Data"></a> Data displayed in the dashboard  
 The team can use the Build dashboard to monitor the quality of builds and determine whether a member of the team must take specific steps to correct build failures. To learn about the Web Parts that are displayed on the Build dashboard, refer to the illustration and the table that follow.  
  
 ![Build Quality Dashboard](_img/procguid_dashboard_buildquality.png "ProcGuid_Dashboard_BuildQuality")  
  
> [!NOTE]
>  Code coverage and churn charts, reports ![Step 1](_img/procguid_1.png "ProcGuid_1") and ![Step 2](_img/procguid_2.png "ProcGuid_2"), do not appear when the data warehouse for the team project is not available.  
  
|Web Part|Data displayed|Related topic|  
|--------------|--------------------|-------------------|  
|![Step 1](_img/procguid_1.png "ProcGuid_1")|Line chart that depicts the percentage of code that was tested by build verification tests (BVT) and other tests over the most recent four weeks.<br /><br /> ![Code Coverage Report](_img/procguid_codecoverage.png "ProcGuid_CodeCoverage")|[Code Coverage](../excel/code-coverage-excel-report.md)|  
|![Step 2](_img/procguid_2.png "ProcGuid_2")|Stacked area chart that depicts how many lines of code the team added, removed, and changed in the check-ins before the build within the most recent four weeks.<br /><br /> ![Code Churn Report](_img/procguid_codechurn.png "ProcGuid_CodeChurn")|[Code Churn](../excel/code-churn-excel-report.md)|  
|![Step 3](_img/procguid_3.png "ProcGuid_3")|List of recent builds and their build status. You can view more details by choosing a specific build. This list is derived from a Team Web Access Web Part.<br /><br /> ![Recent Builds Web part](_img/twsa_dashbuilds.png "TWSA_DashBuilds")<br /><br /> **Legend**:<br /><br /> ![Build in Progress](_img/icon_buildstatus_1.gif "Icon_BuildStatus_1"): Build Not Started<br /><br /> ![Build Not Started](_img/icon_buildstatus_2.gif "Icon_BuildStatus_2"): Build in Progress<br /><br /> ![Build Succeeded](_img/icon_buildstatus_3.gif "Icon_BuildStatus_3"): Build Succeeded<br /><br /> ![Build Failed](_img/icon_buildstatus_4.gif "Icon_BuildStatus_4"): Build Failed<br /><br /> ![Build Stopped](_img/icon_buildstatus_5.gif "Icon_BuildStatus_5"): Build Stopped<br /><br /> ![Build Partially Succeeded](_img/icon_buildstatus_6.gif "Icon_BuildStatus_6"): Build Partially Succeeded|[Run, monitor, and manage](../../pipelines/overview.md)|  
|![Step 4](_img/procguid_4.png "ProcGuid_4")|List of upcoming events derived from a SharePoint Web Part.<br /><br /> ![Import Events Web part](_img/sharepoint_dashboard.png "SharePoint_Dashboard")|Not applicable|  
|![Step 5](_img/procguid_6.png "ProcGuid_6")|Count of active, resolved, and closed work items. You can open the list of work items by choosing each number. This list is derived from a Team Web Access Web Part.<br /><br /> ![Project Work Items Web part](_img/twsa_dashprojectwi.png "TWSA_DashProjectWI")|Not applicable|  
|![Step 6](_img/procguid_6a.png "ProcGuid_6a")|List of the most recent check-ins. You can view more details by choosing a specific check-in. This list is derived from a Team Web Access Web Part.<br /><br /> ![Recent Checkins Web part](_img/twsa_dashcheckins.png "TWSA_DashCheckins")|[Manage pending changes](../../repos/tfvc/develop-code-manage-pending-changes.md)|  
  
##  <a name="Activities"></a> Required activities for tracking builds  
 For the reports shown in the Build dashboard to be useful and accurate, the team must perform the following activities:  
  
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
  
##  <a name="Using"></a> Monitor builds  
 The team can use the Build dashboard to monitor the quality of builds and the level of code coverage that they are testing. Ideally, code coverage is high, and code churn is low or falling. Depending on your team goals, code coverage should be 80% to 100%.  
  
 You can use the Code Coverage and Code Churn reports to answer the questions that are listed in the following table.  
  
-   Which builds succeeded?  
  
-   Which builds have a significant number of changes to the code?  
  
-   How often are builds succeeding?  
  
-   How volatile is the code base?  
  
-   How much of the code is the team testing?  
  
-   How high is the quality of the builds?  
  
-   Is the quality increasing, decreasing, or staying constant?  
  
 For more information, see [Code Coverage](../excel/code-coverage-excel-report.md) and [Code Churn](../excel/code-churn-excel-report.md).  
  
## Related notes 
 [Project portal dashboards](project-portal-dashboards.md)
