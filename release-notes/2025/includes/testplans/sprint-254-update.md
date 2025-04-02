---
author: ckanyika
ms.author: ckanyika
ms.date: 4/2/2025
ms.topic: include
---

### Switch to Screen Recording as Action Logging is Being Retired

Our desktop Azure Test Runner client relies on [Problem Steps Recorder](https://support.microsoft.com/windows/record-steps-to-reproduce-a-problem-46582a9b-620f-2e36-00c9-04e25d784e47) (PSR), a tool introduced in Windows 7 that is now [being deprecated](https://support.microsoft.com/windows/steps-recorder-deprecation-a64888d7-8482-4965-8ce3-25fb004e975f) in newer Windows versions. As a result, the action log functionality in our desktop test runner may no longer work in future updates. 

To ensure uninterrupted test tracking, we recommend switching to screen recording in our web runner, [Test & Feedback Extension](https://marketplace.visualstudio.com/items?itemName=ms.vss-exploratorytesting-web), which provides a modern, reliable way to capture and manage test steps. If you need assistance transitioning to the Test & Feedback Extension, please reach out to our support team.

### Auto-pause manual test run 

Never lose progress on your test runs with auto-pause test case run. This new feature automatically pauses your test case run if your work is interrupted, ensuring that partial progress is saved without needing a manual pause. Whether you step away or close the session, you can easily resume your test case right where you left off, reducing the risk of data loss and improving your workflow. By simplifying the pause and resume process, auto-pause helps you stay focused on testing without worrying about losing your progress. Give it a try and let us know via [email](mailto:adocustomerfeedback@service.microsoft.com) what you think!

> [!div class="mx-imgBorder"]
> ![Gif to demo Undo test step in web and desktop runner.](../../media/254-testplans-01.gif "gif to demo Undo test step in web and desktop runner")