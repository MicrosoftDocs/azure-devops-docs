---
title: Show status of GitHub Actions work flow run
author: danhellem
ms.author: dahellem
ms.date: 10/30/2023
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: Show status of GitHub Actions work flow run
hide_comments: true
---

# Status of GitHub Actions work flow run on work item form

Imagine the following scenario:

- Your planning is managed in Azure Boards.
- Your code resides in a GitHub repository.
- Your build process is automated through GitHub Actions.

Now, whenever a work item is linked to a GitHub repository, whether through a pull request or a commit, you can monitor the status of the pertinent GitHub Actions workflows directly within the **Deployment** control of the work item form.

> [!div class="mx-imgBorder"]
> ![screen shot example of work flow run on work item form](media\boards-show-github-actions-status-1.png)
> [!NOTE]
> This feature will only be available with the [**New Boards Hubs** preview](https://devblogs.microsoft.com/devops/new-boards-hub-public-preview/).