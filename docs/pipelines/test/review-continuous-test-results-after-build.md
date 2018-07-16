---
title: Review continuous test results after a build VSTS and TFS 
description: Review continuous test results after a build with a build or release pipeline in Microsoft VSTS or Team Foundation Server (TFS)
ms.assetid: 9A38578C-3310-4DE3-949F-C302AB545C10
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
ms.manager: douge
ms.author: ahomer
author: alexhomer1
ms.date: 07/16/2018
monikerRange: '>= tfs-2015'
---

# Review continuous test results after a build

[!INCLUDE [version-header-vs-vsts-tfs](_shared/version-header-vs-vsts-tfs.md)]

After your build finishes running continuous tests using Visual Studio Team Services (VSTS) or Team Foundation Server (TFS),
review your test results to start analyzing any problems that you found.

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../_shared/concept-rename-note.md)]
::: moniker-end

<a name="reviewtests"></a>  
## Review your test results

1. In VSTS or TFS, go to your project.

1. Find your build and open the build summary.

   ![Go to Build hub, build pipeline, build summary](_img/review-continuous-test-results-after-build/open-summary.png)

1. Review the summary for your test run results.
   Here you'll find changes in new, failed, and passed tests, 
   how long these tests took to run, how long these tests have been failing, and more.

   ![View test run results summary](_img/test-results-summary.png)

1. If you collected code coverage information, the build **Summary** page displays an overview of the blocks and lines covered.
   You can download the code coverage results for a drill-down analysis in Visual Studio.

   ![View code coverage information](_img/review-continuous-test-results-after-build/code-coverage-results.png)

<a name="organizetests"></a>  
## Organize your test results

1. Choose the **Show filter bar** icon.

   ![Show the filters bar](_img/review-continuous-test-results-after-build/show-filters.png)

1. Organize your test results using the group and outcome lists.

   ![Organize your test results](_img/organize-test-results.png)

<a name="debugtests"></a>  
## Debug failed tests

1. To start debugging a failed test, review the resulting error and stack trace.

   ![Error and stack trace for a failed test](_img/review-continuous-test-results-after-build/build-error-message.png)

1. To trace the results of a test across builds, view the test history.

   ![Open the test history page](_img/review-continuous-test-results-after-build/test-history-01.png)

1. In the history page, review when a test started to pass or fail.

   ![Viewing the test history across builds](_img/review-continuous-test-results-after-build/test-history-02.png)

   Group the list of results using the drop-down list.
   Mouse over a bar in the chart to see a pop-up summary, or select
   a bar to view the detailed test results for that build.
 
<a name="viewrelease"></a>  
## View tests in the Release hub

* Test results are also summarized in the release summaries in the **Release** hub.
  Choose any of the percentage values to see the full summary in the **Test** hub. 

  ![Test result summary in Release hub](_img/review-continuous-test-results-after-build/release-test-results-01.png)

## Next step

> [!div class="nextstepaction"]
> [Run automated tests from test plans in the Test hub](run-automated-tests-from-test-hub.md)
