---
title: Test Management Reports
description: Display the team-project information that is stored in the data warehouse.
titleSuffix: TFS
ms.prod: devops
ms.technology: devops-analytics
ms.topic: reference
ms.assetid: 9d85d62d-00a2-4c9f-8ad8-d527b13b58f4
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.date: 12/30/2016
---

# Test Management Reports
[!INCLUDE [temp](../_shared/tfs-sharepoint-version.md)]

The test team can take advantage of the Office Excel reports in the **Test Team Management** folder to monitor progress and identify the volume, status, and effectiveness of their test activities. The test management reports display team-project information that is stored in the data warehouse. The four Office Excel workbooks provide 17 reports, and each report appears in on its own worksheet.  
  
 These reports are available only for team projects that were created using the [Agile](../../boards/work-items/guidance/agile-process.md) and [CMMI](../../boards/work-items/guidance/cmmi-process.md) process templates.  
  
> [!NOTE]
>  You can access the **Test Team Management** folder from the **Excel Reports** folder for the team project in Team Explorer. You can access this folder only if your team project portal has been enabled and is configured to use SharePoint Server with Enterprise Edition. For more information, see [Share information using the project portal](../sharepoint-dashboards/share-information-using-the-project-portal.md).  
  
## Test team tasks  
  
|Task|Related topics|  
|----------|--------------------|  
|**Monitor the success or failure rate of test activities with each build**. The Build Quality workbook provides the following two reports, which show the test results for all build pipelines for a team project.<br /><br /> -   **Build Verification Testing**: Helps the team monitor the quality of builds by showing test results for all automated tests that are marked as Build Verification Tests (BVT) and that are run during the build process.<br />-   **Test Activity Per Build**: Helps the team monitor the quality of builds by showing test results for all tests that have been run against the build for all or selected test plans.<br /><br /> The count of test results in these reports represents a cumulative count of the most recent version of each test result in a particular build.|-   [Build Quality](build-quality-excel-report.md)|  
|**Monitor the overall productivity and effectiveness of the test team's test and bug generation activities**. The Test Team Productivity workbook provides the following four reports, which show test and bug activity.<br /><br /> -   **Test Activity**: Helps the team monitor the volume of tests that they have run over the past four weeks.<br />-   **Test Activity Per User**: Helps the team track the volume of tests that each team member has run over the past eight weeks. The team can use this to help load balance the test activity across team members.<br />-   **Bugs Created By User**: Helps the team track how many bugs each team member has created.<br />-   **Bug Effectiveness**: Supports the team in determining how effective they are in defining bugs that are useful and help build a quality product.|-   [Test Team Productivity](test-team-productivity-excel-report.md)|  
|**Monitor the test results and regression testing for a product**. The Test Team Progress workbook provides the following four reports:<br /><br /> -   **Test Plan Progress**: Helps the team determine how much testing the team has completed and whether it is likely to finish test activities on time.<br />-   **Test Case Authoring Status**: Helps the team track the progress toward finishing the definition of tests so that they can be run.<br />-   **Test Status by Suite**: Helps the team determine how much testing the team has completed within each test suite.<br />-   **Test Status by Area**: Helps the team determine how much testing the team has completed within each product area.<br />-   **Failure Analysis**: Helps the team monitor how many regressions it is finding.<br />-   **Automation Design Status**: Supports the team in tracking the number of test cases that still must be automated.|-   [Test Team Progress](test-team-progress-excel-report.md)|  
|**Determine where the test plans, test configurations, and test coverage are deficient**. The Testing Gaps workbook provides the following five reports, which are based on test results and builds that have been defined and run for a team project.<br /><br /> -   **User Story Status** or **Requirement Status**: Helps the team identify gaps in test coverage for each user story or requirement.<br />-   **User Story Status by Config** or **Requirement Status by Config**: Helps the team identify gaps in test coverage for each test configuration for each user story or requirement.<br />-   **Test Status by Area**: Helps the team identify gaps in test coverage of product areas. This report requires that team members assign test cases to product areas.<br />-   **Tests Not Executed**: Helps the team identify test cases that have never been run for each test configuration.<br />-   **Code Coverage**: Helps the team determine which builds and build assemblies have low or high code coverage.<br /><br /> The count of test results in these reports represents a cumulative count of the most recent version of each test result in a particular build. If a test is run multiple times against a build, the count includes the most recent result for that test for that build.|-   [Testing Gaps](testing-gaps-excel-report-agile.md)<br />-   [Testing Gaps](testing-gaps-excel-report-cmmi.md)|  
  
## Related notes
 [Excel reports](excel-reports.md)