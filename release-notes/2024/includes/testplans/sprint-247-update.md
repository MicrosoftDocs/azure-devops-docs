---
author: ckanyika
ms.author: ckanyika
ms.date: 11/13/2024
ms.topic: include
---

### Azure Test Runner version 1.2.2

Azure Test Plans released a fix in 1.2.2 for a recent issue in Test Plans where Azure Test Runner(ATR) experienced launch failures in Chrome version 130. This issue arose due to Chrome’s [added support for non-special scheme URLs](https://docs.google.com/document/d/1LjxHl32fE4tCKugrK_PIso7mfXQVEeoD1wSnX2y0ZU8/edit?resourcekey=0-d1gP4X2sG7GPl9mlTeptIA&tab=t.0#heading=h.voahsyj6c2dh), which impacted the ATR user flow. With this update, the regression bug is resolved, and ATR functionality is restored. For more details about this regression bug, visit [this issue tracker](https://issues.chromium.org/issues/375228139) in Chromium.

We encourage you to use web application for enhanced features. If you find any missing features in web application, we would love to hear from you. [Share your feedback](mailto:adocustomerfeedback@service.microsoft.com) with us! 


### New sorting capabilities in Test Plans directory

The Test Plans directory now offers enhanced sorting options! With this update, you can quickly organize each column alphanumerically, providing a streamlined way to find and access your data.

> [!div class="mx-imgBorder"]
> ![Gif to demo Sorting in Test Plans Directory.](../../media/247-testplans-01.gif "gif to Sorting in Test Plans Directory")


### Auto Pause for Test Case Run preview

Manual testers often encounter challenges with losing progress on test cases if an incomplete run isn’t marked as “Paused” before selecting “Save and Close.” This can result in lost work on complex or lengthy cases, requiring testers to start over. To solve this, we’re introducing Auto Pause for Test Case Run. This feature automatically pauses a test case if there’s a break or interruption, ensuring all data is saved without needing a manual pause. With Auto Pause, testers can easily resume right where they left off, simplifying the testing process and making it more efficient. A preview will be available in the coming weeks—[email us](mailto:adocustomerfeedback@service.microsoft.com) if you’d like to join! 

### New release version for Test and Feedback Extensions (TFE)

We’re thrilled to announce the release of TFE version 1.0.247.0, now available on both Chrome and Edge. [Install the latest version](https://microsoftedge.microsoft.com/addons/detail/test-feedback/leeakgkdanfdoebeohldonigkalooaej) to improved functionality, with a fix for Stakeholder Mode, addressing and resolving previous disruptions. Enjoy a smoother, more reliable experience with this latest version! 