---
ms.subservice: azure-devops-analytics
ms.topic: include
ms.date: 09/10/2025
---

## How cycle time handles reactivated work items

For work items that are reactivated (moved from a *Completed* state back to an *In Progress* state), cycle time starts from the first time the work item enters an *In Progress* or *Resolved* state category and ends the final time it enters a *Completed* state category. Cycle time includes the entire active work period, including any time after reactivation.

**Example scenario:**
- New → Active → Resolved → Closed → New → Active → Closed
- **Cycle time calculation:** From the first transition to Active to the final transition to Closed
- **Total cycle time:** Includes both active work periods and the time in Closed state before reactivation

This calculation method gives a complete picture of the total time needed to finish the work item, including any rework or extra effort after reactivation. Lead time calculation follows the same principle—it covers the entire period from work item creation to final completion, regardless of any intermediate completed states.
