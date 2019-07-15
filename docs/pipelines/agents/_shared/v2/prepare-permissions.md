---
ms.topic: include
---

### Decide which user you'll use

As a one-time step, you must register the agent. Someone with permission to
[administer the agent queue](/azure/devops/organizations/security/about-security-roles?view=azure-devops#agent-queue-security-roles)
must complete these steps. The agent will not use this person's
credentials in everyday operation, but they're required to complete registration.
Learn more about [how agents communicate](/azure/devops/pipelines/agents#communication).

::: moniker range=">= tfs-2017"

#### Authenticate with a personal access token (PAT)

1. Sign in with the user account you plan to use in either your Azure DevOps organization (```https://dev.azure.com/{your_organization}```)
   or your Team Foundation Server web portal (```https://{your-server}:8080/tfs/```).

2. From your home page, open your profile. Go to your security details.

   ![test](/azure/devops/repos/git/_shared/_img/my-profile-team-services.png)

3. Create a personal access token.

   ![test](/azure/devops/repos/git/_shared/_img/add-personal-access-token.png)

4. For the scope select **Agent Pools (read, manage)** and make sure all the other boxes are cleared.
   If it's a [deployment group](/azure/devops/pipelines/release/deployment-groups/index) agent, for the scope select **Deployment group (read, manage)** and make sure all the other boxes are cleared.

5. Copy the token. You'll use this token when you configure the agent.

::: moniker-end

::: moniker range="<= tfs-2017"

#### Authenticate as a Windows user (TFS 2015 and TFS 2017)

As an alternative, on TFS 2017, you can use either a domain user or a
local Windows user on each of your TFS application tiers.

On TFS 2015, for macOS and Linux only, 
we recommend that you create a local Windows user on each of your TFS application tiers and dedicate that user for the purpose of deploying build agents.

::: moniker-end

### Confirm the user has permission

Make sure the user account that you're going to use has permission to register the agent.

Is the user an Azure DevOps organization owner or TFS server administrator? **Stop here**, you have permission.

Otherwise:

<ol>
<li>Open a browser and navigate to the <strong>Agent pools</strong> tab for your Azure Pipelines organization or TFS server:


<ul>
<li>Azure Pipelines: <code>https:&#x2F;&#x2F;dev.azure.com/{your_organization}/_settings/agentpools</code></li>
<li>Azure DevOps Server 2019: <code>https:&#x2F;&#x2F;dev.azure.com/{your_collection}/_settings/agentpools</code></li>
<li>TFS 2018: <code>https:&#x2F;&#x2F;{your_server}/DefaultCollection/_admin/_AgentPool</code></li>
<li>TFS 2017: <code>https:&#x2F;&#x2F;{your_server}/tfs/DefaultCollection/_admin/_AgentPool</code></li>
<li>TFS 2015: <code>http:&#x2F;&#x2F;{your_server}:8080/tfs/_admin/_AgentPool</code></li>
<li>That didn&#39;t work: <a href="/azure/devops/server/admin/websitesettings" data-raw-source="[Get the correct URL](/azure/devops/server/admin/websitesettings)">Get the correct URL</a></li>
</ul></li>

<li>Click the pool on the left side of the page and then click <strong>Roles</strong>.</li>

<li>If the user account you&#39;re going to use is not shown, then get an administrator to add it. The administrator can be an agent pool administrator, an <a href="/azure/devops/organizations/accounts/faq-add-delete-users#find-owner" data-raw-source="[Azure DevOps organization owner](/azure/devops/organizations/accounts/faq-add-delete-users#find-owner)">Azure DevOps organization owner</a>, or a <a href="/azure/devops/server/admin/add-administrator-tfs" data-raw-source="[TFS server administrator](/azure/devops/server/admin/add-administrator-tfs)">TFS server administrator</a>.
If it&#39;s a <a href="/azure/devops/pipelines/release/deployment-groups/index" data-raw-source="[deployment group](/azure/devops/pipelines/release/deployment-groups/index)">deployment group</a> agent, the administrator can be an deployment group administrator, an <a href="/azure/devops/organizations/accounts/faq-add-delete-users#find-owner" data-raw-source="[Azure DevOps organization owner](/azure/devops/organizations/accounts/faq-add-delete-users#find-owner)">Azure DevOps organization owner</a>, or a <a href="/azure/devops/server/admin/add-administrator-tfs" data-raw-source="[TFS server administrator](/azure/devops/server/admin/add-administrator-tfs)">TFS server administrator</a>.
You can add a user to the deployment group administrator role in the <strong>Security</strong> tab on the <strong>Deployment Groups</strong> page in <strong>Azure Pipelines</strong>.</li>
</ol>

> If you see a message like this: _Sorry, we couldn't add the identity. Please try a different identity._, you probably followed the above steps for an organization owner or TFS server administrator. You don't need to do anything; you already have permission to administer the agent queue.
