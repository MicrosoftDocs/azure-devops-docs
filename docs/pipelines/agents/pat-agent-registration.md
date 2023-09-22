---
title: Register an agent using a personal access token (PAT)
description: Learn how to egister a self-hosted agent using a personal access token (PAT)
ms.topic: conceptual
ms.date: 09/22/2023
monikerRange: '<= azure-devops'
---

# Register an agent using a personal access token (PAT)

::: moniker range="< azure-devops-2019"

1. Sign in with the user account you plan to use in your Team Foundation Server web portal (`https://{your-server}:8080/tfs/`).

::: moniker-end

::: moniker range=" >= azure-devops-2019 < azure-devops"

1. Sign in with the user account you plan to use in your Azure DevOps Server web portal (`https://{your-server}/DefaultCollection/`).

::: moniker-end

::: moniker range="azure-devops"

1. Sign in with the user account you plan to use in your Azure DevOps organization (`https://dev.azure.com/{your_organization}`).

::: moniker-end

::: moniker range="< azure-devops"

2. From your home page, open your profile. Go to your security details.

   ![Go to your security details.](/azure/devops/repos/git/media/my-profile-team-services.png)

3. [Create a personal access token](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md).

   ![Create a personal access token.](/azure/devops/repos/git/media/add-personal-access-token.png)

   > [!NOTE]
   > If you are configuring a deployment group agent, or if you see an error when registering a VM environment resource, you must set the PAT scope to **All accessible organizations**. 
   > :::image type="content" source="../media/prepare-permissions-pat-scope.png" alt-text="Screenshot of setting PAT scope to all accessible organizations.":::


::: moniker-end

::: moniker range="azure-devops"

2. From your home page, open your user settings, and then select **Personal access tokens**.

   ![Go to your security details.](/azure/devops/repos/git/media/select-personal-access-tokens.jpg)

3. [Create a personal access token](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md).

   ![Create a personal access token.](/azure/devops/repos/git/media/select-new-token.png)

::: moniker-end

::: moniker range="<= azure-devops"

4. For the scope select **Agent Pools (read, manage)** and make sure all the other boxes are cleared.
   If it's a [deployment group](../../release/deployment-groups/index.md) agent, for the scope select **Deployment group (read, manage)** and make sure all the other boxes are cleared.

   Select **Show all scopes** at the bottom of the **Create a new personal access token window** window to see the complete list of scopes.

5. Copy the token. You'll use this token when you configure the agent.

::: moniker-end
