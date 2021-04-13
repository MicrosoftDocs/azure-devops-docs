---
ms.technology: devops-agile
ms.author: kaelli
author: KathrynEE
ms.topic: include
ms.date: 04/08/2021
---


::: moniker range=">= azure-devops-2020"

<a id="activated-resolved-fields" />

### Activated By/Date and Resolved By/Date fields 

The system updates these fields&mdash;**Activated By**, **Activated Date**, **Resolved By**, and **Resolved Date**&mdash;when a change occurs based on corresponding workflow category states. When the workflow state changes to a *Proposed* state category, **Activated By** and **Activated Date** are updated. When the workflow state changes to a *Resolved* state category, **Resolved By** and **Resolved Date** are updated. 

To learn more how workflow states map to state categories, see [How workflow states and state categories are used in Backlogs and Boards](../work-items/workflow-and-state-categories.md). 

> [!NOTE]   
> The logic governing the fields described here applies to Azure DevOps Services, [Azure DevOps Server 2020.1 update](/azure/devops/server/release-notes/azuredevops2020u1#improved-rules-for-activated-and-resolved-fields), and later versions.   
   
Because these fields reference the workflow state categories, custom workflow states that you add are referenced when updating the fields. To learn more about customization, see [Customize the workflow for a process](../../organizations/settings/work/customize-process-workflow.md). 

#### Additional notes:

- The fields get updated anytime a work item moves from any category state other than that being set. For example, if you update a work item from *New* to *Fixed*, the **Resolved By/Resolved Date** fields are updated. However, if you update from *Fixed* and *Ready for Testing*&mdash;which are in the same category state&mdash;the **Resolved By/Resolved Date** fields aren't updated.
- When you transition backwards, such as going from a *Resolved* to an *Active* state, the system clears the values for **Resolved By/Resolved Date**  fields. If you got from *Active* to *New*, the system clears the values for  **Activated By/Activated Date** fields.
- Don't manually change the values for these fields. They are system fields that are governed by system rules. Any value you attempt to set will get over written. 

::: moniker-end