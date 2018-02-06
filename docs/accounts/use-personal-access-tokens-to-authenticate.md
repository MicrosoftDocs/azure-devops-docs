---
title: Authenticate access with personal access tokens | VSTS & TFS
description: Use personal access tokens to authenticate access to VSTS and Team Foundation Server (TFS)
ms.prod: vs-devops-alm
ms.technology: vs-devops-setup
ms.assetid: d980d58e-4240-47c7-977c-baaa7028a1d8
ms.manager: douge
ms.author: chcomley
ms.date: 10/6/2017
---

# Authenticate access with personal access tokens for VSTS and TFS

**VSTS** | **TFS 2017**

Visual Studio Team Services (VSTS) and Team Foundation Server (TFS) use enterprise-grade authentication, 
backed by Microsoft account or Azure Active Directory (Azure AD), to protect and secure your data.  Clients 
like Visual Studio and 
Eclipse (with the Team Explorer Everywhere plug-in)
natively support Microsoft account and Azure AD authentication, so you can directly use those authentication methods 
to sign in. 

For non-Microsoft tools that integrate into VSTS but do not support Microsoft account or Azure AD authentication
interactions (for example, Git, NuGet, or Xcode), you need to set up personal access tokens by using 
[Git credential managers](../git/set-up-credential-managers.md) or by creating PATs manually (see below).  You can also use personal access tokens when there is no "pop up UI" such as with command-line tools, integrating tools or tasks into build pipelines, or using  [REST APIs](../integrate/get-started/rest/basics.md).

Personal access tokens essentially are alternate passwords that you create in a secure way using your normal authentication, 
and PATs can have expiration dates, limited scopes (for example, only certain REST APIs or command line operations are valid), 
and specific VSTS accounts.  You can put them into environment variables so that scripts do not hardcode 
passwords.  For more information, see [Authentication overview](../git/auth-overview.md) and  [scopes](../integrate/get-started/authentication/oauth.md#scopes).

[!INCLUDE [personal-access-tokens-procedure](../git/_shared/personal-access-tokens.md)]

## Using PATs

For example using PATs, see using [Git credential managers](../git/set-up-credential-managers.md), [REST APIs](../integrate/get-started/rest/basics.md), [NuGet on a Mac](../package/nuget/consume.md#mac-os), and 
[Reporting clients](../report/analytics/client-authentication-options.md#enter-credentials-within-a-client).
