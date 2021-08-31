---
title: Automate work item completion with pull requests
titleSuffix: Azure Boards   
description: Learn how to automate work item creation and state transition of work items.  
ms.technology: devops-agile
ms.custom: cross-service
ms.author: kaelli
ms.topic: how-to
monikerRange: '>= tfs-2018'
ms.date: 08/24/2021
---


# Auto-complete work items with pull requests 

[!INCLUDE [temp](../includes/version-azure-boards-plus-2018-2020.md)]

::: moniker range=">= azure-devops-2020"
When you link a work item to a pull request (PR), you have the option to automatically complete those work items when you successfully complete the PR. Or, you can specify the workflow state to transition the work item to upon merging the PR. 
::: moniker-end 


::: moniker range="< azure-devops-2020"
When you link a work item to a pull request (PR), you have the option to automatically complete those work items when you successfully complete the PR.  
::: moniker-end 


To learn more about pull requests, see [Create, view, and manage pull requests](../../repos/git/pull-requests.md).


## Auto-complete work items  

As shown in the following image, check the box to **Complete linked work items after merging**. The system defaults to your selection for future PRs. 


::: moniker range=">= azure-devops-2020"
:::image type="content" source="media/automate-state-transition/complete-pull-request-dialog.png" alt-text="Complete pull request dialog, Complete linked work items after merging":::
::: moniker-end 
::: moniker range="< azure-devops-2020"
![Complete pull request dialog, Autocomplete work items with completion of PR option](media/workflow-states-complete-pr.png)
::: moniker-end 

In the following circumstances the system won't automatically update the work item state to Done, Closed, or the state that belongs to the Closed category for the work item type: 
- The work item, whose work item type is managed with the Inheritance process model, is already in a State that belongs to the Resolved category. In this instance the system won't update the State. For example, if a bug derived from the Agile process is in a Resolved state, the system won't transition it to Closed.   
- The work item is already in a State that belongs to the Completed category. No further transition is required. 
- The WIT associated with the work item contains one or more workflow field rules that prevent the work item being saved to a next state. For example, a rule requires that another field must be defined as part of closing the work item.  
- For on-premises deployments and Azure Boards Hosted process model, you must modify the workflow to specify actions (**ACTION** element) to take place when transitioning the workflow. See [Change the workflow for a work item type, Specify Actions](../../reference/xml/change-workflow-wit.md#Actions).

To learn more about process models, see [Customize your work tracking experience](../../reference/customize-work.md). 

::: moniker range=">= azure-devops-2020"

## Specify the workflow state of linked work items 

To transition a work item to a specific workflow state, you can enter the information in the pull request Description. Prefix the **#ID** with a valid workflow state for the work item you mention. 
::: moniker-end 

::: moniker range="azure-devops-2020"
> [!NOTE]   
> This feature requires Azure DevOps Server 2020.1 update or later version.
::: moniker-end 


::: moniker range=">= azure-devops-2020"

As shown in the following image, two user stories are transitioned, one to **Resolved** and the other to **Review**. Also, two tasks are set to **Done**. 

:::image type="content" source="media/automate-state-transition/pull-request-set-workflow-state-to-transition-to.png" alt-text="Screenshot of pull request, set workflow state to transition #ID work items.":::

::: moniker-end 

## Related articles

- [Create, view, and manage pull requests](../../repos/git/pull-requests.md)  
- [Customize the workflow (Inheritance process)](../../organizations/settings/work/customize-process-workflow.md)  
- [Customize your work tracking experience](../../reference/customize-work.md)
- [How workflow states and state categories are used in Backlogs and Boards](workflow-and-state-categories.md)
 
