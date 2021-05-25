---
ms.technology: devops-security
ms.author: kaelli
author: KathrynEE
ms.topic: include
---

> [!div class="mx-tdCol2BreakAll"]  
> | Role (organization-level) | Description |
> |------|---------|
> | **Reader** | Can view the pool as well as agents. You typically add operators to this role that are responsible for monitoring the agents and their health.  |
> | **Service Account** | Can use the pool to create an agent in a project. If you follow the guidelines for [creating new pools](/azure/devops/pipelines/agents/pools-queues), you typically do not have to add any members to this role. |
> | **Administrator** | Can register or unregister agents from the pool and manage membership for all pools, as well as view and create pools. They can also use the agent pool when creating an agent in a project. The system automatically adds the user that created the pool to the Administrator role for that pool. |


To manage role settings for an organization or collection-level agent pools, open **Organization settings** and choose **Agent Pools**.

- To set permissions for all pools within the organization or collection, choose **Security**, and then add a user or group and select their role.

	> [!div class="mx-imgBorder"]  
	> ![Set agent pools security roles for all pools.](/azure/devops/organizations/security/media/security-roles/agent-pools-pipeline-all-security-roles-org.png) 

- To set permissions for a specific pool, choose the pool and then **Security**. Then add a user or group and select their role.

	> [!div class="mx-imgBorder"]  
	> ![Set agent pools security roles for a specific pool.](/azure/devops/organizations/security/media/security-roles/agent-pools-pipeline-individual-security-roles-org.png) 
