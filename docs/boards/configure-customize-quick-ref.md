---
title: Understand options and choices for configuring and customizing work tracking  customization
titleSuffix: Azure Boards
description: Learn about choices to customize or configure Azure Boards and the impact on tools available
ms.technology: devops-agile
ms.prod: devops
ms.topic: overview
ms.assetid: 
ms.manager: mijacobs
ms.author: kaelli
author: KathrynEE
monikerRange: 'azure-devops'
ms.date: 01/09/2020
---



# Configuration and customization of Azure Boards 

[!INCLUDE [temp](_shared/version-vsts-only.md)]

This article provides guidance and links to all items that you can customize that impact work tracking tools. 

If you're just getting started as a Project Administrator, see [Get started as an administrator](../user-guide/project-admin-tutorial.md).

> [!NOTE]   
> This article applies to Azure DevOps Services. Most of the guidance is valid for both the cloud and on-premises versions. However, some of the features included in this article are only available for the cloud at this time. 


## What to consider?

When configuring or customizing work tracking tools, you'll want to consider the tools your teams use and how they will use them. Whether your teams follow Scrum, Kanban, or some combination of Scrumban, you can gain the most advantage of the Azure Boards tools by understanding how you can configure and customize them. 


## Work tracking options and recommended usage  

One of the main choices teams have is choosing the work item types they use to track their work. The work item type options and recommended usage are summarized as follows.  

|Work item types | Recommended usage  |
|-----------|----------------
| Tasks only | **Not recommended** as there is no way to quickly enter new tasks in a backlog nor prioritize a backlog. In addition, there is no support for calendar views, cross-team views, or portfolio planning tools.   
| Requirements with child-dependent tasks | For teams that follow Scrum methods and want to track time associated with work. | 
| Requirements only | For teams that follow Kanban or Scrumban methods, estimate work using Story Points, Effort, or Size, and don't track time associated with work. | 
| Requirements grouped under portfolio work item types, such as epics and features | For organizations with several teams that want to view rollups and calendar views associated with multiple teams, and take advantage of all portfolio planning tools.   | 

Many teams starting out using Scrum methods track and plan their work using the tools available through the Sprints hub. The Sprints tools support estimating and tracking remaining work and use of capacity planning. If you don't plan on using these tools, then adding child-dependent tasks is optional. Developers might add them simply as a checklist of items they need to complete a user story or backlog requirement.  

The primary tools available to use for each recommended option are described in the following table. 


<table width="100%">
<tbody valign="top">
<tr>
<th width="35%">Work tracking options</th>
<th width="65%">Tasks and tools supported </th>
</tr>
<tr>
<td>Requirements with child-dependent tasks</td>
<td>
<strong>Supports Scrum methods</strong>
<ul>
<li>Quickly define and prioritize backlog items: <a href="backlogs/create-your-backlog.md">Product backlog</a></li>
<li>Forecast sprints using team velocity: <a href="sprints/forecast.md">Forecast</a></li>
<li>Plan sprints: <a href="sprints/assign-work-sprint.md">Backlog Planning tool</a></li>
<li>Plan and track capacity: <a href="sprints/set-capacity.md">Sprint capacity tool</a></li>
<li>Track estimated and remaining work: <a href="sprints/adjust-work.md">Taskboard </a></li>
<li>Monitor sprint burndown based on remaining work such as hours or days: <a href="/azure/devops/report/dashboards/configure-sprint-burndown?toc=/azure/devops/boards/toc.json&bc=/azure/devops/boards/breadcrumb/toc.json">Sprint burndown</a></li>
<li>Update and monitor task status: <a href="sprints/task-board.md">Sprint Taskboard </a></li>
<li>Conduct daily scrums: <a href="sprints/task-board.md">Sprint Taskboard</a></li>
<li>Estimate work: backlogs/create-your-backlog.md#add-details-and-estimates">Define Story Points, Effort, or Size </a></li>
<li>View progress bars, counts, or sums of rollup on tasks: <a href="backlogs/display-rollup.md">Rollup</a></li>
<li>Track dependencies across teams and projects: <a href="extensions/dependency-tracker.md">Dependency Tracker</a></li>
</ul>
</td>
</tr>
<tr>
<td>Requirements only, such as user stories (Agile), issues (Basic), product backlog items (Scrum), requirements (CMMI)
</td>
<td>
<strong>Supports Kanban and Scrumban methods</strong>
<ul>
<li>Quickly define and prioritize backlog items:<a href="backlogs/create-your-backlog.md">Product backlog</a></li>
<li>Plan sprints: <a href="sprints/assign-work-sprint.md">Backlog Planning tool</a></li>
<li>Estimate work: <a href="backlogs/create-your-backlog.md#add-details-and-estimates">Define Story Points, Effort, or Size</a></li>
<li>Forecast sprints using team velocity: <a href="sprints/forecast.md">Forecast</a></li>
<li>Monitor sprint burndown based on requirement estimates: <a href="/azure/devops/report/dashboards/configure-sprint-burndown?toc=/azure/devops/boards/toc.json&bc=/azure/devops/boards/breadcrumb/toc.json">Sprint burndown</a></li>
<li>Update requirement status: <a href="boards/kanban-quickstart.md">Kanban board</a></li>
<li>Track dependencies across teams and projects: <a href="extensions/dependency-tracker.md">Dependency Tracker</a></li>
</ul>
</td>
</tr>
<tr>
<td>Requirements grouped under portfolio work item types, such as epics and features
</td>
<td>
<strong>Supports calendar views, cross-team views, and portfolio planning </strong>
<ul>
<li>Quickly define and prioritize portfolio items: <a href="backlogs/define-features-epics.md">Portfolio backlogs</a></li>
<li>Quickly define child user stories of portfolio items: <a href="boards/kanban-epics-features-stories.md">Portfolio checklists</a></li>
<li>Map work items to features and epics: <a href="backlogs/organize-backlog.md">Mapping tool</a></li>
<li>View cross-team progress calendar view: <a href="plans/review-team-plans.md">Delivery plans</a></li>
<li>View calendar view of all team features: <a href="https://marketplace.visualstudio.com/items?itemName=ms-devlabs.workitem-feature-timeline-extension">Feature Timeline</a></li>
<li>View calendar view of a specific epic: <a href="https://marketplace.visualstudio.com/items?itemName=ms-devlabs.workitem-feature-timeline-extension">Epic Roadmap</a></li>
<li>View progress bars, counts, or sums of rollup on child items: <a href="backlogs/display-rollup.md">Rollup</a></li>
<li>Track dependencies across teams and projects: <a href="extensions/dependency-tracker.md">Dependency Tracker</a></li>
</ul>
</td>
</tr>
</tbody>
</table>


### Example team choices 

Some examples of real-world teams who use Azure Boards to track work are described below. 

- Product manage team uses features to prioritize their work with child-dependent user stories assigned to development team: 
	- Product management team of ten PMs manages five development teams and their work
	- Five development teams comprised of 8 to 12 developers manage their work using user stories with optional child-dependent tasks, no time estimates made 

- Open source project of 100+ members that manages projects they collaborate on:  
	- Uses the Scrum process  
	- Defines Features and product backlog items, each backlog item corresponds to an event or deliverable   
	- Updates status via the Kanban board  

- Content development team of 50 writers uses tasks to track their work 
	- 

- Support operations team 

## Configure and customization options 

The following table indicates the areas you can configure and customize and the tools impacted by those customizations. For a description of the Standard tools, Analytics tools, and Portfolio planning tools, see [What is Azure Boards](get-started/what-is-azure-boards.md), [In-context reports: Work tracking](/azure/devops/report/dashboards/overview#in-context-reports-work-tracking), and [Plans (Agile at scale)](plans/index.md). 
 
[!INCLUDE [temp](includes/config-and-customize.md)]

<!---

gannt chart
workflow customizations 

--> 



## Area paths, product teams, and delivery plans 

Area paths are used to group work items by product, feature, or business areas and to support teams responsible for work assigned to those areas. You can define a hierarchical set of area paths or a flat set. Typically, you define a hierarchical set of area paths when you want to support a business hierarchy that wants to track progress of several teams.  

A default team and default area path is defined for each project. For small teams, this is sufficient to begin planning and tracking work. As organizations grow, however, it's useful to add teams to support their ability to manage their backlog and and sprints. 

Prior to adding teams, we recommend you read the following articles:  

- [Portfolio management](plans/portfolio-management.md)
- [About area paths](/azure/devops/organizations/settings/about-areas-iterations?toc=/azure/devops/boards/toc.json&bc=/azure/devops/boards/breadcrumb/toc.json)
- [About teams and Agile tools](/azure/devops/organizations/settings/about-teams-and-settings?toc=/azure/devops/boards/toc.json&bc=/azure/devops/boards/breadcrumb/toc.json)
- [Agile culture](plans/agile-culture.md). 

The two main ways to group work items is by area path or by parenting them under a portfolio work item type as described early is this article. So when you structure your teams and projects, you want to make sure you understand how you'll use these two main ways of grouping to support your business needs. For query and filter purposes, you can also assigned tags to work items that acts as a grouping. Your choices impact the use of portfolio planning tools. 

Recommendations:
- Consider what views upper management may want to view and how to best support them 
- Consider how you want to use roll up 
- Define epics and scenarios for large initiatives that will take two or more sprints to complete
- Define requirements for work that can be accomplished in a single sprint and can be assigned to a single individual  
- Define tasks to track more granular details or when you want to  


> [!TIP]    
> Work items can only be assigned to a single individual. So when defining work items, consider how many work items are needed to assign the work to those individuals who will be tasked to complete the work. 


Most Azure Boards tools support a filtered view of work items based on area path and/or iteration path. Additional filters can also be applied based on keyword, assignment, work item type, and more. 


<!---
Area paths, portfolios, and rollup 
Assignments 
--> 




## Iteration paths, sprints, releases, and versioning

Iteration paths support Scrum and Scrumban processes where work is assigned to a set time period. Iteration paths allow you to group work into sprints, milestones, or other event-specific or time-related period. Each iteration or sprint corresponds to a regular time interval referred to as a sprint cadence. Typical sprint cadences are two week, three week or a month long. To learn more about Iteration paths, see [About area and iteration paths (aka sprints)](../organizations/settings/about-areas-iterations.md?toc=/azure/devops/boards/toc.json&bc=/azure/devops/boards/breadcrumb/toc.json).  

To use the following tools, teams must subscribe to iteration paths and set sprint dates. 

- [Sprints> all tools](sprints/scrum-overview.md) 
- [Delivery plans](plans/review-team-plans.md), provides individual team and cross-team progress calendar views
- [Feature Timeline](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.workitem-feature-timeline-extension), provides a calendar view of team features 
- [Dependency Tracker](extensions/dependency-tracker.md), provides list and calendar views of dependencies being produced or consumed by teams  
- And all other timeline or calendar view tools  


## Work item types and portfolio backlog levels 

Each project comes with a set hierarchy of work item types that support a product backlog and portfolio backlogs. The defaults for each supported process is shown in the following tabs. 

[!INCLUDE [hierarchy-work-item-types](includes/hierarchy-work-item-types.md)]


### Basic tools 




### Portfolio planning 

## Analytics 


## Who can make changes? 

You configure resources either for yourself, your team, a project, or your organization from an administrative **Settings** page. The settings you can configure depend on the security group or administrative role you belong to. 


You can delegate several tasks to a user with Stakeholder or Basic access by adding them to the [Project Collection Administrators group](..//organizations/security/set-project-collection-level-permissions.md). To learn more about Stakeholder access, see [About access levels, Stakeholder access](../organizations/security/access-levels.md#stakeholder-access). 


You configure resources either for yourself, your team, a project, or your project collection from a **Settings** page. The settings you can configure depend on the security group or administrative role you belong to.


Organized by functional services.  
User - ![ ](media/icons/profile.png)  
Team - ![ ](media/icons/team.png)  
Project - ![ ](media/icons/project.png)  
Collection - ![ ](media/icons/collection.png)  
 
Collection/Organization 

## User settings 

The following user settings can impact on work tracking. 
- Date Pattern
- Time Pattern
- Time Zone

Impacts queries? 

Computer settings --- 

- Notifications
- 
## Configuration 

[!INCLUDE [team-configuration](includes/team-configuration.md)]


## Customization


## Hierarchical guidance   


## Related articles

- [Resources granted to project members](../organizations/accounts/resources-granted-to-project-members.md) 
- [Permissions and groups reference](../organizations/security/permissions.md) 
- [Rate limits](../organizations/settings/work/object-limits.md)


<!---
Link from these topics to this article: 
- About area paths and iteration paths
- Define area paths
- Define iteration paths
- Choose a process 
- Inherited process model
- On-premises process model 


Examples you can draw on and document in another topic: 
- The way Agile features team managed their backlog (~10 PMs) 
- The way Carmon mills content team (56) manages their backlog. Managing backlog via user stories+content feature area (highly granular) , 
--> 

