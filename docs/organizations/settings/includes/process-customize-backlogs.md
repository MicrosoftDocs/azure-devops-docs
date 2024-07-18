---
ms.service: azure-devops-boards
ms.author: chcomley
author: chcomley
ms.prod: azure-devops
ms.topic: include
ms.date: 07/16/2024
---


Backlogs and boards are essential Agile tools for creating and managing work for a team. The standard backlogs&mdash;product, iteration, and portfolio&mdash;inherited from the system process are fully customizable. In addition, you can add custom portfolio backlogs for a total of five portfolio backlogs. 

---
:::row:::
   :::column span="":::
      **Backlog types**
   :::column-end:::
   :::column span="2":::
      **Customization support**  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      **Inherited backlogs** 
   :::column-end:::
   :::column span="2":::
      - [Add a custom work item type (WIT)](../work/customize-process-backlogs-boards.md#edit-product-backlog) 
      ::: moniker range=">= azure-devops-2020"
      - [Add an inherited work item type](../work/customize-process-backlogs-boards.md#add-oob-to-backlog) 
      ::: moniker-end  
      - [Change the default work item type](../work/customize-process-backlogs-boards.md#edit-product-backlog) 
      - [Rename a backlog](../work/customize-process-backlogs-boards.md#edit-product-backlog)  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      **Custom portfolio backlogs**
   :::column-end:::
   :::column span="2":::
      - [Add a portfolio backlog that displays custom work item types (WITs)](../work/customize-process-backlogs-boards.md#add-portfolio-backlog) 
      - [Edit or rename a portfolio backlog](../work/customize-process-backlogs-boards.md#edit-portfolio-backlog) 
      - [Delete the top-level custom portfolio backlog](../work/customize-process-backlogs-boards.md#edit-portfolio-backlog)  
   :::column-end:::
:::row-end:::
---
 
**Unsupported customizations:**

::: moniker range=">= azure-devops-2020"

- **Removing an inherited portfolio level:**
  - While you can’t directly remove an inherited portfolio level from a product, you have a couple of options:
    - **Rename the portfolio level:** You can rename the inherited portfolio level to better suit your needs.
    - **Disable an inherited WIT:** If the inherited portfolio level includes WITs that you don’t want to use, you can disable them. This action prevents teams from creating new work items of those types.
- **Inserting a backlog level:**
  - You can't insert a new backlog level within the existing set of defined backlogs. The predefined backlog levels are typically fixed (for example, Epics, Features, User Stories, Tasks), and you can’t add custom ones in between.
- **Reordering backlog levels:**
  - Unfortunately, you can't reorder the backlog levels. They usually follow a predefined hierarchy, and changing their order isn’t supported.
- **Adding a WIT to multiple backlog levels:**
  - Each WIT can only belong to one backlog level. You can't add a WIT to two different backlog levels simultaneously.
- **Creating a custom task backlog level:**
  - Although you can't create a custom task-specific backlog level, you can still add custom WITs to the iteration backlog. For example, you could create a custom WIT called "Enhancement" or "Maintenance" and associate it with the iteration backlog.
- **Managing bugs:**
  - The Bug WIT doesn’t belong to any specific backlog level by default. Instead, each team can decide how they want to manage bugs. You can choose to [show bugs on backlogs and boards or handle them separately](../show-bugs-on-backlog.md).

::: moniker-end  

::: moniker range="azure-devops-2019"

- **Adding or removing an inherited WIT from a backlog:**
  - You can't directly add or remove an inherited WIT to or from a backlog. For instance, adding the "Issue" WIT to the product backlog isn’t supported.
  - However, you can:
    - **Rename the portfolio level:** If the inherited portfolio level includes WITs you don’t want to use, consider renaming it to better suit your needs.
    - **Disable an inherited WIT:** If there are inherited WITs that you want to exclude, you can disable them. This action prevents teams from creating new work items of those types.
- **Removing an inherited portfolio level:**
  - While you can’t remove an inherited portfolio level from a product, you have a couple of options:
    - **Rename the portfolio level:** Give it a more fitting name.
    - **Disable inherited WITs:** Prevent teams from using specific inherited WITs.
- **Inserting a backlog level:**
  - Unfortunately, you can't insert a new backlog level within the existing set of defined backlogs. The predefined backlog levels remain fixed (for example, Epics, Features, User Stories, Tasks).
- **Reordering backlog levels:**
  - Backlog levels typically follow a predefined hierarchy, and changing their order isn’t supported. You can't reorder them.
- **Adding a WIT to multiple backlog levels:**
  - Each WIT (for example, Bug, Task, User Story) can only belong to one backlog level. You can't add a WIT to two different backlog levels simultaneously.
- **Creating a custom task level:**
  - Although you can't create a custom task-specific backlog level, you can still add custom WITs to the iteration backlog. For example, create a custom WIT called "Enhancement" or "Maintenance" and associate it with the iteration backlog.
- **Managing bugs:**
  - The Bug WIT doesn’t belong to any specific backlog level by default. Instead, each team can decide how they want to manage bugs. You can choose to [show bugs on backlogs and boards or handle them separately](../show-bugs-on-backlog.md).

::: moniker-end
