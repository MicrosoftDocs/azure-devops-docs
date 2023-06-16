---
title: Add the admin role to a protected resource
description: Administer service connections, secure files, repositories, agent pools, secret variables, and Environments. 
ms.topic: how-to 
ms.date: 06/18/2023
ms.custom: template-how-to-pattern
---

# Add the Administrator role to a resource

Azure Pipelines requires the administrator role to open access to a [protected resource](../process/about-resources.md) to all pipelines. For all protected resource types other than Environments, you'll need the administrator role to create a protected resource or edit its **Security** configuration. For Environments, you'll need the **Creator** role. When you don't appropriate access, the **Grant access permission to all pipelines** option will be disabled.

Protected resources include:

* Agent pools
* Secret variables in variable groups
* Secure files
* Service connections
* Environments
* Repositories

For repository resources, see [protect a repository resource](../process/repository-resource.md). 


## Prerequisites

* You must be a member of the [Project Administrators group](../../organizations/security/change-project-level-permissions.md).  

## 1 - Add protection to an agent pool 

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

## 2 - Add protection to Library resources (variable groups and secure files)

1. Go to **Pipelines** > **Library**. 

1. Select **Security**.

1. Assign the **Administrator** role in the **Role** column.

## 3 - Add protection to a service connection

1. Go to **Project Settings** > **Service connections**. 

1. Select a service connection. 

1. Go to :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: and select **Security**.  

1. Assign the **Administrator** role. 

## 4 - Add protection to an Environment

1. Go to **Pipelines** > **Environments**. 

1. Select a service connection. 

1. Go to :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: and select **Security**. 

1. Assign the **Creator** role. 


## Next steps

Learn more about [permissions in Azure DevOps](../../organizations/security/about-permissions.md). 


