---
ms.prod: devops
ms.technology: devops-agile
ms.author: kaelli
author: KathrynEE
ms.topic: include
ms.date: 04/16/2021
---



::: moniker range=">= azure-devops-2020"

When you create a pull request, you can set the *state* value of the linked work items in the description. Follow the syntax: ``` {state value}: #ID ```.
When you merge the pull request, the system reads the description and updates the work item state. In the following example, we set work items #300 and #301 to Resolved, and #323 and #324 to Closed.

:::image type="content" source="/azure/devops/notifications/media/pr-set-state-of-work-items.png" alt-text="Screenshot of setting work item state within a PR.":::
 
::: moniker-end

::: moniker range="azure-devops-2020"
> [!NOTE]   
> This feature requires installation of Azure DevOps Server 2020.1 update. To learn more, see [Azure DevOps Server 2020 Update 1 RC1 Release Notes, Boards](/azure/devops/server/release-notes/azuredevops2020u1#customize-work-item-state-when-pull-request-is-merged).  
::: moniker-end