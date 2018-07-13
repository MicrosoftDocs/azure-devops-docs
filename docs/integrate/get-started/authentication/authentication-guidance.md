---
title: Guidance for authentication | VSTS REST APIs
description: Guidance for authentication with with VSTS.
ms.assetid: 15CCEB1E-F42B-4439-8C35-B8A225F5546C
ms.prod: devops
ms.technology: devops-ecosystem
ms.topic: conceptual
ms.manager: douge
monikerRange: '>= tfs-2013'
ms.author: elbatk
author: elbatk
ms.date: 06/30/2017
---

# Choosing the right authentication mechanism


When writing an application which interfaces with VSTS, you will have to authenticate to gain acess to resources like REST APIs. We understand that VSTS offers many different ways to authenticate your application. This topic provides guidance to help you choose the right authentication for your application. The following table outlines the recommended authentication mechanism for different application types. We have provided basic descriptions, examples, and code samples to get you started.

| Type of application | Description | example |Authentication mechanism | Code samples |
|---------------------|-------------|---------|-------------------------|--------|
 Interactive client-side (REST) | Client application, that allows user interaction, calling [VSTS REST APIs](https://docs.microsoft.com/en-us/rest/api/vsts) | Console application enumerating projects in an account | [Active Directory authentication library (ADAL)](https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-authentication-libraries) | [sample](https://github.com/Microsoft/vsts-auth-samples/tree/master/ManagedClientConsoleAppSample) |
| Interactive client-side (Client library) | Client application, that allows user interaction, calling VSTS Client libraries | Console application enumerating bugs assigned to the current user |  [Client libraries](../../concepts/dotnet-client-libraries.md) | [sample](https://github.com/Microsoft/vsts-auth-samples/tree/master/ClientLibraryConsoleAppSample) |
| Interactive Javascript | GUI based Javascript application | AngularJS single page app displaying project information for a user | [Active Directory authentication Library for JS (ADAL JS)](https://github.com/AzureAD/azure-activedirectory-library-for-js) | [sample](https://github.com/Microsoft/vsts-auth-samples/tree/master/JavascriptWebAppSample) |
| Non-interactive client-side | Headless text only client side application | Console app displaying all bugs assigned to a user | [Device Profile](https://azure.microsoft.com/en-us/resources/samples/active-directory-dotnet-deviceprofile/?v=17.23h) | [sample](https://github.com/Microsoft/vsts-auth-samples/tree/master/DeviceProfileSample) |
| Interactive client-side app targeting VSTS and TFS | Client application, that allows user interaction, authenticates VSTS and TFS users | Console application allowing VSTS and TFS users to see assigned bugs |  [Client Library (Interactive and Windows authentication)](/vsts/integrate/get-started/client-libraries/samples#authenticating-team-foundation-server) | [sample](https://github.com/Microsoft/vsts-auth-samples/tree/master/DualSupportClientSample) |
| Interactive web | GUI based web application | Custom Web dashboard displaying build summaries |[OAuth](./oauth.md) | [sample](https://github.com/Microsoft/vsts-auth-samples/tree/master/OAuthWebSample) |
| TFS application | TFS app using the Client OM library | TFS extension displaying team bug dashboards | [Client Libraries](../../concepts/dotnet-client-libraries.md) | [sample](https://github.com/Microsoft/vsts-auth-samples/tree/master/ClientLibraryConsoleAppSample) |
| [VSTS Extension](../../../extend/get-started/node.md) | VSTS extension | [Agile Cards](https://marketplace.visualstudio.com/items?itemName=spartez.agile-cards) | [VSS Web Extension SDK](https://github.com/Microsoft/vss-web-extension-sdk) | [sample walkthrough](../../../extend/develop/add-dashboard-widget.md) |



## Enabling IIS Basic Authentication invalidates using PATs for TFS

Learn more about [using IIS Basic Authentication with TFS on-premises](iis-basic-auth.md).



## Q&A

#### Q: I am making an interactive client-side application. Should I use [VSTS Client Libraries](./../client-libraries/dotnet.md) or [VSTS REST API's](https://docs.microsoft.com/en-us/rest/api/vsts)?
A: We recommend using VSTS Client Libraries over REST API's when accessing VSTS resources. They are simplier and more easily maintained when version changes to our REST endpoints occur. If there is missing functionality from the client libraries [ADAL](https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-authentication-libraries) is the best authentication mechanism to use with our REST API's.

#### Q: Can I use ADAL if I log into my VSTS account with a Microsoft account (MSA)?

A: Yes, you can use ADAL to create client side applications for an MSA backed account using ADAL with some limitations. Instead of configuring ADAL with a `Client ID` or `Reply URL` from Azure Portal, MSA users can use the `Client ID: "872cd9fa-d31f-45e0-9eab-6e460a02d1f1"` and `Reply URL: "urn:ietf:wg:oauth:2.0:oob"` as replacement values to get a valid ADAL access token without needing an Azure Active Directory. 

>Note: This approach will only work for client side applications. For JS web apps, ADAL JS will not work without an AAD tenant.

#### Q: Is this guidance only for VSTS or is this also relevant for on-prem TFS users?

A: This guidance is mainly for VSTS users. [Client Libraries](./../client-libraries/dotnet.md) are a series of packages built specifically for extending TFS functionality. For on-prem users, we recommend using the [Client Libraries](./../client-libraries/dotnet.md), Windows Auth, or [Personal Access Tokens (PATs)](./PATs.md) to authenticate on behalf of a user.

#### Q: What if I want my application to authenticate with both TFS and VSTS?

A: The best practice is to have different authentication paths for TFS and VSTS. You can use the requestContext to find out which you're hitting and then use the best mechanism for each. Alternatively, if you want a unified solution, [PATs](./PATs.md) will work for both.

