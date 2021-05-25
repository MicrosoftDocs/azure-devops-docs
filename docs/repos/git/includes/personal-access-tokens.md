---
ms.topic: include
---

## Create a PAT

::: moniker range="azure-devops"

> [!NOTE]   
> To enable the new user interface for the New account manager page, see [Manage or enable features](/azure/devops/project/navigation/preview-features).

#### [Preview page](#tab/preview-page) 

1. Sign in to your organization in Azure DevOps (```https://dev.azure.com/{yourorganization}```)
  
2. From your home page, open your user settings, and then select **Personal access tokens**.

   ![Select Personal Access Tokens](/azure/devops/repos/git/media/select-personal-access-tokens.jpg)

3. And then select **+ New Token**.

   ![Select New Token to create](/azure/devops/repos/git/media/select-new-token.png)

4. Name your token, select the organization where you want to use the token, and then choose a lifespan for your token.

   ![Enter basic token information](/azure/devops/repos/git/media/create-new-pat.png)

5. Select the [scopes](/azure/devops/integrate/get-started/authentication/oauth#scopes)
   for this token to authorize for *your specific tasks*.

   For example, to create a token to enable a [build and release agent](/azure/devops/pipelines/agents/agents) to authenticate to Azure DevOps Services, 
   limit your token's scope to **Agent Pools (Read & manage)**. To read audit log events, and manage and delete streams, select **Read Audit Log**, and then select **Create**. 

   ![Select scopes for your PAT](/azure/devops/repos/git/media/select-pat-scopes-preview.png)

6. When you're done, make sure to copy the token. For your security, it won't be shown again. Use this token as your password.

   ![Copy the token to your clipboard](/azure/devops/repos/git/media/copy-token-to-clipboard.png)

#### [Current page](#tab/current-page) 

1. Sign in to your organization in Azure DevOps (```https://dev.azure.com/{yourorganization}```)
  
2. From your home page, open your profile. Go to your security details.

   ![My profile Team Services](/azure/devops/repos/git/media/my-profile-team-services.png)

3. Select **+ New Token**.

   ![Select New Token to create](/azure/devops/repos/git/media/select-new-token.png)

4. Name your token, select the organization where you want to use the token, and then choose a lifespan for your token.

   ![Enter basic token information](/azure/devops/repos/git/media/create-new-pat.png)

5. Select the [scopes](/azure/devops/integrate/get-started/authentication/oauth#scopes)
   for this token to authorize for *your specific tasks*.

   For example, to create a token to enable a [build and release agent](/azure/devops/pipelines/agents/agents) to authenticate to Azure DevOps Services, 
   limit your token's scope to **Agent Pools (Read & manage)**, and then select **Create**. 

   ![Select scopes for your PAT](~/repos/git/media/select-pat-scopes.png)

6. When you're done, make sure to copy the token. For your security, it won't be shown again. Use this token as your password.

   ![Copy the token to your clipboard](/azure/devops/repos/git/media/copy-token-to-clipboard.png)

::: moniker-end

::: moniker range=">= tfs-2017 < azure-devops"

1. Sign in to your web portal (```https://{server}:8080/tfs/```).

2. From your home page, open your profile. Go to your security details.

   ![Home page, open your profile, go to Security](/azure/devops/repos/git/media/my-profile-team-services.png)

3. Create a personal access token.

   ![Add a personal access token](/azure/devops/repos/git/media/add-personal-access-token.png)

4. Name your token. Select a lifespan for your token.

   If you have more than one organization,
   you can also select the organization where you want to use the token.

   ![Name your token, select a lifespan. If using Azure DevOps Services, select an account for your token](/azure/devops/repos/git/media/setup-personal-access-token.png)

5. Select the [scopes](/azure/devops/integrate/get-started/authentication/oauth#scopes)
   for this token to authorize for *your specific tasks*.

   For example, to create a token to enable a [build and release agent](/azure/devops/pipelines/agents/agents) to authenticate, 
   limit your token's scope to **Agent Pools (read, manage)**. 

6. When you're done, make sure to *copy the token*. For your security, it won't be shown again. Use this token as your password. Select **Close**.

   ![Use a token as the password for your Git tools or apps](/azure/devops/repos/tfvc/media/create-personal-access-token.png)

::: moniker-end

* * *

 Once your PAT is created, you can use it anywhere your user credentials are required for authentication in Azure DevOps. 

### Notifications

Users receive two notifications during the lifetime of a PAT - one upon creation and the other seven days before the expiration.

After you create a PAT, you receive a notification similar to the following example.

   :::image type="content" source="/azure/devops/organizations/accounts/media/use-personal-access-tokens-to-authenticate/pat-creation.png" alt-text="PAT created notification":::

Seven days before your PAT expires, you receive a notification similar to the following example.

   :::image type="content" source="/azure/devops/organizations/accounts/media/use-personal-access-tokens-to-authenticate/pat-expiration.png" alt-text="PAT near expiration notification":::

#### Unexpected notification

If you receive an unexpected PAT notification, an administrator or tool might have created a PAT on your behalf. See the following examples.

- When you connect to an Azure DevOps Git repo through git.exe. it creates a token with a display name like "git: `https://MyOrganization.visualstudio.com/` on MyMachine."
- When you or an administrator sets up an Azure App Service web app deployment, it creates a token with a display name like "Service Hooks: : Azure App Service: : Deploy web app."
- When you or an administrator sets up web load testing, as part of a pipeline, it creates a token with a display name like "WebAppLoadTestCDIntToken".
- When a Microsoft Teams Integration Messaging Extension is set up, it creates a token with a display name like "Microsoft Teams Integration".

If you believe that a PAT exists in error, we suggest that you [revoke the PAT](/azure/devops/organizations/accounts/admin-revoke-user-pats). Then, change your password. As an Azure AD user, check with your administrator to see if your organization was used from an unknown source or location. See also the FAQ about [accidentally checking in a PAT to a public GitHub repository](/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate#q-what-happens-if-i-accidentally-check-my-pat-into-a-public-repository-on-github).

## Use a PAT

Your token is your identity and represents you when it's used. Treat and use a PAT like your password. 
1. Git interactions require a username, which can be anything except the empty string.
The PAT is used as the password.
Additionally, you have to Base64-encode the username and PAT to use it with HTTP basic authentication.
On Linux or macOS, in Bash, you can enter:
 
```bash
MY_PAT=yourPAT		# replace "yourPAT" with your actual PAT
B64_PAT=$(printf "%s"":$MY_PAT" | base64)
git -c http.extraHeader="Authorization: Basic ${B64_PAT}" clone https://dev.azure.com/yourOrgName/yourProjectName/_git/yourRepoName
```

On Windows, you can do something similar in PowerShell:

```powershell
$MyPat = 'yourPAT'
$B64Pat = [Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes(":$MyPat"))
git -c http.extraHeader="Authorization: Basic $B64Pat" clone https://dev.azure.com/yourOrgName/yourProjectName/_git/yourRepoName
```

To keep your token more secure, use credential managers so you don't have to enter your credentials every time. We recommend the following credential manager:

* [Git Credential Manager Core](https://github.com/microsoft/Git-Credential-Manager-Core) (Windows also requires [Git for Windows](https://www.git-scm.com/download/win))

### Use a PAT in your code

See the following sample that gets a list of builds using curl.
<br/>
```
curl -u username[:{personalaccesstoken}] https://dev.azure.com/{organization}/_apis/build-release/builds
```
<br/>

If you wish to provide the PAT through an HTTP header, first convert it to a Base64 string (the following example shows how to convert to Base64 using C#). The resulting string can then be provided as an HTTP header in the following format:
<br/>
<code>Authorization: Basic BASE64_USERNAME_PAT_STRING</code> 
<br/>
Here it is in C# using the <a href="/previous-versions/visualstudio/hh193681(v=vs.118)" data-raw-source="[HttpClient class](/previous-versions/visualstudio/hh193681(v=vs.118))">HttpClient class</a>.
<br/>

```cs
public static async void GetBuilds()
{
    try
    {
        var personalaccesstoken = "PATFROMWEB";

        using (HttpClient client = new HttpClient())
        {
            client.DefaultRequestHeaders.Accept.Add(
                new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));

            client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic",
                Convert.ToBase64String(
                    System.Text.ASCIIEncoding.ASCII.GetBytes(
                        string.Format("{0}:{1}", "", personalaccesstoken))));

            using (HttpResponseMessage response = client.GetAsync(
                        "https://dev.azure.com/{organization}/{project}/_apis/build/builds?api-version=5.0").Result)
            {
                response.EnsureSuccessStatusCode();
                string responseBody = await response.Content.ReadAsStringAsync();
                Console.WriteLine(responseBody);
            }
        }
    }
    catch (Exception ex)
    {
        Console.WriteLine(ex.ToString());
    }
}
```
<br/>

> [!TIP]
> When you're using variables, add a "$" at the beginning of the string, like in the following example.

```cs
public static async void GetBuilds()
{
    try
    {
        var personalaccesstoken = "PATFROMWEB";

        using (HttpClient client = new HttpClient())
        {
            client.DefaultRequestHeaders.Accept.Add(
                new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));

            client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic",
                Convert.ToBase64String(
                    System.Text.ASCIIEncoding.ASCII.GetBytes(
                        string.Format("{0}:{1}", "", personalaccesstoken))));

            using (HttpResponseMessage response = client.GetAsync(
                        $"https://dev.azure.com/{organization}/{project}/_apis/build/builds?api-version=5.0").Result)
            {
                response.EnsureSuccessStatusCode();
                string responseBody = await response.Content.ReadAsStringAsync();
                Console.WriteLine(responseBody);
            }
        }
    }
    catch (Exception ex)
    {
        Console.WriteLine(ex.ToString());
    }
}
```

When your code is working, it's a good time to switch from basic auth to <a href="/azure/devops/integrate/get-started/authentication/oauth" data-raw-source="[OAuth](/azure/devops/integrate/get-started/authentication/oauth)">OAuth</a>.

If you enable IIS Basic Authentication for TFS, PATs aren't valid. For more information, see [Using IIS Basic Authentication with TFS on-premises](/azure/devops/integrate/get-started/authentication/iis-basic-auth).

For more examples of how to use PATs, see [Git credential managers](/azure/devops/repos/git/set-up-credential-managers), [REST APIs](/rest/api/azure/devops/?view=azure-devops-rest-5.1&preserve-view=true#assemble-the-request), [NuGet on a Mac](/azure/devops/artifacts/nuget/consume#mac-os), [Reporting clients](/azure/devops/report/powerbi/client-authentication-options#enter-credentials-within-a-client), or [Get started with Azure DevOps CLI](/azure/devops/cli/index).

::: moniker range="azure-devops"

## Modify a PAT

You can regenerate or extend a PAT, and modify its [scope](/azure/devops/integrate/get-started/authentication/oauth#scopes).

> [!NOTE]   
> To enable the new user interface for the New account manager page, see [Manage or enable features](/azure/devops/project/navigation/preview-features).

#### [Preview page](#tab/preview-page) 

1. From your home page, open your user settings, and then select **Profile**.

   ![My profile Team Services, Preview page, modify a PAT.](/azure/devops/repos/git/media/my-profile-team-services-preview.png)

2. Under Security, select **Personal access tokens**. Select the token for which you want to modify, and then select **Edit**.

    :::image type="content" source="/azure/devops/repos/git/media/select-edit-pat-current-view.png" alt-text="Select Edit to modify PAT":::

3. Edit the token name, organization it applies to, token expiration, or the scope of access that's associated with the token, and then select **Save**.

   ![Modify and Save PAT](/azure/devops/repos/git/media/modify-pat.png)

#### [Current page](#tab/current-page) 

1. From your home page, open your profile. Go to **Security** details.

   ![Go to the organization home page, open your profile, go to Security](/azure/devops/repos/git/media/my-profile-team-services.png)  

2. Select the token for which you want to modify, and then select **Edit**.

   :::image type="content" source="/azure/devops/repos/git/media/select-edit-pat-current-view.png" alt-text="Select Edit to modify PAT":::

3. Edit the token name, organization it applies to, token expiration, or the scope of access that's associated with the token, and then select **Save**.

   ![Modify and Save PAT](/azure/devops/repos/git/media/modify-pat.png)

* * *

## Revoke a PAT

You can revoke a PAT at any time, for various reasons.

> [!NOTE]   
> To enable the new user interface for the New account manager page, see [Manage or enable features](/azure/devops/project/navigation/preview-features).

#### [Preview page](#tab/preview-page) 

1. From your home page, open your user settings, and then select **Profile**.

   ![My profile Team Services, Preview page, revoke a PAT.](/azure/devops/repos/git/media/my-profile-team-services-preview.png)

2. Under Security, select **Personal access tokens**. Select the token for which you want to revoke access, and then select **Revoke**.

   ![Revoke a token or all tokens](/azure/devops/repos/git/media/revoke-personal-access-tokens-preview.png)

3. Select **Revoke** in the confirmation dialog.

   ![Confirm revoke](/azure/devops/repos/git/media/revoke-token-confirmation-dialog-preview.png)

#### [Current page](#tab/current-page) 

1. From your home page, open your profile. Go to **Security** details.

   ![Go to the organization home page, open your profile, go to Security](/azure/devops/repos/git/media/my-profile-team-services.png)  

2. Select the token for which you want to revoke access, and then select **Revoke**.

   :::image type="content" source="~/repos/git/media/revoke-pat-current-view.png" alt-text="Revoke PAT":::

3. Select **Revoke** in the confirmation dialog.

   ![Confirm revoke](/azure/devops/repos/git/media/revoke-token-confirmation-dialog-preview.png)

* * *

::: moniker-end
