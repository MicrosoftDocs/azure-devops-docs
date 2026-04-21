---
ms.service: azure-devops-boards
ms.author: chcomley
author: chcomley
ms.topic: include
ms.date: 03/24/2026
ai-usage: ai-assisted
---

<a id="activated-resolved-fields"></a>

::: moniker range="<=azure-devops"

### Activated By/Date and Resolved By/Date fields 

The system updates these fields&mdash;**Activated By**, **Activated Date**, **Resolved By**, and **Resolved Date**&mdash;based on workflow category state changes.
When the workflow state changes to an *In Progress* category, the system updates **Activated By** and **Activated Date**.
When the workflow state changes to a *Resolved* category, the system updates **Resolved By** and **Resolved Date**.

For more information about how workflow states map to state categories, see [How workflow states and state categories are used in Backlogs and Boards](../work-items/workflow-and-state-categories.md).

> [!NOTE]   
> This logic applies to Azure DevOps Services, [Azure DevOps Server 2020.1 update](/azure/devops/server/release-notes/azuredevops2020u1#improved-rules-for-activated-and-resolved-fields), and later versions.

Because these fields reference workflow state categories, any custom workflow states you add also trigger field updates.
For more information, see [Customize the workflow for a process](../../organizations/settings/work/customize-process-workflow.md).

#### Additional notes

- The fields update anytime a work item moves from a category state other than the one being set.
For example, if you move a work item from *New* to *Fixed*, the **Resolved By/Resolved Date** fields update.
However, if you move from *Fixed* to *Ready for Testing*&mdash;which are in the same category state&mdash;the **Resolved By/Resolved Date** fields don't update.
- When you transition backward, such as from a *Resolved* to an *Active* state, the system clears the **Resolved By/Resolved Date** fields.
If you move from *Active* to *New*, the system clears the **Activated By/Activated Date** fields.
- Don't manually change these field values.
They're system fields governed by system rules, and any value you set is overwritten.

::: moniker-end
