---
title: About pipeline security roles
titleSuffix: Azure DevOps
description: Learn about security roles and where they are used to manage select pipeline permissions 
ms.technology: devops-security
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
monikerRange: '>= tfs-2015'
ms.date: 12/10/2020
---

# About pipeline security roles

[!INCLUDE [temp](../../includes/version-ts-tfs-2015-2016.md)]

<a id="security-roles" />

While the majority of features and functional tasks are managed by [individual permissions](about-permissions.md), there are several artifacts and features that the system manages through role-based permissions. You can add users or groups to a role. Each role determines the set of operations that the user can perform as described in the following sections.  

Many role-based permissions can be set for all artifacts of a specific type in a project, or for the project or collection and then selectively inherited for a specific artifact. Role memberships for individual items automatically inherit those set for the project or collection. If required, you can turn off Inheritance for a specific artifact.


## Default role assignments

By default, all contributors in a project are members of the User role on each hosted queue.  This allows every contributor in a project to author and run build and release pipelines using hosted queues.

<a id="agent-queue-security-roles" />

## Agent pool security roles, project-level

You [add users to the following security roles](../../pipelines/policies/set-permissions.md) from the project-level admin context, **Agent Pools** page. For information on adding and managing agent pools, see  [Agent pools](../../pipelines/agents/pools-queues.md).    

[!INCLUDE [temp](includes/agent-queue-roles.md)]

<a id="agent-pool-security-roles" />

## Agent pool security roles, organization or collection-level

You [add users to the following security roles](../../pipelines/policies/set-permissions.md) from the **Organization settings** or collection-level admin settings, **Agent Pools** page. For information on adding and managing agent pools, see [Agent pools](../../pipelines/agents/pools-queues.md). 

[!INCLUDE [temp](includes/agent-pool-roles.md)]

## Deployment group security roles

You [add users to the following roles](../../pipelines/policies/set-permissions.md) from **Pipelines** or **Build and Release**.  For information on adding and managing deployment groups, see [Deployment groups](../../pipelines/release/deployment-groups/index.md). 

[!INCLUDE [temp](includes/deployment-group-roles.md)]

## Deployment pool security roles

You [add users to the following roles](../../pipelines/policies/set-permissions.md) from the collection-level admin context, **Deployment Pools** page. To create and manage deployment pools, see [Deployment groups](../../pipelines/release/deployment-groups/index.md).   

[!INCLUDE [temp](includes/deployment-pool-roles.md)]

<a id="library-roles" /> 

## Library asset security roles: Variable groups and secure files

You [add users to a library role](../../pipelines/policies/set-permissions.md) from **Pipelines** or **Build and Release**. To learn more about using these library assets, see [Variable groups](../../pipelines/library/variable-groups.md) and [Secure files](../../pipelines/library/secure-files.md)

[!INCLUDE [temp](includes/library-roles.md)]

<a id="service-endpoint-roles" /> 

## Service connection security roles

You [add users to the following roles](../../pipelines/policies/set-permissions.md) from the project-level admin context, **Services** page. To create and manage these resources, see [Service connections for build and release](../../pipelines/library/service-endpoints.md).

[!INCLUDE [temp](includes/service-endpoint-roles.md)]

## Related articles

- [Get started with permissions, access, and security groups](about-permissions.md)
- [Permissions and groups reference](permissions.md)
- [Add or delete users using Azure Active Directory](/azure/active-directory/fundamentals/add-users-azure-active-directory)
 