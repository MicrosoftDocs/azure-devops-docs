---
ms.topic: include
---

## Create a PAT

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).
  
2. From your home page, open user settings :::image type="icon" source="../../../media/icons/user-settings-gear.png" border="false"::: and select **Personal access tokens**.

   :::image type="content" source="../media/select-personal-access-tokens.jpg" alt-text="Screenshot showing selection, Personal Access Tokens.":::

3. Select **+ New Token**.

   :::image type="content" source="../media/select-new-token.png" alt-text="Screenshot showing selection, New Token.":::

4. Name your token, select the organization where you want to use the token, and then set your token to automatically expire after a set number of days.

   :::image type="content" source="../media/create-new-pat.png" alt-text="Screenshot showing entry of basic token information.":::

5. Select the [scopes](../../../integrate/get-started/authentication/oauth.md#scopes)
   for this token to authorize for *your specific tasks*.

   For example, to create a token to enable a [build and release agent](/azure/devops/pipelines/agents/agents) to authenticate to Azure DevOps Services, limit your token's scope to **Agent Pools (Read & manage)**. To read audit log events, and manage and delete streams, select **Read Audit Log**, and then select **Create**.

   :::image type="content" source="../media/select-pat-scopes-preview.png" alt-text="Screenshot showing selected scopes for a PAT.":::

   > [!NOTE]
   > You may be restricted from creating full-scoped PATs. If so, your Azure DevOps Administrator in Azure AD has enabled a policy which limits you to a specific custom defined set of scopes. For more information, see [Manage PATs with policies/Restrict creation of full-scoped PATs](../../../organizations/accounts/manage-pats-with-policies-for-administrators.md#restrict-creation-of-full-scoped-pats).
   > For a custom defined PAT, the required scope for accessing the Component Governance API, `vso.governance`, isn't selectable in the UI.

6. When you're done, copy the token and store it in a secure location. For your security, it doesn't display again.

   :::image type="content" source="../media/copy-token-to-clipboard.png" alt-text="Screenshot showing how to copy the token to your clipboard.":::

> [!WARNING]
> Treat and use a PAT like your password and keep it a secret.

::: moniker range=" < azure-devops-2019"

1. Sign in to your web portal (```https://{server}:8080/tfs/```).

2. From your home page, open your profile. Go to your security details.

  :::image type="content" source="../media/my-profile-team-services.png" alt-text="Screenshot showing home page, opening your profile, and the Security button."::: 

3. Create a personal access token.

  :::image type="content" source="../media/add-personal-access-token.png" alt-text="Screenshot showing adding a personal access token.":::

4. Name your token. Select a lifespan for your token.

   If you have more than one organization, you can also select the organization where you want to use the token.

   :::image type="content" source="../media/setup-personal-access-token.png" alt-text="Screenshot showing information entry, including token name and lifespan.":::

5. Select the [scopes](../../../integrate/get-started/authentication/oauth.md#scopes)
   for this token to authorize for *your specific tasks*.

   For example, to create a token to enable a [build and release agent](/azure/devops/pipelines/agents/agents) to authenticate, limit your token's scope to **Agent Pools (read, manage)**.

6. When you're done, make sure to *copy the token*. For your security, it doesn't display again. Use this token as your password. Select **Close**.

   :::image type="content" source="../../tfvc/media/create-personal-access-token.png" alt-text="Screenshot showing created token.":::

::: moniker-end

Use your PAT anywhere your user credentials are required for authentication in Azure DevOps.

> [!IMPORTANT]
> For organizations backed by Azure Active Directory, you have 90 days to sign in with your new PAT, otherwise it's considered inactive. For more information, see [User sign-in frequency for Conditional Access](/azure/active-directory/conditional-access/howto-conditional-access-session-lifetime).

### Notifications

Users receive two notifications during the lifetime of a PAT - one upon creation and the other seven days before the expiration.

After you create a PAT, you receive a notification similar to the following example. This notification confirms that your PAT was added to your organization.

   :::image type="content" source="/azure/devops/organizations/accounts/media/use-personal-access-tokens-to-authenticate/pat-creation.png" alt-text="Screenshot showing PAT created notification.":::

The following image shows an example of the seven-day notification before your PAT expires.

   :::image type="content" source="/azure/devops/organizations/accounts/media/use-personal-access-tokens-to-authenticate/pat-expiration.png" alt-text="Screenshot showing PAT near expiration notification.":::

::: moniker range=" < azure-devops"

For more information, see [Configure an SMTP server and customize email for alerts and feedback requests](/azure/devops/server/admin/setup-customize-alerts).

::: moniker-end

#### Unexpected notification

If you receive an unexpected PAT notification, an administrator or tool might have created a PAT on your behalf. See the following examples.

- When you connect to an Azure DevOps Git repo through git.exe. it creates a token with a display name like "git: `https://MyOrganization.visualstudio.com/` on MyMachine."
- When you or an administrator sets up an Azure App Service web app deployment, it creates a token with a display name like "Service Hooks: : Azure App Service: : Deploy web app."
- When you or an administrator sets up web load testing as part of a pipeline, it creates a token with a display name like "WebAppLoadTestCDIntToken."
- When a Microsoft Teams Integration Messaging Extension is set up, it creates a token with a display name like "Microsoft Teams Integration."

> [!WARNING]
> If you believe that a PAT exists in error, we suggest you [revoke the PAT](../../../organizations/accounts/admin-revoke-user-pats.md). Then, change your password. As an Azure AD user, check with your administrator to see if your organization was used from an unknown source or location. See also the FAQ about [accidentally checking in a PAT to a public GitHub repository](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md#q-what-happens-if-i-accidentally-check-my-pat-into-a-public-repository-on-github).

## Use a PAT

Your PAT is your identity and represents you when you use it, just like a password. 

**Git**

Git interactions require a username, which can be anything except the empty string.
To use a PAT with HTTP basic authentication, use `Base64-encode` for and `$MyPat`, which is included in the following code block.

#### [Windows](#tab/Windows/)

In PowerShell, enter the following code.

```powershell
$MyPat = 'yourPAT'

$B64Pat = [Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes("`:$MyPat"))

git -c http.extraHeader="Authorization: Basic $B64Pat" clone https://dev.azure.com/yourOrgName/yourProjectName/_git/yourRepoName


```

To keep your token more secure, use credential managers so you don't have to enter your credentials every time. We recommend [Git Credential Manager](https://github.com/GitCredentialManager/git-credential-manager). [Git for Windows](https://www.git-scm.com/download/win) is required.

#### [Linux/macOS](#tab/Linux/)

In Bash, enter the following code.

```bash
MY_PAT=yourPAT # replace "yourPAT" with "PatStringFromWebUI"
B64_PAT=$(printf ":%s" "$MY_PAT" | base64)
git -c http.extraHeader="Authorization: Basic ${B64_PAT}" clone https://dev.azure.com/yourOrgName/yourProjectName/_git/yourRepoName 
```

To keep your token more secure, use credential managers so you don't have to enter your credentials every time. We recommend [Git Credential Manager](https://github.com/GitCredentialManager/git-credential-manager).

***

**Existing repos**

For existing repositories, if you already added the origin using the username, run the following command first.

``git remote remove origin``

Otherwise, run the following command.

``git remote add origin https://<PAT>@<company_machineName>.visualstudio.com:/<path-to-git-repo> path to git repo = <project name>/_git/<repo_name> git push -u origin --all``

### Use a PAT in your code

You can use a PAT in your code.

#### [Windows](#tab/Windows/)

If you wish to provide the PAT through an HTTP header, first convert it to a Base64 string. The following example shows how to convert to Base64 using C#.

```cs

Authorization: Basic BASE64_USERNAME_PAT_STRING
```

The resulting string can then be provided as an HTTP header in the following format.

The following sample uses the [HttpClient class](/dotnet/api/system.net.http.httpclient) in C#.

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

> [!TIP]
> When you're using variables, add a `$` at the beginning of the string, like in the following example.
>
>```cs
>public static async void GetBuilds()
>{
>    try
>   {
>       var personalaccesstoken = "PATFROMWEB";
>
>       using (HttpClient client = new HttpClient())
>        {
>            client.DefaultRequestHeaders.Accept.Add(
>               new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));
>
>            client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic",
>                Convert.ToBase64String(
>                    System.Text.ASCIIEncoding.ASCII.GetBytes(
>                        string.Format("{0}:{1}", "", personalaccesstoken))));
>
>           using (HttpResponseMessage response = client.GetAsync(
>                        $"https://dev.azure.com/{organization}/{project}/_apis/build/builds?api-version=5.0").Result)
>            {
>                response.EnsureSuccessStatusCode();
>                string responseBody = await response.Content.ReadAsStringAsync();
>                Console.WriteLine(responseBody);
>            }
>        }
>    }
>    catch (Exception ex)
>    {
>        Console.WriteLine(ex.ToString());
>    }
>}
>```


#### [Linux/macOS](#tab/Linux/)

The following sample gets a list of builds using curl.

```curl

curl -u :{PAT} https://dev.azure.com/{organization}/_apis/build-release/builds
```

***

When your code is working, it's a good time to switch from basic auth to [OAuth](../../../integrate/get-started/authentication/oauth.md).

For more information and examples of how to use PATs, see the following articles:

- [Git credential managers](../set-up-credential-managers.md)
- [REST APIs](/rest/api/azure/devops)
- [NuGet on a Mac](../../../artifacts/nuget/consume.md#mac-os)
- [Reporting clients](../../../report/powerbi/client-authentication-options.md#enter-credentials-within-a-client)
- [Get started with Azure DevOps CLI](../../../cli/index.md).

::: moniker range="< azure-devops-2019"

If you enable IIS Basic Authentication, PATs aren't valid. For more information, see [Using IIS Basic Authentication on-premises](../../../integrate/get-started/authentication/iis-basic-auth.md).

::: moniker-end

::: moniker range="azure-devops"

## Modify a PAT

You can regenerate or extend a PAT, and modify its [scope](../../../integrate/get-started/authentication/oauth.md#scopes). After regeneration, the previous PAT is no longer authorized.

1. From your home page, open your user settings, and then select **Profile**.

   :::image type="content" source="../media/my-profile-team-services-preview.png" alt-text="Screenshot showing sequence of buttons to select to modify a PAT.":::

2. Under Security, select **Personal access tokens**. Select the token you want to modify, and then  **Edit**.

   :::image type="content" source="/azure/devops/repos/git/media/select-edit-pat-current-view.png" alt-text="Screenshot showing highlighted Edit button to modify PAT.":::

3. Edit the token name, token expiration, or the scope of access that's associated with the token, and then select **Save**.

   :::image type="content" source="../media/modify-pat.png" alt-text="Screenshot showing modified PAT.":::

## Revoke a PAT

You can revoke a PAT at any time, for various reasons.

1. From your home page, open your user settings, and then select **Profile**.

   :::image type="content" source="../media/my-profile-team-services-preview.png" alt-text="Screenshot showing sequence of buttons to select, Team Services, Preview page, and revoke a PAT.":::

2. Under Security, select **Personal access tokens**. Select the token for which you want to revoke access, and then select **Revoke**.

   :::image type="content" source="../media/revoke-personal-access-tokens-preview.png" alt-text="Screenshot showing selection to revoke a single token or all tokens.":::

3. Select **Revoke** in the confirmation dialog.

   :::image type="content" source="../media/revoke-token-confirmation-dialog-preview.png" alt-text="Screenshot showing confirmation screen to revoke PAT.":::

::: moniker-end
