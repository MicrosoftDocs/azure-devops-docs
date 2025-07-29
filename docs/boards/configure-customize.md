---
title: Configure and Customize Azure Boards
titleSuffix: Azure Boards
description: Explore options for customizing and configuring Azure Boards and the effect on tools available.
ms.service: azure-devops-boards
ms.topic: concept-article
ms.assetid: 
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 07/28/2025
#customer intent: As an Azure DevOps developer, I want to explore options for customizing and configuring Azure Boards, so I can best support my specific portfolio, dependencies, and monitoring needs.
---

# Configure and customize Azure Boards

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

Azure Boards can be configured and customized in various ways to support different scenarios and requirements. This article describes recommended tasks for customizing Azure Boards to best manage your specific portfolio, dependencies, and monitoring needs. The presented guidance is especially suited for administrators responsible for managing multi-team projects. If you're new to project administration, you might read [Get started as an administrator](../user-guide/project-admin-tutorial.md) before you start on specific tasks.

If you know which tasks you want to complete, you can get started quickly with the following articles:

- [Customize cards](boards/customize-cards.md)
- [Manage columns](backlogs/set-column-options.md)
- [Expedite work with swimlanes](boards/expedite-work.md)
- [Configure your backlog](backlogs/configure-your-backlog-view.md)

> [!NOTE]   
> Most of the guidance presented in this article applies to both the cloud and on-premises versions. A few features like Rollup, Analytics, and some portfolio planning tools, are currently available for the cloud only. 

## Considerations for customization

To make the most of Azure Boards, you need to know how your teams use their tools and functions (for example, Scrum, Kanban, and Scrumban). Understand your team's requirements and any tool dependencies. Keep these considerations in mind as you make configuration adjustments and customizations.

The following table summarizes the primary considerations for structuring your Azure Boards project: 

:::row:::
   :::column span="1":::
   **Project level**
      
   - How many teams to define 
   - How to structure area paths to support portfolio management views
   - Identify specific field customizations 
   - Identify custom work item types (WITs)
   - Explore portfolio backlog customizations
   - Explore workflow customizations

   :::column-end:::
   :::column span="1":::
   **Team level**

   - How to use the product backlog to plan and prioritize your work 
   - Decide whether to track bugs as requirements or tasks, or not use bugs at all
   - Decide whether to use tasks to track time and capacity
   - Explore how to use portfolio backlog levels 
   - Decide how to inform upper management of progress, status, and risks

   :::column-end:::
:::row-end:::

Customize your work tracking building blocks and tools to best support your business needs and communicate the usage guidelines to your team.

## Work item types and portfolio backlogs

When you create a project in Azure Boards, you first select a process. [Each process type](work-items/guidance/choose-process.md) supports a hierarchy of WITs, including product and portfolio backlogs. The four process types are Agile, Basic, Scrum, and Capability Maturity Model Integration (CMMI). Default WITs for each process are listed in corresponding tabs, with backlogs under **Requirements** and tasks under **Task**.

[!INCLUDE [work-item-types](includes/work-item-types.md)]

You can add custom WITs at each level, and even add custom portfolio backlogs. The following image shows an example project that adds Objectives and Key Results as custom WITs and corresponding portfolio backlogs to the Scrum process:

:::image type="content" source="media/config-custom/portfolio-backlogs-objectives-results.png" alt-text="Screenshot of a project that adds Objectives and Key Results as portfolio backlogs.":::

## Work tracking options and recommended usage  

Teams can choose which WITs they use to track their work. This article describes four options:

| Option | Recommendation | Tool support |
|--------|----------------|-----------------|
| Track [tasks only](#tasks-only) | **Not recommended** | _Not applicable_ |
| Track [requirements with child-dependent tasks](#requirements-with-child-dependent-tasks) | - Track time associated with work | Scrum process methods |
| Track [requirements only](#requirements-only) | - Don't track time associated with work <br>- Track requirements for user stories, issues, product backlog items, and more | Methods associated with the Agile process, Basic process, Scrum process, Scrumban, and CMMI process |
| Track [requirements grouped under portfolio WITs](#requirements-grouped-under-portfolio-wits) | - Track requirements for epics and features, and more <br>- Let multiple teams view rollups and calendars from other teams | All portfolio planning tools |

The following sections describe the recommended usage for each option, along with supported tasks and tools.

### Tasks only

Tracking tasks only is **not recommended**. There's no way to quickly enter new tasks in a backlog or prioritize a backlog of tasks. Calendar views, cross-team views, and portfolio planning aren't supported when you track only the tasks.

### Requirements with child-dependent tasks

Tracking requirements along with child-dependent tasks is recommended for teams that use the Scrum process and track time associated with work.  

Consider this tracking option for the following scenarios:

- Quickly define and prioritize [product backlog](backlogs/create-your-backlog.md) items
- [Forecast](sprints/forecast.md) sprints by using team velocity metrics
- Plan sprints with the [Backlog Planning tool](sprints/assign-work-sprint.md)
- Plan and track capacity with the [Sprint capacity tool](sprints/set-capacity.md)
- Track estimated and remaining work by using a [Taskboard](sprints/adjust-work.md)
- Monitor [Sprint burndown](../report/dashboards/configure-sprint-burndown.md) based on remaining work, such as hours or days: 
- Conduct daily scrums, update, and monitor task status by using a [Sprint Taskboard](sprints/task-board.md)
- Estimate work by [defining Story Points, Effort, or Size](backlogs/create-your-backlog.md#add-details-and-estimates-to-backlog-items)
- View progress bars, counts, or sums of [rollup](backlogs/display-rollup.md) on tasks
- Track dependencies across teams and projects with [delivery plans](plans/track-dependencies.md)

Many teams start out using Scrum methods to track and plan their work with the tools available through the Sprints hub. The Sprints tools support estimating and tracking remaining work and use of capacity planning. If you don't plan on using these tools, adding the child-dependent tasks is optional. Developers might add them as a checklist of items for completing a user story or backlog requirement.

### Requirements only

Tracking the requirements only is recommended for teams that follow Kanban or Scrumban methods. You can track requirements for user stories (Agile), issues (Basic), product backlog items (Scrum), and other data (CMMI).

Consider this option for the following scenarios:

- Quickly define and prioritize [product backlog](backlogs/create-your-backlog.md) items
- Plan sprints with the [Backlog Planning tool](sprints/assign-work-sprint.md)
- Estimate work by [defining Story Points, Effort, or Size](backlogs/create-your-backlog.md#add-details-and-estimates-to-backlog-items)
- [Forecast](sprints/forecast.md) sprints by using team velocity metrics
- Monitor [Sprint burndown](../report/dashboards/configure-sprint-burndown.md) based on requirement estimates
- Update requirement status by using a [Kanban board](boards/kanban-quickstart.md)
- Track dependencies across teams and projects with [delivery plans](plans/track-dependencies.md)

### Requirements grouped under portfolio WITs

Tracking requirements grouped under portfolio WITs, such as epics and features, is recommended for organizations with multiple teams that want to view rollups and calendar views for other teams. This approach allows organizations and teams to take advantage of all portfolio planning tools.

Consider this option for the following scenarios:

- Quickly define and prioritize [portfolio backlog](backlogs/define-features-epics.md) items
- Quickly define child user stories of [portfolio checklist](boards/kanban-epics-features-stories.md) items
- Map work items to features and epics with the [Mapping tool](backlogs/organize-backlog.md)
- Support cross-team progress calendar views by setting up [delivery plans](plans/review-team-plans.md)
- Support calendar view of all team features by setting up a [feature timeline](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.workitem-feature-timeline-extension)
- Support calendar view of a specific epic on an [epic roadmap](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.workitem-feature-timeline-extension)
- View progress bars, counts, or sums of [rollup](backlogs/display-rollup.md) on child items
- Track dependencies across teams and projects with [delivery plans](plans/track-dependencies.md)

## Options to configure and customize

The following sections describe the areas you can configure and customize and the tools impacted by customizations. You can customize each area at the Organization, Project, or Team level, or a combination of two levels, as indicated. For a description of the Standard tools, Analytics tools, and Portfolio planning tools, see [What is Azure Boards](get-started/what-is-azure-boards.md), [In-context reports: Work tracking](../report/dashboards/overview.md#in-context-reports-work-tracking), and [Plans (Agile at scale)](plans/index.md).

:::row:::
   :::column span="3":::
   -----------------------------------------------------------------------------------------------------------------
   **Area paths, project configuration, team subscriptions** (Project, Team)

   For more information, see [Area paths, product teams, and portfolio management](#area-path) later in this article.
   
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **Standard tools**

   - Boards > All tools
   - Backlogs > All tools
   - Sprints > All tools

   :::column-end:::
   :::column span="1":::
   **Analytics tools**

   - Cumulative flow diagram
   - Velocity
   - Burndown trend 

   :::column-end:::
   :::column span="1":::
   **Portfolio planning tools**

   - Delivery plans
   - Feature timeline
   - Epic Roadmap
   - Portfolio plans (Beta)

   :::column-end:::
:::row-end:::

:::row:::
   :::column span="3":::
   -----------------------------------------------------------------------------------------------------------------
   **Iteration paths, project configuration, team subscription** (Project, Team)
   
   For more information, see [Iteration paths - sprints releases and versioning](#iteration-paths---sprints-releases-and-versioning) later in this article.

   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **Standard tools**

   - Backlogs > Sprint planning
   - Sprints > Sprint backlogs
   - Sprints > Sprint capacity
   - Sprints > Taskboard

   :::column-end:::
   :::column span="1":::
   **Analytics tools**

   - Velocity
   - Burndown trend

   :::column-end:::
   :::column span="1":::
   **Portfolio planning tools**

   - Delivery plans
   - Feature timeline
   - Epic Roadmap
   - Portfolio plans (Beta)

   :::column-end:::
:::row-end:::

:::row:::
   :::column span="3":::
   -----------------------------------------------------------------------------------------------------------------
   **Show bugs on boards & backlogs** (Team), **Custom WITs**, **Product backlog** (Process), **Taskboard** (Process)

   For more information, see [Show bugs on backlogs and boards](../organizations/settings/show-bugs-on-backlog.md) and [Custom WITS](#custom-wits).

   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **Standard tools**

   - Boards > Product board
   - Backlogs > Product backlog
   - Backlogs > Mapping tool
   - Sprints > Sprint backlogs
   - Sprints > Taskboard

   :::column-end:::
   :::column span="1":::
   **Analytics tools**

   - Velocity

   :::column-end:::
:::row-end:::

:::row:::
   :::column span="3":::
   -----------------------------------------------------------------------------------------------------------------
   **Custom WITs**, **Portfolio backlog** (Process), **More portfolio backlogs** (Process)

   For more information, see [Custom WITS](#custom-wits) later in this article.

   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **Standard tools**

   - Boards > Portfolio boards
   - Backlogs > Portfolio backlogs
   - Backlogs > Mapping tool

   :::column-end:::
   :::column span="1":::
   **Analytics tools**

   - Velocity

   :::column-end:::
:::row-end:::

:::row:::
   :::column span="3":::
   -----------------------------------------------------------------------------------------------------------------
   **Custom workflow** (Process)

   For more information, see [Custom workflow](#custom-workflow) later in this article.

   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **Standard tools**   
   
   - Boards > Product board
   - Boards > Portfolio boards
   - Sprints > Taskboard
   
   :::column-end:::
   :::column span="1":::
   **Analytics tools**

   - Cumulative flow diagram

   :::column-end:::
:::row-end:::

:::row:::
   :::column span="3":::
   -----------------------------------------------------------------------------------------------------------------
   **Custom field** (Process)

   For more information, see [Custom fields](#custom-fields) later in this article.

   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **Standard tools**

   - Boards > Product board
   - Boards > Portfolio boards

   :::column-end:::
   :::column span="1":::
   **Analytics tools**

   - [Rollup progress bars, sum, or count](#rollup-hierarchy-and-portfolio-management)
   
   :::column-end:::
:::row-end:::

<a id="area-path"></a>

## Area paths, product teams, and portfolio management  

Use area paths to group work items by product, feature, or business areas and to support teams responsible for work assigned to those areas. You can define a hierarchical set of area paths or a flat set. Typically, you define a hierarchical set of area paths to support a business hierarchy that wants to track progress for several teams.  

### Area paths and hierarchical grouping 

The two main ways to group work items are by area path and by [parenting them under a portfolio work item type (WIT)](#area-paths-and-hierarchical-grouping), as described earlier. The two methods aren't mutually exclusive and have some differences:  

- Area paths assigned to a team determine what work items appear in a team view: product backlog, portfolio backlog, delivery plans, or other portfolio planning tool.
- Grouping work items under a parent feature or epic determines what rollup views are supported and how work appears in a portfolio planning tool. 

You can also assign tags to work items to group them for query and filter purposes. When you structure your teams and projects, make sure you understand how you plan to use the grouping tools to support your business needs. Your choices affect the use of portfolio planning tools.

### Area path-dependent tools 

[!INCLUDE [temp](includes/list-area-dependent-tools-tasks.md)]

### Area paths and team assignments 

Each project has a default team and default area path. In some cases, there's only one team to plan for and track work. As an organization grows, you might add more teams to manage the backlog and sprints. 

The following example shows area paths and their assignments to teams, which support portfolio management views for the Account Management and Service Delivery teams. 

:::image type="content" source="media/config-custom/area-path-team-assignments.png" alt-text="Screenshot of area paths and team assignments.":::

For more information, see the following articles:  

- [Explore portfolio management](plans/portfolio-management.md)
- [Understand area paths](../organizations/settings/about-areas-iterations.md)
- [Explore teams and Agile tools](../organizations/settings/about-teams-and-settings.md)
- [Promote an Agile culture](plans/agile-culture.md)

### Recommendations

Review the following recommendations for using area paths and hierarchical grouping:

- Consider what upper management needs to know and how to best support them
- Consider how you want to use rollup both for a team and portfolio management 
- Define epics and scenarios for large initiatives that take two or more sprints to complete
- Create hierarchical area paths to support subcategories of features and product areas
- Define requirements for work that can be accomplished in a single sprint and can be assigned to a single individual  
- Define tasks to track more granular details or when you want to track time spent working 

> [!TIP]
> - You can assign a work item to a single individual only. When you define work items, consider how many work items you need and the team members to assign.  
> - Choose the `Node Name` field as a column option to view the leaf area node in a backlog list or board card. For more information, see [Customize cards](boards/customize-cards.md).
> - Don't create parent-child links across work items of the same type, such as story to story, bug to bug, or task to task.

Most Azure Boards tools support a filtered view of work items based on area path or iteration path. You can also apply more filters based on keyword, assignment, WIT, and more. 

<a id="show-bugs"></a>

## Bugs as requirements or tasks

Each team can choose how they want to manage bugs. Some teams like to track bugs along with requirements on the backlog. Other teams prefer to track bugs as tasks performed in support of a requirement. Tracked bugs appear on the team [Taskboard](sprints/task-board.md).

If you use the Scrum process, your default setup is to track bugs along with product backlog items. If you work in a project based on the [Agile or CMMI process](work-items/guidance/choose-process.md), bugs don't automatically appear on your backlog.

Determine with your team how you want to manage bugs, then [change your team settings](../organizations/settings/show-bugs-on-backlog.md) accordingly.

> [!TIP]  
> After you refresh a backlog or board and you don't see bugs as expected, review [Display nested items on backlogs and boards](backlogs/resolve-backlog-reorder-issues.md#display-nested-items-on-backlogs-and-boards). Only the leaf nodes of nested items appear on sprint Taskboards.

::: moniker range="azure-devops"

## System WITs on a backlog   

To track issues or impediments along with your requirements or in a portfolio backlog, add them to your custom Inherited process. For more information, see [Customize your backlogs or boards (Inheritance process) - Add a system WIT to a backlog](../organizations/settings/work/customize-process-backlogs-boards.md#add-oob-to-backlog).

::: moniker-end

<a id="rollup"></a>

## Rollup, hierarchy, and portfolio management  

Rollup columns allow you to view progress bars or totals of numeric fields or descendant items within a hierarchy. Descendant items correspond to all child items within the hierarchy. You can add one or more rollup columns to a product or portfolio backlog. 

The following image shows **Progress by all Work Items**, which displays progress bars for ascendant work items based on the percentage of closed descendant items:

:::image type="content" source="media/config-custom/progress-by-work-items.png" alt-text="Screenshot of backlog, Progress bars showing rollup by work items.":::

::: moniker range="azure-devops"

The [Delivery Plans](plans/review-team-plans.md) feature supports rollup views of epics, features, and other custom portfolio backlogs, as shown in the following image:

:::image type="content" source="plans/media/plans/rollup-view.png" alt-text="Screenshot showing Delivery Plans Progress rollup view of four scenarios.":::

::: moniker-end

## Iteration paths - sprints releases and versioning

Iteration paths support Scrum and Scrumban processes where work is assigned to a set time period. Iteration paths allow you to group work into sprints, milestones, or other event-specific or time-related period. Each iteration or sprint corresponds to a regular time interval referred to as a _sprint cadence_. Typical sprint cadences include two weeks, three weeks, or a month. For more information, see [About area and iteration paths](../organizations/settings/about-areas-iterations.md).  

Iteration paths can be a flat list, or grouped under release milestones as shown in the following image:

:::image type="content" source="media/config-custom/iteration-paths-flat-or-grouped.png" alt-text="Screenshot of Iteration paths, grouped.":::

While iteration paths don't affect board tools, you can use **Iteration Paths** as a filter on boards. For more information, see [Filter your board](./backlogs/filter-backlogs-boards-plans.md).

[!INCLUDE [temp](includes/list-sprint-dependent-tools.md)]

## Time tracking 

Most organizations that follow Scrum processes use time estimates for Sprint capacity planning. Azure Boards tools fully support tracking time for this purpose. The primary field for tracking time is `Remaining Work`, which typically zeros out at the end of the sprint. 

Some organizations require time tracking to support other purposes, such as billing or maintaining time allocation records. Time values for estimated work and completed work are of interest. The Agile and CMMI processes provide several fields to support time tracking: [Original Estimate, Completed Work, and Remaining Work](queries/query-numeric.md#fields).

### Limitations

- Azure Boards provides limited native support for time tracking. To support your other time tracking requirements, consider using a [Marketplace extension](https://marketplace.visualstudio.com/search?term=time%20tracking&target=AzureDevOps&category=Azure%20Boards&sortBy=Relevance).

## Process changes that affect all teams 

Any modification made to a process in a project affects all teams in that project. Many modifications don't cause significant disruptions. Certain changes can require critical adjustments for the teams, as described in the following sections.

### Custom fields

When you add custom fields to a WIT, it doesn’t directly affect any specific tool. Instead, these fields become visible within the corresponding work items. For instance, if you introduce a custom numeric field, you can utilize it for rollup calculations on backlogs. Also, you can use the custom field with the following reporting tools. Although the effect isn't tool-specific, it does enhance your ability to tailor work items to your project's needs.

- [In-context Velocity report and dashboard widget](../report/dashboards/team-velocity.md)
- [In-context Sprint Burndown report and dashboard widget](../report/dashboards/configure-sprint-burndown.md)
- [Dashboard Burndown and Burnup widget](../report/dashboards/configure-burndown-burnup-widgets.md)

> [!NOTE]   
> All default and custom fields are shared across all projects in a collection or organization. You can define a maximum of 1,024 fields for a process. 

### Custom WITs 

When you add a custom WIT to a specific category, the following changes occur.

Task-level changes:

- Child work items of the new WIT appear on the product backlog
- Work items based on the new WIT appear on the sprint backlogs and Taskboards

Requirements changes:

- Work items based on the new WIT appear on the product backlog and \board
- Each team must configure the \board to support the new WIT 

Changes to epics or features:

- Work items based on the new WIT appear on the corresponding portfolio backlogs and boards
- Each team must configure the \boards to support the new WIT
- The new WITs might not appear on one or more of the portfolio planning tools

### Custom workflow 

Each process supports a default workflow. This workflow defines the default columns that appear on the boards and sprint Taskboards. 

[!INCLUDE [temp](includes/four-process-workflow.md)] 

Some teams want to track the status of their work beyond the default states. The following support is available:

- **Add custom workflow states to the WIT**. All teams are affected. Each team must update their board configuration. 

- **Add columns to a board**. Only teams that add the columns are affected. For more information, see [Manage columns in a work item list in Azure Boards](backlogs/set-column-options.md)

Both workflow states and columns appear in the Cumulative Flow diagram for a team. Individuals can choose which columns appear in the chart. For more information, see [View and configure a cumulative flow diagram](../report/dashboards/cumulative-flow.md). 

## Who can make changes? 

Process-level, project-level, and team-level settings can have a wide effect. The ability to make changes is restricted to users with specific required permissions, as described in the following sections.

### Process-level changes 

To create, edit, or manage Inherited processes and apply them to projects, the user must be a member of the [**Project Collection Administrators** group](../organizations/security/change-organization-collection-level-permissions.md).

As an alternative, the user must have one or more of the following permissions set to **Allow**:

- **Create process**
- **Delete process**
- **Edit process**
- **Delete field from organization or account**

These permissions are described in [Set permissions and access for work tracking - Customize an inherited process](../organizations/security/set-permissions-access-work-tracking.md#customize-an-inherited-process). The following articles provide more information:

- [Explore the Inheritance process model](../organizations/settings/work/inheritance-process-model.md)  
- [Customize a project](../organizations/settings/work/customize-process.md)  
- [Create and manage a process](../organizations/settings/work/manage-process.md)  

### Project-level changes 

To add area paths or iteration paths, the user must be a member of the [**Project Administrators** group](../organizations/security/change-project-level-permissions.md). 

As an alternative, to add, edit, and manage area paths or iteration paths under a specific node, the user must have one or more of the following permissions set to **Allow**:

- **Create child nodes**  
- **Delete this node**  
- **Edit this node**  
- **View permissions in this node**  

The following articles provide more information:

- [Define area paths and assign to a team](../organizations/settings/set-area-paths.md)  
- [Define iteration paths (sprints) and configure  team iterations](../organizations/settings/set-iteration-paths-sprints.md)  

### Team-level changes

To configure team tools, the use must be a [team administrator](../organizations/settings/add-team-administrator.md) or a member of the [**Project Administrators** group](../organizations/security/change-project-level-permissions.md). 
 
Team administrators have permission to complete the following operations:  

- Add team members 
- Subscribe to area and iteration paths
- Configure backlogs and other common team settings 
- Configure boards 
- Manage team notifications

For more information on configuring backlogs and boards, see [Manage and configure team tools](../organizations/settings/manage-teams.md).

## Related content

- [Get started managing your project](../user-guide/project-admin-tutorial.md)
- [Manage and configure team tools](../organizations/settings/manage-teams.md)
- [Review the Azure Boards FAQs for configuration and customization](../organizations/settings/work/faqs.yml)
