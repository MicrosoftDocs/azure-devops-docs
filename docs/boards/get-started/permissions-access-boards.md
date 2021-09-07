---
title: Default permissions and access for Azure Boards
titleSuffix: Azure Boards & TFS 
description: Default permissions and access levels to support work-tracking tasks in Azure DevOps Services and Team Foundation Server
ms.custom: boards-get-started
ms.technology: devops-agile
ms.assetid: 
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
monikerRange: '>= tfs-2013'
ms.date: 07/09/2020
---

# Quick guide to default permissions and access for Azure Boards 

[!INCLUDE [temp](../includes/version-all.md)]

As a member of an Azure Boards project, you can use the majority of features to track work. Limitations to select features are based on the *access level* and *security group* to which a user is assigned. The **Basic** access level and higher supports full access to all Azure Boards features. **Stakeholder** access level provides partial support to select features, allowing users to view and modify work items, but not use all features. The built-in security groups&mdash;**Readers**, **Contributors**, and **Project Administrators**&mdash; and team administrator role grant permissions to specific features. 

In the tables provided in this article, a ✔️ indicates that the corresponding access level or security group has access to a feature by default. 

> [!NOTE]   
> Team administrators can configure settings for their team's tools. Organization owners and members of the Project Administrators group can configure settings for all teams. 

For a comparison chart of Stakeholder versus Basic access, see the [Feature matrix](https://azure.microsoft.com/services/devops/compare-features/). To assign or change an access level, see [Add users and assign licenses](../../organizations/accounts/add-organization-users.md). If you need to [grant specific users select permissions](../../organizations/security/change-individual-permissions.md), you can do so.

## General work item feature access

You can use work items to track anything you need to track. To learn more, see [Understand how work items are used to track issues, tasks, and epics](../work-items/about-work-items.md).

[!INCLUDE [temp](../../organizations/security/includes/boards-work-items.md)]

## Boards feature access

[**Boards**](../boards/kanban-quickstart.md) present work items as cards and support quick status updates through drag-and-drop. 

[!INCLUDE [temp](../../organizations/security/includes/boards-boards.md)]

## Backlogs features access

[**Backlogs**](../backlogs/create-your-backlog.md) display work items as lists. A product backlog represents your project plan and a repository of all the information you need to track and share with your team. Portfolio backlogs allow you to group and organize your backlog into a hierarchy.  

[!INCLUDE [temp](../../organizations/security/includes/boards-backlogs.md)]


## Sprints feature access

[**Sprints**](../sprints/assign-work-sprint.md) provide a filtered view of work items that a team has assigned to specific iteration paths or sprints. 

[!INCLUDE [temp](../../organizations/security/includes/boards-sprints.md)]

## Queries and semantic search

[**Queries**](../queries/view-run-query.md) are filtered lists of work items based on criteria that you define by using a query editor.  

> [!TIP]    
> By default, Contributors can't create and save shared queries. We recommend that Project Administrators create a query folder for each team and give the team administrators or the team group query permissions to manage their folder. You need **Delete** permissions to rename or move a shared query or folder, and **Contribute** permissions for the folder where you move the query to. To learn more, see [Set permissions on queries and query folders](../queries/set-query-permissions.md). 

[!INCLUDE [temp](../../organizations/security/includes/boards-queries.md)]


<a id="stakeholder-access"></a>

## More on Stakeholder access

Stakeholder access supports business owners, analysts, and other team members who don't manage the work of a project, but need to be able to view and add ideas to the backlog, add context and information to work items, and review status and progress. All members of an organization who don't use Visual Studio but want to contribute to work item tracking and monitor progress can be assigned as a stakeholder. Note, even if you change the permission level for a user assigned **Stakeholder** access, the user won't be able to access the feature. 

::: moniker range="azure-devops"
> [!NOTE]   
> For public projects, Stakeholder access gives users full access to all work-tracking features. To learn more, see [Stakeholder access quick reference](../../organizations/security/stakeholder-access.md).

::: moniker-end

## Related articles 

- [Get started as a stakeholder](../../organizations/security/get-started-stakeholder.md)  
- [Add another team](../../organizations/settings/add-teams.md)  
- [Add a team administrator](../../organizations/settings/add-team-administrator.md)
- [Manage teams and configure team tools](../../organizations/settings/manage-teams.md)  [Grant or restrict access to select features and functions](../../organizations/security/restrict-access.md)
- [Set permissions and access for work tracking](../../organizations/security/set-permissions-access-work-tracking.md) 


