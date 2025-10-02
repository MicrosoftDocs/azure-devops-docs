---
title: Add an administrator for a protected resource
description: Learn how to add administrators to service connections, secure files, agent pools, secret variables, and environments in Azure Pipelines.
ms.topic: how-to 
ms.date: 10/01/2025
ms.custom: template-how-to-pattern
#customer intent: As an Azure DevOps administrator, I want to learn how to assign the administrator role to users and groups so I can grant project members permission to manage protected resources.
---

# Add an administrator for a protected resource

To manage [protected resources](../process/about-resources.md), Azure Pipelines requires a user to have or be a member of a group that has the **Administrator** role for the resource. This article shows you how to assign the **Administrator** role to users and groups for the following Azure Pipelines protected resources:

- [Agent pools](../agents/agents.md)
- [Variable groups](../library/variable-groups.md)
- [Secure files](../library/secure-files.md)
- [Service connections](../library/service-endpoints.md)
- [Environments](../process/environments.md)

For information about protecting repository resources, see [Securely access repositories from pipelines](../security/secure-access-to-repos.md) and [Protect a repository resource](../process/repository-resource.md).

## Prerequisites

You can manage security for resources at the project level or individual resource level. To manage security for projects, or manage project-level administrator groups for individual resources, you must be a member of the [Project Administrators group](../../organizations/security/change-project-level-permissions.md).

**Project Administrators** can update project-level resource permissions or grant access to all project pipelines for individual resources. Some individual resources also require **Project Administrators** group membership to change permissions for project administrator groups.

## Agent pools

You can assign the **Administrator** role to users and groups for a specific agent pool or for all agent pools.

To add the **Administrator** role to a user or group for all agent pools:

1. In **Project Settings**, select **Pipelines** > **Agent pools**, and then select **Security** at upper right.
1. On the **User permissions** screen, select **Add**.
1. Select a user or group to assign the **Administrator** role, and select **Add**.
1. Select **Save**.

To add the **Administrator** role to a user or group for a specific agent pool:

1. In **Project Settings**, select **Pipelines** > **Agent pools**, and then select a specific agent pool.
1. Select the **Security** tab.
1. Under **User permissions**, select **Add**.
1. Select a user or group to assign the **Administrator** role, and select **Add**.
1. Select **Save**.

## Library resources

Library resources include variable groups and secure files. You can manage security for all library resources at the project level or for individual variable groups and files.

To create a library resource, you must have or be a member of a group that has either the **Administrator** or **Creator** role. A resource creator is automatically assigned the **Administrator** role for that resource.

To assign the **Administrator** role to users and groups at the project level:

1. Go to **Pipelines** > **Library**, and select **Security**.
1. Select **Add**.
1. Select a user or group to assign the **Administrator** role, and select **Add**.
1. Select **Save**.

### Variable groups

To assign the **Administrator** role to a user or group for a variable group:

1. Go to **Pipelines** > **Library**. 
1. On the **Variable groups** tab, select the variable group.
1. On the variable group page, select **Security**.
1. Select **Add**, and then select a user or group to assign the **Administrator** role, and select **Add**.
1. Select **Save**.

### Secure files

To assign the **Administrator** role to a user or group for a secure file:

1. Go to **Pipelines** > **Library**. 
1. Select the **Secure files** tab, and then select the secure file.
1. On the secure file page, select **Security**.
1. Select **Add**, and then select a user or group to assign the **Administrator** role, and select **Add**.
1. Select **Save**.

## Service connections

You can manage security for all service connections at the project level or for individual service connections. To create a service connection, you must have or be a member of a group that has either the **Administrator** or **Creator** role. A service connection creator is automatically assigned the **Administrator** role for that service connection.

To assign the **Administrator** role to a user or group at the project level:

1. In **Project Settings**, select **Pipelines** > **Service connections**, and then select **Security** at upper right.
1. On the **User permissions** screen, select **Add**.
1. Select a user or group to assign the **Administrator** role, and select **Add**.
1. Select **Save**.

To assign the **Administrator** role to a user or group for a specific service connection:

1. In **Project Settings**, select **Pipelines** > **Service connections**, and then select a service connection.
1. On the service connection page, select the **More actions** icon at upper right, and then select **Security**.
1. Under **User permissions**, select **Add**.
1. Select a user or group to assign the **Administrator** role, and select **Add**.
1. Select **Save**.

## Environments

You can manage security for all environments at the project level or for individual environments. To create an environment, you must have or be a member of a group that has either the **Administrator** or **Creator** role. An environment creator is automatically assigned the **Administrator** role for that environment.

To assign the **Administrator** role to a user or group at the project level:

1. Go to **Pipelines** > **Environments**. 
1. Select the **More actions** icon at upper right, and then select **Security**.
1. Under **User permissions**, select **Add**.
1. Select a user or group to assign the **Administrator** role, and select **Add**.
1. Select **Save**.

To assign the **Administrator** role to a user or group for an individual environment:

1. Go to **Pipelines** > **Environments**, and select an environment. 
1. On the environment page, select the **More actions** icon at upper right, and then select **Security**.
1. Under **User permissions**, select **Add**.
1. Select a user or group to assign the **Administrator** role, and select **Add**.
1. Select **Save**.

## Related content

- [Permissions and security groups](../../organizations/security/about-permissions.md)
- [Resources for Azure Pipelines](../process/about-resources.md)
- [Resource security](../security/resources.md)
