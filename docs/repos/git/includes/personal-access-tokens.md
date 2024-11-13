---
ms.topic: include
---

## Create a PAT

1. Sign in to your organization (```https://dev.azure.com/{Your_Organization}```).
  
2. From your home page, open user settings :::image type="icon" source="../../../media/icons/user-settings-gear.png" border="false"::: and select **Personal access tokens**.

   :::image type="content" source="../media/select-personal-access-tokens.png" alt-text="Screenshot showing selection, Personal Access Tokens.":::

3. Select **+ New Token**.

   :::image type="content" source="../media/select-new-token.png" alt-text="Screenshot showing selection, New Token.":::

4. Name your token, select the organization where you want to use the token, and then set your token to automatically expire after a set number of days.

   :::image type="content" source="../media/create-new-pat.png" alt-text="Screenshot showing entry of basic token information.":::

5. Select the [scopes](../../../integrate/get-started/authentication/oauth.md#scopes)
   for this token to authorize for *your specific tasks*.

      For example, to create a token for a [build and release agent](/azure/devops/pipelines/agents/agents) to authenticate to Azure DevOps, set the token's scope to **Agent Pools (Read & manage)**. To read audit log events and manage or delete streams, select **Read Audit Log**, and then select **Create**.

   :::image type="content" source="../media/select-pat-scopes-preview.png" alt-text="Screenshot showing selected scopes for a PAT.":::

   > [!NOTE]
   > You might be restricted from creating full-scoped PATs. If so, your Azure DevOps Administrator in Microsoft Entra ID has enabled a policy that limits you to a specific custom-defined set of scopes. For more information, see [Manage PATs with policies/Restrict creation of full-scoped PATs](../../../organizations/accounts/manage-pats-with-policies-for-administrators.md#restrict-creation-of-full-scoped-pats).
   > For a custom-defined PAT, the required scope for accessing the Component Governance API, `vso.governance`, isn't selectable in the UI.

6. When you're done, copy the token and store it in a secure location. For your security, it doesn't display again.

   :::image type="content" source="../media/copy-token-to-clipboard.png" alt-text="Screenshot showing how to copy the token to your clipboard.":::

Use your PAT anywhere your user credentials are required for authentication in Azure DevOps.

> [!IMPORTANT]
> - Treat a PAT with the same caution as your password and keep it confidential.
> - Sign in with your new PAT within 90 days for organizations backed by Microsoft Entra ID; otherwise, the PAT becomes inactive. For more information, see [User sign-in frequency for Conditional Access](/azure/active-directory/conditional-access/howto-conditional-access-session-lifetime).

### Notifications

During the lifespan of a PAT, users receive two notifications: the first at the time of creation and the second seven days before its expiration.

After you create a PAT, you receive a notification similar to the following example. This notification serves as confirmation that your PAT was successfully added to your organization.

   :::image type="content" source="/azure/devops/organizations/accounts/media/use-personal-access-tokens-to-authenticate/pat-creation.png" alt-text="Screenshot showing PAT created notification.":::

The following image shows an example of the seven-day notification before your PAT expires.

   :::image type="content" source="/azure/devops/organizations/accounts/media/use-personal-access-tokens-to-authenticate/pat-expiration.png" alt-text="Screenshot showing PAT near expiration notification.":::

::: moniker range=" < azure-devops"

For more information, see [Configure an SMTP server and customize email for alerts and feedback requests](/azure/devops/server/admin/setup-customize-alerts).

::: moniker-end

#### Unexpected notification

If you get an unexpected PAT notification, it might mean that an administrator or tool created a PAT for you. Here are some examples.

- A token named "git: `https://dev.azure.com/{Your_Organization}` on YourMachine" gets created when you connect to an Azure DevOps Git repo via git.exe.
- A token named "Service Hooks: : Azure App Service: : Deploy web app" gets created when you or an administrator sets up an Azure App Service web app deployment.
- A token named "WebAppLoadTestCDIntToken" gets created when web load testing is set up as part of a pipeline by you or an administrator.
- A token named "Microsoft Teams Integration" gets created when a Microsoft Teams Integration Messaging Extension is set up.


> [!WARNING]
> - Revoke the PAT if you suspect it exists in error. Follow the steps to [revoke the PAT](../../../organizations/accounts/admin-revoke-user-pats.md) and change your password.
> - Check with your administrator if you are a Microsoft Entra user to see if your organization was accessed by an unknown source or location.
> - Review the FAQ on [accidental PAT check-ins to public GitHub repositories](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md#q-what-happens-if-i-accidentally-check-my-pat-into-a-public-repository-on-github).

## Use a PAT

Your PAT serves as your digital identity, much like a password.

**Git**

Git interactions require a username, which can be anything except an empty string. To use a PAT with HTTP basic authentication, `Base64-encode` your `$MyPat` as shown in the following code block.

#### [Windows](#tab/Windows/)

In PowerShell, enter the following code.

```powershell
$MyPat = 'yourPat'
$headerValue = "Authorization: Basic " + [Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes(":" + $MyPat))
$env:GIT_AUTH_HEADER = $headerValue

git --config-env=http.extraheader=GIT_AUTH_HEADER clone https://dev.azure.com/yourOrgName/yourProjectName/_git/yourRepoName
```

Use credential managers to avoid entering your credentials every time and keep your token more secure:

- Use [Git Credential Manager](https://github.com/GitCredentialManager/git-credential-manager).
- Install [Git for Windows](https://www.git-scm.com/download/win).

#### [Linux/macOS](#tab/Linux/)

In Bash, enter the following code.

```bash
MY_PAT=yourPAT # replace "yourPAT" with "PatStringFromWebUI"
export HEADER_VALUE=$(echo -n "Authorization: Basic "$(printf ":%s" "$MY_PAT" | base64))

git --config-env=http.extraheader=HEADER_VALUE clone https://dev.azure.com/yourOrgName/yourProjectName/_git/yourRepoName
```

To keep your token more secure, use credential managers so you don't have to enter your credentials every time. We recommend [Git Credential Manager](https://github.com/GitCredentialManager/git-credential-manager).

***

### Existing repositories

- **Remove existing origin:** If you previously added the origin using a username, remove it by running the following command:

   ``git remote remove origin``

- **Authenticate with a PAT:** If you encounter issues with standard authentication, run the following command to authenticate via the command line:  

   ``git remote add origin https://dev.azure.com/<PAT>@<company_machineName>:/<project-name>/_git/<repo_name>``

   ``git push -u origin --all``

   The `path to git repo = /_git/do` refers to the URL path structure used in Azure DevOps for Git repositories. The `/_git/` segment indicates that you're accessing a Git repository, and you should replace `do` with the actual name of your repository. For example, if your repository is named `my-repo`, the path would be '`/_git/my-repo`'.

- **Clone repository:** If you're using Git and need to authenticate, run the following command:

   ``git clone https://{organization}@dev.azure.com/{organization}/_git/{repository}``

   Replace `{organization}` with your Azure DevOps organization name and `{repository}` with the name of your repository.

### Use a PAT in your code

You can use a PAT in your code to authenticate API requests and automate workflows. To do so, include the PAT in the authorization header of your HTTP requests.

#### [Windows](#tab/Windows/)

To provide the PAT through an HTTP header, first convert it to a `Base64` string. The following example shows how to convert to `Base64` using C#.

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

- [Set up Git credential managers](../set-up-credential-managers.md)
- [Access REST APIs](/rest/api/azure/devops)
- [Use NuGet on a Mac](../../../artifacts/nuget/consume.md)
- [Authenticate reporting clients](../../../report/powerbi/client-authentication-options.md#enter-credentials-within-a-client)
- [Get started with Azure DevOps CLI](../../../cli/index.md)

::: moniker range="azure-devops"

## Modify a PAT

Do the following steps to:

- Regenerate a PAT to create a new token, which invalidates the previous one.
- Extend a PAT to increase its validity period.
- Alter the [scope](../../../integrate/get-started/authentication/oauth.md#scopes) of a PAT to change its permissions.

1. From your home page, open your user settings, and then select **Profile**.

   :::image type="content" source="../media/my-profile-team-services-preview.png" alt-text="Screenshot showing sequence of buttons to select to modify a PAT.":::

2. Under Security, select **Personal access tokens**. Select the token you want to modify, and then  **Edit**.

   :::image type="content" source="../media/select-edit-pat-current-view.png" alt-text="Screenshot showing highlighted Edit button to modify PAT.":::

3. Edit the token name, token expiration, or the scope of access associated with the token, and then select **Save**.

   :::image type="content" source="../media/modify-pat.png" alt-text="Screenshot showing modified PAT.":::

## Revoke a PAT

You can revoke a PAT at any time for these and other reasons:

- Revoke a PAT if you suspect it is compromised.
- Revoke a PAT when it's no longer needed.
- Revoke a PAT to enforce security policies or compliance requirements.

1. From your home page, open your user settings, and then select **Profile**.

   :::image type="content" source="../media/my-profile-team-services-preview.png" alt-text="Screenshot showing sequence of buttons to select, Team Services, Preview page, and revoke a PAT.":::

2. Under Security, select **Personal access tokens**. Select the token for which you want to revoke access, and then select **Revoke**.

   :::image type="content" source="../media/revoke-personal-access-tokens-preview.png" alt-text="Screenshot showing selection to revoke a single token or all tokens.":::

3. Select **Revoke** in the confirmation dialog.

   :::image type="content" source="../media/revoke-token-confirmation-dialog-preview.png" alt-text="Screenshot showing confirmation screen to revoke PAT.":::

For more information, see [Revoke user PATs for admins](../../../organizations/accounts/admin-revoke-user-pats.md).

::: moniker-end
