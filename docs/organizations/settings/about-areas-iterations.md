---
title: How are area and iteration paths used?
titleSuffix: Azure DevOps
description: Understand how areas and iterations are used in Azure DevOps
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
monikerRange: '>= tfs-2013'
ms.date: 11/19/2018
---


# About area and iteration paths (aka sprints) 

[!INCLUDE [temp](../../boards/_shared/version-vsts-tfs-all-versions.md)]

Area paths allow you to group work items by team, product, or feature area. Whereas, iteration paths allow you to group work into sprints, milestones, or other event-specific or time-related period. Both these fields allow you to define a hierarchy of paths. 

You define area and iteration paths for a project. Teams can then choose which paths are used to support their backlog and other Agile tools. To understand how Agile tools use area and iteration paths, see [Agile tools that rely on areas and iterations](about-teams-and-settings.md).

The areas and iterations you see depend on the process you used to create your project. Here we show the defaults defined for the Scrum process. No dates are set. You set dates to correspond to your sprint or release schedules.

> [!div class="mx-tdBreakAll"] 
> |Iterations| Areas |
> |-------------|----------| 
> |<img src="_img/areas/areas-iterations-iterations-intro-ts-2016.png" alt="Default iterations, Scrum process" style="border: 1px solid #C3C3C3;" /> | <img src="_img/areas/areas-iterations-areas-intro-ts-2016.png" alt="A set of sample area paths" style="border: 1px solid #C3C3C3;" /> | 



<a id="area-path-guidance" />
## End-to-end sequence to define and assign Area Paths

If you are new to managing projects and teams, the most straight forward sequence for configuring your project and teams is as follows: 
1. Determine the number and names of Area Paths that you want to support to categorize your work. At a minimum, you'll want to add one Area Path for each team that you'll define. 
2. Determine the number and names of teams you want to support. For guidance, review [About teams and Agile tools](about-teams-and-settings.md).
3. Open **Project settings>Project configuration** and define the Area Paths to support steps 1 and 2 at the project level. Follow the steps provided later in this article: [Open Project Settings, Project configuration](set-area-paths.md#open-project-settings) and [Add area paths](set-area-paths.md#add-areas).
4. Define the teams you need to support step 2. For guidance, see [Add a team, move from one default team to several teams](add-teams.md).  
5. Open the team configuration and assign the default and additional Area Path(s) to each team. Follow the steps provided later in this article: [Open team settings](set-area-paths.md#open-team-settings) and [Set team default area path(s)](set-area-paths.md#team-area-paths).
6. Assign the Area Path of work items to an area path you defined. Use [bulk modify](../../boards/backlogs/bulk-modify-work-items.md) to modify several work items at once.
 
::: moniker range=">= tfs-2017"
> [!NOTE] 
> While you can assign the same area path to more than one team, this can cause problems if two teams claim ownership over the same set of work items. To learn more, see [About boards and Kanban, Limitations of multi-team Kanban board views](../../boards/boards/kanban-overview.md#limits-multi-team).  
::: moniker-end

As needed, you can perform the following actions at any time: 

- Add additional child nodes
- Rename an Area Path (except the root area path)
- Move a child node under another node 
- Delete a child node 
- Rename a team 
- Change the Area Path assignments made to a team


## How many areas should a team define?

You add areas to support your team's trace-ability and security requirements. Use areas to represent logical or physical components, and then create child areas to represent specific features.  

Add areas when you have these requirements: 
*	Filter queries based on a product or feature area 
*	Organize or group work items by team or sub-teams  
*	Restrict access to work items based on their area.  

Each team can create a hierarchy of areas under which the team can organize their backlog items, user stories, requirements, tasks, and bugs.

Avoid creating an area structure that is too complex. You can create areas to partition permissions on work items, but complex trees require significant overhead for permission management. You might find that it is too much work to duplicate the structure and permissions in other projects.



<a id="area-path-guidance" />
## End-to-end sequence to define and assign Iteration Paths

Use the following guidance to configure Iteration Paths (aka sprints) for your project and teams:  

0. First, define the Area Paths and teams following the guidance provided in [Define area paths and assign to a team](set-area-paths.md#guidance).  
0. Determine the length of the iteration you want to support. Recommended practice is to have all teams use the same sprint cadence.  
0. Determine if you want a flat structure or hierarchy of sprints and releases.
0. Open **Project settings>Project configuration** and define the Iteration Paths to support steps 2 and 3 at the project level. Follow the steps provided later in this article: [Open Project Settings, Project configuration](set-iteration-paths-sprints.md#open-project-settings) and [Add iterations and set iteration dates](set-iteration-paths-sprints.md#iterations). 
0. Open the team configuration and assign the default and additional Area Path(s) to each team. Follow the steps provided later in this article: [Open team settings](set-iteration-paths-sprints.md#open-team-settings) and [Set team default iteration path(s)](set-iteration-paths-sprints.md#activate).
0. Each team should assign the default Iteration Path they selected to their work items. This is needed in order for those work items to show up on their product backlogs and boards. Use [bulk modify](../../boards/backlogs/bulk-modify-work-items.md) to modify several work items at once. See also [Assign backlog items to a sprint](../../boards/sprints/assign-work-sprint.md). 

As needed, you can perform the following actions at any time: 
- Add additional child iteration nodes
- Rename an Iteration Path (except the root path)
- Move a child Iteration Path under another node 
- Delete a child Iteration Path 
- Change the default and selected Iteration Paths assigned to a team

## How many iterations should a team define?

You define as many child iterations as you need to reflect your project lifecycle. These paths represent a series of events, such as sprints, pre-beta and beta deliverables, and other release milestones. Teams typically leave work items assigned to the team's default iteration if they are not yet scheduled for work or for a release.  

Add iterations to support these requirements:  
* Define sprints your Scrum teams use to [plan and execute their sprints](../../boards/sprints/assign-work-sprint.md)
* Set up more complex multi-release and sprint cycles
* Filter queries based on sprints, milestones, or cycle time for your project 
* Support future work that you're not ready to assign to a target release cycle.  

In the following example, Beta 1, Beta 2, Release 1.0, and Release 2.0 are defined for the MyApplication project.  

<img src="_img/areas/ALM_CW_IterationHierarchy-Before.png" alt="Flat iteration hierarchy" style="border: 1px solid #C3C3C3;" />  

As you create the backlog of product features and tasks, you can start to assign them to the milestones by which you expect the team to finish the features and tasks.
As your needs change, you can add events under each major milestone that reflect how your team schedules and manages its work.  

As the following example shows, the Beta 1 iteration now contains three child nodes, one for each sprint in the Beta 1 time period.  

<img src="_img/areas/ALM_CW_IterationHierarchy-After.png" alt="Hierarchical Iteration Hierarchy" style="border: 1px solid #C3C3C3;" />  

Iterations do not enforce any rules. For example, you can assign a task to an iteration but not close or complete it during that iteration. At the end of an iteration, you should find all work items that remain active or have not been closed for that iteration and take appropriate action. You can, for example, move them to a different iteration or return them to the backlog.


<a name="name-restrictions"></a>
## Naming restrictions 

The **Area Path** and **Iteration Path** fields, [data type=TreePath](../../boards/work-items/work-item-fields.md), consist of multiple node items which are separated by the backslash (&#92;) character. We recommend that you minimize the names of nodes, and make sure that you conform to the following restrictions when adding child nodes:

> [!div class="mx-tdCol2BreakAll"]  
> | Restriction type                 | Restriction       |  
> | ------------------------- | ---------------------- |  
> | Node length | Must not contain more than 255 characters | 
> | Special characters for nodes | Must not contain Unicode control characters<br/>Must not contain any of the following characters: \ / $ ? * : " & < # % + <br/>Must not contain characters that the [local file system prohibits](https://msdn.microsoft.com/library/aa365247.aspx). |
> | Reserved names | Must contain more than a period (.) or two periods (..)<br/>Must not be a [system-reserved name](https://msdn.microsoft.com/library/aa365247.aspx) such as PRN, COM1, COM2, COM3, COM4, COM5, COM6, COM7, COM8, COM9, COM10, LPT1, LPT2, LPT3, LPT4, LPT5, LPT6, LPT7, LPT8, LPT9, NUL, CON, or AUX<br/>| 
> | Path length | Must contain fewer than 4,000 Unicode characters | 
> | Path hierarchy depth | Must be fewer than 14 levels deep | 

## Related articles 
As you can see, areas and iterations play a major role in supporting Agile tools and managing work items. You can learn more about working with these fields from these topics: 
 
- [Define area paths and assign to a team](set-area-paths.md)
- [Define iteration paths (aka sprints) and configure team iterations](set-iteration-paths-sprints.md)
- [Agile tools and sprint definitions](../../boards/sprints/define-sprints.md)  
- [Query by date or current iteration](../../boards/queries/query-by-date-or-current-iteration.md)  


<a name="export"></a>
### Export tree structures  

You can't export the structure of tree paths for one project to use with another  project.  

::: moniker range=">= tfs-2013 <= tfs-2018"
<a name="field-rules"></a>
### Supported field rules  

You can [specify only a small subset of rules](../../reference/xml/apply-rule-work-item-field.md#system), such as ```HELPTEXT``` and ```READONLY``` to System.XXX fields. 

<a name="team-field"></a>
### Team field versus team area path  
If your organization has several teams that work from a common backlog and across many product areas, you might want to change how teams are configured. By [adding a custom field to represent teams](../../reference/use-team-fields-instead-area-paths.md) in your organization, you can reconfigure the agile planning tools and pages to support your teams and decouple assignment to teams and area paths. 

::: moniker-end
 
