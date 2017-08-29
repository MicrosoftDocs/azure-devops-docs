---
title: Guidance for authentication | Visual Studio Team Services REST APIs
description: Guidance for authentication with with Visual Studio Team Services.
ms.assetid: 15CCEB1E-F42B-4439-8C35-B8A225F5546C
ms.prod: vs-devops-alm
ms.technology: vs-devops-integrate
ms.manager: douge
ms.author: peakyy
ms.date: 06/30/2017
---

# Choosing the right authentication mechanism



When writing an application which interfaces with VSTS, you will have to authenticate to gain acess to resources like REST APIs. We understand that VSTS offers many different ways to authenticate your application. This topic provides guidance to help you choose the right authentication for your application. The following table outlines the recommended authentication mechanism for different application types. We have provided basic descriptions, examples, and code samples to get you started.

| Type of application | Description | example |Authentication mechanism | Code samples |
|---------------------|-------------|---------|-------------------------|--------|
| Interactive client-side  | GUI based client side application | Windows app enumerating bugs for a user | [Active Directory authentication library (ADAL)](https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-authentication-libraries) | [sample](https://github.com/Microsoft/vsts-auth-samples/tree/master/ManagedClientConsoleAppSample) |
| Interactive Javascript | GUI based Javascript application | AngularJS single page app displaying work items for a user | [ADAL](https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-authentication-libraries) | sample (coming soon) |
| Non-interactive client-side | Headless text only client side application | Console app displaying all bugs assigned to a user | [Device Profile](https://azure.microsoft.com/en-us/resources/samples/active-directory-dotnet-deviceprofile/?v=17.23h) | [sample](https://github.com/Microsoft/vsts-auth-samples/tree/master/DeviceProfileSample) |
| Interactive web | GUI based web application | Custom Web dashboard displaying build summaries |[OAuth](./oauth.md) | [sample](https://github.com/Microsoft/vsts-auth-samples/tree/master/OAuthWebSample) |
| TFS application | TFS app using the Client OM library | TFS extension displaying team bug dashboards | [Client Libraries](./../client-libraries/dotnet.md) | [sample](https://github.com/Microsoft/vsts-auth-samples/tree/master/ClientLibraryConsoleAppSample) |
| [VSTS Extension](../../../extend/get-started/node.md#files) | Visual Studio Team Services extension | [Agile Cards](https://marketplace.visualstudio.com/items?itemName=spartez.agile-cards) | [VSS Web Extension SDK](https://github.com/Microsoft/vss-web-extension-sdk) | [sample walkthrough](../../../extend/develop/add-dashboard-widget.md) |



## Enabling IIS Basic Authentication invalidates using PATs for TFS

Learn more about [using IIS Basic Authentication with TFS on-premises](iis-basic-auth.md).



## Q&A

#### Q: Can I use ADAL if I log into my VSTS account with a Microsoft account (MSA)?

A: Yes, you do not need an Azure Active Directory (AAD) account to use ADAL.

#### Q: Is this guidence only for VSTS or is this also relevant for on-prem TFS users?

A: This guidence is mainly for VSTS users. [Client Libraries](./../client-libraries/dotnet.md) are a series of packages built specifically for extending TFS functionality. For on-prem users, we recommend using the [Client Libraries](./../client-libraries/dotnet.md), Windows Auth, or [Personal Access Tokens (PATs)](./PATs.md) to authenticate on behalf of a user.

#### Q: What if I want my application to authenticate with both TFS and Team Services?

A: The best practice is to have different authentication paths for TFS and Visual Studio Team Services. You can use the requestContext to find out which you’re hitting and then use the best mechanism for each. Alternatively, if you want a unified solution, [PATs](./PATs.md) will work for both.

