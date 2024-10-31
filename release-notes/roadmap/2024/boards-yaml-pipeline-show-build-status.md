---
title: Show build status when using a YAML build pipeline with GitHub repository
author: danhellem
ms.author: dahellem
ms.date: 10/30/2023
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: Show build status when using a YAML build pipeline with GitHub repository
hide_comments: true
---

# Build status when using a YAML build pipeline with GitHub repository

Similar to how classic release pipelines report deployment status, we’re adding support for YAML pipelines to display stage status on the **Deployments** control within the work item form. This enhancement will improve the experience for users utilizing Azure Boards alongside YAML pipelines.

> [!div class="mx-imgBorder"]
> ![screen shot example of github build status on work item form](media\boards-build-status-on-yaml-gh-repo.png)

> [!NOTE]
> This feature will only be available with the [new Azure Boards experience](https://learn.microsoft.com/azure/devops/release-notes/2024/sprint-237-update#new-boards-hub-on-by-default).