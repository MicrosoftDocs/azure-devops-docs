---
ms.topic: include
---

## Create personal access tokens to authenticate access

::: moniker range="azure-devops"

> [!NOTE]   
> To enable the new user interface for the Project Permissions Settings Page, see [Enable preview features](../../../project/navigation/preview-features.md).

#### [Preview page](#tab/preview-page) 

1. Sign in to your organization in Azure DevOps (```https://dev.azure.com/{yourorganization}```)
  
2. From your home page, open your profile and select **Azure DevOps profile**.

   ![My profile Team Services](_img/my-profile-team-services-preview.png)

3. Under Security, select Personal access tokens, and then select **+ New Token**.

   ![Select New Token to create](_img/select-new-token.png)

4. Name your token, select the organization where you want to use the token, and then choose a lifespan for your token.

   ![Enter basic token information](_img/create-new-pat.png)

5. Select the [scopes](/azure/devops/integrate/get-started/authentication/oauth#scopes)
   for this token to authorize for *your specific tasks*.

   For example, to create a token to enable a [build and release agent](/azure/devops/pipelines/agents/agents) to authenticate to Azure DevOps Services, 
   limit your token's scope to **Agent Pools (Read & manage)**. To read audit log events, and manage and delete streams, select **Read Audit Log**, and then select **Create**. 

   ![Select scopes for your PAT](_img/select-pat-scopes-preview.png)

6. When you're done, make sure to copy the token. You'll use this token as your password.

   ![Copy the token to your clipboard](_img/copy-token-to-clipboard.png)

#### [Current page](#tab/current-page) 

1. Sign in to your organization in Azure DevOps (```https://dev.azure.com/{yourorganization}```)
  
2. From your home page, open your profile. Go to your security details.

   ![My profile Team Services](_img/my-profile-team-services.png)

3. Select **+ New Token**.

   ![Select New Token to create](_img/select-new-token.png)

4. Name your token, select the organization where you want to use the token, and then choose a lifespan for your token.

   ![Enter basic token information](_img/create-new-pat.png)

5. Select the [scopes](/azure/devops/integrate/get-started/authentication/oauth#scopes)
   for this token to authorize for *your specific tasks*.

   For example, to create a token to enable a [build and release agent](/azure/devops/pipelines/agents/agents) to authenticate to Azure DevOps Services, 
   limit your token's scope to **Agent Pools (Read & manage)**, and then select **Create**. 

   ![Select scopes for your PAT](_img/select-pat-scopes.png)

6. When you're done, make sure to copy the token. You'll use this token as your password.

   ![Copy the token to your clipboard](_img/copy-token-to-clipboard.png)

::: moniker-end

::: moniker range=">= tfs-2017 <= azure-devops-2019"

1. Sign in to your Team Foundation Server web portal (```https://{server}:8080/tfs/```).

2. From your home page, open your profile. Go to your security details.

   ![TFS home page, open your profile, go to Security](_img/my-profile-team-services.png)

3. Create a personal access token.

   ![Add a personal access token](_img/add-personal-access-token.png)

4. Name your token. Select a lifespan for your token.

   If you're using Azure DevOps Services, and you have more than one organization,
   you can also select the organization where you want to use the token.

   <img alt="Name your token, select a lifespan. If using Azure DevOps Services, select an account for your token" src="/azure/devops/repos/git/_shared/_img/setup-personal-access-token.png" style="border: 1px solid #CCCCCC" />

5. Select the [scopes](/azure/devops/integrate/get-started/authentication/oauth#scopes)
   for this token to authorize for *your specific tasks*.

   For example, to create a token to enable a [build and release agent](/azure/devops/pipelines/agents/agents) to authenticate to TFS, 
   limit your token's scope to **Agent Pools (read, manage)**. 

6. When you're done, make sure to *copy the token*. You'll use this token as your password. Select **Close**.

   <img alt="Use a token as the password for your Git tools or apps" src="/azure/devops/repos/git/_shared/_img/create-personal-access-token.png" style="border: 1px solid #CCCCCC" />

::: moniker-end

* * *

## Use your personal access token

Your token is your identity and represents you when it's used. Keep your tokens secret and treat them like your password.


See the following examples of using your PAT.

- Username: yourPAT
- Password: yourPAT

or
 
- git clone https://anything:{yourPAT}@dev.azure.com/yourOrgName/yourProjectName/_git/yourRepoName

To keep your token more secure, use credential managers so you don't have to enter your credentials every time. We recommend the following credential managers:

* [Git Credential Manager for macOS and Linux](https://github.com/Microsoft/Git-Credential-Manager-for-Mac-and-Linux)
* [Git Credential Manager for Windows](https://github.com/Microsoft/Git-Credential-Manager-for-Windows)
	(requires [Git for Windows](https://www.git-scm.com/download/win))

## Revoke personal access tokens to remove access

When you don't need your token anymore, just revoke it to remove access.

::: moniker range="azure-devops"

> [!NOTE]   
> To enable the new user interface for the Project Permissions Settings Page, see [Enable preview features](../../../project/navigation/preview-features.md).

#### [Preview page](#tab/preview-page) 

1. From your home page, open your profile and select **Azure DevOps profile**.

   ![My profile Team Services](_img/my-profile-team-services-preview.png)

2. Under Security, select **Personal access tokens**. Select the token for which you want to revoke access, and then select **Revoke**.

   ![Revoke a token or all tokens](/../../repos/git/_shared/_img/revoke-personal-access-tokens-preview.png)

3. Select Revoke in the confirmation dialog.

   ![Confirm revoke](_img/revoke-token-confirmation-dialog-preview.png)

#### [Current page](#tab/current-page) 

1. From your home page, open your profile. Go to your security details.

   ![Go to the organization home page, open your profile, go to Security](_img/my-profile-team-services.png)  

2. Revoke access.
   
   <img alt="Revoke a token or all tokens" src="/azure/devops/repos/git/_shared/_img/revoke-personal-access-tokens.png" style="border: 1px solid #CCCCCC" />

::: moniker-end

* * *

