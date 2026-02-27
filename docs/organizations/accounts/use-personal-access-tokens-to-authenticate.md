---
title: Use personal access tokens
titleSuffix: Azure DevOps
ms.custom: ai-video-demo, pat-reduction
ai-usage: ai-assisted
description: Learn how to create and manage personal access tokens (PATs) as alternate passwords to authenticate to Azure DevOps.
ms.subservice: azure-devops-security
ms.assetid: d980d58e-4240-47c7-977c-baaa7028a1d8
ms.topic: how-to
ms.author: chcomley
author: chcomley
ms.date: 02/24/2026
monikerRange: '<= azure-devops'
---

# Use personal access tokens

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

A personal access token (PAT) serves as an alternative password for authenticating into Azure DevOps.
This PAT identifies you and determines your accessibility and scope of access.
Treat PATs with the same level of caution as passwords.

> [!CAUTION]
> Avoid using PATs when a more secure authentication method is available.
> PATs carry inherent security risks because they're long-lived credentials that can be leaked, stolen, or misused.
> Use [Microsoft Entra tokens](../../integrate/get-started/authentication/entra.md), managed identities, or service principals instead whenever possible.

When you use Microsoft tools, your Microsoft account or Microsoft Entra ID is recognized and supported.
If you use tools that don't support Microsoft Entra accounts, or if you prefer not to share your primary credentials, consider using PATs as an alternative authentication method.

[!INCLUDE [use-microsoft-entra-reduce-pats](../../includes/use-microsoft-entra-reduce-pats.md)]

## Prerequisites

| Category | Requirements |
|--------------|-------------|
|**Permissions** |Permission to access and modify your user settings where PATs are managed. <br>- Go to your profile and select **User settings** > **Personal access tokens**. If you can see and manage your PATs here, you have the necessary permissions.<br>- Go to your project and select **Project settings** > **Permissions**. Find your user account in the list and check the permissions that are assigned to you. Look for permissions related to managing tokens or user settings.<br>- If your [organization has policies in place](manage-pats-with-policies-for-administrators.md), an administrator might need to grant you specific permissions or add you to an allow list to create and manage PATs.<br>- PATs are connected to the user account that minted the token. Depending on the tasks the PAT performs, you might need more permissions yourself.|
|**Access levels** |At least Basic access.|
|**Tasks**|*Use PATs only when necessary and always rotate them regularly.* See the section [Best practices for using PATs](#best-practices-for-using-pats).|

## Create a PAT

:::moniker range="< azure-devops"
> [!NOTE]
> The following steps and screenshots reflect Azure DevOps Services. The Azure DevOps Server experience might vary slightly.
:::moniker-end

::: moniker range="azure-devops"

1. Sign in to your organization (`https://dev.azure.com/{Your_Organization}`).

::: moniker-end

::: moniker range="< azure-devops"

1. Sign in to your Azure DevOps Server web portal (`https://{server}/{collection}` or `http://{server}:{port}/tfs/{collection}`).

::: moniker-end
  
2. From your home page, open user settings :::image type="icon" source="../../media/icons/user-settings-gear.png" border="false"::: and select **Personal access tokens**.

   :::image type="content" source="media/pats/select-personal-access-tokens.png" alt-text="Screenshot shows Personal access tokens option in user settings.":::

3. Select **+ New Token**.

   :::image type="content" source="media/pats/select-new-token.png" alt-text="Screenshot shows New Token button on the Personal access tokens page.":::

4. Name your token, select the organization where you want to use the token, and then set your token to automatically expire after a set number of days.

   :::image type="content" source="media/pats/create-new-pat.png" alt-text="Screenshot shows Create a new personal access token dialog with name, organization, and expiration fields.":::

5. Select the [scopes](../../integrate/get-started/authentication/oauth.md#available-scopes)
   for this token to authorize for *your specific tasks*.

      For example, to create a token for a [build and release agent](../../pipelines/agents/agents.md) to authenticate to Azure DevOps, set the token's scope to **Agent Pools (Read & manage)**. To read audit log events and manage or delete streams, select **Read Audit Log**, and then select **Create**.

   :::image type="content" source="media/pats/select-pat-scopes-preview.png" alt-text="Screenshot shows scope selection options for a PAT.":::

   Your administrator might [restrict you from creating full-scoped PATs or limit you to packaging-scope PATs only](manage-pats-with-policies-for-administrators.md).
   Reach out to your admin to get on the allow list if you need access to more scopes.
   Some scopes, for example, `vso.governance`, might not be available in the user interface (UI) if they aren't for widespread public use.

6. When you're finished, copy the token and store it in a secure location. For your security, it doesn't display again.

   :::image type="content" source="media/pats/copy-token-to-clipboard.png" alt-text="Screenshot shows Copy token to clipboard button with the generated PAT value.":::

You can use your PAT anywhere that your user credentials are required for authentication in Azure DevOps. Remember:

- Treat a PAT with the same caution as your password, and keep it confidential. *Don't share PATs.*
- For organizations backed by Microsoft Entra ID, sign in with your new PAT within 90 days or it becomes inactive.
  For more information, see [User sign-in frequency for conditional access](/azure/active-directory/conditional-access/howto-conditional-access-session-lifetime).

### Notifications

During a PAT's lifespan, users receive two notifications: one when the PAT is created and another before it expires.

After you create a PAT, you might receive a notification similar to the following example.
This notification serves as confirmation that your PAT was successfully added to your organization.

   :::image type="content" source="media/use-personal-access-tokens-to-authenticate/pat-creation.png" alt-text="Screenshot shows PAT created notification email.":::

An expiration notification email is sent before the token expires.
If your administrator [removed your ability to create PATs in the organization](manage-pats-with-policies-for-administrators.md), the email indicates that it's no longer possible for you to regenerate PATs.
Reach out to your [project collection administrator](../security/look-up-project-collection-administrators.md) to be included in an allow list for continued PAT creation permissions in that organization.

::: moniker range=" < azure-devops"

For more information, see [Configure an SMTP server and customize email for alerts and feedback requests](/azure/devops/server/admin/setup-customize-alerts).

::: moniker-end

#### Unexpected notification

If you receive an unexpected PAT notification, it might mean that an administrator or tool created a PAT for you.
Here are some examples:

- A token named `git: https://dev.azure.com/{yourorganization} on YourMachine` is created when you connect to an Azure DevOps Git repo via git.exe.
- A token named `Service Hooks: Azure App Service: Deploy web app` is created when you or an administrator sets up an Azure App Service web app deployment.
- A token named `WebAppLoadTestCDIntToken` is created when web load testing is set up as part of a pipeline by you or an administrator.
- A token named `Microsoft Teams Integration` is created when a Microsoft Teams Integration Messaging Extension is set up.

If you think the situation is serious:

- [Revoke the PAT](admin-revoke-user-pats.md) (and change your password) if you suspect that it exists in error.
- Check with your administrator if you're a Microsoft Entra user to see if an unknown source or location accessed your organization.
- Review the FAQ on [accidental PAT check-ins to public GitHub repositories](#q-what-happens-if-i-accidentally-check-my-pat-into-a-public-repository-on-github).

## Use a PAT

Your PAT serves as your digital identity, much like a password.
You can use PATs as a quick way to do one-time requests or prototype an application locally.
Use a PAT in your code to authenticate [REST API](/rest/api/azure/devops) requests and automate workflows by including the PAT in the authorization header of your request.

After your app code is working, switch to [Microsoft Entra OAuth to acquire tokens for your app's users](../../integrate/get-started/authentication/entra-oauth.md) or a [service principal or managed identity to acquire tokens as an application](../../integrate/get-started/authentication/service-principal-managed-identity.md).
Don't keep running apps or scripts with PATs long term.
You can use Microsoft Entra tokens anywhere that a PAT is used.

Consider [acquiring a Microsoft Entra token via the Azure CLI](../../cli/entra-tokens.md) for unplanned requests.

### [Windows](#tab/Windows/)

To provide the PAT through an HTTP header, you must first convert it to a `Base64` string.
It can then be provided as an HTTP header in the following format:

```cs

Authorization: Basic BASE64_USERNAME_PAT_STRING
```

### [Linux/macOS](#tab/Linux/)

The following sample gets a list of builds by using curl:

```curl

curl -u :{PAT} https://dev.azure.com/{organization}/_apis/build-release/builds
```

* * *

## Modify a PAT

Do the following steps to:

- Regenerate a PAT to create a new token, which invalidates the previous one.
- Extend a PAT to increase its validity period.
- Alter the [scope](../../integrate/get-started/authentication/oauth.md#available-scopes) of a PAT to change its permissions.

1. From your home page, open user settings :::image type="icon" source="../../media/icons/user-settings-gear.png" border="false"::: and select **Personal access tokens**.

1. Select the token that you want to modify, and then select **Edit**.

   :::image type="content" source="media/pats/select-edit-pat-current-view.png" alt-text="Screenshot shows Edit button highlighted for a PAT entry.":::

1. Edit the token name, token expiration, or the scope of access associated with the token, and then select **Save**.

   :::image type="content" source="media/pats/modify-pat.png" alt-text="Screenshot shows Edit dialog for a PAT with name, expiration, and scope fields.":::

## Revoke a PAT

You can revoke a PAT at any time for these and other reasons:

- **Security breach**: Revoke a PAT immediately if you suspect it was compromised, leaked, or exposed in logs or public repositories.
- **No longer needed**: Revoke a PAT when the project, service, or integration for which it was created is finished.
- **Policy compliance**: Revoke a PAT to enforce security policies, compliance requirements, or organizational token rotation schedules.
- **User changes**: Revoke a PAT when a team member leaves the organization or changes roles and no longer needs access.
- **Scope reduction**: Revoke and re-create a PAT with reduced permissions when you need to limit its access capabilities.
- **Regular maintenance**: Revoke a PAT as part of routine security hygiene and token lifecycle management.

To revoke a PAT, follow these steps:

1. On your home page, open user settings :::image type="icon" source="../../media/icons/user-settings-gear.png" border="false"::: and select **Personal access tokens**.

2. Under **Security**, select **Personal access tokens**. Select the token for which you want to revoke access, and then select **Revoke**.

   :::image type="content" source="media/pats/revoke-personal-access-tokens-preview.png" alt-text="Screenshot shows Revoke option for a selected token on the Personal access tokens page.":::

3. In the **Confirmation** dialog, select **Revoke**.

   :::image type="content" source="media/pats/revoke-token-confirmation-dialog-preview.png" alt-text="Screenshot shows Confirmation dialog to revoke a PAT.":::

## PAT Lifecycle Management APIs

The [PAT Lifecycle Management APIs](/rest/api/azure/devops/tokens) might be useful when maintaining large volumes of tokens through the UI is unsustainable.
Managing PAT rotation programmatically also opens the opportunity to rotate PATs regularly and shorten their default lifespans.
You can configure the [sample Python app](https://github.com/microsoft/azure-devops-auth-samples/tree/master/PersonalAccessTokenAPIAppSample) with your Microsoft Entra tenant and Azure DevOps organization.

Some things to note about these APIs:

- [Microsoft Entra access tokens](../../integrate/get-started/authentication/entra.md) are required to access this API. Use a stronger form of authentication when you mint new tokens.
- Only users or apps that use an "on-behalf-of user" flow can generate PATs. Apps that use "on-behalf-of application" flows or authentication flows that don't issue Microsoft Entra access tokens aren't valid for use with this API. As such, [service principals or managed identities](../../integrate/get-started/authentication/service-principal-managed-identity.md) can't create or manage PATs.
- Previously the PAT Lifecycle Management APIs supported only the `user_impersonation` scope, but now the `vso.pats` are available and are the recommended scope to use with these APIs. Downscope all apps that previously relied on `user_impersonation` to call these APIs.

## PAT format

PAT strings use a specific format designed to improve secret detection in the [leaked PAT detection tooling](manage-pats-with-policies-for-administrators.md#revoke-leaked-pats-automatically-tenant-policy) and [partner offerings](../../repos/security/github-advanced-security-secret-scanning.md).
The format includes identifiable bits that improve the false positive detection rate and enable faster mitigation of detected leaks.

- Tokens are *84* characters long, with 52 characters being randomized data, which improves overall entropy. Tokens are resistant to brute force attacks.
- Tokens issued by Azure DevOps include a fixed `AZDO` signature at positions 76-80.

If you integrate with PATs and have PAT validation built in, ensure your validation code accommodates the 84-character token length.

## Best practices for using PATs

### Consider alternatives

- Acquire a Microsoft Entra token via the [Azure CLI](../../cli/entra-tokens.md) for unplanned requests instead of minting a longer-lived PAT.
- Use credential managers like [Git Credential Manager](https://github.com/git-ecosystem/git-credential-manager) or [Azure Artifacts Credential Manager](https://github.com/microsoft/artifacts-credprovider) to simplify credential management, with authentication set to `oauth` or Microsoft Entra tokens.

### Create PATs

- Don't put personal data in the PAT name. Don't rename the PAT name to include some or all of the actual PAT token.
- Avoid creating global PATs unless necessary across all organizations.
- Use a different token per flow or use case.
- Select only the minimum scopes required for each PAT. Grant the least privilege necessary for your specific task. Create separate PATs with limited scopes for different workflows instead of using a single, broad-scoped token. If your PAT needs read-only permissions, don't provide write permissions until necessary.
- Keep PAT lifespans short.

### Manage PATs

- *Don't share your PATs!*
- *Store your PATs in a secure key management solution*, like [Azure Key Vault](/azure/key-vault/general/overview).
- Regularly rotate or regenerate your PATs via the UI or by using PAT Lifecycle Management APIs.
- Revoke PATs when they're no longer needed.

### For admins

- Tenant admins can set [policies to restrict](manage-pats-with-policies-for-administrators.md) global PAT creation, full-scoped PAT creation, and long-lived PAT duration.
- Tenant admins can [revoke PATs for their organization users](admin-revoke-user-pats.md) if the PAT is compromised.
- Organization admins can [restrict PAT creation in an organization](manage-pats-with-policies-for-administrators.md). If PATs are still needed, limit their creation to only PATs that are on the allow list.

## FAQs

### Q. Why can't I edit or regenerate a PAT scoped to a single organization?

A. Sign in to the organization where your PAT is scoped. You can view your PATs when you're signed in to any organization in the same Microsoft Entra ID by changing the *Access scope* filter. You can edit only organization-scoped tokens when you're signed in to the specific organization.

### Q. What happens to a PAT if a user account is disabled?

A. When a user is removed from Azure DevOps, the PAT is invalidated within one hour.
If your organization is connected to Microsoft Entra ID, the PAT is also invalidated in Microsoft Entra ID because it belongs to the user.
Rotate the PAT to another user or service account to keep services running.

### Q. Can I use PATs with all Azure DevOps REST APIs?

A. No. You can use PATs with most Azure DevOps REST APIs, but [organizations and profiles](/rest/api/azure/devops/) and the PAT Management Lifecycle APIs support only [Microsoft Entra tokens](../../integrate/get-started/authentication/entra-oauth.md).

### Q. What happens if I accidentally check my PAT into a public repository on GitHub?

A. Azure DevOps scans for leaked PATs in public GitHub repositories.
When detected, Azure DevOps notifies the token owner and logs the event in your [audit log](../audit/azure-devops-auditing.md#review-audit-log).
Unless disabled, leaked PATs are automatically revoked.
For more information, see [Revoke leaked PATs automatically](manage-pats-with-policies-for-administrators.md#revoke-leaked-pats-automatically-tenant-policy).

### Q. Can I use a personal access token as an API key to publish NuGet packages to an Azure Artifacts feed by using the dotnet/nuget.exe command line?

A. No. Azure Artifacts doesn't support passing a PAT as an API key.
When you use a local development environment, install the [Azure Artifacts Credential Provider](https://github.com/microsoft/artifacts-credprovider) to authenticate with Azure Artifacts.
For more information, see the following examples: [dotnet](../../artifacts/nuget/dotnet-exe.md) and [NuGet.exe](../../artifacts/nuget/publish.md).
If you want to publish your packages by using Azure Pipelines, use the [NuGet Authenticate](/azure/devops/pipelines/tasks/reference/nuget-authenticate-v1) task to authenticate with your feed.
For more information, see the example in [Publish NuGet packages with Azure Pipelines (YAML/Classic)](../../pipelines/artifacts/nuget.md).

### Q. Why did my PAT stop working?

A. PAT authentication requires you to regularly sign in to Azure DevOps by using the full authentication flow.
Signing in once every 30 days is sufficient for many users, but you might need to sign in more frequently depending on your Microsoft Entra configuration.
If your PAT stops working, first try signing in to your organization and completing the full authentication prompt.
If your PAT still doesn't work, check if it expired.

For Azure DevOps Server, enabling [IIS Basic Authentication](/iis/configuration/system.webserver/security/authentication/basicauthentication) invalidates PAT usage.
Keep IIS Basic Authentication turned off.

### Q. How do I create access tokens that aren't tied to a specific user?

A. PATs are always associated with the user identity that created them.
To use tokens not tied to a specific user, use Microsoft Entra tokens issued by an [application service principal or managed identity](../../integrate/get-started/authentication/service-principal-managed-identity.md).
For pipelines, use [service connections](../../pipelines/library/service-endpoints.md) to authenticate without user-specific credentials.
Learn more about [reducing PAT usage across Azure DevOps](https://devblogs.microsoft.com/devops/reducing-pat-usage-across-azure-devops/).

### Q. How can I regenerate/rotate PATs through the API? I saw that option in the UI, but I don't see a similar method in the API.

A. The **Regenerate** functionality available in the UI actually accomplishes a few actions, which you can replicate through an API.

To rotate your PAT, follow these steps:

1. See PAT metadata with a **GET** call.
1. Create a new PAT with the old PAT ID by using a **POST** call.
1. Revoke the old PAT by using a **DELETE** call.

### Q. How long does an expired, revoked, or inactive PAT remain visible in the Azure DevOps token list?

A. You can no longer use or regenerate PATs that are expired or revoked.
These inactive tokens stay visible for several months after expiration or revocation before being automatically removed from the display.

### Q. Why do I see a "Need admin approval" message when I try to use a Microsoft Entra app to call the PAT Lifecycle Management APIs?

A. Your tenant's security policies require admin consent before applications can access organization resources.
Reach out to your tenant administrator.

## Related content

- [Use policies to manage personal access tokens for users](manage-pats-with-policies-for-administrators.md)
- [Revoke user PATs (for admins)](admin-revoke-user-pats.md)
- [Authenticate with Microsoft Entra tokens](../../integrate/get-started/authentication/entra.md)
