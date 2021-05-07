---
ms.technology: devops-security
ms.author: kaelli
author: KathrynEE
ms.topic: include
---




> [!div class="mx-tdCol2BreakAll"]  
> |  Role (project-level)  | Description |
> |------|---------|
> | **Reader** | Can view the pool. You typically add operators to this role that are responsible for monitoring the build and deployment jobs in that pool.  |
> | **User** | Can use the pool when authoring build or release pipelines. |
> | **Creator** | Can use the pool when authoring build or release pipelines. |
> | **Administrator** | Can manage membership for all roles of the pool, as well as view and use the pools. The user that created a pool is automatically added to the Administrator role for that pool.

You control the security of all project agent pools from the **Security** tab. Role memberships for individual project agent pools automatically inherit from what those roles. By default, the following groups are added to the Administrator role of 'All agent pools': Build Administrators, Release Administrators, Project Administrators.

To manage role settings for a project agent pool, open **Project settings** and choose **Agent Pools**.

- To set permissions for all pools within the project, choose **Security**, and then add a user and select their role.

	> [!div class="mx-imgBorder"]  
	> ![Agent pools security roles for all pools within the project.](/azure/devops/organizations/security/media/security-roles/pipeline-all-security-roles.png) 

- To set permissions for a specific pool, choose the pool and then **Security**. Then add a user and select their role.

	> [!div class="mx-imgBorder"]  
	> ![Agent pools security roles for a specific pool within the project.](/azure/devops/organizations/security/media/security-roles/pipline-individual-security-role.png) 
