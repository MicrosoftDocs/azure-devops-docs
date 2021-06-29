---
ms.technology: devops-agile
ms.author: kaelli
author: KathrynEE
ms.prod: azure-devops
ms.topic: include
ms.date: 04/07/2021 
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
      - [Add a custom work item type](../work/customize-process-backlogs-boards.md#edit-product-backlog) 
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
      - [Add a portfolio backlog which displays custom work item types](../work/customize-process-backlogs-boards.md#add-portfolio-backlog) 
      - [Edit or rename a portfolio backlog](../work/customize-process-backlogs-boards.md#edit-portfolio-backlog) 
      - [Delete the top-level custom portfolio backlog](../work/customize-process-backlogs-boards.md#edit-portfolio-backlog)  
   :::column-end:::
:::row-end:::
---
 

**What you can't customize**  

::: moniker range=">= azure-devops-2020"

- You can't remove an inherited portfolio level from the product (but you can rename the portfolio level and you can disable an inherited work item type)
- You can't insert a backlog level within the existing set of defined backlogs
- You can't reorder the backlog levels  
- You can't add a work item type to two different backlog levels  
- You can't create a custom task backlog level, although you can add custom WITs to the iteration backlog  
- You can't add the *Bug* WIT to any backlog level. Instead, the system allows each team to decide how they want to manage bugs. To learn more, see [Show bugs on backlogs and boards](../show-bugs-on-backlog.md).

::: moniker-end  


::: moniker range="azure-devops-2019"

- You can't add or remove an inherited WIT to or from a backlog, for example, you can't add the Issue WIT to the product backlog    
- You can't remove an inherited portfolio level from the product (but you can rename the portfolio level and you can disable an inherited work item type)  
- You can't insert a backlog level within the existing set of defined backlogs
- You can't reorder the backlog levels  
- You can't add a work item type to two different backlog levels  
- You can't create a custom task level, although you can add custom work item types to the iteration backlog  
- You can't add the *Bug* WIT to any backlog level. Instead, the system allows each team to decide how they want to manage bugs. To learn more, see [Show bugs on backlogs and boards](../show-bugs-on-backlog.md).

::: moniker-end