---
title: Troubleshoot setting up Visual Studio - Azure DevOps
titleSuffix: Azure DevOps Services
ms.custom: seodec18
description: Having problems installing Visual Studio, signing in, creating an organization, or handling an expired subscription? Learn answers to these frequently asked questions (FAQs). 
ms.prod: devops
ms.technology: devops-accounts
ms.assetid: 985fcb48-0d9e-44ef-811d-7178df1cb09b
ms.topic: conceptual
ms.manager: jillfra
ms.author: chcomley
author: chcomley
ms.date: 12/06/2018
monikerRange: 'azure-devops'
---

# Troubleshoot setting up Visual Studio with Azure DevOps

[!INCLUDE [version-vsts-only](../../_shared/version-vsts-only.md)]

## Visual Studio

<a name="why-sign-in"></a>

#### Q: Why sign in?

A:	Your Visual Studio settings, 
like automatic brace completion, 
are saved with your profile. 
These settings roam with your [personal Microsoft account](https://www.microsoft.com/account), 
or your [work or school account](https://azure.microsoft.com/documentation/articles/sign-up-organization/), 
when you sign in to Visual Studio on any computer. 

Sign in to Visual Studio during the 30-day 
trial period for these benefits:

*	Visual Studio Enterprise: Extend your trial for 90 days. When your trial expires, 
learn [how to unlock Visual Studio](https://msdn.microsoft.com/library/dn950037.aspx).
*	Visual Studio Express or Community: Continue to use this edition for free.

When you create your profile, 
you can also create an organization.

Learn more about 
[the benefits of signing in and creating a profile](https://msdn.microsoft.com/library/dn457348.aspx). 

<a name="cannot-sign-in"></a>

#### Q: Why can't I sign in?

A:	To create a profile and save your settings, 
you'll need to sign in with a [personal Microsoft account](https://www.microsoft.com/account) 
or a [work or school account](https://azure.microsoft.com/documentation/articles/sign-up-organization/) 
that's managed by Azure Active Directory.

<a name="vs-versions"></a>

[!INCLUDE [visual-studio-versions](../../_shared/qa-visual-studio-versions.md)]

#### Q: Can I use Visual Studio 2015 with Visual Studio 2013 and 2012 on the same computer?

A:	Yes, you can run all these versions on the same computer.

#### Q:	My subscription expired. What do I do?

A:	Here's [how to unlock Visual Studio](https://msdn.microsoft.com/library/dn950037.aspx). 
If you're having subscription problems, 
try [Subscription Support](https://visualstudio.microsoft.com/support/subscription-support-vs).

#### Q:	I'm having problems installing or signing in to Visual Studio. How do I get help? 

A:	Learn more about:

*	[Installing Visual Studio](https://msdn.microsoft.com/library/e2h7fzkw.aspx).
*	[Signing in to Visual Studio](https://msdn.microsoft.com/library/dn457348.aspx).
*	[Managing multiple user organizations](https://msdn.microsoft.com/library/dn872465.aspx).

Or contact [Visual Studio Support](https://visualstudio.microsoft.com/support/support-overview-vs). 

## Azure DevOps Services

<a name="WhatIsVSO"></a>

#### Q: How can I create an organization later?

A:	Learn how to [sign up for Azure DevOps](create-organization.md).

<a name="browser-problems"></a>

[!INCLUDE [browser-problems](../../_shared/qa-browser-problems.md)]

[!INCLUDE [find-organization-name](../../_shared/qa-find-organization-name.md)]

[!INCLUDE [recover-password](../../_shared/qa-recover-password.md)]

<a name="change-location"></a>

#### Q: Can I change my organization location?

A:	Yes. For a better experience, 
you can change your organization's location during sign-up
so that your organization is closest to most users.

![Change organization location](_img/set-up-vs/change-location.png)

Your organization's default location is selected based on the closest 
[Microsoft Azure region](https://azure.microsoft.com/regions) 
where Azure DevOps is available.

[!INCLUDE [secure-protect-data](../../_shared/qa-secure-protect-data.md)]

[!INCLUDE [team-services-sla](../../_shared/qa-vsts-sla.md)]

[!INCLUDE [change-organization-name-owner](../../_shared/qa-change-organization-name-owner.md)]

[!INCLUDE [delete-organization](../../_shared/qa-delete-organization.md)]

[!INCLUDE [get-team-services-support](../../_shared/qa-get-vsts-support.md)]
