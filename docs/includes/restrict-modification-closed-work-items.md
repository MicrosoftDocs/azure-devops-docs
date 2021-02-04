---
ms.technology: devops-agile
ms.prod: devops
ms.author: kaelli
author: KathrynEE
ms.topic: include
ms.date: 07/09/2020
---

<a id="restrict-modification-closed-wi" />

::: moniker range="azure-devops"

Depending on your business processes, you may want to prevent users from continuing to modify or update work items that have been closed or completed. You can add rules to work item types to prevent users from re-opening closed work items. 

For the Inherited process, you can add a rule that restricts state transition. For example, the following rule restricts transitioning from closed to the other two States, New and Active. 

:::image type="content" source="/azure/devops/organizations/settings/work/media/rules/rule-no-open-after-close.png" alt-text="Custom rule, Current user is not a member of a group, disallow transitions to New or Active state from Closed":::


> [!NOTE]  
> The `A work item state moved from ...`  condition is only available for Azure DevOps Services and only to those participating in the Private Preview. For details, see [State transition restriction rules (private preview)](/azure/devops/release-notes/2020/sprint-171-update#azure-boards-1). 

For more information on applying rules to a workflow, see [Apply rules to workflow states (Inheritance process)](../organizations/settings/work/apply-rules-to-workflow-states.md).


> [!NOTE]   
> Depending on the rule action you specify, either the **Save** button on the work item form may be disabled, or an error message displays when a restricted user attempts to modify the work item. 

::: moniker-end