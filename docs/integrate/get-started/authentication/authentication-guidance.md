---
title: Authentication Methods for Azure DevOps
titleSuffix: Azure DevOps
description: Choose the right authentication method for your Azure DevOps integration, with Microsoft Entra ID as the recommended approach.
ms.assetid: 15CCEB1E-F42B-4439-8C35-B8A225F5546C
ms.subservice: azure-devops-security
ms.topic: concept-article
ms.custom: arm2024, pat-reduction
ai-usage: ai-assisted
monikerRange: '<= azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 02/24/2026
---

# Authentication methods for Azure DevOps

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

This article describes authentication methods for Azure DevOps integration and helps you choose the best option for your scenario.
Modern authentication approaches like Microsoft Entra ID provide enhanced security and the best approach for new applications.

> [!IMPORTANT]
> Use Microsoft Entra ID authentication for new applications that integrate with Azure DevOps Services.
> Use personal access tokens sparingly, and only when Microsoft Entra ID isn't available.

[!INCLUDE [use-microsoft-entra-reduce-pats](../../../includes/use-microsoft-entra-reduce-pats.md)]

OAuth 2.0 and Microsoft Entra ID authentication are available for Azure DevOps Services only, not Azure DevOps Server.

For on-premises scenarios, use [.NET client libraries](../../concepts/dotnet-client-libraries.md), Windows authentication, or [personal access tokens](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md).
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

## Answers to common questions

The following sections provide answers to frequently asked questions.

### Should I use Microsoft Entra ID OAuth or personal access tokens?

Use Microsoft Entra ID OAuth in the following scenarios:

- New applications and integrations
- Production workloads that require robust security
- Applications that need enterprise identity integration
- Long-term projects with compliance requirements

Only use personal access tokens in the following scenarios:

- Personal scripts and ad hoc tasks
- Legacy applications during migration planning
- Azure DevOps Server scenarios where modern authentication isn't available

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

The best practice is to create separate authentication paths:

- **Azure DevOps Services**: Use Microsoft Entra ID OAuth.
- **Azure DevOps Server**: Use .NET client libraries with Windows Authentication or personal access tokens.

Use the `requestContext` method to detect the service type, and apply the appropriate authentication method.

### Why can't my service account access Azure DevOps APIs?

Here are some common issues that can affect service account access:

- **Service account not "materialized"**: Use the correct sign-in method. Service accounts need interactive sign-in permissions or proper Microsoft Entra ID registration.
- **Insufficient permissions**: Ensure that the service account has appropriate Azure DevOps permissions.
- **Authentication method**: Use service principals or managed identities instead of trying to authenticate as a service account.

### How do I migrate from personal access tokens to modern authentication?

Follow these steps:

1. Identify current personal access token usage in your applications.

1. Choose an alternate authentication method:

   - Microsoft Entra ID OAuth for user-delegated scenarios
   - Service principals for service-to-service scenarios

1. Update the authentication code by using the [Azure DevOps migration authentication samples](https://github.com/microsoft/azure-devops-auth-samples).

1. Test the changes thoroughly before you remove any personal access token dependencies.

1. Monitor and validate the new authentication method.

## Implementation procedures

After you choose the authentication method for your scenario, finish the implementation:

- **New applications**: [Build Azure DevOps integrations with Microsoft Entra OAuth apps](entra-oauth.md)
- **Service applications**: [Use service principals and managed identities in Azure DevOps](service-principal-managed-identity.md)
- **Personal scripts**: [Use personal access tokens](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md)

## Related content

- [OAuth 2.0 for Azure DevOps](oauth.md)
- [Azure DevOps Services REST API reference](/rest/api/azure/devops)
- [Security and identity in Azure DevOps](../../../organizations/security/about-security-identity.md)
- [Azure DevOps data protection overview](../../../organizations/security/data-protection.md)
