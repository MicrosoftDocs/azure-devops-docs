---
author: ckanyika
ms.author: ckanyika
ms.date: 2/11/2025
ms.topic: include
---

### Direct Link from Test plan work item to Test plans page

You can now easily access the Test plans page directly from the Test plans work item. We're adding a clear, direct entry point to help you quickly navigate to the corresponding test plan without extra steps. This improvement makes it faster and more intuitive to trace your test plans, ensuring a smoother experience when managing your test workflow.

> [!div class="mx-imgBorder"]
> ![Gif to demo Test Plan, Suite ID search details.](../../media/251-testplans-01.gif "gif to GitHub Test Plan, Suite ID search details")

 Give it a try and let us know via  [email](mailto:adocustomerfeedback@service.microsoft.com) what you think!

### Azure Test Plans bug fixes

With this sprint, we made updates to Azure Test Plans to resolve several bugs and improve usability. Here's what's been fixed:

* Fixed an issue where Test Suites didn't update correctly when switching between Test Plans. For details on the initial bug, see [this DevComm post](https://developercommunity.visualstudio.com/t/Changing-between-Test-Plans-does-not-alw/10753235).

* Fixed an issue in the Test & Feedback Extension where session reports failed to download and redirected users to a blank page.

* Fixed an issue in the new Boards hub where Shared Steps opened in the old work item form and users couldn't delete comments in the discussion section. [this DevComm post](https://developercommunity.visualstudio.com/t/Delete-comment-in-discussion-section-in-/10775737).

* Fixed an issue where filtering test results by the Owner clause didn't work, causing queries to return an error instead of results. [this DevComm post](https://developercommunity.visualstudio.com/t/Filter-test-results-using-the-Owner-clau/10785774). 

### Export test cases with custom columns in XLSX

You can now export custom columns in XLSX. We've heard your feedback requesting Test Plans supports exporting test cases with custom columns. This feature gives you greater flexibility and control over the data you share and analyze. In addition, it helps you tailor exports to your needs, ensuring the information you export is relevant and actionable.

### Auto-pause manual test case run

Never lose progress on your test runs with auto-pause test case run. This new feature automatically pauses your test case run if your work is interrupted, ensuring that partial progress is saved without needing a manual pause. Whether you step away or close the session, you can easily resume your test case right where you left off, reducing the risk of data loss and improving your workflow. By simplifying the pause and resume process, auto-pause helps you stay focused on testing without worrying about losing your progress. 

Give it a try, and let us know via [email](mailto:adocustomerfeedback@service.microsoft.com) what you think!