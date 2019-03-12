---
ms.topic: include
---

## Create personal access tokens to authenticate access

1.  Sign in to either your organization in Azure DevOps (```https://dev.azure.com/{yourorganization}```)
or your Team Foundation Server web portal (```https://{server}:8080/tfs/```).

2.  From your home page, open your profile. Go to your security details.

	**Azure DevOps Services**

	<img alt="Go to organization home, open your profile, go to Security" src="/azure/devops/git/_shared/_img/my-profile-team-services.png" style="border: 1px solid #CCCCCC" />

    **TFS 2017**

	<img alt="TFS home page, open your profile, go to Security" src="/azure/devops/git/_shared/_img/my-profile-tfs.png" style="border: 1px solid #CCCCCC" />

3. Create a personal access token.

   <img alt="Add a personal access token" src="/azure/devops/git/_shared/_img/add-personal-access-token.png" style="border: 1px solid #CCCCCC" />

4.  Name your token. Select a lifespan for your token.

	If you're using Azure DevOps Services, and you have more than one organization,
	you can also select the organization where you want to use the token.

    <img alt="Name your token, select a lifespan. If using VSTS, select an account for your token" src="/azure/devops/git/_shared/_img/setup-personal-access-token.png" style="border: 1px solid #CCCCCC" />

5.  Select the [scopes](../../../integrate/get-started/authentication/oauth.md#scopes)
that this token will authorize for *your specific tasks*.

	For example, to create a token to enable a [build and release agent](/azure/devops/pipelines/agents/agents) to authenticate to Azure DevOps Services or TFS, 
	limit your token's scope to **Agent Pools (read, manage)**. 

   <!-- <img alt="Select scopes for this token" src="./_img/select-personal-access-token-scopes.png" style="border: 1px solid #CCCCCC" />  -->

6. When you're done, make sure to *copy the token*. You'll use this token as your password.

   <img alt="Use a token as the password for your Git tools or apps" src="/azure/devops/git/_shared/_img/create-personal-access-token.png" style="border: 1px solid #CCCCCC" />

   > [!NOTE]
   > Remember that this token is your identity and acts as you when it's used. Keep your tokens secret and treat them like your password.
   >
   > To keep your token more secure, use credential managers so that you don't have to enter your credentials every time.	Here are some recommended credential managers:
   >
   > * Git: [Git Credential Manager for macOS and Linux](https://github.com/Microsoft/Git-Credential-Manager-for-Mac-and-Linux)
	or [Git Credential Manager for Windows](https://github.com/Microsoft/Git-Credential-Manager-for-Windows)
	(requires [Git for Windows](https://www.git-scm.com/download/win))
   > * NuGet: [NuGet Credential Provider](/azure/devops/artifacts/nuget/nuget-exe)

## Revoke personal access tokens to remove access

When you don't need your token anymore, just revoke it to remove access.

1. From your home page, open your profile. Go to your security details.

	**Azure DevOps Services**

	<img alt="Go to the organization home page, open your profile, go to Security" src="/azure/devops/git/_shared/_img/my-profile-team-services.png" style="border: 1px solid #CCCCCC" />
 
 **TFS 2017**

	<img alt="Go to the TFS home page, open your profile, go to Security" src="/azure/devops/git/_shared/_img/my-profile-tfs.png" style="border: 1px solid #CCCCCC" />

0.	Revoke access.

	<img alt="Revoke a token or all tokens" src="/azure/devops/git/_shared/_img/revoke-personal-access-tokens.png" style="border: 1px solid #CCCCCC" />
