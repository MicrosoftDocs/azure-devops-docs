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

The following table outlines the recommended authentication mechanisms for different application types. Refer to the accompanying descriptions, examples, and code samples to help get you started.

| Type of application | Description | Example |Authentication mechanism | Code samples |
|---------------------|-------------|---------|-------------------------|--------|
|Interactive client-side (REST) | Client application that allows user interaction calling [Azure DevOps Services REST APIs](/rest/api/azure/devops) | Console application enumerating projects in an organization | [Microsoft Authentication Library (MSAL)](/azure/active-directory/develop/msal-overview) | [sample](https://github.com/microsoft/azure-devops-auth-samples/tree/master/ManagedClientConsoleAppSample) |
| Interactive client-side (Client library) | Client application that allows user interaction calling Azure DevOps Services Client libraries | Console application enumerating bugs assigned to the current user |  [Client libraries](../../concepts/dotnet-client-libraries.md) | [sample](https://github.com/Microsoft/vsts-auth-samples/tree/master/ClientLibraryConsoleAppSample) |
| Interactive JavaScript | GUI-based JavaScript application | AngularJS single page app displaying project information for a user | [Microsoft Authentication Library for JavaScript (MSAL JS)](https://github.com/AzureAD/microsoft-authentication-library-for-js#microsoft-authentication-library-for-javascript-msaljs) | [sample](https://github.com/microsoft/azure-devops-auth-samples/tree/master/JavascriptWebAppSample) |
| Personal access token (PAT) | Bearer token to access your own resources  | Use your PAT in place of your password. | [PATs](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) |[PATs](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md)  |
| Non-interactive client-side | Headless text only client-side application | Console app displaying all bugs assigned to a user | [Device Profile](/azure/active-directory/develop/v2-oauth2-device-code) | [sample](https://github.com/Microsoft/vsts-auth-samples/tree/master/DeviceProfileSample) |
| Interactive client-side app targeting Azure DevOps | Client application that allows user interaction authenticates Azure DevOps users | Console application allowing Azure DevOps users to see assigned bugs |  [Client Library (Interactive and Windows authentication)](../client-libraries/samples.md) | [sample](https://github.com/Microsoft/vsts-auth-samples/tree/master/DualSupportClientSample) |
| Interactive web | GUI-based web application that requires user consent | Custom Web dashboard displaying build summaries |[Azure DevOps OAuth](./oauth.md) | [sample](https://github.com/Microsoft/vsts-auth-samples/tree/master/OAuthWebSample) |
| Service Principals or Managed Identities | Application with access to organization's Azure DevOps resources | Azure function to create work items |[Service principals and managed identities](./service-principal-managed-identity.md)| [sample](https://github.com/microsoft/azure-devops-auth-samples/tree/master/ServicePrincipalsSamples) |
| Azure DevOps Server application | Azure DevOps Server app using the Client OM library | Azure DevOps Server extension displaying team bug dashboards | [Client Libraries](../../concepts/dotnet-client-libraries.md) | [sample](https://github.com/Microsoft/vsts-auth-samples/tree/master/ClientLibraryConsoleAppSample) |
| [Azure DevOps Services extension](../../../extend/get-started/node.md) | Azure DevOps Services extension | [Agile Cards](https://marketplace.visualstudio.com/items?itemName=spartez.agile-cards) | [VSS Web Extension SDK](https://github.com/Microsoft/azure-devops-extension-sdk) | [sample](../../../extend/develop/add-dashboard-widget.md) |

For more information, see the following articles:
- [About security and identity](../../../organizations/security/about-security-identity.md).
- [Credential storage for Azure DevOps](../../../organizations/security/credential-storage.md).
- [OAuth authentication](oauth.md)
- [Service principals and managed identities](service-principal-managed-identity.md)
- [Azure DevOps Client Libraries](../../concepts/dotnet-client-libraries.md)
- [Azure DevOps extensions](../../../extend/develop/samples-overview.md)
- [Azure DevOps data protection overview](../../../organizations/security/data-protection.md)

#### Enabling IIS Basic Authentication invalidates using PATs for Azure DevOps Server

For more information, see [Using IIS Basic Authentication with Azure DevOps on-premises](iis-basic-auth.md).

## Frequently asked questions (FAQs)

### Q: Why can't my service account access the Azure DevOps REST API?
A: Your service account might not have "materialized." Service accounts without interactive sign-in permissions can't sign in. For more information, see [this work-around](https://github.com/microsoft/azure-devops-dotnet-samples/blob/main/ClientLibrary/Quickstarts/dotnet/MaterializeUserQuickStarts/Program.cs) for a solution.

### Q: Should I use [Azure DevOps Services Client Libraries](../../concepts/dotnet-client-libraries.md) or [Azure DevOps Services REST APIs](/rest/api/azure/devops) for my interactive client-side application?
A: We recommend using Azure DevOps Services Client Libraries over REST APIs for accessing Azure DevOps Services resources. They're simpler and easier to maintain when REST endpoint versions change. If the client libraries lack certain functionality, use [MSAL](/azure/active-directory/develop/msal-overview) for authentication with our REST APIs.

### Q: Is this guidance only for Azure DevOps Services or is it also relevant for on-premises Azure DevOps Server users?
A: This guidance is primarily for Azure DevOps Services users. For Azure Devops Server users, we recommend using the [Client Libraries](../../concepts/dotnet-client-libraries.md), Windows Authentication, or [Personal Access Tokens (PATs)](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) for authentication.

### Q: What if I want my application to authenticate with both Azure DevOps Server and Azure DevOps Services?
A: The best practice is to have separate authentication paths for Azure DevOps Server and Azure DevOps Services. You can use the `requestContext` to determine which service you're accessing and then apply the appropriate authentication mechanism. If you prefer a unified solution, [PATs](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) work for both.
