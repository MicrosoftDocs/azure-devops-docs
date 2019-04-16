---
title: Record and play back manual tests
description: Record and play back manual tests in Azure DevOps and TFS to make sure each of the deliverables meets your users needs
ms.assetid: 6B6E991A-969F-4AB3-8031-9BFF260D9142
ms.prod: devops
ms.technology: devops-test
ms.topic: conceptual
ms.manager: jillfra
ms.author: ahomer
author: alexhomer1
ms.date: 12/07/2018
monikerRange: '>= tfs-2015'
---

# Record and play back manual tests

[!INCLUDE [version-inc-vs](../_shared/version-inc-vs.md)]

>[!NOTE]
>[!INCLUDE [mtm-deprecate-message](../_shared/mtm-deprecate-message.md)]

Record keystrokes and mouse actions with Microsoft Test Manager 
while you are testing an app. You can then play back your actions 
quickly and accurately the next time you run the test. 

Playback is useful for reproducing bugs. You can retrace the 
exact actions that the tester performed to the point where the 
problem was found. Playback also helps you run a test with 
[different data](../repeat-test-with-different-data.md), 
on [multiple configurations](../test-different-configurations.md), 
or where you have [shared steps](../mtm/share-steps-between-test-cases.md) 
that are the same in many test cases. Playback also speeds up 
regression testing - that is, tests that you run from one sprint 
to the next to make sure that everything still works correctly.

You can record and play back tests in a wide range of desktop apps, 
and also web apps that you access through a supported browser. 
For a detailed list, see 
[Supported configurations and platforms for coded UI tests and action recordings](/visualstudio/test/supported-configurations-and-platforms-for-coded-ui-tests-and-action-recordings).

[!INCLUDE [feature-availability](../_shared/feature-availability.md)] 

## Run Microsoft Test Manager on your client machine

To record and play back actions, you have to install 
Microsoft Test Manager on the machine where you'll 
run your tests. If you're testing a desktop app, 
install the latest version of the app and Microsoft 
Test Manager on the same machine. If you're testing 
a web-based app, install the app on a test server, 
and run Microsoft Test Manager on the machine where 
you'll run your web browser.

To get Microsoft Test Manager, install [Visual Studio Test Professional](https://visualstudio.microsoft.com/vs/test-professional/)
or [Visual Studio Enterprise](https://visualstudio.microsoft.com/downloads/)

### Run a test case

1. [Connect Microsoft Test Manager](connect-microsoft-test-manager-to-your-team-project-and-test-plan.md) 
   to your project, and select your current test plan.

1. [Select a test case and run it](run-manual-tests-with-microsoft-test-manager.md).

   ![Start the test from Microsoft Test Manager.](_img/record-play-manual-tests/start-test.png)

## Record your actions during a test run

1. In the **Start Test** window, 
   select **Create action recording**.

   ![Create an action recording.](_img/record-play-manual-tests/create-recording.png)

1. After each step, make sure to mark that step **Pass** or **Fail**.

1. If you want to pause your test, choose **Pause**.  

   ![Pause the recording](_img/record-play-manual-tests/pause-recording.png)

1. After you finish your test run, choose **End Test**. 
   This makes sure the recording assigns your actions to the correct steps.

**Caution:** All your keystrokes and gestures might be recorded, 
including passwords, emails, chat messages, and other sensitive data.

### Delete mistakes

Open the editing panel at the bottom of the test runner. 
You can delete actions there:

![Edit the recording inline](_img/record-play-manual-tests/delete-actions.png)

Alternatively, you can run the test again and choose **Overwrite action recording**.

### Keep or re-record shared steps

If you come to a sequence of shared steps, 
you might have already recorded them in an earlier test case. 
You can either keep the earlier recording or record them now, like this:

![Record a shared step](_img/record-play-manual-tests/rerecord-shared-steps.png)

You have to indicate when you finish recording the shared steps:

![Record a shared step](_img/record-play-manual-tests/finish-rerecording-shared-steps.png)

### Capture parameter values

If a test step requires a parameter value that you must type as text, 
that text is recognized and bound into the recording. When you play the
recording back with other parameter values, the new values are used instead.

![Parameters are bound if you type them.](_img/record-play-manual-tests/text-parameters-bound.png)

Parameter values aren't bound if they're not typed as text, for example, 
when values are selected instead. When you play the recording back, 
you'll have to manually perform that step.

## Play back an action recording

1. [Select your test and run it](run-manual-tests-with-microsoft-test-manager.md).
   Don't select the overwrite option in the **Start Test** dialog box.

   ![Start the test without overwriting the recording](_img/record-play-manual-tests/start-test-no-overwrite.png)

   You can play the whole test, or play individual steps. 
   The test runner will replay the keystrokes and mouse actions that you recorded.

1. You have to check the result of each step. The recording doesn't check the outputs.

   ![Play each step and then check the result.](_img/record-play-manual-tests/play-check-result.png)

[!INCLUDE [help-and-support-footer](../_shared/help-and-support-footer.md)] 
