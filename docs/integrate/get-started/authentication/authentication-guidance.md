---
title: Guidance for authentication
titleSuffix: Azure DevOps  
description: Guidance for authentication with Azure DevOps  
ms.assetid: 15CCEB1E-F42B-4439-8C35-B8A225F5546C
ms.subservice: azure-devops-security
ms.topic: conceptual
ms.custom: arm2024
monikerRange: '<= azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 07/10/2024
---

# Choose the right authentication mechanism

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

For applications that interface with Azure DevOps Services, you must authenticate to gain access to resources like REST APIs. This article provides guidance to help you choose the right authentication mechanism for your application. 

The following table outlines suggested authentication concepts to consider for different application scenarios. Refer to the accompanying descriptions, examples, and code samples to help get you started.


| Type of application | Description | Example | Authentication mechanism | Code samples |
|---------------------|-------------|---------|-------------------------|--------|
| Interactive client-side app (REST) | Client application that allows user interaction calling [Azure DevOps Services REST APIs](/rest/api/azure/devops) | Console application enumerating projects in an organization | [OAuth](./oauth.md) with Microsoft Authentication Library (MSAL) | [sample](https://github.com/microsoft/azure-devops-auth-samples/tree/master/ManagedClientConsoleAppSample) |
| Interactive client-side app (client libraries) | Client application that allows user interaction calling Azure DevOps Services [client libraries](../../concepts/dotnet-client-libraries.md)  | Console application enumerating bugs assigned to the current user |  OAuth with [client libraries](../../concepts/dotnet-client-libraries.md) | [sample](https://github.com/Microsoft/vsts-auth-samples/tree/master/ClientLibraryConsoleAppSample) |
| Non-interactive client-side app | Headless text only client-side application | Console app displaying all bugs assigned to a user | OAuth with [Device Profile](/azure/active-directory/develop/v2-oauth2-device-code) flow | [sample](https://github.com/Microsoft/vsts-auth-samples/tree/master/DeviceProfileSample) |
| Personal access token (PAT) | Bearer token to access your own resources  | Use your PAT in place of your password for ad-hoc REST calls. Not ideal for applications. | [PATs](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) |[examples](../../how-to/call-rest-api.md)  |
| Server app | Azure DevOps Server app using the Client OM library | Azure DevOps Server extension displaying team bug dashboards | [Client Libraries](../../concepts/dotnet-client-libraries.md) | [sample](https://github.com/Microsoft/vsts-auth-samples/tree/master/ClientLibraryConsoleAppSample) |
| Service principal or Managed identity | Application with its own identity | Azure function to create work items | [Service principals and managed identities](./service-principal-managed-identity.md)| [sample](https://github.com/microsoft/azure-devops-auth-samples/tree/master/ServicePrincipalsSamples) |
| Web extension | Azure DevOps Services [extension](../../../extend/develop/samples-overview.md) | [Agile Cards](https://marketplace.visualstudio.com/items?itemName=spartez.agile-cards) extension | [VSS Web Extension SDK](https://github.com/Microsoft/azure-devops-extension-sdk) | [sample](../../../extend/develop/add-dashboard-widget.md) |

> [!TIP]
> [Entra-based authentication](entra.md) is our recommendation for developers looking to integrate with Azure DevOps Services, if you are interacting with Microsoft Entra accounts. The OAuth sample apps in this table are using [Microsoft Entra's identity platform for app development](entra-oauth.md).
> For authentication with Microsoft accounts (MSA) or Azure DevOps Server users, look into our [client libraries](../../concepts/dotnet-client-libraries.md) or [PATs](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md).
> Read up more in [our blog](https://devblogs.microsoft.com/devops/reducing-pat-usage-across-azure-devops/) on how we're reducing PAT usage across our platform.


## Frequently asked questions (FAQs)

### Q: Why can't my service account access the Azure DevOps REST API?
A: Your service account might not have "materialized." Service accounts without interactive sign-in permissions can't sign in. For more information, see [this work-around](https://github.com/microsoft/azure-devops-dotnet-samples/blob/main/ClientLibrary/Quickstarts/dotnet/MaterializeUserQuickStarts/Program.cs) for a solution.

### Q: Should I use [Azure DevOps Services Client Libraries](../../concepts/dotnet-client-libraries.md) or [Azure DevOps Services REST APIs](/rest/api/azure/devops) for my interactive client-side application?
A: We recommend using Azure DevOps Services Client Libraries over REST APIs for accessing Azure DevOps Services resources. They're simpler and easier to maintain when REST endpoint versions change. If the client libraries lack certain functionality, use [MSAL](/azure/active-directory/develop/msal-overview) for authentication with our REST APIs.

### Q: Is this guidance only for Azure DevOps Services or is it also relevant for on-premises Azure DevOps Server users?
A: This guidance is primarily for Azure DevOps Services users. For Azure Devops Server users, we recommend using the [Client Libraries](../../concepts/dotnet-client-libraries.md), Windows Authentication, or [Personal Access Tokens (PATs)](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) for authentication.

### Q: What if I want my application to authenticate with both Azure DevOps Server and Azure DevOps Services?
A: The best practice is to have separate authentication paths for Azure DevOps Server and Azure DevOps Services. You can use the `requestContext` to determine which service you're accessing and then apply the appropriate authentication mechanism. If you prefer a unified solution, [PATs](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) work for both.

## Related resources

- [About security and identity](../../../organizations/security/about-security-identity.md).
- [Azure DevOps data protection overview](../../../organizations/security/data-protection.md)
- [Sample applications](https://github.com/microsoft/azure-devops-auth-samples/tree/master)
