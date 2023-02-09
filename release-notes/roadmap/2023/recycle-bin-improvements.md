---
title: Work item recycle bin improvements
author: danhellem
ms.author: dahellem
ms.date: 01/20/2022
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: Work item recycle bin improvements
hide_comments: true
---

# Recycle bin improvements

As a user with permanently delete work item permissions, I need to be able to:

- Search and find specific work items that have been deleted
- Select all work items in the recycle bin and permanently delete them
- Recycle bin actions and response times need to be fast

Our proposed solution...

- Remove recycle bin from being part of the queries hub
- Simplify and optimize for performance (example, remove preview work item panel)
- Limit the number of work items returned to 2,000
- Add field criteria panel to provide basic search capabilities
- Select all functionality for easier permanently deleting of items

> [!div class="mx-imgBorder"]
> ![screen shot of example of swimlane colors.](media/boards-recycle-bin.gif#lightbox)

> [!NOTE]
> This feature will only be available with the [**New Boards Hubs** preview](https://devblogs.microsoft.com/devops/new-boards-hub-public-preview/).