---
title: Run automated tests with MTM
description: Manual and exploratory testing - Run automated tests with Microsoft Test Manager
ms.assetid: F9E8F299-6266-47E3-B896-17D8504E6165
ms.prod: devops
ms.technology: devops-test
ms.topic: conceptual 
ms.manager: jillfra
ms.author: ahomer
author: alexhomer1
ms.date: 12/07/2018
monikerRange: '>= tfs-2015'
---

# Run automated tests with Microsoft Test Manager

[!INCLUDE [version-inc-vs](../_shared/version-inc-vs.md)]

>[!NOTE]
>[!INCLUDE [mtm-deprecate-message](../_shared/mtm-deprecate-message.md)]

## Set up your test plan to use your build  
 
To set up your test plan to run the automated test that you have created,
you must select the correct build pipeline used to build your automated
test or a build pipeline that has the correct build drop location for your
existing automated test assemblies. You must do this so that the automated
test can be found in the share location for your build pipeline and then
it can be run from Microsoft Test Manager.

> If you have multiple build configurations, the test assemblies to run the
automated tests are searched for recursively from the root directory of the
build drop folder. If it is important which assemblies are selected when you
run your automated tests, you should use **Run with options** to specify the build
configuration.
 
To set up your test plan to use your team build:

1. Open Microsoft Test Manager.
 
1. To select a test plan, choose the down-arrow on the center group switcher and then choose **Testing Center**.

1. On the center group menu bar, choose **Plan**.

1. To set up your test plan to run the automated tests, choose **Properties**
   and then choose the drop-down arrow to the right of **Filter for builds**.
   The dialog box that shows build pipeline and quality is displayed.

1. To select the build pipeline that is used to build your automated tests, choose **Build pipeline**.

1. Each build can be given a specific value to reflect the quality of the build.
   To select the quality of the builds you want to be able to view, choose **Build quality**.

   >For more information about build pipelines and build quality, see
   [Continuous integration on any platform](../../pipelines/overview.md).
 
1. To save your changes, choose **Set build filter**.

1. To select the most recent build to use with this test plan that includes
   the latest changes to the automated test, you must first choose **Save**
   to save the plan and then choose **Modify**.
   The **Assign Build** activity is displayed. You can compare your current build
   with a build you plan to take. The associated items list shows the changes to
   work items between the builds. You can then assign the latest build to take and use
   for testing with this plan.

1. To close the **Assign Build** activity and return to the test plan properties, choose the **Close** icon.

1. To save these changes for this test plan, choose **Save** in the toolbar.

<a name="create-settings"></a>
## Create your test settings and environment to run your tests
 
To run your automated tests, you must use a standard or an SCVMM environment. You cannot run automated tests using Microsoft Test Manager without a lab environment.

You must create an environment that contains the roles in your test
settings and then use this environment in your test plan. For more
information about how to create your environment and roles and test settings, see
[Use a lab environment for your devops](/visualstudio/test/lab-management/using-a-lab-environment-for-your-application-lifecycle).

<a name="run-test"></a>
## Run the automated test using Microsoft Test Manager
 
To run the automated test using Microsoft Test Manager:

1. Open Microsoft Test Manager.
 
1. To run the automated test, choose the down-arrow on the center group switcher and then choose **Testing Center**.

1. On the center group menu bar, choose **Test**.

1. (Optional) To override the build, the test settings or the environment to use for
   running the automated tests that you select in this test plan, right-click the test
   and then choose **Run with options**. For example, if you want to run on a staging
   environment instead of your standard testing environment then you might select a
   different environment. From the Run options dialog box, you can change these settings,
   and then choose **Run** to run the selected test.

   > If you select a different environment, it must contain the same roles that you selected in the test settings that you use.
 
1. To run the automated test without changing any options, right-click the test and then choose **Run**.
   The **Analyze Test Runs** activity is displayed. It shows the progress of the test run that contains this test.

   > You can run multiple automated tests by selecting multiple tests,
   or you can select to run a whole suite of tests. To run a suite, right-click
   the test suite and then choose **Run**.

<a name="view-update"></a>
## View and update the test results
 
To view and update the test results:

1. Open Microsoft Test Manager.
 
1. To view the test results, choose the down-arrow on the center group switcher and then choose **Testing Center**.

1. On the center group menu bar, choose **Test** and then choose **Analyze Test Runs**.
   The Analyze Test Runs activity is displayed. It shows any test runs for this test plan.

1. Double-click a test run to open it and view the details.
   The test run details are displayed.

1. (Optional) To update the title of your test run to be more meaningful, type the new name in **Title**.

1. (Optional) If your test failed, you can update the reason for the failure.
   Choose **Resolution** and select the reason for the failure from the list.

1. (Optional) To add comments to the test result, choose the Comments icon.
   Type your comments and then choose **Save comments**.

1. (Optional) To view the details of an individual test, double-click the test.
   The test result is displayed. It shows the details from the test run, the attachments
   for data collected for this test result, and the test results history for that test.
   You can close this view to return to the test run.

   > If, from your analysis, you determine that there is a bug, you can create a bug from this view.
 
1. To save these changes for this test run, choose **Save** in the toolbar.
  
## See Also  

* [Run automated tests from test plans](../run-automated-tests-from-test-hub.md)
* [Continuous testing scenarios and capabilities](../../pipelines/index.md)

[!INCLUDE [help-and-support-footer](../_shared/help-and-support-footer.md)] 
