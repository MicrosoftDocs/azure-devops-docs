---
title: About pipeline security roles
titleSuffix: Azure DevOps
description: Discover how security roles are utilized to manage specific pipeline permissions effectively.
ms.subservice: azure-devops-security
ms.author: chcomley
author: chcomley
ms.topic: conceptual
monikerRange: '<= azure-devops'
ai-usage: ai-assisted
ms.date: 08/21/2024
---

# About pipeline security roles

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

<a id="security-roles"></a>

Security for build and release pipelines, and task groups, is managed using [task-based permissions](about-permissions.md). Several pipeline resources use role-based permissions, which can be assigned to users or groups. Each role defines the operations a user can perform.

Role-based permissions apply to all resources of a specific type within a project, organization, or collection. Individual resources inherit permissions from project-level settings, but you can turn off inheritance for specific artifacts if needed.

## Default role assignments

By default, all project contributors are members of the User role for each hosted queue. This role allows them to author and run build and release pipelines using hosted queues.

<a id="agent-queue-security-roles"></a>

## Agent pool security roles, project-level

You can add users to security roles from the project-level admin context on the **Agent Pools** page. For information on adding and managing agent pools, see [Agent pools](../../pipelines/agents/pools-queues.md).

[!INCLUDE [temp](includes/agent-queue-roles.md)]

<a id="agent-pool-security-roles"></a>

## Agent pool security roles, organization or collection-level

Add users to the following security roles from the **Organization settings** > **Agent Pools** page. For information on adding and managing agent pools, see [Agent pools](../../pipelines/agents/pools-queues.md).

[!INCLUDE [temp](includes/agent-pool-roles.md)]

## Deployment group security roles

Add users to the following roles from the **Pipelines** or **Build and Release** page. For information on adding and managing deployment groups, see [Deployment groups](../../pipelines/release/deployment-groups/index.md).

[!INCLUDE [temp](includes/deployment-group-roles.md)]

## Deployment pool security roles

Add users to the following roles from the **Deployment Pools** page. For information on creating and managing deployment pools, see [Deployment groups](../../pipelines/release/deployment-groups/index.md).   

[!INCLUDE [temp](includes/deployment-pool-roles.md)]

<a id="library-roles"></a> 

## Library asset security roles: Variable groups and secure files

Add users to a library role from **Pipelines** or **Build and Release**. For more information about using these library assets, see [Variable groups](../../pipelines/library/variable-groups.md) and [Secure files](../../pipelines/library/secure-files.md).

[!INCLUDE [temp](includes/library-roles.md)]

<a id="service-endpoint-roles"></a> 

## Service connection security roles

Add users to the following roles from the **Services** page. For information about creating and managing these resources, see [Service connections for build and release](../../pipelines/library/service-endpoints.md).

[!INCLUDE [temp](includes/service-endpoint-roles.md)]

## Related articles

- [Start managing permissions, access, and security groups](about-permissions.md)
- [Reference permissions and groups](permissions.md)
- [Add or delete users with Microsoft Entra ID](/azure/active-directory/fundamentals/add-users-azure-active-directory)
 
