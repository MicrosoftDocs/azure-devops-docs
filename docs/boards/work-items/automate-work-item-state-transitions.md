---
title: Automate work item state transitions
titleSuffix: Azure Boards   
description: Learn how to set rules to update the state of your work items automatically, according to the state of the child tasks.  
ms.service: azure-devops-boards
ms.custom: cross-service
ms.author: chcomley
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 01/05/2024
---


# Automate work item state transitions

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

When a User Story contains several child tasks, often developers update the child tasks but not the overall state of the User Story. It would be great to automatically update the state of the User Story according to the state of the child tasks. For example, if one Task is changed to Doing then the User Story should be set to Doing. If all Tasks are in Closed, then the User Story should be Closed.”

You can automate this on your own, but it requires web hooks and custom code. However, it really needs to be part of the core product and should be a configurable option for each backlog level. Recognizing that teams operate differently.

Today, we are happy to announce a private preview for this new feature!

How it works
There are two sets of rules that can be configured by your team on the team backlog settings panel.

> [!IMPORTANT]
> These rules exclusively pertain to your team’s workflow on the backlog and boards. Other teams within your project can customize their own rules to align with their specific work processes.

Image of backlog settings for automation rules

You have the flexibility to establish these rules independently for each backlog level, including Stories, Features, and Epics. This allows you to, for instance, automate the closing of User Stories while leaving Features and Epics untouched. It’s important to note that 

Here is an example of the rules being applied to the User Stories backlog level.


Image of demo of automation rules for simple workflow, image

Example of rules be applied to several backlog levels in sync.


Image tam automation rules for several backlog levels, image

These rules operate seamlessly, regardless of where you make updates to the child items, such as on the sprint board, for instance.


Image sprint board and team automation rules, image

We’re excited about this feature and hope you find it as valuable as we do. If you’d like to join the preview, please reach out to us via email, and don’t forget to include your organization’s name (dev.azure.com/{organization name}). Please be aware that we will be limiting the number of participants in the preview. Our goal is to gather customer feedback and aim to make this feature widely available in just a few weeks.


Limitations
Similar to styles, the configuration of Work Item Automation rules is exclusive to Team admins.
Work items must belong to the same team; closing a task in a different team or project will not trigger the closure of the parent item.
The rules are established at the team backlog level and are applicable to all work items at that specific level. This means that Features backlog can have distinct rules from the User Stories backlog.
Instead of states, we utilize State Categories due to the intricate nature of various work item types and their state models. Categories provide consistency across types making it easier to understand and configure.
The automation rules default to the first state within the assigned category.
Updates via REST APIs will not activate automation rules. You can automate the updating of parent items by implementing additional patch updates.





