---
title: Automate work item completion with pull requests
titleSuffix: Azure Boards   
description: Learn how to automate work item creation and state transition of work items.  
ms.technology: devops-agile
ms.custom: cross-service
ms.author: kaelli
ms.topic: how-to
monikerRange: '>= tfs-2018'
ms.date: 08/11/2021
---


# Auto complete work items with pull requests 

[!INCLUDE [temp](../includes/version-azure-boards-plus-2018-2020.md)]

When you link a work item to a pull request (PR), you have the option to automatically complete those work items when you successfully complete the PR.  As shown in the following image, all you have to do is check the box to **Complete linked work items after merging**. The system defaults to your selection for future PRs. 

![Complete pull request dialog, Autocomplete work items with completion of PR option](media/workflow-states-complete-pr.png)

In the following circumstances the system won't automatically update the work item state to Done, Closed, or the state that belongs to the Closed category for the WIT: 
- The work item, whose WIT is managed with the Inheritance process model, is already in a State that belongs to the Resolved category. In this instance the system won't update the State. For example, if a bug derived from the Agile process is in a Resolved state, the system won't transition it to Closed.   
- The work item is already in a State that belongs to the Completed category. No further transition is required. 
- The WIT associated with the work item contains one or more workflow field rules that prevent the work item being saved to a next state. For example, a rule requires that another field must be defined as part of closing the work item.  
- For on-premises deployments and Azure Boards Hosted process model, you must modify the workflow to specify actions (**ACTION** element) to take place when transitioning the workflow. See [Change the workflow for a work item type, Specify Actions](../../reference/xml/change-workflow-wit.md#Actions).

To learn more about process models, see [Customize your work tracking experience](../../reference/customize-work.md).  