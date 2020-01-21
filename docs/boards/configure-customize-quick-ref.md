---
title: Index to configuration & customization
titleSuffix: Azure Boards
description: Find how to customize or configure Azure Boards
ms.technology: devops-agile
ms.prod: devops
ms.topic: overview
ms.assetid: 
ms.manager: mijacobs
ms.author: kaelli
author: KathrynEE
monikerRange: '>= tfs-2013'
ms.date: 01/09/2020
---



# Configuration and customization of Azure Boards 

[!INCLUDE [temp](_shared/version-vsts-tfs-all-versions.md)]

This article provides guidance and links to all items that you can customize that impact work tracking tools. 


If you're just getting started as a Project Administrator, see [Get started as an administrator](../user-guide/project-admin-tutorial.md).

## What to consider?

When configuring or customizing work tracking tools, you'll want to consider the tools your teams use and how they will use them. Whether your teams follow Scrum, Kanban, or some combination of Scrumban. The following table summarizes the most common configurations and customizations you can make and the Azure Boards tools that are impacted by them. 
 
[!INCLUDE [temp](includes/config-and-customize.md)]

<!---

gannt chart
workflow customizations 

--> 


### Work tracking options and recommended usage  

One of the main choices teams have is choosing the work item types they use to track their work. The main choices and recommended usage are described as follows.  

|Work item types | Recommended usage  |
|-----------|----------------
| Tasks only | Not recommended as there is no way to quickly enter new tasks in a backlog nor prioritize a backlog |
| Requirements with child-dependent tasks | For teams that follow Scrum methods and want to track time associated with work 
| Requirements only | For teams that follow Kanban or Scrumban methods, estimate work using Story Points, Effort, or Size,  and don't estimate or track time associated with work | 
| Requirements grouped under portfolio work item types, such as epics and features | For organizations with several teams that want to view rollups and calendar views associated with multiple teams | 

Tracking work using tasks, supports work tracking ...   

If you don't plan on tracking remaining work and using the Sprint tools such as Capacity planning and sprint burndown charts based on remaining work, using tasks as the primary 

Combination of task, requirement, and portfolio .. 

The pros and cons of each option is summarized in the following table. 


<table width="100%">
<tbody valign="top">
<tr>
<th width="14%">Option</th>
<th width="43%">Pros</th>
<th width="43%">Cons</th>
</tr>
<tr>
<td>Requirements with child-dependent tasks</td>
<td>
<ul>
<li>Supports Scrum methods</li>
<li>Plan sprints using sprint capacity charts and sprint  </li>
<li>Plan sprints using Backlog Planning tool   </li>
<li>Track estimated and remaining work </li>
<li>Monitor sprint burndown based on remaining work such as hours or days </li>
<li>Update task status using sprint Taskboard  </li>
<li>Conduct daily scrums using sprint Taskboard </li>
</ul>
</td>
<td>
<ul>
<li>No supported calendar view tools </li>
<li>No cross team views </li>
<li>No support for any portfolio planning tools, except Dependency Tracker </li>
</ul>
</td>
</tr>




<tr>
<td>Requirements only, such as user stories (Agile), issues (Basic), product backlog items (Scrum), requirements (CMMI)
</td>
<td>
<ul>
<li>Supports Kanban and Scrumban methods </li>
<li>Quickly define and prioritize backlog items </li>
<li>Estimate work based on Story Points, Effort, or Size  </li>
<li>Forecast sprints using team velocity </li>
<li>Monitor sprint burndown based on Story Points, Effort, or Size or work item count </li>
</ul>
</td>
<td>
<ul>
<li>No supported calendar view tools </li>
<li>No cross team views </li>
<li>No support for any portfolio planning tools </li>
</ul>
</td>
</tr>

<tr>
<td>Requirements grouped under portfolio work item types, such as epics and features
</td>
<td>
<ul>
<li>Plan sprints using sprint capacity charts </li>
<li>Track estimated and remaining work </li>
<li>Monitor sprint burndown based on remaining work such as hours or days </li>
</ul>
</td>
<td>
<ul>
<li>No supported calendar view tools </li>
<li>No cross team views </li>
<li>No support for any portfolio planning tools </li>
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



- Content development team of 50 writers uses tasks to track their work 
	- 

- Support operations team 


-  


## Area paths, product teams, and delivery plans 

Area paths are used to group work items by product, feature, or business areas and to support teams responsible for work assigned to those areas. You can define a hierarchical set of area paths or a flat set. Typically, you define a hierarchical set of area paths when you want to support a business hierarchy that wants to track progress of several teams.  


## Iteration paths, sprints, releases, and versioning

Iteration paths support Scrum and Scrumban processes where work is assigned to a set time period. 

To use the following tools, teams must subscribe to iteration paths and set sprint dates. 

- Sprint backlogs
- Taskboard
- Delivery plans
- Feature timeline 

And other timeline or calendar view tools. Gannt 


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

