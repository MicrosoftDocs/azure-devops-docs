---
ms.technology: devops-agile
ms.author: kaelli
author: KathrynEE
ms.topic: include
ms.date: 08/06/2020
---


::: moniker range="azure-devops"

<a id="activated-resolved-fields" />

### Activated By/Date and Resolved By/Date fields 

The system updates the **Activated By**, **Activated Date**, **Resolved By**, and **Resolved Date** fields when a change occurs to the workflow category state. These fields get updated when the workflow state changes to one that is in a state category  of *Proposed* for **Activated By** and **Activated Date**, and *Resolved* for **Resolved By** and **Resolved Date**. 

To learn more how workflow states map to state categories, see [How workflow states and state categories are used in Backlogs and Boards](/azure/devops/boards/work-items/workflow-and-state-categories). 

> [!NOTE]   
> The logic governing the fields described here applies to Azure DevOps Services only.   
   
Because these fields reference the workflow state categories, custom workflow states that you add are referenced when updating the fields. To learn more about customization, see [Customize the workflow for a process](/azure/devops/organizations/settings/work/customize-process-workflow). 

#### Additional notes:

- The fields get updated anytime a work item moves from any category state other than that being set. For example, if you update a work item from *New* to *Fixed*, the **Resolved By/Resolved Date** fields are updated. However, if you update from *Fixed* and *Ready for Testing*&mdash;which are in the same category state&mdash; the **Resolved By/Resolved Date** fields aren't updated.
- When you transition backwards, such as going from a *Resolved* to an *Active* state, the system clears the values for **Resolved By/Resolved Date**  fields. If you got from *Active* to *New*, the system clears the values for  **Activated By/Activated Date** fields.
- You should never attempt to manually change the values for these fields.   They are system fields that are goverened by system rules. Any value you attempt to set will get over written. 

::: moniker-end