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
ms.date: 07/02/2024
monikerRange: '<= azure-devops'
---

# Use personal access tokens

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

A Personal Access Token (PAT) can serve as an alternative password for authenticating into Azure DevOps. This article guides you through the process of creating, utilizing, modifying, and revoking PATs for Azure DevOps.

## About PATs

A Personal Access Token (PAT) serves as your security credentials for Azure DevOps. This PAT not only identifies you but also determines your accessibility and scope of access. Hence, PATs are as important as passwords and should be handled with the same level of caution.

If you're utilizing Microsoft tools, then your Microsoft account (MSA) or Microsoft Entra ID is a recognized and supported method. However, if you're using third-party tools that don't support Microsoft or Microsoft Entra accounts, or if you're reluctant to share your primary credentials with these tools, PATs are a safer alternative.

Create and manage PATs in the following two ways:

* **User interface (UI):** Through user settings, as detailed in this article
* [**PAT Lifecycle Management API**](manage-personal-access-tokens-via-api.md)

To establish PATs for non-Microsoft tools, you can either use [Git credential managers](../../repos/git/set-up-credential-managers.md) or generate them manually. We recommend you to review our [authentication guidance](../../integrate/get-started/authentication/authentication-guidance.md) to help you choose the appropriate authentication mechanism. PATs serve as a straightforward alternative for smaller projects that don't need an extensive solution. Unless a credential manager is in use, users must input their credentials each time.

[!INCLUDE [personal-access-tokens](../../repos/git/includes/personal-access-tokens.md)]

## Changes to format

As of July 2024, we made significant changes to the format of PATs issued by Azure DevOps. These changes provide more security benefits and improve secret detection tooling available through our partner offerings, like [GitHub Advanced Security for Azure DevOps](https://devblogs.microsoft.com/devops/github-advanced-security-for-azure-devops-public-preview-starts-now/). This change in PAT format follows the new format recommended across all Microsoft products. We anticipate that the inclusion of more identifiable bits will improve the false positive detection rate of these secret detection tools and enable us to better mitigate any detected leaks faster.

Key changes:
* **Increased token length:** The new tokens are longer, now 84 characters in total. Out of these, 52 characters are randomized data. This increased length improves overall entropy, making the tokens more resistant to potential brute force attacks.
* **Fixed signature:** Tokens issued by our service include a fixed `AZDO` signature at positions 76-80.

Action required:
* **Regenerate existing PATs:** We strongly recommend regenerating all PATs currently in use to take advantage of these security enhancements.
* **Integrator support:** Integrators should update their systems to accommodate both the new and existing token lengths.

As both formats remain valid for the foreseeable future, we are actively encouraging customers to transition to the new 84-character format. As adoption of the new format increases, we will consider retiring the older 52-character format and all tokens issued in that style.

## Related articles

* [About security, authentication, and authorization](../security/about-security-identity.md)
* [Default permissions and access for Azure DevOps](../security/permissions-access.md)
* [Revoke user PATs (for admins)](admin-revoke-user-pats.md)
* [Manage service principals and managed identities in Azure DevOps](../../integrate/get-started/authentication/service-principal-managed-identity.md)

::: moniker range="azure-devops"

## FAQs

### Q: Why can't I edit or regenerate a PAT scoped to a single organization?

A: Ensure you're signed into the organization where your PAT is scoped. You can ***view*** all of your PATs while signed into any organization in the same Microsoft Entra ID, but you can only ***edit*** organization-scoped tokens when you're signed into the organization to which they're scoped.

### Q: What happens to a PAT if a user account is disabled?

A: Once a user's removed from Azure DevOps, the PAT is invalidated within 1 hour. If your organization is connected to Microsoft Entra ID, the PAT is also invalidated in Microsoft Entra ID, as it belongs to the user. We recommend that the user rotates their PAT to another user or service account to keep services running.

### Q: Is there a way to renew a PAT via REST API?

A: Yes, there's a way to renew, manage, and create PATs using our [PAT Lifecycle Management APIs](manage-personal-access-tokens-via-api.md). For more information, see [Manage PATs using REST API](manage-personal-access-tokens-via-api.md) and our [FAQ](manage-personal-access-tokens-via-api.md#q-how-can-i-regeneraterotate-pats-through-the-api-i-saw-that-option-in-the-ui-but-i-dont-see-a-similar-method-in-the-api).

### Q: Can I use basic auth with all Azure DevOps REST APIs?

A: No. You can use basic auth with most Azure DevOps REST APIs, but [organizations and profiles](/rest/api/azure/devops/) only support [OAuth](../../integrate/get-started/authentication/oauth.md). For more information, see [Manage PATs using REST API](manage-personal-access-tokens-via-api.md).

### Q: What happens if I accidentally check my PAT into a public repository on GitHub?

A: Azure DevOps scans for PATs checked into public repositories on GitHub. When we find a leaked token, we immediately send a detailed email notification to the token owner and log an event to your Azure DevOps organization's [audit log](../audit/azure-devops-auditing.md#review-audit-log). Unless you disabled the *Automatically revoke leaked personal access tokens* policy, we immediately revoke the leaked PAT. We encourage affected users to mitigate immediately by [revoking the leaked token](use-personal-access-tokens-to-authenticate.md#revoke-a-pat) and replacing it with a new token. 

For more information, see [Revoke leaked PATs automatically](manage-pats-with-policies-for-administrators.md#revoke-leaked-pats-automatically).

### Q: Can I use a personal access token as an ApiKey to publish NuGet packages to an Azure Artifacts feed using the dotnet/nuget.exe command line?

A: No. Azure Artifacts doesn't support passing a personal access token as an ApiKey. When using a local development environment, we recommended installing the [Azure Artifacts Credential Provider](https://github.com/microsoft/artifacts-credprovider) to authenticate with Azure Artifacts. For more information, see the following examples: [dotnet](../../artifacts/nuget/dotnet-exe.md), [NuGet.exe](../../artifacts/nuget/publish.md).
If you want to publish your packages using Azure Pipelines, use the [NuGet Authenticate](/azure/devops/pipelines/tasks/reference/nuget-authenticate-v1) task to authenticate with your feed [example](../../pipelines/artifacts/nuget.md).

### Q: Why did my PAT stop working?

A: PAT authentication requires you to regularly sign into Azure DevOps using the full authentication flow. Once every 30 days are sufficient for many, but you may need to sign in more often than that depending upon your Microsoft Entra configuration. If your PAT stops working, first try signing into your organization, ensuring that you go through the full authentication prompt. If your PAT still doesn't work after that, check to see if your PAT has expired.

::: moniker-end
