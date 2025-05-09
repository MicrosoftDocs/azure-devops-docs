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

A Personal Access Token (PAT) serves as an alternative password for authenticating into Azure DevOps. This PAT identifies you and determines your accessibility and scope of access. Treat PATs with the same level of caution as passwords.

When you use Microsoft tools, your Microsoft account (MSA) or Microsoft Entra ID is recognized and supported. If you use tools that don't support Microsoft Entra accounts or don't want to share your primary credentials, PATs can be a suitable alternative. However, we recommend using [Microsoft Entra tokens](../../integrate/get-started/authentication/entra.md) over PATs whenever possible.

[!INCLUDE [use-microsoft-entra-reduce-pats](../../includes/use-microsoft-entra-reduce-pats.md)]

You can manage PATs through the following methods:
* **User interface (UI):** Through user settings, as detailed in this article.
* [**PAT Lifecycle Management APIs**](manage-personal-access-tokens-via-api.md)
* [Git credential managers](../../repos/git/set-up-credential-managers.md) for Git operations. Credential managers facilitate token management. Without one, users must input their credentials each time.

## Prerequisites

| Category | Requirements |
|--------------|-------------|
|**Permissions** |Permission to access and modify your user settings where PATs are managed. <br>- Go to **your profile** and select **User settings** > **Personal access tokens**. If you can see and manage your PATs here, you have the necessary permissions.<br>- Go to your project and select **Project settings** > **Permissions**. Find your user account in the list and check the permissions assigned to you. Look for permissions related to managing tokens or user settings.<br>- If your [organization has policies in place](manage-pats-with-policies-for-administrators.md), an administrator might need to grant you specific permissions or add you to an allowlist to create and manage PATs.<br>- PATs are connected to the user account that minted the token. Depending on the tasks the PAT performs, you might need more permissions yourself.|
|**Access levels** |At least **Basic** access.|
|**Tasks**|**Use PATs only when necessary and always regularly rotate them.** See our section on [Best Practices when using PATs](#best-practices-for-using-pats).|

[!INCLUDE [personal-access-tokens](../../repos/git/includes/personal-access-tokens.md)]

## Changes to format

As of July 2024, we updated the format of PAT strings to improve secret detection in our [leaked PAT detection tooling](manage-pats-with-policies-for-administrators.md#revoke-leaked-pats-automatically-tenant-policy) and [partner offerings](../../repos/security/github-advanced-security-secret-scanning.md). This new PAT format includes more identifiable bits to improve the false positive detection rate in these detection tools and mitigate detected leaks faster.

* New tokens are now **84** characters long, with 52 characters being randomized data. This improves overall entropy, making tokens more resistant to brute force attacks.
* Tokens issued by our service include a fixed `AZDO` signature at positions 76-80.

If you are using a PAT issued prior to that data, regenerate your PAT. If you integrate with PATs and have PAT validation built-in, update your validate code to accommodate both new and existing token lengths. Additionally, explore integrating with [Microsoft Entra tokens](../../integrate/get-started/authentication/entra.md) in lieu of PATs.

> [!WARNING]
> Both formats will remain valid for the foreseeable future. As adoption of the new format increases, we may retire older 52-character PATs.

## Best practices for using PATs

### Consider alternatives

* Acquire a Microsoft Entra token via the [Azure CLI](../../integrate/get-started/authentication/entra.md#ad-hoc-requests-to-azure-devops-rest-apis) for ad-hoc requests instead of minting a longer-lived PAT.
* Use credential managers like [Git Credential Manager](https://github.com/git-ecosystem/git-credential-manager) or [Azure Artifacts Credential Manager](https://github.com/microsoft/artifacts-credprovider) to simplify credential management. These tools offer the ability to [use Microsoft Entra tokens](../../integrate/get-started/authentication/entra.md) as the default authentication instead of PATs.

### Creating PATs

* Don't put personal data in the PAT name. Don't rename the PAT name to include some or all of the actual PAT token.
* Avoid creating global PATs unless necessary across all organizations.
* Use a different token per flow or user case.
* Choose the minimally needed scopes per PAT. Create a separate PAT with fewer scopes for each flow, instead of a single full-scoped PAT for all flows. If your PAT needs read-only permissions, don't provide write permissions until necessary.
* Keep PAT lifespans short (weekly is ideal, even shorter is better).

### Managing PATs
* **Don't share your PATs!**
* **Store your PATs in a secure key management solution**, like [Azure KeyVault](/azure/key-vault/general/overview).
* Regularly rotate or regenerate your PATs via UI or [PAT Lifecycle Management APIs](manage-personal-access-tokens-via-api.md).
* Revoke PATs when no longer needed. 
* Rotate your PATs to use the [new PAT format](#changes-to-format) for better leaked secret detection and revocation by our first-party tools.

### For admins
* Tenant admins can set [policies to restrict](manage-pats-with-policies-for-administrators.md) global PAT creation, full scoped PAT creation, and long-lived PAT duration.
* Tenant admins can [revoke PATs for their organization users](admin-revoke-user-pats.md) if the PAT is compromised.
* Organization admins can [restrict PAT creation in an organization](manage-pats-with-policies-for-administrators.md). If PATs are still needed, limit their creation to only those on the allowlist.

## FAQs

### Q: Why can't I edit or regenerate a PAT scoped to a single organization?

A: Sign into the organization where your PAT is scoped. You can view all your PATs while signed into any organization in the same Microsoft Entra ID by changing the *Access scope* filter, but you can only edit organization-scoped tokens when signed into the specific organization.

### Q: What happens to a PAT if a user account is disabled?

A: When a user is removed from Azure DevOps, the PAT invalidates within 1 hour. If your organization is connected to Microsoft Entra ID, the PAT also invalidates in Microsoft Entra ID, as it belongs to the user. We recommend rotating the PAT to another user or service account to keep services running.

### Q: Is there a way to renew a PAT via REST API?

A: Yes, you can renew, manage, and create PATs using our [PAT Lifecycle Management APIs](manage-personal-access-tokens-via-api.md#q-how-can-i-regeneraterotate-pats-through-the-api-i-saw-that-option-in-the-ui-but-i-dont-see-a-similar-method-in-the-api).

### Q: Can I use PATs with all Azure DevOps REST APIs?

A: No. You can use PATs with most Azure DevOps REST APIs, but [organizations and profiles](/rest/api/azure/devops/) and the [PAT Management Lifecycle APIs](manage-personal-access-tokens-via-api.md) only support [Microsoft Entra tokens](../../integrate/get-started/authentication/entra-oauth.md). For an example on how to set up a Microsoft Entra app to call such APIs, see [Manage PATs using the REST API](manage-personal-access-tokens-via-api.md).

### Q: What happens if I accidentally check my PAT into a public repository on GitHub?

A: Azure DevOps scans for PATs checked into public repositories on GitHub. When we find a leaked token, we immediately send a detailed email notification to the token owner and log an event in your Azure DevOps organization's [audit log](../audit/azure-devops-auditing.md#review-audit-log). We encourage affected users to mitigate the issue by [revoking the leaked token](use-personal-access-tokens-to-authenticate.md#revoke-a-pat) and replacing it with a new token. 

Unless you disabled the *Automatically revoke leaked personal access tokens* policy, we immediately revoke the leaked PAT. For more information, see [Revoke leaked PATs automatically](manage-pats-with-policies-for-administrators.md#revoke-leaked-pats-automatically-tenant-policy).

### Q: Can I use a personal access token as an ApiKey to publish NuGet packages to an Azure Artifacts feed using the dotnet/nuget.exe command line?

A: No. Azure Artifacts doesn't support passing a PAT as an ApiKey. When using a local development environment, we recommend installing the [Azure Artifacts Credential Provider](https://github.com/microsoft/artifacts-credprovider) to authenticate with Azure Artifacts. For more information, see the following examples: [dotnet](../../artifacts/nuget/dotnet-exe.md), [NuGet.exe](../../artifacts/nuget/publish.md). If you want to publish your packages using Azure Pipelines, use the [NuGet Authenticate](/azure/devops/pipelines/tasks/reference/nuget-authenticate-v1) task to authenticate with your feed. See [example](../../pipelines/artifacts/nuget.md).

### Q: Why did my PAT stop working?

A: PAT authentication requires you to regularly sign into Azure DevOps using the full authentication flow. Signing in once every 30 days is sufficient for many users, but you might need to sign in more frequently depending on your Microsoft Entra configuration. If your PAT stops working, first try signing into your organization and complete the full authentication prompt. If your PAT still doesn't work, check if it expired.

Enabling IIS Basic Authentication invalidates using PATs for Azure DevOps Server. We recommend that you keep [IIS Basic Authentication]( /iis/configuration/system.webserver/security/authentication/basicauthentication) turned **off** always. 

> [!WARNING]
> If you use Git with IIS Basic Authentication, Git breaks because it requires PATs for user authentication. You can adding an extra header to Git requests to use it with IIS Basic Authentication, but this is not recommended. The extra header must be used for all Azure DevOps Server installations, as Windows Auth also prevents using PATs. The extra header must also include a base 64 encoding of "user:PAT."
>   ```
>   git -c http.extraheader='Authorization: Basic [base 64 encoding of "user:password"]' ls-remote http://tfsserver:8080/tfs/DefaultCollection/_git/projectName
>   ```

### Q: How do I create access tokens that aren't tied to a person?

A: All PATs are associated with the user identity that created it. Applications can't create PATs.

In Azure DevOps, you can create access tokens that aren't tied to a specific person by using Microsoft Entra tokens minted by an [application service principal or managed identity](../../integrate/get-started/authentication/service-principal-managed-identity.md). Within a pipeline, use [service connections](../../pipelines/library/service-endpoints.md).

## Related articles

* [Use policies to manage personal access tokens for users](manage-pats-with-policies-for-administrators.md)
* [Revoke user PATs (for admins)](admin-revoke-user-pats.md)
* [Manage personal access tokens (PATs) using REST API](manage-personal-access-tokens-via-api.md)
* [Authenticate with Microsoft Entra tokens](../../integrate/get-started/authentication/entra.md)
