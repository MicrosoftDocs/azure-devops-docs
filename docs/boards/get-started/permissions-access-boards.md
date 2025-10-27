---
title: Default permissions and access for Azure Boards
titleSuffix: Azure Boards 
description: Learn about default permissions and access levels in Azure Boards.  
ms.custom: boards-get-started, engagement-fy23
ms.service: azure-devops-boards
ms.assetid: 
ms.author: chcomley
author: chcomley
ms.topic: overview
monikerRange: '<= azure-devops'
ms.date: 09/26/2025
---

# Default permissions and access levels for Azure Boards 

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

As a project member, your ability to use Azure Boards features depends on the access level and security group assigned to you. Users with the **Basic** access level or higher get full access to Boards features. Users assigned the **Stakeholder** access level get limited, targeted access: they can view and modify many work items but can't use some Board features. Built-in security groups—Readers**, **Contributors**, and **Project Administrators—and team administrator roles control permissions for specific features.

In the tables that follow, a ✔️ indicates that an access level or security group has the corresponding feature permission by default.

> [!NOTE]   
> Team administrators can configure settings for their team’s tools. Organization owners and members of the **Project Administrators** group can configure settings for all teams.

For a quick comparison of Stakeholder versus Basic access, see the [Feature matrix](https://azure.microsoft.com/services/devops/compare-features/). To assign or change access levels, see [Add users and assign licenses](../../organizations/accounts/add-organization-users.md). To grant specific users particular permissions, see [Request changes to permissions](../../organizations/security/request-changes-permissions.md).

## Work item feature access

Use work items to track work, bugs, tasks, and larger pieces of work. For background, see [Understand how work items are used to track issues, tasks, and epics](../work-items/about-work-items.md).

[!INCLUDE [temp](../../organizations/security/includes/boards-work-items.md)]

## Boards feature access

[**Boards**](../boards/kanban-quickstart.md) show work items as cards and let users update status quickly with drag-and-drop.

[!INCLUDE [temp](../../organizations/security/includes/boards-boards.md)]

## Backlogs feature access

[**Backlogs**](../backlogs/create-your-backlog.md) display work items as lists. Use product and portfolio backlogs to plan and organize work.

[!INCLUDE [temp](../../organizations/security/includes/boards-backlogs.md)]

## Sprints feature access

[**Sprints**](../sprints/assign-work-sprint.md) provide filtered views of work items assigned to a team’s iteration paths or sprint.

[!INCLUDE [temp](../../organizations/security/includes/boards-sprints.md)]

## Queries and semantic search

Use [**Queries**](../queries/view-run-query.md) to filter and list work items by criteria you define in the query editor.

> [!TIP]    
> By default, Contributors can create personal queries but can't create shared queries in the team folder. We recommend that Project Administrators create and manage shared query folders for teams and grant the team group or team administrators the folder permissions they need. You need **Delete** permission to rename or move a shared query or folder, and **Contribute** permission to save queries into a folder. For more information, see [Set permissions on queries and query folders](../queries/set-query-permissions.md).

[!INCLUDE [temp](../../organizations/security/includes/boards-queries.md)]

<a id="stakeholder-access"></a>

## Stakeholder access

Stakeholder access supports business owners, product managers, and others who need to add context, review progress, and contribute to the backlog without using every Boards feature. Assign Stakeholder access to users who don’t need the full developer experience.

- For public projects, Stakeholder access provides full access to work-tracking features. For more information, see [Stakeholder access quick reference](../../organizations/security/stakeholder-access.md).
- For private projects, Stakeholders can view and modify many work items, and they can add child tasks and comments, but they can't perform certain actions such as reordering backlog items via drag-and-drop or updating some card fields.

::: moniker range="azure-devops"
> [!NOTE]   
> Stakeholder behavior differs between public and private projects. Confirm the project visibility and test expected behavior if you rely on Stakeholder access.
::: moniker-end

## Related content 

- [Get started as a stakeholder](../../organizations/security/get-started-stakeholder.md)  
- [Add another team](../../organizations/settings/add-teams.md)  
- [Add a team administrator](../../organizations/settings/add-team-administrator.md)  
- [Manage teams and configure team tools](../../organizations/settings/manage-teams.md)  
- [Manage access to specific features and functions](../../organizations/security/restrict-access.md)  
- [Set permissions and access for work tracking](../../organizations/security/set-permissions-access-work-tracking.md)


