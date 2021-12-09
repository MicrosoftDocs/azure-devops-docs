---
title: FAQs and problem solutions   
description: Learn about common questions about manual testing for Azure DevOps. This article includes links to related articles.
ms.assetid: C9467223-4513-4F46-812C-44FFE2B27F28
ms.technology: devops-test
ms.topic: reference
ms.author: sdanie
author: steved0x
ms.date: 12/12/2021
monikerRange: '>= tfs-2015'
---

# FAQs for manual testing

[!INCLUDE [version-inc-vs-all](includes/version-inc-vs-all.md)]

<a name="testplans"></a>
## Creating manual test plans

[Go to related article &gt;](create-a-test-plan.md)

<a name="query-based-suites"></a>
### Q: What are query-based test suites?

**A:** Use a query to group together test cases that have a particular characteristic, for example, all tests that have Priority=1.
The suite will automatically include every test case that is returned by the query that you define.

<a name="copyclonetce"></a>

### Q: Can I copy or clone test plans and test suites?

**A:** Yes. For test plans, use [this API](/rest/api/azure/devops/testplan/test%20plan%20clone/clone%20test%20plan?view=azure-devops-rest-5.1&preserve-view=true).
For test suites, use [this API](/rest/api/azure/devops/testplan/test%20suite%20clone?view=azure-devops-rest-5.1&preserve-view=true).
We plan to expose these capabilities through the out-of-box UI in a future release.

### Q: When I export a test plan, can I just view the data or copy it to a Word document?

**A:** Yes, choose **Print** in the **Export** dialog box, then choose **Cancel** in the **Print** dialog box.
This option displays the data in the report.
Select all the text, then copy and paste it into a Word document, if you want.
All the formatting in the report is retained.

### Q: When I export a test plan, can I customize the report?

**A:** You can only customize if you're using an on-premises Azure DevOps Server.
You can [edit the XSLT file](/previous-versions/dd380763(v=vs.140)#XSLT).

*****

<a name="testcases"></a>
## Creating manual test cases

[Go to related article &gt;](create-test-cases.md)

### Q: Can I add an extra line to a test step?

**A:** Yes, press **Shift**+**Enter** in the action or expected results field to add an extra line.

### Q: How do I insert a test step into a test case?

**A:** Select a test step.
Press **Alt**+**P** to insert a new test step above the selected step.

<a name="add-multiple-test-cases"></a>

### Q: How can I find out if a test case was added to other test suites?

**A:** Select a test case, then view the test suites details.
The Associated test suites pane shows you any test suite for any test plan that contains this test case.
This view includes all projects.

Select the associated test suite to view it.
To view the project and the test plan for that test suite, move your pointer over the test suite.

![On Tests Plans page, select details pane. Select test suites in the test details pane](media/create-test-cases/TestSuites.png) 

### Q: What happens when I delete a test case from a requirement-based test suite?

**A:** The test case still exists in your project, but the test case is removed from the test suite.
Also, it's no longer linked to the backlog item for that test suite.

<a name="ViewAssignedTests"></a>

### Q: Why do I see the wrong test suite and tests when I select View Tests from the notification email about tests that are assigned to me?

**A:** This situation might happen if you were prompted to enter credentials for Azure DevOps when you clicked this link.
Without signing out of Azure DevOps, select **View Tests** again to see the correct test suite and tests.

*****

<a name="runtests"></a>

<a name="qanda"></a>

<a name="trackstatus"></a>
## Tracking test status

[Go to related article &gt;](track-test-status.md)

### Q: How is data shown in the charts for test cases that are in multiple test suites?

**A:**  For test case charts, if a test case has been added to multiple test suites in a plan then it's only counted once.
For test result charts, each instance of a test that is run is counted for each of the test suites separately.

### Q: Who can create charts?

**A:** You need at least a Basic access to create charts.

### Q: How can I edit or delete a chart?

**A:** Select the option you want from the chart's context menu.

### Q: How do I control how long I keep my test data?

**A:** For more information, see [Set test retention policies](how-long-to-keep-test-results.md).

*****

<a name="repeatdifferent"></a>
## Repeating a test with different data

[Go to related article &gt;](repeat-test-with-different-data.md)

### Q: Are parameters the best way to specify that the test should be run on different operating system platforms? And with different browsers, databases, and so on?

**A**: It's better to use test configurations.
With test case parameters, you run the different parameter values one after another, which makes it difficult to switch from one platform to another.
For more information, see [Test different configurations](test-different-configurations.md).

*****

<a name="manageresults"></a>
## Managing test results

[Go to related article &gt;](how-long-to-keep-test-results.md)

### Q: What are the default retention limits?

**A**: For projects created before October 2015, Azure DevOps doesn't delete results from automated tests and manual tests unless you change the retention limit.

For new projects created after October 2015, Azure DevOps deletes all test results after one year (365 days), unless you chose to indefinitely retain a build associated with those results.

### Q: What is the default test retention policy for XAML builds?

**A**: By default, a XAML build pipeline is set up to delete builds older than the 10 most recent builds.
But related test results aren't automatically deleted when those builds are deleted.
[Learn more](/previous-versions/visualstudio/visual-studio-2013/ms181716(v=vs.120)).

### Q: Why isn't test data deleted for XAML builds by default?

**A**: By default, this behavior is turned off because 10 builds can happen quickly, especially with continuous integration builds.
Test results are often deleted before you can analyze them.

<a name="keep-build-indefinitely"></a>

### Q: How do I keep a build indefinitely?

**A**: Select **Retain indefinitely**.

![Keep a build indefinitely](media/how-long-to-keep-test-results/build-keep-indefinitely.png)

*****

<a name="tandfext"></a>

## Test &amp; Feedback extension

[Go to related article &gt;](perform-exploratory-tests.md)

<a name="browser-support"></a>

### Q: Which web browsers does the extension support?

**A:** The Test &amp; Feedback extension is currently available for
[Google Chrome](https://www.google.com/chrome/),
[Microsoft Edge (Chromium Only)](https://www.microsoft.com/edge/),
and [Mozilla Firefox version 50.0 and higher](https://www.mozilla.org/).

Some browser versions do not currently support all the features of the Test &amp; Feedback extension.

| Feature | Chrome | Microsoft Edge | Firefox |
| --- | --- | --- | --- |
| Capture screenshots with inline annotations | &nbsp; **Yes** | &nbsp; **Yes** | &nbsp; **Yes** |
| Capture notes | &nbsp; **Yes** | &nbsp; **Yes** | &nbsp; **Yes** |
| Capture screen recordings | &nbsp; **Yes** | &nbsp; **Yes** | &nbsp; **No** |
| Capture page load data | &nbsp; **Yes** | &nbsp; **Yes** | &nbsp; **No** |
| Capture user actions log | &nbsp; **Yes** | &nbsp; **Yes** | &nbsp; **Yes** |
| Capture system information | &nbsp; **Yes** | &nbsp; **Yes** | &nbsp; **No** |
| Create bugs | &nbsp; **Yes** | &nbsp; **Yes** | &nbsp; **Yes** |
| Create tasks and test cases | &nbsp; **Yes** | &nbsp; **Yes** | &nbsp; **Yes** |
| Create feedback requests | &nbsp; **Yes** | &nbsp; **Yes** | &nbsp; **Yes** |
| Export session report for sharing | &nbsp; **Yes** | &nbsp; **Yes** | &nbsp; **Yes** |
| End-to-end traceability for work items | &nbsp; **Yes** | &nbsp; **Yes** | &nbsp; **Yes** |
| Simplified bug and task tracking and triaging | &nbsp; **Yes** | &nbsp; **Yes** | &nbsp; **Yes** |
| View and get insights from sessions | &nbsp; **Yes** | &nbsp; **Yes** | &nbsp; **Yes** |
| View similar existing bugs | &nbsp; **Yes** | &nbsp; **Yes** | &nbsp; **Yes** |
| Test app on devices using cloud providers such as Perfecto | &nbsp; **Yes** | &nbsp; **Yes** | &nbsp; **No** |
| Manage feedback requests | &nbsp; **Yes** | &nbsp; **Yes** | &nbsp; **Yes** |

<p />
For more information, see 
<a href="https://marketplace.visualstudio.com/items/ms.vss-exploratorytesting-web" data-raw-source="[Visual Studio Marketplace](https://marketplace.visualstudio.com/items/ms.vss-exploratorytesting-web)">Visual Studio Marketplace</a>, Azure DevOps tab.

<a name="recording-playback"></a>

### Q: How do I play the video recordings I created with the extension?

**A:** The video recordings created by the Test &amp; Feedback extension can be viewed in [Google Chrome](https://www.google.com/chrome/) browser and in the [VLC Video Player](https://www.videolan.org/vlc/download-windows.html).

### Q: Does the extension support Team Foundation Server?

**A:** The Test &amp; Feedback extension supports Team Foundation Server 2015 and later.
All users, including stakeholders, can use the extension in Connected mode with all the functionality except session insights and the request
and provide feedback flow, which are supported only for Team Foundation Server 2017.

<a name="addsimilar"></a>

### Q: Can I edit an existing bug instead of creating a new bug when using the Test &amp; Feedback extension?

**A:** Yes, the extension automatically shows bugs that may be related to the one you're creating
and allows you to add your screenshots, notes, and videos to this existing bug.
For more information, see [Add findings to existing bugs with exploratory testing](add-to-bugs-exploratory-testing.md).

### Q: On Google Chrome, the mouse offset towards the left makes it difficult to use. Do you have a workaround?

**A:** Follow this procedure:

1. Navigate to **chrome://flags/#enable-use-zoom-for-dsf** 
1. Search for 'Use Blink's zoom for device scale factor'
1. Change it to **Disabled**

*****

## Related articles

- [Create manual test cases](create-test-cases.md)
- [Create test plans and test suites](create-a-test-plan.md)
- [Install the Test & Feedback extension](perform-exploratory-tests.md)
- [Repeat a test with different data](repeat-test-with-different-data.md)
- [Set test retention policies](how-long-to-keep-test-results.md)
- [Track test status](track-test-status.md)
