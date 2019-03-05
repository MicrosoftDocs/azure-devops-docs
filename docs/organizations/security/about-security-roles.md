---
title: Understand how security roles work
titleSuffix: Azure DevOps
description: Learn about security roles and where they are used to manage permissions to select features and functions of Azure DevOps
ms.technology: devops-security
ms.assetid: 
toc: show
ms.prod: devops
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
monikerRange: '>= tfs-2015'
ms.date: 11/19/2018
---

# About security roles

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

<a id="security-roles" />
While the majority of features and functional tasks are managed by [individual permissions](about-permissions.md), there are several artifacts and features that the system manages through role-based permissions. You can add users or groups to a role. Each role determines the set of operations that the user can perform as described in the following sections.  

Many role-based permissions can be set for all artifacts of a specific type in a project, or for the project or collection and then selectively inherited for a specific artifact. Role memberships for individual items  automatically inherit those set for the project or collection. If required, you can turn off Inheritance for a specific artifact.

<!---
You manage the security for the following artifacts and features by adding a user or group to the roles which are described in the following sections. 

[Agent queues](../../pipelines/policies/set-permissions.md)<br/>- [Agent pools](../../pipelines/policies/set-permissions.md)<br/>- [Deployment groups](../../pipelines/policies/set-permissions.md#deployment-group)<br/>- [Deployment pools](../../pipelines/policies/set-permissions.md#deployment-group) - [Secure files](../../pipelines/policies/set-permissions.md#library)<br/>- [Service connections](../../pipelines/policies/set-permissions.md)<br/>- [Variable groups](../../pipelines/policies/set-permissions.md#library)

 
## Default role assignments

By default, all contributors in a project are members of the User role on each hosted queue.  This allows every contributor in a project to author and run build and release pipelines using hosted queues.
-->

## Agent queue security roles

You [add users to the following security roles](../../pipelines/policies/set-permissions.md) from the project-level admin context, **Agent Queues** page. For information on adding and managing agent queues, see  [Agent pools and queues](../../pipelines/agents/pools-queues.md).    

[!INCLUDE [temp](_shared/agent-queue-roles.md)]

## Agent pool security roles

You [add users to the following security roles](../../pipelines/policies/set-permissions.md) from the collection-level admin context, **Agent Pools** page. For information on adding and managing agent pools, see [Agent pools and queues](../../pipelines/agents/pools-queues.md). 

[!INCLUDE [temp](_shared/agent-pool-roles.md)]

## Deployment group security roles

You [add users to the following roles](../../pipelines/policies/set-permissions.md#library) from **Pipelines** or **Build and Release**.  For information on adding and managing deployment groups, see [Deployment groups](/azure/devops/pipelines/release/deployment-groups). 

[!INCLUDE [temp](_shared/deployment-group-roles.md)]

## Deployment pool security roles

You [add users to the following roles](../../pipelines/policies/set-permissions.md) from the collection-level admin context, **Deployment Pools** page. To create and manage deployment pools, see [Deployment groups](/azure/devops/pipelines/release/deployment-groups).   

[!INCLUDE [temp](_shared/deployment-pool-roles.md)]

## Library asset security roles: Variable groups and secure files

You [add users to a library role](../../pipelines/policies/set-permissions.md#library) from **Pipelines** or **Build and Release**. To learn more about using these library assets, see [Variable groups](../../pipelines/library/variable-groups.md) and [Secure files](../../pipelines/library/secure-files.md)

[!INCLUDE [temp](_shared/library-roles.md)]

## Service connection security roles

You [add users to the following roles](../../pipelines/policies/set-permissions.md) from the project-level admin context, **Services** page. To create and manage these resources, see [Service connections for build and release](../../pipelines/library/service-endpoints.md).

[!INCLUDE [temp](_shared/service-endpoint-roles.md)]

## Marketplace extensions

The **Manager** role is the only role used to manage the security of Marketplace extensions. Members of the Manager role can install extensions and respond to requests for extensions to be installed. 

To learn more, see [Grant permissions to manage extensions](../../marketplace/how-to/grant-permissions.md).

## Team administrator role

For [each team that you add](../../organizations/settings/add-teams.md), you can assign one or more team members as administrators. The team admin role isn't a group with a set of defined permissions. Instead, the team admin role is tasked with managing team assets.

For details, see [Manage teams and configure team tools](../settings/manage-teams.md).

> [!NOTE]
> Members of the Project Administrators or Project Collection Administrators groups can manage all team admin areas for all teams.

## Related articles

- [About permissions and groups](about-permissions.md)
- [Permissions and groups reference](permissions.md)
- [Access with Azure Active Directory (Azure AD)](../accounts/add-users-to-azure-ad.md). 
 
 
