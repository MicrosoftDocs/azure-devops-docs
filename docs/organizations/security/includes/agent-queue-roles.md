---
ms.subservice: azure-devops-security
ms.author: chcomley
author: chcomley
ms.topic: include
---

 
| Role (project-level) | Description |
|------|---------|
| **Reader** | View the pool. Typically, add operators to this role to monitor build and deployment jobs in the pool. |
| **User** | View and use the pool when authoring build or release pipelines. |
| **Creator** | Create and use the pool when authoring build or release pipelines. |
| **Administrator** | Manage membership for all roles of the pool, and view and use the pools. The user who created a pool is automatically added to the Administrator role for that pool. |

Manage the security of all project agent pools from the **Security** tab. Role memberships for individual project agent pools automatically inherit from these roles. 

By default, the following groups are added to the Administrator role of 'All agent pools':
- Build Administrators
- Release Administrators
- Project Administrators.

Manage role settings for a project agent pool on the **Project settings** > **Agent Pools** page.
- To set permissions for all pools within the project, select **Security**, then add a user and choose their role.
- To set permissions for a specific pool, select the pool and then **Security**. Under **Pipeline permissions**, view which pipelines have access to the pool. Explicitly allow a pipeline using the `+` button or allow all pipelines using the `⋮` button. Under **User permissions**, add a user or group and choose their role.
