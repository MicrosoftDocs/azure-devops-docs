---
title: How are area and iteration paths used?
titleSuffix: Azure DevOps
description: Learn how to effectively use area paths and iteration paths in Azure DevOps to organize and manage your projects.
ms.subservice: azure-devops-settings
ms.custom: teams, linked-from-support
ms.author: chcomley
author: chcomley
ms.topic: conceptual
monikerRange: '<= azure-devops'
ai-usage: ai-assisted
ms.date: 10/17/2024
---

# Area and iteration paths 

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Area paths group work items by team, product, or feature area. Iteration paths group work into sprints, milestones, or other time-related periods. Both fields support hierarchical paths.

Define area and iteration paths for a project, and teams can select which paths to use for their backlog and Agile tools. Learn how Agile tools use these paths in [Agile tools that rely on areas and iterations](about-teams-and-settings.md).

::: moniker range="azure-devops" 

> [!NOTE]
> Area paths and iteration paths are also known as *Classification Nodes*. You can manage them programmatically using the [Classification Nodes (REST API)](/rest/api/azure/devops/wit/classification%20nodes) or the Azure DevOps CLI command [az boards iteration](/cli/azure/boards/iteration).

::: moniker-end

::: moniker range="< azure-devops" 

> [!NOTE] 
> Area paths and iteration paths are also referred to as *Classification Nodes*. You can manage them programmatically via the [Classification Nodes (REST API)](/rest/api/azure/devops/wit/classification%20nodes).

::: moniker-end

The areas and iterations depend on the process used to create your project. This example shows the default settings for the Scrum process. Dates aren't set by default; you need to set dates to match your sprint or release schedules.

> [!div class="mx-tdBreakAll"] 
> |Iterations| Areas |
> |-------------|----------| 
> |<img src="media/iterations/project-configuration-iterations.png" alt="Default iterations, Scrum process" /> | <img src="media/areas/project-configuration-areas.png" alt="A set of sample area paths" /> | 


[!INCLUDE [note-delete-area-paths](../../boards/includes/note-delete-area-paths.md)]

## Define and assign area paths

If you're new to managing projects and teams, follow these steps to configure your project and teams:

1. **Determine area paths**: Identify the number and names of **Area Paths** needed to categorize your work. At a minimum, add one area path for each team you define.
2. **Decide on teams**: Decide on the number and names of teams you want to support. For more information, see [About teams and Agile tools](about-teams-and-settings.md).
3. **Define area paths**: Open **Project settings > Project configuration** and define the area paths to support steps 1 and 2 at the project level. Follow these steps: [Open Project Settings, Project configuration](set-area-paths.md#open-project-settings) and [Add area paths](set-area-paths.md#add-areas).
4. **Define teams**: Define the teams needed to support step 2. For more information, see [Add a team, move from one default team to several teams](add-teams.md).
5. **Configure team settings**: [Open the team configuration](set-area-paths.md#open-team-settings) and [assign the default and other area paths](set-area-paths.md#team-area-paths) to each team.
6. **Assign work items**: Assign work items to the area paths you defined. Use [bulk modify](../../boards/backlogs/bulk-modify-work-items.md) to modify several work items at once.
 
> [!NOTE]
> You can define up to 10,000 **Area Paths** per project and assign up to 300 **Area Paths** to a single team. For more information, see [Work tracking, process, and project limits](work/object-limits.md).
> 
> You can assign the same **Area Path** to more than one team, but this can cause problems if two teams claim ownership over the same set of work items. For more information, see [Limitations of multi-team board views](../../boards/boards/kanban-overview.md). 

You can do the following actions at any time: 

- Add more child nodes
- Rename an area path (except the root area path)
- Move a child node under another node 
- Delete a child node 
- Rename a team 
- Change the area path assignments made to a team

For more information, see [Configure a hierarchy of teams](../../boards/plans/configure-hierarchical-teams.md). 

## How many areas should a team define?

Add areas to support your team's traceability and security requirements. Use areas to represent logical or physical components, and create child areas to represent specific features.

Add areas when you need to do any of the following tasks:
- Filter queries based on a product or feature area
- Organize or group work items by team or subteams
- Restrict access to work items based on their area

Each team can create a hierarchy of areas to organize their backlog items, user stories, requirements, tasks, and bugs.

Avoid creating an overly complex area structure. While you can use areas to partition permissions on work items, complex trees require significant overhead for permission management. Duplicating the structure and permissions in other projects can become cumbersome.


## Define and assign iteration paths

Follow these steps to configure **Iteration Paths** for your project and teams:

1. Define the area paths and teams using the guidance in [Define area paths and assign to a team](set-area-paths.md#get-started).
2. Determine the length of the iteration you want to support. We recommend that all teams use the same sprint cadence.
3. Decide whether you want a flat structure or a hierarchy of sprints and releases.
4. Open **Project settings > Project configuration** and define the iteration paths to support steps 2 and 3 at the project level. Follow these steps: [Open Project Settings, Project configuration](set-iteration-paths-sprints.md#open-project-settings) and [Add iterations and set iteration dates](set-iteration-paths-sprints.md#add-iterations-and-set-iteration-dates.
5. Open the team configuration and assign the default, backlog, and other iteration paths to each team. Follow these steps: [Open team settings](set-iteration-paths-sprints.md#list-team-iterations) and [Set team default iteration paths](set-iteration-paths-sprints.md#list-team-iterations).
6. Each team should assign an iteration path to their work items that falls under the **Backlog iteration** path. These work items appear on their product backlogs and boards. Use [bulk modify](../../boards/backlogs/bulk-modify-work-items.md) to modify several work items at once. See also [Assign backlog items to a sprint](../../boards/sprints/assign-work-sprint.md).

> [!NOTE]  
> You can define up to 10,000 **Iteration Paths** per project and assign up to 300 **Iteration Paths** to a single team. For more information, see [Work tracking, process, and project limits](work/object-limits.md).

You can do the following actions at any time:
 
- Add more child iteration nodes
- Rename an iteration path (except the root path)
- Move a child iteration path under another node 
- Delete a child iteration path 
- Change the default and selected iteration paths assigned to a team

## How many iterations should a team define?

Define as many child iterations as needed to reflect your project lifecycle. These paths represent a series of events, such as sprints, prebeta and beta results, and other release milestones. Teams usually leave work items assigned to the team's default iteration if they aren't yet scheduled for work or release.
Define as many child iterations as needed to reflect your project lifecycle. These iterations can represent various events, such as sprints, pre-beta and beta phases, and other release milestones. Teams typically leave work items assigned to the team's default iteration if they aren't yet scheduled for work or release.

Add iterations to support the following requirements:
* Define sprints for your Scrum teams to [plan and execute their sprints](../../boards/sprints/assign-work-sprint.md)
* Set up more complex multi-release and sprint cycles
* Filter queries based on sprints, milestones, or cycle time for your project
* Support future work that isn't ready to be assigned to a target release cycle.

In the following example, Beta 1, Beta 2, Release 1.0, and Release 2.0 are defined for the MyApplication project.

<img src="media/areas/ALM_CW_IterationHierarchy-Before.png" alt="Screenshot of Flat iteration hierarchy." />  

As you create the backlog of product features and tasks, assign them to milestones based on when you expect the team to complete them. As your needs change, you can add events under each major milestone to reflect how your team schedules and manages its work.

For example, the Beta 1 iteration now contains three child nodes, one for each sprint in the Beta 1 time period.

<img src="media/areas/ALM_CW_IterationHierarchy-After.png" alt="Screenshot of Hierarchical Iteration Hierarchy." />  

Iterations don't enforce any rules. For example, you can assign a task to an iteration without closing or completing it during that iteration. At the end of an iteration, identify all work items that remain active or open and take appropriate action. You can move them to a different iteration or return them to the backlog.

You can run queries to find features and work items that are assigned to a specific iteration or a set of iterations and then bulk modify the work items to change their iteration paths. For more information, see [Query by date or current iteration](../../boards/queries/query-by-date-or-current-iteration.md) 


## Naming restrictions 

The **Area Path** and **Iteration Path** fields, [data type=TreePath](../../boards/work-items/work-item-fields.md), consist of multiple node items separated by the backslash (&#92;) character. Minimize the names of nodes and make sure you conform to the following restrictions when you're adding child nodes.

[!INCLUDE [area-iteration-paths](includes/name-restrictions/area-iteration-paths.md)] 


## Related articles 
 
- [Define area paths and assign to a team](set-area-paths.md)
- [Define iteration paths and configure team iterations](set-iteration-paths-sprints.md)
- [Use Agile tools and define sprints](../../boards/sprints/define-sprints.md)
- [Query by date or current iteration](../../boards/queries/query-by-date-or-current-iteration.md)
