---
title: Understand how security roles work
titleSuffix: VSTS & TFS
description: Learn about security roles and where they are are used to manage permissions to select features and functions of TFS and VSTS
ms.technology: devops-security
ms.assetid: 
toc: show
ms.prod: devops
ms.manager: douge
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
ms.date: 02/12/2018
monikerRange: '>= tfs-2015'
---

# About security roles

**VSTS | TFS 2018 | TFS 2017 | TFS 2015**

<a id="security-roles" />
While the majority of features and functional tasks are managed by [individual permissions](about-permissions.md), there are several artifacts and features that the system manages through role-based permissions. You can add users or groups to a role. Each role determines the set of operations that the user can perform as described in the following sections.  

Many role-based permissions can be set for all artifacts of a specific type in a team project, or for the project or collection and then selectively inherited for a specific artifact. Role memberships for individual items  automatically inherit those set for the project or collection. If required, you can turn off Inheritance for a specific artifact.

<!---
You manage the security for the following artifacts and features by adding a user or group to the roles which are described in the following sections. 

[Agent queues](../pipelines/policies/set-permissions.md)<br/>- [Agent pools](../pipelines/policies/set-permissions.md)<br/>- [Deployment groups](../pipelines/policies/set-permissions.md#deployment-group)<br/>- [Deployment pools](../pipelines/policies/set-permissions.md#deployment-group) - [Secure files](../pipelines/policies/set-permissions.md#library)<br/>- [Service endpoints](../pipelines/policies/set-permissions.md)<br/>- [Variable groups](../pipelines/policies/set-permissions.md#library)

 
##Default role assignments

By default, all contributors in a team project are members of the User role on each hosted queue.  This allows every contributor in a team project to author and run build and release definitions using hosted queues.
-->

## Agent queue security roles

You [add users to the following security roles](../pipelines/policies/set-permissions.md) from the project-level admin context, **Agent Queues** page. For information on adding and managing agent queues, see  [Agent pools and queues](../pipelines/agents/pools-queues.md).    

[!INCLUDE [temp](_shared/agent-queue-roles.md)]

## Agent pool security roles

You [add users to the following security roles](../pipelines/policies/set-permissions.md) from the collection-level admin context, **Agent Pools** page. For information on adding and managing agent pools, see [Agent pools and queues](../pipelines/agents/pools-queues.md). 

[!INCLUDE [temp](_shared/agent-pool-roles.md)]

## Deployment group security roles

You [add users to the following roles](../pipelines/policies/set-permissions.md#library) from the user context, **Build and Release** hub.  For information on adding and managing deployment groups, see [Deployment groups](/vsts/pipelines/release/deployment-groups). 

[!INCLUDE [temp](_shared/deployment-group-roles.md)]

## Deployment pool security roles

You [add users to the following roles](../pipelines/policies/set-permissions.md) from the collection-level admin context, **Deployment Pools** page. To create and manage deployment pools, see [Deployment groups](/vsts/pipelines/release/deployment-groups).   

[!INCLUDE [temp](_shared/deployment-pool-roles.md)]

## Library asset security roles: Variable groups and secure files

You [add users to a library role](../pipelines/policies/set-permissions.md#library) from the user context, **Build and Release** hub. To learn more about using these library assets, see [Variable groups](../pipelines/library/variable-groups.md) and [Secure files](../pipelines/library/secure-files.md)

[!INCLUDE [temp](_shared/library-roles.md)]

## Service endpoint security roles

You [add users to the following roles](../pipelines/policies/set-permissions.md) from the project-level admin context, **Services** page. To create and manage these resources, see [Service endpoints for build and release](../pipelines/library/service-endpoints.md).

[!INCLUDE [temp](_shared/service-endpoint-roles.md)]

## Marketplace extensions

The **Manager** role is the only role used to manage the security of Marketplace extensions. Members of the Manager role can install extensions and respond to requests for extensions to be installed. 

To learn more, see [Grant permissions to manage extensions](../marketplace/how-to/grant-permissions.md).

## Team administrator role

For [each team that you add](../work/scale/multiple-teams.md), you can assign one or more team members as administrators. The team admin role isn't a group with a set of defined permissions. Instead, the team admin role is tasked with managing the following team assets.

- **Create and manage team alerts**  
	Can add and modify alerts so that the team can receive email notifications as changes occur to work items, code reviews, source control files, and builds. For details, see [Manage team alerts](../collaborate/manage-team-notifications.md).	 
- <a id="team-rooms" />**Select team area paths**   
	Can select the default area path(s) associated with the team. These settings affect a number of Agile tools available to the team. For details, see [Set team defaults](../work/scale/set-team-defaults.md).	
- **Select team sprints** 
	Can select the default area path(s) associated with the team. These settings affect a number of Agile tools available to the team. For details, see [Set team defaults](../work/scale/set-team-defaults.md). 
- **Configure team backlogs**   
	Can choose which backlog levels are active for a team. For example, a feature team may choose to show only the product backlog and a management team may choose to show only the feature and epic backlogs. For details, see [Select backlog levels for your team](../work/customize/select-backlog-navigation-levels.md).  
- **Customize the Kanban board**   
	Can fully customize the team's Kanban boards associate with the product and portfolio backlogs. This includes the following elements:
	* **Cards**: [Fields](../work/customize/customize-cards.md#kanban-board), [Styles](../work/customize/customize-cards.md#style-rule), [Tag colors](../work/customize/customize-cards.md#color-tags), [Annotations](../work/customize/customize-cards.md#annotations), [Tests](../work/customize/customize-cards.md#tests)  
	* **Board**: [Columns](../work/kanban/add-columns.md), [WIP limits](../work/kanban/wip-limits.md), [Split columns](../work/kanban/split-columns.md),    [Swimlanes](../work/kanban/expedite-work.md), [Card reordering](../work/customize/reorder-cards.md), [Definition of Done](../work/kanban/definition-of-done.md)
	* **Charts**: [Cumulative flow](../report/dashboards/cumulative-flow.md#configure) 
- **Manage team dashboards**  
	Can add, configure, and manage permissions for team dashboards. For details, see [Add and manage dashboards](../report/dashboards/dashboard-permissions.md#set-permissions).  
- **Set working days off**    	
	Sprint planning and tracking tools automatically consider days off when calculating capacity and sprint burn down. Team admins can choose which days are non-working days through the team's Settings dialog. For details, see [Set working days](../work/customize/set-working-days.md).
- **Show bugs on backlogs and boards**   
	Team admins can choose whether bugs are treated similar to user stories and requirements or as tasks. For details, see [Set your team's preferences for tracking bugs](../work/customize/show-bugs-on-backlog.md).

> [!NOTE]
> Members of the Project Administrators or Project Collection Administrators groups can manage all team admin areas for all teams.

## Related notes

- [About permissions and groups](about-permissions.md)
- [Permissions and groups reference](permissions.md)
- [Access with Azure Active Directory (Azure AD)](../accounts/add-users-to-aad.md). 
 
 
