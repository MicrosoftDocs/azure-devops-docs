---
title: Support state transitions when merging a GitHub pull request
author: danhellem
ms.author: dahellem
ms.date: 11/27/2024
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: Support state transitions when merging a GitHub pull request
hide_comments: true
---

# Support state transitions when merging a GitHub pull request

When merging a GitHub pull request using AB#{Id}, only the Fixes keyword is supported to close the linked work item. However, as a user, I would like the ability to set the linked work item to a specific stats, such as **Resolved**, without necessarily closing it. Ideally, I should be able to select any state supported by the work item type during the merge process.

> [!div class="mx-imgBorder"]
> ![screen shot example resolved state transition](media\github-state-transition-for-work-item.png)
