---
ms.topic: include
---

1.  Sign in to your organization in Azure DevOps
(```http://{your organization}.visualstudio.com```).

0.  From your home page, open your profile. Go to your security details.

	<img alt="Go to Azure DevOps Services home, open your profile, go to Security" src="./_img/my-profile.png" style="border: 1px solid #CCCCCC" />

0. Create a new personal access token.

   <img alt="Add a personal access token" src="./_img/add-personal-access-token.png" style="border: 1px solid #CCCCCC" />

0.  Name your token. Select a lifespan for your token.

	If you're using Azure DevOps Services, and you have more than one organization, 
	you can also select the organization where you want to use the token.

   <img alt="Name your token, select a lifespan. If using Azure DevOps Services, select an account for your token" src="./_img/setup-personal-access-token.png" style="border: 1px solid #CCCCCC" />

0.  Select the [scopes](/azure/devops/integrate/get-started/authentication/oauth#scopes) 
that this token will authorize for **your specific tasks**.

	For example, to build and release apps with a Windows, macOS, or Linux agent, 
	[limit your token's scope to **Agent Pools (read, manage)**](/azure/devops/pipelines/agents/agents).
   
0. When you're done, make sure to *copy the token*. You'll use this token as your password.

   <img alt="Use token as the password for your git tools or apps" src="./_img/create-personal-access-token.png" style="border: 1px solid #CCCCCC" />

	**Note: Remember that this token is your identity and acts as you when it's used. 
	Keep your tokens secret and treat them like your password.**

	**Tip:** To keep your token more secure, use credential managers 
	so that you don't have to enter your credentials every time. 
	Here are some recommended credential managers:
    
	*	Git: [Git Credential Manager for macOS and Linux](https://github.com/Microsoft/Git-Credential-Manager-for-Mac-and-Linux) 
	or [Git Credential Manager for Windows](https://github.com/Microsoft/Git-Credential-Manager-for-Windows) 
	(Requires [Git for Windows](https://www.git-scm.com/download/win))
	*	NuGet: [NuGet Credential Provider](/azure/devops/artifacts/nuget/nuget-exe)

0.  When you don't need your token anymore, just revoke it to remove its access.
