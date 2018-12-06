---
title: Authenticate access with personal access tokens
titleSuffix: Azure DevOps
ms.custom: seodec18
description: Use personal access tokens (PATs) as alternate passwords to authenticate access to Azure DevOps.
ms.prod: devops
ms.technology: devops-accounts
ms.assetid: d980d58e-4240-47c7-977c-baaa7028a1d8
ms.topic: conceptual
ms.manager: douge
ms.author: chcomley
author: chcomley
ms.date: 12/06/2018
monikerRange: '>= tfs-2017'
---

# Authenticate access with personal access tokens for Azure DevOps Services and TFS

[!INCLUDE [version-tfs-2017-through-vsts](../../_shared/version-tfs-2017-through-vsts.md)]

Personal access tokens essentially are alternate passwords that you create in a secure way by using your normal authentication. PATs can have expiration dates, limited scopes (for example, only certain REST APIs or command-line operations are valid), and specific organizations. You can put them in environment variables so that scripts don't hard code passwords. For more information, see [Authentication overview](../../repos/git/auth-overview.md) and [Scopes](../../integrate/get-started/authentication/oauth.md#scopes).

Azure DevOps Services and Team Foundation Server (TFS) use enterprise-grade authentication, backed by a Microsoft account or Azure Active Directory (Azure AD), to help protect and secure your data. Clients like Visual Studio and Eclipse (with the Team Explorer Everywhere plug-in)
natively support Microsoft account and Azure AD authentication, so you can directly use those authentication methods to sign in.

For non-Microsoft tools that integrate into Azure DevOps Services but do not support Microsoft account or Azure AD authentication
interactions (for example, Git, NuGet, or Xcode), you need to set up personal access tokens (PATs). You set up PATs by using [Git credential managers](../../repos/git/set-up-credential-managers.md) or by creating them manually. You can also use personal access tokens when there is no "pop- up UI," such as with command-line tools, integrating tools or tasks into build pipelines, or using [REST APIs](../../integrate/get-started/rest/basics.md).

[!INCLUDE [personal-access-tokens-procedure](../../repos/git/_shared/personal-access-tokens.md)]

## Using PATs

For examples of using PATs, see [Git credential managers](../../repos/git/set-up-credential-managers.md), [REST APIs](../../integrate/get-started/rest/basics.md), [NuGet on a Mac](../../artifacts/nuget/consume.md#mac-os), and [Reporting clients](../../report/analytics/client-authentication-options.md#enter-credentials-within-a-client).

## Frequently asked questions  

### What is my Azure DevOps Services URL?

https://dev.azure.com/{yourorganization}

### What notifications might I receive about my PAT?

Users receive two notifications during the lifetime of a PAT, one at creation and the other 7 days approaching the expiration.

The following notification is sent at PAT creation:

![PAT creation notification](_img/use-personal-access-tokens-to-authenticate/PAT-creation.png)

The following notification is sent - a PAT is nearing expiration:

![PAT nearing expiration notification](_img/use-personal-access-tokens-to-authenticate/PAT-expiration.png)

### What do I do if I believe that someone other than me is creating access tokens on my organization?

If you get a notification that a PAT was created and you don't know what caused this, keep in mind that some actions can automatically create a PAT on your behalf. For example:

- Connecting to an Azure DevOps Services Git repo through git.exe. This creates a token with a display name like "git: https://MyOrganization.visualstudio.com/ on MyMachine."
- Setting up an Azure App Service web app deployment. This creates a token with a display name like "Service Hooks :: Azure App Service :: Deploy web app."
- Setting up web load testing as part of a pipeline. This creates a token with a display name like "WebAppLoadTestCDIntToken."
- Setting up Microsoft Teams Integration Messaging Extension. This creates a token with a display name like "Microsoft Teams Integration".

If you still believe that a PAT was created in error, we suggest [revoking the PAT](../../integrate/get-started/authentication/PATs.md). The next step is to investigate whether your password has been compromised. Changing your password is a good first step to defend against this attack vector. If you’re an Azure Active Directory user, talk with your administrator to check if your organization was used from an unknown source or location.  
