---
title: Stakeholder access quick reference
titleSuffix: Azure DevOps 
description: Stakeholder access to common user tasks for Azure DevOps
ms.subservice: azure-devops-security
ai-usage: ai-assisted
toc: show
ms.author: chcomley
author: chcomley
ms.topic: overview
monikerRange: "<=azure-devops"
ms.date: 04/13/2026
--- 

# Stakeholder access quick reference

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

**Stakeholder** access gives an unlimited number of users free, limited access to your organization. Stakeholders can:

- **Azure Boards** — Create and modify work items, create and save queries, assign existing tags
- **Azure Pipelines** — View and approve release pipelines
- **Administration** — Perform administrative tasks when granted permissions or added to an administrative group
- **Collaboration** — Use collaboration and notification features

Stakeholders *don't* have access to code repositories (**Azure Repos**). To contribute to the code base, assign users at least **Basic** access.

To get started, see [Get started as a Stakeholder](get-started-stakeholder.md). For administrative tasks, see [Manage your project](../../user-guide/project-admin-tutorial.md).
 
## Assign Stakeholder access users to a security group

Assign **Stakeholder** access users to a security group based on their role:

| Security group | When to use |
|---|---|
| **Contributors** | Managers or users who check project status and provide direction, feedback, feature ideas, or business alignment - but don't contribute to the code base. |
| **Project Administrators** | Users who manage project resources. |
| **Project Collection Administrators** | Users who manage organization or collection resources. | 

<a id="stakeholder-access">  </a>
<a id="feature-access">  </a>

::: moniker range="azure-devops"

<a id="public-versus-private-feature-access"></a>

## Public versus private feature access

Users with **Stakeholder** access get different feature access depending on whether the project is private or public. In public projects, Stakeholders get full access to work tracking features. In private projects, access is limited. For more information, see [What is a public project?](../projects/about-projects.md)  

> [!div class="mx-tdBreakAll"]  
> | Service, application, or setting | Private project | Public project|
> |------------|-----------------|---------------|
> |**Azure Boards** | Partial access | Full access | 
> |**Azure Repos** | No access | Full access | 
> |**Azure Pipelines**  | Full access | Full access | 
> |**Azure Test Plans**  | No access | No access | 
> |**Azure Artifacts**  | Full access | Full access | 
> |**Notifications**  | Full access | Full access | 
> |**Semantic search** | Full access | Full access | 
> |**Project settings**  | Partial access | Partial access | 
> |**Organization settings**  | Partial access | Partial access | 
> |**Dashboards** | Partial access | Full access | 
> |**Wiki (Project wiki)** | Partial access | Full access | 
> |**Wiki (Code wiki)**  | No access | Full access | 

::: moniker-end
 
## Azure Boards 

Stakeholders can view and edit all work items for which they have Area Path permissions (set to **Allow** by default for all user security groups). For more information, see [Set permissions and access for work tracking](set-permissions-access-work-tracking.md#set-permissions-area-path). For an overview of work tracking features, see [What is Azure Boards?](../../boards/get-started/what-is-azure-boards.md)

::: moniker range="azure-devops"
> [!NOTE]   
> In public projects, stakeholders can view Delivery Plans but can't add or edit them.
::: moniker-end

:::row:::
   :::column span="1":::
      **Page** 
   :::column-end:::
   :::column span="2":::
      **Features you can use**
   :::column-end:::
   :::column span="2":::
      **Features you can't use**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **Work Items** 
   :::column-end:::
   :::column span="2":::
      - View, add, and edit work items   
      - Assign existing tags to work items 
      - Use the [Work Items hub](../../boards/work-items/view-add-work-items.md)
      - Change work item type<sup>1</sup>   
      - Email work items
      - Apply a work item template
   :::column-end:::
   :::column span="2":::
      - Add new work item tags
      - Delete work items
      - Move work items to another project
   :::column-end:::
:::row-end:::
::: moniker range=">= azure-devops-2022" 
:::row:::
   :::column span="1":::
      **Boards** 
   :::column-end:::
   :::column span="2":::
      - View boards, open and edit work items
      - Add work items to a board
      - Update status through drag-and-drop
      - Add child items to a checklist
      - Assign to a sprint (from card field)
      - Configure team boards<sup>2</sup> 
   :::column-end:::
   :::column span="2":::
      - Change the priority of an item within a board
      - Change fields on cards on a board, except for State field
   :::column-end:::
:::row-end:::
::: moniker-end

:::row:::
   :::column span="1":::
      **Backlogs** 
   :::column-end:::
   :::column span="2":::
      - View backlogs and open work items
      - Add work items (to the bottom of a backlog) 
      - Use bulk edit features
   :::column-end:::
   :::column span="2":::
      - Change the priority of an item within a backlog
      - Drag-and-drop work items to the Mapping pane (parent a work item) 
      - Drag-and-drop work items to the Planning pane (assign to a sprint)
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **Sprints** 
   :::column-end:::
   :::column span="2":::
      - View sprint backlogs, taskboards, and open work items
      - View work details  
      - Add work items to the bottom of a sprint backlog  
      - Use bulk edit features
      - Configure team sprint taskboards<sup>2</sup> 
   :::column-end:::
   :::column span="2":::
      - Change the priority of an item within a backlog
      - Change fields on cards on a Taskboard, except for State field
      - View or set team capacity 
      - Add tasks to a sprint backlog 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **Queries** 
   :::column-end:::
   :::column span="2":::
      - View and run My queries or Shared queries
      - Create and save My queries
   :::column-end:::
   :::column span="2":::
      - Create or edit shared queries
      - View query charts 
      - Create query charts
   :::column-end:::
:::row-end:::
::: moniker range=">= azure-devops-2022" 
:::row:::
   :::column span="1":::
      **Delivery Plans** 
   :::column-end:::
   :::column span="2":::
      - View delivery plans  
   :::column-end:::
   :::column span="2":::
      - Add or edit a delivery plan
   :::column-end:::
:::row-end:::
::: moniker-end

**Notes:**
1. Controllable through project-level permission.
2. Requires team administrator role or membership in the Project Administrators group.

## Azure Test Plans 

Stakeholders have limited access to Azure Test Plans. For an overview, see [Testing overview](../../test/index.yml).

Stakeholders can:
- Provide feedback by using the Test & Feedback extension
- Apply a work item template to a test case  

## Dashboards, notifications, READMEs, and wikis 

The following table shows stakeholder access to [Dashboards](../../report/dashboards/overview.md), [Notifications](../../organizations/notifications/about-notifications.md), [Project pages](../../project/navigation/work-across-projects.md), [READMEs](../../project/wiki/about-readme-wiki.md#add-project-readme-files), and [Wikis](../../project/wiki/provisioned-vs-published-wiki.md).

::: moniker range="azure-devops"
> [!NOTE]   
> In public projects, stakeholders have full access to all dashboard and wiki features. 
::: moniker-end

:::row:::
   :::column span="1":::
      **Feature area** 
   :::column-end:::
   :::column span="2":::
      **Features you can use**
   :::column-end:::
   :::column span="2":::
      **Features you can't use**
   :::column-end:::
:::row-end:::
::: moniker range="<=azure-devops"
:::row:::
   :::column span="1":::
      Dashboards
   :::column-end:::
   :::column span="2":::
      - View dashboards   
   :::column-end:::
   :::column span="2":::
      - Add and configure team dashboards  	 
      - Add and configure project dashboards 
   :::column-end:::
:::row-end:::
::: moniker-end

:::row:::
   :::column span="1":::
      Notifications
   :::column-end:::
   :::column span="2":::
      - Set personal notifications or alerts
      - Set team notifications or alerts<sup>1</sup>
      - Set project-level notifications or alerts<sup>1</sup>
   :::column-end:::
   :::column span="2":::
         
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      Project pages
   :::column-end:::
   :::column span="2":::
      - View the project page
      - Navigate using the Project pages
      - Set personal favorites
   :::column-end:::
   :::column span="2":::
      - View repository READMEs 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      Search
   :::column-end:::
   :::column span="2":::
      - Perform work tracking and project wiki search
   :::column-end:::
   :::column span="2":::
      - Perform code search
      - Perform code wiki search
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      READMEs
   :::column-end:::
   :::column span="2":::
      - Can view project README 
   :::column-end:::
   :::column span="2":::
      - View repository READMEs 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      Wikis
   :::column-end:::
   :::column span="2":::
      - View project wikis
   :::column-end:::
   :::column span="2":::
      - View code wikis
      - Edit project or code wikis
   :::column-end:::
:::row-end:::
 
**Notes:**
1. Requires team administrator role or membership in the Project Administrators group.

## Related content

- [Get started as a Stakeholder](get-started-stakeholder.md)
- [About access levels](access-levels.md)
- [Change access levels](change-access-levels.md)
- [About permissions and security groups](about-permissions.md)
