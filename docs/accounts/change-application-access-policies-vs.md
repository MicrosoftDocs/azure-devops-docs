---
title: Change app access policies | Visual Studio Team Services
description: Change app access policies for Visual Studio Team Services (VSTS, Visual Studio Online, VSO)
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
ms.assetid: 2fdfbfe2-b9b2-4d61-ad3e-45f11953ef3e
ms.manager: douge
ms.author: estfan
ms.date: 08/04/2016
---

#   Change application access policies for your account

**Team Services**

Visual Studio Team Services offers the capability for other apps 
to integrate with its services and resources in your Team Services account. 
To access your account without asking for user credentials multiple times, 
apps can use these authentication methods:

*	[OAuth](../integrate/get-started/Authentication/oauth.md) 
to generate tokens for accessing [REST APIs for Team Services and Team Foundation Server](../integrate/get-started/rest/basics.md). 
The [Accounts](../integrate/api/shared/accounts.md) 
and [Profiles](../integrate/api/shared/profiles.md) 
APIs support only OAuth.

*	[Alternate credentials](../git/auth-overview.md#alternate-credentials) 
as a single set of credentials across all tools that don't have 
plug-in, extension, or native support. For example, 
you can use basic authentication to access 
[REST APIs for Team Services and TFS](../integrate/get-started/rest/basics.md), 
but you must turn on alternate credentials.

*	[SSH authentication](../git/use-ssh-keys-to-authenticate.md) 
to generate encryption keys when you use Linux, Mac, 
or Windows running [Git for Windows](http://www.git-scm.com/download/win) 
and can't use 
[Git credential managers](../git/set-up-credential-managers.md) 
or [personal access tokens](use-personal-access-tokens-to-authenticate.md) 
for HTTPS authentication.

*	[Personal access tokens](use-personal-access-tokens-to-authenticate.md) 
to generate tokens for: 

	*	Accessing specific resources or activities, like builds or work items
	*	Clients like Xcode and Nuget that require usernames and passwords 
		as basic credentials and don't support Microsoft account 
		and Azure Active Directory features like multi-factor authentication 
	*	Accessing [REST APIs for Team Services and TFS](../integrate/get-started/rest/basics.md)

By default, your Team Services account allows access for all authentication methods. 
You can limit access, but you must specifically restrict access for each method. 
When you deny access to an authentication method, 
no app can use that method to access your account. 
Any app that previously had access will get an 
authentication error and can't access your account.

> To remove access for personal access tokens, 
> you must [revoke them](use-personal-access-tokens-to-authenticate.md).

To continue, you'll need at least Basic access and Team Services account owner permissions. 
[How do I find the account owner?](#find-owner)

0.  Sign in as the account owner to your Visual Studio Team Services account (```https://{youraccount}.visualstudio.com```).

	[Why am I asked to choose between my work or school account and my personal account?](#ChooseOrgAcctMSAcct)

0.	From your account toolbar, go to **Settings**.

    ![Click the gear icon, go to Settings](../_shared/_img/account-settings-new-ui.png)

0.  Review your application connection settings. 
Change these settings, based on your security policies.

    ![Under Application Connections, change each setting as necessary, save your changes](_img/change-account-access-policies/connections.png)

	[Need help?](#get-support)

## Q&A

<!-- BEGINSECTION class="md-qanda" -->

<a name="Oauth"></a>
####Q:   How do personal access tokens differ from alternate authentication credentials?

A:  Personal access tokens are a more convenient and 
secure replacement for alternate authentication credentials. 
You can limit a token's use to a specific lifetime, 
a Visual Studio Team Services account, 
and to [scopes](https://www.visualstudio.com/integrate/get-started/Authentication/oauth#scopes) 
of activities that the token authorizes. Learn more about 
[personal access tokens here](use-personal-access-tokens-to-authenticate.md).

####Q:  If I deny access to one authentication method in one Visual Studio Team Services account, does that affect all the accounts I own?

A:  No, you can still use that method in all the other Visual Studio Team Services accounts that you own. 
[Personal access tokens](use-personal-access-tokens-to-authenticate.md) apply to specific accounts 
or to all accounts, based on your selection when you created the token.

####Q:  If I deny access to an authentication method, then allow access again, will the apps that need access continue to work?

A:  Yes, those apps will continue working.

####Q:  What apps integrate with Visual Studio Team Services?

A:  Find the [apps that integrate with Visual Studio Team Services here](https://marketplace.visualstudio.com/VSTS).

<a name="find-owner"></a>

[!INCLUDE [find-account-owner](../_shared/qa-find-account-owner.md)]

[!INCLUDE [why-no-owned-accounts](../_shared/qa-why-no-owned-accounts.md)]

<a name="ChooseOrgAcctMSAcct"></a>

[!INCLUDE [choose-msa-azuread-account](../_shared/qa-choose-msa-azuread-account.md)]

[!INCLUDE [choose-msa-azuread-account2](../_shared/qa-choose-msa-azuread-account2.md)]

[!INCLUDE [why-cant-sign-in-msa-azuread-account](../_shared/qa-why-cant-sign-in-msa-azuread-account.md)]

<a name="get-support"></a>

[!INCLUDE [get-team-services-support](../_shared/qa-get-vsts-support.md)]

<!-- ENDSECTION --> 