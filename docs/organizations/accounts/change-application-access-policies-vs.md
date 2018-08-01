---
title: Change your organization's app access policies in VSTS 
description: Change app access policies for VSTS (VSTS, Visual Studio Online, VSO)
ms.prod: devops
ms.technology: devops-accounts
ms.assetid: 2fdfbfe2-b9b2-4d61-ad3e-45f11953ef3e
ms.topic: conceptual
ms.manager: douge
ms.author: chcomley
author: chcomley
ms.date: 05/30/2018
monikerRange: 'vsts'
---

# Change application access policies for your organization

**VSTS**

VSTS offers the capability for other apps to integrate with its services and resources in your VSTS organization. To access your organization without asking for user credentials multiple times, apps can use the following authentication methods:

* [OAuth](../../integrate/get-started/authentication/oauth.md) to generate tokens for accessing [REST APIs for VSTS and Team Foundation Server](../../integrate/get-started/rest/basics.md). The [Organizations](../../integrate/api/shared/organizations.md) and [Profiles](../../integrate/api/shared/profiles.md) APIs support only OAuth.

* [Alternate credentials](../../repos/git/auth-overview.md#alternate-credentials) as a single set of credentials across all tools that don't have plug-in, extension, or native support. For example, you can use basic authentication to access [REST APIs for VSTS and TFS](../../integrate/get-started/rest/basics.md), but you must turn on alternate credentials.

* [SSH authentication](../../repos/git/use-ssh-keys-to-authenticate.md) to generate encryption keys when you use Linux, macOS, or Windows running [Git for Windows](http://www.git-scm.com/download/win) and can't use [Git credential managers](../../repos/git/set-up-credential-managers.md) or [personal access tokens](use-personal-access-tokens-to-authenticate.md) for HTTPS authentication.

* [Personal access tokens](use-personal-access-tokens-to-authenticate.md) to generate tokens for:

   * Accessing specific resources or activities, like builds or work items
   * Clients like Xcode and Nuget that require usernames and passwords as basic credentials and don't support Microsoft account and Azure Active Directory features like multi-factor authentication
   * Accessing [REST APIs for VSTS and TFS](../../integrate/get-started/rest/basics.md)

By default, your VSTS organization allows access for all authentication methods.
You can limit access, but you must specifically restrict access for each method.
When you deny access to an authentication method, no app can use that method to access your organization. Any app that previously had access will get an authentication error and can't access your organization.

> To remove access for personal access tokens,
> you must [revoke them](use-personal-access-tokens-to-authenticate.md).

To continue, you'll need at least Basic access and VSTS organization owner permissions.
[How do I find the organization owner?](faq-change-app-access.md#find-owner)

1. Sign in as the organization owner to your VSTS organization (```https://{yourorganization}.visualstudio.com```).

   [Why am I asked to choose between my work or school account and my personal account?](faq-change-app-access.md#ChooseOrgAcctMSAcct)

2. From your organization toolbar, go to **Settings**.

    ![Choose the gear icon, go to Settings](../../_shared/_img/organization-settings-new-ui.png)

3. In the Policy tab, review your application connection settings. Change these settings, based on your security policies.

    ![Under Application Connections, change each setting as necessary, save your changes](_img/change-organization-access-policies/connections.png)

   [Need help?](faq-change-app-access.md#get-support)
