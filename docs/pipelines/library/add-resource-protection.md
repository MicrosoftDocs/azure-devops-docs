---
title: Add an admin role to a protected resource
description: Administer service connections, secure files, repositories, agent pools, secret variables, and Environments. 
ms.topic: how-to 
ms.date: 06/18/2023
ms.custom: template-how-to-pattern
---

# Add an admin role to a protected resource

To manage [protected resources](../process/about-resources.md), Azure pipeline requires a user be assigned or to be a member of a group that is assigned the **Administrator** role for the resource. You can manage security for resources at the project level or for individual resources. To manage security at the project level and for some groups at the individual resource level, you must be a member of the **Project Administrators** group.  

This article shows you how to assign the **Administrator** role to users and groups for a protected resource.

Protected resources include:

* Agent pools
* Secret variables in variable groups
* Secure files
* Service connections
* Environments
* Repositories

For repository resources, see [protect a repository resource](../process/repository-resource.md). 


## Prerequisites

You must be a member of the [Project Administrators group](../../organizations/security/change-project-level-permissions.md) to update project-level resource permissions or to grant access to all pipelines in the project for an individual resource. Some individual resources also require Project Administrators group membership to change security settings for project administrator groups.

## Agent pools

You can add the **Administrator** role to users and groups for a specific agent pool and for all agent pools. 

To add the **Administrator** role to a user or group for all agent pools:

1. Go to **Project Settings** > **Pipelines** > **Agent pools**. 

1. Select **Security**. 

1. Assign the **Administrator** role in the **Role** column for a user or group. 

To add the **Administrator** role to a user or group for a specific agent pool:

1. Go to **Project Settings** > **Pipelines** > **Agent pools**. 

1. Select a specific agent pool. 

1. Select **Security**. 

1. In **User permissions**, assign the **Administrator** role in the **Role** column for a user or group.

## Library resources (variable groups and secure files)

You can manage security for library resources at the project level or for specific variable groups and files.

To assign the **Administrator** role to users and groups at the project level:

1. Go to **Pipelines** > **Library**. 

1. Select **Security**.

1. Assign the **Administrator** role in the **Role** column for a user or group.

To assign the **Administrator** role users and groups for variable group:

1. Go to **Pipelines** > **Library**. 

1. Select the variable group.
1. Select **Security**.
1. Assign the **Administrator** role in the **Role** column for a user or group.
1. Select :::image type="icon" source="../../media/icons/save-icon.png" border="false"::: to save the changes.

To assign the **Administrator** role to users and groups for a secure file:

1. Go to **Pipelines** > **Library**.

1. Select **Secure files** and select a file from the list.
1. Select **Security**.
1. Assign the **Administrator** role in the **Role** column for a user or group.
1. Select :::image type="icon" source="../../media/icons/save-icon.png" border="false"::: to save the changes.


## Service connections

You can manage security for service connections at the project level or for individual service connections.  

To assign the **Administrator** role to users and groups at the project level:

1. Go to **Project Settings** > **Service connections**. 

1. Go to :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: and select **Security**.  
1. Assign the **Administrator** role in the **Role** column for a user or group.

To assign the **Administrator** role to users and groups to a service connection:

1. Go to **Project Settings** > **Service connections**. 

1. Select a service connection. 

1. Go to :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: and select **Security**.  

1. Assign the **Administrator** role in the **Role** column for a user or group.

## Environments

You can manage security for environments at the project level or for individual environments.

To assign the **Administrator** role to a group at the project level:

1. Go to **Pipelines** > **Environments**. 

1. Go to :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: and select **Security**.  

1. Assign the **Administrator** role in the **Role** column for a user or group.

To assign the **Administrator** role to a user or group for an individual environment:

1. Go to **Pipelines** > **Environments**. 

1. Select an environment. 

1. Go to :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: and select **Security**. 

1. Assign the **Administrator** role in the **Role** column for a user or group.

    :::image type="content" source="media/resources-admin-role.png" alt-text="Screenshot of assign the admin role. ":::


## Next steps

Learn more about [permissions in Azure DevOps](../../organizations/security/about-permissions.md). 


