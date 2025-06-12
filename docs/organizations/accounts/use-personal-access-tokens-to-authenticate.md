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
ms.date: 06/09/2025
monikerRange: '<= azure-devops'
---

# Use personal access tokens

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

A Personal Access Token (PAT) serves as an alternative password for authenticating into Azure DevOps. This PAT identifies you and determines your accessibility and scope of access. Treat PATs with the same level of caution as passwords.

When you use Microsoft tools, your Microsoft account (MSA) or Microsoft Entra ID is recognized and supported. If you use tools that don't support Microsoft Entra accounts, or if you prefer not to share your primary credentials, consider using PATs as an alternative authentication method. However, we recommend using [Microsoft Entra tokens](../../integrate/get-started/authentication/entra.md) over PATs whenever possible.

[!INCLUDE [use-microsoft-entra-reduce-pats](../../includes/use-microsoft-entra-reduce-pats.md)]

## Prerequisites

| Category | Requirements |
|--------------|-------------|
|**Permissions** |Permission to access and modify your user settings where PATs are managed. <br>- Go to **your profile** and select **User settings** > **Personal access tokens**. If you can see and manage your PATs here, you have the necessary permissions.<br>- Go to your project and select **Project settings** > **Permissions**. Find your user account in the list and check the permissions assigned to you. Look for permissions related to managing tokens or user settings.<br>- If your [organization has policies in place](manage-pats-with-policies-for-administrators.md), an administrator might need to grant you specific permissions or add you to an allowlist to create and manage PATs.<br>- PATs are connected to the user account that minted the token. Depending on the tasks the PAT performs, you might need more permissions yourself.|
|**Access levels** |At least **Basic** access.|
|**Tasks**|**Use PATs only when necessary and always regularly rotate them.** See our section on [Best Practices when using PATs](#best-practices-for-using-pats).|

## Create a PAT

1. Sign in to your organization (```https://dev.azure.com/{Your_Organization}```).
  
2. From your home page, open user settings :::image type="icon" source="../../media/icons/user-settings-gear.png" border="false"::: and select **Personal access tokens**.

   :::image type="content" source="media/pats/select-personal-access-tokens.png" alt-text="Screenshot showing selection, Personal Access Tokens.":::

3. Select **+ New Token**.

   :::image type="content" source="media/pats/select-new-token.png" alt-text="Screenshot showing selection, New Token.":::

4. Name your token, select the organization where you want to use the token, and then set your token to automatically expire after a set number of days.

   :::image type="content" source="media/pats/create-new-pat.png" alt-text="Screenshot showing entry of basic token information.":::

5. Select the [scopes](../../integrate/get-started/authentication/oauth.md#scopes)
   for this token to authorize for *your specific tasks*.

      For example, to create a token for a [build and release agent](../../pipelines/agents/agents.md) to authenticate to Azure DevOps, set the token's scope to **Agent Pools (Read & manage)**. To read audit log events and manage or delete streams, select **Read Audit Log**, and then select **Create**.

   :::image type="content" source="media/pats/select-pat-scopes-preview.png" alt-text="Screenshot showing selected scopes for a PAT.":::

   > [!NOTE]
   > Your administrator might [restrict you from creating full-scoped PATs or limit you to packaging-scope PATs only](manage-pats-with-policies-for-administrators.md). Reach out to your admin to get on the allowlist if you need access to more scopes.
   > Some scopes, for example, `vso.governance`, might not be available in the UI if they aren't for widespread public use.

6. When you're done, copy the token and store it in a secure location. For your security, it doesn't display again.

   :::image type="content" source="media/pats/copy-token-to-clipboard.png" alt-text="Screenshot showing how to copy the token to your clipboard.":::

Use your PAT anywhere your user credentials are required for authentication in Azure DevOps.

> [!IMPORTANT]
> - Treat a PAT with the same caution as your password and keep it confidential. **DO NOT SHARE PATS.**
> - For organizations backed by Microsoft Entra ID, you must sign in with your new PAT within 90 days or it becomes inactive. For more information, see [User sign-in frequency for Conditional Access](/azure/active-directory/conditional-access/howto-conditional-access-session-lifetime).

### Notifications

During the lifespan of a PAT, users receive two notifications: at time of creation and three days before expiration.

After you create a PAT, you might receive a notification similar to the following example. This notification serves as confirmation that your PAT was successfully added to your organization.

   :::image type="content" source="media/use-personal-access-tokens-to-authenticate/pat-creation.png" alt-text="Screenshot showing PAT created notification.":::

An expiration notification email is sent three days before expiration. If your administrator [removed your ability to create PATs in the organization](manage-pats-with-policies-for-administrators.md), the email indicates that it's no longer possible for you to regenerate PATs. Reach out to your [Project Collection Administrator](../security/look-up-project-collection-administrators.md) to be included in an allowlist for continued PAT creation permissions in that organization.

::: moniker range=" < azure-devops"

For more information, see [Configure an SMTP server and customize email for alerts and feedback requests](/azure/devops/server/admin/setup-customize-alerts).

::: moniker-end

#### Unexpected notification

If you receive an unexpected PAT notification, it might mean that an administrator or tool created a PAT for you. Here are some examples:

- A token named "git: `https://dev.azure.com/{Your_Organization}` on YourMachine" gets created when you connect to an Azure DevOps Git repo via git.exe.
- A token named "Service Hooks: Azure App Service: Deploy web app" gets created when you or an administrator sets up an Azure App Service web app deployment.
- A token named "WebAppLoadTestCDIntToken" gets created when web load testing gets set up as part of a pipeline by you or an administrator.
- A token named "Microsoft Teams Integration" gets created when a Microsoft Teams Integration Messaging Extension gets set up.

> [!WARNING]
> - [Revoke the PAT](admin-revoke-user-pats.md) (and change your password) if you suspect it exists in error.
> - Check with your administrator if you're a Microsoft Entra user to see if an unknown source or location accessed your organization.
> - Review the FAQ on [accidental PAT check-ins to public GitHub repositories](#q-what-happens-if-i-accidentally-check-my-pat-into-a-public-repository-on-github).

## Use a PAT

Your PAT serves as your digital identity, much like a password. You can use PATs as a quick way to do one-off requests or prototype an application locally. Use a PAT in your code to authenticate [REST APIs](/rest/api/azure/devops) requests and automate workflows by including the PAT in the authorization header of your request.

> [!IMPORTANT]
> Once your app code is working, switch to [Microsoft Entra OAuth to acquire tokens on-behalf-of your app's users](../../integrate/get-started/authentication/entra-oauth.md) or a [service principal or managed identity to acquire tokens as an application](../../integrate/get-started/authentication/service-principal-managed-identity.md). It isn't recommended to keep running apps or scripts with PATs long-term. Microsoft Entra tokens can be used anywhere a PAT is used.
> Consider [acquiring a Microsoft Entra token via the Azure CLI](../../cli/entra-tokens.md) for ad-hoc requests.

#### [Windows](#tab/Windows/)

To provide the PAT through an HTTP header, you must first convert it to a `Base64` string. It can then be provided as an HTTP header in the following format.

```cs

Authorization: Basic BASE64_USERNAME_PAT_STRING
```

#### [Linux/macOS](#tab/Linux/)

The following sample gets a list of builds using curl.

```curl

curl -u :{PAT} https://dev.azure.com/{organization}/_apis/build-release/builds
```

* * *

## Modify a PAT

Do the following steps to:

- Regenerate a PAT to create a new token, which invalidates the previous one.
- Extend a PAT to increase its validity period.
- Alter the [scope](../../integrate/get-started/authentication/oauth.md#scopes) of a PAT to change its permissions.

1. From your home page, open user settings :::image type="icon" source="../../media/icons/user-settings-gear.png" border="false"::: and select **Personal access tokens**.

2. Select the token you want to modify, and then  **Edit**.

   :::image type="content" source="media/pats/select-edit-pat-current-view.png" alt-text="Screenshot showing highlighted Edit button to modify PAT.":::

3. Edit the token name, token expiration, or the scope of access associated with the token, and then select **Save**.

   :::image type="content" source="media/pats/modify-pat.png" alt-text="Screenshot showing modified PAT.":::

## Revoke a PAT

You can revoke a PAT at any time for these and other reasons:

- Revoke a PAT if you suspect it's compromised.
- Revoke a PAT when it's no longer needed.
- Revoke a PAT to enforce security policies or compliance requirements.

1. From your home page, open user settings :::image type="icon" source="../../media/icons/user-settings-gear.png" border="false"::: and select **Personal access tokens**.

2. Under Security, select **Personal access tokens**. Select the token for which you want to revoke access, and then select **Revoke**.

   :::image type="content" source="media/pats/revoke-personal-access-tokens-preview.png" alt-text="Screenshot showing selection to revoke a single token or all tokens.":::

3. Select **Revoke** in the confirmation dialog.

   :::image type="content" source="media/pats/revoke-token-confirmation-dialog-preview.png" alt-text="Screenshot showing confirmation screen to revoke PAT.":::

## PAT Lifecycle Management APIs

The [PAT Lifecycle Management APIs](/rest/api/azure/devops/tokens) might be useful when maintaining large volumes of tokens through UI is unsustainable. Managing PAT rotation programmatically also opens the opportunity to rotate PATs regularly and shorten their default lifespans. Our [sample Python app](https://github.com/microsoft/azure-devops-auth-samples/tree/master/PersonalAccessTokenAPIAppSample) can be configured with your Microsoft Entra tenant and Azure DevOps organization. 

Some things to note about these APIs:

* [Microsoft Entra access tokens](../../integrate/get-started/authentication/entra.md) are required to access this API as generally a stronger form of authentication is recommended when minting new tokens.
* Only users or apps using an "on-behalf-of user" flow can generate PATs. Apps using "on-behalf-of application" flows or authentication flows that don't issue Microsoft Entra access tokens aren't valid for use with this API. As such, [service principals or managed identities](../../integrate/get-started/authentication/service-principal-managed-identity.md) can't create or manage PATs.
* Previously the PAT Lifecycle Management APIs only supported the `user_impersonation` scope, but now the `vso.pats` are available and the recommended scope to use with these APIS. Downscope all apps that previously relied on `user_impersonation` to call these APIs.

## Changes to format

As of July 2024, we updated the format of PAT strings to improve secret detection in our [leaked PAT detection tooling](manage-pats-with-policies-for-administrators.md#revoke-leaked-pats-automatically-tenant-policy) and [partner offerings](../../repos/security/github-advanced-security-secret-scanning.md). This new PAT format includes more identifiable bits to improve the false positive detection rate in these detection tools and mitigate detected leaks faster.

* New tokens are now **84** characters long, with 52 characters being randomized data, which improves overall entropy, making tokens more resistant to brute force attacks.
* Tokens issued by our service include a fixed `AZDO` signature at positions 76-80.

If you're using a PAT issued before that data, regenerate your PAT. If you integrate with PATs and have PAT validation built in, update your validate code to accommodate both new and existing token lengths.

> [!WARNING]
> Both formats remain valid for the foreseeable future. As adoption of the new format increases, we might retire older 52-character PATs.

## Best practices for using PATs

### Consider alternatives

* Acquire a Microsoft Entra token via the [Azure CLI](../../cli/entra-tokens.md) for ad-hoc requests instead of minting a longer-lived PAT.
* Use credential managers like [Git Credential Manager](https://github.com/git-ecosystem/git-credential-manager) or [Azure Artifacts Credential Manager](https://github.com/microsoft/artifacts-credprovider) to simplify credential management, with authentication set to `oauth` or Microsoft Entra tokens.

### Creating PATs

* Don't put personal data in the PAT name. Don't rename the PAT name to include some or all of the actual PAT token.
* Avoid creating global PATs unless necessary across all organizations.
* Use a different token per flow or user case.
* Select only the minimum scopes required for each PAT. Grant the least privilege necessary for your specific task, and create separate PATs with limited scopes for different workflows instead of using a single, broad-scoped token. If your PAT needs read-only permissions, don't provide write permissions until necessary.
* Keep PAT lifespans short (weekly is ideal, even shorter is better).

### Managing PATs
* **Don't share your PATs!**
* **Store your PATs in a secure key management solution**, like [Azure KeyVault](/azure/key-vault/general/overview).
* Regularly rotate or regenerate your PATs via UI or PAT Lifecycle Management APIs.
* Revoke PATs when no longer needed. 
* Rotate your PATs to use the [new PAT format](#changes-to-format) for better leaked secret detection and revocation by our first-party tools.

### For admins
* Tenant admins can set [policies to restrict](manage-pats-with-policies-for-administrators.md) global PAT creation, full scoped PAT creation, and long-lived PAT duration.
* Tenant admins can [revoke PATs for their organization users](admin-revoke-user-pats.md) if the PAT is compromised.
* Organization admins can [restrict PAT creation in an organization](manage-pats-with-policies-for-administrators.md). If PATs are still needed, limit their creation to only ones on the allowlist.

## FAQs

#### Q: Why can't I edit or regenerate a PAT scoped to a single organization?

A: Sign into the organization where your PAT is scoped. You can view your PATs when you're signed into any organization in the same Microsoft Entra ID by changing the *Access scope* filter, but you can only edit organization-scoped tokens when signed into the specific organization.

#### Q: What happens to a PAT if a user account is disabled?

A: When a user is removed from Azure DevOps, the PAT invalidates within 1 hour. If your organization is connected to Microsoft Entra ID, the PAT also invalidates in Microsoft Entra ID, as it belongs to the user. We recommend rotating the PAT to another user or service account to keep services running.

#### Q: Can I use PATs with all Azure DevOps REST APIs?

A: No. You can use PATs with most Azure DevOps REST APIs, but [organizations and profiles](/rest/api/azure/devops/) and the PAT Management Lifecycle APIs only support [Microsoft Entra tokens](../../integrate/get-started/authentication/entra-oauth.md).

#### Q: What happens if I accidentally check my PAT into a public repository on GitHub?

A: Azure DevOps scans for PATs checked into public repositories on GitHub. When we find a leaked token, we immediately send a detailed email notification to the token owner and log an event in your Azure DevOps organization's [audit log](../audit/azure-devops-auditing.md#review-audit-log). We encourage affected users to mitigate the issue by [revoking the leaked token](use-personal-access-tokens-to-authenticate.md#revoke-a-pat) and replacing it with a new token. 

Unless you disabled the *Automatically revoke leaked personal access tokens* policy, we immediately revoke the leaked PAT. For more information, see [Revoke leaked PATs automatically](manage-pats-with-policies-for-administrators.md#revoke-leaked-pats-automatically-tenant-policy).

#### Q: Can I use a personal access token as an ApiKey to publish NuGet packages to an Azure Artifacts feed using the dotnet/nuget.exe command line?

A: No. Azure Artifacts doesn't support passing a PAT as an ApiKey. When using a local development environment, we recommend installing the [Azure Artifacts Credential Provider](https://github.com/microsoft/artifacts-credprovider) to authenticate with Azure Artifacts. For more information, see the following examples: [dotnet](../../artifacts/nuget/dotnet-exe.md), [NuGet.exe](../../artifacts/nuget/publish.md). If you want to publish your packages using Azure Pipelines, use the [NuGet Authenticate](/azure/devops/pipelines/tasks/reference/nuget-authenticate-v1) task to authenticate with your feed. See [example](../../pipelines/artifacts/nuget.md).

#### Q: Why did my PAT stop working?

A: PAT authentication requires you to regularly sign into Azure DevOps using the full authentication flow. Signing in once every 30 days is sufficient for many users, but you might need to sign in more frequently depending on your Microsoft Entra configuration. If your PAT stops working, first try signing into your organization and complete the full authentication prompt. If your PAT still doesn't work, check if it expired.

Enabling IIS Basic Authentication invalidates using PATs for Azure DevOps Server. We recommend that you keep [IIS Basic Authentication](/iis/configuration/system.webserver/security/authentication/basicauthentication) turned **off** always. 

> [!WARNING]
> If you use Git with IIS Basic Authentication, Git breaks because it requires PATs for user authentication. You can add an extra header to Git requests to use it with IIS Basic Authentication, but we don't recommend this action. The extra header must be used for all Azure DevOps Server installations, as Windows Auth also prevents using PATs. The extra header must also include a base 64 encoding of `user:PAT`.
>   ```
>   git -c http.extraheader='Authorization: Basic [base 64 encoding of "user:password"]' ls-remote http://tfsserver:8080/tfs/DefaultCollection/_git/projectName
>   ```

#### Q: How do I create access tokens that aren't tied to a person?

A: All PATs are associated with the user identity that created it. Applications can't create PATs.

In Azure DevOps, you can generate access tokens that aren't linked to a specific user by using Microsoft Entra tokens issued by an [application service principal or managed identity](../../integrate/get-started/authentication/service-principal-managed-identity.md). For pipelines, use [service connections](../../pipelines/library/service-endpoints.md) to securely authenticate and authorize automated tasks without relying on user-specific credentials.

### Q: How can I regenerate/rotate PATs through the API? I saw that option in the UI, but I don’t see a similar method in the API.
The 'Regenerate' functionality available in the UI actually accomplishes a few actions, which can be replicated through API. 

To rotate your PAT, do the following steps:
1. See PAT metadata with a **GET** call, 
2. Create a new PAT with the old PAT ID using a **POST** call, 
3. Revoke the old PAT using a **DELETE** call.

### Q: I see a "Need admin approval" pop-up when I try to use a Microsoft Entra app to call the PAT Lifecycle Management APIs.
Your tenant's security policies require admin consent before applications can access organization resources in the organization. Reach out to your tenant administrator.

### Q: Can I use a service principal to create or manage PATs?
No, personal access tokens belong to a user identity. Microsoft Entra [service principals or managed identities](../../integrate/get-started/authentication/service-principal-managed-identity.md) are able to generate short-lived Microsoft Entra tokens that can be used in most places where a PAT is accepted. Learn more about [our efforts to reduce PAT usage across Azure DevOps](https://devblogs.microsoft.com/devops/reducing-pat-usage-across-azure-devops/) and explore replacing PATs with Microsoft Entra tokens.


## Related articles

* [Use policies to manage personal access tokens for users](manage-pats-with-policies-for-administrators.md)
* [Revoke user PATs (for admins)](admin-revoke-user-pats.md)
* [Authenticate with Microsoft Entra tokens](../../integrate/get-started/authentication/entra.md)
