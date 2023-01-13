---
author: ckanyika
ms.author: ckanyika
ms.date: 1/12/2023
ms.topic: include
---

### Card resize logic in Delivery Plans

Not everyone uses target date and/or start date when tracking Features and Epics. Some choose to  use a combination of dates and iteration path. In this sprint, we improved the logic to appropriately set the iteration path and date field combinations depending on how they are being used.

For example, if target date is not being used and you resize the card, the new iteration path is set instead of updating the target date.

> [!div class="mx-imgBorder"]
> ![Gif to demo copy comments link.](../../media/214-boards-01.gif "gif to demo copy comments link")

### Batch update improvements

We made several changes to the 7.1 version of the work item batch update API. These include minor performance improvements and the 
handling of partial failures. Meaning, if one patch fails but the others do not, the others will successfully be completed.

[Click here](/rest/api/azure/devops/wit/?view=azure-devops-rest-7.1&preserve-view=true) to learn more about the batch update REST API.

### Batch delete API (GA)

This new REST API endpoint to delete and/or destroy work items in batch is now publicly available. [Click here](/rest/api/azure/devops/wit/work-items/delete-work-items?view=azure-devops-rest-7.1&preserve-view=true) to learn more.
