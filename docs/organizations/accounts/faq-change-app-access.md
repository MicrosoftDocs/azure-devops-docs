---
title: Change app access policies for your VSTS account
description: Answers to frequently asked questions (FAQs), like what apps integrate with VSTS, how personal access tokens differ from alt authentication credentials and more
ms.prod: devops
ms.technology: devops-accounts
ms.assetid: 25b0a617-6d77-44d7-80a5-bf38a541817e
ms.topic: conceptual
ms.manager: douge
ms.author: chcomley
author: chcomley
ms.date: 10/6/2017
monikerRange: 'vsts'
---
#   Troubleshoot changing app access policies for your account

**VSTS**

<a name="Oauth"></a>

####Q:   How do personal access tokens differ from alternate authentication credentials?

A:  Personal access tokens are a more convenient and 
secure replacement for alternate authentication credentials. 
You can limit a token's use to a specific lifetime, 
a VSTS account, 
and to [scopes](https://visualstudio.microsoft.com/integrate/get-started/Authentication/oauth#scopes) 
of activities that the token authorizes. Learn more about 
[personal access tokens here](use-personal-access-tokens-to-authenticate.md).

####Q:  If I deny access to one authentication method in one VSTS account, does that affect all the accounts I own?

A:  No, you can still use that method in all the other VSTS accounts that you own. 
[Personal access tokens](use-personal-access-tokens-to-authenticate.md) apply to specific accounts 
or to all accounts, based on your selection when you created the token.

####Q:  If I deny access to an authentication method, then allow access again, will the apps that need access continue to work?

A:  Yes, those apps will continue working.

####Q:  What apps integrate with VSTS?

A:  Find the [apps that integrate with VSTS here](https://marketplace.visualstudio.com/VSTS).

<a name="find-owner"></a>

[!INCLUDE [find-account-owner](../../_shared/qa-find-account-owner.md)]

[!INCLUDE [why-no-owned-accounts](../../_shared/qa-why-no-owned-accounts.md)]

<a name="ChooseOrgAcctMSAcct"></a>

[!INCLUDE [choose-msa-azuread-account](../../_shared/qa-choose-msa-azuread-account.md)]

[!INCLUDE [choose-msa-azuread-account2](../../_shared/qa-choose-msa-azuread-account2.md)]

[!INCLUDE [why-cant-sign-in-msa-azuread-account](../../_shared/qa-why-cant-sign-in-msa-azuread-account.md)]

<a name="get-support"></a>

[!INCLUDE [get-team-services-support](../../_shared/qa-get-vsts-support.md)]
