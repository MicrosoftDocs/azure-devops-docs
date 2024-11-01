---
author: ckanyika
ms.author: ckanyika
ms.date: 11/1/2024
ms.topic: include
---

### New Release: Azure Test Runner Public Version 1.2.2

Azure Test Plans released a fix in 1.2.2 for a recent issue in Test Plans where ATR experienced launch failures in Chrome version 130. This issue arose due to Chrome’s [added support for non-special scheme URLs](https://docs.google.com/document/d/1LjxHl32fE4tCKugrK_PIso7mfXQVEeoD1wSnX2y0ZU8/edit?resourcekey=0-d1gP4X2sG7GPl9mlTeptIA&tab=t.0#heading=h.voahsyj6c2dh), which impacted the ATR user flow. With this update, the regression bug is resolved, and ATR functionality is restored. For more details about this regression bug, visit [this issue tracker](https://issues.chromium.org/issues/375228139) in Chromium.

We encourage you to use web application for enhanced features. If you find any missing features in web application, we would love to hear from you. [Share your feedback](mailto:adocustomerfeedback@service.microsoft.com) with us! 


### Sorting in Test Plans Directory

We’ve added a new sorting feature to the Test Plans Directory page! You can now sort by each column more effectively, with options for all column types. Sorting is available in alphanumeric order, making it easier to organize and find the information you need quickly.

> [!div class="mx-imgBorder"]
> ![Gif to demo Sorting in Test Plans Directory.](../../media/247-testplans-01.gif "gif to Sorting in Test Plans Directory")


### Auto Pause for Test Case Run

Manual testers frequently face challenges with losing partial test run data when they forget to mark an incomplete test case as "Paused" before selecting "Save and Close". This oversight can result in losing all progress on complex or long-running test cases, requiring testers to start over. To address this issue, we’re introducing Auto Pause for Test Case Run. This new feature automatically marks a test case as "Paused" if the tester steps away or interrupts their work, ensuring data is saved without the need for a manual pause. By simplifying the pause and resume process, testers can pick up exactly where they left off. A preview becomes available in the coming weeks—please [email us](mailto:adocustomerfeedback@service.microsoft.com) if you’d like to join! 

### New release version for test and feedback extensions (TFE)

We’re excited to announce the release of TFE version 1.0.247.0, now available for both Chrome and Edge. 

**What’s New:**

* Fix for Stakeholder Mode: We have resolved the issue with Stakeholder Mode, which previously experienced disruptions.

New Release: Test and Feedback Extension 1.0.247.0

We’re thrilled to announce the release of TFE version 1.0.247.0, now available on both Chrome and Edge. This update brings a key improvement: a fix for Stakeholder Mode, addressing and resolving previous disruptions. Enjoy a smoother, more reliable experience with this latest version!