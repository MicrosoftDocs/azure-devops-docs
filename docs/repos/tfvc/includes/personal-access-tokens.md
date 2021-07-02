---
ms.topic: include
---

1. Sign in to your organization in Azure DevOps
   (```http://{your organization}.visualstudio.com```).

2. From your home page, open your profile. Go to your security details.

   <img alt="Go to Azure DevOps Services home, open your profile, go to Security" src="./media/my-profile.png" style="border: 1px solid #CCCCCC" />

3. Create a new personal access token.

   <img alt="Add a personal access token" src="./media/add-personal-access-token.png" style="border: 1px solid #CCCCCC" />

4. Name your token. Select a lifespan for your token.

   If you're using Azure DevOps Services, and you have more than one organization, 
   you can also select the organization where you want to use the token.

   <img alt="Name your token, select a lifespan. If using Azure DevOps Services, select an account for your token" src="./media/setup-personal-access-token.png" style="border: 1px solid #CCCCCC" />

5. Select the [scopes](../../../integrate/get-started/authentication/oauth.md#scopes) 
   that this token will authorize for **your specific tasks**.

   For example, to build and release apps with a Windows, macOS, or Linux agent, 
   [limit your token's scope to **Agent Pools (read, manage)**](../../../pipelines/agents/agents.md).
   
6. When you're done, make sure to *copy the token*. You'll use this token as your password.

    ![Use a token as the password for your Git tools or apps](../../tfvc/media/create-personal-access-token.png)

    > [!NOTE]
    > Remember that this token is your identity and acts as you when it's used. 
    > Keep your tokens secret and treat them like your password.**

    > [!TIP]
    > To keep your token more secure, use credential managers
    > so that you don't have to enter your credentials every time.

    Here are some recommended credential managers:

    *	Git: [Git Credential Manager Core](https://github.com/microsoft/Git-Credential-Manager-Core) 
    *	NuGet: [NuGet Credential Provider](../../../artifacts/nuget/nuget-exe.md)

7. When you don't need your token anymore, just revoke it to remove its access.