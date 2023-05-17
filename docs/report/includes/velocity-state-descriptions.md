---
ms.topic: include
---


### Velocity state descriptions

|State  |Description |
|---------|---------|
|Planned    | Calculated based on the number of work items assigned to the sprint before the start of the sprint. If a work item is assigned to the sprint before the start of the sprint, and then assigned to another sprint after the start of the original sprint, it shows as Planned in the original sprint, and then Completed/Completed, Late/Incomplete in the new sprint it's assigned to.     |
|Completed  | Calculated based on the number of work items assigned to the sprint before or after the start of the sprint and completed before the end of the sprint.        |
|Completed Late     |Calculated based on the number of work items assigned to the sprint before or after the start of the sprint but completed after the end of the sprint.          |
|Incomplete    | Calculated based on the number of work items assigned to the sprint before or after the start of the sprint and not yet completed.        |  

> [!NOTE]
> Items assigned to a Proposed or Resolved workflow state category aren't included in any of the calculations for Completed, Completed Late, or Incomplete. For more information, see [How workflow category states are used in Azure Boards backlogs and boards](../../boards/work-items/workflow-and-state-categories.md).
