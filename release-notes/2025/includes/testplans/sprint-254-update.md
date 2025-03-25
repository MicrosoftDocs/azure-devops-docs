---
author: ckanyika
ms.author: ckanyika
ms.date: 4/2/2025
ms.topic: include
---

### Publish code coverage results v2 task improvements

Introducing the ability to associate automated tests written in Java/JUnit (Maven and Gradle), JS (Jest) and Python (PyTest) with manual test cases. 

> [!div class="mx-imgBorder"]
> [![Screenshot of code coverage.](../../media/254-testplans-01.png "Screenshot of code coverage")](../../media/254-testplans-01.png#lightbox)

Upon completion of the association, you can run your tests within your pipelines using the new [Azure Test Plan](https://learn.microsoft.com/azure/devops/pipelines/tasks/reference/azure-test-plan-v0?view=azure-pipelines) task. Additionally, you have the option to run your tests on an ad-hoc basis through the [Test Plans](https://learn.microsoft.com/azure/devops/test/run-automated-tests-from-test-hub?view=azure-devops) experience.

### Default resume for paused test case (Private Preview)

Quickly resume your paused test cases with a single click. We've made "Resume" the default action for paused test cases, allowing you to pick up right where you left off without extra navigation. This update makes it faster and easier to continue your work without interruption. To further protect your progress, we're introducing a confirmation prompt to prevent accidental overwrites of paused test progress. This safeguard ensures your partially saved work stays intact, giving you peace of mind while managing your test runs. Give it a try and let us know via [email](mailto:adocustomerfeedback@service.microsoft.com) what you think!

### Quick Access to Test Results in Test Case 

Quickly access recent test case results directly from the test case work item. We’ve introduced a new "Recent test results" section that provides direct visibility into the latest test results, eliminating the need to navigate through test plans or suites.  

With this update, you can review key test details at a glance and track recent test results more efficiently. For deeper insights, we’ve also added a direct link to view the complete result history of the test case, giving you quick access to all past runs in one place. These enhancements aim to streamline your workflow, making it easier to track progress and explore test history without interruptions. Give it a try and let us know via [email](mailto:adocustomerfeedback@service.microsoft.com) what you think!