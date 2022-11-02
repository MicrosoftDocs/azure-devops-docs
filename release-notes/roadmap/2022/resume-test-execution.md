---
title: Pause and resume manual test execution.
author: aaronhallberg
ms.author: aaronha
ms.date: 10/10/2022
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: Pause and resume manual test execution in Azure Test Plans
hide_comments: true
---

# Pause and resume manual test execution in Azure Test Plans

When manual testers are executing the steps of a particularly complicated or long-running test case, they may from
time to time wish to *pause* their work and then resume it later. Today this is more complicated and less intuitive
than it should be. And some scenarios, such as resuming the execution of the test case in the desktop test runner,
are not supported at all. This feature will focus on improving the experience of pausing and resuming test execution,
including adding support for resuming execution in either the web or desktop test runners.  
