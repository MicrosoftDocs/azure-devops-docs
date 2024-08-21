---
ms.subservice: azure-devops-security
ms.author: chcomley
author: chcomley
ms.topic: include
---


> | Role (organization-level) | Description |
> |------|---------|
> | **Reader** | View the pool and agents. Typically, add operators to this role to monitor the agents and their health. |
> | **Service Account** | Use the pool to create an agent in a project. Following the guidelines for [creating new pools](../../../pipelines/agents/pools-queues.md) usually means you don't need to add members to this role. |
> | **Administrator** | Register or unregister agents from the pool, manage membership for all pools, and view and create pools. Use the agent pool when creating an agent in a project. The system automatically adds the user who created the pool to the Administrator role for that pool. |

Manage role settings for organization or collection-level agent pools from the **Organization settings** > **Agent Pools** page.
- To set permissions for all pools within the organization or collection, select **Security**, then add a user or group and choose their role.
- To set permissions for a specific pool, select the pool and then **Security**. Add a user or group and choose their role.
