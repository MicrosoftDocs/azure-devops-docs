---
title: Configure and customize Azure Boards
titleSuffix: Azure Boards
description: Learn about options to customize or configure Azure Boards and the impact on tools available.
ms.service: azure-devops-boards
ms.topic: overview
ms.assetid: 
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 07/19/2023 
---

# About configuring and customizing Azure Boards  

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

 You can configure and customize Azure Boards in many ways, to better manage your portfolio, dependencies, and monitoring. We recommend the tasks covered in this article especially for administrators who are responsible for managing multi-team projects.

**Quick access to common tasks:** 
[Customize cards](boards/customize-cards.md) | [Manage columns](backlogs/set-column-options.md) | [Expedite work with swimlanes](boards/expedite-work.md) | [Configure your backlog](backlogs/configure-your-backlog-view.md). 

> [!NOTE]   
> Most of the guidance in this article is valid for both the cloud and on-premises versions. However, some of the features included in this article, such as Rollup, Analytics, and some portfolio planning tools, are only available for the cloud at this time. 

If you're just getting started as a Project Administrator, see also [Get started as an administrator](../user-guide/project-admin-tutorial.md).

## Considerations

To make the most of Azure Boards, understand how your teams use their tools and functions (for example, Scrum, Kanban, and Scrumban), and their dependencies on configurations and customizations.
The following table summarizes the primary items you should consider as you structure your project. 

:::row:::
   :::column span="":::
      Project level
   :::column-end:::
   :::column span="2":::
      - How many teams you want to define 
      - How to structure area paths to support portfolio management views
      - Field customizations 
      - Custom work item types
      - Portfolio backlog customizations 
      - Workflow customizations 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Team level
   :::column-end:::
   :::column span="2":::
      - How you use your product backlog to plan and prioritize your work 
      - Whether you track bugs as requirements or as tasks, or not use bugs at all
      - Whether or not you use tasks to track time and capacity  
      - How you use portfolio backlog levels 
      - How you inform upper management of progress, status, and risks
   :::column-end:::
:::row-end:::

Customize your work tracking building blocks and tools to support business needs and communicate the usage guidelines to your team.

## Work item types and portfolio backlogs

When you create a project in Azure Boards, you first select a process. [Each process](work-items/guidance/choose-process.md) (Agile, Basic, Scrum, and CMMI) supports a hierarchy of work item types, including product and portfolio backlogs. Default WITs for each process are listed in corresponding tabs, with backlogs under **Requirements** and tasks under **Task**.

[!INCLUDE [work-item-types](includes/work-item-types.md)]

You can add custom work item types at each level, and even add custom portfolio backlogs. Here, for example, is a project that added Objectives and Key Results as custom work item types and corresponding portfolio backlogs to the Scrum process. 

:::image type="content" source="media/config-custom/portfolio-backlogs-objectives-results.png" alt-text="Objectives and Key Results as additional portfolio backlogs":::

## Work tracking options and recommended usage  

Teams can choose which work item types they use to track their work. The following table summarizes the main options, recommended usage, and supported tasks and tools.  

:::row:::
   :::column span="":::
      **Work tracking options**
   :::column-end:::
   :::column span="2":::
      **Tasks and tools supported**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      ----------------------------
   :::column-end:::
   :::column span="2":::
      ----------------------------
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Tasks only
   :::column-end:::
   :::column span="2":::
      **Not recommended**  
      There's no way to quickly enter new tasks in a backlog nor prioritize a backlog of tasks. Also, there's no support for calendar views, cross-team views, or portfolio planning 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Requirements with child-dependent tasks
   :::column-end:::
   :::column span="2":::
     **Supports Scrum methods**  
     Recommended for teams that follow Scrum methods and want to track time associated with work.  
     - Quickly define and prioritize backlog items: [Product backlog](backlogs/create-your-backlog.md)
     - Forecast sprints using team velocity: [Forecast](sprints/forecast.md)  
     - Plan sprints: [Backlog Planning tool](sprints/assign-work-sprint.md)  
     - Plan and track capacity: [Sprint capacity tool](sprints/set-capacity.md)
     - Track estimated and remaining work: [Taskboard](sprints/adjust-work.md)
     - Monitor sprint burndown based on remaining work such as hours or days: [Sprint burndown](../report/dashboards/configure-sprint-burndown.md?bc=%252fazure%252fdevops%252fboards%252fbreadcrumb%252ftoc.json&toc=%252fazure%252fdevops%252fboards%252ftoc.json)
     - Conduct daily scrums, update and monitor task status: [Sprint Taskboard](sprints/task-board.md)  
     - Estimate work: [Define Story Points, Effort, or Size](backlogs/create-your-backlog.md#add-details-and-estimates-to-backlog-items)
     - View progress bars, counts, or sums of rollup on tasks: [Rollup](backlogs/display-rollup.md)  
     - Track dependencies across teams and projects: [Delivery Plans](plans/track-dependencies.md)  

     Many teams start out using Scrum methods to track and plan their work using the tools available through the Sprints hub. The Sprints tools support estimating and tracking remaining work and use of capacity planning. If you don't plan on using these tools, then adding child-dependent tasks is optional. Developers might add them as a checklist of items they need to complete a user story or backlog requirement. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Requirements only, such as user stories (Agile), issues (Basic), product backlog items (Scrum), requirements (CMMI)  
   :::column-end:::
   :::column span="2":::
      **Supports Kanban and Scrumban methods**  
      Recommended for teams that follow Kanban or Scrumban methods, estimate work using Story Points, Effort, or Size, and don't track time associated with work.  
      - Quickly define and prioritize backlog items: [Product backlog](backlogs/create-your-backlog.md)  
      - Plan sprints: [Backlog Planning tool](sprints/assign-work-sprint.md)  
      - Estimate work: [Define Story Points, Effort, or Size](backlogs/create-your-backlog.md#add-details-and-estimates-to-backlog-items)  
      - Forecast sprints using team velocity: [Forecast](sprints/forecast.md)  
      - Monitor sprint burndown based on requirement estimates: [Sprint burndown](../report/dashboards/configure-sprint-burndown.md?bc=%252fazure%252fdevops%252fboards%252fbreadcrumb%252ftoc.json&toc=%252fazure%252fdevops%252fboards%252ftoc.json)  
      - Update requirement status: [Kanban board](boards/kanban-quickstart.md)  
      - Track dependencies across teams and projects: [Delivery Plans](plans/track-dependencies.md)  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Requirements grouped under portfolio work item types, such as epics and features
   :::column-end:::
   :::column span="2":::
      **Supports calendar views, cross-team views, and portfolio planning**  
      Recommended for organizations with several teams that want to view rollups and calendar views associated with multiple teams, and take advantage of all portfolio planning tools.  
      - Quickly define and prioritize portfolio items: [Portfolio backlogs](backlogs/define-features-epics.md)  
      - Quickly define child user stories of portfolio items: [Portfolio checklists](boards/kanban-epics-features-stories.md)  
      - Map work items to features and epics: [Mapping tool](backlogs/organize-backlog.md)  
      - View cross-team progress calendar view: [Delivery plans](plans/review-team-plans.md)  
      - View calendar view of all team features: [Feature Timeline](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.workitem-feature-timeline-extension)  
      - View calendar view of a specific epic: [Epic Roadmap](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.workitem-feature-timeline-extension)  
      - View progress bars, counts, or sums of rollup on child items: [Rollup](backlogs/display-rollup.md)  
      - Track dependencies across teams and projects: [Delivery Plans](plans/track-dependencies.md)  
   :::column-end:::
:::row-end:::

## Options to configure and customize

The following table shows the areas you can configure and customize and the tools impacted by those customizations. You can customize each area at the Organization, Project, or Team level as noted, or a combination of two. For a description of the Standard tools, Analytics tools, and Portfolio planning tools, see [What is Azure Boards](get-started/what-is-azure-boards.md), [In-context reports: Work tracking](../report/dashboards/overview.md#in-context-reports-work-tracking), and [Plans (Agile at scale)](plans/index.md). 
:::row:::
   :::column span="1":::
   **Configure or customize**
   :::column-end:::
   :::column span="1":::
   **Standard tools**
   :::column-end:::
   :::column span="1":::
   **Analytics**
   :::column-end:::
   :::column span="1":::
   **Portfolio planning tools**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   [Area paths, project configuration, and team subscriptions](#area-path) (Project, Team)
   :::column-end:::
   :::column span="1":::
   
   
   - Boards>All tools
   - Backlogs>All tools
   - Sprints>All tools
   
   :::column-end:::
   :::column span="1":::
   

   - Cumulative flow diagram
   - Velocity
   - Burndown trend 
   
   :::column-end:::
   :::column span="1":::
   - Delivery plans
   - Feature timeline
   - Epic Roadmap
   - Portfolio plans (Beta)
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   [Iteration paths, project configuration, and team subscription](#iteration-path) (Project, Team)
   :::column-end:::
   :::column span="1":::
   - Backlogs>Sprint planning
   - Sprints>Sprint backlogs
   - Sprints>Sprint capacity
   - Sprints>Taskboard
   :::column-end:::
   :::column span="1":::
   - Velocity
   - Burndown trend 
   :::column-end:::
   :::column span="1":::
   - Delivery plans
   - Feature timeline
   - Epic Roadmap
   - Portfolio plans (Beta)
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   [Show bugs on backlogs &amp; boards (Team)](../organizations/settings/show-bugs-on-backlog.md)  
   Custom work item types, Product backlog (Process)  
   Custom work item types, Taskboard (Process)
   :::column-end:::
   :::column span="1":::
   - Boards>Product board
   - Backlogs>Product backlog
   - Backlogs> Mapping tool
   - Sprints>Sprint backlogs
   - Sprints>Taskboard
   :::column-end:::
   :::column span="1":::
   - Velocity
   :::column-end:::
   :::column span="1":::
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Custom work item types, Portfolio backlog (Process)  
   More portfolio backlogs (Process)
   :::column-end:::
   :::column span="1":::
   - Boards>Portfolio boards
   - Backlogs>Portfolio backlogs
   - Backlogs> Mapping tool
   :::column-end:::
   :::column span="1":::
   - Velocity
   :::column-end:::
   :::column span="1":::
      
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   
   Custom workflow (Process)
   :::column-end:::
   :::column span="1":::
   
   
   - Boards>Product board
   - Boards>Portfolio boards
   - Sprints>Taskboard
   
   :::column-end:::
   :::column span="1":::
   - Cumulative flow diagram
   :::column-end:::
   :::column span="1":::
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   
   Custom field (Process)
   :::column-end:::
   :::column span="1":::
   - Boards>Product board
   - Boards>Portfolio boards
   :::column-end:::
   :::column span="1":::
   
   
   - [Rollup progress bars, sum, or count](#rollup)
   
   :::column-end:::
   :::column span="1":::
   
   :::column-end:::
:::row-end:::

<a id="area-path" />

## Area paths, product teams, and portfolio management  

Use area paths to group work items by product, feature, or business areas and to support teams responsible for work assigned to those areas. You can define a hierarchical set of area paths or a flat set. Typically, you define a hierarchical set of area paths to support a business hierarchy that wants to track progress of several teams.  

### Area paths and hierarchical grouping 

The two main ways to group work items are by area path and by [parenting them under a portfolio work item type](#area-paths-and-hierarchical-grouping) as described early in this article. The two aren't mutually exclusive. Here are their differences:  
- Area paths assigned to a team determine what work items appear in a team view: product backlog, portfolio backlog, delivery plans, or other portfolio planning tool 
- Grouping work items under a parent feature or epic determine what rollup views are supported and how work appears in a portfolio planning tool   

You can also assign tags to work items to group them for query and filter purposes. So when you structure your teams and projects, make sure you understand how you use these grouping tools to support your business needs. Your choices impact the use of portfolio planning tools.

### Area path-dependent tools 

[!INCLUDE [temp](includes/list-area-dependent-tools-tasks.md)]

### Area paths and team assignments 

Each project has a default team and default area path. In some cases, there's only one team to plan and track work. As organizations grow, however, you might add more teams to manage the backlog and sprints. 

The following example shows area paths and their assignments to teams, which support portfolio management views for the Account Management and Service Delivery teams. 

:::image type="content" source="media/config-custom/area-path-team-assignments.png" alt-text="Screenshot of Area paths and team assignments.":::

For more information, see the following articles:  

- [Portfolio management](plans/portfolio-management.md)
- [About area paths](../organizations/settings/about-areas-iterations.md?bc=%252fazure%252fdevops%252fboards%252fbreadcrumb%252ftoc.json&toc=%252fazure%252fdevops%252fboards%252ftoc.json)
- [About teams and Agile tools](../organizations/settings/about-teams-and-settings.md?bc=%252fazure%252fdevops%252fboards%252fbreadcrumb%252ftoc.json&toc=%252fazure%252fdevops%252fboards%252ftoc.json)
- [Agile culture](plans/agile-culture.md). 

**Recommendations:**
- Consider what upper management needs to know and how to best support them 
- Consider how you want to use rollup both for a team and portfolio management 
- Define epics and scenarios for large initiatives that take two or more sprints to complete
- Create hierarchical area paths to support sub categories of features and product areas
- Define requirements for work that can be accomplished in a single sprint and can be assigned to a single individual  
- Define tasks to track more granular details or when you want to track time spent working 

> [!TIP]    
> - You can only assign a work item to a single individual. When you define work items, consider how many work items you need and who to assign them to.  
> - Choose the `Node Name` field as a column option to view the leaf area node in a backlog list or board card. For more information, see [Customize cards](boards/customize-cards.md).
> - Don't create parent-child links among work items of the same type, such as story-story, bug-bug, task-task.

Most Azure Boards tools support a filtered view of work items based on area path or iteration path. You can also apply more filters based on keyword, assignment, work item type, and more. 

<a id="show-bugs" />

## Bugs as requirements or tasks

Each team can choose how they want to manage bugs. Some teams like to track bugs along with requirements on the backlog. Other teams like to track bugs as tasks performed in support of a requirement. The bugs then appear on their [Taskboard](sprints/task-board.md).

If you use the Scrum process, your default setup is to track bugs along with product backlog items (PBIs). If you work in a project based on the [Agile or CMMI processes](work-items/guidance/choose-process.md), bugs don't automatically appear on your backlog.

Determine with your team how you want to manage bugs. Then, [change your team settings](../organizations/settings/show-bugs-on-backlog.md) accordingly.

> [!TIP]  
> After you refresh a backlog or board and you don't see bugs where you expect them, review [How backlogs and boards display hierarchical (nested) items](backlogs/resolve-backlog-reorder-issues.md#leaf-nodes). Only leaf nodes of nested items appear on sprint Taskboards.

::: moniker range="azure-devops"

## System work item types on a backlog   

To track issues or impediments along with your requirements or in a portfolio backlog, add them to your custom Inherited process. For more information, see [Customize your backlogs or boards (Inheritance process)](../organizations/settings/work/customize-process-backlogs-boards.md#add-oob-to-backlog).

::: moniker-end

<a id="hierarchy" />
<a id="rollup" />

## Rollup, hierarchy, and portfolio management  

Rollup columns allow you to view progress bars or totals of numeric fields or descendant items within a hierarchy. Descendant items correspond to all child items within the hierarchy. You can add one or more rollup columns to a product or portfolio backlog. 

Here we show **Progress by all Work Items**, which displays progress bars for ascendant work items based on the percentage of descendant items that have been closed. 

:::image type="content" source="media/config-custom/progress-by-work-items.png" alt-text="Screenshot of backlog, Progress bars showing rollup by work items.":::

::: moniker range="azure-devops"

[Delivery Plans](plans/review-team-plans.md) supports rollup views of epics, features, and other custom portfolio backlogs. 

:::image type="content" source="plans/media/plans/rollup-view.png" alt-text="Screenshot showing Delivery Plans Progress rollup view of four scenarios.":::

::: moniker-end

<!---
Consider how your selection impacts rollup if your development team uses tasks 
--> 

<a id="iteration-path" />

## Iteration paths sprints releases & versioning

Iteration paths support Scrum and Scrumban processes where work is assigned to a set time period. Iteration paths allow you to group work into sprints, milestones, or other event-specific or time-related period. Each iteration or sprint corresponds to a regular time interval referred to as a sprint cadence. Typical sprint cadences are two weeks, three weeks, or a month long. For more information, see [About area and iteration paths](../organizations/settings/about-areas-iterations.md?toc=/azure/devops/boards/toc.json).  

Iteration paths can be a flat list, or grouped under release milestones as shown in the following image. 

:::image type="content" source="media/config-custom/iteration-paths-flat-or-grouped.png" alt-text="Screenshot of Iteration paths, grouped.":::

> [!TIP]   
> While Iteration Paths don't impact Kanban board tools, you can use Iteration Paths as a filter on boards. For more information, see [Filter your Kanban board](./backlogs/filter-backlogs-boards-plans.md).

[!INCLUDE [temp](includes/list-sprint-dependent-tools.md)]

## Time tracking 

Most organizations following Scrum processes use time estimates for Sprint capacity planning. Azure Boards tools fully support tracking time for this purpose. The main field used is the task `Remaining Work` field, which typically zeros out at the end of the sprint. 

However, some organizations require time tracking to support other purposes, such as for billing or maintaining time allocation records. Time values for estimated work and completed work are of interest. The Agile and CMMI processes provide these fields&mdash;[`Original Estimate`, `Completed Work`, `Remaining Work`](queries/query-numeric.md#fields)&mdash;for use in tracking time. You can use them for that purpose. However, Azure Boards provides limited native support for time tracking. Instead, consider using a [Marketplace extension](https://marketplace.visualstudio.com/search?term=time%20tracking&target=AzureDevOps&category=Azure%20Boards&sortBy=Relevance) to support your other time tracking requirements.  

> [!NOTE]   
> The `Original Estimate`, `Completed Work`, `Remaining Work` fields were designed to support integration with Microsoft Project. Integration support with Microsoft Project is deprecated for Azure DevOps Server 2019 and later versions, including the cloud service. 

## Process changes that impact all teams 

Any change made to a process that's applied to a project impacts all teams in that project. Many changes don't cause much disruption to the teams they support, but the following changes do.

### Custom fields

Adding custom fields to a work item type doesn't impact any specific tool. The fields appear in the corresponding work items. If you add a custom numeric field, but, you can use it to support rollup on backlogs and the following reporting tools: 
- [In-context Velocity report and dashboard widget](../report/dashboards/team-velocity.md)
- [In-context Sprint Burndown report and dashboard widget](../report/dashboards/configure-sprint-burndown.md)
- [Dashboard Burndown and Burnup widget](../report/dashboards/configure-burndown-burnup-widgets.md)

> [!NOTE]   
> All default and custom fields are shared across all projects in a collection or organization. There is a limit of 1024 fields that you can define for a process. 

### Custom work item types 

The following table shows the effects when you add a custom work item type to a specific category.

:::row:::
   :::column span="1":::
   **Task**
   :::column-end:::
   :::column span="1":::
   **Requirement**
   :::column-end:::
   :::column span="1":::
   **Epic or feature**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   - Child work items of the new WIT appear on the product backlog
	- Work items based on the new WIT appear on the sprint backlogs and Taskboards
   :::column-end:::
   :::column span="1":::
   - Work items based on the new WIT appear on the product backlog and Kanban board
	- Each team must configure the Kanban board to support the new WIT 
   :::column-end:::
   :::column span="1":::
   - Work items based on the new WIT appear on the corresponding portfolio backlogs and Kanban boards
	- Each team must configure the Kanban boards to support the new WIT
	- The new WITs may not appear on one or more of the portfolio planning tools
   :::column-end:::  
:::row-end:::

### Custom workflow 

Each process supports a default workflow. This workflow defines the default columns that appear on the Kanban boards and sprint Taskboards. 

[!INCLUDE [temp](includes/four-process-workflow.md)] 

Sometimes, teams want to track the status of their work that goes beyond these default states. Support is provided in one of the following ways: 
- Add custom workflow states to the work item type: This option impacts all teams and requires that they update their Kanban board configuration. 
- [Add columns to a Kanban board](backlogs/set-column-options.md): This option only impacts the team that adds the columns.

Both workflow states and Kanban columns appear in the Cumulative Flow diagram for a team. Individuals can choose which columns appear in the chart. For more information, see [Cumulative flow diagram](../report/dashboards/cumulative-flow.md). 

## Who can make changes? 

Since process-level, project-level, and team-level settings can have a wide impact, changes are restricted to users with the following required permissions. 

### Process-level changes 

To create, edit, or manage Inherited processes and apply them to projects, you must be a member of the [**Project Collection Administrators** group](../organizations/security/change-organization-collection-level-permissions.md). Or, you must have  the corresponding permissions **Create process**, **Delete process**, **Edit process**, or **Delete a field from organization** set to **Allow**. See [Set permissions and access for work tracking, Customize an inherited process](../organizations/security/set-permissions-access-work-tracking.md#customize-an-inherited-process).

For more information, see the following articles:  

- [About the inheritance process](../organizations/settings/work/inheritance-process-model.md)  
- [Customize a project](../organizations/settings/work/customize-process.md)  
- [Create and manage a process](../organizations/settings/work/manage-process.md)  

### Project-level changes 

To add Area Paths or Iteration Paths, you must be a member of the [**Project Administrators** group](../organizations/security/change-project-level-permissions.md). 

Or, to add, edit, and manage Area Paths or Iteration Paths under a specific node, you must have been granted one or more of the following permissions set to **Allow**:

- **Create child nodes**  
- **Delete this node**  
- **Edit this node**  
- **View permissions in this node**  

For more information, see the following articles:  
- [Define area paths & assign to a team](../organizations/settings/set-area-paths.md)  
- [Define iteration paths (sprints) & assign team iterations](../organizations/settings/set-iteration-paths-sprints.md)  

### Team-level changes

To configure team tools, you must be a [team administrator](../organizations/settings/add-team-administrator.md) or a member of the [**Project Administrators** group](../organizations/security/change-project-level-permissions.md). 
 
Team administrators do the following operations:  
- Add team members 
- Subscribe to area and iteration paths
- Configure backlogs and other common team settings 
- Configure Kanban boards 
- Manage team notifications

For more information on configuring backlogs and boards, see [Manage and configure team tools](../organizations/settings/manage-teams.md).

## Next steps
> [!div class="nextstepaction"]
> [Get started as an administrator](../user-guide/project-admin-tutorial.md)

## Related articles

- [Azure Boards Configuration and Customization FAQs](../organizations/settings/work/faqs.yml)
- [Set up your Backlogs and Boards](backlogs/set-up-your-backlog.md)  
- [Inherited process model](../organizations/settings/work/inheritance-process-model.md)  
- [Manage and configure team tools](../organizations/settings/manage-teams.md)
