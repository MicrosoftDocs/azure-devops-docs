---
ms.technology: devops-agile
ms.author: kaelli
author: KathrynEE
ms.topic: include
ms.date: 07/09/2020
---


## Add portfolio backlog levels and boards

If you need more than two portfolio backlogs, you can add up to two more for a total of five backlog levels. 

::: moniker range="azure-devops"

You can add them by customizing your process, adding new work item types, and then configuring your backlogs and boards. You can also add or modify the fields defined for a work item type (WIT) or add a custom WIT. For details, see [Customize an inheritance process](../../organizations/settings/work/inheritance-process-model.md) and [Customize your backlogs or boards (Inheritance process)](../../organizations/settings/work/customize-process-backlogs-boards.md). 

::: moniker-end

::: moniker range=">= azure-devops-2019 < azure-devops"

You can add them by either customizing your inherited process or modifying your XML definition files. You can also add or modify the fields defined for a work item type (WIT) or add a custom WIT. To learn how, see the following articles based on the process model used to update your project: 

**Inheritance process model:**
- [Customize your backlogs or boards for a process](../../organizations/settings/work/customize-process-backlogs-boards.md). 
- [Customize an inheritance process](../../organizations/settings/work/inheritance-process-model.md). 

**On-premises XML process model:**
- [Customize work tracking](../../reference/customize-work.md)
- [Add portfolio backlogs](../../reference/add-portfolio-backlogs.md)
- [Customize the On-premises XML process model](../../reference/on-premises-xml-process-model.md)

::: moniker-end

::: moniker range="<= tfs-2018"

You can add them by defining additional work item types and then customizing your process configuration. You can also add or modify the fields defined for a work item type (WIT) or add a custom WIT. To learn more, see [Customize the On-premises XML process model](../../reference/on-premises-xml-process-model.md) and [Add a portfolio backlog level](../../reference/add-portfolio-backlogs.md).

::: moniker-end