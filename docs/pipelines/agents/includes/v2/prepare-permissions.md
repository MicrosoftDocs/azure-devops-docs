---
ms.topic: include
ms.technology: devops-cicd
ms.manager: mijacobs
ms.author: sdanie
author: steved0x
ms.date: 02/12/2020
---

The user configuring the agent needs pool admin permissions, but the user running the agent does not.

The folders controlled by the agent should be restricted to as few users as possible and they contain secrets that could be decrypted or exfiltrated.

The ADO pipelines agent is a software product designed to execute code it downloads from external sources. It is inherently a target for Remote Code Execution (RCE) attacks.

Therefore, it is important to consider the threat model surrounding each individual usage of Pipelines Agents to perform work, and decide what are the minimum permissions could be granted to the user running the agent, to the machine where the agent runs, to the users who have write access to the Pipeline definition, the git repos where the yaml is stored, or the group of users who control access to the pool for new pipelines.

It is a best practice to have the identity running the agent be different from the identity with permissions to connect the agent to the pool. The user generating the credentials (and other agent-related files) is different than the user that needs to read them. Therefore, it is safer to carefully consider access granted to the agent machine itself, and the agent folders which contain sensitive files, such as logs and artifacts.

It make sense to grant access to the agent folder only for DevOps administrators and the user identity running the agent process. Administrators may need to investigate the file system to understand build failures or get log files to be able to report Azure DevOps failures.

### Decide which user you'll use

As a one-time step, you must register the agent. Someone with permission to
[administer the agent queue](../../../../organizations/security/about-security-roles.md#agent-queue-security-roles)
must complete these steps. The agent will not use this person's
credentials in everyday operation, but they're required to complete registration.
Learn more about [how agents communicate](../../agents.md#communication).

::: moniker range=">= tfs-2017"

#### Authenticate with a personal access token (PAT)

::: moniker-end

::: moniker range=">= tfs-2017 < azure-devops-2019"

1. Sign in with the user account you plan to use in your Team Foundation Server web portal (`https://{your-server}:8080/tfs/`).

::: moniker-end

::: moniker range=" >= azure-devops-2019 < azure-devops"

1. Sign in with the user account you plan to use in you Azure DevOps Server web portal (`https://{your-server}/DefaultCollection/`).

::: moniker-end

::: moniker range="azure-devops"

1. Sign in with the user account you plan to use in your Azure DevOps organization (`https://dev.azure.com/{your_organization}`).

::: moniker-end

::: moniker range=">= tfs-2017 < azure-devops"

2. From your home page, open your profile. Go to your security details.

   ![Go to your security details.](/azure/devops/repos/git/media/my-profile-team-services.png)

3. [Create a personal access token](../../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md).

   ![Create a personal access token.](/azure/devops/repos/git/media/add-personal-access-token.png)

::: moniker-end

::: moniker range="azure-devops"

2. From your home page, open your user settings, and then select **Personal access tokens**.

   ![Go to your security details.](/azure/devops/repos/git/media/select-personal-access-tokens.jpg)

3. [Create a personal access token](../../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md).

   ![Create a personal access token.](/azure/devops/repos/git/media/select-new-token.png)

::: moniker-end

::: moniker range=">= tfs-2017 <= azure-devops"

4. For the scope select **Agent Pools (read, manage)** and make sure all the other boxes are cleared.
   If it's a [deployment group](../../../release/deployment-groups/index.md) agent, for the scope select **Deployment group (read, manage)** and make sure all the other boxes are cleared.

   Select **Show all scopes** at the bottom of the **Create a new personal access token window** window to see the complete list of scopes.

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

Is the user an Azure DevOps organization owner or TFS or Azure DevOps Server administrator? **Stop here**, you have permission.

Otherwise:

1. Open a browser and navigate to the **Agent pools** tab for your Azure Pipelines organization or Azure DevOps Server or TFS server:

   [!INCLUDE [agent-pools-tab](../agent-pools-tab.md)]

1. Select the pool on the right side of the page and then click **Security**.

1. If the user account you're going to use is not shown, then get an administrator to add it. The administrator can be an agent pool administrator, an [Azure DevOps organization owner](../../../../organizations/accounts/faq-user-and-permissions-management.yml#find-owner), or a [TFS or Azure DevOps Server administrator](/azure/devops/server/admin/add-administrator).

   If it's a [deployment group](../../../release/deployment-groups/index.md) agent, the administrator can be an deployment group administrator, an [Azure DevOps organization owner](../../../../organizations/accounts/faq-user-and-permissions-management.yml#find-owner), or a [TFS or Azure DevOps Server administrator](/azure/devops/server/admin/add-administrator).

   You can add a user to the deployment group administrator role in the **Security** tab on the **Deployment Groups** page in **Azure Pipelines**.

> [!NOTE]
> If you see a message like this: **Sorry, we couldn't add the identity. Please try a different identity.**, you probably followed the above steps for an organization owner or TFS or Azure DevOps Server administrator. You don't need to do anything; you already have permission to administer the agent queue.
