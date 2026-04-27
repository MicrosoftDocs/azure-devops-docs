---
ms.service: azure-devops-test-plans
ms.author: chcomley
author: chcomley
ms.topic: include
ms.date: 03/31/2026
---

Test cases by themselves aren't executable. When you add a test case to a test suite, you generate *test points*. A test point is a unique combination of a test case, test suite, configuration, and tester.

For example, a test case called *Test sign in functionality* with two configurations (Microsoft Edge and Chrome) generates two test points. You can run each test point independently, and each execution produces a test result. You can view all executions for a test point in the execution history. The **Execute** tab shows the latest result for each test point.
