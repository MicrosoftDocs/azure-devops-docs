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
ms.date: 03/10/2025
monikerRange: '<= azure-devops'
---

# Use personal access tokens

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

A Personal Access Token (PAT) serves as an alternative password for authenticating into Azure DevOps. This PAT identifies you and determines your accessibility and scope of access. Therefore, treat PATs with the same level of caution as passwords.

[!INCLUDE [use-microsoft-entra-reduce-pats](../../includes/use-microsoft-entra-reduce-pats.md)]

When you use Microsoft tools, your Microsoft account (MSA) or Microsoft Entra ID is recognized and supported. If you use tools that don't support Microsoft Entra accounts or don't want to share your primary credentials, PATs can be a suitable alternative. However, we recommend using [Microsoft Entra tokens](../../integrate/get-started/authentication/entra.md) over PATs whenever possible.

You can manage PATs through the following methods:
* **User interface (UI):** Through user settings, as detailed in this article.
* [**PAT Lifecycle Management APIs**](manage-personal-access-tokens-via-api.md)
* [Git credential managers](../../repos/git/set-up-credential-managers.md) for Git operations. Credential managers facilitate token management. Without one, users must input their credentials each time.

## Prerequisites

| Category | Requirements |
|--------------|-------------|
|**Permissions** |Permission to access and modify your user settings where PATs are managed. <br>- Go to **your profile** and select **User settings** > **Personal access tokens**. If you can see and manage your PATs here, you have the necessary permissions.<br>- Go to your project and select **Project settings** > **Permissions**. Find your user account in the list and check the permissions assigned to you. Look for permissions related to managing tokens or user settings.<br>- If your [organization has policies in place](manage-pats-with-policies-for-administrators.md), an Azure DevOps Administrator might need to grant you specific permissions or add you to an allowlist to create and manage PATs.<br>- PATs are connected to the user account that minted the token. Depending on the tasks the PAT performs, you might need more permissions yourself.|
|**Access levels** |At least **Basic** access.|
|**Tasks**|**Use PATs only when necessary and always regularly rotate them.**|

[!INCLUDE [personal-access-tokens](../../repos/git/includes/personal-access-tokens.md)]

## Changes to format

As of July 2024, we significantly changed the format of PATs issued by Azure DevOps. These changes provide more security benefits and improve secret detection tooling available through our [leaked PAT detection tooling](manage-pats-with-policies-for-administrators.md#revoke-leaked-pats-automatically) or [partner offerings](../../repos/security/github-advanced-security-secret-scanning.md). This new PAT format follows the recommended format across all Microsoft products. The inclusion of more identifiable bits improves the false positive detection rate of these secret detection tools and enables us to mitigate detected leaks faster.

Key changes:
* **Increased token length:** The new tokens are now **84** characters long, with 52 characters being randomized data. This increased length improves overall entropy, making the tokens more resistant to potential brute force attacks.
* **Fixed signature:** Tokens issued by our service include a fixed `AZDO` signature at positions 76-80.

Action required:
* **Regenerate existing PATs:** We strongly recommend regenerating all PATs currently in use to take advantage of these security enhancements.
* **Integrator support:** Integrators should update their systems to accommodate both the new and existing token lengths.

> [!IMPORTANT]
> Both formats remain valid for the foreseeable future, but we **actively encourage customers to transition to the new 84-character format**. As adoption of the new format increases, we consider retiring the older 52-character format and all tokens issued in that style.

## Best practices for using PATs

### Consider alternatives

* Acquire a Microsoft Entra token via [Azure CLI](../../integrate/get-started/authentication/entra.md#ad-hoc-requests-to-azure-devops-rest-apis) for ad-hoc requests that lasts for one hour instead of minting a longer-lived PAT.
* Use credential managers like [Git Credential Manager](https://github.com/git-ecosystem/git-credential-manager) or [Azure Artifacts Credential Manager](https://github.com/microsoft/artifacts-credprovider) for credential management simplification. These tools might offer options to [use Microsoft Entra tokens](../../integrate/get-started/authentication/entra.md) as the default authentication instead of PATs.

### Creating PATs

* Avoid putting personal data in the PAT name. Don't rename the PAT token string as the name of your token.
* Select only the organization your PAT needs to access if it doesn't need to access multiple organizations. For workflows requiring access to multiple organizations, create a separate global PAT for that workflow.
* Choose only the necessary scopes for each PAT. If possible, create multiple PATs for each workflow with fewer scopes instead of a single fully scoped PAT. If your PAT only needs read permissions, don't provide it write permissions until necessary.
* Keep PAT lifespans short (weekly is ideal, even shorter is better) and regularly rotate or regenerate them via the UI or the [PAT Lifecycle Management APIs](manage-personal-access-tokens-via-api.md).

### Managing PATs

* **Always** store your PATs in a secure key management solution like [Azure KeyVault](/azure/key-vault/general/overview).
* Revoke PATs when they're no longer needed. Tenant admins can [revoke PATs for their organization users](admin-revoke-user-pats.md) if the PAT is compromised.
* Rotate your PATs to use the [new PAT format](#changes-to-format) for better leaked secret detection and revocation by our first-party tools.

### For admins

[Tenant admins can set policies](manage-pats-with-policies-for-administrators.md) to restrict global PAT creation, full scoped PAT creation, and long-lived PAT duration. They can also enable policies to automatically revoke leaked PATs detected in public repositories. Use these policies to improve your company's security.

## FAQs

### Q: Why can't I edit or regenerate a PAT scoped to a single organization?

A: Sign into the organization where your PAT is scoped. You can view all your PATs while signed into any organization in the same Microsoft Entra ID, but you can only edit organization-scoped tokens when signed into the specific organization.

### Q: What happens to a PAT if a user account is disabled?

A: When a user is removed from Azure DevOps, the PAT invalidates within 1 hour. If your organization is connected to Microsoft Entra ID, the PAT also invalidates in Microsoft Entra ID, as it belongs to the user. We recommend rotating the PAT to another user or service account to keep services running.

### Q: Is there a way to renew a PAT via REST API?

A: Yes, you can renew, manage, and create PATs using our [PAT Lifecycle Management APIs](manage-personal-access-tokens-via-api.md#q-how-can-i-regeneraterotate-pats-through-the-api-i-saw-that-option-in-the-ui-but-i-dont-see-a-similar-method-in-the-api).

### Q: Can I use PATs with all Azure DevOps REST APIs?

A: No. You can use basic auth with most Azure DevOps REST APIs, but [organizations and profiles](/rest/api/azure/devops/) and the [PAT Management Lifecycle APIs](manage-personal-access-tokens-via-api.md) only support [Microsoft Entra OAuth](../../integrate/get-started/authentication/entra-oauth.md). For an example on how to set up a Microsoft Entra app to call such APIs, see [Manage PATs using the REST API](manage-personal-access-tokens-via-api.md).

### Q: What happens if I accidentally check my PAT into a public repository on GitHub?

A: Azure DevOps scans for PATs checked into public repositories on GitHub. When we find a leaked token, we immediately send a detailed email notification to the token owner and log an event in your Azure DevOps organization's [audit log](../audit/azure-devops-auditing.md#review-audit-log). Unless you disabled the *Automatically revoke leaked personal access tokens* policy, we immediately revoke the leaked PAT. We encourage affected users to mitigate the issue by [revoking the leaked token](use-personal-access-tokens-to-authenticate.md#revoke-a-pat) and replacing it with a new token. For more information, see [Revoke leaked PATs automatically](manage-pats-with-policies-for-administrators.md#revoke-leaked-pats-automatically).

### Q: Can I use a personal access token as an ApiKey to publish NuGet packages to an Azure Artifacts feed using the dotnet/nuget.exe command line?

A: No. Azure Artifacts doesn't support passing a PAT as an ApiKey. When using a local development environment, we recommend installing the [Azure Artifacts Credential Provider](https://github.com/microsoft/artifacts-credprovider) to authenticate with Azure Artifacts. For more information, see the following examples: [dotnet](../../artifacts/nuget/dotnet-exe.md), [NuGet.exe](../../artifacts/nuget/publish.md). If you want to publish your packages using Azure Pipelines, use the [NuGet Authenticate](/azure/devops/pipelines/tasks/reference/nuget-authenticate-v1) task to authenticate with your feed. See [example](../../pipelines/artifacts/nuget.md).

### Q: Why did my PAT stop working?

A: PAT authentication requires you to regularly sign into Azure DevOps using the full authentication flow. Signing in once every 30 days is sufficient for many users, but you might need to sign in more frequently depending on your Microsoft Entra configuration. If your PAT stops working, first try signing into your organization and complete the full authentication prompt. If your PAT still doesn't work, check if it expired.

Enabling IIS Basic Authentication invalidates using PATs for Azure DevOps Server.
> [!CAUTION]
> We recommend that you keep [IIS Basic Authentication]( /iis/configuration/system.webserver/security/authentication/basicauthentication) turned **off** always. Only if necessary should you enable IIS Basic Authentication. When IIS Basic Authentication is enabled on your windows machine, it prevents you from using personal access tokens (PATs) as an authentication mechanism.

For example, if you use a PAT to allow a third-party app to retrieve bug information, and then send an email with the info to the bug assignee (with IIS Basic Authentication enabled), the app fails authentication. The app can't retrieve bug info.

> [!WARNING]
> If you use Git with IIS Basic Authentication, Git breaks because it requires PATs for user authentication. Although we don't recommend you use IIS Basic Authentication, by adding an extra header to Git requests, you can use Git with IIS Basic Authentication.
>
> The extra header must be used for all Azure DevOps Server installations, as Windows Auth also prevents using PATs.
> The extra header must include a base 64 encoding of "user:PAT." See the following format and example.
>
>**Format:**
>
>   ```
>   git -c http.extraheader='Authorization: Basic [base 64 encoding of "user:password"]' ls-remote http://tfsserver:8080/tfs/DefaultCollection/_git/projectName
>   ```
>
>**Example:**
>
>   ```
>   git -c http.extraheader='Authorization: Basic a2FzYW50aGE6bzN3cDVndmw2YXRkajJkam83Znd4N2k3NDdhbGxjNXp4bnc3b3o0dGQycmd3d2M1eTdjYQ==' ls-remote http://tfsserver:8080/tfs/DefaultCollection/_git/projectName
>   ```

### Q: How do I create access keys that aren't tied to a specific person for deployment purposes?

A: In Azure DevOps, you can create access keys that aren't tied to a specific person by using Service Principals or Managed Identities. For more information, see [Manage service connections](../../pipelines/library/service-endpoints.md) and [Use Azure Key Vault secrets in Azure Pipelines](../../pipelines/release/azure-key-vault.md).

## Related articles

* [Use policies to manage personal access tokens for users](manage-pats-with-policies-for-administrators.md)
* [Revoke user PATs (for admins)](admin-revoke-user-pats.md)
* [Learn about security, authentication, and authorization](../security/about-security-identity.md)
* [Review default permissions and access for Azure DevOps](../security/permissions-access.md)
* [Manage personal access tokens (PATs) using REST API](manage-personal-access-tokens-via-api.md)
* [Manage service principals and managed identities in Azure DevOps](../../integrate/get-started/authentication/service-principal-managed-identity.md)

