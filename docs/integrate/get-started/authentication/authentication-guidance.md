---
title: Authentication guidance for Azure DevOps
titleSuffix: Azure DevOps  
description: Choose the right authentication method for your Azure DevOps integration, with Microsoft Entra ID as the recommended approach.
ms.assetid: 15CCEB1E-F42B-4439-8C35-B8A225F5546C
ms.subservice: azure-devops-security
ms.topic: conceptual
ms.custom: arm2024
ai-usage: ai-assisted
monikerRange: '<= azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 07/11/2025
---

# Choose the right authentication method for Azure DevOps

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

This article helps you choose the most appropriate authentication method for your Azure DevOps integration. Modern authentication approaches like Microsoft Entra ID provide enhanced security and are recommended for new applications.

> [!IMPORTANT]
> **Microsoft Entra ID authentication is recommended** for new applications integrating with Azure DevOps Services. Personal access tokens should be used sparingly and only when modern authentication isn't available.

> [!NOTE]
> OAuth 2.0 and Microsoft Entra ID authentication are only available for Azure DevOps Services, not Azure DevOps Server. For on-premises scenarios, use [Client Libraries](../../concepts/dotnet-client-libraries.md), Windows Authentication, or [personal access tokens](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md). 

## Authentication methods by scenario

Choose the appropriate authentication method based on your application type and requirements:

| Application Type | Description | Example | Recommended Method | Code Samples |
|------------------|-------------|---------|-------------------|-------------|
| **Modern web/desktop apps** | Interactive applications using current frameworks | React app, .NET desktop app | [Microsoft Entra ID OAuth](./entra-oauth.md) with MSAL | [sample](https://github.com/microsoft/azure-devops-auth-samples/tree/master/ManagedClientConsoleAppSample) |
| **Service/background apps** | Applications running without user interaction | Azure Functions, background services | [Service principals & managed identities](./service-principal-managed-identity.md) | [sample](https://github.com/microsoft/azure-devops-auth-samples/tree/master/ServicePrincipalsSamples) |
| **Legacy client apps** | Existing applications using client libraries | Console apps with Azure DevOps .NET libraries | [Client Libraries](../../concepts/dotnet-client-libraries.md) with OAuth | [sample](https://github.com/Microsoft/vsts-auth-samples/tree/master/ClientLibraryConsoleAppSample) |
| **Headless/CLI apps** | Non-interactive command-line tools | Build scripts, automation tools | [Device Code Flow](./entra-oauth.md) | [sample](https://github.com/Microsoft/vsts-auth-samples/tree/master/DeviceProfileSample) |
| **Azure DevOps extensions** | Extensions running within Azure DevOps | Custom dashboard widgets, work item forms | [VSS Web Extension SDK](https://github.com/Microsoft/azure-devops-extension-sdk) | [sample](../../../extend/develop/add-dashboard-widget.md) |
| **Azure DevOps Server apps** | On-premises Azure DevOps Server integrations | Custom server extensions | [Client Libraries](../../concepts/dotnet-client-libraries.md) or Windows Auth | [sample](https://github.com/Microsoft/vsts-auth-samples/tree/master/ClientLibraryConsoleAppSample) |
| **Personal/ad-hoc scripts** | Quick scripts for personal use | PowerShell scripts, curl commands | [Personal Access Tokens](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) | [examples](../../how-to/call-rest-api.md) |

### Security recommendation hierarchy

- **Best**: Microsoft Entra ID OAuth with service principals or managed identities
- **Good**: Microsoft Entra ID OAuth with user delegation  
- **Acceptable**: Client Libraries with OAuth authentication
- **Use sparingly**: Personal Access Tokens

## Getting started recommendations

### For new applications
- **Start with [Microsoft Entra ID authentication](entra-oauth.md)** for the best security and future compatibility.
- Use **service principals or managed identities** for service-to-service scenarios.
- Avoid personal access tokens in production applications.

### For existing applications  
- **Plan migration** from personal access tokens to Microsoft Entra ID authentication.
- Consider the [authentication migration timeline](https://devblogs.microsoft.com/devops/reducing-pat-usage-across-azure-devops/) for Azure DevOps improvements.
- Review your current authentication approach against security best practices.

### For Azure DevOps Server
- Use [Client Libraries](../../concepts/dotnet-client-libraries.md) with Windows Authentication when possible.
- Personal access tokens are acceptable for some Azure DevOps Server scenarios.
- Plan for future Azure DevOps Services migration to take advantage of modern authentication.

## Frequently asked questions

### Q: Should I use Microsoft Entra ID OAuth or Personal Access Tokens?
A: 
**Use Microsoft Entra ID OAuth** for:
- New applications and integrations
- Production workloads requiring robust security
- Applications needing enterprise identity integration
- Long-term projects with compliance requirements

**Use Personal Access Tokens only for**:
- Personal scripts and ad-hoc tasks
- Legacy applications during migration planning
- Azure DevOps Server scenarios where modern auth isn't available

### Q: Should I use Client Libraries or REST APIs?
A: 
**Use Azure DevOps Client Libraries** when:
- Building .NET applications
- You need simplified API interactions
- You want automatic handling of API version changes

**Use REST APIs directly** when:
- Building in non-.NET languages
- You need access to newer APIs not yet in client libraries
- You want maximum control over API interactions

### Q: How do I authenticate with both Azure DevOps Server and Azure DevOps Services?
A:
**Best practice**: Create separate authentication paths:
- **Azure DevOps Services**: Use Microsoft Entra ID OAuth
- **Azure DevOps Server**: Use Client Libraries with Windows Authentication or PATs

Use the `requestContext` to detect the service type and apply the appropriate authentication method.

### Q: Why can't my service account access Azure DevOps APIs?
A: 
Common issues:
- **Service account not "materialized"**: Service accounts need interactive sign-in permissions or proper Microsoft Entra ID registration
- **Insufficient permissions**: Ensure the service account has appropriate Azure DevOps permissions
- **Authentication method**: Use service principals or managed identities instead of trying to authenticate as a service account

### Q: How do I migrate from PATs to modern authentication?
A: Do the following steps:
1. **Identify current PAT usage** in your applications
2. **Choose the appropriate modern method**:
   - Microsoft Entra ID OAuth for user-delegated scenarios
   - Service principals for service-to-service scenarios
3. **Update authentication code** using our [migration samples](https://github.com/microsoft/azure-devops-auth-samples)
4. **Test thoroughly** before removing PAT dependencies
5. **Monitor and validate** the new authentication method

## Next step

Choose your authentication implementation:

**For new applications:**
> [!div class="nextstepaction"]
> [Microsoft Entra ID OAuth](entra-oauth.md)

**For service applications:**
> [!div class="nextstepaction"]
> [Service principals and managed identities](service-principal-managed-identity.md)

**For personal scripts:**
> [!div class="nextstepaction"]
> [Personal access tokens](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md)

## Related resources

- [Microsoft Entra ID authentication guide](entra-oauth.md)
- [OAuth 2.0 for Azure DevOps](oauth.md)
- [Azure DevOps Services REST API reference](/rest/api/azure/devops)
- [Azure DevOps .NET Client Libraries](../../concepts/dotnet-client-libraries.md)
- [Authentication code samples](https://github.com/microsoft/azure-devops-auth-samples)
- [About security and identity](../../../organizations/security/about-security-identity.md)
- [Azure DevOps data protection overview](../../../organizations/security/data-protection.md)
