---
title: Run manual tests with Microsoft Test Manager
description: Manual and exploratory testing - Run manual tests with Microsoft Test Manager when you want to test web applications
ms.assetid: e7b48fb1-6511-4a2b-9eb1-f9e4488593c4
ms.prod: devops
ms.technology: devops-test
ms.topic: conceptual
ms.manager: douge
ms.author: ahomer
author: alexhomer1
ms.date: 08/24/2018
monikerRange: '>= tfs-2015'
---

# Run manual tests with Microsoft Test Manager

[!INCLUDE [version-inc-vs](../_shared/version-inc-vs.md)]

Microsoft Test Runner sits at the side of the screen while you test your application. It displays the steps you planned and the results you expected, and you check them off as you work. It can record your actions along with comments, screenshots, and other data, so that if you find a bug, it's easy to reproduce.  

[!INCLUDE [feature-availability](../_shared/feature-availability.md)] 
  
>**The web portal or Microsoft Test Runner?** Use the web-based test runner
in the [!INCLUDE [test-hub-include-nolink](../_shared/test-hub-include-nolink.md)] when you want to test web applications, and Microsoft 
Test Runner for desktop applications. You can 
[launch Microsoft Test Runner](../run-manual-tests.md#run-desktop)
from the [!INCLUDE [test-hub-include-nolink](../_shared/test-hub-include-nolink.md)], instead of using Microsoft Test Manager.
  
### Running test cases with Microsoft Test Runner  
  
1. **Get ready to test.** Here are a few things you might need to do before running your tests:  
  
   - Install the latest version of your app.  
  
   - [Create some test cases.](plan-manual-tests-with-microsoft-test-manager.md) Typically you create them at the start of a sprint, and aim to have them all pass by the end of the sprint. You can create them either with the web portal or Microsoft Test Manager.  
  
   - Install Microsoft Test Manager on the machine where you want to run your tests.
     To get Microsoft Test Manager, install [Visual Studio Enterprise](https://visualstudio.microsoft.com/downloads/) or [Visual Studio Test Professional ](https://visualstudio.microsoft.com/vs/test-professional/).
  
   - [Connect Microsoft Test Manager to your test plan](connect-microsoft-test-manager-to-your-team-project-and-test-plan.md)  
  
1. Run a test case.  
  
   ![Run a test case](_img/run-manual-tests-with-microsoft-test-manager/almp_t_create07.png)  
  
   > **TIP**
   > If you are already looking at a test case in the web portal, you can start Test Runner directly from there by choosing **Run in Client**.  
  
   Test Runner appears at the side of the screen. It will stay there while you work with your application.  
  
1. Create an action recording so that you can quickly repeat the test later.  
  
   ![Start your application, then the test run](_img/run-manual-tests-with-microsoft-test-manager/almp_t_create08.png)  
  
1. Follow the steps in the test. Mark each step as either Passed or Failed. When a step fails, add a comment to describe what was wrong. You can attach screenshots, too.  
  
   ![Add comments and snapshots to the test run log](_img/run-manual-tests-with-microsoft-test-manager/almp_t_create09.png)  
  
   If you have to attend to something else, ![Pause icon](_img/run-manual-tests-with-microsoft-test-manager/almp_t_runtestpauseicon.png)Pause the test. You don't want your emails or password included in the recording.  
  
1. Create a bug if you find a problem.  
  
   ![Report a bug from the test run](_img/run-manual-tests-with-microsoft-test-manager/almp_t_create10.png)  
  
1. Name the bug and describe the failure.  
  
   ![Give the bug a title](_img/run-manual-tests-with-microsoft-test-manager/almp_t_create11.png)  
  
   You can assign the bug if you know who'll fix it.  
  
1. End the test and save the results.  
  
   ![Complete the test run](_img/run-manual-tests-with-microsoft-test-manager/almp_t_create12.png)  
  
   Now the results are stored in TFS.  
  
## Replay previous tests
  
If you ran a test before, you can repeat it quickly by replaying the same actions.  
(This works with most applications, though not all).  
  
1. Start the test. Don't overwrite the recording.  
  
   ![Uncheck Overwrite recording. Click Start.](_img/run-manual-tests-with-microsoft-test-manager/alm_p_t78play.png)  
  
1. **Play** your recorded actions. You have to verify the results of each step.  
  
   ![Click Play](_img/run-manual-tests-with-microsoft-test-manager/almp_t79playstep.png)  
  
## Track the progress of your tests  

Monitor the progress of your project by seeing how many tests have passed.  
Tests begin in the Active state, meaning that they are ready to run. When a bug has been fixed, you can set the state of a failed test back to Active.  
  
![View test results and reset a test ready to re&#45;run](_img/run-manual-tests-with-microsoft-test-manager/almp_t_run13.png)  
  
## See Also  

* [Repeat a test with different data](../repeat-test-with-different-data.md)   
* [Test configurations: specifying test platforms](../test-different-configurations.md)   
* [Record and play back manual tests](record-play-back-manual-tests.md)   
* [Collect more diagnostic data](collect-more-diagnostic-data-in-manual-tests.md)   
* [Testing Microsoft Store apps](testing-microsoft-store-apps.md)

[!INCLUDE [help-and-support-footer](../_shared/help-and-support-footer.md)] 
