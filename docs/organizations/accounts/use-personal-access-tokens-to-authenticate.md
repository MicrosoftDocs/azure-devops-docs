---
title: Use personal access tokens
titleSuffix: Azure DevOps
ms.custom: ai-video-demo
ai-usage: ai-assisted
description: Learn how to create and manage personal access tokens (PATs) as alternate passwords to authenticate to Azure DevOps.
ms.subservice: azure-devops-security
ms.assetid: d980d58e-4240-47c7-977c-baaa7028a1d8
ms.topic: how-to
ms.author: chcomley
author: chcomley
ms.date: 10/24/2024
monikerRange: '<= azure-devops'
---

# Use personal access tokens

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

A Personal Access Token (PAT) serves as an alternative password for authenticating into Azure DevOps. This PAT identifies you and determines your accessibility and scope of access. Therefore, treat PATs with the same level of caution as passwords.

When you use Microsoft tools, your Microsoft account (MSA) or Microsoft Entra ID is a recognized and supported method. If you use non-Microsoft tools that don't support Microsoft Entra accounts, or if you prefer not to share your primary credentials with these tools, PATs can be a suitable alternative. Otherwise, we recommend [Microsoft Entra tokens](../../integrate/get-started/authentication/entra.md) over PATs whenever possible. We recommend reviewing our [authentication guidance](../../integrate/get-started/authentication/authentication-guidance.md) to choose the appropriate authentication mechanism for your needs.

You can manage PATs through the following methods:
* **User interface (UI):** Through user settings, as detailed in this article.
* [**PAT Lifecycle Management APIs**](manage-personal-access-tokens-via-api.md)
* [Git credential managers](../../repos/git/set-up-credential-managers.md) for Git operations. Credential managers facilitate token management. Without one, users must input their credentials each time.

## Prerequisites

- **Permissions:** 
  - Have permission to access and modify your user settings where PATs are managed.
    - **Check permissions:** To check your permissions, do either of the following processes in Azure DevOps:
      - Go to **your profile** and select **User settings** > **Personal access tokens**. If you can see and manage your PATs here, you have the necessary permissions.
      - Go to your project and select **Project settings** > **Permissions**. Find your user account in the list and check the permissions assigned to you. Look for permissions related to managing tokens or user settings.
  - If your [organization has policies in place](manage-pats-with-policies-for-administrators.md), an Azure DevOps Administrator might need to grant you specific permissions or add you to an allowlist to create and manage PATs.
  - PATs are connected to the user account that minted the token. Depending on the tasks you want the PAT to perform, you might need additional permissions yourself.
- **Access levels:** Have at least Basic access.
- **Security best practices:** Familiarize yourself with [security best practices](../security/security-best-practices.md) for managing PATs. **Use them only when necessary and always regularlu rotate them.**

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

Your PAT serves as your digital identity, much like a password. PATs may be used as a quick way to do one-off requests or prototype an application locally. 

> [!IMPORTANT]
> When your code is working, it's a good time to switch from basic auth to [Microsoft Entra OAuth](../../../integrate/get-started/authentication/entra-oauth.md). Microsoft Entra tokens can be used anywhere a PAT is used, unless specified below.

### Use a PAT in your code

You can use a PAT in your code to authenticate [REST APIs](/rest/api/azure/devops) requests and automate workflows. To do so, include the PAT in the authorization header of your HTTP requests.

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

Some more examples of how to use PATs can be found in the following articles:

- [Authenticate with your Git repos](../auth-overview.md)
- [Set up Git credential managers (GCM) to connect with Git repositories](../set-up-credential-managers.md)
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


## Changes to format

As of July 2024, we significantly changed the format of PATs issued by Azure DevOps. These changes provide more security benefits and improve secret detection tooling available through our partner offerings, like [GitHub Advanced Security for Azure DevOps](https://devblogs.microsoft.com/devops/github-advanced-security-for-azure-devops-public-preview-starts-now/). This new PAT format follows the recommended format across all Microsoft products. The inclusion of more identifiable bits improves the false positive detection rate of these secret detection tools and enables us to mitigate detected leaks faster.

Key changes:
* **Increased token length:** The new tokens are now **84** characters long, with 52 characters being randomized data. This increased length improves overall entropy, making the tokens more resistant to potential brute force attacks.
* **Fixed signature:** Tokens issued by our service include a fixed `AZDO` signature at positions 76-80.

Action required:
* **Regenerate existing PATs:** We strongly recommend regenerating all PATs currently in use to take advantage of these security enhancements.
* **Integrator support:** Integrators should update their systems to accommodate both the new and existing token lengths.

> [!IMPORTANT]
> Both formats remain valid for the foreseeable future, but we **actively encourage customers to transition to the new 84-character format**. As adoption of the new format increases, we consider retiring the older 52-character format and all tokens issued in that style.

## Related articles

* [Learn about security, authentication, and authorization](../security/about-security-identity.md)
* [Review default permissions and access for Azure DevOps](../security/permissions-access.md)
* [Revoke user PATs (for admins)](admin-revoke-user-pats.md)
* [Manage service principals and managed identities in Azure DevOps](../../integrate/get-started/authentication/service-principal-managed-identity.md)

::: moniker range="azure-devops"

## FAQs

### Q: Why can't I edit or regenerate a PAT scoped to a single organization?

A: Ensure you're signed into the organization where your PAT is scoped. You can ***view*** all of your PATs while signed into any organization in the same Microsoft Entra ID, but you can only ***edit*** organization-scoped tokens when you're signed into the organization to which they're scoped.

### Q: What happens to a PAT if a user account is disabled?

A: When a user is removed from Azure DevOps, the PAT invalidates within 1 hour. If your organization is connected to Microsoft Entra ID, the PAT also invalidates in Microsoft Entra ID, as it belongs to the user. We recommend rotating the PAT to another user or service account to keep services running.

### Q: Is there a way to renew a PAT via REST API?

A: Yes, there's a way to renew, manage, and create PATs using our [PAT Lifecycle Management APIs](manage-personal-access-tokens-via-api.md). For more information, see [Manage PATs using REST API](manage-personal-access-tokens-via-api.md) and [FAQs](manage-personal-access-tokens-via-api.md#q-how-can-i-regeneraterotate-pats-through-the-api-i-saw-that-option-in-the-ui-but-i-dont-see-a-similar-method-in-the-api).

### Q: Can I use PATs with all Azure DevOps REST APIs?

A: No. You can use basic auth with most Azure DevOps REST APIs, but [organizations and profiles](/rest/api/azure/devops/) and the [PAT Management Lifecycle APIs](manage-personal-access-tokens-via-api.md)) only support [Microsoft Entra OAuth](../../integrate/get-started/authentication/entra-oauth.md). For an example on how to set up an Entra app to call such APIs, see [the Manage PATs using REST API docs](manage-personal-access-tokens-via-api.md).

### Q: What happens if I accidentally check my PAT into a public repository on GitHub?

A: Azure DevOps scans for PATs checked into public repositories on GitHub. When we find a leaked token, we immediately send a detailed email notification to the token owner and log an event in your Azure DevOps organization's [audit log](../audit/azure-devops-auditing.md#review-audit-log). Unless you disabled the *Automatically revoke leaked personal access tokens* policy, we immediately revoke the leaked PAT. We encourage affected users to mitigate the issue by [revoking the leaked token](use-personal-access-tokens-to-authenticate.md#revoke-a-pat) and replacing it with a new token.

For more information, see [Revoke leaked PATs automatically](manage-pats-with-policies-for-administrators.md#revoke-leaked-pats-automatically).

### Q: Can I use a personal access token as an ApiKey to publish NuGet packages to an Azure Artifacts feed using the dotnet/nuget.exe command line?

A: No. Azure Artifacts doesn't support passing a personal access token as an ApiKey. When using a local development environment, we recommended installing the [Azure Artifacts Credential Provider](https://github.com/microsoft/artifacts-credprovider) to authenticate with Azure Artifacts. For more information, see the following examples: [dotnet](../../artifacts/nuget/dotnet-exe.md), [NuGet.exe](../../artifacts/nuget/publish.md).
If you want to publish your packages using Azure Pipelines, use the [NuGet Authenticate](/azure/devops/pipelines/tasks/reference/nuget-authenticate-v1) task to authenticate with your feed [example](../../pipelines/artifacts/nuget.md).

### Q: Why did my PAT stop working?

A: PAT authentication requires you to regularly sign into Azure DevOps using the full authentication flow. Signing in once every 30 days is sufficient for many users, but you might need to sign in more frequently depending on your Microsoft Entra configuration. If your PAT stops working, first try signing into your organization and complete the full authentication prompt. If your PAT still doesn't work, check if it expired.

### Q: How do I create access keys that aren't tied to a specific person for deployment purposes?

A: In Azure DevOps, you can create access keys that aren't tied to a specific person by using Service Principals or Manage Identities. For more information, see [Manage service connections](../../pipelines/library/service-endpoints.md), [Use Azure Key Vault secrets in Azure Pipelines](../../pipelines/release/azure-key-vault.md).

::: moniker-end
