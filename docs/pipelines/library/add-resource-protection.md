---
title: Add an admin role to a protected resource
description: Administer service connections, secure files, repositories, agent pools, secret variables, and Environments. 
ms.topic: how-to 
ms.date: 06/18/2023
ms.custom: template-how-to-pattern
---

# Add an admin role to a protected resource

Azure Pipelines requires specific permissions to manage [protected resources](../process/about-resources.md). To manage resource permissions at the project level or to grant permission to all project pipelines for an inidivdual resource you need to be a member of the **Project Administrators** group.  To manage security for an individual resource, you must be a user or a member of a user that is assigned the **Administrator** role.

This article shows you how to set the **Adminstrator** role or users and groups in a protected resource.

Protected resources include:

* Agent pools
* Secret variables in variable groups
* Secure files
* Service connections
* Environments
* Repositories

For repository resources, see [protect a repository resource](../process/repository-resource.md). 


## Prerequisites

You must be a member of the [Project Administrators group](../../organizations/security/change-project-level-permissions.md) to update project-evel resource permissions or to grant access to all pipelines in the project for an individual resource.  Some individual resources also require Project Administrators group membership.

## Agent pools

You can add the **Administrator** role for a specific agent pool and for all agent pools. 

To add the **Administrator** role for all agent pools:

1. Go to **Project Settings** > **Pipelines** > **Agent pools**. 

1. Select **Security**. 

1. Assign the **Administrator** role in the **Role** column. 

To add the **Administrator** role to a specific agent pool:

1. Go to **Project Settings** > **Pipelines** > **Agent pools**. 

1. Select a specific agent pool. 

1. Select **Security**. 

1. In **User permissions**, assign the **Administrator** role in the **Role** column.

## Library resources (variable groups and secure files)

1. Go to **Pipelines** > **Library**. 

1. Select **Security**.

1. Assign the **Administrator** role in the **Role** column.

## Service connections

1. Go to **Project Settings** > **Service connections**. 

1. Select a service connection. 

1. Go to :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: and select **Security**.  

1. Assign the **Administrator** role. 

## Environments

1. Go to **Pipelines** > **Environments**. 

1. Select an environment. 

1. Go to :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: and select **Security**. 

1. Assign the **Administrator** role in the **Role** column. 

    :::image type="content" source="media/resources-admin-role.png" alt-text="Screenshot of assign the admin role. ":::


## Next steps

Learn more about [permissions in Azure DevOps](../../organizations/security/about-permissions.md). 


