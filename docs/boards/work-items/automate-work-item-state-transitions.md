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


# Set work item automation rules for your team

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Automatically update the state of a work item according to the state of its child tasks. For example, if one task is changed to `Doing`, then the user story gets set to `Doing`. And if all tasks are in `Closed` state, then the user story gets `Closed`.

Rules are established at the team backlog level and are applicable to all work items at that specific level. This means that your features backlog can have distinct rules from the user stories backlog.

> [!IMPORTANT]
> Work item automation rules exclusively pertain to your team’s workflow on the backlog and boards. Other teams within your project can customize their own rules to align with their specific work processes.
## Prerequisites

::: moniker range="azure-devops"

* To configure work item automation rules for your team, you must be added to the Team Administrator role or be a member of the **Project Administrators** security group. To get added, see [Add a team administrator](../../organizations/settings/add-team-administrator.md) or [Change project-level permissions](../../organizations/security/change-project-level-permissions.md).

::: moniker-end

::: moniker range="< azure-devops"

* To configure team settings, you must be added to the Team Administrator role or be a member of the **Project Administrators** security group. To get added, see [Add a team administrator](../../organizations/settings/add-team-administrator.md) or [Change project-level permissions](../../organizations/security/change-project-level-permissions.md).

::: moniker-end

## Set rules

Establish these rules independently for each backlog level, including user stories, features, and epics. This way you can automate the closing of user stories, but leave features and epics untouched, for example. Do the following steps to set team rules for work item automation. 

> [!NOTE]
> Work items must belong to the same team; closing a task in a different team or project doesn't trigger the closure of the parent item.

1. Sign in to your project (```https://dev.azure.com/{yourorganization}/{yourproject}```).

2. Select 

3. 

   :::image type="content" source="media/team-settings-work-item-automation.png" alt-text="Screenshot of team settings and selected work item automation rules.":::

There are two sets of rules that can be configured by your team on the team backlog settings panel.



Here is an example of the rules being applied to the User Stories backlog level.


//Image of demo of automation rules for simple workflow, image

Example of rules be applied to several backlog levels in sync.

//Image tam automation rules for several backlog levels, image

These rules operate seamlessly, regardless of where you make updates to the child items, such as on the sprint board, for instance.

//Image sprint board and team automation rules, image


## Limitations

- Work items must belong to the same team; closing a task in a different team or project doesn't trigger the closure of the parent item.
- Instead of states, we utilize State Categories due to the intricate nature of various work item types and their state models. Categories provide consistency across types making it easier to understand and configure.
- The automation rules default to the first state within the assigned category.
- Updates via REST APIs will not activate automation rules. You can automate the updating of parent items by implementing additional patch updates.

## Related articles

