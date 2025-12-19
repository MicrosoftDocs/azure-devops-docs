---
ms.service: azure-devops-boards
ms.author: chcomley
author: chcomley
ms.prod: azure-devops
ms.topic: include
ms.date: 11/04/2025
---

Backlogs and boards are essential Agile tools for creating and managing work for a team. The standard product, iteration, and portfolio backlogs inherited from system processes are fully customizable. You can also add custom portfolio backlogs up to a total of five portfolio backlogs.

For more information about customizing inherited and custom portfolio backlogs, see the following resources:

**Inherited backlogs** 

- [Add a custom work item type (WIT)](../work/customize-process-backlogs-boards.md#edit-product-backlog) 
- [Add an inherited work item type](../work/customize-process-backlogs-boards.md#add-oob-to-backlog) 
- [Change the default work item type](../work/customize-process-backlogs-boards.md#edit-product-backlog) 
- [Rename a backlog](../work/customize-process-backlogs-boards.md#edit-product-backlog)  

**Custom portfolio backlogs**

- [Add a custom portfolio backlog that displays custom work item types (WITs)](../work/customize-process-backlogs-boards.md#add-portfolio-backlog) 
- [Edit or rename a custom portfolio backlog](../work/customize-process-backlogs-boards.md#edit-portfolio-backlog) 
- [Delete the top-level custom portfolio backlog](../work/customize-process-backlogs-boards.md#edit-portfolio-backlog)  

### Limitations

- You can't remove an inherited portfolio level from a product. You can rename the level, or disable WITs to prevent teams from creating new work items of those types.
- You can't insert a new custom backlog level within the existing set of defined backlogs. The predefined backlog levels are typically fixed, for example **Epics**, **Features**, **User stories**, and **Tasks**.
- You can't reorder the backlog levels. They usually follow a predefined hierarchy, and changing the order isn't supported.
- You can't add a WIT to two different backlog levels. Each WIT can belong to only one backlog level.
- You can't create a custom task-specific backlog level, but you can still add custom WITs to the iteration backlog. For example, you could create a custom WIT called **Enhancement** or **Maintenance** and associate it with the iteration backlog.
- The **Bug** WIT doesn't belong to any specific backlog level by default. Each team can decide how they want to manage bugs. You can choose to show bugs on backlogs and boards or handle them separately. For more information, see [Show bugs on backlogs](../show-bugs-on-backlog.md).

