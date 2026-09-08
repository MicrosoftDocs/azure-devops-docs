---
title: Authentication methods for Azure DevOps integrations
titleSuffix: Azure DevOps
description: Choose the right authentication method for your Azure DevOps integration, with Microsoft Entra ID as the recommended approach.
ms.subservice: azure-devops-security
ms.topic: concept-article
ms.custom: arm2024, pat-reduction, copilot-scenario-highlight, support-driven-update
ai-usage: ai-assisted
monikerRange: '<= azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 07/21/2026
---

# Authentication methods for Azure DevOps integrations

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

This article focuses on integration authentication patterns for apps, scripts, and pipelines that call Azure DevOps.
Use modern Microsoft Entra ID-based authentication for new integrations because it provides stronger security and better long-term compatibility.

If you need an organization-level overview that covers user sign-in, governance controls, and platform-level security posture, see [Authentication guidance for Azure DevOps](../../../organizations/security/authentication-guidance.md).

Use Microsoft Entra ID authentication for new applications that integrate with Azure DevOps Services.
Use personal access tokens sparingly, and only when Microsoft Entra ID isn't available.

[!INCLUDE [use-microsoft-entra-reduce-pats](../../../includes/use-microsoft-entra-reduce-pats.md)]

OAuth 2.0 and Microsoft Entra ID authentication are available for Azure DevOps Services only, not Azure DevOps Server.

For on-premises scenarios, use [.NET client libraries](../../concepts/dotnet-client-libraries.md), Windows authentication, or [personal access tokens](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md).

[!INCLUDE [ai-assistance-mcp-server-tip](../../../includes/ai-assistance-mcp-server-tip.md)]

## Compare common authentication choices

Use the following table to compare the most common authentication choices for apps, scripts, and pipelines.

| Method | Best for | Security posture | Credential management | Works with | Avoid when |
|---|---|---|---|---|---|
| Managed identity | Azure-hosted automation, such as Azure Functions, App Service, or virtual machines | Strongest option for Azure-hosted workloads because tokens are short-lived and Azure manages the identity lifecycle | No client secret to store or rotate; Azure manages the identity and token acquisition | Azure DevOps Services; Azure-hosted workloads in the same Microsoft Entra tenant after you add the identity to Azure DevOps | The workload doesn't run on Azure, or you need a portable identity that isn't tied to an Azure resource |
| Service principal | Automation that runs outside Azure, across multiple environments, or in external CI/CD systems | Strong option when you use certificate-based auth or federated approaches and apply least privilege | You manage the application identity and any client secret or certificate unless a federated flow removes the secret | Azure DevOps Services; apps, scripts, and services that need a Microsoft Entra application identity | You can use a managed identity instead for the same Azure-hosted workload, or the tool supports only PAT-based auth |
| Azure DevOps service connection | Azure Pipelines access to Azure DevOps resources | Strong option for pipeline automation because it uses Microsoft Entra workload identity federation instead of long-lived tokens | Azure DevOps manages the service connection, and pipelines don't need to store PATs in variables | Azure DevOps Services; pipelines that access repos, feeds, or REST APIs across organizations | The scenario doesn't run through Azure Pipelines |
| Personal access token (PAT) | Short-lived personal scripts, one-off testing, or legacy scenarios that can't yet use Microsoft Entra-based auth | Highest risk of the common choices because the token is a long-lived bearer secret tied to a user account | You must create, store, rotate, and revoke the token manually | Azure DevOps Services and Azure DevOps Server; CLI, REST calls, and legacy integrations that support PATs | The integration is a production service, shared automation, or any scenario where a service principal, managed identity, or service connection is available |

## Quick recommendations

- Choose managed identity first when the workload runs on Azure and Azure can own the identity lifecycle.
- Choose a service principal when you need an application identity but the workload doesn't run on Azure or must move across environments.
- Choose an Azure DevOps service connection when Azure Pipelines needs to access Azure DevOps resources without a PAT.
- Choose a PAT only for personal, temporary, legacy, or Azure DevOps Server scenarios where the more secure options don't apply.

## Authentication methods by scenario

Choose the appropriate authentication method based on your application type and requirements.

| Application type | Description | Example | Recommended method | Code samples |
|------------------|-------------|---------|--------------------|--------------|
| Web/desktop apps | Interactive applications using current frameworks | React app, .NET desktop app | [Microsoft Entra OAuth](./entra-oauth.md) with the Microsoft Authentication Library (MSAL) | [Managed client console app](https://github.com/microsoft/azure-devops-auth-samples/tree/master/ManagedClientConsoleAppSample) |
| Service/background apps | Applications running without user interaction | Azure Functions, background services | [Service principals and managed identities](./service-principal-managed-identity.md) | [Service principals](https://github.com/microsoft/azure-devops-auth-samples/tree/master/ServicePrincipalsSamples) |
| Legacy client apps | Existing applications using client libraries | Console apps with Azure DevOps .NET libraries | [.NET client libraries](../../concepts/dotnet-client-libraries.md) with OAuth | [Client library console app](https://github.com/Microsoft/vsts-auth-samples/tree/master/ClientLibraryConsoleAppSample) |
| Headless/CLI apps | Noninteractive command-line tools | Build scripts, automation tools | [Device authorization grant flow](/entra/identity-platform/v2-oauth2-device-code) | [Device profile](https://github.com/Microsoft/vsts-auth-samples/tree/master/DeviceProfileSample) |
| Azure DevOps extensions | Extensions running within Azure DevOps | Custom dashboard widgets and work item forms | [Azure DevOps web extension SDK](https://github.com/Microsoft/azure-devops-extension-sdk) | [Add a dashboard widget](../../../extend/develop/add-dashboard-widget.md) |
| Azure DevOps Server apps | On-premises Azure DevOps Server integrations | Custom server extensions | [.NET client libraries](../../concepts/dotnet-client-libraries.md) or Windows Auth | [Client library console app](https://github.com/Microsoft/vsts-auth-samples/tree/master/ClientLibraryConsoleAppSample) |
| Personal/ad hoc scripts | Quick scripts for personal use | PowerShell scripts, curl commands | [Personal access tokens](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) | [Get started with the REST APIs](../../how-to/call-rest-api.md) |
| Azure Pipelines | Access Azure DevOps from pipeline | Consume artifacts from different organization | [Azure DevOps service connection](../../../pipelines/library/add-devops-entra-service-connection.md) | [Add an Azure DevOps Microsoft Entra service connection](../../../pipelines/library/add-devops-entra-service-connection.md) |

## Suggestions for getting started

The following sections provide recommendations for getting started in different scenarios.

### New applications

- [Build Azure DevOps integrations with Microsoft Entra OAuth apps](entra-oauth.md) for the best security and future compatibility.
- Use service principals or managed identities for service-to-service scenarios.
- Avoid personal access tokens in production applications.

### Existing applications

- Plan migration from personal access tokens to Microsoft Entra ID authentication.
- Consider the [authentication migration timeline](https://devblogs.microsoft.com/devops/reducing-pat-usage-across-azure-devops/) for Azure DevOps improvements and reducing the use of personal access tokens.
- Review your current authentication approach against security best practices.

### Azure DevOps Server

- Use [.NET client libraries](../../concepts/dotnet-client-libraries.md) with Windows Authentication when possible.
- Use personal access tokens for Azure DevOps Server scenarios when they're acceptable.
- Plan for future Azure DevOps Services migration to take advantage of modern authentication.

## Frequently asked questions (FAQ)

### Should I use Microsoft Entra ID OAuth or personal access tokens?

Use Microsoft Entra ID OAuth in the following scenarios:

- New applications and integrations.
- Production workloads that require robust security.
- Applications that need enterprise identity integration.
- Long-term projects with compliance requirements.

Use personal access tokens only in the following scenarios:

- Personal scripts and ad hoc tasks.
- Legacy applications during migration planning.
- Azure DevOps Server scenarios where modern authentication isn't available.

### Should I use service principals or user delegation for authentication?

Use service principals or managed identities in the following scenarios:

- Build applications that operate independently (background services, automation).
- Create apps that don't require user interaction.
- Implement service-to-service communication.
- Build continuous integration and continuous delivery (CI/CD) pipelines or automated workflows.

Use user delegation (OAuth with user consent) in the following scenarios:

- Build applications that act for human users.
- Create interactive apps where users sign in with their own credentials.
- Implement features that require user-specific permissions.
- Build apps that respect users' individual access rights.

### How do I authenticate with both Azure DevOps Services and Azure DevOps Server?

Create separate authentication paths for each service:

- **Azure DevOps Services**: Use Microsoft Entra ID OAuth.
- **Azure DevOps Server**: Use .NET client libraries with Windows Authentication or personal access tokens.

Use the `requestContext` method to detect the service type, and apply the appropriate authentication method.

### Why can't my service account access Azure DevOps APIs?

Here are some common issues that affect service account access:

- **Service account not "materialized"**: Use the correct sign-in method. Service accounts need interactive sign-in permissions or proper Microsoft Entra ID registration.
- **Insufficient permissions**: Ensure that the service account has appropriate Azure DevOps permissions.
- **Authentication method**: Use service principals or managed identities instead of trying to authenticate as a service account.

### How do I migrate from personal access tokens to modern authentication?

Follow these steps:

1. Identify current personal access token usage in your applications.

1. Choose an alternate authentication method:

   - Microsoft Entra ID OAuth for user-delegated scenarios
   - Service principals for service-to-service scenarios
   - Azure DevOps service connection

1. Update the authentication code by using the [Azure DevOps migration authentication samples](https://github.com/microsoft/azure-devops-auth-samples).

1. Test the changes thoroughly before you remove any personal access token dependencies.

1. Monitor and validate the new authentication method.

### Why shouldn't I decode or read claims from authentication tokens?

Authentication tokens exist solely to prove *who* the caller is and *what they're authorized to do*. They're not a stable data interface or a schema you can depend on.

Token claims are never publicly documented, and Azure DevOps reserves the right to change, rename, remove, or encrypt them at any time without notice. Starting summer 2025, Azure DevOps is further encrypting authentication tokens, which means clients can't read token payloads. Any application that decodes tokens to extract claims breaks.

Instead of reading token claims, follow these practices:

- **Treat tokens as opaque** — pass them in authorization headers, but don't decode or inspect them.
- **Use supported REST APIs** — retrieve user or organization data from [Azure DevOps REST APIs](/rest/api/azure/devops), which provide stable contracts and documentation.
- **Assume any claim can change** — if you find yourself parsing token contents to read values, put that logic in an API call instead.

These changes don't affect applications that already treat tokens as opaque.

## Implementation procedures

After you choose the authentication method for your scenario, finish the implementation steps:

- **New applications**: [Build Azure DevOps integrations with Microsoft Entra OAuth apps](entra-oauth.md)
- **Service applications**: [Use service principals and managed identities in Azure DevOps](service-principal-managed-identity.md)
- **Personal scripts**: [Use personal access tokens](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md)
- **Azure Pipelines**: [Access Azure DevOps with Entra workload identity](../../../pipelines/library/add-devops-entra-service-connection.md)

<a id="use-ai-assistance"></a>

## Use AI to choose an authentication method

If you connect the [Azure DevOps MCP Server](../../../mcp-server/mcp-server-overview.md) to your AI agent in agent mode, you can use natural language prompts to get authentication recommendations for your scenario.

| Task | Example prompt |
|------|----------------|
| Choose auth for a background service | `Which authentication method should I use for a background Azure Function that needs to access Azure DevOps APIs?` |
| Compare auth options | `Help me choose between service principals, managed identities, and personal access tokens for my Azure DevOps integration` |
| Auth for a web app | `I'm building a React web app that needs to access Azure DevOps on behalf of signed-in users — what authentication approach should I use?` |
| Migrate from PATs | `Help me plan a migration from personal access tokens to Microsoft Entra ID authentication for my Azure DevOps integrations` |
| Auth for CI/CD | `What's the most secure way to authenticate Azure DevOps REST API calls from a GitHub Actions workflow?` |
| Troubleshoot auth failures | `I'm getting 401 errors when calling the Azure DevOps REST API with my token — help me diagnose the issue` |

> [!NOTE]
> Agent mode and the MCP Server use natural language, so you can adjust these prompts or ask follow-up questions to refine the results.

## Related content

- [OAuth 2.0 for Azure DevOps](oauth.md)
- [Azure DevOps Services REST API reference](/rest/api/azure/devops)
- [Security and identity in Azure DevOps](../../../organizations/security/about-security-identity.md)
- [Azure DevOps data protection overview](../../../organizations/security/data-protection.md)
- [Access Azure DevOps with Entra workload identity](../../../pipelines/library/add-devops-entra-service-connection.md)
