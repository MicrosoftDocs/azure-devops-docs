

> [!div class="mx-tdCol2BreakAll"]  
> | Role (organization-level) | Description |
> |------|---------|
> | **Reader** | Can view the pool as well as agents. You typically add operators to this role that are responsible for monitoring the agents and their health.  |
> | **Service Account** | Can use the pool to create an agent queue in a project. If you follow the guidelines for [creating new pools and queues](/azure/devops/pipelines/agents/pools-queues), you typically do not have to add any members to this role. |
> | **Administrator** | Can register or unregister agents from the pool and manage membership for all pools, as well as view and create pools. They can also use the agent pool when creating an agent queue in a project. The system automatically adds the user that created the pool to the Administrator role for that pool. |


To manage role settings for organization or collection-level agent pools, open **Organization settings**, choose **Agent Pools**, choose a pool, and then add a user and select their role.

> [!div class="mx-imgBorder"]  
> ![Agent pools security roles](/azure/devops/organizations/security/_shared/_img/agent-pool-roles-org.png) 