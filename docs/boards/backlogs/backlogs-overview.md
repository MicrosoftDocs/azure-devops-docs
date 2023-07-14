---
title: Use backlogs to plan your projects in Azure Boards
titleSuffix: Azure Boards 
description: Learn how to plan, track, and organize user stories, features, and bugs using backlogs and multiple teams in Azure Boards.
ms.custom: "boards-backlogs, seodec18"
ms.service: azure-devops-boards
ms.assetid: 28C02AE8-CF8D-4B6E-8301-F46A5622E6C4
ms.author: chcomley
author: chcomley
ms.topic: overview
monikerRange: '<= azure-devops'
ms.date: 08/04/2022
---


# Use backlogs for effective project management in Azure Boards

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]


With **Backlogs**, you can quickly plan your project by adding user stories or requirements to your product backlog. Once you have your plan in place, you can start driving code development efforts. 

If you're a project administrator just getting started, review [Configure and customize Azure Boards](../configure-customize.md). Review the settings to learn more about defining area and iteration paths and customizing your work item types. Backlogs are automatically created when you create a project or add a team. Each team has access to their own product, portfolio, and sprint backlogs as described in [About teams and Agile tools](../../organizations/settings/about-teams-and-settings.md#each-team-gets-their-own-set-of-tools). 

## Use backlogs

You plan and track your project using the suite of Agile tools you access from the web portal. Agile tools support the core Agile methods&mdash;Scrum and Kanban&mdash;used by software development teams today. Scrum tools support defining and managing work within sprints, setting capacity, and tracking tasks. Kanban tools allow you to manage a continuous flow of work via an interactive sign board.  

If you're new to Agile, see [What is Agile?](/devops/plan/what-is-agile) for an overview.

Use backlogs to do the following tasks: 

::: moniker range=">= azure-devops-2020"  

- Quickly define the work your team is tasked with by [defining user stories, product backlog items, or requirements](create-your-backlog.md)
- [Reorder your backlog](create-your-backlog.md#move-items-priority-order) to make sure you're working on the highest priority items first
- [Add details and estimates](create-your-backlog.md#estimates) to your backlog items 
- Quickly assign backlog items to team members and to sprints. You can use either [bulk update](bulk-modify-work-items.md) or [drag to a sprint](../sprints/assign-work-sprint.md)
- Group or organize backlog items by [mapping them within a hierarchy](organize-backlog.md)  
- Review the hierarchy or [portfolio of work assigned to multiple teams](#multi-team)
- [Forecast work](../sprints/forecast.md) to estimate what can be delivered within a sprint
- [Display rollup progress, counts, or totals](display-rollup.md) to show completion of work or amount of work still to do.

::: moniker-end 

::: moniker range="< azure-devops-2020"  

- Quickly define the work your team is tasked with by [defining user stories, product backlog items, or requirements](create-your-backlog.md)
- [Reorder your backlog](create-your-backlog.md#move-items-priority-order) to make sure you're working on the highest priority items first
- [Add details and estimates](create-your-backlog.md#estimates) to your backlog items 
- Quickly assign backlog items to team members and to sprints\. You can use either [bulk update](bulk-modify-work-items.md) or [drag to a sprint](../sprints/assign-work-sprint.md)
- Group or organize backlog items by [mapping them within a hierarchy](organize-backlog.md)  
- Review the hierarchy or [portfolio of work assigned to multiple teams](#multi-team)
- [Forecast work](../sprints/forecast.md) to estimate what can be delivered within a sprint.

::: moniker-end 

[!INCLUDE [temp](../includes/setup-backlogs-boards.md)]

## Product and portfolio backlogs 

Backlogs present work items as lists. A product backlog represents your project plan, the roadmap for what your team plans to deliver. Your backlog also provides a repository of all the information you need to track and share with your team. Portfolio backlogs allow you to group and organize your backlog into a hierarchy. 

::: moniker range=">= azure-devops-2019"

![Screenshot of Boards Backlogs.](../work-items/media/about-agile/view-backlogs.png)  

::: moniker-end

::: moniker range="tfs-2018"

![Screenshot of Web portal, choose Boards and then Backlogs, TFS 2018.](../work-items/media/view-add/view-stories-backlogs-standard.png)

::: moniker-end


## Backlog configuration 

[!INCLUDE [temp](../includes/note-add-backlog-board.md)]

Each backlog is associated with a team. Team configuration settings determine the work items that appear on the team backlog. Specifically, the team administrator defines the following for their team: 

- Selects the Area Paths that are active for the team, only work items assigned to these area paths appear on the team's backlog  
- Sets the default Area Path and Iteration Path used when defining work items from the team backlog 
- Selects the Iteration Paths that are active for the team
- Determines which backlog levels are active for the team 
- Defines how bugs get treated, as requirements or as tasks. 

For more information, see the following articles: 
- [Define iteration (sprint) paths and configure team iterations](../../organizations/settings/set-iteration-paths-sprints.md)
- [Define area paths and assign to a team](../../organizations/settings/set-area-paths.md)
- [Select backlog levels](../../organizations/settings/select-backlog-navigation-levels.md)
- [Show bugs on backlogs or boards](../../organizations/settings/show-bugs-on-backlog.md)

::: moniker range=">= azure-devops-2019"
[!INCLUDE [temp](../includes/tip-configure-backlog-view.md)]
::: moniker-end


### Common backlog configurations for multiple teams 

**Question**: *Can you define a backlog configuration that multiple teams can subscribe to?*
**Answer**: *No. Each team controls their own team settings and backlog configurations.*

::: moniker range="azure-devops"
Because each user can configure their own **Column Options** and **View Options**, there's no way to configure a common backlog view for all teams. Also, there's no default column options that can be set for each team.  
::: moniker-end

::: moniker range="< azure-devops"
Because each user can configure their own **Column Options** and **View Options**, there's no way to configure a common backlog view for all teams. You can, however, define the default column options for all team members by editing the process configuration. To learn how, see [Process configuration XML element reference, Set default columns](../../reference/xml/process-configuration-xml-element.md#columns). 
::: moniker-end
 

## Define work items and create your backlog  

You build your project plan by creating a backlog of work items. These items represent the features, requirements, user stories, or other work to complete. Portfolio backlogs provide support for organizing work in a hierarchical fashion. They help track major product initiatives or scenarios that rely on many stories or requirements.  Different types of work items help you track different types of work, such as user stories, tasks, bugs, issues, and more.  


[![Define stories conceptual image of tasks.](media/overview/gs-planning-define-stories.png)](create-your-backlog.md)[![Organize backlog conceptual image of tasks.](media/overview/gs-planning-organize-backlog.png)](organize-backlog.md)[![Manage bugs conceptual image of tasks.](media/overview/gs-planning-manage-bugs.png)](manage-bugs.md)[![Manage issues conceptual image of tasks.](media/overview/gs-planning-manage-issues.png)](manage-issues-impediments.md)


<a id="stack-rank" />

## Backlog priority or stack rank order

<a id="change-position"> </a> 

The sequence of items on each backlog is determined according to where you've [added the items or moved the items on the page](create-your-backlog.md#move-items-priority-order). As you drag items within the backlog list, a background process updates the [**Stack Rank** (Agile and CMMI processes)](../queries/planning-ranking-priorities.md) or [**Backlog Priority** (Scrum process)](../queries/planning-ranking-priorities.md) fields. These fields are used by the system to track the relative ranking of items on the product, feature, epic, or other portfolio backlog. By default, these fields don't appear on the work item form. 

![Screenshot showing how to reorder work items.](media/create-backlog/cyb-order-backlog.png)  

Refrain from using the bulk modify function to change the value of the backlog priority field. While you can assign a value to these fields, you'll be assigning the same value to all items you've selected for bulk edit.  

The preferred method for bulk edit is to use multi-select to move items to the top, bottom, or specific position within the page. If you must edit one of the backlog order fields in bulk to get a large number of work items in the priority order you want, use [Excel](../backlogs/office/bulk-add-modify-work-items-excel.md). You can export a query containing the backlog items, update either the Backlog Priority or Stack Rank fields, and then publish your changes. 

## In Progress items and work listed on the backlog 

Backlogs are designed to display work that corresponds to a Proposed, In Progress, or Resolved category state. Once you've completed work and its state enters a *Done*, or *Closed* state, then it falls off the backlog view. You can always [create a query](../queries/using-queries.md) to view completed work, or view the [**Recently completed** pivot from the **Work Items** page](../work-items/view-add-work-items.md). 

In general, you'll want to display all items that are in the **In Progress** category state, which corresponds to the *Active* and *Committed* states. To focus on work that is proposed but not in progress, you can toggle the backlog view to turn off [**In Progress**](create-your-backlog.md#convert-ideas). This toggle is useful when [forecasting your product backlog](../sprints/forecast.md). 

If your backlog is missing items, you might check if the **In Progress** view has been turned off. For more information, see [Workflow states and state categories](../work-items/workflow-and-state-categories.md). 


## Organize your backlog by mapping and reparenting backlog items 

When you have many initiatives your teams are working on, you may want to group the work according to these initiatives. By defining features and epics, you can group your work into a three-tiered hierarchy consisting of epics, features, and backlog items. 

For example, here the Customer Service team has organized several backlog items under two features and one epic. 

::: moniker range=">= azure-devops-2020"  

> [!div class="mx-imgBorder"]  
> ![Screenshot of Backlog that shows parents and multi-team ownership.](media/overview/customer-service-backlog-parents-on.png)  

::: moniker-end 

::: moniker range="<= azure-devops-2019"

> [!div class="mx-imgBorder"]  
> ![Screenshot of Backlog that shows parents and multi-team ownership, Azure DevOps Server 2019 and earlier versions.](media/overview/customer-service-backlog-parents-on.png)  

::: moniker-end 



[!INCLUDE [temp](../includes/velocity-section.md)]

[!INCLUDE [temp](../includes/display-rollup-section.md)]

<a id="multi-team">  </a>

## Work with multi-team ownership of backlog items  

When you have several teams, your hierarchical views may show items that belong to other teams. 

### View backlog items and parent items owned by other teams

Your team's product backlog lists only those items whose area path matches items assigned to your team. However, if you show parents, 
you'll see the parent epic of the features and backlog items, even if the epic or feature is owned by another team. 

::: moniker range=">= azure-devops-2020"  

Items that are owned by other teams appear with an information icon :::image type="icon" source="../../media/icons/info.png" border="false":::.  

> [!div class="mx-imgBorder"]  
> ![Screenshot of backlog items and parent items owned by other teams.](media/multi-ownership/customer-service-backlog-parents-on-s155.png)   

> [!TIP]    
> Add the **Node Name** field as a column to identify the area path/team associated with the work items. 

::: moniker-end 

::: moniker range="azure-devops-2019"

Items that are owned by other teams appear with an information icon :::image type="icon" source="../../media/icons/info.png" border="false":::.  

> [!div class="mx-imgBorder"]  
> ![Screenshot of backlog items and parent items owned by other teams, Azure DevOps Server 2019 version.](media/multi-ownership/customer-service-backlog-parents-on.png)   

> [!TIP]    
> Add the **Node Name** field as a column to identify the area path/team associated with the work items. 

::: moniker-end 

::: moniker range="tfs-2018"

Items that are owned by other teams appear with an information icon :::image type="icon" source="../../media/icons/info.png" border="false":::. 

> [!div class="mx-imgBorder"]  
> ![Screenshot of backlog that shows parents and multi-team ownership, TFS 2018.](media/multi-ownership/customer-service-backlog-parents-on-prev-nav.png)   

> [!TIP]    
> Add the **Node Name** field as a column to identify the area path/team associated with the work items. 

::: moniker-end   


For more information, see [Define area paths and assign to a team](../../organizations/settings/set-area-paths.md). 

### View epics and child items owned by other teams

Here's another example that shows the **Epics** backlog for the **Management** team. 
Drilling down, you can see all the backlog items and features, even though they 
belong to one of three different teams: Customer Service, Phone, and Web.  

::: moniker range=">= azure-devops-2020"  

> [!div class="mx-imgBorder"]  
> ![Screenshot of view Epics and child items owned by other teams.](media/multi-ownership/management-team-backlog-epics-s155.png)   

::: moniker-end 

::: moniker range="azure-devops-2019"

> [!div class="mx-imgBorder"]  
> ![Screenshot of view iew Epics and child items owned by other teams, Azure DevOps Server 2019 version.](media/multi-ownership/management-team-backlog-epics.png)   

::: moniker-end 

::: moniker range="tfs-2018" 

Here's another example that shows the **Epics** backlog for the **Management** team. 
Drilling down, you can see all the backlog items and features, even though they 
belong to one of three different teams: Customer Service, Phone, and Web.  

> [!div class="mx-imgBorder"]  
> ![Screenshot of view Epics backlog for the Management team, TFS 2018.](media/multi-ownership/management-team-backlog-epics-pre-nav.png)  

::: moniker-end 

From these views, you can re-parent items, both those that you own and those owned by other teams. 
However, you can't reorder items that another team owns.  

This organization enables management teams to focus on high-level features and epics, and development teams 
to focus on just the backlog items they're responsible to deliver.

To make this work for you, you'll need to [add teams and set their area paths](../../organizations/settings/add-teams.md). 
For example, you can create a team structure similar to this one with two management and three development teams.

![Conceptual image of backlogs and multi-team ownership.](media/ALM_OB_MultiTeam_C.png)

To learn more about hierarchical team and backlog structures, see [Portfolio management](../plans/portfolio-management.md).

### Reordering and reparenting work items 

All backlogs and boards support dragging to reorder and reparent work items. Updates made to one team's backlogs and boards are reflected in other team backlogs and boards that share the same area path. You may need to refresh the page to view the changes. 

You can only use dragging to reorder or reparent work items assigned to area paths selected for your team. When the **Parents** view option is enabled, work items may appear on your backlog that your team doesn't own. Anything that appears with the :::image type="icon" source="../../media/icons/info.png" border="false"::: information icon can't be reordered nor reparented as it's owned by another team.  
 
:::image type="content" source="../plans/media/config-teams/information-message-owned-by-other-team.png" alt-text="Screenshot of information message on team ownership.":::

<a id="leaf-node" />

## Display leaf node work items  

For TFS 2018 and earlier versions, the Kanban board only shows the leaf node with nested items of a same-category hierarchy. For all versions, sprint backlogs and Taskboards only show the last node in a same-category hierarchy, called the leaf node. 

[!INCLUDE [temp](../includes/display-leaf-nodes.md)]  

## Permissions and access

As a member added to the Contributors group of a project, you can use most features provided under **Boards** or **Work**. Users with Basic access have full access to all features. Users with Stakeholder access are limited to certain features. For more information, see [Stakeholder access quick reference](../../organizations/security/stakeholder-access.md). 

To learn more about permissions and access, see [Permissions and access for work tracking](../../organizations/security/permissions-access-work-tracking.md) and [Stakeholder access quick reference](../../organizations/security/stakeholder-access.md).   

To add users to a project, see [Add users to a project or team](../../organizations/security/add-users-team-project.md).

[!INCLUDE [temp](../includes/add-portfolio-backlogs.md)]

## Next steps  

If you're just getting started, see [Start using Azure Boards](../get-started/index.md). 

## Related articles 

- [Web portal navigation](../../project/navigation/index.md) 
- [About Kanban and Agile project management](../boards/kanban-overview.md)  
- [About work items](../work-items/about-work-items.md)  
- [What is Agile?](/devops/plan/what-is-agile)   
- [What is Agile development?](/devops/plan/what-is-agile-development)  
- [Agile culture](/devops/plan/adopting-agile) 


 

