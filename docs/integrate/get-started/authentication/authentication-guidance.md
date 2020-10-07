---
title: Guidance for authentication | Azure DevOps Services REST APIs
description: Guidance for authentication with Azure DevOps Services.
ms.assetid: 15CCEB1E-F42B-4439-8C35-B8A225F5546C
ms.technology: devops-ecosystem
ms.topic: conceptual
ms.custom: has-adal-ref
monikerRange: '>= tfs-2013'
ms.author: chcomley
author: chcomley
ms.date: 04/06/2020
---

# Choosing the right authentication mechanism

[!INCLUDE [version-all](../../../includes/version-all.md)]

For applications that interface with Azure DevOps Services, you must authenticate to gain access to resources like REST APIs. We understand that Azure DevOps Services offers many different ways to authenticate your application. This article provides guidance to help you choose the right authentication for your application. The following table outlines the recommended authentication mechanism for different application types. See the following basic descriptions, examples, and code samples to get you started.

| Type of application | Description | example |Authentication mechanism | Code samples |
|---------------------|-------------|---------|-------------------------|--------|
 Interactive client-side (REST) | Client application, that allows user interaction, calling [Azure DevOps Services REST APIs](/rest/api/vsts) | Console application enumerating projects in an organization | [Active Directory authentication library (ADAL)](/azure/active-directory/develop/active-directory-authentication-libraries) | [sample](https://github.com/Microsoft/vsts-auth-samples/tree/master/ManagedClientConsoleAppSample) |
| Interactive client-side (Client library) | Client application, that allows user interaction, calling Azure DevOps Services Client libraries | Console application enumerating bugs assigned to the current user |  [Client libraries](../../concepts/dotnet-client-libraries.md) | [sample](https://github.com/Microsoft/vsts-auth-samples/tree/master/ClientLibraryConsoleAppSample) |
| Interactive JavaScript | GUI-based JavaScript application | AngularJS single page app displaying project information for a user | [Active Directory authentication Library for JS (ADAL JS)](https://github.com/AzureAD/azure-activedirectory-library-for-js) | [sample](https://github.com/Microsoft/vsts-auth-samples/tree/master/JavascriptWebAppSample) |
| Personal access token (PAT) | Easy alternative to regular OAuth tokens.  | Use your PAT in place of your password. | [PATs](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md)
| Non-interactive client-side | Headless text only client-side application | Console app displaying all bugs assigned to a user | [Device Profile](/azure/active-directory/devices/overview) | [sample](https://github.com/Microsoft/vsts-auth-samples/tree/master/DeviceProfileSample) |
| Interactive client-side app targeting Azure DevOps Services and TFS | Client application, that allows user interaction, authenticates Azure DevOps Services and TFS users | Console application allowing Azure DevOps Services and TFS users to see assigned bugs |  [Client Library (Interactive and Windows authentication)](../client-libraries/samples.md#authenticating) | [sample](https://github.com/Microsoft/vsts-auth-samples/tree/master/DualSupportClientSample) |
| Interactive web | GUI-based web application | Custom Web dashboard displaying build summaries |[OAuth](./oauth.md) | [sample](https://github.com/Microsoft/vsts-auth-samples/tree/master/OAuthWebSample) |
| TFS application | TFS app using the Client OM library | TFS extension displaying team bug dashboards | [Client Libraries](../../concepts/dotnet-client-libraries.md) | [sample](https://github.com/Microsoft/vsts-auth-samples/tree/master/ClientLibraryConsoleAppSample) |
| [Azure DevOps Services Extension](../../../extend/get-started/node.md) | Azure DevOps Services extension | [Agile Cards](https://marketplace.visualstudio.com/items?itemName=spartez.agile-cards) | [VSS Web Extension SDK](https://github.com/Microsoft/vss-web-extension-sdk) | [sample walkthrough](../../../extend/develop/add-dashboard-widget.md) |

> [!NOTE]
> The Azure DevOps API doesn't support non-interactive service access via service principals.

To learn more about how security and identity are managed, see [About security and identity](../../../organizations/security/about-security-identity.md).

To learn more about how we store your credentials, see [Credential storage for Azure DevOps](../../../organizations/security/credential-storage.md).

## Enabling IIS Basic Authentication invalidates using PATs for TFS

Learn more about [using IIS Basic Authentication with TFS on-premises](iis-basic-auth.md).

## Frequently asked questions (FAQs)

### Q: Why can't one of my service accounts access the Azure DevOps REST API?

A: Your service account may not have "materialized." Since signing in isn't possible with a service account that doesn't have interactive signing in permissions, check out [this work-around](https://github.com/microsoft/azure-devops-dotnet-samples/blob/main/ClientLibrary/Quickstarts/dotnet/MaterializeUserQuickStarts/Program.cs).

### Q: I'm making an interactive client-side application. Should I use [Azure DevOps Services Client Libraries](../../concepts/dotnet-client-libraries.md) or [Azure DevOps Services REST APIs](/rest/api/vsts)?
A: We recommend using Azure DevOps Services Client Libraries over REST APIs when accessing Azure DevOps Services resources. They're simpler and more easily maintained when version changes to our REST endpoints occur. If functionality is missing from the client libraries, [ADAL](/azure/active-directory/develop/active-directory-authentication-libraries) is the best authentication mechanism to use with our REST APIs.

### Q: Can I use ADAL if I log into my organization with a Microsoft account (MSA)?

A: Yes, you can use ADAL to create client-side applications for an MSA backed account using ADAL with some limitations. Instead of configuring ADAL with a `Client ID` or `Reply URL` from Azure portal, MSA users can use the `Client ID: "872cd9fa-d31f-45e0-9eab-6e460a02d1f1"` and `Reply URL: "urn:ietf:wg:oauth:2.0:oob"` as replacement values to get a valid ADAL access token without needing an Azure Active Directory. 

> [!NOTE] 
> This approach only works for client side applications. For JS web apps, ADAL JS doesn't work without an Azure AD tenant.

### Q: Is this guidance only for Azure DevOps Services or is it also relevant for on-premises TFS users?

A: This guidance is mainly for Azure DevOps Services users. [Client Libraries](../../concepts/dotnet-client-libraries.md) are a series of packages built specifically for extending TFS functionality. For on-premises users, we recommend using the [Client Libraries](../../concepts/dotnet-client-libraries.md), Windows Auth, or [Personal Access Tokens (PATs)](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) to authenticate for a user.

### Q: What if I want my application to authenticate with both TFS and Azure DevOps Services?

A: The best practice is to have different authentication paths for TFS and Azure DevOps Services. You can use the requestContext to find out which you're hitting and then use the best mechanism for each. Instead, if you want a unified solution, [PATs](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) will work for both.