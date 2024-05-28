---
title: About pipeline security roles
titleSuffix: Azure DevOps
description: Learn about security roles and where they're used to manage selected pipeline permissions. 
ms.subservice: azure-devops-security
ms.author: chcomley
author: chcomley
ms.topic: conceptual
monikerRange: '<= azure-devops'
ms.date: 10/11/2021
---

# Pipeline security roles

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

<a id="security-roles"></a>

Security for both build and release pipelines, and task groups, is managed using [task-based permissions](about-permissions.md). Several pipeline resources have their security managed through role-based permissions. Roles can be assigned to users or groups. Each role determines the set of operations that a user can perform, as described in the following sections.

Role-based permissions are set for all resources of a specific type in a project or in an organization or collection. Individual resources inherit the permissions from the project-level settings. Inheritance can be turned off for an individual artifact if necessary.


## Default role assignments

By default, all contributors in a project are members of the User role on each hosted queue. This role allows every contributor in a project to author and run build and release pipelines using hosted queues.

<a id="agent-queue-security-roles"></a>

## Agent pool security roles, project-level

You [add users to the following security roles](../../pipelines/policies/agent-pool-permissions.md) from the project-level admin context, **Agent Pools** page. For information on adding and managing agent pools, see  [Agent pools](../../pipelines/agents/pools-queues.md).    

[!INCLUDE [temp](includes/agent-queue-roles.md)]

<a id="agent-pool-security-roles"></a>

## Agent pool security roles, organization or collection-level

You [add users to the following security roles](../../pipelines/policies/agent-pool-permissions.md) from the **Organization settings** or collection-level admin settings, **Agent Pools** page. For information on adding and managing agent pools, see [Agent pools](../../pipelines/agents/pools-queues.md). 

[!INCLUDE [temp](includes/agent-pool-roles.md)]

## Deployment group security roles

You [add users to the following roles](../../pipelines/policies/deployment-group-permissions.md) from **Pipelines** or **Build and Release**. For information on adding and managing deployment groups, see [Deployment groups](../../pipelines/release/deployment-groups/index.md). 

[!INCLUDE [temp](includes/deployment-group-roles.md)]

## Deployment pool security roles

You [add users to the following roles](../../pipelines/policies/deployment-group-permissions.md) from the collection-level admin context, **Deployment Pools** page. To create and manage deployment pools, see [Deployment groups](../../pipelines/release/deployment-groups/index.md).   

[!INCLUDE [temp](includes/deployment-pool-roles.md)]

<a id="library-roles"></a> 

## Library asset security roles: Variable groups and secure files

You [add users to a library role](../../pipelines/policies/library-permissions.md) from **Pipelines** or **Build and Release**. To learn more about using these library assets, see [Variable groups](../../pipelines/library/variable-groups.md) and [Secure files](../../pipelines/library/secure-files.md).

[!INCLUDE [temp](includes/library-roles.md)]

<a id="service-endpoint-roles"></a> 

## Service connection security roles

You [add users to the following roles](../../pipelines/policies/service-connection-permissions.md) from the project-level admin context, **Services** page. To create and manage these resources, see [Service connections for build and release](../../pipelines/library/service-endpoints.md).

[!INCLUDE [temp](includes/service-endpoint-roles.md)]

## Related articles

- [Get started with permissions, access, and security groups](about-permissions.md)
- [Permissions and groups reference](permissions.md)
- [Add or delete users using Microsoft Entra ID](/azure/active-directory/fundamentals/add-users-azure-active-directory)
 
