---
title: Show more details about a GitHub Pull Request
author: danhellem
ms.author: dahellem
ms.date: 10/30/2023
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: Show more details about a GitHub Pull Request
hide_comments: true
---

# Show more details about a GitHub Pull Request

Today the GitHub integration shows if a Pull Request is either open or closed. We want to improve that to match how GitHub displays the status of a Pull Request from the Pull Request list. This will include the following:

- Pull Request id 
- Date the Pull Request was created
- Show the status of the Pull Request (draft, review required, approved, merged)
- Status of checks (completed, partially completed, failed)

Example:

> [!div class="mx-imgBorder"]
> ![screen shot example adding link to Github](media\github-pr-details-on-work-item.png)

> [!NOTE]
> This feature will only be available with the [**New Boards Hubs** preview](https://devblogs.microsoft.com/devops/new-boards-hub-public-preview/).