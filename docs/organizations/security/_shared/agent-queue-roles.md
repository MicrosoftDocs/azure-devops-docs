
> [!div class="mx-tdCol2BreakAll"]  
> |  Role (project-level)  | Description |
> |------|---------|
> | **Reader** | Can view the queue. You typically add operators to this role that are responsible for monitoring the build and deployment jobs in that queue.  |
> | **User** | Can use the queue when authoring build or release pipelines. |
> | **Creator** | Can use the queue when authoring build or release pipelines. |
> | **Administrator** | Can manage membership for all roles of the queue, as well as view and use the queues. The user that created a queue is automatically added to the Administrator role for that queue.

You control the security of all project agent pools from the **Security** tab. Role memberships for individual project agent pools automatically inherit from what those roles. By default, the following groups are added to the Administrator role of 'All agent pools': Build Administrators, Release Administrators, Project Administrators.

To manage role settings for a project agent pool, open **Project settings**, choose **Agent Pools**, choose a pool, and then add a user and select their role.

> [!div class="mx-imgBorder"]  
> ![Agent pools security roles](/azure/devops/organizations/security/_shared/_img/agent-pool-roles-project.png) 