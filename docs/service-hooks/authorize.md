---
ms.prod: devops
ms.technology: devops-collab
ms.topic: conceptual
title: Authorize Other Services | Azure DevOps Services
description: Authorize other services to work with Azure DevOps Services
ms.assetid: 314a28cd-b2ae-41a0-8dfb-330222c1aed0
ms.manager: jillfra
monikerRange: '>= tfs-2017'
ms.author: elbatk
author: elbatk
ms.date: 2/08/2019
---

#  Authorize other services to access your Azure DevOps Services account

When you use a service that's integrated with Azure DevOps Services,
we use the industry-standard OAuth 2.0 authorization framework to provide safe,
secure access to your resources by those other services.
With OAuth, you grant a service the authorization to access your Azure DevOps Services
resources such as work items, source code, build results.

- Authorizations are bound to your credentials,
so the service can use the authorization to access resources
in any Azure DevOps Services account that you have access to.

- Use your Microsoft account (like ```me@live.com```) or your work account
(your account in Azure AD - like ```me@my-workplace.com```) to authorize the service.

- The service that you authorize never has access to your Azure DevOps Services credentials.

- Revoke any authorizations that you've granted to other services.

## Authorize a service

A typical authorization flow might go like this:

1. You're using a service that uses Azure DevOps Services resources,
so the service requests authorization.

2. If you're not already signed in, Azure DevOps Services will prompt you for your credentials.

   <img alt="Azure DevOps Services sign in page" src="./_img/authorize/vso-sign-in.png" style="border: 1px solid #CCCCCC" />

3. After you've signed in, you get the authorization approval page.

   <img alt="Azure DevOps Services authorization page" src="./_img/authorize/vso-authorize.png" style="border: 1px solid #CCCCCC" />

   At this point in time, services can only request full access to all of the resources that are available to you through the REST APIs, so don't be surprised that the authorization request isn't more specific.

4. You review the request and approve the authorization.

5. The authorized service uses that authorization to access resources in your Visual Studio account.

To ensure an authorization request is legitimate:

- Look for the Azure DevOps Services branding across the top of the authorization approval page.

- Ensure the authorization approval page URL begins with ```https://app.vssps.visualstudio.com/```.

- Pay attention to any HTTPS-related security warnings in your browser.

- Remember that other services don't ask for your credentials directly. They let you provide them to Azure DevOps Services through the authorization approval page.

## Manage authorizations

To see the services that you've authorized to access your account,
go to [https://app.vssps.visualstudio.com/Profile/View](https://app.vssps.visualstudio.com/Profile/View)
and follow the **Manage authorizations** link.

<img alt="List of authorized services" src="./_img/authorize/authorizations.png" style="border: 1px solid #CCCCCC" />

You can revoke any authorizations here and the service can no longer access your account on your behalf.
