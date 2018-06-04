---
title: Associate automated test results with requirements
description: Continuous testing. Associate automated test results with requirements using Microsoft Test Manager (MTM) with a build or release definition
ms.assetid: 30F9B666-02D7-4A94-9EA1-EC8B8E5F1D8F
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
ms.manager: douge
ms.author: ahomer
author: alexhomer1
ms.date: 04/09/2018
monikerRange: '>= tfs-2015'
---

# Associate automated test results with requirements

[!INCLUDE [version-header-ts-tfs](_shared/version-header-ts-tfs.md)]

If your test suites include **requirements**, link these to your test results
and view the results on your team's dashboard. This enables end-to-end 
traceability of requirements for agile teams. For example, when teams do not use
[planned testing](associate-automated-test-with-test-case.md) (by creating test plans or test case work items),
and instead choose to simply write automated tests that run in the CD/CI
pipeline, associating test results with requirements provides an easy way to 
monitor test results and ensure requirements are met. 

To associate automated test results with requirements: 

1. On the test results page, select the tests you want to link to requirements
and choose the **Associate tests to work item** (link) icon.

   ![Select the tests you want to link to requirements](_img/associate-automated-results-with-requirements/associate-tests-results.png)

1. Select the requirements from the list of suggested work items and choose **Associate**. 

   ![Select the requirements from the list](_img/associate-automated-results-with-requirements/associate-tests.png)

1. To see the related test results, select **Requirements** in the **Group by** list.  

   ![Select **Requirements** in the **Group by** list](_img/associate-automated-results-with-requirements/associate-tests-groupby.png)

1. On your team's dashboard, add the **Requirements quality** widget and configure
   it for the appropriate build definition and work item query.  

   ![Add the **Requirements quality** widget](_img/associate-automated-results-with-requirements/associate-tests-configuration.png)

1. This shows the pass rate for each of your requirements.
   Use the links to view the results in more detail, and the **Expand** link to see more.

   ![Links to view the results in more detail, and the **Expand** link](_img/associate-automated-results-with-requirements/associate-tests-dashboard.png)

## See Also

* [Associate automated tests with test cases](associate-automated-test-with-test-case.md)
* [Run automated tests from test plans in the Test hub](run-automated-tests-from-test-hub.md)
* [Test with unified agents and phases](test-with-unified-agent-and-phases.md)
* [Continuous testing scenarios and capabilities](index.md)

[!INCLUDE [help-and-support-footer](_shared/help-and-support-footer.md)] 
